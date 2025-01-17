function aggregateElements(input) {
    function aggregate(arr, initVal, func) {
        let val = initVal;
        for(let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        };
        console.log(val);
    }

    aggregate(input, 0, (a, b) => a + b);
    aggregate(input, 0, (a, b) => a + 1/b);
    aggregate(input, '', (a, b) => a + b);
}

aggregateElements([1, 2, 3]);