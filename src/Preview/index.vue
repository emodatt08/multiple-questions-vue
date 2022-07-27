<template>
  <div class="break-words">
    <label class="font-bold">Preview</label>
    <div id="question">{{this.question}}</div>
    <div v-for="option in options" :key="option.id">
        <div id="option-item">
            <div>{{option.alphabet}}. {{option.name}}</div>
        </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  export default {
    name: 'Preview',
    computed: mapGetters(['question', "options"]),
  }
</script>