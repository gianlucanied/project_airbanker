<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <nav class="header">
    <div class="logo">
      <img
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
        src="../../public/logo_3-removebg.png"
        alt="logo"
      />
    </div>
    <div
      data-aos="fade-left"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
      class="buttons-container"
    >
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
  border-left: #5bb7b2 1px solid;
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
  transition: background-color 0.4s ease, transform 0.4s ease,
    box-shadow 0.4s ease;
}

.buttons-container button:hover {
  background-color: #5bb7b2;
  box-shadow: 0 0 25px #5bb7b2;
  transform: scale(1.1);
}

.buttons-container button:active {
  transform: scale(1);
}
</style>
