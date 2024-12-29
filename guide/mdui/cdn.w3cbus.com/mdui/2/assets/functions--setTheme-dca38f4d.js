const e={docsHtml:`<p>The <code>setTheme</code> function is used to apply a specific theme to the current page or a designated element.</p>
<p>The available themes are <code>light</code>, <code>dark</code>, and <code>auto</code>. For more information, please refer to the <a href="https://cdn.w3cbus.com/en/docs/2/styles/dark-mode">Dark Mode</a> section.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the function:</p>
<pre><code class="language-js">import { setTheme } from &#39;mdui/functions/setTheme.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-js">// Set the entire page to dark mode
setTheme(&#39;dark&#39;);

// Set an element with class=&quot;element&quot; to dark mode
setTheme(&#39;dark&#39;, &#39;.element&#39;);

// Set a specified DOM element to dark mode
const element = document.querySelector(&#39;.element&#39;);
setTheme(&#39;dark&#39;, element);
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="nohighlight">setTheme(theme: 'light' | 'dark' | 'auto', target?: string | HTMLElement | <a href="https://cdn.w3cbus.com/en/docs/2/functions/jq">JQ</a>&lt;HTMLElement&gt;): void</code></pre>

<p>The function accepts two parameters. The first parameter, specifies the theme to be applied. It can be <code>light</code>, <code>dark</code>, or <code>auto</code>.</p>
<p>The second parameter, is optional and determines the element to which the theme will be applied. The target can be a CSS selector, a DOM element, or a <a href="https://cdn.w3cbus.com/en/docs/2/functions/jq">JQ object</a>. If no target is provided, the function defaults to <code>document.documentElement</code>, the <code>&lt;html&gt;</code> element.</p>
`,elements:[]};export{e as default};
