<script setup>  
  import SideMenu from '../../features/SideMenu/SideMenu.vue';
</script>
 
<template>
  <div class="read-widget">
    <SideMenu />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>
 
<style lang="scss" scoped>
  @import '../../shared/styles/colors.scss';
  .read-widget {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  .content {
    background-color: $rest;
    padding: 10px;
    border-radius: 0 30px 30px 30px;
  }
</style>