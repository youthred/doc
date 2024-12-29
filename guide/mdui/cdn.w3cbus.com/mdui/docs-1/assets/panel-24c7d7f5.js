import{D as a}from"Demo-5062ffc5.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/Demo-5062ffc5.js*/;import{T as p,_ as c}from"MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js*/;import{d as m,c as u,a as n,b as t,e as i,w as d,g as o,t as l,F as r,f as v,o as h}from"index-15cb1481.js"/*tpa=https://cdn.w3cbus.com/mdui/docs-1/assets/index-15cb1481.js*/;const S={class:"intro mdui-typo"},b={class:"intro-module"},F={class:"chapter"},T={class:"mdui-typo"},k=m({__name:"panel",setup(y){return(g,e)=>{const s=v("router-link");return h(),u(r,null,[n(p),e[31]||(e[31]=t("h1",{class:"title mdui-text-color-theme"},"可扩展面板",-1)),t("div",S,[t("div",b,[e[4]||(e[4]=t("h3",null,"调用方式",-1)),t("ol",null,[t("li",null,[e[1]||(e[1]=i(" 通过自定义属性调用（若组件是动态生成的，则需要调用 ")),n(s,{to:"/docs/global#mutation"},{default:d(()=>e[0]||(e[0]=[t("code",null,"mdui.mutation()",-1)])),_:1}),e[2]||(e[2]=i(" 进行初始化） "))]),e[3]||(e[3]=t("li",null,"通过 JavaScript 调用",-1))])]),e[5]||(e[5]=t("div",{class:"intro-module"},[t("h3",null,"相关阅读"),t("p",null,[t("a",{href:"https://www.mdui.org/zh-cn/design/1/components/expansion-panels.html",target:"_blank"},"Material Design 设计指南：组件 - 扩展面板")])],-1))]),n(c,{class:"first-screen"}),e[32]||(e[32]=o('<nav class="toc mdui-text-color-theme"><ul><li><a href="#style">样式</a><ul><li><a href="#complete">完整 HTML 结构</a></li><li><a href="#simple">最简 HTML 结构</a></li><li><a href="#open">默认打开的面板项</a></li><li><a href="#gapless">移除面板间距</a></li><li><a href="#popout">弹出面板</a></li><li><a href="#nest">面板嵌套</a></li></ul></li><li><a href="#call">调用方式</a><ul><li><a href="#attr">通过自定义属性调用</a></li><li><a href="#js">通过 JavaScript 调用</a></li><li><a href="#option">参数</a></li><li><a href="#method">方法</a></li><li><a href="#event">事件</a></li></ul></li><li><a href="#class">CSS 类名列表</a></li></ul></nav>',1)),t("div",F,[e[24]||(e[24]=o('<div class="mdui-typo"><h2 class="chapter-title chapter-title-first mdui-text-color-theme"> 样式 <a class="anchor" id="style"></a></h2><h4 class="article-title"> 完整 HTML 结构 <a class="anchor" id="complete"></a></h4><p>这个示例包含了所有可以包含的 HTML 元素。</p></div>',1)),n(a,{"view-source":"",language:"xml","online-url":"./panel/demo1"},{demo:d(()=>e[6]||(e[6]=[t("div",{class:"mdui-panel","mdui-panel":""},[t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},[t("div",{class:"mdui-panel-item-title"},"Trip name"),t("div",{class:"mdui-panel-item-summary"},"Carribean cruise"),t("i",{class:"mdui-panel-item-arrow mdui-icon material-icons"},"keyboard_arrow_down")]),t("div",{class:"mdui-panel-item-body"},[t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("div",{class:"mdui-panel-item-actions"},[t("button",{class:"mdui-btn mdui-ripple","mdui-panel-item-close":""}," cancel "),t("button",{class:"mdui-btn mdui-ripple"},"save")])])]),t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},[t("div",{class:"mdui-panel-item-title"},"Location"),t("i",{class:"mdui-panel-item-arrow mdui-icon material-icons"},"keyboard_arrow_down")]),t("div",{class:"mdui-panel-item-body"},[t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("div",{class:"mdui-panel-item-actions"},[t("button",{class:"mdui-btn mdui-ripple","mdui-panel-item-close":""}," cancel "),t("button",{class:"mdui-btn mdui-ripple"},"save")])])]),t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},[t("div",{class:"mdui-panel-item-title"},"Start and end dates"),t("div",{class:"mdui-panel-item-summary"}," Start date: Feb 29, 2016 "),t("div",{class:"mdui-panel-item-summary"},"End date: Not set"),t("i",{class:"mdui-panel-item-arrow mdui-icon material-icons"},"keyboard_arrow_down")]),t("div",{class:"mdui-panel-item-body"},[t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("div",{class:"mdui-panel-item-actions"},[t("button",{class:"mdui-btn mdui-ripple","mdui-panel-item-close":""}," cancel "),t("button",{class:"mdui-btn mdui-ripple"},"save")])])])],-1)])),code:d(()=>e[7]||(e[7]=[i(l(`<div class="mdui-panel" mdui-panel>

  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">
      <div class="mdui-panel-item-title">Trip name</div>
      <div class="mdui-panel-item-summary">Carribean cruise</div>
      <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
    </div>
    <div class="mdui-panel-item-body">
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <div class="mdui-panel-item-actions">
        <button class="mdui-btn mdui-ripple" mdui-panel-item-close>cancel</button>
        <button class="mdui-btn mdui-ripple">save</button>
      </div>
    </div>
  </div>

  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">
      <div class="mdui-panel-item-title">Location</div>
      <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
    </div>
    <div class="mdui-panel-item-body">
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <div class="mdui-panel-item-actions">
        <button class="mdui-btn mdui-ripple" mdui-panel-item-close>cancel</button>
        <button class="mdui-btn mdui-ripple">save</button>
      </div>
    </div>
  </div>

  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">
      <div class="mdui-panel-item-title">Start and end dates</div>
      <div class="mdui-panel-item-summary">Start date: Feb 29, 2016</div>
      <div class="mdui-panel-item-summary">End date: Not set</div>
      <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
    </div>
    <div class="mdui-panel-item-body">
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <div class="mdui-panel-item-actions">
        <button class="mdui-btn mdui-ripple" mdui-panel-item-close>cancel</button>
        <button class="mdui-btn mdui-ripple">save</button>
      </div>
    </div>
  </div>

</div>`))])),_:1}),e[25]||(e[25]=t("div",{class:"mdui-typo"},[t("h4",{class:"article-title"},[i(" 最简 HTML 结构 "),t("a",{class:"anchor",id:"simple"})]),t("p",null,"上例中的部分元素并不是必须的，下面的示例只包含必须的 HTML 元素。")],-1)),n(a,{"view-source":"",language:"xml","online-url":"./panel/demo2"},{demo:d(()=>e[8]||(e[8]=[t("div",{class:"mdui-panel","mdui-panel":""},[t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"First"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content")])]),t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"Second"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content")])]),t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"Third"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content")])])],-1)])),code:d(()=>e[9]||(e[9]=[i(l(`<div class="mdui-panel" mdui-panel>

  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">First</div>
    <div class="mdui-panel-item-body">
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
    </div>
  </div>

  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">Second</div>
    <div class="mdui-panel-item-body">
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
    </div>
  </div>

  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">Third</div>
    <div class="mdui-panel-item-body">
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
    </div>
  </div>

</div>`))])),_:1}),e[26]||(e[26]=t("div",{class:"mdui-typo"},[t("h4",{class:"article-title"},[i(" 默认打开的面板项 "),t("a",{class:"anchor",id:"open"})]),t("p",null,[i(" 在 "),t("code",null,l('<div class="mdui-panel-item"></div>')),i(" 元素上添加类 "),t("code",null,".mdui-panel-item-open"),i(" 即可使该面板项处于默认打开状态。 ")])],-1)),n(a,{"view-source":"",language:"xml","online-url":"./panel/demo3"},{demo:d(()=>e[10]||(e[10]=[t("div",{class:"mdui-panel","mdui-panel":""},[t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"First"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content")])]),t("div",{class:"mdui-panel-item mdui-panel-item-open"},[t("div",{class:"mdui-panel-item-header"},"Second"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content")])]),t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"Third"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content")])])],-1)])),code:d(()=>e[11]||(e[11]=[i(l(`<div class="mdui-panel" mdui-panel>

  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">First</div>
    <div class="mdui-panel-item-body">
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
    </div>
  </div>

  <div class="mdui-panel-item mdui-panel-item-open">
    <div class="mdui-panel-item-header">Second</div>
    <div class="mdui-panel-item-body">
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
    </div>
  </div>

  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">Third</div>
    <div class="mdui-panel-item-body">
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
    </div>
  </div>

</div>`))])),_:1}),e[27]||(e[27]=t("div",{class:"mdui-typo"},[t("h4",{class:"article-title"},[i(" 移除面板间距 "),t("a",{class:"anchor",id:"gapless"})]),t("p",null,[i(" 在 "),t("code",null,l('<div class="mdui-panel"></div>')),i(" 元素上添加类 "),t("code",null,".mdui-panel-gapless"),i(" 即可移除打开的面板和其他面板之间的间距。 ")])],-1)),n(a,{"view-source":"",language:"xml","online-url":"./panel/demo4"},{demo:d(()=>e[12]||(e[12]=[t("div",{class:"mdui-panel mdui-panel-gapless","mdui-panel":""},[t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"First"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content")])]),t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"Second"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content")])]),t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"Third"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content")])])],-1)])),code:d(()=>e[13]||(e[13]=[i(l(`<div class="mdui-panel mdui-panel-gapless" mdui-panel>

  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">First</div>
    <div class="mdui-panel-item-body">
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
    </div>
  </div>

  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">Second</div>
    <div class="mdui-panel-item-body">
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
    </div>
  </div>

  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">Third</div>
    <div class="mdui-panel-item-body">
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
    </div>
  </div>

</div>`))])),_:1}),e[28]||(e[28]=t("div",{class:"mdui-typo"},[t("h4",{class:"article-title"},[i("弹出面板 "),t("a",{class:"anchor",id:"popout"})]),t("p",null,[i(" 在 "),t("code",null,l('<div class="mdui-panel"></div>')),i(" 元素上添加类 "),t("code",null,".mdui-panel-popout"),i(" 即可使打开的面板有弹出效果。 ")])],-1)),n(a,{"view-source":"",language:"xml","online-url":"./panel/demo5"},{demo:d(()=>e[14]||(e[14]=[t("div",{class:"mdui-panel mdui-panel-popout","mdui-panel":""},[t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"First"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content")])]),t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"Second"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content")])]),t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"Third"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content")])])],-1)])),code:d(()=>e[15]||(e[15]=[i(l(`<div class="mdui-panel mdui-panel-popout" mdui-panel>

  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">First</div>
    <div class="mdui-panel-item-body">
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
    </div>
  </div>

  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">Second</div>
    <div class="mdui-panel-item-body">
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
    </div>
  </div>

  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">Third</div>
    <div class="mdui-panel-item-body">
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
    </div>
  </div>

</div>`))])),_:1}),e[29]||(e[29]=t("div",{class:"mdui-typo"},[t("h4",{class:"article-title"},[i("面板嵌套 "),t("a",{class:"anchor",id:"nest"})]),t("p",null,"可扩展面板可以互相嵌套。")],-1)),n(a,{"view-source":"",language:"xml","online-url":"./panel/demo6"},{demo:d(()=>e[16]||(e[16]=[t("div",{class:"mdui-panel","mdui-panel":""},[t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"First"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("div",{class:"mdui-panel","mdui-panel":""},[t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"First"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("div",{class:"mdui-panel","mdui-panel":""},[t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"First"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content")])]),t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"Second"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content")])])])])]),t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"Second"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content")])])])])]),t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"Second"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content")])]),t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"Third"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content")])])],-1)])),code:d(()=>e[17]||(e[17]=[i(l(`<div class="mdui-panel" mdui-panel>
  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">First</div>
    <div class="mdui-panel-item-body">
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>

      <!-- 第一个嵌套的可扩展列表 -->
      <div class="mdui-panel" mdui-panel>
        <div class="mdui-panel-item">
          <div class="mdui-panel-item-header">First</div>
          <div class="mdui-panel-item-body">
            <p>First content</p>
            <p>First content</p>
            <p>First content</p>

            <!-- 第二个嵌套的可扩展列表 -->
            <div class="mdui-panel" mdui-panel>
              <div class="mdui-panel-item">
                <div class="mdui-panel-item-header">First</div>
                <div class="mdui-panel-item-body">
                  <p>First content</p>
                  <p>First content</p>
                  <p>First content</p>
                </div>
              </div>
              <div class="mdui-panel-item">
                <div class="mdui-panel-item-header">Second</div>
                <div class="mdui-panel-item-body">
                  <p>Second content</p>
                  <p>Second content</p>
                  <p>Second content</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="mdui-panel-item">
          <div class="mdui-panel-item-header">Second</div>
          <div class="mdui-panel-item-body">
            <p>Second content</p>
            <p>Second content</p>
            <p>Second content</p>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">Second</div>
    <div class="mdui-panel-item-body">
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
    </div>
  </div>
  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">Third</div>
    <div class="mdui-panel-item-body">
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
    </div>
  </div>
</div>`))])),_:1}),t("div",T,[e[21]||(e[21]=o('<h2 class="chapter-title mdui-text-color-theme"> 调用方式 <a class="anchor" id="call"></a></h2><h4 class="article-title"> 通过自定义属性调用 <a class="anchor" id="attr"></a></h4><p> 使用该方式无需编写 JavaScript 代码。只需在 <code>&lt;div class=&quot;mdui-panel&quot;&gt;&lt;/div&gt;</code> 元素上添加 <code>mdui-panel=&quot;<a href="#option">options</a>&quot;</code> 属性即可激活该插件。 </p>',3)),t("p",null,[e[19]||(e[19]=i(" 若组件是动态生成的，则需要调用 ")),n(s,{to:"/docs/global#mutation"},{default:d(()=>e[18]||(e[18]=[t("code",null,"mdui.mutation()",-1)])),_:1}),e[20]||(e[20]=i(" 进行初始化。 "))])]),n(a,{"view-source":"",language:"xml","online-url":"./panel/demo7"},{demo:d(()=>e[22]||(e[22]=[t("div",{class:"mdui-panel","mdui-panel":"{accordion: true}"},[t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"First"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content"),t("p",null,"First content")])]),t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"Second"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content"),t("p",null,"Second content")])]),t("div",{class:"mdui-panel-item"},[t("div",{class:"mdui-panel-item-header"},"Third"),t("div",{class:"mdui-panel-item-body"},[t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content"),t("p",null,"Third content")])])],-1)])),code:d(()=>e[23]||(e[23]=[i(l(`<div class="mdui-panel" mdui-panel="{accordion: true}">
  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">First</div>
    <div class="mdui-panel-item-body">
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
    </div>
  </div>
  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">Second</div>
    <div class="mdui-panel-item-body">
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
    </div>
  </div>
  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">Third</div>
    <div class="mdui-panel-item-body">
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
    </div>
  </div>
</div>`))])),_:1}),e[30]||(e[30]=o(`<div class="mdui-typo"><p> 在可扩展面板内的元素上可以添加一些属性来绑定事件，这些属性在使用 JavaScript 调用方式时也可以使用。 </p><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td><code>mdui-panel-item-close</code></td><td> 点击该元素会触发 <code>close.mdui.panel</code> 事件，并关闭该元素所处的面板。 </td></tr></tbody></table></div></div><div class="mdui-typo"><h4 class="article-title"> 通过 JavaScript 调用 <a class="anchor" id="js"></a></h4><p>实例化组件：</p><pre><code class="language-js">// selector 为 .mdui-panel 元素的 CSS 选择器或 DOM 元素
// options 为插件的参数，见下面的参数列表
var inst = new mdui.Panel(selector, options);</code></pre></div><a href="https://cdn.w3cbus.com/mdui/docs-1/assets/panel/demo8" target="_blank" class="mdui-btn mdui-color-theme-accent">运行</a><div class="mdui-typo"><h4 class="article-title">参数 <a class="anchor" id="option"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>参数名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>accordion</code></td><td><code>boolean</code></td><td><code>false</code></td><td> 是否启用手风琴效果。 <ul><li> 为 <code>true</code> 时，最多只能有一个面板项处于打开状态，打开一个面板项时会关闭其他面板项。 </li><li>为 <code>false</code> 时，可同时打开多个面板项。</li></ul></td></tr></tbody></table></div></div><div class="mdui-typo"><h4 class="article-title">方法 <a class="anchor" id="method"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>方法名</th><th>描述</th></tr></thead><tbody><tr><td><code>open(item)</code></td><td> 打开面板项。 <ul><li><code>item</code>：面板项的索引号、或者 DOM 元素、或者 CSS 选择器。 </li></ul></td></tr><tr><td><code>close(item)</code></td><td> 关闭面板项。 <ul><li><code>item</code>：面板项的索引号、或者 DOM 元素、或者 CSS 选择器。 </li></ul></td></tr><tr><td><code>toggle(item)</code></td><td> 切换面板项状态。 <ul><li><code>item</code>：面板项的索引号、或者 DOM 元素、或者 CSS 选择器。 </li></ul></td></tr><tr><td><code>openAll()</code></td><td> 打开所有面板项。该方法仅在 <code>accordion</code> 为 <code>false</code> 时有效。 </td></tr><tr><td><code>closeAll()</code></td><td>关闭所有面板项。</td></tr></tbody></table></div></div><div class="mdui-typo"><h4 class="article-title">事件 <a class="anchor" id="event"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>事件</th><th>描述</th><th>目标</th><th>参数</th></tr></thead><tbody><tr><td><code>open.mdui.panel</code></td><td>面板项开始打开动画时，事件将被触发。</td><td rowspan="4"><code>&lt;div class=&quot;mdui-panel-item&quot;&gt;&lt;/div&gt;</code></td><td rowspan="4"><code>event._detail.inst</code>：实例</td></tr><tr><td><code>opened.mdui.panel</code></td><td>面板项结束打开动画时，事件将被触发。</td></tr><tr><td><code>close.mdui.panel</code></td><td>面板项开始关闭动画时，事件将被触发。</td></tr><tr><td><code>closed.mdui.panel</code></td><td>面板项结束关闭动画时，事件将被触发。</td></tr></tbody></table></div></div><div class="mdui-typo"><h2 class="chapter-title mdui-text-color-theme"> CSS 类名列表 <a class="anchor" id="class"></a></h2><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>类名</th><th>效果</th></tr></thead><tbody><tr><td><code>.mdui-panel</code></td><td>定义一个可扩展面板。</td></tr><tr><td><code>.mdui-panel-gapless</code></td><td>移除打开的面板和其他面板之间的间距。</td></tr><tr><td><code>.mdui-panel-popout</code></td><td>使打开的面板具有弹出效果。</td></tr><tr><td><code>.mdui-panel-item</code></td><td>定义一个可扩展面板的面板项。</td></tr><tr><td><code>.mdui-panel-item-open</code></td><td>使面板项默认打开。</td></tr><tr><td><code>.mdui-panel-item-header</code></td><td>定义一个面板项的头部。</td></tr><tr><td><code>.mdui-panel-item-title</code></td><td>定义面板项头部的标题。</td></tr><tr><td><code>.mdui-panel-item-summary</code></td><td>定义面板项头部的概要。</td></tr><tr><td><code>.mdui-panel-item-arrow</code></td><td>定义面板项的展开收起图标。</td></tr><tr><td><code>.mdui-panel-item-body</code></td><td>定义面板项内容。</td></tr><tr><td><code>.mdui-panel-item-actions</code></td><td>定义面板项的操作栏。</td></tr></tbody></table></div></div>`,7))])],64)}}});export{k as default};
