const e={docsHtml:`<p>The <code>observeResize</code> function allows you to monitor changes in an element&#39;s size and execute a callback when the size changes.</p>
<p>This function utilizes the <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver" target="_blank" rel="noopener nofollow"><code>ResizeObserver</code></a> API and implements the singleton pattern for enhanced performance.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the function:</p>
<pre><code class="language-js">import { observeResize } from &#39;mdui/functions/observeResize.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-js">// Listen for size changes on document.body
const observer = observeResize(document.body, function(entry, observer) {
  // At this point, document.body&#39;s size has changed. You can get the new size from entry.
  console.log(entry);

  // Call this method to stop observing
  observer.unobserve();
});

// You can also call the unobserve method on the function&#39;s return value to stop observing
observer.unobserve();
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="nohighlight">observeResize(target: string | HTMLElement | <a href="https://cdn.w3cbus.com/en/docs/2/functions/jq">JQ</a>&lt;HTMLElement&gt;, callback: <a href="#api-callback">Callback</a>)): <a href="#api-ObserveResize">ObserveResize</a></code></pre>

<p>The <code>target</code> parameter can be a CSS selector, a DOM element, or a <a href="https://cdn.w3cbus.com/en/docs/2/functions/jq">JQ object</a>.</p>
<h3 id="api-Callback">
                  <a href="#api-Callback">Callback</a>
                </h3>
<pre><code class="nohighlight">(entry: <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserverEntry" target="_blank" rel="noopener nofollow">ResizeObserverEntry</a>, observer: <a href="#api-ObserveResize">ObserveResize</a>) => void</code></pre>

<p>In this function, <code>this</code> also refers to <a href="#api-ObserveResize">ObserveResize</a>.</p>
<h3 id="api-ObserveResize">
                  <a href="#api-ObserveResize">ObserveResize</a>
                </h3>
<pre><code class="language-ts">{
  unobserve: () =&gt; void;
}
</code></pre>
`,elements:[]};export{e as default};
