const e={docsHtml:`<p>在 Vue 中使用 mdui 时，首先需要按照 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/getting-started/installation#npm">安装</a> 页面的指引完成安装，然后进行一些必要的配置。</p>
<h2 id="configuration">
                  <a href="#configuration">配置</a>
                </h2>
<p>你需要配置 Vue，使其不将 mdui 组件解析为 Vue 组件。在 <code>vite.config</code> 文件中，设置 <code>compilerOptions.isCustomElement</code> 选项即可：</p>
<pre><code class="language-js">// vite.config.js
import vue from &#39;@vitejs/plugin-vue&#39;

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 所有以 mdui- 开头的标签名都是 mdui 组件
          isCustomElement: (tag) =&gt; tag.startsWith(&#39;mdui-&#39;)
        }
      }
    })
  ]
}
</code></pre>
<p>关于这个配置的详细信息，你可以参考 <a href="https://cn.vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue" target="_blank" rel="noopener nofollow">Vue 官方文档</a>。</p>
<h2 id="notes">
                  <a href="#notes">注意事项</a>
                </h2>
<h3 id="data-binding">
                  <a href="#data-binding">双向数据绑定</a>
                </h3>
<p>在 mdui 组件上，你不能使用 <code>v-model</code> 进行双向数据绑定。你需要自行处理数据的绑定与更新。例如：</p>
<pre><code class="language-html">&lt;mdui-text-field
  :value=&quot;name&quot;
  @input=&quot;name = $event.target.value&quot;
&gt;&lt;/mdui-text-field&gt;
</code></pre>
<h3 id="eslint">
                  <a href="#eslint">eslint 配置</a>
                </h3>
<p>如果你使用了 <a href="https://www.npmjs.com/package/eslint-plugin-vue" target="_blank" rel="noopener nofollow"><code>eslint-plugin-vue</code></a>，需要在 <code>.eslintrc.js</code> 中添加以下规则：</p>
<pre><code class="language-js">rules: {
  &#39;vue/no-deprecated-slot-attribute&#39;: &#39;off&#39;
}
</code></pre>
`,elements:[]};export{e as default};
