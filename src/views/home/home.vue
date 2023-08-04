<!--
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2023-07-12 16:14:09
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2023-08-04 16:43:11
 * @FilePath: /my-vue-app/src/views/home/home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container">我是home</div>
</template>

<script lang="ts" setup>
import { userStore } from "@/store/modules/user";
const store = userStore();
const onChangeName = (name: string) => {
  store.updateUserName(name ?? "李同学");
  console.log("=========>", store.$state);
};

onMounted(() => {
  onChangeName("张同学");
});
</script>

<style lang="less" scoped></style>
