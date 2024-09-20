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