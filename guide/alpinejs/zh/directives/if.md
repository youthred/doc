---
order: 16
title: if
---

# x-if

`x-if` 用于切换页面上的元素，与 `x-show` 类似，但它会完全添加和移除它所应用的元素，而不仅仅是将其 CSS 的 display 属性改为 “none”。

由于行为上的这种差异，`x-if` 不应直接应用于元素本身，而应应用于包裹该元素的 `<template>` 标签。这样，Alpine 就能在元素从页面移除后保留它的记录。

```alpine
<template x-if="open">
    <div>Contents...</div>
</template>
```

> 尽管上面的代码片段中没有包含 `x-data`，但如果没有父元素定义 `x-data`，就无法使用 `x-if`。[→ 了解更多关于 `x-data`](/directives/data)

## 注意事项

与 `x-show` 不同，`x-if` 不支持使用 `x-transition` 进行过渡切换。

`<template>` 标签只能包含一个根元素。
