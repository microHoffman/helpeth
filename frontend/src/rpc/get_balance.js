import { ethers } from 'ethers'

export async function checkBalance(addressToCheck) {
  // Provider URL
  const PROVIDER_URL = "https://rpc.eu-north-1.gateway.fm/v4/optimism/non-archival/mainnet?apiKey=CGpWYkaSnRdARaegWX6W5legvXa434Jo.flLGV_6g42uXnfzt";

  // Set up the provider
  const provider = new ethers.providers.JsonRpcProvider(PROVIDER_URL);

  // Ethereum address to check the balance
  const address = addressToCheck;

  try {
    // Get the balance of the address
    const balance = await provider.getBalance(address);
    console.log(`Balance of ${address}: ${balance.toString()} Wei`);
    return ethers.utils.formatEther(balance)
  } catch (error) {
    console.error("Error checking balance:", error);
    return null
  }
}
