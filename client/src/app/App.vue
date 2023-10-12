<script setup>
  import axios from '../shared/axios/axios';
  import MenuBar from '../widgets/MenuBar/MenuBar.vue';
  import ReadWidget from '../widgets/ReadWidget/Readwidget.vue'
  import { settings, setSettings, setToDefault } from '../shared/store/settings';
  
  axios.get('/api/settings')
  .then(settings => setSettings(settings.data))
  .catch(error => {
    console.log(error);
    setToDefault();
  });

</script>

<template>
  <div :class="settings.theme" class="theme">
    <MenuBar />
    <div class="centered">
      <ReadWidget />
    </div>
  </div>
</template>

<style lang="scss">
  @import '../shared/styles/colors.scss';

    /* Reset and base styles  */
  * {
    padding: 0px;
    margin: 0px;
    border: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Links */

  a, a:link, a:visited  {
      text-decoration: none;
  }

  a:hover  {
      text-decoration: none;
  }

  /* Common */

  aside, nav, footer, header, section, main {
    display: block;
  }

  h1, h2, h3, h4, h5, h6, p {
      font-size: inherit;
    font-weight: inherit;
  }

  ul, ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  img, svg {
    max-width: 100%;
    height: auto;
  }

  address {
    font-style: normal;
  }

  /* Form */

  input, textarea, button, select {
    font-family: inherit;
      font-size: inherit;
      color: inherit;
      background-color: transparent;
  }

  input::-ms-clear {
    display: none;
  }

  button, input[type="submit"] {
      display: inline-block;
      box-shadow: none;
      background-color: transparent;
      background: none;
      cursor: pointer;
  }

  input:focus, input:active,
  button:focus, button:active {
      outline: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  label {
    cursor: pointer;
  }

  legend {
    display: block;
  }

  body {
    
    font-family: 'Roboto', sans-serif;
  }

  /* custom fonts below */

  .theme {
    background-color: $background;
    & * {
      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background: $scroll-bcg; 
      }

      &::-webkit-scrollbar-thumb {
        background-color: $main; 
        border-radius: 10px;  
        border: none; 
      }
    }
    &.dark * {
      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background: $scroll-bcg_dark; 
      }

      &::-webkit-scrollbar-thumb {
        background-color: $main_dark; 
        border-radius: 10px;  
        border: none; 
      }
    }
    &.pink * {
      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background: $scroll-bcg_pink; 
      }

      &::-webkit-scrollbar-thumb {
        background-color: $main_pink; 
        border-radius: 10px;  
        border: none; 
      }
    }
    &.light * {
      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background: $scroll-bcg_light; 
      }

      &::-webkit-scrollbar-thumb {
        background-color: $main_light; 
        border-radius: 10px;  
        border: none; 
      }
    }
    &.dark {
      background-color: $background_dark;
    }
    &.pink {
      background-color: $background_pink;
    }
    &.light {
      background-color: $background_light;
    }
  }
  .centered {
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  
</style>
