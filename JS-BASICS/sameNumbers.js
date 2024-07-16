function checkNumber(input) {
    let string = input.toString();
    var result = 0;
    for(let i = 1; i < string.length; i++) {
        let checkNum = string[0];
        if(checkNum === string[i]) {
            console.log('true');
        }else{
            console.log('false');
            break;
        }
    }
    for(let j = 0; j < string.length; j++) {
        result += Number(string[j]);
    }
    console.log(result);
}

checkNumber(2222222);