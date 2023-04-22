<script setup lang="ts">
import NavItem from './UI/NavItem.vue'
import ButtonLogIn from './UI/ButtonLogIn.vue'
</script>

<template>
  <div class="header">
    <a class="logo-link" href="#">
      <img class="piggy-bank" src="../assets/img/piggy_bank.png" alt="piggy bank">
      moneyApi
    </a>
    <nav>
      <ul>
        <li>
          <NavItem @click="$router.push('/business')">Business</NavItem>
        </li>
        <li>
          <NavItem @click="$router.push('/crypto')">Cryptocurrency</NavItem>
        </li>
        <li>
          <NavItem @click="$router.push('/finance')">Finance</NavItem>
        </li>
        <li>
          <NavItem @click="$router.push('/fun')">Fun</NavItem>
        </li>
      </ul>
    </nav>
    <ButtonLogIn>Log in</ButtonLogIn>
  </div>
</template>

<style scoped lang="scss">
.header {
  padding: 15px 30px;
  background-color: #BEB7DF;
  display: flex;
  justify-content: space-between;

  .logo-link {
    text-decoration: none;
    font-size: 14px;
    font-weight: normal;
    color: #34113F;

    .piggy-bank {
      height: 30px;
    }
  }

  nav {
    display: inline-block;
    margin: auto 0;
    max-width: 50%;
    width: 100%;

    ul {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      row-gap: 10px;
    }

    li:not(:last-child) {
      margin-right: 60px;
    }
  }
}
</style>
