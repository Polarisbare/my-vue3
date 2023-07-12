# 测试项目供自己练习用

## 一、安装

```bash

# 安装依赖
npm install
或
cnpm install

# 本地开发 启动项目
npm run dev
```

## 二、目录结构

```bash
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directive              # 全局指令
│   ├── icons                  # 项目所有 svg icons
│   ├── lang                   # 国际化 language
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── vendor                 # 公用vendor
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.ts                # 入口文件 加载组件 初始化等
│   └── permission.ts          # 权限管理
├── .env.xxx                   # 环境变量配置
├── .eslintrc.ts               # eslint 配置项
├── .babelrc                   # babel-loader 配置
├── .travis.yml                # 自动化CI配置
├── index.html                 # html模板
├── tests                      # 测试
├── postcss.config.ts          # postcss 配置
└── package.json               # package.json
```

## 三、命名风格

|          对象           |  命名风格  |
| :---------------------: | :--------: |
| Vue组件（components中） | 大驼峰命名 |
|   Vue页面（Views中）    |   短横线   |
|         文件夹          |   短横线   |
|     JavaScript文件      |   小驼峰   |
|      css less scss      |   短横线   |

## 四、接口相关

`Axios` 的封装在 `src/utils/request.ts` 中

所有模块的接口按照**模块化**的原则在 `src/api` 下新建一个对应的 `xxx.ts` 文件中定义，定义时注意添加适当的注释对**功能和参数**进行说明。

## 五、组件相关

所有**通用组件**都放在 `src/components` 下。部分有强关联关系的组件（比如若干个小组件组成大的组件），可以以文件夹的组织。

只在特定页面中使用，或者说，为了降低页面复杂度而拆分出的**非通用组件**，放在对应页面下的 `components` 文件夹中。

## 六、路由相关

路由整体逻辑为：由根路由文件 `router/index.ts` 整合 `router/modules` 中各个模块的路由文件。减少代码耦合度以及减少产生代码冲突的风险。

## 七、文件、代码注释

大家统一使用 VScode 的 koroFileHeader 插件增加文件注释以及函数注释（尤其在接口定义时），注释的原则：**尽量详细**。**目标是让使用者在不阅读代码的情况下，即可使用组件或方法。**

## 八、图标

项目中尽量使用 Arco 提供的图标，对于缺少的，使用[阿里矢量图标库](https://www.iconfont.cn/)引入。需要使用阿里矢量图标库的开发者需联系矢量库项目的管理员添加权限。

**注意：**目前为了减少文件引入，使用了 iconfont 提供的CDN服务引入字体包。

## 九、状态管理库（Pinia）

预期之后也会按照模块化的思想组织。目前只有一个样例。后续需要时再补充。

## 十、代码提交

保证提交信息清晰可理解。

```javascript
 "build",    // 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
 "ci",       // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
 "docs",     // 文档更新
 "feat",     // 新增功能
 "fix",       // bug 修复
 "perf",     // 性能优化
 "refactor", // 重构代码(既没有新增功能，也没有修复 bug)
 "revert",   // 回滚某个更早之前的提交
 "style",    // 不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
 "test",     // 增测试用例或是更新现有测试
 "chore",    // 不属于以上类型的其他类型(日常事务)
```
