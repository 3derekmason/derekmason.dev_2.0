<script>
import Github from "svelte-material-icons/Github.svelte";
import Linkedin from "svelte-material-icons/Linkedin.svelte";
import Twitter from "svelte-material-icons/Twitter.svelte";
import Post from "svelte-material-icons/Post.svelte";

</script>

<div id="home">
  <div id="message">
    <h2>Hi, my name is</h2>
    <h1>Derek Mason.</h1>
    <h3>I am a full stack developer/personal trainer from Durango, Colorado. Specializing in building exceptional personal experiences; my focus is bringing accessible, human-friendly tools to all walks of life.</h3>
    <span class="social">
      <a data-text="Github" href="https://github.com/3derekmason" target="_blank"><Github size="2em"/></a>
      <a data-text="LinkedIn" href="https://linkedin.com/in/3derekmason" target="_blank"><Linkedin size="2em"/></a>
      <a data-text="Twitter" href="https://twitter.com/3derekmason" target="_blank"><Twitter size="2em"/></a>
      <a data-text="Medium" href="https://medium.com/@derekmason" target="_blank"><Post size="2em" /></a>
    </span>
  </div>
</div>

<style>
  #home{
  height: 100%;
  width: 100%;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(var(--bg-fade), transparent);
  }
  #message {
    width: 60%;
    height: 100%;
    display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  }

  h1 {
    font-size: 3em;
    letter-spacing: 2px;
    font-weight: 400;
    color: var(--primary-main);

  }
  h2 {
    font-weight: 400;
    text-shadow: 0 0 4px var(--secondary-light);
  }
  h3 {
    font-weight: 400;
    margin-top: 24px;
    background: linear-gradient(
    135deg,
    var(--text-color),
    80%,
    var(--primary-light)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  .social{
    display: flex;
    align-items: center;
    gap: 96px;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    margin-left: 24px;
  }

  a {
    color: var(--primary-accent);
    transform: translateZ(20px);
  }

  a:hover {
    color: var(--text-color)
  }

  a::after{
    content: attr(data-text);
  position: absolute;
  pointer-events: none;
  font-size: 20px;
  transition-duration: 0.5s;
  opacity: 0;
  transition-timing-function: ease-in-out;
  }
  a:hover::after{
    opacity: 1;
    transform: translateX(8px);
  }
</style>