function solve() {

    const expressionOutput = document.getElementById('expressionOutput');
    const resultOutput = document.getElementById('resultOutput');
    const keys = document.querySelectorAll('.keys button');

    let expression = '';

    // Loop through all calculator buttons and attach click event listener
    keys.forEach((button) => {
        button.addEventListener('click', () => {
            const buttonValue = button.value;

            if (buttonValue === '=') {
                try {
                    const result = eval(expression);
                    resultOutput.textContent = result;
                } catch (error) {
                    resultOutput.textContent = 'Error';
                }
                expression = ''; // Clear expression after calculation
            } else if (buttonValue === 'C') {
                expression = '';
                expressionOutput.textContent = '';
                resultOutput.textContent = ''; // Clear the result as well
            } else {
                expression += buttonValue;
                expressionOutput.textContent = expression;
                resultOutput.textContent = '';
            }
        });
    });
}