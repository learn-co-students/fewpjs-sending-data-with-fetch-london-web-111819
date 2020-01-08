// const form = document.querySelector("")

// form.addEventListener("submit", function(e){
//   e.preventDefault()
//   const card = document.createElement("div")
//   const bookList = document.querySelector("#book-list")

//   card.classList.add("card")
//   card.innerHTML = `<img src="${form.children[8].value}">
//      <h3>${form.children[1].value}</h3>
//      <p>${form.children[4].value}</p>
//      <button name="delete-book">Delete Book</button>`
//   bookList.appendChild(card)
// })



// let formData = {
//     dogName: "Byron", 
//     dogBreed: "Poodle"
// };





// fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(object) {
//         console.log(object);
//     });


function submitData(name, email){

    let p = document.querySelector("#para")

    let userFormData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userFormData)
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        
        p.innerHTML = object.id
    })
    .catch(function(error) {
        let message = "Unauthorized Access"
        p.innerHTML = error.message;
    });
}









