<template>
  <input type="checkbox"
   :value="value" @click="toggleCheckBox">
</template>

<script>
export default {
  // @input 이벤트,
  // :value 값
  props: ['value'], //false
  methods: {
    toggleCheckBox() {
      this.$emit('input', !this.value);
    }
  }
  // 순서
  // App.vue에서 props로 value 값 전송 -> props로 value 받음 -> 클릭시 emit으로 value값 전송
  // -> App.vue 에서 value값 변경 -> props로 데이터 변경
}
</script>