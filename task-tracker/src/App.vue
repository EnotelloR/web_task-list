<template>
  <div v-bind:class="[{ blackBody: blackTheme }, { lightBody: !blackTheme }]" id="app">
    <header class="header">
      <img class="header__element" src="" alt="логотип">
      <p class="header__element">Task-Tracker - Smirnov</p>
      <form class="theme-changer header__element">
        <input id="theme-changer" class="theme-changer__check" type="checkbox" v-model="blackTheme">
        <label for="theme-changer" class="theme-changer__indicator" v-if="blackTheme">Выключить темную тему</label>
        <label for="theme-changer" class="theme-changer__indicator" v-else>Включить темную тему</label>
      </form>
    </header>
    <main>
      <div>
        <button role="button" @click="openForm">Добавить карточку</button>
        <vue-modaltor :visible="open" @hideModal="hideModal" class="add-card">
          <template #body>
            <form v-if="open" class="add-card__form">
              <label for="description" class="add-card__form__element card__form__element__label" >Описание</label>
              <input
                  id="description"
                  class="add-card__form__element"
                  v-model="description_input"
              />
              <label for="priority" class="add-card__form__element add-card__form__element__label">Важность</label>
              <select id="priority" class="add-card__form__element" v-model="card_priority">
                <option value="0">Низший приоритет</option>
                <option value="1">Средний приоритет</option>
                <option value="2">Высший приоритет</option>
              </select>
              <button role="button" class="add-card__form__element just-button" type='button' @click="addCard">Добавить</button>
            </form>
          </template>
        </vue-modaltor>
      </div>
      <div class="cards-holder">
        <Card
            v-for="card in cards"
            :key="card.ID"
            :card="card"
        ></Card>
      </div>
    </main>
    <footer class="footer">
      <p class="footer_element">Смирнов Егор Игоревич. 191-361. 09.07.21</p>
    </footer>
  </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card,
  },
  data() {
    return {
      open: false,
      description_input: "",
      card_priority: 0,
      blackTheme: false,
    };
  },
  methods:{
    openForm(){
      this.open = true;
    },
    hideModal() {
      this.open = false;
    },
    addCard(){

    }
  },
  computed: {
    cards(){
      return this.$store.state.cards;
    },
    currentCardID(){
      return this.$store.state.currentCardID;
    },
    isButtonDisabled(){
      return this.description_input !== "";
    }
  }
}
</script>

<style>
.modaltor__overlay{
  background-color: inherit !important;
}
.modaltor__panel{
  background-color: deepskyblue !important;
  border-radius: 10px !important;
  box-shadow: 0 0 10px !important;
}
.add-card__form{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
}
.add-card__form__element{
  width: 50%;
}
.just-button{

}
</style>
