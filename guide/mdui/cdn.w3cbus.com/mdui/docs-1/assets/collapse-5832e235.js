import{D as o}from"Demo-5062ffc5.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/Demo-5062ffc5.js*/;import{T as c,_ as u}from"MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js*/;import{d as p,c as r,a as t,b as i,e,w as s,g as d,F as n,f as v,o as h,t as m}from"index-15cb1481.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/index-15cb1481.js*/;const b={class:"intro mdui-typo"},g={class:"intro-module"},f={class:"chapter"},y={class:"mdui-typo"},k=p({__name:"collapse",setup(w){return(q,l)=>{const a=v("router-link");return h(),r(n,null,[t(c),l[17]||(l[17]=i("h1",{class:"title mdui-text-color-theme"},"Collapse 折叠内容块插件",-1)),i("div",b,[l[5]||(l[5]=i("p",null,"Collapse 插件用于折叠或展开内容块。",-1)),l[6]||(l[6]=i("p",null,"该插件本身不带任何样式，你需要自行编写样式、或者与其他组件配合使用。",-1)),i("div",g,[l[4]||(l[4]=i("h3",null,"调用方式",-1)),i("ol",null,[i("li",null,[l[1]||(l[1]=e(" 通过自定义属性调用（若组件是动态生成的，则需要调用 ")),t(a,{to:"/docs/global#mutation"},{default:s(()=>l[0]||(l[0]=[i("code",null,"mdui.mutation()",-1)])),_:1}),l[2]||(l[2]=e(" 进行初始化） "))]),l[3]||(l[3]=i("li",null,"通过 JavaScript 调用",-1))])])]),t(u,{class:"first-screen"}),l[18]||(l[18]=d('<nav class="toc mdui-text-color-theme"><ul><li><a href="#html">HTML 结构</a></li><li><a href="#call">调用方式</a><ul><li><a href="#attr">通过自定义属性调用</a></li><li><a href="#js">通过 JavaScript 调用</a></li><li><a href="#option">参数</a></li><li><a href="#method">方法</a></li><li><a href="#event">事件</a></li></ul></li><li><a href="#demo">更多示例</a><ul><li><a href="#sublist">子列表</a></li></ul></li></ul></nav>',1)),i("div",f,[l[15]||(l[15]=d(`<div class="mdui-typo"><h2 class="chapter-title chapter-title-first mdui-text-color-theme"> HTML 结构 <a class="anchor" id="html"></a></h2><p>这是一个最基础的 HTML 结构：</p><pre><code class="language-html">&lt;div class=&quot;mdui-collapse&quot;&gt;
  &lt;div class=&quot;mdui-collapse-item&quot;&gt;
    &lt;div class=&quot;mdui-collapse-item-header&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;mdui-collapse-item-body&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre><p> 添加类 <code>.mdui-collapse-item-open</code> 可以使内容块处于默认展开状态： </p><pre><code class="language-html">&lt;div class=&quot;mdui-collapse&quot;&gt;
  &lt;div class=&quot;mdui-collapse-item mdui-collapse-item-open&quot;&gt;
    &lt;div class=&quot;mdui-collapse-item-header&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;mdui-collapse-item-body&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre><p> 含类 <code>.mdui-collapse-item-arrow</code> 的元素会在内容块展开时翻转 180 度： </p><pre><code class="language-html">&lt;div class=&quot;mdui-collapse&quot;&gt;
  &lt;div class=&quot;mdui-collapse-item&quot;&gt;
    &lt;div class=&quot;mdui-collapse-item-header&quot;&gt;
      &lt;div class=&quot;mdui-collapse-item-arrow&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;mdui-collapse-item-body&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre></div>`,1)),i("div",y,[l[10]||(l[10]=d('<h2 class="chapter-title mdui-text-color-theme"> 调用方式 <a class="anchor" id="call"></a></h2><h4 class="article-title"> 通过自定义属性调用 <a class="anchor" id="attr"></a></h4><p> 使用该方式无需编写 JavaScript 代码。只需在 <code>&lt;div class=&quot;mdui-collapse&quot;&gt;&lt;/div&gt;</code> 元素上添加 <code>mdui-collapse=&quot;<a href="#option">options</a>&quot;</code> 属性即可激活该插件。 </p>',3)),i("p",null,[l[8]||(l[8]=e(" 若组件是动态生成的，则需要调用 ")),t(a,{to:"/docs/global#mutation"},{default:s(()=>l[7]||(l[7]=[i("code",null,"mdui.mutation()",-1)])),_:1}),l[9]||(l[9]=e(" 进行初始化。 "))])]),t(o,{"view-source":"",language:"xml","online-url":"./collapse/demo1"},{demo:s(()=>l[11]||(l[11]=[i("div",{class:"mdui-collapse","mdui-collapse":""},[i("div",{class:"mdui-collapse-item"},[i("div",{class:"mdui-collapse-item-header"},[i("p",null,[i("a",{href:"javascript:;"},"item1")])]),i("div",{class:"mdui-collapse-item-body"},[i("p",null,"item1 content"),i("p",null,"item1 content"),i("p",null,"item1 content"),i("div",{class:"mdui-collapse","mdui-collapse":""},[i("div",{class:"mdui-collapse-item"},[i("div",{class:"mdui-collapse-item-header"},[i("p",null,[i("a",{href:"javascript:;"},"subitem1")])]),i("div",{class:"mdui-collapse-item-body"},[i("p",null,"subitem1 content"),i("p",null,"subitem1 content"),i("p",null,"subitem1 content")])])])])]),i("div",{class:"mdui-collapse-item"},[i("div",{class:"mdui-collapse-item-header"},[i("p",null,[i("a",{href:"javascript:;"},"item2")])]),i("div",{class:"mdui-collapse-item-body"},[i("p",null,"item2 content"),i("p",null,"item2 content"),i("p",null,"item2 content")])]),i("div",{class:"mdui-collapse-item"},[i("div",{class:"mdui-collapse-item-header"},[i("p",null,[i("a",{href:"javascript:;"},"item3")])]),i("div",{class:"mdui-collapse-item-body"},[i("p",null,"item3 content"),i("p",null,"item3 content"),i("p",null,"item3 content")])])],-1)])),code:s(()=>l[12]||(l[12]=[e(m(`<div class="mdui-collapse" mdui-collapse>

  <div class="mdui-collapse-item">
    <div class="mdui-collapse-item-header">
      <p><a href="javascript:;">item1</a></p>
    </div>
    <div class="mdui-collapse-item-body">
      <p>item1 content</p>
      <p>item1 content</p>
      <p>item1 content</p>

      <!-- 嵌套元素 -->
      <div class="mdui-collapse" mdui-collapse>
        <div class="mdui-collapse-item">
          <div class="mdui-collapse-item-header">
            <p><a href="javascript:;">subitem1</a></p>
          </div>
          <div class="mdui-collapse-item-body">
            <p>subitem1 content</p>
            <p>subitem1 content</p>
            <p>subitem1 content</p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="mdui-collapse-item">
    <div class="mdui-collapse-item-header">
      <p><a href="javascript:;">item2</a></p>
    </div>
    <div class="mdui-collapse-item-body">
      <p>item2 content</p>
      <p>item2 content</p>
      <p>item2 content</p>
    </div>
  </div>

  <div class="mdui-collapse-item">
    <div class="mdui-collapse-item-header">
      <p><a href="javascript:;">item3</a></p>
    </div>
    <div class="mdui-collapse-item-body">
      <p>item3 content</p>
      <p>item3 content</p>
      <p>item3 content</p>
    </div>
  </div>

</div>`))])),_:1}),l[16]||(l[16]=d(`<div class="mdui-typo"><p> 在 Collapse 内的元素上可以添加一些属性来绑定事件，这些属性在使用 JavaScript 调用方式时也可以使用。 </p><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td><code>mdui-collapse-item-close</code></td><td> 点击该元素会触发 <code>close.mdui.collapse</code> 事件，并关闭该元素所处的面板。 </td></tr></tbody></table></div></div><div class="mdui-typo"><h4 class="article-title"> 通过 JavaScript 调用 <a class="anchor" id="attr"></a></h4><p>实例化插件：</p><pre><code class="language-js">// selector 为元素的 CSS 选择器或 DOM 元素
// options 为插件的参数，见下面的参数列表
var inst = new mdui.Collapse(selector, options);</code></pre></div><a href="https://cdn.w3cbus.com/mdui/docs-1/assets/collapse/demo2" target="_blank" class="mdui-btn mdui-color-theme-accent">demo</a><div class="mdui-typo"><h4 class="article-title">参数 <a class="anchor" id="option"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>参数名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>accordion</code></td><td><code>boolean</code></td><td><code>false</code></td><td> 是否启用手风琴效果。 <ul><li> 为 <code>true</code> 时，最多只能有一个内容块处于打开状态，打开一个内容块时会关闭其他内容块。 </li><li>为 <code>false</code> 时，可同时打开多个内容块。</li></ul></td></tr></tbody></table></div></div><div class="mdui-typo"><h4 class="article-title">方法 <a class="anchor" id="method"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>方法名</th><th>描述</th></tr></thead><tbody><tr><td><code>open(item)</code></td><td> 打开内容块。 <ul><li><code>item</code>：内容块的索引号、或者 DOM 元素、或者 CSS 选择器。 </li></ul></td></tr><tr><td><code>close(item)</code></td><td> 关闭内容块。 <ul><li><code>item</code>：内容块的索引号、或者 DOM 元素、或者 CSS 选择器。 </li></ul></td></tr><tr><td><code>toggle(item)</code></td><td> 切换内容块状态。 <ul><li><code>item</code>：内容块的索引号、或者 DOM 元素、或者 CSS 选择器。 </li></ul></td></tr><tr><td><code>openAll()</code></td><td> 打开所有内容块。该方法仅在 <code>accordion</code> 为 <code>false</code> 时有效。 </td></tr><tr><td><code>closeAll()</code></td><td>关闭所有内容块。</td></tr></tbody></table></div></div><div class="mdui-typo"><h4 class="article-title">事件 <a class="anchor" id="event"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>事件</th><th>描述</th><th>目标</th><th>参数</th></tr></thead><tbody><tr><td><code>open.mdui.collapse</code></td><td>内容块开始打开动画时，事件将被触发。</td><td rowspan="4"><code>&lt;div class=&quot;mdui-collapse-item&quot;&gt;&lt;/div&gt;</code></td><td rowspan="4"><code>event._detail.inst</code>：实例</td></tr><tr><td><code>opened.mdui.collapse</code></td><td>内容块结束打开动画时，事件将被触发。</td></tr><tr><td><code>close.mdui.collapse</code></td><td>内容块开始关闭动画时，事件将被触发。</td></tr><tr><td><code>closed.mdui.collapse</code></td><td>内容块结束关闭动画时，事件将被触发。</td></tr></tbody></table></div></div><div class="mdui-typo"><h2 class="chapter-title mdui-text-color-theme"> 更多示例 <a class="anchor" id="demo"></a></h2><h4 class="article-title">子列表 <a class="anchor" id="sublist"></a></h4></div>`,7)),t(o,{"view-source":"",language:"xml"},{demo:s(()=>l[13]||(l[13]=[i("ul",{class:"mdui-list","mdui-collapse":"{accordion: true}",style:{"max-width":"360px"}},[i("li",{class:"mdui-list-item mdui-ripple"},[i("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"home"),i("div",{class:"mdui-list-item-content"},"Home")]),i("li",{class:"mdui-list-item mdui-ripple"},[i("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"dashboard"),i("div",{class:"mdui-list-item-content"},"Dashboard")]),i("li",{class:"mdui-collapse-item mdui-collapse-item-open"},[i("div",{class:"mdui-collapse-item-header mdui-list-item mdui-ripple"},[i("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"people"),i("div",{class:"mdui-list-item-content"},"Audience"),i("i",{class:"mdui-collapse-item-arrow mdui-icon material-icons"},"keyboard_arrow_down")]),i("ul",{class:"mdui-collapse-item-body mdui-list mdui-list-dense"},[i("li",{class:"mdui-list-item mdui-ripple"},"Overview"),i("li",{class:"mdui-list-item mdui-ripple"},"Language"),i("li",{class:"mdui-list-item mdui-ripple"},"Location"),i("li",{class:"mdui-list-item mdui-ripple"},"New vs Returning")])]),i("li",{class:"mdui-collapse-item"},[i("div",{class:"mdui-collapse-item-header mdui-list-item mdui-ripple"},[i("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"device_hub"),i("div",{class:"mdui-list-item-content"},"Acquisition"),i("i",{class:"mdui-collapse-item-arrow mdui-icon material-icons"},"keyboard_arrow_down")]),i("ul",{class:"mdui-collapse-item-body mdui-list mdui-list-dense"},[i("li",{class:"mdui-list-item mdui-ripple"},"Overview"),i("li",{class:"mdui-list-item mdui-ripple"},"All Traffic"),i("li",{class:"mdui-list-item mdui-ripple"},"Direct Traffic"),i("li",{class:"mdui-list-item mdui-ripple"},"Search Overview")])]),i("li",{class:"mdui-collapse-item"},[i("div",{class:"mdui-collapse-item-header mdui-list-item mdui-ripple"},[i("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"touch_app"),i("div",{class:"mdui-list-item-content"},"Behavior"),i("i",{class:"mdui-collapse-item-arrow mdui-icon material-icons"},"keyboard_arrow_down")]),i("ul",{class:"mdui-collapse-item-body mdui-list mdui-list-dense"},[i("li",{class:"mdui-list-item mdui-ripple"},"Overview"),i("li",{class:"mdui-list-item mdui-ripple"},"All Pages"),i("li",{class:"mdui-list-item mdui-ripple"},"Landing Pages"),i("li",{class:"mdui-list-item mdui-ripple"},"Exit Pages")])]),i("li",{class:"mdui-list-item mdui-ripple"},[i("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"shopping_cart"),i("div",{class:"mdui-list-item-content"},"Ecommerce")])],-1)])),code:s(()=>l[14]||(l[14]=[e(m(`<ul class="mdui-list" mdui-collapse="{accordion: true}">

  <li class="mdui-list-item mdui-ripple">
    <i class="mdui-list-item-icon mdui-icon material-icons">home</i>
    <div class="mdui-list-item-content">Home</div>
  </li>

  <li class="mdui-list-item mdui-ripple">
    <i class="mdui-list-item-icon mdui-icon material-icons">dashboard</i>
    <div class="mdui-list-item-content">Dashboard</div>
  </li>

  <li class="mdui-collapse-item mdui-collapse-item-open">
    <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
      <i class="mdui-list-item-icon mdui-icon material-icons">people</i>
      <div class="mdui-list-item-content">Audience</div>
      <i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
    </div>
    <ul class="mdui-collapse-item-body mdui-list mdui-list-dense">
      <li class="mdui-list-item mdui-ripple">Overview</li>
      <li class="mdui-list-item mdui-ripple">Language</li>
      <li class="mdui-list-item mdui-ripple">Location</li>
      <li class="mdui-list-item mdui-ripple">New vs Returning</li>
    </ul>
  </li>

  <li class="mdui-collapse-item">
    <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
      <i class="mdui-list-item-icon mdui-icon material-icons">device_hub</i>
      <div class="mdui-list-item-content">Acquisition</div>
      <i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
    </div>
    <ul class="mdui-collapse-item-body mdui-list mdui-list-dense">
      <li class="mdui-list-item mdui-ripple">Overview</li>
      <li class="mdui-list-item mdui-ripple">All Traffic</li>
      <li class="mdui-list-item mdui-ripple">Direct Traffic</li>
      <li class="mdui-list-item mdui-ripple">Search Overview</li>
    </ul>
  </li>

  <li class="mdui-collapse-item">
    <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
      <i class="mdui-list-item-icon mdui-icon material-icons">touch_app</i>
      <div class="mdui-list-item-content">Behavior</div>
      <i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
    </div>
    <ul class="mdui-collapse-item-body mdui-list mdui-list-dense">
      <li class="mdui-list-item mdui-ripple">Overview</li>
      <li class="mdui-list-item mdui-ripple">All Pages</li>
      <li class="mdui-list-item mdui-ripple">Landing Pages</li>
      <li class="mdui-list-item mdui-ripple">Exit Pages</li>
    </ul>
  </li>

  <li class="mdui-list-item mdui-ripple">
    <i class="mdui-list-item-icon mdui-icon material-icons">shopping_cart</i>
    <div class="mdui-list-item-content">Ecommerce</div>
  </li>

</ul>`))])),_:1})])],64)}}});export{k as default};
