import { debounce } from "./core/helpers";
import { loaded } from "./core/dom";
import { isSafari, checkWebp } from "./ui/browser";
import { checkBurgerAndMenu } from "./core/checks";
import { headerTop } from "./variables";

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
