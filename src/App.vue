<script>
import { reactive, watch } from 'vue'

export default {
  name: 'App',
  setup(props, context) {
    const person = reactive({
      name: 'lu',
      age: 19,
    })
    watch(person, (newV, oV) => {
      console.log(newV, oV)
    })
    return {
      person,
    }
  },
}
</script>

<template>
  <div @click="person.age++">{{ person.name }}======{{ person.age }}</div>
</template>

<style scoped></style>
