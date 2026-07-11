// renderCard.js
export function renderCard(card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    // ジョーカー
    if (card.rank === null) {
        const corner = document.createElement("div");
        corner.classList.add("corner");

        for (const ch of "JOKER") {
            const letter = document.createElement("div");
            letter.textContent = ch;
            corner.appendChild(letter);
        }

        cardElement.appendChild(corner);
    }
    else {
        // 数字が特殊なもの
        const rankText = {
            1: "A",
            11: "J",
            12: "Q",
            13: "K"
        };

        const rank = rankText[card.rank] ?? card.rank;

        // [コーナー]クラスを作る
        const corner = document.createElement("div");
        corner.classList.add("corner");

        // [マーク]クラスを作る
        const suit = document.createElement("div");
        suit.classList.add("suit");
        suit.textContent = card.suit;

        // [ランク]クラスを作る
        const rankElement = document.createElement("div");
        rankElement.classList.add("rank");
        rankElement.textContent = rank;

        // それぞれ、コーナーの子要素として追加
        corner.appendChild(suit);
        corner.appendChild(rankElement);

        cardElement.appendChild(corner);

        if (card.suit === "♥" || card.suit === "♦") {
            cardElement.classList.add("red");
        }
    }

    // カードをクリックして選択
    cardElement.dataset.id = card.id;

    cardElement.addEventListener("pointerup", () => {
        cardElement.classList.toggle("selected");
    });

    return cardElement;
}