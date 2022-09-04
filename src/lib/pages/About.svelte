<script>

</script>

<div id="about">
  <div class="bio">
    <div class="row">
      <img src="/images/kace.jpeg" alt="Derek and Kace">
      <p>After helping my community for over four years as a preschool teacher and personal trainer, I discovered and honed my passion for improving the lives of others.</p>
    </div>
    <p>In 2020 I began my adventure into software development. Today, I continue to learn and push my creative limits, with a main focus on building accessible, inclusive, and enjoyable experiences.</p>
    <p>I am always eager to work and grow with interesting people and ideas.  <a href="#contact">Send me a message</a> if you’d like to know more or connect with me!</p>
  </div>
</div>

<style>
  #about{
    height: 100%;
    width: 100%;
    position: relative;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 16px;
    background: var(--bg-color);
  }

  .bio {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .row {
    display: flex;
    gap: 40px;
    align-items: flex-end;
  }

  img {
    border-radius: 50%;
    width: 160px;
  }
  a {
    color: var(--primary-light);
  }
  a:hover {
    color: #fff;
  }

  @media (max-width: 600px){

    #about {
      padding: 8px;
      padding-top: 40px;
    }

    img {
      width: 40px;
    }
    .row {
      flex-direction: column;
      align-items: center;
    }
  }
</style>