/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2023-07-12 11:24:24
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2023-07-12 11:24:30
 * @FilePath: /my-vue-app/.stylelintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  rules: {
    "block-closing-brace-empty-line-before": null,
    "block-closing-brace-newline-after": null,
    "block-closing-brace-newline-before": null,
    "block-closing-brace-space-before": null,
    "block-opening-brace-newline-after": null,
    "block-opening-brace-space-after": null,
    "block-opening-brace-space-before": null,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-space-after": null,
    "declaration-block-semicolon-space-before": null,
    "declaration-block-trailing-semicolon": null,
  },
  overrides: [
    {
      files: ["*.less", "**/*.less"],
      customSyntax: "postcss-less",
    },
  ],
};
