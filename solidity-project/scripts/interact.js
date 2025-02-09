const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  
  const contractAddress = "0x518701970999942f64E1918ecA33567DFA5b3f75";

 
  const contractABI = require("../artifacts/contracts/Bank.sol/Bank.json").abi;

  
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545"); 


  const privateKey = "0xebce5c61268cf0bcbf16c952cd7424d062ab2277759056e5bf559ab60ebeabf0"; 
  const wallet = new ethers.Wallet(privateKey, provider);

  
  const contract = new ethers.Contract(contractAddress, contractABI, wallet);
  console.log("Connected to contract at:", contractAddress);

  const balance = await contract.getBalance();
  console.log("Contract balance:", ethers.formatEther(balance), "ETH");

  const tx = await contract.deposit({ value: ethers.parseEther("1") });
  await tx.wait();
  console.log("Deposited 1 ETH");

  const withdrawTx = await contract.withdraw();
  await withdrawTx.wait();
  console.log("Withdrawal successful");
}

main().catch((error) => {
  console.error("Error:", error);
  process.exitCode = 1;
});
