<!--
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2023-08-04 17:00:15
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2023-08-04 17:00:38
 * @FilePath: /my-vue-app/src/Layout/components/Main.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="main">
    <a-layout-content class="layout-main">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </a-layout-content>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped></style>
