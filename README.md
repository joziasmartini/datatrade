<p align="center">
  <img alt="Datatrade Icon" src=".github/icon.svg" width="68px">
</p>

<h1 align="center">Datatrade</h1>

<p align="center">
  Global financial market data, cloud-hosted.
</p>

<p align="center">  
  <img src="https://img.shields.io/github/forks/joziasmartini/datatrade?label=forks&message=MIT&color=ffffff&labelColor=24292E" alt="Forks">     
  <img src="https://img.shields.io/github/stars/joziasmartini/datatrade?label=stars&message=MIT&color=ffffff&labelColor=24292E" alt="Stars">
</p>

## Project

This project was initiated by realizing the lack of information about the global financial market through open apis.

The data provided here are real but out of date. They should not be used for trading on the stock exchange.

For now, this project is under private development. This will be changed later.

## Crypto

`BTC` `ETH` `USDT` `XRP` `ADA` `DOT` `LTC` `LINK` `THETA` `BCH` `XLM` `USDC` `TRX` `DOGE` `SOL` `LUNA` `BTT` `AAVE` `NEO` `ATOM` `HOT` `DASH` `CHZ` `ETC` `NEAR` `ZEC` `MATIC` `BTG` `DENT` `ZRX` `WAVES` `FTM` `NANO`

##### Route example: 
```
?index=crypto&symbol=btc
```

##### Return example: 
```
btc: {
    symbol: "BTC",
    name: "Bitcoin",
    price: "60000",
    coin: "usd",
    market_cap: "180000000000",
    volume_24h: "50000000",
    circulating_supply: "7000000000",
    last_update: "02-24-2021"
}
```

The last update of the database was in 02/20/2021.

## Nasdaq

`BAC` `AAPL` `MSFT` `AMZN` `GOOG` `FB` `TSLA` `BABA` `JPM` `V` `JNJ` `WMT` `MA` `NVDA` `DIS` `PYPL` `INTC` `VZ` `NFLX` `ADBE` `KO` `T` `CSCO` `TM` `NKE` `ORCL` `CRM`

##### Route example: 
```
?index=nasdaq&symbol=amzn
```

##### Return example: 
```
tsla: {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: "60000",
    coin: "usd",
    market_cap: "180000000000",
    volume_24h: "50000000",
    circulating_supply: "7000000000",
    last_update: "02-24-2021"
}
```

The last update of the database was in 05/20/2021.

## Ibovespa
Brazilian stock market data. In the database are:

`PETR4` `BIDI4` `GGBR4` `SQIA3` `MGLU3` `ALPA4` `AMBV4` `B3SA3` `BBAS3` `COGN3` `ENGI3` `FLRY3` `GRND3` `KLBN4` `NEOE3` `SEMP3` `SLED4` `SQIA3` `SUZB3` `TAEE4` `TASA4` `TCSL4` `TDBH4` `TOTS3`

##### Route example: 
```
?index=ibovespa&symbol=petr4
```

##### Return example: 
```
petr4: {
    symbol: "PETR4",
    name: "Petróleo Brasileiro S.A.",
    price: "60000",
    coin: "brl",
    market_cap: "180000000000",
    volume_24h: "50000000",
    circulating_supply: "7000000000",
    last_update: "02-24-2021"
}
```

The last update of the database was in 07/20/2021.

## License

This project is under a private license, that is, its code cannot be distributed, modified or used by third parties.
