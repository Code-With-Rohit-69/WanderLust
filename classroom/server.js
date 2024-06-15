const express = require('express');
const app = express();

app.get("/getcookies", (req, res) => {
    res.cookie("greet", "hello");
    res.send('send some cookies');
})

app.get('/', (req, res) => {
    res.send('Hi, its Root');
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})