---
order: 7
title: Anchor
description: Anchor an element's positioning to another element on the page
graph_image: https://alpinejs.dev/social_anchor.jpg
---

# Anchor Plugin

Alpine 的 Anchor 插件允许你轻松地将一个元素的定位锚定到页面上的另一个元素。

在使用 Alpine 创建下拉菜单、弹出框、对话框和工具提示时，此功能非常有用。

此插件使用的"锚定"功能由 [Floating UI](https://floating-ui.com/) 项目提供。

<a name="installation"></a>
## 安装

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```alpine
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/anchor@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### 通过 NPM

你可以从 NPM 安装 Anchor，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/anchor
```

然后在你的打包文件中初始化它：

```js
import Alpine from 'alpinejs'
import anchor from '@alpinejs/anchor'

Alpine.plugin(anchor)

...
```

<a name="x-anchor"></a>
## x-anchor

使用此插件的主要 API 是 `x-anchor` 指令。

要使用此插件，请将 `x-anchor` 指令添加到任意元素，并向它传入一个你想要将其位置锚定到的元素的引用（通常是页面上的一个按钮）。

默认情况下，`x-anchor` 会将元素的 CSS 设置为 `position: absolute`，并设置相应的 `top` 和 `left` 值。如果被锚定的元素通常会显示在参照元素下方，但页面上没有足够的空间，其样式会被调整为在元素上方渲染。

例如，下面是一个简单的下拉菜单，它锚定到切换它的按钮上：

```alpine
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>

    <div x-show="open" x-anchor="$refs.button">
        Dropdown content
    </div>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo overflow-hidden">
    <div class="flex justify-center">
        <button x-ref="button" @click="open = ! open">Toggle</button>
    </div>

    <div x-show="open" x-anchor="$refs.button" class="bg-white rounded p-4 border shadow z-10">
        Dropdown content
    </div>
</div>
<!-- END_VERBATIM -->

<a name="positioning"></a>
## 定位

`x-anchor` 允许你使用以下修饰符自定义被锚定元素的定位：

* 底部：`.bottom`、`.bottom-start`、`.bottom-end`
* 顶部：`.top`、`.top-start`、`.top-end`
* 左侧：`.left`、`.left-start`、`.left-end`
* 右侧：`.right`、`.right-start`、`.right-end`

下面是一个使用 `.bottom-start` 将下拉菜单定位到参照元素下方偏右位置的示例：

```alpine
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>

    <div x-show="open" x-anchor.bottom-start="$refs.button">
        Dropdown content
    </div>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo overflow-hidden">
    <div class="flex justify-center">
        <button x-ref="button" @click="open = ! open">Toggle</button>
    </div>

    <div x-show="open" x-anchor.bottom-start="$refs.button" class="bg-white rounded p-4 border shadow z-10">
        Dropdown content
    </div>
</div>
<!-- END_VERBATIM -->

<a name="fixed-positioning"></a>
### 固定定位

默认情况下，`x-anchor` 会为被锚定元素应用 `position: absolute`。这在大多数情况下都没问题，但当参照元素位于带有 `overflow: hidden`、`overflow: clip` 或 `overflow: auto` 的容器内时，就会出现问题——被锚定元素会随之被裁剪。

你可以通过添加 `.fixed` 修饰符，指示 Floating UI 改用固定定位策略：

```html
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>

    <div x-show="open" x-anchor.fixed="$refs.button">
        Dropdown content
    </div>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo overflow-hidden">
    <div class="flex justify-center">
        <button x-ref="button" @click="open = ! open">Toggle</button>
    </div>

    <div x-show="open" x-anchor.fixed="$refs.button" class="bg-white rounded p-4 border shadow z-10">
        Dropdown content
    </div>
</div>
<!-- END_VERBATIM -->

> **注意：** 任何祖先元素上的 `transform`、`filter`、`perspective`、`backdrop-filter`、`will-change` 或 `contain` 都会为 `position: fixed` 的后代元素创建一个新的包含块（[根据 CSS 规范](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed_positioning)）。发生这种情况时，`.fixed` 将相对于该祖先元素表现得像 `position: absolute`——并且无法逃脱其 `overflow: hidden`。如果 `.fixed` 似乎没有生效，请检查是否存在设置了 transform 的祖先元素。

<a name="offset"></a>
## 偏移

你可以使用 `.offset.[px value]` 修饰符为被锚定元素添加偏移，如下所示：

```alpine
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>

    <div x-show="open" x-anchor.offset.10="$refs.button">
        Dropdown content
    </div>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo overflow-hidden">
    <div class="flex justify-center">
        <button x-ref="button" @click="open = ! open">Toggle</button>
    </div>

    <div x-show="open" x-anchor.offset.10="$refs.button" class="bg-white rounded p-4 border shadow z-10">
        Dropdown content
    </div>
</div>
<!-- END_VERBATIM -->

<a name="prevent-flipping"></a>
## 防止位置翻转

默认情况下，如果被锚定元素没有足够的空间渲染在参照元素下方，`x-anchor` 会翻转其位置。

你可以通过添加 `.noflip` 修饰符来防止此行为：

```alpine
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>

    <div x-show="open" x-anchor.noflip="$refs.button">
        Dropdown content
    </div>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo overflow-hidden">
    <div class="flex justify-center">
        <button x-ref="button" @click="open = ! open">Toggle</button>
    </div>

    <div x-show="open" x-anchor.noflip="$refs.button" class="bg-white rounded p-4 border shadow z-10">
        Dropdown content
    </div>
</div>
<!-- END_VERBATIM -->

<a name="manual-styling"></a>
## 手动样式

默认情况下，`x-anchor` 会在内部为你的元素应用定位样式。如果你希望完全掌控样式，可以传入 `.no-style` 修饰符，并使用 `$anchor` 魔法属性在其他 Alpine 表达式中访问这些值。

下面是一个绕过 `x-anchor` 的内部样式、改为使用 `x-bind:style` 自行应用样式的示例：

```alpine
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>

    <div
        x-show="open"
        x-anchor.no-style="$refs.button"
        x-bind:style="{ position: 'absolute', top: $anchor.y+'px', left: $anchor.x+'px' }"
    >
        Dropdown content
    </div>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo overflow-hidden">
    <div class="flex justify-center">
        <button x-ref="button" @click="open = ! open">Toggle</button>
    </div>

    <div
        x-show="open"
        x-anchor.no-style="$refs.button"
        x-bind:style="{ position: 'absolute', top: $anchor.y+'px', left: $anchor.x+'px' }"
        class="bg-white rounded p-4 border shadow z-10"
    >
        Dropdown content
    </div>
</div>
<!-- END_VERBATIM -->

> **将 `.no-style` 与 `.fixed` 结合使用：** 当你选择不使用 Alpine 的内部样式并且还需要固定定位时，请记得自己设置 `position: 'fixed'`。`$anchor.x` 和 `$anchor.y` 会在当前生效策略的坐标空间中返回——绝对坐标相对于偏移父元素，固定坐标相对于视口——因此应用错误的 `position` 会把你的元素放到错误的位置。
>
> ```alpine
> <div
>     x-show="open"
>     x-anchor.no-style.fixed="$refs.button"
>     x-bind:style="{ position: 'fixed', top: $anchor.y+'px', left: $anchor.x+'px' }"
> >
>     Dropdown content
> </div>
> ```

<a name="from-id"></a>
## 锚定到 ID

到目前为止，所有示例都是使用 Alpine 的 refs 锚定到其他元素的。

由于 `x-anchor` 接受对任意 DOM 元素的引用，你可以使用 `document.getElementById()` 之类的工具，通过元素的 `id` HTML 属性进行锚定：

```alpine
<div x-data="{ open: false }">
    <button id="trigger" @click="open = ! open">Toggle</button>

    <div x-show="open" x-anchor="document.getElementById('trigger')">
        Dropdown content
    </div>
</div>
```

<!-- START_VERBATIM -->
<div x-data="{ open: false }" class="demo overflow-hidden">
    <div class="flex justify-center">
        <button class="trigger" @click="open = ! open">Toggle</button>
    </div>


    <div x-show="open" x-anchor="document.querySelector('.trigger')">
        Dropdown content
    </div>
</div>
<!-- END_VERBATIM -->
