<template>
  <div role="tablist">
    <h2>Story</h2>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">20-08-26</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <div class="img" style="float:left; margin: 10px 20px">
          <img src="../static/l3.jpg" width='250' height='350' alt="">
        </div>
        <div class="text" style='text-align:left; margin: 10px 0'>
          <h3>Lorem ipsum</h3> dolor sit amet consectetur, adipisicing elit. Voluptate at deleniti dolores. Reprehenderit doloribus quam velit? Veritatis, aliquid tempora sapiente aspernatur atque velit, culpa suscipit cum excepturi, magnam laborum reiciendis possimus fugit vero! Illo consectetur, error quasi id quia a, unde nam eum
        </div>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">20-02-02</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <div class="img" style="float:left; margin: 10px 20px">
          <img src="../static/l2.jpg" width='250' height='350' alt="">
        </div>
        <div class="text" style='text-align:left; margin: 10px 0'>
          <h3>Lorem ipsum</h3> dolor sit amet consectetur, adipisicing elit. Voluptate at deleniti dolores. Reprehenderit doloribus quam velit? Veritatis, aliquid tempora sapiente aspernatur atque velit, culpa suscipit cum excepturi, magnam laborum reiciendis possimus fugit vero! Illo consectetur, error quasi id quia a, unde nam eum
        </div>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">20-01-18</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <div class="img" style="float:left; margin: 10px 20px">
          <img src="../static/l1.jpg" width='250' height='350' alt="">
        </div>
        <div class="text" style='text-align:left; margin: 10px 0'>
          <h3>Lorem ipsum</h3> dolor sit amet consectetur, adipisicing elit. Voluptate at deleniti dolores. Reprehenderit doloribus quam velit? Veritatis, aliquid tempora sapiente aspernatur atque velit, culpa suscipit cum excepturi, magnam laborum reiciendis possimus fugit vero! Illo consectetur, error quasi id quia a, unde nam eum
        </div>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
    }
  }
</script>