const e={docsHtml:`<p>The <code>loadLocale</code> function is used to load locale modules. For more details, refer to <a href="https://cdn.w3cbus.com/en/docs/2/getting-started/localization">Localization</a>.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the function:</p>
<pre><code class="language-js">import { loadLocale } from &#39;mdui/functions/loadLocale.js&#39;;
</code></pre>
<p>Here are a few common patterns to load locale modules. For detailed explanations, see <a href="https://cdn.w3cbus.com/en/docs/2/getting-started/localization">Localization</a>.</p>
<p>Dynamic import (Lazy-load):</p>
<pre><code class="language-js">loadLocale((locale) =&gt; import(\`../node_modules/mdui/locales/\${locale}.js\`));
</code></pre>
<p>Dynamic import (Pre-load):</p>
<pre><code class="language-js">const localizedTemplates = new Map([
  [&#39;zh-cn&#39;, import(\`../node_modules/mdui/locales/zh-cn.js\`)],
  [&#39;zh-tw&#39;, import(\`../node_modules/mdui/locales/zh-tw.js\`)]
]);

loadLocale(async (locale) =&gt; localizedTemplates.get(locale));
</code></pre>
<p>Static imports:</p>
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
<p>This function accepts a function that defines how to load the locale modules. The locale modules loading function takes a locale code as an argument and returns a Promise that resolves to the corresponding locale module.</p>
<p>Refer to <a href="https://cdn.w3cbus.com/en/docs/2/getting-started/localization#languages">Supported Languages</a> for a list of locale codes. <code>en-us</code> is the built-in locale module and does not need to be loaded.</p>
`,elements:[]};export{e as default};
