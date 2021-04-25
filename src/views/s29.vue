<template>
  <div>
    <h1>Vuex中的Getters Actions Modules</h1>
    <ul>
      <li>Store.Count: {{ count.count }}</li>
      <li><button @click="mutationsTest">store_mutations测试</button></li>
      <li>Store.getters测试：{{ gettersTest }}</li>
      <li><button @click="actionsTest">store_actions测试</button></li>
      <li>userStore里面的数据：{{ userCount }}</li>
      <li><button @click="modulesTest">store_modulesTest测试</button></li>
    </ul>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, toRefs, reactive } from 'vue'
import { useStore } from '../store'

export default defineComponent({
  setup() {
    const store = useStore()
    const userInfo = reactive({
      userCount: computed(() => store.state.userStoreModule.count)
    })

    return {
      ...toRefs(userInfo)
    }
  },
  data() {
    const count: any = this.$store.state
    return {
      count
    }
  },
  methods: {
    mutationsTest() {
      this.$store.commit('increment')
    },
    actionsTest() {
      this.$store.dispatch('increment')
    },
    // 触发store组件user里的方法
    modulesTest() {
      this.$store.commit('userStoreModule/userStoreIncrement')
      this.$store.dispatch('userStoreModule/userStoreIncrement')
    }
  },
  computed: {
    gettersTest() {
      return this.$store.getters.double
    }
  }
})
</script>

<style lang="stylus" scoped>
ul{
  padding:0
}
li{
  line-height:2;
}
</style>
