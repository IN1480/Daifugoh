import { Player } from "../models/player.js";
import { startGame } from "../game/game.js";


export function initTitle(){

    const title = document.getElementById("title-screen");
    const game = document.getElementById("game-screen");

    const input = document.getElementById("name-input");
    const startButton = document.getElementById("start-button");

    startButton.addEventListener("pointerup", () => {
        // 名前取得
        const name = input.value.trim() || "プレイヤー";
        localStorage.setItem("playerName", name);

        // プレイヤー作成
        const player = new Player(name);

        // 画面切り替え
        title.classList.add("hidden");
        game.classList.remove("hidden");

        // ゲーム開始
        startGame(player);
    });

}