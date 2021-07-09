<template>
  <div id="app">
    <header>
      <img src="" alt="логотип">
      <p>Task-Tracker - Smirnov</p>
      <form class="theme-changer">
        <input class="theme-changer__check" type="checkbox" v-model="blackTheme">
        <label class="theme-changer__indicator" v-if="blackTheme">Выключить темную тему</label>
        <label class="theme-changer__indicator" v-else>Включить темную тему</label>
      </form>
    </header>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
