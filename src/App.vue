<template>
  <div id="app" class="m-3">
    <div class="flex justify-between space-x-10">
      <div class="w-1/2">
        <QuestionWidget @questionAdded="onQuestionAdded" />
      </div>
      <div class="w-1/2">
        <Preview />
      </div>
    </div>
  </div>
</template>

<script>
import QuestionWidget from './QuestionWidget'
import Preview from './Preview'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    QuestionWidget,
    Preview
  },
  methods: {
    onQuestionAdded (value) {
      this.$emit("question 22", value)
    }
  }
}
</script>

<style>

</style>
