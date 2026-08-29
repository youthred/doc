---
order: 6
title: text
---

# x-text

`x-text` 会将元素的文本内容设置为给定表达式的结果。

下面是一个使用 `x-text` 显示用户用户名的基本示例。

```alpine
<div x-data="{ username: 'calebporzio' }">
    Username: <strong x-text="username"></strong>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ username: 'calebporzio' }">
        Username: <strong x-text="username"></strong>
    </div>
</div>
<!-- END_VERBATIM -->

现在，`<strong>` 标签的文本内容将被设置为 “calebporzio”。
