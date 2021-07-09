<template>
  <div class="card" :style="cssProps">
    <div class="card__text">{{this.card.description}}</div>
    <form class="card__form"><button role="button" class="card__form__button" type="button" @click="deleteCard">Удалить</button></form>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      default: () => ({})
    }
  },
  methods:{
    deleteCard(){
      this.$store.commit('deleteCard', this.card)
    },
  },
  computed:{
    cssProps() {
      return {
        '--card-width': (this.card.priority * 100-10) + "px",
      }
    }
  }
}
</script>

<style scoped>
.card{
  width: var(--card-width);
  border-radius: 5px;
  border: 5px solid #51b8c6;
  box-shadow: 2px 2px 7px 3px rgba(34, 60, 80, 0.2);
  margin: 10px;
  padding: 0;
  height: max-content;
}
.card__text{
  word-wrap: break-word;
}
.card__form__button{
  font-size: 0.8em;
}
</style>
