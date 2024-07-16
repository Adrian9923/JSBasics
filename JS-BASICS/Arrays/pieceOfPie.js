function pieceOfPie(input, startSection, endSection){
    let indexOfStartSection = input.indexOf(startSection);
    let indexOfEndSection = input.indexOf(endSection);
    let newArray = input.slice(indexOfStartSection, indexOfEndSection + 1);
    return newArray;
  }

  console.log(pieceOfPie([ 'Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie' ], 'Pot Pie', 'Smoked Fish Pie' ));