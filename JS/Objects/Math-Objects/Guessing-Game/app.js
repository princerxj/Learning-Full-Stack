const max = prompt("Enter the maximum number : ");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number : ");

while(true) {
    if(guess == "quit") {
        console.log("User quit");
        break;
    }

    if(guess == random) {
        console.log("Congrats, You are right!!");
        break;
    } else if(guess < random) {
        prompt("Hint : Your guess was too small. Please try again");
    } else {
        prompt("Hint : Your guess was too large, please try again")
    }
}