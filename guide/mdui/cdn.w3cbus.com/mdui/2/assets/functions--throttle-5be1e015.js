const e={docsHtml:`<p><code>throttle</code> 函数用于创建一个节流函数，该函数在指定的时间间隔内最多只执行一次。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入函数：</p>
<pre><code class="language-js">import { throttle } from &#39;mdui/functions/throttle.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-js">// 这个函数在 100 毫秒内最多执行一次，可避免在滚动时过于频繁地调用该函数
window.addEventListener(&#39;scroll&#39;, throttle(() =&gt; {
  console.log(&#39;update&#39;);
}, 100));
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="language-ts">throttle(func: Function, wait: number): Function
</code></pre>
<p>函数的第一个参数是需要进行节流操作的函数，第二个参数是指定的时间间隔（单位：毫秒）。函数的返回值是经过节流处理的函数。</p>
`,elements:[]};export{e as default};
