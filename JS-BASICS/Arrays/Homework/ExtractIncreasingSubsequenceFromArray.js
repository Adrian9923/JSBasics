function extractSubsequence(input){
    let biggestNumber = input[0];
  const newArray = [biggestNumber];
    for(let i = 1; i < input.length; i++) {
        if(input[i] >= biggestNumber) {
            biggestNumber = input[i];
            newArray.push(biggestNumber);
        }
    }

    for(const num of newArray) {
        console.log(num);
    }
  }

  extractSubsequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24 ]);