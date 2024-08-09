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
    if (symbol === "all") {
        return http.get('/ticker/price');
    }
    else {
        return http.get('/ticker/price', {
            params: {
                symbol: symbol
            }
        });
    }
}



app.get('/', (req: any, res: any) => {
    var universalPrices = [];
    getMarketData('all').then((response) => {
        for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].symbol.includes('USDT') && response.data[i].price > 0.01) {
                universalPrices.push(response.data[i]);
            }
        }
        res.send(universalPrices);
    }).catch((error) => {
        throw error;
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});