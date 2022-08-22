<script>
import getPoint from './hooks/point.js'
export default {
  name: 'App',
  setup(props, context) {
    const point = getPoint()
    return {
      point,
    }
  },
}
</script>

<template>
  {{ point }}
</template>

<style scoped></style>
