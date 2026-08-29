---
order: 3
title: show
---

# x-show

`x-show` 是 Alpine 中最有用、最强大的指令之一。它提供了一种富有表现力的方式来显示和隐藏 DOM 元素。

下面是一个使用 `x-show` 的简单下拉菜单组件示例。

```alpine
<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle Dropdown</button>

    <div x-show="open">
        Dropdown Contents...
    </div>
</div>
```

当点击“Toggle Dropdown”按钮时，下拉菜单将相应地显示和隐藏。

> 如果 `x-show` 在页面加载时的“默认”状态为“false”，你可能需要在页面上使用 `x-cloak` 来避免“页面闪烁”（即浏览器在 Alpine 完成初始化并将其隐藏之前就渲染出你的内容的效果）。你可以在 `x-cloak` 的文档中了解更多相关内容。

<a name="with-transitions"></a>
## 配合过渡效果

如果你想为 `x-show` 的行为应用平滑的过渡效果，可以将它与 `x-transition` 配合使用。你可以[在此处](/directives/transition)了解更多关于该指令的内容，下面是一个与上面相同的组件的快速示例，只是应用了过渡效果。

```alpine
<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle Dropdown</button>

    <div x-show="open" x-transition>
        Dropdown Contents...
    </div>
</div>
```

<a name="using-the-important-modifier"></a>
## 使用 important 修饰符

有时你需要施加更大的力度才能真正隐藏元素。当 CSS 选择器使用 `!important` 标志应用 `display` 属性时，它将优先于 Alpine 设置的内联样式。

在这种情况下，你可以使用 `.important` 修饰符将内联样式设置为 `display: none !important`。

```alpine
<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle Dropdown</button>

    <div x-show.important="open">
        Dropdown Contents...
    </div>
</div>
```
