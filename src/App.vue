<template>
  <div id="app">
    <div style="width: 50%"><QuestionWidget /></div>
    <div style="width: 50%"><Preview /></div>
  </div>
</template>

<script>
import QuestionWidget from './QuestionWidget'
import Preview from './Preview'

export default {
  name: 'App',
  components: {
    QuestionWidget,
    Preview
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
