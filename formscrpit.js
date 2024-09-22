var icon =document.getElementById("icon");
var hero =document.querySelector(".hero");
var conatiner = document.querySelector(".container");
var contatct = document.querySelector(".contact");
var formcontainer =document.querySelector(".form-container")
var contact1 = document.querySelector(".contact1");
var image = document.querySelector(".image");
var back1 = document.querySelector(".back1");
var back2 = document.querySelector(".back2");

icon.onclick = function(){
    hero.classList.toggle("darktheme");
    conatiner.classList.toggle("darktheme")
    contatct.classList.toggle("darktheme")
    formcontainer.classList.toggle("darktheme")
    contact1.classList.toggle("darktheme")
    if(hero.classList.contains("darktheme")){
        icon.src = "sun1.png";
    }else{
        icon.src ="moon.png"}
}
image.addEventListener("mouseover",()=>{
    back1.classList.add("animate");
    back2.classList.add("animate");
})
image.addEventListener("mouseout",()=>{
    back1.classList.remove("animate");
    back2.classList.remove("animate");
})