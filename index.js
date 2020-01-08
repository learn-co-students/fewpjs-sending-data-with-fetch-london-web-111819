// Add your code here
function submitData(inputName,inputEmail) {

let pElementInBody = document.getElementById("test-p")
        

let formData = {
    name: inputName,
    email: inputEmail
  };
   
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
   
  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
        pElementInBody.innerHTML = object.id
    })
    .catch(function(error){
        let message = 'Unauthorized Access'
        pElementInBody.innerHTML = error.message
    });

}

submitData("Basri","b@email.com")