<script>

</script>

<div id="resume">
  <div id="resume-head">
    <h1>Derek Mason</h1>
    <span class="contact">
      <h4>Denver, CO</h4>
     | <a href="/">3derekmason@gmail.com</a> | <a href="/">970-551-9044</a>
    </span>

    <p>Lifelong avid learner.</p>

  </div>
  <div class="section">
    <span class="section-title">
      <h2>TECHNICAL SKILLS</h2>
    </span>
  </div>
  <div class="section">
    <span class="section-title">
      <h2>SOFTWARE DEVELOPMENT</h2>
    </span>
  </div>
  <div class="section">
    <span class="section-title">
      <h2>PROFESSIONAL EXPERIENCE</h2>
    </span>
  </div>
  <div class="section">
    <span class="section-title">
      <h2>EDUCATION</h2>
    </span>
  </div>
</div>

<style>
  #resume{
    height: 100%;
    width: 100%;
    position: relative;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: linear-gradient(var(--bg-fade), transparent);
  }

  h1{
    font-size: 2em;
    transform: translateZ(10px)
  }

  h4, p {
    margin: 0;
  }
  #resume-head {
    width: 100%;
    height: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
   justify-content: space-around;
   transform-style: preserve-3d;
    transform: perspective(1000px);
  }

  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    transform: translateZ(20px)
  }

  .section{
    width: 90%;

  }
  .section-title {
    width: 100%;
    height: 44px;
    display: grid;
    place-content: center;
    border-bottom: 0.5px solid var(--primary-main);
  }
</style>