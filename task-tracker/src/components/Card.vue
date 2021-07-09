<template>
  <div class="card" :style="cssProps">
    <div class="card__text">{{this.card.description}}</div>
    <form class="card__form"><button aria-label="Удалить" role="button" class="card__form__button" type="button" @click="deleteCard">Удалить</button></form>
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
      let height = "auto";
      if (this.card.priority === "1"){
        height = (this.card.priority * 100-10) + "px";
      }
      return {
        '--card-width': (this.card.priority * 100-10) + "px",
        '--card-height': height,
      }
    }
  }
}
</script>

<style scoped>
.card{
  width: var(--card-width);
  height: var(--card-height) !important;
  border-radius: 5px;
  border: 5px solid #51b8c6;
  box-shadow: 2px 2px 7px 3px rgba(34, 60, 80, 0.2);
  margin: 10px;
  padding: 0;
  max-height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card__text{
  word-wrap: break-word;
  word-break: break-word;
  font-size: 0.55em;
}
.card__form__button{
  font-size: 0.75em;
}
</style>
