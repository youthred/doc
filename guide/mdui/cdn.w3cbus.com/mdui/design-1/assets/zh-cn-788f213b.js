import{f as a}from"index-939d0dd8.js"/*tpa=https://cdn.w3cbus.com/mdui/design-1/assets/index-939d0dd8.js*/;const i={a1:"通过单击底部导航栏，你能轻松地在应用的不同视图之间切换。",a2:"点击底部导航图标，可以直接进入对应视图、或者刷新当前视图。",a3:"底部导航主要用于移动设备。如果要在桌面设备上实现类似效果，请使用侧边栏导航。",a4:"用法",a5:"有 3 - 5 个顶级视图",a6:"对应的视图要可以直接访问",a7:"颜色",a8:"激活状态的导航项的图标和文字使用主色。如果底部导航栏有背景色，则使用白色或黑色的图标和文字。",a9:"规格",a10:"导航项的宽度: 视图的宽度除以导航项的数量 (最大 168dp、最小 80dp)",a11:"高度: 56dp",a12:"图标: 24 x 24dp",a14:"用法",a15:"样式",a16:"操作",a17:"规格",a19:"底部导航可以快速切换应用的不同视图。它主要为移动端设计。",a20:"在较大的显示器上，例如桌面显示器，可以通过侧边栏导航实现类似的效果。例如，在侧边栏使用简洁的 “轨道” 来排列导航图标。",a21:"移动端的底部导航",a22:"在较大的显示器上（如平板和桌面端）的左侧导航",a23:"使用场景",a24:"底部导航用于：",a25:`有 3 - 5 个同等重要的顶级视图 （备选方案: 可从应用的任何地方进行访问的<a class="do-router" href="${a("/patterns/navigation-drawer.html")}">抽屉栏导航</a>）`,a26:`目标视图需要从应用的任何地方直接进行访问 （备选方案: 仅在一个或两个视图中使用的<a class="do-router" href="${a("/components/tabs.html")}">标签</a>）`,a27:"底部导航栏显示 3 - 5 个导航项。",a28:"如果只有 3 个以下的视图需要切换，考虑使用标签进行代替。",a29:"如果你的底部导航有 5 个以上的导航项，请将超出部分的导航项放在其他位置的导航中（如抽屉栏导航）。",a30:"视图固定在底部导航栏中。",a31:"避免在底部导航栏中出现滚动条。",a32:"在底部导航中有 5 个导航项。",a33:"底部导航的导航项数量不要超过 5 个，否则它们之间的间距会过小。",a34:"底部导航和标签",a35:"尽量不要同时使用底部导航和标签，因为同时使用它们可能会导致导航的混乱。例如，两个对应同一内容的底部导航和标签，在点击时，会混合显示不同过渡效果。",a37:"图标和文本",a38:"底部导航项中的图标应该和它的目标视图的内容相符。",a39:"根据下面的条件来为每个导航项设置样式：",a40:"导航项<strong>激活</strong>时，显示导航项的图标和文本",a41:"当只有 <strong>3 个导航项</strong>时，始终同时显示图标和文本。",a42:"当有 <strong>4 个或 5 个</strong>导航项时，在不激活时只显示图标。",a43:"颜色",a44:"激活状态的导航项的图标和文本需要使用主色。",a45:"使用主色来表明激活状态。",a46:"避免使用不同颜色的图标和文字。",a47:"如果底部导航已有背景色，将导航项的图标和文本设置为白色或黑色。",a48:"如果底部导航栏已有背景色，使用黑色或白色的图标和文本。",a49:"避免在有背景色的底部导航栏上使用其他颜色的图标和文本。",a50:"文本标签",a51:"文本标签是对导航项图标的简短说明。这些文本不会被截断或换行，所以应避免使用长文本。",a52:"使用短文本",a53:"避免使用多行文本",a54:"避免截断文本，因为这样会导致理解困难。",a55:"避免为了使文本在单行显示而缩小文本。",a57:"使用底部导航栏，可以从一个主题的较深层级快速进入另一个主题的顶部。用户在不同层级间切换时，应使底部导航栏始终显示、或者在滚动时显示或隐藏，来使底部导航栏始终可用。",a58:"底部导航栏不能用于：",a59:"侧重于单个任务的视图，例如电子邮件的“撰写”界面",a60:"包含用户首选项或设置的视图",a61:"在 Android 上，不能通过点击后退按钮来切换底部的导航项。",a62:"底部导航图标",a63:"点击底部导航的图标将直接进入相应视图，或刷新当前激活的视图。每个图标都必须指向一个目标视图，不能打开菜单或对话框。",a64:"点击当前激活的底部导航项，将跳转到对应视图的顶部。",a65:"在不同的底部导航项之间切换时，对应的视图会被刷新。",a66:"滚动",a67:"底部导航栏会随着界面的滚动而显示或隐藏：",a68:"向下滚动时隐藏底部导航栏",a69:"向上滚动时显示底部导航栏",a70:"底部导航栏可以自动隐藏和显示，以带给用户沉浸式的浏览体验。",a71:"在应用的层次级页面之间切换时，底部导航栏应保持可见。",a72:"在内容区域使用滑动手势无法进行视图的切换。",a73:"在不同视图中切换时使用淡入淡出的过渡效果。",a74:"避免使用横向滑动来切换视图。",a76:"固定状态的底部导航栏",a77:"用底部导航栏的宽度除以导航项的个数，就是每个导航项的宽度：",a78:"导航项的宽度 = 导航栏宽度 / 导航项数量",a79:"例如：导航栏宽度是 360dp，有 3 个导航项，那么每个导航项宽度是 120dp。",a80:"桌面设备以及更大的显示设备上",a81:"每个导航项的宽度不要超过最大宽度。",a82:"移动设备上，固定状态的底部导航栏",a83:"移动设备上，固定状态的底部导航栏",a84:"最小宽度和最大宽度（这个值已经包含了内边距）：",a85:"最大宽度：168dp",a86:"最小宽度：80dp",a87:"高度：",a88:"图标大小：",a89:"内容对齐方式：",a90:"文本和图标需水平居中。",a91:"内边距：",a92:"图标上方 6dp（激活状态），8dp（不激活状态）",a93:"文本下方内边距 10dp",a94:"文本的左右内边距 12dp",a95:"文本标签：",a96:"Roboto Regular 14sp（激活状态）",a97:"Roboto Regular 12sp（不激活状态）",a98:"最小宽度 80dp",a99:"内边距 12dp",a100:"高度 56dp",a101:"文本的左右内边距 12dp",a102:"文本下方内边距 10dp",a103:"最大宽度 168dp",a104:"内边距 12dp",a105:"底部导航栏示例",a106:"大屏幕移动设备上，固定状态的底部导航栏。",a107:"高度 56dp",a108:"图标大小 24 x 24dp",a109:"图标上方内边距 6dp（激活状态）",a110:"图标上方内边距 8dp（不激活状态）",a111:"文本下方内边距 10dp",a112:"平板设备上，固定状态的底部导航栏",a113:"高度 56dp",a114:"图标大小 24 x 24dp",a115:"图标上方内边距 6dp（激活状态）",a116:"图标上方内边距 8dp（不激活状态）",a117:"文本下方内边距 10dp",a118:"可切换的底部导航栏",a119:"最小宽度和最大宽度（包含内边距）：",a120:"激活状态",a121:"最大宽度：168dp",a122:"最小宽度：96dp",a123:"不激活状态",a124:"最大宽度：96dp",a125:"最小宽度：56dp",a126:"高度：",a127:"图标大小：",a128:"内容对齐方式：",a129:"文本和图标需水平居中。",a130:"内边距:",a131:"图标上方 6dp（激活状态），图标上下两册 16dp（不激活状态）",a132:"图标下方 10dp",a133:"文本标签：",a134:"Roboto Regular 14sp（激活状态）",a135:"移动设备上，可切换的底部导航栏",a136:"高度 56dp",a137:"图标大小 24 x 24dp",a138:"图标上方内边距 6dp（激活状态）",a139:"文本下方内边距 10dp",a140:"图标下方内边距 6dp",a141:"没有文本时，图标下方内边距 16dp",a142:"移动设备上，可切换的底部导航栏",a143:"激活状态：最小宽度 96dp",a144:"不激活状态：最小宽度 56dp",a145:"激活的导航项上的文本标签可以使用最大宽度。",a146:"激活状态：最大宽度 168dp",a147:"不激活状态：最大宽度 96dp",a148:"激活的导航项上的文本标签可以使用最大宽度。",a149:"大屏移动设备上的可切换底部导航栏",a150:"高度 56dp",a151:"图标大小 24 x 24dp",a152:"图标上方内边距 6dp（激活状态）",a153:"文本下方内边距 10dp",a154:"图标下方内边距 6dp",a155:"没有文本时，图标下方内边距 16dp",a156:"在平板上的可切换底部导航栏",a157:"高度 56dp",a158:"图标大小 24 x 24dp",a159:"图标上方内边距 6dp（激活状态）",a160:"文本下方内边距 10dp",a161:"图标下方内边距 6dp",a162:"没有文本时，图标下方内边距 16dp",a163:"层级",a164:"因为 Snackbar 的层级高度为 6dp，而底部导航栏的层级高度为 8dp，所以 Snackbar 会显示在底部导航栏的后面。",a165:"而 Bottom sheets, navigation drawers, 和 keyboards 都显示在底部导航栏的前面，完全覆盖住底部导航栏。",a166:"Snackbar 在底部导航栏后面。",a167:"Bottom sheets 和 keyboards 在底部导航栏前面，完全覆盖住底部导航栏。",a168:"应用结构的正交视图。",a169:"Material Design 中的底部导航，轻松切换不同视图",a170:"Material Design 中的移动端底部导航",a171:"Material Design 的左侧导航在平板和桌面端显示",a172:"Material Design 的底部导航栏支持 3 - 5 个项",a173:"Material Design 中建议使用标签替代少于 3 个视图的切换",a174:"Material Design 中的底部导航栏视图",a175:"Material Design 中的底部导航栏无滚动条",a176:"Material Design 中的底部导航有 5 个项",a177:"Material Design 中的底部导航项不超过 5 个",a178:"Material Design 中使用主色表示激活状态",a179:"Material Design 中的图标和文字应使用相同颜色",a180:"Material Design 中底部导航栏图标和文本使用黑白色",a181:"Material Design 背景色底部导航栏禁用其它颜色图标和文本",a182:"Material Design 中底部导航栏应使用短文本",a183:"Material Design 中底部导航栏应避免使用多行文本",a184:"Material Design 中底部导航栏应避免截断文本",a185:"Material Design 中底部导航栏应避免缩小文本",a186:"Material Design 的固定底部导航栏",a187:"Material Design 中底部导航栏的最小宽度和内边距",a188:"Material Design 中底部导航栏的文本内边距和高度",a189:"Material Design 中底部导航栏的最大宽度和内边距",a190:"Material Design 底部导航栏示例",a191:"Material Design 中的固定状态底部导航栏",a192:"Material Design 的固定底部导航栏适用于平板设备",a193:"Material Design 中的可切换底部导航栏",a194:"Material Design 底部导航栏激活状态最小宽度",a195:"Material Design 底部导航栏不激活状态最小宽度",a196:"Material Design 中的激活导航项文本标签最大宽度",a197:"Material Design 底部导航栏激活状态最大宽度",a198:"Material Design 底部导航栏不激活状态最大宽度",a199:"Material Design 中激活导航项的文本标签最大宽度使用",a200:"Material Design 中的可切换底部导航栏",a201:"Material Design 的平板可切换底部导航栏",a202:"Material Design 中的 Snackbar 位于底部导航栏后面",a203:"Material Design 中的应用结构正交视图"};export{i as zhCn};