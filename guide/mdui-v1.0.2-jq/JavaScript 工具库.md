# JavaScript 工具库

MDUI 内置了一个轻量的 JavaScript 工具库，它拥有和 jQuery 类似的 api 和 jQuery 风格的链式调用，但体积仅为 jQuery 的六分之一。

你可以通过 `mdui.$` 来调用该库，但最好把 `mdui.$` 存储到一个简短的变量中以方便调用，例如：

```js
var $ = mdui.$;
```

在后面的文档中，都使用 `$` 来表示 `mdui.$`。

## 核心

### $()

该方法有多种用法：可以传入一个 CSS 选择器作为参数，返回包含匹配元素的 JQ 对象。该方法是通过 `querySelectorAll` 实现的。

```js
$('.box')
```

可以传入 DOM 元素、任意数组、NodeList、JQ 对象，返回包含指定元素的 JQ 对象。

```js
$(document)
```

可以传入 HTML 字符串，返回包含根据 HTML 创建的 DOM 的 JQ 对象。

```js
$('<div id="wrapper">
  <span id="inner"></span>
</div>')
```

可以传入一个函数，在 DOM 加载完毕后会调用该函数。
```js
$(function () { console.log('DOM Loaded') })
```

## 插件编写

### $.extend()

如果只传入一个对象，该对象中的属性将合并到 JQ 对象中，相当于在 JQ 的命名空间下添加新的功能。

```js
$.extend({
  customFunc: function () {}
})

// 然后就可以这样调用自定义方法了
$.customFunc()
```

如果传入了两个或更多个对象，所有对象的属性都添加到第一个对象，并返回合并后的对象。

```js
var object = $.extend(
  { key1: val1 },
  { key2: val2 },
  { key3: val3 }
);

// 此时第一个对象和返回值都是 { key1: val1, key2: val2, key3: val3 }
```

### $.fn.extend()

在 JQ 的原型链上扩展方法。

```js
$.fn.extend({
  customFunc: function () {}
})

// 然后就可以这样使用扩展的方法了
$(document).customFunc()
```

## URL

### $.param()

将对象或数组序列化，返回一个可用于 URL 参数的字符串。

```js
$.param({ width: 1680, height: 1050 })
// width=1680&height=1050

$.param({ foo: { one: 1, two: 2 } })
// foo[one]=1&foo[two]=2

$.param({ ids: [1, 2, 3] })
// ids[]=1&ids[]=2&ids[]=3
```

若传入参数是一个数组，则该数组格式必须与 `.serializeArray()` 的返回格式一致：

```js
param([
  { "name": "name", "value": "mdui" },
  { "name": "password", "value": "123456" }
])
// name=mdui&password=123456
```

## 数组对象操作

### $.each()

遍历数组或对象。返回值为第一个参数，即被遍历的数组或对象。

函数的第一个参数为数组的索引位置、或对象的键；第二个参数为数组或对象对应位置的值。

回调函数中的 `this` 指向数组或对象对应位置的值。若回调函数返回 `false`，则停止遍历。

```js
// 遍历一个数组
$.each(['a', 'b', 'c'], function (index, value) {
  console.log(index + ':' + value);
})

// 结果：
// 0:a
// 1:b
// 2:c
```

```js
// 遍历一个对象
$.each({'name': 'mdui', 'lang': 'zh'}, function (key, value) {
  console.log(key + ':' + value);
})

// 结果
// name:mdui
// lang:zh
```

### $.merge()

把第二个数组的元素追加到第一个数组中，并返回合并后的数组。

```js
var first = ['a', 'b', 'c'];
var second = ['c', 'd', 'e'];
var result = $.merge(first, second);

console.log(first); // ['a', 'b', 'c', 'c', 'd', 'e']
console.log(result); // ['a', 'b', 'c', 'c', 'd', 'e']
```

### $.unique()

过滤掉数组中的重复元素。

```js
var result = $.unique([1, 2, 12, 3, 2, 1, 2, 1, 1, 1, 1]);
console.log(result); // [1, 2, 12, 3]
```

### $.map()

遍历数组或对象，返回由函数的返回值组成的新数组。

函数的第一个参数为数组或对象对应位置的值，第二个参数为数组的索引位置、或对象的键。

函数可以返回任何值，若函数返回的是数组，则会被展开；若返回的是 `null` 或 `undefined`，则会被忽略。函数内部的 `this` 指向 `window` 对象。

```js
// 遍历数组
var result = $.map(['a', 'b', 'c'], function (value, index) {
  return index + value;
});
console.log(result); // ['0a', '1b', '2c']
```

```js
// 回调函数返回数组时，会被展开
var result = $.map([1, 2, 3], function (value, index) {
  return [value, value + 1];
});
console.log(result); // [1, 2, 2, 3, 3, 4]
```

```js
// 遍历对象
var result = $.map({ name: 'mdui', password: '123456' }, function (value, key) {
  return key + ':' + value;
});
console.log(result); // ['name:mdui', 'password:123456']
```

### $.contains()

判断父节点是否包含子节点，返回布尔值。

```js
$.contains(document, document.body); // true
$.contains(document.body, document); // false
```

## 数据类型判断

### .is()

如果集合中至少有一个元素和参数匹配，则返回 `true`，否则返回 `false`。

参数可以是 CSS 选择器、DOM 元素、DOM 元素数组、JQ 对象、或回调函数。

参数为回调函数时，函数的第一个参数为索引位置，第二个参数为当前元素，`this` 指向当前元素。若函数返回 `true`，表示匹配；若返回 `false`，表示不匹配。

```js
$('.box').is('.box'); // true
$('.box').is('.boxss'); // false
$('.box').is($('.box')[0]); // true
// 通过回调函数的返回值做判断
$(document).is(function (index, element) {
  return element === document;
});
// true
```

## 对象访问

### .length

返回当前集合中元素的数量。

```js
$('body').length; // 1
```

### .each()

遍历当前集合，为集合中每一个元素执行一个函数。如果函数返回 `false`，则结束遍历。

函数的第一个参数为元素的索引位置，第二个参数为当前元素。函数中的 `this` 指向当前元素。

```js
$('img').each(function(index, element) {
  this.src = 'test' + index + '.jpg';
});
```

### .map()

遍历当前集合，为集合中的每个元素执行一个函数，返回由函数返回值组成的新集合。若函数返回 `null` 或 `undefined` 则会被过滤。

函数的第一个参数为元素的索引位置，第二个参数为当前元素。函数的 `this` 指向当前元素。

```js
var result = $('input.checked').map(function (index, element) {
  return $(this).val();
});

// result 为匹配元素的值组成的 JQ 对象
```

### .eq()

返回仅包含指定索引位置的元素的集合。

```js
$('div').eq(0); // 返回仅包含第一个元素的 JQ 对象
$('div').eq(-1); // 返回仅包含最后一个元素的 JQ 对象
$('div').eq(-2); // 返回仅包含倒数第二个元素的 JQ 对象
```

### .first()

返回仅包含第一个元素的集合。

```js
$('div').first(); // 返回仅包含第一个 div 的 JQ 对象
```

### .last()

返回仅包含最后一个元素的集合。

```js
$('div').last(); // 返回仅包含最后一个 div 的 JQ 对象
```

### .get()

返回指定索引位置的元素。若未传入参数，则返回集合中所有元素组成的数组。

```js
$('div').get(); // 返回所有 div 元素组成的数组
$('div').get(0); // 返回第一个 div 元素
$('div').get(-1); // 返回最后一个 div 元素
```

### .index()

如果没有传入参数，则返回集合中第一个元素相对于同辈元素的索引位置。

如果传入了一个 CSS 选择器作为参数，则返回集合中第一个元素相对与 CSS 选择器匹配元素的索引位置。

如果传入了一个 DOM 元素，则返回该 DOM 元素在集合中的索引值。

如果传入一个 JQ 对象，则返回对象中第一个元素在当前集合中的索引位置。

```html
<div id="child">
  <div id="child1"></div>
  <div id="child2"></div>
  <div id="child3"></div>
  <div id="child4"></div>
</div>
```

```js
$('#child3').index(); // 2
$('#child3').index('#child div'); // 2
$('#child div').index($('#child3').get(0); // 2
```

### .slice()

返回当前集合的子集。

第一个参数为子集的起始位置，第二个参数为子集的结束位置；若未传入第二个参数，表示包含从起始位置到结尾的所有元素。

```js
// 返回集合中第三个（包含第三个）之后的所有元素
$('div').slice(3);

// 返回集合中第三个到第五个（包含第三个，不包含第五个）之间的元素
$('div').slice(3, 5);
```

### .filter()

从当前集合中筛选出与指定表达式匹配的元素。参数可以是 CSS 选择器、DOM 元素、DOM 元素数组、回调函数。

参数为函数时，函数的第一个参数为索引位置，第二个参数为当前元素，函数中的 `this` 指向当前元素。函数返回 `true` 时，当前元素会被保留，返回 `false` 时，当前元素会被移除。

```js
// 筛选出所有含 .box 的 div 元素
$('div').filter('.box');

// 筛选出所有已选中选项
$('#select option').filter(function (index, element) {
  return element.selected;
});
```

### .not()

从当前集合中筛选出与指定表达式不匹配的元素。参数可以是 CSS 选择器、DOM 元素、DOM 元素数组、回调函数。

参数为函数时，函数的第一个参数为索引位置，第二个参数为当前元素，函数中的 `this` 指向当前元素。函数返回 `true` 时，当前元素会被移除，返回 `false` 时，当前元素会被保留。

```js
// 筛选出所有不含 .box 类的 div 元素
$('div').not('.box');

// 筛选出所有未选中选项
$('#select option').not(function (index, element) {
  return element.selected;
});
```

## CSS 类

### .hasClass()

判断集合中的第一个元素是否含有指定 CSS 类。

```js
// 判断第一个 div 元素是否含有 .item
$('div').hasClass('item')
```

### .addClass()

为集合中的每个元素添加 CSS 类，多个类名之间可以用空格分隔。

也可以传入一个返回 CSS 类名的回调函数。函数的第一个参数为索引位置，第二个参数为该元素上原有的 CSS 类名，函数中的 `this` 指向当前元素。

```js
// 为所有 div 元素添加 .item
$('div').addClass('item')
```

```js
// 为所有 div 元素添加 .item1 和 .item2
$('div').addClass('item1 item2')
```

```js
// 为所有 div 元素添加由回调函数返回的 CSS 类
$('div').addClass(function (index, currentClassName) {
  return currentClassName + '-' + index;
})
```

### .removeClass()

移除集合中的元素上的 CSS 类，多个类名之间可以用空格分隔。

也可以传入一个返回 CSS 类名的回调函数。函数的第一个参数为索引位置，第二个参数为该元素上原有的 CSS 类名，函数中的 `this` 指向当前元素。

若没有传入参数，则将直接移除元素上的 `class` 属性。

```js
// 移除所有 div 元素上的 .item
$('div').removeClass('item')
```

```js
// 移除所有 div 元素上的 .item1 和 .item2
$('div').removeClass('item1 item2')
```

```js
// 移除所有 div 元素上的由回调函数返回的 CSS 类
$('div').removeClass(function (index, currentClassName) {
  return 'item';
})
```

```js
// 直接移除 class 属性
$('div').removeClass()
```

### .toggleClass()

元素上的 CSS 类，有则删除，无则添加。多个类名之间可以用空格分隔。

也可以传入一个返回 CSS 类名的回调函数。函数的第一个参数为索引位置，第二个参数为该元素上原有的 CSS 类名，函数中的 `this` 指向当前元素。

```js
// 切换所有 div 元素上的 .item
$('div').toggleClass('item')
```

```js
// 切换所有 div 元素上的 .item1 和 .item2
$('div').toggleClass('item1 item2')
```

```js
// 切换所有 div 元素上的由回调函数返回的 CSS 类
$('div').toggleClass(function (index, currentClassName) {
  return 'item';
})
```

## 节点属性

### .prop()

获取集合中第一个元素的属性值。

```js
// 获取第一个元素的属性值
$('input').prop('checked');
```

也可以是设置集合中所有元素的属性值。

设置的属性值可以是回调函数的返回值。回调函数的第一个参数为元素的索引位置，第二个参数为该元素上原有的属性值，函数内的 `this` 指向当前元素。

若属性值或回调函数的返回值为 `void` 或 `undefined`，则不会修改原有属性。

也可以通过传入对象来同时设置多个属性。

```js
// 设置所有选中元素的属性值
$('input').prop('checked', true);

// 通过回调函数的返回值设置属性值
$('input').prop('checked', function (index, oldPropValue) {
  return true;
});

// 同时设置元素的多个属性值
$('input').prop({
  checked: false,
  disabled: function (index, oldPropValue) {
    return true;
  }
});
```

### .removeProp()

删除集合中所有元素上指定的属性值。

```js
$('input').removeProp('disabled');
```

### .attr()

获取集合中第一个元素的属性值。

```js
// 获取第一个元素的属性值
$('div').attr('username');
```

也可以是设置集合中所有元素的属性值。

设置的属性值可以是回调函数的返回值。回调函数的第一个参数为元素的索引位置，第二个参数为该元素上原有的属性值，函数内的 `this` 指向当前元素。

若属性值或回调函数的返回值为 `void` 或 `undefined`，则不会修改原有属性。若属性值或回调函数的返回值为 `null`，则删除指定属性。

也可以通过传入对象来同时设置多个属性。

```js
// 设置所有选中元素的属性值
$('div').attr('username', 'mdui');

// 通过回调函数的返回值设置属性值
$('div').attr('username', function (index, oldAttrValue) {
  return 'mdui';
});

// 同时设置元素的多个属性值
$('div').attr({
  username: 'mdui',
  lastname: function (index, oldAttrValue) {
    return 'test';
  }
});
```

### .removeAttr()

删除集合中所有元素上指定的属性值，多个属性名之间可以用空格分隔。

```js
// 删除集合中所有元素上的一个属性
$('div').removeAttr('username');

// 删除集合中所有元素上的多个属性
$('div').removeAttr('username lastname');
```

### .val()

获取集合中第一个元素的值。

若元素是 `<select multiple="multiple">`，则将返回一个包含每个选择项的数组。

```js
// 获取选中的第一个元素的值
$('#input').val();
```

也可以是设置集合中所有元素的值。

设置的值可以是字符串、数值、字符串数组、回调函数。

若值为回调函数，第一个参数为元素的索引位置，第二个参数为元素的原有的值，函数中的 `this` 指向当前元素。

若元素为 `<input type="checkbox">`、`<input type="radio">`、`<option>`，则元素值、或函数返回值可以为数组，此时将选中值在数组中的元素，并取消值不在数组中的元素。

若值、或函数返回值为 `undefined`，则会将元素值设为空。

```js
// 设置选中元素的值
$('#input').val('input value');

// 通过回调函数的返回值设置元素值
$('#input').val(function (index, oldValue) {
  return 'new value';
});
```

### .text()

获取集合中所有元素的文本内容（包含它们的后代元素）

```js
// 获取所有 .box 元素的文本
$('.box').text();
```

也可以是设置集合中所有元素的文本。

设置的值可以是字符串、数值、布尔值、回调函数。

若为回调函数，第一个参数为元素的索引位置，第二个参数为元素原有的文本内容，函数内的 `this` 指向当前元素。

若设置的值、或回调函数返回值为 `undefined`，则不修改对应元素的文本。

```js
// 设置选中元素的文本内容
$('.box').text('text content');

// 通过回调函数的返回值设置元素的文本内容
$('.box').text(function (index, oldTextContent) {
  return 'new text content';
});
```

### .html()

获取集合中第一个元素的 HTML 内容。

```js
// 获取第一个 .box 元素的 HTML 内容
$('.box').html();
```

也可以是设置集合中所有元素的 HTML 内容。

设置的值可以是 HTML 字符串、DOM 元素、回调函数。

若为回调函数，第一个参数为元素的索引位置，第二个参数为元素原有的 HTML 内容，函数内的 `this` 指向当前元素。

如设置的值、或函数返回值为 `undefined`，则不修改对应元素的 HTML。

```js
// 设置选中元素的 HTML
$('.box').html('<div>new html content</div>');

// 通过回调函数的返回值设置元素的 HTML 内容
$('.box').html(function (index, oldHTMLContent) {
  return '<div>new html content</div>';
});
```

## 数据存储

### $.data()

在指定元素上读取或存储数据。

存储数据时，若值为 `undefined`，则相当于读取元素上对应的数据。即 `$.data(element, 'key', undefined)` 和 `$.data(element, 'key')` 等效。

注意：该方法不会检索元素上的 `data-*` 属性。

```js
// 在指定元素上存储数据，返回存储的值
$.data(document.body, 'layout', 'dark'); // 返回 dark

// 在指定元素上同时存储多个数据
$.data(document.body, {
  primary: 'indigo',
  accent: 'pink',
});

// 获取在指定元素上存储的数据
$.data(document.body, 'layout'); // 返回 dark

// 获取在指定元素上存储的所有数据
$.data(document.body); // 返回 { layout: 'dark', primary: 'indigo', accent: 'pink' }
```

### $.removeData()

移除指定元素上存储的数据。

多个键名可以用空格分隔，也可以用数组表示多个键名。未指定键名时，将移除元素上的所有数据。

```js
// 移除元素上键名为 name 的数据
$.removeData(document.body, 'name');

// 移除元素上键名为 name1 和 name2 的数据。下面两种方法等效：
$.removeData(document.body, 'name1 name2');
$.removeData(document.body, ['name1', 'name2']);

// 移除元素上存储的所有数据
$.removeData(document.body);
```

### .data()

在当前集合的元素上读取或存储数据。

存储数据时，若值为 `undefined`，则不进行存储。

注意：该方法检索的数据会包含元素上的 `data-*` 属性。

```js
// 在当前集合中的元素上存储数据
$('.box').data('layout', 'dark');

// 在当前集合中的元素上同时存储多个数据
$('.box').data({
  primary: 'indigo',
  accent: 'pink',
});

// 获取当前集合中第一个元素上存储的指定数据
$('.box').data('layout'); // 返回 dark

// 获取在当前集合中第一个元素上存储的所有数据
$('.box').data(); // 返回 { layout: 'dark', primary: 'indigo', accent: 'pink' }
```

### .removeData()

移除当前集合的元素上存储的数据。

多个键名可以用空格分隔，也可以用数组表示多个键名。未指定键名时，将移除元素上的所有数据。

注意：该方法只会移除通过 `.data()` 方法设置的数据，不会移除 `data-*` 属性上的数据。

```js
// 移除键名为 name 的数据
$('.box').removeData('name');

// 移除键名为 name1 和 name2 的数据。下面两种方法等效：
$('.box').removeData('name1 name2');
$('.box').removeData(['name1', 'name2']);

// 移除元素上存储的所有数据
$('.box').removeData();
```

## 样式

### .css()

获取集合中第一个元素的 CSS 属性值。

```js
$('.box').css('color')
```

也可以设置集合中所有元素的 CSS 属性值。

属性值可以是字符串、数值、或一个返回字符串或数值的回调函数。

若属性值是回调函数，第一个参数为元素的索引位置，第二个参数为元素原有的 CSS 属性值，函数中的 `this` 指向当前元素。

若属性值或回调函数返回 `void`、`undefined`、`null`，则不对当前元素的 CSS 属性值进行修改。

若属性值或回调函数返回数值，则会添加 `px` 作为单位。若该属性无法使用 `px` 作为单位，则会直接把该值转为字符串。

也可以通过传入一个键值对对象，来同时设置多个 CSS 属性。

```js
// 设置集合中所有元素的样式值
$('.box').css('color', 'red')

// 通过回调函数的返回值设置所有元素的样式值
$('.box').css('color', function (index, oldCSSValue) {
  return 'green';
});

// 通过传入一个对象同时设置多个样式
$('.box').css({
  'background-color': 'white',
  color: function (index, oldCSSValue) {
    return 'blue';
  },
});
```

### .width()

获取集合中第一个元素的宽度（像素值），不包含 `padding`、`border`、`margin` 的宽度。

```js
$('.box').width();
```

也可以设置集合中所有元素的宽度（不包含 `padding`、`border`、`margin` 的宽度）。

值可以是带单位的字符串、数值、或返回带单位的字符串或数值的回调函数。

回调函数的第一个参数为元素的索引位置，第二个参数为元素原有的宽度值，函数中的 `this` 指向当前元素。

若值、或回调函数的返回值为数值，则会自动添加 `px` 作为单位。

若值、或回调函数的返回值为 `null` 或 `undefined`，则不修改元素的宽度。

```js
// 设置集合中所有元素的宽度
$('.box').width('20%');

// 值为数值时，默认单位为 px
$('.box').width(10);

// 通过回调函数的返回值设置宽度
$('.box').width(function (index, oldWidth) {
  return 10;
});
```

### .height()

获取集合中第一个元素的高度（像素值），不包含 `padding`、`border`、`margin` 的高度。

```js
$('.box').height();
```

也可以设置集合中所有元素的高度（不包含 `padding`、`border`、`margin` 的高度）。

值可以是带单位的字符串、数值、或返回带单位的字符串或数值的回调函数。

回调函数的第一个参数为元素的索引位置，第二个参数为元素原有的高度值，函数中的 `this` 指向当前元素。

若值、或回调函数的返回值为数值，则会自动添加 `px` 作为单位。

若值、或回调函数的返回值为 `null` 或 `undefined`，在不修改元素的高度。

```js
// 设置集合中所有元素的高度
$('.box').height('20%');

// 值为数值时，默认单位为 px
$('.box').height(10);

// 通过回调函数的返回值设置高度
$('.box').height(function (index, oldWidth) {
  return 10;
});
```

### .innerWidth()

获取集合中第一个元素的宽度（像素值），包含 `padding`，不包含 `border`、`margin` 的宽度。

```js
$('.box').innerWidth();
```

也可以设置集合中所有元素的宽度（包含 `padding`，不包含 `border`、`margin` 的宽度）。

值可以是带单位的字符串、数值、或返回带单位的字符串或数值的回调函数。

回调函数的第一个参数为元素的索引位置，第二个参数为元素原有的宽度值，函数中的 `this` 指向当前元素。

若值、或回调函数的返回值为数值，则会自动添加 `px` 作为单位。

若值、或回调函数的返回值为 `null` 或 `undefined`，则不修改元素的宽度。

```js
// 设置集合中所有元素的宽度
$('.box').innerWidth('20%');

// 值为数值时，默认单位为 px
$('.box').innerWidth(10);

// 通过回调函数的返回值设置宽度
$('.box').innerWidth(function (index, oldWidth) {
  return 10;
});
```

### .innerHeight()

获取集合中第一个元素的高度（像素值），包含 `padding`，不包含 `border`、`margin` 的高度。

```js
$('.box').innerHeight();
```

也可以设置集合中所有元素的高度（包含 `padding`，不包含 `border`、`margin` 的高度）。

值可以是带单位的字符串、数值、或返回带单位的字符串或数值的回调函数。

回调函数的第一个参数为元素的索引位置，第二个参数为元素原有的高度值，函数中的 `this` 指向当前元素。

若值、或回调函数的返回值为数值，则会自动添加 `px` 作为单位。

若值、或回调函数的返回值为 `null` 或 `undefined`，在不修改元素的高度。

```js
// 设置集合中所有元素的高度
$('.box').innerHeight('20%');

// 值为数值时，默认单位为 px
$('.box').innerHeight(10);

// 通过回调函数的返回值设置高度
$('.box').innerHeight(function (index, oldHeight) {
  return 10;
});
```

### .outerWidth()

获取集合中第一个元素的宽度（像素值），包含 `padding`、`border`的宽度，不包含 `margin` 的宽度，可以传入参数 `true`，使宽度包含 `margin` 的宽度。

```js
// 包含 padding、border 的宽度
$('.box').outerWidth();

// 包含 padding、border、margin 的宽度
$('.box').outerWidth(true);
```

也可以设置集合中所有元素的宽度（包含 `padding`、`border`，不包含 `margin` 的宽度，可以在第二个参数中传入 `true`，使宽度包含 `margin` 的宽度）。

第一个参数可以是带单位的字符串、数值、或返回带单位的字符串或数值的回调函数。

回调函数的第一个参数为元素的索引位置，第二个参数为元素的原有宽度，函数中的 `this` 指向当前元素。

若值、或回调函数的返回值为数值，则会自动添加 `px` 作为单位。

若值、或回调函数的返回值为 `null` 或 `undefined`，则不修改元素的宽度。

```js
// 设置集合中所有元素的宽度
$('.box').outerWidth('20%');

// 值为数值时，默认单位为 px
$('.box').outerWidth(10);

// 第二个参数为 true，则宽度将包含 margin
$('.box').outerWidth(10, true);

// 通过回调函数的返回值设置宽度
$('.box').outerWidth(function (index, oldWidth) {
  return 10;
});
```

### .outerHeight()

获取集合中第一个元素的高度（像素值），包含 `padding`、`border`的高度，不包含 `margin` 的高度，可以传入参数 `true`，使高度包含 `margin` 的高度。

```js
// 包含 padding、border 的高度
$('.box').outerHeight();

// 包含 padding、border、margin 的高度
$('.box').outerHeight(true);
```

也可以设置集合中所有元素的高度（包含 `padding`、`border`，不包含 `margin` 的高度，可以在第二个参数中传入 `true`，使高度包含 `margin` 的高度）。

第一个参数可以是带单位的字符串、数值、或返回带单位的字符串或数值的回调函数。

回调函数的第一个参数为元素的索引位置，第二个参数为元素的原有高度，函数中的 `this` 指向当前元素。

若值、或回调函数的返回值为数值，则会自动添加 `px` 作为单位。

若值、或回调函数的返回值为 `null` 或 `undefined`，则不修改元素的高度。

```js
// 设置集合中所有元素的高度
$('.box').outerHeight('20%');

// 值为数值时，默认单位为 px
$('.box').outerHeight(10);

// 第二个参数为 true，则高度将包含 margin
$('.box').outerHeight(10, true);

// 通过回调函数的返回值设置高度
$('.box').outerHeight(function (index, oldWidth) {
  return 10;
});
```

### .hide()

隐藏集合中的所有元素。

```js
$('.box').hide();
```

### .show()

显示集合中的所有元素。

```js
$('.box').show();
```

### .toggle()

切换集合中所有元素的显示状态。

```js
$('.box').toggle();
```

### .offset()

获取集合中第一个元素相对于 `document` 的坐标。

```js
$('.box').offset(); // { top: 20, left: 30 }
```

也可以设置集合中所有元素相对于 `document` 的坐标。

参数为一个包含 `top` 和 `left` 属性的对象，或一个返回此格式对象的回调函数。

若参数是回调函数，第一个参数为元素的索引位置，第二个参数为元素的原有坐标，函数中的 `this` 指向当前元素。

若参数中 `top` 或 `left` 的值为 `undefined`，则不修改对应的值。

```js
// 设置集合中所有元素的坐标
$('.box').offset({ top: 20, left: 30 });

// 通过回调函数的返回值设置元素的坐标
$('.box').offset(function (index, oldOffset) {
  return { top: 20, left: 30 };
});
```

### .offsetParent()

返回集合中第一个元素的用于定位的父元素。即父元素中第一个 `position` 为 `relative` 或 `absolute` 的元素。

```js
$('.box').offsetParent();
```

### .position()

获取集合中第一个元素相对于父元素的偏移。

```js
$('.box').position(); // { top: 20, left: 30 }
```

## 查找节点

### .find()

在当前集合的所有元素中，根据 CSS 选择器找到指定的后代节点的集合。

```js
// 找到 #box 的后代节点中，包含 .box 的节点集合
$('#box').find('.box')
```

### .children()

在当前集合的所有元素中，获取直接子元素组成的集合。

可以传入一个 CSS 选择器作为参数，对子元素进行过滤。

```js
// 找到 #box 的所有直接子元素
$('#box').children();

// 找到 #box 的所有直接子元素中，包含 .box 的元素集合
$('#box').children('.box')
```

### .has()

在当前集合的所有元素中，筛选出含有指定子元素的元素。

参数可以是 CSS 选择器或 DOM 元素。

```js
// 给含有 ul 的 li 加上背景色
$('li').has('ul').css('background-color', 'red');
```

### .parent()

获取当前集合中，所有元素的直接父元素的集合。

可以传入一个 CSS 选择器作为参数，仅返回与该参数匹配的父元素的集合。

```js
// 返回 .box 元素的直接父元素
$('.box').parent();

// 返回 .box 元素的直接父元素中含有 .parent 类的元素
$('.box').parent('.parent');
```

### .parents()

获取当前集合中，所有元素的祖先元素的集合。

可以传入一个 CSS 选择器作为参数，仅返回与该参数匹配的祖先元素的集合。

```js
// 返回 span 元素的所有祖先元素
$('span').parents();

// 返回 span 元素的所有是 p 元素的祖先元素
$('span').parents('p');
```

### .parentsUntil()

获取当前集合中，每个元素的所有父辈元素，直到遇到和第一个参数匹配的元素为止（不包含匹配元素）。

第一个参数可以是 CSS 选择器、DOM 元素、JQ 对象。

可以传入第二个参数，必须是 CSS 选择器，表示仅返回和该参数匹配的元素。

若没有指定参数，则所有的祖先元素都将被匹配，即和 `.parents()` 效果一样。

```js
// 获取 .item 元素的所有祖先元素
$('.item').parentsUntil();

// 查找 .item 元素的所有父辈元素，直到遇到 .parent 元素为止
$('.item').parentsUntil('.parent');

// 获取 .item 元素的所有是 div 元素的祖先元素，直到遇到 .parent 元素为止
$('.item').parentsUntil('.parent', 'div');
```

### .prev()

获取当前集合中所有元素的前一个同辈元素组成的集合。

可以传入一个 CSS 选择器作为参数，仅获取和该参数匹配的同辈元素的集合。

```js
// 获取 .box 元素的前一个元素的集合
$('.box').prev();

// 获取 .box 元素的前一个 div 元素的集合
$('.box').prev('div');
```

### .prevAll()

获取当前集合中所有元素的前面的所有同辈元素组成的集合。

可以传入一个 CSS 选择器作为参数，仅获取和该参数匹配的同辈元素的集合。

```js
// 获取 .box 元素前面的所有同辈元素
$('.box').prevAll();

// 获取 .box 元素前面的所有含 .selected 的同辈元素
$('.box').prevAll('.selected');
```

### .prevUntil()

获取当前集合中，每个元素前面所有的同辈元素，直到遇到和第一个参数匹配的元素为止（不包含匹配元素）。

第一个参数可以是 CSS 选择器、DOM 元素、JQ 对象。

可以传入第二个参数，必须是 CSS 选择器，表示仅返回和该参数匹配的元素。

```js
// 获取 .box 元素前面所有的同辈元素
$('.box').prevUntil();

// 获取 .box 元素前所有的同辈元素，直到遇到 .until 元素为止
$('.box').prevUntil('.until');

// 获取 .box 元素前面同辈的 div 元素，直到遇到 .until 元素为止
$('.box').prevUntil('.until', 'div');
```

### .next()

获取当前集合中所有元素的后一个同辈元素组成的集合。

可以传入一个 CSS 选择器作为参数，仅获取和该参数匹配的同辈元素的集合。

```js
// 获取 .box 元素的后一个元素的集合
$('.box').next();

// 获取 .box 元素的后一个 div 元素的集合
$('.box').next('div');
```

### .nextAll()

获取当前集合中所有元素的后面的所有同辈元素组成的集合。

可以传入一个 CSS 选择器作为参数，仅获取和该参数匹配的同辈元素的集合。

```js
// 获取 .box 元素后面的所有同辈元素
$('.box').nextAll();

// 获取 .box 元素后面的所有含 .selected 的同辈元素
$('.box').nextAll('.selected');
```

### .nextUntil()

获取当前集合中，每个元素后面所有的同辈元素，直到遇到和第一个参数匹配的元素为止（不包含匹配元素）。

第一个参数可以是 CSS 选择器、DOM 元素、JQ 对象。

可以传入第二个参数，必须是 CSS 选择器，表示仅返回和该参数匹配的元素。

```js
// 获取 .box 元素后面所有的同辈元素
$('.box').nextUntil();

// 获取 .box 元素后所有的同辈元素，直到遇到 .until 元素为止
$('.box').nextUntil('.until');

// 获取 .box 元素后面同辈的 div 元素，直到遇到 .until 元素为止
$('.box').nextUntil('.until', 'div');
```

### .closest()

从当前元素向上逐级匹配，返回最先匹配到的元素。

参数可以是 CSS 选择器、DOM 元素、JQ 对象。

```js
// 获取 .box 元素的父元素中最近的 .parent 元素
$('.box').closest('.parent');
```

### .siblings()

获取当前集合中，每个元素的兄弟元素。

可以传入一个 CSS 选择器作为参数，仅获取和该参数匹配的兄弟元素。

```js
// 获取 .box 元素的所有兄弟元素
$('.box').siblings();

// 获取 .box 元素的所有兄弟元素中含 .selected 的元素
$('.box').siblings('.selected');
```

### .add()

添加元素到当前集合中。

参数可以是 HTML 字符串、CSS 选择器、JQ 对象、DOM 元素、DOM 元素数组、NodeList。

```js
// 把含 .selected 的元素添加到当前集合中中
$('.box').add('.selected');
```

## 节点操作

### .empty()

移除当前元素中所有的子元素。

```js
$('.box').empty();
```

### .remove()

从 DOM 中移除当前集合中的元素。

可以传入一个 CSS 选择器作为参数，仅移除与该参数匹配的元素。

```js
// 移除所有 p 元素
$('p').remove();

// 移除所有含 .box 的 p 元素
$('p').remove('.box');
```

### .prepend()

在当前集合的元素内部的前面插入指定内容。

参数类型可以是 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。支持传入多个参数。

也可以传入一个返回 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象的回调函数，函数的第一个参数是当前元素的索引位置，第二个参数是元素的原始 HTML，函数中的 `this` 指向当前元素。

该方法返回原始集合。

```js
// 插入一个元素
$('<p>I would like to say: </p>').prepend('<b>Hello</b>');
// 结果：<p><b>Hello</b>I would like to say: </p>

// 插入多个元素
$('<p>I would like to say: </p>').prepend('<b>Hello</b>', '<b>World</b>');
// 结果：<p><b>Hello</b><b>World</b>I would like to say: </p>

// 通过回调函数插入一个元素
$('<p>Hello</p>').append(function (index, oldHTML) {
  return '<b>' + oldHTML + index + '</b>';
});
// 结果：<p><b>Hello0</b>Hello</p>
```

### .prependTo()

把当前集合中的元素追加到指定元素内部的前面。

参数可以是 CSS 选择器、HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。

该方法返回原始集合。

```js
$('<p>Hello</p>').prependTo('<p>I would like to say: </p>');

// 结果：[ <p><p>Hello</p>I would like to say: </p> ]
```

### .append()

在当前集合的元素内部的后面插入指定内容。

参数类型可以是 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。支持传入多个参数。

也可以传入一个返回 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象的回调函数，函数的第一个参数是当前元素的索引位置，第二个参数是元素的原始 HTML，函数中的 `this` 指向当前元素。

该方法返回原始集合。

```js
// 插入一个元素
$('<p>I would like to say: </p>').append('<b>Hello</b>');
// 结果：<p>I would like to say: <b>Hello</b></p>

// 插入多个元素
$('<p>I would like to say: </p>').append('<b>Hello</b>', '<b>World</b>');
// 结果：<p>I would like to say: <b>Hello</b><b>World</b></p>

// 通过回调函数插入一个元素
$('<p>Hello</p>').append(function (index, oldHTML) {
  return '<b>' + oldHTML + index + '</b>';
});
// 结果：<p>Hello<b>Hello0</b></p>
```

### .appendTo()

把当前集合中的元素追加到指定元素内部的后面。

参数可以是 CSS 选择器、HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。

该方法返回原始集合。

```js
$('<p>Hello</p>').appendTo('<p>I would like to say: </p>')
// 结果：<p>I would like to say: <p>Hello</p></p>
```

### .after()

在当前集合的元素后面插入指定内容，作为其兄弟节点。

参数类型可以是 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。支持传入多个参数。

也可以传入一个返回 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象的回调函数，函数的第一个参数为当前元素的索引位置，第二个参数为元素的原始 HTML，函数中的 `this` 指向当前元素。

该方法返回原始集合。

```js
// 插入一个元素
$('<p>I would like to say: </p>').after('<b>Hello</b>')
// 结果：<p>I would like to say: </p><b>Hello</b>

// 插入多个元素
$('<p>I would like to say: </p>').after('<b>Hello</b>', '<b>World</b>')
// 结果：<p>I would like to say: </p><b>Hello</b><b>World</b>

// 通过回调函数插入一个元素
$('<p>Hello</p>').after(function (index, oldHTML) {
  return '<b>' + oldHTML + index + '</b>';
});
// 结果：<p>Hello</p><b>Hello0</b>
```

### .insertAfter()

把当前集合中的元素插入到目标元素的后面，作为其兄弟元素。

如果当前集合中的元素是页面中已有的元素，则将移动该元素，而不是复制。如果有多个目标，则将克隆当前集合中的元素，并添加到每个目标元素的后面。

可以传入一个 HTML 字符串、CSS 选择器、DOM 元素、DOM 元素数组、JQ 对象作为参数，来指定目标元素。

```js
$('<b>Hello</b>').insertAfter('<p>I would like to say: </p>');
// 结果：<p>I would like to say: </p><b>Hello</b>
```

### .before()

在当前集合的元素前面插入指定内容，作为其兄弟节点。

参数类型可以是 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。支持传入多个参数。

也可以传入一个返回 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象的回调函数，函数的第一个参数为当前元素的索引位置，第二个参数为元素的原始 HTML，函数中的 `this` 指向当前元素。

该方法返回原始集合。

```js
// 插入一个元素
$('<p>I would like to say: </p>').before('<b>Hello</b>')
// 结果：<b>Hello</b><p>I would like to say: </p>

// 插入多个元素
$('<p>I would like to say: </p>').before('<b>Hello</b>', '<b>World</b>')
// 结果：<b>Hello</b><b>World</b><p>I would like to say: </p>

// 通过回调函数插入一个元素
$('<p>Hello</p>').before(function (index, oldHTML) {
  return '<b>' + oldHTML + index + '</b>';
});
// 结果：<b>Hello0</b><p>Hello</p>
```

### .insertBefore()

把当前集合中的元素插入到目标元素的前面，作为其兄弟元素。

如果当前集合中的元素是页面中已有的元素，则将移动该元素，而不是复制。如果有多个目标，则将克隆当前集合中的元素，并添加到每个目标元素的后面。

可以传入一个 HTML 字符串、CSS 选择器、DOM 元素、DOM 元素数组、JQ 对象作为参数，来指定目标元素。

```js
$('<p>I would like to say: </p>').insertBefore('<b>Hello</b>');
// 结果：<p>I would like to say: </p><b>Hello</b>
```

### .replaceWith()

用指定元素来替换当前集合中的元素。

参数可以是 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。

也可以传入一个返回 HTML 字符串、DOM 元素、DOM元素数组、JQ 对象的回调函数，函数的第一个参数为当前元素的索引位置，第二个参数为元素的原始 HTML，函数中的 `this` 指向当前元素。

该方法返回原始集合，即被替换掉的集合。

```js
// 用 <p>Hello</p> 替换所有的 .box 元素
$('.box').replaceWith('<p>Hello</p>');

// 用回调函数的返回值替换所有 .box 元素
$('.box').replaceWith(function (index, oldHTML) {
  return oldHTML + index;
});
```

### .replaceAll()

用当前集合中的元素替换指定元素。

参数为 CSS 选择器、DOM 元素、DOM 元素数组、JQ 对象。

该方法返回原始集合，即用于替换的元素的集合。

```js
// 用 .new 元素替换所有 .box 元素
$('.new').replaceAll('.box');
```

### .clone()

通过深度克隆来复制集合中的所有元素。

通过原生 `cloneNode` 方法深度克隆来复制集合中的所有元素。此方法不会有数据和事件处理程序复制到新的元素。这点和 jQuery 中利用一个参数来确定是否复制数据和事件处理不相同。

```js
$('body').append($("#box").clone())
```

## 表单

### .serializeArray()

把表单元素的值组合成由 `name` 和 `value` 的键值对组成的数组。

该方法可对单独表单元素进行操作，也可以对整个 `<form>` 表单进行操作

```js
$('form').serializeArray();
// [
//   { "name": "golang", "value":"456" },
//   { "name": "name", "value": "mdui" },
//   { "name": "password", "value": "" }
// ]
```

### .serialize()

将表单元素的值序列化。

```js
$('form').serialize();
// golang=456&name=mdui&password=
```

## 事件

### .on()

为集合中每个元素的特定事件绑定事件处理函数。具体用法见下方示例：

```js
// 绑定点击事件
$('.box').on('click', function (e) {
  console.log('点击了 .box 元素');
});

// 绑定多个事件
$('.box').on('click focus', function (e) {
  console.log('click 和 focus 事件都会触发该函数');
});

// 事件委托
$(document).on('click', '.box', function (e) {
  console.log('点击 .box 时会触发该函数');
});

// 同时绑定多个事件和事件处理函数
$('.box').on({
  'click': function (e) {
    console.log('触发了 click 事件');
  },
  'focus': function (e) {
    console.log('触发了 focus 事件');
  }
});

// 传入参数
$('.box').on('click', { key1: 'value1', key2: 'value2' }, function (e) {
  console.log('点击了 .box 元素，并为事件处理函数传入了参数');
  // e._data 为 {key1: 'value1', key2: 'value2'}
});

// 同时绑定多个事件和事件处理函数，并传入参数
$('.box').on({
  'click': function (e) {
    console.log('触发了 click 事件');
    // e._data 为 {key1: 'value1', key2: 'value2'}
  },
  'focus': function (e) {
    console.log('触发了 focus 事件');
    // e._data 为 {key1: 'value1', key2: 'value2'}
  }
}, { key1: 'value1', key2: 'value2' });

// 通过事件委托绑定事件，并传入参数
$(document).on('click', '.box', { key1: 'value1', keys: 'value2' }, function (e) {
  console.log('点击了 .box 元素，并为事件处理函数传入了参数');
  // e._data 为 {key1: 'value1', key2: 'value2'}
});

// 通过事件委托同时绑定多个事件和事件处理函数
$(document).on({
  'click': function (e) {
    console.log('触发了 click 事件');
  },
  'focus': function (e) {
    console.log('触发了 focus 事件');
  }
}, '.box');

// 通过事件委托同时绑定多个事件和事件处理函数，并传入参数
$(document).on({
  'click': function (e) {
    console.log('触发了 click 事件');
    // e._data 为 {key1: 'value1', key2: 'value2'}
  },
  'focus': function (e) {
    console.log('触发了 focus 事件');
    // e._data 为 {key1: 'value1', key2: 'value2'}
  }
}, '.box', { key1: 'value1', key2: 'value2' });

// 获取事件参数
$('.box').on('click', function (e, data) {
  // data 等于 e._detail
});

// 事件名支持使用命名空间
$('.box').on('click.myPlugin', function () {
  console.log('点击了 .box 元素');
});
```

### .one()

为每个匹配元素的特定事件绑定事件处理函数。但事件只会触发一次。

该方法的用法和 `.on()` 相同，所以不再举例了。

### .off()

为集合中每个元素解除绑定的事件。具体用法见下方示例：

```js
// 解除所有绑定的事件处理函数
$('.box').off();

// 解除绑定的指定事件
$('.box').off('click');

// 同时解除多个绑定的事件
$('.box').off('click focus');

// 解除绑定的指定事件处理函数
$('.box').off('click', callback);

// 解除通过事件委托绑定的事件
$(document).off('click', '.box');

// 解除通过事件委托绑定的指定事件处理函数
$(document).off('click', '.box', callback);

// 同时解绑多个事件处理函数
$('.box.').off({
  'click': callback1,
  'focus': callback2,
});

// 同时解绑多个通过事件委托绑定的事件处理函数
$(document).off({
  'click': callback1,
  'focus': callback2,
}, '.box');

// 事件名支持使用命名空间，下面的用法将解绑所有以 .myPlugin 结尾的事件
$(document).off('.myPlugin');
```

### .trigger()

触发指定的事件。具体用法见下方示例：

```js
// 触发指定的事件
$('.box').trigger('click');

// 触发事件时传入参数
$('.box').trigger('click', { key1: 'value1', key2: 'value2' });
```

## AJAX

### $.ajaxSetup()

为 Ajax 请求设置全局配置参数。

```js
$.ajaxSetup({
  // 默认禁止触发全局 AJAX 事件
  global: false,

  // 默认使用 POST 请求
  method: 'POST'
});
```

详细参数列表见下方的 [AJAX 参数](#ajax-参数)。

### $.ajax()

发送 AJAX 请求，返回 Promise。

```javascript
$.ajax({
  method: 'POST',
  url: './test.php',
  data: {
    key1: 'val1',
    key2: 'val2'
  },
  success: function (data) {
    console.log(data);
  }
});
```

详细参数列表见下方的 [AJAX 参数](#ajax-参数)。

### .ajaxStart()

全局 AJAX 事件。

AJAX 请求开始时执行函数。

```js
$(document).ajaxStart(function (event, xhr, options) {
  // xhr: XMLHttpRequest 对象
  // options: AJAX 请求的配置参数
});
```

### .ajaxSuccess()

全局 AJAX 事件。

AJAX 请求成功时执行函数。

```js
$(document).ajaxSuccess(function (event, xhr, options, data) {
  // xhr: XMLHttpRequest 对象
  // options: AJAX 请求的配置参数
  // data: AJAX 请求返回的数据
});
```

### .ajaxError()

全局 AJAX 事件。

AJAX 请求发生错误时执行函数。

```js
$(document).ajaxError(function (event, xhr, options) {
  // xhr: XMLHttpRequest 对象
  // options: AJAX 请求的配置参数
});
```

### .ajaxComplete()

全局 AJAX 事件。

AJAX 请求完成时执行函数。

```js
$(document).ajaxComplete(function (event, xhr, options) {
  // xhr: XMLHttpRequest 对象
  // options: AJAX 请求的配置参数
});
```

## AJAX 参数

<table>
  <thead>
    <tr>
      <th>参数名</th>
      <th>参数类型</th>
      <th>默认值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>url</td>
      <td>String</td>
      <td>当前页面的 URL</td>
      <td>请求的 URL 地址。</td>
    </tr>
    <tr>
      <td>method</td>
      <td>String</td>
      <td>GET</td>
      <td><p>请求方式。</p><p>包括：GET、POST、PUT、PATCH、HEAD、OPTIONS、DELETE</p></td>
	</tr>
	<tr>
	  <td>data</td>
	  <td>any</td>
	  <td>''</td>
	  <td>发送到服务器的数据。</td>
	</tr>
	<tr>
	  <td>processData</td>
	  <td>Boolean</td>
	  <td>true</td>
	  <td>是否把传递进来的数据转换成查询字符串发送。</td>
	</tr>
	<tr>
	  <td>async</td>
	  <td>Boolean</td>
	  <td>true</td>
	  <td>是否为异步请求。</td>
	</tr>
	<tr>
	  <td>cache</td>
	  <td>Boolean</td>
	  <td>true</td>
	  <td>是否从缓存中读取。只对 GET、HEAD 请求有效。</td>
	</tr>
	<tr>
	  <td>username</td>
	  <td>String</td>
	  <td>''</td>
	  <td>HTTP 访问认证的用户名。</td>
	</tr>
	<tr>
	  <td>password</td>
	  <td>String</td>
	  <td>''</td>
	  <td>HTTP 访问认证的密码。</td>
	</tr>
	<tr>
	  <td>headers</td>
	  <td>Object</td>
	  <td>{}</td>
	  <td><p>添加到 Headers 中的数据。可以在 beforeSend 回调函数中重写该值。</p><p>值为字符串或 null 的字段会被发送，值为 undefined 的字段会被移除。</p>
	  </td>
	<tr>
	<tr>
	  <td>xhrFields</td>
	  <td>Object</td>
	  <td>{}</td>
	  <td>
	  <p>设置在 XMLHttpRequest 对象上的数据。</p>
	  <pre><code>$.ajax({
  url: '一个跨域 URL',
  xhrFields: {
    withCredentials: true
  }
});</code></pre></td>
	<tr>
	<tr>
	  <td>statusCode</td>
	  <td>Object</td>
	  <td>{}</td>
	  <td><p>HTTP 状态码和函数组成的对象。</p>
	  <pre><code>$.ajax({
  statusCode: {
    404: function (xhr, textStatus) {
      alert('返回状态码为 404 时被调用');
    },
    200: function (data, textStatus, xhr) {
      alert('返回状态码为 200 时被调用');
    }
  }
});</code></pre>
		<p>状态码在 200 - 299 之间、或状态码为 304 时，表示请求成功，函数参数和 success 回调的参数相同；否则表示请求失败，函数参数和 error 回调的参数相同。</p>
	  </td>
	<tr>
	<tr>
	  <td>dataType</td>
	  <td>String</td>
	  <td>text</td>
	  <td><p>服务器返回的数据类型。</p><p>包括：text、json</p></td>
	<tr>
	<tr>
	  <td>contentType</td>
	  <td>String</td>
	  <td>application/x-www-form-urlencoded</td>
	  <td>内容的编码类型。为 false 时将不设置 Content-Type。</td>
	<tr>
	<tr>
	  <td>timeout</td>
	  <td>Number</td>
	  <td>0</td>
	  <td>请求的超时时间（毫秒）。为 0 时表示永不超时。</td>
	<tr>
	<tr>
	  <td>global</td>
	  <td>Boolean</td>
	  <td>true</td>
	  <td>是否触发全局 AJAX 事件。</td>
	<tr>
	<tr>
	  <td>beforeSend</td>
	  <td>Function</td>
	  <td></td>
	  <td><p>在请求发送之前调用。返回 false 时将取消 AJAX 请求。</p>
	  <pre><code>$.ajax({
  beforeSend: function (xhr) {
    // xhr 为 XMLHttpRequest 对象
  }
});</code></pre></td>
	<tr>
	<tr>
	  <td>success</td>
	  <td>Function</td>
	  <td></td>
	  <td><p>请求成功之后调用。</p>
	  <pre><code>$.ajax({
  success: function (data, textStatus, xhr) {
    // data 为 AJAX 请求返回的数据
    // textStatus 为包含成功代码的字符串
    // xhr 为 XMLHttpRequest 对象
  }
});</code></pre></td>
	<tr>
	<tr>
	  <td>error</td>
	  <td>Function</td>
	  <td></td>
	  <td><p>请求出错时调用。</p>
	  <pre><code>$.ajax({
  error: function (xhr, textStatus) {
    // xhr 为 XMLHttpRequest 对象
    // textStatus 为包含错误代码的字符串
  }
});</code></pre></td>
	<tr>
	<tr>
	  <td>complete</td>
	  <td>Function</td>
	  <td></td>
	  <td><p>请求完成之后调用。</p>
	  <pre><code>$.ajax({
  complete: function (xhr, textStatus) {
    // xhr 为 XMLHttpRequest 对象
    // textStatus 为一个包含成功或错误代码的字符串
  }
});</code></pre></td>
	<tr>
  </tbody>
</table>

## 更多常用方法

注意：下面这些方法只在 MDUI 框架中存在，若你直接使用 [mdui.jq 库](https://github.com/zdhxiong/mdui.jq)，则不存在这些方法。

### .reflow()

强制重绘当前元素。

```js
$('.box').reflow();
```

### .transition()

设置当前元素的 `transition-duration` 属性。

可以是带单位的时间值，也可以不带单位。若不带单位，则将自动添加 `ms` 作为单位。

```js
$('.box').transition(100);
```

### .transitionEnd()

在当前元素上添加 transitionend 事件回调。

回调函数的参数为 `transitionend` 事件对象，函数中的 `this` 指向当前元素。

```js
$('.box').transitionEnd(function () {
  console.log('.box 元素的 transitionend 事件已触发');
})
```

### .transform()

设置当前元素的 `transform` 属性。

```js
$('.box').transform('rotate(90deg)')
```

### .transformOrigin()

设置当前元素的 `transform-origin` 属性。

```js
$('.box').transformOrigin('top center')
```

### .mutation()

执行在当前元素及其子元素内注册的初始化函数。

```js
$('[mdui-collapse]').mutation()
```

### $.showOverlay()

创建并显示遮罩，返回遮罩层的 JQ 对象。

可以传入一个整数参数，表示遮罩层的 `z-index` 样式，默认为 `2000`。

```js
$.showOverlay();
```

### $.hideOverlay()

隐藏遮罩层。

如果调用了多次 `$.showOverlay()` 来显示遮罩层，则也需要调用相同次数的 `$.hideOverlay()` 才能隐藏遮罩层。可以通过传入参数 `true` 来强制隐藏遮罩层。

```js
$.hideOverlay();
```

### $.lockScreen()

锁定屏页面，禁止页面滚动。

```js
$.lockScreen();
```

### $.unlockScreen()

解除页面锁定。

如果调用了多次 `$.lockScreen()` 来显示遮罩层，则也需要调用相同次数的 `$.unlockScreen()` 才能隐藏遮罩层。可以通过传入参数 `true` 来强制隐藏遮罩层。

```js
$.unlockScreen();
```

### $.throttle()

函数节流。

传入一个函数作为参数，函数的第一个参数是执行的函数，第二个参数是延迟时间，单位为毫秒。

```js
$.throttle(function () {
  console.log('这个函数最多 100ms 执行一次');
}, 100)
```

### $.guid()

生成一个全局唯一的 ID。

```js
$.guid();
```

可以传入一个参数。当该参数值对应的 guid 不存在时，会生成一个新的 guid，并返回；当该参数对应的 guid 已存在，则直接返回已有 guid。

```js
// 下面两行代码返回值相同
$.guid('test');
$.guid('test');
```
