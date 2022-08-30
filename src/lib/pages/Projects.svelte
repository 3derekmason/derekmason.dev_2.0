<script>
import { onMount } from 'svelte';
let projectData = []
const fetchProjectData = () => {
  fetch('https://dev-mail.vercel.app/api/projects').then((res) => res.json()).then((data) => {
   const datajson = JSON.parse(data.message);
   datajson.forEach((item) => {
    item.imgs = item.imgs.split('+/+')
   })
   projectData = datajson;
  })
}
onMount(() => {
  fetchProjectData()
})
</script>

<div id="projects">
  <h2>Recent Projects:</h2>
  <div class="container">
    {#each projectData as project}
    <div><h3>{project.title}</h3></div>
    {/each}
  </div>
</div>

<style>
  #projects{
    height: 100%;
  width: 100%;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--bg-color);
  }
  .container {
    width: 80%;
    height: 80%;
    border: 1px solid var(--highlight-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
  }
</style>