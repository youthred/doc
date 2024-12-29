import{D as t}from"Demo-5062ffc5.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/Demo-5062ffc5.js*/;import{T as c,_ as u}from"MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js*/;import{d as r,c as n,a as l,g as m,b as i,w as s,e as a,F as o,o as p,t as d}from"index-15cb1481.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/index-15cb1481.js*/;const h={class:"chapter"},S=r({__name:"menu",setup(v){return(f,e)=>(p(),n(o,null,[l(c),e[15]||(e[15]=m('<h1 class="title mdui-text-color-theme">菜单</h1><div class="intro mdui-typo"><p>菜单分为简单菜单和级联菜单。简单菜单适用在手机和平板上，级联菜单适用在桌面设备。</p><div class="intro-module"><h3>调用方式</h3><ol><li>通过自定义属性调用</li><li>通过 JavaScript 调用</li></ol></div><div class="intro-module"><h3>相关阅读</h3><p><a href="../../../../www.mdui.org/zh-cn/design/1/components/menus.html"/*tpa=https://www.mdui.org/zh-cn/design/1/components/menus.html*/ target="_blank">Material Design 设计指南：组件 - 菜单</a></p></div></div>',2)),l(u,{class:"first-screen"}),e[16]||(e[16]=m('<nav class="toc mdui-text-color-theme"><ul><li><a href="#style">样式</a><ul><li><a href="#simple">简单菜单</a></li><li><a href="#simple-icon">带图标的简单菜单</a></li><li><a href="#cascade">级联菜单</a></li></ul></li><li><a href="#call">调用方式</a><ul><li><a href="#attr">通过自定义属性调用</a></li><li><a href="#js">通过 JavaScript 调用</a></li><li><a href="#option">参数</a></li><li><a href="#method">方法</a></li><li><a href="#event">事件</a></li></ul></li><li><a href="#class">CSS 类名列表</a></li></ul></nav>',1)),i("div",h,[e[10]||(e[10]=m('<div class="mdui-typo"><h2 class="chapter-title chapter-title-first mdui-text-color-theme">样式 <a class="anchor" id="style"></a></h2><h4 class="article-title">简单菜单 <a class="anchor" id="simple"></a></h4><p>在菜单项上添加 <code>disabled</code> 属性可以禁用一个菜单项。</p><p>添加 <code>&lt;li class=&quot;mdui-divider&quot;&gt;&lt;/li&gt;</code> 元素可以添加分隔线。</p></div>',1)),l(t,{"view-source":"",language:"xml","online-url":"./menu/demo1"},{demo:s(()=>e[0]||(e[0]=[i("button",{class:"mdui-btn mdui-color-theme-accent","mdui-menu":"{target: '#example-1'}"},"open",-1),i("ul",{class:"mdui-menu",id:"example-1"},[i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},"Refresh")]),i("li",{class:"mdui-menu-item",disabled:""},[i("a",{href:"javascript:;"},"Help & feedback")]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},"Settings")]),i("li",{class:"mdui-divider"}),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},"Sign out")])],-1)])),code:s(()=>e[1]||(e[1]=[a(d(`<ul class="mdui-menu">
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">Refresh</a>
  </li>
  <li class="mdui-menu-item" disabled>
    <a href="javascript:;">Help & feedback</a>
  </li>
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">Settings</a>
  </li>
  <li class="mdui-divider"></li>
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">Sign out</a>
  </li>
</ul>`))])),_:1}),e[11]||(e[11]=i("div",{class:"mdui-typo"},[i("h4",{class:"article-title"},[a("带图标的简单菜单 "),i("a",{class:"anchor",id:"simple-icon"})])],-1)),l(t,{"view-source":"",language:"xml","online-url":"./menu/demo2"},{demo:s(()=>e[2]||(e[2]=[i("button",{class:"mdui-btn mdui-color-theme-accent","mdui-menu":"{target: '#example-2'}"},"open",-1),i("ul",{class:"mdui-menu",id:"example-2"},[i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon mdui-icon material-icons"},"remove_red_eye"),a("Preview ")])]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon mdui-icon material-icons"},"file_download"),a("Download ")])]),i("li",{class:"mdui-divider"}),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon mdui-icon material-icons"},"delete"),a("Remove ")])]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon"}),a("Empty ")])])],-1)])),code:s(()=>e[3]||(e[3]=[a(d(`<ul class="mdui-menu">
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-menu-item-icon mdui-icon material-icons">remove_red_eye</i>Preview
    </a>
  </li>
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-menu-item-icon mdui-icon material-icons">file_download</i>Download
    </a>
  </li>
  <li class="mdui-divider"></li>
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-menu-item-icon mdui-icon material-icons">delete</i>Remove
    </a>
  </li>
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-menu-item-icon"></i>Empty
    </a>
  </li>
</ul>`))])),_:1}),e[12]||(e[12]=m('<div class="mdui-typo"><h4 class="article-title">级联菜单 <a class="anchor" id="cascade"></a></h4><p>在 <code>&lt;ul class=&quot;mdui-menu&quot;&gt;</code> 元素上添加类 <code>.mdui-menu-cascade</code> 即可使菜单变为适用于桌面设备的级联菜单。</p><p>通过在 <code>&lt;li class=&quot;mdui-menu-item&quot;&gt;&lt;/li&gt;</code> 元素内再添加菜单的方式可以实现菜单的嵌套，理论上可以支持无限级嵌套。</p><p><code>&lt;span class=&quot;mdui-menu-item-helper&quot;&gt;&lt;/span&gt;</code> 元素为菜单项添加简短说明。</p><p><code>&lt;span class=&quot;mdui-menu-item-more&quot;&gt;&lt;/span&gt;</code> 元素为菜单项添加一个向右的箭头，用在含子菜单的菜单项上。</p></div>',1)),l(t,{"view-source":"",language:"xml","online-url":"./menu/demo3"},{demo:s(()=>e[4]||(e[4]=[i("button",{class:"mdui-btn mdui-color-theme-accent","mdui-menu":"{target: '#example-3'}"},"open",-1),i("ul",{class:"mdui-menu mdui-menu-cascade",id:"example-3"},[i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon mdui-icon material-icons"},"format_bold"),a(" Bold "),i("span",{class:"mdui-menu-item-helper"},"Ctrl+B")])]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon mdui-icon material-icons"},"format_italic"),a(" Italic ")])]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon"}),a(" Superscript "),i("span",{class:"mdui-menu-item-helper"},"Ctrl+.")])]),i("li",{class:"mdui-divider"}),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[a(" Paragraph style "),i("span",{class:"mdui-menu-item-more"})]),i("ul",{class:"mdui-menu mdui-menu-cascade"},[i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon"}),a("Single ")])]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon mdui-icon material-icons"},"check"),a("1.15 ")])]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon"}),a("Double ")])])])])],-1)])),code:s(()=>e[5]||(e[5]=[a(d(`<ul class="mdui-menu mdui-menu-cascade">
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-menu-item-icon mdui-icon material-icons">format_bold</i>
      Bold
      <span class="mdui-menu-item-helper">Ctrl+B</span>
    </a>
  </li>
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-menu-item-icon mdui-icon material-icons">format_italic</i>
      Italic
    </a>
  </li>
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-menu-item-icon"></i>
      Superscript
      <span class="mdui-menu-item-helper">Ctrl+.</span>
    </a>
  </li>
  <li class="mdui-divider"></li>
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">
      Paragraph style
      <span class="mdui-menu-item-more"></span>
    </a>
    <ul class="mdui-menu mdui-menu-cascade">
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon"></i>Single
        </a>
      </li>
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon mdui-icon material-icons">check</i>1.15
        </a>
      </li>
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon"></i>Double
        </a>
      </li>
    </ul>
  </li>
</ul>`))])),_:1}),e[13]||(e[13]=m('<div class="mdui-typo"><h2 class="chapter-title mdui-text-color-theme">调用方式 <a class="anchor" id="call"></a></h2><h4 class="article-title">通过自定义属性调用 <a class="anchor" id="attr"></a></h4><p>使用该方式无需编写 JavaScript 代码。只需在一个起控制作用的元素<small>（例如：按钮）</small>上添加 <code>mdui-menu=&quot;<a href="#option">options</a>&quot;</code> 属性即可。通过自定义属性调用时，需要额外添加一个 <code>target</code> 参数，用于指定被控制的菜单，它的值为被控制的菜单的 CSS 选择器。</p><p><strong>注意</strong>：为了使菜单能正确地定位，菜单和触发菜单的元素必须位于同一父元素下的同一级。</p></div>',1)),l(t,{"view-source":"",language:"xml","online-url":"./menu/demo4"},{demo:s(()=>e[6]||(e[6]=[i("button",{class:"mdui-btn mdui-color-theme-accent","mdui-menu":"{target: '#example-attr'}"},"open",-1),i("ul",{class:"mdui-menu",id:"example-attr"},[i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},"Refresh")]),i("li",{class:"mdui-menu-item",disabled:""},[i("a",{href:"javascript:;"},"Help & feedback")]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},"Settings")]),i("li",{class:"mdui-divider"}),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},"Sign out")])],-1)])),code:s(()=>e[7]||(e[7]=[a(d(`<button class="mdui-btn mdui-color-theme-accent" mdui-menu="{target: '#example-attr'}">open</button>

<ul class="mdui-menu" id="example-attr">
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">Refresh</a>
  </li>
  <li class="mdui-menu-item" disabled>
    <a href="javascript:;">Help & feedback</a>
  </li>
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">Settings</a>
  </li>
  <li class="mdui-divider"></li>
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">Sign out</a>
  </li>
</ul>`))])),_:1}),l(t,{"view-source":"",language:"xml","online-url":"./menu/demo5"},{demo:s(()=>e[8]||(e[8]=[i("button",{class:"mdui-btn mdui-color-theme-accent","mdui-menu":"{target: '#demo-attr-cascade'}"},"cascade menu",-1),i("ul",{class:"mdui-menu mdui-menu-cascade",id:"demo-attr-cascade"},[i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon mdui-icon material-icons"},"format_bold"),a(" Bold "),i("span",{class:"mdui-menu-item-helper"},"Ctrl+B")])]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon mdui-icon material-icons"},"format_italic"),a(" Italic "),i("span",{class:"mdui-menu-item-helper"},"Ctrl+I")])]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon"}),a(" Superscript "),i("span",{class:"mdui-menu-item-helper"},"Ctrl+.")])]),i("li",{class:"mdui-divider"}),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[a(" Paragraph style "),i("span",{class:"mdui-menu-item-more"})]),i("ul",{class:"mdui-menu mdui-menu-cascade"},[i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon"}),a("Single ")])]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon"}),a("1.15 ")])]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon"}),a("Double ")])]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon mdui-icon material-icons"},"check"),a("Custom: 1.2 ")])]),i("li",{class:"mdui-divider"}),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},"Add space before paragraph")]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},"Add space after paragraph")]),i("li",{class:"mdui-divider"}),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},"Custom spacing...")])])]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[a(" Line spacing "),i("span",{class:"mdui-menu-item-more"})]),i("ul",{class:"mdui-menu mdui-menu-cascade"},[i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon"}),a(" Single ")])]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon"}),a(" 1.15 ")])]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon"}),a(" Double ")])]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[i("i",{class:"mdui-menu-item-icon mdui-icon material-icons"},"check"),a(" Custom: 1.2 "),i("span",{class:"mdui-menu-item-more"})]),i("ul",{class:"mdui-menu mdui-menu-cascade"},[i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[a(" Line spacing "),i("span",{class:"mdui-menu-item-helper"},"1.2")])]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[a(" Paragraph spacing before "),i("span",{class:"mdui-menu-item-helper"},"1.2")])]),i("li",{class:"mdui-menu-item"},[i("a",{href:"javascript:;",class:"mdui-ripple"},[a(" Paragraph spacing after "),i("span",{class:"mdui-menu-item-helper"},"1.5")])])])])])])],-1)])),code:s(()=>e[9]||(e[9]=[a(d(`<button class="mdui-btn mdui-color-theme-accent" mdui-menu="{target: '#demo-attr-cascade'}">cascade menu</button>

<ul class="mdui-menu mdui-menu-cascade" id="demo-attr-cascade">
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-menu-item-icon mdui-icon material-icons">format_bold</i>
      Bold
      <span class="mdui-menu-item-helper">Ctrl+B</span>
    </a>
  </li>
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-menu-item-icon mdui-icon material-icons">format_italic</i>
      Italic
      <span class="mdui-menu-item-helper">Ctrl+I</span>
    </a>
  </li>
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-menu-item-icon"></i>
      Superscript
      <span class="mdui-menu-item-helper">Ctrl+.</span>
    </a>
  </li>
  <li class="mdui-divider"></li>
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">
      Paragraph style
      <span class="mdui-menu-item-more"></span>
    </a>
    <ul class="mdui-menu mdui-menu-cascade">
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon"></i>Single
        </a>
      </li>
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon"></i>1.15
        </a>
      </li>
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon"></i>Double
        </a>
      </li>
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon mdui-icon material-icons">check</i>Custom: 1.2
        </a>
      </li>
      <li class="mdui-divider"></li>
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">Add space before paragraph</a>
      </li>
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">Add space after paragraph</a>
      </li>
      <li class="mdui-divider"></li>
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">Custom spacing...</a>
      </li>
    </ul>
  </li>
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple">
      Line spacing
      <span class="mdui-menu-item-more"></span>
    </a>
    <ul class="mdui-menu mdui-menu-cascade">
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon"></i>
          Single
        </a>
      </li>
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon"></i>
          1.15
        </a>
      </li>
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon"></i>
          Double
        </a>
      </li>
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon mdui-icon material-icons">check</i>
          Custom: 1.2
          <span class="mdui-menu-item-more"></span>
        </a>
        <ul class="mdui-menu mdui-menu-cascade">
          <li class="mdui-menu-item">
            <a href="javascript:;" class="mdui-ripple">
              Line spacing
              <span class="mdui-menu-item-helper">1.2</span>
            </a>
          </li>
          <li class="mdui-menu-item">
            <a href="javascript:;" class="mdui-ripple">
              Paragraph spacing before
              <span class="mdui-menu-item-helper">1.2</span>
            </a>
          </li>
          <li class="mdui-menu-item">
            <a href="javascript:;" class="mdui-ripple">
              Paragraph spacing after
              <span class="mdui-menu-item-helper">1.5</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>`))])),_:1}),e[14]||(e[14]=m(`<div class="mdui-typo"><h4 class="article-title">通过 JavaScript 调用 <a class="anchor" id="js"></a></h4><p>实例化组件：</p><pre><code class="language-js">// anchorSelector 表示触发菜单的元素的 CSS 选择器或 DOM 元素
// menuSelector 表示菜单的 CSS 选择器或 DOM 元素
// options 表示组件的配置参数，见下面的参数列表
var inst = new mdui.Menu(anchorSelector, menuSelector, options);</code></pre></div><a href="https://cdn.w3cbus.com/mdui/docs-1/assets/menu/demo6" target="_blank" class="mdui-btn mdui-color-theme-accent">运行</a><div class="mdui-typo"><h4 class="article-title">参数 <a class="anchor" id="option"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>参数名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>position</code></td><td><code>string</code></td><td><code>auto</code></td><td>菜单相对于触发它的元素的位置。 <ul><li><code>top</code>：菜单在触发它的元素的上方。</li><li><code>bottom</code>：菜单在触发它的元素的下方。</li><li><code>center</code>：菜单在窗口中垂直居中。</li><li><code>auto</code>：自动判断位置。优先级为：<code>bottom</code> &gt; <code>top</code> &gt; <code>center</code>。</li></ul></td></tr><tr><td><code>align</code></td><td><code>string</code></td><td><code>auto</code></td><td>菜单与触发它的元素的对其方式。 <ul><li><code>left</code>：菜单与触发它的元素左对齐。</li><li><code>right</code>：菜单与触发它的元素右对齐。</li><li><code>center</code>：菜单在窗口中水平居中。</li><li><code>auto</code>：自动判断位置：优先级为：<code>left</code> &gt; <code>right</code> &gt; <code>center</code></li></ul></td></tr><tr><td><code>gutter</code></td><td><code>int</code></td><td><code>16</code></td><td>菜单与窗口边框至少保持多少间距，单位为 px。</td></tr><tr><td><code>fixed</code></td><td><code>boolean</code></td><td><code>false</code></td><td>菜单的定位方式 <ul><li><code>true</code>：菜单使用 fixed 定位。在页面滚动时，菜单将保持在窗口固定位置，不随滚动条滚动。</li><li><code>false</code>：菜单使用 absolute 定位。在页面滚动时，菜单将随着页面一起滚动。</li></ul></td></tr><tr><td><code>covered</code></td><td><code>boolean</code></td><td><code>auto</code></td><td>菜单是否覆盖在触发它的元素的上面。 <ul><li><code>true</code>：使菜单覆盖在触发它的元素的上面。</li><li><code>false</code>：使菜单不覆盖触发它的元素。</li><li><code>auto</code>：简单菜单覆盖触发它的元素。级联菜单不覆盖触发它的元素。</li></ul></td></tr><tr><td><code>subMenuTrigger</code></td><td><code>string</code></td><td><code>hover</code></td><td>子菜单的触发方式。 <ul><li><code>click</code>：点击时触发子菜单。</li><li><code>hover</code>：鼠标悬浮时触发子菜单。</li></ul></td></tr><tr><td><code>subMenuDelay</code></td><td><code>int</code></td><td><code>200</code></td><td>子菜单的触发延迟时间（单位：毫秒），只有在 subMenuTrigger: hover 时，这个参数才有效。</td></tr></tbody></table></div></div><div class="mdui-typo"><h4 class="article-title">方法 <a class="anchor" id="method"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>方法名</th><th>描述</th></tr></thead><tbody><tr><td><code>open()</code></td><td>打开菜单。</td></tr><tr><td><code>close()</code></td><td>关闭菜单。</td></tr><tr><td><code>toggle()</code></td><td>切换菜单的打开状态。</td></tr></tbody></table></div></div><div class="mdui-typo"><h4 class="article-title">事件 <a class="anchor" id="event"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>事件</th><th>描述</th><th>目标</th><th>事件</th></tr></thead><tbody><tr><td><code>open.mdui.menu</code></td><td>菜单开始打开动画时，事件将被触发。</td><td rowspan="4"><code>&lt;ul class=&quot;mdui-menu&quot;&gt;&lt;/ul&gt;</code></td><td rowspan="4"><code>event._detail.inst</code>：实例</td></tr><tr><td><code>opened.mdui.menu</code></td><td>菜单结束打开动画时，事件将被触发。</td></tr><tr><td><code>close.mdui.menu</code></td><td>菜单开始关闭动画时，事件将被触发。</td></tr><tr><td><code>closed.mdui.menu</code></td><td>菜单结束关闭动画时，事件将被触发。</td></tr></tbody></table></div></div><div class="mdui-typo"><h2 class="chapter-title mdui-text-color-theme">CSS 类名列表 <a class="anchor" id="class"></a></h2><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>类名</th><th>效果</th></tr></thead><tbody><tr><td><code>.mdui-menu</code></td><td>定义一个菜单组件。</td></tr><tr><td><code>.mdui-menu-cascade</code></td><td>定义级联菜单。</td></tr><tr><td><code>.mdui-menu-item</code></td><td>定义菜单项。</td></tr><tr><td><code>.mdui-menu-item-icon</code></td><td>定义菜单图标。</td></tr><tr><td><code>.mdui-menu-item-helper</code></td><td>定义菜单的帮助文本。</td></tr><tr><td><code>.mdui-menu-item-more</code></td><td>含子菜单的菜单项的向右箭头。</td></tr></tbody></table></div></div>`,6))])],64))}});export{S as default};
