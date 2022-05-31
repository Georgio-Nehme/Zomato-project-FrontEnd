

let button = document.getElementById("signup");
button.addEventListener("click", function(event){
    event.preventDefault();
    const username = document.getElementById("Username").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    let data = new FormData();
    data.append("username", username);
    data.append("phone", phone);
    data.append("email", email);
    data.append("password", password);


    axios({
        method:"post",
        url: 'http://localhost/zomato-project-backend/signup.php',
        data: data,
    })
    .then(function (response) {
        console.log(response);
    })


});