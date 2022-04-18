<script>
  import {createEventDispatcher} from "svelte";

  export let partyName
  export let playerName
  export let noPartyFound
  export let noPlayerFound
  export let voidPartyName
  export let voidPlayerNames
  export let partyTaken

  let newPartyName = ""
  let newPlayersNames = [""]

  const dispatch = createEventDispatcher()

  function enterToGame() {
    dispatch("enter")
  }

  function create() {
    dispatch("create", {name: newPartyName, players: newPlayersNames})
  }

  function addPlayer() {
    newPlayersNames = [...newPlayersNames, ""]
  }

  function eraseNewPlayer(index) {
    newPlayersNames = newPlayersNames.filter((_,i) => i !== index)
  }
</script>

<main>
  <h1>Bienvenido</h1>
  <form class="container form">
    <div>Nombre de partida</div>
    <input type="text"
           bind:value={partyName}/>
    <div>Nombre de jugador</div>

    <input type="text"
           bind:value={playerName}/>

    <input type="submit"
           on:click|preventDefault={enterToGame}>
  </form>
  {#if noPartyFound}
    <p>La partida no existe, verifica que el nombre sea correcto</p>
  {/if}
  {#if noPlayerFound}
    <p>Tu nombre de jugador no esta registrado, verifica si es correcto</p>
  {/if}<h2>O también puedes crear una partida</h2>
  <form class="container form">
    <div>Nombre de partida</div>
    <input type="text"
           bind:value={newPartyName}/>

    {#each newPlayersNames as aPlayerName, i (i)}
      <div>Nombre de jugador {i + 1 }
        {#if i !== 0}<span class="erase" on:click={() => eraseNewPlayer(i) }>Borrar</span>{/if}</div>
      <div class="tip">{i === 0 ? "Este será el dueño de la partida" : ""}</div>
      <input type="text"
             on:change={(e) => newPlayersNames[i] = e.target.value }/>
    {/each}<input type="submit"
                  value="Añadir jugador"
                  on:click|preventDefault={addPlayer}> <input type="submit"
                                                              value="Crear"
                                                              on:click|preventDefault={create}>
  </form>
  {#if partyTaken}
    <p>La esa partida ya existe, elige otro nombre</p>
  {/if}
  {#if voidPartyName}
    <p>Debes de darle un nombre a la partida</p>
  {/if}
  {#if voidPlayerNames}
    <p>Todos los jugadores deben de tener un nombre</p>
  {/if}
</main>

<style>
  .form {
    display:        flex;
    flex-direction: column;
  }

  h2 {
    font-size: 1.2rem;
  }

  .tip {
    font-size: .75rem;
  }

  .erase {
    font-size: .7rem;
    color: red;
    cursor: pointer;
  }
</style>