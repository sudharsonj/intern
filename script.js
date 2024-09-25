var icon =document.getElementById("icon");

const container = document.querySelector(".container");

icon.onclick = function(){
    container.classList.toggle("dark");
    if(container.classList.contains("dark")){
        icon.src = "sun.png";
    }else{
        icon.src = "moon.png";
    }
}

function validation(){
    const Name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const nameerror = document.querySelector(".nameerror");
    const emailerror = document.querySelector(".emailerror");
    const messageerror =document.querySelector(".messageerror");
    var isValid = true; 

    if(Name.trim() === ""){
        nameerror.textContent = "Invalid Name";
        isValid=false;
    }else{
        nameerror.textContent=""
    }
    const Emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!Emailpattern.test(email)){
        emailerror.textContent="Enter valid E-mail";
        isValid=false;
    }else{
        emailerror.textContent="";
    }
    if(message.trim()===""){
        messageerror.textContent="Please leave a message";
        isValid=false
    }else{
        messageerror.textContent="";
    }
    if(isValid){
        alert("Successfully Submitted")
    }else{
        alert("Fill all fileds ")
    }
}