// game.js
import { getCurrentPlayer } from "./turn.js";
import { nextTurn } from "./turn.js";
import { Player } from "../models/player.js";
import { showPlayerName } from "../ui/infoUI.js";

export function startGame(player){
    showPlayerName(player);

    const cpu1 = new Player("CPU1");
    const cpu2 = new Player("CPU2");

    const players = [
        player,
        cpu1,
        cpu2
    ];

    const currentPlayer = getCurrentPlayer(players);
}