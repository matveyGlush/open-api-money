<script setup>
import ButtonSidebar from './UI/ButtonSidebar.vue';
</script>

<template>
  <div class="sidebar">
    <h2 class="sidebar__title">Open Apis on topic</h2>
    <h3>{{ api }}</h3>
    <ul class="sidebar__list">
      <li>
        <ButtonSidebar @click="$router.push()">api example</ButtonSidebar>
      </li>
      <li>
        <ButtonSidebar>api example</ButtonSidebar>
      </li>
      <li>
        <ButtonSidebar>api example</ButtonSidebar>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  display: inline-block;
  max-width: 15%;
  height: 100%;
  padding: 20px;
  background-color: #BEB7DF;
  border-radius: 20px;
}

.sidebar__title {
  color: #1C0221;
  margin: 0 0 20px;
}

.sidebar__list {
  li {
    width: 100%;
  }

  li:not(:last-child) {
    margin-bottom: 15px;
  }
}
</style>
