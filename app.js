let choices = document.querySelectorAll(".choice");
let winningtitle = document.querySelector("#msg");
let userscoretxt = document.querySelector("#userscore");
let compscoretxt = document.querySelector("#compscore");
let userscore = 0;
let compscore = 0;

const userWon = () => {
    winningtitle.innerText = "User Won!!";
    userscore++;
    userscoretxt.innerText = userscore;
    winningtitle.style.backgroundColor = "green";
}

const compWon = () => {
    winningtitle.innerText = "Computer Won!!";
    compscore++;
    compscoretxt.innerText = compscore;
    winningtitle.style.backgroundColor = "red";
}

const checkChoices = (userchoice, compchoice) => {
    if (userchoice == compchoice)
    {
        winningtitle.innerText = "It's a Draw!!";
        winningtitle.style.backgroundColor = "white";
    }
    else if (userchoice == "rock")
    {
        compchoice === "scissors" ? userWon() : compWon();
    }
    else if (userchoice == "paper")
    {
        compchoice === "rock" ? userWon() : compWon();
    }
    else
    {
        if(compchoice == "paper")
            userWon();
        else
            compWon();
    }        
};

const compChoice = () =>  {
    return choices[Math.floor(Math.random() * 3)].getAttribute("id");
};

choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        let compchoice = compChoice();
        console.log(`${userchoice}, ${compchoice}`);
        checkChoices(userchoice, compchoice);
    });
});