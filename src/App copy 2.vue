<script>
import { computed, reactive, ref } from 'vue'

export default {
  name: 'App',
  setup(props, context) {
    const person = reactive({
      fullname: 'lu',
      lastname: 'ruixiang',
    })
    const list = ref([
      { name: 'zs', isCheck: true },
      { name: 'zs', isCheck: false },
      { name: 'zs', isCheck: true },
    ])
    console.log(list)
    const quanname = computed(() => {
      return person.fullname + person.lastname
    })
    const isAll = computed({
      get() {
        return list.value.every(item => item.isCheck)
      },
      set(val) {
        list.value.forEach(item => {
          item.isCheck = val
        })
      },
    })
    return {
      person,
      quanname,
      list,
      isAll,
    }
  },
}
</script>

<template>
  <div>{{ quanname }}</div>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <input type="checkbox" :checked="item.isCheck" />
      {{ item.name }}
    </li>
  </ul>
  <input type="checkbox" v-model="isAll" />
  全选
</template>

<style scoped></style>
