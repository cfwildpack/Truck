const express = require('express');
const app = express();
const port = 10000;

app.get('/truck', (req, res) => {
    res.json({
        model: "TRX-500",
        status: "On Route",
        load: "15,000 kg"
    });
});

app.listen(port, () => {
    console.log(`Truck API server running at http://localhost:${port}`);
});
