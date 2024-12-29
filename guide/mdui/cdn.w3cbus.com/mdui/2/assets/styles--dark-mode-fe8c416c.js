const e={docsHtml:`<p>mdui 的所有组件都支持暗色模式，并且支持根据操作系统的设置自动切换主题。</p>
<style>
.dark-mode-light-visible,
.dark-mode-dark-visible {
  display: none;
}

.mdui-theme-light {
  .dark-mode-light-visible {
    display: inline-block;
  }
}
.mdui-theme-dark {
  .dark-mode-dark-visible {
    display: inline-block;
  }
}

@media (prefers-color-scheme: light) {
  .mdui-theme-auto .dark-mode-light-visible {
    display: inline-block;
  }
}
@media (prefers-color-scheme: dark) {
  .mdui-theme-auto .dark-mode-dark-visible {
    display: inline-block;
  }
}
</style>

<p>你可以随时点击文档页面右上角的 <mdui-icon class="dark-mode-light-visible" name="light_mode--outlined" style="vertical-align: middle"></mdui-icon><mdui-icon class="dark-mode-dark-visible" name="dark_mode--outlined" style="vertical-align: middle"></mdui-icon> 图标来切换主题，以查看各个组件在不同主题下的显示效果。</p>
<p>如果要使用暗色模式，只需在 <code>&lt;html&gt;</code> 标签上添加 <code>mdui-theme-dark</code> 类即可：</p>
<pre><code class="language-html">&lt;html class=&quot;mdui-theme-dark&quot;&gt;

&lt;/html&gt;
</code></pre>
<p>如果要让主题根据操作系统设置自动切换，只需在 <code>&lt;html&gt;</code> 标签上添加 <code>mdui-theme-auto</code> 类即可：</p>
<pre><code class="language-html">&lt;html class=&quot;mdui-theme-auto&quot;&gt;

&lt;/html&gt;
</code></pre>
<p>也可以在页面的不同部分使用不同的主题。例如下面的示例，在 <code>&lt;html&gt;</code> 上设置暗色模式，但在页面中的一个 <code>&lt;div&gt;</code> 上添加了 <code>mdui-theme-light</code> 类，这样该 div 中的元素将显示为亮色模式，而页面其余部分则为暗色模式：</p>
<pre><code class="language-html">&lt;html class=&quot;mdui-theme-dark&quot;&gt;
  &lt;body&gt;
    &lt;div class=&quot;mdui-theme-light&quot;&gt;
      &lt;!-- 这里是亮色模式 --&gt;
    &lt;/div&gt;

    &lt;!-- 这里是暗色模式 --&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>除了直接添加 CSS 类外，mdui 还提供了两个函数，可以更便捷的操作主题：</p>
<ul>
<li><a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/getTheme"><code>getTheme</code></a>：获取当前页面、或指定元素上的主题。</li>
<li><a href="https://cdn.w3cbus.com/zh-cn/docs/2/functions/setTheme"><code>setTheme</code></a>：设置当前页面、或指定元素上的主题。</li>
</ul>
<hr>
<p>需要注意的是，mdui 在 <code>:root</code> 及 <code>.mdui-theme-light</code>、<code>.mdui-theme-dark</code>、<code>.mdui-theme-auto</code> 选择器上设置了 <code>color</code> 和 <code>background-color</code> 样式，如果你不喜欢这些默认样式，可以自行进行覆盖。</p>
<p>下面示例将亮色模式下的页面背景设为纯白，文字设为纯黑；且暗色模式下页面背景设为纯黑，文字设为纯白：</p>
<pre><code class="language-css">:root,
.mdui-theme-light {
  color: #000;
  background-color: #fff;
}

.mdui-theme-dark {
  color: #fff;
  background-color: #000;
}

@media (prefers-color-scheme: dark) {
  .mdui-theme-auto {
    color: #fff;
    background-color: #000;
  }
}
</code></pre>
`,elements:[]};export{e as default};
