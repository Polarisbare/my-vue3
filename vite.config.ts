/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2023-07-12 10:45:50
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2023-07-12 13:57:54
 * @FilePath: /my-vue-app/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n", "vue/macros"],
      dirs: ["./src/api"],
      dts: "./src/auto-import.d.ts",
      include: [/\.[tj]sx?/, /\.vue$/],
      resolvers: [ArcoResolver()],
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 8080,
    proxy: {
      // "/oss": {
      //   target: "http://172.16.0.195:28082",
      //   changeOrigin: true,
      // },
      // "/yapi": {
      //   target: "http://yapi.com/mock/42",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/yapi/, "/"),
      // },
    },
  },
});
