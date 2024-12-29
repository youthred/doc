const e={docsHtml:`<p>The <code>setLocale</code> function sets the current locale code. For more details, refer to <a href="https://cdn.w3cbus.com/en/docs/2/getting-started/localization">Localization</a>.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the function:</p>
<pre><code class="language-js">import { setLocale } from &#39;mdui/functions/setLocale.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-js">setLocale(&#39;zh-cn&#39;).then(() =&gt; {
  // The locale switch is complete when the promise resolves
});
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="language-ts">setLocale(LocaleCode): Promise&lt;void&gt;
</code></pre>
<p>This function accepts a locale code as an argument and returns a Promise. The locale switch is complete when the Promise resolves.</p>
<p>Refer to <a href="https://cdn.w3cbus.com/en/docs/2/getting-started/localization#languages">Supported Languages</a> for a list of locale codes.</p>
`,elements:[]};export{e as default};
