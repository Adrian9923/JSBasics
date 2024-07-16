function speedCheck(speed, areaType) {
    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    switch(areaType) {
        case 'motorway': {
            if(speed <= 130) {
                console.log('');
            }else if(speed - motorwayLimit <= 20) {
                console.log('speeding');
            }else if(speed - motorwayLimit <= 40) {
                console.log('excessive speeding');
            }else{
                console.log('reckless driving');
            }
            break;
        }
        case 'interstate' : {
            if(speed <= 90) {
                console.log('');
            }else if(speed - interstateLimit <= 20) {
                console.log('speeding');
            }else if(speed - interstateLimit <= 40) {
                console.log('excessive speeding');
            }else{
                console.log('reckless driving');
            }
            break;
        }
        case 'city' : {
            if(speed <= 50) {
                console.log('');
            }else if(speed - cityLimit <= 20) {
                console.log('speeding');
            }else if(speed - cityLimit <= 40) {
                console.log('excessive speeding');
            }else{
                console.log('reckless driving');
            }
            break;
        }
        case 'residential' : {
            if(speed <= 20) {
                console.log('');
            }else if(speed - residentialLimit <= 20) {
                console.log('speeding');
            }else if(speed - residentialLimit <= 40) {
                console.log('excessive speeding');
            }else{
                console.log('reckless driving');
            }
            break;
        }
    }
}

speedCheck(40, 'city');