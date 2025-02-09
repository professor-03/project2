require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    ganache: {
      url: "HTTP://127.0.0.1:7545", 
      accounts: [
        "0xebce5c61268cf0bcbf16c952cd7424d062ab2277759056e5bf559ab60ebeabf0",
        "0xd39345bea25e208fca96c4d3f4398e8d0d8ea8091d64d8f5b7203251f3f6188f"
      ],  
    },
  },
};
