---
order: 2
prefix: $
title: refs
---

# $refs

`$refs` 是一个魔法属性，可用于获取组件内标记了 `x-ref` 的 DOM 元素。当您需要手动操作 DOM 元素时，这会非常有用。它通常作为 `document.querySelector` 的一种更简洁、更具作用域限制的替代方案。

```alpine
<button @click="$refs.text.remove()">Remove Text</button>

<span x-ref="text">Hello 👋</span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data>
        <button @click="$refs.text.remove()">Remove Text</button>

        <div class="pt-4" x-ref="text">Hello 👋</div>
    </div>
</div>
<!-- END_VERBATIM -->

现在，当按下 `<button>` 时，`<span>` 将被移除。

<a name="limitations"></a>
### 限制

在 V2 中，可以将 `$refs` 动态绑定到元素，如下所示：

```alpine
<template x-for="item in items" :key="item.id" >
    <div :x-ref="item.name">
    some content ...
    </div>
</template>
```

然而，在 V3 中，`$refs` 只能访问静态创建的元素。因此，对于上面的示例：如果您期望 `$refs` 中 `item.name` 的值是 *Batteries* 之类的内容，您应该注意，`$refs` 实际上包含的是字面字符串 `'item.name'`，而不是 *Batteries*。
