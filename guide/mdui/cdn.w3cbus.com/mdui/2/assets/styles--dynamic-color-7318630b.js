const o={docsHtml:`<p>mdui 提供了动态配色功能。只需提供一个颜色值，mdui 就能自动生成一套完整的配色方案。此外，mdui 还支持从指定的壁纸中提取主色调，并据此生成配色方案。</p>
<p>你可以随时点击文档页面右上角的 <mdui-icon name="palette--outlined" style="vertical-align: middle"></mdui-icon> 图标，切换配色方案，查看各个组件在不同配色方案下的显示效果。</p>
<p>一套配色方案实际上是一组 CSS 自定义属性。mdui 组件中的颜色值都引用了这一组 CSS 自定义属性，因此可以一次性更新所有组件的配色方案。完整的 CSS 自定义属性列表请参见 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/styles/design-tokens#color">设计令牌 - 颜色</a>。</p>
<h2 id="color-scheme">
                  <a href="#color-scheme">生成配色方案</a>
                </h2>
<p>你可以使用 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/setColorScheme"><code>setColorScheme</code></a> 函数来生成配色方案。该函数接受一个十六进制颜色值作为参数，生成一套配色方案，并将页面的 <code>&lt;html&gt;</code> 元素设置为该配色方案。例如：</p>
<pre><code class="language-js">import { setColorScheme } from &#39;mdui/functions/setColorScheme.js&#39;;

// 根据 #0061a4 生成一套配色方案，并将 &lt;html&gt; 设置为该配色方案
setColorScheme(&#39;#0061a4&#39;);
</code></pre>
<p>你还可以在第二个参数中指定 <code>target</code> 属性，用于指明在哪个元素上设置配色方案。例如：</p>
<pre><code class="language-js">import { setColorScheme } from &#39;mdui/functions/setColorScheme.js&#39;;

// 根据 #0061a4 生成一套配色方案，并将 .foo 元素设置为该配色方案
setColorScheme(&#39;#0061a4&#39;, {
  target: document.querySelector(&#39;.foo&#39;)
});
</code></pre>
<p>默认情况下生成的配色方案仅包含 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/styles/design-tokens#color">设计令牌 - 颜色</a> 中所列出的颜色。你可以在第二个参数中指定 <code>customColors</code> 属性，mdui 会根据你给出的自定义颜色名和颜色值生成一组自定义颜色组。例如：</p>
<pre><code class="language-js">import { setColorScheme } from &#39;mdui/functions/setColorScheme.js&#39;;

// 根据 #0061a4 生成一套配色方案，并修改了原有的 error 颜色组的值，并添加了一组新的 music 颜色组
setColorScheme(&#39;#0061a4&#39;, {
  customColors: [
    {
      name: &#39;error&#39;,
      value: &#39;#69F0AE&#39;
    },
    {
      name: &#39;music&#39;,
      value: &#39;#FFC107&#39;
    }
  ]
});
</code></pre>
<p>一组自定义颜色组包含四个 CSS 自定义属性：</p>
<ul>
<li><code>--mdui-color-{name}</code></li>
<li><code>--mdui-color-on-{name}</code></li>
<li><code>--mdui-color-{name}-container</code></li>
<li><code>--mdui-color-on-{name}-container</code></li>
</ul>
<p>其中的 <code>{name}</code> 为你传入的 <code>customColors</code> 中的 <code>name</code> 字段名，即自定义颜色名。</p>
<p>自定义颜色名可以是默认配色方案中的已有颜色名，如 <code>primary</code>、<code>secondary</code>、<code>tertiary</code>、<code>error</code> 这些都是默认配色方案中已包含的。如果你指定了这些值作为自定义颜色名，则生成的配色方案中对应的四个 CSS 自定义属性，将用你指定的颜色值来生成。例如上面示例中指定了名为 <code>error</code> 的自定义颜色名，因为 <code>error</code> 是默认配色方案中已有的颜色名，且其对应的 CSS 自定义属性被 mdui 组件用于表示错误状态，因为现在颜色值被设置为一个绿色的值，所以 mdui 组件中的错误状态也将变为绿色。</p>
<p>自定义颜色名也可以是新增的，例如上面示例中的 <code>music</code>，是默认配色方案中不存在的，则生成的配色方案将额外包含四个 CSS 自定义属性。可以在你自己的样式中引用这些 CSS 自定义属性：</p>
<pre><code class="language-html">&lt;style&gt;
  .music {
    background-color: rgb(var(--mdui-color-music));
    color: rgb(var(--mdui-color-on-music));
  }

  .music-container {
    background-color: rgb(var(--mdui-color-music-container));
    color: rgb(var(--mdui-color-on-music-container));
  }
&lt;/style&gt;

&lt;div class=&quot;music&quot;&gt;Music&lt;/div&gt;
&lt;div class=&quot;music-container&quot;&gt;Music Container&lt;/div&gt;
</code></pre>
<p>你还可以使用 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/removeColorScheme"><code>removeColorScheme</code></a> 函数来移除通过上述方法生成的配色方案。你可以传入参数来指定移除哪个元素上的配色方案，默认情况下，它会移除 <code>&lt;html&gt;</code> 上的配色方案。</p>
<h2 id="from-wallpaper">
                  <a href="#from-wallpaper">从壁纸中提取颜色</a>
                </h2>
<p>mdui 提供了 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/getColorFromImage"><code>getColorFromImage</code></a> 函数，用于从一个给定的 <code>Image</code> 实例中提取主色调。该函数返回一个 Promise，resolve 的值即为提取的十六进制颜色值。</p>
<p>你可以使用从该函数获得的颜色值，然后调用上述文档中介绍的 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/setColorScheme"><code>setColorScheme</code></a> 函数来设置配色方案。例如：</p>
<pre><code class="language-js">import { getColorFromImage } from &#39;mdui/functions/getColorFromImage.js&#39;;
import { setColorScheme } from &#39;mdui/functions/setColorScheme.js&#39;;

const image = new Image();
image.src = &#39;image1.png&#39;;

getColorFromImage(image).then(color =&gt; setColorScheme(color));
</code></pre>
`,elements:[]};export{o as default};
