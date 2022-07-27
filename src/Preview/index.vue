<template>
  <div class="break-words">
    <label class="font-bold">Preview</label>
    <div id="question">{{this.question}}</div>
    <div v-for="option in options" :key="option.id">
        <div class="flex justify-between">
            <div>{{option.alphabet}}. {{option.name}}</div>
            <i :class="option.correct 
                ? 'fa fa-check text-green-600' 
                : 'fa fa-times text-red-500'"></i>
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