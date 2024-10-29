// DATI
const multipleThree = "Fizz";
const multipleFive = "Buzz";

// ESECUZIONE LOGICA
let multiples;
for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        multiples = multipleThree + multipleFive;
    }  else if (i % 3 === 0) {
        multiples = multipleThree;
    } else if (i % 5 === 0) {
        multiples = multipleFive;
    } else {
        multiples = i;
    }
    // OUTPUT
    console.log(multiples);
}