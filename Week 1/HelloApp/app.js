
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello RP!');
});

app.listen(3000, () => {
    console.log('HelloApp is running on port 3000');
});
