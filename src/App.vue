<template>
  <div class="win">
    <section style="-webkit-app-region: no-drag">
      <button
        type="button"
        id="maxbt"
        @click="maxbt"
      >
        max
      </button>
      <button
        type="button"
        id="minbt"
        @click="minbt"
      >
        >min
      </button>
      <button
        type="button"
        id="closebt"
        @click="closebt"
      >
        >close
      </button>
    </section>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  mounted () {
    console.log(1)
  },
  methods: {
    maxbt () {
      const ipc = require('electron').ipcRenderer
      console.log('大')
      ipc.send('window-max')
    },
    minbt () {
      const ipc = require('electron').ipcRenderer
      console.log('小')
      ipc.send('window-min')
    },
    closebt () {
      const ipc = require('electron').ipcRenderer
      console.log('关闭')
      ipc.send('window-close')
    }
  }
})
</script>

<style>
</style>
