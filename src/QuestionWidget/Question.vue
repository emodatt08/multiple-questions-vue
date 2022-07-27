<template>
  <div class="flex flex-col">
    <label for="question" class="font-bold">Question</label>
    <textarea 
    class="border border-1 border-gray-300 '
    rounded-lg p-2 shadow-sm
    focus:outline-none resize-none"
    name="question" 
    v-model="question" 
    @keyup="addQuestion" 
    rows="10" 
    placeholder="Enter question">
    </textarea>
  </div>
</template>

<script>
    export default {
        name: 'Question',
        data: function () {
            return {
                question: "",
            }
        },
        methods: {
            addQuestion: function () {
                console.log(this.$store)
                this.$store.commit('addQuestion', this.question)
            }
        }
    }
</script>