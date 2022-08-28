import "./app.css";
import VanillaTilt from "vanilla-tilt";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});
const navBtns = Array.from(document.querySelectorAll("#nav-btn"));
const homeMsg = document.getElementById("message");
navBtns.forEach((btn) => {
  VanillaTilt.init(btn, {
    max: 15,
    speed: 300,
    glare: true,
    "max-glare": 0.33,
    reverse: true,
  });
});
VanillaTilt.init(homeMsg, {
  max: 5,
  speed: 200,
  reverse: true,
  "full-page-listening": true,
});

export default app;
