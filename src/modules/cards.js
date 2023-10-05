import { v4 as uuidv4 } from 'uuid';

class Card {
    constructor(number) {
        this.ID = uuidv4();
        this.number = number;
    }
}
let cardArray = [];

for(let i = 1; i <= 8;i++) {
    let card = new Card(i);
    cardArray.push(card);
}

export default cardArray;