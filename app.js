let userscore = 0;
let compscore = 0;
let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");
const users = document.querySelector("#user-score");
const comps = document.querySelector("#comp-score");


const Gencompchoice = () => {
    const options = ["rock" , "paper" , "Scissors"];
    const randidx =  Math.floor(Math.random() * 3 );
    return options [randidx];
}

const Drawgame = () => {
    msg.innerText = "Game was a Draw. Play again" ;
    msg.style.backgroundColor = "#213555";
}

const Userwin = (userchoice, compchoice) => {
    msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = 'green';
    userscore++;
    users.innerText = userscore ;
}

const Compwin = (userchoice, compchoice) => {
    msg.innerText = `You Lose! comp ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = 'red';
    compscore++;
    comps.innerText = compscore ;
}

const Playgame = (userchoice) => {
    const compchoice = Gencompchoice();
    if ( userchoice === compchoice) {
        Drawgame();
    }else if ((userchoice === "paper" && compchoice === "rock")|| (userchoice === "rock" && compchoice === "Scissors") || (userchoice === "Scissors" && compchoice === "paper")) {
        Userwin(userchoice, compchoice);
    }else {
        Compwin(userchoice, compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id");
        Playgame(userchoice);
    });
});