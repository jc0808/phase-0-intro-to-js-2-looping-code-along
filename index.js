// Code your solutions in this file

function writeCards(names){
    const cards = [];
    for (let i = 0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    };
    return cards;
};

function countDown(num){
    let n = 0;
    n += num;

    for (let count = 0; num > count; count++){
        console.log(n);
        n--;
    }
    console.log(n);
};
