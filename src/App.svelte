<script>
  import NavBar from "./lib/components/NavBar.svelte";
</script>


<main>
  <div class="container"></div>
  <NavBar />
</main>

<style>

main {
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
}

.container {
  width: calc(100% - 240px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>