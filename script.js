function redirect() { 
  const selectElement = document.getElementById("mySelect"); 
  const selectedValue = selectElement.value; 


  switch (selectedValue) { 
      case "option1": 
        window.location.href = "./son.html" 
        alert("Allow Surviellance of Yr Body and Mind.") 
        break; 
      case "option2": 
          document.location = "https://github.com/back-pocket/fathersonholy/blob/a5245a234ba665f51c4ef72e3b8d92447a3a8bdb/father.htmll"; 
        alert("Allow Surviellance of Yr Body and Mind.") 
          break; 
      case "option3": 
         document.location = "https://github.com/back-pocket/fathersonholy/blob/018869c073c3646053cf49e773b19d11fc0a458b/spirit.html"; 
        alert("Allow Surviellance of Yr Body and Mind.")  
          break; 
      default: 
          alert("RAHHHH JUST PICK ONE OF THE OPTIONS WHAT THE FUCK."); 
  }
}
