<template>
  <div>
    <Question />
    <Options />
  </div>
</template>

<script>
  import Question from './Question.vue'
  import Options from './Options.vue'

  export default {
    name: 'QuestionWidget',
    components: {
      Options,
      Question
    },
    // methods: {
    //   onQuestionAdded (value) {
    //     console.log("emit", value)
    //     this.$emit("questionAdded", value)
    //   }
    // }
  }
</script>