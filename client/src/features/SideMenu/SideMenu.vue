<script>
  export default {
    data() {
      return {
        active: 2,
      }
    },
  }
</script>
 
<template>
 <div class="sidemenu">
    <ul class="list" >
      <li :class="active == 1 ? 'active' : ''" @click="active = 1">
        <a href="#">
          <img src="./assets/interface.svg" alt="">
        </a>
      </li>
      <li :class="active == 2 ? 'active' : ''" @click="active = 2">
        <a href="#">
          <img src="./assets/paste.svg" alt="">
        </a>
      </li>
      <li :class="active == 3 ? 'active' : ''" @click="active = 3">
        <a href="#">
          <img src="./assets/upload.svg" alt="">
        </a>
      </li>
      <li :class="active == 4 ? 'active' : ''" @click="active = 4">
        <a href="#">
          <img src="./assets/library.svg" alt="">
        </a>
      </li>
      <li :class="active == 5 ? 'active' : ''" @click="active = 5">
        <a href="#">
          <img src="./assets/settings.svg" alt="">
        </a>
      </li>
    </ul>
 </div>
</template>
 
<style scoped lang="scss">
  @import '../../shared/styles/colors.scss';
  .sidemenu {
    width: 50px;
    background-color: $rest;
    padding: 15px 12px 15px 13px;
    border-radius: 30px 0 0 30px;
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    li {
      opacity: .4;
    }
    li.active {
      opacity: 1;
    }
  }
</style>