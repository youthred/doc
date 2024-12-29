const e={docsHtml:`<p>文本框组件允许用户在页面中输入文本，通常用于表单和对话框。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/text-field.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { TextField } from &#39;mdui/components/text-field.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-text-field label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-variant">
                  <a href="#example-variant">形状</a>
                </h3>
<p>通过 <code>variant</code> 属性设置文本框的形状。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field variant=&quot;filled&quot; label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;

&lt;br/&gt;&lt;br/&gt;

&lt;mdui-text-field variant=&quot;outlined&quot; label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-helper-text">
                  <a href="#example-helper-text">辅助文本</a>
                </h3>
<p>通过 <code>label</code> 属性设置文本框上方的标签文本。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<p>通过 <code>placeholder</code> 属性设置无值时的占位文本。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field label=&quot;Text Field&quot; placeholder=&quot;Placeholder&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<p>通过 <code>helper</code> 属性设置文本框底部的帮助文本。也可以使用 <code>helper</code> slot 来设置帮助文本。添加 <code>helper-on-focus</code> 属性则仅在输入框聚焦时显示帮助文本。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field label=&quot;Text Field&quot; helper=&quot;Supporting text&quot;&gt;&lt;/mdui-text-field&gt;

&lt;mdui-text-field label=&quot;Text Field&quot;&gt;
  &lt;span slot=&quot;helper&quot; style=&quot;color: blue&quot;&gt;Supporting text&lt;/span&gt;
&lt;/mdui-text-field&gt;

&lt;mdui-text-field label=&quot;Text Field&quot; helper=&quot;Supporting text&quot; helper-on-focus&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-clearable">
                  <a href="#example-clearable">可清空</a>
                </h3>
<p>添加 <code>clearable</code> 属性后，当文本框有值时，会在右侧添加清空按钮。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field clearable label=&quot;Text Field&quot; value=&quot;Input Text&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-end-aligned">
                  <a href="#example-end-aligned">文本右对齐</a>
                </h3>
<p>添加 <code>end-aligned</code> 属性可以使文本右对齐。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field end-aligned label=&quot;Text Field&quot; value=&quot;Input Text&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-prefix-suffix">
                  <a href="#example-prefix-suffix">前后文本及图标</a>
                </h3>
<p>通过设置 <code>icon</code> 和 <code>end-icon</code> 属性，可以在文本框的左侧和右侧添加 Material Icons 图标。也可以通过 <code>icon</code> 和 <code>end-icon</code> slot 在文本框的左侧和右侧添加元素。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field icon=&quot;search&quot; end-icon=&quot;mic&quot; label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;

&lt;br/&gt;&lt;br/&gt;

&lt;mdui-text-field label=&quot;Text Field&quot;&gt;
  &lt;mdui-button-icon slot=&quot;icon&quot; icon=&quot;search&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;mdui-button-icon slot=&quot;end-icon&quot; icon=&quot;mic&quot;&gt;&lt;/mdui-button-icon&gt;
&lt;/mdui-text-field&gt;
</code></pre>
<p>通过设置 <code>prefix</code> 和 <code>suffix</code> 属性，可以在文本框的左侧和右侧添加文本。也可以通过 <code>prefix</code> 和 <code>suffix</code> slot 在文本框的左侧和右侧添加文本元素。这些文本只有在文本框聚焦或有值时才会显示。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field prefix=&quot;$&quot; suffix=&quot;/100&quot; label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;

&lt;br/&gt;&lt;br/&gt;

&lt;mdui-text-field label=&quot;Text Field&quot;&gt;
  &lt;span slot=&quot;prefix&quot; style=&quot;color: blue&quot;&gt;$&lt;/span&gt;
  &lt;span slot=&quot;suffix&quot; style=&quot;color: blue&quot;&gt;/100&lt;/span&gt;
&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-readonly">
                  <a href="#example-readonly">只读模式</a>
                </h3>
<p>通过添加 <code>readonly</code> 属性，可以将文本框设置为只读模式。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field readonly label=&quot;Text Field&quot; value=&quot;Input Text&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">禁用状态</a>
                </h3>
<p>通过添加 <code>disabled</code> 属性，可以禁用文本框。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field disabled label=&quot;Text Field&quot; value=&quot;Input Text&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-rows">
                  <a href="#example-rows">多行文本框</a>
                </h3>
<p>通过 <code>rows</code> 属性，可以设置多行文本框的行数。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field rows=&quot;3&quot; label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<p>也可以添加 <code>autosize</code> 属性，使文本框能根据输入内容的长度自动调整高度。通过 <code>min-rows</code> 和 <code>max-rows</code> 属性，可以指定自动调整高度时的最小行数和最大行数。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field autosize label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;

&lt;br/&gt;&lt;br/&gt;

&lt;mdui-text-field autosize min-rows=&quot;2&quot; max-rows=&quot;5&quot; label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-counter">
                  <a href="#example-counter">字数统计</a>
                </h3>
<p>当通过 <code>maxlength</code> 属性设置了最大字数时，可以添加 <code>counter</code> 属性在文本框下方显示字数统计。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field maxlength=&quot;20&quot; counter label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="example-password">
                  <a href="#example-password">密码框</a>
                </h3>
<p>当 <code>type=&quot;password&quot;</code> 时，添加 <code>toggle-password</code> 属性可以在文本框右侧添加切换密码可见性的按钮。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-text-field type=&quot;password&quot; toggle-password label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
`,elements:[{name:"TextField",tagName:"mdui-text-field",summary:`<p>文本框组件</p>
<pre><code class="language-html">&lt;mdui-text-field label=&quot;Text Field&quot;&gt;&lt;/mdui-text-field&gt;
</code></pre>
`,attributes:[{attributeName:"variant",propertyName:"variant",reflect:!0,description:`<p>文本框的形状。默认为 <code>filled</code>。可选值包括：</p>
<ul>
<li><code>filled</code>：带背景色的文本框，视觉效果较强</li>
<li><code>outlined</code>：带边框的文本框，视觉效果较弱</li>
</ul>
`,type:"'filled' | 'outlined'",enum:["'filled'","'outlined'"],default:"'filled'"},{attributeName:"type",propertyName:"type",reflect:!0,description:`<p>文本框输入类型。默认为 <code>text</code>。可选值包括：</p>
<ul>
<li><code>text</code>：默认值。文本字段</li>
<li><code>number</code>：只能输入数字。拥有动态键盘的设备上会显示数字键盘</li>
<li><code>password</code>：用于输入密码，其值会被遮盖</li>
<li><code>url</code>：用于输入 URL，会验证 URL 格式。在支持动态键盘的设备上有相应的键盘</li>
<li><code>email</code>：用于输入邮箱地址，会验证邮箱格式。在支持动态键盘的设备上有相应的键盘</li>
<li><code>search</code>：用于搜索框。拥有动态键盘的设备上的回车图标会变成搜索图标</li>
<li><code>tel</code>：用于输入电话号码。拥有动态键盘的设备上会显示电话数字键盘</li>
<li><code>hidden</code>：隐藏该控件，但其值仍会提交到服务器</li>
<li><code>date</code>：输入日期的控件（年、月、日，不包括时间）。在支持的浏览器激活时打开日期选择器或年月日的数字滚轮</li>
<li><code>datetime-local</code>：输入日期和时间的控件，不包括时区。在支持的浏览器激活时打开日期选择器或年月日的数字滚轮</li>
<li><code>month</code>：输入年和月的控件，没有时区</li>
<li><code>time</code>：用于输入时间的控件，不包括时区</li>
<li><code>week</code>：用于输入以年和周数组成的日期，不带时区</li>
</ul>
`,type:"'text' | 'number' | 'password' | 'url' | 'email' | 'search' | 'tel' | 'hidden' | 'date' | 'datetime-local' | 'month' | 'time' | 'week'",enum:["'text'","'number'","'password'","'url'","'email'","'search'","'tel'","'hidden'","'date'","'datetime-local'","'month'","'time'","'week'"],default:"'text'"},{attributeName:"name",propertyName:"name",reflect:!0,description:`<p>文本框名称，将与表单数据一起提交</p>
`,type:"string",enum:[],default:"''"},{attributeName:"value",propertyName:"value",reflect:!1,description:`<p>文本框的值，将与表单数据一起提交</p>
`,type:"string",enum:[],default:"''"},{propertyName:"defaultValue",reflect:!1,description:`<p>默认值。在重置表单时，将重置为该默认值。该属性只能通过 JavaScript 属性设置</p>
`,type:"string",enum:[],default:"''"},{attributeName:"label",propertyName:"label",reflect:!0,description:`<p>标签文本</p>
`,type:"string",enum:[]},{attributeName:"placeholder",propertyName:"placeholder",reflect:!0,description:`<p>占位符文本</p>
`,type:"string",enum:[]},{attributeName:"helper",propertyName:"helper",reflect:!0,description:`<p>文本框底部的帮助文本。也可以通过 <code>slot=&quot;helper&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"helper-on-focus",propertyName:"helperOnFocus",reflect:!0,description:`<p>是否仅在获得焦点时，显示底部的帮助文本</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"clearable",propertyName:"clearable",reflect:!0,description:`<p>是否可清空文本框内容</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"clear-icon",propertyName:"clearIcon",reflect:!0,description:`<p>可清空文本框时，显示在文本框右侧的清空按钮的 Material Icons 图标名。也可以通过 <code>slot=&quot;clear-icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"end-aligned",propertyName:"endAligned",reflect:!0,description:`<p>是否将文本右对齐</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"prefix",propertyName:"prefix",reflect:!0,description:`<p>文本框的前缀文本。只在文本框聚焦或有值时显示。也可以通过 <code>slot=&quot;prefix&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"suffix",propertyName:"suffix",reflect:!0,description:`<p>文本框的后缀文本。只在文本框聚焦或有值时显示。也可以通过 <code>slot=&quot;suffix&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>文本框的前缀图标的 Material Icons 图标名。也可以通过 <code>slot=&quot;icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"end-icon",propertyName:"endIcon",reflect:!0,description:`<p>文本框的后缀图标的 Material Icons 图标名。也可以通过 <code>slot=&quot;end-icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"error-icon",propertyName:"errorIcon",reflect:!0,description:`<p>表单字段验证失败时，显示在文本框右侧的 Material Icons 图标名。也可以通过 <code>slot=&quot;error-icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"form",propertyName:"form",reflect:!0,description:`<p>关联的 <code>&lt;form&gt;</code> 元素。此属性值应为同一页面中的一个 <code>&lt;form&gt;</code> 元素的 <code>id</code>。</p>
<p>如果未指定此属性，则该元素必须是 <code>&lt;form&gt;</code> 元素的子元素。通过此属性，你可以将元素放置在页面的任何位置，而不仅仅是 <code>&lt;form&gt;</code> 元素的子元素。</p>
`,type:"string",enum:[]},{attributeName:"readonly",propertyName:"readonly",reflect:!0,description:`<p>是否为只读模式</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>是否禁用输入框</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"required",propertyName:"required",reflect:!0,description:`<p>提交表单时，是否必须填写该字段</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"rows",propertyName:"rows",reflect:!0,description:`<p>文本框的固定显示行数</p>
`,type:"number",enum:[]},{attributeName:"autosize",propertyName:"autosize",reflect:!0,description:`<p>是否根据输入内容自动调整文本框高度</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"min-rows",propertyName:"minRows",reflect:!0,description:`<p><code>autosize</code> 为 <code>true</code> 时，文本框的最小行数</p>
`,type:"number",enum:[]},{attributeName:"max-rows",propertyName:"maxRows",reflect:!0,description:`<p><code>autosize</code> 为 <code>true</code> 时，文本框的最大行数</p>
`,type:"number",enum:[]},{attributeName:"minlength",propertyName:"minlength",reflect:!0,description:`<p>允许输入的最小字符数</p>
`,type:"number",enum:[]},{attributeName:"maxlength",propertyName:"maxlength",reflect:!0,description:`<p>允许输入的最大字符数</p>
`,type:"number",enum:[]},{attributeName:"counter",propertyName:"counter",reflect:!0,description:`<p>是否显示字数统计，只在 <code>maxlength</code> 被指定时有效</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"min",propertyName:"min",reflect:!0,description:`<p>当 <code>type</code> 为 <code>number</code> 时，允许输入的最小数值</p>
`,type:"number",enum:[]},{attributeName:"max",propertyName:"max",reflect:!0,description:`<p>当 <code>type</code> 为 <code>number</code> 时，允许输入的最大数值</p>
`,type:"number",enum:[]},{attributeName:"step",propertyName:"step",reflect:!0,description:`<p><code>type</code> 为 <code>number</code> 时，数值增减的步长</p>
`,type:"number",enum:[]},{attributeName:"pattern",propertyName:"pattern",reflect:!0,description:`<p>用于表单验证的正则表达式</p>
`,type:"string",enum:[]},{attributeName:"toggle-password",propertyName:"togglePassword",reflect:!0,description:`<p><code>type</code> 为 <code>password</code> 时，设置此属性会添加一个切换按钮，用于在明文和密文之间切换</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"show-password-icon",propertyName:"showPasswordIcon",reflect:!0,description:`<p>密码切换按钮的 Material Icons 图标，当密码为明文时显示。也可以通过 <code>slot=&quot;show-password-icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"hide-password-icon",propertyName:"hidePasswordIcon",reflect:!0,description:`<p>密码切换按钮的 Material Icons 图标，当密码为密文时显示。也可以通过 <code>slot=&quot;hide-password-icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"autocapitalize",propertyName:"autocapitalize",reflect:!0,description:`<p>iOS 的非标准属性，用于控制文本首字母是否自动大写。在 iOS5 及以后的版本上有效。可选值包括：</p>
<ul>
<li><code>none</code>：禁用首字母大写</li>
<li><code>sentences</code>：句子首字母大写</li>
<li><code>words</code>：单词首字母大写</li>
<li><code>characters</code>：所有字母大写</li>
</ul>
`,type:"'none' | 'sentences' | 'words' | 'characters'",enum:["'none'","'sentences'","'words'","'characters'"]},{attributeName:"autocorrect",propertyName:"autocorrect",reflect:!0,description:`<p><code>input</code> 元素的 <code>autocorrect</code> 属性</p>
`,type:"string",enum:[]},{attributeName:"autocomplete",propertyName:"autocomplete",reflect:!0,description:`<p><code>input</code> 元素的 <code>autocomplete</code> 属性</p>
`,type:"string",enum:[]},{attributeName:"enterkeyhint",propertyName:"enterkeyhint",reflect:!0,description:`<p><code>input</code> 元素的 <code>enterkeyhint</code> 属性，用于定制虚拟键盘上的 Enter 键的显示文本或图标。具体显示效果取决于用户使用的设备和语言。可选值包括：</p>
<ul>
<li><code>enter</code>：插入新行</li>
<li><code>done</code>：完成输入，关闭虚拟键盘</li>
<li><code>go</code>：导航到输入文本的目标</li>
<li><code>next</code>：移动到下一个输入项</li>
<li><code>previous</code>：移动到上一个输入项</li>
<li><code>search</code>：导航到搜索结果</li>
<li><code>send</code>：发送文本信息</li>
</ul>
`,type:"'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'",enum:["'enter'","'done'","'go'","'next'","'previous'","'search'","'send'"]},{attributeName:"spellcheck",propertyName:"spellcheck",reflect:!0,description:`<p>是否启用拼写检查</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"inputmode",propertyName:"inputmode",reflect:!0,description:`<p><code>input</code> 元素的 <code>inputmode</code> 属性，用于定制虚拟键盘的类型。可选值包括：</p>
<ul>
<li><code>none</code>：无虚拟键盘。在需要实现自己的键盘输入控件时很有用</li>
<li><code>text</code>：标准文本输入键盘</li>
<li><code>decimal</code>：小数输入键盘，除了数字之外可能会有小数点 <code>.</code> 或者千分符逗号 <code>,</code></li>
<li><code>numeric</code>：显示 0-9 的数字键盘</li>
<li><code>tel</code>：手机数字键盘，包含 0-9 数字、星号 <code>*</code> 或者井号 <code>#</code> 键</li>
<li><code>search</code>：为搜索输入优化的虚拟键盘，提交按钮通常会显示 <code>search</code> 或者 “搜索”</li>
<li><code>email</code>：为邮件地址输入优化的虚拟键盘，通常会有 <code>@ .</code> 等键</li>
<li><code>url</code>：为 URL 输入优化的虚拟键盘，通常会有 <code>. / #</code> 等键</li>
</ul>
`,type:"'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'",enum:["'none'","'text'","'decimal'","'numeric'","'tel'","'search'","'email'","'url'"]},{propertyName:"validity",reflect:!1,description:`<p>表单验证状态对象，具体参见 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ValidityState" target="_blank" rel="noopener nofollow"><code>ValidityState</code></a></p>
`,type:"ValidityState",enum:[]},{propertyName:"validationMessage",reflect:!1,description:`<p>如果表单验证未通过，此属性将包含提示信息。如果验证通过，此属性将为空字符串</p>
`,type:"string",enum:[]},{propertyName:"valueAsNumber",reflect:!1,description:`<p>获取当前值，并转换为 <code>number</code> 类型；或设置一个 <code>number</code> 类型的值。
如果值无法被转换为 <code>number</code> 类型，则会返回 <code>NaN</code>。</p>
`,type:"number",enum:[]},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>是否在页面加载完成后自动获取焦点</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"tabindex",propertyName:"tabIndex",reflect:!1,description:`<p>元素在使用 Tab 键切换焦点时的顺序</p>
`,type:"number",enum:[]}],methods:[{name:"select",description:`<p>选中文本框中的文本</p>
`,parameters:[],return:{type:"void"}},{name:"setSelectionRange",description:`<p>选中文本框中特定范围的内容</p>
`,parameters:[{name:"start",type:"number"},{name:"end",type:"number"},{name:"direction",type:"'forward' | 'backward' | 'none'"}],return:{type:"void"}},{name:"setRangeText",description:`<p>将文本框中特定范围的文本替换为新的文本</p>
`,parameters:[{name:"replacement",type:"string"},{name:"start",type:"number"},{name:"end",type:"number"},{name:"selectMode",type:"'select' | 'start' | 'end' | 'preserve'"}],return:{type:"void"}},{name:"checkValidity",description:`<p>检查表单字段是否通过验证。如果未通过，返回 <code>false</code> 并触发 <code>invalid</code> 事件；如果通过，返回 <code>true</code></p>
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
`},{name:"change",description:`<p>在文本框的值变更，且失去焦点时触发</p>
`},{name:"input",description:`<p>在文本框的值变更时触发</p>
`},{name:"invalid",description:`<p>表单字段验证不通过时触发</p>
`},{name:"clear",description:`<p>在点击由 <code>clearable</code> 属性生成的清空按钮时触发。可以通过调用 <code>event.preventDefault()</code> 阻止清空文本框</p>
`}],slots:[{name:"icon",description:`<p>左侧图标</p>
`},{name:"end-icon",description:`<p>右侧图标</p>
`},{name:"error-icon",description:`<p>验证失败状态的右侧图标</p>
`},{name:"prefix",description:`<p>左侧文本</p>
`},{name:"suffix",description:`<p>右侧文本</p>
`},{name:"clear-button",description:`<p>清空按钮</p>
`},{name:"clear-icon",description:`<p>清空按钮中的图标</p>
`},{name:"toggle-password-button",description:`<p>密码显示状态切换按钮</p>
`},{name:"show-password-icon",description:`<p>显示密码状态下，密码显示状态切换按钮中的图标</p>
`},{name:"hide-password-icon",description:`<p>隐藏密码状态下，密码显示状态切换按钮中的图标</p>
`},{name:"helper",description:`<p>底部的帮助文本</p>
`}],cssParts:[{name:"container",description:`<p>文本框容器</p>
`},{name:"icon",description:`<p>左侧图标</p>
`},{name:"end-icon",description:`<p>右侧图标</p>
`},{name:"error-icon",description:`<p>验证失败状态的右侧图标</p>
`},{name:"prefix",description:`<p>左侧文本</p>
`},{name:"suffix",description:`<p>右侧文本</p>
`},{name:"label",description:`<p>上方的标签文本</p>
`},{name:"input",description:`<p>内部的 <code>&lt;input&gt;</code> 或 <code>&lt;textarea&gt;</code> 元素</p>
`},{name:"clear-button",description:`<p>清空按钮</p>
`},{name:"clear-icon",description:`<p>清空按钮中的图标</p>
`},{name:"toggle-password-button",description:`<p>密码显示状态切换按钮</p>
`},{name:"show-password-icon",description:`<p>显示密码状态下，密码显示状态切换按钮中的图标</p>
`},{name:"hide-password-icon",description:`<p>隐藏密码状态下，密码显示状态切换按钮中的图标</p>
`},{name:"supporting",description:`<p>底部辅助信息容器，包括 helper、error、counter</p>
`},{name:"helper",description:`<p>底部的帮助文本</p>
`},{name:"error",description:`<p>底部的错误描述文本</p>
`},{name:"counter",description:`<p>底部右侧的字数统计</p>
`}],cssProperties:[]}]};export{e as default};
