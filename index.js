// Add your code here
function submitData(name, email) {

    let p = document.querySelector('#test-p')
    let error_message = document.querySelector('#error')

    let configurationObject = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }

     return fetch('http://localhost:3000/users', configurationObject) 
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            p.innerHTML = object.id
        })
        .catch(function(er) {
            error_message.innerHTML = er.message
        })
}