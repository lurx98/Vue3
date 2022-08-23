<template>
  <div class="app">
    <h3>我是标题</h3>
    <h1>我是一级标题</h1>
    <div id="test">
      <!-- to属性的值为选择器，表示放在哪个节点下面 -->
      <teleport to="body">
        <Dialog></Dialog>
      </teleport>
    </div>
  </div>
</template>
<script>
import Dialog from './components/Dialog.vue'
export default {
  components: {
    Dialog,
  },
}
</script>
<style scoped>
.app {
  background-color: #eee;
  padding: 30px;
}
</style>
