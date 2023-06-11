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
      <button class="connect-wallet-btn" @click="connectWallet()">Connect Wallet</button>
    </div>
  </header>
</template>
<script setup>
import * as logo from '../assets/helpETH.svg';
import { ref } from 'vue';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { configureChains, createConfig } from '@wagmi/core'
import { goerli } from '@wagmi/core/chains'

const chains = [goerli]
const projectId = '76fc158f46ea16d92de64fee8ecc2622'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)
const web3modal = new Web3Modal({ projectId }, ethereumClient)
const selectedPage = ref('')
function selectedPageChanged(page) {
  this.selectedPage = page
}
function connectWallet() {
  web3modal.openModal()
}
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
  border-radius: 24px;
}

.active {
  background: #e2f0f3;
}

.connect-wallet-btn {
  border-radius: 24px;
}

.connect-wallet-btn:hover {
  background: #6ab3c3;
}
</style>
