const Block = require("./block");
const Blockchain = require("./blockchain");
const Transaction = require("./transaction");
const BlockchainNode = require("./blockchainNode");

const express = require("express");
const app = express();

// body parser from JSON
app.use(express.json());

const arguments = process.argv;

let PORT = 8080;

if (arguments.length > 2) {
  PORT = arguments[2];
}

let transactions = [];
let nodes = [];

let genesisBlock = new Block();
// let blockchain = new Blockchain(genesisBlock);

app.post("/nodes/register", (req, res) => {
  const urls = req.body;
  urls.forEach((url) => {
    const node = new BlockchainNode(url);
    nodes.push(node);
  });

  res.send(nodes);
});

app.post("/transactions", (req, res) => {
  const to = req.body.to;
  const from = req.body.from;
  const amount = req.body.amount;

  let transaction = new Transaction(from, to, amount);
  transactions.push(transaction);

  res.json(transactions);
});

app.get("/mine", (req, res) => {
  let block = blockchain.getNextBlock(transactions);
  blockchain.addBlock(block);
  res.json(block);
});

app.get("/blockchain", (req, res) => {
  res.json(blockchain);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
