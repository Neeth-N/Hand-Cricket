const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");
const op4 = document.getElementById("op4");
const op5 = document.getElementById("op5");
const op6 = document.getElementById("op6");
const ub = document.getElementById("ub");
const ob = document.getElementById("ob");
const uch = document.getElementById("uch");
const och = document.getElementById("och");
const score = document.getElementById("score");
const inn = document.getElementById("inn");
const min = 1;
const max = 6;

var img = document.createElement("img");
var opimg = document.createElement("img");
let opch;
let scr = 0;
let curr = 0;
let balls = 0;
opimg.src = "assets/0.png";
ob.appendChild(opimg);
img.src = "assets/0.png";
ub.appendChild(img);
inn.textContent = balls;

function opgen(){
    opch = Math.floor(Math.random()*max)+min;
    balls++;
    inn.textContent=balls;
    if(opch == 1){
        och.textContent = "is 1";
        opimg.src = "assets/1.png";
        ob.appendChild(opimg);
    }   
    else if(opch == 2){
        och.textContent = "is 2"
        opimg.src = "assets/2.png";
        ob.appendChild(opimg);
    }
    else if(opch == 3){
        och.textContent = "is 3"
        opimg.src = "assets/3.png";
        ob.appendChild(opimg);           
    }
    else if(opch == 4){
        och.textContent = "is 4"
        opimg.src = "assets/4.png";
        ob.appendChild(opimg);            
    }
    else if(opch == 5){
        och.textContent = "is 5"
        opimg.src = "assets/5.png";
        ob.appendChild(opimg);           
    }
    else{
        och.textContent = "is 6"
        opimg.src = "assets/6.png";
        ob.appendChild(opimg);           
    }

    if (curr==opch){
        scr-=curr;
        balls--;
        window.alert(`YOU ARE OUT, YOU SCORED ${scr} RUNS IN ${balls} BALLS`)
        scr=0;
        curr=0;
        balls=0;
        inn.textContent=balls;
        score.textContent= scr;
        uch.textContent = "...";
        och.textContent = "...";
        opimg.src = "assets/0.png";
        img.src = "assets/0.png";
        ob.appendChild(opimg);
        ub.appendChild(img);
    }
}



    op1.onclick = function(){
        uch.textContent = "is 1";
        scr+=1;
        curr=1;
        score.textContent= scr;
        img.src = "assets/1.png";
        ub.appendChild(img);
        opgen();
    } 
    
    op2.onclick = function(){
        uch.textContent = "is 2";
        scr+=2;
        curr=2;
        score.textContent= scr;
        img.src = "assets/2.png";
        ub.appendChild(img);
        opgen();
    }
    
    op3.onclick = function(){
        uch.textContent = "is 3";
        scr+=3;
        curr=3;
        score.textContent= scr;
        img.src = "assets/3.png";
        ub.appendChild(img);
        opgen();
    }
    
    op4.onclick = function(){
        uch.textContent = "is 4";
        scr+=4;
        curr=4;
        score.textContent= scr;
        img.src = "assets/4.png";
        ub.appendChild(img);
        opgen();
    }
    
    op5.onclick = function(){
        uch.textContent = "is 5";
        scr+=5;
        curr=5;
        score.textContent= scr;
        img.src = "assets/5.png";
        ub.appendChild(img);
        opgen();
    }
    
    op6.onclick = function(){
        uch.textContent = "is 6";
        scr+=6;
        curr=6;
        score.textContent= scr;
        img.src = "assets/6.png";
        ub.appendChild(img);
        opgen();
    }



