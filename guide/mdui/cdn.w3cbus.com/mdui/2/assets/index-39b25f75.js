const t={docsHtml:`<p>Let&#39;s begin by incorporating mdui into a basic page template using a CDN.</p>
<blockquote>
<p>You are currently reading the documentation for mdui 2!</p>
<p>For mdui 1 documentation, please visit <a href="../../../../www.mdui.org/docs/index.htm"/*tpa=https://www.mdui.org/docs/*/>www.mdui.org/docs/</a>.</p>
</blockquote>
<h2 id="getting-started">
                  <a href="#getting-started">Getting Started</a>
                </h2>
<p>To use mdui, import the CSS and JS files from the CDN.</p>
<p>For npm installation instructions, refer to the <a href="https://cdn.w3cbus.com/en/docs/2/getting-started/installation">Installation</a> section.</p>
<p><strong>Importing Files</strong></p>
<p>Add the following lines to your page&#39;s <code>&lt;head&gt;</code> tag:</p>
<pre><code class="language-html">&lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/mdui@2/mdui.css&quot;&gt;
&lt;script src=&quot;https://unpkg.com/mdui@2/mdui.global.js&quot;&gt;&lt;/script&gt;
</code></pre>
<p>To utilize the icon attribute (for example, <code>icon=&quot;search&quot;</code> in <code>&lt;mdui-button icon=&quot;search&quot;&gt;&lt;/mdui-button&gt;</code>), include the CSS file for the icon. Refer to <a href="https://cdn.w3cbus.com/en/docs/2/components/icon#usage-material-icons">Using Material Icons</a> for more information.</p>
<p>mdui operates independently of third-party libraries and is ready to use once the files are included.</p>
<h2 id="template">
                  <a href="#template">Simplest Page Template</a>
                </h2>
<p>Below is the simplest page template. You can add more components and content to build your website.</p>
<pre><code class="language-html">&lt;!doctype html&gt;
&lt;html lang=&quot;zh-CN&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no&quot;/&gt;
    &lt;meta name=&quot;renderer&quot; content=&quot;webkit&quot;/&gt;

    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/mdui@2/mdui.css&quot;&gt;
    &lt;script src=&quot;https://unpkg.com/mdui@2/mdui.global.js&quot;&gt;&lt;/script&gt;
    &lt;!-- Include the icon&#39;s CSS file if using the icon attribute --&gt;

    &lt;title&gt;Hello, world!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;mdui-button&gt;Hello, world!&lt;/mdui-button&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
`,elements:[]};export{t as default};
