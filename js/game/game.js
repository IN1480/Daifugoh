// game.js
import { Player } from "../models/player.js";
import { showPlayerName } from "../ui/infoUI.js";
import { deck } from "../models/card.js";
import { shuffle } from "../utils/shuffle.js";
import { sortHand } from "../utils/sort.js";
import { renderHand } from "../ui/render/renderHand.js";
import { getCurrentPlayer } from "./turn.js";
import { nextTurn } from "./turn.js";
import { createPlayerBox } from "../ui/playerUI.js";

export function startGame(playerName){
    showPlayerName(playerName);

    const player = new Player(playerName);
    const cpu1 = new Player("CPU1");
    const cpu2 = new Player("CPU2");
    const cpu3 = new Player("CPU3");

    const players = [
        player,
        cpu1,
        cpu2,
        cpu3
    ];

    // 山札作成＆ディール
    const shuffledDeck = shuffle([...deck]);
    let n = Math.floor(Math.random() * 4);

    for (let i = 0; i < shuffledDeck.length; i++) {
        players[(i + n) % players.length].hand.push(shuffledDeck[i]);
    }

    for (const player of players) {
        sortHand(player.hand);
    }

    renderHand(player);

    const playerPlace = document.getElementById("player-name")
    const elsePlace = document.getElementById("info-area")

    const playerBoxes = new Map();

    const box = createPlayerBox(player, playerPlace);
    playerBoxes.set(player, box);

    for (let i=1; i<players.length; i++) {
        const box = createPlayerBox(players[i], elsePlace);
        playerBoxes.set(players[i], box);
    }

    // 自分のターンでないときは、パス/出すボタンを隠す
    const gameButtonArea = document.getElementById("game-button-area");
    const currentPlayer = getCurrentPlayer(players);

    if(currentPlayer === player){
        gameButtonArea.classList.remove("hidden")
    }
    else{
        gameButtonArea.classList.add("hidden")
    }

    // 現在のプレーヤーを目立たせる
    currentPlayer.focus();

//    currentPlayer.blur();
}