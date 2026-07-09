/*
手札表示
場のカード表示
プレイヤー名表示
CPUの手札枚数表示
順位表示
メッセージ表示
*/

const playerName = document.getElementById("player-name");

export function showPlayerName(player) {
    playerName.textContent = player.name;
}