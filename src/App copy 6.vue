<script>
import { provide, reactive, ref, toRef, toRefs } from 'vue'
import Child from './components/Child.vue'

export default {
  name: 'App',
  setup(props, context) {},
  components: { Child },
}
</script>

<template>
  <Child></Child>
</template>

<style scoped></style>
