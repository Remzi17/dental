import { openModal, closeModal } from "./modal.js";
import { fadeOut } from "../scripts/ui/animation.js";
import { scrollToSmoothly } from "../scripts/ui/scroll.js";
import { headerTop } from "../scripts/variables.js";
import { setCookie, getCookie } from "../scripts/core/cookies.js";

//
//
//
//
// Комментарии

export function comment() {
  //
  //
  //
  //
  // Общие настройки и данные

  const ajaxUrl = window.LIKE_DATA.ajaxUrl;
  const escapeHTML = (value) => {
    if (!value && value !== 0) return "";
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  };

  const currentUser = window.currentUser;

  const guestDataRaw = getCookie("comment_guest") || "{}";
  let guestData = {};

  try {
    guestData = JSON.parse(guestDataRaw);
  } catch {
    guestData = {};
  }

  const getCommentId = (commentEl) => {
    return parseInt(commentEl.id.replace("comment-", ""), 10);
  };

  //
  //
  // Обновление счётчика комментариев

  const updateCommentsUI = (front = false) => {
    const wrapper = document.querySelector(".comments__wrapper");
    const counter = document.querySelector(".comments__count");
    if (!wrapper || !counter) return;

    if (front) {
      counter.textContent = Math.max(0, Number(counter.textContent) - 1);
      return;
    }

    if (wrapper.querySelector(".bounceOutLeft")) return;

    counter.textContent = wrapper.querySelectorAll(".comment").length;
  };

  //
  //
  // Создание DOM комментария

  const createCommentElement = ({ id, author, text, avatar, date = "только что", time, fulltime, likes = 0, dislikes = 0, can_delete = false, show_reply = true }) => {
    const template = document.querySelector("#comment-template");
    if (!template) return null;
    const element = template.content.firstElementChild.cloneNode(true);
    element.id = `comment-${id}`;

    element.querySelector("[itemprop='discussionUrl']").setAttribute("content", `${window.location.href}#${element.id}`);
    element.querySelector("[itemprop='identifier']").setAttribute("content", element.id);
    element.querySelector("[data-author]").textContent = author;
    element.querySelector("[data-text]").innerHTML = `<p>${text}</p>`;

    const avatarEl = element.querySelector("[data-avatar]");
    if (avatarEl) {
      avatarEl.src = avatar;
      avatarEl.alt = avatarEl.alt + ` ${author}`;

      if (element.querySelector('[itemprop="image"]')) {
        element.querySelector('[itemprop="image"]').setAttribute("content", avatar);
      }
    }

    const dateEl = element.querySelector("[data-date]");

    function getCurrentDateTime(iso = false) {
      const now = new Date();

      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();

      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      if (iso) {
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
      } else {
        return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
      }
    }

    if (dateEl) {
      dateEl.textContent = date;
      dateEl.dataset.tooltip = time ? time : getCurrentDateTime();
      dateEl.setAttribute("datetime", fulltime ? fulltime : getCurrentDateTime(true));
    }

    const commentData = Array.isArray(window.commentsData) ? window.commentsData.find((c) => c.id === id) : null;

    const isDeleted = commentData?.is_deleted === true;
    const likeBtn = element.querySelector("[data-like]");
    const dislikeBtn = element.querySelector("[data-dislike]");
    const deleteBtn = element.querySelector("[data-delete]");
    const replyBtn = element.querySelector("[data-reply]");
    const editBtn = element.querySelector("[data-comment-edit]");
    const historyBtn = element.querySelector("[data-comment-history]");

    if (likeBtn) {
      likeBtn.dataset.commentId = id;
      likeBtn.querySelector("span").textContent = likes;
      likeBtn.classList.toggle("active", commentData?.is_own_like === true);
    }

    if (dislikeBtn) {
      dislikeBtn.dataset.commentId = id;
      dislikeBtn.querySelector("span").textContent = dislikes;
      dislikeBtn.classList.toggle("active", commentData?.is_own_dislike === true);
    }

    if (deleteBtn) {
      deleteBtn.dataset.commentId = id;

      const isEditorOrHigher = ["administrator", "editor"].includes(currentUser.role);

      if ((!can_delete && !isEditorOrHigher) || isDeleted) {
        deleteBtn.remove();
      }
    }

    if (editBtn) {
      const isEditorOrHigher = ["administrator", "editor"].includes(currentUser.role);

      if ((!can_delete && !isEditorOrHigher) || isDeleted) {
        editBtn.remove();
      }
    }

    if (historyBtn) {
      if (!commentData?.has_history) {
        historyBtn.hidden = true;
      } else {
        historyBtn.dataset.commentHistory = id;
      }
    }

    if (replyBtn && (!show_reply || (can_delete === false && author === ""))) {
      replyBtn.remove();
    }

    return element;
  };

  //
  //
  // Инициализация формы комментариев

  const initForm = (form) => {
    if (!form || form.dataset.formInitialized) return;
    form.dataset.formInitialized = "1";

    const authorInput = form.querySelector('[name="author"]');
    const emailInput = form.querySelector('[name="email"]');
    const submitButton = form.querySelector('button[type="submit"]');

    if (currentUser.id) {
      if (authorInput) authorInput.value = currentUser.name;
      if (emailInput) emailInput.value = currentUser.email;
    } else {
      if (authorInput && guestData.name) authorInput.value = guestData.name;
      if (emailInput && guestData.email) emailInput.value = guestData.email;
    }

    form.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        if (form.checkValidity()) form.requestSubmit();
      }
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (!submitButton) return;

      submitButton.disabled = true;

      try {
        const formData = new FormData(form);
        formData.append("action", "add_comment");

        const response = await fetch(ajaxUrl, {
          method: "POST",
          credentials: "same-origin",
          body: formData,
        });

        const data = await response.json().catch(() => null);
        const wrapper = document.querySelector(".comments__wrapper");
        const parentId = form.querySelector('[name="comment_parent"]')?.value || 0;
        const commentText = form.querySelector('[name="comment"]')?.value || "";

        if (data?.data?.approved) {
          const isEditorOrHigher = ["administrator", "editor"].includes(currentUser.role);

          const newComment = createCommentElement({
            id: data.data.comment_id,
            author: authorInput?.value || "",
            text: commentText,
            avatar: window.currentUser.avatar,
            can_delete: true,
            show_reply: isEditorOrHigher,
          });

          newComment.classList.add("bounceOutTop");

          if (parentId && parentId !== "0") {
            const parent = document.querySelector(`#comment-${parentId}`);
            parent?.querySelector(".comment__content")?.appendChild(newComment);
          } else {
            wrapper?.append(newComment);
          }

          const rect = newComment.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const elementHeight = rect.height;
          const visibleFromBottom = viewportHeight - rect.top;
          const visibleRatio = visibleFromBottom / elementHeight;

          if (visibleRatio < 0.2) {
            const stickyBottomOffset = headerTop.offsetHeight + document.querySelector(".comment-add").offsetHeight;
            const offset = 8;
            const targetPos = rect.top + window.pageYOffset - viewportHeight + elementHeight + stickyBottomOffset + offset;

            scrollToSmoothly(targetPos, 400);
          }

          setTimeout(() => {
            newComment.classList.remove("bounceOutTop");
          }, 500);
        }

        if (!currentUser.id) {
          const guest = {
            name: authorInput?.value || "",
            email: formData.get("email") || "",
          };

          setCookie("comment_guest", JSON.stringify(guest));

          if (authorInput) authorInput.value = guest.name;
          if (emailInput) emailInput.value = guest.email;
        }

        form.reset();

        updateCommentsUI();

        notify(data?.data?.approved ? "Комментарий добавлен" : "Отправлено на модерацию", "", "success");
      } catch {
        notify("Ошибка сети", "", "danger");
      } finally {
        submitButton.disabled = false;

        document.querySelectorAll(".comment-add").forEach((formEl) => {
          if (!formEl.closest(".comments__top")) {
            formEl.remove();
          }
        });
      }
    });
  };

  document.querySelectorAll(".comment-add").forEach(initForm);

  //
  //
  // Ответы на комментарии

  document.addEventListener("click", (e) => {
    const button = e.target.closest(".comment__reply");
    if (!button) return;

    const comment = button.closest(".comment");
    if (!comment) return;

    const existingForm = comment.querySelector(".comment-add");

    if (existingForm) {
      existingForm.classList.remove("active");

      setTimeout(() => {
        existingForm.remove();
      }, 400);

      return;
    }

    document.querySelectorAll(".comment-add").forEach((form) => {
      if (!form.closest(".comments__top")) form.remove();
    });

    const isAuthorized = window.currentUser?.id > 0;
    const hasGuestCookie = Boolean(getCookie("comment_guest"));
    const showGuestFields = !isAuthorized && !hasGuestCookie;
    const commentId = comment.id.replace("comment-", "");
    const postId = document.querySelector("#comment_post_ID")?.value || "";

    const guestFields = showGuestFields
      ? `
      <input class="input" type="text" name="author" placeholder="Ваше имя" required>
      <input class="input" type="email" name="email" placeholder="Ваш email" required>
    `
      : "";

    const html = `
      <form class="form comment-add">
        <input type="hidden" name="comment_post_ID" value="${escapeHTML(postId)}">
        <input type="hidden" name="comment_parent" value="${escapeHTML(commentId)}">

        <div class="comment-add__row" data-columns="full">
          ${guestFields}
          <textarea
            name="comment"
            class="textarea"
            placeholder="Ответ"
            required
            data-columns="full"
          ></textarea>
          <button type="submit" class="button comment-add__button" aria-label="Оставить ответ на комментарий"></button>
        </div>
      </form>
    `;

    comment.querySelector(".comment__meta")?.insertAdjacentHTML("afterend", html);

    const newForm = comment.querySelector(".comment-add");

    requestAnimationFrame(() => {
      newForm.classList.add("active");
    });

    initForm(newForm);
    newForm?.querySelector("textarea")?.focus();
  });

  //
  //
  // Рендер комментариев с сервера

  if (Array.isArray(window.commentsData) && window.commentsData.length) {
    const wrapper = document.querySelector(".comments__wrapper");
    wrapper.innerHTML = "";

    const commentsMap = new Map();

    window.commentsData.forEach((comment) => {
      const isOwnComment = comment.is_own || (currentUser.id === 0 && guestData.email && comment.email && guestData.email === comment.email);
      const isDeleted = comment.is_deleted;
      const element = createCommentElement({
        id: comment.id,
        author: comment.author,
        text: comment.text.replace(/<br\s*\/?>/gi, "\n"),
        avatar: comment.avatar,
        date: comment.date,
        time: comment.time,
        fulltime: comment.fulltime,
        likes: comment.likes,
        dislikes: comment.dislikes,
        can_delete: isOwnComment && !isDeleted,
        show_reply: !isOwnComment && !isDeleted,
      });

      if (!element) return;

      if (isDeleted) {
        element.classList.add("comment_deleted");
        element.querySelectorAll(".comment__like, .comment__dislike").forEach((btn) => {
          btn.classList.add("disabled");
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
          });
        });
      }

      commentsMap.set(comment.id, { data: comment, el: element });
    });

    // Раскладываем по родителям
    commentsMap.forEach(({ data, el }) => {
      if (data.parent && commentsMap.has(data.parent)) {
        const parentEl = commentsMap.get(data.parent).el;
        parentEl.querySelector(".comment__content")?.appendChild(el);
      } else {
        wrapper.appendChild(el);
      }
    });

    updateCommentsUI();
  }

  //
  //
  // Лайки и дизлайки

  const handleReaction = async (button, type, action) => {
    if (!button) return;

    const container = button.closest(".gray-text");
    if (!container) return;

    const likeBtn = container.querySelector(".comment__like");
    const dislikeBtn = container.querySelector(".comment__dislike");

    button.disabled = true;

    try {
      const formData = new FormData();
      formData.append("action", `${action}_${type}`);
      formData.append("nonce", LIKE_DATA.nonce.like);
      formData.append("comment_id", button.dataset.commentId);

      const response = await fetch(ajaxUrl, { method: "POST", body: formData });
      const data = await response.json().catch(() => null);

      if (!data?.success) return;

      if (data.data.likes !== undefined) {
        likeBtn.querySelector("span").textContent = data.data.likes;
      }

      if (data.data.dislikes !== undefined) {
        dislikeBtn.querySelector("span").textContent = data.data.dislikes;
      }

      if (action === "like") {
        likeBtn.classList.toggle("active", data.data.active);
        dislikeBtn.classList.remove("active");
      } else {
        dislikeBtn.classList.toggle("active", data.data.active);
        likeBtn.classList.remove("active");
      }
    } finally {
      button.disabled = false;
    }
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".comment__like, .comment__dislike");
    if (!btn) return;
    e.preventDefault();

    handleReaction(btn, "comment", btn.classList.contains("comment__like") ? "like" : "dislike");
  });

  //
  //
  // Удаление комментариев

  const deleteComment = async (button) => {
    const comment = button.closest(".comment");
    if (!comment || comment.classList.contains("is-deleting")) return;

    button.disabled = true;
    comment.classList.add("is-deleting");

    try {
      const formData = new FormData();
      formData.append("action", "delete_comment");
      formData.append("comment_id", button.dataset.commentId);
      formData.append("guest_email", guestData.email || "");
      formData.append("nonce", LIKE_DATA.nonce.delete);

      const response = await fetch(ajaxUrl, { method: "POST", body: formData });
      const data = await response.json().catch(() => null);

      if (!data?.success) {
        notify("Не удалось удалить комментарий", "", "danger", false);
        return;
      }

      comment.querySelector(".comment__delete")?.remove();

      if (data.data.action === "deleted") {
        comment.classList.add("bounceOutLeft");
        notify("Комментарий удален", "", "info");

        updateCommentsUI(true);

        setTimeout(() => {
          const parent = comment.closest(".comment")?.parentElement?.closest(".comment");
          comment.remove();
          updateCommentsUI();

          if (parent?.classList.contains("comment_deleted")) {
            const repliesLeft = parent.querySelectorAll(":scope > .comment__content > .comment").length;
            if (!repliesLeft) {
              parent.classList.add("bounceOutLeft");
              setTimeout(() => {
                parent.remove();
                updateCommentsUI();
              }, 200);
            }
          }
        }, 600);
      }

      if (data.data.action === "hidden") {
        comment.querySelector(".comment__text").innerHTML = '<em class="gray-text">Комментарий удален</em>';

        comment.querySelectorAll(".comment__like, .comment__dislike").forEach((b) => {
          b.classList.add("disabled");
          b.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
          });
        });

        comment.querySelector("[data-reply]")?.remove();
        comment.classList.add("comment_deleted");

        updateCommentsUI();
      }
    } catch {
      notify("Ошибка удаления", "", "danger", false);
    } finally {
      button.disabled = false;
      comment.classList.remove("is-deleting");
    }
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".comment__delete");
    if (btn) deleteComment(btn);
  });

  //
  //
  //
  //
  // Редактирование комментариев

  // Изменение
  const enableEdit = (comment) => {
    if (comment.classList.contains("is-editing")) return;

    const text = comment.querySelector("[data-text]");
    if (!text) return;

    comment.dataset.originalText = text.innerHTML;

    text.contentEditable = "true";
    text.focus();

    const range = document.createRange();
    range.selectNodeContents(text);
    range.collapse(false);

    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    comment.classList.add("is-editing");

    const actions = comment.querySelector("[data-comment-edit-actions]");
    if (actions) actions.classList.add("active");
  };

  // Отмена
  const cancelEdit = (comment) => {
    const text = comment.querySelector("[data-text]");
    if (!text) return;

    text.innerHTML = comment.dataset.originalText;
    text.contentEditable = "false";

    comment.classList.remove("is-editing");

    const actions = comment.querySelector("[data-comment-edit-actions]");
    if (actions) actions.classList.remove("active");

    delete comment.dataset.originalText;
  };

  // Очистка от тегов
  const normalizeContent = (html = "") => {
    return html
      .replace(/<div><br><\/div>/g, "")
      .replace(/<div>/g, "<p>")
      .replace(/<\/div>/g, "</p>")
      .replace(/&nbsp;/g, " ")
      .trim();
  };

  // Сохранение
  const saveEdit = async (comment, commentId) => {
    const textEl = comment.querySelector("[data-text]");
    if (!textEl) return;

    const newText = normalizeContent(textEl.innerHTML);
    if (!newText) {
      cancelEdit(comment);
      return;
    }

    try {
      const res = await fetch(ajaxUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          action: "edit_comment",
          comment_id: commentId,
          text: newText,
        }),
      });

      const json = await res.json();
      if (!json.success) throw new Error(json.data || "Ошибка сохранения");

      finishEdit(comment, newText);
    } catch (e) {
      console.error(e);
      cancelEdit(comment);
    }
  };

  // Обновление
  const finishEdit = (comment, html) => {
    const text = comment.querySelector("[data-text]");
    if (!text) return;

    text.innerHTML = html;
    text.contentEditable = "false";

    comment.classList.remove("is-editing");

    const actions = comment.querySelector("[data-comment-edit-actions]");
    if (actions) actions.classList.remove("active");

    delete comment.dataset.originalText;

    const historyBtn = comment.querySelector("[data-comment-history]");
    if (historyBtn) historyBtn.hidden = false;
  };

  // Горячие клавиши
  document.addEventListener("keydown", (e) => {
    const comment = document.querySelector(".comment.is-editing");
    if (!comment) return;

    if (e.key === "Escape") cancelEdit(comment);

    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      saveEdit(comment, getCommentId(comment));
    }
  });

  //
  //
  //
  //
  // История версий

  const openHistory = async (comment) => {
    const commentId = getCommentId(comment);
    if (!commentId) return;

    try {
      const res = await fetch(ajaxUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          action: "get_comment_history",
          comment_id: commentId,
        }),
      });

      const json = await res.json();
      if (!json.success) throw new Error(json.data);

      const { history, can_restore } = json.data;
      if (!history.length) {
        alert("История версий пустая");
        return;
      }

      const modal = document.querySelector(".modal-comment-history");
      const content = modal.querySelector(".modal-comment-history__content");

      content.innerHTML = `
				<div class="table">
					<table>
						<thead>
							<tr>
								<th>Редактор</th>
								<th>Дата</th>
								<th>Комментарий</th>
								${can_restore ? "<th></th>" : ""}
							</tr>
						</thead>
						<tbody>
							${history
                .map(
                  (h, i) => `
								<tr>
									<td>${h.editor_name || "Гость"}</td>
									<td>${h.date}</td>
									<td>${h.text}</td>
									${
                    can_restore
                      ? `
										<td>
											<button
												class="button button_mini modal-comment-restore"
												data-comment-id="${h.comment_id}"
												data-version-index="${i}"
												type="button">
												Восстановить
											</button>
										</td>
									`
                      : ""
                  }
								</tr>
							`
                )
                .join("")}
						</tbody>
					</table>
				</div>
			`;

      openModal(modal, false);

      setTimeout(() => {
        content.querySelector(".table").scrollLeft = 0;
      }, 10);
    } catch (e) {
      console.error(e);
      alert("Ошибка загрузки истории");
    }
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".modal-comment-restore");
    if (!btn) return;

    const tr = btn.closest("tr");
    const text = tr.querySelector("td:nth-child(3)")?.innerHTML;

    const comment = document.querySelector(`#comment-${btn.dataset.commentId}`);
    if (!comment) return;

    const textEl = comment.querySelector("[data-text]");
    if (textEl) textEl.innerHTML = text;

    fadeOut(document.querySelector(".modal-comment-history"));
    enableEdit(comment);
  });

  //
  //
  //
  //
  // Жалоба

  const openReport = async (comment) => {
    const commentId = getCommentId(comment);
    if (!commentId) return;

    const modal = document.querySelector(".modal-comment-report");
    openModal(modal, false);

    modal.querySelector("form").addEventListener("submit", (e) => submitReport(e, commentId));
  };

  const submitReport = async (e, commentId) => {
    e.preventDefault();

    const modal = document.querySelector(".modal-comment-report");
    const form = e.target;
    const text = form.querySelector("textarea").value.trim();
    if (!text) return;

    const res = await fetch(ajaxUrl, {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        action: "add_comment_report",
        comment_id: commentId,
        text,
      }),
    });

    const json = await res.json();

    if (!json.success) {
      notify("Жалоба отклонена", "Вы уже отправляли жалобу", "danger");
      closeModal(modal);
      return;
    }

    closeModal(modal);
    notify("Жалоба отправлена", "", "success");
  };

  //
  //
  //
  //
  // События

  document.addEventListener("click", (e) => {
    const target = e.target;

    const comment = target.closest(".comment");
    if (!comment) return;

    // Редактирование
    if (target.closest("[data-comment-edit]")) {
      enableEdit(comment);
      return;
    }

    if (target.closest("[data-cancel-edit]")) {
      cancelEdit(comment);
      return;
    }

    if (target.closest("[data-save-edit]")) {
      saveEdit(comment, getCommentId(comment));
      return;
    }

    // История версий
    if (target.closest("[data-comment-history]")) {
      openHistory(comment);
      return;
    }

    // Жалоба
    if (target.closest("[data-comment-report]")) {
      openReport(comment);
      return;
    }

    // Поделиться
    const shareBtn = target.closest("[data-comment-share]");
    if (shareBtn) {
      navigator.clipboard.writeText(`${window.location.href}#${comment.id}`);

      shareBtn.closest("[data-context]")?.classList.remove("active");
      shareBtn.closest("[data-context-menu]")?.classList.remove("active");

      notify("Скопировано", "Ссылка на комментарий скопирована в буфер обмена", "success");
    }
  });
}
