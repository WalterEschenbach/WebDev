window.onload = function(){
    let buttons =  document.querySelectorAll("button");
    
    for (let button of buttons){
        button.addEventListener("click", logEvent)
        console.log(button)
    }
}

let container = document.querySelector(".container");
let profilePic = document.querySelector(".profile img")


function logEvent (e){
    console.log(e)
    if(e.target.id === "darkmode"){
        container.classList.contains("darkmode")
        ?container.classList.remove("darkmode")
        :container.classList.add("darkmode")
    }
    if(e.target.id === 'animate'){
        profilePic.classList.add("animate-profile")
        setTimeout(()=>profilePic.classList.remove("animate-profile"), 3000)
    }
}
