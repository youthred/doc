---
order: 8
title: for
---

# x-for

Alpine 的 `x-for` 指令允许你通过遍历列表来创建 DOM 元素。下面是一个使用它根据数组创建颜色列表的简单示例。

```alpine
<ul x-data="{ colors: ['Red', 'Orange', 'Yellow'] }">
    <template x-for="color in colors">
        <li x-text="color"></li>
    </template>
</ul>
```

<!-- START_VERBATIM -->
<div class="demo">
    <ul x-data="{ colors: ['Red', 'Orange', 'Yellow'] }">
        <template x-for="color in colors">
            <li x-text="color"></li>
        </template>
    </ul>
</div>
<!-- END_VERBATIM -->

你也可以向 `x-for` 传递对象。

```alpine
<ul x-data="{ car: { make: 'Jeep', model: 'Grand Cherokee', color: 'Black' } }">
    <template x-for="(value, index) in car">
        <li>
            <span x-text="index"></span>: <span x-text="value"></span>
        </li>
    </template>
</ul>
```

<!-- START_VERBATIM -->
<div class="demo">
    <ul x-data="{ car: { make: 'Jeep', model: 'Grand Cherokee', color: 'Black' } }">
        <template x-for="(value, index) in car">
            <li>
                <span x-text="index"></span>: <span x-text="value"></span>
            </li>
        </template>
    </ul>
</div>
<!-- END_VERBATIM -->

关于 `x-for`，有两条值得注意的规则：

> `x-for` 必须声明在 `<template>` 元素上。
> 该 `<template>` 元素必须只包含一个根元素

<a name="keys"></a>
## 键（Keys）

如果你要重新排列项目，为每次 `x-for` 迭代指定唯一的键非常重要。如果没有动态键，Alpine 可能难以跟踪项目的重新排序，并会产生奇怪的副作用。

```alpine
<ul x-data="{ colors: [
    { id: 1, label: 'Red' },
    { id: 2, label: 'Orange' },
    { id: 3, label: 'Yellow' },
]}">
    <template x-for="color in colors" :key="color.id">
        <li x-text="color.label"></li>
    </template>
</ul>
```

现在，如果颜色被添加、移除、重新排序，或者它们的 "id" 发生变化，Alpine 将相应地保留或销毁被迭代的 `<li>` 元素。

<a name="accessing-indexes"></a>
## 访问索引

如果你需要访问迭代中每个项目的索引，可以使用 `([item], [index]) in [items]` 语法，如下所示：

```alpine
<ul x-data="{ colors: ['Red', 'Orange', 'Yellow'] }">
    <template x-for="(color, index) in colors">
        <li>
            <span x-text="index + ': '"></span>
            <span x-text="color"></span>
        </li>
    </template>
</ul>
```

你也可以在动态 `:key` 表达式中访问索引。

```alpine
<template x-for="(color, index) in colors" :key="index">
```

<a name="iterating-over-a-range"></a>
## 按范围迭代

如果你只需要简单地循环 `n` 次，而不是遍历数组，Alpine 提供了一种简写语法。

```alpine
<ul>
    <template x-for="i in 10">
        <li x-text="i"></li>
    </template>
</ul>
```

在这种情况下，`i` 可以命名为任何你喜欢的名称。

> 尽管上面的代码片段中没有包含，但如果没有任何父元素定义 `x-data`，则无法使用 `x-for`。[→ 了解更多关于 `x-data`](/directives/data)

<a name="contents-of-a-template"></a>
## `<template>` 的内容

如上所述，`<template>` 标签必须只包含一个根元素。

例如，以下代码将无法正常工作：

```alpine
<template x-for="color in colors">
    <span>The next color is </span><span x-text="color">
</template>
```

但以下代码可以正常工作：
```alpine
<template x-for="color in colors">
    <p>
        <span>The next color is </span><span x-text="color">
    </p>
</template>
```
