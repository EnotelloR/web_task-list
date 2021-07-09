<template>
  <div v-bind:class="[{ blackBody: blackTheme }, { lightBody: !blackTheme }]" id="app">
    <header class="header">
      <img class="header__element" src="./assets/logo.png" srcset="./assets/logo.png 1x" alt="логотип">
      <p class="header__element">Task-Tracker - Smirnov</p>
      <form class="theme-changer header__element">
        <input id="theme-changer" class="theme-changer__check" type="checkbox" v-model="blackTheme">
        <label for="theme-changer" class="theme-changer__indicator" v-if="blackTheme">Выключить темную тему</label>
        <label for="theme-changer" class="theme-changer__indicator" v-else>Включить темную тему</label>
      </form>
    </header>
    <main class="content">
      <div>
        <form class="card__form"><button aria-label="Добавить" role="button" @click="openForm">Добавить карточку</button></form>
        <vue-modaltor :visible="open" @hideModal="hideModal" class="add-card">
          <template #header>
            <form class="card__form"><button aria-label="Закрыть" role="button" class="card__form__button" type="button" @click="hideModal">Закрыть</button></form>
          </template>
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
                <option selected value="0">Не выбрано</option>
                <option value="1">Низший приоритет</option>
                <option value="2">Средний приоритет</option>
                <option value="3">Высший приоритет</option>
              </select>
              <button aria-label="Добавить" role="button" class="add-card__form__element just-button" :class="{'shake animated': animated, 'just-button_disabled': isButtonDisabled}" @animationend="animated = false" type='button' @click="addCard">Добавить</button>
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
      card_priority: "0",
      blackTheme: false,
      animated: false,
    };
  },
  methods:{
    openForm(){
      this.open = true;
    },
    hideModal() {
      this.description_input = "";
      this.card_priority = "0";
      this.open = false;
    },
    addCard(){
      if (this.isButtonDisabled){
        this.animate();
      }
      else{
        let object = {
          description: this.description_input,
          priority: this.card_priority
        };
        this.$store.commit('addCard', object)
        this.hideModal();
      }
    },
    animate() {
      this.animated = true;
    }
  },
  computed: {
    cards(){
      return this.$store.state.cards.slice().reverse();
    },
    currentCardID(){
      return this.$store.state.currentCardID;
    },
    isButtonDisabled(){
      return (this.description_input === "" || this.card_priority === "0");
    }
  },
}
</script>

<style>
body{
  margin: 0;
}
*{
  font-family: Verdana;
  line-height: 1.5;
  font-size: 1.05em;
  outline-color: #51b8c6;
}

.cards-holder{
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 2%;
  grid-row-end: auto;
  justify-content: center;
  justify-items: center;
  width: 100%;
}

.blackBody, lightBody{
  margin: 0;
  height: 100vh;
}
.blackBody{
  background-color: black;
}
.blackBody *{
  background-color: black;
  color: whitesmoke;
}
.lightBody *{
  background-color: white;
  color: black;
}
.header{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.footer{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}

.content{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

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

.card__form{
  text-align: center;
}

.just-button_disabled{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.animated.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}

.animated.bounceIn,
.animated.bounceOut {
  -webkit-animation-duration: .75s;
  animation-duration: .75s;
}

.animated.flipOutX,
.animated.flipOutY {
  -webkit-animation-duration: .75s;
  animation-duration: .75s;
}

@-webkit-keyframes shake {
  from, to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

@keyframes shake {
  from, to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

.shake {
  -webkit-animation-name: shake;
  animation-name: shake;
}
@media (max-width: 450px) {
  .header{
    padding-top: 5%;
    margin-bottom: 5%;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
