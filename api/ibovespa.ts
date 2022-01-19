exports.handler = async (event) => {

  const petr4 = {
      name: "Petroleo Brasileiro SA",
      price: "22,34",
      coin: "BRL",
      capital: "292,64 bi",
      dividend: "3,52%"
  }

  const bidi4 = {
      name: "Banco Inter",
      price: "55,93",
      coin: "BRL",
      capital: "43,32 bi",
      dividend: "0,12%"
  }

  const stocks = {
    petr4,
    bidi4,
  }

  const symbol = event.queryStringParameters.papel;
  const result = stocks[symbol] ?? "Symbol not found.";

  const response = {
    statusCode: 200,
    body: JSON.stringify(result),
  };

  return response;
};