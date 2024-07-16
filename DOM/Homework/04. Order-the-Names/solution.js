function solve() {
/*
    let addbut = document.getElementsByTagName('button')[0];
    let input = document.querySelector("input[type=text]");
    let fLetter='';
   
   
       addbut.addEventListener('click', function(){
      
        let InputString = input.value;
       
        fLetter = InputString[0].toUpperCase();
        let index = fLetter.charCodeAt(0) - 65;  
        //console.log(index);
        let Allol = document.querySelectorAll("ol li");  
        if (Allol[index].textContent === ''){
           Allol[index].textContent += InputString.charAt(0).toUpperCase() + InputString.slice(1); 
        }else{
           Allol[index].textContent += ", "+ InputString.charAt(0).toUpperCase() + InputString.slice(1);  
        }
        input.value = '';
        
        });
        */

        let addButton = document.getElementsByTagName("button")[0];
        let inputTextElement = document.getElementsByTagName("input")[0];
     
        let orderListElement = document.getElementsByTagName("ol")[0];
        let listItemElements = orderListElement.getElementsByTagName("li");
     
        addButton.addEventListener("click", function () {
            let inputName = inputTextElement.value;
     
            if (inputName) {
                let currentName = "";
                currentName += inputName[0].toUpperCase();
     
                for (let i = 1; i < inputName.length; i++) {
                    currentName += inputName[i].toLowerCase();
                }
     
                let index = currentName.charCodeAt(0) - 65;
     
                if (listItemElements[index].textContent.length === 0) {
                    listItemElements[index].textContent += currentName;
                } else {
                    listItemElements[index].textContent += ", " + currentName;
                }
     
                inputTextElement.value = null;
            }
        })
}