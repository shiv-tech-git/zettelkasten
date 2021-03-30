const express = require("express")
const path = require("path")
const bodyParser = require('body-parser');
const getNotes = require('./backend/requestHandlers.js').getNotes

const app = express();

app.use(bodyParser.json());
app.use("/src", express.static(path.resolve(__dirname, "src")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src", "index.html"))
})
app.post('/create', function (req, res) {
    console.log(req)
    getNotes();
    res.send('');
    
  })

app.listen(3000, () => console.log("Server running..."))