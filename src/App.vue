<template>
  <div id="app">
    <QuestionWidget />
    <QuestionWidget />
  </div>
</template>

<script>
import QuestionWidget from './QuestionWidget'
export default {
  name: 'App',
  components: {
    QuestionWidget
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
</style>
