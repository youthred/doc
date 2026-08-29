---
order: 4
title: Persist
description: Easily persist data across page loads using localStorage
graph_image: https://alpinejs.dev/social_persist.jpg
---

# Persist Plugin

Alpine 的 Persist 插件允许你在页面加载之间持久化 Alpine 状态。

这对于持久化搜索筛选条件、活动标签页等功能非常有用——如果用户在刷新页面，或离开后再重新访问时配置被重置，他们会感到沮丧。

<a name="installation"></a>
## 安装

你可以通过 `<script>` 标签引入此插件，也可以通过 NPM 安装：

### 通过 CDN

你可以将本插件的 CDN 构建版本以 `<script>` 标签的形式引入，只需确保在 Alpine 核心 JS 文件之前引入它。

```alpine
<!-- Alpine Plugins -->
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/persist@3.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### 通过 NPM

你可以从 NPM 安装 Persist，以便在你的打包文件中使用，如下所示：

```shell
npm install @alpinejs/persist
```

然后在你的打包文件中初始化它：

```js
import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'

Alpine.plugin(persist)

...
```

<a name="magic-persist"></a>
## $persist

使用此插件的主要 API 是魔法方法 `$persist`。

你可以像下面这样在 `x-data` 中用 `$persist` 包裹任意值，以在页面加载之间持久化其值：

```alpine
<div x-data="{ count: $persist(0) }">
    <button x-on:click="count++">Increment</button>

    <span x-text="count"></span>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ count: $persist(0) }">
        <button x-on:click="count++">Increment</button>
        <span x-text="count"></span>
    </div>
</div>
<!-- END_VERBATIM -->

在上面的示例中，因为我们用 `$persist()` 包裹了 `0`，Alpine 现在会拦截对 `count` 所做的更改，并在页面加载之间持久化它们。

你可以亲自尝试：在上面的示例中递增 "count"，然后刷新此页面，观察 "count" 是否保持其状态而不会被重置为 "0"。

<a name="how-it-works"></a>
## 它是如何工作的？

如果一个值被 `$persist` 包裹，在初始化时 Alpine 会为该值注册自己的监听器。现在，每当该值因任何原因发生变化时，Alpine 都会将新值存储在 [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) 中。

现在，当页面重新加载时，Alpine 会（以属性名称作为键）在 localStorage 中查找值。如果找到了，它会立即从 localStorage 中设置该属性的值。

你可以通过打开浏览器开发者工具中的 localStorage 查看器来观察这一行为：

<a href="https://developer.chrome.com/docs/devtools/storage/localstorage/"><img src="/img/persist_devtools.png" alt="Chrome devtools showing the localStorage view with count set to 0"></a>

你会观察到，仅仅通过访问此页面，Alpine 就已经在 localStorage 中设置了 "count" 的值。你还会注意到，它给属性名 "count" 加上了 "_x_" 前缀，作为这些值的命名空间方式，这样 Alpine 就不会与使用 localStorage 的其他工具发生冲突。

现在更改下面示例中的 "count"，并观察 Alpine 对 localStorage 所做的更改：

```alpine
<div x-data="{ count: $persist(0) }">
    <button x-on:click="count++">Increment</button>

    <span x-text="count"></span>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ count: $persist(0) }">
        <button x-on:click="count++">Increment</button>
        <span x-text="count"></span>
    </div>
</div>
<!-- END_VERBATIM -->

> `$persist` 适用于原始值，也适用于数组和对象。
不过，值得注意的是，当变量的类型发生变化时，必须清空 localStorage。<br>
> 就前面的示例而言，如果我们把 count 改为 `$persist({ value: 0 })`，那么必须清空 localStorage，或者将变量 'count' 重命名。

<a name="custom-key"></a>
## 设置自定义键

默认情况下，Alpine 使用 `$persist(...)` 所赋值的属性键（在上面的示例中是 "count"）。

考虑这样一种场景：你在不同页面甚至同一页面上有多个 Alpine 组件，它们都使用 "count" 作为属性键。

Alpine 将无法区分这些组件。

在这些情况下，你可以使用 `.as` 修饰符为任何持久化的值设置自己的自定义键，如下所示：


```alpine
<div x-data="{ count: $persist(0).as('other-count') }">
    <button x-on:click="count++">Increment</button>

    <span x-text="count"></span>
</div>
```

现在，Alpine 将使用键 "other-count" 来存储和检索上面的 "count" 值。

下面是 Chrome Devtools 的视图，你可以亲自查看：

<img src="/img/persist_custom_key_devtools.png" alt="Chrome devtools showing the localStorage view with count set to 0">

<a name="custom-storage"></a>
## 使用自定义存储

默认情况下，数据会保存到 localStorage 中，它没有过期时间，即使页面关闭也会保留。

考虑一种场景：你想在用户关闭标签页时清除数据。在这种情况下，你可以使用 `.using` 修饰符将数据持久化到 sessionStorage，如下所示：


```alpine
<div x-data="{ count: $persist(0).using(sessionStorage) }">
    <button x-on:click="count++">Increment</button>

    <span x-text="count"></span>
</div>
```

你还可以定义自己的自定义存储对象，暴露一个 getItem 函数和一个 setItem 函数。例如，你可以决定使用会话 cookie 作为存储，具体做法如下：


```alpine
<script>
    window.cookieStorage = {
        getItem(key) {
            let cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].split("=");
                if (key == cookie[0].trim()) {
                    return decodeURIComponent(cookie[1]);
                }
            }
            return null;
        },
        setItem(key, value) {
            document.cookie = key+' = '+encodeURIComponent(value)
        }
    }
</script>

<div x-data="{ count: $persist(0).using(cookieStorage) }">
    <button x-on:click="count++">Increment</button>

    <span x-text="count"></span>
</div>
```

<a name="using-persist-with-alpine-data"></a>
## 将 $persist 与 Alpine.data 一起使用

如果你想将 `$persist` 与 `Alpine.data` 一起使用，你需要使用标准函数而不是箭头函数，这样 Alpine 在初始求值组件作用域时才能绑定自定义的 `this` 上下文。

```js
Alpine.data('dropdown', function () {
    return {
        open: this.$persist(false)
    }
})
```

<a name="using-alpine-persist-global"></a>
## 使用 Alpine.$persist 全局变量

`Alpine.$persist` 是全局暴露的，因此可以在 `x-data` 上下文之外使用。这对于持久化来自其他来源（如 `Alpine.store`）的数据非常有用。

```js
Alpine.store('darkMode', {
    on: Alpine.$persist(true).as('darkMode_on')
});
```
