/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2023-07-13 14:26:44
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2023-07-13 14:26:53
 * @FilePath: /my-vue-app/src/store/modules/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";

export const userStore = defineStore("userInfo", {
  state: () => {
    return {
      userID: "110",
      userName: "小孟同学",
    };
  },
  getters: {
    fullName: (state) => {
      return `${state.userName}(${state.userID})`;
    },
  },
  // action 支持 async/await 的语法，可以自行添加使用
  // action 里的方法相互之间调用，直接用 this 访问即可
  actions: {
    updateUserName(name: string) {
      this.userName = name;
    },
  },
});
