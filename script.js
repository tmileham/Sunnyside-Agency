const burgerBtn = document.getElementById("burger");
const closeBtn = document.getElementById("close");
const mobilenav = document.querySelector(".mobilenav");

burgerBtn.addEventListener("click", () => {
  mobilenav.classList.toggle("mobile-nav-on");
  mobilenav.classList.toggle("mobile-nav-off");
  burgerBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
  mobilenav.classList.toggle("mobile-nav-on");
  mobilenav.classList.toggle("mobile-nav-off");
  burgerBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("show");
});

console.log(burger);
