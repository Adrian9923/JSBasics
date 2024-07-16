function sumFirstLast(input){
    const numbers = input.map(Number);

    const totalSum = numbers[0] + numbers[numbers.length - 1];

    console.log(totalSum);
  }

  sumFirstLast(['5', '10']);