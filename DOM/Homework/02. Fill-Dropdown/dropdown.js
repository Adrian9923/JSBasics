function addItem() {
    let itemText = document.getElementById('newItemText').value;
    let itemValue = document.getElementById('newItemValue').value;

    let option = document.createElement('option');
    let result = itemText + ' ' + itemValue;
    option.textContent = result;

    let parent = document.getElementById('menu');
    parent.appendChild(option);

    document.getElementById('newItemText').value = ''; 
    document.getElementById('newItemValue').value = ''; 
}