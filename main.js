'use strict'


// ? Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

const arrSymbols = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];

let symbolStart = true;

while (symbolStart) {
    let userSymbolNum = prompt('Введи число від 0 до 9');

    if (userSymbolNum === null) {
        symbolStart = false;
    } else if (+userSymbolNum !== +userSymbolNum || userSymbolNum.trim().length === 0 || userSymbolNum > 9 || userSymbolNum < 0) {
        alert('Введи число в діапазоні від 0 до 9');
    } else {
        for (let i = 0; i < arrSymbols.length; i++) {
            console.log(arrSymbols[i]);
            if (+userSymbolNum === i) {
                alert(arrSymbols[i]);
                symbolStart = false;
            }
        }
    }
}
