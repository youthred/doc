---
order: 11
title: ref
---

# x-ref

`x-ref` 与 `$refs` 结合使用是一个有用的工具，可以轻松地直接访问 DOM 元素。它作为 `getElementById` 和 `querySelector` 等 API 的替代方案最为有用。

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

> 尽管上面的代码片段中没有包含 `x-data`，但如果没有父元素定义 `x-data`，就无法使用 `x-ref`。[→ 了解更多关于 `x-data`](/directives/data)
