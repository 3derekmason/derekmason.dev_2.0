<script>
  import CodeBraces from "svelte-material-icons/CodeBraces.svelte";
  import CodeBracesBox from "svelte-material-icons/CodeBracesBox.svelte";

  import Badge from "./Badge.svelte";

export let dataObject;

</script>

<div id="tile">
  <span class="tile-head">
    <h2>{dataObject.title}</h2>
    <div class="links">
      {#if dataObject.deployed}
      <a href={'https://' + dataObject.deployed} target="_blank">Go to app <CodeBracesBox size="28px"/></a>
      {/if}
      <a href={'https://' + dataObject.code} target="_blank">View code <CodeBraces size="24px" /></a>
    </div>
  </span>
  <div class="tile-meat">
    <div class="text">
      <div class="about"><p>{dataObject.about}</p></div>
      <span class="pain"><p>{dataObject.pain}</p></span>
      <span class="win"><p>{dataObject.win}</p></span>
    </div>
    <div class="media">
      <div class="photos">
        <img src={dataObject.imgs[0]} alt="">
      </div>
      <div class="langs">
        <p>Built with</p>
        {#each dataObject.langs as lang}
        <Badge language={lang} />
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  #tile {
    padding: 24px;
    width: 85%;
    height: 420px;
    box-shadow: 0.4px 0.6px 3px var(--highlight-light);
    backdrop-filter: blur(12px);
    border-radius: 4px;
  }

  .tile-head {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid var(--primary-light);
  }

  .tile-meat {
    width: 100%;
    height: calc(100% - 64px);
    display: flex;
  }

  .text, .media{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .text {
    box-sizing: border-box;
    width: 40%;
    padding: 16px;
  }

  .about {
    width: 100%;
    height: 50%;
    padding: 8px;
    display: flex;
    font-family: var(--font-code);
    font-size: 14px;
    overflow: auto;
  }

  .pain, .win {
    width: 100%;
    height: 15%;
    padding: 8px;
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  .win {
    height: 25%;
  }

  .media {
    width: 60%;
    padding: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .photos {
    width: 100%;
    height: 85%;
  }

  img {
    width: 95%;
  }

  .links {
    height: 28px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
    font-family: var(--font-code);
  }

  .langs {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
  }

  .langs p {
    font-size: 14px;
    font-family: var(--font-code);
  }

  a {
    text-transform: uppercase;
    padding: 4px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

</style>
