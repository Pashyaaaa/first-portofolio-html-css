const hamburgerBtn = document.querySelector(".navbar .btnMenu input");
const navbar = document.querySelector(".navbar .navigasi");

hamburgerBtn.addEventListener("click", function () {
  navbar.classList.toggle("slide");
});
