<script>
import CodeBraces from "svelte-material-icons/CodeBraces.svelte";
import Home from "svelte-material-icons/Home.svelte";
import HumanGreeting from "svelte-material-icons/HumanGreeting.svelte";
import TextBox from "svelte-material-icons/TextBox.svelte";
</script>

<div id="nav-container">
  <a  href="/"><div class="icon"><Home size='3em'/></div></a>
  <a  href="/"><div class="icon"><CodeBraces size='3em'/></div></a>
  <a  href="/"><div class="icon"><TextBox size='3em'/></div></a>
  <a  href="/"><div class="icon"><HumanGreeting size='3em'/></div></a>
</div>

<style>
  #nav-container {
    width: 120px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
  .icon {
    transform: translateZ(20px)
  }

</style>