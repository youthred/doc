const e={docsHtml:`<p>开关组件用于切换单个选项的开启或关闭状态，通过直观的交互设计，让用户能轻松调整设置。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/switch.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { Switch } from &#39;mdui/components/switch.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-switch&gt;&lt;/mdui-switch&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-checked">
                  <a href="#example-checked">选中状态</a>
                </h3>
<p>当开关被选中时，<code>checked</code> 属性的值为 <code>true</code>。你也可以通过添加 <code>checked</code> 属性，使开关默认处于选中状态。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-switch checked&gt;&lt;/mdui-switch&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">禁用状态</a>
                </h3>
<p>通过添加 <code>disabled</code> 属性，可以禁用开关组件。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-switch disabled&gt;&lt;/mdui-switch&gt;
&lt;mdui-switch disabled checked&gt;&lt;/mdui-switch&gt;
</code></pre>
<h3 id="example-icon">
                  <a href="#example-icon">图标</a>
                </h3>
<p>可以通过 <code>unchecked-icon</code> 属性来设置未选中状态的 Material Icons 图标，通过 <code>checked-icon</code> 属性来设置选中状态的 Material Icons 图标。也可以通过 <code>unchecked-icon</code> 和 <code>checked-icon</code> slot 来自定义未选中和选中状态的图标元素。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-switch unchecked-icon=&quot;remove_moderator&quot; checked-icon=&quot;verified_user&quot;&gt;&lt;/mdui-switch&gt;
&lt;mdui-switch&gt;
  &lt;mdui-icon slot=&quot;unchecked-icon&quot; name=&quot;remove_moderator&quot;&gt;&lt;/mdui-icon&gt;
  &lt;mdui-icon slot=&quot;checked-icon&quot; name=&quot;verified_user&quot;&gt;&lt;/mdui-icon&gt;
&lt;/mdui-switch&gt;
</code></pre>
`,elements:[{name:"Switch",tagName:"mdui-switch",summary:`<p>开关切换组件</p>
<pre><code class="language-html">&lt;mdui-switch&gt;&lt;/mdui-switch&gt;
</code></pre>
`,attributes:[{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>是否为禁用状态</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"checked",propertyName:"checked",reflect:!0,description:`<p>是否为选中状态</p>
`,type:"boolean",enum:[],default:"false"},{propertyName:"defaultChecked",reflect:!1,description:`<p>默认选中状态。在重置表单时，将重置为此状态。此属性只能通过 JavaScript 属性设置</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"unchecked-icon",propertyName:"uncheckedIcon",reflect:!0,description:`<p>未选中状态的 Material Icons 图标名。也可以通过 <code>slot=&quot;unchecked-icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"checked-icon",propertyName:"checkedIcon",reflect:!0,description:`<p>选中状态的 Material Icons 图标名。也可以通过 <code>slot=&quot;checked-icon&quot;</code> 设置</p>
<p>默认为 <code>check</code> 图标，可传入空字符串移除默认图标</p>
`,type:"string",enum:[]},{attributeName:"required",propertyName:"required",reflect:!0,description:`<p>提交表单时，是否必须选中此开关</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"form",propertyName:"form",reflect:!0,description:`<p>关联的 <code>&lt;form&gt;</code> 元素。此属性值应为同一页面中的一个 <code>&lt;form&gt;</code> 元素的 <code>id</code>。</p>
<p>如果未指定此属性，则该元素必须是 <code>&lt;form&gt;</code> 元素的子元素。通过此属性，你可以将元素放置在页面的任何位置，而不仅仅是 <code>&lt;form&gt;</code> 元素的子元素。</p>
`,type:"string",enum:[]},{attributeName:"name",propertyName:"name",reflect:!0,description:`<p>开关的名称，将与表单数据一起提交</p>
`,type:"string",enum:[],default:"''"},{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>开关的值，将于表单数据一起提交</p>
`,type:"string",enum:[],default:"'on'"},{propertyName:"validity",reflect:!1,description:`<p>表单验证状态对象，具体参见 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ValidityState" target="_blank" rel="noopener nofollow"><code>ValidityState</code></a></p>
`,type:"ValidityState",enum:[]},{propertyName:"validationMessage",reflect:!1,description:`<p>如果表单验证未通过，此属性将包含提示信息。如果验证通过，此属性将为空字符串</p>
`,type:"string",enum:[]},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>是否在页面加载完成后自动获取焦点</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"tabindex",propertyName:"tabIndex",reflect:!1,description:`<p>元素在使用 Tab 键切换焦点时的顺序</p>
`,type:"number",enum:[]}],methods:[{name:"checkValidity",description:`<p>检查表单字段是否通过验证。如果未通过，返回 <code>false</code> 并触发 <code>invalid</code> 事件；如果通过，返回 <code>true</code></p>
`,parameters:[],return:{type:"boolean"}},{name:"reportValidity",description:`<p>检查表单字段是否通过验证。如果未通过，返回 <code>false</code> 并触发 <code>invalid</code> 事件；如果通过，返回 <code>true</code>。</p>
<p>如果验证未通过，还会在组件上显示验证失败的提示。</p>
`,parameters:[],return:{type:"boolean"}},{name:"setCustomValidity",description:`<p>设置自定义的错误提示文本。只要这个文本不为空，就表示字段未通过验证</p>
`,parameters:[{name:"message",type:"string"}],return:{type:"void"}},{name:"click",description:`<p>模拟鼠标点击元素</p>
`,parameters:[],return:{type:"void"}},{name:"focus",description:`<p>将焦点设置到当前元素。</p>
<p>可以传入一个对象作为参数，该对象的属性包括：</p>
<ul>
<li><code>preventScroll</code>：默认情况下，元素获取焦点后，页面会滚动以将该元素滚动到视图中。如果不希望页面滚动，可以将此属性设置为 <code>true</code>。</li>
</ul>
`,parameters:[{name:"options",type:"FocusOptions",optional:!0}],return:{type:"void"}},{name:"blur",description:`<p>移除当前元素的焦点</p>
`,parameters:[],return:{type:"void"}}],events:[{name:"focus",description:`<p>获得焦点时触发</p>
`},{name:"blur",description:`<p>失去焦点时触发</p>
`},{name:"change",description:`<p>选中状态变更时触发</p>
`},{name:"input",description:`<p>选中状态变更时触发</p>
`},{name:"invalid",description:`<p>表单字段验证不通过时触发</p>
`}],slots:[{name:"unchecked-icon",description:`<p>未选中状态的元素</p>
`},{name:"checked-icon",description:`<p>选中状态的元素</p>
`}],cssParts:[{name:"track",description:`<p>轨道</p>
`},{name:"thumb",description:`<p>图标容器</p>
`},{name:"unchecked-icon",description:`<p>未选中状态的图标</p>
`},{name:"checked-icon",description:`<p>选中状态的图标</p>
`}],cssProperties:[{name:"--shape-corner",description:`<p>组件轨道的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`},{name:"--shape-corner-thumb",description:`<p>组件图标容器的圆角大小。可以指定一个具体的像素值；但更推荐引用<a href="https://cdn.w3cbus.com/docs/2/styles/design-tokens#shape-corner">设计令牌</a></p>
`}]}]};export{e as default};
