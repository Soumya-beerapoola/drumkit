

function drumkit(){

    document.addEventListener("keydown",playSound);

    function playSound(e){

       console.log(e.keyCode);
       let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
       if (!audio) return;
       audio.play();
       let key = document.querySelector(`div[data-key="${e.keyCode}"]`)
       key.classList.add("playing");
       let keys = document.querySelectorAll(".key")
       keys.forEach(function(key){
           key.addEventListener("transitionend",removeTransition)
       })
    }
    
    function removeTransition(e){

        this.classList.remove("playing");
    }

}

drumkit()