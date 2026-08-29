---
order: 3
title: Resize
description: An Alpine convenience wrapper for the Resize Observer API that allows you to easily react when an element is resized.
graph_image: https://alpinejs.dev/social_resize.jpg
---

# Resize Plugin

Alpine 的 Resize 插件是 [Resize Observer](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API) 的便捷封装，它允许你在元素尺寸发生变化时轻松做出响应。

这对于以下场景非常有用：基于尺寸的自定义动画、智能的 sticky 定位、根据元素尺寸有条件地添加属性等。

<a name="installation"></a>
## 安装

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```alpine
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/resize@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### 通过 NPM

你可以从 NPM 安装 Resize，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/resize
```

然后在你的打包文件中初始化它：

```js
import Alpine from 'alpinejs'
import resize from '@alpinejs/resize'

Alpine.plugin(resize)

...
```

<a name="x-resize"></a>
## x-resize

使用此插件的主要 API 是 `x-resize`。你可以将 `x-resize` 添加到 Alpine 组件内的任何元素上，当该元素因任何原因调整大小时，所提供的表达式将携带两个魔法属性执行：`$width` 和 `$height`。

例如，下面是一个使用 `x-resize` 在元素尺寸变化时显示其宽度和高度的简单示例。

```alpine
<div
    x-data="{ width: 0, height: 0 }"
    x-resize="width = $width; height = $height"
>
    <p x-text="'Width: ' + width + 'px'"></p>
    <p x-text="'Height: ' + height + 'px'"></p>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ width: 0, height: 0 }" x-resize="width = $width; height = $height">
        <i>Resize your browser window to see the width and height values change.</i>
        <br><br>
        <p x-text="'Width: ' + width + 'px'"></p>
        <p x-text="'Height: ' + height + 'px'"></p>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="modifiers"></a>
## 修饰符

<a name="document"></a>
### .document

观察整个文档的尺寸（而不是某个特定元素）通常很有用。要做到这一点，你可以为 `x-resize` 添加 `.document` 修饰符：

```alpine
<div x-resize.document="...">
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ width: 0, height: 0 }" x-resize.document="width = $width; height = $height">
        <i>Resize your browser window to see the document width and height values change.</i>
        <br><br>
        <p x-text="'Width: ' + width + 'px'"></p>
        <p x-text="'Height: ' + height + 'px'"></p>
    </div>
</div>
<!-- END_VERBATIM -->
