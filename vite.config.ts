/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2023-07-12 10:45:50
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2023-07-12 11:43:06
 * @FilePath: /my-vue-app/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    port: 8080,
    proxy: {
      // "/oss": {
      //   target: "http://172.16.0.195:28082",
      //   changeOrigin: true,
      // },
      // "/yapi": {
      //   target: "http://yapi.jinmaoedu.com/mock/42",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/yapi/, "/"),
      // },
    },
  },
});
