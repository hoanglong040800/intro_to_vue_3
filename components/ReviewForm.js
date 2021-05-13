app.component('review-form', {
  data() {
    return {
      name: '',
      comment: '',
      rating: null,
    }
  },

  methods: {
    onSubmitReview() {
      let productReview = {
        name: this.name,
        comment: this.comment,
        rating: this.rating,
      }
      this.$emit('on-submit-review', productReview)

      this.name = ''
      this.comment = ''
      this.rating = null
    },
  },

  template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmitReview">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name">

      <label for="review">Review:</label>      
      <textarea id="review" v-model="comment"></textarea>

      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <input class="button" type="submit" value="Submit">  
  </form>`,
})
