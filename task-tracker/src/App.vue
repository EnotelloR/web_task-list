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
        <button role="button">Добавить карточку</button>
        <vue-modaltor :visible="open" @hideModal="hideModal" class="card-all-data" drag>
          <template #body class="card-all-data__body">
            <form v-if="open" class="card-all-data__form">
              <div class="card-all-data__form__input-title">Описание</div>
              <input
                  class="card-all-data__form__input-field"
                  v-model="description_input"
              />
              <div class="card-all-data__form__input-title">Статус</div>
              <select class="card-all-data__form__input-field" v-model="status_input">
                <option value="0">План</option>
                <option value="1">В работе</option>
                <option value="2">Готово</option>
              </select>
              <div class="card-all-data__form__input-title">Ответственный</div>
              <input
                  class="card-all-data__form__input-field"
                  v-model="reliable_input"
              />
              <div class="card-all-data__form__input-title">Дата и время начала</div>
              <input
                  class="card-all-data__form__input-field"
                  type="datetime-local"
                  v-model="start_date_input"
              />
              <div class="card-all-data__form__input-title">Дата и время завершения</div>
              <input
                  class="card-all-data__form__input-field"
                  type="datetime-local"
                  v-model="end_date_input"
              />
              <button class="just-button" type='button' @click="saveChanges">Сохранить</button>
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
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card,
  },
  computed: {
    cards(){
      return this.$store.state.cards;
    },
    currentCardID(){
      return this.$store.state.currentCardID;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
