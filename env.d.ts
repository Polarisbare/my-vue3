/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2023-07-13 18:45:18
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2023-07-13 18:48:14
 * @FilePath: /my-vue-app/pinia-plugin-persist.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// declare module "pinia-plugin-persist";

/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 环境变量 TypeScript的智能提示
interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_APP_PORT: string;
  VITE_APP_BASE_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
