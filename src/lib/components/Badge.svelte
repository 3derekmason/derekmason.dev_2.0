<script>

  export let language;

</script>

<div class="badge">
  <img src={`/images/${language}.svg`} alt={language}>
</div>

<style>
.badge {
  height: 40px;
}
img {
  height: 100%;
}
</style>