<script setup>
  import { ref } from 'vue'

  const state = ref(0);

  const turn = () => {
    state.value = !state.value;
    console.log(state.value)
  }

</script>
 
<template>
  <Window :onOff="state" />
  <div class="wrapp container-fluid bg-body ">
    <div class="row">
      <div class="col">
        <Text @click="turn"/>
      </div>
    </div> 
    <div class="row">
      <div class="col">
        <Map />
      </div>
    </div>
  </div>
</template>
 
<style scoped>
  .wrapp {
    padding: 20px;
  }
</style>