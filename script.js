"use strict";

const currentYear = document.getElementById("nam-hien-tai");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

const menuButton = document.querySelector(".nut-menu-di-dong");
const menu = document.getElementById("danh-sach-menu");

if (menuButton && menu) {
  const setMenuOpen = (isOpen) => {
    menu.classList.toggle("danh-sach-menu-mo", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Đóng menu" : "Mở menu");
  };

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  });
}

const feedbackForm = document.getElementById("bieu-mau-gop-y");
const formStatus = document.getElementById("thong-bao-form");

if (feedbackForm && formStatus) {
  feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent =
      "Biểu mẫu minh họa đã được kiểm tra; thông tin không được gửi hoặc lưu.";
  });
}
