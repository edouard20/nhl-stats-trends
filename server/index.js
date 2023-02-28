// server/index.js

const NHL_URL = "https://statsapi.web.nhl.com/api/v1/";

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

var request = require('request');

// GET https://statsapi.web.nhl.com/api/v1/schedule?teamId=30&startDate=2018-01-02&endDate=2018-01-02

app.get('/api/nhl/connect', (req, res) => {
    request(NHL_URL, function(err, body){
        res.json(body);
    })
})

app.get('/api/nhl/team/periodGoals/year', (req, res) => {
    request("https://statsapi.web.nhl.com/api/v1/schedule?teamId=30&startDate=2018-01-02&endDate=2018-01-02", function(err, body){
        res.json(body);
    })
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});