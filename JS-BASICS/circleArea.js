function circleArea(radius) {
    let result;
    let inputType = typeof(radius);

    if(inputType === 'number') {
        result = Math.pow(radius, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log('This calculation cannot be completed using a variable of type: ' + inputType + '.');
    }
};

circleArea('name');