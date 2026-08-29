---
order: 9
title: Sort
description: Easily re-order elements by dragging them with your mouse
graph_image: https://alpinejs.dev/social_sort.jpg
---

# Sort Plugin

Alpine 的 Sort 插件允许你通过鼠标拖拽轻松地重新排列元素。

此功能适用于看板、待办事项列表、可排序的表格列等场景。

此插件使用的拖拽功能由 [SortableJS](https://github.com/SortableJS/Sortable) 项目提供。

<a name="installation"></a>
## 安装

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```alpine
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/sort@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### 通过 NPM

你可以从 NPM 安装 Sort，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/sort
```

然后在你的打包文件中初始化它：

```js
import Alpine from 'alpinejs'
import sort from '@alpinejs/sort'

Alpine.plugin(sort)

...
```

<a name="basic-usage"></a>
## 基本用法

使用此插件的主要 API 是 `x-sort` 指令。通过向一个元素添加 `x-sort`，其包含 `x-sort:item` 的子元素将变得可排序——也就是说，你可以用鼠标拖拽它们，它们会改变位置。

```alpine
<ul x-sort>
    <li x-sort:item>foo</li>
    <li x-sort:item>bar</li>
    <li x-sort:item>baz</li>
</ul>
```

<!-- START_VERBATIM -->
<div x-data>
    <ul x-sort>
        <li x-sort:item class="cursor-pointer">foo</li>
        <li x-sort:item class="cursor-pointer">bar</li>
        <li x-sort:item class="cursor-pointer">baz</li>
    </ul>
</div>
<!-- END_VERBATIM -->

<a name="sort-handlers"></a>
## 排序处理函数

你可以通过向 `x-sort` 传入处理函数，并使用 `x-sort:item` 为每个项目添加键来响应排序变化。下面是一个简单处理函数的示例，它会显示一个包含被移动项目的键及其新位置的提示对话框：

```alpine
<ul x-sort="alert($item + ' - ' + $position)">
    <li x-sort:item="1">foo</li>
    <li x-sort:item="2">bar</li>
    <li x-sort:item="3">baz</li>
</ul>
```

<!-- START_VERBATIM -->
<div x-data>
    <ul x-sort="alert($item + ' - ' + $position)">
        <li x-sort:item="1" class="cursor-pointer">foo</li>
        <li x-sort:item="2" class="cursor-pointer">bar</li>
        <li x-sort:item="3" class="cursor-pointer">baz</li>
    </ul>
</div>
<!-- END_VERBATIM -->

每当项目的排序顺序发生变化时，`x-sort` 处理函数都会被调用。`$item` 魔法属性将包含被排序元素的键（来自 `x-sort:item`），`$position` 将包含项目的新位置（从索引 `0` 开始）。

你也可以向 `x-sort` 传入一个处理函数，该函数将接收 `item` 和 `position` 作为第一个和第二个参数：

```alpine
<div x-data="{ handle: (item, position) => { ... } }">
    <ul x-sort="handle">
        <li x-sort:item="1">foo</li>
        <li x-sort:item="2">bar</li>
        <li x-sort:item="3">baz</li>
    </ul>
</div>
```

处理函数通常用于将项目的新顺序持久化到数据库中，以便在页面刷新后保留列表的排序顺序。

<a name="sorting-groups"></a>
## 排序分组

此插件允许你通过向两个列表添加相同的 `x-sort:group` 值，将项目从一个 `x-sort` 可排序列表拖拽到另一个列表中：

```alpine
<div>
    <ul x-sort x-sort:group="todos">
        <li x-sort:item="1">foo</li>
        <li x-sort:item="2">bar</li>
        <li x-sort:item="3">baz</li>
    </ul>

    <ol x-sort x-sort:group="todos">
        <li x-sort:item="4">foo</li>
        <li x-sort:item="5">bar</li>
        <li x-sort:item="6">baz</li>
    </ol>
</div>
```

因为上面两个可排序列表使用了相同的组名（`todos`），所以你可以将项目从一个列表拖到另一个列表中。

> 当使用 `x-sort="handle"` 之类的排序处理函数，并将项目从一个组拖到另一个组时，只有目标列表的处理函数会被调用，并传入键和新位置。

<a name="drag-handles"></a>
## 拖拽手柄

默认情况下，每个 `x-sort:item` 元素都可以通过在其中的任意位置点击并拖拽来进行移动。然而，你可能希望指定一个更小、更具体的元素作为"拖拽手柄"，这样元素的其余部分可以像往常一样进行交互，只有手柄会对鼠标拖拽做出响应：

```alpine
<ul x-sort>
    <li x-sort:item>
        <span x-sort:handle> - </span>foo
    </li>

    <li x-sort:item>
        <span x-sort:handle> - </span>bar
    </li>

    <li x-sort:item>
        <span x-sort:handle> - </span>baz
    </li>
</ul>
```

<!-- START_VERBATIM -->
<div x-data>
    <ul x-sort>
        <li x-sort:item>
            <span x-sort:handle class="cursor-pointer"> - </span>foo
        </li>
        <li x-sort:item>
            <span x-sort:handle class="cursor-pointer"> - </span>bar
        </li>
        <li x-sort:item>
            <span x-sort:handle class="cursor-pointer"> - </span>baz
        </li>
    </ul>
</div>
<!-- END_VERBATIM -->

正如你在上面的示例中看到的，连字符 "-" 是可拖拽的，但项目文本（"foo"）则不能。

<a name="ignoring-elements"></a>
## 忽略元素

有时你可能希望阻止可排序项目中的某些元素发起拖拽操作。当你拥有按钮、下拉菜单或链接等交互元素，希望用户可以点击而不意外拖拽可排序项目时，这尤其有用。

你可以使用 `x-sort:ignore` 指令来标记不应触发拖拽的元素：

```alpine
<ul x-sort>
    <li x-sort:item>
        <!-- ... -->

        <button x-sort:ignore>Edit</button>
    </li>

    <li x-sort:item>
        <!-- ... -->

        <button x-sort:ignore>Edit</button>
    </li>

    <li x-sort:item>
        <!-- ... -->

        <button x-sort:ignore>Edit</button>
    </li>
</ul>
```

在上面的示例中，用户可以点击并拖拽项目本身，但点击 "Edit" 按钮不会发起拖拽操作。

> **注意：** 带有 `x-sort:ignore` 的元素仍将正常工作（按钮可以被点击、输入框可以被聚焦等）——它们只是被排除在拖拽操作之外。

<a name="ghost-elements"></a>
## 幽灵元素

当用户拖拽项目时，元素会跟随鼠标移动，看起来就像真的在拖拽这个元素一样。

默认情况下，拖拽期间会在原始元素的位置留下一个"空洞"（空白区域）。

如果你希望在原位置显示原始元素的"幽灵"而不是空白区域，可以向 `x-sort` 添加 `.ghost` 修饰符：

```alpine
<ul x-sort.ghost>
    <li x-sort:item>foo</li>
    <li x-sort:item>bar</li>
    <li x-sort:item>baz</li>
</ul>
```

<!-- START_VERBATIM -->
<div x-data>
    <ul x-sort.ghost>
        <li x-sort:item class="cursor-pointer">foo</li>
        <li x-sort:item class="cursor-pointer">bar</li>
        <li x-sort:item class="cursor-pointer">baz</li>
    </ul>
</div>
<!-- END_VERBATIM -->

<a name="ghost-styling"></a>
### 设置幽灵元素的样式

默认情况下，当原始元素被拖拽时，"幽灵"元素会附带一个 `.sortable-ghost` CSS 类。

这使得添加任何你想要的自定义样式变得很容易：

```alpine
<style>
.sortable-ghost {
    opacity: .5 !important;
}
</style>

<ul x-sort.ghost>
    <li x-sort:item>foo</li>
    <li x-sort:item>bar</li>
    <li x-sort:item>baz</li>
</ul>
```

<!-- START_VERBATIM -->
<div x-data>
    <ul x-sort.ghost x-sort:config="{ ghostClass: 'opacity-50' }">
        <li x-sort:item class="cursor-pointer">foo</li>
        <li x-sort:item class="cursor-pointer">bar</li>
        <li x-sort:item class="cursor-pointer">baz</li>
    </ul>
</div>
<!-- END_VERBATIM -->

<a name="sorting-class"></a>
## body 上的排序类

当一个元素被拖拽时，Alpine 会自动向页面的 `<body>` 元素添加一个 `.sorting` 类。

这对于仅使用 CSS 对页面上的任何元素进行条件样式设置非常有用。

例如，你可以设置一个只在用户排序项目时显示的警告：

```html
<div id="sort-warning">
    Page functionality is limited while sorting
</div>
```

要让它只在排序时显示，你可以使用 `body.sorting` CSS 选择器：

```css
#sort-warning {
    display: none;
}

body.sorting #sort-warning {
    display: block;
}
```

<a name="css-hover-bug"></a>
## CSS 悬停 bug

目前，[Chrome 和 Safari 中存在一个 bug](https://issues.chromium.org/issues/41129937)（Firefox 中没有），会导致悬停样式出现问题。

请看下面的 HTML，列表中的每个项目会根据悬停状态进行不同的样式设置（这里我们使用 Tailwind 的 `.hover` 类来条件性地添加边框）：

```html
<div x-sort>
    <div x-sort:item class="hover:border">foo</div>
    <div x-sort:item class="hover:border">bar</div>
    <div x-sort:item class="hover:border">baz</div>
</div>
```

如果你拖拽下面列表中的某个元素，你会看到悬停效果会被错误地应用到位于原始元素位置上的任何元素：

<!-- START_VERBATIM -->
<div x-data>
    <ul x-sort class="flex flex-col items-start">
        <li x-sort:item class="hover:border border-black cursor-pointer">foo</li>
        <li x-sort:item class="hover:border border-black cursor-pointer">bar</li>
        <li x-sort:item class="hover:border border-black cursor-pointer">baz</li>
    </ul>
</div>
<!-- END_VERBATIM -->

要解决这个问题，你可以利用排序时应用到 body 上的 `.sorting` 类，将悬停效果限制为只在 `body` 上不存在 `.sorting` 时才生效。

下面是如何使用 Tailwind 任意变体直接在行内实现这一点：

```html
<div x-sort>
    <div x-sort:item class="[body:not(.sorting)_&]:hover:border">foo</div>
    <div x-sort:item class="[body:not(.sorting)_&]:hover:border">bar</div>
    <div x-sort:item class="[body:not(.sorting)_&]:hover:border">baz</div>
</div>
```

现在你可以在下面看到，悬停效果只会应用到被拖拽的元素上，而不是列表中的其他元素。

<!-- START_VERBATIM -->
<div x-data>
    <ul x-sort class="flex flex-col items-start">
        <li x-sort:item class="[body:not(.sorting)_&]:hover:border border-black cursor-pointer">foo</li>
        <li x-sort:item class="[body:not(.sorting)_&]:hover:border border-black cursor-pointer">bar</li>
        <li x-sort:item class="[body:not(.sorting)_&]:hover:border border-black cursor-pointer">baz</li>
    </ul>
</div>
<!-- END_VERBATIM -->

<a name="custom-configuration"></a>
## 自定义配置

Alpine 在内部为配置 [SortableJS](https://github.com/SortableJS/Sortable?tab=readme-ov-file#options) 选择了合理的默认值。不过，你可以使用 `x-sort:config` 自行添加或覆盖这些选项中的任意一项：

```alpine
<ul x-sort x-sort:config="{ animation: 0 }">
    <li x-sort:item>foo</li>
    <li x-sort:item>bar</li>
    <li x-sort:item>baz</li>
</ul>
```

<!-- START_VERBATIM -->
<div x-data>
    <ul x-sort x-sort:config="{ animation: 0 }">
        <li x-sort:item class="cursor-pointer">foo</li>
        <li x-sort:item class="cursor-pointer">bar</li>
        <li x-sort:item class="cursor-pointer">baz</li>
    </ul>
</div>
<!-- END_VERBATIM -->

> 传入的任何配置选项都会覆盖 Alpine 的默认值。对于 `animation` 来说这没有问题，但请注意，覆盖 `handle`、`group`、`filter`、`onSort`、`onStart` 或 `onEnd` 可能会破坏功能。

[在此查看 SortableJS 配置选项的完整列表 →](https://github.com/SortableJS/Sortable?tab=readme-ov-file#options)
