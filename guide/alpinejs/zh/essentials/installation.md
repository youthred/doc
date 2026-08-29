---
order: 1
title: Installation
---

# 安装

有两种方式可以将 Alpine 引入你的项目：

* 通过 `<script>` 标签引入
* 将其作为模块导入

两种方式都完全有效，具体取决于项目的需求和开发者的偏好。

<a name="from-a-script-tag"></a>
## 通过 script 标签引入

这是开始使用 Alpine 最简单的方式。在你的 HTML 页面的 head 中引入下面的 `<script>` 标签。

```alpine
<html>
    <head>
        ...

        <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    </head>
    ...
</html>
```

> 不要忘记 `<script>` 标签中的 "defer" 属性。

注意提供的 CDN 链接中的 `@3.x.x`。这将获取 Alpine 3 的最新版本。为了生产环境的稳定性，建议你在 CDN 链接中硬编码最新版本。

```alpine
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.16.3/dist/cdn.min.js"></script>
```

就这样！Alpine 现在可以在你的页面中使用了。

请注意，你仍然需要用 `x-data` 定义一个组件，任何 Alpine.js 属性才能正常工作。更多信息请参阅 <https://github.com/alpinejs/alpine/discussions/3805>。

<a name="as-a-module"></a>
## 作为模块引入

如果你更喜欢更稳健的方式，可以通过 NPM 安装 Alpine 并将其导入到打包文件中。

运行以下命令进行安装。

```shell
npm install alpinejs
```

现在将 Alpine 导入到你的打包文件中并按如下方式初始化：

```js
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()
```

> `window.Alpine = Alpine` 这行是可选的，但为了自由和灵活性，加上它也不错。例如，当你想从 devtools 中摆弄 Alpine 时。

> 如果你将 Alpine 导入到打包文件中，你必须确保在导入 `Alpine` 全局对象之后、调用 `Alpine.start()` 初始化 Alpine 之前，注册任何扩展代码。

> 确保 `Alpine.start()` 每个页面只调用一次。多次调用会导致多个 Alpine "实例"同时运行。


[→ 了解更多关于扩展 Alpine](/advanced/extending)
