<template>
  <div>
    <h2>第一节</h2>
    <h1>Mitt的用法</h1>
    <a href="https://github.com/developit/mitt">mitt@github</a>
    <br />
    <span>主要解决了事件的定义和消费</span>
    <br />
    <!-- 自定义事件广播，仅emitTest会被触发 -->
    <button @click="mittBtn">mitt单事件测传字符串试In Console</button>
    <br />
    <!-- 无条件广播，emitTest与emitTest2均会被触发 -->
    <button @click="mittBtn2">mitt多事件传对象测试In Console</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import mitt, { Emitter } from 'mitt'

const emitter: Emitter = mitt()

interface Params {
  name: String
  age: Number
}
export default defineComponent({
  setup() {},
  created() {
    // 在Vue3中 移除了 $on $off $once方法，我们采用第三方库mitt来实现
    // this.$on('my_event', this.emitTest)

    // 1.创建一个事件广播，传入两个参数
    //    a.第一个参数为事件名称，可以为自定义事件名称(String)：只有在捕获相应名称的广播时才会执行方法
    //                          也可以为'*'，无条件广播，意为可被任意捕获行为触发，无需事件名称，捕获时可传入一个参数
    //    b.第二个参数为需要绑定的方法，可以通过多条on函数为同个或多个事件绑定多个方法
    //      -方法会按照绑定的顺序执行
    emitter.on('my_events', this.emitTest)
    // emitter.on(['my_events', 'my_events2'], this.emitTest2)
    emitter.on('*', this.emitTest2)
  },
  methods: {
    mittBtn(): void {
      // 2.捕获名为'my_events'的广播，并传入一个对象作为参数
      //   此处传入了一个字符串作为对象
      //   同样可捕获无条件广播，并只传入第一个参数
      emitter.emit('my_events', 'my params')
    },
    mittBtn2(): void {
      const info: Params = {
        name: 'INFO标题',
        age: 'INFO年龄'
      }
      // 2.捕获无条件广播，并传入一个对象作为参数
      emitter.emit(info)
    },
    // 广播被捕获后执行的方法一
    emitTest(str: String): void {
      console.log(`Test:${str}`)
    },
    // 广播被捕获后执行的方法二
    emitTest2(info: Params | String): void {
      if (typeof info !== 'string') {
        console.log(`Test2: title:${info.name}--age:${info.age}`)
      } else {
        console.log(`Test2: String:${info}`)
      }
    }
  }
})
</script>
