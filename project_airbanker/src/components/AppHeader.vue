<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <h1>Ciao sono header</h1>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }" class="nav-link"
          >About Us</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
