function funcOne (summFunc) { 

    alert("Сумма двух этих чисел = " + summFunc)
    
}

function funcTwo(number){ 
      let summ = number + number;
      return summ;
}


funcOne(funcTwo(+prompt("Введите число")));


//  тут я создал две функции, где одна принимает в качестве параметров число, 
// делает с ним математические операции, а потом я вызываю ее внутри другой функции для вывода