const t={docsHtml:`<p>顶部应用栏用于在页面顶部展示关键信息和相关操作，为用户提供清晰的导航和方便的功能访问。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/top-app-bar.js&#39;;
import &#39;mdui/components/top-app-bar-title.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { TopAppBar } from &#39;mdui/components/top-app-bar.js&#39;;
import type { TopAppBarTitle } from &#39;mdui/components/top-app-bar-title.js&#39;;
</code></pre>
<p>使用示例：（示例中的 <code>style=&quot;position: relative&quot;</code> 仅用于演示，实际使用时请移除该样式。）</p>
<pre><code class="language-html,example">&lt;mdui-top-app-bar style=&quot;position: relative;&quot;&gt;
  &lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
  &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
  &lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
&lt;/mdui-top-app-bar&gt;
</code></pre>
<p><strong>注意事项：</strong></p>
<p>该组件默认使用 <code>position: fixed</code> 定位，并会自动在 <code>body</code> 上添加 <code>padding-top</code> 样式，以防止页面内容被该组件遮挡。</p>
<p>但在以下两种情况下，会默认使用 <code>position: absolute</code> 定位：</p>
<ol>
<li>当指定了 <code>scroll-target</code> 属性时。此时会在 <code>scroll-target</code> 的元素上添加 <code>padding-top</code> 样式。</li>
<li>当位于 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/layout"><code>&lt;mdui-layout&gt;&lt;/mdui-layout&gt;</code></a> 组件中时。此时不会添加 <code>padding-top</code> 样式。</li>
</ol>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-scroll-target">
                  <a href="#example-scroll-target">位于指定容器内</a>
                </h3>
<p>默认情况下，顶部应用栏会相对于当前窗口，在页面顶部显示。</p>
<p>如果你希望将顶部应用栏放在指定的容器内，可以在 <code>&lt;mdui-top-app-bar&gt;</code> 组件上指定 <code>scroll-target</code> 属性，其值为可滚动内容的容器的 CSS 选择器或 DOM 元素。此时，顶部应用栏会相对于父元素显示（你需要自行在父元素上添加样式 <code>position: relative; overflow: hidden</code>）。</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-top-app-bar scroll-target=&quot;.example-scroll-target&quot;&gt;
    &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;div class=&quot;example-scroll-target&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-variant">
                  <a href="#example-variant">形状</a>
                </h3>
<p>可以通过在 <code>&lt;mdui-top-app-bar&gt;</code> 组件上使用 <code>variant</code> 属性来设置顶部应用栏的形状。</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-top-app-bar variant=&quot;small&quot; scroll-target=&quot;.example-variant&quot; class=&quot;example-variant-bar&quot;&gt;
    &lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
    &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
    &lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;div class=&quot;example-variant&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;
      &lt;mdui-segmented-button-group selects=&quot;single&quot; value=&quot;small&quot;&gt;
        &lt;mdui-segmented-button value=&quot;center-aligned&quot;&gt;center-aligned&lt;/mdui-segmented-button&gt;
        &lt;mdui-segmented-button value=&quot;small&quot;&gt;small&lt;/mdui-segmented-button&gt;
        &lt;mdui-segmented-button value=&quot;medium&quot;&gt;medium&lt;/mdui-segmented-button&gt;
        &lt;mdui-segmented-button value=&quot;large&quot;&gt;large&lt;/mdui-segmented-button&gt;
      &lt;/mdui-segmented-button-group&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  const topAppBar = document.querySelector(&quot;.example-variant-bar&quot;);
  const segmentedButtonGroup = document.querySelector(&quot;.example-variant&quot;);

  segmentedButtonGroup.addEventListener(&quot;change&quot;, (event) =&gt; {
    topAppBar.variant = event.target.value;
  });
&lt;/script&gt;
</code></pre>
<h3 id="example-scroll-behavior">
                  <a href="#example-scroll-behavior">页面滚动时的行为</a>
                </h3>
<p>通过在 <code>&lt;mdui-top-app-bar&gt;</code> 组件上设置 <code>scroll-behavior</code> 属性，可以定义页面滚动时顶部应用栏的行为。可以同时设置多个行为，用空格分隔即可。</p>
<p>滚动行为包括：</p>
<ul>
<li><code>hide</code>：页面向下滚动时隐藏顶部应用栏，向上滚动时显示顶部应用栏。</li>
<li><code>shrink</code>：仅在 <code>variant</code> 属性为 <code>medium</code> 或 <code>large</code> 时有效。页面向下滚动时展开顶部应用栏，向上滚动时收缩顶部应用栏。</li>
<li><code>elevate</code>：页面向下滚动时，在顶部应用栏上添加阴影；页面滚回到顶部时，取消阴影。</li>
</ul>
<p>使用 <code>scroll-threshold</code> 属性，可以设置滚动多少像素后开始触发顶部应用栏的滚动行为。（注意，为了响应及时，在使用了 <code>elevate</code> 滚动行为时，请不要再设置 <code>scroll-threshold</code> 属性。）</p>
<p><strong>示例：滚动时隐藏</strong></p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-top-app-bar
    scroll-behavior=&quot;hide&quot;
    scroll-threshold=&quot;30&quot;
    scroll-target=&quot;.example-scroll-behavior-hide&quot;
  &gt;
    &lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
    &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
    &lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;div class=&quot;example-scroll-behavior-hide&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p><strong>示例：滚动时添加阴影</strong></p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-top-app-bar
    scroll-behavior=&quot;elevate&quot;
    scroll-target=&quot;.example-scroll-behavior-elevate&quot;
  &gt;
    &lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
    &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
    &lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;div class=&quot;example-scroll-behavior-elevate&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p><strong>示例：滚动时收缩</strong></p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-top-app-bar
    variant=&quot;medium&quot;
    scroll-behavior=&quot;shrink&quot;
    scroll-threshold=&quot;30&quot;
    scroll-target=&quot;.example-scroll-behavior-shrink&quot;
  &gt;
    &lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
    &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
    &lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;div class=&quot;example-scroll-behavior-shrink&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p><strong>示例：滚动时收缩及添加阴影</strong></p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-top-app-bar
    variant=&quot;medium&quot;
    scroll-behavior=&quot;shrink elevate&quot;
    scroll-target=&quot;.example-scroll-behavior-shrink-elevate&quot;
  &gt;
    &lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
    &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
    &lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;div class=&quot;example-scroll-behavior-shrink-elevate&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="label-large">
                  <a href="#label-large">展开状态的文本</a>
                </h3>
<p>对于 <code>variant</code> 属性为 <code>medium</code> 或 <code>large</code>，且 <code>scroll-behavior</code> 属性为 <code>shrink</code> 的顶部应用栏，你可以在 <code>&lt;mdui-top-app-bar-title&gt;</code> 组件中添加 <code>label-large</code> slot，以设置展开状态下的文本。</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-top-app-bar
    variant=&quot;medium&quot;
    scroll-behavior=&quot;shrink elevate&quot;
    scroll-target=&quot;.example-label-large-slot&quot;
  &gt;
    &lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-top-app-bar-title&gt;
      这是收起状态的标题
      &lt;span slot=&quot;label-large&quot;&gt;这是展开状态的标题&lt;/span&gt;
    &lt;/mdui-top-app-bar-title&gt;
    &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
    &lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
  &lt;/mdui-top-app-bar&gt;

  &lt;div class=&quot;example-label-large-slot&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
`,elements:[{name:"TopAppBarTitle",tagName:"mdui-top-app-bar-title",summary:`<p>顶部应用栏标题组件。需配合 <code>&lt;mdui-top-app-bar&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-top-app-bar&gt;
..&lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
..&lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
..&lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
..&lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
&lt;/mdui-top-app-bar&gt;
</code></pre>
`,attributes:[],methods:[],events:[],slots:[{name:"",description:`<p>顶部应用栏的标题文本</p>
`},{name:"label-large",description:`<p>展开状态下的标题文本</p>
`}],cssParts:[{name:"label",description:`<p>标题文本</p>
`},{name:"label-large",description:`<p>展开状态下的标题文本</p>
`}],cssProperties:[]},{name:"TopAppBar",tagName:"mdui-top-app-bar",summary:`<p>顶部应用栏组件</p>
<pre><code class="language-html">&lt;mdui-top-app-bar&gt;
..&lt;mdui-button-icon icon=&quot;menu&quot;&gt;&lt;/mdui-button-icon&gt;
..&lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
..&lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
..&lt;mdui-button-icon icon=&quot;more_vert&quot;&gt;&lt;/mdui-button-icon&gt;
&lt;/mdui-top-app-bar&gt;
</code></pre>
`,attributes:[{attributeName:"variant",propertyName:"variant",reflect:!0,description:`<p>顶部应用栏的形状。默认为 <code>small</code>。可选值包括：</p>
<ul>
<li><code>center-aligned</code>：小型应用栏，标题居中</li>
<li><code>small</code>：小型应用栏</li>
<li><code>medium</code>：中型应用栏</li>
<li><code>large</code>：大型应用栏</li>
</ul>
`,type:"'center-aligned' | 'small' | 'medium' | 'large'",enum:["'center-aligned'","'small'","'medium'","'large'"],default:"'small'"},{attributeName:"hide",propertyName:"hide",reflect:!0,description:`<p>是否隐藏</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"shrink",propertyName:"shrink",reflect:!0,description:`<p>是否缩小为 <code>variant=&quot;small&quot;</code> 的样式，仅在 <code>variant=&quot;medium&quot;</code> 或 <code>variant=&quot;large&quot;</code> 时生效</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"scroll-behavior",propertyName:"scrollBehavior",reflect:!0,description:`<p>滚动行为。可同时使用多个值，用空格分隔。可选值包括：</p>
<ul>
<li><code>hide</code>：滚动时隐藏</li>
<li><code>shrink</code>：在中型、大型应用栏中可使用，滚动时缩小成小型应用栏的样式</li>
<li><code>elevate</code>：滚动时添加阴影</li>
</ul>
`,type:"'hide' | 'shrink' | 'elevate'",enum:["'hide'","'shrink'","'elevate'"]},{attributeName:"scroll-target",propertyName:"scrollTarget",reflect:!1,description:`<p>需要监听其滚动事件的元素。值可以是 CSS 选择器、DOM 元素、或 <a href="https://cdn.w3cbus.com/docs/2/functions/jq">JQ 对象</a>。默认监听 <code>window</code> 的滚动事件</p>
`,type:"string | HTMLElement | JQ<HTMLElement>",enum:["string","HTMLElement","JQ<HTMLElement>"]},{attributeName:"scroll-threshold",propertyName:"scrollThreshold",reflect:!0,description:`<p>在滚动多少距离之后触发滚动行为，单位为 <code>px</code></p>
`,type:"number",enum:[]},{attributeName:"order",propertyName:"order",reflect:!0,description:`<p>该组件在 <a href="https://cdn.w3cbus.com/docs/2/components/layout"><code>&lt;mdui-layout&gt;</code></a> 中的布局顺序，按从小到大排序。默认为 <code>0</code></p>
`,type:"number",enum:[]}],methods:[],events:[{name:"show",description:`<p>开始显示时，事件被触发。可以通过调用 <code>event.preventDefault()</code> 阻止显示</p>
`},{name:"shown",description:`<p>显示动画完成时，事件被触发</p>
`},{name:"hide",description:`<p>开始隐藏时，事件被触发。可以通过调用 <code>event.preventDefault()</code> 阻止隐藏</p>
`},{name:"hidden",description:`<p>隐藏动画完成时，事件被触发</p>
`}],slots:[{name:"",description:`<p>顶部应用栏内部的元素</p>
`}],cssParts:[],cssProperties:[{name:"--shape-corner",description:`<p>组件的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`},{name:"--z-index",description:`<p>组件的 CSS <code>z-index</code> 值</p>
`}]}]};export{t as default};
