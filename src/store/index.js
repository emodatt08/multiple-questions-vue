import Vue from 'vue'
import Vuex from 'vuex'
import { uuid } from 'uuidv4';


const alphabets = "abcdefghijklmnopqrstuvwxyz"
                    .toUpperCase()
                    .split("")

const state = {
  question: '',
  options: [],
  option: null,
}

const getters = {
  question: state => state.question,
  options: state => state.options,
}

const mutations = {
  addQuestion(state, question){
    state.question = question
  },
  addOption(state, option){
    const alphabet = "A";
    const clonedOptions = JSON.parse(JSON.stringify(state.options))
    clonedOptions.push({alphabet, name: option, id: uuid()})
    state.options = reOrderAlphabets(clonedOptions)
  },
  removeOption(state, option){
    const options = state.options
                    .filter(optionItem => 
                      optionItem.id !== option.id
                    )
    state.options = reOrderAlphabets(options)
  },
  setActiveOption(state, option){
    state.option = option
  },
  updateOption(state, option){
    const optionIndex = state.options.findIndex(
      (optionItem) => {
        console.log(optionItem, option)
        return optionItem.id === option.id
      }
    );
    console.log(optionIndex)
    if(optionIndex !== -1){
      const updatedOption = {
        ...state.options[optionIndex],
        ...option,
      };
      const updatedOptions = [
        ...state.options.slice(0, optionIndex),
        updatedOption,
        ...state.options.slice(optionIndex + 1),
      ];
      state.options = updatedOptions
    }
  }
}

function reOrderAlphabets(options){
  console.log(alphabets)
  return options.map((option, index) => {
    const alphabet = option.alphabet 
                            ? alphabets
                              .find((alphabet, alphabetIndex) => 
                                  alphabetIndex === index
                                ) 
                            : "A";
    console.log(alphabet)
    return {...option, alphabet}
  })
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters
})