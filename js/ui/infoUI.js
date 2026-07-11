// infoUI.js
// どのプレイヤーのターンかを表示
export function showTurn(player){
    const turnInfo = document.getElementById("turn-info");

    turnInfo.textContent = `${player.name}のターン`;
}

// プレイヤー名表示
const playerName = document.getElementById("player-name");

export function showPlayerName(player) {
    playerName.textContent = player.name;
}