function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let display = document.getElementById('extra');
    if(display.style.display === 'none') {
        display.style.display = 'block';
        button.textContent = 'Less';
    }else{
        display.style.display = 'none';
        button.textContent = 'More';
    }
}