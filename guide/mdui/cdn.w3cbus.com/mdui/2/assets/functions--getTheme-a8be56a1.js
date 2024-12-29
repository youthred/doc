const e={docsHtml:`<p><code>getTheme</code> 函数用于获取当前页面或指定元素的主题设置。</p>
<p>主题类型包括 <code>light</code>、<code>dark</code>、<code>auto</code> 三种，详见 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/styles/dark-mode">暗色模式</a>。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入函数：</p>
<pre><code class="language-js">import { getTheme } from &#39;mdui/functions/getTheme.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-js">// 获取 &lt;html&gt; 上的主题
getTheme();

// 获取 class=&quot;element&quot; 元素上的主题
getTheme(&#39;.element&#39;);

// 获取指定 DOM 元素上的主题
const element = document.querySelector(&#39;.element&#39;);
getTheme(element);
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="nohighlight">getTheme(target?: string | HTMLElement | <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/jq">JQ</a>&lt;HTMLElement&gt;): 'light' | 'dark' | 'auto'</code></pre>

<p>函数的参数为要获取主题的元素，可以是 CSS 选择器、DOM 元素，或 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/jq">JQ 对象</a>。如果不传入参数，则默认获取 <code>&lt;html&gt;</code> 元素的主题。</p>
<p>函数的返回值为 <code>light</code>、<code>dark</code>、<code>auto</code> 之一，如果元素上未设置主题，则默认返回 <code>light</code>。</p>
`,elements:[]};export{e as default};
