import { body } from "../variables";
import { fadeIn, fadeOut } from "../ui/animation";

// Очистка input и textarea при закрытии модалки и отправки формы / Удаление классов ошибки
let inputs = document.querySelectorAll("input, textarea");

export function clearInputs() {
  inputs.forEach((element) => {
    element.classList.remove("wpcf7-not-valid", "error");
  });
}

export function checkInputDateValue(input) {
  input.classList.toggle("empty", input.value.length === 0);
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
export function initFormValidation(form) {
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
export function successSubmitForm(form) {
  let popupInterval = 1500;

  fadeOut(".popup");

  setTimeout(() => {
    fadeIn(".popup-thank");
  }, popupInterval - 500);

  setTimeout(() => {
    fadeOut(".popup");
  }, popupInterval * 2);

  setTimeout(() => {
    body.classList.remove("no-scroll");
  }, popupInterval * 3);

  form.reset();
  form.querySelectorAll("[data-original-placeholder]").forEach((input) => {
    input.placeholder = input.getAttribute("data-original-placeholder");
  });
}

if (typeof window !== "undefined") {
  window.successSubmitForm = successSubmitForm;
}
