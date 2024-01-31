const ccxt = require("ccxt");
const moment = require("moment");
const delay = require("delay");

const binance = new ccxt.binance({
  apiKey: "vg5jcb3mxULogDHJZIyzKWGXzYdwZgubiBcqF9p37fHiQDyI4KbWSCf6TaJotsAq",
  secret: "QzdBA8QkEhCgiCsGpuJk5HYkKw5iy0YNJX8MSoVYVYtPyE2FhQaAG8sOJB9jbJ4V",
});
binance.setSandboxMode(true);

async function printBalance(btcPrice) {
  const balance = await binance.fetchBalance();
  const total = balance.total;
  console.log(`Balance: BTC ${total.BTC}, USDT: ${total.USD}`);
  console.log(`Total USDT: ${(total.BTC - 1) * btcPrice + total.USDT}. \n`);
}

async function tick() {
  const PRICE_SAMPLE = 5;
  const prices = await binance.fetchOHLCV(
    "BTC/USDT",
    "1m",
    undefined,
    PRICE_SAMPLE
  );
  const bPrices = prices.map((price) => { 
    return {
      timestamp: moment(price[0]).format(),
      open: price[1],
      high: price[2],
      low: price[3],
      close: price[4],
      volume: price[5],
    };
  });

  const averagePrice = bPrices.reduce((acc, price) => acc + price.close, 0) / 5;
  const lastPrice = bPrices[bPrices.length - 1].close;

  console.log(
    bPrices.map((p) => p.close),
    averagePrice,
    lastPrice
  );

  // Thuật toán đu đỉnh bán đáy =>  thuật toán của anh Hoàng Code Dạo đỉnh vãi chưởng
  // => ước gì mình cũng giỏi thuật toán và các thứ tools khác như anh Hoàng Code Dạo
  const direction = lastPrice > averagePrice ? "sell" : "buy";
  const TRADE_SIZE = 100;
  const quantity = TRADE_SIZE / lastPrice;

  console.log(`Average price: ${averagePrice}. Last price: ${lastPrice}`);
  const order = await binance.createMarketOrder(
    "BTC/USDT",
    direction,
    quantity
  );
  console.log(
    `${moment().format()}: ${direction}${quantity} BTC at ${lastPrice}`
  );
  printBalance(lastPrice);
}

async function main() { 
  while (true) {
    await tick();
    await delay(60 * 1000);
  }
}

main();
// printBalance();
