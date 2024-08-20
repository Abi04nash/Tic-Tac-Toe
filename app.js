let boxes = document.querySelectorAll(".box");
let ResetGame = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msgg");
let para = document.querySelector("#msg");

let turno = true; //playerx , playerO



const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        // this.innerText = "X"; // Use 'this' instead of 'box'
        if(turno){
            box.innerText = "O";
            turno = false;
        }
        else{
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;

        checkwinner();
    });
});


const resetgame = () => {
    turno = true;
    enableBoxes(); 
    msgcontainer.classList.add("hide");

};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const diableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations ${winner} is  the WINNER`;
    msgcontainer.classList.remove("hide");
    diableBoxes();
};

const checkwinner = () => {
    for(let pattern of winpattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner");
                showWinner(pos1val);
            }
        }
    }
};


ResetGame.addEventListener("click" , resetgame);




