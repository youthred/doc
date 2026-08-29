---
order: 1
prefix: $
title: el
---

# $el

`$el` 是一个魔法属性，可用于获取当前 DOM 节点。

```alpine
<button @click="$el.innerHTML = 'Hello World!'">Replace me with "Hello World!"</button>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data>
        <button @click="$el.textContent = 'Hello World!'">Replace me with "Hello World!"</button>
    </div>
</div>
<!-- END_VERBATIM -->
