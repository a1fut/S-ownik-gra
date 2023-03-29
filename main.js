const inputWord = document.querySelector('.input');

let word = '';
let tries = 0;
const wordsPossible = [
    'dupa', /*'cipa', 'chuj',*/
   // 'kutas', 'kurwa', 'telefon'
]
let win = false;


//Wprowadzane słowa
document.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        if(!containsNumbers(inputWord.value)){
            if(inputWord.value.length < 2){
            console.log('za krótkie');
            }else {
                word = inputWord.value
                console.log(word);
                gameLogic(word)
                tries++;
                console.log(wordArrUp);
                console.log(wordArrDown);
                console.log(lettersCounter);
                // listItemsUp.item(2).innerHTML = word
                listUpAdd(word)
                lettersCounter = 0;
                if(word == randWord){
                    win = true;
                    console.log("wygrana");
                    console.log("udało ci się w " + tries + " próbach" );
                }
            }
        }else console.log('nie może być liczby');
    }
})

// console.log(randomWordGenerator(wordsPossible));


function containsNumbers(string){
    return /\d/.test(string);
}

let lettersCounter = 0;

function randomWordGenerator(array){
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

let wordArrUp = [];
let wordArrDown = [];
let randWord = '';

function gameLogic(string){
    randWord = randomWordGenerator(wordsPossible);
    if(string.charCodeAt(0) > randWord.charCodeAt(0)){
        wordArrDown.push(string);
        wordArrDown.sort();
    }else if(string.charCodeAt(0) < randWord.charCodeAt(0)){
        wordArrUp.push(string);
        wordArrUp.sort();
    }else if(string.charCodeAt(0) == randWord.charCodeAt(0)){
        for(let i = 0; i < randWord.length; i++){
            if(randWord.charAt(i) == string.charAt(i)){
                lettersCounter++;
            }
        }
    }
}

function listUpAdd(){
    // let item = listItemsUp.item(--listItemsUp.length)
    // if(item.textContent == 0){
    //     item.innerHTML = wordArrUp[wordArrUp.length - 1]
    // }
    let wordIndex = wordArrUp.length - 1;
    for(let i = listItemsUp.length - 1; i >= 0; i--){
        listItemsUp.item(i).innerHTML = wordArrUp[wordIndex]
        wordIndex--;
    }
    }
const listItemsUp = document.querySelectorAll('.up');
console.log(listItemsUp.length)




// gameLogic('aup',wordsPossible)
// gameLogic('adp',wordsPossible)
// gameLogic('bup',wordsPossible)
// gameLogic('siup',wordsPossible)
// gameLogic('dup',wordsPossible)
// console.log(lettersCounter);
// console.log(wordArrUp);
// console.log(wordArrDown);
// console.log('cupa'.charCodeAt(0));