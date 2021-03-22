<template>
  <div>
    <h2>Gallery</h2>
    <b-container fluid class="p-4 bg-dark">
      <b-form-tags class="mb-4" input-id="tags-basic" v-model="value"></b-form-tags>
      <b-form-row>
        <b-col cols='4'>
            <b-img thumbnail fluid :src="require('../static/f1.jpg')" alt="Image 1"></b-img>
            <b-form-rating v-model="taste8" readonly></b-form-rating>
        </b-col>
        <b-col cols='4'>
            <b-img thumbnail fluid :src="require('../static/f2.jpg')" alt="Image 2"></b-img>
            <b-form-rating v-model="taste8" readonly></b-form-rating>
        </b-col>
        <b-col cols='4'>
            <b-img thumbnail fluid :src="require('../static/f3.jpg')" alt="Image 3"></b-img>
            <b-form-rating v-model="taste9" readonly></b-form-rating>
        </b-col>
      </b-form-row>
      <br>
      <b-form-row>
        <b-col cols='4'>  
          <b-img thumbnail fluid :src="require('../static/f4.jpg')" alt="Image 4"></b-img>
          <b-form-rating v-model="taste10" readonly></b-form-rating>
        </b-col>
        <b-col cols='4'>
          <b-img thumbnail fluid :src="require('../static/f5.jpg')" alt="Image 5"></b-img>
          <b-form-rating v-model="taste10" readonly></b-form-rating>
        </b-col>
        <b-col cols='4'>
          <b-img thumbnail fluid :src="require('../static/f6.jpg')" alt="Image 6"></b-img>
          <b-form-rating v-model="taste8" readonly></b-form-rating>
        </b-col>
      </b-form-row>
      <br>
      <b-form-row>
        <b-col cols='4'>  
          <b-img thumbnail fluid :src="require('../static/f7.jpg')" alt="Image 7"></b-img>
          <b-form-rating v-model="taste9" readonly></b-form-rating>
        </b-col>
        <b-col cols='4'>
          <b-img thumbnail fluid :src="require('../static/f8.jpg')" alt="Image 8"></b-img>
          <b-form-rating v-model="taste8" readonly></b-form-rating>
        </b-col>
        <b-col cols='4'>
          <b-img thumbnail fluid :src="require('../static/f9.jpg')" alt="Image 9"></b-img>
          <b-form-rating v-model="taste10" readonly></b-form-rating>
        </b-col>
      </b-form-row>
    </b-container>
  </div>
</template>
<script>
export default {
    data() {
      return {
        value: ['맛집', '존맛탱', '내돈내산'],
        taste10: 5,
        taste9: 4.5,
        taste8: 4,
        taste7: 3.5,
        taste6: 3,
        taste5: 2.5,
        taste4: 2,
        taste3: 1.5,
        taste2: 1,
        taste: 0.5
      }
    }
}
</script>