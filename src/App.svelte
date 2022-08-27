<script>
  import NavBar from "./lib/components/NavBar.svelte";
  let view = 'home';
  const toggleView = (selection) => {
    view = selection;
  }
</script>

<main>
  <div class="container">
    {#if view === 'home'}
    <div class="sec">
      Home
    </div>
    {/if}
    {#if view === 'projects'}
    <div class="sec">
      Projects
    </div>
    {/if}
    {#if view === 'resume'}
    <div class="sec">
      Resume
    </div>
    {/if}
    {#if view === 'about'}
    <div class="sec">
      About
    </div>
    {/if}
  </div>
  <NavBar toggleView={toggleView}/>
</main>

<style>

main {
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
}

.container {
  width: calc(100% - 148px);
  height: 100%;
}

.sec {
  height: 100%;
  width: 100%;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

</style>