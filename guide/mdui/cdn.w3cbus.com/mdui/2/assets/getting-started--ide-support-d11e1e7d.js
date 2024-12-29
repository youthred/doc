const d={docsHtml:`<p>mdui 专门为 VS Code 和 WebStorm 进行了优化，在这些 IDE 中可以获得代码自动完成、悬停提示等功能。</p>
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
                  <a href="#vscode-npm">通过 npm 安装的 mdui</a>
                </h3>
<p>如果你通过 npm 安装了 mdui，可以按照以下步骤在当前项目中启用 VS Code 的 IDE 支持：</p>
<ol>
<li>在项目的根目录中创建 <code>.vscode</code> 目录。</li>
<li>在 <code>.vscode</code> 目录中创建 <code>settings.json</code> 文件。</li>
<li>将以下代码添加到 <code>settings.json</code> 文件中：<pre><code class="language-json">{
  &quot;html.customData&quot;: [&quot;./node_modules/mdui/html-data.zh-cn.json&quot;],
  &quot;css.customData&quot;: [&quot;./node_modules/mdui/css-data.zh-cn.json&quot;]
}
</code></pre>
</li>
</ol>
<p>如果 <code>settings.json</code> 文件已经存在，只需将上述两行代码添加到 JSON 文档的根节点即可。修改完成后，重启 VS Code。</p>
<h3 id="vscode-cdn">
                  <a href="#vscode-cdn">通过 CDN 使用的 mdui</a>
                </h3>
<p>如果你是通过 CDN 引入的 mdui，可以通过安装 mdui 的 VS Code 扩展来获得 IDE 支持。</p>
<p>在 VS Code 的扩展商店中搜索 <code>mdui</code>，选择第一条搜索结果进行安装，或者<a href="vscode:extension/zdhxiong.mdui">点击此处安装</a>。安装完成后，所有项目都将启用 mdui 的 IDE 支持。</p>
<p>建议优先通过 npm 安装并设置 <code>settings.json</code> 文件，而非安装 VS Code 扩展，以确保 IDE 支持与当前使用的 mdui 版本保持一致。</p>
<h2 id="webstorm">
                  <a href="#webstorm">WebStorm</a>
                </h2>
<h3 id="webstorm-npm">
                  <a href="#webstorm-npm">通过 npm 安装的 mdui</a>
                </h3>
<p>如果你通过 npm 安装了 mdui，可以按照以下步骤在当前项目中启用 WebStorm 的 IDE 支持：</p>
<ol>
<li>在项目根目录的 <code>package.json</code> 文件的根节点中添加以下代码：<pre><code>web-types: [&quot;./node_modules/mdui/web-types.zh-cn.json&quot;]
</code></pre>
</li>
</ol>
<p>如果 <code>package.json</code> 文件的根节点已存在 <code>web-types</code> 属性，只需将 <code>./node_modules/mdui/web-types.zh-cn.json</code> 添加到 <code>web-types</code> 数组中即可。修改完成后，重启 WebStorm。</p>
<h3 id="webstorm-cdn">
                  <a href="#webstorm-cdn">通过 CDN 使用的 mdui</a>
                </h3>
<p>如果你是通过 CDN 引入的 mdui，可以通过安装 mdui 的 WebStorm 插件来获得 IDE 支持。</p>
<p>在 WebStorm 的插件市场中搜索 <code>mdui</code>，选择第一条搜索结果进行安装。安装完成后，所有项目都将启用 mdui 的 IDE 支持。</p>
<p>建议优先通过 npm 安装来获取 IDE 支持，而非安装 WebStorm 插件，以确保 IDE 支持与当前使用的 mdui 版本保持一致。</p>
<h2 id="difference">
                  <a href="#difference">对 VS Code 和 WebStorm 支持的差异</a>
                </h2>
<p>mdui 对 VS Code 和 WebStorm 的支持存在一些差异。以下表格列出了详细的差异：</p>
<table>
<thead>
<tr>
<th>具有代码自动完成及悬浮提示的位置</th>
<th>VS Code</th>
<th>WebStorm</th>
</tr>
</thead>
<tbody><tr>
<td>HTML 标签名</td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
</tr>
<tr>
<td>HTML 标签中的属性名</td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
</tr>
<tr>
<td>HTML 标签中属性值的枚举值</td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon>（不支持显示枚举值的注释）</td>
</tr>
<tr>
<td>HTML 标签中的事件名</td>
<td></td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
</tr>
<tr>
<td>HTML 中 slot 的 <code>name</code> 属性值</td>
<td></td>
<td></td>
</tr>
<tr>
<td>CSS 中 <code>::part()</code> 选择器的 <code>part</code> 属性名</td>
<td></td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon>（需要 WebStorm 2023.2 及以上版本）</td>
</tr>
<tr>
<td>CSS 中组件内的 CSS 自定义属性名</td>
<td></td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
</tr>
<tr>
<td>CSS 中的全局 CSS 自定义属性名</td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
</tr>
<tr>
<td>CSS 中的全局 class 名</td>
<td></td>
<td><mdui-icon name="check--rounded" class="ide-support-icon"></mdui-icon></td>
</tr>
</tbody></table>
`,elements:[]};export{d as default};
