const e={docsHtml:`<p><code>removeColorScheme</code> 函数用于移除当前页面或指定元素上的配色方案。详见 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/styles/dynamic-color">动态配色</a>。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入函数：</p>
<pre><code class="language-js">import { removeColorScheme } from &#39;mdui/functions/removeColorScheme.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-js">// 移除 &lt;html&gt; 上的配色方案
removeColorScheme();

// 移除 class=&quot;element&quot; 元素上的配色方案
removeColorScheme(&#39;.element&#39;);

// 移除指定 DOM 元素上的配色方案
const element = document.querySelector(&#39;.element&#39;);
removeColorScheme(element);
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="nohighlight">removeColorScheme(target?: string | HTMLElement | <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/jq">JQ</a>&lt;HTMLElement&gt;): void</code></pre>

<p>函数的参数为要移除配色方案的元素，可以是 CSS 选择器、DOM 元素，或 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/jq">JQ 对象</a>。如果不传入参数，则默认移除 <code>&lt;html&gt;</code> 元素的配色方案。</p>
`,elements:[]};export{e as default};
