
// ? ouvrir la console, et commencez à travailler
/* ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------- */

// // ! L'entraînement peut commencer

// console.log(` `);
// console.log(`THE VARIABLES`);

// // ! var let const
// var keywordVar = 'The var keyword'

/* ----------------------------------------------------------------------------------------------------------- */

// console.log(` `);
// console.log(`THE OPERATORS`);

// // ! + - / * % || && ++ -- == ===
// let plusOperator = 13 + 23;
// let minus_operator = 23 - 5;
// let times_operator = 2 * 4;
// let divide_operator = 9 / 3;
// let modulo_operator = 10 % 3;
// let true_operator = true;
// let false_operator = false;
// let conditional_equal_operator = (24 == "24");
// let conditional_strictly_equal_operator = (32 === "32");
// let conditional_and_operator = (45 == 43 && 45);
// let plus_plus_operator = plusOperator++;
// let minus_minus_operator = minus_operator--;

// console.log(`${minus_operator} \n ${minus_minus_operator} \n ${times_operator} \n ${divide_operator}`)

// // /* ----------------------------------------------------------------------------------------------------------- */

// console.log(` `);
// console.log(`THE CONDITIONS`);

// // ! basic condition
// if (minus_operator != plusOperator) {
//     console.log(`${minus_operator} is not equal to ${plusOperator}`)
// }
// if (times_operator) {
//     console.log("The times_operator variable exists")
// }

// // ! ternary Condition

// (minus_operator != plusOperator) ? console.log(`${minus_operator} is not equal to ${plusOperator}`) :
//     console.log(`The times_operator variable exists`);

    // // ! factorised arrow condition


    // /* ----------------------------------------------------------------------------------------------------------- */

    // console.log(` `);
    // console.log(`THE LOOPS`);

    // // ! for (increase)

    // // ! for (decrease)

    // // ! nested for loops

    // // ! while

    // // ! do while

    // // ! for...in

    // // ! for of

    // // ! array forEach


    // /* ----------------------------------------------------------------------------------------------------------- */

    // console.log(` `);
    // console.log(`THE ARRAYS`);

    // // ! array basics (call all + call one)

    // // ! multidirectionnal array + pop + shift etc.

    // /* ----------------------------------------------------------------------------------------------------------- */

    // console.log(` `);
    // console.log(`THE FUNCTIONS`);

    // // ! basic function

    // // ! anonymous function

    // // ! advanced arrow function + ternary condition

    // // ! Recursive Functions
    // // A recursive function is a function that calls itself

    // // ? With that we can replace loops using recursion
    // // The for loop
    // function multiply(arr, n) {
    //     var product = arr[0];
    //     for (var i = 1; i <= n; i++) {
    //         product *= arr[i];
    //     }
    //     return product;
    // };
    // // the recursive loop
    // function multiply(arr, n) {
    //     if (n <= 0) {
    //         return arr[0];
    //     } else {
    //         return multiply(arr, n - 1) * arr[n];
    //     }
    // }
    // // an example of a recursive function 
    // function dn(x) {
    //     if (x > 10) {
    //         return;
    //     } else {
    //         console.log(x);
    //         x++;
    //         dn(x);
    //     }
    // };
    // // untill x is not greater than 10, x gonna take + 1 so here => 2 and so on, utill x reached 10
    // dn(1);


    // // ? we can also use it to return the factorial of a number
    // function factorial(number) {
    //     if (number === 1) {
    //         return 1;
    //     }
    //     return number * factorial(number - 1)
    // }
    // factorial(20); // Returns 2342902008176640000 
    // // => means : 20 * 19 - 19 * 18 ... until the last number to multiply is 1.

    // ! THE FACTORY FUNCTIONS
    // une factory function est une fonction qui retourne un objet, elle immite 
    // la programmation orienté objet. En revanche on n'utilise jamais "this" pour les factory functions
//     function createACat(race, couleur, age) {
//         return {
//             bonjour: "hello"
//         }
//     };

// // on va utiliser la closure CAD, utiliser l'étendu de la fonction pour créer des méthodes alliées aux objets
// // race, couleur, age...
// const bonjour = createACat()
// console.log(bonjour); // returns an object " Object { bonjour: "hello" } "

// function createADog(race, couleur, age) {
//     function calin() {
//         console.log(`Vous avez caliné votre ${race} !`)
//     }
//     return {
//         race, // avec ES6, on n'est plus obligé de créer race: race.
//         couleur,
//         age,
//         calin
//     }
// };
// const dog1 = createADog('Siamois', 'gris', 6);
// const methodeReassigner = dog1.calin;
// console.log(methodeReassigner());

// /* ----------------------------------------------------------------------------------------------------------- */

// console.log(` `);
// console.log(`THE OBJECTS`);
// // ! basic object

// // ! loop through objects

// // ! multidimentionnal objects

// // ! Objects && dom

// /* ----------------------------------------------------------------------------------------------------------- */

// console.log(` `);
// console.log(`THE H O FUNCTIONS`);
// // ! filter

// // ! map 

// // ! sort

// // ! reduce

// // ! combined methods
// /* ----------------------------------------------------------------------------------------------------------- */

// console.log(` `);
// console.log(`THIS CALL APPLY AND BIND`);


// /* ----------------------------------------------------------------------------------------------------------- */

// console.log(` `);
// console.log(`THE ASYNCHRONOUS JAVASCRIPT`);


// /* ----------------------------------------------------------------------------------------------------------- */

// console.log(` `);
// console.log(`IIFE`);


// /* ----------------------------------------------------------------------------------------------------------- */

// console.log(` `);
// console.log(`AJAX`);


// /* ----------------------------------------------------------------------------------------------------------- */

// console.log(` `);
// console.log(`MEMOIZATION`);
// // Memoization is often used in programming to get fast results, when a function gets lots of data to fetch.
// // It is also used when we try to fecth external resources.

// // => a function that square a number that you put into it.
// function square(n) {
//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             result += 1;
//         }
//     }
//     return result;
// }
// console.log(square(4)) // => returns 16.
// console.log(square(5000)); // => because of this big number, it takes a lot of time to be displayed by browser

// // to avoid that 
// const prevValues = [];
// function squarenx(n) {
//     if (prevValues[n] != null) {
//         return prevValues[n];
//     } // => fi it has already been returned, display it.
//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             result += 1;
//         }
//     }
//     prevValues[n] = result;
//     return result;
// }
// console.log(squarenx(30000));
// console.log(squarenx(30000));
// console.log(squarenx(30000));
// console.log(squarenx(30000)); // => then everything displays faster

// // the fibonacci sequence
// function fib(m, prevValuesx = []) {
//     if (prevValuesx[m] != null) {
//         return prevValuesx[m];
//     }
//     let results;
//     if (m <= 2) {
//         result = 1
//     } else {
//         result = fib(m - 1, prevValuesx) + fib(m - 2, prevValuesx); // => dernier + avant dernier
//     }
//     prevValuesx[m] = result;
//     return result;
// };
// console.log(fib(100));

// /* ----------------------------------------------------------------------------------------------------------- */

// console.log(` `);
// console.log(`MATHEMATICS`);


// /* ----------------------------------------------------------------------------------------------------------- */

// console.log(` `);
// console.log(`SPREAD OPERATOR`);


// /* ----------------------------------------------------------------------------------------------------------- */

// console.log(` `);
// console.log(`GUARD CLAUSES`);

// /* ----------------------------------------------------------------------------------------------------------- */

// console.log(` `);
// console.log(`DOM2`);

// // let Student = {
// //     name: "Christophe",
// //     age: 40,
// //     studies: "Computer Science"
// // };
// // document.getElementById("prefone").innerHTML = `<h1>Hello my name is ${Student.name}, I am ${Student.age} years old, and I study ${Student.studies}</h1>`;

// // let student = new Object();
// // student.name = "claire";
// // student.age = 21;
// // student.studies = "cacalélépipède";
// // document.getElementById("preftwo").innerHTML = `<h1>Hello my name is ${student.name}, I am ${student.age} years old, and I study ${student.studies}</h1>`;


// // function stud(name, ages, studies) {
// //     this.name = name;
// //     this.ages = ages;
// //     this.studies = studies;
// // }
// // let studee = stud("Christok", 73, "Vomputer scacance");
// // document.getElementById("prefthree").innerHTML = `<h1>Hello my name is ${stud.name}, I am ${stud.ages} years old, and I study ${stud.studies}</h1>`;