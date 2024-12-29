const t={docsHtml:`<p>Collapse panels are utilized to group and conceal complex content areas, enhancing page organization.</p>
<p>The collapse panel component does not come with styles. You must either create your own styles or use it in conjunction with other components.</p>
<h2 id="usage">
                  <a href="#usage">Usage</a>
                </h2>
<p>Import the component:</p>
<pre><code class="language-js">import &#39;mdui/components/collapse.js&#39;;
import &#39;mdui/components/collapse-item.js&#39;;
</code></pre>
<p>Import the TypeScript type:</p>
<pre><code class="language-ts">import type { Collapse } from &#39;mdui/components/collapse.js&#39;;
import type { CollapseItem } from &#39;mdui/components/collapse-item.js&#39;;
</code></pre>
<p>Example:</p>
<pre><code class="language-html,example">&lt;mdui-collapse&gt;
  &lt;mdui-collapse-item header=&quot;first header&quot;&gt;first content&lt;/mdui-collapse-item&gt;
  &lt;mdui-collapse-item header=&quot;second header&quot;&gt;second content&lt;/mdui-collapse-item&gt;
&lt;/mdui-collapse&gt;
</code></pre>
<h2 id="examples">
                  <a href="#examples">Examples</a>
                </h2>
<h3 id="example-header">
                  <a href="#example-header">Panel Header and Content</a>
                </h3>
<p>You can set the panel header text using the <code>header</code> attribute of the <code>&lt;mdui-collapse-item&gt;</code> component. Alternatively, use the <code>header</code> slot to specify the panel header element. The default slot of the component is for the panel content.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-collapse&gt;
    &lt;mdui-collapse-item&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 1&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 1 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
    &lt;mdui-collapse-item&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 2&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 2 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
  &lt;/mdui-collapse&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-accordion">
                  <a href="#example-accordion">Accordion Mode</a>
                </h3>
<p>To enable accordion mode, add the <code>accordion</code> attribute to the <code>&lt;mdui-collapse&gt;</code> component. In this mode, only one panel can be open at a time.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-collapse accordion&gt;
    &lt;mdui-collapse-item&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 1&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 1 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
    &lt;mdui-collapse-item&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 2&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 2 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
  &lt;/mdui-collapse&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-value">
                  <a href="#example-value">Setting the Active Panel</a>
                </h3>
<p>The <code>value</code> attribute of the <code>&lt;mdui-collapse&gt;</code> component can be used to get the currently open panel or set the panel you want to open.</p>
<p>In accordion mode, <code>value</code> is a string and can be manipulated using either attribute or property. In non-accordion mode, <code>value</code> is an array and can only be manipulated using JavaScript property.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-subheader&gt;Accordion Mode&lt;/mdui-list-subheader&gt;
  &lt;mdui-collapse accordion value=&quot;item-1&quot;&gt;
    &lt;mdui-collapse-item value=&quot;item-1&quot;&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 1&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 1 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
    &lt;mdui-collapse-item value=&quot;item-2&quot;&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 2&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 2 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
  &lt;/mdui-collapse&gt;

  &lt;mdui-list-subheader&gt;Non-Accordion Mode&lt;/mdui-list-subheader&gt;
  &lt;mdui-collapse class=&quot;example-value&quot;&gt;
    &lt;mdui-collapse-item value=&quot;item-1&quot;&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 1&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 1 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
    &lt;mdui-collapse-item value=&quot;item-2&quot;&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 2&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 2 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
  &lt;/mdui-collapse&gt;
&lt;/mdui-list&gt;

&lt;script&gt;
  const collapse = document.querySelector(&quot;.example-value&quot;);
  collapse.value = [&quot;item-1&quot;, &quot;item-2&quot;];
&lt;/script&gt;
</code></pre>
<h3 id="example-disabled">
                  <a href="#example-disabled">Disabled State</a>
                </h3>
<p>To disable the entire collapse panel group, add the <code>disabled</code> attribute to the <code>&lt;mdui-collapse&gt;</code> component. To disable a specific collapse panel, add the <code>disabled</code> attribute to the <code>&lt;mdui-collapse-item&gt;</code>.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-list-subheader&gt;All Disabled&lt;/mdui-list-subheader&gt;
  &lt;mdui-collapse disabled&gt;
    &lt;mdui-collapse-item&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 1&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 1 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
    &lt;mdui-collapse-item&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 2&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 2 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
  &lt;/mdui-collapse&gt;

  &lt;mdui-list-subheader&gt;Disable the First Panel&lt;/mdui-list-subheader&gt;
  &lt;mdui-collapse&gt;
    &lt;mdui-collapse-item disabled&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 1&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 1 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
    &lt;mdui-collapse-item&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;Item 2&lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 2 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
  &lt;/mdui-collapse&gt;
&lt;/mdui-list&gt;
</code></pre>
<h3 id="example-trigger">
                  <a href="#example-trigger">Triggering Element for Collapse</a>
                </h3>
<p>By default, clicking the entire panel header area triggers the collapse. You can specify the triggering element by using the <code>trigger</code> attribute of the <code>&lt;mdui-collapse-item&gt;</code> component. The <code>trigger</code> attribute can be a CSS selector or a DOM element.</p>
<pre><code class="language-html,example,expandable">&lt;mdui-list&gt;
  &lt;mdui-collapse&gt;
    &lt;mdui-collapse-item trigger=&quot;.example-trigger&quot;&gt;
      &lt;mdui-list-item slot=&quot;header&quot; icon=&quot;near_me&quot;&gt;
        Item 1
        &lt;mdui-icon slot=&quot;end-icon&quot; class=&quot;example-trigger&quot; name=&quot;keyboard_arrow_down&quot;&gt;&lt;/mdui-icon&gt;
      &lt;/mdui-list-item&gt;
      &lt;div style=&quot;margin-left: 2.5rem&quot;&gt;
        &lt;mdui-list-item&gt;Item 1 - subitem&lt;/mdui-list-item&gt;
      &lt;/div&gt;
    &lt;/mdui-collapse-item&gt;
  &lt;/mdui-collapse&gt;
&lt;/mdui-list&gt;
</code></pre>
`,elements:[{name:"CollapseItem",tagName:"mdui-collapse-item",summary:`<p>Collapse Item Component. It should be used in conjunction with the <code>&lt;mdui-collapse&gt;</code> component.</p>
<pre><code class="language-html">&lt;mdui-collapse&gt;
..&lt;mdui-collapse-item header=&quot;header-1&quot;&gt;content-1&lt;/mdui-collapse-item&gt;
..&lt;mdui-collapse-item header=&quot;header-2&quot;&gt;content-2&lt;/mdui-collapse-item&gt;
&lt;/mdui-collapse&gt;
</code></pre>
`,attributes:[{attributeName:"value",propertyName:"value",reflect:!0,description:`<p>Specifies the value of the collapsible panel item.</p>
`,type:"string",enum:[]},{attributeName:"header",propertyName:"header",reflect:!0,description:`<p>Sets the header text for the collapsible panel item.</p>
`,type:"string",enum:[]},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>Disables the collapsible panel item.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"trigger",propertyName:"trigger",reflect:!1,description:`<p>Identifies the element that triggers the collapse on click. This can be a CSS selector, a DOM element, or a <a href="https://cdn.w3cbus.com/docs/2/functions/jq">JQ object</a>. By default, the entire header area is the trigger.</p>
`,type:"string | HTMLElement | JQ<HTMLElement>",enum:["string","HTMLElement","JQ<HTMLElement>"]}],methods:[],events:[{name:"open",description:`<p>Emitted when the collapse item starts to open.</p>
`},{name:"opened",description:`<p>Emitted after the collapse item has opened and the animations are completed.</p>
`},{name:"close",description:`<p>Emitted when the collapse item starts to close.</p>
`},{name:"closed",description:`<p>Emitted after the collapse item has closed and the animations are completed.</p>
`}],slots:[{name:"",description:`<p>Main content of the collapsible panel item.</p>
`},{name:"header",description:`<p>Content of the collapsible panel item&#39;s header.</p>
`}],cssParts:[{name:"header",description:`<p>Content of the collapsible panel&#39;s header.</p>
`},{name:"body",description:`<p>Content of the collapsible panel&#39;s body.</p>
`}],cssProperties:[]},{name:"Collapse",tagName:"mdui-collapse",summary:`<p>Collapse Panel Component. It should be used in conjunction with the <code>&lt;mdui-collapse-item&gt;</code> component.</p>
<pre><code class="language-html">&lt;mdui-collapse&gt;
..&lt;mdui-collapse-item header=&quot;header-1&quot;&gt;content-1&lt;/mdui-collapse-item&gt;
..&lt;mdui-collapse-item header=&quot;header-2&quot;&gt;content-2&lt;/mdui-collapse-item&gt;
&lt;/mdui-collapse&gt;
</code></pre>
`,attributes:[{attributeName:"accordion",propertyName:"accordion",reflect:!0,description:`<p>Activates accordion mode.</p>
`,type:"boolean",enum:[],default:"false"},{attributeName:"value",propertyName:"value",reflect:!1,description:`<p>Specifies the open <code>&lt;mdui-collapse-item&gt;</code> value.</p>
<p>Note: The HTML attribute is always a string and can only be initially set when <code>accordion</code> is <code>true</code>. The JavaScript property value is a string when <code>accordion</code> is <code>true</code> and a string array when <code>accordion</code> is <code>false</code>. To modify this value when <code>accordion</code> is <code>false</code>, you must change the JavaScript property.</p>
`,type:"string | string[]",enum:["string","string[]"]},{attributeName:"disabled",propertyName:"disabled",reflect:!0,description:`<p>Disables the collapsible panel.</p>
`,type:"boolean",enum:[],default:"false"}],methods:[],events:[{name:"change",description:`<p>Emitted when the open collapsible panel item changes.</p>
`}],slots:[{name:"",description:`<p>The <code>&lt;mdui-collapse-item&gt;</code> components.</p>
`}],cssParts:[],cssProperties:[]}]};export{t as default};
