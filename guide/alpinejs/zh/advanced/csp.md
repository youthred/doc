---
order: 1
title: CSP
---

# CSP (Content-Security Policy) Build

为了让 Alpine 能够执行 HTML 属性中的 JavaScript 表达式（如 `x-on:click="console.log()"`），它需要使用一些会违反“unsafe-eval”[内容安全策略](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)的工具，而某些应用出于安全目的会强制执行该策略。

> 在底层，Alpine 实际上并不使用 eval() 本身，因为它既慢又容易出问题。相反，它使用 Function 声明，这要好得多，但仍然会违反“unsafe-eval”。

Alpine 提供了一个不会违反“unsafe-eval”的替代构建版本，并且支持 Alpine 的大部分内联表达式语法。

<a name="installation"></a>
## 安装

你可以通过 `<script>` 标签引入此构建版本，或者通过 NPM 安装它：

### 通过 CDN

你可以像使用标准 Alpine 构建版本一样，将此构建版本的 CDN 以 `<script>` 标签的形式引入：

```alpine
<!-- Alpine's CSP-friendly Core -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/csp@3.x.x/dist/cdn.min.js"></script>
```

### 通过 NPM

你也可以从 NPM 安装此构建版本，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/csp
```

然后在你的打包文件中初始化它：

```js
import Alpine from '@alpinejs/csp'

window.Alpine = Alpine

Alpine.start()
```

<a name="basic-example"></a>
## 基础示例

下面是一个使用 Alpine CSP 构建版本的可运行计数器组件。请注意，大多数表达式与常规 Alpine 中的用法完全一致：

```alpine
<html>
    <head>
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'nonce-a23gbfz9e'">
        <script defer nonce="a23gbfz9e" src="https://cdn.jsdelivr.net/npm/@alpinejs/csp@3.x.x/dist/cdn.min.js"></script>
    </head>
    <body>
        <div x-data="{ count: 0, message: 'Hello' }">
            <button x-on:click="count++">Increment</button>
            <button x-on:click="count = 0">Reset</button>

            <span x-text="count"></span>
            <span x-text="message + ' World'"></span>
            <span x-show="count > 5">Count is greater than 5!</span>
        </div>
    </body>
</html>
```

<a name="whats-supported"></a>
## 支持的内容

CSP 构建版本支持你想在 Alpine 中使用的大多数 JavaScript 表达式：

### 对象与数组字面量
```alpine
<!-- ✅ These work -->
<div x-data="{ user: { name: 'John', age: 30 }, items: [1, 2, 3] }">
    <span x-text="user.name"></span>
    <span x-text="items[0]"></span>
</div>
```

### 基础运算
```alpine
<!-- ✅ These work -->
<div x-data="{ count: 5, name: 'Alpine' }">
    <span x-text="count + 10"></span>
    <span x-text="count > 3"></span>
    <span x-text="count === 5 ? 'Yes' : 'No'"></span>
    <span x-text="'Hello ' + name"></span>
    <div x-show="!loading && count > 0"></div>
</div>
```

### 赋值与更新
```alpine
<!-- ✅ These work -->
<div x-data="{ count: 0, user: { name: '' } }">
    <button x-on:click="count++">Increment</button>
    <button x-on:click="count = 0">Reset</button>
    <input x-model="user.name">
</div>
```

### 方法调用
```alpine
<!-- ✅ These work -->
<div x-data="{ items: ['a', 'b'] }">
    <button x-on:click="items.push('c')">Add Item</button>
</div>
```

<a name="whats-not-supported"></a>
## 不支持的内容

某些高级且可能存在危险的 JavaScript 特性不受支持：

### 复杂表达式
```alpine
<!-- ❌ These don't work -->
<div x-data="{ user: { name: '' } }">
    <!-- Property assignments -->
    <button x-on:click="user.name = 'John'">Bad</button>

    <!-- Arrow functions -->
    <button x-on:click="() => console.log('hi')">Bad</button>

    <!-- Destructuring -->
    <div x-text="{ name } = user">Bad</div>

    <!-- Template literals -->
    <div x-text="`Hello ${name}`">Bad</div>

    <!-- Spread operator -->
    <div x-data="{ ...defaults }">Bad</div>
</div>
```

### 全局变量与函数
```alpine
<!-- ❌ These don't work -->
<div x-data>
    <button x-on:click="console.log('hi')"></button>
    <span x-text="document.title"></span>
    <span x-text="window.innerWidth"></span>
    <span x-text="Math.max(count, 100)"></span>
    <span x-text="parseInt('123') + count"></span>
    <span x-text="JSON.stringify({ value: count })"></span>
</div>
```

### HTML 注入
```alpine
<!-- ❌ These don't work -->
<div x-data="{ message: 'Hello <span>World</span>' }">
    <span x-html="message"></span>
    <span x-init="$el.insertAdjacentHTML('beforeend', message)"></span>
</div>
```

<a name="when-to-extract-logic"></a>
## 何时提取逻辑

虽然 CSP 构建版本支持简单的内联表达式，但为了更好地组织代码，你应将复杂逻辑提取到专门的函数或 Alpine.data() 组件中：

```alpine
<!-- Instead of this -->
<div x-data="{ users: [] }" x-show="users.filter(u => u.active && u.role === 'admin').length > 0">
```

```alpine
<!-- Do this -->
<div x-data="userManager" x-show="hasActiveAdmins">

<script nonce="...">
    Alpine.data('userManager', () => ({
        users: [],

        get hasActiveAdmins() {
            return this.users.filter(u => u.active && u.role === 'admin').length > 0
        }
    }))
</script>
```

这种方法会让你的代码更易读、更易测试、更易维护，尤其适用于复杂的应用。

<a name="csp-headers"></a>
## CSP 响应头

下面是一个可与 Alpine 的 CSP 构建版本配合使用的 CSP 响应头示例：

```
Content-Security-Policy: default-src 'self'; script-src 'nonce-[random]' 'strict-dynamic';
```

关键在于从你的 `script-src` 指令中移除 `'unsafe-eval'`，同时仍然允许基于 nonce 的脚本运行。
