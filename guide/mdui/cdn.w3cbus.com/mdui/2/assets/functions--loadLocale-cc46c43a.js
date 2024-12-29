const e={docsHtml:`<p><code>loadLocale</code> 函数用于加载语言包。详见 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/getting-started/localization">本地化</a>。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入函数：</p>
<pre><code class="language-js">import { loadLocale } from &#39;mdui/functions/loadLocale.js&#39;;
</code></pre>
<p>下面列举了几种常见的语言包加载方式，详细说明可参见 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/getting-started/localization">本地化</a>。</p>
<p>动态导入（懒加载）：</p>
<pre><code class="language-js">loadLocale((locale) =&gt; import(\`../node_modules/mdui/locales/\${locale}.js\`));
</code></pre>
<p>动态导入（预加载）：</p>
<pre><code class="language-js">const localizedTemplates = new Map([
  [&#39;zh-cn&#39;, import(\`../node_modules/mdui/locales/zh-cn.js\`)],
  [&#39;zh-tw&#39;, import(\`../node_modules/mdui/locales/zh-tw.js\`)]
]);

loadLocale(async (locale) =&gt; localizedTemplates.get(locale));
</code></pre>
<p>静态导入：</p>
<pre><code class="language-js">import * as locale_zh_cn from &#39;mdui/locales/zh-cn.js&#39;;
import * as locale_zh_tw from &#39;mdui/locales/zh-tw.js&#39;;

const localizedTemplates = new Map([
  [&#39;zh-cn&#39;, locale_zh_cn],
  [&#39;zh-tw&#39;, locale_zh_tw]
]);

loadLocale(async (locale) =&gt; localizedTemplates.get(locale));
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="language-ts">loadLocale((LocaleTargetCode) =&gt; Promise&lt;LocaleModule&gt;): void;
</code></pre>
<p>函数的参数为一个定义了如何加载语言包的函数。语言包加载函数的参数为语言代码，返回值为 Promise，resolve 的值为对应的语言包模块。</p>
<p>语言代码列表参见 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/getting-started/localization#languages">支持的语言</a>，其中 <code>en-us</code> 为内置语言，无需加载。</p>
`,elements:[]};export{e as default};
