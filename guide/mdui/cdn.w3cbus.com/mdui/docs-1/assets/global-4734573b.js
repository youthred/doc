import{T as o,_ as a}from"MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js*/;import{d as i,c as l,a as e,b as c,g as s,F as d,o as n}from"index-15cb1481.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/index-15cb1481.js*/;const h=i({__name:"global",setup(u){return(m,t)=>(n(),l(d,null,[e(o),t[0]||(t[0]=c("h1",{class:"title mdui-text-color-theme"},"JavaScript 全局方法",-1)),e(a,{class:"first-screen"}),t[1]||(t[1]=s(`<nav class="toc mdui-text-color-theme"><ul><li><a href="#mutation">mdui.mutation()</a></li></ul></nav><div class="chapter"><div class="mdui-typo"><h2 class="chapter-title chapter-title-first mdui-text-color-theme"> mdui.mutation() <a class="anchor" id="mutation"></a></h2><p> MDUI 中部分组件的初始化方式为在 DOM 加载完毕后执行初始化函数，这导致动态生成组件时，组件无法自动初始化。MDUI 提供了 <code>mdui.mutation()</code> 方法来解决这个问题。 </p></div><div class="mdui-typo"><h4 class="article-title">mdui.mutation()</h4><p>调用该方法后，将初始化页面中所有未初始化的组件。</p><pre><code class="language-js">var html =
  &#39;&lt;select class=&quot;mdui-select&quot; mdui-select&gt;&#39; +
  &#39;  &lt;option value=&quot;1&quot;&gt;State 1&lt;/option&gt;&#39; +
  &#39;  &lt;option value=&quot;2&quot;&gt;State 2&lt;/option&gt;&#39; +
  &#39;  &lt;option value=&quot;3&quot;&gt;State 3&lt;/option&gt;&#39; +
  &#39;&lt;/select&gt;&#39;;

// 动态添加了一个 Select 组件，但通过自定义属性调用时，该组件无法自动初始化
$(&#39;body&#39;).append(html);

// 调用该方法，将初始化页面中所有未初始化的组件。
mdui.mutation();</code></pre></div><div class="mdui-typo"><h4 class="article-title">mdui.mutation(selector, apiInit)</h4><p> 如果为 <code>mdui.mutation()</code> 方法传入了两个参数，则可用于初始化你自行编写的组件。第一个参数为 CSS 选择器，第二个参数是初始化函数。 </p><p> 调用 <code>mdui.mutation(selector, apiInit)</code> 时，会将 CSS 选择器和初始化函数绑定，并执行 <code>$(selector).each(apiInit)</code> 调用初始化函数。 </p><p> 等到下次调用 <code>mdui.mutation()</code> 时，若 CSS 选择器对应的组件未初始化，则会自动调用初始化函数。 </p></div><div class="mdui-typo"><h4 class="article-title">$(selector).mutation()</h4><p> 若需要初始化指定元素内的组件，可以调用 <code>$(selector).mutation()</code>，该方法初始化了 selector 及其子元素中未初始化的组件。 </p></div></div>`,2))],64))}});export{h as default};
