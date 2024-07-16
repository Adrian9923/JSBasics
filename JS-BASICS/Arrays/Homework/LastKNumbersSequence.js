function sequence(n, k) {
    const result = [1];
    
    for (let i = 1; i < n; i++) {
      let nextNumber = 0;
      const startIndex = Math.max(0, i - k);
      
      for (let j = startIndex; j < i; j++) {
        nextNumber += result[j];
      }
      
      result.push(nextNumber);
    }
    
    console.log(result.join(' '));
  }
  

  sequence(6, 3); 