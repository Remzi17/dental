import { body, bodyOpenModalClass } from "../scripts/variables";
import { hideScrollbar, showScrollbar } from "../scripts/ui/scrollbar";
import { fadeIn, fadeOut } from "../scripts/ui/animation";
import { getHash } from "../scripts/ui/url";
import { clearInputs } from "../scripts/forms/validation";

/* 
  ================================================
	  
  Модалки
	
  ================================================
*/

// Открытие модалки
export function openModal(modal, addHashFlag = true, dataTab = null) {
  if (!modal) return;

  if (getHash() && addHashFlag) {
    history.pushState("", document.title, (window.location.pathname + window.location.search).replace(getHash(), ""));
  }

  hideScrollbar();

  body.classList.add(bodyOpenModalClass);

  if (!window.location.hash.includes(modal.id) && addHashFlag) {
    window.location.hash = modal.id;
  }

  fadeIn(modal);

  modal.classList.remove("modal_close");
  modal.classList.add("modal_open");

  if (dataTab) {
    document.querySelector(`[data-href="#${dataTab}"]`)?.click();
  }
}

// Закрытие модалки
export function closeModal(modal, removeHashFlag = true) {
  const modalButtons = document.querySelectorAll("[data-modal]");

  if (!modal) return;

  modal.classList.remove("modal_open");
  modal.classList.add("modal_close");

  modalButtons.forEach((button) => (button.disabled = true));
  body.classList.remove(bodyOpenModalClass);

  setTimeout(() => {
    fadeOut(modal);

    if (removeHashFlag && getHash() == modal.id) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }

    clearInputs();

    setTimeout(() => {
      const modalInfo = document.querySelector(".modal-info");
      if (modalInfo) modalInfo.value = "";

      showScrollbar();
      modalButtons.forEach((button) => (button.disabled = false));
    }, 400);
  }, 200);
}

export function modal() {
  const modalDialogs = document.querySelectorAll(".modal__dialog");

  document.querySelectorAll("[data-modal]").forEach((button) => {
    button.addEventListener("click", function () {
      let [dataModal, dataTab] = button.getAttribute("data-modal").split("#");

      let modal = document.getElementById(dataModal);
      if (!modal) return;

      openModal(modal, !button.hasAttribute("data-modal-not-hash"), dataTab);
    });
  });

  // Открытие модалки по хешу
  window.addEventListener("load", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const modal = document.querySelector(`.modal[id="${hash}"]`);
      if (modal) {
        setTimeout(() => {
          hideScrollbar();
          modal.classList.add("modal_open");
          fadeIn(modal);
        }, 500);
      }
    }
  });

  // Закрытие модалки при клике на крестик
  document.querySelectorAll("[data-modal-close]").forEach((element) => {
    element.addEventListener("click", () => closeModal(element.closest(".modal")));
  });

  // Закрытие модалки при клике вне области контента
  window.addEventListener("click", (e) => {
    modalDialogs.forEach((modal) => {
      if (e.target === modal) {
        closeModal(modal.closest(".modal"));
      }
    });
  });

  // Закрытие модалки при клике ESC
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.querySelectorAll(".lg-show").length === 0) {
      closeModal(document.querySelector(".modal_open"));
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
    const modal = hash ? document.querySelector(`.modal[id="${hash}"]`) : null;
    const openedModal = document.querySelector(".modal_open");

    if (hash && modal) {
      hideScrollbar();
      isAnimating = true;
      await fadeIn(modal);

      modal.classList.remove("modal_close");
      modal.classList.add("modal_open");

      isAnimating = false;
    } else if (!hash && openedModal) {
      isAnimating = true;
      await closeModal(openedModal, false);
      isAnimating = false;
    }
  });
}
