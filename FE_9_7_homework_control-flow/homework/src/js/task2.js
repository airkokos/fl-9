let yourAttempts = 3;
let startPrize = 10;
let lastRange = 5;
let rangeStart = 0;
let rangeEnd = lastRange;
let attempt = 0;
let maxPrize = startPrize;
let possiblePrize = maxPrize;
let prize = 0;
let message = confirm(`Do you want to play a game?`);
    while(message){
        let randomNum = random(rangeStart, rangeEnd);
        while(message && attempt < yourAttempts){
            let userChoice = +prompt(
                `Please enter the number from ${rangeStart} to ${rangeEnd}
                Attempts left: ${yourAttempts - attempt}
                Total prize: ${prize}$
                Possible prize on current attempt: ${possiblePrize}$`);
            if(userChoice === randomNum){
                prize += possiblePrize;
                maxPrize = maxPrize * 3;
                possiblePrize = maxPrize;
                message = confirm(`Congrats! You're prize is ${prize}$. Do you want to to continue?`);
                attempt = 0;
                rangeEnd = rangeEnd * 2;
                randomNum = random(rangeStart, rangeEnd);
            }else if(!userChoice){
                alert(`Thank you for a game. Your prize is: ${prize}`);
                message = confirm(`Do you want to play again?`);
                resetPrice();
            }else{
                possiblePrize = Math.floor(possiblePrize / 2);
                attempt++;
            }
        }
        if(attempt >= yourAttempts){
            alert(`Thank you for a game. Your prize is: ${prize}`);
            message = confirm(`Do you want to play again?`);
            resetPrice();
        }
    }
    if(!message){
        alert('You did not become a millionaire, but can.');
    }
    function random(min, max){
        let fixture = 1; 
        return Math.floor(Math.random() * (max - min + fixture) - min);
    }
    function resetPrice(){
        attempt = 0;
        maxPrize = startPrize;
        possiblePrize = maxPrize;
        prize = 0;
        rangeEnd = lastRange;
    }