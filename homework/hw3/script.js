"use strict";
const urlExchange = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=20251128&json";
const urlMeteo = "https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&models=gfs_seamless&current=temperature_2m,rain,wind_speed_10m,is_day&timezone=auto&forecast_days=1";
async function foobar(url) {
    const response = await fetch(url);
    if (!response) {
        throw new Error('Could not find response from the server');
    }
    return await response.json();
}
async function exchangeRate() {
    const exchange = await foobar(urlExchange);
    console.log(exchange);
}
async function weather() {
    const response = await foobar(urlMeteo);
    console.log(response);
}
exchangeRate();
weather();
//# sourceMappingURL=script.js.map