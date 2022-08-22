<script>
import { computed, reactive, ref, watch } from 'vue'

export default {
  name: 'App',
  setup(props, context) {
    const person = reactive({
      name: 'luruixiang',
      age: 18,
      info: {
        desc: 'good',
        hobby: ['抽烟', '喝酒', '烫头'],
      },
    })
    let a = ref(1)
    watch(
      () => person.name,
      (newVal, oldVal) => {
        console.log(newVal, oldVal)
      },
    )
    watch([a, () => person.name], (newVal, oldVal) => {
      console.log(newVal, oldVal)
    })
    watch(
      () => person.info,
      (newVal, oldVal) => {
        console.log(newVal, oldVal)
      },
      { deep: true },
    )
    return {
      person,
      a,
    }
  },
}
</script>

<template>
  <div @click="person.name += 1">{{ person.name }}</div>
  <div @click="person.age += 99">{{ person.age }}</div>
  <div @click="person.info.hobby[0] += 99">{{ person.info.hobby }}</div>
  <div @click="a -= 1">{{ a }}</div>
</template>

<style scoped></style>
