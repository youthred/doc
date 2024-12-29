const t={docsHtml:`<p>导航栏用于在移动端页面中方便地在几个主要页面之间进行切换。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/navigation-bar.js&#39;;
import &#39;mdui/components/navigation-bar-item.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { NavigationBar } from &#39;mdui/components/navigation-bar.js&#39;;
import type { NavigationBarItem } from &#39;mdui/components/navigation-bar-item.js&#39;;
</code></pre>
<p>使用示例：（示例中的 <code>style=&quot;position: relative&quot;</code> 仅用于演示，实际使用时请移除该样式。）</p>
<pre><code class="language-html,example">&lt;mdui-navigation-bar value=&quot;item-1&quot; style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-bar-item icon=&quot;place&quot; value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;commute&quot; value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;people&quot; value=&quot;item-3&quot;&gt;Item 3&lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;
</code></pre>
<p><strong>注意事项：</strong></p>
<p>该组件默认使用 <code>position: fixed</code> 定位，并会自动在 <code>body</code> 上添加 <code>padding-bottom</code> 样式，以防止页面内容被组件遮挡。但在以下两种情况下，会默认使用 <code>position: absolute</code> 定位：</p>
<ol>
<li>当指定了 <code>scroll-target</code> 属性时。此时会在 <code>scroll-target</code> 的元素上添加 <code>padding-bottom</code> 样式。</li>
<li>当组件位于 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/layout"><code>&lt;mdui-layout&gt;&lt;/mdui-layout&gt;</code></a> 中时。此时不会添加 <code>padding-bottom</code> 样式。</li>
</ol>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-label-visibility">
                  <a href="#example-label-visibility">文本标签显示状态</a>
                </h3>
<p>导航栏中的文本标签默认在导航项小于等于 3 个时始终显示；当导航项大于 3 个时，仅显示选中状态的文本。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-navigation-bar value=&quot;item-1&quot; style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-bar-item icon=&quot;place&quot; value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;commute&quot; value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;people&quot; value=&quot;item-3&quot;&gt;Item 3&lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;

&lt;br/&gt;

&lt;mdui-navigation-bar value=&quot;item-1&quot; style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-bar-item icon=&quot;place&quot; value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;commute&quot; value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;directions_railway&quot; value=&quot;item-3&quot;&gt;Item 3&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;people&quot; value=&quot;item-4&quot;&gt;Item 4&lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;
</code></pre>
<p>你可以通过在 <code>&lt;mdui-navigation-bar&gt;</code> 组件上设置 <code>label-visibility</code> 属性来调整文本标签的显示状态。可选值有：</p>
<ul>
<li><code>selected</code>：仅显示选中状态的文本</li>
<li><code>labeled</code>：始终显示文本</li>
<li><code>unlabeled</code>：始终不显示文本</li>
</ul>
<pre><code class="language-html,example,expandable">&lt;mdui-navigation-bar value=&quot;item-1&quot; label-visibility=&quot;selected&quot; style=&quot;position: relative&quot; class=&quot;example-label&quot;&gt;
  &lt;mdui-navigation-bar-item icon=&quot;place&quot; value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;commute&quot; value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;people&quot; value=&quot;item-3&quot;&gt;Item 3&lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;

&lt;mdui-segmented-button-group value=&quot;selected&quot; selects=&quot;single&quot; style=&quot;margin-top: 16px&quot;&gt;
  &lt;mdui-segmented-button value=&quot;selected&quot;&gt;selected&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button value=&quot;labeled&quot;&gt;labeled&lt;/mdui-segmented-button&gt;
  &lt;mdui-segmented-button value=&quot;unlabeled&quot;&gt;unlabeled&lt;/mdui-segmented-button&gt;
&lt;/mdui-segmented-button-group&gt;

&lt;script&gt;
  const navigationBar = document.querySelector(&quot;.example-label&quot;);
  const segmentedButtonGroup = navigationBar.nextElementSibling;

  segmentedButtonGroup.addEventListener(&quot;change&quot;, (event) =&gt; {
    navigationBar.labelVisibility = event.target.value;
  });
&lt;/script&gt;
</code></pre>
<h3 id="example-scroll-target">
                  <a href="#example-scroll-target">位于指定容器内</a>
                </h3>
<p>默认情况下，导航栏会相对于当前窗口，在页面底部显示。</p>
<p>如果你希望将导航栏放在指定的容器内，可以在 <code>&lt;mdui-navigation-bar&gt;</code> 组件上指定 <code>scroll-target</code> 属性。该属性的值应为可滚动内容的容器的 CSS 选择器或 DOM 元素。此时，导航栏会相对于父元素显示（你需要自行在父元素上添加 <code>position: relative; overflow: hidden</code> 样式）。</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-navigation-bar scroll-target=&quot;.example-scroll-target&quot; value=&quot;item-1&quot;&gt;
    &lt;mdui-navigation-bar-item icon=&quot;place&quot; value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
    &lt;mdui-navigation-bar-item icon=&quot;commute&quot; value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
    &lt;mdui-navigation-bar-item icon=&quot;people&quot; value=&quot;item-3&quot;&gt;Item 3&lt;/mdui-navigation-bar-item&gt;
  &lt;/mdui-navigation-bar&gt;

  &lt;div class=&quot;example-scroll-target&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;页面内容&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-scroll-behavior">
                  <a href="#example-scroll-behavior">滚动时隐藏</a>
                </h3>
<p>通过在 <code>&lt;mdui-navigation-bar&gt;</code> 组件上设置 <code>scroll-behavior</code> 属性为 <code>hide</code>，可以实现页面向下滚动时隐藏导航栏，向上滚动时显示导航栏的效果。</p>
<p>使用 <code>scroll-threshold</code> 属性，可以设置滚动多少像素后开始隐藏导航栏。</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative;overflow: hidden&quot;&gt;
  &lt;mdui-navigation-bar
    scroll-behavior=&quot;hide&quot;
    scroll-threshold=&quot;30&quot;
    scroll-target=&quot;.example-scroll-behavior&quot;
    value=&quot;item-1&quot;
  &gt;
    &lt;mdui-navigation-bar-item icon=&quot;place&quot; value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
    &lt;mdui-navigation-bar-item icon=&quot;commute&quot; value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
    &lt;mdui-navigation-bar-item icon=&quot;people&quot; value=&quot;item-3&quot;&gt;Item 3&lt;/mdui-navigation-bar-item&gt;
  &lt;/mdui-navigation-bar&gt;

  &lt;div class=&quot;example-scroll-behavior&quot; style=&quot;height: 160px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;页面内容&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-icon">
                  <a href="#example-icon">图标</a>
                </h3>
<p>在 <code>&lt;mdui-navigation-bar-item&gt;</code> 组件上，<code>icon</code> 属性用于设置未激活状态的导航项图标，<code>active-icon</code> 属性用于设置激活状态的导航项图标。也可以通过 <code>icon</code> 和 <code>active-icon</code> slot 来设置未激活和激活状态的图标元素。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-navigation-bar value=&quot;item-1&quot; style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-bar-item
    icon=&quot;place--outlined&quot;
    active-icon=&quot;place&quot;
    value=&quot;item-1&quot;
  &gt;Item 1&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item value=&quot;item-2&quot;&gt;
    Item 2
    &lt;mdui-icon slot=&quot;icon&quot; name=&quot;people--outlined&quot;&gt;&lt;/mdui-icon&gt;
    &lt;mdui-icon slot=&quot;active-icon&quot; name=&quot;people&quot;&gt;&lt;/mdui-icon&gt;
  &lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;
</code></pre>
<h3 id="example-link">
                  <a href="#example-link">链接</a>
                </h3>
<p>在 <code>&lt;mdui-navigation-bar-item&gt;</code> 组件上设置 <code>href</code> 属性，可以将导航项变为链接。此时，还可以使用与链接相关的属性：<code>download</code>、<code>target</code>、<code>rel</code>。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-navigation-bar value=&quot;item-1&quot; style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-bar-item icon=&quot;place&quot; href=&quot;https://www.mdui.org&quot; target=&quot;_blank&quot; value=&quot;item-1&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;commute&quot; value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;
</code></pre>
<h3 id="example-badge">
                  <a href="#example-badge">徽标</a>
                </h3>
<p>在 <code>&lt;mdui-navigation-bar-item&gt;</code> 组件中，可以通过 <code>badge</code> slot 添加徽章。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-navigation-bar value=&quot;item-1&quot; style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-bar-item icon=&quot;place&quot; value=&quot;item-1&quot;&gt;
    Item 1
    &lt;mdui-badge slot=&quot;badge&quot;&gt;99+&lt;/mdui-badge&gt;
  &lt;/mdui-navigation-bar-item&gt;
  &lt;mdui-navigation-bar-item icon=&quot;commute&quot; value=&quot;item-2&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;
</code></pre>
`,elements:[{name:"NavigationBarItem",tagName:"mdui-navigation-bar-item",summary:`<p>底部导航栏项组件。需配合 <code>&lt;mdui-navigation-bar&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-navigation-bar&gt;
..&lt;mdui-navigation-bar-item icon=&quot;place&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
..&lt;mdui-navigation-bar-item icon=&quot;commute&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
..&lt;mdui-navigation-bar-item icon=&quot;people&quot;&gt;Item 3&lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;
</code></pre>
`,attributes:[{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>未激活状态的 Material Icons 图标名。也可以通过 <code>slot=&quot;icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"active-icon",propertyName:"activeIcon",reflect:!0,description:`<p>激活状态的 Material Icons 图标名。也可以通过 <code>slot=&quot;active-icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>导航项的值</p>
`,type:"string",enum:[]},{attributeName:"href",propertyName:"href",reflect:!0,description:`<p>链接的目标 URL。</p>
<p>如果设置了此属性，组件内部将渲染为 <code>&lt;a&gt;</code> 元素，并可以使用链接相关的属性。</p>
`,type:"string",enum:[]},{attributeName:"download",propertyName:"download",reflect:!0,description:`<p>下载链接的目标。</p>
<p><strong>Note</strong>：仅在设置了 <code>href</code> 属性时，此属性才有效。</p>
`,type:"string",enum:[]},{attributeName:"target",propertyName:"target",reflect:!0,description:`<p>链接的打开方式。可选值包括：</p>
<ul>
<li><code>_blank</code>：在新窗口中打开链接</li>
<li><code>_parent</code>：在父框架中打开链接</li>
<li><code>_self</code>：默认。在当前框架中打开链接</li>
<li><code>_top</code>：在整个窗口中打开链接</li>
</ul>
<p><strong>Note</strong>：仅在设置了 <code>href</code> 属性时，此属性才有效。</p>
`,type:"'_blank' | '_parent' | '_self' | '_top'",enum:["'_blank'","'_parent'","'_self'","'_top'"]},{attributeName:"rel",propertyName:"rel",reflect:!0,description:`<p>当前文档与被链接文档之间的关系。可选值包括：</p>
<ul>
<li><code>alternate</code>：当前文档的替代版本</li>
<li><code>author</code>：当前文档或文章的作者</li>
<li><code>bookmark</code>：永久链接到最近的祖先章节</li>
<li><code>external</code>：引用的文档与当前文档不在同一站点</li>
<li><code>help</code>：链接到相关的帮助文档</li>
<li><code>license</code>：当前文档的主要内容由被引用文件的版权许可覆盖</li>
<li><code>me</code>：当前文档代表链接内容的所有者</li>
<li><code>next</code>：当前文档是系列中的一部分，被引用的文档是系列的下一个文档</li>
<li><code>nofollow</code>：当前文档的作者或发布者不认可被引用的文件</li>
<li><code>noreferrer</code>：不包含 <code>Referer</code> 头。类似于 <code>noopener</code> 的效果</li>
<li><code>opener</code>：如果超链接会创建一个顶级浏览上下文（即 <code>target</code> 属性值为 <code>_blank</code>），则创建一个辅助浏览上下文</li>
<li><code>prev</code>：当前文档是系列的一部分，被引用的文档是系列的上一个文档</li>
<li><code>search</code>：提供一个资源链接，可用于搜索当前文件及其相关页面</li>
<li><code>tag</code>：提供一个适用于当前文档的标签（由给定地址识别）</li>
</ul>
<p><strong>Note</strong>：仅在指定了 <code>href</code> 属性时可用。</p>
`,type:"'alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'me' | 'next' | 'nofollow' | 'noreferrer' | 'opener' | 'prev' | 'search' | 'tag'",enum:["'alternate'","'author'","'bookmark'","'external'","'help'","'license'","'me'","'next'","'nofollow'","'noreferrer'","'opener'","'prev'","'search'","'tag'"]},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>是否在页面加载完成后自动获取焦点</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"tabindex",propertyName:"tabIndex",reflect:!1,description:`<p>元素在使用 Tab 键切换焦点时的顺序</p>
`,type:"number",enum:[]}],methods:[{name:"click",description:`<p>模拟鼠标点击元素</p>
`,parameters:[],return:{type:"void"}},{name:"focus",description:`<p>将焦点设置到当前元素。</p>
<p>可以传入一个对象作为参数，该对象的属性包括：</p>
<ul>
<li><code>preventScroll</code>：默认情况下，元素获取焦点后，页面会滚动以将该元素滚动到视图中。如果不希望页面滚动，可以将此属性设置为 <code>true</code>。</li>
</ul>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>移除当前元素的焦点</p>
`,parameters:[],return:{type:"void"}}],events:[{name:"focus",description:`<p>获得焦点时触发</p>
`},{name:"blur",description:`<p>失去焦点时触发</p>
`}],slots:[{name:"",description:`<p>导航项文本</p>
`},{name:"icon",description:`<p>图标</p>
`},{name:"active-icon",description:`<p>激活状态的图标元素</p>
`},{name:"badge",description:`<p>徽标</p>
`}],cssParts:[{name:"container",description:`<p>导航项容器</p>
`},{name:"indicator",description:`<p>指示器</p>
`},{name:"badge",description:`<p>徽标</p>
`},{name:"icon",description:`<p>图标</p>
`},{name:"active-icon",description:`<p>激活状态的图标</p>
`},{name:"label",description:`<p>导航项文本</p>
`}],cssProperties:[{name:"--shape-corner-indicator",description:`<p>指示器的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`}]},{name:"NavigationBar",tagName:"mdui-navigation-bar",summary:`<p>底部导航栏组件。需配合 <code>&lt;mdui-navigation-bar-item&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-navigation-bar&gt;
..&lt;mdui-navigation-bar-item icon=&quot;place&quot;&gt;Item 1&lt;/mdui-navigation-bar-item&gt;
..&lt;mdui-navigation-bar-item icon=&quot;commute&quot;&gt;Item 2&lt;/mdui-navigation-bar-item&gt;
..&lt;mdui-navigation-bar-item icon=&quot;people&quot;&gt;Item 3&lt;/mdui-navigation-bar-item&gt;
&lt;/mdui-navigation-bar&gt;
</code></pre>
`,attributes:[{attributeName:"hide",propertyName:"hide",reflect:!0,description:`<p>是否隐藏</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"label-visibility",propertyName:"labelVisibility",reflect:!0,description:`<p>文本的可视状态。可选值包括：</p>
<ul>
<li><code>auto</code>：当选项小于等于3个时，始终显示文本；当选项大于3个时，仅显示选中状态的文本</li>
<li><code>selected</code>：仅在选中状态显示文本</li>
<li><code>labeled</code>：始终显示文本</li>
<li><code>unlabeled</code>：始终不显示文本</li>
</ul>
`,type:"'auto' | 'selected' | 'labeled' | 'unlabeled'",enum:["'auto'","'selected'","'labeled'","'unlabeled'"],default:"'auto'"},{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>当前选中的 <code>&lt;mdui-navigation-bar-item&gt;</code> 的值</p>
`,type:"string",enum:[]},{attributeName:"scroll-behavior",propertyName:"scrollBehavior",reflect:!0,description:`<p>滚动行为。可选值包括：</p>
<ul>
<li><code>hide</code>：滚动时隐藏</li>
</ul>
`,type:"'hide' | 'shrink' | 'elevate'",enum:["'hide'","'shrink'","'elevate'"]},{attributeName:"scroll-target",propertyName:"scrollTarget",reflect:!1,description:`<p>需要监听其滚动事件的元素。值可以是 CSS 选择器、DOM 元素、或 <a href="https://cdn.w3cbus.com/docs/2/functions/jq">JQ 对象</a>。默认监听 <code>window</code> 的滚动事件</p>
`,type:"string | HTMLElement | JQ<HTMLElement>",enum:["string","HTMLElement","JQ<HTMLElement>"]},{attributeName:"scroll-threshold",propertyName:"scrollThreshold",reflect:!0,description:`<p>在滚动多少距离之后触发滚动行为，单位为 <code>px</code></p>
`,type:"number",enum:[]},{attributeName:"order",propertyName:"order",reflect:!0,description:`<p>该组件在 <a href="https://cdn.w3cbus.com/docs/2/components/layout"><code>&lt;mdui-layout&gt;</code></a> 中的布局顺序，按从小到大排序。默认为 <code>0</code></p>
`,type:"number",enum:[]}],methods:[],events:[{name:"change",description:`<p>值变化时触发</p>
`},{name:"show",description:`<p>开始显示时，事件被触发。可以通过调用 <code>event.preventDefault()</code> 阻止显示</p>
`},{name:"shown",description:`<p>显示动画完成时，事件被触发</p>
`},{name:"hide",description:`<p>开始隐藏时，事件被触发。可以通过调用 <code>event.preventDefault()</code> 阻止隐藏</p>
`},{name:"hidden",description:`<p>隐藏动画完成时，事件被触发</p>
`}],slots:[{name:"",description:`<p><code>&lt;mdui-navigation-bar-item&gt;</code> 组件</p>
`}],cssParts:[],cssProperties:[{name:"--shape-corner",description:`<p>组件的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`},{name:"--z-index",description:`<p>组件的 CSS <code>z-index</code> 值</p>
`}]}]};export{t as default};
