const e={docsHtml:`<p><code>observeResize</code> 函数用于监听元素尺寸的变化，当尺寸发生变化时，会执行指定的回调函数。</p>
<p>该函数使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver" target="_blank" rel="noopener nofollow"><code>ResizeObserver</code></a> 实现，但采用了单例模式，因此性能更优。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入函数：</p>
<pre><code class="language-js">import { observeResize } from &#39;mdui/functions/observeResize.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-js">// 监听 document.body 的尺寸变化
const observer = observeResize(document.body, function(entry, observer) {
  // 此时 document.body 的尺寸发生了变化，可通过 entry 获取新的尺寸
  console.log(entry);

  // 可调用该方法取消监听
  observer.unobserve();
});

// 也可以调用函数返回值的 unobserve 方法取消监听
observer.unobserve();
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="nohighlight">observeResize(target: string | HTMLElement | <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/jq">JQ</a>&lt;HTMLElement&gt;, callback: <a href="#api-callback">Callback</a>)): <a href="#api-ObserveResize">ObserveResize</a></code></pre>

<p><code>target</code> 参数可以是 CSS 选择器、DOM 元素、或 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/jq">JQ 对象</a>。</p>
<h3 id="api-Callback">
                  <a href="#api-Callback">Callback</a>
                </h3>
<pre><code class="nohighlight">(entry: <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserverEntry" target="_blank" rel="noopener nofollow">ResizeObserverEntry</a>, observer: <a href="#api-ObserveResize">ObserveResize</a>) => void</code></pre>

<p>在回调函数中，<code>this</code> 指向 <a href="#api-ObserveResize">ObserveResize</a>。</p>
<h3 id="api-ObserveResize">
                  <a href="#api-ObserveResize">ObserveResize</a>
                </h3>
<pre><code class="language-ts">{
  unobserve: () =&gt; void;
}
</code></pre>
`,elements:[]};export{e as default};
