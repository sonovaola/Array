// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку


let Arr = prompt ('Введіть набір з чисел і/або літер')

if(Arr === ''){
	alert ('Ви нiчого не ввели')
	}
else if (Arr === null) {
	alert ('Ви скасували')
	}
else if (!Arr.trim( )){
    alert ('Ви ввели лише пробіли. \nПотрібні числа і/або літери')
    }
else if (Arr.length < 5) {
    alert ('Введіть мінімум 5 чисел і/або літер')
    }
else { 
    alert (`Те, що введено: \n${Arr}`)
        const newArr = Array.from(Arr);
    alert (`Відсортуровані символи за зростанням: \n${newArr.sort().join('')}`)
        newArr.splice(2,3).join('')
    alert (`Видалені елементи з 2 по 4 (включно!): \n${newArr.join('')}`)
    }
            