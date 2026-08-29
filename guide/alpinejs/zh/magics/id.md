---
order: 9
prefix: $
title: id
---

# $id

`$id` 是一个魔法属性，可用于生成元素的 ID，并确保它不会与同一页面上其他同名的 ID 冲突。

在构建可能在页面上出现多次并使用 ID 属性的可复用组件（通常在后端模板中）时，这个工具非常有用。

诸如输入组件、模态框、列表框等都会从这个工具中受益。

<a name="basic-usage"></a>
## 基本用法

假设页面上有两个输入元素，您希望它们拥有彼此唯一的 ID，您可以这样做：

```alpine
<input type="text" :id="$id('text-input')">
<!-- id="text-input-1" -->

<input type="text" :id="$id('text-input')">
<!-- id="text-input-2" -->
```

如您所见，`$id` 接收一个字符串，并输出一个追加了后缀的、在页面上唯一的 ID。

<a name="groups-with-x-id"></a>
## 使用 x-id 分组

现在假设您想要同样的两个输入元素，但这一次您希望为它们各自添加 `<label>` 元素。

这带来了一个问题：您现在需要能够两次引用同一个 ID。一个用于 `<label>` 的 `for` 属性，另一个用于输入元素的 `id`。

下面是一种您可能会想到的实现方式，而且完全有效：

```alpine
<div x-data="{ id: $id('text-input') }">
    <label :for="id"> <!-- "text-input-1" -->
    <input type="text" :id="id"> <!-- "text-input-1" -->
</div>

<div x-data="{ id: $id('text-input') }">
    <label :for="id"> <!-- "text-input-2" -->
    <input type="text" :id="id"> <!-- "text-input-2" -->
</div>
```

这种方法没问题，但是，必须在组件作用域中命名并存储 ID 感觉有些繁琐。

为了以更灵活的方式完成同样的任务，您可以使用 Alpine 的 `x-id` 指令为一组 ID 声明一个"ID 作用域"：

```alpine
<div x-id="['text-input']">
    <label :for="$id('text-input')"> <!-- "text-input-1" -->
    <input type="text" :id="$id('text-input')"> <!-- "text-input-1" -->
</div>

<div x-id="['text-input']">
    <label :for="$id('text-input')"> <!-- "text-input-2" -->
    <input type="text" :id="$id('text-input')"> <!-- "text-input-2" -->
</div>
```

如您所见，`x-id` 接受一个 ID 名称的数组。现在，该作用域内任何对 `$id()` 的使用都将使用相同的 ID。可以将它们视为"ID 组"。

<a name="nesting"></a>
## 嵌套

正如您可能已经猜到的那样，您可以随意嵌套这些 `x-id` 组，如下所示：

```alpine
<div x-id="['text-input']">
    <label :for="$id('text-input')"> <!-- "text-input-1" -->
    <input type="text" :id="$id('text-input')"> <!-- "text-input-1" -->

    <div x-id="['text-input']">
        <label :for="$id('text-input')"> <!-- "text-input-2" -->
        <input type="text" :id="$id('text-input')"> <!-- "text-input-2" -->
    </div>
</div>
```

<a name="keyed-ids"></a>
## 带键的 ID（用于循环）

有时，为了在循环中标识某个 ID，在 ID 末尾指定一个额外的后缀会很有帮助。

为此，`$id()` 接受一个可选的第二个参数，该参数将作为后缀添加到生成的 ID 的末尾。

这种需求的一个常见示例是列表框组件，它使用 `aria-activedescendant` 属性来告诉辅助技术列表中哪个元素是"活动"的：

```alpine
<ul
    x-id="['list-item']"
    :aria-activedescendant="$id('list-item', activeItem.id)"
>
    <template x-for="item in items" :key="item.id">
        <li :id="$id('list-item', item.id)">...</li>
    </template>
</ul>
```

这是一个不完整的列表框示例，但它仍然有助于演示这样的场景：您可能希望组中的每个 ID 在页面上仍然是唯一的，同时在循环中带有键，以便您可以引用该组中的单个 ID。
