import{D as e}from"./Demo-5062ffc5.js";import{T as m,_ as c}from"./MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js";import{d as u,c as p,a as l,g as r,b as i,w as t,e as s,t as d,F as n,f as b,o as v}from"./index-15cb1481.js";const h={class:"chapter"},f={class:"mdui-typo"},w={class:"mdui-typo"},k=u({__name:"appbar",setup(j){return(y,a)=>{const o=b("router-link");return v(),p(n,null,[l(m),a[29]||(a[29]=r('<h1 class="title mdui-text-color-theme">应用栏</h1><div class="intro mdui-typo"><p> 应用栏通常位于页面顶部，可以包含工具栏、Tab 选项卡等组件。一个页面只能有一个应用栏。 </p><div class="intro-module"><h3>调用方式</h3><p>应用栏组件使用纯 CSS 编写，只需编写 HTML 代码即可生效。</p></div><div class="intro-module"><h3>色彩</h3><p> 应用栏不含背景色。可以为应用栏的子元素（工具栏、Tab 选项卡等）设置背景色。 </p></div><div class="intro-module"><h3>相关阅读</h3><p><a href="https://www.mdui.org/zh-cn/design/1/layout/structure.html#structure-app-bar" target="_blank">Material Design 设计指南：结构 - 应用栏</a></p></div></div>',2)),l(c,{class:"first-screen"}),a[30]||(a[30]=r('<nav class="toc mdui-text-color-theme"><ul><li><a href="#style">样式</a><ul><li><a href="#toolbar">仅含工具栏</a></li><li><a href="#tab">仅含 Tab 选项卡</a></li><li><a href="#toolbar-tab">含工具栏和 Tab 选项卡</a></li><li><a href="#transparent">透明背景</a></li><li><a href="#fixed">固定到页面顶部</a></li><li><a href="#hide">自动隐藏应用栏</a></li><li><a href="#toolbar-hide">自动隐藏应用栏中的工具栏</a></li></ul></li><li><a href="#class">CSS 类名列表</a></li></ul></nav>',1)),i("div",h,[a[22]||(a[22]=r('<div class="mdui-typo"><h2 class="chapter-title chapter-title-first mdui-text-color-theme"> 样式 <a class="anchor" id="style"></a></h2><h4 class="article-title"> 仅含工具栏 <a class="anchor" id="toolbar"></a></h4></div>',1)),l(e,{"view-source":"",language:"xml","online-url":"./appbar/demo1"},{demo:t(()=>a[0]||(a[0]=[i("div",{class:"mdui-appbar",style:{position:"relative"}},[i("div",{class:"mdui-toolbar mdui-color-theme"},[i("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[i("i",{class:"mdui-icon material-icons"},"menu")]),i("a",{href:"javascript:;",class:"mdui-typo-headline"},"MDUI"),i("a",{href:"javascript:;",class:"mdui-typo-title"},"Title"),i("div",{class:"mdui-toolbar-spacer"}),i("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[i("i",{class:"mdui-icon material-icons"},"search")]),i("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[i("i",{class:"mdui-icon material-icons"},"refresh")]),i("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[i("i",{class:"mdui-icon material-icons"},"more_vert")])])],-1)])),code:t(()=>a[1]||(a[1]=[s(d(`<div class="mdui-appbar">
  <div class="mdui-toolbar mdui-color-theme">
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">menu</i>
    </a>
    <a href="javascript:;" class="mdui-typo-headline">MDUI</a>
    <a href="javascript:;" class="mdui-typo-title">Title</a>
    <div class="mdui-toolbar-spacer"></div>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">search</i>
    </a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">refresh</i>
    </a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">more_vert</i>
    </a>
  </div>
</div>`))])),_:1}),a[23]||(a[23]=i("div",{class:"mdui-typo"},[i("h4",{class:"article-title"},[s(" 仅含 Tab 选项卡 "),i("a",{class:"anchor",id:"tab"})])],-1)),l(e,{"view-source":"",language:"xml","online-url":"./appbar/demo2"},{demo:t(()=>a[2]||(a[2]=[i("div",{class:"mdui-appbar",style:{position:"relative"}},[i("div",{class:"mdui-tab mdui-color-theme","mdui-tab":""},[i("a",{href:"#example3-tab1",class:"mdui-ripple mdui-ripple-white"},"web"),i("a",{href:"#example3-tab2",class:"mdui-ripple mdui-ripple-white"},"shopping"),i("a",{href:"#example3-tab3",class:"mdui-ripple mdui-ripple-white"},"videos")])],-1)])),code:t(()=>a[3]||(a[3]=[s(d(`<div class="mdui-appbar">
  <div class="mdui-tab mdui-color-theme" mdui-tab>
    <a href="#example3-tab1" class="mdui-ripple mdui-ripple-white">web</a>
    <a href="#example3-tab2" class="mdui-ripple mdui-ripple-white">shopping</a>
    <a href="#example3-tab3" class="mdui-ripple mdui-ripple-white">videos</a>
  </div>
</div>`))])),_:1}),a[24]||(a[24]=i("div",{class:"mdui-typo"},[i("h4",{class:"article-title"},[s(" 含工具栏和 Tab 选项卡 "),i("a",{class:"anchor",id:"toolbar-tab"})])],-1)),l(e,{"view-source":"",language:"xml","online-url":"./appbar/demo3"},{demo:t(()=>a[4]||(a[4]=[i("div",{class:"mdui-appbar",style:{position:"relative"}},[i("div",{class:"mdui-toolbar mdui-color-theme"},[i("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[i("i",{class:"mdui-icon material-icons"},"menu")]),i("a",{href:"javascript:;",class:"mdui-typo-title"},"Title"),i("div",{class:"mdui-toolbar-spacer"}),i("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[i("i",{class:"mdui-icon material-icons"},"search")]),i("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[i("i",{class:"mdui-icon material-icons"},"refresh")]),i("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[i("i",{class:"mdui-icon material-icons"},"more_vert")])]),i("div",{class:"mdui-tab mdui-color-theme","mdui-tab":""},[i("a",{href:"#example3-tab1",class:"mdui-ripple mdui-ripple-white"},"web"),i("a",{href:"#example3-tab2",class:"mdui-ripple mdui-ripple-white"},"shopping"),i("a",{href:"#example3-tab3",class:"mdui-ripple mdui-ripple-white"},"videos")])],-1)])),code:t(()=>a[5]||(a[5]=[s(d(`<div class="mdui-appbar">
  <div class="mdui-toolbar mdui-color-theme">
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">menu</i>
    </a>
    <a href="javascript:;" class="mdui-typo-title">Title</a>
    <div class="mdui-toolbar-spacer"></div>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">search</i>
    </a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">refresh</i>
    </a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">more_vert</i>
    </a>
  </div>
  <div class="mdui-tab mdui-color-theme" mdui-tab>
    <a href="#example3-tab1" class="mdui-ripple mdui-ripple-white">web</a>
    <a href="#example3-tab1" class="mdui-ripple mdui-ripple-white">shopping</a>
    <a href="#example3-tab1" class="mdui-ripple mdui-ripple-white">videos</a>
  </div>
</div>`))])),_:1}),l(e,{"view-source":"",language:"xml","online-url":"./appbar/demo4"},{demo:t(()=>a[6]||(a[6]=[i("div",{class:"mdui-appbar",style:{position:"relative"}},[i("div",{class:"mdui-toolbar mdui-color-theme"},[i("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[i("i",{class:"mdui-icon material-icons"},"menu")]),i("a",{href:"javascript:;",class:"mdui-typo-title"},"Title"),i("div",{class:"mdui-toolbar-spacer"}),i("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[i("i",{class:"mdui-icon material-icons"},"search")]),i("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[i("i",{class:"mdui-icon material-icons"},"refresh")]),i("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[i("i",{class:"mdui-icon material-icons"},"more_vert")])]),i("div",{class:"mdui-tab mdui-color-theme","mdui-tab":""},[i("a",{href:"#example6-tab1",class:"mdui-ripple mdui-ripple-white"},[i("i",{class:"mdui-icon material-icons"},"phone"),i("label",null,"recents")]),i("a",{href:"#example6-tab2",class:"mdui-ripple mdui-ripple-white"},[i("i",{class:"mdui-icon material-icons"},"favorite"),i("label",null,"favorites")]),i("a",{href:"#example6-tab3",class:"mdui-ripple mdui-ripple-white"},[i("i",{class:"mdui-icon material-icons"},"perm_contact_calendar"),i("label",null,"nearby")])])],-1)])),code:t(()=>a[7]||(a[7]=[s(d(`<div class="mdui-appbar">
  <div class="mdui-toolbar mdui-color-theme">
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">menu</i>
    </a>
    <a href="javascript:;" class="mdui-typo-title">Title</a>
    <div class="mdui-toolbar-spacer"></div>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">search</i>
    </a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">refresh</i>
    </a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">more_vert</i>
    </a>
  </div>
  <div class="mdui-tab mdui-color-theme" mdui-tab>
    <a href="#example6-tab1" class="mdui-ripple mdui-ripple-white">
      <i class="mdui-icon material-icons">phone</i>
      <label>recents</label>
    </a>
    <a href="#example6-tab2" class="mdui-ripple mdui-ripple-white">
      <i class="mdui-icon material-icons">favorite</i>
      <label>favorites</label>
    </a>
    <a href="#example6-tab3" class="mdui-ripple mdui-ripple-white">
      <i class="mdui-icon material-icons">perm_contact_calendar</i>
      <label>nearby</label>
    </a>
  </div>
</div>`))])),_:1}),a[25]||(a[25]=i("div",{class:"mdui-typo"},[i("h4",{class:"article-title"},[s(" 透明背景 "),i("a",{class:"anchor",id:"transparent"})]),i("p",null,[s("需要添加类 "),i("code",null,".mdui-shadow-0"),s(" 取消应用栏的阴影。")])],-1)),l(e,{"view-source":"",language:"xml","online-url":"./appbar/demo5"},{demo:t(()=>a[8]||(a[8]=[i("div",{class:"mdui-appbar mdui-shadow-0",style:{position:"relative"}},[i("div",{class:"mdui-toolbar"},[i("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[i("i",{class:"mdui-icon material-icons"},"menu")]),i("a",{href:"javascript:;",class:"mdui-typo-title"},"Title"),i("div",{class:"mdui-toolbar-spacer"}),i("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[i("i",{class:"mdui-icon material-icons"},"search")]),i("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[i("i",{class:"mdui-icon material-icons"},"refresh")]),i("a",{href:"javascript:;",class:"mdui-btn mdui-btn-icon"},[i("i",{class:"mdui-icon material-icons"},"more_vert")])])],-1)])),code:t(()=>a[9]||(a[9]=[s(d(`<div class="mdui-appbar mdui-shadow-0">
  <div class="mdui-toolbar">
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">menu</i>
    </a>
    <a href="javascript:;" class="mdui-typo-title">Title</a>
    <div class="mdui-toolbar-spacer"></div>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">search</i>
    </a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">refresh</i>
    </a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">more_vert</i>
    </a>
  </div>
</div>`))])),_:1}),a[26]||(a[26]=r('<div class="mdui-typo"><h4 class="article-title"> 固定到页面顶部 <a class="anchor" id="fixed"></a></h4><p> 在 <code>&lt;div class=&quot;mdui-appbar&quot;&gt;&lt;/div&gt;</code> 上添加类 <code>.mdui-appbar-fixed</code> 可以将应用栏固定在页面顶部，不随滚动条滚动。 </p><p> 为了使应用栏不覆盖页面内容，需要在 <code>body</code> 上添加类来为 <code>body</code> 添加 <code>padding-top</code>： </p><ul><li><code>.mdui-appbar-with-toolbar</code>：应用栏中含工具栏时需要添加该类。 </li><li><code>.mdui-appbar-with-tab</code>：应用栏中含 Tab 选项卡时需要添加该类。 </li><li><code>.mdui-appbar-with-tab-larger</code>：应用栏中含同时又图标和文本的 Tab 选项卡时需要添加该类。 </li></ul><p> 如果应用栏中有除了工具栏和 Tab 选项卡外的其他元素，需要你自己为 <code>body</code> 添加适当的 <code>padding-top</code>。 </p></div><a href="./appbar/demo6" target="_blank" class="mdui-btn mdui-color-theme-accent mdui-m-r-1">示例 1</a><a href="./appbar/demo7" target="_blank" class="mdui-btn mdui-color-theme-accent mdui-m-r-1">示例 2</a><a href="./appbar/demo8" target="_blank" class="mdui-btn mdui-color-theme-accent mdui-m-r-1">示例 3</a>',4)),i("div",f,[a[13]||(a[13]=i("h4",{class:"article-title"},[s(" 自动隐藏应用栏 "),i("a",{class:"anchor",id:"hide"})],-1)),a[14]||(a[14]=i("p",null,[s(" 在 "),i("code",null,d('<div class="mdui-appbar"></div>')),s(" 上添加类 "),i("code",null,".mdui-appbar-scroll-hide"),s(" 可以在页面向下滚动时隐藏应用栏，页面向上滚动时显示应用栏。 ")],-1)),i("p",null,[a[11]||(a[11]=s(" 若元素是动态生成的，则需要调用 ")),l(o,{to:"/docs/global#mutation"},{default:t(()=>a[10]||(a[10]=[i("code",null,"mdui.mutation()",-1)])),_:1}),a[12]||(a[12]=s(" 进行初始化。 "))]),a[15]||(a[15]=i("pre",null,[i("code",{class:"language-html"},d(`<body class="mdui-appbar-with-toolbar">
  <div class="mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-hide">
    <div class="mdui-toolbar">
      ......
    </div>
  </div>
</body>`))],-1))]),a[27]||(a[27]=i("a",{href:"./appbar/demo9",target:"_blank",class:"mdui-btn mdui-color-pink-accent"},"运行",-1)),i("div",w,[a[19]||(a[19]=i("h4",{class:"article-title"},[s(" 自动隐藏应用栏中的工具栏 "),i("a",{class:"anchor",id:"toolbar-hide"})],-1)),a[20]||(a[20]=i("p",null,[s(" 在 "),i("code",null,d('<div class="mdui-appbar"></div>')),s(" 上添加类 "),i("code",null,".mdui-appbar-scroll-toolbar-hide"),s("，在应用栏中同时含有工具栏和 Tab 选项卡时，在页面向下滚动时隐藏工具栏，向上滚动时显示工具栏。 ")],-1)),i("p",null,[a[17]||(a[17]=s(" 若元素是动态生成的，则需要调用 ")),l(o,{to:"/docs/global#mutation"},{default:t(()=>a[16]||(a[16]=[i("code",null,"mdui.mutation()",-1)])),_:1}),a[18]||(a[18]=s(" 进行初始化。 "))]),a[21]||(a[21]=i("pre",null,[i("code",{class:"language-html"},d(`<body class="mdui-appbar-with-toolbar mdui-appbar-with-tab">
  <div class="mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-toolbar-hide">
    <div class="mdui-toolbar">
      ......
    </div>
    <div class="mdui-tab">
      ......
    </div>
  </div>
</body>`))],-1))]),a[28]||(a[28]=r('<a href="./appbar/demo10" target="_blank" class="mdui-btn mdui-color-pink-accent">运行</a><div class="mdui-typo"><h2 class="chapter-title mdui-text-color-theme"> CSS 类名列表 <a class="anchor" id="class"></a></h2><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>类名</th><th>效果</th></tr></thead><tbody><tr><td><code>.mdui-appbar</code></td><td>定义一个应用栏。</td></tr><tr><td><code>.mdui-appbar-fixed</code></td><td>使应用栏固定到页面顶部。</td></tr><tr><td><code>.mdui-appbar-with-toolbar</code></td><td>应用栏中含工具栏时需要在 <code>body</code> 上添加该类</td></tr><tr><td><code>.mdui-appbar-with-tab</code></td><td> 应用栏中含 Tab 选项卡时需要在 <code>body</code> 上添加该类 </td></tr><tr><td><code>.mdui-appbar-with-tab-larger</code></td><td> 应用栏中含同时又图标和文本的 Tab 选项卡时需要在 <code>body</code> 上添加该类 </td></tr><tr><td><code>.mdui-appbar-scroll-hide</code></td><td>在页面向下滚动时隐藏应用栏，向上滚动时显示应用栏。</td></tr><tr><td><code>.mdui-appbar-scroll-toolbar-hide</code></td><td> 在应用栏中同时含有工具栏和 Tab 选项卡时，页面向下滚动时隐藏工具栏，向上滚动时显示工具栏。 </td></tr></tbody></table></div></div>',2))])],64)}}});export{k as default};
