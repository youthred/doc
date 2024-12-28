(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{342:function(t,e,v){"use strict";v.r(e);var _=v(7),a=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"由来"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#由来"}},[t._v("#")]),t._v(" 由来")]),t._v(" "),e("p",[t._v("IO的操作包括"),e("strong",[t._v("读")]),t._v("和"),e("strong",[t._v("写")]),t._v("，应用场景包括网络操作和文件操作。IO操作在Java中是一个较为复杂的过程，我们在面对不同的场景时，要选择不同的"),e("code",[t._v("InputStream")]),t._v("和"),e("code",[t._v("OutputStream")]),t._v("实现来完成这些操作。而如果想读写字符流，还需要"),e("code",[t._v("Reader")]),t._v("和"),e("code",[t._v("Writer")]),t._v("的各种实现类。这些繁杂的实现类，一方面给我们提供了更多的灵活性，另一方面也增加了复杂性。")]),t._v(" "),e("h2",{attrs:{id:"封装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#封装"}},[t._v("#")]),t._v(" 封装")]),t._v(" "),e("p",[t._v("io包的封装主要针对流、文件的读写封装，主要以工具类为主，提供常用功能的封装，这包括：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("IoUtil")]),t._v(" 流操作工具类")]),t._v(" "),e("li",[e("code",[t._v("FileUtil")]),t._v(" 文件读写和操作的工具类。")]),t._v(" "),e("li",[e("code",[t._v("FileTypeUtil")]),t._v(" 文件类型判断工具类")]),t._v(" "),e("li",[e("code",[t._v("WatchMonitor")]),t._v(" 目录、文件监听，封装了JDK1.7中的WatchService")]),t._v(" "),e("li",[e("code",[t._v("ClassPathResource")]),t._v("针对ClassPath中资源的访问封装")]),t._v(" "),e("li",[e("code",[t._v("FileReader")]),t._v(" 封装文件读取")]),t._v(" "),e("li",[e("code",[t._v("FileWriter")]),t._v(" 封装文件写入")])]),t._v(" "),e("h2",{attrs:{id:"流扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流扩展"}},[t._v("#")]),t._v(" 流扩展")]),t._v(" "),e("p",[t._v("除了针对JDK的读写封装外，还针对特定环境和文件扩展了流实现。")]),t._v(" "),e("p",[t._v("包括：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("BOMInputStream")]),t._v("针对含有BOM头的流读取")]),t._v(" "),e("li",[e("code",[t._v("FastByteArrayOutputStream")]),t._v(" 基于快速缓冲FastByteBuffer的OutputStream，随着数据的增长自动扩充缓冲区（from blade）")]),t._v(" "),e("li",[e("code",[t._v("FastByteBuffer")]),t._v(" 快速缓冲，将数据存放在缓冲集中，取代以往的单一数组（from blade）")])])])}),[],!1,null,null,null);e.default=a.exports}}]);