const urlExchange: string = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=20251128&json"
const urlMeteo: string = "https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&models=gfs_seamless&current=temperature_2m,rain,wind_speed_10m,is_day&timezone=auto&forecast_days=1"

type Exchange = {
        "r030": number,
        "txt": string,
        "rate": number,
        "cc": string,
        "exchangedate": string
}[];

type CurrentUnits = {
    "time": string,
    "interval": string,
    "temperature_2m": string,
    "rain": string,
    "wind_speed_10m": string,
    "is_day": string
}
type Current = {
    "time": string,
    "interval": number,
    "temperature_2m": number,
    "rain": number,
    "wind_speed_10m": number,
    "is_day": number
};
type Meteo = {
    "latitude": number,
    "longitude": number,
    "generationtime_ms": number,
    "utc_offset_seconds": number,
    "timezone": string,
    "timezone_abbreviation": string,
    "elevation": number,
    "current_units": CurrentUnits,
    "current": Current
};

async function foobar<T>(url: string): Promise<T> {
    const response: Response = await fetch(url);
    if (!response) {
         throw new Error('Could not find response from the server');
     }
    return await response.json() as T;

}

async function exchangeRate(): Promise<void> {
    const exchange: Exchange = await foobar<Exchange>(urlExchange);
    console.log(exchange);
}

async function weather(): Promise<void> {
    const response: Meteo = await foobar<Meteo>(urlMeteo);
    console.log(response);
}

exchangeRate()
weather()
