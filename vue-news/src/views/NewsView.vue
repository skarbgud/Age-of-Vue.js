<template>
  <div>
      <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    console.log('호출 전: ', this);
    fetchNewsList()
      .then(response => { // 화살표 함수를 쓰게 되면 비동기 함수에서 this가 해당 인스턴스의 this가 된다.
        console.log('호출 후: ', this);
        this.users = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
}
</script>

<style>

</style>