<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Import the EffectCards module
import { EffectCards } from "swiper/modules";

export default {
  name: "AppPhotoGallery",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // Return the modules needed for Swiper
    return {
      modules: [EffectCards],
    };
  },
};
</script>

<template>
  <section class="photo">
    <swiper
      :modules="modules"
      effect="cards"
      :grabCursor="true"
      class="mySwiper"
    >
      <SwiperSlide>
        <div class="bg"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="bg"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="bg"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="bg"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="bg"></div>
      </SwiperSlide>
    </swiper>
  </section>
</template>

<style scoped>
.photo {
  padding: 150px 0;
  height: 80vh;
  position: relative;
  background-image: url("/wave-haikei(3).svg");
  background-size: cover;
  background-position: center;
}

#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

html,
body {
  position: relative;
  height: 100%;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper {
  width: 240px;
  height: 320px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.swiper-slide:nth-child(1n) {
  background-image: url("/Ph-AirBanker/maneken-MOLLY01.jpg");
}

.swiper-slide:nth-child(2n) {
  background-image: url("/Ph-AirBanker/maneken-11AU099.jpg");
}

.swiper-slide:nth-child(3n) {
  background-image: url("/Ph-AirBanker/maneken-11AU096.jpg");
}

.swiper-slide:nth-child(4n) {
  background-image: url("/Ph-AirBanker/maneken-OOH1.jpg");
}

.swiper-slide:nth-child(5n) {
  background-image: url("/Ph-AirBanker/maneken-MOLLY02.jpg");
}
</style>
