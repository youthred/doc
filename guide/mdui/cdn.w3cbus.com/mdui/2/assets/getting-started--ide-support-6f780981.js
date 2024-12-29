const e={docsHtml:`<p>mdui is optimized for VS Code and WebStorm, offering features such as code autocompletion and hover hints.</p>
<style>
.ide-support-icon {
  user-select: none;
  font-size: 1rem;
}
</style>

<h2 id="vscode">
                  <a href="#vscode">VS Code</a>
                </h2>
<h3 id="vscode-npm">
                  <a href="#vscode-npm">For npm-installed mdui</a>
                </h3>
<p>If you&#39;ve installed mdui via npm, you can enable VS Code IDE support for your project by following these steps:</p>
<ol>
<li>Create a <code>.vscode</code> directory at your project root.</li>
<li>Inside the <code>.vscode</code> directory, create a <code>settings.json</code> file.</li>
<li>Add the following code to <code>settings.json</code>:<pre><code class="language-json">{
  &quot;html.customData&quot;: [&quot;./node_modules/mdui/html-data.en.json&quot;],
  &quot;css.customData&quot;: [&quot;./node_modules/mdui/css-data.en.json&quot;]
}
</code></pre>
</li>
</ol>
<p>If <code>settings.json</code> already exists, simply add the above lines to the root of the JSON document. Restart VS Code after making these changes.</p>
<h3 id="vscode-cdn">
                  <a href="#vscode-cdn">For mdui Used via CDN</a>
                </h3>
<p>If you&#39;re using mdui through a CDN, you can install the mdui VS Code extension for IDE support.</p>
<p>Search for <code>mdui</code> in the VS Code extension marketplace, select the first result and install it, or <a href="vscode:extension/zdhxiong.mdui">click here to install</a>. This will enable mdui IDE support for all projects.</p>
<p>Prioritize npm installation and <code>settings.json</code> setup over the VS Code extension to ensure IDE support aligns with the mdui version in use.</p>
<p>WebStorm {#webstorm}</p>
<h2 id="webstorm">
                  <a href="#webstorm">WebStorm</a>
                </h2>
<h3 id="webstorm-npm">
                  <a href="#webstorm-npm">For npm-installed mdui</a>
                </h3>
<p>To enable WebStorm IDE support for mdui installed via npm:</p>
<ol>
<li>Add the following code to the root of your project&#39;s <code>package.json</code> file:<pre><code>web-types: [&quot;./node_modules/mdui/web-types.en.json&quot;]
</code></pre>
</li>
</ol>
<p>If <code>package.json</code> already has a <code>web-types</code> property, add <code>./node_modules/mdui/web-types.en.json</code> to the <code>web-types</code> array. Restart WebStorm after these changes.</p>
<h3 id="webstorm-cdn">
                  <a href="#webstorm-cdn">For mdui Used via CDN</a>
                </h3>
<p>If you&#39;re using mdui through a CDN, you can install the mdui WebStorm plugin for IDE support.</p>
<p>Search for <code>mdui</code> in the WebStorm plugin marketplace, select the first result and install it. This will enable mdui IDE support for all projects.</p>
<p>Prioritize npm installation and <code>package.json</code> setup over the WebStorm plugin to ensure IDE support aligns with the mdui version in use.</p>
<h2 id="difference">
                  <a href="#difference">Differences in VS Code and WebStorm Support</a>
                </h2>
<p>mdui support varies between VS Code and WebStorm. The table below details the differences:</p>
<table>
<thead>
<tr>
<th>Code Autocompletion and Hover Hints Location</th>
<th>VS Code</th>
<th>WebStorm</th>
</tr>
</thead>
<tbody><tr>
<td>HTML tag names</td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
</tr>
<tr>
<td>Attribute names within HTML tags</td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
</tr>
<tr>
<td>Enumeration values within HTML tag attributes</td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon> (Does not support displaying enumeration value comments)</td>
</tr>
<tr>
<td>Event names within HTML tags</td>
<td></td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
</tr>
<tr>
<td><code>name</code> attribute values within HTML slots</td>
<td></td>
<td></td>
</tr>
<tr>
<td><code>part</code> attribute names within CSS <code>::part()</code> selectors</td>
<td></td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon> (Requires WebStorm 2023.2 or later)</td>
</tr>
<tr>
<td>CSS custom property names within component-specific CSS</td>
<td></td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
</tr>
<tr>
<td>Global CSS custom property names</td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
</tr>
<tr>
<td>Global CSS class names</td>
<td></td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
</tr>
</tbody></table>
`,elements:[]};export{e as default};
