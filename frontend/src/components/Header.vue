<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">
        <img :src="logo"/>
      </router-link>
    </div>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/docs">Docs</router-link>
    </nav>
  </header>
</template>
<script setup>
import logo from '@/assets/helpETH.svg';
</script>
<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: black 1px solid;
  background-color: rgba(0,0,0,.5)
}

.logo img {
}

.nav a {
  margin-left: 10px;
  text-decoration: none;
  color: #333;
}
</style>
