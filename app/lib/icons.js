/**
 * @file icons.js 
 * @namespace icons.js
 * @summary /lib/icons/icons.js
 * @since v1.0.0
 * @author Matthew McFarland
 * @desc 
 * Copy this file and make sure it has the same members/methods.
 */

/**
 * @public
 * @name fontFamily
 * @since v1.2.0
 * @type {String}
 * @memberOf icons.js#
 * @default 'FontAwesome'
 */
exports.fontFamily = 'FontAwesome';

/**
 * @public
 * @name prefix
 * @since v1.2.0
 * @memberOf icons.js#
 * 
 * @type {String}
 * 
 * @default '.fa'
 */
exports.prefix = 'fa-';

/**
 * @public 
 * @name defaultSize
 * @since v1.2.0
 * @memberOf icons.js#
 * 
 * @type {String}
 * 
 * @default '16dp'
 */
exports.defaultSize = '16dp';

/**
 * @public 
 * @name charMap
 * @memberOf icons.js#
 * @since v1.2.0
 * @type {Array}
 * 
 * @summary Icon Character Map in an Array.
 * 
 * @default 'see icons.js'
 * 
 * @desc
 * An array of 2 celled arrays that contain the icon name and its character value.
 *   
 * @example
 * [
 *   ["fa-glass", 0xf000],
 *   ["fa-music", 61441],
 * ...]
 * 
 * ].forEach(function (e) {
 *	exports.charMap[e[0]] = String.fromCharCode(e[1]);
 *});
 * 
 */
exports.charMap = new Array;

[
    ["fa-glass", 0xf000],
    ["fa-music", 61441],
    ["fa-search", 61442],
    ["fa-envelope-o", 61443],
    ["fa-heart", 61444],
    ["fa-star", 61445],
    ["fa-star-o", 61446],
    ["fa-user", 61447],
    ["fa-film", 61448],
    ["fa-th-large", 61449],
    ["fa-th", 61450],
    ["fa-th-list", 61451],
    ["fa-check", 61452],
    ["fa-times", 61453],
    ["fa-search-plus", 61454],
    ["fa-search-minus", 61456],
    ["fa-power-off", 61457],
    ["fa-signal", 61458],
    ["fa-gear", 61459],
    ["fa-cog", 61459],
    ["fa-trash-o", 61460],
    ["fa-home", 61461],
    ["fa-file-o", 61462],
    ["fa-clock-o", 61463],
    ["fa-road", 61464],
    ["fa-download", 61465],
    ["fa-arrow-circle-o-down", 61466],
    ["fa-arrow-circle-o-up", 61467],
    ["fa-inbox", 61468],
    ["fa-play-circle-o", 61469],
    ["fa-rotate-right", 61470],
    ["fa-repeat", 61470],
    ["fa-refresh", 61473],
    ["fa-list-alt", 61474],
    ["fa-lock", 61475],
    ["fa-flag", 61476],
    ["fa-headphones", 61477],
    ["fa-volume-off", 61478],
    ["fa-volume-down", 61479],
    ["fa-volume-up", 61480],
    ["fa-qrcode", 61481],
    ["fa-barcode", 61482],
    ["fa-tag", 61483],
    ["fa-tags", 61484],
    ["fa-book", 61485],
    ["fa-bookmark", 61486],
    ["fa-print", 61487],
    ["fa-camera", 61488],
    ["fa-font", 61489],
    ["fa-bold", 61490],
    ["fa-italic", 61491],
    ["fa-text-height", 61492],
    ["fa-text-width", 61493],
    ["fa-align-left", 61494],
    ["fa-align-center", 61495],
    ["fa-align-right", 61496],
    ["fa-align-justify", 61497],
    ["fa-list", 61498],
    ["fa-dedent", 61499],
    ["fa-outdent", 61499],
    ["fa-indent", 61500],
    ["fa-video-camera", 61501],
    ["fa-photo", 61502],
    ["fa-image", 61502],
    ["fa-picture-o", 61502],
    ["fa-pencil", 61504],
    ["fa-map-marker", 61505],
    ["fa-adjust", 61506],
    ["fa-tint", 61507],
    ["fa-edit", 61508],
    ["fa-pencil-square-o", 61508],
    ["fa-share-square-o", 61509],
    ["fa-check-square-o", 61510],
    ["fa-arrows", 61511],
    ["fa-step-backward", 61512],
    ["fa-fast-backward", 61513],
    ["fa-backward", 61514],
    ["fa-play", 61515],
    ["fa-pause", 61516],
    ["fa-stop", 61517],
    ["fa-forward", 61518],
    ["fa-fast-forward", 61520],
    ["fa-step-forward", 61521],
    ["fa-eject", 61522],
    ["fa-chevron-left", 61523],
    ["fa-chevron-right", 61524],
    ["fa-plus-circle", 61525],
    ["fa-minus-circle", 61526],
    ["fa-times-circle", 61527],
    ["fa-check-circle", 61528],
    ["fa-question-circle", 61529],
    ["fa-info-circle", 61530],
    ["fa-crosshairs", 61531],
    ["fa-times-circle-o", 61532],
    ["fa-check-circle-o", 61533],
    ["fa-ban", 61534],
    ["fa-arrow-left", 61536],
    ["fa-arrow-right", 61537],
    ["fa-arrow-up", 61538],
    ["fa-arrow-down", 61539],
    ["fa-mail-forward", 61540],
    ["fa-share", 61540],
    ["fa-expand", 61541],
    ["fa-compress", 61542],
    ["fa-plus", 61543],
    ["fa-minus", 61544],
    ["fa-asterisk", 61545],
    ["fa-exclamation-circle", 61546],
    ["fa-gift", 61547],
    ["fa-leaf", 61548],
    ["fa-fire", 61549],
    ["fa-eye", 61550],
    ["fa-eye-slash", 61552],
    ["fa-warning", 61553],
    ["fa-exclamation-triangle", 61553],
    ["fa-plane", 61554],
    ["fa-calendar", 61555],
    ["fa-random", 61556],
    ["fa-comment", 61557],
    ["fa-magnet", 61558],
    ["fa-chevron-up", 61559],
    ["fa-chevron-down", 61560],
    ["fa-retweet", 61561],
    ["fa-shopping-cart", 61562],
    ["fa-folder", 61563],
    ["fa-folder-open", 61564],
    ["fa-arrows-v", 61565],
    ["fa-arrows-h", 61566],
    ["fa-bar-chart-o", 61568],
    ["fa-twitter-square", 61569],
    ["fa-facebook-square", 61570],
    ["fa-camera-retro", 61571],
    ["fa-key", 61572],
    ["fa-gears", 61573],
    ["fa-cogs", 61573],
    ["fa-comments", 61574],
    ["fa-thumbs-o-up", 61575],
    ["fa-thumbs-o-down", 61576],
    ["fa-star-half", 61577],
    ["fa-heart-o", 61578],
    ["fa-sign-out", 61579],
    ["fa-linkedin-square", 61580],
    ["fa-thumb-tack", 61581],
    ["fa-external-link", 61582],
    ["fa-sign-in", 61584],
    ["fa-trophy", 61585],
    ["fa-github-square", 61586],
    ["fa-upload", 61587],
    ["fa-lemon-o", 61588],
    ["fa-phone", 61589],
    ["fa-square-o", 61590],
    ["fa-bookmark-o", 61591],
    ["fa-phone-square", 61592],
    ["fa-twitter", 61593],
    ["fa-facebook", 61594],
    ["fa-github", 61595],
    ["fa-unlock", 61596],
    ["fa-credit-card", 61597],
    ["fa-rss", 61598],
    ["fa-hdd-o", 61600],
    ["fa-bullhorn", 61601],
    ["fa-bell", 61683],
    ["fa-certificate", 61603],
    ["fa-hand-o-right", 61604],
    ["fa-hand-o-left", 61605],
    ["fa-hand-o-up", 61606],
    ["fa-hand-o-down", 61607],
    ["fa-arrow-circle-left", 61608],
    ["fa-arrow-circle-right", 61609],
    ["fa-arrow-circle-up", 61610],
    ["fa-arrow-circle-down", 61611],
    ["fa-globe", 61612],
    ["fa-wrench", 61613],
    ["fa-tasks", 61614],
    ["fa-filter", 61616],
    ["fa-briefcase", 61617],
    ["fa-arrows-alt", 61618],
    ["fa-group", 61632],
    ["fa-users", 61632],
    ["fa-chain", 61633],
    ["fa-link", 61633],
    ["fa-cloud", 61634],
    ["fa-flask", 61635],
    ["fa-cut", 61636],
    ["fa-scissors", 61636],
    ["fa-copy", 61637],
    ["fa-files-o", 61637],
    ["fa-paperclip", 61638],
    ["fa-save", 61633],
    ["fa-floppy-o", 61639],
    ["fa-square", 61640],
    ["fa-navicon", 61641],
    ["fa-reorder", 61641],
    ["fa-bars", 61641],
    ["fa-list-ul", 61642],
    ["fa-list-ol", 61643],
    ["fa-strikethrough", 61644],
    ["fa-underline", 61645],
    ["fa-table", 61646],
    ["fa-magic", 61648],
    ["fa-truck", 61649],
    ["fa-pinterest", 61650],
    ["fa-pinterest-square", 61651],
    ["fa-google-plus-square", 61652],
    ["fa-google-plus", 61653],
    ["fa-money", 61654],
    ["fa-caret-down", 61655],
    ["fa-caret-up", 61656],
    ["fa-caret-left", 61657],
    ["fa-caret-right", 61658],
    ["fa-columns", 61659],
    ["fa-unsorted", 61660],
    ["fa-sort", 61660],
    ["fa-sort-down", 61661],
    ["fa-sort-desc", 61661],
    ["fa-sort-up", 61662],
    ["fa-sort-asc", 61662],
    ["fa-envelope", 61664],
    ["fa-linkedin", 61665],
    ["fa-rotate-left", 61666],
    ["fa-undo", 61666],
    ["fa-legal", 61667],
    ["fa-gavel", 61667],
    ["fa-dashboard", 61668],
    ["fa-tachometer", 61668],
    ["fa-comment-o", 61669],
    ["fa-comments-o", 61670],
    ["fa-flash", 61671],
    ["fa-bolt", 61671],
    ["fa-sitemap", 61672],
    ["fa-umbrella", 61673],
    ["fa-paste", 61674],
    ["fa-clipboard", 61674],
    ["fa-lightbulb-o", 61675],
    ["fa-exchange", 61676],
    ["fa-cloud-download", 61677],
    ["fa-cloud-upload", 61678],
    ["fa-user-md", 61680],
    ["fa-stethoscope", 61681],
    ["fa-suitcase", 61682],
    ["fa-bell-o", 61602],
    ["fa-coffee", 61684],
    ["fa-cutlery", 61685],
    ["fa-file-text-o", 61686],
    ["fa-building-o", 61687],
    ["fa-hospital-o", 61688],
    ["fa-ambulance", 61689],
    ["fa-medkit", 61690],
    ["fa-fighter-jet", 61691],
    ["fa-beer", 61692],
    ["fa-h-square", 61693],
    ["fa-plus-square", 61694],
    ["fa-angle-double-left", 61696],
    ["fa-angle-double-right", 61697],
    ["fa-angle-double-up", 61698],
    ["fa-angle-double-down", 61699],
    ["fa-angle-left", 61700],
    ["fa-angle-right", 61701],
    ["fa-angle-up", 61702],
    ["fa-angle-down", 61703],
    ["fa-desktop", 61704],
    ["fa-laptop", 61705],
    ["fa-tablet", 61706],
    ["fa-mobile-phone", 61707],
    ["fa-mobile", 61707],
    ["fa-circle-o", 61708],
    ["fa-quote-left", 61709],
    ["fa-quote-right", 61710],
    ["fa-spinner", 61712],
    ["fa-circle", 61713],
    ["fa-mail-reply", 61714],
    ["fa-reply", 61714],
    ["fa-github-alt", 61715],
    ["fa-folder-o", 61716],
    ["fa-folder-open-o", 61717],
    ["fa-smile-o", 61720],
    ["fa-frown-o", 61721],
    ["fa-meh-o", 61722],
    ["fa-gamepad", 61723],
    ["fa-keyboard-o", 61724],
    ["fa-flag-o", 61725],
    ["fa-flag-checkered", 61726],
    ["fa-terminal", 61728],
    ["fa-code", 61729],
    ["fa-mail-reply-all", 61730],
    ["fa-reply-all", 61730],
    ["fa-star-half-empty", 61731],
    ["fa-star-half-full", 61731],
    ["fa-star-half-o", 61731],
    ["fa-location-arrow", 61732],
    ["fa-crop", 61733],
    ["fa-code-fork", 61734],
    ["fa-unlink", 61735],
    ["fa-chain-broken", 61735],
    ["fa-question", 61736],
    ["fa-info", 61737],
    ["fa-exclamation", 61738],
    ["fa-superscript", 61739],
    ["fa-subscript", 61740],
    ["fa-eraser", 61741],
    ["fa-puzzle-piece", 61742],
    ["fa-microphone", 61744],
    ["fa-microphone-slash", 61745],
    ["fa-shield", 61746],
    ["fa-calendar-o", 61747],
    ["fa-fire-extinguisher", 61748],
    ["fa-rocket", 61749],
    ["fa-maxcdn", 61750],
    ["fa-chevron-circle-left", 61751],
    ["fa-chevron-circle-right", 61752],
    ["fa-chevron-circle-up", 61753],
    ["fa-chevron-circle-down", 61754],
    ["fa-html5", 61755],
    ["fa-css3", 61756],
    ["fa-anchor", 61757],
    ["fa-unlock-alt", 61758],
    ["fa-bullseye", 61760],
    ["fa-ellipsis-h", 61761],
    ["fa-ellipsis-v", 61762],
    ["fa-rss-square", 61763],
    ["fa-play-circle", 61764],
    ["fa-ticket", 61765],
    ["fa-minus-square", 61766],
    ["fa-minus-square-o", 61767],
    ["fa-level-up", 61768],
    ["fa-level-down", 61769],
    ["fa-check-square", 61770],
    ["fa-pencil-square", 61771],
    ["fa-external-link-square", 61772],
    ["fa-share-square", 61773],
    ["fa-compass", 61774],
    ["fa-toggle-down", 61776],
    ["fa-caret-square-o-down", 61776],
    ["fa-toggle-up", 61777],
    ["fa-caret-square-o-up", 61777],
    ["fa-toggle-right", 61778],
    ["fa-caret-square-o-right", 61778],
    ["fa-euro", 61779],
    ["fa-eur", 61779],
    ["fa-gbp", 61780],
    ["fa-dollar", 61781],
    ["fa-usd", 61781],
    ["fa-rupee", 61782],
    ["fa-inr", 61782],
    ["fa-cny", 61783],
    ["fa-rmb", 61783],
    ["fa-yen", 61783],
    ["fa-jpy", 61783],
    ["fa-ruble", 61784],
    ["fa-rouble", 61784],
    ["fa-rub", 61784],
    ["fa-won", 61785],
    ["fa-krw", 61785],
    ["fa-bitcoin", 61786],
    ["fa-btc", 61786],
    ["fa-file", 61787],
    ["fa-file-text", 61788],
    ["fa-sort-alpha-asc", 61789],
    ["fa-sort-alpha-desc", 61790],
    ["fa-sort-amount-asc", 61792],
    ["fa-sort-amount-desc", 61793],
    ["fa-sort-numeric-asc", 61794],
    ["fa-sort-numeric-desc", 61795],
    ["fa-thumbs-up", 61796],
    ["fa-thumbs-down", 61797],
    ["fa-youtube-square", 61798],
    ["fa-youtube", 61799],
    ["fa-xing", 61800],
    ["fa-xing-square", 61801],
    ["fa-youtube-play", 61802],
    ["fa-dropbox", 61803],
    ["fa-stack-overflow", 61804],
    ["fa-instagram", 61805],
    ["fa-flickr", 61806],
    ["fa-adn", 61808],
    ["fa-bitbucket", 61809],
    ["fa-bitbucket-square", 61810],
    ["fa-tumblr", 61811],
    ["fa-tumblr-square", 61812],
    ["fa-long-arrow-down", 61813],
    ["fa-long-arrow-up", 61814],
    ["fa-long-arrow-left", 61815],
    ["fa-long-arrow-right", 61816],
    ["fa-apple", 61817],
    ["fa-windows", 61818],
    ["fa-android", 61819],
    ["fa-linux", 61820],
    ["fa-dribbble", 61821],
    ["fa-skype", 61822],
    ["fa-foursquare", 61824],
    ["fa-trello", 61825],
    ["fa-female", 61826],
    ["fa-male", 61827],
    ["fa-gittip", 61828],
    ["fa-sun-o", 61829],
    ["fa-moon-o", 61830],
    ["fa-archive", 61831],
    ["fa-bug", 61832],
    ["fa-vk", 61833],
    ["fa-weibo", 61834],
    ["fa-renren", 61835],
    ["fa-pagelines", 61836],
    ["fa-stack-exchange", 61837],
    ["fa-arrow-circle-o-right", 61838],
    ["fa-arrow-circle-o-left", 61840],
    ["fa-toggle-left", 61841],
    ["fa-caret-square-o-left", 61841],
    ["fa-dot-circle-o", 61842],
    ["fa-wheelchair", 61843],
    ["fa-vimeo-square", 61844],
    ["fa-turkish-lira", 61845],
    ["fa-try", 61845],
    ["fa-plus-square-o", 61846],
    ["fa-space-shuttle", 61847],
    ["fa-slack", 61848],
    ["fa-envelope-square", 61849],
    ["fa-wordpress", 61850],
    ["fa-openid", 61851],
    ["fa-institution", 61852],
    ["fa-bank", 61852],
    ["fa-university", 61852],
    ["fa-mortar-board", 61853],
    ["fa-graduation-cap", 61853],
    ["fa-yahoo", 61854],
    ["fa-google", 61856],
    ["fa-reddit", 61857],
    ["fa-reddit-square", 61858],
    ["fa-stumbleupon-circle", 61859],
    ["fa-stumbleupon", 61860],
    ["fa-delicious", 61861],
    ["fa-digg", 61862],
    ["fa-pied-piper-square", 61863],
    ["fa-pied-piper", 61863],
    ["fa-pied-piper-alt", 61864],
    ["fa-drupal", 61865],
    ["fa-joomla", 61866],
    ["fa-language", 61867],
    ["fa-fax", 61868],
    ["fa-building", 61869],
    ["fa-child", 61870],
    ["fa-paw", 61872],
    ["fa-spoon", 61873],
    ["fa-cube", 61874],
    ["fa-cubes", 61875],
    ["fa-behance", 61876],
    ["fa-behance-square", 61877],
    ["fa-steam", 61878],
    ["fa-steam-square", 61879],
    ["fa-recycle", 61880],
    ["fa-automobile", 61881],
    ["fa-car", 61881],
    ["fa-cab", 61882],
    ["fa-taxi", 61882],
    ["fa-tree", 61883],
    ["fa-spotify", 61884],
    ["fa-deviantart", 61885],
    ["fa-soundcloud", 61886],
    ["fa-database", 61888],
    ["fa-file-pdf-o", 61889],
    ["fa-file-word-o", 61890],
    ["fa-file-excel-o", 61891],
    ["fa-file-powerpoint-o", 61892],
    ["fa-file-photo-o", 61893],
    ["fa-file-picture-o", 61893],
    ["fa-file-image-o", 61893],
    ["fa-file-zip-o", 61894],
    ["fa-file-archive-o", 61894],
    ["fa-file-sound-o", 61895],
    ["fa-file-audio-o", 61895],
    ["fa-file-movie-o", 61896],
    ["fa-file-video-o", 61896],
    ["fa-file-code-o", 61897],
    ["fa-vine", 61898],
    ["fa-codepen", 61899],
    ["fa-jsfiddle", 61900],
    ["fa-life-bouy", 61901],
    ["fa-life-saver", 61901],
    ["fa-support", 61901],
    ["fa-life-ring", 61901],
    ["fa-circle-o-notch", 61902],
    ["fa-ra", 61904],
    ["fa-rebel", 61904],
    ["fa-ge", 61905],
    ["fa-empire", 61905],
    ["fa-git-square", 61906],
    ["fa-git", 61907],
    ["fa-hacker-news", 61908],
    ["fa-tencent-weibo", 61909],
    ["fa-qq", 61910],
    ["fa-wechat", 61911],
    ["fa-weixin", 61911],
    ["fa-send", 61912],
    ["fa-paper-plane", 61912],
    ["fa-send-o", 61913],
    ["fa-paper-plane-o", 61913],
    ["fa-history", 61914],
    ["fa-circle-thin", 61915],
    ["fa-header", 61916],
    ["fa-paragraph", 61917],
    ["fa-sliders", 61918],
    ["fa-share-alt", 61920],
    ["fa-share-alt-square", 61921],
    ["fa-bomb", 61922]
].forEach(function (e) {
    exports.charMap[e[0]] = String.fromCharCode(e[1]);
});