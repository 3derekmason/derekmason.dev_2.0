<script>
  import About from "./lib/pages/About.svelte";
  import Home from "./lib/pages/Home.svelte";
  import NavBar from "./lib/components/NavBar.svelte";
  import Projects from './lib/pages/Projects.svelte';
  import Resume from "./lib/pages/Resume.svelte";
  import Contact from "./lib/pages/Contact.svelte";
</script>

<main>
  <div class="container">
    <Home />
    <Projects />
    <Resume />
    <About />
    <Contact />
  </div>
  <NavBar />
</main>

<style>

main {
  margin: 0;
  width: auto;
  max-width: 100vw;
  height: 100vh;
  display: flex;
}

.container {
  width: calc(100vw - 148px);
  height: 100%;
  overflow: hidden;
  scroll-behavior: smooth;
}

</style>