import{f as e}from"index-939d0dd8.js"/*tpa=https://cdn.w3cbus.com/mdui/design-1/assets/index-939d0dd8.js*/;const a={a1:"Menus display a list of choices on a transient sheet of material.",a2:"Menus appear upon interaction with a button, action, or other control. They display a list of choices, with one choice per line.",a3:"Menu items may be disabled if not applicable to a certain context. Contextual menus dynamically change their available menu items based on the current state of the app.",a4:"Types",a5:"Simple menus (mobile and tablet)<br />Cascading menus (desktop)",a6:"Elevation",a7:"Menus appear above other in-app elements.",a8:"Behavior",a9:"Scrollable",a10:"Alternatives",a11:"Simple dialogs",a12:"Usage",a13:"Menu items",a14:"Behavior",a15:"Simple Menus",a16:"Specs",a17:"A menu is a temporary piece of material that appears upon interaction with a button, action, pointer, or other control. It contains at least two menu items.",a18:"Each menu item consists of a discrete option or action that can affect the app, the view, or selected elements within a view.",a19:"Menus should not be used as a primary method for navigation within an app.",a20:"The action overflow in the app bar will emit a menu.",a21:"This action overflow menu contains five menu items: “Refresh”, “Settings”, “Send feedback”,“Help,” and “Signout”.",a22:"Menu labels",a23:"The label of a button or control should concisely and accurately reflect the items within the menu. Menu bars typically use single words as labels, like “file,” “format,” and “edit.” Other contexts may require longer labels.",a24:"Disabled menu options",a25:"Menus display a consistent set of menu items. A menu item may be enabled or disabled based on the current state of the application.",a26:"The title “View” accurately describes the unifying characteristic of the menu items it contains.",a27:"The title “Stuff” is not descriptive and does not help users predict what menu items they will find in the Stuff menu.",a28:"Contextual menus",a29:"Contextual menus dynamically change their available menu items based on the current state of the application.",a30:"Menu items that are irrelevant to the current context may be <strong>removed</strong>",a31:"Menu items which are relevant but need certain conditions to be met may be <strong>disabled</strong>. For example, the Copy menu option becomes enabled when text is selected.",a32:"Single menu-item states",a33:"Some app states may result in a contextual menu with only a single menu item. For example, when highlighting text on a web page, Android display only the Copy menu item, as users cannot cut or paste text.",a34:"Contextual menu",a35:"Menus are scrollable",a36:"If the height of a menu prevents all menu items from being displayed, the menu can scroll internally. One example is when viewing a menu on a phone in landscape orientation.",a37:"Internally scrolling menu",a38:"Cascading menus (Desktop only)",a39:"For menus that cascade, position the menus vertically and horizontally based on their proximity to screen edges.",a40:"Developer note: Implementations of this component may vary by platform. By using standard platform implementations, you will receive any related future improvements.",a41:"Cascading menu on desktop",a42:"Cascading dropdown menu on desktop",a43:"Dropdown menu",a44:"Action overflow menu",a45:"Single-line display",a46:"Each menu item is limited to a single line of text (a single word or short phrase) that describes the action it will perform when selected.",a47:"Menu items may also contain:",a48:"Icons and helper text, like keyboard shortcuts",a49:`Controls like checkmarks to indicate multiple selected items or states (See <a class="do-router" href="${e("/components/lists-controls.html")}">List controls</a>)`,a50:"Menu ordering",a51:"Menus with <strong>static content</strong> should have the most frequently used menu items placed at the top of the menu.",a52:"Menus with <strong>dynamic content</strong> may have other behavior, such as placing previously used fonts at the top of the menu. The order can change based on user actions.",a53:"Menu nesting",a54:"Menu items can reveal nested submenus. Ideally, limit nesting to one level deep, as it can be difficult to navigate multiple nested submenus.",a55:"Examples of menu items",a56:"Disabled actions",a57:"Displaying actions as disabled, rather than removing them, lets the user know they exist under the right conditions.",a58:"For example, Redo is disabled when there is nothing to redo. Cut and Copy are disabled until content is selected.",a59:"Examples of disabled actions",a60:"Location",a61:"Menus appear above all other in-app UI elements.",a62:"Example of menu appearing over all other in-app UI elements.",a63:"Menus are positioned over their emitting elements such that the currently selected menu item appears on top of the emitting element.",a64:"The currently selected menu item appears over the emitting element.",a65:"Do not display a duplicate of the selected menu item.",a66:"Do not display a duplicate of the selected menu item.",a67:"Positioning the menu below the emitting element separates it from its context.",a68:"Menus are positioned over their emitting element.",a69:"Dismissing menus",a70:"Dismiss a menu by tapping outside of the menu, or by tapping the emitting button (if visible).",a71:"Selecting a menu item should also dismiss the menu. An exception is when a menu allows for multiple items to be chosen, for example, by using checkmarks.",a72:"Mobile or tablet",a73:"Use simple menus in lists to display the options for a specific list item.",a74:"Vertical alignment",a75:"When close to a screen edge, simple menus vertically realign to make all menu items are completely visible.",a76:`<strong>Disambiguation:</strong> In contrast to simple menus, <a class="do-router" href="${e("/components/dialogs.html#dialogs-simple-dialogs")}">simple dialogs</a> can present additional detail related to the options available for a list item or provide navigational or orthogonal actions related to the primary task. Although they can display the same content, simple menus are preferred over simple dialogs because simple menus are less disruptive to the user’s current context.`,a77:"Item selection",a78:"Choosing an option immediately commits the option and closes the menu.",a79:"Cancelling selection",a80:"Touching outside of the menu, or pressing the system Back button, cancels the action and closes the menu.",a81:"Example of a simple menu",a82:"When opened, simple menus attempt to vertically align the currently selected menu item with the list item. The currently selected menu item is highlighted.",a83:"The currently selected menu item aligns vertically over the list item.",a84:"The currently selected menu item aligns vertically over the list item.",a85:"Do not arbitrarily position the first menu item over the list item.",a86:"The first menu item is arbitrarily positioned over the list item, regardless of the currently selected menu item.",a87:"When close to a screen edge, simple menus reposition their vertical alignment so that all menu items are completely visible.",a88:"The currently selected menu item normally would be positioned over the list item, but because doing so in this case would cause part of the menu to appear off-screen, the entire menu is repositioned vertically.",a89:"Simple menus appear over their emitting element, not below.",a90:"Simple menus appear over their emitting element.",a91:"Simple menus do not appear below their emitting element.",a92:"Menu width varies depending on string length, and on mobile is defined as a multiple of a 56dp unit.",a93:"Simple menus always maintain a 16dp margin (phone) or 24dp margin (tablet) to the left and right edges of the screen.",a94:"Simple menu with a 16dp margin.",a95:"Each unit is 56dp wide.",a96:"Minimum width on mobile",a97:"Simple menu with 16dp margins on the left and right.",a98:"Each unit is 56dp wide.",a99:"Maximum width on mobile (in both portrait and landscape)",a100:`If text in a simple menu wraps to a second line, use a <a class="do-router" href="${e("/components/dialogs.html#dialogs-simple-dialogs")}">simple dialog</a> instead. Simple dialogs can have rows with varying heights.`,a101:"Use a simple dialog if any text in a simple menu wraps to a second line.",a102:"Don’t truncate text in a simple menu. Use a simple dialog instead.",a103:"Menus show a persistent scroll bar when content is scrollable.",a104:"The maximum height of a simple menu should be one or more rows less than the view height. This ensures a tappable area outside of the simple menu with which to dismiss the menu.",a105:"Display a scroll bar by default for scrollable content.",a106:"Without a scroll bar, it’s unclear if there are additional menu items available.",a107:"Don’t duplicate the selected menu item.",a108:"Each menu item appears only once.",a109:"Don’t display a duplicate of the selected element.",a110:"Simple menus are always left-aligned with the start of the list item text and do not reposition horizontally based on the touch location.",a111:"Simple menus are left-aligned regardless of touch location.",a112:"Simple menus do not reposition based on the touch location.",a113:"Specs are provided for various sizes and types of menus and for different platforms. Add 8dp padding at the top and bottom of a menu.",a114:`The type style used for menus is defined by the <a class="do-router" href="${e("/style/typography.html")}">Material typographic scale</a>.`,a115:"By default, menus use: 16sp (mobile devices), 15px (desktop)",a116:"Dense interfaces can use: 14sp (mobile devices), 13px (desktop)",a117:"Mobile",a118:"Menu item height: 48dp<br />Menu item text left padding: 16dp<br />Menu item text bottom padding: 20dp<br />Top padding: 8dp<br />Bottom padding: 8dp<br />Typography: 16sp",a119:"Various widths",a120:"Menus of various widths: min width 1.5 x, 3x, 6x and 7x",a121:"Desktop",a122:"<strong>Default desktop menu<br /></strong>Menu item height: 32px<br />Menu item text left padding: 24px<br />Top padding: 8px<br />Bottom padding: 8px<br />Typography: 15px",a123:"<strong>Dense desktop menus<br /></strong>Menu item height: 24px<br />Menu item text left padding: 24px<br />Top padding: 4px<br />Bottom padding: 4px<br />Typography: 13px",a124:"Cascading menu",a125:"Cascading menu on desktop",a126:"Cascading redlines",a127:"<strong>Default Cascading menu<br/></strong>Default Cascading menu<br />Cascading menu top padding: 16px<br />Cascading menu left padding: 24px<br />Cascading menu item height: 32px<br />Menu item icon right padding: 32px<br />Menu sub-item left padding: 64px<br />Typography: 15px<br />Dense Cascading menus can use 13px typography",a128:"Material Design menus show choices on a transient sheet",a129:"Material Design app bar action overflow menu",a130:"Material Design action overflow menu with 5 items",a131:"Menu items unify under Material Design view",a132:"Non-descriptive title in Material Design menu items",a133:"Material Design contextual menus adapt based on app state",a134:"Material Design contextual menus adapt based on app state",a135:"Scrollable menu example in Material Design for landscape view",a136:"Material Design cascading menus for desktop layouts",a137:"Material Design menu items examples",a138:"Disabled actions in Material Design examples",a139:"Material Design menu overlaying in-app UI elements",a140:"Selected menu item overlays Material Design element",a141:"Material Design: Avoid showing duplicate menu items",a142:"Material Design menus overlay their emitting element",a143:"Simple menu example in Material Design",a144:"Selected menu item aligns vertically, Material Design",a145:"Vertical alignment of selected menu item in Material Design",a146:"Menu item positioned over list in Material Design",a147:"Material Design menu item repositioned vertically",a148:"Material Design simple menus over their element",a149:"Simple menus do not appear below in Material Design",a150:"Material Design menu width varies with string length",a151:"Material Design menu width varies with string length",a152:"Use simple dialog for Material Design multi-line menus",a153:"Use a simple dialog, not truncated text, in Material Design",a154:"Default scroll bar for scrollable content, Material Design",a155:"Material Design menu may have more items available",a156:"Each menu item appears only once in Material Design",a157:"Material Design: Avoid showing duplicate elements",a158:"Material Design: Left-aligned simple menus",a159:"Material Design: Simple menus don't reposition on touch",a160:"Material Design menu specs for various sizes and platforms",a161:"Material Design menus of widths: 1.5x, 3x, 6x, 7x",a162:"Default desktop menu in Material Design",a163:"Dense desktop menus in Material Design",a164:"Material Design cascading menu on desktop",a165:"Default Material Design Cascading Menu"};export{a as en};