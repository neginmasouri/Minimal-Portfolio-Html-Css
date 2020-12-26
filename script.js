//NavBar
let burger = document.querySelector(".burger");
let items = document.querySelector(".nav__items");
const Slider = () => {
  burger.addEventListener("click", () => {
    items.classList.toggle("toggle");
  });
};
Slider();

//jump
const clickToTop = document.querySelector("#clear");
let verticalAxis = 0;
let target = 0;
let speed = 10;
let move = 0;
//Scroll
function jump(init) {
  target = document.getElementById(init).offsetTop;
  move = setTimeout(() => {
    jump(init);
  }, 1);
  verticalAxis += speed;
  if (verticalAxis > target) {
    clearTimeout(move);
  }
  window, scrollTo(0, verticalAxis - 100);
}
clickToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
