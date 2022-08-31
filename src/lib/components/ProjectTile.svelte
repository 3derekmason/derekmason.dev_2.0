<script>

export let dataObject;

</script>

<div id="tile">
  <span class="tile-head">
    <h2>{dataObject.title}</h2> <div class="langs">{dataObject.langs}</div>
  </span>

  <div class="tile-meat">

    <div class="text">
      <div class="about"><p>{dataObject.about}</p></div>
      <span class="pain"><p>{dataObject.pain}</p></span>
      <span class="win"><p>{dataObject.win}</p></span>
    </div>

    <div class="media">
      <div class="photos">
        <img src={dataObject.imgs[1]} alt="" width="360">
      </div>
    </div>

  </div>

  <div class="links">
    <a href={'https://' + dataObject.deployed} target="_blank">Go to app.</a>
    <a href={'https://' + dataObject.code} target="_blank">View source code.</a>
  </div>

</div>

<style>

  #tile {
    padding: 16px;
    width: 90%;
    height: 420px;
    box-shadow: 0 0 2px var(--highlight-light);
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
    height: calc(100% - 100px);
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
  }

  .pain, .win {
    width: 100%;
    height: 15%;
    padding: 8px;
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  .media {
    width: 60%;
    padding: 8px;
  }

  .photos {
    width: 100%;
    height: 70%;
  }

  .links {
    width: 100%;
    height: 28px;
    margin-top: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    font-family: var(--font-code);
  }

  a {
    text-transform: uppercase;
    padding: 4px;
    width: 200px;
    text-align: center;
    background: var(--primary-dark);
    border-radius: 4px;
    box-shadow: 0 2px 0 var(--primary-main);
  }
  a:active {
    box-shadow: none;
    transform: translateY(2px);
  }

</style>
