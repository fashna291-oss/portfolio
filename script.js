let theme = document.getElementById("darktheme");

theme.addEventListener("click", function(){
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        theme.innerHTML = ' Dark Theme  <i class="fa-solid fa-moon"></i>';
    } else{
       theme.innerHTML= 'Light Theme <i class="fa-solid fa-sun"></i>'
    }
})


let form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name == ""  || email == ""  || message == "" ){
        alert("please fill all fields")
    } else{
        alert("Message Sent Successfully")
    }
})