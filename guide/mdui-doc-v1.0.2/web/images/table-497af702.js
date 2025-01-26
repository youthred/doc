import{D as o}from"./Demo-5062ffc5.js";import{T as r,_ as s}from"./MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js";import{d as m,c,a,b as t,e as d,w as e,g as u,t as i,F as b,f as h,o as p}from"./index-15cb1481.js";const g={class:"intro mdui-typo"},v={class:"intro-module"},f={class:"chapter"},y={class:"mdui-typo"},C=m({__name:"table",setup(w){return(N,l)=>{const n=h("router-link");return p(),c(b,null,[a(r),l[23]||(l[23]=t("h1",{class:"title mdui-text-color-theme"},"表格",-1)),t("div",g,[t("div",v,[l[3]||(l[3]=t("h3",null,"调用方式",-1)),t("p",null,[l[1]||(l[1]=d("表格在页面加载完后会自动初始化。对于动态生成的表格，需要调用 ")),a(n,{to:"/docs/global#mutation"},{default:e(()=>l[0]||(l[0]=[t("code",null,"mdui.mutation()",-1)])),_:1}),l[2]||(l[2]=d(" 进行初始化。"))])]),l[4]||(l[4]=t("div",{class:"intro-module"},[t("h3",null,"相关阅读"),t("p",null,[t("a",{href:"https://www.mdui.org/zh-cn/design/1/components/data-tables.html",target:"_blank"},"Material Design 设计指南：组件 - 数据表格")])],-1))]),a(s,{class:"first-screen"}),l[24]||(l[24]=u('<nav class="toc mdui-text-color-theme"><ul><li><a href="#style">样式</a><ul><li><a href="#basic">基础表格</a></li><li><a href="#fluid">响应式</a></li><li><a href="#hoverable">鼠标悬浮</a></li><li><a href="#text-align">列对齐方式</a></li><li><a href="#selectable">列选择</a></li></ul></li><li><a href="#dynamic">动态生成的表格</a></li><li><a href="#class">CSS 类名列表</a></li></ul></nav>',1)),t("div",f,[l[18]||(l[18]=u('<div class="mdui-typo"><h2 class="chapter-title chapter-title-first mdui-text-color-theme">样式 <a class="anchor" id="style"></a></h2><h4 class="article-title">基础表格 <a class="anchor" id="basic"></a></h4><p>为 <code>table</code> 标签添加类 <code>.mdui-table</code> 即可为表格赋予基本的样式。</p></div>',1)),a(o,{"view-source":"",language:"xml","online-url":"./table/demo1"},{demo:e(()=>l[5]||(l[5]=[t("div",{class:"mdui-table-fluid"},[t("table",{class:"mdui-table"},[t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",null,"First Name"),t("th",null,"Last Name"),t("th",null,"Username")])]),t("tbody",null,[t("tr",null,[t("td",null,"1"),t("td",null,"Mark"),t("td",null,"Otto"),t("td",null,"@mdo")]),t("tr",null,[t("td",null,"2"),t("td",null,"Jacob"),t("td",null,"Thornton"),t("td",null,"@fat")]),t("tr",null,[t("td",null,"3"),t("td",null,"Larry the Bird"),t("td"),t("td",null,"@twitter")])])])],-1)])),code:e(()=>l[6]||(l[6]=[d(i(`<div class="mdui-table-fluid">
  <table class="mdui-table">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry the Bird</td>
        <td></td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>`))])),_:1}),l[19]||(l[19]=u(`<div class="mdui-typo"><h4 class="article-title">响应式 <a class="anchor" id="fluid"></a></h4><p>如果表格宽度过大，可能会导致页面出现横向滚动条。将 <code>.mdui-table</code> 元素包裹在 <code>.mdui-table-fluid</code> 元素内，即可在表格宽度超出页面宽度时，使表格支持水平滚动。</p><pre><code class="language-html">&lt;div class=&quot;mdui-table-fluid&quot;&gt;
  &lt;table class=&quot;mdui-table&quot;&gt;
    ...
  &lt;/table&gt;
&lt;/div&gt;</code></pre></div><div class="mdui-typo"><h4 class="article-title">鼠标悬浮 <a class="anchor" id="hoverable"></a></h4><p>在 <code>.mdui-table</code> 元素上添加 <code>.mdui-table-hoverable</code> 类可以让 <code>tbody</code> 中的每一行对鼠标悬浮状态作出响应。</p></div>`,2)),a(o,{"view-source":"",language:"xml","online-url":"./table/demo2"},{demo:e(()=>l[7]||(l[7]=[t("div",{class:"mdui-table-fluid"},[t("table",{class:"mdui-table mdui-table-hoverable"},[t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",null,"First Name"),t("th",null,"Last Name"),t("th",null,"Username")])]),t("tbody",null,[t("tr",null,[t("td",null,"1"),t("td",null,"Mark"),t("td",null,"Otto"),t("td",null,"@mdo")]),t("tr",null,[t("td",null,"2"),t("td",null,"Jacob"),t("td",null,"Thornton"),t("td",null,"@fat")]),t("tr",null,[t("td",null,"3"),t("td",null,"Larry the Bird"),t("td"),t("td",null,"@twitter")])])])],-1)])),code:e(()=>l[8]||(l[8]=[d(i(`<div class="mdui-table-fluid">
  <table class="mdui-table mdui-table-hoverable">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry the Bird</td>
        <td></td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>`))])),_:1}),l[20]||(l[20]=t("div",{class:"mdui-typo"},[t("h4",{class:"article-title"},[d("列对齐方式 "),t("a",{class:"anchor",id:"text-align"})]),t("p",null,"按照 Material Design 的规范，应该把表格中的文本列左对齐，数值列右对齐。"),t("p",null,[d("MDUI 中表格列默认使用左对齐，在数值列的 "),t("code",null,i("<th>")),d(" 标签上添加类 "),t("code",null,".mdui-table-col-numeric"),d(" 即可使该列向右对齐。")])],-1)),a(o,{"view-source":"",language:"xml","online-url":"./table/demo3"},{demo:e(()=>l[9]||(l[9]=[t("div",{class:"mdui-table-fluid"},[t("table",{class:"mdui-table"},[t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",null,"First Name"),t("th",null,"Last Name"),t("th",{class:"mdui-table-col-numeric"},"age")])]),t("tbody",null,[t("tr",null,[t("td",null,"1"),t("td",null,"Mark"),t("td",null,"Otto"),t("td",null,"18")]),t("tr",null,[t("td",null,"2"),t("td",null,"Jacob"),t("td",null,"Thornton"),t("td",null,"21")]),t("tr",null,[t("td",null,"3"),t("td",null,"Larry the Bird"),t("td"),t("td",null,"9")])])])],-1)])),code:e(()=>l[10]||(l[10]=[d(i(`<div class="mdui-table-fluid">
  <table class="mdui-table">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th class="mdui-table-col-numeric">age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>18</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>21</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry the Bird</td>
        <td></td>
        <td>9</td>
      </tr>
    </tbody>
  </table>
</div>`))])),_:1}),l[21]||(l[21]=u('<div class="mdui-typo"><h4 class="article-title">列选择 <a class="anchor" id="selectable"></a></h4><p>在 <code>.mdui-table</code> 元素上添加类 <code>.mdui-table-selectable</code> 即可在每一行的前面添加一个复选框。</p><p>选中复选框后，会在该行的 <code>&lt;tr&gt;</code> 元素上添加类 <code>.mdui-table-row-selected</code>。</p><p>也可以预先在 <code>&lt;tr&gt;</code> 元素上添加类 <code>.mdui-table-row-selected</code>，使该行处于默认选中状态。</p></div>',1)),a(o,{"view-source":"",language:"xml","online-url":"./table/demo4"},{demo:e(()=>l[11]||(l[11]=[t("div",{class:"mdui-table-fluid"},[t("table",{class:"mdui-table mdui-table-selectable"},[t("thead",null,[t("tr",null,[t("th",null,"Dessert (100g serving)"),t("th",{class:"mdui-table-col-numeric","mdui-tooltip":"{content: 'The total amount of food energy in the given serving size.'}"},"Calories"),t("th",{class:"mdui-table-col-numeric"},"Fat (g)"),t("th",{class:"mdui-table-col-numeric"},"Carbs (g)"),t("th",{class:"mdui-table-col-numeric"},"Protein (g)"),t("th",{class:"mdui-table-col-numeric"},"Sodium (mg)"),t("th",{class:"mdui-table-col-numeric","mdui-tooltip":"{content: 'The amount of calcium as a percentage of the recommended daily amount.'}"},"Calclum (%)"),t("th",{class:"mdui-table-col-numeric"},"Lron (%)")])]),t("tbody",null,[t("tr",{class:"mdui-table-row-selected"},[t("td",null,"Frozen yogurt"),t("td",null,"159"),t("td",null,"6.0"),t("td",null,"24"),t("td",null,"4.0"),t("td",null,"87"),t("td",null,"14%"),t("td",null,"1%")]),t("tr",null,[t("td",null,"Ice cream sandwich"),t("td",null,"237"),t("td",null,"9.0"),t("td",null,"37"),t("td",null,"4.3"),t("td",null,"129"),t("td",null,"8%"),t("td",null,"1%")]),t("tr",null,[t("td",null,"Eclair"),t("td",null,"262"),t("td",null,"16.0"),t("td",null,"24"),t("td",null,"6.0"),t("td",null,"337"),t("td",null,"6%"),t("td",null,"7%")])])])],-1)])),code:e(()=>l[12]||(l[12]=[d(i(`<div class="mdui-table-fluid">
  <table class="mdui-table mdui-table-selectable">
    <thead>
      <tr>
        <th>Dessert (100g serving)</th>
        <th class="mdui-table-col-numeric" mdui-tooltip="{content: 'The total amount of food energy in the given serving size.'}">Calories</th>
        <th class="mdui-table-col-numeric">Fat (g)</th>
        <th class="mdui-table-col-numeric">Carbs (g)</th>
        <th class="mdui-table-col-numeric">Protein (g)</th>
        <th class="mdui-table-col-numeric">Sodium (mg)</th>
        <th class="mdui-table-col-numeric" mdui-tooltip="{content: 'The amount of calcium as a percentage of the recommended daily amount.'}">Calclum (%)</th>
        <th class="mdui-table-col-numeric">Lron (%)</th>
      </tr>
    </thead>
    <tbody>
      <tr class="mdui-table-row-selected">
        <td>Frozen yogurt</td>
        <td>159</td>
        <td>6.0</td>
        <td>24</td>
        <td>4.0</td>
        <td>87</td>
        <td>14%</td>
        <td>1%</td>
      </tr>
      <tr>
        <td>Ice cream sandwich</td>
        <td>237</td>
        <td>9.0</td>
        <td>37</td>
        <td>4.3</td>
        <td>129</td>
        <td>8%</td>
        <td>1%</td>
      </tr>
      <tr>
        <td>Eclair</td>
        <td>262</td>
        <td>16.0</td>
        <td>24</td>
        <td>6.0</td>
        <td>337</td>
        <td>6%</td>
        <td>7%</td>
      </tr>
    </tbody>
  </table>
</div>`))])),_:1}),t("div",y,[l[16]||(l[16]=t("h2",{class:"chapter-title mdui-text-color-theme"},[d("动态生成的表格 "),t("a",{class:"anchor",id:"dynamic"})],-1)),t("p",null,[l[14]||(l[14]=d("如果你的表格是动态生成的，则需要调用 ")),a(n,{to:"/docs/global#mutation"},{default:e(()=>l[13]||(l[13]=[t("code",null,"mdui.mutation()",-1)])),_:1}),l[15]||(l[15]=d(" 进行初始化。"))]),l[17]||(l[17]=t("p",null,[d("如果你动态修改了表格属性，则需要调用 "),t("code",null,"mdui.updateTables()"),d(" 方法来重新初始化表格。该方法可以接受一个含 "),t("code",null,i('<table class="mdui-table">')),d(" 元素的 CSS 选择器、或者 DOM 元素、或者 DOM 元素组成的数组作为参数，表示只重新初始化指定的表格。如果没有传入参数，则将重新初始化页面中所有的表格。")],-1))]),l[22]||(l[22]=u('<div class="mdui-typo"><h2 class="chapter-title mdui-text-color-theme">CSS 类名列表 <a class="anchor" id="class"></a></h2><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>类名</th><th>效果</th></tr></thead><tbody><tr><td><code>.mdui-table</code></td><td>定义表格组件。</td></tr><tr><td><code>.mdui-table-fluid</code></td><td>定义响应式表格。</td></tr><tr><td><code>.mdui-table-hoverable</code></td><td>使表格的行在鼠标悬浮状态做出响应。</td></tr><tr><td><code>.mdui-table-col-numeric</code></td><td>使列右对齐。</td></tr><tr><td><code>.mdui-table-selectable</code></td><td>在每一行前面添加复选框。</td></tr><tr><td><code>.mdui-table-row-selected</code></td><td>选中的行会有该类。</td></tr></tbody></table></div></div>',1))])],64)}}});export{C as default};
