let highest =0;

let gameSeq = []
let userSeq = []

let started = false;
let level = 0;

let colors = ["red","blue","orange","purple"];

let body = document.querySelector("body")

let h2 = document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started==false)
    {
        console.log("Game started")
        started = true;
        levelup();
    }
})

function flash(btn)
{
    btn.classList.add("flash")
    setTimeout(function()
    {
        btn.classList.remove("flash")
    },251)
}


let h3 = document.querySelector("h3");
function levelup()
{   userSeq = [];
    level++;
    h3.innerText=`Level ${level}`;
    setTimeout(function(){
        let btn = colors[Math.floor(Math.random()*4)];
        gameSeq.push(btn);
        console.log(gameSeq); 
        let rbtn = document.querySelector(`.${btn}`)
        flash(rbtn);
    },351)
    // random button
}

function reset()
{
    userSeq = []
    gameSeq = []
    level =0
    started = false 
}

function check(idx)
{
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
            levelup();
        }
    }
    else
     {
        h3.innerHTML = `Game Over ! Your Score was <b>${level}</b> <br> Press any key to start the game`
        body.classList.add("changeBg")
        setTimeout(function(){
            body.classList.remove("changeBg")
        },201)

        if(level>highest)
        {
            highest = level;
            h2.innerHTML=`Congats you achived highest score <b>${highest}</b>`
        }
        else
        {
            h2.innerHTML=`Highest score is <b>${highest}</b>`
        }
        reset();
     }
} 

function btnPress(){
    flash(this)

    let  userColor = this.getAttribute("id");
    console.log(userColor)
    userSeq.push(userColor)
    check(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress)
}