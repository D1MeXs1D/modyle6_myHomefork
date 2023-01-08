let arr = [6, 4, "text", 8, 8, true, 3, undefined, 1, 0, 5, NaN];
let odd = [];
let even = [];
let nol  = [];
            
arraySort(arr); // вызов функции


            function arraySort (arr) {

                let odd = [];
                let even = [];
                let nol  = [];

                    for(let i = 0; i < arr.length; i++  ){
                        if (typeof arr[i] == "number" && !isNaN(arr[i])) {
                                if (arr[i] % 2 != 0) {
                                    odd.push(arr[i]);
                                }
                                else if (arr[i] == 0) {
                                    nol.push(arr[i]);        
                                }
                                else  {
                                    even.push(arr[i]); 
                                }
                    }
                }
                print(odd, nol, even, arr); // вызов функции внутри функции
            }


            function print(odd, nol, even, arr) {
                console.log(odd.length + " нечетных элементов\n" + nol.length + " кол-во нулей\n" + even.length + " кол-во четных элементов")
                console.log("Всего элементов в массиве:", arr.length)
                console.log("Нечисловых элементов:" , arr.length - (odd.length + even.length + nol.length))
            }


