exports.handler = async (event) => {

  const goog = {
      name: "Alphabet Inc",
      price: "2.451,76",
      coin: "USD",
      capital: "1,62 tri",
      dividend: "0%"
  }

  const amzn = {
      name: "Amazon Inc",
      price: "3.206,22",
      coin: "USD",
      capital: "1,62 tri",
      dividend: "0%"
  }

  const stocks = {
    goog,
    amzn,
  }

  const symbol = event.queryStringParameters.papel;
  const result = stocks[symbol] ?? "Symbol not found.";

  const response = {
    statusCode: 200,
    body: JSON.stringify(result),
  };

  return response;
};