<script>
  import About from "./lib/pages/About.svelte";
  import Home from "./lib/pages/Home.svelte";
  import NavBar from "./lib/components/NavBar.svelte";
  import Projects from './lib/pages/Projects.svelte';
import Resume from "./lib/pages/Resume.svelte";
  let view = 'home';
  const toggleView = (selection) => {
    view = selection;
  }
</script>

<main>
  <div class="container">
    {#if view === 'home'}
    <Home />
    {/if}
    {#if view === 'projects'}
    <Projects />
    {/if}
    {#if view === 'resume'}
  <Resume />
    {/if}
    {#if view === 'about'}
   <About />
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