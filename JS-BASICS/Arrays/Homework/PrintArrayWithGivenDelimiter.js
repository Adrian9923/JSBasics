function print(input){
    const delimiter = input[input.length - 1];
  
    input.splice(input.length - 1, 1);
    console.log(input.join(delimiter));
  }

  print([ 'One', 'Two', 'Three', 'Four', 'Five', '-' ])