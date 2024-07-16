function calculateCost(fruit, weightInGrams, pricePerKG) {
    let weightInKg = weightInGrams / 1000;
    let neededMoney = weightInKg * pricePerKG;
    console.log('I need $' + neededMoney.toFixed(2) + ' to buy ' + weightInKg.toFixed(2) + ' kilograms of ' + fruit + '.');
}

calculateCost('apples', 1563, 2.35);