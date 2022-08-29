<script>
import ArrowRightThick from "svelte-material-icons/ArrowRightThick.svelte";

let newMessage = {
  from: '',
  email: '',
  body: '',
}
let thanks = false;
let move = false;
const mailMessage = () => {
  if (newMessage.body === ''){
    alert('A message would be more interesting with some text!')
    return;
  }
  fetch('https://dev-mail.vercel.app/api/mail', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newMessage)
		})
			.then((data) => console.log(data))
			.catch((err) => console.error(err));
  newMessage = {
    from: '',
    email: '',
    body: '',
  }
  move = true;
  setTimeout(() => {
    thanks = true;
  }, 1000)

}
</script>

<div id="contact">
  <h2>Get in touch!</h2>
  {#if thanks}
  <div class="thanks"><h3>Thank you, I look forward to reading your message!</h3><a href="#home" on:click={() => {move = false; thanks = false;}}>Back to home</a></div>
  {:else}
  <div id="postcard" class={move ? 'move' : ''}>
    <div class="from">
      <p>Dear Derek,</p>
      <textarea rows="12" placeholder="Your message/comment here..." bind:value={newMessage.body}></textarea>
      <p>From,</p>
      <input type="text" placeholder="Sign here" bind:value={newMessage.from}>
    </div>
    <div class="to">
      <div class="top">
        <input class="email" type="email" placeholder="Return address" bind:value={newMessage.email}>
        <div class="stamp">
          <button on:click={mailMessage}>Mail <ArrowRightThick size="2em"/></button>
        </div>
      </div>
      <div class="row">Derek Mason</div>
      <div class="row">Colorado, USA</div>
      <div class="row">3derekmason@gmail.com</div>
    </div>
  </div>
{/if}
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
  background: linear-gradient(var(--bg-fade), transparent);
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

  .email {
    width: 80%;
    font-family: var(--font-code);
    font-size: 14px;
    padding: 4px;
    margin-top: 8px;
    margin-right: 8px;
    border-bottom: 1px solid var(--secondary-light-dull);
  }

  .thanks {
    position: relative;
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 8px;
    animation: fadeIn 0.5s;
  }
  .thanks a {
    color: var(--primary-main)
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
    transform-style: preserve-3d;
    transform: perspective(1000px);
  }

  .move {
    animation:  mail 2s;
  }

  .to, .from {
    padding: 8px;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .to {
    border-left: 0.5px solid #fefefe80;
    transform-style: preserve-3d;
  }

  .top {
    height: 40%;
    display: flex;
    justify-content: flex-end;
    transform-style: preserve-3d;
    transform: perspective(1000px);
  }

  .stamp {
    height: 64px;
    width: 64px;
    transform: translateZ(20px)
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
    border-radius: 2px;
    border: none;
    width: 100%;
    height: 100%;
    background: var(--secondary-main);
    box-shadow: 0 3px 0 var(--secondary-accent);
    transition: 0.1s;
  }
  button:hover{
    color: var(--text-color);
    cursor: pointer;
    box-shadow: 0 2px 0 var(--secondary-dark);
    transition: 0.1s;
  }
  button:active {
    box-shadow: none;
    transform: translateY(3px);
  }

  @keyframes mail {
    0% {
      transform: translateX(0px);
      opacity: 1;
    }
    100% {
      transform: translate(1000px, -300px);
      opacity: 0.1;
    }
  }

  @keyframes fadeIn {
    0%{
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>