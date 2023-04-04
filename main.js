const inputWord = document.querySelector('.input');


let word = '';
let tries = 0;
const wordsPossible = [
    'wiertarka'
]
let win = false;
const listItemsUp = document.querySelectorAll('.up');
const listItemsDown = document.querySelectorAll('.down');
let lettersCounter = 0;
let wordArrUp = [];
let wordArrDown = [];
let randWord = '';


//Wprowadzane słowa
document.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        if(!containsNumbers(inputWord.value)){
            if(inputWord.value.length < 2){
            alert('za krótkie');
            }else{
                word = inputWord.value
                console.log(word);
                gameLogic(word)
                tries++;
                console.log(lettersCounter);
                listUpAdd(word)
                listDownAdd(word)
                lettersCounter = 0;
                inputWord.value = ''
                if(word == randWord){
                    win = true;
                    alert("wygrana");
                    alert("udało ci się w " + tries + " próbach" );
                }
            }
        }else alert('nie może być liczby');
    }
})

function containsNumbers(string){
    return /\d/.test(string);
}



function randomWordGenerator(array){
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}



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
        if(string.charCodeAt(lettersCounter) < randWord.charCodeAt(lettersCounter)){
            wordArrUp.push(string);
            wordArrUp.sort();
        }else if(string.charCodeAt(lettersCounter) > randWord.charCodeAt(lettersCounter)){
            wordArrDown.push(string);
            wordArrDown.sort();
        }
    }
}

function listUpAdd() {
    let wordIndex = wordArrUp.length - 1;
    for (let i = listItemsUp.length - 1; i >= 0; i--) {
      const word = wordArrUp[wordIndex];
      if (word !== undefined) {
        listItemsUp.item(i).innerHTML = word;
      }
      wordIndex--;
    }
  }

function listDownAdd() {
    let wordIndex = 0;
    for (let i = 0; i < listItemsDown.length; i++) {
      const word = wordArrDown[wordIndex];
      if (word !== undefined) { 
        listItemsDown.item(i).innerHTML = word;
      }
      wordIndex++;
    }
  }
  

console.log(listItemsUp.length)
function wordInNumbers(str){
    let strNumber = 0;
    for(let i = 0; i<str.length; i++){
        strNumber += str.charCodeAt(i)
    }
    return strNumber;
}
function differenceBetweenWords(word1, word2){
    return wordInNumbers(word1) - wordInNumbers(word2)
}


