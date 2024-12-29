const t={docsHtml:`<p>侧边导航栏为平板电脑和桌面电脑提供了访问不同主页面的方式。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/navigation-rail.js&#39;;
import &#39;mdui/components/navigation-rail-item.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { NavigationRail } from &#39;mdui/components/navigation-rail.js&#39;;
import type { NavigationRailItem } from &#39;mdui/components/navigation-rail-item.js&#39;;
</code></pre>
<p>使用示例：（示例中的 <code>style=&quot;position: relative&quot;</code> 是为了演示需要，实际使用时请移除该样式。）</p>
<pre><code class="language-html,example">&lt;mdui-navigation-rail value=&quot;recent&quot; style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot; value=&quot;recent&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
  &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot; value=&quot;images&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
  &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot; value=&quot;library&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
&lt;/mdui-navigation-rail&gt;
</code></pre>
<p><strong>注意事项：</strong></p>
<p>该组件默认使用 <code>position: fixed</code> 定位，并会自动在 <code>body</code> 上添加 <code>padding-left</code> 或 <code>padding-right</code> 样式，以防止页面内容被该组件遮挡。</p>
<p>但在以下两种情况下，会默认使用 <code>position: absolute</code> 定位：</p>
<ol>
<li><code>&lt;mdui-navigation-rail&gt;</code> 组件的 <code>contained</code> 属性为 <code>true</code> 时。此时会在父元素上添加 <code>padding-left</code> 或 <code>padding-right</code> 样式。</li>
<li>当位于 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/components/layout"><code>&lt;mdui-layout&gt;&lt;/mdui-layout&gt;</code></a> 组件中时。此时不会添加 <code>padding-left</code> 或 <code>padding-right</code> 样式。</li>
</ol>
<h2 id="examples">
                  <a href="#examples">样式</a>
                </h2>
<h3 id="example-contained">
                  <a href="#example-contained">位于指定容器内</a>
                </h3>
<p>默认情况下，侧边导航栏会相对于当前窗口，在页面左侧或右侧显示。如果你希望将侧边导航栏放在指定的容器内，可以在 <code>&lt;mdui-navigation-rail&gt;</code> 组件上添加 <code>contained</code> 属性，此时侧边导航栏会相对于其父元素显示（你需要自行在父元素上添加 <code>position: relative</code> 样式）。</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail contained&gt;
    &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 260px;overflow: auto&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;页面内容&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-placement">
                  <a href="#example-placement">位于右侧</a>
                </h3>
<p>在 <code>&lt;mdui-navigation-rail&gt;</code> 组件上设置 <code>placement</code> 属性为 <code>right</code>，可以将侧边导航栏显示在右侧。</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail placement=&quot;right&quot; contained&gt;
    &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 260px;overflow: auto&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;页面内容&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-divider">
                  <a href="#example-divider">显示分割线</a>
                </h3>
<p>在 <code>&lt;mdui-navigation-rail&gt;</code> 组件上添加 <code>divider</code> 属性，可以在侧边导航栏上添加一条分割线，以便和页面内容区分开。</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail divider contained&gt;
    &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 260px;overflow: auto&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;页面内容&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-top-bottom">
                  <a href="#example-top-bottom">在顶部/底部添加元素</a>
                </h3>
<p>可以在 <code>&lt;mdui-navigation-rail&gt;</code> 组件内通过 <code>top</code>、<code>bottom</code> slot 在顶部和底部添加元素。</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail contained&gt;
    &lt;mdui-button-icon icon=&quot;menu&quot; slot=&quot;top&quot;&gt;&lt;/mdui-button-icon&gt;
    &lt;mdui-fab lowered icon=&quot;edit--outlined&quot; slot=&quot;top&quot;&gt;&lt;/mdui-fab&gt;
    &lt;mdui-button-icon icon=&quot;settings&quot; slot=&quot;bottom&quot;&gt;&lt;/mdui-button-icon&gt;

    &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 600px;overflow: auto&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;页面内容&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-alignment">
                  <a href="#example-alignment">导航项垂直对齐方式</a>
                </h3>
<p>通过设置 <code>&lt;mdui-navigation-rail&gt;</code> 组件的 <code>alignment</code> 属性，可以修改导航项的垂直对齐方式。</p>
<pre><code class="language-html,example,expandable">&lt;div class=&quot;example-alignment&quot; style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail alignment=&quot;start&quot; contained&gt;
    &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 360px;overflow: auto&quot;&gt;
    &lt;mdui-segmented-button-group value=&quot;start&quot; selects=&quot;single&quot;&gt;
      &lt;mdui-segmented-button value=&quot;start&quot;&gt;start&lt;/mdui-segmented-button&gt;
      &lt;mdui-segmented-button value=&quot;center&quot;&gt;center&lt;/mdui-segmented-button&gt;
      &lt;mdui-segmented-button value=&quot;end&quot;&gt;end&lt;/mdui-segmented-button&gt;
    &lt;/mdui-segmented-button-group&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  const example = document.querySelector(&quot;.example-alignment&quot;);
  const navigationRail = example.querySelector(&quot;mdui-navigation-rail&quot;);
  const segmentedButtonGroup = example.querySelector(&quot;mdui-segmented-button-group&quot;);

  segmentedButtonGroup.addEventListener(&quot;change&quot;, (event) =&gt; {
    navigationRail.alignment = event.target.value;
  });
&lt;/script&gt;
</code></pre>
<h3 id="example-icon">
                  <a href="#example-icon">图标</a>
                </h3>
<p>在 <code>&lt;mdui-navigation-rail-item&gt;</code> 组件上，可以使用 <code>icon</code> 属性设置未激活状态的导航项图标，使用 <code>active-icon</code> 属性设置激活状态的导航项图标。也可以用 <code>icon</code> 和 <code>active-icon</code> slot 设置未激活和激活状态的图标元素。</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail contained&gt;
    &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot; active-icon=&quot;image--filled&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item&gt;
      Library
      &lt;mdui-icon slot=&quot;icon&quot; name=&quot;library_music--outlined&quot;&gt;&lt;/mdui-icon&gt;
      &lt;mdui-icon slot=&quot;active-icon&quot; name=&quot;library_music--filled&quot;&gt;&lt;/mdui-icon&gt;
    &lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 260px;overflow: auto&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;页面内容&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-no-label">
                  <a href="#example-no-label">仅使用图标</a>
                </h3>
<p><code>&lt;mdui-navigation-rail-item&gt;</code> 组件可以仅使用图标，不添加文本。</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail contained&gt;
    &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot;&gt;&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot;&gt;&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot;&gt;&lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 260px;overflow: auto&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;页面内容&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-link">
                  <a href="#example-link">链接</a>
                </h3>
<p>在 <code>&lt;mdui-navigation-rail-item&gt;</code> 组件上设置 <code>href</code> 属性，可以使导航项变为链接。此时，您还可以使用这些和链接相关的属性：<code>download</code>、<code>target</code>、<code>rel</code>。</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail divider contained&gt;
    &lt;mdui-navigation-rail-item
      href=&quot;https://www.mdui.org&quot;
      target=&quot;_blank&quot;
      icon=&quot;watch_later--outlined&quot;
    &gt;Recent&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 260px;overflow: auto&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;页面内容&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
<h3 id="example-badge">
                  <a href="#example-badge">徽标</a>
                </h3>
<p>在 <code>&lt;mdui-navigation-rail-item&gt;</code> 组件中，可以通过 <code>badge</code> slot 添加徽标。</p>
<pre><code class="language-html,example,expandable">&lt;div style=&quot;position: relative&quot;&gt;
  &lt;mdui-navigation-rail contained&gt;
    &lt;mdui-navigation-rail-item icon=&quot;watch_later--outlined&quot;&gt;
      Recent
      &lt;mdui-badge slot=&quot;badge&quot;&gt;99+&lt;/mdui-badge&gt;
    &lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;image--outlined&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
    &lt;mdui-navigation-rail-item icon=&quot;library_music--outlined&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
  &lt;/mdui-navigation-rail&gt;

  &lt;div style=&quot;height: 260px;overflow: auto&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;页面内容&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>
`,elements:[{name:"NavigationRailItem",tagName:"mdui-navigation-rail-item",summary:`<p>侧边导航项组件。需配合 <code>&lt;mdui-navigation-rail&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-navigation-rail&gt;
..&lt;mdui-navigation-rail-item icon=&quot;watch_later&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
..&lt;mdui-navigation-rail-item icon=&quot;image&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
..&lt;mdui-navigation-rail-item icon=&quot;library_music&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
&lt;/mdui-navigation-rail&gt;
</code></pre>
`,attributes:[{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>未激活状态下的 Material Icons 图标名。也可以通过 <code>slot=&quot;icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"active-icon",propertyName:"activeIcon",reflect:!0,description:`<p>激活状态下的 Material Icons 图标名。也可以通过 <code>slot=&quot;active-icon&quot;</code> 设置</p>
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
`}],slots:[{name:"",description:`<p>文本内容</p>
`},{name:"icon",description:`<p>图标</p>
`},{name:"active-icon",description:`<p>激活状态的图标</p>
`},{name:"badge",description:`<p>徽标</p>
`}],cssParts:[{name:"container",description:`<p>导航项容器</p>
`},{name:"indicator",description:`<p>指示器</p>
`},{name:"badge",description:`<p>徽标</p>
`},{name:"icon",description:`<p>图标</p>
`},{name:"active-icon",description:`<p>激活状态的图标</p>
`},{name:"label",description:`<p>文本内容</p>
`}],cssProperties:[{name:"--shape-corner-indicator",description:`<p>指示器的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`}]},{name:"NavigationRail",tagName:"mdui-navigation-rail",summary:`<p>侧边导航栏组件。需配合 <code>&lt;mdui-navigation-rail-item&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-navigation-rail&gt;
..&lt;mdui-navigation-rail-item icon=&quot;watch_later&quot;&gt;Recent&lt;/mdui-navigation-rail-item&gt;
..&lt;mdui-navigation-rail-item icon=&quot;image&quot;&gt;Images&lt;/mdui-navigation-rail-item&gt;
..&lt;mdui-navigation-rail-item icon=&quot;library_music&quot;&gt;Library&lt;/mdui-navigation-rail-item&gt;
&lt;/mdui-navigation-rail&gt;
</code></pre>
`,attributes:[{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>当前选中的 <code>&lt;mdui-navigation-rail-item&gt;</code> 的值</p>
`,type:"string",enum:[]},{attributeName:"placement",propertyName:"placement",reflect:!0,description:`<p>导航栏的位置。可选值包括：</p>
<ul>
<li><code>left</code>：左侧</li>
<li><code>right</code>：右侧</li>
</ul>
`,type:"'left' | 'right'",enum:["'left'","'right'"],default:"'left'"},{attributeName:"alignment",propertyName:"alignment",reflect:!0,description:`<p><code>&lt;mdui-navigation-rail-item&gt;</code> 元素的对齐方式。可选值包括：</p>
<ul>
<li><code>start</code>：顶部对齐</li>
<li><code>center</code>：居中对齐</li>
<li><code>end</code>：底部对齐</li>
</ul>
`,type:"'start' | 'center' | 'end'",enum:["'start'","'center'","'end'"],default:"'start'"},{attributeName:"contained",propertyName:"contained",reflect:!0,description:`<p>默认情况下，导航栏相对于 <code>body</code> 元素显示。当该参数设置为 <code>true</code> 时，导航栏将相对于其父元素显示。</p>
<p><strong>Note</strong>：设置该属性时，必须在父元素上手动设置样式 <code>position: relative;</code>。</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"divider",propertyName:"divider",reflect:!0,description:`<p>是否在导航栏和页面内容之间添加分割线</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"order",propertyName:"order",reflect:!0,description:`<p>该组件在 <a href="https://cdn.w3cbus.com/docs/2/components/layout"><code>&lt;mdui-layout&gt;</code></a> 中的布局顺序，按从小到大排序。默认为 <code>0</code></p>
`,type:"number",enum:[]}],methods:[],events:[{name:"change",description:`<p>值变化时触发</p>
`}],slots:[{name:"",description:`<p><code>&lt;mdui-navigation-rail-item&gt;</code> 组件</p>
`},{name:"top",description:`<p>顶部的元素</p>
`},{name:"bottom",description:`<p>底部的元素</p>
`}],cssParts:[{name:"top",description:`<p>顶部元素的容器</p>
`},{name:"bottom",description:`<p>底部元素的容器</p>
`},{name:"items",description:`<p><code>&lt;mdui-navigation-rail-item&gt;</code> 组件的容器</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>组件的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`},{name:"--z-index",description:`<p>组件的 CSS <code>z-index</code> 值</p>
`}]}]};export{t as default};
