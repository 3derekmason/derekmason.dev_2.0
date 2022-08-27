import "./app.css";
import VanillaTilt from "vanilla-tilt";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});
const navBtns = Array.from(document.querySelectorAll("#nav-btn"));
navBtns.forEach((btn) => {
  VanillaTilt.init(btn, {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.33,
  });
});

export default app;
