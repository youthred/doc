const e={docsHtml:`<p>mdui is built with browser-native Web Components, making it compatible with all web frameworks. Here are ways to use mdui with popular frameworks.</p>
<h2 id="Aurelia">
                  <a href="#Aurelia">Aurelia</a>
                </h2>
<p>After completing the <a href="https://cdn.w3cbus.com/en/docs/2/getting-started/installation#npm">installation</a> of mdui, you&#39;ll need to install and configure an additional package (Aurelia 2 only):</p>
<pre><code class="language-bash">npm install aurelia-mdui --save
</code></pre>
<p>and connect it to your application:</p>
<pre><code class="language-typescript">import { MduiWebTask } from &#39;aurelia-mdui&#39;;

Aurelia
  .register(MduiWebTask)
  .app(MyApp)
  .start();
</code></pre>
<p><strong>Notes</strong></p>
<p>Please send bug reports to <a href="https://github.com/mreiche/aurelia-mdui" target="_blank" rel="noopener nofollow">https://github.com/mreiche/aurelia-mdui</a></p>
<h2 id="WebCell">
                  <a href="#WebCell">WebCell</a>
                </h2>
<p>To integrate mdui with <a href="https://web-cell.dev/" target="_blank" rel="noopener nofollow">WebCell</a>, start by following the steps on the <a href="https://cdn.w3cbus.com/en/docs/2/getting-started/installation#npm">installation</a> page, first-class Web components, TypeScript &amp; JSX supports is out of box.</p>
<p>Or you can create a new project with <a href="https://github.com/EasyWebApp/WebCell-mobile" target="_blank" rel="noopener nofollow">the official GitHub template repository</a> by <a href="https://github.com/new?template_name=WebCell-mobile&template_owner=EasyWebApp" target="_blank" rel="noopener nofollow">clicking only one button</a>.</p>
`,elements:[]};export{e as default};
