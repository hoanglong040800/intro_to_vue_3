app.component('product-inventory', {
  props: ['inventory'],

  template:
    /*html*/
    `<div>
    <p>Inventory has: {{inventory}}</p>
    <p v-if="inventory > 5">In Stock</p>
    <p v-else-if="inventory <= 10 && inventory > 0">
      Almost sold out
    </p>
    <p v-else>Out of Stock</p>
  </div>`,
})
