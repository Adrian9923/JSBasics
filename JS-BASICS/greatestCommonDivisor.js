function calculateGCD(firstNum, secondNum) {
    let result;
    for(let i = 0; i <= Math.min(firstNum, secondNum); i++) {
        if(firstNum % i === 0 && secondNum % i === 0) {
            result = i;
        }
    }

    console.log(result);
}

calculateGCD(2154, 458);