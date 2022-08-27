<script>
import CodeBraces from "svelte-material-icons/CodeBraces.svelte";
import Home from "svelte-material-icons/Home.svelte";
import HumanGreeting from "svelte-material-icons/HumanGreeting.svelte";
import TextBox from "svelte-material-icons/TextBox.svelte";

</script>

<div class="nav-container">
  <Home size='3em'/>
  <CodeBraces size='3em' />
  <TextBox size='3em' />
  <HumanGreeting size='3em' />

</div>

<style>
  .nav-container {
    width: 240px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 2px var(--secondary-light);
  }
</style>