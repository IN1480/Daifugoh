// gameScreen.js
import { screenManager } from "./screenManager.js";

const title = document.getElementById("title-screen");
const game = document.getElementById("game-screen");

const titleButton = document.getElementById("back-to-title-button");

export function initGame(){
    titleButton.addEventListener("pointerup", () => {
        // 画面切り替え
        screenManager(game, title);
    });
}