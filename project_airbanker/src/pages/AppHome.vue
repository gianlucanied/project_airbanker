<script>
export default {
  name: "AppHome",
  mounted() {
    this.typeWriterEffect();
  },
  methods: {
    typeWriterEffect() {
      const text =
        "Scopri come funziona. Senza costi. Senza registrazione. Senza impegno.";
      let index = 0;
      const subheading = document.querySelector(".subheading");

      const typingInterval = setInterval(() => {
        if (index < text.length) {
          subheading.innerHTML += text.charAt(index);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50); // Cambia il valore per modificare la velocità di scrittura
    },
  },
};
</script>

<template>
  <section class="jumbotron">
    <img
      data-aos="fade-up"
      data-aos-duration="1500"
      class="jumbotron-logo"
      src="../../public/AirBanker_Logo.png"
      alt="logo-jumbo"
    />

    <h1 class="main-heading" data-aos="fade-up" data-aos-duration="1500">
      Il tuo primo passo nel mondo degli
      <span>investimenti <i class="fa-solid fa-globe"></i></span>.
    </h1>
    <p class="subheading" data-aos="fade-up" data-aos-duration="1500"></p>
    <button data-aos="zoom-out" data-aos-duration="1500" class="cta-btn">
      Chiedi informazioni
    </button>
  </section>

  <section class="solution">
    <h5>SOLUZIONE</h5>
    <h1 class="solution-title">Rendiamo la finanza semplice, insieme.</h1>
    <p class="solution-description">
      AirBanker sostiene la democrazia finanziaria. Scopri la nostra vision.
    </p>
    <div class="solution-items">
      <div class="solution-item">
        <h3>Pieno controllo del tuo patrimonio.</h3>
        <p>
          Non ti chiederemo mai nessun versamento. Impara a gestire il tuo
          patrimonio in autonomia e cresci ogni giorno come investitore, un
          passo alla volta.
        </p>
      </div>
      <div class="solution-item">
        <h3>Sei già un investitore?</h3>
        <p>
          Scopri se i tuoi rendimenti sono in linea con il mercato. Monitora lo
          stato di salute del tuo portafoglio e rimani informato sulle sue
          variazioni. Scopri il servizio.
        </p>
      </div>
      <div class="solution-item">
        <h3>Rendiamo la finanza semplice, insieme.</h3>
        <p>
          AirBanker sostiene la democrazia finanziaria. Scopri la nostra vision.
        </p>
      </div>
    </div>
  </section>

  <section class="problems">
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1500"
      class="left-section"
    >
      <h5>CONOSCIAMO I TUOI PROBLEMI</h5>
      <h1 class="problems-title">La tua finanza semplificata.</h1>
    </div>
    <div
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1500"
      class="right-section"
    >
      <div class="problems-items">
        <div class="problems-item">
          <h3>70<span>%</span></h3>
          <p>Clienti soddisfatti.</p>
        </div>
        <div class="problems-item">
          <h3>85<span>%</span></h3>
          <p>Rendimento medio.</p>
        </div>
        <div class="problems-item">
          <h3>90<span>%</span></h3>
          <p>Investimenti che crescono.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jumbotron {
  text-align: center;
  padding: 100px 20px;
  background-color: #000018;
  color: white;
  height: 100vh;
}

.jumbotron-logo {
  width: 80%;
  max-width: 250px;
  height: auto;
  margin-bottom: 50px;
}

.main-heading {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: "Inter", sans-serif;

  span {
    color: #5bb7b2;
  }
}

.subheading {
  font-size: 1.5rem;
  margin-bottom: 40px;
  color: #6c757d;
}

.cta-btn {
  padding: 10px 20px;
  background-color: #5bb7b2;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-btn:hover {
  background-color: #3b8884;
}

.solution {
  display: flex; /* Abilita Flexbox */
  flex-direction: column; /* Allinea gli elementi in colonna */
  justify-content: center; /* Centra verticalmente gli elementi */
  align-items: center;
  padding: 50px 20px;
  background-color: #5bb7b2;
  color: white;
  text-align: center;
  height: 100vh;

  h3 {
    color: #5bb7b2;
  }
  h5 {
    color: #000018;
  }
}

.solution-title {
  font-size: 3rem;
  margin-bottom: 10px;
  font-family: "Aptos", sans-serif;
}

.solution-description {
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #6c757d;
}

.solution-items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.solution-item {
  margin: 0 15px;
  padding: 30px;
  background-color: #000018;
  border-radius: 30px;
  max-width: 400px;
  flex: 1;
  min-width: 300px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.solution-item h3 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.solution-item p {
  font-size: 1.2rem;
  margin-top: 10px;
}

.problems {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* Ridotto per adattarsi meglio */
  background-color: #000018;
  color: #5bb7b2;
  height: 100vh; /* Imposta l'altezza a 100vh */
  h5,
  span,
  p {
    color: white;
  }
}

.left-section {
  text-align: end;
}

.left-section,
.right-section {
  margin: 0 20px; /* Aggiungi margine per lo spazio tra i div */
  flex: 1; /* Fai in modo che occupino spazi uguali */
}

.left-section h1,
.right-section h3 {
  font-size: 6rem; /* Aumenta la dimensione del font */
}

.right-section h3 {
  font-size: 6rem; /* Aumenta la dimensione del font per i dati */
}
</style>
