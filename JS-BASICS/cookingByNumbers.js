function cook(input) {
    let result = Number(input[0]); 

    
    const chop = () => result /= 2;
    const dice = () => result = Math.sqrt(result);
    const spice = () => result += 1;
    const bake = () => result *= 3;
    const fillet = () => result -= result * 0.2;

    
    for (let i = 1; i < input.length; i++) {
        switch (input[i]) {
            case 'chop':
                chop();
                break;
            case 'dice':
                dice();
                break;
            case 'spice':
                spice();
                break;
            case 'bake':
                bake();
                break;
            case 'fillet':
                fillet();
                break;
        
        }
        console.log(result); 
    }
}


cook(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);