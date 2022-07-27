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
    clonedOptions.push({alphabet, correct: false, name: option, id: uuid()})
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
    state.options = updateOptions(state.options, option)
  },
  setCorrectOption(state, option){
    let clonedOptions = JSON.parse(JSON.stringify(state.options))
    clonedOptions = clonedOptions.map(option => ({...option, correct: false}))
    state.options = updateOptions(clonedOptions, {...option, correct: true})
    console.log(state.options)
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

function updateOptions(options, option) {
  const optionIndex = options.findIndex(
    (optionItem) => {
      console.log(optionItem, option)
      return optionItem.id === option.id
    }
  );
  console.log(optionIndex)
  if(optionIndex !== -1){
    const updatedOption = {
      ...options[optionIndex],
      ...option,
    };
    return [
      ...options.slice(0, optionIndex),
      updatedOption,
      ...options.slice(optionIndex + 1),
    ];
  }
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters
})