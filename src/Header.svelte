<script>
  import {createEventDispatcher} from "svelte";

  export let header
  export let button
  export let tip

  const dispatch = createEventDispatcher()

  function handleButton() {
    dispatch("click", button)
  }
</script>

<svelte:head>
  <title>{header}</title>
</svelte:head>

<header>
  <h1>{header}</h1>
  {#if button !== undefined}
    <button on:click={handleButton}>{button}</button>
  {/if}
</header>
{#if tip !== undefined}
  <p>
    {tip}
  </p>
{/if}

<style>
  header {
    display: flex;
    justify-content: space-around;
  }
</style>