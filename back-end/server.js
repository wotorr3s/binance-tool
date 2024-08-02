"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarketData = void 0;
var express_1 = require("express");
var axios_1 = require("axios");
var http = axios_1.default.create({
    baseURL: "https://api.binance.com/api/v3"
});
function getMarketData() {
    // An equivalent to `GET /users?id=12345`
    return http.get('/ticker/price', {});
}
exports.getMarketData = getMarketData;
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    res.send(getMarketData());
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
    getMarketData().then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
});
