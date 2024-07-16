function checkNumber(inputNumber) {
    const numString = inputNumber.toString();
    const firstDigit = numString[0];
    let allDigitsSame = true;
    let sumOfDigits = 0;

    for (let i = 0; i < numString.length; i++) {
        const digit = numString[i];

        if (digit !== firstDigit) {
            allDigitsSame = false;
        }

        // Convert the digit back to a number and add it to the sumOfDigits
        sumOfDigits += parseInt(digit);
    }

    console.log(allDigitsSame);
    console.log(sumOfDigits);
}

// Test
checkNumber(2222222);