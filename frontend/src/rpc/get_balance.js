const { ethers } = require("ethers");

async function checkBalance(addressToCheck) {
  // Provider URL
  const providerUrl = "https://rpc.eu-north-1.gateway.fm/v4/optimism/non-archival/goerli";

  // Set up the provider
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);

  // API Key
  const apiKey = "SynaLfBMMV8AF0WYDI327Wczeyf27TOT.cdcwqDiDFsNfrj2O";

  // Ethereum address to check the balance
  const address = addressToCheck;

  try {
    // Get the balance of the address
    const balance = await provider.getBalance(address);

    console.log(`Balance of ${address}: ${balance.toString()} Wei`);
  } catch (error) {
    console.error("Error checking balance:", error);
  }
}

checkBalance("0xfa28de39d5C1AA56AbB7bd07B7770c5ACfF0C34f");