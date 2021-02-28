var ESC_CODE = 27;

var openModal = document.querySelector(".btn-js-link");
var modalPopup = document.querySelector(".modal");
var modalWrapper = document.querySelector(".modal__wrapper");
var modalClose = modalPopup.querySelector(".modal__btn-close");
var modalActive = document.querySelector(".modal--active");

var form = modalPopup.querySelector("form")
var userName = modalPopup.querySelector("[name=user-form-name]");
var userPhone = modalPopup.querySelector("[name=user-form-phone]");
var userMessage = modalPopup.querySelector("[name=user-form-message]");

var isStorageSupport = true;
var storage = "";
var storagePhone = "";
var storageMessage = "";

try {
  storage = localStorage.getItem("userName");
  storagePhone = localStorage.getItem("userPhone");
  storageMessage = localStorage.getItem("userMessage");
} catch (err) {
  isStorageSupport = false;
}

openModal.addEventListener("click", function (evt) {
  evt.preventDefault();

  modalPopup.classList.add("modal--active");
  document.body.style.overflow = "hidden";

  if (storage) {
    userName.value = storage;
    userPhone.value = storagePhone;
    userMessage.value = storageMessage;
  }

  userName.focus();
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();

  modalPopup.classList.remove("modal--active");
  modalWrapper.classList.remove("modal--error");
  document.body.style.overflow = "";
});

modalPopup.addEventListener("click", function (evt) {
  if (evt.target == modalPopup) {
    modalPopup.classList.remove("modal--active");
    document.body.style.overflow = "";
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === ESC_CODE) {
    evt.preventDefault();

    if (modalPopup.classList.contains("modal--active")) {
      modalPopup.classList.remove("modal--active");
      modalWrapper.classList.remove("modal--error");
      document.body.style.overflow = "";
    }
  }
});

/*----- Валидация формы -----*/

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (!userName.value || !userPhone.value || !userMessage.value) {
    evt.preventDefault();
    modalWrapper.classList.remove("modal--error");
    modalWrapper.offsetWidth = modalWrapper.offsetWidth;
    modalWrapper.classList.add("modal--error");
  } else {
    if(isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userPhone", userPhone.value);
      localStorage.setItem("userMessage", userMessage.value);
    }
  }
});

/*----- Меню аккордион -----*/

var toggleMenu = document.getElementsByClassName("main-footer__btn"),
    menuList = document.getElementsByClassName("menu-list");

for (var i = 0; i < toggleMenu.length; i++) {
  toggleMenu[i].addEventListener("click", function() {
    if (!(this.classList.contains("main-footer__btn--active"))) {
      for (var i = 0; i < toggleMenu.length; i++) {
        toggleMenu[i].classList.remove("main-footer__btn--active");
      }
      this.classList.add("main-footer__btn--active");
    } else {
      this.classList.remove("main-footer__btn--active");
    }
  });
}
