/****************************Week 2 Day 3 Exercise XPGOLD***************** */

/**
 * @author: Koua wilfried
 * @description: Exercise XPGOLD DAY 3 Week2
 * Date : 25/01/2023
 */



/** Exercise 1 : Divisible By Three */

let numbers = [123, 8409, 100053, 333333333, 7]

//1. Loop through the array above and determine whether or not each number is divisible by three.

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        console.log(numbers[i] + ' is divisible by 3');
    } else {
        console.log(numbers[i] + ' is not divisible by 3');
    }
}

//2. Each time you loop console.log true or false.

// Done see Question 1 in the loop for


/** Exercise 2 : Attendance */


let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}
/*
Given the object above where the key is the student’s name and the value is the country they are from.
*/

// 1.Prompt the student for their name.

let studentName = prompt("Please give us your name ?");

// 2.If the name is in the object, console.log the name of the student and the country they come from
//For example: "Hi! I'm [name], and I'm from [country]."
    //You don’t need to use a for loop, just look up the statement if ... in

    if (guestList[studentName]) {
        console.log(`Hi! I'm , ${studentName} ! and I'm from ${guestList[studentName]}.`);
    }
    //Si le nom n'est pas dans l'objet, console.log :"Hi! I'm a guest."
    else {
        console.log(`Hi! I'm a guest.`);
    }



/** Exercise 3 : Playing With Numbers */

let age = [20,5,12,43,98,55];

/* Don’t use built-in Javascript methods to answer the following questions. 
You have to create the logic by yourself. Use simple for loops */
//1.  Console.log the sum of all the numbers in the age array..

let sumAge = 0;

for (let i = 0; i < age.length; i++) {
    sumAge += age[i];
}
console.log(`The sum of age  is ${sumAge}`);

//2. Console.log l'âge le plus élevé de la baie.

let maxAge = age[0];

for (let i = 1; i < age.length; i++) {
    if (age[i] > maxAge) {
        maxAge = age[i];
    }
}
console.log(`The Max age is ${maxAge}`);
