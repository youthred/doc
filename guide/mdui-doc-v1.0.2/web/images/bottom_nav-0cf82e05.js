import{D as e}from"./Demo-5062ffc5.js";import{T as m,_ as c}from"./MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js";import{d as n,c as u,a as o,g as d,b as i,w as l,e as t,t as s,F as v,f as p,o as b}from"./index-15cb1481.js";const h={class:"chapter"},f={class:"mdui-typo"},k=n({__name:"bottom_nav",setup(j){return(y,a)=>{const r=p("router-link");return b(),u(v,null,[o(m),a[26]||(a[26]=d('<h1 class="title mdui-text-color-theme">底部导航栏</h1><div class="intro mdui-typo"><p>底部导航栏固定在页面底部，可以拥有 3 - 5 个选项。它通常只在手机上使用。每个页面只能拥有一个底部导航栏。</p><div class="intro-module"><h3>调用方式</h3><p>只需编写 HTML 即可生效。</p></div><div class="intro-module"><h3>相关阅读</h3><p><a href="https://www.mdui.org/zh-cn/design/1/components/bottom-navigation.html" target="_blank">Material Design 设计指南：组件 - 底部导航</a></p></div></div>',2)),o(c,{class:"first-screen"}),a[27]||(a[27]=d('<nav class="toc mdui-text-color-theme"><ul><li><a href="#style">样式</a><ul><li><a href="#basic">基本样式</a></li><li><a href="#icon">只显示图标</a></li><li><a href="#text">只显示文本</a></li><li><a href="#text-auto">只在激活状态显示文本</a></li><li><a href="#background">背景色</a></li><li><a href="#fixed">固定到页面底部</a></li><li><a href="#auto-hide">自动隐藏</a></li></ul></li><li><a href="#event">事件</a></li><li><a href="#class">CSS 类名列表</a></li></ul></nav>',1)),i("div",h,[a[19]||(a[19]=d('<div class="mdui-typo"><h2 class="chapter-title chapter-title-first mdui-text-color-theme">样式 <a class="anchor" id="style"></a></h2><h4 class="article-title">基本样式 <a class="anchor" id="basic"></a></h4><p>下面的例子同时显示图标和文本，通常在只有 3 个导航项时使用。</p><p>含类 <code>.mdui-bottom-nav-active</code> 的导航项将处于默认激活状态。</p></div>',1)),o(e,{"view-source":"",language:"xml","online-url":"./bottom_nav/demo1"},{demo:l(()=>a[0]||(a[0]=[i("div",{class:"mdui-bottom-nav"},[i("a",{href:"javascript:;",class:"mdui-ripple mdui-bottom-nav-active"},[i("i",{class:"mdui-icon material-icons"},"history"),i("label",null,"Recents")]),i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-icon material-icons"},"favorite"),i("label",null,"Favorites")]),i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-icon material-icons"},"location_on"),i("label",null,"Nearby")])],-1)])),code:l(()=>a[1]||(a[1]=[t(s(`<div class="mdui-bottom-nav">
  <a href="javascript:;" class="mdui-ripple mdui-bottom-nav-active">
    <i class="mdui-icon material-icons">history</i>
    <label>Recents</label>
  </a>
  <a href="javascript:;" class="mdui-ripple">
    <i class="mdui-icon material-icons">favorite</i>
    <label>Favorites</label>
  </a>
  <a href="javascript:;" class="mdui-ripple">
    <i class="mdui-icon material-icons">location_on</i>
    <label>Nearby</label>
  </a>
</div>`))])),_:1}),a[20]||(a[20]=i("div",{class:"mdui-typo"},[i("h4",{class:"article-title"},[t("只显示图标 "),i("a",{class:"anchor",id:"icon"})])],-1)),o(e,{"view-source":"",language:"xml","online-url":"./bottom_nav/demo2"},{demo:l(()=>a[2]||(a[2]=[i("div",{class:"mdui-bottom-nav"},[i("a",{href:"javascript:;",class:"mdui-ripple mdui-bottom-nav-active"},[i("i",{class:"mdui-icon material-icons"},"history")]),i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-icon material-icons"},"favorite")]),i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-icon material-icons"},"location_on")])],-1)])),code:l(()=>a[3]||(a[3]=[t(s(`<div class="mdui-bottom-nav">
  <a href="javascript:;" class="mdui-ripple mdui-bottom-nav-active">
    <i class="mdui-icon material-icons">history</i>
  </a>
  <a href="javascript:;" class="mdui-ripple">
    <i class="mdui-icon material-icons">favorite</i>
  </a>
  <a href="javascript:;" class="mdui-ripple">
    <i class="mdui-icon material-icons">location_on</i>
  </a>
</div>`))])),_:1}),a[21]||(a[21]=i("div",{class:"mdui-typo"},[i("h4",{class:"article-title"},[t("只显示文本 "),i("a",{class:"anchor",id:"text"})])],-1)),o(e,{"view-source":"",language:"xml","online-url":"./bottom_nav/demo3"},{demo:l(()=>a[4]||(a[4]=[i("div",{class:"mdui-bottom-nav"},[i("a",{href:"javascript:;",class:"mdui-ripple mdui-bottom-nav-active"},"Recents"),i("a",{href:"javascript:;",class:"mdui-ripple"},"Favorites"),i("a",{href:"javascript:;",class:"mdui-ripple"},"Nearby")],-1)])),code:l(()=>a[5]||(a[5]=[t(s(`<div class="mdui-bottom-nav">
  <a href="javascript:;" class="mdui-ripple mdui-bottom-nav-active">Recents</a>
  <a href="javascript:;" class="mdui-ripple">Favorites</a>
  <a href="javascript:;" class="mdui-ripple">Nearby</a>
</div>`))])),_:1}),a[22]||(a[22]=i("div",{class:"mdui-typo"},[i("h4",{class:"article-title"},[t("只在激活状态显示文本 "),i("a",{class:"anchor",id:"text-auto"})]),i("p",null,[t("在 "),i("code",null,s('<div class="mdui-bottom-nav"></div>')),t(" 元素上添加类 "),i("code",null,".mdui-bottom-nav-text-auto"),t(" 即可实现该效果。")]),i("p",null,"一般在拥有 4 - 5 个导航项时，使用这种方式。默认只显示图标，在激活导航项后显示文本。")],-1)),o(e,{"view-source":"",language:"xml","online-url":"./bottom_nav/demo4"},{demo:l(()=>a[6]||(a[6]=[i("div",{class:"mdui-bottom-nav mdui-bottom-nav-text-auto"},[i("a",{href:"javascript:;",class:"mdui-ripple mdui-bottom-nav-active"},[i("i",{class:"mdui-icon material-icons"},"live_tv"),i("label",null,"Movies")]),i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-icon material-icons"},"music_note"),i("label",null,"Music")]),i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-icon material-icons"},"book"),i("label",null,"Books")]),i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-icon material-icons"},"library_books"),i("label",null,"Newsstand")])],-1)])),code:l(()=>a[7]||(a[7]=[t(s(`<div class="mdui-bottom-nav mdui-bottom-nav-text-auto">
  <a href="javascript:;" class="mdui-ripple mdui-bottom-nav-active">
    <i class="mdui-icon material-icons">live_tv</i>
    <label>Movies</label>
  </a>
  <a href="javascript:;" class="mdui-ripple">
    <i class="mdui-icon material-icons">music_note</i>
    <label>Music</label>
  </a>
  <a href="javascript:;" class="mdui-ripple">
    <i class="mdui-icon material-icons">book</i>
    <label>Books</label>
  </a>
  <a href="javascript:;" class="mdui-ripple">
    <i class="mdui-icon material-icons">library_books</i>
    <label>Newsstand</label>
  </a>
</div>`))])),_:1}),a[23]||(a[23]=i("div",{class:"mdui-typo"},[i("h4",{class:"article-title"},[t("背景色 "),i("a",{class:"anchor",id:"background"})]),i("p",null,[t("在 "),i("code",null,s('<div class="mdui-bottom-nav"></div>')),t(" 元素上添加类 "),i("code",null,[t(".mdui-color-["),i("span",{"mdui-tooltip":"{content: '颜色名'}"},"color"),t("]")]),t(" 即可为底部导航栏赋予背景色。")])],-1)),o(e,{"view-source":"",language:"xml","online-url":"./bottom_nav/demo5"},{demo:l(()=>a[8]||(a[8]=[i("div",{class:"mdui-bottom-nav mdui-bottom-nav-text-auto mdui-color-brown"},[i("a",{href:"javascript:void(0);",class:"mdui-ripple mdui-ripple-white mdui-bottom-nav-active"},[i("i",{class:"mdui-icon material-icons"},"live_tv"),i("label",null,"Movies")]),i("a",{href:"javascript:void(0);",class:"mdui-ripple mdui-ripple-white"},[i("i",{class:"mdui-icon material-icons"},"music_note"),i("label",null,"Music")]),i("a",{href:"javascript:void(0);",class:"mdui-ripple mdui-ripple-white"},[i("i",{class:"mdui-icon material-icons"},"book"),i("label",null,"Books")]),i("a",{href:"javascript:void(0);",class:"mdui-ripple mdui-ripple-white"},[i("i",{class:"mdui-icon material-icons"},"library_books"),i("label",null,"Newsstand")])],-1)])),code:l(()=>a[9]||(a[9]=[t(s(`<div class="mdui-bottom-nav mdui-bottom-nav-text-auto mdui-color-brown">
  <a href="javascript:void(0);" class="mdui-ripple mdui-ripple-white mdui-bottom-nav-active">
    <i class="mdui-icon material-icons">live_tv</i>
    <label>Movies</label>
  </a>
  <a href="javascript:void(0);" class="mdui-ripple mdui-ripple-white">
    <i class="mdui-icon material-icons">music_note</i>
    <label>Music</label>
  </a>
  <a href="javascript:void(0);" class="mdui-ripple mdui-ripple-white">
    <i class="mdui-icon material-icons">book</i>
    <label>Books</label>
  </a>
  <a href="javascript:void(0);" class="mdui-ripple mdui-ripple-white">
    <i class="mdui-icon material-icons">library_books</i>
    <label>Newsstand</label>
  </a>
</div>`))])),_:1}),a[24]||(a[24]=d('<div class="mdui-typo"><h4 class="article-title">固定到页面底部 <a class="anchor" id="fixed"></a></h4><p>在 <code>body</code> 元素上添加类 <code>.mdui-bottom-nav-fixed</code> 即可将底部导航栏固定在页面底部，不随滚动条滚动。</p><p>这个类需要添加在 <code>body</code> 元素上，而不是 <code>.mdui-bottom-nav</code> 元素上，因为它除了固定应用栏外，还会为 <code>body</code> 添加 <code>padding-bottom</code>，使底部导航栏不会覆盖页面内容。</p></div>',1)),i("div",f,[a[16]||(a[16]=i("h4",{class:"article-title"},[t("自动隐藏 "),i("a",{class:"anchor",id:"auto-hide"})],-1)),a[17]||(a[17]=i("p",null,[t("添加类 "),i("code",null,".mdui-bottom-nav-scroll-hide"),t(" 即可在页面向下滚动时隐藏底部导航栏，向上滚动时显示底部导航栏。")],-1)),i("p",null,[a[14]||(a[14]=i("strong",null,"注意",-1)),a[15]||(a[15]=t("： ")),i("ul",null,[a[13]||(a[13]=i("li",null,"若底部导航栏没有固定在页面底部，则该功能不会生效。",-1)),i("li",null,[a[11]||(a[11]=t("若元素是动态生成的，则需要调用 ")),o(r,{to:"/docs/global#mutation"},{default:l(()=>a[10]||(a[10]=[i("code",null,"mdui.mutation()",-1)])),_:1}),a[12]||(a[12]=t(" 进行初始化。"))])])]),a[18]||(a[18]=i("pre",null,[i("code",{class:"language-html"},s(`<body class="mdui-bottom-nav-fixed">
  <div class="mdui-bottom-nav mdui-bottom-nav-scroll-hide">
    ......
  </div>
</body>`))],-1))]),a[25]||(a[25]=d('<a href="./bottom_nav/demo6" target="_blank" class="mdui-btn mdui-color-theme-accent">运行</a><div class="mdui-typo"><h2 class="chapter-title mdui-text-color-theme">事件 <a class="anchor" id="event"></a></h2><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>事件名</th><th>目标</th><th>描述</th><th>参数</th></tr></thead><tbody><tr><td><code>change.mdui.bottomNav</code></td><td><code>&lt;div class=&quot;mdui-bottom-nav&quot;&gt;&lt;/div&gt;</code></td><td>切换导航项时会触发该事件。</td><td><code>event._detail.index</code>：激活的导航项的索引号。</td></tr></tbody></table></div></div><div class="mdui-typo"><h2 class="chapter-title mdui-text-color-theme">CSS 类名列表 <a class="anchor" id="class"></a></h2><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>类名</th><th>效果</th></tr></thead><tbody><tr><td><code>.mdui-bottom-nav</code></td><td>定义底部导航栏组件。</td></tr><tr><td><code>.mdui-bottom-nav-active</code></td><td>使导航项处于激活状态。</td></tr><tr><td><code>.mdui-bottom-nav-text-auto</code></td><td>使导航栏只在激活状态显示文本。</td></tr><tr><td><code>.mdui-bottom-nav-fixed</code></td><td>使导航栏固定到页面底部。</td></tr><tr><td><code>.mdui-bottom-nav-scroll-hide</code></td><td>在页面向下滚动时隐藏底部导航栏，向上滚动时显示底部导航栏。</td></tr></tbody></table></div></div>',3))])],64)}}});export{k as default};
