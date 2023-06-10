<template>
  <div class="form-container">
    <div class="logo">
      <img :src="logo"/>
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
</template>
<script setup>
import logo from '@/assets/helpETH.svg';
import { ref } from 'vue';

const addressValue = ref('');
const checkboxValue = ref(false);

const submitForm = () => {
  // Handle form submission logic here
  console.log('Input Value:', addressValue.value);
  console.log('Checkbox Value:', checkboxValue.value);
}
</script>
<style scoped>
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
  color: white;
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
