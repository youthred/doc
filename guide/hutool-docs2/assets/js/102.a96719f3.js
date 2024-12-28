(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{433:function(e,t,a){"use strict";a.r(t);var r=a(7),v=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"由来"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#由来"}},[e._v("#")]),e._v(" 由来")]),e._v(" "),t("p",[e._v("并发在Java中算是一个比较难理解和容易出问题的部分，而并发的核心在线程。好在从JDK1.5开始Java提供了"),t("code",[e._v("concurrent")]),e._v("包可以很好的帮我们处理大部分并发、异步等问题。")]),e._v(" "),t("p",[e._v("不过，"),t("code",[e._v("ExecutorService")]),e._v("和"),t("code",[e._v("Executors")]),e._v("等众多概念依旧让我们使用这个包变得比较麻烦，如何才能隐藏这些概念？又如何用一个方法解决问题？"),t("code",[e._v("ThreadUtil")]),e._v("便为此而生。")]),e._v(" "),t("h2",{attrs:{id:"原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[e._v("#")]),e._v(" 原理")]),e._v(" "),t("p",[e._v("Hutool使用"),t("code",[e._v("GlobalThreadPool")]),e._v("持有一个全局的线程池，默认所有异步方法在这个线程池中执行。")]),e._v(" "),t("h2",{attrs:{id:"方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[e._v("#")]),e._v(" 方法")]),e._v(" "),t("h3",{attrs:{id:"threadutil-execute"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threadutil-execute"}},[e._v("#")]),e._v(" ThreadUtil.execute")]),e._v(" "),t("p",[e._v("直接在公共线程池中执行线程")]),e._v(" "),t("h3",{attrs:{id:"threadutil-newexecutor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threadutil-newexecutor"}},[e._v("#")]),e._v(" ThreadUtil.newExecutor")]),e._v(" "),t("p",[e._v("获得一个新的线程池")]),e._v(" "),t("h3",{attrs:{id:"threadutil-execasync"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threadutil-execasync"}},[e._v("#")]),e._v(" ThreadUtil.execAsync")]),e._v(" "),t("p",[e._v("执行异步方法")]),e._v(" "),t("h3",{attrs:{id:"threadutil-newcompletionservice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threadutil-newcompletionservice"}},[e._v("#")]),e._v(" ThreadUtil.newCompletionService")]),e._v(" "),t("p",[e._v("创建CompletionService，调用其submit方法可以异步执行多个任务，最后调用take方法按照完成的顺序获得其结果。若未完成，则会阻塞。")]),e._v(" "),t("h3",{attrs:{id:"threadutil-newcountdownlatch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threadutil-newcountdownlatch"}},[e._v("#")]),e._v(" ThreadUtil.newCountDownLatch")]),e._v(" "),t("p",[e._v("新建一个CountDownLatch，一个同步辅助类，在完成一组正在其他线程中执行的操作之前，它允许一个或多个线程一直等待。")]),e._v(" "),t("h3",{attrs:{id:"threadutil-sleep"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threadutil-sleep"}},[e._v("#")]),e._v(" ThreadUtil.sleep")]),e._v(" "),t("p",[e._v("挂起当前线程，是"),t("code",[e._v("Thread.sleep")]),e._v("的封装，通过返回boolean值表示是否被打断，而不是抛出异常。")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("ThreadUtil.safeSleep")]),e._v("方法是一个保证挂起足够时间的方法，当给定一个挂起时间，使用此方法可以保证挂起的时间大于或等于给定时间，解决"),t("code",[e._v("Thread.sleep")]),e._v("挂起时间不足问题，此方法在Hutool-cron的定时器中使用保证定时任务执行的准确性。")])]),e._v(" "),t("h3",{attrs:{id:"threadutil-getstacktrace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threadutil-getstacktrace"}},[e._v("#")]),e._v(" ThreadUtil.getStackTrace")]),e._v(" "),t("p",[e._v("此部分包括两个方法：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("getStackTrace")]),e._v(" 获得堆栈列表")]),e._v(" "),t("li",[t("code",[e._v("getStackTraceElement")]),e._v(" 获得堆栈项")])]),e._v(" "),t("h3",{attrs:{id:"其它"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[e._v("#")]),e._v(" 其它")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("createThreadLocal")]),e._v(" 创建本地线程对象")]),e._v(" "),t("li",[t("code",[e._v("interupt")]),e._v(" 结束线程，调用此方法后，线程将抛出InterruptedException异常")]),e._v(" "),t("li",[t("code",[e._v("waitForDie")]),e._v(" 等待线程结束. 调用 "),t("code",[e._v("Thread.join()")]),e._v(" 并忽略 InterruptedException")]),e._v(" "),t("li",[t("code",[e._v("getThreads")]),e._v(" 获取JVM中与当前线程同组的所有线程")]),e._v(" "),t("li",[t("code",[e._v("getMainThread")]),e._v(" 获取进程的主线程")])])])}),[],!1,null,null,null);t.default=v.exports}}]);