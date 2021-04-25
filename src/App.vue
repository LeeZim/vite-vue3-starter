<template>
  <div>
    <el-container>
      <el-header><Header /></el-header>
      <el-container>
        <el-aside width="200px"><router-view name="router_aside"></router-view></el-aside>
        <el-container>
          <el-main><router-view name="router_main"></router-view></el-main>
        </el-container>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/header.vue'

export default defineComponent({
  setup() {},
  components: {
    Header
  }
})
</script>

<style lang="stylus">

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 800px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 800px;
  ul{
    list-style-type :none
  };
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
