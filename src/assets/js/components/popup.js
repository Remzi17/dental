import { body, bodyOpenModalClass } from "../scripts/variables";
import { hideScrollbar, showScrollbar } from "../scripts/ui/scrollbar";
import { getHash } from "../scripts/ui/url";
import { clearInputs } from "../scripts/forms/validation";

/* 
	================================================
	  
	Попапы
	
	================================================
*/

window.openModal = (popupId, dataTab, addHash = true) => {
  const popup = document.getElementById(popupId);
  if (!popup) return;

  // Удалить хеш текущего попапа
  if (getHash() && !document.querySelector(`[data-modal][data-modal="${popupId}"]`)?.hasAttribute("data-modal-not-hash")) {
    history.pushState("", document.title, (window.location.pathname + window.location.search).replace(getHash(), ""));
  }

  hideScrollbar();
  body.classList.add(bodyOpenModalClass);

  // Добавить хеш нового попапа
  if (!window.location.hash.includes(popupId) && !document.querySelector(`[data-modal][data-modal="${popupId}"]`)?.hasAttribute("data-modal-not-hash") && addHash) {
    window.location.hash = popupId;
  }

  fadeIn(popup, true);

  popup.classList.remove("popup_close");
  popup.classList.add("popup_open");

  // открыть таб в попапе
  if (dataTab) {
    document.querySelector(`[data-href="#${dataTab}"]`)?.click();
  }
};

export function popup() {
  const modalButtons = document.querySelectorAll("[data-modal]");
  const popupDialogs = document.querySelectorAll(".popup__dialog");

  document.querySelectorAll("[data-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      const [dataModal, dataTab] = button.getAttribute("data-modal").split("#");
      openModal(dataModal, dataTab);
    });
  });

  // Открытие модалки по хешу
  window.addEventListener("load", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => openModal(hash), 500);
    }
  });

  //
  //
  // Закрытие модалок

  function closeModal(popup, removeHashFlag = true) {
    if (!popup) return;

    popup.classList.remove("popup_open");
    popup.classList.add("popup_close");

    setTimeout(() => {
      fadeOut(popup, true);
      modalButtons.forEach((button) => (button.disabled = true));
      body.classList.remove(bodyOpenModalClass);

      setTimeout(() => {
        let modalInfo = document.querySelector(".popup-info");
        if (modalInfo) modalInfo.value = "";

        showScrollbar();
        modalButtons.forEach((button) => (button.disabled = false));
      }, 400);

      if (removeHashFlag && getHash() == popup.id) {
        history.pushState("", document.title, window.location.pathname + window.location.search);
      }

      clearInputs();
    }, 200);
  }

  // Закрытие модалки при клике на крестик
  document.querySelectorAll("[data-popup-close]").forEach((element) => {
    element.addEventListener("click", () => closeModal(element.closest(".popup")));
  });

  // Закрытие модалки при клике вне области контента
  window.addEventListener("click", (e) => {
    popupDialogs.forEach((popup) => {
      if (e.target === popup) {
        closeModal(popup.closest(".popup"));
      }
    });
  });

  // Закрытие модалки при клике ESC
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.querySelectorAll(".lg-show").length === 0) {
      closeModal(document.querySelector(".popup_open"));
    }
  });

  // Навигация назад/вперёд
  let isAnimating = false;

  window.addEventListener("popstate", async () => {
    if (isAnimating) {
      await new Promise((resolve) => {
        const checkAnimation = () => {
          if (!document.body.classList.contains("_fade")) {
            resolve();
          } else {
            setTimeout(checkAnimation, 50);
          }
        };
        checkAnimation();
      });
    }

    const hash = window.location.hash.replace("#", "");
    const popup = hash ? document.querySelector(`.popup[id="${hash}"]`) : null;
    const openedPopup = document.querySelector(".popup_open");

    if (hash && popup) {
      hideScrollbar();
      isAnimating = true;
      await fadeIn(popup, true);

      popup.classList.remove("popup_close");
      popup.classList.add("popup_open");

      isAnimating = false;
    } else if (!hash && openedPopup) {
      isAnimating = true;
      await closeModal(openedPopup, false);
      isAnimating = false;
    }
  });
}
