 for(var i=0;i<document.querySelectorAll(".drum").length;i++){//onclicking the button on the screen
 document.querySelectorAll(".drum")[i].addEventListener("click",handle);
 function handle(){
   /*var audio=new Audio("sounds/crash.mp3");
   audio.play();*/
   var buttoninner=this.innerHTML;
   makesound(buttoninner);

   }}
   document.addEventListener("keypress",function(event){
     makesound(event.key);
   })
function makesound(key){//for pressing keys in keyboard;
     switch(key){
     case "w":
        var audio=new Audio('sounds/crash.mp3');
   audio.play();
   case "a":
    var kick=new Audio('sounds/kick-bass.mp3');
   kick.play();
   break;
   case "s":
    var snare=new Audio('sounds/snare.mp3');
   snare.play();
   break;
   case "d":
    var tom1=new Audio('sounds/tom-1.mp3');
   tom1.play();
   break;
   case "j":
    var tom2=new Audio('sounds/tom-2.mp3');
   tom2.play();
   break;
   case "k":
    var tom3=new Audio('sounds/tom-3.mp3');
   tom3.play();
   break;
   case "l":
   var tom4=new Audio('sounds/tom-4.mp3');
   tom4.play();
   break;
   default:
    console.log('buttoninner');

   

   }
}

