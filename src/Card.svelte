<script>
  import {createEventDispatcher} from "svelte";

  export let data
  export let number
  export let black= false
  const dispatch = createEventDispatcher()

  function handleCardClick() {
    dispatch('use', {number, data });
  }
</script>

<div class="{black ? 'black': 'white'} " on:click={handleCardClick}>
  {#each data as phrase}
    {#if ( phrase === null )}
      <span>______________</span>
    {:else}
      <span>{phrase}</span>
    {/if}
  {/each}
</div>

<style>
  .black {
    background-color: black;
    color:            white;
  }
  .white {
    background-color: white;
    color:            black;
  }
  div {
    border: solid 1px #CCCCCC;
    margin: 1rem;
    font-size:        1.2rem;
    max-width:        15rem;
    min-width:        15rem;
    width:            15rem;
    min-height:       13rem;
    padding: 1rem;
    flex: 1;
    display:          flex;
    flex-direction:   column;
    justify-content:  center;
    align-items:      center;
    border-radius:    1rem;
    box-shadow:       6px 6px 7px #B5B5B5,
                      -6px -6px 7px #FFFFFF;
  }
</style>