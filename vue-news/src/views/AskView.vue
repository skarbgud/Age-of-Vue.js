<template>
  <div>
      <div v-for="item in this.$store.state.ask">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAsksList } from '../api/index.js';

export default {
  data() {
    return {
      ask: []
    }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');

    // var vm = this;
    // fetchAsksList()
    //   .then(function(response) {
    //     vm.ask = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },
}
</script>

<style>

</style>