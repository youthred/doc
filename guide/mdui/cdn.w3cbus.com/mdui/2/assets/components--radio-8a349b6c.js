const e={docsHtml:`<p>单选框用于让用户在一组选项中选择其中一个，确保每次只能选中一个选项。</p>
<h2 id="usage">
                  <a href="#usage">使用方法</a>
                </h2>
<p>按需导入组件：</p>
<pre><code class="language-js">import &#39;mdui/components/radio-group.js&#39;;
import &#39;mdui/components/radio.js&#39;;
</code></pre>
<p>按需导入组件的 TypeScript 类型：</p>
<pre><code class="language-ts">import type { RadioGroup } from &#39;mdui/components/radio-group.js&#39;;
import type { Radio } from &#39;mdui/components/radio.js&#39;;
</code></pre>
<p>使用示例：</p>
<pre><code class="language-html,example">&lt;mdui-radio-group value=&quot;chinese&quot;&gt;
  &lt;mdui-radio value=&quot;chinese&quot;&gt;Chinese&lt;/mdui-radio&gt;
  &lt;mdui-radio value=&quot;english&quot;&gt;English&lt;/mdui-radio&gt;
&lt;/mdui-radio-group&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">示例</a>
                </h2>
<h3 id="example-checked">
                  <a href="#example-checked">选中状态</a>
                </h3>
<p><code>&lt;mdui-radio-group&gt;</code> 组件的 <code>value</code> 属性值即当前选中的 <code>&lt;mdui-radio&gt;</code> 组件的 <code>value</code> 属性值。您也可以通过更新 <code>&lt;mdui-radio-group&gt;</code> 组件的 <code>value</code> 属性值，来切换当前选中的单选框。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-radio-group value=&quot;chinese&quot;&gt;
  &lt;mdui-radio value=&quot;chinese&quot;&gt;Chinese&lt;/mdui-radio&gt;
  &lt;mdui-radio value=&quot;english&quot;&gt;English&lt;/mdui-radio&gt;
&lt;/mdui-radio-group&gt;
</code></pre>
<p>可以单独使用 <code>&lt;mdui-radio&gt;</code> 组件，此时可以通过 <code>checked</code> 属性来读取和修改选中状态。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-radio checked&gt;Radio&lt;/mdui-radio&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">禁用状态</a>
                </h3>
<p>通过在 <code>&lt;mdui-radio-group&gt;</code> 组件上添加 <code>disabled</code> 属性，可以禁用整个单选框组。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-radio-group disabled&gt;
  &lt;mdui-radio value=&quot;chinese&quot;&gt;Chinese&lt;/mdui-radio&gt;
  &lt;mdui-radio value=&quot;english&quot;&gt;English&lt;/mdui-radio&gt;
&lt;/mdui-radio-group&gt;
</code></pre>
<p>如果需要禁用特定的单选框，可以在 <code>&lt;mdui-radio&gt;</code> 组件上添加 <code>disabled</code> 属性。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-radio-group&gt;
  &lt;mdui-radio value=&quot;chinese&quot;&gt;Chinese&lt;/mdui-radio&gt;
  &lt;mdui-radio value=&quot;english&quot; disabled&gt;English&lt;/mdui-radio&gt;
&lt;/mdui-radio-group&gt;
</code></pre>
<h3 id="example-icon">
                  <a href="#example-icon">图标</a>
                </h3>
<p>可以通过设置 <code>unchecked-icon</code> 和 <code>checked-icon</code> 属性，分别定义未选中和选中状态下的单选框的 Material Icons 图标。也可以通过 <code>unchecked-icon</code> 和 <code>checked-icon</code> slot 来设置。</p>
<pre><code class="language-html,example,expandable">&lt;mdui-radio-group value=&quot;chinese&quot;&gt;
  &lt;mdui-radio
    unchecked-icon=&quot;check_box_outline_blank&quot;
    checked-icon=&quot;lock&quot;
    value=&quot;chinese&quot;
  &gt;Chinese&lt;/mdui-radio&gt;
  &lt;mdui-radio value=&quot;english&quot;&gt;
    &lt;mdui-icon slot=&quot;unchecked-icon&quot; name=&quot;check_box_outline_blank&quot;&gt;&lt;/mdui-icon&gt;
    &lt;mdui-icon slot=&quot;checked-icon&quot; name=&quot;lock&quot;&gt;&lt;/mdui-icon&gt;
    English
  &lt;/mdui-radio&gt;
&lt;/mdui-radio-group&gt;
</code></pre>
`,elements:[{name:"RadioGroup",tagName:"mdui-radio-group",summary:`<p>单选框组组件。需配合 <code>&lt;mdui-radio&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-radio-group value=&quot;chinese&quot;&gt;
..&lt;mdui-radio value=&quot;chinese&quot;&gt;Chinese&lt;/mdui-radio&gt;
..&lt;mdui-radio value=&quot;english&quot;&gt;English&lt;/mdui-radio&gt;
&lt;/mdui-radio-group&gt;
</code></pre>
`,attributes:[{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>是否禁用此组件</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"form",propertyName:"form",reflect:!0,description:`<p>关联的 <code>&lt;form&gt;</code> 元素。此属性值应为同一页面中的一个 <code>&lt;form&gt;</code> 元素的 <code>id</code>。</p>
<p>如果未指定此属性，则该元素必须是 <code>&lt;form&gt;</code> 元素的子元素。通过此属性，你可以将元素放置在页面的任何位置，而不仅仅是 <code>&lt;form&gt;</code> 元素的子元素。</p>
`,type:"string",enum:[]},{attributeName:"name",propertyName:"name",reflect:!0,description:`<p>单选框组的名称，将与表单数据一起提交</p>
`,type:"string",enum:[],default:"''"},{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>单选框组的名称，将于表单数据一起提交</p>
`,type:"string",enum:[],default:"''"},{propertyName:"defaultValue",reflect:!1,description:`<p>默认选中的值。在重置表单时，将重置为该默认值。该属性只能通过 JavaScript 属性设置</p>
`,type:"string",enum:[],default:"''"},{attributeName:"required",propertyName:"required",reflect:!0,description:`<p>提交表单时，是否必须选中其中一个单选框</p>
`,type:"boolean",enum:[],default:"false"},{propertyName:"validity",reflect:!1,description:`<p>表单验证状态对象，具体参见 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ValidityState" target="_blank" rel="noopener nofollow"><code>ValidityState</code></a></p>
`,type:"ValidityState",enum:[]},{propertyName:"validationMessage",reflect:!1,description:`<p>如果表单验证未通过，此属性将包含提示信息。如果验证通过，此属性将为空字符串</p>
`,type:"string",enum:[]}],methods:[{name:"checkValidity",description:`<p>检查表单字段是否通过验证。如果未通过，返回 <code>false</code> 并触发 <code>invalid</code> 事件；如果通过，返回 <code>true</code></p>
`,parameters:[],return:{type:"boolean"}},{name:"reportValidity",description:`<p>检查表单字段是否通过验证。如果未通过，返回 <code>false</code> 并触发 <code>invalid</code> 事件；如果通过，返回 <code>true</code>。</p>
<p>如果验证未通过，还会在组件上显示验证失败的提示。</p>
`,parameters:[],return:{type:"boolean"}},{name:"setCustomValidity",description:`<p>设置自定义的错误提示文本。只要这个文本不为空，就表示字段未通过验证</p>
`,parameters:[{name:"message",type:"string"}],return:{type:"void"}}],events:[{name:"change",description:`<p>选中值变化时触发</p>
`},{name:"input",description:`<p>选中值变化时触发</p>
`},{name:"invalid",description:`<p>表单字段验证未通过时触发</p>
`}],slots:[{name:"",description:`<p><code>&lt;mdui-radio&gt;</code> 元素</p>
`}],cssParts:[],cssProperties:[]},{name:"Radio",tagName:"mdui-radio",summary:`<p>单选框组件。需配合 <code>&lt;mdui-radio-group&gt;</code> 组件使用</p>
<pre><code class="language-html">&lt;mdui-radio-group value=&quot;chinese&quot;&gt;
..&lt;mdui-radio value=&quot;chinese&quot;&gt;Chinese&lt;/mdui-radio&gt;
..&lt;mdui-radio value=&quot;english&quot;&gt;English&lt;/mdui-radio&gt;
&lt;/mdui-radio-group&gt;
</code></pre>
`,attributes:[{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>当前单选项的值</p>
`,type:"string",enum:[],default:"''"},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>是否禁用当前单选项</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"checked",propertyName:"checked",reflect:!0,description:`<p>当前单选项是否已选中</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"unchecked-icon",propertyName:"uncheckedIcon",reflect:!0,description:`<p>未选中状态的 Material Icons 图标名。也可以通过 <code>slot=&quot;unchecked-icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"checked-icon",propertyName:"checkedIcon",reflect:!0,description:`<p>选中状态的 Material Icons 图标名。也可以通过 <code>slot=&quot;checked-icon&quot;</code> 设置</p>
`,type:"string",enum:[]},{attributeName:"autofocus",propertyName:"autofocus",reflect:!0,description:`<p>是否在页面加载完成后自动获取焦点</p>
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
`},{name:"change",description:`<p>选中该单选项时触发</p>
`}],slots:[{name:"",description:`<p>文本内容</p>
`},{name:"unchecked-icon",description:`<p>未选中状态的图标</p>
`},{name:"checked-icon",description:`<p>选中状态的图标</p>
`}],cssParts:[{name:"control",description:`<p>左侧图标容器</p>
`},{name:"unchecked-icon",description:`<p>未选中状态的图标</p>
`},{name:"checked-icon",description:`<p>选中状态的图标</p>
`},{name:"label",description:`<p>文本内容</p>
`}],cssProperties:[]}]};export{e as default};
