const { ethers } = require("ethers");

async function checkBalance(addressToCheck) {
  // Provider URL
  const providerUrl = "https://rpc.eu-north-1.gateway.fm/v4/optimism/non-archival/mainnet";

  // Set up the provider
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);

  // API Key
  const apiKey = "WnCJpQUQdNON_qtq5zUMGATXnS7VqWn_.wuceFon4Mrbbk6Rd";

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

checkBalance("0x165CD37b4C644C2921454429E7F9358d18A45e14");
