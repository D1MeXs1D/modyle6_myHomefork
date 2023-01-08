alert ("Введите сейчас два числа для возведения одного в указанную вами степень");

let numberOne = 0;
let numberTwo = 0;
let errorSumm = 0;

let resultPow = (x, y) => {
    //  проверка на действительность типа данных
    if (typeof x === 'number'  && typeof y === 'number' && !isNaN(x) && !isNaN(y) &&  x  != 0 ) {
        x = Math.pow(+x, +y);
        alert("Результат равен: " + x);
    }

    // зацикливание если введено неверное решение
    else {
        errorSumm +=1 
        switch (errorSumm) {
            case 1:
                alert("Штошшшш, давай еще раз 0_0");
                break;
            case 2:
                alert("Допустим.............................\nПовторим еще раз 0_0");
                break;
            case 3:
                alert("Пс, введи уже цифры наконец -_-");
                break;
            case 4:
                alert("Чувак, ц-и-ф-р-ы!");
                break;
        
            case 5:
                alert("Цифры находятся выше букв на клавиатуре -_-");
                break;
        
            case 6:
                alert("Ты меня обижаешь :(");
                break;
        
            case 7:
                alert("ААААААААААААААААААААААААААААА!");
                break;
        
            default:
                alert("Мне надоело уже твое издевательство");
                break;
        }
        printMessage ();
    }

}



function printMessage () {
    numberOne = +prompt("Введите число", [10]);
    numberTwo = +prompt("Введите степень в которую хотите возвести число", [10]);
    
    resultPow(numberOne, numberTwo); // вызов фунции для расчета с данными
}


printMessage (); // вызов функции для ввода