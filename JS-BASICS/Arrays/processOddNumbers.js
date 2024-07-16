function processOddNumbers(input){
    console.log(input.filter((element, ind) => ind % 2 != 0)
    .map(element => element * 2)
    .reverse()
    .join(' '));
  }

processOddNumbers([ 3, 0, 10, 4, 7, 3 ]);