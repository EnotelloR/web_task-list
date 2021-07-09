<template>
  <div class="card">
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
    cards(){
      return this.$store.state.cards.slice().reverse();
    },
  }
}
</script>

<style scoped>

</style>
