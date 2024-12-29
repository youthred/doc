const t={docsHtml:`<p>让我们通过 mdui 的 CDN 和一个最简单的页面模板来开始使用 mdui。</p>
<blockquote>
<p>你正在阅读的是 mdui 2 的文档！</p>
<p>若要阅读 mdui 1 的文档，请访问 <a href="../../../../www.mdui.org/docs/index.htm"/*tpa=https://www.mdui.org/docs/*/>www.mdui.org/docs/</a>。</p>
</blockquote>
<h2 id="getting-started">
                  <a href="#getting-started">快速入门</a>
                </h2>
<p>使用 mdui 最简单的方式是直接从 CDN 引入 CSS 和 JS 文件。</p>
<p>如果你想使用 npm 安装 mdui，请参考 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/getting-started/installation">安装</a> 章节。</p>
<p><strong>引入文件</strong></p>
<p>将下面代码添加到页面的 <code>&lt;head&gt;</code> 标签中：</p>
<pre><code class="language-html">&lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/mdui@2/mdui.css&quot;&gt;
&lt;script src=&quot;https://unpkg.com/mdui@2/mdui.global.js&quot;&gt;&lt;/script&gt;
</code></pre>
<p>如果你需要使用组件的图标属性（例如 <code>&lt;mdui-button icon=&quot;search&quot;&gt;&lt;/mdui-button&gt;</code> 中的 <code>icon</code> 属性），则还需要引入图标的 CSS 文件，参见 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/icon#usage-material-icons">使用 Material Icons 图标</a>。</p>
<p>mdui 不依赖任何第三方库，引入上述文件后，就能正常工作了。</p>
<h2 id="template">
                  <a href="#template">最简单的页面模板</a>
                </h2>
<p>下面是一个最简单的页面模板，你可以在其中添加更多组件和内容，来构建一个网站。</p>
<pre><code class="language-html">&lt;!doctype html&gt;
&lt;html lang=&quot;zh-CN&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no&quot;/&gt;
    &lt;meta name=&quot;renderer&quot; content=&quot;webkit&quot;/&gt;

    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/mdui@2/mdui.css&quot;&gt;
    &lt;script src=&quot;https://unpkg.com/mdui@2/mdui.global.js&quot;&gt;&lt;/script&gt;
    &lt;!-- 如果使用了组件的 icon 属性，还需要引入图标的 CSS 文件 --&gt;

    &lt;title&gt;Hello, world!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;mdui-button&gt;Hello, world!&lt;/mdui-button&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
`,elements:[]};export{t as default};
