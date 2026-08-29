---
order: 1
title: Mask
description: Automatically format text fields as users type
graph_image: https://alpinejs.dev/social_mask.jpg
---

# Mask Plugin

Alpine 的 Mask 插件允许你在用户输入时自动格式化文本输入框。

这对于许多不同类型的输入非常有用：电话号码、信用卡、美元金额、账号、日期等。

<a name="installation"></a>

## 安装

<div x-data="{ expanded: false }">
<div class=" relative">
<div x-show="! expanded" class="absolute inset-0 flex justify-start items-end bg-gradient-to-t from-white to-[#ffffff66]"></div>
<div x-show="expanded" x-collapse.min.80px class="markdown">

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```alpine
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/mask@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### 通过 NPM

你可以从 NPM 安装 Mask，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/mask
```

然后在你的打包文件中初始化它：

```js
import Alpine from 'alpinejs'
import mask from '@alpinejs/mask'

Alpine.plugin(mask)

...
```

</div>
</div>
<button :aria-expanded="expanded" @click="expanded = ! expanded" class="text-cyan-600 font-medium underline">
    <span x-text="expanded ? 'Hide' : 'Show more'">Show</span> <span x-text="expanded ? '↑' : '↓'">↓</span>
</button>
</div>

<a name="x-mask"></a>

## x-mask

使用此插件的主要 API 是 `x-mask` 指令。

让我们先看一下下面这个简单的日期字段示例：

```alpine
<input x-mask="99/99/9999" placeholder="MM/DD/YYYY">
```

<!-- START_VERBATIM -->
<div class="demo">
    <input x-data x-mask="99/99/9999" placeholder="MM/DD/YYYY">
</div>
<!-- END_VERBATIM -->

请注意，你在输入框中输入的文字必须遵循 `x-mask` 提供的格式。除了强制使用数字字符外，如果用户没有先输入斜杠 `/`，系统也会自动添加它们。

掩码支持以下通配符：

| 通配符 | 描述                          |
| ------ | ----------------------------- |
| `*`    | 任意字符                      |
| `a`    | 仅字母字符（a-z、A-Z）        |
| `9`    | 仅数字字符（0-9）             |

<a name="mask-functions"></a>

## 动态掩码

有时简单的掩码字面量（即 `(999) 999-9999`）并不够用。在这些情况下，`x-mask:dynamic` 允许你根据用户输入动态生成掩码。

下面是一个信用卡输入的示例，它需要根据号码是否以 "34" 或 "37" 开头（这意味着它是 Amex 卡，因此格式不同）来改变其掩码。

```alpine
<input x-mask:dynamic="
    $input.startsWith('34') || $input.startsWith('37')
        ? '9999 999999 99999' : '9999 9999 9999 9999'
">
```

正如你在上面的示例中所看到的，用户每次在输入框中输入时，该值都会以 `$input` 的形式传递给表达式。根据 `$input` 的不同，输入框会使用不同的掩码。

你可以自己试试，输入一个以 "34" 开头的号码和一个不以 "34" 开头的号码。

<!-- START_VERBATIM -->
<div class="demo">
    <input x-data x-mask:dynamic="
        $input.startsWith('34') || $input.startsWith('37')
            ? '9999 999999 99999' : '9999 9999 9999 9999'
    ">
</div>
<!-- END_VERBATIM -->

`x-mask:dynamic` 也接受函数作为表达式的结果，并会自动将 `$input` 作为第一个参数传递给它。例如：

```alpine
<input x-mask:dynamic="creditCardMask">

<script>
function creditCardMask(input) {
    return input.startsWith('34') || input.startsWith('37')
        ? '9999 999999 99999'
        : '9999 9999 9999 9999'
}
</script>
```

<a name="money-inputs"></a>

## 金额输入

因为为金额输入编写自己的动态掩码表达式相当复杂，Alpine 提供了一个预先构建好的表达式，并以 `$money()` 的形式提供。

这是一个功能完整的金额输入掩码：

```alpine
<input x-mask:dynamic="$money($input)">
```

<!-- START_VERBATIM -->
<div class="demo" x-data>
    <input type="text" x-mask:dynamic="$money($input)" placeholder="0.00">
</div>
<!-- END_VERBATIM -->

如果你希望将句点换成逗号，反之亦然（某些货币需要这样做），可以使用第二个可选参数来实现：

```alpine
<input x-mask:dynamic="$money($input, ',')">
```

<!-- START_VERBATIM -->
<div class="demo" x-data>
    <input type="text" x-mask:dynamic="$money($input, ',')"  placeholder="0,00">
</div>
<!-- END_VERBATIM -->

你还可以通过提供第三个可选参数来覆盖千位分隔符：

```alpine
<input x-mask:dynamic="$money($input, '.', ' ')">
```

<!-- START_VERBATIM -->
<div class="demo" x-data>
    <input type="text" x-mask:dynamic="$money($input, '.', ' ')"  placeholder="3 000.00">
</div>
<!-- END_VERBATIM -->


你还可以使用任意所需的位数作为第四个可选参数，来覆盖默认的 2 位精度：

```alpine
<input x-mask:dynamic="$money($input, '.', ',', 4)">
```

<!-- START_VERBATIM -->
<div class="demo" x-data>
    <input type="text" x-mask:dynamic="$money($input, '.', ',', 4)"  placeholder="0.0001">
</div>
<!-- END_VERBATIM -->
