<template>
  <div class="header-body">
    <ul>
      <li><h1>Vue3</h1></li>
      <li><router-link :to="{ name: 'Home' }">首页</router-link></li>
      <li><router-link to="/s29">第二十九章</router-link></li>
      <li><router-link :to="{ name: 's30', query: { aid: 's30' } }">第三十章</router-link></li>
    </ul>
  </div>
</template>
<style lang="stylus" scoped>
.header-body{
  width:100%;
  height:60px;
}

ul{
  list-style-type :none;
  margin-block:0em;
  float :left;
  display:-webkit-flex;
  li{
    padding-left:40px;

  }
  h1{
    margin-block:0em
  }
  a{
    color:black;
    text-decoration-line: none;
  }
}
</style>
