const e={docsHtml:`<p>After completing the <a href="https://cdn.w3cbus.com/en/docs/2/getting-started/installation#npm">installation</a> of mdui in Vue, you&#39;ll need to perform some additional configurations.</p>
<h2 id="configuration">
                  <a href="#configuration">Configuration</a>
                </h2>
<p>To prevent Vue from interpreting mdui components as Vue components, you&#39;ll need to adjust the <code>compilerOptions.isCustomElement</code> option in the <code>vite.config file</code>:</p>
<pre><code class="language-js">// vite.config.js
import vue from &#39;@vitejs/plugin-vue&#39;

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Treat all tags starting with mdui- as mdui components
          isCustomElement: (tag) =&gt; tag.startsWith(&#39;mdui-&#39;)
        }
      }
    })
  ]
}
</code></pre>
<p>For more information, please refer to the <a href="https://cn.vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue" target="_blank" rel="noopener nofollow">Vue official documentation</a>.</p>
<h2 id="notes">
                  <a href="#notes">Notes</a>
                </h2>
<h3 id="data-binding">
                  <a href="#data-binding">Two-way Data Binding</a>
                </h3>
<p>The <code>v-model</code> directive cannot be used for two-way data binding with mdui components. Instead, you&#39;ll need to manually manage data binding and updates. For example:</p>
<pre><code class="language-html">&lt;mdui-text-field
  :value=&quot;name&quot;
  @input=&quot;name = $event.target.value&quot;
&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="eslint">
                  <a href="#eslint">eslint Configuration</a>
                </h3>
<p>If you&#39;re using <a href="https://www.npmjs.com/package/eslint-plugin-vue" target="_blank" rel="noopener nofollow"><code>eslint-plugin-vue</code></a>, you&#39;ll need to add the following rule to your <code>.eslintrc.js</code>:</p>
<pre><code class="language-js">rules: {
  &#39;vue/no-deprecated-slot-attribute&#39;: &#39;off&#39;
}
</code></pre>
`,elements:[]};export{e as default};
