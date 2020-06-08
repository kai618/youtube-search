<template>
  <div class="container py-4">
    <div class="d-flex justify-content-center align-items-center">
      <router-link to="/" class="p-3"><h5>Search</h5></router-link>
      <h5>|</h5>
      <router-link to="/about" class="p-3"><h5>About</h5></router-link>
    </div>

    <router-view> </router-view>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
