// Theia Sticky Sidebar v1.3.0 - https://github.com/WeCodePixels/theia-sticky-sidebar
           //<![CDATA[ !function(i) {
                i.fn.theiaStickySidebar = function(t) {
                    function o(t, o) {
                        var a = e(t, o);
                        a || (console.log("TST: Body width smaller than options.minWidth. Init is delayed."),
                        i(document).scroll(function(t, o) {
                            return function(a) {
                                var n = e(t, o);
                                n && i(this).unbind(a)
                            }
                        }(t, o)),
                        i(window).resize(function(t, o) {
                            return function(a) {
                                var n = e(t, o);
                                n && i(this).unbind(a)
                            }
                        }(t, o)))
                    }
                    function e(t, o) {
                        return t.initialized === !0 ? !0 : i("body").width() < t.minWidth ? !1 : (a(t, o),
                        !0)
                    }
                    function a(t, o) {
                        t.initialized = !0,
                        i("head").append(i('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),
                        o.each(function() {
                            function o() {
                                a.fixedScrollTop = 0,
                                a.sidebar.css({
                                    "min-height": "1px"
                                }),
                                a.stickySidebar.css({
                                    position: "static",
                                    width: ""
                                })
                            }
                            function e(t) {
                                var o = t.height();
                                return t.children().each(function() {
                                    o = Math.max(o, i(this).height())
                                }),
                                o
                            }
                            var a = {};
                            a.sidebar = i(this),
                            a.options = t || {},
                            a.container = i(a.options.containerSelector),
                            0 == a.container.size() && (a.container = a.sidebar.parent()),
                            a.sidebar.parents().css("-webkit-transform", "none"),
                            a.sidebar.css({
                                position: "relative",
                                overflow: "visible",
                                "-webkit-box-sizing": "border-box",
                                "-moz-box-sizing": "border-box",
                                "box-sizing": "border-box"
                            }),
                            a.stickySidebar = a.sidebar.find(".theiaStickySidebar"),
                            0 == a.stickySidebar.length && (a.sidebar.find("script").remove(),
                            a.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()),
                            a.sidebar.append(a.stickySidebar)),
                            a.marginTop = parseInt(a.sidebar.css("margin-top")),
                            a.marginBottom = parseInt(a.sidebar.css("margin-bottom")),
                            a.paddingTop = parseInt(a.sidebar.css("padding-top")),
                            a.paddingBottom = parseInt(a.sidebar.css("padding-bottom"));
                            var n = a.stickySidebar.offset().top
                              , d = a.stickySidebar.outerHeight();
                            a.stickySidebar.css("padding-top", 1),
                            a.stickySidebar.css("padding-bottom", 1),
                            n -= a.stickySidebar.offset().top,
                            d = a.stickySidebar.outerHeight() - d - n,
                            0 == n ? (a.stickySidebar.css("padding-top", 0),
                            a.stickySidebarPaddingTop = 0) : a.stickySidebarPaddingTop = 1,
                            0 == d ? (a.stickySidebar.css("padding-bottom", 0),
                            a.stickySidebarPaddingBottom = 0) : a.stickySidebarPaddingBottom = 1,
                            a.previousScrollTop = null,
                            a.fixedScrollTop = 0,
                            o(),
                            a.onScroll = function(a) {
                                if (a.stickySidebar.is(":visible")) {
                                    if (i("body").width() < a.options.minWidth)
                                        return void o();
                                    if (a.sidebar.outerWidth(!0) + 50 > a.container.width())
                                        return void o();
                                    var n = i(document).scrollTop()
                                      , d = "static";
                                    if (n >= a.container.offset().top + (a.paddingTop + a.marginTop - a.options.additionalMarginTop)) {
                                        var r, s = a.paddingTop + a.marginTop + t.additionalMarginTop, c = a.paddingBottom + a.marginBottom + t.additionalMarginBottom, p = a.container.offset().top, b = a.container.offset().top + e(a.container), g = 0 + t.additionalMarginTop, l = a.stickySidebar.outerHeight() + s + c < i(window).height();
                                        r = l ? g + a.stickySidebar.outerHeight() : i(window).height() - a.marginBottom - a.paddingBottom - t.additionalMarginBottom;
                                        var h = p - n + a.paddingTop + a.marginTop
                                          , f = b - n - a.paddingBottom - a.marginBottom
                                          , S = a.stickySidebar.offset().top - n
                                          , u = a.previousScrollTop - n;
                                        "fixed" == a.stickySidebar.css("position") && "modern" == a.options.sidebarBehavior && (S += u),
                                        "legacy" == a.options.sidebarBehavior && (S = r - a.stickySidebar.outerHeight(),
                                        S = Math.max(S, r - a.stickySidebar.outerHeight())),
                                        S = u > 0 ? Math.min(S, g) : Math.max(S, r - a.stickySidebar.outerHeight()),
                                        S = Math.max(S, h),
                                        S = Math.min(S, f - a.stickySidebar.outerHeight());
                                        var m = a.container.height() == a.stickySidebar.outerHeight();
                                        d = (m || S != g) && (m || S != r - a.stickySidebar.outerHeight()) ? n + S - a.sidebar.offset().top - a.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed"
                                    }
                                    if ("fixed" == d)
                                        a.stickySidebar.css({
                                            position: "fixed",
                                            width: a.sidebar.width(),
                                            top: S,
                                            left: a.sidebar.offset().left + parseInt(a.sidebar.css("padding-left"))
                                        });
                                    else if ("absolute" == d) {
                                        var y = {};
                                        "absolute" != a.stickySidebar.css("position") && (y.position = "absolute",
                                        y.top = n + S - a.sidebar.offset().top - a.stickySidebarPaddingTop - a.stickySidebarPaddingBottom),
                                        y.width = a.sidebar.width(),
                                        y.left = "",
                                        a.stickySidebar.css(y)
                                    } else
                                        "static" == d && o();
                                    "static" != d && 1 == a.options.updateSidebarHeight && a.sidebar.css({
                                        "min-height": a.stickySidebar.outerHeight() + a.stickySidebar.offset().top - a.sidebar.offset().top + a.paddingBottom
                                    }),
                                    a.previousScrollTop = n
                                }
                            }
                            ,
                            a.onScroll(a),
                            i(document).scroll(function(i) {
                                return function() {
                                    i.onScroll(i)
                                }
                            }(a)),
                            i(window).resize(function(i) {
                                return function() {
                                    i.stickySidebar.css({
                                        position: "static"
                                    }),
                                    i.onScroll(i)
                                }
                            }(a))
                        })
                    }
                    var n = {
                        containerSelector: "",
                        additionalMarginTop: 0,
                        additionalMarginBottom: 0,
                        updateSidebarHeight: !0,
                        minWidth: 0,
                        sidebarBehavior: "modern"
                    };
                    t = i.extend(n, t),
                    t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0,
                    t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0,
                    o(t, this)
                }
            }(jQuery); //]]>
