<template>
  <header class="header">
    <div class="logo">
      <!-- Replace with your logo -->
      <img src="src/../../graphics/Logo-portrait.svg" alt="Logo">
    </div>
    <nav class="nav">
      <router-link to="/hello">Home</router-link>
      <router-link to="/docs">Docs</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f0f0f0;
}

.logo img {
  height: 40px;
}

.nav a {
  margin-left: 10px;
  text-decoration: none;
  color: #333;
}
</style>
