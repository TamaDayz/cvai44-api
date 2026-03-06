const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "CVAI44 API is running!" });
});

app.listen(3000, () => {
    console.log("Server jalan di port 3000");
});
