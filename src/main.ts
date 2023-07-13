/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2023-07-12 10:45:50
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2023-07-13 09:05:26
 * @FilePath: /my-vue-app/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";

import ArcoVue from "@arco-design/web-vue";
import App from "./App.vue";
import "@arco-design/web-vue/dist/arco.css";
// 注册路由
import router from "./router";
// 样式

const app = createApp(App);
app.use(router);
app.use(ArcoVue);

app.mount("#app");
