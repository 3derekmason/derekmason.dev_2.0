<script>
  import CodeBraces from "svelte-material-icons/CodeBraces.svelte";
  import Home from "svelte-material-icons/Home.svelte";
  import HumanGreeting from "svelte-material-icons/HumanGreeting.svelte";
  import Mailbox from "svelte-material-icons/Mailbox.svelte";
  import TextBox from "svelte-material-icons/TextBox.svelte";
</script>

<div id="nav-container">
  <p>Menu</p>
  <a href="#home" id="nav-btn" data-text="Home">
    <div class="icon"><Home size='3em'/></div>
  </a>
  <a href="#projects" id="nav-btn" data-text="Projects">
    <div class="icon"><CodeBraces size='3em'/></div>
  </a>
  <a href="#resume" id="nav-btn" data-text="Resume">
    <div class="icon"><TextBox size='3em'/></div>
  </a>
  <a href="#about" id="nav-btn" data-text="About">
    <div class="icon"><HumanGreeting size='3em'/></div>
  </a>
  <a href="#contact" id="nav-btn" data-text="Contact">
    <div class="icon"><Mailbox size='3em'/></div>
  </a>
</div>

<style>
  #nav-container {
    width: 148px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    transform-style: preserve-3d;
    transform: perspective(1000px);
  }
  p{
    font-family: var(--font-code);
    cursor: default;
  }
  #nav-btn {
    width: 96px;
    height: 96px;
    display: grid;
    place-content: center;
    transform-style: preserve-3d;
    transform: perspective(1000px);
  }
  #nav-btn::before {
  content: attr(data-text);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(40px, -30%);
  pointer-events: none;
  font-family: var(--font-code);
  font-size: 2em;
  font-weight: 700;
  transition-duration: 0.5s;
  opacity: 0;
  transition-timing-function: ease-in-out;
  }
  #nav-btn:hover::before {
    opacity: 0.8;
  transform: translate(-200px, -50%);
  }
  .icon {
    transform: translateZ(20px)
  }

  @media (max-width: 600px){
    #nav-container{
      flex-direction: row;
      width: 400px;
      height: 88px;
      position: absolute;
      transform: translateY(-45%);
      gap: 4px;
    }
    p {
      display: none;
    }
    #nav-btn:before {
      display: none;
    }
  }

</style>