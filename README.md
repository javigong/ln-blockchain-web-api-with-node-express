# Blockchain Web API using Node.js and Express
 
This is a basic local implementation of the blockchain core engine as an introduction to the main concepts.  

**Followed steps:**

1. Implement main blockchain models (transaction, block, blockchain)


3. Initialize the blockchain by generating a genesis block


5. Mine transaction to a new block using Proof of work (by hashing transactions + index + previousHash + nonce, until finding a hash that start with a specific number of zeros)


7. Setting up web API with Express, adding routes to add transactions and mining blocks.


9. Decentralizing the Blockchain by adding a node model to generate multiple nodes, registering the node address to each node and resolving conflicts after mining transactions on each node (in that case the chain with more blocks prevail).
