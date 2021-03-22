<template>
  <div>
    <h2>Calendar</h2>
    <b-row>
      <b-col md="12">
        <b-calendar block v-model="value" @context="onContext" locale="ko-KR"></b-calendar>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        context: null
      }
    },
    methods: {
      onContext(ctx) {
        this.context = ctx
      }
    }
  }
</script>