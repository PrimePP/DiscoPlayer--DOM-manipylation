var red = document.querySelector(".red");
var cyan = document.querySelector(".cyan");
var violet = document.querySelector(".violet");
var orange = document.querySelector(".orange");
var pink = document.querySelector(".pink")
var center = document.querySelector(".center")


console.log("Hello")
//obtaining the color 
var getBgColor = (elem) => {
    return window.getComputedStyle(elem).backgroundColor;
}
//setting the center circle color
function changeTheColor(elem,color){
    return elem.addEventListener('click',()=>{
        center.style.background = getBgColor(color);
    });
}


changeTheColor(red,red);
changeTheColor(cyan,cyan);
changeTheColor(violet,violet);
changeTheColor(orange,orange);
changeTheColor(pink,pink);

//playing audio
let audio1 = new Audio("./assets/mac_miller.mp3");
let audio2 = new Audio("./assets/shut_down4.mp3");
let audio3 = new Audio("./assets/window_error.mp3");
let audio4 = new Audio("./assets/window2.mp3");
let audio5 = new Audio("./assets/windows_error3.mp3");

//plays audio on event mouseOver
function playMe(elem,color){
   if(color === "red"){
    elem.addEventListener('mouseover',() =>{
        audio1.play();
    });
   }
   else if(color === "cyan"){
    elem.addEventListener('mouseover',() =>{
        audio2.play();
    });
   }
   else if(color === "violet"){
    elem.addEventListener('mouseover',() =>{
        audio3.play();
    });
   }
   else if(color === "orange"){
    elem.addEventListener('mouseover',() =>{
        audio4.play();
    });
   }
   else if(color === "pink"){
    elem.addEventListener('mouseover',() =>{
        audio5.play();
    });
   }
        
}

playMe(red,"red");
playMe(cyan,"cyan");
playMe(violet,"violet");
playMe(orange,"orange");
playMe(pink,"pink");


//changes the background color randomly
function randomColorGenerator(){
    //changing background color
    var arr = [111,222,333,444,555,666,777,888];
    var rantNum = Math.round(Math.random()*1000);
    for(ele of arr){
        var hexVal = "#"+ rantNum+ele;
        document.body.style.backgroundColor = hexVal;
    }    
}

setInterval(randomColorGenerator,1000);
