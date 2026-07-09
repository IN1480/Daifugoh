/*
起動
タイトル画面
画面遷移
*/

import { Player } from "./player.js";
import { startGame } from "./game.js";

const title = document.getElementById("title-screen");
const game = document.getElementById("game-screen");

const input = document.getElementById("name-input");
const startButton = document.getElementById("start-button");


startButton.addEventListener("pointerup", () => {
    // 名前を取得
    const name = input.value.trim() || "プレイヤー";// .trim()は入力の前後の空白を除去、入力が空なら「プレイヤー」を使用
    localStorage.setItem("playerName", name);

    // プレイヤー作成
    const player = new Player(name);

    // 画面切り替え
    title.classList.add("hidden");
    game.classList.remove("hidden");

    // ゲーム開始
    startGame(player);
});