import "./app.css";
import VanillaTilt from "vanilla-tilt";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});
const navBtns = Array.from(document.querySelectorAll("#nav-btn"));
const homeMsg = document.getElementById("message");
const projectcontainer = document.getElementById("proj-container");
const resumeHead = document.getElementById("resume-head");
const postcard = document.getElementById("postcard");
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
  reverse: false,
  "full-page-listening": true,
});
VanillaTilt.init(projectcontainer, {
  max: 2,
  speed: 300,
  glare: true,
  "max-glare": 0.04,
  reset: false,
});
VanillaTilt.init(resumeHead, {
  max: 10,
  speed: 200,
  reverse: false,
  "full-page-listening": true,
});
VanillaTilt.init(postcard, {
  max: 4,
  speed: 300,
  glare: true,
  "max-glare": 0.08,
  reset: false,
  reverse: true,
});

export default app;
