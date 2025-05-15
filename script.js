function redirect() { 
  const selectElement = document.getElementById("mySelect"); 
  const selectedValue = selectElement.value; 


  switch (selectedValue) { 
      case "option1": 
        document.location = "/Users/chloegillen/Desktop/background/son.html"; 
        alert("Allow Surviellance of Yr Body and Mind.") 
        break; 
      case "option2": 
          document.location = "/Users/chloegillen/Desktop/background/father.html"; 
        alert("Allow Surviellance of Yr Body and Mind.") 
          break; 
      case "option3": 
         document.location = "/Users/chloegillen/Desktop/background/spirit.html"; 
        alert("Allow Surviellance of Yr Body and Mind.")  
          break; 
      default: 
          alert("RAHHHH JUST PICK ONE OF THE OPTIONS WHAT THE FUCK."); 
  }
}
