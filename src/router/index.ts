/*
 * @Author: WangMaoqing 1035311011@qq.com
 * @Date: 2023-01-16 18:12:51
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2023-07-12 17:05:59
 * @FilePath: /lesson_preparation/src/router/index.ts
 * @Description: 路由根文件。在引入各模块的路由，并加入到路由配置中。
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import test from "./modules/test";
import common from "./modules/common";
import home from "./modules/home";
// const Layout = () => import("@/layout/index.vue");

// 配一个常量的路由，放不用权限控制的,例如登录页、首页、404等页面
export const constantRoutes: RouteRecordRaw[] = [
  ...common,
  ...home,
  ...test,
  {
    path: "/:pathMatch(.*)",
    component: () => import("@/views/error-page/404.vue"),
  },
];
// 配一个需要权限管控的路由模块，根据角色来控制
export const asyncRoutes: RouteRecordRaw[] = [
  // {
  //   path: "/permission",
  //   name: "Permission",
  //   redirect: "/permission/index",
  //   component: Layout,
  //   meta: {
  //     title: "权限管理",
  //     icon: "lock",
  //     roles: ["admin", "editor"], // you can set roles in root nav
  //     alwaysShow: true, // will always show the root menu
  //   },
  //   children: [
  //     {
  //       path: "index",
  //       component: () => import("@/views/permission/index.vue"),
  //       name: "PermissionIndex",
  //       meta: {
  //         title: "权限管理",
  //         roles: ["admin"], // or you can only set roles in sub nav
  //       },
  //     },
  //     {
  //       path: "directive",
  //       component: () => import("@/views/permission/directive.vue"),
  //       name: "PermissionDirective",
  //       meta: {
  //         title: "指令权限",
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/:pathMatch(.*)",
  //   redirect: "/404",
  //   hidden: true,
  // },
];

// 一开始，没登录进来之前都只是createRouter的就只是常量路由，比如说登录页是任何人都可以看得，404也是如此；至于首页dashboard没登录进来之前有路由监听，虽说一开始也创了，但在路由监听router.beforeEach这里会把访问者也打到登录页，所以也进不去。

//  当然这里constantRoutes也可以不放首页，首页放到asyncRoutes这里路由也是可以的。

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

export default router;
