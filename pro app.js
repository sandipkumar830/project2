let form = document.querySelector("form");

form.addEventListener("click",function(event){
    event.preventDefault();
    
    let username = document.querySelector("#username");
    let address = document.querySelector("#address");
    let contactnumber = document.querySelector("#contactnumber");

    console.log(username.value);
    console.log(address.value);
    console.log(contactnumber.value);

});