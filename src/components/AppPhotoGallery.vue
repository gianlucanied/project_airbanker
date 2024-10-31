<script>
export default {
  name: "AppPhotoGallery",
};
</script>

<template>
  <section class="photo">
    <ul class="main-nav">
      <li class="item1">
        <div class="bg"></div>
      </li>
      <li class="item2">
        <div class="bg"></div>
      </li>
      <li class="item3">
        <div class="bg"></div>
      </li>
      <li class="item4">
        <div class="bg"></div>
      </li>
      <li class="item5">
        <div class="bg"></div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.photo {
  height: 80vh;
  position: relative;
  background-image: url("/wave-haikei(3).svg");
  background-size: cover;
  background-position: center;
}
.main-nav {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  width: 600px;
  height: 150px;
}

.main-nav li {
  list-style: none;
  position: absolute;
  width: 200px;
  height: 200px;
  background: #000;
  transform: rotate(45deg);
  transition: transform 0.5s ease;
  margin: -100px;
  overflow: hidden;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.main-nav li:hover {
  transform: rotate(45deg) scale(1.1); /* Aumenta la grandezza dell’intero li */
}

.main-nav li:hover {
  opacity: 1;
}

.main-nav li.item1 {
  top: 0;
  left: 0;
}

.main-nav li.item2 {
  bottom: 0;
  left: 25%;
}

.main-nav li.item3 {
  top: 0;
  left: 50%;
}

.main-nav li.item4 {
  bottom: 0;
  left: 75%;
}

.main-nav li.item5 {
  top: 0;
  left: 100%;
}

.main-nav li .bg {
  width: 100%;
  height: 100%;
  transform: scale(1.1);
}

.main-nav li.item1 .bg {
  background: url("/Ph-AirBanker/maneken-MOLLY01.jpg");
  background-size: cover;
  background-position: center;
}

.main-nav li.item2 .bg {
  background: url("/Ph-AirBanker/maneken-11AU099.jpg");
  background-size: cover;
  background-position: center;
}

.main-nav li.item3 .bg {
  background: url("/Ph-AirBanker/maneken-11AU096.jpg");
  background-size: cover;
  background-position: center;
}

.main-nav li.item4 .bg {
  background: url("/Ph-AirBanker/maneken-OOH1.jpg");
  background-size: cover;
  background-position: center;
}

.main-nav li.item5 .bg {
  background: url("/Ph-AirBanker/maneken-MOLLY02.jpg");
  background-size: cover;
  background-position: center;
}
</style>
