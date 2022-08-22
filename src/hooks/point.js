import { onMounted, reactive } from 'vue'
export default function getPoint() {
  const point = reactive({
    x: 0,
    y: 0,
  })

  const getPoint = e => {
    point.x = e.pageX
    point.y = e.pageY
  }
  onMounted(() => {
    window.addEventListener('click', getPoint)
  })
  return point
}
