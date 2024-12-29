const e={docsHtml:`<p>The <code>throttle</code> function is used to create a throttled function that can be executed at most once within a specified time interval.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the function:</p>
<pre><code class="language-js">import { throttle } from &#39;mdui/functions/throttle.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-js">// This function executes at most once within 100 milliseconds, preventing frequent calls during scrolling
window.addEventListener(&#39;scroll&#39;, throttle(() =&gt; {
  console.log(&#39;update&#39;);
}, 100));
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="language-ts">throttle(func: Function, wait: number): Function
</code></pre>
<p>The function accepts two parameters. The first parameter, is the function to throttle. The second parameter, is the number of milliseconds to delay before the function can be invoked again. The function returns the throttled version of the provided function.</p>
`,elements:[]};export{e as default};
