exports.handler = async (event) => {

  const btc = {
      name: "Bitcoin",
      price: "36,102.10",
      coin: "USD",
      marketCap: "675,396,777,215",
      circulating: "18,728,343"
  }

  const eth = {
      name: "Ethereum",
      price: "2,695.73",
      coin: "USD",
      marketCap: "313,170,353,966",
      circulating: "116,181,918"
  }

  const stocks = {
    btc,
    eth,
  }

  const symbol = event.queryStringParameters.papel;
  const result = stocks[symbol] ?? "Symbol not found.";

  const response = {
    statusCode: 200,
    body: JSON.stringify(result),
  };

  return response;
};