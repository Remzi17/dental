import "./scripts/init.js";
import "./components.js";

//
//
//
//
// Общие скрипты

//
//
// Слайдеры

// Врачи
if (document.querySelector(".doctor-container")) {
  let doctorSlider = new Swiper(".doctor-container", {
    // autoplay: {
    // 	delay: 4000,
    // 	pauseOnMouseEnter: true
    // },
    loop: true,
    resistanceRatio: 0,
    pagination: {
      el: ".doctor__pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".doctor__next",
      prevEl: ".doctor__prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    spaceBetween: 12,
    speed: 500,
    breakpoints: {
      1: {
        slidesPerView: 1,
        spaceBetween: 12,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}

// Как мы работаем
if (document.querySelector(".gallery-container")) {
  let gallerySlider = new Swiper(".gallery-container", {
    // autoplay: {
    // 	delay: 4000,
    // 	pauseOnMouseEnter: true
    // },
    resistanceRatio: 0,
    pagination: {
      el: ".gallery__pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".gallery__next",
      prevEl: ".gallery__prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    speed: 500,
    breakpoints: {
      1: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
      },
    },
  });
}

// Работы
if (document.querySelector(".work-container")) {
  let workSlider = new Swiper(".work-container", {
    loop: true,
    resistanceRatio: 0,
    pagination: {
      el: ".work__pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".work__next",
      prevEl: ".work__prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    speed: 500,
    breakpoints: {
      1: {
        slidesPerView: 1.3,
        spaceBetween: 12,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  const onPointerDown = (e) => {
    const splitview = e.target.closest("[data-splitview]");
    if (!splitview) return;

    workSlider.allowTouchMove = false;

    // Всегда берем input range из текущего активного слайда
    const activeSlide = workSlider.slides[workSlider.activeIndex];
    const range = activeSlide.querySelector('input[type="range"]');
    if (range) {
      range.focus();
    }
  };

  const onPointerUp = () => {
    workSlider.allowTouchMove = true;
  };

  document.addEventListener("pointerdown", onPointerDown, { capture: true });
  document.addEventListener("pointerup", onPointerUp, { capture: true });
  document.addEventListener("pointercancel", onPointerUp, { capture: true });
  document.addEventListener("mousedown", onPointerDown, { capture: true });
  document.addEventListener("mouseup", onPointerUp, { capture: true });
}

// Отзывы
if (document.querySelector(".feedback-container")) {
  let workSlider = new Swiper(".feedback-container", {
    loop: true,
    resistanceRatio: 0,
    watchOverflow: true,
    observer: false,
    observeParents: false,
    observeSlideChildren: false,
    pagination: {
      el: ".feedback__pagination",
      type: "bullets",
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    speed: 500,
    breakpoints: {
      1: {
        slidesPerView: 1.3,
        spaceBetween: 12,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  const onPointerDown = (e) => {
    const splitview = e.target.closest("[data-splitview]");
    if (!splitview) return;

    workSlider.allowTouchMove = false;

    // Всегда берем input range из текущего активного слайда
    const activeSlide = workSlider.slides[workSlider.activeIndex];
    const range = activeSlide.querySelector('input[type="range"]');
    if (range) {
      range.focus();
    }
  };

  const onPointerUp = () => {
    workSlider.allowTouchMove = true;
  };

  document.addEventListener("pointerdown", onPointerDown, { capture: true });
  document.addEventListener("pointerup", onPointerUp, { capture: true });
  document.addEventListener("pointercancel", onPointerUp, { capture: true });
  document.addEventListener("mousedown", onPointerDown, { capture: true });
  document.addEventListener("mouseup", onPointerUp, { capture: true });
}

// Читать полностью в отзывах
const feedbackWrapper = document.querySelector(".feedback .swiper-wrapper");
const popupReviews = document.querySelector(".popup-reviews");
const popupContent = popupReviews.querySelector(".popup-reviews__wrapper");

if (feedbackWrapper) {
  feedbackWrapper.addEventListener("click", (e) => {
    const feedbackButton = e.target.closest(".feedback__item-more");
    if (!feedbackButton) return;

    const feedbackItem = feedbackButton.closest(".feedback__item");

    popupContent.innerHTML = "";
    popupContent.insertAdjacentHTML("beforeend", feedbackItem.outerHTML);
  });
}
