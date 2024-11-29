<script>
export default {
  name: "AppHome",
  mounted() {
    this.initCounters();
    this.initTypeWriterObserver();
  },
  methods: {
    scrollToContact() {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    initTypeWriterObserver() {
      const texts = [
        {
          text: "Scopri come funziona. Senza costi. Senza registrazione. Senza impegno.",
          element: document.querySelector(".subheading"),
        },
        {
          text: "Scopri come possiamo aiutarti ad investire i tuoi risparmi.",
          element: document.querySelector(".banner-text"),
        },
      ];

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { text, element } = texts.find(
              ({ element }) => element === entry.target
            );
            this.startTypeWriterEffect(text, element);
            observer.unobserve(entry.target);
          }
        });
      });

      texts.forEach(({ element }) => {
        observer.observe(element);
      });
    },

    startTypeWriterEffect(text, element) {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < text.length) {
          element.innerHTML += text.charAt(index);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);
    },

    initCounters() {
      const counters = document.querySelectorAll(".problems-item h3 span");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.startCounter(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      counters.forEach((counter) => observer.observe(counter));
    },

    startCounter(element) {
      const target = +element.innerText;
      let count = 0;
      const speed = 20;

      const updateCount = () => {
        count += Math.ceil(target / 100);
        if (count < target) {
          element.innerText = count;
          setTimeout(updateCount, speed);
        } else {
          element.innerText = target;
        }
      };

      updateCount();
    },

    handleSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            alert("Messaggio inviato con successo!");
            form.reset();
          } else {
            alert("Errore nell'invio del messaggio. Riprova.");
          }
        })
        .catch((error) => {
          alert("Errore: " + error);
        });
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
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
    >
      <p class="subheading" data-aos="fade-up" data-aos-duration="1500"></p>
      <button class="cta-btn" @click="scrollToContact">
        Chiedi informazioni
      </button>
    </div>
  </section>

  <section class="solution">
    <h5 data-aos="fade-down" data-aos-duration="1500">SOLUZIONE</h5>
    <h1 class="solution-title" data-aos="fade-down" data-aos-duration="1500">
      Rendiamo la finanza semplice, insieme.
    </h1>
    <p
      class="solution-description"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      AirBanker sostiene la democrazia finanziaria. Scopri la nostra vision.
    </p>
    <div class="solution-items">
      <div data-aos="fade-left" data-aos-duration="1500">
        <div class="solution-item">
          <h3>Pieno controllo del tuo patrimonio.</h3>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <div class="solution-item">
          <img src="../../public/logo_3-removebg.png" alt="logo" />
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="1500">
        <div class="solution-item">
          <h3>Rendiamo la finanza semplice, insieme.</h3>
        </div>
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
          <h3><span>70</span>%</h3>
          <p>Clienti soddisfatti.</p>
        </div>
        <div class="problems-item">
          <h3><span>85</span>%</h3>
          <p>Rendimento medio.</p>
        </div>
        <div class="problems-item">
          <h3><span>90</span>%</h3>
          <p>Investimenti che crescono.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="contact-form-container">
    <div data-aos="zoom-in-up" data-aos-duration="1500">
      <div class="contact-form">
        <h2 class="contact-title">
          <span class="hover-border">Contattaci</span>
        </h2>
        <form
          action="https://formspree.io/f/manyybvw"
          method="POST"
          @submit="handleSubmit"
        >
          <label for="name" data-aos="zoom-in-left" data-aos-duration="1500"
            >Nome</label
          >
          <input
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            type="text"
            id="name"
            name="name"
            required
          />

          <label for="email" data-aos="zoom-in-right" data-aos-duration="1500"
            >Email</label
          >
          <input
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            type="email"
            id="email"
            name="email"
            required
          />

          <label for="message" data-aos="zoom-in-up" data-aos-duration="1500"
            >Messaggio</label
          >
          <textarea
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            id="message"
            name="message"
            rows="5"
            required
          ></textarea>

          <div data-aos="zoom-in-down" data-aos-duration="1500">
            <button class="cta-btn" type="submit">Invia</button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <section class="container-fluid banner">
    <div class="container">
      <div class="row">
        <div
          class="text-banner col-6"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <p class="banner-text"></p>
        </div>

        <div
          class="button-banner col-6"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <button @click="scrollToContact">Contattaci</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jumbotron {
  text-align: center;
  padding: 100px 20px;
  /* background-color: #000018; */
  color: white;
  height: 100vh;
  background-image: url("/stacked-peaks-haikei.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.jumbotron-logo {
  width: 80%;
  max-width: 250px;
  height: auto;
  margin-bottom: 50px;
}

.main-heading {
  font-size: 3.5rem;
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
  color: white;
}

.cta-btn {
  padding: 10px 20px;
  background-color: #000018;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.4s ease, transform 0.4s ease,
    box-shadow 0.4s ease;
}

.cta-btn:hover {
  background-color: #000018;
  box-shadow: 0 0 25px #000018;
  transform: scale(1.3);
}

.cta-btn:active {
  transform: scale(1.2);
}

.solution {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 20px;
  background-color: #5bb7b2;
  color: white;
  text-align: center;
  height: auto;

  h3 {
    color: white;
  }
  h5 {
    color: #000018;
  }
}

.solution-item img {
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 30px;
  padding: 20px;
  box-sizing: border-box;
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
  background-color: #000018;
  border-radius: 30px;
  max-width: 400px;
  flex: 1;
  min-width: 300px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: background-color 0.4s ease, transform 0.4s ease,
    box-shadow 0.4s ease;
}

.solution-item:nth-child(1),
.solution-item:nth-child(3) {
  padding: 25px;
}

.solution-item:hover {
  background-color: #000018;
  box-shadow: 0 0 25px #000018;
  transform: scale(1.1);
  cursor: pointer;
}

.solution-item h3 {
  font-size: 2rem;
  margin: 30px;
}

.solution-item p {
  font-size: 1.2rem;
  margin-top: 10px;
}

.problems {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background-color: #000018;
  color: #5bb7b2;
  height: auto;
  background-image: url("/wave-haikei.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
  margin: 0 20px;
  flex: 1;
}

.left-section h1,
.right-section h3 {
  font-size: 6rem;
}

.right-section h3 {
  font-size: 6rem;
}

.contact-form-container {
  height: auto;
  background-image: url("/blob-scene-haikei.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 150px 0;
}

.contact-form {
  background-color: #5bb7b2;
  padding: 40px;
  border-radius: 15px;
  color: white;
  text-align: center;
  max-width: 600px;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 30px;
  transition: background-color 0.4s ease, transform 0.4s ease,
    box-shadow 0.4s ease;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  cursor: pointer;
}

.contact-form:hover {
  box-shadow: 0 0 25px #5bb7b2;
  transform: scale(1.1);
}

/* .contact-form h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  position: relative;
} */

.contact-title {
  display: inline-block;
  position: relative;
}

.hover-border {
  position: relative;
  display: inline-block;
}

.hover-border::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.hover-border:hover::after {
  transform: scaleX(1);
}

.contact-form h2::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: white;
  transition: width 1s ease;
}

.contact-form:hover h2::after {
  width: 100%;
}

.contact-form label {
  font-size: 1.2rem;
  margin-bottom: 10px;
  display: block;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
}

.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000018;
  height: 400px;
  text-align: center;
}

.banner .row {
  display: flex;
  align-items: center;
}

.text-banner {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-align: right;
}

.button-banner {
  text-align: center;
}

.button-banner button {
  padding: 10px 20px;
  background-color: #5bb7b2;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.4s ease, transform 0.4s ease,
    box-shadow 0.4s ease;
}

.button-banner button:hover {
  background-color: #5bb7b2;
  box-shadow: 0 0 50px #5bb7b2;
  transform: scale(1.1);
}

.button-banner button:active {
  transform: scale(1);
}

@media (max-width: 768px) {
  .main-heading {
    font-size: 2rem;
  }

  .subheading {
    font-size: 1rem;
  }

  .solution-item {
    margin-bottom: 20px;
  }

  .solution-title,
  .problems-title {
    font-size: 2rem;
  }

  .solution-description {
    font-size: 1rem;
  }

  .solution-item h3,
  .problems-item h3 {
    font-size: 1.8rem;
  }

  .problems-item p {
    font-size: 1.1rem;
  }

  .cta-btn {
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  .contact-title {
    font-size: 1.8rem;
  }

  .problems {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h5 {
      font-size: 1rem;
    }

    h1 {
      font-size: 2rem;
    }

    .left-section {
      text-align: center;
    }

    .right-section {
      padding-top: 30px;
      h3 {
        font-size: 3rem;
      }
    }
  }

  .contact-form-container {
    padding: 100px 30px;
  }

  .banner {
    height: 550px;
    padding: 50px 0;
  }

  .row {
    flex-direction: column;

    .banner-text {
      font-size: 2rem;
      padding-bottom: 30px;
      text-align: left;
    }
  }
}

.problems-items {
  flex-direction: column;
  align-items: center;
}

.problems-item {
  margin-bottom: 20px;
}
</style>
