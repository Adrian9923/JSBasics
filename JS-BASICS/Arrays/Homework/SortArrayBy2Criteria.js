function sort(input){
    input.sort((a, b) => {
        const lengthComparison = a.length - b.length;
    
        if (lengthComparison === 0) {
          return a.localeCompare(b, undefined, { sensitivity: 'base' });
        }
    
        return lengthComparison;
      });
    
      for (const str of input) {
        console.log(str);
      }
  }

  sort([ 'alpha', 'beta', 'gamma' ]);