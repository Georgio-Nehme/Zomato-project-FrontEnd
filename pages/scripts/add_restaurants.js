let button = document.getElementById("Submit_restaurant");
button.addEventListener("click", function(event){
    event.preventDefault();
    const restaurant_name = document.getElementById("restaurant_name").value;
    const restaurant_city = document.getElementById("restaurant_city").value;
    const restaurant_phone = document.getElementById("restaurant_phone").value;
    
    console.log(restaurant_city)



    let data = new FormData();
    data.append("name", restaurant_name);
    data.append("city", restaurant_city);
    data.append("phone", restaurant_phone);
    
    
    console.log(data)

    axios({
        method:"post",
        url: 'http://localhost/zomato-project-backend/add_restaurant.php',
        data: data,
    })
    .then(function (response) {
        console.log(response);
    })


});