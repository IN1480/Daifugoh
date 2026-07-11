// titleScreen.js
import { screenManager } from "./screenManager.js";
import { Player } from "../../models/player.js";
import { startGame } from "../../game/game.js";

export function initTitle(){
    const title = document.getElementById("title-screen");
    const game = document.getElementById("game-screen");
    const rule = document.getElementById("rule-screen");

    const input = document.getElementById("name-input");
    const startButton = document.getElementById("start-button");
    const ruleButton = document.getElementById("rule-button");

    startButton.addEventListener("pointerup", () => {
        // 名前取得
        const name = input.value.trim() || "プレイヤー";
        localStorage.setItem("playerName", name);

        // プレイヤー作成
        const player = new Player(name);

        // 画面切り替え
        screenManager(title, game);

        // ゲーム開始
        startGame(player);
    });

    ruleButton.addEventListener("pointerup", () => {
        // 画面切り替え
        screenManager(title, rule);
    });
}