import{D as o}from"./Demo-5062ffc5.js";import{T as m,_ as v}from"./MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js";import{d as u,c as e,a as s,b as d,g as c,w as l,e as a,F as f,o as r,t,_ as n}from"./index-15cb1481.js";const x={class:"chapter"},p=u({__name:"grid",setup(g){return(w,i)=>(r(),e(f,null,[s(m),i[19]||(i[19]=d("h1",{class:"title mdui-text-color-theme"},"网格布局",-1)),i[20]||(i[20]=d("div",{class:"intro mdui-typo"},[d("p",null,"MDUI 提供了一套响应式、移动设备优先的 12 列网格布局系统。"),d("div",{class:"intro-module"},[d("h3",null,"相关阅读"),d("p",null,[d("a",{href:"https://www.mdui.org/zh-cn/design/1/layout/responsive-ui.html",target:"_blank"},"Material Design 设计指南：布局 - 响应式 UI")])])],-1)),s(v,{class:"first-screen"}),i[21]||(i[21]=c('<nav class="toc mdui-text-color-theme" data-v-43f99440><ul data-v-43f99440><li data-v-43f99440><a href="#container" data-v-43f99440>布局容器</a></li><li data-v-43f99440><a href="#basic" data-v-43f99440>基本网格</a></li><li data-v-43f99440><a href="#responsive" data-v-43f99440>响应式网格</a></li><li data-v-43f99440><a href="#gap" data-v-43f99440>列间隙</a></li><li data-v-43f99440><a href="#offset" data-v-43f99440>列偏移</a></li><li data-v-43f99440><a href="#nest" data-v-43f99440>嵌套列</a></li><li data-v-43f99440><a href="#average" data-v-43f99440>等分列</a></li><li data-v-43f99440><a href="#class" data-v-43f99440>CSS 类名列表</a></li></ul></nav>',1)),d("div",x,[i[12]||(i[12]=c(`<div class="mdui-typo" data-v-43f99440><h2 class="chapter-title chapter-title-first mdui-text-color-theme" data-v-43f99440> 布局容器 <a class="anchor" id="container" data-v-43f99440></a></h2><p data-v-43f99440> MDUI 需要为页面内容和网格布局系统包裹一个 <code data-v-43f99440>.mdui-container</code> 容器。我们提供了两个此作用的类。 </p><p data-v-43f99440><code data-v-43f99440>.mdui-container</code> 类占据 92% - 96% 的屏幕宽度，且最大宽度 1280px。 </p><pre data-v-43f99440><code class="language-html" data-v-43f99440>&lt;body&gt;
  &lt;div class=&quot;mdui-container&quot;&gt;
    ...
  &lt;/div&gt;
&lt;/body&gt;</code></pre><p data-v-43f99440><code data-v-43f99440>.mdui-container-fluid</code> 类将始终占据 100% 的屏幕宽度。</p><pre data-v-43f99440><code class="language-html" data-v-43f99440>&lt;body&gt;
  &lt;div class=&quot;mdui-container-fluid&quot;&gt;
    ...
  &lt;/div&gt;
&lt;/body&gt;</code></pre></div><div class="mdui-typo" data-v-43f99440><h2 class="chapter-title mdui-text-color-theme" data-v-43f99440> 基础网格 <a class="anchor" id="basic" data-v-43f99440></a></h2><p data-v-43f99440><code data-v-43f99440>.mdui-row</code> 必须包含在 <code data-v-43f99440>.mdui-container</code> 或 <code data-v-43f99440>.mdui-container-fluid</code> 中，以便为其赋予合适的排列（aligment）和内补（padding）。 </p><p data-v-43f99440> 在 <code data-v-43f99440>.mdui-row</code> 中包含若干个 <code data-v-43f99440>.mdui-col-xs-[1-12]</code> 类，其中 <code data-v-43f99440>.mdui-col-xs-[1-12]</code> 中的数字表示该元素占据多少列。 </p><p data-v-43f99440>如果一行中包含的列大于 12，则多余的列将另起一行排列。</p></div>`,2)),s(o,{class:"example","view-source":"","online-url":"./grid/demo1",language:"xml"},{demo:l(()=>i[0]||(i[0]=[d("div",{class:"mdui-container-fluid"},[d("div",{class:"mdui-row"},[d("div",{class:"mdui-col-xs-3"},".mdui-col-xs-3")]),d("div",{class:"mdui-row"},[d("div",{class:"mdui-col-xs-6"},".mdui-col-xs-6")]),d("div",{class:"mdui-row"},[d("div",{class:"mdui-col-xs-9"},".mdui-col-xs-9")]),d("div",{class:"mdui-row"},[d("div",{class:"mdui-col-xs-12"},".mdui-col-xs-12")])],-1)])),code:l(()=>i[1]||(i[1]=[a(t(`<div class="mdui-row">
  <div class="mdui-col-xs-3">.mdui-col-xs-3</div>
</div>
<div class="mdui-row">
  <div class="mdui-col-xs-6">.mdui-col-xs-6</div>
</div>
<div class="mdui-row">
  <div class="mdui-col-xs-9">.mdui-col-xs-9</div>
</div>
<div class="mdui-row">
  <div class="mdui-col-xs-12">.mdui-col-xs-12</div>
</div>
`))])),_:1}),i[13]||(i[13]=c('<div class="mdui-typo" data-v-43f99440><h2 class="chapter-title mdui-text-color-theme" data-v-43f99440> 响应式网格 <a class="anchor" id="responsive" data-v-43f99440></a></h2><ul data-v-43f99440><li data-v-43f99440><code data-v-43f99440>.mdui-col-xs-[1-12]</code> 所有屏幕设备上都会生效，如手机、电脑等。 </li><li data-v-43f99440><code data-v-43f99440>.mdui-col-sm-[1-12]</code> 在小屏幕及以上的设备上生效，如平板电脑。 </li><li data-v-43f99440><code data-v-43f99440>.mdui-col-md-[1-12]</code> 在中等屏幕及以上的设备上生效，如笔记本电脑。 </li><li data-v-43f99440><code data-v-43f99440>.mdui-col-lg-[1-12]</code> 在大屏幕及以上的设备上生效，如台式电脑。 </li><li data-v-43f99440><code data-v-43f99440>.mdui-col-xl-[1-12]</code> 在特大屏幕设备上生效，如电视。</li></ul><p data-v-43f99440>混用这些类，可以达到响应式的效果。</p><p data-v-43f99440>响应式断点如下：</p><div class="mdui-table-fluid" data-v-43f99440><table class="mdui-table" data-v-43f99440><thead data-v-43f99440><tr data-v-43f99440><th data-v-43f99440>class</th><th data-v-43f99440>区间</th><th data-v-43f99440>槽宽</th></tr></thead><tbody data-v-43f99440><tr data-v-43f99440><td data-v-43f99440><code data-v-43f99440>.mdui-col-xs-[1-12]</code></td><td data-v-43f99440>&gt; 0</td><td rowspan="5" data-v-43f99440>16px（每列左右均有 8px）</td></tr><tr data-v-43f99440><td data-v-43f99440><code data-v-43f99440>.mdui-col-sm-[1-12]</code></td><td data-v-43f99440>&gt; 600px</td></tr><tr data-v-43f99440><td data-v-43f99440><code data-v-43f99440>.mdui-col-md-[1-12]</code></td><td data-v-43f99440>&gt; 1024px</td></tr><tr data-v-43f99440><td data-v-43f99440><code data-v-43f99440>.mdui-col-lg-[1-12]</code></td><td data-v-43f99440>&gt; 1440px</td></tr><tr data-v-43f99440><td data-v-43f99440><code data-v-43f99440>.mdui-col-xl-[1-12]</code></td><td data-v-43f99440>&gt; 1920px</td></tr></tbody></table></div></div>',1)),s(o,{class:"example mdui-m-t-4","view-source":"",language:"xml","online-url":"./grid/demo2"},{demo:l(()=>i[2]||(i[2]=[d("div",{class:"mdui-container-fluid"},[d("div",{class:"mdui-row"},[d("div",{class:"mdui-col-xs-12 mdui-col-sm-8"},[a(" .mdui-col-xs-12"),d("br"),a(".mdui-col-sm-8 ")]),d("div",{class:"mdui-col-xs-6 mdui-col-sm-4"},[a(" .mdui-col-xs-6"),d("br"),a(".mdui-col-sm-4 ")])]),d("div",{class:"mdui-row"},[d("div",{class:"mdui-col-xs-6 mdui-col-sm-4"},[a(" .mdui-col-xs-6"),d("br"),a(".mdui-col-sm-4 ")]),d("div",{class:"mdui-col-xs-6 mdui-col-sm-4"},[a(" .mdui-col-xs-6"),d("br"),a(".mdui-col-sm-4 ")]),d("div",{class:"mdui-col-xs-6 mdui-col-sm-4"},[a(" .mdui-col-xs-6"),d("br"),a(".mdui-col-sm-4 ")])]),d("div",{class:"mdui-row"},[d("div",{class:"mdui-col-xs-6"},".mdui-col-xs-6"),d("div",{class:"mdui-col-xs-6"},".mdui-col-xs-6")])],-1)])),code:l(()=>i[3]||(i[3]=[a(t(`<!-- 在超小屏幕设备上，第一列 100% 宽度，第二列 50% 宽度。在小屏幕及以上设备上，第一列为 66.6% 宽度，第二列为 33.3% 宽度。 -->
<div class="mdui-row">
  <div class="mdui-col-xs-12 mdui-col-sm-8">.mdui-col-xs-12<br/>.mdui-col-sm-8</div>
  <div class="mdui-col-xs-6 mdui-col-sm-4">.mdui-col-xs-6<br/>.mdui-col-sm-4</div>
</div>

<!-- 在超小屏幕设备上每列都是 50% 宽度，在小屏幕及以上设备上每列 33.3% 宽度。 -->
<div class="mdui-row">
  <div class="mdui-col-xs-6 mdui-col-sm-4">.mdui-col-xs-6<br/>.mdui-col-sm-4</div>
  <div class="mdui-col-xs-6 mdui-col-sm-4">.mdui-col-xs-6<br/>.mdui-col-sm-4</div>
  <div class="mdui-col-xs-6 mdui-col-sm-4">.mdui-col-xs-6<br/>.mdui-col-sm-4</div>
</div>

<!-- 在所有设备上，每列都是 50% 宽度。 -->
<div class="mdui-row">
  <div class="mdui-col-xs-6">.mdui-col-xs-6</div>
  <div class="mdui-col-xs-6">.mdui-col-xs-6</div>
</div>`))])),_:1}),i[14]||(i[14]=d("div",{class:"mdui-typo"},[d("h2",{class:"chapter-title mdui-text-color-theme"},[a(" 列间距 "),d("a",{class:"anchor",id:"gap"})]),d("p",null,[a(" 默认在列之间会有 16px 的间距，只需在 "),d("code",null,".mdui-row"),a(" 上添加类 "),d("code",null,".mdui-row-gapless"),a(" 即可消除列间距。 ")])],-1)),s(o,{"view-source":"",language:"xml","online-url":"./grid/demo3"},{demo:l(()=>i[4]||(i[4]=[d("div",{class:"mdui-container-fluid"},[d("div",{class:"mdui-row mdui-row-gapless"},[d("div",{class:"mdui-col-xs-4"},"mdui-col-xs-4"),d("div",{class:"mdui-col-xs-4"},"mdui-col-xs-4"),d("div",{class:"mdui-col-xs-4"},"mdui-col-xs-4")])],-1)])),code:l(()=>i[5]||(i[5]=[a(t(`<div class="mdui-row mdui-row-gapless">
  <div class="mdui-col-xs-4">mdui-col-xs-4</div>
  <div class="mdui-col-xs-4">mdui-col-xs-4</div>
  <div class="mdui-col-xs-4">mdui-col-xs-4</div>
</div>`))])),_:1}),i[15]||(i[15]=c('<div class="mdui-typo" data-v-43f99440><h2 class="chapter-title mdui-text-color-theme" data-v-43f99440> 列偏移 <a class="anchor" id="offset" data-v-43f99440></a></h2><p data-v-43f99440> 使用 <code data-v-43f99440>.mdui-col-offset-xs-[1-12]</code>、<code data-v-43f99440>.mdui-col-offset-sm-[1-12]</code> 、 <code data-v-43f99440>.mdui-col-offset-md-[1-12]</code> 、 <code data-v-43f99440>.mdui-col-offset-lg-[1-12]</code> 和 <code data-v-43f99440>.mdui-col-offset-xl-[1-12]</code> 可以将列向右偏移，类名中的数字表示向右偏移多少列。 </p></div>',1)),s(o,{"view-source":"",language:"xml","online-url":"./grid/demo4"},{demo:l(()=>i[6]||(i[6]=[d("div",{class:"mdui-container-fluid"},[d("div",{class:"mdui-row"},[d("div",{class:"mdui-col-md-4"},".mdui-col-md-4"),d("div",{class:"mdui-col-md-4 mdui-col-offset-md-4"}," .mdui-col-md-4 .mdui-col-offset-md-4 ")]),d("div",{class:"mdui-row"},[d("div",{class:"mdui-col-md-3 mdui-col-offset-md-3"},[a(" .mdui-col-md-3"),d("br"),a(".mdui-col-offset-md-3 ")]),d("div",{class:"mdui-col-md-3 mdui-col-offset-md-3"},[a(" .mdui-col-md-3"),d("br"),a(".mdui-col-offset-md-3 ")])]),d("div",{class:"mdui-row"},[d("div",{class:"mdui-col-md-6 mdui-col-offset-md-3"},[a(" .mdui-col-md-6"),d("br"),a(".mdui-col-offset-md-3 ")])])],-1)])),code:l(()=>i[7]||(i[7]=[a(t(`<div class="mdui-row">
  <div class="mdui-col-md-4">.mdui-col-md-4</div>
  <div class="mdui-col-md-4 mdui-col-offset-md-4">.mdui-col-md-4 .mdui-col-offset-md-4</div>
</div>
<div class="mdui-row">
  <div class="mdui-col-md-3 mdui-col-offset-md-3">.mdui-col-md-3<br/>.mdui-col-offset-md-3</div>
  <div class="mdui-col-md-3 mdui-col-offset-md-3">.mdui-col-md-3<br/>.mdui-col-offset-md-3</div>
</div>
<div class="mdui-row">
  <div class="mdui-col-md-6 mdui-col-offset-md-3">.mdui-col-md-6<br/>.mdui-col-offset-md-3</div>
</div>`))])),_:1}),i[16]||(i[16]=d("div",{class:"mdui-typo"},[d("h2",{class:"chapter-title mdui-text-color-theme"},[a(" 嵌套列 "),d("a",{class:"anchor",id:"nest"})]),d("p",null,[a(" 通过在已有的列中再添加新的 "),d("code",null,".mdui-row"),a(" 和 "),d("code",null,".mdui-col-[*]"),a(" 元素实现列的嵌套。被嵌套的行所包含的列不能超过 12 个。 ")])],-1)),s(o,{"view-source":"",language:"xml","online-url":"./grid/demo5"},{demo:l(()=>i[8]||(i[8]=[d("div",{class:"mdui-container-fluid"},[d("div",{class:"mdui-row"},[d("div",{class:"mdui-col-xs-9"},[a(" Level 1: .col-xs-9 "),d("div",{class:"mdui-row"},[d("div",{class:"mdui-col-xs-8 mdui-col-sm-6"}," Level 2: .col-xs-8 .col-sm-6 "),d("div",{class:"mdui-col-xs-4 mdui-col-sm-6"}," Level 2: .col-xs-4 .col-sm-6 ")])])])],-1)])),code:l(()=>i[9]||(i[9]=[a(t(`<div class="mdui-row">
  <div class="mdui-col-xs-9">
    Level 1: .col-xs-9
    <div class="mdui-row">
      <div class="mdui-col-xs-8 mdui-col-sm-6">Level 2: .col-xs-8 .col-sm-6</div>
      <div class="mdui-col-xs-4 mdui-col-sm-6">Level 2: .col-xs-4 .col-sm-6</div>
    </div>
  </div>
</div>`))])),_:1}),i[17]||(i[17]=d("div",{class:"mdui-typo"},[d("h2",{class:"chapter-title mdui-text-color-theme"},[a(" 等分列 "),d("a",{class:"anchor",id:"average"})]),d("p",null,[a(" 在 "),d("code",null,".mdui-row-xs-[1-12]"),a(" 中包含若干个含 "),d("code",null,".mdui-col"),a(" 类的元素，这些元素会被等分。例如："),d("code",null,".mdui-row-xs-5"),a(" 中的每一个 "),d("code",null,".mdui-col"),a(" 元素均占据 20% 的宽度。 ")])],-1)),s(o,{"view-source":"",language:"xml","online-url":"./grid/demo6"},{demo:l(()=>i[10]||(i[10]=[d("div",{class:"mdui-container-fluid"},[d("div",{class:"mdui-row-xs-5"},[d("div",{class:"mdui-col"},"5"),d("div",{class:"mdui-col"},"5"),d("div",{class:"mdui-col"},"5"),d("div",{class:"mdui-col"},"5"),d("div",{class:"mdui-col"},"5"),d("div",{class:"mdui-col"},"5"),d("div",{class:"mdui-col"},"5")])],-1)])),code:l(()=>i[11]||(i[11]=[a(t(`<div class="mdui-row-xs-5">
  <div class="mdui-col">5</div>
  <div class="mdui-col">5</div>
  <div class="mdui-col">5</div>
  <div class="mdui-col">5</div>
  <div class="mdui-col">5</div>
  <div class="mdui-col">5</div>
  <div class="mdui-col">5</div>
</div>`))])),_:1}),i[18]||(i[18]=c('<div class="mdui-typo" data-v-43f99440><p data-v-43f99440> 混用 <code data-v-43f99440>.mdui-row-xs-[1-12]</code>、<code data-v-43f99440>.mdui-row-sm-[1-12]</code>、<code data-v-43f99440>.mdui-row-md-[1-12]</code>、<code data-v-43f99440>.mdui-row-lg-[1-12]</code>、<code data-v-43f99440>.mdui-row-xl-[1-12]</code> 可以实现响应式布局。 </p></div><div class="mdui-typo" data-v-43f99440><h2 class="chapter-title mdui-text-color-theme" data-v-43f99440> CSS 类名列表 <a class="anchor" id="class" data-v-43f99440></a></h2><div class="mdui-table-fluid" data-v-43f99440><table class="mdui-table" data-v-43f99440><thead data-v-43f99440><tr data-v-43f99440><th data-v-43f99440>类名</th><th data-v-43f99440>效果</th></tr></thead><tbody data-v-43f99440><tr data-v-43f99440><td data-v-43f99440><code data-v-43f99440>.mdui-container</code></td><td data-v-43f99440>有宽度限制的布局容器</td></tr><tr data-v-43f99440><td data-v-43f99440><code data-v-43f99440>.mdui-container-fluid</code></td><td data-v-43f99440>100% 宽度的布局容器</td></tr><tr data-v-43f99440><td data-v-43f99440><code data-v-43f99440>.mdui-row</code></td><td data-v-43f99440>定义行</td></tr><tr data-v-43f99440><td data-v-43f99440><code data-v-43f99440>.mdui-col-[xs|sm|md|lg|xl]-[1-12]</code></td><td data-v-43f99440>定义列</td></tr><tr data-v-43f99440><td data-v-43f99440><code data-v-43f99440>.mdui-row-gapless</code></td><td data-v-43f99440>消除列间距</td></tr><tr data-v-43f99440><td data-v-43f99440><code data-v-43f99440>.mdui-col-offset-[xs|sm|md|lg|xl]-[1-12]</code></td><td data-v-43f99440>列偏移</td></tr><tr data-v-43f99440><td data-v-43f99440><code data-v-43f99440>.mdui-row-[xs|sm|md|lg|xl]-[1-12]</code></td><td data-v-43f99440>等分列</td></tr></tbody></table></div></div>',2))])],64))}});const D=n(p,[["__scopeId","data-v-43f99440"]]);export{D as default};
