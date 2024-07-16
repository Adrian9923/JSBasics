function findStringLength(firstString, secondString, thirdString){
    let sumLength;
    let averageLength;

    let firstArgumentLength = firstString.length;
    let secondArgumentLength = secondString.length;
    let thirdArgumentLength = thirdString.length;

    sumLength = firstArgumentLength + secondArgumentLength + thirdArgumentLength;
    averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}

findStringLength('chocolate', 'ice cream', 'cake');
