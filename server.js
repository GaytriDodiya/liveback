import express from "express";
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Running...');
})
app.listen(port, () => { console.log(`Server listening on port:${port}`); })