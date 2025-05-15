function redirect() { 
  const selectElement = document.getElementById("mySelect"); 
  const selectedValue = selectElement.value; 


  switch (selectedValue) { 
      case "option1": 
        window.location.href = "./son.html" 
        alert("Allow Surviellance of Yr Body and Mind.") 
        break; 
      case "option2": 
          window.location.href = "./father.html" 
        alert("Allow Surviellance of Yr Body and Mind.") 
          break; 
      case "option3": 
         window.location.href = "./spirit.html" 
        alert("Allow Surviellance of Yr Body and Mind.")  
          break; 
      default: 
          alert("RAHHHH JUST PICK ONE OF THE OPTIONS WHAT THE FUCK."); 
  }
}
