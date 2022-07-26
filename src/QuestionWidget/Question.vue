<template>
  <div id="question">
    Question
    <textarea name="question" rows="10" id="question-input" placeholder="Enter question"></textarea>
    <button id="question-btn">Save Question</button>
  </div>
</template>

<script>
    export default {
        name: 'Question'
    }
</script>

<style>
    #question {
        display: flex;
        flex-direction: column;
    }
    #question-input {
        padding: 5px
    }

    #question-btn {
        padding:8px 0;
        margin-top: 10px;
        background-color: rgb(170, 170, 238);
        border: transparent;
        border-radius: 5px;
    }
</style>