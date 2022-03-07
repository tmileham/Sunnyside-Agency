const burgerBtn = document.getElementById("burger");
const closeBtn = document.getElementById("close");
const mobilenav = document.querySelector(".mobilenav");
let mobileNavEnabled;

window.addEventListener("resize", () => {
  let windowWidth = window.innerWidth;

  if (windowWidth > 767 && mobileNavEnabled) {
    mobilenav.classList.toggle("mobile-nav-on");
    mobilenav.classList.toggle("mobile-nav-off");
    burgerBtn.classList.toggle("hidden");
    closeBtn.classList.toggle("show");
    mobileNavEnabled = false;
  }
});

burgerBtn.addEventListener("click", () => {
  mobilenav.classList.toggle("mobile-nav-on");
  mobilenav.classList.toggle("mobile-nav-off");
  burgerBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("show");
  mobileNavEnabled = true;
});

closeBtn.addEventListener("click", () => {
  mobilenav.classList.toggle("mobile-nav-on");
  mobilenav.classList.toggle("mobile-nav-off");
  burgerBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("show");
  mobileNavEnabled = false;
});

console.log(burger);
