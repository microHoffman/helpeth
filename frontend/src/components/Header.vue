<template>
  <header class="header">
    <div class="flex-gap">
      <div class="logo">
        <router-link to="/">
          <img :src="logo.default"/>
        </router-link>
      </div>
      <nav class="nav">
        <router-link v-if="selectedPage === 'home'" v-on:click="selectedPageChanged('home')" class="active" to="/">Home</router-link>
        <router-link v-else to="/">Home</router-link>
        <router-link v-if="selectedPage === 'docs'" v-on:click="selectedPageChanged('docs')" class="active" to="/docs">Docs</router-link>
        <router-link v-else to="/docs">Docs</router-link>
      </nav>
    </div>
    <div>
      <button @click="connectWallet()">Connect Wallet</button>
    </div>
  </header>
</template>
<script setup>
import * as logo from '../assets/helpETH.svg';
import { ref } from 'vue';
import useWeb3 from '../composables/useWeb3'
import { SimpleSmartContractAccount } from "@alchemy/aa-core";

const { web3modal, ethereumClient, erc4337Provider, ENTRY_POINT_ADDRESS, goerli } = useWeb3()

const selectedPage = ref('')

function selectedPageChanged(page) {
  this.selectedPage = page
}

function resolveAfter5Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 5000);
  });
}

async function connectWallet() {
  web3modal.openModal()
}

setInterval(async () => {
  console.log('ethereumClient', ethereumClient)
  console.log('erc4337Provider', erc4337Provider)
  console.log('ethereumClient.getAccount()', await ethereumClient.getAccount())
}, 5000)
</script>
<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #FFFFFF;
}

.logo img {
}

.nav a {
  margin-left: 10px;
  text-decoration: none;
  color: #333;
}

.nav {
  display: flex;
  align-items: center;
}

.flex-gap {
  display: flex;
  gap: 2rem;
}

button {
  padding: 0.5rem 1rem;
  background: #76c4d5;
}

.active {
  background: #e2f0f3;
}
</style>
