import{f as a}from"index-939d0dd8.js"/*tpa=https://cdn.w3cbus.com/mdui/design-1/assets/index-939d0dd8.js*/;const i={a1:"Tab 选项卡可以方便地在不同视图间浏览和切换。",a2:"选项卡可以在高级别组织内容，例如在视图、数据集或应用的功能方面切换。",a3:"选项卡显示为其关联内容上方的单行元素。选项卡标签应简明扼要地描述其中的内容。",a4:"因为滑动手势被用于切换选项卡，所以不要在选项卡的内容中包含支持滑动手势的控件，以免手势产生冲突。",a5:"类型",a6:"固定<br />可滚动",a7:"选项卡标签",a8:"选项卡标签可以包含图标和文本。",a9:"颜色",a10:"使用应用的强调色、或和文本对比度较高的颜色。",a11:"用法",a12:"内容",a13:"选项卡类型",a14:"规格",a15:"选项卡提供了显示分组内容的功能。选项卡标签简明扼要的描述了与标签相关的分组的内容。",a16:"移动端的选项卡",a17:"默认应用栏和固定选项卡栏",a18:"展开的应用栏和固定选项卡栏",a19:"在滚动内容时选项卡固定在页面顶部",a20:"内嵌搜索，应用栏和固定选项卡栏",a21:"默认应用栏和可滚动选项卡栏",a22:"文本颜色和选项卡指示器颜色相同。",a23:"默认应用栏和含图标的固定选项卡栏",a24:"图标颜色和选项卡指示器相同。",a25:"桌面端的选项卡",a26:"默认应用栏和选项卡栏",a27:"含下拉菜单的选项卡栏",a28:"已打开下拉菜单的选项卡",a29:"已从下拉菜单中选中了 Books 的选项卡",a30:"含翻页的选项卡",a31:"带翻页的选项卡滚动后",a32:"居中的选项卡",a33:"何时使用",a34:"使用选项卡可以在高级别组织内容，例如，显示报纸的不同部分。不要把选项卡用于轮播内容或进行内容分页。这些用例涉及查看内容，而不是在内容组之间导航。",a35:`使用选项卡在高级视图间导航的更多细节，详见<a class="do-router" href="${a("/patterns/navigation.html#navigation-patterns")}">导航 - 模式</a>中的 “选项卡” 。`,a36:"不要在选项卡内容中包含支持滑动手势的内容，因为滑动手势是用于在选项卡之间导航的。例如，避免在选项卡中包含一个可以拖动的地图，或者一个可以滑动删除的列表。",a37:"固定的选项卡应该只包含有限数量的选项，并且保持选项的位置不变，有利于用户记忆。可滚动选项卡用于有很多选项或选项数量可变的情况。",a38:"选项卡在含同等重要的内容的选项之间切换。",a39:"这个选项卡在含不同等重要的内容的选项之间切换。",a40:"选项卡特性",a41:"选项卡使内容在统一的位置显示。",a42:"格式规范：",a43:"把选项卡显示为单行。如果有需要，把选项标签包裹到第二行，剩下的截断。",a44:"选项卡不要互相嵌套。",a45:"高亮与可见内容对应的选项卡。",a46:"将选项卡分层组合在一起。将一组选项卡与其内容相关联。",a47:"保持选项卡与其内容相邻，以保持两者之间的联系。",a48:"选项卡显示成单行。",a49:"选项卡没有显示成单行。",a50:"使用内容层次结构，使选项卡与当前显示的内容相关。",a51:"选项卡不能嵌套。",a52:"选项卡中显示的内容可以有很大的不同，甚至选项卡之间也是如此。例如，选项卡可以显示不同年份的艺术作品集、或包含不同类型的设置项。",a53:"一组选项卡中的所有内容应该根据较大的分组原则进行分组，每个选项卡的内容与其他选项卡的内容都互相独立。",a54:"选项卡标签应该从逻辑上组织相关内容，并提供更有意义的区分。",a55:"选项卡标签可以包含图标和文本。当使用文字标签时，应该使用短标题。",a56:"避免进行跨选项卡的内容比较。如果一个跨选项卡的比较是有意义的，也许就说明应该换一种内容组织或呈现方式，把内容放到更相近的地方。",a57:"超过选项卡最大长度的长标签可以在被截断之前换行到第二行。",a58:"不要调整单行标签的大小。如果标签太长，请将文本跨两行或使用可滚动选项卡。",a59:"在截断标签之前可以对标签进行换行。过早截断标签会妨碍理解。",a60:"不要把文本标签和图标混合使用。全部使用文本标签、或全部使用图标标签。",a61:"根据平台和使用环境，选项卡内容可以表现为固定选项卡或可滚动选项卡。",a62:"固定选项卡",a63:"固定选项卡同时显示所有的选项卡，适合用于需要在固定的位置快速切换选项卡的场景，例如在 Google 地图中切换路线的交通方式。",a64:"固定选项卡中的选项宽度都相同，可以通过视图宽度除以选项卡数量算出选项宽度、或者根据最宽的选项的标签得出选项宽度。要在固定选项卡之间导航，可以触摸选项或者在内容区域向左或向右滑动。",a65:"移动设备上的固定选项卡",a66:"可滚动选项卡",a67:"可滚动选项卡在任何时刻都只能显示选项卡集的一部分。它们可以包含更长的选项卡标签和更多的选项卡数量。可滚动选项卡最适合用于用户不需要直接对不同的选项卡进行比较，可以直接通过滑动的方式浏览不同选项卡的内容。",a68:"通过触摸选项卡或在内容区域左右滑动，可以在可滚动的选项卡之间切换。要滚动选项卡而不需要切换选项卡，可以在选项卡上左右滑动。",a69:"移动端的可滚动选项卡",a70:"可滚动选项卡示例",a71:"固定选项卡",a72:"视图的宽度除以选项卡的数量，可以计算出每个选项卡的宽度。或者，使每个选项卡的宽度都等于最宽的那个选项卡的宽度。",a73:"如果选项卡边缘和视图边缘之间的间距小于等于 16dp，使用全宽选项卡代替居中选项卡。",a74:"最小和最大宽度（包括边距）",a75:"最大宽度：264dp",a76:"最小宽度：在比较大的视图上为 160dp，比较小的视图上为 72dp",a77:"高度",a78:"边距",a79:"文本左右 12dp",a80:"单行选项卡文本底部 20dp，双行选项卡文本底部 12dp",a81:"对齐方式",a82:"较小的视图上全宽显示",a83:"较大的视图上居中对齐",a84:"指示器",a85:"高度：2dp",a86:"颜色：#fff 或强调色",a87:"移动设备上的固定选项卡，仅文本，纵向",a88:"移动设备上的固定选项卡，仅文本，纵向",a89:"仅含文本的选项卡",a90:"文本",a91:"12sp 产生换行时，最多可以有两行",a92:"全部使用大写文本",a93:"垂直水平居中",a94:"激活状态颜色：#fff 或强调色",a95:"未聚焦的选项卡颜色：#fff 70%",a96:"移动设备上横屏时，选项卡左对齐的示例",a97:"移动设备上横屏时，选项卡居中对齐的示例",a98:"含图标和文本的选项卡",a99:"高度",a100:"图标",a101:"对齐方式",a102:"文本和图标在选项卡中垂直居中对齐",a103:"边距",a104:"图标和文本之间 10dp",a105:"文本下方 16dp",a106:"移动设备上的固定选项卡，含图标和文本",a107:"仅含图标的选项卡",a108:"图标在选项卡中垂直居中对齐",a109:"图标下方 12dp",a110:"移动设备上的固定选项卡，仅含图标",a111:"可滚动选项卡",a112:"最左侧的选项卡内容和关键线对齐。在横屏和竖屏时，对齐的关键线会不同。",a113:"每一个选项卡的宽度都是单独计算的。",a114:"最小宽度和最大宽度（包含边距）",a115:"最大宽度（以较小者为准）：264dp 或（视图宽度减去 56dp）",a116:"最小宽度：较大的视图上为 160dp，较小的视图上为 72dp",a117:"文本左右 12dp",a118:"单行选项卡文本底部 20dp，双行选项卡文本底部 12dp",a119:"可滚动选项卡",a120:"避免过长的选项卡标签，如此处所示。可滚动选项卡的最大宽度包含了换行的文本。",a121:"文本",a122:"12sp 当产生换行时，最多只能有两行",a123:"全部使用大写文本",a124:"垂直居中对齐",a125:"激活的文本颜色：#fff 或强调色",a126:"未聚焦的选项卡文本颜色：#fff 70%",a127:"避免过长的选项卡标签，如此处所示。在移动端横屏模式下，这些最大宽度的选项卡和左侧的关键线对齐。",a128:"桌面端",a129:"最小宽度和最大宽度（包含边距）",a130:"最大宽度（以较小者为准）：264dp 或（视图宽度减去 56dp）",a131:"最小宽度：在较大的视图上为 160dp，较小的视图上为 72dp",a132:"高度",a133:"对齐方式",a134:"居中对齐或和左侧关键线对齐",a135:"文本",a136:"全部使用大写文本",a137:"垂直居中对齐",a138:"产生换行时，最多只能有两行",a139:"激活状态颜色：#fff 或强调色",a140:"未聚焦的选项卡文本颜色：#fff 70%",a141:"边距",a142:"文本左右 24dp",a143:"单行选项卡文本底部 20dp，双行选项卡文本底部 12dp",a144:"第一个选项卡文本左侧边距：80dp",a145:"指示器",a146:"高度：2dp",a147:"颜色：#fff 或强调色",a148:"桌面端的选项卡",a149:"触摸选项卡的动画",a150:"注意：此组件的实现可能因平台而异。通过使用标准平台实现，您将收到任何相关的进一步改进。",a151:"触摸选项卡时的动画。",a152:"Material Design 的选项卡便捷切换视图",a153:"Material Design 中的默认应用栏与固定选项卡栏",a154:"Material Design 中的展开式应用栏与固定选项卡栏",a155:"Material Design 中滚动内容时选项卡固定在顶部",a156:"Material Design 中的内嵌搜索和固定选项卡栏",a157:"Material Design 中的默认应用栏与滚动选项卡栏",a158:"Material Design 中文本颜色与选项卡指示器一致",a159:"Material Design 的默认应用栏及图标固定选项卡栏",a160:"Material Design 中的图标颜色与选项卡指示器相同",a161:"Material Design 的默认应用栏和选项卡栏",a162:"Material Design 中的下拉菜单选项卡栏",a163:"Material Design 中的下拉菜单选项卡",a164:"Material Design 中已选择 Books 选项卡",a165:"Material Design 中的翻页选项卡",a166:"滚动带翻页的 Material Design 选项卡",a167:"Material Design 中的居中选项卡",a168:"Material Design 中的选项卡用于切换同等重要内容",a169:"Material Design 中的选项卡切换不同内容",a170:"Material Design 中的选项卡为单行显示",a171:"Material Design 中的选项卡未显示为单行",a172:"Material Design 中选项卡与内容层次结构相关",a173:"Material Design 选项卡不能嵌套",a174:"Material Design 中的长标签可换行显示",a175:"Material Design 中的标签应跨行或使用滚动选项卡",a176:"Material Design 中的标签换行和截断注意事项",a177:"Material Design 中应全用文本标签或全用图标标签",a178:"Material Design 中的移动设备固定选项卡",a179:"Material Design 中的移动设备固定选项卡",a180:"Material Design 中的可滚动选项卡示例",a181:"Material Design 中的可滚动选项卡示例",a182:"Material Design 中的固定选项卡，文本垂直排列",a183:"Material Design 中的固定选项卡，纵向文本",a184:"横屏时，Material Design 中选项卡左对齐示例",a185:"移动设备横屏时的 Material Design 选项卡居中示例",a186:"Material Design 中的固定选项卡，带图标和文本",a187:"Material Design 中的移动设备固定选项卡，带图标和文本",a188:"Material Design 中的移动设备固定选项卡，图标显示",a189:"Material Design 中的移动设备固定选项卡图标",a190:"Material Design 中的可滚动选项卡",a191:"Material Design 中的可滚动选项卡，避免长标签",a192:"Material Design 中的选项卡标签应避免过长对齐",a193:"Material Design 的桌面端选项卡"};export{i as zhCn};