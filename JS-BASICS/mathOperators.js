function calculate(firstNum, secondNum, operator) {
    let result;
    if(operator === '+') {
        result = firstNum + secondNum;
    }else if(operator === '-') {
        result = firstNum - secondNum;
    }
    else if(operator === '*') {
        result = firstNum * secondNum;
    }else if(operator === '/') {
        result = firstNum / secondNum;
    }else if(operator === '%') {
        result = firstNum % secondNum;
    }else if(operator === '**') {
        result = firstNum ** secondNum;
    }
    
    console.log(result);
}

calculate(3, 5.5, '*')