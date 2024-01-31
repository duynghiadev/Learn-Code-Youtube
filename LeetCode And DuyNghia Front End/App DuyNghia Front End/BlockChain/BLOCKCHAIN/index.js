const hash = require("crypto-js/sha256");

class Block {
  constructor(prevHash, data) {
    this.prevHash = prevHash;
    this.data = data;
    this.timeStamp = new Date();
    this.hash = this.calculateHash();
    this.mineVar = 0;
  }

  calculateHash() {
    return (
      hash(
        this.prevHash +
          JSON.stringify(this.data) +
          this.timeStamp +
          this.mineVar
      ) + toString()
    );
  }

  mine(difficulty) {
    while (!this.hash.startsWith("0".repeat(difficulty))) {
      this.mineVar++;
      this.hash = this.calculateHash();
    }
  }
}

class Blockchain {
  constructor(difficulty) {
    const genesisBlock = new Block("0000", { isGenesis: true });

    this.difficulty = difficulty;
    this.chain = [genesisBlock];
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(data) {
    const lastBlock = this.getLastBlock();
    const newBlock = new Block(lastBlock.hash, data);

    console.log("start mining");
    console.time("mine");
    newBlock.mine(this.difficulty);
    console.timeEnd("mine");
    console.log("end mining", newBlock);

    this.chain.push(newBlock);
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const prevHash = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.prevHash !== prevHash) {
        return false;
      }
    }
    return true;
  }
}

const nghiaChain = new Blockchain(5);
console.log(nghiaChain);

nghiaChain.addBlock({
  from: "nghia",
  to: "code dao",
  amount: 100,
});

nghiaChain.addBlock({
  from: "nghia",
  to: "le",
  amount: 400,
});

nghiaChain.addBlock({
  filmHeo: "githubz.cc",
});

console.log(nghiaChain.chain);
console.log("chain valid: ", nghiaChain.isValid());
