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
      <label for="amount" class="label">Amount (USD)</label>
      <input v-model="amountValue" id="amount" type="number" placeholder="Enter the amount" class="input-field-amount">
    </div>
    <div class="transaction-footer">
      <div style="display: flex; flex-direction: column">
        <div style="align-items: center">
          <label class="checkbox-label">
            <input v-model="checkboxValue" type="checkbox" class="checkbox">
            I want to donate to charity ($2.5)
          </label>
        </div>
        <div v-if="checkboxValue === true" class="charities">
          <div :class="['charity_card', { 'selected': selectedCharity === 'Grace' }]" @click="selectCharity('Grace')">
            <div class="charity_card_header">
              <div style="width: 100%; justify-content: center; align-items: center" class="charity_card_header_logo">
                <img class="charity_card_header_logo" :src="grace.default"/>
              </div>
              <div class="charity_card_header_name">
                <p>Grace</p>
              </div>
            </div>
          </div>
          <div :class="['charity_card', { 'selected': selectedCharity === 'Heifer' }]" @click="selectCharity('Heifer')">
            <div class="charity_card_header">
              <div style="width: 100%; justify-content: center; align-items: center" class="charity_card_header_logo">
                <img class="charity_card_header_logo" :src="heifer.default"/>
              </div>
              <div class="charity_card_header_name">
                <p>Heifer</p>
              </div>
            </div>
          </div>
          <div :class="['charity_card', { 'selected': selectedCharity === 'UkraineDAO' }]" @click="selectCharity('UkraineDAO')">
            <div class="charity_card_header">
              <div style="width: 100%; justify-content: center; align-items: center" class="charity_card_header_logo">
                <img class="charity_card_header_logo" :src="ukraine.default"/>
              </div>
              <div class="charity_card_header_name">
                <p>UkraineDAO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button @click="submitForm" class="submit-button">Confirm</button>
    </div>
  </div>
    <div v-if="isTransactionSuccess" class="share_lens">
      <a :href="lensterLink" target="_blank">
      <img :src="lenster.default"/>
      </a>
    </div>
  </div>
</template>
<script setup>
import * as logo from '../assets/helpETH.svg';
import * as lenster from '../assets/lenster.svg';
import * as grace from '../assets/grace.png';
import * as heifer from '../assets/heifer.svg';
import * as ukraine from '../assets/ukraineDAO.png';
import {computed, ref} from 'vue';
const addressValue = ref('');
const amountValue = ref(0);
const checkboxValue = ref(false);
const donatedAmount = ref(2.5);
const isTransactionSuccess = ref(false);
const lensterPostContent = computed(() => encodeURIComponent(`I've just donated ${donatedAmount.value} DAI to charity using HelpETH!}`))
const lensterLink = computed(() => `https://lenster.xyz/?text=${lensterPostContent.value}`)
const selectedCharity = ref('')
const selectCharity = (charity) => {
  selectedCharity.value = charity
  console.log(selectedCharity.value)
}
const submitForm = () => {
  if (checkboxValue.value === true){
    alert(`You've just sent ${amountValue.value} to ${addressValue.value} and also donated 2.5 USD to ${selectedCharity.value}! Gas fee was 2 USD.`)
  }
  else {
    alert(`You've just sent ${amountValue.value} to ${addressValue.value}! Gas fee was 2 USD.`)
  }

  isTransactionSuccess.value = true
  setTimeout(() => {
    isTransactionSuccess.value = false
  }, 10000)
}

</script>
<style scoped>
.charities{
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
.charity_card {

  /* Auto layout */
  width: 7rem;
  height: 7rem;
  justify-content: center;
  align-items: center;

  background: #E6E6E6;
  border: 1px solid #CECECE;
  border-radius: 4px;
}
.charity_card:hover{
  cursor: pointer;
  background: #76c4d5;
}
.selected {
  background: #76c4d5;
}
.charity_card_header_logo{
  width: 40px;
  height: 40px;
}
.share_lens{
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  top: 118px;

  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.5);
  border-radius: 16px;
}
.share_lens:hover{
  cursor: pointer;
  background: #76c4d5;
}
.main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
