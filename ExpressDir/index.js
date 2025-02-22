const express = require("express");

const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`App is listening on ${port} port`);
});

// app.use((req,res) => {
//     console.log("Request Received");
//     res.send("<h1>Prince</h1> <ul><li> Hii</li></ul>");
// });

app.get('/', (req,res) => {
    res.send("Hello i am the root");
});

app.get('/:username/:id', (req,res) => {
    let {username, id} = req.params;
    let code = `<h1>Welcome to the @${username} !</h1>`;
    res.send(code);
});

// app.get("/search", (req,res) => {
//     // console.log(req.query);
//     // res.send("No results");
//     let {q} = req.query;
//     res.send(`Search results for the query : ${q}`);
// });

app.get("/search", (req,res) => {
    let {q} = req.query;
    if(!q) {
        res.send("<h1>Nothing has been searched</h1>");
    }
    res.send(`<h1>Search results for ${q} </h1>`);
});