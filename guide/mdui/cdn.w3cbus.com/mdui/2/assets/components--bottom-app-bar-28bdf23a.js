const t={docsHtml:`<p>底部应用栏主要用于在移动端页面底部展示导航项和其他重要操作。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/bottom-app-bar.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { BottomAppBar } from &#39;mdui/components/bottom-app-bar.js&#39;;
</code></pre>
<p>使用示例：（注意：示例中的 <code>style=&quot;position: relative&quot;</code> 是为了演示需要，实际使用时请移除该样式。）</p>
<pre><code class="language-html,example">&lt;mdui-bottom-app-bar style=&quot;position: relative;&quot;&gt;
  &lt;mdui-button-icon icon=&quot;check_box--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;mdui-button-icon icon=&quot;edit--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;mdui-button-icon icon=&quot;mic_none--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;mdui-button-icon icon=&quot;image--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
  &lt;mdui-fab icon=&quot;add&quot;&gt;&lt;/mdui-fab&gt;
&lt;/mdui-bottom-app-bar&gt;
</code></pre>
<p><strong>注意事项：</strong></p>
<p>该组件默认使用 <code>position: fixed</code> 定位，并会自动在 <code>body</code> 上添加 <code>padding-bottom</code> 样式，以防止页面内容被该组件遮挡。</p>
<p>但在以下两种情况下，会默认使用 <code>position: absolute</code> 定位：</p>
<ol>
<li>当指定了 <code>scroll-target</code> 属性时。此时会在 <code>scroll-target</code> 的元素上添加 <code>padding-bottom</code> 样式。</li>
<li>当位于 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/layout"><code>&lt;mdui-layout&gt;&lt;/mdui-layout&gt;</code></a> 组件中时。此时不会添加 <code>padding-bottom</code> 样式。</li>
</ol>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-scroll-target">
                  <a href="#example-scroll-target">位于指定容器内</a>
                </h3>
<p>默认情况下，底部应用栏会相对于当前窗口，在页面底部显示。</p>
<p>如果你希望将底部应用栏放在指定的容器内，可以指定 <code>scroll-target</code> 属性，其值为可滚动内容的容器的 CSS 选择器或 DOM 元素。此时，底部应用栏会相对于父元素显示（你需要自行在父元素上添加 <code>position: relative; overflow: hidden</code> 样式）。</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-bottom-app-bar scroll-target=&quot;.example-scroll-target&quot;&gt;Content&lt;/mdui-bottom-app-bar&gt;

  &lt;div class=&quot;example-scroll-target&quot; style=&quot;height: 200px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-scroll-behavior">
                  <a href="#example-scroll-behavior">滚动时隐藏</a>
                </h3>
<p>设置 <code>scroll-behavior</code> 属性为 <code>hide</code>，可以在页面向下滚动时隐藏底部应用栏，向上滚动时显示底部应用栏。</p>
<p>使用 <code>scroll-threshold</code> 属性，可以设置滚动多少像素后开始隐藏底部应用栏。</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-bottom-app-bar
    scroll-behavior=&quot;hide&quot;
    scroll-threshold=&quot;30&quot;
    scroll-target=&quot;.example-scroll-behavior&quot;
  &gt;Content&lt;/mdui-bottom-app-bar&gt;

  &lt;div class=&quot;example-scroll-behavior&quot; style=&quot;height: 200px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-fab-detach">
                  <a href="#example-fab-detach">固定浮动操作按钮</a>
                </h3>
<p>如果底部应用栏中包含了<a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/fab">浮动操作按钮</a>，则可以添加 <code>fab-detach</code> 属性，使得在页面滚动，底部应用栏隐藏时，浮动操作按钮仍然停留在页面右下角。</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-bottom-app-bar
    fab-detach
    scroll-behavior=&quot;hide&quot;
    scroll-threshold=&quot;30&quot;
    scroll-target=&quot;.example-fab-detach&quot;
  &gt;
    &lt;mdui-button-icon icon=&quot;check_box--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-button-icon icon=&quot;edit--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-button-icon icon=&quot;mic_none--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-button-icon icon=&quot;image--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
    &lt;mdui-fab icon=&quot;add&quot;&gt;&lt;/mdui-fab&gt;
  &lt;/mdui-bottom-app-bar&gt;

  &lt;div class=&quot;example-fab-detach&quot; style=&quot;height: 200px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
`,elements:[{name:"BottomAppBar",tagName:"mdui-bottom-app-bar",summary:`<p>底部应用栏组件</p>
<pre><code class="language-html">&lt;mdui-bottom-app-bar&gt;
..&lt;mdui-button-icon icon=&quot;check_box--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
..&lt;mdui-button-icon icon=&quot;edit--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
..&lt;mdui-button-icon icon=&quot;mic_none--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
..&lt;mdui-button-icon icon=&quot;image--outlined&quot;&gt;&lt;/mdui-button-icon&gt;
..&lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
..&lt;mdui-fab icon=&quot;add&quot;&gt;&lt;/mdui-fab&gt;
&lt;/mdui-bottom-app-bar&gt;
</code></pre>
`,attributes:[{attributeName:"hide",propertyName:"hide",reflect:!0,description:`<p>是否隐藏</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"fab-detach",propertyName:"fabDetach",reflect:!0,description:`<p>是否让底部应用栏中的 <a href="https://cdn.w3cbus.com/docs/2/components/fab"><code>&lt;mdui-fab&gt;</code></a> 组件脱离应用栏。如果为 <code>true</code>，则当应用栏隐藏后，<a href="https://cdn.w3cbus.com/docs/2/components/fab"><code>&lt;mdui-fab&gt;</code></a> 仍会停留在页面上</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"scroll-behavior",propertyName:"scrollBehavior",reflect:!0,description:`<p>滚动行为。可选值为：</p>
<ul>
<li><code>hide</code>：滚动时隐藏</li>
</ul>
`,type:"'hide' | 'shrink' | 'elevate'",enum:["'hide'","'shrink'","'elevate'"]},{attributeName:"scroll-target",propertyName:"scrollTarget",reflect:!1,description:`<p>需要监听其滚动事件的元素。值可以是 CSS 选择器、DOM 元素、或 <a href="https://cdn.w3cbus.com/docs/2/functions/jq">JQ 对象</a>。默认监听 <code>window</code> 的滚动事件</p>
`,type:"string | HTMLElement | JQ<HTMLElement>",enum:["string","HTMLElement","JQ<HTMLElement>"]},{attributeName:"scroll-threshold",propertyName:"scrollThreshold",reflect:!0,description:`<p>在滚动多少距离之后触发滚动行为，单位为 <code>px</code></p>
`,type:"number",enum:[]},{attributeName:"order",propertyName:"order",reflect:!0,description:`<p>该组件在 <a href="https://cdn.w3cbus.com/docs/2/components/layout"><code>&lt;mdui-layout&gt;</code></a> 中的布局顺序，按从小到大排序。默认为 <code>0</code></p>
`,type:"number",enum:[]}],methods:[],events:[{name:"show",description:`<p>开始显示时，事件被触发。可以通过调用 <code>event.preventDefault()</code> 阻止显示</p>
`},{name:"shown",description:`<p>显示动画完成时，事件被触发</p>
`},{name:"hide",description:`<p>开始隐藏时，事件被触发。可以通过调用 <code>event.preventDefault()</code> 阻止隐藏</p>
`},{name:"hidden",description:`<p>隐藏动画完成时，事件被触发</p>
`}],slots:[{name:"",description:`<p>底部应用栏内部的元素</p>
`}],cssParts:[],cssProperties:[{name:"--shape-corner",description:`<p>组件的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`},{name:"--z-index",description:`<p>组件的 CSS <code>z-index</code> 值</p>
`}]}]};export{t as default};
