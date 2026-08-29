---
order: 11
title: ignore
---

# x-ignore

默认情况下，Alpine 会遍历并初始化包含 `x-init` 或 `x-data` 的元素的整个 DOM 树。

如果出于某种原因，你不希望 Alpine 处理 HTML 中的某个特定区域，你可以使用 `x-ignore` 来阻止它这样做。

```alpine
<div x-data="{ label: 'From Alpine' }">
    <div x-ignore>
        <span x-text="label"></span>
    </div>
</div>
```

在上面的示例中，`<span>` 标签将不会包含 “From Alpine”，因为我们告诉 Alpine 完全忽略该 `div` 的内容。
