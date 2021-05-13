const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
      reviews: [],
    }
  },

  methods: {
    addToCart(id) {
      this.cart.push(id)
    },

    removeFromCart() {
      this.cart.pop()
    },

    addReview(productReview) {
      this.reviews.push(productReview)
    },
  },
})
