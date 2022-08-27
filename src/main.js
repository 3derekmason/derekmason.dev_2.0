import "./app.css";
import VanillaTilt from "vanilla-tilt";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});
const navbar = document.getElementById("nav-container");
VanillaTilt.init(navbar, {
  max: 25,
  speed: 400,
});

export default app;
