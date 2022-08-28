<script>
import ArrowRightThick from "svelte-material-icons/ArrowRightThick.svelte";

</script>

<div id="contact">
  <h2>Get in touch!</h2>
  <div id="postcard">
    <div class="from">
      <p>Dear Derek,</p>
      <textarea rows="12" placeholder="Your message/comment here..."></textarea>
      <p>From,</p>
      <input type="text" placeholder="Sign here">
    </div>
    <div class="to">
      <div class="top">
        <div class="stamp">
          <button>Send <ArrowRightThick size="2em"/></button>
        </div>
      </div>
      <div class="row">Derek Mason</div>
      <div class="row">Colorado, USA</div>
      <div class="row">3derekmason@gmail.com</div>
    </div>
  </div>

</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');
  #contact{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  }

  h2 {
    font-family: var(--font-code);
    font-size: 32px;
    letter-spacing: 6px;
    background: radial-gradient(ellipse at right,
    var(--text-color),
    var(--secondary-light)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  p {
    color: var(--secondary-light-dull)
  }
  input {
    height: 32px;
    background: none;
    border: none;
    font-size: 24px;
    font-family: 'Handlee', cursive;
  }

  textarea {
    background: none;
    border: none;
    resize: none;
    font-family: var(--font-code);
  }

  input:focus, textarea:focus {
    outline: none;
  }

  #postcard {
    background: #fefefe20;
    border-radius: 4px;
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
  }

  .to, .from {
    padding: 4px;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .to {
    border-left: 0.5px solid #fefefe80;
  }

  .top {
    height: 40%;
    display: flex;
    justify-content: flex-end;
  }

  .stamp {
    height: 64px;
    width: 64px;
  }

  .row {
    font-family: 'Handlee', cursive;
    letter-spacing: 2px;
    padding-left: 4px;
    margin-top: 16px;
    border-bottom: 0.5px solid var(--secondary-light-dull);
  }

  button {
    font-family: var(--font-code);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: 400;
    border-radius: 4px;
    border: none;
    width: 100%;
    height: 100%;
    background: var(--secondary-main);
    box-shadow: 0 4px 0 var(--secondary-dark);
  }
  button:hover{
    color: var(--text-color);
    cursor: pointer;
  }
  button:active {
    box-shadow: none;
    transform: translateY(4px);
  }
</style>