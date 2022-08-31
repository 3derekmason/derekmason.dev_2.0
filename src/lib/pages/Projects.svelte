<script>
import { onMount } from 'svelte';
import ProjectTile from '../components/ProjectTile.svelte';
let projectData = []
const fetchProjectData = () => {
  fetch('https://dev-mail.vercel.app/api/projects').then((res) => res.json()).then((data) => {
   const datajson = JSON.parse(data.message);
   datajson.forEach((item) => {
    item.imgs = item.imgs.split('+/+')
    item.langs = item.langs.split('+/+')
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
    width: 100%;
    height: calc(100% - 64px);
    background: radial-gradient(ellipse at bottom, var(--highlight-light), 1%, transparent), radial-gradient(ellipse at right, var(--highlight-light), 1%, transparent);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    padding: 16px;
  }

  h2{
    height: 64px;
    transform: translateY(32px);
    background: linear-gradient(
    25deg,
    var(--primary-main),
    80%,
    var(--primary-light),
    var(--highlight-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
</style>