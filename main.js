function check(){
    let name = document.getElementById("name");

    let password = document.getElementById("password");

    let password2 = document.getElementById("password2");
    
    let email = document.getElementById("email");

    document.getElementById("errorMessage").innerHTML="";


    if(name.value == ''){
        document.getElementById("errorMessage").innerHTML+="Your name field is empty <br>";
    } 

    else if(password.value == ''){
        document.getElementById("errorMessage").innerHTML+="Your password field is empty <br>";
    } 

    else if(password.value.length < 4){
        document.getElementById("errorMessage").innerHTML+="Your password is too short <br>";
    }

    else if(password2.value == ''){
        document.getElementById("errorMessage").innerHTML+="Confirm your password, please <br>";
    } 

    else  if(password.value != password2.value){
        document.getElementById("errorMessage").innerHTML+="Passwords do not match <br>";
    } 

    else if(email.value ==''){
        document.getElementById("errorMessage").innerHTML+="Your email field is empty <br>";
    } 

    else if(name.value == name.value && password.value ==password.value && 
        password.value == password2.value && email.value == email.value ){
        alert("Hello, " + name.value + "!");
    }

}

