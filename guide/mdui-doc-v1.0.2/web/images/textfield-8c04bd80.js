import{D as a}from"./Demo-5062ffc5.js";import{T as n,_ as o}from"./MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js";import{d as x,c as r,a as d,b as l,e as i,w as t,g as u,t as s,F as f,f as c,o as p,u as b}from"./index-15cb1481.js";const v=()=>!1,g={class:"intro mdui-typo"},y={class:"intro-module"},w={class:"chapter"},U={class:"mdui-typo"},E=x({__name:"textfield",setup(M){return(h,e)=>{const m=c("router-link");return p(),r(f,null,[d(n),e[51]||(e[51]=l("h1",{class:"title mdui-text-color-theme"},"文本框",-1)),l("div",g,[e[7]||(e[7]=l("p",null,"文本框一般使用在表单中。MDUI 的文本框拥有字数统计、表单验证等功能。",-1)),l("p",null,[e[1]||(e[1]=i(" 可以配合 ")),d(m,{to:"/docs/grid"},{default:t(()=>e[0]||(e[0]=[i("网格布局系统")])),_:1}),e[2]||(e[2]=i(" 进行表单布局。 "))]),l("div",y,[e[6]||(e[6]=l("h3",null,"调用方式",-1)),l("p",null,[e[4]||(e[4]=i(" 在页面加载完后会自动初始化。对于动态生成的文本框，需要调用 ")),d(m,{to:"/docs/global#mutation"},{default:t(()=>e[3]||(e[3]=[l("code",null,"mdui.mutation()",-1)])),_:1}),e[5]||(e[5]=i(" 进行初始化。 "))])]),e[8]||(e[8]=l("div",{class:"intro-module"},[l("h3",null,"色彩"),l("p",null,"使用强调色。")],-1)),e[9]||(e[9]=l("div",{class:"intro-module"},[l("h3",null,"相关阅读"),l("p",null,[l("a",{href:"https://www.mdui.org/zh-cn/design/1/components/text-fields.html",target:"_blank"},"Material Design 设计指南：组件 - 文本框")])],-1))]),d(o,{class:"first-screen"}),e[52]||(e[52]=u('<nav class="toc mdui-text-color-theme"><ul><li><a href="#style">样式</a><ul><li><a href="#basic">单行文本框</a></li><li><a href="#fixed-label">固定标签</a></li><li><a href="#float-label">浮动标签</a></li><li><a href="#disabled">禁用状态</a></li><li><a href="#multiline">多行文本框</a></li><li><a href="#helper-text">含帮助文本</a></li><li><a href="#icon">含图标</a></li><li><a href="#expandable">可展开文本框</a></li></ul></li><li><a href="#func">功能</a><ul><li><a href="#valid">表单验证</a></li><li><a href="#counter">字数统计</a></li><li><a href="#dynamic">动态生成的文本框</a></li></ul></li><li><a href="#class">CSS 类名列表</a></li></ul></nav>',1)),l("div",w,[e[38]||(e[38]=u('<div class="mdui-typo"><h2 class="chapter-title chapter-title-first mdui-text-color-theme"> 样式 <a class="anchor" id="style"></a></h2><h4 class="article-title"> 单行文本框 <a class="anchor" id="basic"></a></h4><p>这是一个最简单的文本框的例子：</p></div>',1)),d(a,{"view-source":"",language:"xml","online-url":"./textfield/demo1"},{demo:t(()=>e[10]||(e[10]=[l("div",{class:"mdui-textfield"},[l("input",{class:"mdui-textfield-input",type:"text",placeholder:"User Name"})],-1)])),code:t(()=>e[11]||(e[11]=[i(s(`<div class="mdui-textfield">
  <input class="mdui-textfield-input" type="text" placeholder="User Name"/>
</div>`))])),_:1}),e[39]||(e[39]=l("div",{class:"mdui-typo"},[l("h4",{class:"article-title"},[i(" 固定标签 "),l("a",{class:"anchor",id:"fixed-label"})])],-1)),d(a,{"view-source":"",language:"xml","online-url":"./textfield/demo2"},{demo:t(()=>e[12]||(e[12]=[l("div",{class:"mdui-textfield"},[l("label",{class:"mdui-textfield-label"},"User Name"),l("input",{class:"mdui-textfield-input",type:"text"})],-1)])),code:t(()=>e[13]||(e[13]=[i(s(`<div class="mdui-textfield">
  <label class="mdui-textfield-label">User Name</label>
  <input class="mdui-textfield-input" type="text"/>
</div>`))])),_:1}),e[40]||(e[40]=l("div",{class:"mdui-typo"},[l("h4",{class:"article-title"},[i(" 浮动标签 "),l("a",{class:"anchor",id:"float-label"})])],-1)),d(a,{"view-source":"",language:"xml","online-url":"./textfield/demo3"},{demo:t(()=>e[14]||(e[14]=[l("div",{class:"mdui-textfield mdui-textfield-floating-label"},[l("label",{class:"mdui-textfield-label"},"Email"),l("input",{class:"mdui-textfield-input",type:"email"})],-1)])),code:t(()=>e[15]||(e[15]=[i(s(`<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">Email</label>
  <input class="mdui-textfield-input" type="email" />
</div>`))])),_:1}),e[41]||(e[41]=l("div",{class:"mdui-typo"},[l("h4",{class:"article-title"},[i(" 禁用状态 "),l("a",{class:"anchor",id:"disabled"})]),l("p",null,[i(" 在 "),l("code",null,".mdui-textfield-input"),i(" 元素上添加 "),l("code",null,"disabled"),i(" 属性，即可禁用文本框。 ")])],-1)),d(a,{"view-source":"",language:"xml","online-url":"./textfield/demo4"},{demo:t(()=>e[16]||(e[16]=[l("div",{class:"mdui-textfield"},[l("input",{class:"mdui-textfield-input",type:"text",disabled:"",placeholder:"User Name"})],-1),l("div",{class:"mdui-textfield"},[l("label",{class:"mdui-textfield-label"},"User Name"),l("input",{class:"mdui-textfield-input",type:"text",disabled:""})],-1),l("div",{class:"mdui-textfield mdui-textfield-floating-label"},[l("label",{class:"mdui-textfield-label"},"Email"),l("input",{class:"mdui-textfield-input",type:"email",disabled:""})],-1)])),code:t(()=>e[17]||(e[17]=[i(s(`<div class="mdui-textfield">
  <input class="mdui-textfield-input" type="text" disabled placeholder="User Name"/>
</div>

<!-- 固定标签 -->
<div class="mdui-textfield">
  <label class="mdui-textfield-label">User Name</label>
  <input class="mdui-textfield-input" type="text" disabled />
</div>

<!-- 浮动标签 -->
<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">Email</label>
  <input class="mdui-textfield-input" type="email" disabled />
</div>`))])),_:1}),e[42]||(e[42]=l("div",{class:"mdui-typo"},[l("h4",{class:"article-title"},[i(" 多行文本框 "),l("a",{class:"anchor",id:"multiline"})]),l("p",null,[i(" 把单行文本框的 "),l("code",null,"input"),i(" 标签替换为 "),l("code",null,"textarea"),i(" 标签，即为多行文本框。多行文本框会根据内容的高度自动调整文本框的高度。 ")])],-1)),d(a,{"view-source":"",language:"xml","online-url":"./textfield/demo5"},{demo:t(()=>e[18]||(e[18]=[l("div",{class:"mdui-textfield"},[l("textarea",{class:"mdui-textfield-input",placeholder:"Description"})],-1),l("div",{class:"mdui-textfield"},[l("label",{class:"mdui-textfield-label"},"Subject"),l("textarea",{class:"mdui-textfield-input"})],-1),l("div",{class:"mdui-textfield mdui-textfield-floating-label"},[l("label",{class:"mdui-textfield-label"},"Message"),l("textarea",{class:"mdui-textfield-input"})],-1),l("div",{class:"mdui-textfield mdui-textfield-floating-label"},[l("label",{class:"mdui-textfield-label"},"Disabled"),l("textarea",{class:"mdui-textfield-input",disabled:""})],-1)])),code:t(()=>e[19]||(e[19]=[i(s(`<div class="mdui-textfield">
  <textarea class="mdui-textfield-input" placeholder="Description"></textarea>
</div>

<!-- 固定标签 -->
<div class="mdui-textfield">
  <label class="mdui-textfield-label">Subject</label>
  <textarea class="mdui-textfield-input"></textarea>
</div>

<!-- 浮动标签 -->
<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">Message</label>
  <textarea class="mdui-textfield-input"></textarea>
</div>

<!-- 禁用状态 -->
<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">Disabled</label>
  <textarea class="mdui-textfield-input" disabled></textarea>
</div>`))])),_:1}),e[43]||(e[43]=l("div",{class:"mdui-typo"},[l("p",null,[i(" 在 "),l("code",null,"textarea"),i(" 上添加 "),l("code",null,"rows"),i(" 属性，则文本框的高度将固定不变。 ")])],-1)),d(a,{"view-source":"",language:"xml","online-url":"./textfield/demo11"},{demo:t(()=>e[20]||(e[20]=[l("div",{class:"mdui-textfield"},[l("textarea",{class:"mdui-textfield-input",rows:"4",placeholder:"Message"})],-1)])),code:t(()=>e[21]||(e[21]=[i(s(`<div class="mdui-textfield">
  <textarea class="mdui-textfield-input" rows="4" placeholder="Message"></textarea>
</div>`))])),_:1}),e[44]||(e[44]=l("div",{class:"mdui-typo"},[l("h4",{class:"article-title"},[i(" 含帮助文本 "),l("a",{class:"anchor",id:"helper-text"})]),l("p",null,[i(" 在 "),l("code",null,s('<div class="mdui-textfield"></div>')),i(" 内部的最后添加元素 "),l("code",null,s('<div class="mdui-textfield-helper"></div>')),i("，可以添加帮助文本。 ")])],-1)),d(a,{"view-source":"",language:"xml","online-url":"./textfield/demo12"},{demo:t(()=>e[22]||(e[22]=[l("div",{class:"mdui-textfield"},[l("input",{type:"email",class:"mdui-textfield-input",placeholder:"邮箱"}),l("div",{class:"mdui-textfield-helper"},"Helper Text")],-1)])),code:t(()=>e[23]||(e[23]=[i(s(`<div class="mdui-textfield">
  <input type="email" class="mdui-textfield-input" placeholder="邮箱" />
  <div class="mdui-textfield-helper">Helper Text</div>
</div>`))])),_:1}),e[45]||(e[45]=l("div",{class:"mdui-typo"},[l("h4",{class:"article-title"},[i("含图标 "),l("a",{class:"anchor",id:"icon"})])],-1)),d(a,{"view-source":"",language:"xml","online-url":"./textfield/demo6"},{demo:t(()=>e[24]||(e[24]=[l("div",{class:"mdui-textfield"},[l("i",{class:"mdui-icon material-icons"},"email"),l("input",{class:"mdui-textfield-input",type:"email",placeholder:"Email"})],-1),l("div",{class:"mdui-textfield"},[l("i",{class:"mdui-icon material-icons"},"account_circle"),l("label",{class:"mdui-textfield-label"},"User name"),l("input",{class:"mdui-textfield-input",type:"text"}),l("div",{class:"mdui-textfield-helper"},"Helper Text")],-1),l("div",{class:"mdui-textfield mdui-textfield-floating-label"},[l("i",{class:"mdui-icon material-icons"},"textsms"),l("label",{class:"mdui-textfield-label"},"Message"),l("textarea",{class:"mdui-textfield-input"})],-1),l("div",{class:"mdui-textfield"},[l("i",{class:"mdui-icon material-icons"},"lock"),l("input",{class:"mdui-textfield-input",type:"text",placeholder:"Disabled",disabled:""})],-1)])),code:t(()=>e[25]||(e[25]=[i(s(`<div class="mdui-textfield">
  <i class="mdui-icon material-icons">email</i>
  <input class="mdui-textfield-input" type="email" placeholder="Email"/>
</div>

<!-- 固定标签 -->
<div class="mdui-textfield">
  <i class="mdui-icon material-icons">account_circle</i>
  <label class="mdui-textfield-label">User name</label>
  <input class="mdui-textfield-input" type="text" />
  <div class="mdui-textfield-helper">Helper Text</div>
</div>

<!-- 浮动标签、多行文本框 -->
<div class="mdui-textfield mdui-textfield-floating-label">
  <i class="mdui-icon material-icons">textsms</i>
  <label class="mdui-textfield-label">Message</label>
  <textarea class="mdui-textfield-input"></textarea>
</div>

<!-- 禁用状态 -->
<div class="mdui-textfield">
  <i class="mdui-icon material-icons">lock</i>
  <input class="mdui-textfield-input" type="text" placeholder="Disabled" disabled/>
</div>`))])),_:1}),e[46]||(e[46]=l("div",{class:"mdui-typo"},[l("h4",{class:"article-title"},[i(" 可展开文本框 "),l("a",{class:"anchor",id:"expandable"})])],-1)),d(a,{"view-source":"",language:"xml","online-url":"./textfield/demo7"},{demo:t(()=>e[26]||(e[26]=[l("div",{class:"mdui-row-xs-1 mdui-row-sm-2"},[l("div",{class:"mdui-col"},[l("div",{class:"mdui-textfield mdui-textfield-expandable"},[l("button",{class:"mdui-textfield-icon mdui-btn mdui-btn-icon"},[l("i",{class:"mdui-icon material-icons"},"search")]),l("input",{class:"mdui-textfield-input",type:"text",placeholder:"Search"}),l("button",{class:"mdui-textfield-close mdui-btn mdui-btn-icon"},[l("i",{class:"mdui-icon material-icons"},"close")])])]),l("div",{class:"mdui-col"},[l("div",{class:"mdui-textfield mdui-textfield-expandable mdui-float-right"},[l("button",{class:"mdui-textfield-icon mdui-btn mdui-btn-icon"},[l("i",{class:"mdui-icon material-icons"},"search")]),l("input",{class:"mdui-textfield-input",type:"text",placeholder:"Search"}),l("button",{class:"mdui-textfield-close mdui-btn mdui-btn-icon"},[l("i",{class:"mdui-icon material-icons"},"close")])])])],-1)])),code:t(()=>e[27]||(e[27]=[i(s(`<div class="mdui-textfield mdui-textfield-expandable">
  <button class="mdui-textfield-icon mdui-btn mdui-btn-icon">
    <i class="mdui-icon material-icons">search</i>
  </button>
  <input class="mdui-textfield-input" type="text" placeholder="Search"/>
  <button class="mdui-textfield-close mdui-btn mdui-btn-icon">
    <i class="mdui-icon material-icons">close</i>
  </button>
</div>

<div class="mdui-textfield mdui-textfield-expandable mdui-float-right">
  <button class="mdui-textfield-icon mdui-btn mdui-btn-icon">
    <i class="mdui-icon material-icons">search</i>
  </button>
  <input class="mdui-textfield-input" type="text" placeholder="Search"/>
  <button class="mdui-textfield-close mdui-btn mdui-btn-icon">
    <i class="mdui-icon material-icons">close</i>
  </button>
</div>`))])),_:1}),e[47]||(e[47]=u('<div class="mdui-typo"><h2 class="chapter-title mdui-text-color-theme"> 功能 <a class="anchor" id="func"></a></h2><h4 class="article-title">表单验证 <a class="anchor" id="valid"></a></h4><p> MDUI 使用 HTML5 进行表单验证，在 <code>&lt;div class=&quot;mdui-textfield&quot;&gt;&lt;/div&gt;</code> 内部的最后添加元素 <code>&lt;div class=&quot;mdui-textfield-error&quot;&gt;&lt;/div&gt;</code>，可以添加错误信息。 </p><p>若同时包含错误信息和帮助文本，需要把帮助文本放在错误信息的后面。</p></div>',1)),d(a,{"view-source":"",language:"xml","online-url":"./textfield/demo8"},{demo:t(()=>e[28]||(e[28]=[l("div",{class:"mdui-textfield mdui-textfield-floating-label"},[l("label",{class:"mdui-textfield-label"},"User name"),l("input",{class:"mdui-textfield-input",type:"text",required:""}),l("div",{class:"mdui-textfield-error"},"用户名不能为空")],-1),l("div",{class:"mdui-textfield mdui-textfield-floating-label"},[l("label",{class:"mdui-textfield-label"},"Email"),l("input",{class:"mdui-textfield-input",type:"email",required:""}),l("div",{class:"mdui-textfield-error"},"邮箱格式错误")],-1),l("div",{class:"mdui-textfield mdui-textfield-floating-label"},[l("label",{class:"mdui-textfield-label"},"Password"),l("input",{class:"mdui-textfield-input",type:"text",pattern:"^.*(?=.{6,})(?=.*[a-z])(?=.*[A-Z]).*$",required:""}),l("div",{class:"mdui-textfield-error"}," 密码至少 6 位，且包含大小写字母 "),l("div",{class:"mdui-textfield-helper"}," 请输入至少 6 位，且包含大小写字母的密码 ")],-1)])),code:t(()=>[i(s(`<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">User name</label>
  <input class="mdui-textfield-input" type="text" required />
  <div class="mdui-textfield-error">用户名不能为空</div>
</div>

<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">Email</label>
  <input class="mdui-textfield-input" type="email" required />
  <div class="mdui-textfield-error">邮箱格式错误</div>
</div>

<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">Password</label>
  <input
    class="mdui-textfield-input"
    type="text"
    pattern="^.*(?=.{6,})(?=.*[a-z])(?=.*[A-Z]).*${b(v)()?"$$":"$"}"
    required
  />
  <div class="mdui-textfield-error">密码至少 6 位，且包含大小写字母</div>
  <div class="mdui-textfield-helper">请输入至少 6 位，且包含大小写字母的密码</div>
</div>`),1)]),_:1}),e[48]||(e[48]=l("div",{class:"mdui-typo"},[l("p",null,"除了使用 HTML5 的表单验证外，也可以使用 JavaScript 进行验证。"),l("p",null,[i(" 在验证不通过的文本框上添加类 "),l("code",null,".mdui-textfield-invalid"),i("，验证通过后移除该类即可。 ")])],-1)),d(a,{"view-source":"",language:"xml","online-url":"./textfield/demo9"},{demo:t(()=>e[29]||(e[29]=[l("div",{class:"mdui-textfield mdui-textfield-invalid"},[l("label",{class:"mdui-textfield-label"},"User name"),l("input",{class:"mdui-textfield-input",type:"text"}),l("div",{class:"mdui-textfield-error"},"用户名已存在")],-1)])),code:t(()=>e[30]||(e[30]=[i(s(`<div class="mdui-textfield mdui-textfield-invalid">
  <label class="mdui-textfield-label">User name</label>
  <input class="mdui-textfield-input" type="text" />
  <div class="mdui-textfield-error">用户名已存在</div>
</div>`))])),_:1}),e[49]||(e[49]=l("div",{class:"mdui-typo"},[l("h4",{class:"article-title"},[i(" 字数统计 "),l("a",{class:"anchor",id:"counter"})]),l("p",null,[i(" 在 "),l("code",null,"input"),i(" 元素上添加属性 "),l("code",null,'maxlength=""'),i(" 即可限制输入的字符长度，MDUI 会自动添加实时字数统计显示到文本框右下角。 ")])],-1)),d(a,{class:"demo10","view-source":"",language:"xml","online-url":"./textfield/demo10"},{demo:t(()=>e[31]||(e[31]=[l("div",{class:"mdui-textfield"},[l("label",{class:"mdui-textfield-label"},"User name"),l("input",{class:"mdui-textfield-input",type:"text",maxlength:"20"})],-1),l("div",{class:"mdui-textfield mdui-textfield-floating-label"},[l("label",{class:"mdui-textfield-label"},"Email"),l("input",{class:"mdui-textfield-input",type:"email",maxlength:"60"}),l("div",{class:"mdui-textfield-error"},"邮箱格式错误")],-1),l("div",{class:"mdui-textfield mdui-textfield-floating-label"},[l("label",{class:"mdui-textfield-label"},"Message"),l("textarea",{class:"mdui-textfield-input",maxlength:"140"})],-1)])),code:t(()=>e[32]||(e[32]=[i(s(`<div class="mdui-textfield">
  <label class="mdui-textfield-label">User name</label>
  <input class="mdui-textfield-input" type="text" maxlength="20" />
</div>

<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">Email</label>
  <input class="mdui-textfield-input" type="email" maxlength="60" />
  <div class="mdui-textfield-error">邮箱格式错误</div>
</div>

<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">Message</label>
  <textarea class="mdui-textfield-input" maxlength="140"></textarea>
</div>`))])),_:1}),l("div",U,[e[36]||(e[36]=l("h4",{class:"article-title"},[i(" 动态生成的文本框 "),l("a",{class:"anchor",id:"dynamic"})],-1)),l("p",null,[e[34]||(e[34]=i(" 如果你的文本框是动态生成的，则需要调用 ")),d(m,{to:"/docs/global#mutation"},{default:t(()=>e[33]||(e[33]=[l("code",null,"mdui.mutation()",-1)])),_:1}),e[35]||(e[35]=i(" 进行初始化。 "))]),e[37]||(e[37]=l("p",null,[i(" 如果你动态修改了文本框内容，则需要调用 "),l("code",null,"mdui.updateTextFields()"),i(" 方法来重新初始化文本框。该方法可以接受一个含 "),l("code",null,".mdui-textfield"),i(" 类的 CSS 选择器、或者 DOM 元素、或者 DOM 元素组成的数组作为参数，表示只重新初始化指定文本框。如果没有传入参数，将重新初始化页面中的所有文本框。 ")],-1))]),e[50]||(e[50]=u('<div class="mdui-typo"><h2 class="chapter-title mdui-text-color-theme"> CSS 类名列表 <a class="anchor" id="class"></a></h2><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>类名</th><th>效果</th></tr></thead><tbody><tr><td><code>.mdui-textfield</code></td><td>定义一个文本框。</td></tr><tr><td><code>.mdui-textfield-floating-label</code></td><td>定义浮动标签文本框。</td></tr><tr><td><code>.mdui-textfield-label</code></td><td>定义文本框的标签。</td></tr><tr><td><code>.mdui-textfield-input</code></td><td>定义文本框的输入框。</td></tr><tr><td><code>.mdui-textfield-error</code></td><td>定义表单验证的错误信息。</td></tr><tr><td><code>.mdui-textfield-helper</code></td><td>定义文本框的帮助文本。</td></tr></tbody></table></div></div>',1))])],64)}}});export{E as default};
