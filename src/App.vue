<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";
</script>


<template>
  <Header />
  <div class="container">
    <Sidebar/>
    <RouterView />
  </div>
  <Footer />
</template>

<style>
.container {
  display: flex;
  background-color: #34113F;
  border-radius: 20px;
  padding: 10px;
  height: 100%;
}
</style>
