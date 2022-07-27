<template>
  <div class="mt-5">
    <!-- <label for="option">Enter option</label> -->
    <input
    class="border border-1 border-gray-300
    rounded-sm p-1 shadow-sm
    focus:outline-none w-8/12"
    v-model="optionValue" 
    type="text" 
    id="option"
    name="option" 
    placeholder="Enter option">
    <button
        class="border-transparent bg-green-600 text-white 
        font-bold px-3 py-2 rounded-md text-sm"
        :disabled="optionValue === ''"
        @click="onOptionAddedOrUpdated">
            {{activeOption ? "Update": "Add"}}
    </button>
    <div class="mt-5" v-if="options.length > 0">
        <hr />
        <div v-for="option in options" :key="option.id">
            <div class="flex justify-between">
                <div>{{option.name}}</div>
                <div>
                    <button @click="onSetActiveOption(option)">
                        <i class="fa fa-pencil"></i>
                    </button>
                    <button @click="onRemoveOption(option)">Remove</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import {
        mapGetters
    } from "vuex";
    export default {
        name: 'Options',
        computed:{
            ...mapGetters(['options']),
            optionValue: {
                get () {
                    if (this.activeOptionName) {
                        return this.activeOptionName
                    } else {
                        return this.option
                    }
                },
                set (val) {
                    if (this.activeOptionName) {
                        this.activeOptionName = val
                    } else {
                        this.option = val
                    }
                }
            }
        },
        data: function() {
            return {
                option: "",
                activeOptionName: null,
                activeOption: null
            }
        },
        methods: {
            onOptionAddedOrUpdated() {
                this.$store.commit(
                    `${this.activeOptionName ? "updateOption" : "addOption"}`, 
                    this.activeOption 
                        ? {...this.activeOption, name: this.activeOptionName} 
                        : this.option
                )
                this.option = ""
                this.activeOptionName = null
                this.activeOption = null
            },
            onRemoveOption(option) {
                this.$store.commit('removeOption', option)
            },
            onSetActiveOption(option) {
                this.$store.commit('setActiveOption', option)
                this.activeOptionName = option.name
                this.activeOption = option
            }
        }
    }
</script>