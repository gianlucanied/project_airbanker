<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <footer class="footer">
    <div class="logo-img" data-aos="flip-up" data-aos-duration="1500">
      <img src="/public/logo_3-removebg.png" alt="Logo" />
    </div>
    <div class="container">
      <div class="row">
        <div
          class="footer-col"
          data-aos="zoom-in-right"
          data-aos-duration="1500"
        >
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div
          class="footer-col"
          data-aos="zoom-in-right"
          data-aos-duration="1500"
        >
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </div>
        <div
          class="footer-col"
          data-aos="zoom-in-left"
          data-aos-duration="1500"
        >
          <h4>online shop</h4>
          <ul>
            <li><a href="#">watch</a></li>
            <li><a href="#">bag</a></li>
            <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li>
          </ul>
        </div>
        <div
          class="footer-col"
          data-aos="zoom-in-left"
          data-aos-duration="1500"
        >
          <h4>follow us</h4>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

body {
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1170px;
  margin: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
ul {
  list-style: none;
}

.footer {
  background-image: url("/layered-waves-haikei.svg");
  background-size: cover;
  background-position: center;
  padding: 70px 0;
  position: relative;
  z-index: 1;
}

.logo-img {
  background-color: white;
  padding: 10px;
  border-radius: 15px;
  margin: 0 auto; /* Centra l'immagine */
  margin-bottom: 50px;
  text-align: center; /* Aggiunto per centrare il contenuto */
  width: fit-content;
  height: auto;
}

.logo-img img {
  width: 250px; /* Mantieni la larghezza del logo */
  border-radius: 10px; /* Arrotonda i bordi dell'immagine */
}

.footer-col {
  width: 25%;
  padding: 0 15px;
}
.footer-col h4 {
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
}
.footer-col h4::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: #5bb7b2;
  height: 2px;
  box-sizing: border-box;
  width: 50px;
}
.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}
.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  font-weight: 300;
  display: block;
  transition: all 0.3s ease;
}
.footer-col ul li a:hover {
  color: #ffffff;
  padding-left: 8px;
}
.footer-col .social-links a {
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #ffffff;
  transition: all 0.5s ease;
}
.footer-col .social-links a:hover {
  color: #24262b;
  background-color: #ffffff;
}

/* Layout per schermi più grandi */
.footer-col {
  width: 25%;
  padding: 0 15px;
}

/* Media query per schermi piccoli */
@media (max-width: 768px) {
  .row {
    flex-direction: column; /* Imposta il layout in colonna */
  }

  .footer-col {
    width: 100%; /* Ogni colonna occupa l'intera larghezza */
    margin-bottom: 20px; /* Aggiungi un po' di margine sotto ogni colonna */
  }
}
</style>
