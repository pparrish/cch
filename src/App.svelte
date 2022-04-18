<script lang="ts">

        import Card from "./Card.svelte"
        import Header from "./Header.svelte";
        import Main from "./Main.svelte";
        import Greetings from "./Grettings.svelte";
        import cardsData from './cards/CardsData'
        import whiteCardsData from './cards/WhiteCardsData'
        import {createGame, exist, getGame, init, saveGame, savePlayer, subscribe} from "./game/GameRepo";
        import Deck from "./cards/Deck";

        let gameData = null;
        let partyName
        let playerName
        let noPartyFound
        let noPlayerFound
        let grettings = false
        let unsuscribe

        let selectedCard = null
        let confirmed = false

        const white = []
        const black = []
        for (let i = 0; i < whiteCardsData.length; i++) {
            white[i] = i;
        }
        for (let i = 0; i < cardsData.length; i++) {
            black[i] = i;
        }

        let whiteDeck = new Deck(white)
        let blackDeck = new Deck(black)

        let voidPlayersNames
        let voidPartyName
        let partyTaken

        async function createAGame(e) {
            const {name, players} = e.detail

            if (name === "" || name === undefined) {
                voidPartyName = true
                return
            }
            voidPartyName = false

            if (await exist(name)) {
                partyTaken = true
                return
            }
            partyTaken = false



            if (players.some(name => name === "" || name === undefined)) {
                voidPlayersNames = true
                return;
            }
            voidPartyName = false

            init(name)
            await createGame(name, players[0], players)

            partyName = name
            playerName = players[0]

            await enterToGame()
        }

        async function enterToGame() {
            if (partyName === "zL5hb2Jqcug4Fw33qW8DdCzn2S&wY6Gk@PKu!#L9Ri&") {
                grettings = true
                return
            }

            init(partyName)

            if (!(await exist())) {
                noPartyFound = true;
                return
            }
            noPartyFound = false

            let game = await getGame()

            if (!game.isPlayerOnGame(playerName)) {
                noPlayerFound = true
                return
            }
            noPlayerFound = false

            localStorage.playerName = playerName
            localStorage.partyName = partyName

            unsuscribe = subscribe(game => {
                gameData = game
            })


            if (!game.started && game.isOwner(playerName)) {

                game.giveCardsToPlayers(whiteDeck)
                game.resetBlackCards(new Deck(black))
                game.nextBlack()
                game.started = true

                saveGame(game)
            }
        }

        function exitToGame() {
            gameData = null
            unsuscribe()
            unsuscribe = null
            localStorage.removeItem("playerName")
            localStorage.removeItem("partyName")
            whiteDeck = new Deck(white)
            blackDeck = new Deck(black)
            playerName = undefined
            partyName = undefined
            noPartyFound = false
            noPlayerFound = false
            grettings = false
            selectedCard = null
            confirmed = false
        }

        if (localStorage.partyName && localStorage.playerName) {
            partyName = localStorage.partyName
            playerName = localStorage.playerName
            enterToGame()
        }

        function selectCard(aCard) {
            if (!gameData.playersObject[playerName].selecting) return
            selectedCard = aCard
        }

        async function confirmCard() {
            if (!gameData.playersObject[playerName].selecting) return

            const player = gameData.selectCard(playerName, selectedCard)

            await savePlayer(player)

            selectedCard = null
        }


        async function handleVote(aPlayerName) {
            const player = gameData.getPlayer(playerName)
            if (!player.voting) return
            player.voting = false
            player.waitingToNextTurn = false
            const votePlayer = gameData.getPlayer(aPlayerName)
            votePlayer.points += 1
            await savePlayer(player)
            await savePlayer(votePlayer)
        }

        async function nextTurn() {
            const player = gameData.getPlayer(playerName)
            if (player.name === gameData.owner && !player.waitingToNextTurn) {
                gameData.nextBlack()
            }

            player.waitingToNextTurn = true

            await savePlayer(player)

            if (gameData.players.every(player => player.waitingToNextTurn)) {
                gameData.players.map(player => {
                    player.waitingToNextTurn = false
                    player.selecting = true
                })
                if (player.cards.length === 0) {
                    gameData.giveCardsToPlayers(whiteDeck)
                }
            }

            saveGame(gameData)
        }

</script>


<Header header="Cartas Contra la Humanidad"
        button={gameData ? "Salir" : undefined}
        tip={undefined}
        on:click={exitToGame}/>

{#if grettings === true}
  <Greetings/>
{:else if ( gameData === null )}
  <Main bind:noPlayerFound
        bind:noPartyFound
        bind:playerName
        bind:partyName
        bind:voidPartyName
        bind:voidPlayersNames
        bind:partyTaken
        on:create={createAGame}
        on:enter={enterToGame}/>
{:else }

  {#if !gameData.started}
    <p>Creating game</p>
  {:else if gameData.black.remainingCards === 0 }
    <h1>Ya no quedan cartas, la partida ha acabado.</h1>
  {:else if ( Object.keys(gameData.playersObject).some(x => gameData.playersObject[x].selecting) &&
    !Object.keys(gameData.playersObject).some(x => gameData.playersObject[x].waitingToNextTurn) )}

    <!-- Card selected --->
    <div class="container">
      <!-- Left content -->
      <div class="container__half">
        <div>
          <h1>Tus cartas</h1>
          <div class="grid">
            {#each gameData.playersObject[playerName].cards as aCard}
              <Card data={aCard.data}
                    number="{aCard.number}"
                    on:use={()=> selectCard(aCard) }/>
            {/each}
          </div>
        </div>
      </div>

      <!-- Right content -->
      <div class="container__half">
        <main>
          <h1>Rellena el espacio en blanco</h1>
          {#each Object.keys(gameData.playersObject) as aPlayerName}
            {#if aPlayerName !== playerName && gameData.playersObject[aPlayerName].selecting}
              <p>{aPlayerName} ({gameData.playersObject[aPlayerName].points}) está seleccionando su carta.</p>
            {/if}
          {/each}
          <Card data={ gameData.getPlayer(playerName).selecting ? gameData.actualBlack.data :
          gameData.getPlayer(playerName).questionCard.data  }
                black
                on:use={confirmCard}/>
          {#if selectedCard !== null}
            <p>Picale a la carta para confirmar</p>
            <Card data="{selectedCard.data}"
                  on:use={confirmCard}
            />
          {/if}
        </main>
      </div>
    </div>
  {:else if ( Object.keys(gameData.playersObject).some(x => gameData.playersObject[x].voting) )}
    <!-- Vote --->
    <main>
      <h1>Vota por la mejor</h1>
      {#each gameData.players as aPlayer}
        {#if aPlayer.name !== playerName && aPlayer.voting}
          <p>{aPlayer.name} ({aPlayer.points}) está votando.</p>
        {/if}
      {/each}

      <div class="grid">
        {#each gameData.players as player}
          <div class="container form cardWrapper">
            <Card data="{ player.questionCard.data}"
                  black/>
            <button on:click={() => handleVote(player.name) }>Votar</button>
          </div>
        {/each}
      </div>
    </main>

  {:else}
    <h1>Resultados</h1>
    {#each Object.keys(gameData.playersObject) as aPlayerName}
      <p>{aPlayerName} ({gameData.playersObject[aPlayerName].points}).
        {gameData.playersObject[aPlayerName].waitingToNextTurn ? "Esperando" : "Terminando turno" }</p>
    {/each}<p>Restan {gameData.black.remainingCards} cartas de preguntas.</p>
    <button on:click={nextTurn}>Siguiente turno</button>
  {/if}
{/if}

<style>
  .cardWrapper {
    margin: 1rem;
    flex-direction: column;
  }

  .container {
    display: flex;
  }


  .container__half {
    flex: 1;
  }

  .grid {
    display:         flex;
    flex-wrap:       wrap;
    justify-content: center;
  }

  @media (max-width: 640px) {
    .container {
      flex-direction: column-reverse;
    }
  }
</style>