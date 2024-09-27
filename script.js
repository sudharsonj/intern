var icon =document.getElementById("icon");
var hero =document.querySelector(".hero");
var contatct = document.querySelector(".contact");
var formcontainer =document.querySelector(".form-container")
var image = document.querySelector(".image");
var back1 = document.querySelector(".back1");
var back2 = document.querySelector(".back2");
var h1 = document.querySelector("h1");

icon.onclick = function(){
    hero.classList.toggle("darktheme");
    contatct.classList.toggle("darktheme")
    formcontainer.classList.toggle("darktheme")
    h1.classList.toggle("darktheme")
    if(hero.classList.contains("darktheme")){
        icon.src = "/sun.png";
        
    }else{
        icon.src ="/moon.png"
    }
}
image.addEventListener("mouseover",()=>{
    back1.classList.add("animate");
    back2.classList.add("animate");
})
image.addEventListener("mouseout",()=>{
    back1.classList.remove("animate");
    back2.classList.remove("animate");
})


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