import{f as t}from"index-939d0dd8.js"/*tpa=https://cdn.w3cbus.com/mdui/design-1/assets/index-939d0dd8.js*/;const a={a1:"Buttons communicate the action that will occur when the user touches them.",a2:"Material buttons trigger an ink reaction on press. They may display text, imagery, or both. Flat buttons and raised buttons are the most commonly used types.",a3:"Additional button types include:",a4:"<strong>Persistent footer</strong> buttons are flat buttons that may be used in screen footers or dialogs.",a5:"<strong>Dropdown buttons</strong> display multiple selections.",a6:"<strong>Toggle buttons</strong> group related options. Icon toggles allow a single choice to be selected or deselected.",a7:"Flat buttons",a8:"Flat buttons are text-only buttons.<br />They may be used in dialogs, toolbars, or inline.<br />They do not lift, but fill with color on press.",a9:"Raised buttons",a10:"Raised buttons are rectangular-shaped buttons.<br />They may be used inline.<br />They lift and display ink reactions on press.",a11:"Elevation",a12:"Flat buttons: 0dp<br />Raised buttons: 2dp",a13:"Button types",a14:"Usage",a15:"Style",a16:"Flat buttons",a17:"Raised buttons",a18:"Persistent footer buttons",a19:"Dropdown buttons",a20:"Toggle buttons",a21:"There are three standard types of buttons:",a22:`<a class="do-router" href="${t("/components/buttons-floating-action-button.html")}">Floating action button</a>: A circular material button that lifts and displays an ink reaction on press`,a23:"Raised button: A typically rectangular material button that lifts and displays ink reactions on press",a24:"Flat button: A button made of ink that displays ink reactions on press but does not lift",a25:"Floating action button",a26:"Raised button",a27:"Flat button",a28:"Example of a floating action button",a29:"Example of a raised button",a30:"Example of a flat button",a31:"Choosing button style",a32:"Choosing a button style depends on the primacy of the button, the number of containers on screen, and the screen layout.",a33:"<strong>Function:</strong> Is it important and ubiquitous enough to be a floating action button?",a34:"<strong>Dimension:</strong> Choose raised or flat depending on the container it will be in and how many z-space layers you have on screen. There should not be many layers of objects on the screen.",a35:"<strong>Layout:</strong> Use primarily one type of button per container. Only mix button types when you have a good reason to, such as emphasizing an important function.",a36:"Button types",a37:"The type of button used should be suited to the context in which it appears.",a38:"Context",a39:"Button type",a40:"Dialogs",a41:'Use <a href="#buttons-flat-buttons">flat buttons</a> in dialogs.',a42:"Inline",a43:'<a href="#buttons-raised-buttons">Raised buttons</a> or <a href="#buttons-flat-buttons">flat buttons</a> can be used for inline buttons.',a44:"Always available",a45:'If your app requires actions to be persistent and readily available, you can use the floating action button or <a href="#buttons-persistent-footer-buttons">persistent footer buttons</a>.',a46:"Recommended button placement",a47:"Standard dialogs",a48:"Button alignment on screen: right",a49:"Place the affirmative button on the right, the dismissive button on the left.",a50:"Forms",a51:"Button alignment on screen: Left",a52:"Place the affirmative button on the left, the dismissive button on the right.",a53:"Cards",a54:"Buttons are best placed on the left side of a card to increase their visibility. However, as cards have flexible layouts, buttons may be placed in a location suited to the content and context, while maintaining consistency within the product.",a55:"Non-standard dialogs and modal windows",a56:"Button placement in non-standard dialogs and modal windows depends on the complexity of the content they contain.",a57:"For dialogs with relatively simple content, it is recommended to place buttons on the right side of a dialog, with the affirmative button to the right of the dismissive button.",a58:"For lengthy or complex forms, it is recommended to place buttons on the left of the form, with the affirmative button to the left of the dismissive button.",a59:"Typography",a60:"Button text should be capitalized in languages that have capitalization. For other languages, colored text on flat buttons distinguishes them from normal text.",a61:"Accessibility",a62:"To ensure usability for people with disabilities, give buttons a height of 36dp and give touchable targets a minimum height of 48dp.",a63:"Button height: 36dp<br />Touchable target height: 48dp",a64:"Corner radius",a65:"Buttons should have a 2dp corner radius.",a66:"Buttons should have a 2dp corner radius",a67:"Density",a68:"When mouse and keyboard are the primary input methods, button measurements can be slightly reduced to accommodate dense UIs.",a69:"Default Button",a70:"Button text: 14pt Roboto medium<br />Button height: 36dp<br />Button text left and right padding: 16dp<br />Corner radius: 2dp",a71:"Dense Button",a72:"Button text: 13pt Roboto medium<br />Button height: 32dp<br />Button text left and right padding: 16dp<br />Corner radius: 2dp",a73:"Size and padding",a74:"Examples of flat buttons in dialogs",a75:"<strong>Flat Button</strong><br />Height: 36dp<br />Minimum width: 88dp<br />Touch target height: 48dp<br />Corner radius: 2dp<br />Horizontal margin: 8dp<br />Horizontal padding: 8dp",a76:"Usage",a77:"Flat buttons are printed on material. They do not lift, but fill with color on press.",a78:"Use flat buttons in the following locations:",a79:"On toolbars",a80:"In dialogs, to unify the button action with the dialog content",a81:"Inline, with padding, so the user can easily find them",a82:"Flat buttons are appropriate in dialogs.",a83:"Flat buttons minimize distraction from content.",a84:"Correct use of flat buttons.",a85:"These raised buttons appear too prominently.",a86:"Specs",a87:"Flat Light/Light theme",a88:"Minimum width: 88dp<br />Height: 36dp<br />Corner radius: 2dp<br />Pressed: 40% #999999<br />Disabled text: 26% #000000",a89:"Flat Dark/Dark theme",a90:"Minimum width: 88dp<br />Height: 36dp<br />Corner radius: 2dp<br />Pressed: 25% #CCCCCC<br />Disabled text: 30% #FFFFFF",a91:"Dialog text padding: 24dp<br />Dialog button container height: 52dp<br />Dialog buttons: 8dp padding from container edges, aligned to the right of container (for LTR scripts)",a92:"Flat buttons in dialogs",a93:"<strong>Dialog buttons</strong><br />Button height: 36dp<br />Button top margin: 24dp<br />Button padding: 8dp<br />Button alignment: Right edge for LTR scripts<br />Button width: Varies based on button text length",a94:"Flat buttons with 12% opacity on focus",a95:"Behavior",a96:"Flat buttons",a97:"Usage",a98:"Raised buttons add dimension to mostly flat layouts. They emphasize functions on busy or wide spaces.",a99:"Use raised buttons to give more prominence to actions in layouts with a lot of varying content.",a100:"Raised buttons can help delineate sections of content on a page.",a101:"Raised buttons stand out more than flat buttons.",a102:"Don’t use flat buttons in UIs where they would be difficult to see.",a103:"Raised buttons behave like a piece of material resting on another sheet – they lift and fill with color on press.",a104:"Raised Light/Light theme",a105:"Minimum width: 88dp<br />Height: 36dp<br />Corner radius: 2dp<br />Disabled text: 26% #000000<br />Disabled button: 12% #000000",a106:"Focused:12% #000000 shade over the color",a107:"Raised Dark/Dark theme",a108:"Minimum width: 88dp<br />Height: 36dp<br />Corner radius: 2dp<br />Normal color: 500<br />Pressed color: 700<br />Disabled text: 30% #FFFFFF<br />Disabled button: 12% #FFFFFF",a109:"Focused:12% #000000 shade over the color",a110:"Button Elevation",a111:"Raised buttons have a default elevation of 2dp.",a112:"On desktop, raised buttons can gain this elevation on hover.",a113:"Dark/Light theme",a114:"Minimum width: 88dp<br />Height: 36dp<br />Elevation: 0dp<br />Disabled text: 30% #FFFFFF<br />Disabled button: 12% #FFFFFF",a115:"Behavior",a116:"Raised buttons",a117:"If your app requires actions to be persistent and readily available to the user, consider using the floating action button or persistent footer buttons.",a118:"Persistent footer buttons are 48dp tall.",a119:"Example of persistent footer buttons",a120:"Do not use raised buttons within persistent button areas.",a121:"A persistent footer button may be used for scrollable dialogs when a divider is added.",a122:"Persistent footer button in dialog",a123:"Persistent footer button in scrollable dialog",a124:"Mobile dropdown buttons",a125:"Dropdown button",a126:"A dropdown button selects between multiple selections. The button displays the current state and a down arrow. Available states may be shown as a list of strings, a palette, or icons, for example.",a127:"When a user interacts with the button, a menu covers the button and displays the possible states. Pressing a state dismisses the menu and updates the button to display this new state.",a128:"Scrolling within the dropdown behaves the same way a menu scrolls.",a129:"Closed dropdown button, open dropdown menu, and selected dropdown menu",a130:"Generic dropdown button with a list menu",a131:"Generic overflow dropdown button",a132:"The generic overflow dropdown button displays an arrow or menu button by default. When the button is pressed, the menu appears. Pressing an option on the menu navigates to further settings for that option.",a133:"Segmented dropdown button",a134:"A segmented dropdown has two sections: the current state and the dropdown arrow icon. Pressing the current state will cause that state’s action to fire within the screen. Pressing the dropdown arrow will display all the state options. Selecting one will change the displayed state.",a135:"Editable segmented dropdown button",a136:"This button has a segmented dropdown, where the displayed state is text editable, such as a font size picker. Pressing the current state causes both that state’s action to fire and makes the displayed state editable. Pressing the arrow displays all the state options.",a137:"Generic, segmented, and editable overflow dropdown buttons in normal, hover, focus, pressed, and selecting states",a138:"Animation of dropdown button",a139:"Desktop dropdowns",a140:"Desktop app bar specs",a141:"Desktop dropdown",a142:"Top and bottom padding: 16dp<br />Left padding: 24dp<br />Right margin: 16dp<br />Horizontal space between font styles: 24dp",a143:"Toggle buttons may be used to group related options. Arrange layout and spacing to convey that certain toggle buttons are part of a group.",a144:"Focus and pressed states may reinforce that toggles are part of a group. For example, when one button segment is focused, focus may be displayed simultaneously on the rest of the segment.",a145:"Toggle button requirements:",a146:"Have at least three toggle buttons in a group",a147:"Label buttons with text, an icon, or both",a148:"The following combinations are recommended:",a149:"Multiple and unselected",a150:"Exclusive and unselected",a151:"Exclusive only",a152:"Exclusive selection",a153:"Text justification toggle buttons present options for left, right, center, full, and justified text with only one item available for selection at a time. Selecting one option deselects any other.",a154:"No options are selected",a155:"Multiple selection",a156:"Logically-grouped options, like Bold, Italic, and Underline, allow multiple options to be selected.",a157:"One option is selected",a158:"Icon toggles",a159:"Icons are appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.",a160:"They are best located in app bars, toolbars, action buttons or toggles.",a161:`Icon toggles may display bounded or unbounded ink <a class="do-router" href="${t("/motion/choreography.html#choreography-radial-reaction")}">surface reaction</a> ripples beyond their touch-target bounds.`,a162:"Icon toggles in normal, hover, focused, pressed, and inactive states",a163:"The icon toggle focus indicator color and opacity are related to the color of the icon.",a164:"Material Design buttons indicate user actions",a165:"Material Design Floating Action Button",a166:"Material Design raised button",a167:"Flat button in Material Design",a168:"Floating action button in Material Design",a169:"Raised button example in Material Design",a170:"Flat button example in Material Design",a171:"Button style selection in Material Design",a172:"Material Design Button style",a173:"Material Design button with 2dp corner radius",a174:"Default Button in Material Design",a175:"Default Button style in Material Design",a176:"Dense Button in Material Design",a177:"Dense Button style in Material Design",a178:"Material Design flat buttons in dialogs examples",a179:"Material Design flat buttons are suitable for dialogs",a180:"Flat buttons enhance content focus in Material Design",a181:"Correct use of flat buttons in Material Design",a182:"Material Design raised buttons appear overly prominent",a183:"Material Design Flat Light Theme",a184:"Material Design Flat Dark Theme",a185:"Material Design dialog with 24dp padding and right-aligned buttons",a186:"Material Design flat buttons in dialogs",a187:"Material Design flat buttons, 12% opacity on focus",a188:"Use Material Design raised buttons for prominent actions",a189:"Material Design raised buttons define content sections",a190:"Material Design raised buttons are more prominent",a191:"Material Design: Avoid flat buttons in low visibility UIs",a192:"Material Design Raised Light Theme",a193:"Raised Dark theme in Material Design",a194:"Material Design Button Elevation",a195:"Material Design persistent footer buttons are 48dp tall",a196:"Material Design example of persistent footer buttons",a197:"Material Design: Avoid raised buttons in persistent areas",a198:"Material Design persistent footer button in dialog",a199:"Persistent footer button in Material Design dialog",a200:"Material Design dropdown button and menu",a201:"Material Design dropdown button with list menu",a202:"Material Design dropdown buttons in various states",a203:"Material Design desktop dropdown menu",a204:"Exclusive selection in Material Design",a205:"No options selected in Material Design",a206:"Material Design multiple selection feature",a207:"One option selected in Material Design",a208:"Material Design icon toggles in various states",a209:"Material Design icon toggle focus indicator color and opacity"};export{a as en};