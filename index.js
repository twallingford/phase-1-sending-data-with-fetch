function submitData(userName, userEmail){
    const b = document.body 
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": userName, 
            "email": userEmail})
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object.id)
        b.innerHTML = object.id;
    })
    .catch(function (error) {
        console.log(error.message)
        b.innerHTML = error.message;
    })
}