const Block = require("./block");
const Blockchain = require("./blockchain");
const Transaction = require("./transaction");

let transaction = new Transaction("Mary", "John", 100);

let genesisBlock = new Block();
let blockchain = new Blockchain(genesisBlock);

let block = blockchain.getNextBlock([transaction]);
blockchain.addBlock(block);

let anotherTransaction1 = new Transaction("Steven", "Brian", 500);
let anotherTransaction2 = new Transaction("Javier", "Kelsi", 700);
let block1and2 = blockchain.getNextBlock([anotherTransaction1, anotherTransaction2]);
blockchain.addBlock(block1and2);

console.log(blockchain);
