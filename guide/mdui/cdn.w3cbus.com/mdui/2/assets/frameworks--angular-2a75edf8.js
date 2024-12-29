const n={docsHtml:`<p>To utilize mdui in Angular, you must first complete the <a href="https://cdn.w3cbus.com/en/docs/2/getting-started/installation#npm">installation</a> of mdui. Following this, additional configuration is required.</p>
<h2 id="configuration">
                  <a href="#configuration">Configuration</a>
                </h2>
<p>The first step is to enable the use of Web Components in Angular. This can be achieved by adding the <code>CUSTOM_ELEMENTS_SCHEMA</code> to the <code>schemas</code> array in your module.</p>
<pre><code class="language-js">import { BrowserModule } from &#39;@angular/platform-browser&#39;;
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from &#39;@angular/core&#39;;

import { AppComponent } from &#39;./app.component&#39;;

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
</code></pre>
<p>Once this is set up, you can import mdui components into your Angular component code.</p>
<pre><code class="language-js">import { Dialog } from &#39;mdui/components/dialog.js&#39;;

@Component({
  selector: &#39;app-dialog-example&#39;,
  template: \`&lt;div id=&quot;page&quot;&gt;
    &lt;button (click)=&quot;openDialog()&quot;&gt;Open Dialog&lt;/button&gt;
    &lt;mdui-dialog #dialog primary=&quot;Dialog Title&quot;&gt;Dialog Content&lt;/mdui-dialog&gt;
  &lt;/div&gt;\`
})
export class DialogExampleComponent implements OnInit {

  // Use @ViewChild to get a reference to the #dialog element
  @ViewChild(&#39;dialog&#39;)
  dialog?: ElementRef&lt;Dialog&gt;;

  ...

  constructor(...) {
  }

  ngOnInit() {
  }

  ...

  openDialog() {
    // Use nativeElement to access the mdui component
    this.dialog?.nativeElement.open = true;
  }
}
</code></pre>
`,elements:[]};export{n as default};
