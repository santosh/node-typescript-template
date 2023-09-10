import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.send({"message": "pong"})
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
})


