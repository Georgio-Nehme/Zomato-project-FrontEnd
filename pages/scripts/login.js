let button = document.getElementById("login");
button.addEventListener("click", function(event){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const home = document.getElementById("home");

    let data = new FormData();
    data.append("email", email);
    data.append("password", password);


    axios({
        method:"post",
        url: 'http://localhost/zomato-project-backend/login.php',
        data: data,
    })
    .then(function (response) {
        console.log(response)
        let result = response.data;
        let id =result.id;
        let message = result.response;
        
        localStorage.setItem("user_id", id)

        if(result.id != 0 ) {
            window.location.replace('../index.html');
        } else {
            alert("Wrong login information")
        }

    })

    
});


