let boxes=document.querySelectorAll(".btn");
let reset=document.querySelector(".reset-button");
let displayMsg=document.querySelector(".display-winner");
let msg=document.querySelector(".msg");
let newGame = document.querySelector(".new-game");

let turnO = false;

const winning_pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
}
const displayWinner=(winner)=>{
    msg.innerHTML= `Congaratulations, Winner is ${winner}`;
    displayMsg.classList.remove("hide");
    disableBoxes();
}

const checkWinner= ()=> {
    for(pattern of winning_pattern){
        val1=boxes[pattern[0]].innerText;
        val2=boxes[pattern[1]].innerText;
        val3=boxes[pattern[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1==val2 && val2==val3){
                displayWinner(val1);
            }
        }
    }
}
const resetGame= ()=>{
    turnO=false;
    enableBoxes();
    displayMsg.classList.add("hide");
}
reset.addEventListener("click", ()=>{
    resetGame();
})
newGame.addEventListener("click", ()=>{
    resetGame();
})
