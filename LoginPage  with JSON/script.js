const userNameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const button = document.getElementById("myButton");

button.addEventListener('click', start);

function start(){

    const userName = userNameInput.value;
    const password = passwordInput.value;

    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const users = data.users;
        const user = users.find(user => user.username === userName && user.password === password);

        if(user) {
            console.log("correct");
        }else{
            console.log("incorrect");
        }
    })
}