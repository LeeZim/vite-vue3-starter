<template>
  <div>
    <h2>第一节</h2>
    <h1>$emit和$on用法</h1>
    <span>主要解决了事件的定义和消费</span>
    <button @click="emitTest">emit测试</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {},
  created() {
    // 在Vue3中 移除了 $on $off $once方法，我们采用第三方库mitt来实现
    // this.$on('my_event', this.emitTest)
  },
  methods: {
    emitTest(): void {
      this.$emit('my_events', 'my params')
    }
  },
  emits: {
    my_events(data: String): any {
      console.log(data)
      return true
    }
  }
})
</script>
