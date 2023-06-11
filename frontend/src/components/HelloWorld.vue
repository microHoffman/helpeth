<template>
  <div class="main">
  <div class="form-container">
    <div class="logo">
      <img :src="logo.default"/>
    </div>
    <div class="form-field">
      <label for="address" class="label">Address</label>
      <input v-model="addressValue" id="address" type="text" placeholder="Enter your address..." class="input-field">
    </div>
    <div class="form-field">
      <label for="amount" class="label">Amount</label>
      <input v-model="amountValue" id="amount" type="number" placeholder="Enter the amount" class="input-field-amount">
    </div>
    <div class="transaction-footer">
      <div style="align-items: center">
        <label class="checkbox-label">
          <input v-model="checkboxValue" type="checkbox" class="checkbox">
          I want to donate to charity ($2.5)
        </label>
      </div>
      <button @click="submitForm" class="submit-button">Confirm</button>
    </div>
  </div>
  </div>
</template>
<script setup>
import * as logo from '../assets/helpETH.svg';
import { ref } from 'vue';
import useWeb3 from '../composables/useWeb3';

const { erc4337Provider } = useWeb3()

const addressValue = ref('');
const checkboxValue = ref(false);

const submitForm = () => {
  // Handle form submission logic here
  console.log('Input Value:', addressValue.value);
  console.log('Checkbox Value:', checkboxValue.value);

  const { hash } = erc4337Provider.sendUserOperation(
    {
      target: addressValue.value,
      data: null,
      value: 0n,
    }
  );
  console.log(hash)

  // TODO
  /*
const SIMPLE_ACCOUNT_FACTORY_ADDRESS = "0x9406Cc6185a346906296840746125a0E44976454";

// 1. define the EOA owner of the Smart Account
// This is just one exapmle of how to interact with EOAs, feel free to use any other interface
const ownerAccount = mnemonicToAccount(MNEMONIC);
// All that is important for defining an owner is that it provides a `signMessage` and `getAddress` function
const owner: SimpleSmartAccountOwner = {
  // this should sign a message according to ERC-191
  signMessage: async (msg) =>
    ownerAccount.signMessage({
      message: toHex(msg),
    }),
  getAddress: async () => ownerAccount.address,
};

// 2. initialize the provider and connect it to the account
const provider = new SmartAccountProvider(
  // the demo key below is public and rate-limited, it's better to create a new one
  // you can get started with a free account @ https://www.alchemy.com/
  "https://polygon-mumbai.g.alchemy.com/v2/demo", // rpcUrl
  "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", // entryPointAddress
  polygonMumbai // chain
).connect(
  (rpcClient) =>
    new SimpleSmartContractAccount({
      entryPointAddress: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
      chain: polygonMumbai,
      factoryAddress: SIMPLE_ACCOUNT_FACTORY_ADDRESS,
      rpcClient,
      // optionally if you already know the account's address
      accountAddress: "0x000...000",
    })
);

// 3. send a UserOperation
const { hash } = provider.sendUserOperation(
  "0xTargetAddress",
  "0xcallData",
  0n // value: bigint or undefined
);
  })
  */
}
</script>
<style scoped>
template {
  display: flex;
  justify-content: center;
}
.main{
  width: 100vw;
  height: 88vh;
}
.submit-button{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 24px;
  gap: 8px;

  width: 101px;
  height: 41px;

  background: #00AFE0;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
}
.transaction-footer{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.checkbox{
  align-items: flex-start;
  box-sizing: border-box;

  width: 24px;
  height: 24px;

  background: #E6E6E6;
  border: 1px solid #CECECE;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
.form-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 1rem;

  position: absolute;
  width: 545px;
  left: calc(50% - 545px/2);
  top: 118px;

  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.5);
  border-radius: 16px;
}

.label {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
}
.form-field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}
.input-field{
  /* Frame 24 */
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  gap: 8px;

  width: 497px;
  height: 41px;

  background: #E6E6E6;
  border: 1px solid #CECECE;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
.input-field-amount{

  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 83px;
  width: 164px;
  height: 41px;

  background: #E6E6E6;
  border: 1px solid #CECECE;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
}
.logo{
  width: 100%;
  justify-content: center;
}

</style>
