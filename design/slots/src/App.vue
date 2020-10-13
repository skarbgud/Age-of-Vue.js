<template>
  <div>
    <ul>
      <!-- <item v-for="item in items" :item="item"></item> -->
      <item>
        아이템 1
      </item>
      <item>
        아이템 2 <button>click me</button>
      </item>
      <item>
        <div>
          아이템 3
          <img src="./assets/endgame.png" alt="로고">
        </div>
      </item>
      <item>
        <div style="color: blue; font-size: 20px;">아이템 4</div>
      </item>
      <!-- 슬롯을 사용하면 각각 DOM 구조와 스타일을 지정할 수 있음 -->
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item,
  },
  data() {
    return {
      items: ['아이템 1', '아이템 2', '아이템 3', '아이템 4', '아이템 5']
    }
  }
}
</script>