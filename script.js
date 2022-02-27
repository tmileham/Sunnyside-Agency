const burger = document.querySelector("#burger");
const mobilenav = document.querySelector(".mobilenav");

burger.addEventListener("click", () => {
  mobilenav.classList.toggle("mobile-nav-on");
  mobilenav.classList.toggle("mobile-nav-off");

  console.log(mobilenav);
  console.log("clicked.");
});

console.log(burger);
