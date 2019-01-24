<template>
  <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
      <div class="menu-container" ref="menuContainer">    
    这个是内容  
      </div>
  </v-touch>
</template>


<script>

export default {
  name: 'Shopping',
  data () {
    return {

    }
  },
  methods: {
    swiperleft: function () {
      this.$router.push({'path':'./Add'});
    },
    swiperright: function () {
      this.$router.push({'path':'./Index'});
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
