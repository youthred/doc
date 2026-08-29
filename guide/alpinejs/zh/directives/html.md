---
order: 7
title: html
---

# x-html

`x-html` 会将元素的 "innerHTML" 属性设置为给定表达式的结果。

> ⚠️ 仅对可信内容使用，切勿用于用户提供的内容。⚠️
> 动态渲染来自第三方的 HTML 很容易导致 XSS 漏洞。

下面是一个使用 `x-html` 显示用户用户名的基本示例。

```alpine
<div x-data="{ username: '<strong>calebporzio</strong>' }">
    Username: <span x-html="username"></span>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ username: '<strong>calebporzio</strong>' }">
        Username: <span x-html="username"></span>
    </div>
</div>
<!-- END_VERBATIM -->

现在，`<span>` 标签的内部 HTML 将被设置为 “<strong>calebporzio</strong>”。
