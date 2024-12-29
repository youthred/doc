const e={docsHtml:`<p>mdui 是用 TypeScript 开发的，因此对 TypeScript 提供了良好的支持。所有的 mdui 官方库都自带类型声明文件，可以直接使用。</p>
<h2 id="instance">
                  <a href="#instance">组件的实例类型</a>
                </h2>
<p>有时，你可能需要将一个 JavaScript 变量断言为 mdui 的组件实例，这时你可以直接从 mdui 中导入对应的组件类型。</p>
<p>例如，从组件文件中导入 Tooltip 组件的类型：</p>
<pre><code class="language-ts">import type { Tooltip } from &#39;mdui/components/tooltip.js&#39;;
</code></pre>
<p>或者直接从 mdui 导入 Tooltip 组件的类型：</p>
<pre><code class="language-ts">import type { Tooltip } from &#39;mdui&#39;;
</code></pre>
<p>然后，你就可以将一个 JavaScript 变量断言成 Tooltip 类型：</p>
<pre><code class="language-ts">const tooltip = document.querySelector(&#39;mdui-tooltip&#39;) as Tooltip;
</code></pre>
<p>此时，你的 IDE 会自动提示 <code>tooltip</code> 变量的属性和方法。</p>
<p>如果在 <code>tooltip</code> 变量上添加事件监听，也会自动提示事件名称，事件类型，以及回调函数中 <code>this</code> 的指向：</p>
<pre><code class="language-ts">tooltip.addEventListener(&#39;open&#39;, function(event) {
});
</code></pre>
<h2 id="event">
                  <a href="#event">事件类型</a>
                </h2>
<p>每个组件都会导出一个接口，它映射了组件的事件名和它对应的事件对象类型，接口名为 <code>\${组件名}EventMap</code>。</p>
<p>例如，Tooltip 组件会导出一个名为 <code>TooltipEventMap</code> 的接口：</p>
<pre><code class="language-ts">export interface TooltipEventMap {
  open: CustomEvent&lt;void&gt;;
  opened: CustomEvent&lt;void&gt;;
  close: CustomEvent&lt;void&gt;;
  closed: CustomEvent&lt;void&gt;;
}
</code></pre>
<p>你可以从组件文件中导入该接口：</p>
<pre><code class="language-ts">import type { TooltipEventMap } from &#39;mdui/components/tooltip.js&#39;;
</code></pre>
<p>或者直接从 mdui 导入该接口：</p>
<pre><code class="language-ts">import type { TooltipEventMap } from &#39;mdui&#39;;
</code></pre>
<p>请注意，该接口只包含组件特有的事件，但 mdui 组件都继承自 <code>HTMLElement</code>，所以也支持 <code>HTMLElement</code> 的事件，你可以使用交叉类型来获取组件的所有事件类型：</p>
<pre><code class="language-ts">type TooltipAndHTMLElementEventMap = TooltipEventMap &amp; HTMLElementEventMap;
</code></pre>
`,elements:[]};export{e as default};
