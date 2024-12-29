const e={docsHtml:`<p>在 React 中使用 mdui 时，只需要按照 <a href="https://cdn.w3cbus.com/zh-cn/docs/2/getting-started/installation#npm">安装</a> 页面的步骤完成安装即可。</p>
<h2 id="notes">
                  <a href="#notes">注意事项</a>
                </h2>
<p>在 React 中使用 mdui 时，存在一些限制。这些限制是在 React 中使用 Web Components 的通用限制，而非 mdui 组件库本身的限制。</p>
<h3 id="event-binding">
                  <a href="#event-binding">事件绑定</a>
                </h3>
<p>由于 React 不支持自定义事件，因此在使用 mdui 组件提供的事件时，需要先使用 <code>ref</code> 属性获取组件的引用。</p>
<p>以下是在 React 中使用 mdui 组件事件的示例：</p>
<pre><code class="language-js">import { useEffect, useRef } from &#39;react&#39;;
import &#39;mdui/mdui.css&#39;;
import &#39;mdui/components/switch.js&#39;;

function App() {
  const switchRef = useRef(null);

  useEffect(() =&gt; {
    const handleToggle = () =&gt; {
      console.log(&quot;switch is toggled&quot;);
    };

    switchRef.current.addEventListener(&#39;change&#39;, handleToggle);

    return () =&gt; {
      switchRef.current.removeEventListener(&#39;change&#39;, handleToggle);
    };
  }, []);

  return (
    &lt;mdui-switch ref={switchRef}&gt;&lt;/mdui-switch&gt;
  );
}

export default App;
</code></pre>
<h3 id="jsx-typescript">
                  <a href="#jsx-typescript">JSX TypeScript 类型声明</a>
                </h3>
<p>如果你在 TypeScript 文件（.tsx）中使用 mdui，需要添加 TypeScript 类型声明。你需要在项目的 .d.ts 文件中手动引入 mdui 的类型声明文件：</p>
<pre><code class="language-ts">/// &lt;reference types=&quot;mdui/jsx.zh-cn.d.ts&quot; /&gt;
</code></pre>
`,elements:[]};export{e as default};
