// turn.js
let currentPlayerIndex = 0;// プレイヤー配列の何番目か

// 現在のプレイヤーを返す, playersは配列
export function getCurrentPlayer(players){
    return players[currentPlayerIndex];
}

// ターンを進める, 最後まで行ったらリセット
export function nextTurn(players){
    currentPlayerIndex++;

    if(currentPlayerIndex >= players.length){
        currentPlayerIndex = 0;
    }
}