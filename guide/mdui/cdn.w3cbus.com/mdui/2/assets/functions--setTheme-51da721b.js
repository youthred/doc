const e={docsHtml:`<p><code>setTheme</code> 函数用于设置当前页面或指定元素的主题。</p>
<p>可选的主题包括 <code>light</code>、<code>dark</code>和 <code>auto</code>。详见 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/styles/dark-mode">暗色模式</a>。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入函数：</p>
<pre><code class="language-js">import { setTheme } from &#39;mdui/functions/setTheme.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-js">// 把整个页面设置成暗色模式
setTheme(&#39;dark&#39;);

// 把 class=&quot;element&quot; 元素设置成暗色模式
setTheme(&#39;dark&#39;, &#39;.element&#39;);

// 把指定 DOM 元素设置成暗色模式
const element = document.querySelector(&#39;.element&#39;);
setTheme(&#39;dark&#39;, element);
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="nohighlight">setTheme(theme: 'light' | 'dark' | 'auto', target?: string | HTMLElement | <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/jq">JQ</a>&lt;HTMLElement&gt;): void</code></pre>

<p>函数的第一个参数是要设置的主题，可选值为 <code>light</code>、<code>dark</code>、<code>auto</code>。</p>
<p>第二个参数是要设置主题的元素，可以是 CSS 选择器、DOM 元素，或 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/jq">JQ 对象</a>。如果不传入第二个参数，那么默认设置 <code>&lt;html&gt;</code> 元素的主题。</p>
`,elements:[]};export{e as default};
