<script>
import CodeBraces from "svelte-material-icons/CodeBraces.svelte";
import Home from "svelte-material-icons/Home.svelte";
import HumanGreeting from "svelte-material-icons/HumanGreeting.svelte";
import TextBox from "svelte-material-icons/TextBox.svelte";
</script>

<div id="nav-container">
  <a  data-text="Home" href="/"><div class="icon"><Home size='3em'/></div></a>
  <a  data-text="Projects" href="/"><div class="icon"><CodeBraces size='3em'/></div></a>
  <a  data-text="Resume" href="/"><div class="icon"><TextBox size='3em'/></div></a>
  <a  data-text="About" href="/"><div class="icon"><HumanGreeting size='3em'/></div></a>
</div>

<style>
  #nav-container {
    width: 148px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    transform-style: preserve-3d;
    transform: perspective(1000px);
  }

  a {
    width: 96px;
    height: 96px;
    display: grid;
    place-content: center;
    transform-style: preserve-3d;
    transform: perspective(1000px);
  }
  a::before {
  content: attr(data-text);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(40px, -50%);
  pointer-events: none;
  font-size: 2em;
  font-weight: 700;
  transition-duration: 0.5s;
  opacity: 0;
  transition-timing-function: ease-in-out;
  }
  a:hover::before {
    opacity: 0.8;
  transform: translate(-200px, -50%);
  }
  .icon {
    transform: translateZ(20px)
  }

</style>