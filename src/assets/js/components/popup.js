import { body, bodyOpenModalClass } from "../scripts/variables";
import { hideScrollbar, showScrollbar } from "../scripts/ui/scrollbar";
import { fadeIn, fadeOut } from "../scripts/ui/animation";
import { getHash } from "../scripts/ui/url";
import { clearInputs } from "../scripts/forms/validation";

/* 
	================================================
	  
	Попапы
	
	================================================
*/

export function popup() {
  const modalButtons = document.querySelectorAll("[data-modal]");
  const popupDialogs = document.querySelectorAll(".popup__dialog");

  document.querySelectorAll("[data-modal]").forEach((button) => {
    button.addEventListener("click", function () {
      let [dataModal, dataTab] = button.getAttribute("data-modal").split("#");

      let popup = document.getElementById(dataModal);
      if (!popup) return;

      // Удалить хеш текущего попапа
      if (getHash() && !button.hasAttribute("data-modal-not-hash")) {
        history.pushState("", document.title, (window.location.pathname + window.location.search).replace(getHash(), ""));
      }

      hideScrollbar();

      body.classList.add(bodyOpenModalClass);

      // Добавить хеш нового попапа
      if (!window.location.hash.includes(dataModal) && !button.hasAttribute("data-modal-not-hash")) {
        window.location.hash = dataModal;
      }

      fadeIn(popup, true);

      popup.classList.remove("popup_close");
      popup.classList.add("popup_open");

      // открыть таб в попапе
      if (dataTab) {
        document.querySelector(`[data-href="#${dataTab}"]`)?.click();
      }
    });
  });

  // Открытие модалки по хешу
  window.addEventListener("load", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const popup = document.querySelector(`.popup[id="${hash}"]`);
      if (popup) {
        setTimeout(() => {
          hideScrollbar();
          popup.classList.add("popup_open");
          fadeIn(popup, true);
        }, 500);
      }
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
