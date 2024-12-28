(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{386:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"由来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#由来"}},[t._v("#")]),t._v(" 由来")]),t._v(" "),s("p",[t._v("Java中有"),s("code",[t._v("assert")]),t._v("关键字，但是存在许多问题：")]),t._v(" "),s("ol",[s("li",[t._v("assert关键字需要在运行时显式开启才能生效，否则你的断言就没有任何意义。")]),t._v(" "),s("li",[t._v("用assert代替if是陷阱之二。assert的判断和if语句差不多，但两者的作用有着本质的区别：assert关键字本意上是为测试调试程序时使用的，但如果不小心用assert来控制了程序的业务流程，那在测试调试结束后去掉assert关键字就意味着修改了程序的正常的逻辑。")]),t._v(" "),s("li",[t._v("assert断言失败将面临程序的退出。")])]),t._v(" "),s("p",[t._v("因此，并不建议使用此关键字。相应的，在Hutool中封装了更加友好的Assert类，用于断言判定。")]),t._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("Assert类更像是Junit中的Assert类，也很像Guava中的Preconditions，主要作用是在方法或者任何地方对参数的有效性做校验。当不满足断言条件时，会抛出IllegalArgumentException或IllegalStateException异常。")]),t._v(" "),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("cn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hutool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNull")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"更多方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多方法"}},[t._v("#")]),t._v(" 更多方法")]),t._v(" "),s("ul",[s("li",[t._v("isTrue 必须为true，否则抛出IllegalArgumentException异常")]),t._v(" "),s("li",[t._v("isNull 必须是null值")]),t._v(" "),s("li",[t._v("notNull 不能是null值")]),t._v(" "),s("li",[t._v("notEmpty 不能为空，支持字符串，数组，集合等")]),t._v(" "),s("li",[t._v("notBlank 不能是空白字符串")]),t._v(" "),s("li",[t._v("notContain 不能包含指定的子串")]),t._v(" "),s("li",[t._v("noNullElements 数组中不能包含null元素")]),t._v(" "),s("li",[t._v("isInstanceOf 必须是指定类的实例")]),t._v(" "),s("li",[t._v("isAssignable 必须是子类和父类关系")]),t._v(" "),s("li",[t._v("state 会抛出IllegalStateException异常")])])])}),[],!1,null,null,null);s.default=e.exports}}]);