<template>
  <div class="win">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  mounted() {
    console.log(1);
  },
});
</script>

<style>
</style>
