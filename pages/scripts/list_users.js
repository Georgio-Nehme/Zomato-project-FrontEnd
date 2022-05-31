

const users_table = document.getElementById("users_table");
const id = document.getElementById("id");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone_number = document.getElementById("phone_number");





axios({
    method:"post",
    url: 'http://localhost/zomato-project-backend/list_all_users.php',
})
alert("working")
.then(function (response) {
    console.log(response);
    let users = response.data;
    
    
    console.log(users[1][id])

})

