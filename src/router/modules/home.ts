/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2023-07-12 16:39:50
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-05-16 10:35:50
 * @FilePath: /my-vue-app/src/router/modules/home.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const commonRouter = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home/home.vue"),
    meta: {
      title: "评测中心",
    },
  },
];

export default commonRouter;
