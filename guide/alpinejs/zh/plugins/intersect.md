---
order: 2
title: Intersect
description: An Alpine convenience wrapper for Intersection Observer that allows you to easily react when an element enters the viewport.
graph_image: https://alpinejs.dev/social_intersect.jpg
---

# Intersect Plugin

Alpine 的 Intersect 插件是 [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) 的便捷封装，它允许你在元素进入视口时轻松做出响应。

这对于以下场景非常有用：图片和其他内容的懒加载、触发动画、无限滚动、记录内容的"浏览量"等。

<a name="installation"></a>
## 安装

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```alpine
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/intersect@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### 通过 NPM

你可以从 NPM 安装 Intersect，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/intersect
```

然后在你的打包文件中初始化它：

```js
import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'

Alpine.plugin(intersect)

...
```

<a name="x-intersect"></a>
## x-intersect

使用此插件的主要 API 是 `x-intersect`。你可以将 `x-intersect` 添加到 Alpine 组件内的任何元素上，当该组件进入视口（滚动到可见区域）时，所提供的表达式将会执行。

例如，在下面的代码片段中，`shown` 将一直保持为 `false`，直到元素被滚动到可见区域。此时，表达式将执行，`shown` 将变为 `true`：

```alpine
<div x-data="{ shown: false }" x-intersect="shown = true">
    <div x-show="shown" x-transition>
        I'm in the viewport!
    </div>
</div>
```

<!-- START_VERBATIM -->
<div class="demo" style="height: 60px; overflow-y: scroll;" x-data x-ref="root">
    <a href="#" @click.prevent="$refs.root.scrollTo({ top: $refs.root.scrollHeight, behavior: 'smooth' })">Scroll Down 👇</a>
    <div style="height: 50vh"></div>
    <div x-data="{ shown: false }" x-intersect="shown = true" id="yoyo">
        <div x-show="shown" x-transition.duration.1000ms>
            I'm in the viewport!
        </div>
        <div x-show="! shown">&nbsp;</div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="x-intersect-enter"></a>
### x-intersect:enter

`:enter` 后缀是 `x-intersect` 的别名，工作方式相同：

```alpine
<div x-intersect:enter="shown = true">...</div>
```

当同时使用 `:leave` 后缀时，你可以选择使用它以提高可读性。

<a name="x-intersect-leave"></a>
### x-intersect:leave

附加 `:leave` 会在元素离开视口时运行你的表达式。

```alpine
<div x-intersect:leave="shown = true">...</div>
```
> 默认情况下，这意味着*整个元素*不在视口中。使用 `x-intersect:leave.full` 可以在只有*部分元素*不在视口时运行你的表达式。

[→ 了解更多关于底层 `IntersectionObserver` API 的信息](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

<a name="modifiers"></a>
## 修饰符

<a name="once"></a>
### .once

有时，只在元素首次进入视口时（而非后续每次）求值表达式会很有用。例如在触发"进入"动画时。在这些情况下，你可以为 `x-intersect` 添加 `.once` 修饰符来实现这一点。

```alpine
<div x-intersect.once="shown = true">...</div>
```

<a name="half"></a>
### .half

当交叉阈值超过 `0.5` 时求值表达式。

对于至少需要显示元素一部分很重要的元素很有用。

```alpine
<div x-intersect.half="shown = true">...</div> // when `0.5` of the element is in the viewport
```

<a name="full"></a>
### .full

当交叉阈值超过 `0.99` 时求值表达式。

对于需要显示整个元素很重要的元素很有用。

```alpine
<div x-intersect.full="shown = true">...</div> // when `0.99` of the element is in the viewport
```

<a name="threshold"></a>
### .threshold

允许你控制底层 `IntersectionObserver` 的 `threshold` 属性：

该值的范围应为 "0-100"。"0" 表示：如果元素的任何部分进入视口，就触发一次"交叉"（默认行为）。而 "100" 表示：只有当整个元素都进入视口时，才触发"交叉"。

介于两者之间的任何值都是这两个极端值的百分比。

例如，如果你想在元素的一半进入页面后触发一次交叉，可以使用 `.threshold.50`：

```alpine
<div x-intersect.threshold.50="shown = true">...</div> // when 50% of the element is in the viewport
```

如果你只想在元素的 5% 进入视口时触发，可以使用：`.threshold.05`，以此类推。

<a name="margin"></a>
### .margin

允许你控制底层 `IntersectionObserver` 的 `rootMargin` 属性。
这实际上会调整视口边界的大小。正值会将边界扩大到视口之外，负值则会将其向内收缩。这些值的用法与 CSS 的 margin 类似：一个值表示所有边；两个值分别表示上下、左右；或四个值分别表示上、右、下、左。你可以使用 `px` 和 `%` 值，也可以直接使用一个裸数字来表示像素值。

```alpine
<div x-intersect.margin.200px="loaded = true">...</div> // Load when the element is within 200px of the viewport
```

```alpine
<div x-intersect:leave.margin.10%.25px.25.25px="loaded = false">...</div> // Unload when the element gets within 10% of the top of the viewport, or within 25px of the other three edges
```

```alpine
<div x-intersect.margin.-100px="visible = true">...</div> // Mark as visible when element is more than 100 pixels into the viewport.
```

<a name="parent"></a>
### .parent

默认情况下，`x-intersect` 以浏览器的视口为参照来观察元素。`.parent` 修饰符会将底层 `IntersectionObserver` 的 `root` 设置为元素的父元素，因此表达式会基于元素在其父元素内是否可见（而不是在整个页面中）来求值。

当元素位于可滚动容器内时，或者当你关心的是相对于父元素而非视口的可见性时，这非常方便。

```alpine
<div x-intersect.parent="shown = true">...</div> // Mark as shown when the element scrolls into view within its parent
```
