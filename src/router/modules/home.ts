/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2023-07-12 16:39:50
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2023-07-12 16:50:56
 * @FilePath: /my-vue-app/src/router/modules/home.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const commonRouter = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/home.vue"),
    // children: [
    //   {
    //     path: "dashboard",
    //     component: () => import("@/views/home/home.vue"),
    //     name: "Dashboard",
    //     meta: {
    //       title: "首页",
    //       icon: "dashboard",
    //     },
    //   },
    // ],
  },
];

export default commonRouter;
