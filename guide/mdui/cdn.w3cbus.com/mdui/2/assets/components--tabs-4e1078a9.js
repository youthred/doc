const t={docsHtml:`<p>选项卡组件用于将内容或数据集分组并展示，方便用户在不同类别之间快速切换。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/tabs.js&#39;;
import &#39;mdui/components/tab.js&#39;;
import &#39;mdui/components/tab-panel.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { Tabs } from &#39;mdui/components/tabs.js&#39;;
import type { Tab } from &#39;mdui/components/tab.js&#39;;
import type { TabPanel } from &#39;mdui/components/tab-panel.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-tabs value=&quot;tab-1&quot;&gt;
  &lt;mdui-tab value=&quot;tab-1&quot;&gt;Tab 1&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-variant">
                  <a href="#example-variant">选项卡样式</a>
                </h3>
<p>通过在 <code>&lt;mdui-tabs&gt;</code> 组件上使用 <code>variant</code> 属性，可以设置选项卡的样式。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tabs value=&quot;tab-1&quot; variant=&quot;primary&quot;&gt;
  &lt;mdui-tab value=&quot;tab-1&quot;&gt;Tab 1&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;

&lt;mdui-tabs value=&quot;tab-1&quot; variant=&quot;secondary&quot;&gt;
  &lt;mdui-tab value=&quot;tab-1&quot;&gt;Tab 1&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
<h3 id="example-placement">
                  <a href="#example-placement">选项卡位置</a>
                </h3>
<p>在 <code>&lt;mdui-tabs&gt;</code> 组件上使用 <code>placement</code> 属性，可以设置选项卡的位置。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-select class=&quot;example-change-placement&quot; placeholder=&quot;选择 placement 值&quot; style=&quot;width: 180px&quot;&gt;
  &lt;mdui-menu-item value=&quot;top-start&quot;&gt;top-start&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;top&quot;&gt;top&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;top-end&quot;&gt;top-end&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;bottom-start&quot;&gt;bottom-start&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;bottom&quot;&gt;bottom&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;bottom-end&quot;&gt;bottom-end&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;left-start&quot;&gt;left-start&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;left&quot;&gt;left&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;left-end&quot;&gt;left-end&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;right-start&quot;&gt;right-start&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;right&quot;&gt;right&lt;/mdui-menu-item&gt;
  &lt;mdui-menu-item value=&quot;right-end&quot;&gt;right-end&lt;/mdui-menu-item&gt;
&lt;/mdui-select&gt;

&lt;mdui-tabs value=&quot;tab-1&quot; placement=&quot;top-start&quot; class=&quot;example-placement&quot;&gt;
  &lt;mdui-tab value=&quot;tab-1&quot;&gt;Tab 1&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot; style=&quot;height: 260px&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot; style=&quot;height: 260px&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot; style=&quot;height: 260px&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;

&lt;script&gt;
  const select = document.querySelector(&quot;.example-change-placement&quot;);
  const tabs = document.querySelector(&quot;.example-placement&quot;);

  select.addEventListener(&quot;change&quot;, (event) =&gt; {
    tabs.placement = event.target.value;
  });
&lt;/script&gt;
</code></pre>
<h3 id="example-full-width">
                  <a href="#example-full-width">全宽显示</a>
                </h3>
<p>在 <code>&lt;mdui-tabs&gt;</code> 组件上添加 <code>full-width</code> 属性，可以使选项卡占据全部宽度，各个选项卡将平均分配宽度。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tabs value=&quot;tab-1&quot; full-width&gt;
  &lt;mdui-tab value=&quot;tab-1&quot;&gt;Tab 1&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
<h3 id="example-icon">
                  <a href="#example-icon">图标</a>
                </h3>
<p>在 <code>&lt;mdui-tab&gt;</code> 组件上设置 <code>icon</code> 属性，可以在选项卡上添加 Material Icons 图标。也可以通过 <code>icon</code> slot 添加图标元素。</p>
<p>添加 <code>inline</code> 属性可以将图标和文本水平排列。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tabs value=&quot;tab-1&quot;&gt;
  &lt;mdui-tab value=&quot;tab-1&quot; icon=&quot;library_music&quot;&gt;Tab 1&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-2&quot;&gt;
    Tab 2
    &lt;mdui-icon slot=&quot;icon&quot; name=&quot;movie&quot;&gt;&lt;/mdui-icon&gt;
  &lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-3&quot; icon=&quot;menu_book&quot; inline&gt;Tab 3&lt;/mdui-tab&gt;

  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
<h3 id="example-badge">
                  <a href="#example-badge">徽标</a>
                </h3>
<p>在 <code>&lt;mdui-tab&gt;</code> 组件中，可以通过 <code>badge</code> slot 添加徽标。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tabs value=&quot;tab-1&quot;&gt;
  &lt;mdui-tab value=&quot;tab-1&quot;&gt;
    Tab 1
    &lt;mdui-badge slot=&quot;badge&quot;&gt;99+&lt;/mdui-badge&gt;
  &lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
<h3 id="example-custom">
                  <a href="#example-custom">自定义内容</a>
                </h3>
<p>在 <code>&lt;mdui-tab&gt;</code> 组件中使用 <code>custom</code> slot，可以完全自定义选项卡的内容。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-tabs value=&quot;tab-1&quot;&gt;
  &lt;mdui-tab value=&quot;tab-1&quot;&gt;
    Tab 1
    &lt;mdui-chip slot=&quot;custom&quot; icon=&quot;search&quot;&gt;Icon&lt;/mdui-chip&gt;
  &lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
  &lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
  &lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
`,elements:[{name:"TabPanel",tagName:"mdui-tab-panel",summary:`<p>选项卡面板项组件。需配合 <code>&lt;mdui-tabs&gt;</code> 和 <code>&lt;mdui-tab&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-tabs value=&quot;tab-1&quot;&gt;
..&lt;mdui-tab value=&quot;tab-1&quot;&gt;Tab 1&lt;/mdui-tab&gt;
..&lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
..&lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
`,attributes:[{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>选项卡面板项的值</p>
`,type:"string",enum:[]}],methods:[],events:[],slots:[{name:"",description:`<p>选项卡面板项内容</p>
`}],cssParts:[],cssProperties:[]},{name:"Tab",tagName:"mdui-tab",summary:`<p>选项卡导航项组件。需配合 <code>&lt;mdui-tabs&gt;</code> 和 <code>&lt;mdui-tab-panel&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-tabs value=&quot;tab-1&quot;&gt;
..&lt;mdui-tab value=&quot;tab-1&quot;&gt;Tab 1&lt;/mdui-tab&gt;
..&lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
..&lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
`,attributes:[{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>选项卡导航项的值</p>
`,type:"string",enum:[]},{attributeName:"icon",propertyName:"icon",reflect:!0,description:`<p>Material Icons 图标名。也可以通过 <code>slot=&quot;icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"inline",propertyName:"inline",reflect:!0,description:`<p>是否把图标和文本水平排列</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>是否在页面加载完成后自动获取焦点</p>
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
`}],slots:[{name:"",description:`<p>选项卡导航项的文本内容</p>
`},{name:"icon",description:`<p>选项卡导航项中的图标</p>
`},{name:"badge",description:`<p>徽标</p>
`},{name:"custom",description:`<p>自定义整个选项卡导航项中的内容</p>
`}],cssParts:[{name:"container",description:`<p>选项卡导航项容器</p>
`},{name:"icon",description:`<p>选项卡导航项中的图标</p>
`},{name:"label",description:`<p>选项卡导航项的文本</p>
`}],cssProperties:[]},{name:"Tabs",tagName:"mdui-tabs",summary:`<p>选项卡组件。需配合 <code>&lt;mdui-tab&gt;</code> 和 <code>&lt;mdui-tab-panel&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-tabs value=&quot;tab-1&quot;&gt;
..&lt;mdui-tab value=&quot;tab-1&quot;&gt;Tab 1&lt;/mdui-tab&gt;
..&lt;mdui-tab value=&quot;tab-2&quot;&gt;Tab 2&lt;/mdui-tab&gt;
..&lt;mdui-tab value=&quot;tab-3&quot;&gt;Tab 3&lt;/mdui-tab&gt;

..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-1&quot;&gt;Panel 1&lt;/mdui-tab-panel&gt;
..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-2&quot;&gt;Panel 2&lt;/mdui-tab-panel&gt;
..&lt;mdui-tab-panel slot=&quot;panel&quot; value=&quot;tab-3&quot;&gt;Panel 3&lt;/mdui-tab-panel&gt;
&lt;/mdui-tabs&gt;
</code></pre>
`,attributes:[{attributeName:"variant",propertyName:"variant",reflect:!0,description:`<p>选项卡形状。可选值包括：</p>
<ul>
<li><code>primary</code>：适用于位于 <code>&lt;mdui-top-app-bar&gt;</code> 下方，用于切换应用的主页面的场景</li>
<li><code>secondary</code>：适用于位于页面中，用于切换一组相关内容的场景</li>
</ul>
`,type:"'primary' | 'secondary'",enum:["'primary'","'secondary'"],default:"'primary'"},{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>当前激活的 <code>&lt;mdui-tab&gt;</code> 的值</p>
`,type:"string",enum:[]},{attributeName:"placement",propertyName:"placement",reflect:!0,description:`<p>选项卡位置。默认为 <code>top-start</code>。可选值包括：</p>
<ul>
<li><code>top-start</code>：位于上方，左对齐</li>
<li><code>top</code>：位于上方，居中对齐</li>
<li><code>top-end</code>：位于上方，右对齐</li>
<li><code>bottom-start</code>：位于下方，左对齐</li>
<li><code>bottom</code>：位于下方，居中对齐</li>
<li><code>bottom-end</code>：位于下方，右对齐</li>
<li><code>left-start</code>：位于左侧，顶部对齐</li>
<li><code>left</code>：位于左侧，居中对齐</li>
<li><code>left-end</code>：位于左侧，底部对齐</li>
<li><code>right-start</code>：位于右侧，顶部对齐</li>
<li><code>right</code>：位于右侧，居中对齐</li>
<li><code>right-end</code>：位于右侧，底部对齐</li>
</ul>
`,type:"'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end'",enum:["'top-start'","'top'","'top-end'","'bottom-start'","'bottom'","'bottom-end'","'left-start'","'left'","'left-end'","'right-start'","'right'","'right-end'"],default:"'top-start'"},{attributeName:"full-width",propertyName:"fullWidth",reflect:!0,description:`<p>是否填满父元素宽度</p>
`,type:"boolean",enum:[],default:"false"}],methods:[],events:[{name:"change",description:`<p>选中的值变化时触发</p>
`}],slots:[{name:"",description:`<p><code>&lt;mdui-tab&gt;</code> 元素</p>
`},{name:"panel",description:`<p><code>&lt;mdui-tab-panel&gt;</code> 元素</p>
`}],cssParts:[{name:"container",description:`<p><code>&lt;mdui-tab&gt;</code> 元素的容器</p>
`},{name:"indicator",description:`<p>激活状态指示器</p>
`}],cssProperties:[]}]};export{t as default};
