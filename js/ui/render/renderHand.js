// renderHand.js
import { renderCard } from "./renderCard.js";

export function renderHand(player) {
    const hand = document.getElementById("hand");

    // 前回の表示を消す
    hand.innerHTML = "";

    for (const card of player.hand) {
        const cardElement = renderCard(card);
        hand.appendChild(cardElement);
    }
}