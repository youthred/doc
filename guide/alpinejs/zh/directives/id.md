---
order: 17
title: id
---

# x-id

`x-id` 允许你为使用 `$id()` 生成的任何新 ID 声明一个新的“作用域”。它接受一个字符串数组（ID 名称），并为其内部生成的每个 `$id('...')` 添加一个在页面上的其他 ID 中唯一的后缀。

`x-id` 旨在与 `$id(...)` 魔法方法配合使用。

[访问 $id 文档](/magics/id) 以更好地了解此功能。

下面是该指令的一个简单示例：

```alpine
<div x-id="['text-input']">
    <label :for="$id('text-input')">Username</label>
    <!-- for="text-input-1" -->

    <input type="text" :id="$id('text-input')">
    <!-- id="text-input-1" -->
</div>

<div x-id="['text-input']">
    <label :for="$id('text-input')">Username</label>
    <!-- for="text-input-2" -->

    <input type="text" :id="$id('text-input')">
    <!-- id="text-input-2" -->
</div>
```

> 尽管上面的代码片段中没有包含 `x-data`，但如果没有父元素定义 `x-data`，就无法使用 `x-id`。[→ 了解更多关于 `x-data`](/directives/data)
