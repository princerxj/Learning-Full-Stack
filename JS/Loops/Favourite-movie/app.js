let favMovie = "Avatar";
let guess = prompt(" ");

while((guess != favMovie) && (guess != "quit")) {
    console.log("Wrong");
    guess = prompt(" ");
}