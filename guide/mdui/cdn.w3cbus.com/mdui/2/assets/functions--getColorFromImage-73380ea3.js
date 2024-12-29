const e={docsHtml:`<p><code>getColorFromImage</code> 函数用于从指定图片中提取主色调。获取主色调后，你可以使用 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/setColorScheme"><code>setColorScheme</code></a> 函数来设置配色方案，从而实现<a href="https://cdn.w3cbus.com/zh-cn/docs/2/styles/dynamic-color">动态配色</a>功能。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入函数：</p>
<pre><code class="language-js">import { getColorFromImage } from &#39;mdui/functions/getColorFromImage.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-js">const image = new Image();
image.src = &quot;demo.png&quot;;

getColorFromImage(image).then(color =&gt; {
  console.log(color);
});
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="nohighlight">getColorFromImage(image: string | HTMLImageElement | <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/jq">JQ</a>&lt;HTMLImageElement&gt;): Promise&lt;string&gt;</code></pre>

<p>函数接收一个 <code>&lt;img&gt;</code> 元素的 CSS 选择器、或 <code>HTMLImageElement</code> 对象，或包含 <code>&lt;img&gt;</code> 元素的 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/jq">JQ 对象</a> 作为参数。</p>
<p>返回值为 Promise，Promise 的值为图片主色调的十六进制颜色值（如 <code>#ff0000</code>）。</p>
`,elements:[]};export{e as default};
