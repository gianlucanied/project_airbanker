<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    scrollToContact() {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
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
    <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <div
      :class="['buttons-container', isMenuOpen ? 'open' : '']"
      data-aos="fade-left"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
    >
      <button class="info-btn" @click="scrollToContact">
        Chiedi informazioni
      </button>
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
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid #5bb7b2;
  position: relative;
  z-index: 1000;
  backdrop-filter: blur(8px);
}

.logo img {
  height: 50px;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
}

.hamburger .bar {
  width: 100%;
  height: 4px;
  background-color: #000018;
  border-radius: 2px;
}

.buttons-container {
  display: flex;
  align-items: center;
  border-left: #5bb7b2 1px solid;
  transition: transform 0.3s ease, opacity 0.3s ease;
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

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    border: 1px solid #5bb7b2;
    width: 200px;
    opacity: 0;
    transform: translateY(-20px);
    pointer-events: none;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8px);
    background-color: rgba(255, 255, 255, 0.2);
    margin-top: 20px;
    margin-right: 20px;
  }

  .buttons-container.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .buttons-container button {
    margin: 10px 0;
    width: 90%;
    text-align: left;
    padding: 10px;
    align-self: center;
  }

  .buttons-container button:hover {
    transform: none;
  }
}
</style>
