<!--
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2023-07-12 16:13:49
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-05-16 10:42:48
 * @FilePath: /my-vue-app/src/views/login/login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container">
    <h1>登陆页面</h1>
    <a-button
      @click="
        () =>
          router.push({
            path: '/home',
          })
      "
      >返回</a-button
    >
    nihao
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
console.log("============>login");
</script>

<style lang="less" scoped></style>
