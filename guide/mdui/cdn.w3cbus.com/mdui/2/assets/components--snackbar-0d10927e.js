const t={docsHtml:`<p>消息条组件用于在页面中展示简短的应用程序进程信息。</p>
<p>除了直接使用该组件外，mdui 还提供了一个 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/snackbar"><code>mdui.snackbar</code></a> 函数，以简化 Snackbar 组件的使用。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/snackbar.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { Snackbar } from &#39;mdui/components/snackbar.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-snackbar class=&quot;example-snackbar&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;打开 Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-snackbar&quot;);
  const openButton = snackbar.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-placement">
                  <a href="#example-placement">位置</a>
                </h3>
<p>通过 <code>placement</code> 属性，你可以设置 Snackbar 的显示位置。</p>
<pre><code class="language-html,example,expandable">&lt;div class=&quot;example-placement&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;mdui-snackbar placement=&quot;top-start&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;
    &lt;mdui-button variant=&quot;outlined&quot;&gt;top-start&lt;/mdui-button&gt;

    &lt;mdui-snackbar placement=&quot;top&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;
    &lt;mdui-button variant=&quot;outlined&quot;&gt;top&lt;/mdui-button&gt;

    &lt;mdui-snackbar placement=&quot;top-end&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;
    &lt;mdui-button variant=&quot;outlined&quot;&gt;top-end&lt;/mdui-button&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;mdui-snackbar placement=&quot;bottom-start&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;
    &lt;mdui-button variant=&quot;outlined&quot;&gt;bottom-start&lt;/mdui-button&gt;

    &lt;mdui-snackbar placement=&quot;bottom&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;
    &lt;mdui-button variant=&quot;outlined&quot;&gt;bottom&lt;/mdui-button&gt;

    &lt;mdui-snackbar placement=&quot;bottom-end&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;
    &lt;mdui-button variant=&quot;outlined&quot;&gt;bottom-end&lt;/mdui-button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  const snackbars = document.querySelectorAll(&quot;.example-placement mdui-snackbar&quot;);

  snackbars.forEach((snackbar) =&gt; {
    const button = snackbar.nextElementSibling;
    button.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
  });
&lt;/script&gt;

&lt;style&gt;
.example-placement mdui-button {
  margin: 0.25rem;
  width: 7.5rem;
}
&lt;/style&gt;
</code></pre>
<h3 id="example-action">
                  <a href="#example-action">操作按钮</a>
                </h3>
<p>可以使用 <code>action</code> 属性在 Snackbar 的右侧添加一个操作按钮，并通过该属性指定按钮的文本。点击操作按钮会触发 <code>action-click</code> 事件。如果你想让操作按钮显示为加载中状态，可以添加 <code>action-loading</code> 属性。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-snackbar action=&quot;Undo&quot; class=&quot;example-action&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;打开 Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-action&quot;);
  const openButton = snackbar.nextElementSibling;

  snackbar.addEventListener(&quot;action-click&quot;, () =&gt; {
    snackbar.actionLoading = true;
    setTimeout(() =&gt; snackbar.actionLoading = false, 2000);
  });

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
<p>也可以通过 <code>action</code> slot 在 Snackbar 的右侧添加自定义元素。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-snackbar class=&quot;example-action-slot&quot;&gt;
  Photo archived
  &lt;mdui-button slot=&quot;action&quot; variant=&quot;text&quot;&gt;Undo&lt;/mdui-button&gt;
&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;打开 Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-action-slot&quot;);
  const openButton = snackbar.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-closeable">
                  <a href="#example-closeable">可关闭</a>
                </h3>
<p>添加 <code>closeable</code> 属性后，Snackbar 的右侧会出现一个关闭按钮。点击该按钮会关闭 Snackbar，并触发 <code>close</code> 事件。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-snackbar closeable class=&quot;example-closeable&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;打开 Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-closeable&quot;);
  const openButton = snackbar.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
<p>可以通过 <code>close-button</code> slot 来自定义关闭按钮的元素。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-snackbar closeable class=&quot;example-close-button-slot&quot;&gt;
  Photo archived
  &lt;mdui-avatar slot=&quot;close-button&quot; icon=&quot;people_alt&quot;&gt;&lt;/mdui-avatar&gt;
&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;打开 Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-close-button-slot&quot;);
  const openButton = snackbar.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
<p>通过设置 <code>close-icon</code> 属性，你可以修改默认关闭按钮中的 Material Icons 图标。也可以通过 <code>close-icon</code> slot 来自定义关闭按钮中的图标元素。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-snackbar
  closeable
  close-icon=&quot;delete&quot;
  class=&quot;example-close-icon&quot;
&gt;Photo archived&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;打开 Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-close-icon&quot;);
  const openButton = snackbar.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-message-line">
                  <a href="#example-message-line">文本行数</a>
                </h3>
<p>默认情况下，消息文本没有行数限制。你可以通过 <code>message-line</code> 属性来限制文本行数，最多可以设置为 2 行。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-snackbar message-line=&quot;1&quot; class=&quot;example-line&quot;&gt;The item already has the label &quot;travel&quot;. You can add a new label. You can add a new label.&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;打开 Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-line&quot;);
  const openButton = snackbar.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-auto-close-delay">
                  <a href="#example-auto-close-delay">自动关闭延时</a>
                </h3>
<p>可以使用 <code>auto-close-delay</code> 属性来设置自动关闭的延时，单位为毫秒。默认值为 5000 毫秒。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-snackbar auto-close-delay=&quot;2000&quot; class=&quot;example-close-delay&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;打开 Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-close-delay&quot;);
  const openButton = snackbar.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-close-on-outside-click">
                  <a href="#example-close-on-outside-click">点击外部区域关闭</a>
                </h3>
<p>通过添加 <code>close-on-outside-click</code> 属性，你可以设置在点击 Snackbar 外部区域时关闭 Snackbar。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-snackbar close-on-outside-click class=&quot;example-outside&quot;&gt;Photo archived&lt;/mdui-snackbar&gt;

&lt;mdui-button&gt;打开 Snackbar&lt;/mdui-button&gt;

&lt;script&gt;
  const snackbar = document.querySelector(&quot;.example-outside&quot;);
  const openButton = snackbar.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; snackbar.open = true);
&lt;/script&gt;
</code></pre>
`,elements:[{name:"Snackbar",tagName:"mdui-snackbar",summary:`<p>消息条组件</p>
<pre><code class="language-html">&lt;mdui-snackbar&gt;message&lt;/mdui-snackbar&gt;
</code></pre>
`,attributes:[{attributeName:"open",propertyName:"open",reflect:!0,description:`<p>是否显示 Snackbar</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"placement",propertyName:"placement",reflect:!0,description:`<p>Snackbar 的显示位置。默认为 <code>bottom</code>。可选值包括：</p>
<ul>
<li><code>top</code>：顶部居中</li>
<li><code>top-start</code>：顶部左对齐</li>
<li><code>top-end</code>：顶部右对齐</li>
<li><code>bottom</code>：底部居中</li>
<li><code>bottom-start</code>：底部左对齐</li>
<li><code>bottom-end</code>：底部右对齐</li>
</ul>
`,type:"'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'",enum:["'top'","'top-start'","'top-end'","'bottom'","'bottom-start'","'bottom-end'"],default:"'bottom'"},{attributeName:"action",propertyName:"action",reflect:!0,description:`<p>操作按钮的文本。也可以通过 <code>slot=&quot;action&quot;</code> 设置操作按钮</p>
`,type:"string",enum:[]},{attributeName:"action-loading",propertyName:"actionLoading",reflect:!0,description:`<p>操作按钮是否处于加载中状态</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"closeable",propertyName:"closeable",reflect:!0,description:`<p>是否在右侧显示关闭按钮</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"close-icon",propertyName:"closeIcon",reflect:!0,description:`<p>关闭按钮的 Material Icons 图标名。也可以通过 <code>slot=&quot;close-icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"message-line",propertyName:"messageLine",reflect:!0,description:`<p>消息文本的最大显示行数。默认不限制。可选值包括：</p>
<ul>
<li><code>1</code>：最多显示一行</li>
<li><code>2</code>：最多显示两行</li>
</ul>
`,type:"1 | 2",enum:["1","2"]},{attributeName:"auto-close-delay",propertyName:"autoCloseDelay",reflect:!0,description:`<p>自动关闭的延迟时间（单位：毫秒）。设置为 <code>0</code> 则不自动关闭。默认为 5000 毫秒</p>
`,type:"number",enum:[],default:"5000"},{attributeName:"close-on-outside-click",propertyName:"closeOnOutsideClick",reflect:!0,description:`<p>点击或触摸 Snackbar 以外的区域时，是否关闭 Snackbar</p>
`,type:"boolean",enum:[],default:"false"}],methods:[],events:[{name:"open",description:`<p>Snackbar 开始显示时，事件被触发。可以通过调用 <code>event.preventDefault()</code> 阻止 Snackbar 显示</p>
`},{name:"opened",description:`<p>Snackbar 显示动画完成时，事件被触发</p>
`},{name:"close",description:`<p>Snackbar 开始隐藏时，事件被触发。可以通过调用 <code>event.preventDefault()</code> 阻止 Snackbar 关闭</p>
`},{name:"closed",description:`<p>Snackbar 隐藏动画完成时，事件被触发</p>
`},{name:"action-click",description:`<p>点击操作按钮时触发</p>
`}],slots:[{name:"",description:`<p>Snackbar 的消息文本内容</p>
`},{name:"action",description:`<p>右侧的操作按钮</p>
`},{name:"close-button",description:`<p>右侧的关闭按钮。必须设置 <code>closeable</code> 属性为 <code>true</code> 才会显示</p>
`},{name:"close-icon",description:`<p>关闭按钮中的图标</p>
`}],cssParts:[{name:"message",description:`<p>消息文本</p>
`},{name:"action",description:`<p>操作按钮</p>
`},{name:"close-button",description:`<p>关闭按钮</p>
`},{name:"close-icon",description:`<p>关闭按钮中的图标</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>组件的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`},{name:"--z-index",description:`<p>组件的 CSS <code>z-index</code> 值</p>
`}]}]};export{t as default};
