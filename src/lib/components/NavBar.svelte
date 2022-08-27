<script>
import CodeBraces from "svelte-material-icons/CodeBraces.svelte";
import Home from "svelte-material-icons/Home.svelte";
import HumanGreeting from "svelte-material-icons/HumanGreeting.svelte";
import TextBox from "svelte-material-icons/TextBox.svelte";
</script>

<div id="nav-container">
  <div class="icon"><Home size='3em'/></div>
  <div class="icon"><CodeBraces size='3em' /></div>
  <div class="icon"><TextBox size='3em' /></div>
  <div class="icon"><HumanGreeting size='3em' /></div>
</div>

<style>
  #nav-container {
    width: 240px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    box-shadow: 0 0 2px var(--secondary-light);
    transform-style: preserve-3d;
    transform: perspective(1000px);
  }
  .icon {
    transform: translateZ(30px)
  }
</style>