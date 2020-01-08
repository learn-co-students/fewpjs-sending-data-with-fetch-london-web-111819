// Add your code here
const data = JSON.stringify({
    name: "Steve",
    email: "steve@steve.com"
})

function submitData() {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: data
    })
    .then( response => response.json() )
    .then( json => document.body.append(json['id']) )
    .catch( object => document.body.append(object['message']) )
    debugger
}