prepareDeck();
function prepareDeck(){
    for(let i=2; i<54; i++){
        deck.push(i);
    }
}

for(let i=0; i<52; i++){
    pickCard();
}

function pickCard(){
    selectedCard = deck[Math.floor(Math.random() * deck.length)];
    dealtCards.push(selectedCard);
    let index = deck.indexOf(selectedCard);
    if(index > -1){
        deck.splice(index, 1);
    }
    updateView();
}

console.log(dealtCards);