/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2023-07-12 16:16:58
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-05-16 10:36:33
 * @FilePath: /my-vue-app/src/router/modules/common.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const commonRouter = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/login.vue"),
    meta: {
      title: "登陆",
    },
  },
];

export default commonRouter;
