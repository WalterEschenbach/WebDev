window.onload = function(){
    let buttons =  document.querySelectorAll("button");
    
    for (let button of buttons){
        button.addEventListener("click", logEvent)
    }
}

let container = document.querySelector(".container");
let profilePic = document.querySelector(".profile img")


function logEvent (e){
    switch(e.target.id){
        case "darkmode":{
            container.classList.toggle("darkmode")
            break;
        }
        case'animate':{
            profilePic.classList.add("animate-profile")
            setTimeout(()=>profilePic.classList.remove("animate-profile"), 3000)
            break;
        }
    }
}
