<script>

</script>

<div id="resume">
  <div id="resume-head">
    <h1>Derek Mason</h1>
    <span class="contact">
      <h4>Denver, CO</h4>
     | <a href="mailto:3derekmason@gmail.com">3derekmason@gmail.com</a> | <a href="tel:+19705519044">970-551-9044</a>
    </span>

    <h5>Lifelong avid learner.</h5>

  </div>
  <div class="section">
    <span class="section-title">
      <h2>TECHNICAL SKILLS</h2>
    </span>
    <div class="row">
      <p><strong>Front End</strong> | HTML,  JavaScript, NextJS, React, Redux, RedwoodJS, Svelte,  Vue,  CSS, Sass, MaterialUI, Vuetify</p>
    </div>
    <div class="row">
      <p><strong>Back End</strong> | NodeJS, Express, PostgreSQL, MongoDB, MySQL, Ruby</p>
    </div>
    <div class="row">
      <p><strong>Testing & Development</strong> | Jest, Playwright, Vitest,  AWS, Heroku, Vercel</p>
    </div>
  </div>
  <div class="section">
    <span class="section-title">
      <h2>SOFTWARE DEVELOPMENT</h2>
    </span>
    <div class="row">
      <div class="item">
        <span class="item-title"><h3>Atelier System Design <em>API design with MongoDB storing &#62; 1 million entries for a retail website</em></h3></span>
        <ul>
          <li>Replaced API of an e-commerce  website to handle increase in traffic following a Front End revamp</li>
          <li>Reduced latency from 200-300ms to &#60; 10ms by strategically indexing database collections and refactoring queries for optimization</li>
          <li>Load tested with K6 averaging a response time under 50ms for 1000 VUs</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="item">
        <span class="item-title">
          <h3>Vuedoku   <em>Build a Sukdoku app with Vue!</em></h3>
        </span>
        <ul>
          <li>Built and deployed playable app with Vite, using test driven development</li>
          <li>Documented with step by step instructions in three Medium stories</li>
          <li>Walks users through  all aspects of building tests,  app logic, UI, and UX</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="item">
        <span class="item-title">
          <h3>dmpm  <em>Personal Javascript Package Manager</em></h3>
        </span>
        <ul>
          <li>Full stack application built with NuxtJS to host my own NPM packages and libraries.</li>
          <li>View info about each package published. Total downloads > 1100.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="section">
    <span class="section-title">
      <h2>PROFESSIONAL EXPERIENCE</h2>
    </span>
    <div class="row">
      <div class="item">
        <span class="item-title">
          <h3>Early Childhood Gym Instructor  <em>(Bright Horizons, Loveland CO)</em></h3>
          <p>2019 - 2021</p>
        </span>
        <ul>
          <li>Designed a curriculum of age appropriate activities for groups (ages 2-6) that encouraged physical and mental development.</li>
          <li>Spearheaded 5 weekly lesson plans with a recyclable structure so that curriculum could easily be followed by other teachers.</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="item">
        <span class="item-title">
          <h3>Certified Personal Trainer  <em>(Genesis Health Clubs, Fort Collins CO)</em></h3>
          <p>2019 - 2021</p>
        </span>
        <ul>
          <li>Created safe and effective exercise programs tailored individually for clients (ages 16 - 70) that pushed each towards their goals.</li>
          <li>Performed fitness assessments to  gauge current fitness levels and discuss desired training outcomes  of new gym members, as well as outlined programs/strategies to get them there.</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="item">
        <span class="item-title"><h3>Preschool Teacher <em>(Bright Horizons, Loveland/Fort Collins CO)</em></h3><p>2017 - 2019</p></span>
        <ul>
          <li>Inspired young classes sized 12 - 28 by leading them through age appropriate activities and lessons that pushed creative thinking and crucial  development</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="section">
    <span class="section-title">
      <h2>EDUCATION</h2>
    </span>
    <div class="row">
      <h3>Hack Reactor  <em>Denver, CO  || Advanced Software Engineering Immersive Program</em></h3><p>2021</p>
    </div>
    <div class="row">
      <h3>Colorado State University  <em>Fort Collins, CO  || Human Development & Family Studies</em></h3><p>2012 - 2017</p>
    </div>
  </div>
</div>

<style>
  #resume{
    box-sizing: border-box;
    height: 100%;
    max-height: 100vh;
    width: 100%;
    position: relative;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    padding-top: 64px;
    padding-bottom: 64px;
    background: radial-gradient(ellipse at top, var(--highlight-light), 1%, var(--bg-color));
    overflow-y: auto;
    overflow-x: hidden;
  }

  .row {
    min-height: 24px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .item {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .item-title {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 44px;
    margin-top: 8px;
    align-items: center;
  }

  h1{
    font-family: var(--font-code);
    font-size: 2em;
    transform: translateZ(10px);
    margin-bottom: 8px;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 300;
  }

  h3 {
    font-size: 18px;
    font-family: var(--font-code);
  }

  h4, a {
    color: var(--primary-main)
  }

  h4, p {
    margin: 0;
  }

  h5 {
    margin: 0;
    padding: 0;
  }
  strong {
    font-family: var(--font-code);
  }

  em {
    font-size: 12px;
    margin-left: 16px;
  }

  ul {
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
    margin-bottom: 16px;
  }

  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-bottom: 8px;
    transform: translateZ(20px)
  }

  .section{
    width: 90%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;


  }
  .section-title {
    width: 100%;
    height: 44px;
    display: grid;
    place-content: center;
    border-bottom: 0.5px solid var(--primary-main);
    margin-bottom: 12px;
    letter-spacing: 2px;
  }

  @media (max-width:600px){
    #resume {
      padding-top: 120px;
    }
  }
</style>