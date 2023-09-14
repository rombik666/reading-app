<script>
 export default {
  data() {
    return {
      open: false,
      premium: true,
    }
  },
  methods: {
    openBurger() {
      this.open = !this.open;
    }
  },
 }
</script>
 
<template>
  <div class="menu">
    <div class="burger" @click="openBurger()" :class="open ? 'open' : ''">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="logo"><h1>Gachitalka <span :class="premium ? 'active' : 'non-visible'">Premium</span></h1> </div>
  </div>
</template>
 
<style lang="scss" scoped>
  @import './styles/burger.scss';
  @import '../../shared/styles/colors.scss';
  @import '../../shared/styles/typo.scss';

  .menu {
    width: 100%;
    background-color: $menu;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 22px 17px;
  }
  .logo {
    margin-left: 30px;
    color: #bde0fe;
    h1 {
      width: 205px;
      position: relative;
      @extend %title;
    }
    
    .non-visible {
      display: none;
    }
    .active {
      display: block;
      color: #ffb703;
      position: absolute;
      right: 0;
      top: 0;
      @extend %small-text;
    }
  }
</style>