---
order: 7
title: model
---

# x-model

`x-model` 允许你将输入元素的值绑定到 Alpine 数据。

下面是一个使用 `x-model` 将文本字段的值绑定到 Alpine 中某个数据的简单示例。

```alpine
<div x-data="{ message: '' }">
    <input type="text" x-model="message">

    <span x-text="message"></span>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ message: '' }">
        <input type="text" x-model="message" placeholder="Type message...">

        <div class="pt-4" x-text="message"></div>
    </div>
</div>
<!-- END_VERBATIM -->


现在，当用户在文本字段中输入时，`message` 会实时反映在 `<span>` 标签中。

`x-model` 是双向绑定的，这意味着它既能"设置"也能"获取"。除了修改数据之外，如果数据本身发生变化，元素也会反映这一变化。


我们可以使用与上面相同的示例，但这次我们将添加一个按钮来修改 `message` 属性的值。

```alpine
<div x-data="{ message: '' }">
    <input type="text" x-model="message">

    <button x-on:click="message = 'changed'">Change Message</button>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ message: '' }">
        <input type="text" x-model="message" placeholder="Type message...">

        <button x-on:click="message = 'changed'">Change Message</button>
    </div>
</div>
<!-- END_VERBATIM -->

现在，当 `<button>` 被点击时，输入元素的值将立即更新为 “changed”。

`x-model` 适用于以下输入元素：

* `<input type="text">`
* `<textarea>`
* `<input type="checkbox">`
* `<input type="radio">`
* `<select>`
* `<input type="range">`

<a name="text-inputs"></a>
## 文本输入

```alpine
<input type="text" x-model="message">

<span x-text="message"></span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ message: '' }">
        <input type="text" x-model="message" placeholder="Type message">

        <div class="pt-4" x-text="message"></div>
    </div>
</div>
<!-- END_VERBATIM -->

> 尽管上面的代码片段中没有包含，但如果没有任何父元素定义 `x-data`，则无法使用 `x-model`。[→ 了解更多关于 `x-data`](/directives/data)

<a name="textarea-inputs"></a>
## 文本域输入

```alpine
<textarea x-model="message"></textarea>

<span x-text="message"></span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ message: '' }">
        <textarea x-model="message" placeholder="Type message"></textarea>

        <div class="pt-4" x-text="message"></div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="checkbox-inputs"></a>
## 复选框输入

<a name="single-checkbox-with-boolean"></a>
### 带布尔值的单个复选框

```alpine
<input type="checkbox" id="checkbox" x-model="show">

<label for="checkbox" x-text="show"></label>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ open: '' }">
        <input type="checkbox" id="checkbox" x-model="open">

        <label for="checkbox" x-text="open"></label>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="multiple-checkboxes-bound-to-array"></a>
### 绑定到数组的多个复选框

```alpine
<input type="checkbox" value="red" x-model="colors">
<input type="checkbox" value="orange" x-model="colors">
<input type="checkbox" value="yellow" x-model="colors">

Colors: <span x-text="colors"></span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ colors: [] }">
        <input type="checkbox" value="red" x-model="colors">
        <input type="checkbox" value="orange" x-model="colors">
        <input type="checkbox" value="yellow" x-model="colors">

        <div class="pt-4">Colors: <span x-text="colors"></span></div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="radio-inputs"></a>
## 单选按钮输入

```alpine
<input type="radio" value="yes" x-model="answer">
<input type="radio" value="no" x-model="answer">

Answer: <span x-text="answer"></span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ answer: '' }">
        <input type="radio" value="yes" x-model="answer">
        <input type="radio" value="no" x-model="answer">

        <div class="pt-4">Answer: <span x-text="answer"></span></div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="select-inputs"></a>
## 下拉选择输入


<a name="single-select"></a>
### 单个下拉选择

```alpine
<select x-model="color">
    <option>Red</option>
    <option>Orange</option>
    <option>Yellow</option>
</select>

Color: <span x-text="color"></span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ color: '' }">
        <select x-model="color">
            <option>Red</option>
            <option>Orange</option>
            <option>Yellow</option>
        </select>

        <div class="pt-4">Color: <span x-text="color"></span></div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="single-select-with-placeholder"></a>
### 带占位符的单个下拉选择

```alpine
<select x-model="color">
    <option value="" disabled>Select A Color</option>
    <option>Red</option>
    <option>Orange</option>
    <option>Yellow</option>
</select>

Color: <span x-text="color"></span>
```


<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ color: '' }">
        <select x-model="color">
            <option value="" disabled>Select A Color</option>
            <option>Red</option>
            <option>Orange</option>
            <option>Yellow</option>
        </select>

        <div class="pt-4">Color: <span x-text="color"></span></div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="multiple-select"></a>
### 多选下拉选择

```alpine
<select x-model="color" multiple>
    <option>Red</option>
    <option>Orange</option>
    <option>Yellow</option>
</select>

Colors: <span x-text="color"></span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ color: '' }">
        <select x-model="color" multiple>
            <option>Red</option>
            <option>Orange</option>
            <option>Yellow</option>
        </select>

        <div class="pt-4">Color: <span x-text="color"></span></div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="dynamically-populated-select-options"></a>
### 动态填充的下拉选择选项

```alpine
<select x-model="color">
    <template x-for="color in ['Red', 'Orange', 'Yellow']">
        <option x-text="color"></option>
    </template>
</select>

Color: <span x-text="color"></span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ color: '' }">
        <select x-model="color">
            <template x-for="color in ['Red', 'Orange', 'Yellow']">
                <option x-text="color"></option>
            </template>
        </select>

        <div class="pt-4">Color: <span x-text="color"></span></div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="range-inputs"></a>
## 范围（滑块）输入

```alpine
<input type="range" x-model="range" min="0" max="1" step="0.1">

<span x-text="range"></span>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ range: 0.5 }">
        <input type="range" x-model="range" min="0" max="1" step="0.1">

        <div class="pt-4" x-text="range"></div>
    </div>
</div>
<!-- END_VERBATIM -->


<a name="modifiers"></a>
## 修饰符

<a name="lazy"></a>
### `.lazy`

对于文本输入，默认情况下，`x-model` 会在每次按键时更新属性。通过添加 `.lazy` 修饰符，你可以强制 `x-model` 输入仅在用户将焦点移开输入元素时才更新属性。

这对于实时表单验证等场景非常有用，例如你可能希望在用户按 Tab 键离开某个字段之前，不显示输入验证错误。

```alpine
<input type="text" x-model.lazy="username">
<span x-show="username.length > 20">The username is too long.</span>
```

<a name="change"></a>
### `.change`

`.change` 仅在输入失去焦点且其值已发生变化时（即原生的 `change` 事件）同步数据。它在功能上等同于 `.lazy`。

```alpine
<input type="text" x-model.change="username">
```

<a name="blur"></a>
### `.blur`

`.blur` 在输入失去焦点时同步数据，无论值是否发生变化。

```alpine
<input type="text" x-model.blur="email">
```

<a name="enter"></a>
### `.enter`

`.enter` 在用户按下 Enter 键时同步数据。这对于搜索字段非常有用，因为你可能只想在用户明确提交时才触发某个操作。

```alpine
<input type="text" x-model.enter="search">
```

> 注意：`.enter` 不会阻止默认行为。如果输入位于表单内，表单仍然会提交。

<a name="combining-event-modifiers"></a>
### 组合事件修饰符

`.change`、`.blur` 和 `.enter` 修饰符可以组合使用，以便在多个事件上同步。当你希望让用户在提交数据的方式上拥有灵活性时，这非常有用。

```alpine
<!-- Sync on blur OR enter -->
<input type="text" x-model.blur.enter="search" placeholder="Press Enter or click away">

<!-- Sync on change, blur, OR enter -->
<input type="text" x-model.change.blur.enter="message">
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ search: '' }">
        <input type="text" x-model.blur.enter="search" placeholder="Press Enter or click away">

        <div class="pt-4">Search: <span x-text="search"></span></div>
    </div>
</div>
<!-- END_VERBATIM -->

<a name="number"></a>
### `.number`

默认情况下，通过 `x-model` 存储在属性中的任何数据都会以字符串形式存储。要强制 Alpine 以 JavaScript 数字的形式存储该值，请添加 `.number` 修饰符。

```alpine
<input type="text" x-model.number="age">
<span x-text="typeof age"></span>
```

<a name="boolean"></a>
### `.boolean`

默认情况下，通过 `x-model` 存储在属性中的任何数据都会以字符串形式存储。要强制 Alpine 以 JavaScript 布尔值的形式存储该值，请添加 `.boolean` 修饰符。整数（1/0）和字符串（true/false）都是有效的布尔值。

```alpine
<select x-model.boolean="isActive">
    <option value="true">Yes</option>
    <option value="false">No</option>
</select>
<span x-text="typeof isActive"></span>
```

<a name="debounce"></a>
### `.debounce`

通过为 `x-model` 添加 `.debounce`，你可以轻松地对绑定输入的更新进行防抖处理。

这对于实时搜索输入等场景非常有用，这类输入会在搜索属性每次变化时从服务器获取新数据。

```alpine
<input type="text" x-model.debounce="search">
```

默认的防抖时间为 250 毫秒，你可以像下面这样通过添加时间修饰符轻松自定义。

```alpine
<input type="text" x-model.debounce.500ms="search">
```

<a name="throttle"></a>
### `.throttle`

与 `.debounce` 类似，你可以将 `x-model` 触发的属性更新限制为仅按指定间隔更新。

<input type="text" x-model.throttle="search">

默认的节流间隔为 250 毫秒，你可以像下面这样通过添加时间修饰符轻松自定义。

```alpine
<input type="text" x-model.throttle.500ms="search">
```

<a name="fill"></a>
### `.fill`

默认情况下，如果输入带有 value 属性，Alpine 会忽略它，转而将输入的值设置为使用 `x-model` 绑定的属性的值。

但如果绑定的属性为空，你可以通过添加 `.fill` 修饰符，利用输入的 value 属性来填充该属性。

<div x-data="{ message: null }">
  <input type="text" x-model.fill="message" value="This is the default message.">
</div>

<a name="programmatic access"></a>
## 编程式访问

Alpine 暴露了用于获取和设置通过 `x-model` 绑定的属性的底层工具。这对于可能需要覆盖默认 x-model 行为的复杂 Alpine 工具，或希望允许在非输入元素上使用 `x-model` 的情况非常有用。

你可以通过 `x-model` 所绑定元素上的 `_x_model` 属性来访问这些工具。`_x_model` 提供了两个方法用于获取和设置绑定的属性：

* `el._x_model.get()`（返回绑定属性的值）
* `el._x_model.set()`（设置绑定属性的值）

```alpine
<div x-data="{ username: 'calebporzio' }">
    <div x-ref="div" x-model="username"></div>

    <button @click="$refs.div._x_model.set('phantomatrix')">
        Change username to: 'phantomatrix'
    </button>

    <span x-text="$refs.div._x_model.get()"></span>
</div>
```

<!-- START_VERBATIM -->
<div class="demo">
    <div x-data="{ username: 'calebporzio' }">
        <div x-ref="div" x-model="username"></div>

        <button @click="$refs.div._x_model.set('phantomatrix')">
            Change username to: 'phantomatrix'
        </button>

        <span x-text="$refs.div._x_model.get()"></span>
    </div>
</div>
<!-- END_VERBATIM -->
