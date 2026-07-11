// sort.js
import { rankOrder, suitOrder } from "./constants.js";

export function sortHand(hand) {
    hand.sort((a, b) => {
        // Jokerを最後にする
        if (a.rank === null && b.rank === null) return 0;
        if (a.rank === null) return 1;
        if (b.rank === null) return -1;

        // ランク順
        if (a.rank !== b.rank) {
            return rankOrder[a.rank] - rankOrder[b.rank];
        }

        // 同ランクならスート順
        return suitOrder[a.suit] - suitOrder[b.suit];
    });
}