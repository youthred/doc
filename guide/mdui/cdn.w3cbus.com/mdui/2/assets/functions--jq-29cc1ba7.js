const e={docsHtml:`<p>mdui includes a lightweight JavaScript utility library that provides a jQuery-like API with chainable calls, but at only a fraction of jQuery&#39;s size.</p>
<p>Import the function:</p>
<pre><code class="language-js">import { $ } from &#39;mdui/jq.js&#39;;
</code></pre>
<h2 id="api-core">
                  <a href="#api-core">Core</a>
                </h2>
<h3 id="dollar">
                  <a href="#dollar"><code>$()</code></a>
                </h3>
<p>This function has several uses:</p>
<p>Pass a CSS selector to get a JQ object containing the matching elements.</p>
<pre><code class="language-js">$(&#39;.box&#39;);
</code></pre>
<p>Pass a DOM element, an array, a NodeList, or a JQ object to get a JQ object containing the specified elements.</p>
<pre><code class="language-js">$(document);
</code></pre>
<p>Pass an HTML string to create a JQ object containing the DOM elements created from the HTML.</p>
<pre><code class="language-js">$(\`&lt;div id=&quot;wrapper&quot;&gt;
  &lt;span id=&quot;inner&quot;&gt;&lt;/span&gt;
&lt;/div&gt;\`);
</code></pre>
<p>Pass a function to be called when the DOM is fully loaded.</p>
<pre><code class="language-js">$(function () { console.log(&#39;DOM Loaded&#39;) });
</code></pre>
<h2 id="api-extend">
                  <a href="#api-extend">Extension</a>
                </h2>
<h3 id="d-extend">
                  <a href="#d-extend"><code>$.extend()</code></a>
                </h3>
<p>Passing a single object merges its properties into the <code>$</code> object, effectively adding new functionality to the <code>$</code> namespace.</p>
<pre><code class="language-js">$.extend({
  customFunc: function () {}
});

// Now you can call the custom method like this
$.customFunc();
</code></pre>
<p>Passing two or more objects merges all properties from each object into the first one. The merged object is returned. Note that properties with a value of <code>undefined</code> are not merged.</p>
<pre><code class="language-js">const object = $.extend(
  { key1: val1 },
  { key2: val2 },
  { key3: val3 }
);

// Both the first object and the returned value are now { key1: val1, key2: val2, key3: val3 }
</code></pre>
<h3 id="fn-extend">
                  <a href="#fn-extend"><code>$.fn.extend()</code></a>
                </h3>
<p>This method extends the prototype chain of <code>$</code>, adding new methods.</p>
<pre><code class="language-js">$.fn.extend({
  customFunc: function () {}
});

// Now you can use the extended method like this
$(document).customFunc();
</code></pre>
<h2 id="api-url">
                  <a href="#api-url">URL</a>
                </h2>
<h3 id="d-param">
                  <a href="#d-param"><code>$.param()</code></a>
                </h3>
<p>This method serializes an array or an object into a string that can be used as a URL query string.</p>
<pre><code class="language-js">$.param({ width: 1680, height: 1050 });
// Returns: &quot;width=1680&amp;height=1050&quot;

$.param({ foo: { one: 1, two: 2 } });
// Returns: &quot;foo[one]=1&amp;foo[two]=2&quot;

$.param({ ids: [1, 2, 3] });
// Returns: &quot;ids[]=1&amp;ids[]=2&amp;ids[]=3&quot;
</code></pre>
<p>If the parameter passed is an array, it should be in the format returned by the [<code>.serializeArray()</code>] method.</p>
<pre><code class="language-js">$.param([
  { &quot;name&quot;: &quot;name&quot;, &quot;value&quot;: &quot;mdui&quot; },
  { &quot;name&quot;: &quot;password&quot;, &quot;value&quot;: &quot;123456&quot; }
]);
// Returns: &quot;name=mdui&amp;password=123456&quot;
</code></pre>
<h2 id="api-array">
                  <a href="#api-array">Array and Object Operations</a>
                </h2>
<h3 id="d-each">
                  <a href="#d-each"><code>$.each()</code></a>
                </h3>
<p>This method iterates over an array or object. It returns the first parameter, which is the array or object being traversed.</p>
<p>The callback function&#39;s first parameter is the index for arrays or the key for objects. The second parameter is the value at the corresponding position.</p>
<p>The <code>this</code> keyword in the callback function refers to the current value. If the callback function returns <code>false</code>, the iteration stops.</p>
<pre><code class="language-js">// Iterate over an array
$.each([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;], function (index, value) {
  console.log(index + &#39;:&#39; + value);
});

// Result:
// 0:a
// 1:b
// 2:c
</code></pre>
<pre><code class="language-js">// Iterate over an object
$.each({&#39;name&#39;: &#39;mdui&#39;, &#39;lang&#39;: &#39;zh&#39;}, function (key, value) {
  console.log(key + &#39;:&#39; + value);
});

// Result:
// name:mdui
// lang:zh
</code></pre>
<h3 id="d-merge">
                  <a href="#d-merge"><code>$.merge()</code></a>
                </h3>
<p>This method appends the elements of the second array to the first array and returns the merged array.</p>
<pre><code class="language-js">const first = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];
const second = [&#39;c&#39;, &#39;d&#39;, &#39;e&#39;];
const result = $.merge(first, second);

console.log(first); // [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;]
console.log(result); // [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;]
</code></pre>
<h3 id="d-unique">
                  <a href="#d-unique"><code>$.unique()</code></a>
                </h3>
<p>This method removes duplicate elements from an array.</p>
<pre><code class="language-js">const result = $.unique([1, 2, 12, 3, 2, 1, 2, 1, 1, 1, 1]);
console.log(result); // [1, 2, 12, 3]
</code></pre>
<h3 id="d-map">
                  <a href="#d-map"><code>$.map()</code></a>
                </h3>
<p>This method iterates over an array or object, applying a function to each element, and returns a new array composed of the function&#39;s return values.</p>
<p>The callback function&#39;s first parameter is the current element&#39;s value, and the second parameter is the index for arrays or the key for objects.</p>
<p>The callback function can return any value. If it returns an array, the array will be flattened. If it returns <code>null</code> or <code>undefined</code>, the value will be ignored. The <code>this</code> keyword inside the function refers to the global window object.</p>
<pre><code class="language-js">// Iterate over an array
const result = $.map([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;], function (value, index) {
  return index + value;
});
console.log(result); // [&#39;0a&#39;, &#39;1b&#39;, &#39;2c&#39;]
</code></pre>
<pre><code class="language-js">// When the callback function returns an array, it will be flattened
const result = $.map([1, 2, 3], function (value, index) {
  return [value, value + 1];
});
console.log(result); // [1, 2, 2, 3, 3, 4]
</code></pre>
<pre><code class="language-js">// Iterate over an object
const result = $.map({ name: &#39;mdui&#39;, password: &#39;123456&#39; }, function (value, key) {
  return key + &#39;:&#39; + value;
});
console.log(result); // [&#39;name:mdui&#39;, &#39;password:123456&#39;]
</code></pre>
<h3 id="d-contains">
                  <a href="#d-contains"><code>$.contains()</code></a>
                </h3>
<p>This method checks if a parent node contains a child node, returning a boolean value.</p>
<pre><code class="language-js">$.contains(document, document.body); // true
$.contains(document.body, document); // false
</code></pre>
<h2 id="api-type">
                  <a href="#api-type">Data Type Checking</a>
                </h2>
<h3 id="is">
                  <a href="#is"><code>.is()</code></a>
                </h3>
<p>This method checks if at least one element in the collection matches the specified parameter. It returns a boolean value.</p>
<p>The parameter can be a CSS selector, a DOM element, an array of DOM elements, a JQ object, or a function.</p>
<p>When the parameter is a function, it takes the index and current element as arguments. <code>this</code> refers to the current element. The function should return <code>true</code> if the element matches, and <code>false</code> otherwise.</p>
<pre><code class="language-js">$(&#39;.box&#39;).is(&#39;.box&#39;); // true
$(&#39;.box&#39;).is(&#39;.boxss&#39;); // false
$(&#39;.box&#39;).is($(&#39;.box&#39;)[0]); // true
</code></pre>
<pre><code class="language-js">// Using a function for comparison
$(document).is(function (index, element) {
  return element === document;
});
// true
</code></pre>
<h2 id="api-object">
                  <a href="#api-object">Object Access</a>
                </h2>
<h3 id="length">
                  <a href="#length"><code>.length</code></a>
                </h3>
<p>This property returns the number of elements in the current collection.</p>
<pre><code class="language-js">$(&#39;body&#39;).length; // 1
</code></pre>
<h3 id="each">
                  <a href="#each"><code>.each()</code></a>
                </h3>
<p>This method iterates over the current collection, executing a function for each element. The iteration stops if the function returns <code>false</code>.</p>
<p>The function&#39;s first parameter is the element&#39;s index, and the second is the current element. <code>this</code> refers to the current element.</p>
<pre><code class="language-js">$(&#39;img&#39;).each(function(index, element) {
  this.src = &#39;test&#39; + index + &#39;.jpg&#39;;
});
</code></pre>
<h3 id="map">
                  <a href="#map"><code>.map()</code></a>
                </h3>
<p>This method iterates over the current collection, executing a function for each element. It returns a new collection composed of the function&#39;s return values.</p>
<p>The function can return a single value or an array. If it returns an array, the elements are added to the new collection. <code>null</code> or <code>undefined</code> returns are ignored.</p>
<p>The function&#39;s first parameter is the element&#39;s index, and the second is the current element. <code>this</code> refers to the current element.</p>
<pre><code class="language-js">const result = $(&#39;input.checked&#39;).map(function (i, element) {
  return element.value;
});

// result is a JQ object of values from matching elements
</code></pre>
<h3 id="eq">
                  <a href="#eq"><code>.eq()</code></a>
                </h3>
<p>This method returns a collection containing only the element at the specified index.</p>
<pre><code class="language-js">$(&#39;div&#39;).eq(0); // Returns a collection with the first div
$(&#39;div&#39;).eq(-1); // Returns a collection with the last div
$(&#39;div&#39;).eq(-2); // Returns a collection with the second-to-last div
</code></pre>
<h3 id="first">
                  <a href="#first"><code>.first()</code></a>
                </h3>
<p>This method returns a collection containing only the first element of the current collection.</p>
<pre><code class="language-js">$(&#39;div&#39;).first(); // Returns a collection with the first div
</code></pre>
<h3 id="last">
                  <a href="#last"><code>.last()</code></a>
                </h3>
<p>This method returns a collection containing only the last element of the current collection.</p>
<pre><code class="language-js">$(&#39;div&#39;).last(); // Returns a collection with the last div
</code></pre>
<h3 id="get">
                  <a href="#get"><code>.get()</code></a>
                </h3>
<p>This method returns the element at the specified index. If no parameter is passed, it returns an array of all elements in the collection.</p>
<pre><code class="language-js">$(&#39;div&#39;).get(); // Returns an array of all div elements
$(&#39;div&#39;).get(0); // Returns the first div element
$(&#39;div&#39;).get(-1); // Returns the last div element
</code></pre>
<h3 id="index">
                  <a href="#index"><code>.index()</code></a>
                </h3>
<p>This method returns the index of the first element in the current collection relative to its sibling elements if no parameter is passed.</p>
<p>If a CSS selector is passed as a parameter, it returns the index relative to the elements matched by the selector.</p>
<p>If a DOM element or a JQ object is passed as a parameter, it returns the index of that element within the current collection.</p>
<pre><code class="language-html">&lt;div id=&quot;child&quot;&gt;
  &lt;div id=&quot;child1&quot;&gt;&lt;/div&gt;
  &lt;div id=&quot;child2&quot;&gt;&lt;/div&gt;
  &lt;div id=&quot;child3&quot;&gt;&lt;/div&gt;
  &lt;div id=&quot;child4&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre>
<pre><code class="language-js">$(&#39;#child3&#39;).index(); // 2
$(&#39;#child3&#39;).index(&#39;#child div&#39;); // 2
$(&#39;#child div&#39;).index($(&#39;#child3&#39;).get(0)); // 2
</code></pre>
<h3 id="slice">
                  <a href="#slice"><code>.slice()</code></a>
                </h3>
<p>This method returns a subset of the current collection.</p>
<p>The first parameter is the start position, and the second is the end position (exclusive). If the second parameter is omitted, the method includes all elements from the start position to the end of the collection.</p>
<pre><code class="language-js">$(&#39;div&#39;).slice(3); // Returns all elements from the third position onwards
$(&#39;div&#39;).slice(3, 5); // Returns elements from the third to the fifth position (excluding the fifth)
</code></pre>
<h3 id="filter">
                  <a href="#filter"><code>.filter()</code></a>
                </h3>
<p>This method filters the current collection based on the specified criteria.</p>
<p>The parameter can be a CSS selector, a DOM element, an array of DOM elements, or a callback function that returns a boolean.</p>
<p>When the parameter is a callback, it takes the index of the element and the current element as arguments. <code>this</code> refers to the current element. If the function returns <code>true</code>, the element is included in the result; if <code>false</code>, it&#39;s excluded.</p>
<pre><code class="language-js">// Filters all div elements that contain the class .box
$(&#39;div&#39;).filter(&#39;.box&#39;);

// Filters all selected options
$(&#39;#select option&#39;).filter(function (index, element) {
  return element.selected;
});
</code></pre>
<h3 id="not">
                  <a href="#not"><code>.not()</code></a>
                </h3>
<p>This method excludes elements from the current collection that match the specified criteria.</p>
<p>The parameter can be a CSS selector, a DOM element, an array of DOM elements, a JQ object, or a callback function returning a boolean.</p>
<p>When the parameter is a callback, the function&#39;s first parameter is the index of the element, the second is the current element, and <code>this</code> refers to the current element. If the function returns <code>true</code>, the element is excluded; if <code>false</code>, it&#39;s included.</p>
<pre><code class="language-js">// Exclude all div elements that contain the class .box
$(&#39;div&#39;).not(&#39;.box&#39;);

// Exclude all unselected options
$(&#39;#select option&#39;).not(function (index, element) {
  return element.selected;
});
</code></pre>
<h2 id="api-css">
                  <a href="#api-css">CSS Classes</a>
                </h2>
<h3 id="hasClass">
                  <a href="#hasClass"><code>.hasClass()</code></a>
                </h3>
<p>This method checks if the first element in the collection has the specified CSS class.</p>
<pre><code class="language-js">// Returns true if the first div has the class .item
$(&#39;div&#39;).hasClass(&#39;item&#39;);
</code></pre>
<h3 id="addClass">
                  <a href="#addClass"><code>.addClass()</code></a>
                </h3>
<p>This method adds CSS classes to each element in the collection. You can add multiple class names by separating them with spaces.</p>
<p>The parameter can be a string or a callback function that returns a CSS class name. The callback function&#39;s first parameter is the element&#39;s index, the second is the existing CSS class name, and <code>this</code> refers to the current element.</p>
<pre><code class="language-js">// Adds .item to all div elements
$(&#39;div&#39;).addClass(&#39;item&#39;);

// Adds .item1 and .item2 to all div elements
$(&#39;div&#39;).addClass(&#39;item1 item2&#39;);

// Adds CSS classes returned by the callback function to all div elements
$(&#39;div&#39;).addClass(function (index, currentClassName) {
  return currentClassName + &#39;-&#39; + index;
});
</code></pre>
<h3 id="removeClass">
                  <a href="#removeClass"><code>.removeClass()</code></a>
                </h3>
<p>This method removes specified CSS classes from each element in the collection. You can remove multiple class names by separating them with spaces.</p>
<p>The parameter can be a string or a callback function that returns a CSS class name. The callback function&#39;s first parameter is the element&#39;s index, the second is the existing CSS class name, and <code>this</code> refers to the current element.</p>
<p>If no parameter is passed, it will remove the <code>class</code> attribute from the elements.</p>
<pre><code class="language-js">// Removes .item from all div elements
$(&#39;div&#39;).removeClass(&#39;item&#39;);

// Removes .item1 and .item2 from all div elements
$(&#39;div&#39;).removeClass(&#39;item1 item2&#39;);

// Removes CSS classes returned by the callback function from all div elements
$(&#39;div&#39;).removeClass(function (index, currentClassName) {
  return &#39;item&#39;;
});
</code></pre>
<h3 id="toggleClass">
                  <a href="#toggleClass"><code>.toggleClass()</code></a>
                </h3>
<p>This method toggles CSS classes for each element in the collection. If a class exists, it&#39;s removed; if it doesn&#39;t exist, it&#39;s added. You can toggle multiple class names by separating them with spaces.</p>
<p>The parameter can be a string or a callback function that returns a CSS class name. The callback function&#39;s first parameter is the element&#39;s index, the second is the existing CSS class name, and <code>this</code> refers to the current element.</p>
<pre><code class="language-js">// Toggles .item on all div elements
$(&#39;div&#39;).toggleClass(&#39;item&#39;);

// Toggles .item1 and .item2 on all div elements
$(&#39;div&#39;).toggleClass(&#39;item1 item2&#39;);

// Toggles CSS classes returned by the callback function on all div elements
$(&#39;div&#39;).toggleClass(function (index, currentClassName) {
  return &#39;item&#39;;
});
</code></pre>
<h2 id="api-attr">
                  <a href="#api-attr">Element Properties</a>
                </h2>
<h3 id="prop">
                  <a href="#prop"><code>.prop()</code></a>
                </h3>
<p>This method retrieves the JavaScript property value of the first element in the collection.</p>
<pre><code class="language-js">// Get the &#39;checked&#39; property value of the first input element
$(&#39;input&#39;).prop(&#39;checked&#39;);
</code></pre>
<p>This method can also set JavaScript property values for all elements in the collection.</p>
<p>The property value can be any type, or the return value of a callback function. The callback function&#39;s first parameter is the element&#39;s index, the second is the existing property value, and <code>this</code> refers to the current element.</p>
<p>If the property value or the callback function&#39;s return value is <code>undefined</code>, the original property remains unchanged.</p>
<pre><code class="language-js">// Set the &#39;checked&#39; property to true for all input elements
$(&#39;input&#39;).prop(&#39;checked&#39;, true);

// Toggle the &#39;checked&#39; property for all input elements
$(&#39;input&#39;).prop(&#39;checked&#39;, function (index, oldPropValue) {
  return true;
});
</code></pre>
<p>You can also set multiple properties at once by passing an object.</p>
<pre><code class="language-js">// Set multiple property values for the elements
$(&#39;input&#39;).prop({
  checked: false,
  disabled: function (index, oldPropValue) {
    return true;
  }
});
</code></pre>
<h3 id="removeProp">
                  <a href="#removeProp"><code>.removeProp()</code></a>
                </h3>
<p>This method removes the specified JavaScript property from all elements in the collection.</p>
<pre><code class="language-js">$(&#39;input&#39;).removeProp(&#39;disabled&#39;);
</code></pre>
<h3 id="attr">
                  <a href="#attr"><code>.attr()</code></a>
                </h3>
<p>This method retrieves the HTML attribute value of the first element in the collection.</p>
<pre><code class="language-js">// Get the &#39;username&#39; attribute value of the first div element
$(&#39;div&#39;).attr(&#39;username&#39;);
</code></pre>
<p>This method can also set HTML attribute values for all elements in the collection.</p>
<p>The attribute value can be a string, a number, or the return value of a callback function. The callback function&#39;s first parameter is the element&#39;s index, the second is the existing attribute value, and <code>this</code> refers to the current element.</p>
<p>If the attribute value or the callback function&#39;s return value is <code>null</code>, the specified attribute will be removed. If it&#39;s <code>undefined</code>, the original attribute remains unchanged.</p>
<pre><code class="language-js">// Set the &#39;username&#39; attribute to &#39;mdui&#39; for all div elements
$(&#39;div&#39;).attr(&#39;username&#39;, &#39;mdui&#39;);

// Set the &#39;username&#39; attribute to &#39;mdui&#39; for all div elements
$(&#39;div&#39;).attr(&#39;username&#39;, function (index, oldAttrValue) {
  return &#39;mdui&#39;;
});
</code></pre>
<p>You can also set multiple attributes at once by passing an object.</p>
<pre><code class="language-js">// Set multiple attribute values for all div elements
$(&#39;div&#39;).attr({
  username: &#39;mdui&#39;,
  lastname: function (index, oldAttrValue) {
    return &#39;test&#39;;
  }
});
</code></pre>
<h3 id="removeAttr">
                  <a href="#removeAttr"><code>.removeAttr()</code></a>
                </h3>
<p>This method removes specified attributes from all elements in the collection. Multiple attribute names can be separated by spaces.</p>
<pre><code class="language-js">// Remove &#39;username&#39; attribute from all div elements
$(&#39;div&#39;).removeAttr(&#39;username&#39;);

// Remove &#39;username&#39; and &#39;lastname&#39; attributes from all div elements
$(&#39;div&#39;).removeAttr(&#39;username lastname&#39;);
</code></pre>
<h3 id="val">
                  <a href="#val"><code>.val()</code></a>
                </h3>
<p>This method retrieves the value of the first element in the collection.</p>
<p>For a <code>&lt;select multiple=&quot;multiple&quot;&gt;</code> element, it returns an array containing the values of each selected option.</p>
<pre><code class="language-js">// Get the value of the first selected element
$(&#39;#input&#39;).val();
</code></pre>
<p>This method can also set values for all elements in the collection.</p>
<p>The value can be a string, a number, an array (for <code>&lt;select multiple=&quot;multiple&quot;&gt;</code>, <code>&lt;input type=&quot;checkbox&quot;&gt;</code>, <code>&lt;input type=&quot;radio&quot;&gt;</code>, or <code>&lt;option&gt;</code>), or the return value of a callback function. The callback function&#39;s first parameter is the element&#39;s index, the second is the existing value, and <code>this</code> refers to the current element.</p>
<p>If the value or the callback function&#39;s return value is <code>undefined</code>, the element&#39;s value will be set to an empty string.</p>
<pre><code class="language-js">// Set the value to &#39;mdui&#39; for all selected elements
$(&#39;#input&#39;).val(&#39;mdui&#39;);

// Set the value to &#39;mdui&#39; for all selected elements
$(&#39;#input&#39;).val(function (index, oldValue) {
  return &#39;mdui&#39;;
});
</code></pre>
<h3 id="text">
                  <a href="#text"><code>.text()</code></a>
                </h3>
<p>This method retrieves the combined text content of all elements in the collection, including their descendants.</p>
<pre><code class="language-js">// Get the text content of all .box elements
$(&#39;.box&#39;).text();
</code></pre>
<p>This method can also set the text content for all elements in the collection.</p>
<p>The value can be a string, a number, a boolean, or the return value of a callback function. The callback function&#39;s first parameter is the element&#39;s index, the second is the existing text content, and <code>this</code> refers to the current element.</p>
<p>If the value or the callback function&#39;s return value is <code>undefined</code>, the original text content remains unchanged.</p>
<pre><code class="language-js">// Set the text content for all .box elements
$(&#39;.box&#39;).text(&#39;text content&#39;);

// Set the text content using the return value of the callback function
$(&#39;.box&#39;).text(function (index, oldTextContent) {
  return &#39;new text content&#39;;
});
</code></pre>
<h3 id="html">
                  <a href="#html"><code>.html()</code></a>
                </h3>
<p>This method retrieves the HTML content of the first element in the collection.</p>
<pre><code class="language-js">// Get the HTML content of the first .box element
$(&#39;.box&#39;).html();
</code></pre>
<p>This method can also set the HTML content for all elements in the collection.</p>
<p>The value can be an HTML string, a DOM element, or the return value of a callback function. The callback function&#39;s first parameter is the element&#39;s index, the second is the existing HTML content, and <code>this</code> refers to the current element.</p>
<p>If the value or the callback function&#39;s return value is <code>undefined</code>, the original HTML content remains unchanged.</p>
<pre><code class="language-js">// Set the HTML content for all .box elements
$(&#39;.box&#39;).html(&#39;&lt;div&gt;new html content&lt;/div&gt;&#39;);

// Set the HTML content using the return value of the callback function
$(&#39;.box&#39;).html(function (index, oldHTMLContent) {
  return &#39;&lt;div&gt;new html content&lt;/div&gt;&#39;;
});
</code></pre>
<h2 id="api-data">
                  <a href="#api-data">Data Storage</a>
                </h2>
<h3 id="d-data">
                  <a href="#d-data"><code>$.data()</code></a>
                </h3>
<p>This method stores or retrieves data on a specified element.</p>
<p>If the value is <code>undefined</code> when storing data, it is equivalent to reading the corresponding data on the element. For example, <code>$.data(element, &#39;key&#39;, undefined)</code> is equivalent to <code>$.data(element, &#39;key&#39;)</code>.</p>
<p>Note: This method does not retrieve <code>data-*</code> attributes on the element.</p>
<pre><code class="language-js">// Store data on the specified element and return the stored value
$.data(document.body, &#39;layout&#39;, &#39;dark&#39;); // Returns &#39;dark&#39;

// Store multiple data on the specified element simultaneously
$.data(document.body, {
  primary: &#39;indigo&#39;,
  accent: &#39;pink&#39;,
}); // Returns { primary: &#39;indigo&#39;, accent: &#39;pink&#39; }

// Retrieve stored data on the specified element
$.data(document.body, &#39;layout&#39;); // Returns &#39;dark&#39;

// Retrieve all stored data on the specified element
$.data(document.body); // Returns { layout: &#39;dark&#39;, primary: &#39;indigo&#39;, accent: &#39;pink&#39; }
</code></pre>
<h3 id="d-removeData">
                  <a href="#d-removeData"><code>$.removeData()</code></a>
                </h3>
<p>This method removes stored data from the specified element.</p>
<p>Multiple keys can be specified either as a space-separated string or as an array. If no keys are provided, all data on the element is removed.</p>
<pre><code class="language-js">// Remove &#39;name&#39; data from the element
$.removeData(document.body, &#39;name&#39;);

// Remove &#39;name1&#39; and &#39;name2&#39; data from the element. The following two methods are equivalent:
$.removeData(document.body, &#39;name1 name2&#39;);
$.removeData(document.body, [&#39;name1&#39;, &#39;name2&#39;]);

// Remove all stored data from the element
$.removeData(document.body);
</code></pre>
<h3 id="data">
                  <a href="#data"><code>.data()</code></a>
                </h3>
<p>This method retrieves or stores data on the elements in the current collection.</p>
<p>If the value is <code>undefined</code> when storing data, it will not be stored.</p>
<p>Note: This method include <code>data-*</code> attributes on the elements when retrieving data.</p>
<pre><code class="language-js">// Store data on elements in the current collection
$(&#39;.box&#39;).data(&#39;layout&#39;, &#39;dark&#39;);

// Store multiple data on elements in the current collection simultaneously
$(&#39;.box&#39;).data({
  primary: &#39;indigo&#39;,
  accent: &#39;pink&#39;,
});

// Retrieve specified data stored on the first element in the current collection
$(&#39;.box&#39;).data(&#39;layout&#39;); // Returns &#39;dark&#39;

// Retrieve all stored data on the first element in the current collection
$(&#39;.box&#39;).data(); // Returns { layout: &#39;dark&#39;, primary: &#39;indigo&#39;, accent: &#39;pink&#39; }
</code></pre>
<h3 id="removeData">
                  <a href="#removeData"><code>.removeData()</code></a>
                </h3>
<p>This method removes stored data from elements in the current collection.</p>
<p>Multiple keys can be specified either as a space-separated string or as an array. If no keys are provided, all data is removed.</p>
<p>Note: This method only removes data set by the <code>.data()</code> method and does not affect <code>data-*</code> attributes.</p>
<pre><code class="language-js">// Remove &#39;name&#39; data from elements in the current collection
$(&#39;.box&#39;).removeData(&#39;name&#39;);

// Remove &#39;name1&#39; and &#39;name2&#39; data from elements in the current collection. The following two methods are equivalent:
$(&#39;.box&#39;).removeData(&#39;name1 name2&#39;);
$(&#39;.box&#39;).removeData([&#39;name1&#39;, &#39;name2&#39;]);

// Remove all stored data from elements in the current collection
$(&#39;.box&#39;).removeData();
</code></pre>
<h2 id="api-style">
                  <a href="#api-style">Styles</a>
                </h2>
<h3 id="css">
                  <a href="#css"><code>.css()</code></a>
                </h3>
<p>This method retrieves the CSS property value of the first element in the collection.</p>
<pre><code class="language-js">$(&#39;.box&#39;).css(&#39;color&#39;);
</code></pre>
<p>This method can also set the CSS property values for all elements in the collection.</p>
<p>The value can be a string, a number, or the return value of a callback function. The callback function&#39;s first parameter is the element&#39;s index, the second is the existing CSS property value, and <code>this</code> refers to the current element.</p>
<p>If the value or the callback function&#39;s return value is <code>undefined</code>, the CSS property value remains unchanged. If it&#39;s <code>null</code>, the corresponding CSS property is removed. If it&#39;s a number, <code>px</code> is automatically added as the unit unless the property doesn&#39;t support px.</p>
<pre><code class="language-js">// Set the &#39;color&#39; CSS property value
$(&#39;.box&#39;).css(&#39;color&#39;, &#39;red&#39;)

// Set the &#39;color&#39; CSS property value using the return value of the callback function
$(&#39;.box&#39;).css(&#39;color&#39;, function (index, oldCSSValue) {
  return &#39;green&#39;;
});

// Set multiple styles simultaneously by passing an object
$(&#39;.box&#39;).css({
  &#39;background-color&#39;: &#39;white&#39;,
  color: function (index, oldCSSValue) {
    return &#39;blue&#39;;
  },
});
</code></pre>
<h3 id="width">
                  <a href="#width"><code>.width()</code></a>
                </h3>
<p>This method retrieves the width (in pixels) of the first element in the collection, excluding <code>padding</code>, <code>border</code>, and <code>margin</code>.</p>
<pre><code class="language-js">$(&#39;.box&#39;).width();
</code></pre>
<p>This method can also set the width (excluding <code>padding</code>, <code>border</code>, and <code>margin</code>) for all elements in the collection.</p>
<p>The value can be a string with units, a number, or the return value of a callback function. The callback function&#39;s first parameter is the element&#39;s index, the second is the existing width, and <code>this</code> refers to the current element.</p>
<p>If the value or the callback function&#39;s return value is <code>null</code> or <code>undefined</code>, the width remains unchanged. If it&#39;s a number, <code>px</code> is automatically added as the unit.</p>
<pre><code class="language-js">// Set the width
$(&#39;.box&#39;).width(&#39;20%&#39;);

// Numeric values default to &#39;px&#39; units
$(&#39;.box&#39;).width(10);

// Set the width using a callback function
$(&#39;.box&#39;).width(function (index, oldWidth) {
  return 10;
});
</code></pre>
<h3 id="height">
                  <a href="#height"><code>.height()</code></a>
                </h3>
<p>This method retrieves the height (in pixels) of the first element in the collection, excluding <code>padding</code>, <code>border</code>, and <code>margin</code>.</p>
<pre><code class="language-js">$(&#39;.box&#39;).height();
</code></pre>
<p>This method can also set the height (excluding <code>padding</code>, <code>border</code>, and <code>margin</code>) for all elements in the collection.</p>
<p>The value can be a string with units, a number, or the return value of a callback function. The callback function&#39;s first parameter is the element&#39;s index, the second is the existing height, and <code>this</code> refers to the current element.</p>
<p>If the value or the callback function&#39;s return value is <code>null</code> or <code>undefined</code>, the height remains unchanged. If it&#39;s a number, <code>px</code> is automatically added as the unit.</p>
<pre><code class="language-js">// Set the height
$(&#39;.box&#39;).height(&#39;20%&#39;);

// Numeric values default to &#39;px&#39; units
$(&#39;.box&#39;).height(10);

// Set the height using a callback function
$(&#39;.box&#39;).height(function (index, oldWidth) {
  return 10;
});
</code></pre>
<h3 id="innerWidth">
                  <a href="#innerWidth"><code>.innerWidth()</code></a>
                </h3>
<p>This method retrieves the width (in pixels) of the first element in the collection, including <code>padding</code> but excluding <code>border</code> and <code>margin</code>.</p>
<pre><code class="language-js">$(&#39;.box&#39;).innerWidth();
</code></pre>
<p>This method can also set the width (including <code>padding</code> but excluding <code>border</code> and <code>margin</code>) for all elements in the collection.</p>
<p>The value can be a string with units, a number, or the return value of a callback function. The callback function&#39;s first parameter is the element&#39;s index, the second is the existing width, and <code>this</code> refers to the current element.</p>
<p>If the value or the callback function&#39;s return value is <code>null</code> or <code>undefined</code>, the width remains unchanged. If it&#39;s a number, <code>px</code> is automatically added as the unit.</p>
<pre><code class="language-js">// Set the width
$(&#39;.box&#39;).innerWidth(&#39;20%&#39;);

// Numeric values default to &#39;px&#39; units
$(&#39;.box&#39;).innerWidth(10);

// Set the width using the return value of a callback function
$(&#39;.box&#39;).innerWidth(function (index, oldWidth) {
  return 10;
});
</code></pre>
<h3 id="innerHeight">
                  <a href="#innerHeight"><code>.innerHeight()</code></a>
                </h3>
<p>This method retrieves the height (in pixels) of the first element in the collection, including <code>padding</code> but excluding <code>border</code> and <code>margin</code>.</p>
<pre><code class="language-js">$(&#39;.box&#39;).innerHeight();
</code></pre>
<p>This method can also set the height (including <code>padding</code>, excluding <code>border</code> and <code>margin</code>) for all elements in the collection.</p>
<p>The value can be a string with units, a number, or the return value of a callback function. The callback function&#39;s first parameter is the element&#39;s index, the second is the existing height, and <code>this</code> refers to the current element.</p>
<p>If the value or the callback function&#39;s return value is <code>null</code> or <code>undefined</code>, the height remains unchanged. If it&#39;s a number, <code>px</code> is automatically added as the unit.</p>
<pre><code class="language-js">// Set the height
$(&#39;.box&#39;).innerHeight(&#39;20%&#39;);

// Numeric values default to &#39;px&#39; units
$(&#39;.box&#39;).innerHeight(10);

// Set the height using the return value of a callback function
$(&#39;.box&#39;).innerHeight(function (index, oldHeight) {
  return 10;
});
</code></pre>
<h3 id="outerWidth">
                  <a href="#outerWidth"><code>.outerWidth()</code></a>
                </h3>
<p>This method retrieves the width (in pixels) of the first element in the collection, including <code>padding</code> and <code>border</code>, but excluding <code>margin</code>. If <code>true</code> is passed as a parameter, the <code>margin</code> width is included.</p>
<pre><code class="language-js">// Width including padding and border
$(&#39;.box&#39;).outerWidth();

// Width including padding, border, and margin
$(&#39;.box&#39;).outerWidth(true);
</code></pre>
<p>This method can also set the width (including <code>padding</code> and <code>border</code>, excluding <code>margin</code>) for all elements in the collection.</p>
<p>The value can be a string with units, a number, or the return value of a callback function. The callback function&#39;s first parameter is the element&#39;s index, the second is the existing width, and <code>this</code> refers to the current element.</p>
<p>If the value or the callback function&#39;s return value is <code>null</code> or <code>undefined</code>, the width remains unchanged. If it&#39;s a number, <code>px</code> is automatically added as the unit.</p>
<pre><code class="language-js">// Set the width
$(&#39;.box&#39;).outerWidth(&#39;20%&#39;);

// Numeric values default to &#39;px&#39; units
$(&#39;.box&#39;).outerWidth(10);

// Include margin width by passing true as the second parameter
$(&#39;.box&#39;).outerWidth(10, true);

// Set width using the return value of a callback function
$(&#39;.box&#39;).outerWidth(function (index, oldWidth) {
  return 10;
});
</code></pre>
<h3 id="outerHeight">
                  <a href="#outerHeight"><code>.outerHeight()</code></a>
                </h3>
<p>This method retrieves the height (in pixels) of the first element in the collection, including <code>padding</code> and <code>border</code>, but excluding <code>margin</code>. If <code>true</code> is passed as a parameter, the <code>margin</code> height is included.</p>
<pre><code class="language-js">// Height including padding and border
$(&#39;.box&#39;).outerHeight();

// Height including padding, border, and margin
$(&#39;.box&#39;).outerHeight(true);
</code></pre>
<p>This method can also set the height (including <code>padding</code> and <code>border</code>, excluding <code>margin</code>) for all elements in the collection.</p>
<p>The value can be a string with units, a number, or the return value of a callback function. The callback function&#39;s first parameter is the element&#39;s index, the second is the existing height, and <code>this</code> refers to the current element.</p>
<p>If the value or the callback function&#39;s return value is <code>null</code> or <code>undefined</code>, the height remains unchanged. If it&#39;s a number, <code>px</code> is automatically added as the unit.</p>
<pre><code class="language-js">// Set the height
$(&#39;.box&#39;).outerHeight(&#39;20%&#39;);

// Numeric values default to &#39;px&#39; units
$(&#39;.box&#39;).outerHeight(10);

// Include margin height by passing true as the second parameter
$(&#39;.box&#39;).outerHeight(10, true);

// Set height using the return value of a callback function
$(&#39;.box&#39;).outerHeight(function (index, oldWidth) {
  return 10;
});
</code></pre>
<h3 id="hide">
                  <a href="#hide"><code>.hide()</code></a>
                </h3>
<p>This method hides all elements in the collection.</p>
<pre><code class="language-js">$(&#39;.box&#39;).hide();
</code></pre>
<h3 id="show">
                  <a href="#show"><code>.show()</code></a>
                </h3>
<p>This method displays all elements in the collection.</p>
<pre><code class="language-js">$(&#39;.box&#39;).show();
</code></pre>
<h3 id="toggle">
                  <a href="#toggle"><code>.toggle()</code></a>
                </h3>
<p>This method toggles the visibility of all elements in the collection.</p>
<pre><code class="language-js">$(&#39;.box&#39;).toggle();
</code></pre>
<h3 id="offset">
                  <a href="#offset"><code>.offset()</code></a>
                </h3>
<p>This method retrieves the coordinates of the first element in the collection relative to the <code>document</code>.</p>
<pre><code class="language-js">$(&#39;.box&#39;).offset(); // { top: 20, left: 30 }
</code></pre>
<p>This method can also set the coordinates for all elements in the collection relative to the <code>document</code>.</p>
<p>The parameter can be an object with <code>top</code> and <code>left</code> properties, or a callback function returning such an object. The callback function&#39;s first parameter is the element&#39;s index, the second is the existing coordinates, and <code>this</code> refers to the current element.</p>
<p>If <code>top</code> or <code>left</code> in the parameter object is <code>undefined</code>, the corresponding value remains unchanged.</p>
<pre><code class="language-js">// Set the coordinates
$(&#39;.box&#39;).offset({ top: 20, left: 30 });

// Set coordinates using a callback function
$(&#39;.box&#39;).offset(function (index, oldOffset) {
  return { top: 20, left: 30 };
});
</code></pre>
<h3 id="offsetParent">
                  <a href="#offsetParent"><code>.offsetParent()</code></a>
                </h3>
<p>This method returns the closest parent element with a <code>position</code> value of <code>relative</code> or <code>absolute</code> for the first element in the collection.</p>
<pre><code class="language-js">$(&#39;.box&#39;).offsetParent();
</code></pre>
<h3 id="position">
                  <a href="#position"><code>.position()</code></a>
                </h3>
<p>This method retrieves the offset of the first element in the collection relative to its positioned parent.</p>
<pre><code class="language-js">$(&#39;.box&#39;).position(); // { top: 20, left: 30 }
</code></pre>
<h2 id="api-selector">
                  <a href="#api-selector">Element Lookup</a>
                </h2>
<h3 id="find">
                  <a href="#find"><code>.find()</code></a>
                </h3>
<p>This method finds a collection of specified descendant elements based on a CSS selector within the elements of the current collection.</p>
<pre><code class="language-js">// Find elements with class .box among descendants of #box
$(&#39;#box&#39;).find(&#39;.box&#39;)
</code></pre>
<h3 id="children">
                  <a href="#children"><code>.children()</code></a>
                </h3>
<p>This method retrieves a collection of immediate child elements within the elements of the current collection. A CSS selector can be passed as a parameter to filter the child elements.</p>
<pre><code class="language-js">// Find all immediate child elements of #box
$(&#39;#box&#39;).children();

// Find elements with class .box among all immediate child elements of #box
$(&#39;#box&#39;).children(&#39;.box&#39;);
</code></pre>
<h3 id="has">
                  <a href="#has"><code>.has()</code></a>
                </h3>
<p>This method filters elements within the current collection that contain a specified child element. The parameter can be a CSS selector or a DOM element.</p>
<pre><code class="language-js">// Add a background color to li elements containing ul
$(&#39;li&#39;).has(&#39;ul&#39;).css(&#39;background-color&#39;, &#39;red&#39;);
</code></pre>
<h3 id="parent">
                  <a href="#parent"><code>.parent()</code></a>
                </h3>
<p>This method retrieves a collection of direct parent elements for all elements in the current collection. A CSS selector can be passed as a parameter to filter the parent elements.</p>
<pre><code class="language-js">// Direct parent elements of .box elements
$(&#39;.box&#39;).parent();

// Direct parent elements of .box elements with class .parent
$(&#39;.box&#39;).parent(&#39;.parent&#39;);
</code></pre>
<h3 id="parents">
                  <a href="#parents"><code>.parents()</code></a>
                </h3>
<p>This method retrieves a collection of ancestor elements for all elements in the current collection. A CSS selector can be passed as a parameter to filter the ancestor elements.</p>
<pre><code class="language-js">// All ancestor elements of span elements
$(&#39;span&#39;).parents();

// All ancestor elements of span elements that are p elements
$(&#39;span&#39;).parents(&#39;p&#39;);
</code></pre>
<h3 id="parentsUntil">
                  <a href="#parentsUntil"><code>.parentsUntil()</code></a>
                </h3>
<p>This method retrieves all ancestor elements for each element in the current collection until an element matching the specified parameter is encountered (excluding the matching element).</p>
<p>The first parameter can be a CSS selector, a DOM element, or a JQ object. An optional second parameter, a CSS selector, can be passed to filter the returned elements.</p>
<p>If no parameters are given, it matches all ancestors, similar to <code>.parents()</code>.</p>
<pre><code class="language-js">// All ancestor elements of .item elements
$(&#39;.item&#39;).parentsUntil();

// Ancestor elements of .item elements until .parent
$(&#39;.item&#39;).parentsUntil(&#39;.parent&#39;);

// Ancestor div elements of .item elements until .parent
$(&#39;.item&#39;).parentsUntil(&#39;.parent&#39;, &#39;div&#39;);
</code></pre>
<h3 id="prev">
                  <a href="#prev"><code>.prev()</code></a>
                </h3>
<p>This method retrieves a collection of the immediately preceding sibling elements for all elements in the current collection. A CSS selector can be passed as a parameter to filter the sibling elements.</p>
<pre><code class="language-js">// Immediately preceding sibling elements of .box elements
$(&#39;.box&#39;).prev();

// Immediately preceding sibling div elements of .box elements
$(&#39;.box&#39;).prev(&#39;div&#39;);
</code></pre>
<h3 id="prevAll">
                  <a href="#prevAll"><code>.prevAll()</code></a>
                </h3>
<p>This method retrieves a collection of all preceding sibling elements for all elements in the current collection. A CSS selector can be passed as a parameter to filter the sibling elements.</p>
<pre><code class="language-js">// All preceding sibling elements of .box elements
$(&#39;.box&#39;).prevAll();

// All preceding sibling elements of .box elements with class .selected
$(&#39;.box&#39;).prevAll(&#39;.selected&#39;);
</code></pre>
<h3 id="prevUntil">
                  <a href="#prevUntil"><code>.prevUntil()</code></a>
                </h3>
<p>This method retrieves all preceding sibling elements for each element in the current collection until an element matching the specified parameter is encountered (excluding the matching element).</p>
<p>The first parameter can be a CSS selector, a DOM element, or a JQ object. An optional second parameter, a CSS selector, can be passed to filter the returned elements.</p>
<p>If no parameter is given, it returns all preceding siblings, similar to <code>.prevAll()</code>.</p>
<pre><code class="language-js">// All preceding sibling elements of .box elements
$(&#39;.box&#39;).prevUntil();

// Preceding sibling elements of .box elements until .until
$(&#39;.box&#39;).prevUntil(&#39;.until&#39;);

// Preceding sibling div elements of .box elements until .until
$(&#39;.box&#39;).prevUntil(&#39;.until&#39;, &#39;div&#39;);
</code></pre>
<h3 id="next">
                  <a href="#next"><code>.next()</code></a>
                </h3>
<p>This method retrieves a collection of the immediately following sibling elements for all elements in the current collection. A CSS selector can be passed as a parameter to filter the sibling elements.</p>
<pre><code class="language-js">// Immediately following sibling elements of .box elements
$(&#39;.box&#39;).next();

// Immediately following sibling div elements of .box elements
$(&#39;.box&#39;).next(&#39;div&#39;);
</code></pre>
<h3 id="nextAll">
                  <a href="#nextAll"><code>.nextAll()</code></a>
                </h3>
<p>This method retrieves a collection of all following sibling elements for all elements in the current collection. A CSS selector can be passed as a parameter to filter the sibling elements.</p>
<pre><code class="language-js">// All following sibling elements of .box elements
$(&#39;.box&#39;).nextAll();

// All following sibling elements of .box elements with class .selected
$(&#39;.box&#39;).nextAll(&#39;.selected&#39;);
</code></pre>
<h3 id="nextUntil">
                  <a href="#nextUntil"><code>.nextUntil()</code></a>
                </h3>
<p>This method retrieves all following sibling elements for each element in the current collection until an element matching the specified parameter is encountered (excluding the matching element).</p>
<p>The first parameter can be a CSS selector, a DOM element, or a JQ object. An optional second parameter, a CSS selector, can be passed to filter the returned elements.</p>
<p>If no parameter is given, it returns all following siblings, similar to <code>.nextAll()</code>.</p>
<pre><code class="language-js">// All following sibling elements of .box elements
$(&#39;.box&#39;).nextUntil();

// Following sibling elements of .box elements until .until
$(&#39;.box&#39;).nextUntil(&#39;.until&#39;);

// Following sibling div elements of .box elements until .until
$(&#39;.box&#39;).nextUntil(&#39;.until&#39;, &#39;div&#39;);
</code></pre>
<h3 id="closest">
                  <a href="#closest"><code>.closest()</code></a>
                </h3>
<p>This method traverses upwards from the current element, returning the closest matching element. The parameter can be a CSS selector, a DOM element, or a JQ object.</p>
<pre><code class="language-js">// Closest .parent element for .box elements
$(&#39;.box&#39;).closest(&#39;.parent&#39;);
</code></pre>
<h3 id="siblings">
                  <a href="#siblings"><code>.siblings()</code></a>
                </h3>
<p>This method retrieves the siblings for each element in the current collection. A CSS selector can be passed as a parameter to filter the sibling elements.</p>
<pre><code class="language-js">// All siblings for .box elements
$(&#39;.box&#39;).siblings();

// Siblings with class .selected for .box elements
$(&#39;.box&#39;).siblings(&#39;.selected&#39;);
</code></pre>
<h3 id="add">
                  <a href="#add"><code>.add()</code></a>
                </h3>
<p>This method adds elements to the current collection. The parameter can be an HTML string, CSS selector, JQ object, DOM element, an array of DOM elements, or a NodeList.</p>
<pre><code class="language-js">// Adds elements with class .selected to the current collection
$(&#39;.box&#39;).add(&#39;.selected&#39;);
</code></pre>
<h2 id="api-dom">
                  <a href="#api-dom">Element Manipulation</a>
                </h2>
<h3 id="empty">
                  <a href="#empty"><code>.empty()</code></a>
                </h3>
<p>This method removes all child elements from the current element.</p>
<pre><code class="language-js">$(&#39;.box&#39;).empty();
</code></pre>
<h3 id="remove">
                  <a href="#remove"><code>.remove()</code></a>
                </h3>
<p>This method removes elements from the DOM that are in the current collection. A CSS selector can be passed as a parameter to only remove elements that match the parameter.</p>
<pre><code class="language-js">// Removes all p elements
$(&#39;p&#39;).remove();

// Removes all p elements with class .box
$(&#39;p&#39;).remove(&#39;.box&#39;);
</code></pre>
<h3 id="prepend">
                  <a href="#prepend"><code>.prepend()</code></a>
                </h3>
<p>This method adds content at the beginning of the elements in the current collection.</p>
<p>It accepts an HTML string, DOM element, array of DOM elements, or JQ object as parameters. Multiple parameters can be used.</p>
<p>You can also provide a callback function that returns an HTML string, DOM element, array of DOM elements, or JQ object. The callback function&#39;s first parameter is the element&#39;s index, the second is its original HTML, and <code>this</code> refers to the current element.</p>
<p>The method returns the original collection.</p>
<pre><code class="language-js">// Insert a single element
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).prepend(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;);
// Result: &lt;p&gt;&lt;b&gt;Hello&lt;/b&gt;I would like to say: &lt;/p&gt;

// Insert multiple elements
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).prepend(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;, &#39;&lt;b&gt;World&lt;/b&gt;&#39;);
// Result: &lt;p&gt;&lt;b&gt;Hello&lt;/b&gt;&lt;b&gt;World&lt;/b&gt;I would like to say: &lt;/p&gt;

// Insert an element using a callback function
$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).append(function (index, oldHTML) {
  return &#39;&lt;b&gt;&#39; + oldHTML + index + &#39;&lt;/b&gt;&#39;;
});
// Result: &lt;p&gt;&lt;b&gt;Hello0&lt;/b&gt;Hello&lt;/p&gt;
</code></pre>
<h3 id="prependTo">
                  <a href="#prependTo"><code>.prependTo()</code></a>
                </h3>
<p>This method inserts elements from the current collection at the beginning of the specified element.</p>
<p>It accepts a CSS selector, HTML string, DOM element, array of DOM elements, or JQ object as parameters.</p>
<p>The method returns the original collection.</p>
<pre><code class="language-js">$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).prependTo(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;);
// Result: [ &lt;p&gt;&lt;p&gt;Hello&lt;/p&gt;I would like to say: &lt;/p&gt; ]
</code></pre>
<h3 id="append">
                  <a href="#append"><code>.append()</code></a>
                </h3>
<p>This method adds content at the end of the elements in the current collection.</p>
<p>It accepts an HTML string, DOM element, array of DOM elements, or JQ object as parameters. Multiple parameters can be used.</p>
<p>You can also provide a callback function that returns an HTML string, DOM element, array of DOM elements, or JQ object. The callback function&#39;s first parameter is the element&#39;s index, the second is its original HTML, and <code>this</code> refers to the current element.</p>
<p>The method returns the original collection.</p>
<pre><code class="language-js">// Insert a single element
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).append(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;);
// Result: &lt;p&gt;I would like to say: &lt;b&gt;Hello&lt;/b&gt;&lt;/p&gt;

// Insert multiple elements
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).append(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;, &#39;&lt;b&gt;World&lt;/b&gt;&#39;);
// Result: &lt;p&gt;I would like to say: &lt;b&gt;Hello&lt;/b&gt;&lt;b&gt;World&lt;/b&gt;&lt;/p&gt;

// Insert an element using a callback function
$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).append(function (index, oldHTML) {
  return &#39;&lt;b&gt;&#39; + oldHTML + index + &#39;&lt;/b&gt;&#39;;
});
// Result: &lt;p&gt;Hello&lt;b&gt;Hello0&lt;/b&gt;&lt;/p&gt;
</code></pre>
<h3 id="appendTo">
                  <a href="#appendTo"><code>.appendTo()</code></a>
                </h3>
<p>This method inserts elements from the current collection at the end of the specified element.</p>
<p>It accepts a CSS selector, HTML string, DOM element, array of DOM elements, or JQ object as parameters.</p>
<p>The method returns the original collection.</p>
<pre><code class="language-js">$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).appendTo(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;)
// Result: &lt;p&gt;I would like to say: &lt;p&gt;Hello&lt;/p&gt;&lt;/p&gt;
</code></pre>
<h3 id="after">
                  <a href="#after"><code>.after()</code></a>
                </h3>
<p>This method inserts content after the elements in the current collection.</p>
<p>It accepts an HTML string, DOM element, array of DOM elements, or JQ object as parameters. Multiple parameters can be used.</p>
<p>You can also provide a callback function that returns an HTML string, DOM element, array of DOM elements, or JQ object. The callback function&#39;s first parameter is the element&#39;s index, the second is its original HTML, and <code>this</code> refers to the current element.</p>
<p>The method returns the original collection.</p>
<pre><code class="language-js">// Insert a single element
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).after(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;);
// Result: &lt;p&gt;I would like to say: &lt;/p&gt;&lt;b&gt;Hello&lt;/b&gt;

// Insert multiple elements
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).after(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;, &#39;&lt;b&gt;World&lt;/b&gt;&#39;);
// Result: &lt;p&gt;I would like to say: &lt;/p&gt;&lt;b&gt;Hello&lt;/b&gt;&lt;b&gt;World&lt;/b&gt;

// Insert an element using a callback function
$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).after(function (index, oldHTML) {
  return &#39;&lt;b&gt;&#39; + oldHTML + index + &#39;&lt;/b&gt;&#39;;
});
// Result: &lt;p&gt;Hello&lt;/p&gt;&lt;b&gt;Hello0&lt;/b&gt;
</code></pre>
<h3 id="insertAfter">
                  <a href="#insertAfter"><code>.insertAfter()</code></a>
                </h3>
<p>This method inserts elements from the current collection after the specified element.</p>
<p>Existing elements in the collection are moved, not copied. If there are multiple targets, the elements are cloned and added after each target.</p>
<p>The method accepts a CSS selector, HTML string, DOM element, array of DOM elements, or JQ object as parameters.</p>
<pre><code class="language-js">$(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;).insertAfter(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;);
// Result: &lt;p&gt;I would like to say: &lt;/p&gt;&lt;b&gt;Hello&lt;/b&gt;
</code></pre>
<h3 id="before">
                  <a href="#before"><code>.before()</code></a>
                </h3>
<p>This method inserts content before the elements in the current collection.</p>
<p>It accepts an HTML string, DOM element, array of DOM elements, or JQ object as parameters. Multiple parameters can be used.</p>
<p>You can also provide a callback function that returns an HTML string, DOM element, array of DOM elements, or JQ object. The callback function&#39;s first parameter is the element&#39;s index, the second is its original HTML, and <code>this</code> refers to the current element.</p>
<p>The method returns the original collection.</p>
<pre><code class="language-js">// Insert a single element
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).before(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;);
// Result: &lt;b&gt;Hello&lt;/b&gt;&lt;p&gt;I would like to say: &lt;/p&gt;

// Insert multiple elements
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).before(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;, &#39;&lt;b&gt;World&lt;/b&gt;&#39;);
// Result: &lt;b&gt;Hello&lt;/b&gt;&lt;b&gt;World&lt;/b&gt;&lt;p&gt;I would like to say: &lt;/p&gt;

// Insert an element using a callback function
$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).before(function (index, oldHTML) {
  return &#39;&lt;b&gt;&#39; + oldHTML + index + &#39;&lt;/b&gt;&#39;;
});
// Result: &lt;b&gt;Hello0&lt;/b&gt;&lt;p&gt;Hello&lt;/p&gt;
</code></pre>
<h3 id="insertBefore">
                  <a href="#insertBefore"><code>.insertBefore()</code></a>
                </h3>
<p>This method inserts elements from the current collection before the specified element.</p>
<p>Existing elements in the collection are moved, not copied. If there are multiple targets, the elements are cloned and added before each target.</p>
<p>The method accepts a CSS selector, HTML string, DOM element, array of DOM elements, or JQ object as parameters.</p>
<pre><code class="language-js">$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).insertBefore(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;);
// Result: &lt;p&gt;I would like to say: &lt;/p&gt;&lt;b&gt;Hello&lt;/b&gt;
</code></pre>
<h3 id="replaceWith">
                  <a href="#replaceWith"><code>.replaceWith()</code></a>
                </h3>
<p>This method replaces the elements in the current collection with the specified content.</p>
<p>It accepts an HTML string, DOM element, array of DOM elements, or JQ object as parameters.</p>
<p>You can also provide a callback function that returns an HTML string, DOM element, array of DOM elements, or JQ object. The callback function&#39;s first parameter is the element&#39;s index, the second is its original HTML, and <code>this</code> refers to the current element.</p>
<p>The method returns the original collection, i.e., the elements that were replaced.</p>
<pre><code class="language-js">// Replace all .box elements with &lt;p&gt;Hello&lt;/p&gt;
$(&#39;.box&#39;).replaceWith(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;);

// Replace all .box elements with the return value of the callback function
$(&#39;.box&#39;).replaceWith(function (index, oldHTML) {
  return oldHTML + index;
});
</code></pre>
<h3 id="replaceAll">
                  <a href="#replaceAll"><code>.replaceAll()</code></a>
                </h3>
<p>This method replaces the specified content with the elements in the current collection.</p>
<p>The parameter can be a CSS selector, DOM element, array of DOM elements, or JQ object.</p>
<p>The method returns the original collection, i.e., the elements that were used for replacement.</p>
<pre><code class="language-js">// Replace all .box elements with .new elements
$(&#39;.new&#39;).replaceAll(&#39;.box&#39;);
</code></pre>
<h3 id="clone">
                  <a href="#clone"><code>.clone()</code></a>
                </h3>
<p>This method creates a deep copy of all elements in the current collection.</p>
<p>It uses the native <code>cloneNode</code> method and does not copy data and event handlers to the new elements. This behavior differs from jQuery, where a single parameter determines whether to copy data and event handlers.</p>
<pre><code class="language-js">$(&#39;body&#39;).append($(&quot;#box&quot;).clone())
</code></pre>
<h2 id="api-form">
                  <a href="#api-form">Form</a>
                </h2>
<h3 id="serializeArray">
                  <a href="#serializeArray"><code>.serializeArray()</code></a>
                </h3>
<p>This method combines the values of form elements into an array of objects with <code>name</code> and <code>value</code> key-value pairs.</p>
<p>It can operate on individual form elements or an entire <code>&lt;form&gt;</code>.</p>
<pre><code class="language-js">$(&#39;form&#39;).serializeArray();
// [
//   { &quot;name&quot;: &quot;golang&quot;, &quot;value&quot;:&quot;456&quot; },
//   { &quot;name&quot;: &quot;name&quot;, &quot;value&quot;: &quot;mdui&quot; },
//   { &quot;name&quot;: &quot;password&quot;, &quot;value&quot;: &quot;&quot; }
// ]
</code></pre>
<h3 id="serializeObject">
                  <a href="#serializeObject"><code>.serializeObject()</code></a>
                </h3>
<p>This method converts the values of form elements into an object.</p>
<p>If there are duplicate keys, the corresponding values will be converted into an array.</p>
<p>It can operate on individual form elements or an entire <form>.</p>
<pre><code class="language-js">$(&#39;form&#39;).serializeObject()
// { name: mdui, password: 123456 }
</code></pre>
<h3 id="serialize">
                  <a href="#serialize"><code>.serialize()</code></a>
                </h3>
<p>This method compiles the values of form elements into a string.</p>
<pre><code class="language-js">$(&#39;form&#39;).serialize();
// golang=456&amp;name=mdui&amp;password=
</code></pre>
<h2 id="api-event">
                  <a href="#api-event">Event</a>
                </h2>
<h3 id="on">
                  <a href="#on"><code>.on()</code></a>
                </h3>
<p>This method binds an event handler to each element in the collection for a specific event. Here are some examples:</p>
<pre><code class="language-js">// Bind a click event
$(&#39;.box&#39;).on(&#39;click&#39;, function (e) {
  console.log(&#39;Clicked on .box element&#39;);
});

// Bind multiple events
$(&#39;.box&#39;).on(&#39;click focus&#39;, function (e) {
  console.log(&#39;This function will be triggered for both click and focus events&#39;);
});

// Event delegation
$(document).on(&#39;click&#39;, &#39;.box&#39;, function (e) {
  console.log(&#39;This function will be triggered when a .box element is clicked&#39;);
});

// Binding multiple events and handlers
$(&#39;.box&#39;).on({
  &#39;click&#39;: function (e) {
    console.log(&#39;Clicked on .box element&#39;);
  },
  &#39;focus&#39;: function (e) {
    console.log(&#39;Focused on .box element&#39;);
  }
});

// Passing parameters
$(&#39;.box&#39;).on(&#39;click&#39;, { key1: &#39;value1&#39;, key2: &#39;value2&#39; }, function (e) {
  console.log(&#39;Clicked on .box element and passed parameters to the event handler&#39;);
  // e._data is {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
});

// Binding multiple events and handlers with parameters
$(&#39;.box&#39;).on({
  &#39;click&#39;: function (e) {
    console.log(&#39;Clicked on .box element&#39;);
    // e._data is {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
  },
  &#39;focus&#39;: function (e) {
    console.log(&#39;Focused on .box element&#39;);
    // e._data is {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
  }
}, { key1: &#39;value1&#39;, key2: &#39;value2&#39; });

// Event delegation with parameters
$(document).on(&#39;click&#39;, &#39;.box&#39;, { key1: &#39;value1&#39;, keys: &#39;value2&#39; }, function (e) {
  console.log(&#39;Clicked on .box element and passed parameters to the event handler&#39;);
  // e._data is {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
});

// Bind multiple events and handlers with event delegation
$(document).on({
  &#39;click&#39;: function (e) {
    console.log(&#39;Clicked on .box element&#39;);
  },
  &#39;focus&#39;: function (e) {
    console.log(&#39;Focused on .box element&#39;);
  }
}, &#39;.box&#39;);

// Bind multiple events and handlers with event delegation and parameters
$(document).on({
  &#39;click&#39;: function (e) {
    console.log(&#39;Clicked on .box element&#39;);
    // e._data is {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
  },
  &#39;focus&#39;: function (e) {
    console.log(&#39;Focused on .box element&#39;);
    // e._data is {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
  }
}, &#39;.box&#39;, { key1: &#39;value1&#39;, key2: &#39;value2&#39; });

// Get event parameters
$(&#39;.box&#39;).on(&#39;click&#39;, function (e, data) {
  // data is equal to e.detail
});

// Event namespaces
$(&#39;.box&#39;).on(&#39;click.myPlugin&#39;, function () {
  console.log(&#39;Clicked on .box element&#39;);
});
</code></pre>
<h3 id="one">
                  <a href="#one"><code>.one()</code></a>
                </h3>
<p>This method binds an event handler to each matched element for a specific event, but the event will only be triggered once. The usage is the same as <code>.on()</code>.</p>
<h3 id="off">
                  <a href="#off"><code>.off()</code></a>
                </h3>
<p>This method unbinds one or more event handlers from each element in the collection. Here are some examples:</p>
<pre><code class="language-js">// Unbind all event handlers
$(&#39;.box&#39;).off();

// Unbind specific event
$(&#39;.box&#39;).off(&#39;click&#39;);

// Unbind multiple events
$(&#39;.box&#39;).off(&#39;click focus&#39;);

// Unbind a specific event handler
$(&#39;.box&#39;).off(&#39;click&#39;, callback);

// Unbind an event with delegated
$(document).off(&#39;click&#39;, &#39;.box&#39;);

// Unbind a specific event handler with delegated
$(document).off(&#39;click&#39;, &#39;.box&#39;, callback);

// Unbind multiple event handlers
$(&#39;.box.&#39;).off({
  &#39;click&#39;: callback1,
  &#39;focus&#39;: callback2,
});

// Unbind multiple event handlers with delegated
$(document).off({
  &#39;click&#39;: callback1,
  &#39;focus&#39;: callback2,
}, &#39;.box&#39;);

// Event names support namespaces. The following unbinds all events ending with .myPlugin
$(document).off(&#39;.myPlugin&#39;);
</code></pre>
<h3 id="trigger">
                  <a href="#trigger"><code>.trigger()</code></a>
                </h3>
<p>This method triggers a specified event on each element in the collection. Here are some examples:</p>
<pre><code class="language-js">// Trigger a specified event
$(&#39;.box&#39;).trigger(&#39;click&#39;);

// Pass parameters when triggering an event
$(&#39;.box&#39;).trigger(&#39;click&#39;, { key1: &#39;value1&#39;, key2: &#39;value2&#39; });

// Event names support namespaces
$(&#39;.box&#39;).trigger(&#39;click.myPlugin&#39;);

// CustomEvent parameters
$(&#39;.box&#39;).trigger(&#39;click&#39;, undefined, {
  bubbles: true;
  cancelable: true;
  composed: true
});
</code></pre>
<h2 id="api-ajax">
                  <a href="#api-ajax">ajax</a>
                </h2>
<h3 id="d-ajaxSetup">
                  <a href="#d-ajaxSetup"><code>$.ajaxSetup()</code></a>
                </h3>
<p>This method sets global parameters for AJAX requests.</p>
<pre><code class="language-js">$.ajaxSetup({
  // Disable global Ajax events by default
  global: false,

  // Default to POST request
  method: &#39;POST&#39;
});
</code></pre>
<p>Refer to <a href="#ajax-options">Ajax options</a> for a detailed list of parameters.</p>
<h3 id="d-ajax">
                  <a href="#d-ajax"><code>$.ajax()</code></a>
                </h3>
<p>This method initiates an AJAX request and returns a Promise.</p>
<pre><code class="language-js">const promise = $.ajax({
  method: &#39;POST&#39;,
  url: &#39;./test.php&#39;,
  data: {
    key1: &#39;val1&#39;,
    key2: &#39;val2&#39;
  },
  success: function (response) {
    console.log(response);
  }
});

promise
  .then((response) =&gt; {
    console.log(response);
  })
  .catch((error) =&gt; {
    console.log(error);
  });
</code></pre>
<p>Refer to <a href="#ajax-options">Ajax options</a> for a detailed list of parameters.</p>
<p>You can listen to global AJAX events using the <code>.on()</code> method.</p>
<pre><code class="language-js">// Triggered when an Ajax request starts
$(document).on(&#39;ajaxStart&#39;, function (e, { xhr, options }) {
  // xhr: XMLHttpRequest object
  // options: $.ajax() method parameters
});

// Triggered when an Ajax request is successful
$(document).on(&#39;ajaxSuccess&#39;, function (e, { xhr, options, response }) {
  // xhr: XMLHttpRequest object
  // options: $.ajax() method parameters
  // response: Request response
});

// Triggered when an Ajax request fails
$(document).on(&#39;ajaxError&#39;, function (e, { xhr, options }) {
  // xhr: XMLHttpRequest object
  // options: $.ajax() method parameters
});

// Triggered when an Ajax request completes
$(document).on(&#39;ajaxComplete&#39;, function (e, { xhr, options }) {
  // xhr: XMLHttpRequest object
  // options: $.ajax() method parameters
});
</code></pre>
<h3 id="ajax-options">
                  <a href="#ajax-options">Ajax Options</a>
                </h3>
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr id="ajax-options-url">
      <td><a href="#ajax-options-url"><code>url</code></a></td>
      <td><code>string</code></td>
      <td>Current page URL</td>
    </tr>
    <tr>
      <td colspan="3">The URL of the request.</td>
    </tr>
    <tr id="ajax-options-method">
      <td><a href="#ajax-options-method"><code>method</code></a></td>
      <td><code>string</code></td>
      <td><code>GET</code></td>
    </tr>
    <tr>
      <td colspan="3">The request method. It can be one of the following: <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>PATCH</code>, <code>HEAD</code>, <code>OPTIONS</code>, <code>DELETE</code>.</td>
    </tr>
    <tr id="ajax-options-data">
      <td><a href="#ajax-options-data"><code>data</code></a></td>
      <td><code>any</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td colspan="3">The data to be sent to the server.</td>
    </tr>
    <tr id="ajax-options-processData">
      <td><a href="#ajax-options-processData"><code>processData</code></a></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td colspan="3">Whether to convert the data passed into a query string.</td>
    </tr>
    <tr id="ajax-options-async">
      <td><a href="#ajax-options-async"><code>async</code></a></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td colspan="3">Whether the request should be handled asynchronously.</td>
    </tr>
    <tr id="ajax-options-cache">
      <td><a href="#ajax-options-cache"><code>cache</code></a></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td colspan="3">Whether to cache the request. This is only applicable to <code>GET</code> and <code>HEAD</code> requests.</td>
    </tr>
    <tr id="ajax-options-username">
      <td><a href="#ajax-options-username"><code>username</code></a></td>
      <td><code>string</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td colspan="3">The username for HTTP authentication.</td>
    </tr>
    <tr id="ajax-options-password">
      <td><a href="#ajax-options-password"><code>password</code></a></td>
      <td><code>string</code></td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td colspan="3">The password for HTTP authentication.</td>
    </tr>
    <tr id="ajax-options-headers">
      <td><a href="#ajax-options-headers"><code>headers</code></a></td>
      <td><code>object</code></td>
      <td><code>{}</code></td>
    </tr>
    <tr>
      <td colspan="3">Data to be added to the headers. This can be overridden in the <code>beforeSend</code> callback. Fields with string or <code>null</code> values will be sent, fields with <code>undefined</code> values will be removed.</td>
    </tr>
    <tr id="ajax-options-xhrFields">
      <td><a href="#ajax-options-xhrFields"><code>xhrFields</code></a></td>
      <td><code>object</code></td>
      <td><code>{}</code></td>
    </tr>
    <tr>
      <td colspan="3">
        <p>This option allows you to set data on the <code>XMLHttpRequest</code> object.</p>
<pre><code class="language-js">$.ajax({
  url: 'a cross-domain URL',
  xhrFields: {
    withCredentials: true
  }
});</code></pre>
      </td>
    </tr>
    <tr id="ajax-options-statusCode">
      <td><a href="#ajax-options-statusCode"><code>statusCode</code></a></td>
      <td><code>object</code></td>
      <td><code>{}</code></td>
    </tr>
    <tr>
      <td colspan="3">
        <p>An object of HTTP status codes and corresponding functions.</p>
<pre><code class="language-js">$.ajax({
  statusCode: {
    404: function (xhr, textStatus) {
      alert('Called when the status code is 404');
    },
    200: function (data, textStatus, xhr) {
      alert('Called when the status code is 200');
    }
  }
});</code></pre>
        <p>Status codes between 200 and 299, or status code 304, indicate success. The function parameters are the same as those for the <code>success</code> callback. For other status codes, the function parameters are the same as those for the <code>error</code> callback.</p>
      </td>
    </tr>
    <tr id="ajax-options-dataType">
      <td><a href="#ajax-options-dataType"><code>dataType</code></a></td>
      <td><code>string</code></td>
      <td><code>text</code></td>
    </tr>
    <tr>
      <td colspan="3">The type of data expected from the server. It can be either <code>text</code> or <code>json</code>.</td>
    </tr>
    <tr id="ajax-options-contentType">
      <td><a href="#ajax-options-contentType"><code>contentType</code></a></td>
      <td><code>string</code></td>
      <td><code>application/x-www-form-urlencoded</code></td>
    </tr>
    <tr>
      <td colspan="3">The content encoding type. Set to <code>false</code> to avoid setting the <code>Content-Type</code>.</td>
    </tr>
    <tr id="ajax-options-timeout">
      <td><a href="#ajax-options-timeout"><code>timeout</code></a></td>
      <td><code>number</code></td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td colspan="3">The request timeout in milliseconds. A value of <code>0</code> means no timeout.</td>
    </tr>
    <tr id="ajax-options-global">
      <td><a href="#ajax-options-global"><code>global</code></a></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td colspan="3">Whether to trigger global AJAX events.</td>
    </tr>
    <tr id="ajax-options-beforeSend">
      <td><a href="#ajax-options-beforeSend"><code>beforeSend</code></a></td>
      <td><code>function</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>This function is called before the request is sent. If it returns <code>false</code>, the AJAX request will be canceled.</p>
<pre><code class="language-js">$.ajax({
  beforeSend: function (xhr) {
    // xhr: the XMLHttpRequest object
  }
});</code></pre>
      </td>
    </tr>
    <tr id="ajax-options-success">
      <td><a href="#ajax-options-success"><code>success</code></a></td>
      <td><code>function</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>This function is called after the request is successful.</p>
<pre><code class="language-js">$.ajax({
  success: function (data, textStatus, xhr) {
    // data: data returned by the AJAX request
    // textStatus: a string containing the success code
    // xhr: the XMLHttpRequest object
  }
});</code></pre>
      </td>
    </tr>
    <tr id="ajax-options-error">
      <td><a href="#ajax-options-error"><code>error</code></a></td>
      <td><code>function</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>This function is called when an error occurs in the request.</p>
<pre><code class="language-js">$.ajax({
  error: function (xhr, textStatus) {
    // xhr: the XMLHttpRequest object
    // textStatus: a string containing the error code
  }
});</code></pre>
      </td>
    </tr>
    <tr id="ajax-options-complete">
      <td><a href="#ajax-options-complete"><code>complete</code></a></td>
      <td><code>function</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td colspan="3">
        <p>This function is called when the request is complete, regardless of success or failure.</p>
<pre><code class="language-js">$.ajax({
  complete: function (xhr, textStatus) {
    // xhr: the XMLHttpRequest object
    // textStatus: a string describing the status
  }
});</code></pre>
      </td>
    </tr>
  </tbody>
</table>
`,elements:[]};export{e as default};
