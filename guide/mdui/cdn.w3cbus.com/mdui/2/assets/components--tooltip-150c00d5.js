const t={docsHtml:`<p>工具提示用于对特定元素提供补充文本提示或上下文信息，以便用户更好地理解该元素的功能或用途。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/tooltip.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { Tooltip } from &#39;mdui/components/tooltip.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-tooltip content=&quot;Plain tooltip&quot;&gt;
  &lt;mdui-button&gt;button&lt;/mdui-button&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-plain">
                  <a href="#example-plain">纯文本 tooltip</a>
                </h3>
<p>默认为纯文本 tooltip。可以通过 <code>content</code> 属性设置 tooltip 的内容。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tooltip content=&quot;Plain tooltip&quot;&gt;
  &lt;mdui-button&gt;button&lt;/mdui-button&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
<p>也可以通过 <code>content</code> slot 设置 tooltip 的内容。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tooltip&gt;
  &lt;mdui-button&gt;button&lt;/mdui-button&gt;
  &lt;div slot=&quot;content&quot;&gt;
    &lt;div style=&quot;font-size: 1.4em&quot;&gt;title&lt;/div&gt;
    &lt;div&gt;content&lt;/div&gt;
  &lt;/div&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
<h3 id="example-rich">
                  <a href="#example-rich">富文本 tooltip</a>
                </h3>
<p>设置 <code>variant</code> 属性为 <code>rich</code> 可以创建富文本 tooltip。可以通过 <code>headline</code> 属性设置 tooltip 的标题，<code>content</code> 属性设置 tooltip 的内容。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tooltip
  variant=&quot;rich&quot;
  headline=&quot;Rich tooltip&quot;
  content=&quot;Rich tooltips bring attention to a particular element of feature that warrants the user&#39;s focus. It supports multiple lines of informational text.&quot;
&gt;
  &lt;mdui-button&gt;button&lt;/mdui-button&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
<p>也可以通过 <code>headline</code>、<code>content</code> slot 设置 tooltip 的标题和内容。通过 <code>action</code> slot 设置 tooltip 的操作按钮。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tooltip variant=&quot;rich&quot;&gt;
  &lt;mdui-button&gt;button&lt;/mdui-button&gt;
  &lt;div slot=&quot;headline&quot;&gt;Rich tooltip&lt;/div&gt;
  &lt;div slot=&quot;content&quot;&gt;Rich tooltips bring attention to a particular element of feature that warrants the user&#39;s focus. It supports multiple lines of informational text.&lt;/div&gt;
  &lt;mdui-button slot=&quot;action&quot; variant=&quot;text&quot;&gt;Action&lt;/mdui-button&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
<h3 id="example-placement">
                  <a href="#example-placement">位置</a>
                </h3>
<p>通过 <code>placement</code> 属性可以设置 tooltip 的位置。</p>
<pre><code class="language-html,example,expandable">&lt;div class=&quot;example-placement&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;mdui-tooltip placement=&quot;top-left&quot; content=&quot;top-left&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;top-start&quot; content=&quot;top-start&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;top&quot; content=&quot;top&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;top-end&quot; content=&quot;top-end&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;top-right&quot; content=&quot;top-right&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;mdui-tooltip placement=&quot;left-start&quot; content=&quot;left-start&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;right-start&quot; content=&quot;right-start&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;mdui-tooltip placement=&quot;left&quot; content=&quot;left&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;right&quot; content=&quot;right&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;mdui-tooltip placement=&quot;left-end&quot; content=&quot;left-end&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;right-end&quot; content=&quot;right-end&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;mdui-tooltip placement=&quot;bottom-left&quot; content=&quot;bottom-left&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;bottom-start&quot; content=&quot;bottom-start&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;bottom&quot; content=&quot;bottom&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;bottom-end&quot; content=&quot;bottom-end&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
    &lt;mdui-tooltip placement=&quot;bottom-right&quot; content=&quot;bottom-right&quot;&gt;
      &lt;mdui-card variant=&quot;outlined&quot;&gt;&lt;/mdui-card&gt;
    &lt;/mdui-tooltip&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;style&gt;
.example-placement mdui-card {
  width: 2.5rem;
  height: 2.5rem;
  margin: 0.25rem;
}

.example-placement .row:nth-child(2) mdui-tooltip:last-child mdui-card,
.example-placement .row:nth-child(3) mdui-tooltip:last-child mdui-card,
.example-placement .row:nth-child(4) mdui-tooltip:last-child mdui-card {
  margin-left: 10rem;
}
&lt;/style&gt;
</code></pre>
<h3 id="example-trigger">
                  <a href="#example-trigger">触发方式</a>
                </h3>
<p>通过 <code>trigger</code> 属性，可以设置 tooltip 的触发方式。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tooltip trigger=&quot;click&quot; content=&quot;tooltip&quot;&gt;
  &lt;mdui-button&gt;button&lt;/mdui-button&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
<h3 id="example-delay">
                  <a href="#example-delay">打开/关闭延时</a>
                </h3>
<p>当触发方式为 <code>hover</code> 时，可以通过 <code>open-delay</code> 和 <code>close-delay</code> 属性分别设置打开和关闭 tooltip 的延时，单位为毫秒。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tooltip open-delay=&quot;1000&quot; close-delay=&quot;1000&quot; content=&quot;tooltip&quot;&gt;
  &lt;mdui-button&gt;button&lt;/mdui-button&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">禁用状态</a>
                </h3>
<p>通过添加 <code>disabled</code> 属性，可以禁用 tooltip。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tooltip disabled content=&quot;tooltip&quot;&gt;
  &lt;mdui-button&gt;button&lt;/mdui-button&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
`,elements:[{name:"Tooltip",tagName:"mdui-tooltip",summary:`<p>工具提示组件</p>
<pre><code class="language-html">&lt;mdui-tooltip content=&quot;tooltip content&quot;&gt;
..&lt;mdui-button&gt;button&lt;/mdui-button&gt;
&lt;/mdui-tooltip&gt;
</code></pre>
`,attributes:[{attributeName:"variant",propertyName:"variant",reflect:!0,description:`<p>tooltip 的形状。默认为 <code>plain</code>。可选值包括：</p>
<ul>
<li><code>plain</code>：纯文本，适用于简单的单行文本</li>
<li><code>rich</code>：富文本，可以包含标题、正文和操作按钮</li>
</ul>
`,type:"'plain' | 'rich'",enum:["'plain'","'rich'"],default:"'plain'"},{attributeName:"placement",propertyName:"placement",reflect:!0,description:`<p>tooltip 的位置。默认为 <code>auto</code>。可选值包括：</p>
<ul>
<li><code>auto</code>：自动判断位置。<code>variant=&quot;plan&quot;</code> 时，优先使用 <code>top</code>；<code>variant=&quot;rich&quot;</code> 时，优先使用 <code>bottom-right</code></li>
<li><code>top-left</code>：位于左上方</li>
<li><code>top-start</code>：位于上方，左对齐</li>
<li><code>top</code>：位于上方，居中对齐</li>
<li><code>top-end</code>：位于上方，右对齐</li>
<li><code>top-right</code>：位于右上方</li>
<li><code>bottom-left</code>：位于左下方</li>
<li><code>bottom-start</code>：位于下方，左对齐</li>
<li><code>bottom</code>：位于下方，居中对齐</li>
<li><code>bottom-end</code>：位于下方，右对齐</li>
<li><code>bottom-right</code>：位于右下方</li>
<li><code>left-start</code>：位于左侧，顶部对齐</li>
<li><code>left</code>：位于左侧，居中对齐</li>
<li><code>left-end</code>：位于左侧，底部对齐</li>
<li><code>right-start</code>：位于右侧，顶部对齐</li>
<li><code>right</code>：位于右侧，居中对齐</li>
<li><code>right-end</code>：位于右侧，底部对齐</li>
</ul>
`,type:"'auto' | 'top-left' | 'top-start' | 'top' | 'top-end' | 'top-right' | 'bottom-left' | 'bottom-start' | 'bottom' | 'bottom-end' | 'bottom-right' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'",enum:["'auto'","'top-left'","'top-start'","'top'","'top-end'","'top-right'","'bottom-left'","'bottom-start'","'bottom'","'bottom-end'","'bottom-right'","'left-start'","'left'","'left-end'","'right-start'","'right'","'right-end'"],default:"'auto'"},{attributeName:"open-delay",propertyName:"openDelay",reflect:!0,description:`<p>鼠标悬浮触发显示的延时，单位为毫秒</p>
`,type:"number",enum:[],default:"150"},{attributeName:"close-delay",propertyName:"closeDelay",reflect:!0,description:`<p>鼠标悬浮触发隐藏的延时，单位为毫秒</p>
`,type:"number",enum:[],default:"150"},{attributeName:"headline",propertyName:"headline",reflect:!0,description:`<p>tooltip 的标题。仅 <code>variant=&quot;rich&quot;</code> 时可使用。也可以通过 <code>slot=&quot;headline&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"content",propertyName:"content",reflect:!0,description:`<p>tooltip 的内容。也可以通过 <code>slot=&quot;content&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"trigger",propertyName:"trigger",reflect:!0,description:`<p>触发方式，支持多个值，用空格分隔。可选值包括：</p>
<ul>
<li><code>click</code>：点击时触发</li>
<li><code>hover</code>：鼠标悬浮时触发</li>
<li><code>focus</code>：聚焦时触发</li>
<li><code>manual</code>：只能通过编程方式打开和关闭 tooltip，不能再指定其他触发方式</li>
</ul>
`,type:"'click' | 'hover' | 'focus' | 'manual' | string",enum:["'click'","'hover'","'focus'","'manual'","string"],default:"'hover focus'"},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>是否禁用 tooltip</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"open",propertyName:"open",reflect:!0,description:`<p>是否显示 tooltip</p>
`,type:"boolean",enum:[],default:"false"}],methods:[],events:[{name:"open",description:`<p>tooltip 开始显示时，事件被触发。可以通过调用 <code>event.preventDefault()</code> 阻止 tooltip 打开</p>
`},{name:"opened",description:`<p>tooltip 显示动画完成时，事件被触发</p>
`},{name:"close",description:`<p>tooltip 开始隐藏时，事件被触发。可以通过调用 <code>event.preventDefault()</code> 阻止 tooltip 关闭</p>
`},{name:"closed",description:`<p>tooltip 隐藏动画完成时，事件被触发</p>
`}],slots:[{name:"",description:`<p>tooltip 触发的目标元素，只有 <code>default</code> slot 中的第一个元素会作为目标元素</p>
`},{name:"headline",description:`<p>tooltip 的标题，只有当 <code>variant=&quot;rich&quot;</code> 时，此 slot 才有效</p>
`},{name:"content",description:`<p>tooltip 的内容，可以包含 HTML。若只包含纯文本，可以使用 <code>content</code> 属性代替</p>
`},{name:"action",description:`<p>tooltip 底部的按钮，只有当 <code>variant=&quot;rich&quot;</code> 时，此 slot 才有效</p>
`}],cssParts:[{name:"popup",description:`<p>tooltip 的容器</p>
`},{name:"headline",description:`<p>标题</p>
`},{name:"content",description:`<p>正文</p>
`},{name:"action",description:`<p>操作按钮</p>
`}],cssProperties:[{name:"--shape-corner-plain",description:`<p>当 variant=&quot;plain&quot; 时，组件的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`},{name:"--shape-corner-rich",description:`<p>当 variant=&quot;rich&quot; 时，组件的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`},{name:"--z-index",description:`<p>组件的 CSS <code>z-index</code> 值</p>
`}]}]};export{t as default};
