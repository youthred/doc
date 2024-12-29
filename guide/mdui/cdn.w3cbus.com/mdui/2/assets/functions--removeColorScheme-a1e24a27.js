const e={docsHtml:`<p>The <code>removeColorScheme</code> function is used to remove the color scheme from the current page or a specified element. For more details, see <a href="https://cdn.w3cbus.com/en/docs/2/styles/dynamic-color">Dynamic Color</a>.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the function:</p>
<pre><code class="language-js">import { removeColorScheme } from &#39;mdui/functions/removeColorScheme.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-js">// Remove the color scheme from &lt;html&gt;
removeColorScheme();

// Remove the color scheme from an element with class=&quot;element&quot;
removeColorScheme(&#39;.element&#39;);

// Remove the color scheme from a specified DOM element
const element = document.querySelector(&#39;.element&#39;);
removeColorScheme(element);
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="nohighlight">removeColorScheme(target?: string | HTMLElement | <a href="https://cdn.w3cbus.com/en/docs/2/functions/jq">JQ</a>&lt;HTMLElement&gt;): void</code></pre>

<p>This function accepts an optional parameter, target, which specifies the element from which to remove the color scheme. The target can be a CSS selector, a DOM element, or a <a href="https://cdn.w3cbus.com/en/docs/2/functions/jq">JQ object</a>. If no parameter is provided, the function defaults to <code>document.documentElement</code>, the <code>&lt;html&gt;</code> element.</p>
`,elements:[]};export{e as default};
