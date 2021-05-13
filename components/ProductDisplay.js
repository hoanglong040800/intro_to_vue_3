app.component('product-display', {
  props: ['premium'],

  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      details: ['50% cotton', '30% wool', '20% polyester'],

      selectedVariant: 0,
      variants: [
        {
          id: 2234,
          color: 'green',
          image: '/assets/images/socks_green.jpg',
          quantity: 50,
        },
        {
          id: 2235,
          color: 'blue',
          image: '/assets/images/socks_blue.jpg',
          quantity: 0,
        },
      ],
    }
  },

  computed: {
    title() {
      return this.brand + ' ' + this.product
    },

    image() {
      return this.variants[this.selectedVariant].image
    },

    inventory() {
      return this.variants[this.selectedVariant].quantity
    },
    shipping() {
      return this.premium ? 'FREESHIP' : 'SHIP: 10$'
    },
  },

  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },

    removeFromCart() {
      this.$emit('remove-from-cart')
    },

    updateVariant(index) {
      this.selectedVariant = index
    },

    deleteFromCart() {
      this.cart -= 1
    },

    isInStock() {
      return this.inventory > 0
    },
  },

  template:
    /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :src="image" alt="" />
        </div>

        <div class="product-info">
          <h3>{{ title }}</h3>

          <!-- INVENTORY -->
          <product-inventory :inventory="inventory"></product-inventory>

          <!-- DETAILS -->
          <product-details :details="details"></product-details>

          <!-- PREMIUM/SHIPPING -->
          <div>
            <h3>{{ shipping }}</h3>
          </div>

          <!-- VARIANTS -->
          <div class="color-container">
            <div
              v-for="(variant, index) in variants"
              :key="variant.id"
              @mouseover="updateVariant(index)"
              class="color-circle"
              :style="{backgroundColor: variant.color}"
            ></div>
          </div>

          <div style="display: flex">
            <button
              class="button"
              :class="{disabledButton: !isInStock()}"
              :disabled="!isInStock()"
              @click="addToCart()"
            >
              Add to cart
            </button>

            <button
            class="button"
            @click="removeFromCart()"
          >
            Remove from cart
          </button>
        </div>

        </div>
      </div>
    </div>`,
})
