---
order: 7
prefix: $
title: root
---

# $root

`$root` 是一个魔法属性，可用于获取任何 Alpine 组件的根元素。换句话说，就是 DOM 树中向上最近的包含 `x-data` 的元素。

```alpine
<div x-data data-message="Hello World!">
    <button @click="alert($root.dataset.message)">Say Hi</button>
</div>
```

<!-- START_VERBATIM -->
<div x-data data-message="Hello World!" class="demo">
    <button @click="alert($root.dataset.message)">Say Hi</button>
</div>
<!-- END_VERBATIM -->
