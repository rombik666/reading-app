<script setup>  
  import SideMenu from '../../features/SideMenu/SideMenu.vue';
  import { settings } from '../../shared/store/settings'
</script>
 
<template>
  <div :class="settings.theme" class="read-widget">
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



  // dark theme
  .read-widget.dark {
    .content {
      background-color: $rest_dark;
    }
  }

  // pink theme
  .read-widget.pink {
    .content {
      background-color: $rest_pink;
    }
  }

  // light theme
  .read-widget.light {
    .content {
      background-color: $rest_light;
    }
  }
</style>