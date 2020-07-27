let btns = Array.from(document.querySelectorAll(".navigation__link"));
btns.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".navigation__checkbox").checked = false;
  });
});

document.querySelector(".popup").addEventListener("click", () => {
  document.querySelector(".popup").style.visibility = "hidden";
  document.querySelector(".popup").style.opacity = 0;
  document.querySelector(".popup__content").style.opacity = 0;
});

document.querySelector(".btn-read").addEventListener("click", () => {
  document.querySelector(".popup").style.visibility = "visible";
  document.querySelector(".popup").style.opacity = 1;
  document.querySelector(".popup__content").style.opacity = 1;
  document.querySelector(".popup__content").style.transform =
    "translate(-50%, -50%) scale(1)";
});
