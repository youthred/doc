const e={docsHtml:`<p>mdui 使用浏览器原生支持的 Web Components 开发，因此能在所有 Web 框架中使用。下面列举了在常用框架中使用 mdui 的方法。</p>
<h2 id="Aurelia">
                  <a href="#Aurelia">Aurelia</a>
                </h2>
<p>在按照 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/getting-started/installation#npm">安装</a> 页面的指引完成安装后，还需要安装和配置一个额外的包（仅适用于 Aurelia 2）：</p>
<pre><code class="language-bash">npm install aurelia-mdui --save
</code></pre>
<p>然后将其注册到应用中：</p>
<pre><code class="language-typescript">import { MduiWebTask } from &#39;aurelia-mdui&#39;;

Aurelia
  .register(MduiWebTask)
  .app(MyApp)
  .start();
</code></pre>
<p><strong>注意</strong></p>
<p>请将错误报告发送到 <a href="https://github.com/mreiche/aurelia-mdui" target="_blank" rel="noopener nofollow">https://github.com/mreiche/aurelia-mdui</a></p>
<h2 id="WebCell">
                  <a href="#WebCell">WebCell</a>
                </h2>
<p>在 <a href="https://web-cell.dev/" target="_blank" rel="noopener nofollow">WebCell</a> 中使用 mdui 时，只需要按照 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/getting-started/installation#npm">安装</a> 页面的步骤完成安装即可，Web Components、TypeScript 和 JSX 支持是一级特性且开箱即用的。</p>
<p>或者，您可用 <a href="https://github.com/EasyWebApp/WebCell-mobile" target="_blank" rel="noopener nofollow">官方 GitHub 模板仓库</a> 来 <a href="https://github.com/new?template_name=WebCell-mobile&template_owner=EasyWebApp" target="_blank" rel="noopener nofollow">一键创建新项目</a>。</p>
`,elements:[]};export{e as default};
