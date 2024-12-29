const e={docsHtml:`<p>The <code>getTheme</code> function is used to obtain the current theme applied to the page or a specific element.</p>
<p>The available themes are <code>light</code>, <code>dark</code>, and <code>auto</code>. For more information, refer to the <a href="https://cdn.w3cbus.com/en/docs/2/styles/dark-mode">Dark Mode</a> section.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the function:</p>
<pre><code class="language-js">import { getTheme } from &#39;mdui/functions/getTheme.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-js">// Get the theme on &lt;html&gt;
getTheme();

// Get the theme on an element with class=&quot;element&quot;
getTheme(&#39;.element&#39;);

// Get the theme on a specified DOM element
const element = document.querySelector(&#39;.element&#39;);
getTheme(element);
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="nohighlight">getTheme(target?: string | HTMLElement | <a href="https://cdn.w3cbus.com/en/docs/2/functions/jq">JQ</a>&lt;HTMLElement&gt;): 'light' | 'dark' | 'auto'</code></pre>

<p>This function retrieves the theme of a specified element. The target can be a CSS selector, a DOM element, or a <a href="https://cdn.w3cbus.com/en/docs/2/functions/jq">JQ object</a>. If no target is provided, it defaults to the <code>&lt;html&gt;</code> element.</p>
<p>The function returns <code>light</code>, <code>dark</code>, or <code>auto</code>. If no theme is set on the element, it defaults to <code>light</code>.</p>
`,elements:[]};export{e as default};
