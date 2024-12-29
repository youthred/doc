const e={docsHtml:`<p>All mdui components support dark mode and can automatically switch themes based on the operating system&#39;s settings.</p>
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

<p>Switch between light and dark themes by clicking the <mdui-icon class="dark-mode-light-visible" name="light_mode--outlined" style="vertical-align: middle"></mdui-icon><mdui-icon class="dark-mode-dark-visible" name="dark_mode--outlined" style="vertical-align: middle"></mdui-icon> icons in the top right corner of the documentation page. This allows you to preview component appearance in different themes.</p>
<p>To enable dark mode, add the <code>mdui-theme-dark</code> class to the <code>&lt;html&gt;</code> tag:</p>
<pre><code class="language-html">&lt;html class=&quot;mdui-theme-dark&quot;&gt;

&lt;/html&gt;
</code></pre>
<p>For automatic theme switching based on the operating system settings, use the <code>mdui-theme-auto</code> class:</p>
<pre><code class="language-html">&lt;html class=&quot;mdui-theme-auto&quot;&gt;

&lt;/html&gt;
</code></pre>
<p>You can apply different themes to different containers within a page. For example, the following example sets dark mode on the <code>&lt;html&gt;</code> tag, but a nested <code>&lt;div&gt;</code> uses the <code>mdui-theme-light</code> class. As a result, elements within this div display in light mode, while the rest of the page remains in dark mode:</p>
<pre><code class="language-html">&lt;html class=&quot;mdui-theme-dark&quot;&gt;
  &lt;body&gt;
    &lt;div class=&quot;mdui-theme-light&quot;&gt;
      &lt;!-- Elements in light mode here --&gt;
    &lt;/div&gt;

    &lt;!-- Elements in dark mode here --&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>mdui also provides two functions for convenient theme manipulation:</p>
<ul>
<li><a href="https://cdn.w3cbus.com/en/docs/2/functions/getTheme"><code>getTheme</code></a>: Retrieves the current theme on the entire page or a specified element.</li>
<li><a href="https://cdn.w3cbus.com/en/docs/2/functions/setTheme"><code>setTheme</code></a>: Applies a theme to the entire page or a specified element.</li>
</ul>
<hr>
<p>Note: mdui sets <code>color</code> and <code>background-color</code> styles on <code>:root</code>, <code>.mdui-theme-light</code>, <code>.mdui-theme-dark</code>, and <code>.mdui-theme-auto</code> selectors. If you prefer different styles, feel free to override these defaults.</p>
<p>For example, to set the background color to pure white and text color to pure black in light mode, and vice versa in dark mode, use the following CSS:</p>
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
