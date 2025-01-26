import{D as a}from"./Demo-5062ffc5.js";import{T as p,_ as u}from"./MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js";import{d as c,c as r,a as i,b as t,e,w as l,g as s,t as d,F as m,f as v,o as S}from"./index-15cb1481.js";const b={class:"intro mdui-typo"},h={class:"intro-module"},g={class:"chapter"},f={class:"mdui-typo"},V=c({__name:"select",setup(y){return(w,o)=>{const n=v("router-link");return S(),r(m,null,[i(p),o[28]||(o[28]=t("h1",{class:"title mdui-text-color-theme"},"下拉选择",-1)),t("div",b,[o[6]||(o[6]=t("p",null,"下拉选择可以让用户在多个选项之间进行选择。",-1)),t("div",h,[o[5]||(o[5]=t("h3",null,"调用方式",-1)),t("ol",null,[o[3]||(o[3]=t("li",null,"通过 CSS 类调用",-1)),t("li",null,[o[1]||(o[1]=e("通过自定义属性调用（若组件是动态生成的，则需要调用 ")),i(n,{to:"/docs/global#mutation"},{default:l(()=>o[0]||(o[0]=[t("code",null,"mdui.mutation()",-1)])),_:1}),o[2]||(o[2]=e(" 进行初始化）"))]),o[4]||(o[4]=t("li",null,"通过 JavaScript 调用",-1))])]),o[7]||(o[7]=t("div",{class:"intro-module"},[t("h3",null,"相关阅读"),t("p",null,[t("a",{href:"https://www.mdui.org/zh-cn/design/1/components/buttons.html#buttons-dropdown-buttons",target:"_blank"},"Material Design 设计指南：组件 - 下拉按钮")])],-1))]),i(u,{class:"first-screen"}),o[29]||(o[29]=s('<nav class="toc mdui-text-color-theme"><ul><li><a href="#style">样式</a><ul><li><a href="#native">原生单选 select 组件</a></li><li><a href="#multiple">原生多选 select 组件</a></li></ul></li><li><a href="#call">调用方式</a><ul><li><a href="#attr">通过自定义属性调用</a></li><li><a href="#js">通过 JavaScript 调用</a></li><li><a href="#option">参数</a></li><li><a href="#method">方法</a></li><li><a href="#event">事件</a></li></ul></li><li><a href="#class">CSS 类名列表</a></li></ul></nav>',1)),t("div",g,[o[24]||(o[24]=s('<div class="mdui-typo"><h2 class="chapter-title chapter-title-first mdui-text-color-theme">样式 <a class="anchor" id="style"></a></h2><h4 class="article-title">原生单选 select 组件 <a class="anchor" id="native"></a></h4><p>在 <code>&lt;select&gt;</code> 元素上添加类 <code>.mdui-select</code> 即可为该元素赋予美化后的样式，无需调用 JavaScript。</p></div>',1)),i(a,{"view-source":"",language:"xml","online-url":"./select/demo1"},{demo:l(()=>o[8]||(o[8]=[t("select",{class:"mdui-select"},[t("option",{value:"1",selected:""},"State 1"),t("option",{value:"2"},"State 2"),t("option",{value:"3"},"State 3"),t("option",{value:"4"},"State 4"),t("option",{value:"5"},"State 5"),t("option",{value:"6"},"State 6")],-1)])),code:l(()=>o[9]||(o[9]=[e(d(`<select class="mdui-select">
  <option value="1" selected>State 1</option>
  <option value="2">State 2</option>
  <option value="3">State 3</option>
  <option value="4">State 4</option>
  <option value="5">State 5</option>
  <option value="6">State 6</option>
</select>`))])),_:1}),o[25]||(o[25]=t("div",{class:"mdui-typo"},[t("h4",{class:"article-title"},[e("原生多选 select 组件 "),t("a",{class:"anchor",id:"multiple"})]),t("p",null,[e("也可以在 "),t("code",null,d("<select multiple>")),e(" 元素上添加类 "),t("code",null,".mdui-select"),e("，使之可多选。但并不是所有浏览器都能很好的展示此样式。")])],-1)),i(a,{"view-source":"",language:"xml","online-url":"./select/demo2"},{demo:l(()=>o[10]||(o[10]=[t("select",{multiple:"",size:"8",class:"mdui-select"},[t("optgroup",{label:"Fonts"},[t("option",null,"Roboto"),t("option",null,"Calibri"),t("option",null,"Courier New"),t("option",null,"Verdana")]),t("optgroup",{label:"Size"},[t("option",null,"50%"),t("option",null,"75%"),t("option",null,"90%"),t("option",null,"100%")]),t("optgroup",{label:"header"},[t("option",null,"h1"),t("option",null,"h2"),t("option",null,"h3"),t("option",null,"h4")])],-1)])),code:l(()=>o[11]||(o[11]=[e(d(`<select multiple size="8" class="mdui-select">
  <optgroup label="Fonts">
    <option>Roboto</option>
    <option>Calibri</option>
    <option>Courier New</option>
    <option>Verdana</option>
  </optgroup>
  <optgroup label="Size">
    <option>50%</option>
    <option>75%</option>
    <option>90%</option>
    <option>100%</option>
  </optgroup>
  <optgroup label="header">
    <option>h1</option>
    <option>h2</option>
    <option>h3</option>
    <option>h4</option>
  </optgroup>
</select>`))])),_:1}),t("div",f,[o[15]||(o[15]=s('<h2 class="chapter-title mdui-text-color-theme">调用方式 <a class="anchor" id="call"></a></h2><h4 class="article-title">通过自定义属性调用 <a class="anchor" id="attr"></a></h4><p>使用该方式无需编写 JavaScript 代码。只需在 <code>&lt;select&gt;</code> 元素上添加类 <code>.mdui-select</code> 和 <code>mdui-select=&quot;<a href="#option">options</a>&quot;</code> 属性即可。</p>',3)),t("p",null,[o[13]||(o[13]=e("若组件是动态生成的，则需要调用 ")),i(n,{to:"/docs/global#mutation"},{default:l(()=>o[12]||(o[12]=[t("code",null,"mdui.mutation()",-1)])),_:1}),o[14]||(o[14]=e(" 进行初始化。"))])]),i(a,{"view-source":"",language:"xml","online-url":"./select/demo3"},{demo:l(()=>o[16]||(o[16]=[t("select",{class:"mdui-select","mdui-select":""},[t("option",{value:"1"},"State 1"),t("option",{value:"2"},"State 2"),t("option",{value:"3",disabled:""},"State 3"),t("option",{value:"4"},"State 4"),t("option",{value:"5"},"State 5"),t("option",{value:"6"},"State 6")],-1)])),code:l(()=>o[17]||(o[17]=[e(d(`<select class="mdui-select" mdui-select>
  <option value="1">State 1</option>
  <option value="2">State 2</option>
  <option value="3" disabled>State 3</option>
  <option value="4">State 4</option>
  <option value="5">State 5</option>
  <option value="6">State 6</option>
</select>`))])),_:1}),i(a,{"view-source":"",language:"xml","online-url":"./select/demo4"},{demo:l(()=>o[18]||(o[18]=[t("select",{class:"mdui-select","mdui-select":"{position: 'top'}"},[t("option",{value:"1"},"State 1"),t("option",{value:"2"},"State 2"),t("option",{value:"3",disabled:""},"State 3"),t("option",{value:"4"},"State 4"),t("option",{value:"5"},"State 5"),t("option",{value:"6"},"State 6")],-1)])),code:l(()=>o[19]||(o[19]=[e(d(`<select class="mdui-select" mdui-select="{position: 'top'}">
  <option value="1">State 1</option>
  <option value="2">State 2</option>
  <option value="3" disabled>State 3</option>
  <option value="4">State 4</option>
  <option value="5">State 5</option>
  <option value="6">State 6</option>
</select>`))])),_:1}),i(a,{"view-source":"",language:"xml","online-url":"./select/demo5"},{demo:l(()=>o[20]||(o[20]=[t("select",{class:"mdui-select","mdui-select":"{position: 'bottom'}"},[t("option",{value:"1"},"State 1"),t("option",{value:"2"},"State 2"),t("option",{value:"3",disabled:""},"State 3"),t("option",{value:"4"},"State 4"),t("option",{value:"5"},"State 5"),t("option",{value:"6"},"State 6")],-1)])),code:l(()=>o[21]||(o[21]=[e(d(`<select class="mdui-select" mdui-select="{position: 'bottom'}">
  <option value="1">State 1</option>
  <option value="2">State 2</option>
  <option value="3" disabled>State 3</option>
  <option value="4">State 4</option>
  <option value="5">State 5</option>
  <option value="6">State 6</option>
</select>`))])),_:1}),o[26]||(o[26]=t("div",{class:"mdui-typo"},[t("h4",{class:"article-title"},[e("通过 JavaScript 调用 "),t("a",{class:"anchor",id:"js"})]),t("p",null,"实例化组件："),t("pre",null,[t("code",{class:"language-js"},d(`// selector 为 <select> 元素的 CSS 选择器或 DOM 元素或 HTML 字符串
// options 为配置参数，见下面的参数列表
var inst = new mdui.Select(selector, options);`))])],-1)),i(a,{"view-source":"",language:"xml","online-url":"./select/demo6"},{demo:l(()=>o[22]||(o[22]=[t("select",{class:"mdui-select","mdui-select":""},[t("option",{value:"1"},"State 1"),t("option",{value:"2"},"State 2"),t("option",{value:"3",disabled:""},"State 3"),t("option",{value:"4"},"State 4"),t("option",{value:"5"},"State 5"),t("option",{value:"6"},"State 6")],-1)])),code:l(()=>o[23]||(o[23]=[e(d(`<select class="mdui-select" id="demo-js">
  <option value="1">State 1</option>
  <option value="2">State 2</option>
  <option value="3" disabled>State 3</option>
  <option value="4">State 4</option>
  <option value="5">State 5</option>
  <option value="6">State 6</option>
</select>

<script>
  var inst = new mdui.Select('#demo-js');
<\/script>`))])),_:1}),o[27]||(o[27]=s('<div class="mdui-typo"><h4 class="article-title">参数 <a class="anchor" id="option"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>参数名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>position</code></td><td><code>string</code></td><td><code>auto</code></td><td>选择菜单所处位置。包括 <code>auto</code>、<code>top</code>、<code>bottom</code></td></tr><tr><td><code>gutter</code></td><td><code>int</code></td><td><code>16</code></td><td>选择菜单距离窗口上下边框至少保持多少间距，单位为 px。该参数仅在 <code>position</code> 为 <code>auto</code> 时有效。</td></tr></tbody></table></div></div><div class="mdui-typo"><h4 class="article-title">方法 <a class="anchor" id="method"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>方法名</th><th>描述</th></tr></thead><tbody><tr><td><code>open()</code></td><td>打开下拉菜单。</td></tr><tr><td><code>close()</code></td><td>关闭下拉菜单。</td></tr><tr><td><code>toggle()</code></td><td>切换下拉菜单的打开状态。</td></tr><tr><td><code>handleUpdate()</code></td><td>当你动态修改了 <code>&lt;select&gt;</code> 元素的内容时，需要调用该方法来重新生成下拉菜单。</td></tr><tr><td><code>getState</code></td><td>返回当前下拉菜单的打开状态。共包含四种状态（<code>opening</code>、<code>opened</code>、<code>closing</code>、<code>closed</code>）。</td></tr></tbody></table></div></div><div class="mdui-typo"><h4 class="article-title">事件 <a class="anchor" id="event"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>事件</th><th>描述</th><th>目标</th><th>参数</th></tr></thead><tbody><tr><td><code>open.mdui.select</code></td><td>下拉菜单开始打开动画时，事件将被触发。</td><td rowspan="6"><code>&lt;select class=&quot;mdui-select&quot;&gt;&lt;/select&gt;</code></td><td rowspan="6"><code>event._detail.inst</code>：实例 </td></tr><tr><td><code>opened.mdui.select</code></td><td>下拉菜单结束打开动画时，事件将被触发。</td></tr><tr><td><code>close.mdui.select</code></td><td>下拉菜单开始关闭动画时，事件将被触发。</td></tr><tr><td><code>closed.mdui.select</code></td><td>下拉菜单结束关闭动画时，事件将被触发。</td></tr></tbody></table></div></div><div class="mdui-typo"><h2 class="chapter-title mdui-text-color-theme">CSS 类名列表 <a class="anchor" id="class"></a></h2><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>类名</th><th>效果</th></tr></thead><tbody><tr><td><code>.mdui-select</code></td><td>定义一个 Select 组件。</td></tr></tbody></table></div></div>',4))])],64)}}});export{V as default};
