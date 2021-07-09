import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [],
    currentCardID: null
  },
  mutations: {
    addCard(state, card){
      state.cards.push(card);
    },
    defineCurrentCard(state, ID){
      state.currentCardID = ID;
    },
    deleteCard(state, card){
      let index = state.cards.indexOf(card);
      state.cards.splice(index, 1);
    }
  },
})
