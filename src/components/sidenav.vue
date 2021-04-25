<template>
  <ul v-for="(item, index) in titleList[aid]" :key="index">
    <li>
      <router-link :to="{ name: item.router }">{{ item.title }}</router-link>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRoute()
    const aid = ref<string>(router.query.aid)
    const titleList = ref<any>({
      s30: [
        {
          title: '第一节',
          router: 's30_1'
        },
        {
          title: '第二节',
          router: 's30_2'
        }
      ]
    })

    return {
      aid,
      titleList
    }
  },
  mounted() {
    // console.log(this.titleList[this.aid]);
    // console.log(this.list)
  }
})
</script>

<style lang="stylus" scoped>
ul{
  list-style-type:none;
  padding:0;
  a{
    text-decoration-line :none;
    color:black
  }
}
</style>
