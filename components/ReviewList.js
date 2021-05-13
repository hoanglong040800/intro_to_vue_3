app.component('review-list', {
  props:['reviews'],

  template:
    /*html*/
    `<div class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} gave this {{ review.rating }} stars
          <br/>
          "{{ review.comment }}"
          <br/>
        </li>
      </ul>
    </div>`,
})
