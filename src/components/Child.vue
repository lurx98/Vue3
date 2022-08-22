<script>
import { ref } from 'vue'

export default {
  name: 'Child',
  setup() {
    let a = ref(111)
    return { a }
  },
}
</script>

<template>
  <div class="box">{{ a }}</div>
</template>
<style scoped>
.box {
  width: 100px;
  height: 200px;
  color: #fff;
  background-color: #333;
}
</style>
