function submitData(name, email) {
let formData = {
    name: `${name}`,
    email: `${email}`
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
      let p = document.createElement('p')
      p.innerHTML = object.id
      document.body.appendChild(p)
      // once we have the object, append it to the DOM
    })
    .catch(function(error) {
        let p = document.createElement('p')
        p.innerHTML = error.message
        document.body.appendChild(p);
        // if the POST request fails, appends the error message to DOM
    });
}


submitData()
// must return the function afterwards for it to show up on the DOM

