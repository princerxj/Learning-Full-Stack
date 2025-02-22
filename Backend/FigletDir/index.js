const figlet = require("figlet");

figlet("P r i n c e", function(err, data) {
    if(err) {
        console.log("Something went wrong");
        return;
    }
    console.log(data);
});