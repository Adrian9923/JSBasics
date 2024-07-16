function rotateAnArray(input){
    const rotations = Number(input.pop());
    const n = input.length;
    const rotatedArray = [];

  // Perform the rotation
  for (let i = 0; i < n; i++) {
    const newIndex = (i + rotations) % n;
    rotatedArray[newIndex] = input[i];
  }

  console.log(rotatedArray.join(" "));
  }
  rotateAnArray([ '1', '2', '3', '4', '2' ])