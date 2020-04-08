const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api/bookings', (req, res) => {
    res.json( { message: "Let's get the party started"} )
})

app.listen(3001)