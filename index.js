/* Дано ціле число (ввести через 'prompt'). З'ясувати, чи є воно простим
(простим називається число, більше 1, що не має інших дільників, крім 1 і себе).*/

const number = prompt('Enter a number');

if (number === null) {
    alert('You canceled!');
} else if (!number.trim()) {
    alert('You entered nothing!');
} else if (isNaN(number) || number !== String(+number)) {
    alert('Enter a valid number!');
} else {
    const numberPrime = parseInt(number);

    if (numberPrime <= 1) {
        console.log("The number is not prime.");
    } else {
        let isPrime = true;

        for (let i = 2; i <= numberPrime / 2; i++) {
            if (numberPrime % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log("The number is prime.");
        } else {
            console.log("The number is not prime.");
        }
    }
}