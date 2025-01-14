<!--
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2023-07-12 17:11:29
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2025-01-14 11:04:56
 * @FilePath: /my-vue-app/src/views/Layout/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="layout">
    <a-layout class="layout-demo">
      <a-layout-sider hide-trigger collapsible :collapsed="collapsed">
        <div class="logo" />
        <a-menu
          :default-open-keys="['1']"
          :default-selected-keys="['0_2']"
          :style="{ width: '100%' }"
          @menu-item-click="onClickMenuItem"
        >
          <a-menu-item key="0_1">
            <IconHome />
            登陆
          </a-menu-item>
          <a-menu-item key="0_2">
            <IconCalendar />
            home
          </a-menu-item>
          <a-menu-item key="0_3">
            <IconCalendar />
            测试
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="padding-left: 20px">
          <a-button shape="round" @click="onCollapse">
            <IconCaretRight v-if="collapsed" />
            <IconCaretLeft v-else />
          </a-button>
        </a-layout-header>
        <a-layout-content>
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { Message } from "@arco-design/web-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const collapsed = ref(false);
const onCollapse = () => {
  collapsed.value = !collapsed.value;
};

const onClickMenuItem = (key: any) => {
  Message.info({ content: `You select ${key}`, showIcon: true });
  if (key === "0_1") {
    router.push("/login");
  } else if (key === "0_2") {
    router.push("/home");
  } else if (key === "0_3") {
    router.push("/test");
  } else {
    router.push("/404");
  }
};
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  .layout-demo {
    height: 500px;
    background: var(--color-fill-2);
    border: 1px solid var(--color-border);
  }
  .layout-demo :deep(.arco-layout-sider) .logo {
    height: 32px;
    margin: 12px 8px;
    background: rgba(255, 255, 255, 0.2);
  }
  .layout-demo :deep(.arco-layout-sider-light) .logo {
    background: var(--color-fill-2);
  }
  .layout-demo :deep(.arco-layout-header) {
    height: 64px;
    line-height: 64px;
    background: var(--color-bg-3);
  }
  .layout-demo :deep(.arco-layout-footer) {
    height: 48px;
    color: var(--color-text-2);
    font-weight: 400;
    font-size: 14px;
    line-height: 48px;
  }
  .layout-demo :deep(.arco-layout-content) {
    color: var(--color-text-2);
    font-weight: 400;
    font-size: 14px;
    background: var(--color-bg-3);
  }
}
</style>
