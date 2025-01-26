import{D as a}from"./Demo-5062ffc5.js";import{T as o,_ as u}from"./MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js";import{d as m,c as n,a as d,g as s,b as i,w as l,e as c,F as r,o as b,t}from"./index-15cb1481.js";const h={class:"chapter"},w=m({__name:"selection_control",setup(p){return(k,e)=>(b(),n(r,null,[d(o),e[10]||(e[10]=s('<h1 class="title mdui-text-color-theme">选择控件</h1><div class="intro mdui-typo"><p>选择控件包括复选框、单选框和开/关切换。</p><div class="intro-module"><h3>调用方式</h3><p>选择控件使用纯 CSS 编写，只需编写 HTML 代码即可生效。</p></div><div class="intro-module"><h3>色彩</h3><p>使用强调色。</p></div><div class="intro-module"><h3>相关阅读</h3><p><a href="https://www.mdui.org/zh-cn/design/1/components/selection-controls.html" target="_blank">Material Design 设计指南：组件 - 选择控件</a></p></div></div>',2)),d(u,{class:"first-screen"}),e[11]||(e[11]=s('<nav class="toc mdui-text-color-theme"><ul><li><a href="#style">样式</a><ul><li><a href="#checkbox">复选框</a></li><li><a href="#radio">单选框</a></li><li><a href="#switch">开/关切换</a></li></ul></li><li><a href="#class">CSS 类名列表</a></li></ul></nav>',1)),i("div",h,[e[6]||(e[6]=s('<div class="mdui-typo"><h2 class="chapter-title chapter-title-first mdui-text-color-theme"> 样式 <a class="anchor" id="style"></a></h2><h4 class="article-title">复选框 <a class="anchor" id="checkbox"></a></h4></div>',1)),d(a,{"view-source":"",language:"xml","online-url":"./selection_control/demo1"},{demo:l(()=>e[0]||(e[0]=[i("div",{class:"mdui-row-md-4"},[i("div",{class:"mdui-col"},[i("label",{class:"mdui-checkbox"},[i("input",{type:"checkbox"}),i("i",{class:"mdui-checkbox-icon"}),c(" 默认不选中 ")])]),i("div",{class:"mdui-col"},[i("label",{class:"mdui-checkbox"},[i("input",{type:"checkbox",checked:""}),i("i",{class:"mdui-checkbox-icon"}),c(" 默认选中 ")])]),i("div",{class:"mdui-col"},[i("label",{class:"mdui-checkbox"},[i("input",{type:"checkbox",disabled:""}),i("i",{class:"mdui-checkbox-icon"}),c(" 禁用，且不选中 ")])]),i("div",{class:"mdui-col"},[i("label",{class:"mdui-checkbox"},[i("input",{type:"checkbox",disabled:"",checked:""}),i("i",{class:"mdui-checkbox-icon"}),c(" 禁用，且选中 ")])])],-1),i("div",{class:"mdui-row-md-4"},[i("div",{class:"mdui-col"},[i("label",{class:"mdui-checkbox"},[i("input",{type:"checkbox",indeterminate:!0}),i("i",{class:"mdui-checkbox-icon"}),c(" 不确定状态 ")])]),i("div",{class:"mdui-col"},[i("label",{class:"mdui-checkbox"},[i("input",{type:"checkbox",disabled:"",indeterminate:!0}),i("i",{class:"mdui-checkbox-icon"}),c(" 禁用，且不确定状态 ")])])],-1)])),code:l(()=>e[1]||(e[1]=[c(t(`<label class="mdui-checkbox">
  <input type="checkbox"/>
  <i class="mdui-checkbox-icon"></i>
  默认不选中
</label>

<label class="mdui-checkbox">
  <input type="checkbox" checked/>
  <i class="mdui-checkbox-icon"></i>
  默认选中
</label>

<label class="mdui-checkbox">
  <input type="checkbox" disabled/>
  <i class="mdui-checkbox-icon"></i>
  禁用，且不选中
</label>

<label class="mdui-checkbox">
  <input type="checkbox" disabled checked/>
  <i class="mdui-checkbox-icon"></i>
  禁用，且选中
</label>

<label class="mdui-checkbox">
  <input type="checkbox" id="indeterminate-demo1"/>
  <i class="mdui-checkbox-icon"></i>
  不确定状态
</label>
<script>
  // indeterminate 属性只能通过 JavaScript 设置
  document.getElementById('indeterminate-demo1').indeterminate = true;
<\/script>

<label class="mdui-checkbox">
  <input type="checkbox" disabled id="indeterminate-demo2"/>
  <i class="mdui-checkbox-icon"></i>
  禁用，且不确定状态
</label>
<script>
  document.getElementById('indeterminate-demo2').indeterminate = true;
<\/script>`))])),_:1}),e[7]||(e[7]=i("div",{class:"mdui-typo"},[i("h4",{class:"article-title"},[c("单选框 "),i("a",{class:"anchor",id:"radio"})])],-1)),d(a,{"view-source":"",language:"xml","online-url":"./selection_control/demo2"},{demo:l(()=>e[2]||(e[2]=[i("div",{class:"mdui-row-md-4"},[i("form",null,[i("div",{class:"mdui-col"},[i("label",{class:"mdui-radio"},[i("input",{type:"radio",name:"group1"}),i("i",{class:"mdui-radio-icon"}),c(" 默认不选中 ")])]),i("div",{class:"mdui-col"},[i("label",{class:"mdui-radio"},[i("input",{type:"radio",name:"group1",checked:""}),i("i",{class:"mdui-radio-icon"}),c(" 默认选中 ")])]),i("div",{class:"mdui-col"},[i("label",{class:"mdui-radio"},[i("input",{type:"radio",name:"group1",disabled:""}),i("i",{class:"mdui-radio-icon"}),c(" 禁用，且不选中 ")])])]),i("form",null,[i("div",{class:"mdui-col"},[i("label",{class:"mdui-radio"},[i("input",{type:"radio",name:"group1",disabled:"",checked:""}),i("i",{class:"mdui-radio-icon"}),c(" 禁用，且选中 ")])])])],-1)])),code:l(()=>e[3]||(e[3]=[c(t(`<form>

  <label class="mdui-radio">
    <input type="radio" name="group1"/>
    <i class="mdui-radio-icon"></i>
    默认不选中
  </label>

  <label class="mdui-radio">
    <input type="radio" name="group1" checked/>
    <i class="mdui-radio-icon"></i>
    默认选中
  </label>

  <label class="mdui-radio">
    <input type="radio" name="group1" disabled/>
    <i class="mdui-radio-icon"></i>
    禁用，且不选中
  </label>

</form>

<form>
  <label class="mdui-radio">
    <input type="radio" name="group1" disabled checked/>
    <i class="mdui-radio-icon"></i>
    禁用，且选中
  </label>
</form>`))])),_:1}),e[8]||(e[8]=i("div",{class:"mdui-typo"},[i("h4",{class:"article-title"},[c(" 开/关切换 "),i("a",{class:"anchor",id:"switch"})])],-1)),d(a,{"view-source":"",language:"xml","online-url":"./selection_control/demo3"},{demo:l(()=>e[4]||(e[4]=[i("div",{class:"mdui-row-md-4"},[i("div",{class:"mdui-col"},[i("label",{class:"mdui-switch"},[i("input",{type:"checkbox"}),i("i",{class:"mdui-switch-icon"})])]),i("div",{class:"mdui-col"},[i("label",{class:"mdui-switch"},[i("input",{type:"checkbox",checked:""}),i("i",{class:"mdui-switch-icon"})])]),i("div",{class:"mdui-col"},[i("label",{class:"mdui-switch"},[i("input",{type:"checkbox",disabled:""}),i("i",{class:"mdui-switch-icon"})])]),i("div",{class:"mdui-col"},[i("label",{class:"mdui-switch"},[i("input",{type:"checkbox",disabled:"",checked:""}),i("i",{class:"mdui-switch-icon"})])])],-1)])),code:l(()=>e[5]||(e[5]=[c(t(`<label class="mdui-switch">
  <input type="checkbox"/>
  <i class="mdui-switch-icon"></i>
</label>

<label class="mdui-switch">
  <input type="checkbox" checked/>
  <i class="mdui-switch-icon"></i>
</label>

<label class="mdui-switch">
  <input type="checkbox" disabled/>
  <i class="mdui-switch-icon"></i>
</label>

<label class="mdui-switch">
  <input type="checkbox" disabled checked/>
  <i class="mdui-switch-icon"></i>
</label>`))])),_:1}),e[9]||(e[9]=s('<div class="mdui-typo"><h2 class="chapter-title mdui-text-color-theme"> CSS 类名列表 <a class="anchor" id="class"></a></h2><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>类名</th><th>效果</th></tr></thead><tbody><tr><td><code>.mdui-checkbox</code></td><td>定义复选框。</td></tr><tr><td><code>.mdui-checkbox-icon</code></td><td>定义复选框内的图标。</td></tr><tr><td><code>.mdui-radio</code></td><td>定义单选框。</td></tr><tr><td><code>.mdui-radio-icon</code></td><td>定义单选框内的图标。</td></tr><tr><td><code>.mdui-switch</code></td><td>定义开/关切换。</td></tr><tr><td><code>.mdui-switch-icon</code></td><td>定义开/关切换内的图标。</td></tr></tbody></table></div></div>',1))])],64))}});export{w as default};
