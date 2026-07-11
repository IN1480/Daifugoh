// game.js
import { Player } from "../models/player.js";
import { showPlayerName } from "../ui/infoUI.js";
import { deck } from "../models/card.js";
import { shuffle } from "../utils/shuffle.js";
import { sortHand } from "../utils/sort.js";
import { renderHand } from "../ui/render/renderHand.js";
import { getCurrentPlayer } from "./turn.js";
import { nextTurn } from "./turn.js";

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

    for (let i = 0; i < shuffledDeck.length; i++) {
        players[i % players.length].hand.push(shuffledDeck[i]);
    }

    for (const player of players) {
        sortHand(player.hand);
    }

    renderHand(player);

    const currentPlayer = getCurrentPlayer(players);
}