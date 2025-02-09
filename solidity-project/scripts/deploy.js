const hre = require("hardhat");

async function main() {
    const Bank = await hre.ethers.getContractFactory("Bank");
    const bank = await Bank.deploy();
    await bank.waitForDeployment();

    console.log("Contract deployed to:", bank.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
