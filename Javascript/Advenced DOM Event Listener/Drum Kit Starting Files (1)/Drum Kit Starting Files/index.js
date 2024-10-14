var arr=['w','a','s','d','j','k','l'];
for(let i=0;i<=6;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function(){
        
        switch (this.innerHTML) {
            case "w":
                    var tom1= new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    this.style.color="white";
                break;
            case "a":
                    var tom2= new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    this.style.color="white";        
                break;
             case "s":
                    var tom3= new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    this.style.color="white";    
                break;
             case "d":
                    var tom4= new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    this.style.color="white";
                break;
             case "j":
                    var snare= new Audio("sounds/snare.mp3");
                    snare.play();
                    this.style.color="white";
                break;
             case "k":
                    var crash= new Audio("sounds/crash.mp3");
                    crash.play();
                    this.style.color="white";
                break;
             case "l":
                 var kick= new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    this.style.color="white";
                break;
            default: console.log("no key Registared");
                    this.style.color="#DA0463";
                break;
        }

    })
}




