console.log("Setup Done");

const menuButton = document.querySelector(".mobile_btn_wrapper");
const mobileMenu = document.querySelector(".mobile-menu-box");
const upperLine = document.querySelector(".hamburger_line_top");
const lowerLine = document.querySelector(".hamburger_line_bottom");
const navLinks = document.querySelectorAll(".nav_link");

var tl = gsap.timeline({
  defaults: { duration: 1, ease: Back.easeOut.config(2) },
});

let menuOpen = false;
tl.paused(true);
tl.to(".mobile-menu-box", { x: 0, y: 0, z: 0 });
// tl.to(".hamburger_line_top", 0.5, { rotation: "225_short" });
// tl.to(".hamburger_line_bottom", 0.5, { rotation: "135_short" });

menuButton.addEventListener("click", () => {
  if (!menuOpen) {
    tl.play();
    menuOpen = true;
  } else {
    tl.reverse(0.7);
    menuOpen = false;
  }
});

navLinks.forEach((el) =>
  el.addEventListener("click", (event) => {
    if (menuOpen) {
      tl.reverse(0.7);
      menuOpen = false;
    }
  })
);
