<!--
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2023-07-12 15:45:49
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2025-01-14 11:19:10
 * @FilePath: /my-vue-app/src/views/test-component.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container">测试页面</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const arr = ref([99, 22, 33, 44, 1, 88, 0, 66]);
onMounted(() => {
  for (let i = 0; i < arr.value.length; i++) {
    for (let j = i + 1; j < arr.value.length; j++) {
      if (arr.value[j] < arr.value[i]) {
        [arr.value[i], arr.value[j]] = [arr.value[j], arr.value[i]];
      }
    }
  }
  console.log("=========>冒泡排序", arr.value);
});
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
