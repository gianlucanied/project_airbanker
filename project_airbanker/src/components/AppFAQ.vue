<script>
export default {
  name: "AppFAQ",
  data() {
    return {
      faqs: [
        {
          id: 1,
          title: "Consultation",
          content:
            "During the initial consultation, we will discuss your business goals...",
          isOpen: false,
        },
        {
          id: 2,
          title: "Research and Strategy Development",
          content: "In today's marketplace, R&D strategy helps a business...",
          isOpen: false,
        },
        {
          id: 3,
          title: "Implementation",
          content:
            "Strategy implementation is the process of turning your strategic plan into action...",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    toggleFAQ(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
    },
  },
};
</script>

<template>
  <section class="process">
    <div class="process__container">
      <div class="process__intro intro">
        <h2
          class="process__title title"
          data-aos="zoom-in-left"
          data-aos-duration="1500"
        >
          FAQ
        </h2>
        <div
          class="process__text text"
          data-aos="zoom-in-right"
          data-aos-duration="1500"
        >
          Step-by-Step Guide to Achieving Your Business Goals
        </div>
      </div>
      <div class="process__accordions">
        <ul
          class="accordions__list"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
        >
          <li
            v-for="(faq, index) in faqs"
            :key="faq.id"
            class="accordions__item"
            :class="{ open: faq.isOpen }"
            @click="toggleFAQ(index)"
          >
            <button class="accordions__control" :aria-expanded="faq.isOpen">
              <span class="accordions__number">{{ index + 1 }}</span>
              <span class="accordions__title">{{ faq.title }}</span>
              <span class="accordions__icon"></span>
            </button>
            <div
              class="accordions__content text"
              :aria-hidden="!faq.isOpen"
              :style="{ maxHeight: faq.isOpen ? '200px' : '0' }"
            >
              <p>{{ faq.content }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
:focus,
:active {
  // outline: none;
}
a:focus,
a:active {
  // outline: none;
}
html,
body {
  height: 700px;
  min-width: 320px;
  font-size: 16px;
}
body {
  line-height: 1;
  //text-rendering: optimizeLegibility;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input,
button,
textarea {
  font-size: inherit;
  line-height: inherit;
}
button {
  cursor: pointer;
  color: inherit;
  background-color: transparent;
}
a {
  color: inherit;
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
  color: white;
}

//////Container/////
[class*="__container"] {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 15px;
}
//////////font////////////

@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500&display=swap");

//////common blocks
.intro {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  @media (max-width: 767.98px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
}

.title {
  font-size: 3.5rem;
  font-weight: 500;
  line-height: 127.5%;
  position: relative;
  text-transform: capitalize;
  display: inline-flex;
  padding: 0 7px 0 7px;
  @media (max-width: 767.98px) {
    font-size: 36px;
  }
}

.title::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 0.4375rem;
}

.text {
  font-size: 18px;
  color: white;
  line-height: 127%; /* 23/18 */
  @media (max-width: 479.98px) {
    font-size: 16px;
  }
}

////////////////////////////

.process {
  background-image: url("/wave-haikei(2).svg");
  background-size: cover;
  background-position: center;
  padding: 100px;
}

@media (max-width: 767.98) {
  .process {
    padding: 30px 0 30px 0;
  }
}

.process__intro {
  margin-bottom: 80px;
}
@media (max-width: 991.98px) {
  .process__intro {
    margin-bottom: 32px;
  }
}

.process__title {
  flex-shrink: 0;
  text-align: center;
}

.process__text {
  max-width: 18.25rem;
}

.accordions__list {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}
@media (max-width: 479.98px) {
  .accordions__list {
    gap: 1.25rem;
  }
}

.accordions__item {
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 2.8rem;
  overflow: hidden;
  transition: 0.5s cubic-bezier(0.65, 0.2, 0.65, 1);
  box-shadow: 0px 0.3125rem 0px 0px #191a23;
  border: 0.0625rem solid #191a23;
  @media (max-width: 479.98px) {
    border-radius: 1.5rem;
  }
}

.accordions__control {
  display: flex;
  align-items: center;
  padding: 40px 60px;
  width: 100%;
  position: relative;
}
@media (max-width: 767.98px) {
  .accordions__control {
    padding: 30px;
  }
}
@media (max-width: 479.98px) {
  .accordions__control {
    padding: 20px;
  }
}

.accordions__number {
  color: white;
  font-size: 60px;
  padding-right: 1.5625rem;
  font-weight: 500;
  @media (max-width: 767.98px) {
    font-size: 40px;
    padding-right: 0.625rem;
  }
  @media (max-width: 479.98px) {
    font-size: 20px;
  }
}

.accordions__title {
  color: white;
  font-size: 30px;
  font-weight: 500;
  text-transform: capitalize;
  flex: 1 1 auto;
  display: flex;
  line-height: 120%;
  padding-right: 1.25rem;
  justify-content: flex-start;
  text-align: left;
  @media (max-width: 767.98px) {
    font-size: 20px;
  }
}

.accordions__icon {
  flex: 0 0 58px;
  display: flex;
  width: 58px;
  height: 58px;
  background-color: #f3f3f3;
  border: 1px solid #191a23;
  border-radius: 50%;
  position: relative;
  transition: 0.5s cubic-bezier(0.65, 0.2, 0.65, 1);
  @media (max-width: 479.98px) {
    flex: 0 0 32px;
    display: flex;
    width: 32px;
    height: 32px;
  }
}
.accordions__icon::before {
  content: "";
  width: 1.5625rem;
  height: 0.3125rem;
  background-color: #191a23;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 479.98px) {
    width: 15px;
    height: 2px;
  }
}

.accordions__icon::after {
  content: "";
  width: 1.5625rem;
  height: 0.3125rem;
  background-color: #191a23;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  @media (max-width: 479.98px) {
    width: 15px;
    height: 2px;
  }
}

.accordions__content {
  padding: 0 60px 0 60px;
  max-height: 0;
  overflow: hidden;
  will-change: max-height;
  transition: 0.5s cubic-bezier(0.65, 0.2, 0.65, 1);
  box-sizing: content-box;
  position: relative;
  z-index: 5;
  @media (max-width: 767.98px) {
    padding: 0 30px 0 30px;
  }
  @media (max-width: 479.98px) {
    padding: 0 20px 0 20px;
  }
}

.open .accordions__content {
  padding: 20px 60px 40px 60px;
  @media (max-width: 767.98px) {
    padding: 20px 30px;
  }
  @media (max-width: 479.98px) {
    padding: 0px 20px 20px 20px;
  }
}

.open {
  background-color: #5bb7b2;
}

.open .accordions__icon {
  transform: rotate(225deg);
}
</style>
