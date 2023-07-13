/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2023-07-13 18:33:09
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2023-07-13 18:33:16
 * @FilePath: /my-vue-app/src/typings.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//声明window上自定义属性，如事件总线
declare interface Window {
  eventBus: any;
}

//声明.vue文件
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<object, object, any>;
  export default component;
}
