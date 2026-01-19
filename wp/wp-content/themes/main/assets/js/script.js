(function () {
  'use strict';

  //
  //
  //
  //
  // Переменные
  const body = document.querySelector("body");
  const html = document.querySelector("html");
  const modal$1 = document.querySelectorAll(".modal");

  const headerTop = document.querySelector(".header") ? document.querySelector(".header") : document.querySelector("head");
  const headerTopFixed = "header_fixed";
  let fixedElements = document.querySelectorAll("[data-fixed]");

  const menuClass = ".header__mobile";
  const menu = document.querySelector(menuClass) ? document.querySelector(menuClass) : document.querySelector("head");
  const menuLink = document.querySelector(".menu-link") ? document.querySelector(".menu-link") : document.querySelector("head");
  const menuActive = "active";

  const burgerMedia = 991;
  const bodyOpenModalClass = "modal-show";

  let windowWidth = window.innerWidth;
  document.querySelector(".container").offsetWidth || 0;

  const checkWindowWidth = () => {
    windowWidth = window.innerWidth;
    document.querySelector(".container").offsetWidth || 0;
  };

  // Задержка при вызове функции. Выполняется в конце
  function debounce(fn, delay) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, arguments), delay);
    };
  }

  window.addEventListener("resize", debounce(checkWindowWidth, 100));

  // Задержка при вызове функции. Выполняется раз в delay мс
  function throttle(fn, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        fn.apply(this, args);
      }
    };
  }

  // Закрытие элемента при клике вне него
  function closeOutClick(closedElement, clickedButton, clickedButtonActiveClass, callback) {
    document.addEventListener("click", (e) => {
      const button = document.querySelector(clickedButton);
      const element = document.querySelector(closedElement);
      const withinBoundaries = e.composedPath().includes(element);

      if (!withinBoundaries && button?.classList.contains(clickedButtonActiveClass) && e.target !== button && !e.target.closest(".modal")) {
        button.click();
      }
    });
  }

  //
  //
  //
  //
  // Позиционирование

  // Отступ элемента от краев страницы
  function offset(el) {
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
      right: windowWidth - rect.width - (rect.left + scrollLeft),
    };
  }

  // Сторона страницы
  function getPageSide(item) {
    if (offset(item).left > windowWidth / 2) {
      return "right";
    } else {
      return "left";
    }
  }

  //
  //
  //
  //
  // Массивы

  // Индекс элемента
  function indexInParent(node) {
    let children = node.parentNode.childNodes;
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == node) return num;
      if (children[i].nodeType == 1) num++;
    }
    return -1;
  }

  //
  //
  //
  // Общее

  // Добавление элементу обертки
  let wrap = (query, tag, wrapContent = false) => {
    let elements;

    let tagName = tag.split(".")[0] || "div";
    let tagClass = tag.split(".").slice(1);
    tagClass = tagClass.length > 0 ? tagClass : [];

    {
      elements = document.querySelectorAll(query);
    }

    function createWrapElement(item) {
      let newElement = document.createElement(tagName);
      if (tagClass.length) {
        newElement.classList.add(...tagClass);
      }

      if (wrapContent) {
        while (item.firstChild) {
          newElement.appendChild(item.firstChild);
        }
        item.appendChild(newElement);
      } else {
        item.parentElement.insertBefore(newElement, item);
        newElement.appendChild(item);
      }
    }

    if (elements.length) {
      for (let i = 0; i < elements.length; i++) {
        createWrapElement(elements[i]);
      }
    } else {
      if (elements.parentElement) {
        createWrapElement(elements);
      }
    }
  };

  wrap("table", ".table");

  //
  //
  //
  //
  // Проверки

  // Проверка на мобильное устройство
  function isMobile$1() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
  }

  // Проверка на десктоп разрешение
  function isDesktop() {
    return windowWidth > burgerMedia;
  }

  // Проверка поддержки webp
  function checkWebp() {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
      if (webP.height !== 2) {
        document.querySelectorAll("[style]").forEach((item) => {
          const styleAttr = item.getAttribute("style");
          if (styleAttr.indexOf("background-image") === 0) {
            item.setAttribute("style", styleAttr.replace(".webp", ".jpg"));
          }
        });
      }
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  // Проверка на браузер safari
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Проверка есть ли скролл
  function haveScroll() {
    return document.documentElement.scrollHeight !== document.documentElement.clientHeight;
  }

  // Видимость элемента
  function isHidden(el) {
    return window.getComputedStyle(el).display === "none";
  }

  // Закрытие бургера на десктопе
  function checkBurgerAndMenu() {
    if (isDesktop()) {
      menuLink.classList.remove("active");
      if (menu) {
        menu.classList.remove(menuActive);
        if (!body.classList.contains(bodyOpenModalClass)) {
          body.classList.remove("no-scroll");
        }
      }
    }

    if (html.classList.contains("lg-on")) {
      if (isMobile()) {
        body.style.paddingRight = "0";
      } else {
        body.style.paddingRight = getScrollBarWidth() + "px";
      }
    }
  }

  // Получение объектов с медиа-запросами
  function dataMediaQueries(array, dataSetValue) {
    let media = Array.from(array).filter(function (item) {
      if (item.dataset[dataSetValue]) {
        return item.dataset[dataSetValue].split(",")[0];
      }
    });

    if (media.length) {
      let breakpointsArray = [];
      media.forEach((item) => {
        let params = item.dataset[dataSetValue];
        let breakpoint = {};
        let paramsArray = params.split(",");
        breakpoint.value = paramsArray[0];
        breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
        breakpoint.item = item;
        breakpointsArray.push(breakpoint);
      });

      let mdQueries = breakpointsArray.map(function (item) {
        return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
      });

      mdQueries = uniqArray(mdQueries);
      let mdQueriesArray = [];

      if (mdQueries.length) {
        mdQueries.forEach((breakpoint) => {
          let paramsArray = breakpoint.split(",");
          let mediaBreakpoint = paramsArray[1];
          let mediaType = paramsArray[2];
          let matchMedia = window.matchMedia(paramsArray[0]);

          let itemsArray = breakpointsArray.filter(function (item) {
            return item.value === mediaBreakpoint && item.type === mediaType;
          });

          mdQueriesArray.push({ itemsArray, matchMedia });
        });

        return mdQueriesArray;
      }
    }
  }

  // Изменение ссылок в меню
  if (!document.querySelector("body").classList.contains("home") && document.querySelector("body").classList.contains("wp")) {
    let menu = document.querySelectorAll(".menu li a");

    for (let i = 0; i < menu.length; i++) {
      if (menu[i].getAttribute("href").indexOf("#") > -1) {
        menu[i].setAttribute("href", "/" + menu[i].getAttribute("href"));
      }
    }
  }

  // Добавление класса loaded после полной загрузки страницы
  function loaded() {
    document.addEventListener("DOMContentLoaded", function () {
      html.classList.add("loaded");
      if (document.querySelector("header")) {
        document.querySelector("header").classList.add("loaded");
      }
      if (haveScroll()) {
        setTimeout(() => {
          html.classList.remove("scrollbar-auto");
        }, 500);
      }
    });
  }

  // Для локалки
  if (window.location.hostname == "localhost" || window.location.hostname.includes("192.168")) {
    document.querySelectorAll(".logo, .crumbs>li:first-child>a").forEach((logo) => {
      logo.setAttribute("href", "/");
    });

    document.querySelectorAll(".menu a").forEach((item) => {
      let firstSlash = 0;
      let lastSlash = 0;

      if (item.href.split("/").length - 1 == 4) {
        for (let i = 0; i < item.href.length; i++) {
          if (item.href[i] == "/") {
            if (i > 6 && firstSlash == 0) {
              firstSlash = i;
              continue;
            }

            if (i > 6 && lastSlash == 0) {
              lastSlash = i;
            }
          }
        }

        let newLink = "";
        let removeProjectName = "";

        for (let i = 0; i < item.href.length; i++) {
          if (i > firstSlash && i < lastSlash + 1) {
            removeProjectName += item.href[i];
          }
        }

        newLink = item.href.replace(removeProjectName, "");
        item.href = newLink;
      }
    });
  }

  // Проверка на браузер safari
  if (isSafari) document.documentElement.classList.add("safari");

  // Проверка поддержки webp
  checkWebp();

  // Закрытие бургера на десктопе
  window.addEventListener("resize", debounce(checkBurgerAndMenu, 100));
  checkBurgerAndMenu();

  // Добавление класса loaded при загрузке страницы
  loaded();

  // Расчет высоты шапки
  function setHeaderFixedHeight() {
    if (!headerTop) return;

    requestAnimationFrame(() => {
      const height = headerTop.offsetHeight;

      document.documentElement.style.setProperty("--headerFixedHeight", height + "px");
    });
  }

  document.addEventListener("DOMContentLoaded", setHeaderFixedHeight);

  if (window.ResizeObserver) {
    const ro = new ResizeObserver(() => {
      setHeaderFixedHeight();
    });
    ro.observe(headerTop);
  }

  //
  //
  //
  //
  // Куки

  // Установки куки
  window.setCookie = (name, value, hours = 24) => {
    const expires = new Date(Date.now() + hours * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; expires=${expires}`;
  };

  // Получение куки
  window.getCookie = (name) => {
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});
    return cookies[name] || null;
  };

  // Удаление куки
  window.deleteCookie = (name) => {
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  };

  //
  //
  //
  //
  // Функции для работы со скроллом и скроллбаром

  // Скрытие скроллбара
  function hideScrollbar() {
    modal$1.forEach((element) => {
      element.style.display = "none";
    });

    if (haveScroll()) {
      body.classList.add("no-scroll");
    }

    changeScrollbarPadding();
  }

  // Показ скроллбара
  function showScrollbar() {
    if (!menu.classList.contains(menuActive)) {
      body.classList.remove("no-scroll");
    }

    changeScrollbarPadding(false);
  }

  // Ширина скроллбара
  function getScrollBarWidth$1() {
    let div = document.createElement("div");
    div.style.overflowY = "scroll";
    div.style.width = "50px";
    div.style.height = "50px";
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    if (haveScroll()) {
      return scrollWidth;
    } else {
      return 0;
    }
  }

  // Добавление полосы прокрутки
  function changeScrollbarGutter(add = true) {
    if (haveScroll()) {
      if (add) {
        body.classList.add(bodyOpenModalClass, "scrollbar-auto");
        html.classList.add("scrollbar-auto");
      } else {
        // body.classList.remove(bodyOpenModalClass, "scrollbar-auto");
        html.classList.remove("scrollbar-auto");
      }
    }
  }

  // Добавление и удаление отступа у body и фиксированных элементов
  function changeScrollbarPadding(add = true) {
    const scrollbarPadding = getScrollBarWidth$1() + "px";

    fixedElements.forEach((elem) => {
      const position = window.getComputedStyle(elem).position;

      if (position === "sticky") {
        if (add) {
          if (!stickyObservers.has(elem)) {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (!entry.isIntersecting) {
                  elem.style.paddingRight = scrollbarPadding;
                } else {
                  elem.style.paddingRight = "0";
                }
              },
              {
                threshold: [1],
              }
            );
            observer.observe(elem);
            stickyObservers.set(elem, observer);
          }
        } else {
          elem.style.paddingRight = "0";
          const observer = stickyObservers.get(elem);
          if (observer) {
            observer.unobserve(elem);
            stickyObservers.delete(elem);
          }
        }
      } else {
        elem.style.paddingRight = add ? scrollbarPadding : "0";
      }
    });

    if (isSafari) {
      body.style.paddingRight = add ? scrollbarPadding : "0";
    }
  }

  /* 
  ================================================

  Бургер

  ================================================
  */

  function burger() {
    if (menuLink) {
      let isAnimating = false;

      menuLink.addEventListener("click", function (e) {
        if (isAnimating) return;
        isAnimating = true;

        menuLink.classList.toggle("active");
        menu.classList.toggle(menuActive);

        if (menu.classList.contains(menuActive)) {
          hideScrollbar();

          const scrollY = window.scrollY;
          const headerHeight = headerTop.offsetHeight;

          if (scrollY === 0) {
            menu.style.removeProperty("top");
          } else if (scrollY < headerHeight) {
            menu.style.top = scrollY + "px";
          } else {
            const headerRect = headerTop.getBoundingClientRect();
            menu.style.top = headerRect.bottom + "px";
          }
        } else {
          setTimeout(() => {
            showScrollbar();
          }, 400);
        }

        setTimeout(() => {
          isAnimating = false;
        }, 500);
      });

      function checkHeaderOffset() {
        if (isMobile$1()) {
          changeScrollbarPadding(false);
        } else {
          if (body.classList.contains(bodyOpenModalClass)) {
            changeScrollbarPadding();
          }
        }

        if (isDesktop()) {
          menu.removeAttribute("style");

          if (!body.classList.contains(bodyOpenModalClass)) {
            body.classList.remove("no-scroll");

            if (isSafari) {
              changeScrollbarPadding(false);
            }
          }
        }
      }

      window.addEventListener("resize", debounce(checkHeaderOffset, 50));
      window.addEventListener("resize", debounce(checkHeaderOffset, 150));

      if (document.querySelector(".header__mobile")) {
        closeOutClick(".header__mobile", ".menu-link", "active");
      }
    }
  }

  /* 
  	================================================
  	  
  	Фиксированное меню
  	
  	================================================
  */

  function fixedMenu() {
    if (!headerTop) return;

    const isFixed = isDesktop() && window.scrollY > 180;

    if (isFixed) {
      headerTop.classList.add(headerTopFixed);
    } else {
      headerTop.classList.remove(headerTopFixed);
    }
  }

  window.addEventListener("scroll", throttle(fixedMenu, 100));
  window.addEventListener("resize", throttle(fixedMenu, 100));

  // Очистка input и textarea при закрытии модалки и отправки формы / Удаление классов ошибки
  let inputs = document.querySelectorAll("input, textarea");

  function clearInputs() {
    inputs.forEach((element) => {
      element.classList.remove("wpcf7-not-valid", "error");
    });
  }

  inputs.forEach((input) => {
    if (!input) return;

    const parentElement = input.parentElement;

    const updateActiveState = () => {
      if (input.type === "text" || input.type === "date") {
        parentElement.classList.toggle("active", input.value.length > 0);
      }
    };

    // Валидация ФИО
    const validateFIOField = () => {
      const nameAttr = input.name.toLowerCase() || "";
      const placeholder = input.placeholder.toLowerCase() || "";
      const fioKeywords = ["имя", "фамилия", "отчество"];
      const isFIO = nameAttr.includes("name") || fioKeywords.some((word) => placeholder.includes(word));

      if (isFIO) {
        input.value = input.value.replace(/[^а-яА-ЯёЁ\s]/g, "");
        input.value = input.value.replace(/\s{2,}/g, " ");
      }
    };

    input.addEventListener("keyup", updateActiveState);
    input.addEventListener("change", () => {
      input.classList.remove("wpcf7-not-valid");
      updateActiveState();
    });

    input.addEventListener("input", () => {
      if (input.getAttribute("data-number")) {
        input.value = input.value.replace(/\D/g, "").replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
      }

      if (input.type === "email") {
        input.value = input.value.replace(/[^a-zA-Z0-9.!#$%&'*+/=?^_`{|}~@-]/g, "");
      }

      validateFIOField();
    });

    input.addEventListener("paste", (e) => {
      setTimeout(() => {
        if (input.type === "email") {
          input.value = input.value.replace(/[^a-zA-Z0-9.!#$%&'*+/=?^_`{|}~@-]/g, "");
        }
        validateFIOField();
        updateActiveState();
      }, 0);
    });
  });

  // Проверка формы перед отправкой
  function initFormValidation(form) {
    const checkRequiredChoice = () => {
      let requiredChoice = form.querySelectorAll("[data-required-choice]");
      let hasValue = Array.from(requiredChoice).some((input) => input.value.trim() !== "" && input.value !== "+7 ");

      requiredChoice.forEach((input) => {
        if (!hasValue) {
          input.setAttribute("required", "true");
        } else {
          input.removeAttribute("required");
        }
      });
    };

    checkRequiredChoice();

    form.addEventListener(
      "submit",
      (e) => {
        let isValid = true;

        form.querySelectorAll('input[type="tel"]').forEach((input) => {
          const val = input.value.trim();

          const requiredLength = val.startsWith("+7") ? 17 : val.startsWith("8") ? 16 : Infinity;

          if (val.length < requiredLength && val.length > 3) {
            input.setCustomValidity("Телефон должен содержать 11 цифр");
            input.reportValidity();
            e.preventDefault();
            isValid = false;
          } else {
            input.setCustomValidity("");
          }
        });

        checkRequiredChoice();

        if (!isValid || !form.checkValidity()) e.preventDefault();
      },
      {
        capture: true,
      }
    );

    let requiredChoice = form.querySelectorAll("[data-required-choice]");

    requiredChoice.forEach((input) => {
      input.addEventListener("input", checkRequiredChoice);
    });
  }

  document.querySelectorAll("form").forEach(initFormValidation);

  // После отправки формы
  function successSubmitForm(form) {
    let modalInterval = 1500;

    fadeOut(".modal");

    setTimeout(() => {
      fadeIn(".modal-thank");
    }, modalInterval - 500);

    setTimeout(() => {
      fadeOut(".modal");
    }, modalInterval * 2);

    setTimeout(() => {
      body.classList.remove("no-scroll");
    }, modalInterval * 3);

    form.reset();
    form.querySelectorAll("[data-original-placeholder]").forEach((input) => {
      input.placeholder = input.getAttribute("data-original-placeholder");
    });
  }

  if (typeof window !== "undefined") {
    window.successSubmitForm = successSubmitForm;
  }

  /*  
    ================================================
  	  
    Отправка форм
  	
    ================================================
  */

  function form() {
    const allForms = Array.from(document.querySelectorAll("form")).filter(({ action }) => !action || action === "" || action === "/");

    allForms.forEach((form) => {
      if (!form.classList.contains("wpcf7-form")) {
        if (!form.hasAttribute("enctype")) {
          form.setAttribute("enctype", "multipart/form-data");
        }

        form.addEventListener("submit", formSend);

        async function formSend(e) {
          e.preventDefault();

          let formData = new FormData(form);
          form.classList.add("sending");

          try {
            let mailResponse = await fetch("/mail.php", {
              method: "POST",
              body: formData,
            });

            let wpFormData = new FormData(form);
            wpFormData.append("action", "submit_request");

            let wpResponse = await fetch("/wp-admin/admin-ajax.php", {
              method: "POST",
              body: wpFormData,
              credentials: "same-origin",
            });

            let wpResult = await wpResponse.json();

            if (mailResponse.ok && wpResult.success) {
              successSubmitForm(form);
            } else {
              console.error("Ошибка при отправке:", {
                mail: mailResponse,
                wp: wpResult,
              });
            }
          } catch (error) {
            console.error("Ошибка сети:", error);
          } finally {
            form.classList.remove("sending");
          }
        }
      }
    });
  }

  /* 
  	================================================
  	  
  	Карты
  	
  	================================================
  */

  function map() {
    let spinner = document.querySelectorAll(".loader");
    let check_if_load = false;

    function loadScript(url, callback) {
      let script = document.createElement("script");
      if (script.readyState) {
        script.onreadystatechange = function () {
          if (script.readyState == "loaded" || script.readyState == "complete") {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {
        script.onload = function () {
          callback();
        };
      }

      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
    }

    function initMap() {
      loadScript("https://api-maps.yandex.ru/2.1/?apikey=5b7736c7-611f-40ce-a5a8-b7fd86e6737c&lang=ru_RU&amp;loadByRequire=1", function () {
        ymaps.load(init);
      });
      check_if_load = true;
    }

    if (document.querySelectorAll(".map").length) {
      let observer = new IntersectionObserver(
        function (entries) {
          if (entries[0]["isIntersecting"] === true) {
            if (!check_if_load) {
              spinner.forEach((element) => {
                element.classList.add("is-active");
              });
              if (entries[0]["intersectionRatio"] > 0.1) {
                initMap();
              }
            }
          }
        },
        {
          threshold: [0, 0.1, 0.2, 0.5, 1],
          rootMargin: "200px 0px",
        }
      );

      observer.observe(document.querySelector(".map"));
    }
  }

  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      let tc = getTileContainer(layer),
        readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function () {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (let k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer || layer[k] instanceof ymaps.layer.tileContainer.DomContainer) {
          return layer[k];
        }
      }
    }
    return null;
  }

  window.waitForTilesLoad = waitForTilesLoad;
  window.getTileContainer = getTileContainer;

  /* 
  	================================================
  	  
  	Галереи
  	
  	================================================
  */

  function gallery() {
    let galleries = document.querySelectorAll("[data-gallery]");

    if (galleries.length) {
      galleries.forEach((gallery) => {
        if (!gallery.classList.contains("gallery_init")) {
          let selector = false;

          if (gallery.querySelectorAll("[data-gallery-item]").length) {
            selector = "[data-gallery-item]";
          } else if (gallery.classList.contains("swiper-wrapper")) {
            selector = ".swiper-slide>a";
          } else if (gallery.tagName == "A") {
            selector = false;
          } else {
            selector = "a";
          }

          lightGallery(gallery, {
            plugins: [lgZoom, lgThumbnail],
            licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
            speed: 300,
            selector: selector,
            mousewheel: true,
            zoomFromOrigin: false,
            mobileSettings: {
              controls: false,
              showCloseIcon: true,
              download: true,
            },
            subHtmlSelectorRelative: true,
          });

          gallery.classList.add("gallery_init");

          gallery.addEventListener("lgBeforeOpen", () => {
            if (!body.classList.contains(bodyOpenModalClass)) {
              hideScrollbar();
            }
          });

          gallery.addEventListener("lgBeforeClose", () => {
            showScrollbar();
          });
        }
      });
    }
  }

  /* 
  	================================================
  	  
  	Анимация чисел
  	
  	================================================
  */

  function numbers() {
    function digitsCountersInit(digitsCountersItems) {
      let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");

      if (digitsCounters) {
        digitsCounters.forEach((digitsCounter) => {
          if (digitsCounter.classList.contains("active")) {
            digitsCounter.innerHTML = "0";
          } else {
            digitsCounter.dataset.originalValue = digitsCounter.innerHTML.replace(" ", "").replace(",", ".");
          }

          digitsCounter.style.width = digitsCounter.offsetWidth + "px";

          if (parseFloat(digitsCounter.innerHTML.replace(",", ".")) % 1 != 0) {
            digitsCounter.setAttribute("data-float", true);
          }

          digitsCountersAnimate(digitsCounter);
        });
      }
    }

    function digitsCountersAnimate(digitsCounter) {
      let startTimestamp = null;
      const duration = parseInt(digitsCounter.dataset.digitsCounter) || 1000;
      const startValue = parseFloat(digitsCounter.dataset.originalValue.replace(/[^0-9]/g, "")) || 0;
      const startPosition = 0;

      digitsCounter.classList.add("active");
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        if (digitsCounter.getAttribute("data-float")) {
          digitsCounter.innerHTML = (progress * (startPosition + startValue)).toFixed(1).replace(".", ",");
        } else {
          digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
          digitsCounter.innerHTML = digitsCounter.innerHTML.replace(/\D/g, "").replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
        }

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);

      setTimeout(() => {
        digitsCounter.removeAttribute("style");
      }, duration + 500);
    }

    // digitsCountersInit() // Запуск при скролле

    let options = {
      threshold: 0.6,
    };

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        const targetElement = entry.target;
        const digitsCountersItems = targetElement.querySelectorAll("[data-digits-counter]");

        if (entry.isIntersecting) {
          if (digitsCountersItems.length) {
            digitsCountersInit(digitsCountersItems);
          }
        } else {
          digitsCountersItems.forEach((item) => item.classList.remove("active"));
        }
      });
    }, options);

    let sections = document.querySelectorAll('[class*="section"], .about__items');

    if (sections.length) {
      sections.forEach((section) => observer.observe(section));
    }
  }

  //
  //
  //
  //
  // Анимации

  const fadeTokens = new WeakMap();

  // Плавное появление
  const fadeIn$1 = (el, display = "block", timeout = 400) => {
    document.body.classList.add("_fade");

    const elements = el instanceof Element ? [el] : document.querySelectorAll(el);

    if (!elements.length) return;

    elements.forEach((element) => {
      const token = Symbol();
      fadeTokens.set(element, token);

      element.style.transition = "none";
      element.style.opacity = 0;
      element.style.display = display;
      element.style.transition = `opacity ${timeout}ms`;

      setTimeout(() => {
        if (fadeTokens.get(element) !== token) return;
        element.style.opacity = 1;

        setTimeout(() => {
          if (fadeTokens.get(element) !== token) return;
          document.body.classList.remove("_fade");
        }, timeout);
      }, 10);
    });
  };

  // Плавное исчезновение
  const fadeOut$1 = (el, timeout = 400) => {
    document.body.classList.add("_fade");

    const elements = el instanceof Element ? [el] : document.querySelectorAll(el);

    if (!elements.length) return;

    elements.forEach((element) => {
      const token = Symbol();
      fadeTokens.set(element, token);

      element.style.transition = "none";
      element.style.opacity = 1;
      element.style.transition = `opacity ${timeout}ms`;

      setTimeout(() => {
        if (fadeTokens.get(element) !== token) return;
        element.style.opacity = 0;

        setTimeout(() => {
          if (fadeTokens.get(element) !== token) return;
          element.style.display = "none";
          document.body.classList.remove("_fade");
        }, timeout);

        setTimeout(() => {
          if (fadeTokens.get(element) !== token) return;
          element.removeAttribute("style");
        }, timeout + 400);
      }, 10);
    });
  };

  // Плавно скрыть с анимацией слайда
  const slideUp$1 = (target, duration = 400, showmore = 0) => {
    if (target && !target.classList.contains("_slide")) {
      target.classList.add("_slide");
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + "ms";
      target.style.height = `${target.offsetHeight}px`;
      target.offsetHeight;
      target.style.overflow = "hidden";
      target.style.height = showmore ? `${showmore}px` : `0px`;
      target.style.paddingBlock = 0;
      target.style.marginBlock = 0;
      window.setTimeout(() => {
        target.style.display = !showmore ? "none" : "block";
        !showmore ? target.style.removeProperty("height") : null;
        target.style.removeProperty("padding-top");
        target.style.removeProperty("padding-bottom");
        target.style.removeProperty("margin-top");
        target.style.removeProperty("margin-bottom");
        !showmore ? target.style.removeProperty("overflow") : null;
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
        target.classList.remove("_slide");
        document.dispatchEvent(
          new CustomEvent("slideUpDone", {
            detail: {
              target: target,
            },
          })
        );
      }, duration);
    }
  };

  // Плавно показать с анимацией слайда
  const slideDown$1 = (target, duration = 400) => {
    if (target && !target.classList.contains("_slide")) {
      target.style.removeProperty("display");
      let display = window.getComputedStyle(target).display;
      if (display === "none") display = "block";
      target.style.display = display;
      let height = target.offsetHeight;
      target.style.overflow = "hidden";
      target.style.height = 0;
      target.style.paddingBLock = 0;
      target.style.marginBlock = 0;
      target.offsetHeight;
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + "ms";
      target.style.height = height + "px";
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      window.setTimeout(() => {
        target.style.removeProperty("height");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
      }, duration);
    }
  };

  // Плавно изменить состояние между slideUp и slideDown
  const slideToggle = (target, duration = 400) => {
    if (target && isHidden(target)) {
      return slideDown$1(target, duration);
    } else {
      return slideUp$1(target, duration);
    }
  };

  //
  //
  //
  //
  // Работа с url

  // Получение хэша
  function getHash() {
  	return location.hash ? location.hash.replace('#', '') : '';
  }

  // Удаление хэша
  function removeHash() {
  	setTimeout(() => {
  		history.pushState("", document.title, window.location.pathname + window.location.search);
  	}, 100);
  }

  // Установка хэша
  function setHash(hash) {
  	hash = hash ? `#${hash}` : window.location.href.split('#')[0];
  	history.pushState('', '', hash);
  }

  /* 
    ================================================
  	  
    Модалки
  	
    ================================================
  */

  // Открытие модалки
  function openModal(modal, addHashFlag = true, dataTab = null) {
    if (!modal) return;

    if (getHash() && addHashFlag) {
      history.pushState("", document.title, (window.location.pathname + window.location.search).replace(getHash(), ""));
    }

    hideScrollbar();

    body.classList.add(bodyOpenModalClass);

    if (!window.location.hash.includes(modal.id) && addHashFlag) {
      window.location.hash = modal.id;
    }

    fadeIn$1(modal);

    modal.classList.remove("modal_close");
    modal.classList.add("modal_open");

    if (dataTab) {
      document.querySelector(`[data-href="#${dataTab}"]`)?.click();
    }
  }

  // Закрытие модалки
  function closeModal(modal, removeHashFlag = true) {
    const modalButtons = document.querySelectorAll("[data-modal]");

    if (!modal) return;

    modal.classList.remove("modal_open");
    modal.classList.add("modal_close");

    modalButtons.forEach((button) => (button.disabled = true));
    body.classList.remove(bodyOpenModalClass);

    setTimeout(() => {
      fadeOut$1(modal);

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

  function modal() {
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
            fadeIn$1(modal);
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
        await fadeIn$1(modal);

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

  /* 
  	================================================
  	  
  	Звёздный рейтинг
  	
  	================================================
  */

  function rating() {
    const ratings = document.querySelectorAll(".rating__item");

    ratings.forEach(initRating);

    function initRating(rating) {
      const ratingActive = rating.querySelector(".rating__active");
      const ratingValue = rating.querySelector(".rating__value");
      const ratingInputs = rating.querySelectorAll("input");

      setRatingActiveWidth(ratingActive, ratingValue, ratingInputs.length);

      if (rating.classList.contains("rating__item_set")) {
        setRating(rating, ratingActive, ratingValue, ratingInputs.length);
      }
    }

    function setRatingActiveWidth(ratingActive, ratingValue, totalStars, index = null) {
      const value = index !== null ? index : ratingValue.innerHTML;
      const ratingActiveWidth = (100 / totalStars) * value;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating, ratingActive, ratingValue, totalStars) {
      const ratingItems = rating.querySelectorAll(".rating__items input");

      ratingItems.forEach((ratingItem, index) => {
        ratingItem.addEventListener("mouseenter", () => {
          setRatingActiveWidth(ratingActive, ratingValue, totalStars, ratingItem.value);
        });

        ratingItem.addEventListener("mouseleave", () => {
          setRatingActiveWidth(ratingActive, ratingValue, totalStars);
        });

        ratingItem.addEventListener("click", () => {
          ratingValue.innerHTML = index + 1;
          setRatingActiveWidth(ratingActive, ratingValue, totalStars);
        });
      });
    }
  }

  // Плавный скролл
  function scrollToSmoothly(pos, time = 400) {
    const currentPos = window.pageYOffset;
    let start = null;
    window.requestAnimationFrame(function step(currentTime) {
      start = !start ? currentTime : start;
      const progress = currentTime - start;
      if (currentPos < pos) {
        window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
      } else {
        window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
      }
      if (progress < time) {
        window.requestAnimationFrame(step);
      } else {
        window.scrollTo(0, pos);
      }
    });
  }

  // Изменение масштаба
  class ZoomDetector {
    constructor() {
      this.lastZoom = this.getCurrentZoom();
      this.isChecking = false;
      this.startDetection();
    }

    getCurrentZoom() {
      return window.outerWidth / window.innerWidth;
    }

    startDetection() {
      const checkZoom = () => {
        const currentZoom = this.getCurrentZoom();

        if (Math.abs(currentZoom - this.lastZoom) > 0.01) {
          this.lastZoom = currentZoom;
          this.onZoomChange(currentZoom);
        }

        if (this.isChecking) {
          requestAnimationFrame(checkZoom);
        }
      };

      this.isChecking = true;
      checkZoom();
    }

    stopDetection() {
      this.isChecking = false;
    }

    onZoomChange(zoomLevel) {
      const percentage = Math.round(zoomLevel * 100);
      // Отправка события
      window.dispatchEvent(
        new CustomEvent("zoomchange", {
          detail: { zoomLevel: percentage },
        })
      );
    }
  }

  new ZoomDetector();

  window.addEventListener("zoomchange", (e) => {
    if (haveScroll() && body.classList.contains(bodyOpenModalClass)) {
      changeScrollbarGutter(false);
    }
  });

  /* 
  	================================================
  	  
  	Плавная прокрутка
  	
  	================================================
  */

  function scroll() {
    let headerScroll = 0;
    const scrollLinks = document.querySelectorAll("[data-scroll], .menu a");

    if (scrollLinks.length) {
      scrollLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          const target = link.hash;

          if (target && target !== "#") {
            const scrollBlock = document.querySelector(target);
            e.preventDefault();

            if (scrollBlock) {
              headerScroll = window.getComputedStyle(scrollBlock).paddingTop === "0px" ? -40 : 0;

              scrollToSmoothly(offset(scrollBlock).top - parseInt(headerTop.clientHeight - headerScroll), 400);

              removeHash();
              menu.classList.remove(menuActive);
              menuLink.classList.remove("active");
              body.classList.remove("no-scroll");
            } else {
              let [baseUrl, hash] = link.href.split("#");
              if (window.location.href !== baseUrl && hash) {
                link.setAttribute("href", `${baseUrl}?link=${hash}`);
                window.location = link.getAttribute("href");
              }
            }
          }
        });
      });
    }

    document.addEventListener("DOMContentLoaded", () => {
      const urlParams = new URLSearchParams(window.location.search);
      const link = urlParams.get("link");

      if (link) {
        if (link.startsWith("tab-") && /^\d+-\d+$/.test(link.replace("tab-", ""))) {
          const [_, blockIndex, tabIndex] = link.split("-");
          const tabsBlock = document.querySelector(`[data-tabs-index="${blockIndex}"]`);
          const tabs = tabsBlock.querySelectorAll("[data-tabs-title]");

          if (tabs && tabs[tabIndex]) {
            tabs[tabIndex].click();

            scrollToSmoothly(offset(tabsBlock).top - parseInt(headerTop.clientHeight), 400);
          }
        } else if (link.startsWith("tab-")) {
          const tabId = link;
          const tabButton = document.getElementById(tabId);

          if (tabButton) {
            tabButton.click();

            scrollToSmoothly(offset(tabButton.closest("[data-tabs]") || tabButton).top - parseInt(headerTop.clientHeight), 400);
          }
        } else {
          const scrollBlock = document.getElementById(link);
          if (scrollBlock) {
            const headerScroll = window.getComputedStyle(scrollBlock).paddingTop === "0px" ? -40 : 0;
            scrollToSmoothly(offset(scrollBlock).top - parseInt(headerTop.clientHeight - headerScroll), 400);
          }
        }

        urlParams.delete("link");
        const newUrl = urlParams.toString() ? `${window.location.pathname}?${urlParams}` : window.location.pathname;
        window.history.replaceState({}, "", newUrl);
      }
    });
  }

  /* 
  	================================================
  	  
  	Селекты
  	
  	================================================
  */

  function select() {
    let allSelects = document.querySelectorAll("select");
    let slimSelectInstances = [];

    if (allSelects.length) {
      allSelects.forEach((select) => {
        let instance = new SlimSelect({
          select: select,
          settings: {
            placeholderText: select.getAttribute("data-placeholder") || null,

            // openPosition: 'auto',
            // openPositionX: 'left',

            showSearch: select.hasAttribute("data-search"),
            searchText: "Ничего не найдено",
            searchPlaceholder: "Поиск",
            searchHighlight: true,
            allowDeselect: true,

            maxValuesShown: select.hasAttribute("data-count") ? 1 : false,
            maxValuesMessage: "Выбрано ({number})",

            closeOnSelect: select.hasAttribute("data-not-close") ? false : true,
            // hideSelected: true,
          },
          events: {
            beforeOpen: () => {
              closeAllSelects(instance);
            },
            afterOpen: () => {
              currentOpenSelect = instance;

              if (select.hasAttribute("data-search")) {
                requestAnimationFrame(() => {
                  const searchInput = document.querySelector(`.select__content[data-id="${select.getAttribute("data-id")}"] .select__input input`);

                  if (searchInput) {
                    searchInput.focus();
                  }
                });
              }
            },
            afterClose: () => {
              if (currentOpenSelect === instance) {
                currentOpenSelect = null;
              }
            },
          },
        });

        if (select.hasAttribute("data-open")) {
          requestAnimationFrame(() => {
            instance.open();
          });
        }

        slimSelectInstances.push({ instance, select });

        // prettier-ignore
        const selectAttribures = Array.from(select.attributes)
          .filter((attr) => ![
            "class", "tabindex", "multiple", "data-id", "aria-hidden", "style"]
          .includes(attr.name))
          .map((attr) => `${attr.name}="${attr.value}"`);

        selectAttribures.forEach((attr) => {
          const [name, value] = attr.split("=");
          const selectOptions = document.querySelector(`.select__content[data-id="${select.getAttribute("data-id")}"] .select__options`);
          if (selectOptions) {
            selectOptions.setAttribute(name, value.replace(/"/g, ""));
            if (name === "data-scroll") {
              selectOptions.style.maxHeight = value.replace(/["']/g, "");
            }
          }
        });

        // Закрытие при клике вне селекта
        select.addEventListener("change", function () {
          const selectedOption = this.options[this.selectedIndex];
          const href = selectedOption.getAttribute("data-href");
          if (href && href !== "#") {
            window.location.href = href;
          }
        });
      });

      let currentOpenSelect = null;

      // Закрытие при скролле
      window.addEventListener("scroll", () => {
        closeAllSelects();
      });

      // Закрытие при клике вне селекта
      document.addEventListener("mousedown", (e) => {
        const clickedSelect = e.target.closest(".select__content") || e.target.closest(".select");
        if (!clickedSelect) {
          closeAllSelects();
        }
      });

      // Сброс формы
      document.querySelectorAll("form").forEach((form) => {
        form.addEventListener("reset", () => {
          requestAnimationFrame(() => {
            slimSelectInstances.forEach(({ instance, select }) => {
              if (form.contains(select)) {
                if (select.multiple) {
                  const selectedValues = Array.from(select.selectedOptions).map((opt) => opt.value);
                  instance.setSelected(selectedValues);
                } else {
                  instance.setSelected(select.value || "");
                }
              }
            });
          });
        });
      });

      const closeAllSelects = (currentInstance = null) => {
        slimSelectInstances.forEach(({ instance }) => {
          if (instance !== currentInstance) instance.close();
        });
      };
    }
  }

  /* 
  	================================================
  	  
  	Спойлеры
  	
  	================================================
  */

  function spoller() {
    const spollersArray = document.querySelectorAll("[data-spollers]");
    if (!spollersArray.length) return;

    document.addEventListener("click", setSpollerAction);

    const spollersRegular = [...spollersArray].filter((item) => !item.dataset.spollers.split(",")[0]);
    if (spollersRegular.length) initSpollers(spollersRegular);

    const mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
    mdQueriesArray?.forEach((mdItem) => {
      mdItem.matchMedia.addEventListener("change", () => initSpollers(mdItem.itemsArray, mdItem.matchMedia));
      initSpollers(mdItem.itemsArray, mdItem.matchMedia);
    });

    function initSpollers(array, matchMedia = false) {
      array.forEach((spollersBlock) => {
        const block = matchMedia ? spollersBlock.item : spollersBlock;
        const isInit = matchMedia ? matchMedia.matches : true;

        block.classList.toggle("_spoller-init", isInit);
        initSpollerBody(block, isInit);
      });
    }

    function initSpollerBody(block, hideBody = true) {
      block.querySelectorAll("[data-spoller]").forEach((item) => {
        const title = item.querySelector("[data-spoller-title]");
        const content = item.querySelector("[data-spoller-content]");
        if (!content) return;

        if (hideBody) {
          if (!item.hasAttribute("data-open")) {
            content.style.display = "none";
            title.classList.remove("active");
          } else {
            title.classList.add("active");
          }
        } else {
          content.style.display = "";
          title.classList.remove("active");
        }
      });
    }

    function setSpollerAction(e) {
      const titleEl = e.target.closest("[data-spoller-title]");
      const blockEl = e.target.closest("[data-spollers]");

      if (titleEl && blockEl) {
        if (blockEl.classList.contains("_disabled-click")) return;

        const itemEl = titleEl.closest("[data-spoller]");
        const contentEl = itemEl.querySelector("[data-spoller-content]");
        const speed = parseInt(blockEl.dataset.spollersSpeed) || 400;

        blockEl.classList.add("_disabled-click");
        setTimeout(() => blockEl.classList.remove("_disabled-click"), speed);

        if (blockEl.classList.contains("_spoller-init") && contentEl && !blockEl.querySelectorAll("._slide").length) {
          if (blockEl.hasAttribute("data-one-spoller") && !titleEl.classList.contains("active")) {
            hideSpollersBody(blockEl);
          }

          titleEl.classList.toggle("active");

          slideToggle(contentEl, speed);

          if (itemEl.hasAttribute("data-spoller-scroll") && titleEl.classList.contains("active")) {
            const scrollOffset = parseInt(itemEl.dataset.spollerScroll) || 0;
            const headerOffset = itemEl.hasAttribute("data-spoller-scroll-noheader") ? document.querySelector(".header")?.offsetHeight || 0 : 0;
            window.scrollTo({
              top: itemEl.offsetTop - (scrollOffset + headerOffset),
              behavior: "smooth",
            });
          }
        }
      }

      if (!blockEl) {
        document.querySelectorAll("[data-spoller-close]").forEach((title) => {
          const item = title.closest("[data-spoller]");
          const block = title.closest("[data-spollers]");
          const content = item.querySelector("[data-spoller-content]");
          const speed = parseInt(block.dataset.spollersSpeed) || 400;

          if (block.classList.contains("_spoller-init")) {
            title.classList.remove("active");
            slideUp$1(content, speed);
          }
        });
      }
    }

    function hideSpollersBody(block) {
      const activeTitle = block.querySelector("[data-spoller] .active");
      if (!activeTitle || block.querySelectorAll("._slide").length) return;

      const content = activeTitle.closest("[data-spoller]")?.querySelector("[data-spoller-content]");
      const speed = parseInt(block.dataset.spollersSpeed) || 400;

      activeTitle.classList.remove("active");
      slideUp$1(content, speed);
    }
  }

  /* 
  	================================================
  	  
  	Многоуровневое меню
  	
  	================================================
  */

  function subMenu() {
    subMenuInit();

    let mediaSwitcher = false;

    function subMenuResize() {
      if (isDesktop()) {
        subMenuInit((true));

        if (!mediaSwitcher) {
          document.querySelectorAll(".menu-item-has-children").forEach((item) => {
            item.classList.remove("active", "left", "right", "top", "menu-item-has-children_not-relative");

            const submenu = item.querySelector(".sub-menu-wrapper");
            if (submenu) {
              submenu.removeAttribute("style");
              submenu.classList.remove("active");
            }

            const arrow = item.querySelector(".menu-item-arrow");
            if (arrow) {
              arrow.classList.remove("active");
            }
          });

          subMenuInit(true);

          mediaSwitcher = true;
        }
      } else {
        let menuItemHasChildren = document.querySelectorAll(".menu-item-has-children");

        menuItemHasChildren.forEach((item) => {
          item.querySelector(".sub-menu-wrapper").style.display = "block";
          toggleSubMenuVisible(item);
        });

        mediaSwitcher = false;
      }
    }

    window.addEventListener("resize", debounce(subMenuResize, 100));

    // инициализация подменю
    function subMenuInit(isResize = false) {
      let menuItemHasChildren = document.querySelectorAll(".menu-item-has-children");

      menuItemHasChildren.forEach((item) => {
        let timeoutId = null;

        item.onmouseover = null;
        item.onmouseout = null;
        item.onfocusin = null;
        item.onfocusout = null;

        item.addEventListener("mouseover", function (e) {
          if (!isDesktop()) return;
          clearTimeout(timeoutId);
          menuMouseOverInit(item, e, isResize);
        });

        item.addEventListener("focusin", function (e) {
          if (!isDesktop()) return;
          clearTimeout(timeoutId);
          menuMouseOverInit(item, e, isResize);
        });

        item.addEventListener("mouseout", function (e) {
          if (!isDesktop()) return;
          clearTimeout(timeoutId);

          const menu = item.closest(".menu");

          if (item.classList.contains("top")) {
            timeoutId = setTimeout(() => {
              if (!menu.contains(document.querySelector(":hover"))) {
                item.classList.remove("active");
              }
            }, 300);
          } else {
            if (menu.contains(e.relatedTarget)) {
              item.classList.remove("active");
            } else {
              timeoutId = setTimeout(() => {
                if (!menu.contains(document.querySelector(":hover"))) {
                  item.classList.remove("active");
                }
              }, 300);
            }
          }
        });

        item.addEventListener("focusout", function (e) {
          if (!isDesktop()) return;
          timeoutId = setTimeout(() => {
            if (!item.contains(document.activeElement)) {
              item.classList.remove("active");
            }
          }, 500);
        });

        toggleSubMenuVisible(item, !isDesktop());
      });
    }

    function menuMouseOverInit(item, e, isResize) {
      // закрыть все открытые меню, кроме текущего
      document.querySelectorAll(".menu>.menu-item-has-children").forEach((li) => {
        if (li != item) {
          li.classList.remove("active");
        }
      });

      if (isDesktop()) {
        if (!isResize) {
          item.classList.add("active");
        }

        // если это самый верхний уровень, то определить сторону и добавить соответствующий класс
        if (item.closest(".menu")) {
          if (getPageSideMenu(e) == "left") {
            item.classList.add("left");
          } else {
            item.classList.add("right");
          }
        }

        if (item == getTargetElementTag(e)) {
          // если нет места, чтобы добавить подменю скраю, то добавить снизу
          if ((getPageSideMenu(e) == "left" && offset(item).right < item.offsetWidth) || (getPageSideMenu(e) == "right" && offset(item).left < item.offsetWidth)) {
            item.classList.add("top", "menu-item-has-children_not-relative");
          }
        }

        // авторасчёт ширины подменю
        const submenu = item.querySelector(".sub-menu-wrapper");
        if (submenu) {
          const cssMaxWidth = window.innerWidth * 0.5;
          const side = getPageSideMenu(e);

          const rect = submenu.getBoundingClientRect();
          const availableSpace = side === "left" ? window.innerWidth - rect.left - 20 : rect.right - 20;

          if (side == "left") {
            if (offset(submenu).right < 0) {
              const newMax = Math.min(availableSpace, cssMaxWidth);
              submenu.style.maxWidth = `${newMax - 12}px`;
            }
          } else {
            if (offset(submenu).left < 0) {
              const newMax = Math.min(availableSpace, cssMaxWidth);
              submenu.style.maxWidth = `${newMax - 12}px`;
            }
          }
        }
      }
    }

    let menuItemArrow = document.querySelectorAll(".menu-item-arrow");
    let isClicked = false;

    menuItemArrow.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        if (!isDesktop()) {
          if (!isClicked) {
            isClicked = true;
            if (!item.classList.contains("active")) {
              item.classList.add("active");
              item.parentElement.nextElementSibling.classList.add("active");
              slideDown$1(item.parentElement.nextElementSibling, 200);
            } else {
              item.classList.remove("active");
              item.parentElement.nextElementSibling.classList.remove("remove");
              slideUp$1(item.parentElement.nextElementSibling, 200);
            }

            setTimeout(() => {
              isClicked = false;
            }, 300);
          }
        }
      });
    });

    document.querySelectorAll(".menu-item-has-children > a").forEach((link) => {
      link.addEventListener("click", function (e) {
        let textNode = link.childNodes[0];
        let textRange = document.createRange();
        textRange.selectNodeContents(textNode);
        let textRect = textRange.getBoundingClientRect();

        if (e.clientX >= textRect.left && e.clientX <= textRect.right && e.clientY >= textRect.top && e.clientY <= textRect.bottom) {
          return;
        }

        e.preventDefault();
        let arrow = link.querySelector(".menu-item-arrow");
        if (arrow) arrow.click();
      });
    });

    function toggleSubMenuVisible(item, state = true) {
      let subMenu = item.querySelectorAll(".sub-menu-wrapper");
      subMenu.forEach((element) => {
        element.style.display = state ? "none" : "block";
      });
    }

    function getTargetElementTag(e) {
      return e.target.parentElement.tagName == "LI" ? e.target.parentElement : e.target;
    }

    function getPageSideMenu(e) {
      return e.target.closest(".menu") ? (offset(e.target.closest(".menu>.menu-item-has-children")).left > windowWidth / 2 ? "right" : "left") : "left";
    }
  }

  /* 
  	================================================
  	  
  	Табы
  	
  	================================================
  */

  function tab() {
    let tabs = document.querySelectorAll("[data-tabs]");
    let tabsActiveHash = [];
    let tabsHashId = null;

    if (tabs.length > 0) {
      let hash = getHash();

      if (hash && hash.startsWith("tab-")) {
        const hashValue = hash.replace("tab-", "");
        if (/^\d+-\d+$/.test(hashValue)) {
          tabsActiveHash = hashValue.split("-");
        } else {
          tabsHashId = hashValue;
        }
      }

      tabs.forEach((tabsBlock, index) => {
        tabsBlock.classList.add("tab_init");
        tabsBlock.setAttribute("data-tabs-index", index);
        tabsBlock.addEventListener("click", setTabsAction);
        initTabs(tabsBlock);
      });

      let mdQueriesArray = dataMediaQueries(tabs, "tabs");

      if (mdQueriesArray && mdQueriesArray.length) {
        mdQueriesArray.forEach((mdQueriesItem) => {
          mdQueriesItem.matchMedia.addEventListener("change", function () {
            setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
          });
          setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        });
      }
    }

    function setTitlePosition(tabsMediaArray, matchMedia) {
      tabsMediaArray.forEach((tabsMediaItem) => {
        tabsMediaItem = tabsMediaItem.item;
        let tabsTitles = tabsMediaItem.querySelector("[data-tabs-header]");
        let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
        let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
        let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");

        tabsTitleItems = Array.from(tabsTitleItems).filter((item) => item.closest("[data-tabs]") === tabsMediaItem);
        tabsContentItems = Array.from(tabsContentItems).filter((item) => item.closest("[data-tabs]") === tabsMediaItem);
        tabsContentItems.forEach((tabsContentItem, index) => {
          if (matchMedia.matches) {
            tabsContent.append(tabsTitleItems[index]);
            tabsContent.append(tabsContentItem);
            tabsMediaItem.classList.add("tab-spoller");
          } else {
            tabsTitles.append(tabsTitleItems[index]);
            tabsMediaItem.classList.remove("tab-spoller");
          }
        });
      });
    }

    function initTabs(tabsBlock) {
      let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-header]>*");
      let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
      let tabsBlockIndex = tabsBlock.dataset.tabsIndex;
      let tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;

      if (tabsContent.length) {
        tabsContent.forEach((tabsContentItem, index) => {
          tabsTitles[index].setAttribute("data-tabs-title", "");
          tabsContentItem.setAttribute("data-tabs-item", "");

          if (tabsHashId || tabsActiveHashBlock) {
            tabsTitles[index].classList.remove("active");
          }

          if (tabsHashId) {
            if (tabsTitles[index].dataset.tabId === tabsHashId) {
              tabsTitles[index].classList.add("active");
            }
          } else if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
            tabsTitles[index].classList.add("active");
          }

          tabsContentItem.hidden = true;
        });

        let activeTab = tabsBlock.querySelector("[data-tabs-header]>.active");
        if (!activeTab) {
          tabsTitles[0].classList.add("active");
          tabsContent[0].hidden = false;
        } else {
          tabsContent[indexInParent(activeTab)].hidden = false;
        }
      }
    }

    function setTabsStatus(tabsBlock) {
      let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
      let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
      let tabsBlockIndex = tabsBlock.dataset.tabsIndex;

      function isTabsAnamate(tabsBlock) {
        if (tabsBlock.hasAttribute("data-tabs-animate")) {
          return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
        }
      }

      let tabsBlockAnimate = isTabsAnamate(tabsBlock);

      if (tabsContent.length > 0) {
        let isHash = tabsBlock.hasAttribute("data-tabs-hash");

        tabsContent = Array.from(tabsContent).filter((item) => item.closest("[data-tabs]") === tabsBlock);
        tabsTitles = Array.from(tabsTitles).filter((item) => item.closest("[data-tabs]") === tabsBlock);
        tabsContent.forEach((tabsContentItem, index) => {
          if (tabsTitles[index].classList.contains("active")) {
            if (tabsBlockAnimate) {
              slideDown(tabsContentItem, tabsBlockAnimate);
            } else {
              fadeIn(tabsContentItem, true);
              tabsContentItem.hidden = false;
            }

            if (isHash && !tabsContentItem.closest(".modal")) {
              const activeTitle = tabsTitles[index];
              const tabId = activeTitle.dataset.tabId;
              if (tabId) {
                setHash(`tab-${tabId}`);
              } else {
                setHash(`tab-${tabsBlockIndex}-${index}`);
              }
            }
          } else {
            if (tabsBlockAnimate) {
              slideUp(tabsContentItem, tabsBlockAnimate);
            } else {
              tabsContentItem.style.display = "none";
              tabsContentItem.hidden = true;
            }
          }
        });
      }
    }

    function setTabsAction(e) {
      let el = e.target;

      if (el.closest("[data-tabs-title]") && !el.closest("[data-tabs-title]").classList.contains("active")) {
        let tabTitle = el.closest("[data-tabs-title]");
        let tabsBlock = tabTitle.closest("[data-tabs]");

        if (!tabTitle.classList.contains("active") && !tabsBlock.querySelector("._slide")) {
          let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title].active");
          tabActiveTitle.length ? (tabActiveTitle = Array.from(tabActiveTitle).filter((item) => item.closest("[data-tabs]") === tabsBlock)) : null;
          tabActiveTitle.length ? tabActiveTitle[0].classList.remove("active") : null;
          tabTitle.classList.add("active");
          setTabsStatus(tabsBlock);

          scrollToSmoothly(offset(el.closest("[data-tabs]")).top - parseInt(headerTop.clientHeight));
        }

        e.preventDefault();
      }
    }

    // Переключение табов левыми кнопками (атрибут data-tab="")
    let dataTabs = document.querySelectorAll("[data-tab]");

    dataTabs.forEach((button) => {
      button.addEventListener("click", function () {
        document.querySelector(button.getAttribute("data-tab")).click();
        scrollToSmoothly(offset(document.querySelector(button.getAttribute("data-tab"))).top - parseInt(headerTop.clientHeight));
      });
    });
  }

  /* 
    ================================================
  	  
    Тултипы 
  	
    ================================================
  */

  function tooltip() {
    const timers = new WeakMap();

    const getTooltip = (item) => {
      let tooltip;
      const tooltipIsHtml = item.getAttribute("data-tooltip") === "html";

      if (tooltipIsHtml) {
        tooltip = item.querySelector(".tooltip");
      } else {
        tooltip = item.querySelector(".tooltip");

        if (!tooltip) {
          let text = "";

          if (item.hasAttribute("title")) {
            text = item.getAttribute("title");
            item.removeAttribute("title");
          } else if (item.getAttribute("data-tooltip") !== "") {
            text = item.getAttribute("data-tooltip");
          }

          tooltip = document.createElement("span");
          tooltip.className = "tooltip";
          tooltip.textContent = text;
          item.append(tooltip);
        }
      }

      return tooltip;
    };

    const calculatePosTooltip = (item, tooltip) => {
      tooltip.style.left = "";
      tooltip.style.right = "";

      if (getPageSide(item) === "left") {
        tooltip.style.left = "0";
      } else {
        tooltip.style.right = "0";
      }

      tooltip.style.bottom = item.offsetHeight + "px";
    };

    const showTooltip = (item) => {
      const tooltip = getTooltip(item);
      if (!tooltip) return;

      clearTimeout(timers.get(item));
      calculatePosTooltip(item, tooltip);
      tooltip.classList.add("tooltip_active");
    };

    const hideTooltip = (item) => {
      const tooltip = item.querySelector(".tooltip");
      if (!tooltip) return;

      const timer = setTimeout(() => {
        tooltip.classList.remove("tooltip_active");
      }, 200);

      timers.set(item, timer);
    };

    const getItemFromEvent = (e) => {
      if (!(e.target instanceof Element)) return null;
      return e.target.closest("[data-tooltip]");
    };

    document.addEventListener(
      "mouseenter",
      (e) => {
        const item = getItemFromEvent(e);
        if (!item) return;

        showTooltip(item);
      },
      true
    );

    document.addEventListener(
      "mouseleave",
      (e) => {
        const item = getItemFromEvent(e);
        if (!item) return;

        hideTooltip(item);
      },
      true
    );

    document.addEventListener("focusin", (e) => {
      const item = getItemFromEvent(e);
      if (!item) return;

      showTooltip(item);
    });

    document.addEventListener("focusout", (e) => {
      const item = getItemFromEvent(e);
      if (!item) return;

      hideTooltip(item);
    });

    document.addEventListener("mouseover", (e) => {
      if (!(e.target instanceof Element)) return;

      const tooltip = e.target.closest(".tooltip");
      if (!tooltip) return;

      const item = tooltip.closest("[data-tooltip]");
      if (!item) return;

      clearTimeout(timers.get(item));
    });

    document.addEventListener("mouseout", (e) => {
      if (!(e.target instanceof Element)) return;

      const tooltip = e.target.closest(".tooltip");
      if (!tooltip) return;

      tooltip.classList.remove("tooltip_active");
    });
  }

  /* 
  	================================================
  	  
  	Показать еще
  	
  	================================================
  */

  function showMore() {
  	document.querySelectorAll('[data-more-wrapper]').forEach(wrapper => {
  		const button = wrapper.querySelector('[data-more]');
  		if (!button) return

  		const [initialCount, stepCount, selector = '[data-more-item]'] = button.getAttribute('data-more').split(',');
  		const items = Array.from(wrapper.querySelectorAll(selector));
  		const moreOpenText = button.querySelector('[data-more-open]');
  		const moreCloseText = button.querySelector('[data-more-close]');
  		const [mediaBreakpointRaw, mediaBreakpointType = 'max'] = wrapper.dataset.media ? wrapper.dataset.media.split(',') : [];
  		const mediaBreakpoint = mediaBreakpointRaw ? parseInt(mediaBreakpointRaw) : null;

  		let visibleCount = parseInt(initialCount);
  		let mediaQuery = null;

  		const isLinesMode = stepCount === 'lines';
  		let isToggleActive = false;
  		let linesTarget = wrapper.querySelector('[data-lines]');
  		let linesSpeed = 400;
  		let hiddenElements = [];

  		if (!linesTarget.dataset.original) {
  			linesTarget.dataset.original = linesTarget.innerHTML;
  		}

  		const applyTransition = element => {
  			element.style.transition = 'max-height 0.3s ease';
  			element.style.overflow = 'hidden';
  		};

  		function animateHeight(element, targetHeight, duration = linesSpeed) {
  			const startHeight = element.offsetHeight;
  			const heightDiff = targetHeight - startHeight;
  			const startTime = performance.now();

  			element.style.overflow = 'hidden';

  			function step(currentTime) {
  				const elapsed = currentTime - startTime;
  				const progress = Math.min(elapsed / duration, 1);

  				const easeProgress = 1 - Math.pow(1 - progress, 3);

  				element.style.height = startHeight + heightDiff * easeProgress + 'px';

  				if (progress < 1) {
  					requestAnimationFrame(step);
  				} else {
  					element.style.height = targetHeight + 'px';
  				}
  			}

  			requestAnimationFrame(step);
  		}

  		const toggleLinesMode = () => {
  			if (!linesTarget) return;

  			const isExpanded = linesTarget.classList.toggle('active');

  			if (isExpanded) {
  				hiddenElements.forEach(span => {
  					span.classList.add('show');

  					setTimeout(() => {
  						span.classList.remove('hidd', 'show');

  						const children = Array.from(span.childNodes);
  						span.replaceWith(...children);
  					}, linesSpeed);
  				});

  				hiddenElements = [];

  			} else {
  				animateHeight(linesTarget, linesTarget.getAttribute('data-default-height'), linesSpeed);
  				setTimeout(() => {
  					hiddenElements = limitLines(linesTarget, initialCount);
  				}, linesSpeed);

  				setTimeout(() => {
  					linesTarget.removeAttribute('style');
  				}, linesSpeed + 50);
  			}

  			if (moreOpenText) moreOpenText.style.display = isExpanded ? 'none' : '';
  			if (moreCloseText) moreCloseText.style.display = isExpanded ? '' : 'none';

  			if (isExpanded) {
  				wrapper.classList.add('active');
  				button.classList.add('active');
  			} else {
  				wrapper.classList.remove('active');
  				button.classList.remove('active');
  			}
  		};

  		const resetInitialState = () => {
  			visibleCount = parseInt(initialCount);

  			if (isLinesMode && linesTarget) {
  				hiddenElements.forEach(span => {
  					const children = Array.from(span.childNodes);
  					span.replaceWith(...children);
  				});

  				hiddenElements = limitLines(linesTarget, initialCount);

  				linesTarget.classList.remove('active');
  				wrapper.classList.remove('active');
  				button.classList.remove('active');
  			} else {
  				items.forEach((item, index) => {
  					applyTransition(item);
  					if (index >= visibleCount) item.style.maxHeight = '0px';
  					else item.style.maxHeight = `${item.scrollHeight}px`;
  				});

  				button.style.display = visibleCount >= items.length ? 'none' : '';
  			}

  			if (moreOpenText) moreOpenText.style.display = '';
  			if (moreCloseText) moreCloseText.style.display = 'none';
  		};

  		const showAllItems = () => {
  			if (!isLinesMode) {
  				items.forEach(item => item.style.maxHeight = `${item.scrollHeight}px`);
  			}
  			wrapper.classList.add('active');
  			button.classList.add('active');
  		};

  		const buttonHandler = () => {
  			if (isLinesMode) {
  				toggleLinesMode();
  				return
  			}

  			if (stepCount === 'all') {
  				showAllItems();
  				button.remove();
  				return
  			}

  			if (stepCount === 'toggle') {
  				if (!isToggleActive) {
  					showAllItems();
  					isToggleActive = true;
  					if (moreOpenText) moreOpenText.style.display = 'none';
  					if (moreCloseText) moreCloseText.style.display = '';
  				} else {
  					isToggleActive = false;

  					items.forEach((item, index) => {
  						if (index < visibleCount) {
  							item.style.maxHeight = `${item.scrollHeight}px`;
  						} else {
  							item.style.maxHeight = '0px';
  						}
  					});

  					if (moreOpenText) moreOpenText.style.display = '';
  					if (moreCloseText) moreCloseText.style.display = 'none';
  					wrapper.classList.remove('active');
  					button.classList.remove('active');
  				}
  				return
  			}

  			const step = parseInt(stepCount);
  			visibleCount += step;

  			items.forEach((item, index) => {
  				if (index < visibleCount) item.style.maxHeight = `${item.scrollHeight}px`;
  			});

  			if (visibleCount >= items.length) {
  				button.style.display = 'none';
  				wrapper.classList.add('active');
  				button.classList.add('active');
  			}
  		};

  		const handleMediaQuery = e => {
  			if (!e.matches) {
  				showAllItems();
  			} else {
  				hiddenElements.forEach(span => {
  					const children = Array.from(span.childNodes);
  					span.replaceWith(...children);
  				});
  				hiddenElements = [];
  				resetInitialState();
  				button.addEventListener('click', buttonHandler);
  			}
  		};

  		const initialize = () => {
  			resetInitialState();
  			button.addEventListener('click', buttonHandler);

  			if (isLinesMode && linesTarget) {
  				hiddenElements.forEach(span => {
  					const children = Array.from(span.childNodes);
  					span.replaceWith(...children);
  				});
  				hiddenElements = [];

  				const fullHeight = linesTarget.scrollHeight;

  				hiddenElements = limitLines(linesTarget, initialCount);
  				const limitedHeight = linesTarget.scrollHeight;

  				if (fullHeight <= limitedHeight) {
  					button.remove();
  				}

  				linesTarget.setAttribute('data-default-height', limitedHeight);
  			}

  		};

  		if (mediaBreakpoint) {
  			const queryType = mediaBreakpointType === 'min' ? 'min-width' : 'max-width';
  			mediaQuery = window.matchMedia(`(${queryType}: ${mediaBreakpoint}px)`);
  			mediaQuery.addEventListener('change', handleMediaQuery);
  			handleMediaQuery(mediaQuery);
  		} else {
  			initialize();
  		}


  		const recalcLines = () => {
  			if (!isLinesMode || !linesTarget) return

  			linesTarget.innerHTML = linesTarget.dataset.original;
  			hiddenElements = limitLines(linesTarget, initialCount);

  			if (button) {
  				button.style.display = hiddenElements.length ? '' : 'none';
  			}

  			linesTarget.classList.remove('active');
  			wrapper.classList.remove('active');
  			button.classList.remove('active');
  			if (moreOpenText) moreOpenText.style.display = '';
  			if (moreCloseText) moreCloseText.style.display = 'none';
  		};

  		window.addEventListener('resize', debounce(recalcLines, 100));

  		recalcLines();

  	});
  }

  function limitLines(element, maxLines) {
  	let totalLines = 0;
  	const hiddenSpans = [];

  	function processTextNode(node, parent) {
  		if (!node.textContent.trim()) return;

  		const range = document.createRange();
  		range.selectNodeContents(parent);
  		const rects = range.getClientRects();

  		if (rects.length === 0) return;

  		if (totalLines >= maxLines) {
  			const span = document.createElement('span');
  			span.className = 'hidd';
  			parent.insertBefore(span, node);
  			span.appendChild(node);
  			hiddenSpans.push(span);
  			return;
  		}

  		if (totalLines + rects.length > maxLines) {
  			const tempRange = document.createRange();
  			tempRange.setStart(node, 0);

  			let found = false;
  			let charIndex = 0;
  			let lastGoodIndex = 0;

  			while (!found && charIndex < node.textContent.length) {
  				tempRange.setEnd(node, charIndex + 1);
  				const tempRects = tempRange.getClientRects();

  				if (tempRects.length > 0) {
  					if (tempRects[tempRects.length - 1].bottom > rects[maxLines - totalLines - 1].bottom) {
  						found = true;
  					} else {
  						lastGoodIndex = charIndex + 1;
  					}
  				}

  				charIndex++;
  			}

  			if (found) {
  				const visibleText = node.textContent.substring(0, lastGoodIndex);
  				const hiddenText = node.textContent.substring(lastGoodIndex);

  				const hiddenNode = document.createTextNode(hiddenText);
  				const span = document.createElement('span');
  				span.className = 'hidd';
  				span.appendChild(hiddenNode);

  				node.textContent = visibleText;

  				parent.insertBefore(span, node.nextSibling);
  				hiddenSpans.push(span);

  				totalLines = maxLines;
  			} else {
  				totalLines += rects.length;
  			}
  		} else {
  			totalLines += rects.length;
  		}
  	}

  	function walkNodes(node) {
  		if (node.nodeType === Node.TEXT_NODE) {
  			processTextNode(node, node.parentNode);
  		}
  		else if (node.nodeType === Node.ELEMENT_NODE && totalLines < maxLines) {
  			Array.from(node.childNodes).forEach(walkNodes);
  		}
  		else if (node.nodeType === Node.ELEMENT_NODE) {
  			const span = document.createElement('span');
  			span.className = 'hidd';
  			node.parentNode.insertBefore(span, node);
  			span.appendChild(node);
  			hiddenSpans.push(span);
  		}
  	}

  	Array.from(element.childNodes).forEach(walkNodes);

  	return hiddenSpans;
  }

  /* 
  	================================================
  	  
  	Перенос данных в элементы
  	
  	================================================
  */

  function text() {
    let dataText = document.querySelectorAll("[data-text]");

    dataText.forEach((dataTextItem) => {
      dataTextItem.addEventListener("click", function () {
        let text = this.getAttribute("data-text")
          .replace(/\s{2,}/g, " ")
          .split(";");

        text.forEach((element) => {
          let items = element.split("|"); // Если несколько

          items.forEach((item) => {
            let parent = item.split(",")[0].trim(); // Родитель
            let children = item.split(",")[1].trim(); // Дочерний (из которого берется контент)
            let where = item.split(",")[2].trim(); // Куда вставлять

            let issetParent = this.closest(parent)?.length != 0; // Если есть родитель

            // Если класс во втором параметре совпадает с классом элемента, на который кликнули
            let isClassMatch = (() => {
              const cleanSelector = children.replace(/\[\d+\]$/, "");
              return cleanSelector.startsWith(".") && this.classList.contains(cleanSelector.substring(1));
            })();

            let isNotInput = document.querySelector(where).tagName != "INPUT"; // Если тег, куда будет вставляться контент != input

            let searchInChildren;

            let target = this.closest(parent)?.querySelector(children);

            searchInChildren = target ? target[isNotInput ? "innerHTML" : "value"] : false; // Если элемент, из которого берется контент находится внутри элемента, на который кликнули

            // Если элемент, из которого берется контент равен элементу, на который кликнули
            let searchInThis = (() => {
              const match = children.match(/(.*?)(?:\[(\d+)\])?$/);
              const elements = document.querySelectorAll(match[1]);
              return elements[match[2] ? parseInt(match[2]) : 0]?.innerHTML;
            })();

            // Если нужно переместить весь блок целиком
            if (parent == children) {
              document.querySelector(where).innerHTML = `${this.closest(parent).outerHTML}`;
            }

            // Если нужно вставить в src
            if (document.querySelector(where).tagName == "IMG" && document.querySelector(children).tagName == "IMG") {
              document.querySelector(where).style.opacity = "0";
              document.querySelector(where).src = document.querySelector(children).getAttribute("src");

              setTimeout(() => {
                document.querySelector(where).style.opacity = "1";
              }, 300);
            } else {
              if ((issetParent && isNotInput && isClassMatch && searchInThis) || (!issetParent && isNotInput && isClassMatch && searchInThis)) {
                document.querySelector(where).innerHTML = searchInThis;
              }

              if ((issetParent && isNotInput && !isClassMatch && searchInChildren) || (!issetParent && isNotInput && !isClassMatch && searchInChildren)) {
                document.querySelector(where).innerHTML = searchInChildren;
              }

              if ((issetParent && !isNotInput && isClassMatch && searchInThis) || (!issetParent && !isNotInput && isClassMatch && searchInThis)) {
                document.querySelector(where).value = searchInThis;
              }

              if ((issetParent && !isNotInput && !isClassMatch && searchInChildren) || (!issetParent && !isNotInput && !isClassMatch && searchInChildren)) {
                document.querySelector(where).value = searchInChildren;
              }

              if (where.charAt(0) == "a") {
                // Если нужно вставить в href
                document.querySelector(where).setAttribute("href", document.querySelector(children).getAttribute("href"));
              }
            }
          });
        });
      });
    });
  }

  text();

  /* 
  	================================================
  	  
  	Вставка видео
  	
  	================================================
  */

  function video() {
    class LazyVideo {
      constructor(videoUrl, options = {}) {
        let defaultOptions = {
          isFile: false,
        };

        this.options = Object.assign(defaultOptions, options);
        this.isFile = options.isFile;
        this.container = options.container;
        this.videoUrl = this.normalizeUrl(videoUrl);

        if (this.container) {
          this.thumbnail = this.container.querySelector(".video__thumbnail");
          this.playButton = this.container.querySelector(".video__play");
        } else {
          console.error("Ошибка: не найден блок .video");
          return;
        }

        this.check();
        this.init();
      }

      check() {
        if (!this.videoUrl) {
          console.error("Ошибка: не указан адрес видео");
          return;
        }

        if (!this.playButton) {
          console.error("Ошибка: не найдена кнопка");
          return;
        }
      }

      init() {
        this.playButton?.addEventListener("click", () => this.loadVideo());
      }

      loadVideo() {
        this.thumbnail.remove();
        this.playButton.remove();

        if (this.isFile) {
          const video = document.createElement("video");
          video.src = this.videoUrl;
          video.controls = true;
          video.autoplay = true;
          this.container.appendChild(video);
        } else {
          const iframe = document.createElement("iframe");
          iframe.src = `${this.videoUrl}${this.videoUrl.includes("?") ? "&" : "?"}autoplay=1`;
          iframe.allow = "autoplay; encrypted-media";
          iframe.allowFullscreen = true;
          this.container.appendChild(iframe);
        }
      }

      normalizeUrl(url) {
        const vkShortRegex = /^https:\/\/vkvideo\.ru\/video(\d+)_(\d+)$/;
        const vkMatch = url.match(vkShortRegex);
        if (vkMatch) {
          const oid = vkMatch[1];
          const id = vkMatch[2];
          return `https://vkvideo.ru/video_ext.php?oid=${oid}&id=${id}&hd=2`;
        }

        const rutubeRegex = /^https:\/\/rutube\.ru\/video\/([a-z0-9]+)\/?$/i;
        const rutubeMatch = url.match(rutubeRegex);
        if (rutubeMatch) {
          const id = rutubeMatch[1];
          return `https://rutube.ru/play/embed/${id}`;
        }

        return url;
      }
    }

    const videos = document.querySelectorAll(".video");

    if (videos) {
      videos.forEach((video) => {
        const videoUrl = video.dataset.url;

        const isFile = (() => {
          try {
            const url = new URL(videoUrl, window.location.origin);
            return url.origin === window.location.origin;
          } catch {
            return true;
          }
        })();

        new LazyVideo(videoUrl, {
          container: video,
          isFile: isFile,
        });
      });
    }
  }

  /* 
  	================================================
  	  
  	До / После
  	
  	================================================
  */

  function splitView() {
  	class SplitView {
  		constructor(props) {
  			const defaultConfig = { init: true, logging: true };
  			this.config = Object.assign(defaultConfig, props);

  			if (this.config.init) {
  				const items = document.querySelectorAll('[data-splitview]');
  				if (items.length) this.splitViewInit(items);
  			}
  		}

  		splitViewInit(items) {
  			items.forEach(item => this.splitViewItemInit(item));
  		}

  		splitViewItemInit(wrapper) {
  			const arrow = wrapper.querySelector('[data-splitview-arrow]');
  			const after = wrapper.querySelector('[data-splitview-after]');
  			const range = arrow?.querySelector('input[type="range"]');
  			if (!arrow || !after) return

  			const arrowWidth = parseFloat(getComputedStyle(arrow).width);
  			let sizes = {};

  			const updatePosition = percent => {
  				arrow.style.cssText = `left:calc(${percent}% - ${arrowWidth}px)`;
  				after.style.cssText = `width:${100 - percent}%`;
  				if (range) range.value = percent;
  			};

  			const startDrag = e => {
  				if (wrapper.closest('.swiper')) {
  					const swiperEl = wrapper.closest('.swiper')[0] || wrapper.closest('.swiper');

  					if (swiperEl.swiper) swiperEl.swiper.allowTouchMove = false;
  				}

  				e.touches ? e.touches[0].clientX : e.clientX;
  				sizes = {
  					width: wrapper.offsetWidth,
  					left: wrapper.getBoundingClientRect().left - scrollX
  				};


  				const move = evt => {
  					const x = evt.touches ? evt.touches[0].clientX : evt.clientX;
  					let pos = x - sizes.left;
  					pos = Math.max(0, Math.min(pos, sizes.width));
  					const percent = (pos / sizes.width) * 100;
  					updatePosition(percent);
  				};

  				const stop = () => {
  					if (wrapper.closest('.swiper')) {
  						const swiperEl = wrapper.closest('.swiper')[0] || wrapper.closest('.swiper');
  						if (swiperEl.swiper) swiperEl.swiper.allowTouchMove = true;
  					}

  					document.removeEventListener('mousemove', move);
  					document.removeEventListener('mouseup', stop);
  					document.removeEventListener('touchmove', move);
  					document.removeEventListener('touchend', stop);
  				};

  				document.addEventListener('mousemove', move);
  				document.addEventListener('mouseup', stop, { once: true });
  				document.addEventListener('touchmove', move);
  				document.addEventListener('touchend', stop, { once: true });

  				document.addEventListener('dragstart', e => e.preventDefault(), { once: true });
  			};


  			arrow.addEventListener('mousedown', startDrag);
  			arrow.addEventListener('touchstart', startDrag);

  			if (range) {
  				range.addEventListener('input', e => {
  					const percent = parseFloat(e.target.value);
  					updatePosition(percent);
  				});
  			}

  			updatePosition(50);
  		}
  	}

  	new SplitView({});
  }

  /* 
  	================================================
  	  
  	Контекстное меню

  	================================================
  */

  function context() {
    let activeContext = null;

    const getMenu = (context) => context.querySelector("[data-context-menu]");
    const getTrigger = (context) => context.querySelector("button");
    const positionMenu = (context, menu) => {
      const trigger = getTrigger(context);
      const margin = 8;

      menu.style.top = "";
      menu.style.bottom = "";
      menu.style.left = "";
      menu.style.right = "";

      if (getPageSide(context) === "left") {
        menu.style.left = "0";
      } else {
        menu.style.right = "0";
      }

      const rect = trigger.getBoundingClientRect();
      const menuHeight = menu.offsetHeight;
      const spaceBelow = window.innerHeight - rect.bottom;
      const gap = 4;

      if (spaceBelow >= menuHeight + margin) {
        menu.style.top = `${trigger.offsetHeight + gap}px`;
      } else {
        menu.style.top = `-${menuHeight + gap}px`;
      }
    };

    const openMenu = (context) => {

      const menu = getMenu(context);
      if (!menu) return;

      if (activeContext && activeContext !== context) {
        closeMenu(activeContext);
      }

      positionMenu(context, menu);

      menu.classList.toggle("active");

      context.classList.add("active");
      activeContext = context;
    };

    const closeMenu = (context) => {

      const menu = getMenu(context);
      if (!menu) return;

      menu.classList.remove("active");
      context.classList.remove("active");

      if (activeContext === context) {
        activeContext = null;
      }

      const trigger = getTrigger(context);
      trigger?.blur();
    };

    const toggleMenu = (context) => {
      context.classList.contains("active") ? closeMenu(context) : openMenu(context);
    };

    document.addEventListener("click", (e) => {
      if (!(e.target instanceof Element)) return;

      const trigger = e.target.closest("[data-context] > button");
      const context = trigger?.closest("[data-context]");
      const menu = e.target.closest("[data-context-menu]");

      if (context && trigger) {
        e.preventDefault();
        toggleMenu(context);
        return;
      }

      if (!menu && activeContext) {
        closeMenu(activeContext);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && activeContext && true) {
        closeMenu(activeContext);
      }
    });

    document.addEventListener("focusin", (e) => {
      if (!activeContext) return;
      if (!(e.target instanceof Element)) return;

      if (!activeContext.contains(e.target)) {
        closeMenu(activeContext);
      }
    });

    const repositionAllMenus = () => {
      document.querySelectorAll("[data-context].active").forEach((context) => {
        const menu = context.querySelector("[data-context-menu]");
        if (menu) positionMenu(context, menu);
      });
    };

    window.addEventListener("resize", debounce(repositionAllMenus, 150));
  }

  //
  //
  //
  //
  // Комментарии

  function comment() {
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

    const guestDataRaw = window.getCookie("comment_guest") || "{}";
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
    // Обновление счётчиков

    const updateCommentsUI = () => {
      const wrapper = document.querySelector(".comments__wrapper");
      const counter = document.querySelector(".title-2 .gray-text");

      if (counter) {
        counter.textContent = " " + (wrapper?.querySelectorAll(".comment").length || 0);
      }
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
        const originalText = submitButton.textContent;
        submitButton.textContent = "Отправка...";

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
              wrapper?.prepend(newComment);
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

            window.setCookie("comment_guest", JSON.stringify(guest));

            if (authorInput) authorInput.value = guest.name;
            if (emailInput) emailInput.value = guest.email;
          }

          form.reset();

          initReply();
          updateCommentsUI();

          notify(data?.data?.approved ? "Комментарий добавлен" : "Отправлено на модерацию", "", "success");
        } catch {
          notify("Ошибка сети", "", "danger");
        } finally {
          submitButton.disabled = false;
          submitButton.textContent = originalText;

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

    const initReply = () => {
      document.querySelectorAll(".comment__reply").forEach((button) => {
        if (button.dataset.replyInitialized) return;
        button.dataset.replyInitialized = "1";

        button.addEventListener("click", () => {
          const comment = button.closest(".comment");
          if (!comment) return;

          const existingForm = comment.querySelector(".comment-add");
          if (existingForm) {
            existingForm.remove();
            return;
          }

          document.querySelectorAll(".comment-add").forEach((form) => {
            if (!form.closest(".comments__top")) form.remove();
          });

          const commentId = comment.id.replace("comment-", "");
          const postId = document.querySelector("#comment_post_ID")?.value || "";

          const html = `
					<form class="form comment-add">
						<input type="hidden" name="comment_post_ID" value="${escapeHTML(postId)}">
						<input type="hidden" name="comment_parent" value="${escapeHTML(commentId)}">
						<div class="form__fields" style="--columns: 2">
							<input class="input" type="text" name="author" placeholder="Ваше имя" required>
							<input class="input" type="email" name="email" placeholder="Ваш email" required>
							<textarea name="comment" class="textarea" placeholder="Ответ" required data-columns="full"></textarea>
						</div>
						<div class="flex justify-start">
							<button class="button button_small" type="submit">Оставить ответ</button>
						</div>
					</form>
				`;

          comment.querySelector(".comment__meta")?.insertAdjacentHTML("afterend", html);

          const newForm = comment.querySelector("form.comment-add");
          initForm(newForm);
          newForm?.querySelector("textarea")?.focus();
        });
      });
    };

    initReply();

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

      initReply();
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

    //
    //
    // События

    document.addEventListener("click", (e) => {
      const comment = e.target.closest(".comment");
      if (!comment) return;

      if (e.target.closest("[data-comment-edit]")) {
        enableEdit(comment);
        return;
      }

      if (e.target.closest("[data-cancel-edit]")) {
        cancelEdit(comment);
        return;
      }

      if (e.target.closest("[data-save-edit]")) {
        saveEdit(comment, getCommentId(comment));
      }
    });

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
      const btn = e.target.closest("[data-comment-history]");
      if (!btn) return;

      const comment = btn.closest(".comment");
      if (!comment) return;

      openHistory(comment);
    });

    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".modal-comment-restore");
      if (!btn) return;

      const tr = btn.closest("tr");
      const text = tr.querySelector("td:nth-child(3)")?.innerHTML;

      const comment = document.querySelector(`#comment-${btn.dataset.commentId}`);
      if (!comment) return;

      const textEl = comment.querySelector("[data-text]");
      if (textEl) textEl.innerHTML = text;

      fadeOut$1(document.querySelector(".modal-comment-history"));
      enableEdit(comment);
    });

    //
    //
    // Жалоба

    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-comment-report]");
      if (!btn) return;

      const comment = btn.closest(".comment");
      if (!comment) return;

      openReport(comment);
    });

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
  }

  burger();
  fixedMenu();
  form();
  gallery();
  map();
  numbers();
  modal();
  rating();
  scroll();
  showMore();
  select();
  spoller();
  subMenu();
  tab();
  tooltip();
  text();
  video();
  splitView();
  context();
  comment();

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
    new Swiper(".doctor-container", {
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
    new Swiper(".gallery-container", {
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
  const modalReviews = document.querySelector(".modal-reviews");
  const modalContent = modalReviews.querySelector(".modal-reviews__wrapper");

  if (feedbackWrapper) {
    feedbackWrapper.addEventListener("click", (e) => {
      const feedbackButton = e.target.closest(".feedback__item-more");
      if (!feedbackButton) return;

      const feedbackItem = feedbackButton.closest(".feedback__item");

      modalContent.innerHTML = "";
      modalContent.insertAdjacentHTML("beforeend", feedbackItem.outerHTML);
    });
  }

  // фокус
  (() => {
    const FOCUSABLE = `
    a[href],
    button,
    input,
    textarea,
    select,
    [tabindex]:not([tabindex="-1"])
  `.trim();

    const isActiveByRule = (container) => {
      const rule = container.dataset.tabFocus;
      if (!rule) return false;

      let [targetSelector, activeClass] = rule.split(",").map((s) => s.trim());
      if (!targetSelector || !activeClass) return false;

      activeClass = activeClass.replace(".", "");

      const context = container.closest("[data-context]") || document;
      const target = context.querySelector(targetSelector);
      const hasClass = (el) => el?.classList?.contains(activeClass);
      const result = hasClass(target) || hasClass(container) || hasClass(context);

      return result;
    };

    const update = (container, reason = "") => {
      const active = isActiveByRule(container);

      container.querySelectorAll(FOCUSABLE).forEach((el) => {
        if (active) {
          if (el.__tabindexSaved !== undefined) {
            el.setAttribute("tabindex", el.__tabindexSaved);
            delete el.__tabindexSaved;
          } else {
            el.removeAttribute("tabindex");
          }
        } else {
          if (el.__tabindexSaved === undefined) {
            el.__tabindexSaved = el.getAttribute("tabindex");
          }
          el.setAttribute("tabindex", "-1");
        }
      });
    };

    const updateAll = (reason = "") => {
      document.querySelectorAll("[data-tab-focus]").forEach((el) => update(el, reason));
    };

    /* ---------- observers ---------- */
    new MutationObserver(() => updateAll("mutation")).observe(document.documentElement, {
      attributes: true,
      subtree: true,
      attributeFilter: ["class"],
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        requestAnimationFrame(() => updateAll("enter/space"));
      }

      if (e.key === "Tab") {
        updateAll("before tab");
      }
    });

    document.addEventListener("DOMContentLoaded", () => updateAll("init"));
  })();

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;

    // Ждём, пока браузер сменит фокус
    setTimeout(() => {
    }, 0);
  });

})();
//# sourceMappingURL=script.js.map
