import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 3000;

const cors = require('cors');

const http = axios.create({
    baseURL: "https://api.binance.com/api/v3"
});

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

export function getMarketData(symbol: string) {
    // An equivalent to `GET /users?id=12345`
    return http.get('/ticker/price', {
        params: {
            symbol: symbol
        }
    });
}



app.get('/', (req: any, res: any) => {
    getMarketData('BTCUSDT').then((response) => {
        res.send(response.data.price);
    }).catch((error) => {
        throw error;
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    setInterval(() => {
        getMarketData('BTCUSDT').then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error(error);
        })
    }, 1000);
});