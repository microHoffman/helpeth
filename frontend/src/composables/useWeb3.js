import { configureChains, createConfig } from '@wagmi/core'
import { goerli } from '@wagmi/core/chains'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { SimpleSmartContractAccount, SmartAccountProvider } from "@alchemy/aa-core";

const SUPPORTED_CHAINS = [goerli]
const PROJECT_ID = '76fc158f46ea16d92de64fee8ecc2622'
const ENTRY_POINT_ADDRESS = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
const ALCHEMY_GOERLI_RPC_URL = "https://eth-goerli.g.alchemy.com/v2/puHwlMweHAJ0sDTvTlNJKHQoBo2B7FHw"

const { publicClient } = configureChains(SUPPORTED_CHAINS, [w3mProvider({ PROJECT_ID })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ PROJECT_ID, version: 1, SUPPORTED_CHAINS }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, SUPPORTED_CHAINS)
const web3modal = new Web3Modal({ PROJECT_ID }, ethereumClient)

const provider = new SmartAccountProvider(
    ALCHEMY_GOERLI_RPC_URL,
    ENTRY_POINT_ADDRESS,
    goerli
  ).connect(
    (rpcClient) =>
      new SimpleSmartContractAccount({
        entryPointAddress: ENTRY_POINT_ADDRESS,
        chain: goerli,
        factoryAddress: SIMPLE_ACCOUNT_FACTORY_ADDRESS,
        rpcClient,
        // optionally if you already know the account's address
        accountAddress: "0x000...000",
      })
  );
  

provider.sendUserOperation

export default function useWeb3() {
    return {
        ethereumClient
    }
}
