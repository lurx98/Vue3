<script>
import { reactive, ref } from 'vue'

export default {
  name: 'App',
  setup(props, context) {
    const person = reactive({
      name: 'luruixiang',
      age: '133',
    })

    function sayHi(val) {
      console.log(person)

      console.log(person.name)
      person.name = '666666'
      person.age += val
    }

    return {
      person,
      sayHi,
    }
  },
}
</script>

<template>
  <div>{{ person }}</div>
  <button @click="sayHi('qq')">+++++++</button>
</template>

<style scoped></style>
