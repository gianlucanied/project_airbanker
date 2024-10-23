<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <nav class="header">
    <div class="logo">
      <img src="../../public/logo_3-removebg.png" alt="logo" />
    </div>
    <div class="buttons-container">
      <button class="info-btn">Chiedi informazioni</button>
      <button class="login-btn">Accedi</button>
      <button class="register-btn">Registrati</button>
    </div>
  </nav>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: transparent;
  border-bottom: 1px solid #5bb7b2;
  background-color: white;
}

.logo img {
  height: 50px;
}

.buttons-container {
  display: flex;
}

.buttons-container button {
  margin-left: 15px;
  padding: 10px 20px;
  background-color: #000018;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.buttons-container button:hover {
  background-color: #5bb7b2;
}
</style>
