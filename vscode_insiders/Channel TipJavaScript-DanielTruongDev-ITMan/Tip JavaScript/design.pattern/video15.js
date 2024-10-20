"use strict";

class Asset {
  // cho phep user mua bang gold
  buyItemGold(asset) {
    console.log(`${asset} buy GOLD`);
  }
  buyItemCash(asset) {
    if (asset === "macbook") {
      console.log(`${asset} buy VND`);
    } else {
      console.log(`${asset} buy USD`);
    }
  }
}

class Client {
  static buy() {
    const asset = new Asset();
    asset.buyItemGold("house");
    asset.buyItemGold("car");
    asset.buyItemCash("stock");
    asset.buyItemCash("macbook");
  }
}

Client.buy();
