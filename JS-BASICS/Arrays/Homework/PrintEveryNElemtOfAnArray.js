function print(input){
    const numArray = input.map(Number);
    const iterationStep = numArray[numArray.length - 1];
    const newArray = [];

    for(let i = 0; i < input.length - 1; i += iterationStep){
      newArray.push(input[i]);
    }

    for(let num of newArray) {
      console.log(num);
    }
  }

  print([ 'dsa', 'asd', 'test', 'tset', '2' ])