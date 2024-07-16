function andAndRemove(commands){
    const result = [];
  let currentNumber = 1;

  for (const command of commands) {
    if (command === "add") {
      result.push(currentNumber);
    } else if (command === "remove") {
      if (result.length > 0) {
        result.pop();
      }
    }
    currentNumber++;
  }

  if (result.length === 0) {
    console.log("Empty");
  } else {
    for (const number of result) {
      console.log(number);
    }
  }
  }

  andAndRemove([ 'add', 'add', 'remove', 'add', 'add' ])