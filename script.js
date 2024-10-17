let score = 0;
let pscore = document.querySelector("#score");
let interval;
let dzikflag = false;
let anstimer;
let hscore = 0;
let harderhscore = 0;
let hardesthscore = 0;
let difficultyflag;
const cursor = document.querySelector("#cursor");
const mainp = document.querySelectorAll(".maintext");
const highscp = document.querySelectorAll(".highscore");
document.addEventListener('mousemove',function(e) {
    var xCord = e.pageX;
    var yCord = e.pageY;
    console.log(xCord,yCord);
    cursor.style.position="absolute";
    cursor.style.left=xCord + 0.25 + "px";
    cursor.style.top=yCord + 0.25 + "px";
    
})
document.addEventListener('click',function(e) {
    cursor.classList.add("cursoranimation");
    setTimeout(function() {cursor.classList.remove("cursoranimation")},250);

    
})



const bodybg = document.querySelector("#bodybg");
const startbtn = document.querySelector("#startbutton");
startbtn.addEventListener("click",normaldifficulty);
const harderstartbtn = document.querySelector("#harderstartbutton");
harderstartbtn.addEventListener("click",harderdifficulty);
const hardeststartbtn = document.querySelector("#hardeststartbutton");
hardeststartbtn.addEventListener("click",hardestdifficulty);

const btn = document.querySelector("#dzik");
btn.addEventListener("click",dzik);
btn.disabled=true;

pnormalhs = document.querySelector("#normalhs");
pharderhs = document.querySelector("#harderhs");
phardesths = document.querySelector("#hardesths");


function normaldifficulty()
{
    difficultyflag=1;
    anstimer = 950;
    start();
    
}
function harderdifficulty()
{
    difficultyflag=2;
    anstimer = 700;
    start();
}
function hardestdifficulty()
{
    difficultyflag=3;
    anstimer = 450;
    start();
}
function start()
{
    interval = setInterval(incrementscore,anstimer+50);
    startbtn.classList.add("hidden");
    harderstartbtn.classList.add("hidden");
    hardeststartbtn.classList.add("hidden");
    for (let i=0; i<highscp.length;i++)
        {
            highscp[i].classList.add("hidden");
        }
    for (let i=0; i<mainp.length;i++)
        {
            mainp[i].classList.add("hidden");
        }
    btn.disabled=false;
}

function dzik() {
    if (((score%7)==0 || scorestring.includes("7")) && score!=0) {
        dzikflag=true;
        pscore.classList.add("correctans");
        setTimeout(function() {pscore.classList.remove("correctans")},250);
                
            
        }
    else {
        if (difficultyflag==1 && score > hscore) {
            hscore=score;
            pnormalhs.innerHTML="Highscore (tryb zwykły): " + score;
        }
        if (difficultyflag==2 && score > harderhscore) {
            harderhscore=score;
            pharderhs.innerHTML="Highscore (tryb trudniejszy): " + score;
        }
        if (difficultyflag==3 && score > hardesthscore) {
            hardesthscore=score;
            phardesths.innerHTML="Highscore (tryb najtrudniejszy): " + score;
        }
        alert("Liczba " + score + " nie jest podzielna przez 7 ani nie zawiera w sobie 7");
        score = 0;
        pscore.innerHTML=score;
        clearInterval(interval);
        startbtn.classList.remove("hidden");
        harderstartbtn.classList.remove("hidden");
        hardeststartbtn.classList.remove("hidden");
        for (let i=0; i<highscp.length;i++)
            {
                highscp[i].classList.remove("hidden");
            }
        for (let i=0; i<mainp.length;i++)
            {
                mainp[i].classList.remove("hidden");
            }
        btn.disabled=true;
    }
}
function checkDzik() {
    if (dzikflag == false){
        if (difficultyflag==1 && score > hscore) {
            hscore=score;
            pnormalhs.innerHTML="Highscore (tryb zwykły): " + score;
        }
        if (difficultyflag==2 && score > harderhscore) {
            harderhscore=score;
            pharderhs.innerHTML="Highscore (tryb trudniejszy): " + score;
        }
        if (difficultyflag==3 && score > hardesthscore) {
            hardesthscore=score;
            phardesths.innerHTML="Highscore (tryb najtrudniejszy): " + score;
        }
        
        score = 0;
        pscore.innerHTML=score;
        clearInterval(interval);
        startbtn.classList.remove("hidden");
        harderstartbtn.classList.remove("hidden");
        hardeststartbtn.classList.remove("hidden");
        for (let i=0; i<highscp.length;i++)
            {
                highscp[i].classList.remove("hidden");
            }
        for (let i=0; i<mainp.length;i++)
            {
                mainp[i].classList.remove("hidden");
            }
        btn.disabled=true;
    }
}
function incdelay() {
    dzikflag=false;
    score+=1;
}
function incrementscore()
{
    
    pscore.innerHTML=score;
    scorestring = score.toString();
    if (((score%7)==0 || scorestring.includes("7")) && score!=0) {
        console.log(dzikflag);
        setTimeout(checkDzik,anstimer);
    }
    console.log(dzikflag);
    setTimeout(incdelay,anstimer+10);

}

