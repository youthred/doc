const e={docsHtml:`<p><code>setLocale</code> 函数用于设置当前的本地化语言代码。详见 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/getting-started/localization">本地化</a>。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入函数：</p>
<pre><code class="language-js">import { setLocale } from &#39;mdui/functions/setLocale.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-js">setLocale(&#39;zh-cn&#39;).then(() =&gt; {
  // promise 被 resolve 时，语言切换完成
});
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="language-ts">setLocale(LocaleCode): Promise&lt;void&gt;
</code></pre>
<p>函数的参数为语言代码，返回值为 Promise，在 Promise resolve 时，语言切换完成。</p>
<p>语言代码列表参见 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/getting-started/localization#languages">支持的语言</a>。</p>
`,elements:[]};export{e as default};
