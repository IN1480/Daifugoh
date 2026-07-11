// card.js
export class Card {
    constructor(id=null, suit, rank) {
        this.id = id;
        this.suit = suit;
        this.rank = rank;
    }
}

export const deck = [];
const suits = ["♠", "♥", "♦", "♣"];

let id=0;
for(const suit of suits){
    for(let rank=1; rank<=13; rank++){
        deck.push(new Card(id++, suit, rank));
    }
}
for(let i=0; i<2; i++){
    deck.push(new Card(id++, null, null));
}