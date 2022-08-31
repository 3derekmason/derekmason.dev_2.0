<script>
import { onMount } from 'svelte';
import ProjectTile from '../components/ProjectTile.svelte';
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
  <div class="proj-container">
    {#each projectData as project}
    <ProjectTile dataObject={project} />
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
  .proj-container {
    width: 85%;
    height: 80%;
    box-shadow: 0 0 4px var(--highlight-light);
    background: radial-gradient(ellipse at bottom, var(--highlight-light), 1%, transparent), radial-gradient(ellipse at right, var(--highlight-light), 1%, transparent);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
  }
</style>