import{D as n}from"./Demo-5062ffc5.js";import{T as u,_ as s}from"./MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js";import{d as c,c as m,a as e,g as l,b as t,w as i,e as a,F as b,o as r,t as o,_ as v}from"./index-15cb1481.js";const p={class:"chapter"},g=c({__name:"button",setup(f){return(h,d)=>(r(),m(b,null,[e(u),d[22]||(d[22]=l('<h1 class="title mdui-text-color-theme" data-v-ec925842>按钮</h1><div class="intro mdui-typo" data-v-ec925842><p data-v-ec925842>按钮样式可以使用在 <code data-v-ec925842>&lt;a&gt;</code>、 <code data-v-ec925842>&lt;button&gt;</code> 或 <code data-v-ec925842>&lt;input&gt;</code> 元素上。</p><p data-v-ec925842>按钮中的英文字母都会被转为大写。</p><div class="intro-module" data-v-ec925842><h3 data-v-ec925842>调用方式</h3><p data-v-ec925842>按钮组件使用纯 CSS 编写，只需编写 HTML 代码即可生效。</p></div><div class="intro-module" data-v-ec925842><h3 data-v-ec925842>相关阅读</h3><p data-v-ec925842><a href="https://www.mdui.org/zh-cn/design/1/components/buttons.html" target="_blank" data-v-ec925842>Material Design 设计指南：组件 - 按钮</a></p></div></div>',2)),e(s,{class:"first-screen"}),d[23]||(d[23]=l('<nav class="toc mdui-text-color-theme" data-v-ec925842><ul data-v-ec925842><li data-v-ec925842><a href="#style" data-v-ec925842>样式</a><ul data-v-ec925842><li data-v-ec925842><a href="#flat" data-v-ec925842>扁平按钮</a></li><li data-v-ec925842><a href="#raised" data-v-ec925842>浮动按钮</a></li><li data-v-ec925842><a href="#icon" data-v-ec925842>图标按钮</a></li><li data-v-ec925842><a href="#dense" data-v-ec925842>密集型按钮</a></li><li data-v-ec925842><a href="#disabled" data-v-ec925842>禁用状态</a></li><li data-v-ec925842><a href="#block" data-v-ec925842>块级元素</a></li><li data-v-ec925842><a href="#group" data-v-ec925842>按钮组</a></li></ul></li><li data-v-ec925842><a href="#class" data-v-ec925842>CSS 类名列表</a></li></ul></nav>',1)),t("div",p,[d[14]||(d[14]=l('<div class="mdui-typo" data-v-ec925842><h2 class="chapter-title chapter-title-first mdui-text-color-theme" data-v-ec925842>样式 <a class="anchor" id="style" data-v-ec925842></a></h2><h4 class="article-title" data-v-ec925842>扁平按钮 <a class="anchor" id="flat" data-v-ec925842></a></h4><p data-v-ec925842>为 <code data-v-ec925842>&lt;a&gt;</code>、 <code data-v-ec925842>&lt;button&gt;</code> 或 <code data-v-ec925842>&lt;input&gt;</code> 元素添加类 <code data-v-ec925842>.mdui-btn</code> 即可获得扁平按钮的样式。</p></div>',1)),e(n,{class:"example","view-source":"",language:"xml","online-url":"./button/demo1"},{demo:i(()=>d[0]||(d[0]=[t("button",{class:"mdui-btn"},"Button",-1),t("button",{class:"mdui-btn mdui-ripple"},"button",-1),t("button",{class:"mdui-btn mdui-color-theme-accent mdui-ripple"},"button",-1)])),code:i(()=>d[1]||(d[1]=[a(o(`<button class="mdui-btn">Button</button>
<button class="mdui-btn mdui-ripple">button</button>
<button class="mdui-btn mdui-color-theme-accent mdui-ripple">button</button>`))])),_:1}),d[15]||(d[15]=t("div",{class:"mdui-typo"},[t("h4",{class:"article-title"},[a("浮动按钮 "),t("a",{class:"anchor",id:"raised"})]),t("p",null,[a("给扁平按钮添加 "),t("code",null,".mdui-btn-raised"),a(" 类能使按钮获得浮动效果。")])],-1)),e(n,{class:"example","view-source":"",language:"xml","online-url":"./button/demo2"},{demo:i(()=>d[2]||(d[2]=[t("button",{class:"mdui-btn mdui-btn-raised"},"Button",-1),t("button",{class:"mdui-btn mdui-btn-raised mdui-ripple"},"Button",-1),t("button",{class:"mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent"},"Button",-1)])),code:i(()=>d[3]||(d[3]=[a(o(`<button class="mdui-btn mdui-btn-raised">Button</button>
<button class="mdui-btn mdui-btn-raised mdui-ripple">Button</button>
<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent">Button</button>`))])),_:1}),d[16]||(d[16]=t("div",{class:"mdui-typo"},[t("h4",{class:"article-title"},[a("图标按钮 "),t("a",{class:"anchor",id:"icon"})]),t("p",null,[a("给扁平按钮添加类 "),t("code",null,".mdui-btn-icon"),a(" 能将其变为图标按钮。")])],-1)),e(n,{class:"example","view-source":"",language:"xml","online-url":"./button/demo3"},{demo:i(()=>d[4]||(d[4]=[t("button",{class:"mdui-btn mdui-btn-icon"},[t("i",{class:"mdui-icon material-icons"},"add")],-1),t("button",{class:"mdui-btn mdui-btn-icon mdui-ripple"},[t("i",{class:"mdui-icon material-icons"},"add")],-1),t("button",{class:"mdui-btn mdui-btn-icon mdui-color-theme-accent mdui-ripple"},[t("i",{class:"mdui-icon material-icons"},"add")],-1)])),code:i(()=>d[5]||(d[5]=[a(o(`<button class="mdui-btn mdui-btn-icon">
  <i class="mdui-icon material-icons">add</i>
</button>
<button class="mdui-btn mdui-btn-icon mdui-ripple">
  <i class="mdui-icon material-icons">add</i>
</button>
<button class="mdui-btn mdui-btn-icon mdui-color-theme-accent mdui-ripple">
  <i class="mdui-icon material-icons">add</i>
</button>`))])),_:1}),d[17]||(d[17]=t("div",{class:"mdui-typo"},[t("h4",{class:"article-title"},[a("密集型按钮 "),t("a",{class:"anchor",id:"dense"})]),t("p",null,[a("密集型按钮比普通按钮稍微小一点，在以鼠标和键盘为主要输入方式的时候可以使用。在普通按钮上添加类 "),t("code",null,".mdui-btn-dense"),a(" 即可。")])],-1)),e(n,{class:"example","view-source":"",language:"xml","online-url":"./button/demo4"},{demo:i(()=>d[6]||(d[6]=[t("button",{class:"mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-ripple"},"button",-1),t("button",{class:"mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-theme-accent mdui-ripple"},"Button",-1),t("button",{class:"mdui-btn mdui-btn-icon mdui-btn-dense mdui-color-theme-accent mdui-ripple"},[t("i",{class:"mdui-icon material-icons"},"add")],-1)])),code:i(()=>d[7]||(d[7]=[a(o(`<button class="mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-ripple">button</button>
<button class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-theme-accent mdui-ripple">Button</button>
<button class="mdui-btn mdui-btn-icon mdui-btn-dense mdui-color-theme-accent mdui-ripple">
  <i class="mdui-icon material-icons">add</i>
</button>`))])),_:1}),d[18]||(d[18]=t("div",{class:"mdui-typo"},[t("h4",{class:"article-title"},[a("禁用状态 "),t("a",{class:"anchor",id:"disabled"})]),t("p",null,[a("在按钮上加上 "),t("code",null,"disabled"),a(" 属性禁用一个按钮。")])],-1)),e(n,{class:"example","view-source":"",language:"xml","online-url":"./button/demo5"},{demo:i(()=>d[8]||(d[8]=[t("button",{class:"mdui-btn",disabled:""},"disabled",-1),t("button",{class:"mdui-btn mdui-btn-raised",disabled:""},"disabled",-1),t("button",{class:"mdui-btn mdui-btn-icon",disabled:""},[t("i",{class:"mdui-icon material-icons"},"add")],-1)])),code:i(()=>d[9]||(d[9]=[a(o(`<button class="mdui-btn" disabled>disabled</button>
<button class="mdui-btn mdui-btn-raised" disabled>disabled</button>
<button class="mdui-btn mdui-btn-icon" disabled>
  <i class="mdui-icon material-icons">add</i>
</button>`))])),_:1}),d[19]||(d[19]=t("div",{class:"mdui-typo"},[t("h4",{class:"article-title"},[a("块级元素 "),t("a",{class:"anchor",id:"block"})]),t("p",null,[a("给按钮加上 "),t("code",null,".mdui-btn-block"),a(" 类可以将其拉伸到父元素的 100% 宽度，且按钮变为块级（block）元素。")])],-1)),e(n,{"view-source":"",language:"xml","online-url":"./button/demo6"},{demo:i(()=>d[10]||(d[10]=[t("div",{class:"mdui-row-xs-2"},[t("div",{class:"mdui-col"},[t("button",{class:"mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple"},"block")]),t("div",{class:"mdui-col"},[t("button",{class:"mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple"},"block")])],-1)])),code:i(()=>d[11]||(d[11]=[a(o(`<div class="mdui-row-xs-2">
  <div class="mdui-col">
    <button class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple">block</button>
  </div>
  <div class="mdui-col">
    <button class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple">block</button>
  </div>
</div>`))])),_:1}),d[20]||(d[20]=t("div",{class:"mdui-typo"},[t("h4",{class:"article-title"},[a("按钮组 "),t("a",{class:"anchor",id:"group"})]),t("p",null,[a("把多个按钮放在一个按钮组容器 "),t("code",null,".mdui-btn-group"),a(" 内，即成为按钮组。在按钮上添加类 "),t("code",null,".mdui-btn-active"),a(" 表示该按钮处于选中状态。")])],-1)),e(n,{"view-source":"",language:"xml","online-url":"./button/demo7"},{demo:i(()=>d[12]||(d[12]=[t("div",{class:"mdui-btn-group"},[t("button",{type:"button",class:"mdui-btn"},[t("i",{class:"mdui-icon material-icons"},"format_align_left")]),t("button",{type:"button",class:"mdui-btn mdui-btn-active"},[t("i",{class:"mdui-icon material-icons"},"format_align_center")]),t("button",{type:"button",class:"mdui-btn"},[t("i",{class:"mdui-icon material-icons"},"format_align_right")]),t("button",{type:"button",class:"mdui-btn"},[t("i",{class:"mdui-icon material-icons"},"format_align_justify")])],-1)])),code:i(()=>d[13]||(d[13]=[a(o(`<div class="mdui-btn-group">
  <button type="button" class="mdui-btn">
    <i class="mdui-icon material-icons">format_align_left</i>
  </button>
  <button type="button" class="mdui-btn mdui-btn-active">
    <i class="mdui-icon material-icons">format_align_center</i>
  </button>
  <button type="button" class="mdui-btn">
    <i class="mdui-icon material-icons">format_align_right</i>
  </button>
  <button type="button" class="mdui-btn">
    <i class="mdui-icon material-icons">format_align_justify</i>
  </button>
</div>`))])),_:1}),d[21]||(d[21]=l('<div class="mdui-typo" data-v-ec925842><h2 class="chapter-title mdui-text-color-theme" data-v-ec925842>CSS 类名列表 <a class="anchor" id="class" data-v-ec925842></a></h2><div class="mdui-table-fluid" data-v-ec925842><table class="mdui-table" data-v-ec925842><thead data-v-ec925842><tr data-v-ec925842><th data-v-ec925842>类名</th><th data-v-ec925842>效果</th></tr></thead><tbody data-v-ec925842><tr data-v-ec925842><td data-v-ec925842><code data-v-ec925842>.mdui-btn</code></td><td data-v-ec925842>定义一个按钮</td></tr><tr data-v-ec925842><td data-v-ec925842><code data-v-ec925842>.mdui-btn-raised</code></td><td data-v-ec925842>定义浮动按钮</td></tr><tr data-v-ec925842><td data-v-ec925842><code data-v-ec925842>.mdui-btn-icon</code></td><td data-v-ec925842>定义图标按钮</td></tr><tr data-v-ec925842><td data-v-ec925842><code data-v-ec925842>.mdui-btn-block</code></td><td data-v-ec925842>将按钮设为块级元素</td></tr><tr data-v-ec925842><td data-v-ec925842><code data-v-ec925842>.mdui-btn-group</code></td><td data-v-ec925842>按钮组的容器</td></tr><tr data-v-ec925842><td data-v-ec925842><code data-v-ec925842>.mdui-btn-active</code></td><td data-v-ec925842>按钮组中的按钮处于选中状态</td></tr></tbody></table></div></div>',1))])],64))}});const w=v(g,[["__scopeId","data-v-ec925842"]]);export{w as default};
