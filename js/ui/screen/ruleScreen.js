// ruleScreen.js
import { screenManager } from "./screenManager.js";

const title = document.getElementById("title-screen");
const rule = document.getElementById("rule-screen");

const applyButton = document.getElementById("apply-button");

export function initRule(){
    applyButton.addEventListener("pointerup", () => {
    // 画面切り替え
    screenManager(rule, title);
    });
}