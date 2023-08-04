<!--
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2023-07-12 17:11:29
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2023-08-04 17:07:51
 * @FilePath: /my-vue-app/src/views/Layout/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="layout">
    <a-layout>
      <Header></Header>
      <a-layout class="sub-layout"> <Aside></Aside> <Main></Main> </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import Header from "./components/Header.vue";
import Aside from "./components/Aside.vue";
import Main from "./components/Main.vue";
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  .sub-layout {
    display: flex;
  }
}
</style>
