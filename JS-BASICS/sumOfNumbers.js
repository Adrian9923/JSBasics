function sum(firstString, secondString) {
    let num1 = Number(firstString); // let num1 = +firstString;
    let num2 = Number(secondString); // let num2 = +secondString;

    let result = 0;
    for(let i = num1; i <= num2; i++) {
        result += i;
    }
    return result;
}

console.log(sum('-8', '20'));