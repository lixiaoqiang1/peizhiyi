<p align="center">
  <img width="200" src="./docs/images/udesk.png">
  <h2 style="width:100%; text-align:center;"">UDesk Mobile Template</h2>
</p>


## 简介

统一客户端应用平台(UDesk) for Mobile 模板工程(**udesk-mobile-template**)基于 UDesk 移动 H5 框架构建，是一个使用 Vue 技术栈(vue、vue-router、vuex)实现的单页应用，内置了动态路由、状态管理、权限验证、异步请求、前端数据模拟(Mock)、个性化设置等单页应用必需模块，包含简单的页面布局和页签样例，适合用于企业级中后台产品的正式研发。

组件和交易样例学习请使用 UDesk for Mobile 样板工程(udesk-mobile-boilerplate)。

- **UDesk for Mobile 样例工程**：[在线预览](http://dev.udesk.abc/mobile-boilerplate/)
- **UDesk for Mobile 模板工程**：[在线预览](http://dev.udesk.abc/mobile-template/)

统一客户端应用平台(UDesk)移动 H5 框架，基于 Vue 技术栈提供运行框架、UI 组件库、组件工程、模板工程、样板工程、开发工具（脚手架工具）等功能模块，适用于需通过移动端 H5 容器访问的应用系统，支持独立浏览器（如 UC 等）、微信内置浏览器、UMAP 应用内嵌 WebView 等浏览渠道。

### 文档

- 在线文档：请浏览 [谛听](http://dt.abc/)
- 离线文档：请浏览工程根路径下的 docs 目录 

## 起步

### 申请使用

请联系北研应用平台研发部 UDesk 项目组申请工程代码。

### 环境配置

在安装项目依赖之前，必须保证本地安装了 Node 开发环境

#### 安装 NodeJS 和 NPM

NodeJS 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
NodeJS 官方网址：https://nodejs.org/

建议下载：node-10.15.3或最新版，64位，Windows 平台。
点击稳定版下载 node-v10.15.3-x64.msi 文件，并双击此文件进行安装。
注：由于 NodeJS 已包含 NPM，无需再安装 NPM。
安装完成后，在命令行依次输入：

```bash
node -v
npm -v
```

如提示未找到命令，请检查安装路径是否已加入本地系统`Path`变量。

```bash
# 设置默认源
npm config set registry=http://zpk.abc/artifactory/api/npm/npm-test/

# 安装 NPM 源管理工具
npm install nrm -g

# 添加 ZPK 试用库源
nrm add zpk-test http://zpk.abc/artifactory/api/npm/npm-test/ 

# 添加 ZPK 交付库源
nrm add zpk http://zpk.abc/artifactory/api/npm/npm/ 

# 列出源列表
nrm ls

# 测试源下载速度
nrm test 

# 使用指定源（推荐使用 ZPK 试用库）
nrm use zpk-test
```

#### 安装 Python

Python 是一种高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。

python 官网地址：http://www.python.org

建议下载：python-2.7.16 或 2.x 的最新版，64 位，Windows 平台。
Windows 版本下载之后，会得到一个安装程序，直接点击安装。
在命令行执行：

```bash
python -v
```

可查看 Python 版本。如提示未找到命令，请检查安装路径是否已加入本地系统 Path 变量。


#### 安装 node-sass

由于网络原因，UDesk 样例工程/模板工程依赖的 node-sass 模块无法直接从 NPM 源获取，需要指定安装位置为本地文件。

- 1. 获取 node-sass 的 .node 文件

node-sass 的 .node 文件可从github获取：[获取地址](https://github.com/sass/node-sass/releases) 
（建议下载：node-sass-4.11.0或最新版，64位，Win32平台，NODE_MODULE_VERSION 64）。

- 2. 设置 node-sass 的本地路径

获取到.node文件（win32-x64-64_binding.node）后，将其放在本地自定义目录，然后在命令行依次执行下述命令（注：花括号内为自定义的目录路径，引号为英文半角）：

```bash
npm config set sass_binary_path {自定义路径}\win32-x64-64_binding.node
npm config set sass_binary_site {自定义路径}\win32-x64-64_binding.node
```

执行以下命令查看设置后的结果：

```bash
npm config get sass_binary_path
npm config get sass_binary_site
```

### 安装依赖

```bash
# 进入工程目录
cd udesk-mobile-template
```

**特别说明**
由于当前内网 NPM 源不稳定，建议跳过下述`npm install`命令，直接联系北研应用平台研发部 UDesk 项目组获取工程 NPM 依赖包`udesk-mobile-template_v5.1.0_node_modules.zip`，将zip中的 node_modules 目录解压至本工程根目录下，然后直接执行`npm run dev`即可启动工程。

```bash
# 安装依赖，如已获取 node_modules 目录则不必执行此命令
npm install
```

### 启动工程

```bash
npm run dev
```

启动成功后，将自动在浏览器打开 http://localhost:9527 页面。

### 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod

# 构建一个可用于生产环境的 .war 包
npm run package
```

### 开发和生产配置

详见[开发和生产配置]()

### 浏览器支持

详见[IE兼容性改造]()

### 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```
