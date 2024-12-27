document.body.style.width = window.innerWidth;
document.body.style.height = window.innerHeight;


function numberProperty() {
  let n = parseFloat(document.getElementById("input").value);
  let result = document.getElementById("result");
  result.innerHTML = "";

  if (isNaN(n)){ 
    result.textContent = "Please enter a valid number."; 
    return; 
  }
  
  if(Number.isInteger(n)){
    const newItem = document.createElement("p");
    newItem.textContent = "It is a whole number meaning it does not have digits after its decimal point";
    result.appendChild(newItem);
  }

  if((n * 10) % 10 != 0){
    const newItem2 = document.createElement("p");
    newItem2.textContent = "It is a decimal meaning that it has digits after its decimal point";
    result.appendChild(newItem2);
  }

  if(Number.isInteger((n/2))){
    const newItem3 = document.createElement("p");
    newItem3.textContent = "It is an even number therefore it is divisible by 2";
    result.appendChild(newItem3);
  }

  if(((n/2 * 10) % 10 != 0 && Number.isInteger(n))){
    const newItem4 = document.createElement("p");
    newItem4.textContent = "It is an odd number therefore it is not divisible by 2";
    result.appendChild(newItem4);
  }

  if(n > 1){
    for (let i = 2; i < (n/2)+1; i++) {
      if (n%i == 0) {
          return null;
      }  
    }
    const newItem5 = document.createElement("p");
    newItem5.textContent = "It is a prime number";
    result.appendChild(newItem5);
  }

}


 
  