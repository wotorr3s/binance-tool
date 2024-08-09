"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarketData = void 0;
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const port = 3000;
const cors = require('cors');
const http = axios_1.default.create({
    baseURL: "https://api.binance.com/api/v3"
});
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
function getMarketData(symbol) {
    // An equivalent to `GET /users?id=12345`
    return http.get('/ticker/price', {
        params: {
            symbol: symbol
        }
    });
}
exports.getMarketData = getMarketData;
app.get('/', (req, res) => {
    getMarketData('BTCUSDT').then((response) => {
        res.send(response.data.price);
    }).catch((error) => {
        throw error;
    });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    setInterval(() => {
        getMarketData('BTCUSDT').then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, 1000);
});
