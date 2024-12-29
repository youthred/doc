const e={docsHtml:`<p>To integrate mdui with React, start by following the steps on the <a href="https://cdn.w3cbus.com/en/docs/2/getting-started/installation#npm">installation</a> page.</p>
<h2 id="notes">
                  <a href="#notes">Notes</a>
                </h2>
<p>When using mdui in a React environment, there are certain aspects to be aware of. These considerations stem from the general constraints of Web Components and are not specific to mdui.</p>
<h3 id="event-binding">
                  <a href="#event-binding">Event Binding</a>
                </h3>
<p>React does not natively support custom events. Therefore, to utilize events provided by mdui components, it&#39;s necessary to obtain a reference to the component using the <code>ref</code> attribute. This reference can then be used to add event listeners.</p>
<p>Here&#39;s an example of handling mdui component events in React:</p>
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
                  <a href="#jsx-typescript">TypeScript Type Declarations for JSX</a>
                </h3>
<p>If you&#39;re using mdui in TypeScript files (.tsx), it&#39;s important to include TypeScript type declarations. You can do this by importing mdui&#39;s type declaration files into your project&#39;s .d.ts file:</p>
<pre><code class="language-ts">/// &lt;reference types=&quot;mdui/jsx.en.d.ts&quot; /&gt;
</code></pre>
`,elements:[]};export{e as default};
