// Add your code here
 

 function submitData(name, email){
     return fetch("http://localhost:3000/users", {
        method:'POST',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
        body: JSON.stringify({name, email})
     })
     .then(function(response){
         return response.json()
     })
     .then(function(book){
       document.body.innerHTML = book['id'] 
     })
    .catch(function(error){
       document.body.innerHTML = error.message
    })
 }

 submitData('John', 'example@example.com')

 document.addEventListener('DOMContentLoaded', function() {
    
  })
