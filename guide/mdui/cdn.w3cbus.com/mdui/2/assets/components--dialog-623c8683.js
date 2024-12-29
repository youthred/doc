const t={docsHtml:`<p>对话框用于在用户的操作流程中提供重要提示。</p>
<p>除了直接使用该组件外，mdui 还提供了四个函数：<a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/dialog"><code>mdui.dialog</code></a>、<a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/alert"><code>mdui.alert</code></a>、<a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/confirm"><code>mdui.confirm</code></a>、<a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/prompt"><code>mdui.prompt</code></a>。这些函数可以简化 Dialog 组件的使用。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/dialog.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { Dialog } from &#39;mdui/components/dialog.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-dialog class=&quot;example-dialog&quot;&gt;
  Dialog
  &lt;mdui-button&gt;关闭&lt;/mdui-button&gt;
&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;打开对话框&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-dialog&quot;);
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector(&quot;mdui-button&quot;);

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
  closeButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = false);
&lt;/script&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-close-on-overlay-click">
                  <a href="#example-close-on-overlay-click">点击遮罩关闭</a>
                </h3>
<p>添加 <code>close-on-overlay-click</code> 属性，点击遮罩层时会关闭对话框。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog close-on-overlay-click class=&quot;example-overlay&quot;&gt;Dialog&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;打开对话框&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-overlay&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-close-on-esc">
                  <a href="#example-close-on-esc">按下 ESC 键关闭</a>
                </h3>
<p>添加 <code>close-on-esc</code> 属性，按下 ESC 键时会关闭对话框。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog
  close-on-esc
  close-on-overlay-click
  class=&quot;example-ecs&quot;
&gt;Dialog&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;打开对话框&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-ecs&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-fullscreen">
                  <a href="#example-fullscreen">全屏</a>
                </h3>
<p>添加 <code>fullscreen</code> 属性，对话框会全屏显示。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog fullscreen class=&quot;example-fullscreen&quot;&gt;
  Dialog
  &lt;mdui-button&gt;关闭&lt;/mdui-button&gt;
&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;打开对话框&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-fullscreen&quot;);
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector(&quot;mdui-button&quot;);

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
  closeButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = false);
&lt;/script&gt;
</code></pre>
<h3 id="example-icon">
                  <a href="#example-icon">图标</a>
                </h3>
<p>设置 <code>icon</code> 属性，对话框上方会添加 Material Icons 图标。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog
  icon=&quot;restart_alt&quot;
  close-on-overlay-click
  class=&quot;example-icon&quot;
&gt;Dialog&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;打开对话框&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-icon&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
<p>也可以通过 <code>icon</code> slot 在对话框上方添加图标元素。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog close-on-overlay-click class=&quot;example-icon-slot&quot;&gt;
  Dialog
  &lt;mdui-icon slot=&quot;icon&quot; name=&quot;restart_alt&quot;&gt;&lt;/mdui-icon&gt;
&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;打开对话框&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-icon-slot&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-headline">
                  <a href="#example-headline">标题与描述</a>
                </h3>
<p>通过 <code>headline</code> 和 <code>description</code> 属性设置对话框的标题和描述。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog
  headline=&quot;Delete selected images?&quot;
  description=&quot;Images will be permenantly removed from you account and all synced devices.&quot;
  close-on-overlay-click
  class=&quot;example-headline&quot;
&gt;&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;打开对话框&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-headline&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
<p>也可以通过 <code>headline</code> 和 <code>description</code> slot 来设置对话框的标题元素和描述元素。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog close-on-overlay-click class=&quot;example-headline-slot&quot;&gt;
  &lt;span slot=&quot;headline&quot;&gt;Delete selected images?&lt;/span&gt;
  &lt;span slot=&quot;description&quot;&gt;Images will be permenantly removed from you account and all synced devices.&lt;/span&gt;
&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;打开对话框&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-headline-slot&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-action">
                  <a href="#example-action">底部操作按钮</a>
                </h3>
<p>可以通过 <code>action</code> slot 添加底部操作按钮。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog
  close-on-overlay-click
  headline=&quot;Delete selected images?&quot;
  class=&quot;example-action&quot;
&gt;
  &lt;mdui-button slot=&quot;action&quot; variant=&quot;text&quot;&gt;取消&lt;/mdui-button&gt;
  &lt;mdui-button slot=&quot;action&quot; variant=&quot;tonal&quot;&gt;删除&lt;/mdui-button&gt;
&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;打开对话框&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-action&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
<p>添加 <code>stacked-actions</code> 属性，使底部操作按钮垂直排列。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog
  stacked-actions
  close-on-overlay-click
  headline=&quot;Use location service?&quot;
  class=&quot;example-stacked-actions&quot;
&gt;
  &lt;mdui-button slot=&quot;action&quot; variant=&quot;text&quot;&gt;Turn on speed boost&lt;/mdui-button&gt;
  &lt;mdui-button slot=&quot;action&quot; variant=&quot;text&quot;&gt;No thanks&lt;/mdui-button&gt;
&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;打开对话框&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-stacked-actions&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
<h3 id="example-header">
                  <a href="#example-header">顶部内容</a>
                </h3>
<p>可以通过 <code>header</code> slot 设置对话框顶部内容。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-dialog close-on-overlay-click class=&quot;example-header&quot;&gt;
  &lt;mdui-top-app-bar slot=&quot;header&quot;&gt;
    &lt;mdui-button-icon icon=&quot;close&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
    &lt;mdui-button variant=&quot;text&quot;&gt;Save&lt;/mdui-button&gt;
  &lt;/mdui-top-app-bar&gt;
  &lt;div style=&quot;height: 100px&quot;&gt;&lt;/div&gt;
&lt;/mdui-dialog&gt;

&lt;mdui-button&gt;打开对话框&lt;/mdui-button&gt;

&lt;script&gt;
  const dialog = document.querySelector(&quot;.example-header&quot;);
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener(&quot;click&quot;, () =&gt; dialog.open = true);
&lt;/script&gt;
</code></pre>
`,elements:[{name:"Dialog",tagName:"mdui-dialog",summary:`<p>对话框组件</p>
<pre><code class="language-html">&lt;mdui-dialog&gt;content&lt;/mdui-dialog&gt;
</code></pre>
`,attributes:[{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>顶部的 Material Icons 图标名。也可以通过 <code>slot=&quot;icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"headline",propertyName:"headline",reflect:!0,description:`<p>标题。也可以通过 <code>slot=&quot;headline&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"description",propertyName:"description",reflect:!0,description:`<p>标题下方的文本。也可以通过 <code>slot=&quot;description&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"open",propertyName:"open",reflect:!0,description:`<p>是否打开对话框</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"fullscreen",propertyName:"fullscreen",reflect:!0,description:`<p>是否全屏显示对话框</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"close-on-esc",propertyName:"closeOnEsc",reflect:!0,description:`<p>是否允许按下 ESC 键关闭对话框</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"close-on-overlay-click",propertyName:"closeOnOverlayClick",reflect:!0,description:`<p>是否允许点击遮罩层关闭对话框</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"stacked-actions",propertyName:"stackedActions",reflect:!0,description:`<p>是否垂直排列底部操作按钮</p>
`,type:"boolean",enum:[],default:"false"}],methods:[],events:[{name:"open",description:`<p>对话框开始打开时触发。可以通过调用 <code>event.preventDefault()</code> 阻止对话框打开</p>
`},{name:"opened",description:`<p>对话框打开动画完成后触发</p>
`},{name:"close",description:`<p>对话框开始关闭时触发。可以通过调用 <code>event.preventDefault()</code> 阻止对话框关闭</p>
`},{name:"closed",description:`<p>对话框关闭动画完成后触发</p>
`},{name:"overlay-click",description:`<p>点击遮罩层时触发</p>
`}],slots:[{name:"header",description:`<p>顶部元素，默认包含 <code>icon</code> slot 和 <code>headline</code> slot</p>
`},{name:"icon",description:`<p>顶部图标</p>
`},{name:"headline",description:`<p>顶部标题</p>
`},{name:"description",description:`<p>标题下方的文本</p>
`},{name:"",description:`<p>对话框主体内容</p>
`},{name:"action",description:`<p>底部操作栏中的元素</p>
`}],cssParts:[{name:"overlay",description:`<p>遮罩层</p>
`},{name:"panel",description:`<p>对话框容器</p>
`},{name:"header",description:`<p>对话框 header 部分，包含 icon 和 headline</p>
`},{name:"icon",description:`<p>顶部图标，位于 header 中</p>
`},{name:"headline",description:`<p>顶部标题，位于 header 中</p>
`},{name:"body",description:`<p>对话框 body 部分</p>
`},{name:"description",description:`<p>副文本部分，位于 body 中</p>
`},{name:"action",description:`<p>底部操作按钮</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>组件的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`},{name:"--z-index",description:`<p>组件的 CSS <code>z-index</code> 值</p>
`}]}]};export{t as default};
