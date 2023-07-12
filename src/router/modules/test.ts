/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2023-07-12 15:42:52
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2023-07-12 16:23:56
 * @FilePath: /my-vue-app/src/router/modules/test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const testRouter = [
  {
    path: "/test",
    component: () => import("@/views/test-component.vue"),
  },
];

export default testRouter;
