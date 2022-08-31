<script>
  export let photos;

</script>

<div class="gallery">
  {#each photos as photo}
  <img src={photo} alt={photo}>
  {/each}
</div>

<style>
  .gallery{
    width: 100%;
    height: 100%;
    overflow-x: auto;
    display: flex;
    gap: 20px;
  }
   img {
    width: 90%;
  }
</style>