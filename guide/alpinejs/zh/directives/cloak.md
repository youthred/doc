---
order: 12
title: cloak
---

# x-cloak

有时，当你在模板的某一部分使用 AlpineJS 时，会出现一个“闪烁”，即页面加载后、Alpine 加载前，你可能会看到尚未初始化的模板。

`x-cloak` 通过隐藏它所附加的元素来解决这个问题，直到 Alpine 在页面上完全加载。

不过，要让 `x-cloak` 生效，你必须在页面中添加以下 CSS：

```css
[x-cloak] { display: none !important; }
```

下面的示例会隐藏 `<span>` 标签，直到其 `x-show` 被明确设置为 true，从而防止隐藏元素在 Alpine 加载时“闪现”到屏幕上。

```alpine
<span x-cloak x-show="false">This will not 'blip' onto screen at any point</span>
```

`x-cloak` 不仅适用于被 `x-show` 或 `x-if` 隐藏的元素：它还能确保包含数据的元素在数据被正确设置之前保持隐藏。下面的示例会隐藏 `<span>` 标签，直到 Alpine 将其文本内容设置为 `message` 属性。

```alpine
<span x-cloak x-text="message"></span>
```

当 Alpine 在页面上加载时，它会从元素上移除 `x-cloak` 属性，这也会移除 CSS 应用的 `display: none;`，从而显示该元素。

## 全局语法的替代方案

如果你希望实现同样的行为，但又不想包含全局样式，可以使用下面这个很酷、但确实有点奇怪的技巧：

```alpine
<template x-if="true">
    <span x-text="message"></span>
</template>
```

这只需利用 `x-if` 的工作方式，就能达到与 `x-cloak` 相同的效果。

由于 `<template>` 元素在浏览器中默认是“隐藏”的，因此在 Alpine 有机会渲染 `x-if="true"` 并将其显示出来之前，你不会看到 `<span>`。

同样，这个方案并不适合所有人，但在特殊情况下值得一提。
