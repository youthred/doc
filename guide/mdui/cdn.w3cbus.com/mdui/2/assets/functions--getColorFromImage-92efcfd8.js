const e={docsHtml:`<p>The <code>getColorFromImage</code> function is designed to extract the dominant color from an image.</p>
<p>The extracted color can be used in conjunction with the <a href="https://cdn.w3cbus.com/en/docs/2/functions/setColorScheme"><code>setColorScheme</code></a> function to implement <a href="https://cdn.w3cbus.com/en/docs/2/styles/dynamic-color">dynamic color</a> functionality.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the function:</p>
<pre><code class="language-js">import { getColorFromImage } from &#39;mdui/functions/getColorFromImage.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-js">const image = new Image();
image.src = &quot;demo.png&quot;;

getColorFromImage(image).then(color =&gt; {
  console.log(color);
});
</code></pre>
<h2 id="api">
                  <a href="#api">API</a>
                </h2>
<pre><code class="nohighlight">getColorFromImage(image: string | HTMLImageElement | <a href="https://cdn.w3cbus.com/en/docs/2/functions/jq">JQ</a>&lt;HTMLImageElement&gt;): Promise&lt;string&gt;</code></pre>

<p>This function takes a CSS selector for an <code>&lt;img&gt;</code> element, an <code>HTMLImageElement</code> object, or a <a href="https://cdn.w3cbus.com/en/docs/2/functions/jq">JQ object</a> representing an <code>&lt;img&gt;</code> element as its parameter.</p>
<p>It returns a Promise that resolves to the hexadecimal color value of the dominant color in the image (e.g., <code>#ff0000</code>).</p>
`,elements:[]};export{e as default};
