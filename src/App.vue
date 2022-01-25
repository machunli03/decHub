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
// import { ipcRenderer } from 'electron'
const { ipcRenderer } = require('electron')
export default defineComponent({
  name: 'App',
  components: {},
  mounted () {
    console.log(electron)
  },
  methods: {
    maxbt () {
      // const ipc = require('electron').ipcRenderer
      // console.log('大')
      ipcRenderer.send('window-max')
    },
    minbt () {
      // const ipc = require('electron').ipcRenderer
      // console.log('小')
       ipcRenderer.send('window-min')
    },
    closebt () {
      // const ipc = require('electron').ipcRenderer
      // console.log('关闭')
      ipcRenderer.send('window-close')
    }
  }
})
</script>

<style>
</style>
