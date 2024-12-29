const e={docsHtml:`<p>下拉选择组件在一个下拉菜单中提供多种选项，方便用户快速选择所需内容。</p>
<p>本页面主要介绍 <code>&lt;mdui-select&gt;</code> 组件的使用方法，关于下拉菜单项的用法，请参见 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/menu#menu-item-api"><code>&lt;mdui-menu-item&gt;</code></a>。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/select.js&#39;;
import &#39;mdui/components/menu-item.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { Select } from &#39;mdui/components/select.js&#39;;
import type { MenuItem } from &#39;mdui/components/menu-item.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-select value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-variant">
                  <a href="#example-variant">形状</a>
                </h3>
<p>通过 <code>variant</code> 属性设置下拉选择的形状。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select variant=&quot;filled&quot; value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;

&lt;mdui-select variant=&quot;outlined&quot; value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<h3 id="example-multiple">
                  <a href="#example-multiple">多选支持</a>
                </h3>
<p>下拉选择默认为单选，<code>&lt;mdui-select&gt;</code> 组件的 <code>value</code> 值即为当前选中的 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/menu#menu-item-api"><code>&lt;mdui-menu-item&gt;</code></a> 的 <code>value</code> 值。</p>
<p>添加 <code>multiple</code> 属性可以使下拉选择支持多选。此时 <code>&lt;mdui-select&gt;</code> 的 <code>value</code> 值为当前选中的 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/menu#menu-item-api"><code>&lt;mdui-menu-item&gt;</code></a> 的 <code>value</code> 的值组成的数组。</p>
<p>注意：在支持多选时，<code>&lt;mdui-select&gt;</code> 的 <code>value</code> 值为数组，只能通过 JavaScript 属性来读取和设置该值。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select multiple class=&quot;example-multiple&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-3&quot;&gt;Item 3&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;

&lt;script&gt;
  // 默认选中 item-1 和 item-2
  const select = document.querySelector(&quot;.example-multiple&quot;);
  select.value = [&quot;item-1&quot;, &quot;item-2&quot;];
&lt;/script&gt;
</code></pre>
<h3 id="example-helper-text">
                  <a href="#example-helper-text">辅助文本</a>
                </h3>
<p>使用 <code>label</code> 属性设置下拉选择上方的标签文本。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select label=&quot;Text Field&quot; value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<p>使用 <code>placeholder</code> 属性设置未选中值时的占位文本。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select placeholder=&quot;Placeholder&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<p>使用 <code>helper</code> 属性设置下拉选择底部的帮助文本。也可以使用 <code>helper</code> slot 来设置帮助文本。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select helper=&quot;Supporting text&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;

&lt;mdui-select&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;span slot=&quot;helper&quot; style=&quot;color: blue&quot;&gt;Supporting text&lt;/span&gt;
&lt;/mdui-select&gt;
</code></pre>
<h3 id="example-readonly">
                  <a href="#example-readonly">只读模式</a>
                </h3>
<p>通过添加 <code>readonly</code> 属性，可以将下拉选择设置为只读模式。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select readonly value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">禁用模式</a>
                </h3>
<p>通过添加 <code>disabled</code> 属性，可以禁用下拉选择。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select disabled value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<h3 id="example-clearable">
                  <a href="#example-clearable">可清空</a>
                </h3>
<p>添加 <code>clearable</code> 属性后，当下拉选择有值时，右侧会出现一个清空按钮。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select clearable value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<p>也可以通过 <code>clear</code> slot 自定义清空按钮。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select clearable value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;mdui-icon slot=&quot;clear&quot; name=&quot;delete&quot;&gt;&lt;/mdui-icon&gt;
&lt;/mdui-select&gt;
</code></pre>
<h3 id="example-placement">
                  <a href="#example-placement">下拉菜单位置</a>
                </h3>
<p>通过 <code>placement</code> 属性，你可以设置下拉菜单的位置。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select placement=&quot;top&quot; value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<h3 id="example-end-aligned">
                  <a href="#example-end-aligned">文本右对齐</a>
                </h3>
<p>添加 <code>end-aligned</code> 属性，可以使文本右对齐。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select end-aligned value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
<h3 id="example-prefix-suffix">
                  <a href="#example-prefix-suffix">前后文本及图标</a>
                </h3>
<p>通过设置 <code>icon</code> 和 <code>end-icon</code> 属性，可以在下拉选择的左侧和右侧添加 Material Icons 图标。你也可以通过 <code>icon</code> 和 <code>end-icon</code> slot 在下拉选择的左侧和右侧添加元素。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select value=&quot;item-1&quot; icon=&quot;search&quot; end-icon=&quot;mic&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;

&lt;br/&gt;&lt;br/&gt;

&lt;mdui-select value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;mdui-button-icon slot=&quot;icon&quot; icon=&quot;search&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;mdui-button-icon slot=&quot;end-icon&quot; icon=&quot;mic&quot;&gt;&lt;/mdui-button-icon&gt;
&lt;/mdui-select&gt;
</code></pre>
<p>通过设置 <code>prefix</code> 和 <code>suffix</code> 属性，可以在下拉选择的左侧和右侧添加文本。也可以通过 <code>prefix</code> 和 <code>suffix</code> slot 在下拉选择的左侧和右侧添加文本元素。这些文本只有在下拉选择聚焦或有值时才会显示。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select value=&quot;item-1&quot; prefix=&quot;$&quot; suffix=&quot;/100&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;

&lt;br/&gt;&lt;br/&gt;

&lt;mdui-select value=&quot;item-1&quot;&gt;
  &lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
  &lt;span slot=&quot;prefix&quot; style=&quot;color: blue&quot;&gt;$&lt;/span&gt;
  &lt;span slot=&quot;suffix&quot; style=&quot;color: blue&quot;&gt;/100&lt;/span&gt;
&lt;/mdui-select&gt;
</code></pre>
`,elements:[{name:"Select",tagName:"mdui-select",summary:`<p>选择框组件。需配合 <code>&lt;mdui-menu-item&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-select&gt;
..&lt;mdui-menu-item value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-menu-item&gt;
..&lt;mdui-menu-item value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;
</code></pre>
`,attributes:[{attributeName:"variant",propertyName:"variant",reflect:!0,description:`<p>选择框的样式。可选值包括：</p>
<ul>
<li><code>filled</code>：带背景色的选择框，视觉效果较强</li>
<li><code>outlined</code>：带边框的选择框，视觉效果较弱</li>
</ul>
`,type:"'filled' | 'outlined'",enum:["'filled'","'outlined'"],default:"'filled'"},{attributeName:"multiple",propertyName:"multiple",reflect:!0,description:`<p>是否支持多选</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"name",propertyName:"name",reflect:!0,description:`<p>选择框的名称，将与表单数据一起提交</p>
`,type:"string",enum:[],default:"''"},{attributeName:"value",propertyName:"value",reflect:!1,description:`<p>选择框的值，将与表单数据一起提交。</p>
<p>如果未指定 <code>multiple</code> 属性，该值为字符串；如果指定了 <code>multiple</code> 属性，该值为字符串数组。HTML 属性只能设置字符串值；如果需要设置数组值，请通过 JavaScript 属性设置。</p>
`,type:"string | string[]",enum:["string","string[]"],default:"''"},{propertyName:"defaultValue",reflect:!1,description:`<p>默认选中的值。在重置表单时，将重置为该默认值。该属性只能通过 JavaScript 属性设置</p>
`,type:"string | string[]",enum:["string","string[]"],default:"''"},{attributeName:"label",propertyName:"label",reflect:!0,description:`<p>标签文本</p>
`,type:"string",enum:[]},{attributeName:"placeholder",propertyName:"placeholder",reflect:!0,description:`<p>占位符文本</p>
`,type:"string",enum:[]},{attributeName:"helper",propertyName:"helper",reflect:!0,description:`<p>选择框底部的帮助文本。也可以通过 <code>slot=&quot;helper&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"clearable",propertyName:"clearable",reflect:!0,description:`<p>是否可以清空选择框</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"clear-icon",propertyName:"clearIcon",reflect:!0,description:`<p>当选择框可清空时，显示在选择框右侧的清空按钮的 Material Icons 图标名。也可以通过 <code>slot=&quot;clear-icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"placement",propertyName:"placement",reflect:!0,description:`<p>选择框的位置。可选值包括：</p>
<ul>
<li><code>auto</code>：自动判断位置</li>
<li><code>bottom</code>：位于下方</li>
<li><code>top</code>：位于上方</li>
</ul>
`,type:"'auto' | 'bottom' | 'top'",enum:["'auto'","'bottom'","'top'"],default:"'auto'"},{attributeName:"end-aligned",propertyName:"endAligned",reflect:!0,description:`<p>文本是否右对齐</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"prefix",propertyName:"prefix",reflect:!0,description:`<p>选择框的前缀文本。仅在聚焦状态，或选择框有值时才会显示。也可以通过 <code>slot=&quot;prefix&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"suffix",propertyName:"suffix",reflect:!0,description:`<p>选择框的后缀文本。仅在聚焦状态，或选择框有值时才会显示。也可以通过 <code>slot=&quot;suffix&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>选择框的前缀图标的 Material Icons 图标名。也可以通过 <code>slot=&quot;icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"end-icon",propertyName:"endIcon",reflect:!0,description:`<p>选择框的后缀图标的 Material Icons 图标名。也可以通过 <code>slot=&quot;end-icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"error-icon",propertyName:"errorIcon",reflect:!0,description:`<p>表单字段验证失败时，显示在选择框右侧的 Material Icons 图标名。也可以通过 <code>slot=&quot;error-icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"form",propertyName:"form",reflect:!0,description:`<p>关联的 <code>&lt;form&gt;</code> 元素。此属性值应为同一页面中的一个 <code>&lt;form&gt;</code> 元素的 <code>id</code>。</p>
<p>如果未指定此属性，则该元素必须是 <code>&lt;form&gt;</code> 元素的子元素。通过此属性，你可以将元素放置在页面的任何位置，而不仅仅是 <code>&lt;form&gt;</code> 元素的子元素。</p>
`,type:"string",enum:[]},{attributeName:"readonly",propertyName:"readonly",reflect:!0,description:`<p>是否为只读状态</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>是否为禁用状态</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"required",propertyName:"required",reflect:!0,description:`<p>提交表单时，是否必须填写该字段</p>
`,type:"boolean",enum:[],default:"false"},{propertyName:"validity",reflect:!1,description:`<p>表单验证状态对象，具体参见 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ValidityState" target="_blank" rel="noopener nofollow"><code>ValidityState</code></a></p>
`,type:"ValidityState",enum:[]},{propertyName:"validationMessage",reflect:!1,description:`<p>如果表单验证未通过，此属性将包含提示信息。如果验证通过，此属性将为空字符串</p>
`,type:"string",enum:[]},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>是否在页面加载完成后自动获取焦点</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"tabindex",propertyName:"tabIndex",reflect:!1,description:`<p>元素在使用 Tab 键切换焦点时的顺序</p>
`,type:"number",enum:[]}],methods:[{name:"checkValidity",description:`<p>检查表单字段是否通过验证。如果未通过，返回 <code>false</code> 并触发 <code>invalid</code> 事件；如果通过，返回 <code>true</code></p>
`,parameters:[],return:{type:"boolean"}},{name:"reportValidity",description:`<p>检查表单字段是否通过验证。如果未通过，返回 <code>false</code> 并触发 <code>invalid</code> 事件；如果通过，返回 <code>true</code>。</p>
<p>如果验证未通过，还会在组件上显示验证失败的提示。</p>
`,parameters:[],return:{type:"boolean"}},{name:"setCustomValidity",description:`<p>设置自定义的错误提示文本。只要这个文本不为空，就表示字段未通过验证</p>
`,parameters:[{name:"message",type:"string"}],return:{type:"void"}},{name:"click",description:`<p>模拟鼠标点击元素</p>
`,parameters:[],return:{type:"void"}},{name:"focus",description:`<p>将焦点设置到当前元素。</p>
<p>可以传入一个对象作为参数，该对象的属性包括：</p>
<ul>
<li><code>preventScroll</code>：默认情况下，元素获取焦点后，页面会滚动以将该元素滚动到视图中。如果不希望页面滚动，可以将此属性设置为 <code>true</code>。</li>
</ul>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>移除当前元素的焦点</p>
`,parameters:[],return:{type:"void"}}],events:[{name:"focus",description:`<p>获得焦点时触发</p>
`},{name:"blur",description:`<p>失去焦点时触发</p>
`},{name:"change",description:`<p>选中的值变更时触发</p>
`},{name:"invalid",description:`<p>表单字段验证未通过时触发</p>
`},{name:"clear",description:`<p>在点击由 <code>clearable</code> 属性生成的清空按钮时触发。可以通过调用 <code>event.preventDefault()</code> 阻止清空选择框</p>
`}],slots:[{name:"",description:`<p><code>&lt;mdui-menu-item&gt;</code> 元素</p>
`},{name:"icon",description:`<p>左侧图标</p>
`},{name:"end-icon",description:`<p>右侧图标</p>
`},{name:"error-icon",description:`<p>验证失败状态的右侧图标</p>
`},{name:"prefix",description:`<p>左侧文本</p>
`},{name:"suffix",description:`<p>右侧文本</p>
`},{name:"clear-button",description:`<p>清空按钮</p>
`},{name:"clear-icon",description:`<p>清空按钮中的图标</p>
`},{name:"helper",description:`<p>底部的帮助文本</p>
`}],cssParts:[{name:"chips",description:`<p>多选时，放置选中值对应的 chip 的容器</p>
`},{name:"chip",description:`<p>多选时，每一个选中的值对应的 chip</p>
`},{name:"chip__button",description:`<p>chip 内部的 <code>&lt;button&gt;</code> 元素</p>
`},{name:"chip__label",description:`<p>chip 内部的文本</p>
`},{name:"chip__delete-icon",description:`<p>chip 内部的删除图标</p>
`},{name:"text-field",description:`<p>文本框，即 <a href="https://cdn.w3cbus.com/docs/2/components/text-field"><code>&lt;mdui-text-field&gt;</code></a> 元素</p>
`},{name:"text-field__container",description:`<p>text-field 内部的文本框容器</p>
`},{name:"text-field__icon",description:`<p>text-field 内部的左侧图标</p>
`},{name:"text-field__end-icon",description:`<p>text-field 内部的右侧图标</p>
`},{name:"text-field__error-icon",description:`<p>text-field 内部的验证失败状态的右侧图标</p>
`},{name:"text-field__prefix",description:`<p>text-field 内部的左侧文本</p>
`},{name:"text-field__suffix",description:`<p>text-field 内部的右侧文本</p>
`},{name:"text-field__label",description:`<p>text-field 内部的标签文本</p>
`},{name:"text-field__input",description:`<p>text-field 内部的 <code>&lt;input&gt;</code> 元素</p>
`},{name:"text-field__clear-button",description:`<p>text-field 内部的清空按钮</p>
`},{name:"text-field__clear-icon",description:`<p>text-field 内部的清空按钮中的图标</p>
`},{name:"text-field__supporting",description:`<p>text-field 内部的底部辅助信息容器，包括 helper 和 error</p>
`},{name:"text-field__helper",description:`<p>text-field 内部的底部帮助文本</p>
`},{name:"text-field__error",description:`<p>text-field 内部的底部错误描述文本</p>
`},{name:"menu",description:`<p>下拉菜单，即 <a href="https://cdn.w3cbus.com/docs/2/components/menu"><code>&lt;mdui-menu&gt;</code></a> 元素</p>
`}],cssProperties:[]}]};export{e as default};
