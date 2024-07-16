function biggerHalf(input){
    

    let sortedNumbers = input.sort((a, b) => a - b);

    let sliceArray = sortedNumbers.slice((sortedNumbers.length) / 2);
    
    return sliceArray;
  }

  console.log(biggerHalf([ 3, 19, 14, 7, 2, 19, 6 ]));