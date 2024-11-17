/*
Using the JavaScript language, have the function Division(num1,num2)
take both parameters being passed and return the Greatest Common Factor.
That is, return the greatest number that evenly goes into both numbers with no remainder.
For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4.
The range for both parameters will be from 1 to 10^3.
*/

function DivisionOption1(a, b) {
    if (a < 1 || b < 1 || a > 1000 || b > 1000) return "Values must be between 1 and 10^3";

    const divA = [...Array(a).keys()].filter(x => (a % x === 0));
    const divB = [...Array(b).keys()].filter(x => (b % x === 0));
    const divSorted = (a < b ? divA :  divB).sort((a, b) => b - a);
    return divSorted.find((x) => (a < b ? divB :  divA).includes(x));
}

function DivisionOption2(a, b) {
    if (a < 1 || b < 1 || a > 1000 || b > 1000) return "Values must be between 1 and 10^3";
    for (let i = a; i > 0; i--) {
        if (a % i === 0 && b % i === 0)
            return i
    }
}

console.log(DivisionOption2(12, 16))
console.log(DivisionOption2(7, 3))
console.log(DivisionOption2(36, 54))
console.log(DivisionOption2(16, 12))
console.log(DivisionOption2(-1, 12))
console.log(DivisionOption2(12, 12000))