<script>
  let timer = 60 * 5
  setInterval( () => {
    timer--;
  }, 1000)
  let minutes = 0
  let seconds = 0
  $: {
    seconds = Math.floor(timer % 60)
    minutes = Math.floor(timer / 60)
  }
</script>

<main>
<img src="6cat3x.jpg"/>
</main>
<style>
  main {
    text-align:      justify;
    padding:         1em;
    max-width: 500px;
    margin:          0 auto;
    display:         flex;
    flex-direction:  column;
    align-items:     center;
    justify-content: center;
    font-size: 1.5rem;
  }
  p {
    margin: 0;
    margin-top: 1.5rem;
  }
</style>
