let punch = document.getElementById("punch");



 let sec = 0;
 let min = 0;

 let timers;

 let running = false

punch.addEventListener('click',function(){
   
    document.getElementById("decrease").classList.remove("h-30");
    document.getElementById("decrease").classList.add("h-10");
    document.getElementById("images").src = "assets/image-removebg-preview (3).png";
    document.getElementById("images").style.position = "relative";
    document.getElementById("images").style.bottom = "30px";
    document.getElementById("images").style.right = "15px";
    if(running === false){
        running = true;
        timers = setInterval(() => {
            
             
                     
                 sec++
     
                 if(sec == "60"){
                     sec = "0";
                     min++
                 }
             
             
                 let secText = String(sec).padStart(2, "0");
                 let minText = String(min).padStart(2, "0");
     
                 document.getElementById("second").innerHTML = secText;
                 document.getElementById("minutes").innerHTML = minText;
                 
             
         },1000);
    } else{
        running = false;
        clearInterval(timers);
        stop();
    }

});




function stop(){
    document.getElementById("decrease").classList.remove("h-10");
    document.getElementById("decrease").classList.add("h-30");
}

document.getElementById("reset").addEventListener('click',function(){
    document.getElementById("decrease").classList.remove("h-10");
    document.getElementById("decrease").classList.add("h-30");
    clearInterval(timers);
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";
    document.getElementById("images").src = "/assets/image-removebg-preview (1).png";
    document.getElementById("images").style.position = "relative";
    document.getElementById("images").style.bottom = "-5px";
    document.getElementById("images").style.left = "2px";
})


