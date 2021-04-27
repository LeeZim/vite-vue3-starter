<template>
  <div>
    <h2>第一节</h2>
    <h1>$emit和$on用法</h1>
    <span>主要解决了事件的定义和消费</span>
    <br />
    <button @click="mittBtn">mitt测试In Console</button>
    <br />
    <button @click="emittBtn">$emit测试In Console</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import mitt, { Emitter } from 'mitt'

const emitter: Emitter = mitt()
export default defineComponent({
  setup() {},
  created() {
    // 在Vue3中 移除了 $on $off $once方法，我们采用第三方库mitt来实现
    // this.$on('my_event', this.emitTest)
    emitter.on('my_events', this.emitTest)
    emitter.on('my_events', this.emitTest2)
    this.$emit('emitTest3', 'my params')
  },
  methods: {
    mittBtn(): void {
      emitter.emit('my_events', 'my params')
    },
    emitTest(str: String): void {
      console.log(`Test:${str}`)
    },
    emitTest2(str: String): void {
      console.log(`Test2:${str}`)
    },
    emitTest3(str: String): void {
      console.log(`Test:3${str}`)
    }
  },
  mounted(): void {
    // event.on('emitTest3', this.emitTest3)
  },
  emits: {
    // my_events(data: String): any {
    //   console.log(data)
    //   return true
    // }
  }
})
</script>
