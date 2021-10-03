window.onload = () => {
    const button = document.querySelector("#fightButton");
    button.addEventListener("click", battleFunc);
};

function compChoose(choices) {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function determineOutcome(choices, userChoice, compChoice, uc, cc) {
    if (compChoice === userChoice) {
        result.innerHTML = `<b>Its a Draw, Try again.</b>`;
    } else if (userChoice === 'r' && compChoice === 's') {
        result.innerHTML = `<b>You Win!!</b>`;
    } else if (userChoice === 's' && compChoice === 'p') {
        result.innerHTML = `<b>You Win!!</b>`;
    } else if (userChoice === 'p' && compChoice === 'r') {
        result.innerHTML = `<b>You Win!!</b>`;
    } else { result.innerHTML = `<b> HAHAHA What a Loser, Try again I doubt you'll win.</b>` };
};

function checkInput(dict, choices, userChoice, compChoice) {
    if (choices.includes(userChoice)) {
        uc.innerHTML = `<h2>You Chose:</h2> <img src=${dict[userChoice[0]]}>`;
        cc.innerHTML = `<h2>Computer Chose:</h2> <img src=${dict[compChoice]}>`;
        return true
    } else {
        uc.innerHTML = ``;
        cc.innerHTML = ``;
        result.innerHTML = `<b>Sorry, Invalid choice. Please try again asshat.<b>`;
        return false;
    };
};

function battleFunc() {
    const choices = ["r", "p", "s"];
    const dict = { "r": "./rock.png", "p": "./paper.png", "s": "./scissors.png" }
    let userChoice = document.querySelector("#userChoice").value;
    const compChoice = compChoose(choices);
    userChoice = userChoice[0].toLowerCase();
    if (!checkInput(dict, choices, userChoice, compChoice)) { return; };
    determineOutcome(choices, userChoice, compChoice);
};

function main() {
    battleFunc();
};

main()