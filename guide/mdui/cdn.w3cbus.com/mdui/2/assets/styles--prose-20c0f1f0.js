const t={docsHtml:`<p>mdui 提供了 <code>mdui-prose</code> 和 <code>mdui-table</code> CSS 类，专门用于优化文章和表格的样式。</p>
<h2 id="prose">
                  <a href="#prose">文章排版</a>
                </h2>
<p>可以在文章的父元素上添加 <code>mdui-prose</code> 类，这样可以优化整篇文章的显示样式，包括文章中的 <code>&lt;table&gt;</code> 表格样式。例如：</p>
<pre><code class="language-html">&lt;div class=&quot;mdui-prose&quot;&gt;
  &lt;h1&gt;标题&lt;/h1&gt;
  &lt;p&gt;正文&lt;/p&gt;
  &lt;table&gt;

  &lt;/table&gt;
&lt;/div&gt;
</code></pre>
<h2 id="table">
                  <a href="#table">表格样式</a>
                </h2>
<p>在 <code>&lt;table&gt;</code> 元素上添加 <code>mdui-table</code> 类，可以优化表格的显示样式。例如：</p>
<pre><code class="language-html">&lt;table class=&quot;mdui-table&quot;&gt;

&lt;/table&gt;
</code></pre>
<p>如果你希望表格能在其父元素内横向滚动，可以在 <code>&lt;table&gt;</code> 元素的父元素上添加 <code>mdui-table</code> 类。例如：</p>
<pre><code class="language-html">&lt;div class=&quot;mdui-table&quot;&gt;
  &lt;table&gt;

  &lt;/table&gt;
&lt;/div&gt;
</code></pre>
`,elements:[]};export{t as default};
