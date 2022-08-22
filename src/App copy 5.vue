<script>
import { provide, reactive, ref, toRef, toRefs } from 'vue'
import Child from './components/Child.vue'

export default {
  name: 'App',
  setup(props, context) {
    let a = ref(111)
    const person = reactive({
      name: 'Lu',
      age: 10,
    })
    provide('name', person.name)
    provide('age', toRef(person, 'age'))
    provide('a', a)
  },
  components: { Child },
}
</script>

<template>
  <Child></Child>
</template>

<style scoped></style>
