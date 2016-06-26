function _setStyle(now) {
    setStyle(this, now)
}
function setStyle3(obj, name, value) {
    obj.style["Webkit" + name.charAt(0).toUpperCase() + name.substring(1)] = value,
    obj.style["Moz" + name.charAt(0).toUpperCase() + name.substring(1)] = value,
    obj.style["ms" + name.charAt(0).toUpperCase() + name.substring(1)] = value,
    obj.style["O" + name.charAt(0).toUpperCase() + name.substring(1)] = value,
    obj.style[name] = value
}
function getByClass(oParent, sClass) {
    for (var aEle = oParent.getElementsByTagName("*"), re = new RegExp("\\b" + sClass + "\\b", "i"), aResult = [], i = 0; i < aEle.length; i++) re.test(aEle[i].className) && aResult.push(aEle[i]);
    return aResult
}
function rnd(n, m) {
    return parseInt(Math.random() * (m - n) + n)
}
function setStyle(obj, json) {
    if (obj.length) for (var i = 0; i < obj.length; i++) setStyle(obj[i], json);
    else for (var i in json) obj.style[i] = json[i]
}
function savePopShow(tips, position, or) {
    var len = arguments.length,
    oHide = ".save-success";
    if (oHide = 3 == len ? ".save-success": ".save-fail", !$("#save-pop").length) var saveHtml = '<div id="save-pop"><div class="save save-success">删除成功</div><div class="save save-fail">保存失败！</div></div>';
    $("body").append(saveHtml),
    $("#save-pop").find(oHide).hide().siblings("div").fadeIn(300).html(tips),
    $("#save-pop").css("position", "absolute").css("top", position.top + 5).css("left", position.left - 130).css("background", "#fafafa").fadeIn("slow").delay(600).fadeOut("slow")
}
function copySuccess() {
    $(".share_record").data("copy", "true");
    var position = $(".share_title").offset();
    savePopShow("复制成功", position)
}
function getLocalStorage() {
    if ("object" == typeof localStorage) return localStorage;
    if ("object" == typeof globalStorage) return globalStorage[location.href];
    if ("object" == typeof userData) return globalStorage[location.href];
    throw new Error("不支持本地存储")
}
function getLocalStorage() {
    if ("object" == typeof localStorage) return localStorage;
    if ("object" == typeof globalStorage) return globalStorage[location.href];
    if ("object" == typeof userData) return globalStorage[location.href];
    throw new Error("不支持本地存储")
} !
function($) {
    $.fn.animatescroll = function(options) {
        var opts = $.extend({},
        $.fn.animatescroll.defaults, options);
        if ($.easing.jswing = $.easing.swing, $.extend($.easing, {
            def: "easeOutQuad",
            swing: function(x, t, b, c, d) {
                return $.easing[$.easing.def](x, t, b, c, d)
            },
            easeInQuad: function(x, t, b, c, d) {
                return c * (t /= d) * t + b
            },
            easeOutQuad: function(x, t, b, c, d) {
                return - c * (t /= d) * (t - 2) + b
            },
            easeInOutQuad: function(x, t, b, c, d) {
                return (t /= d / 2) < 1 ? c / 2 * t * t + b: -c / 2 * (--t * (t - 2) - 1) + b
            },
            easeInCubic: function(x, t, b, c, d) {
                return c * (t /= d) * t * t + b
            },
            easeOutCubic: function(x, t, b, c, d) {
                return c * ((t = t / d - 1) * t * t + 1) + b
            },
            easeInOutCubic: function(x, t, b, c, d) {
                return (t /= d / 2) < 1 ? c / 2 * t * t * t + b: c / 2 * ((t -= 2) * t * t + 2) + b
            },
            easeInQuart: function(x, t, b, c, d) {
                return c * (t /= d) * t * t * t + b
            },
            easeOutQuart: function(x, t, b, c, d) {
                return - c * ((t = t / d - 1) * t * t * t - 1) + b
            },
            easeInOutQuart: function(x, t, b, c, d) {
                return (t /= d / 2) < 1 ? c / 2 * t * t * t * t + b: -c / 2 * ((t -= 2) * t * t * t - 2) + b
            },
            easeInQuint: function(x, t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b
            },
            easeOutQuint: function(x, t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b
            },
            easeInOutQuint: function(x, t, b, c, d) {
                return (t /= d / 2) < 1 ? c / 2 * t * t * t * t * t + b: c / 2 * ((t -= 2) * t * t * t * t + 2) + b
            },
            easeInSine: function(x, t, b, c, d) {
                return - c * Math.cos(t / d * (Math.PI / 2)) + c + b
            },
            easeOutSine: function(x, t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b
            },
            easeInOutSine: function(x, t, b, c, d) {
                return - c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
            },
            easeInExpo: function(x, t, b, c, d) {
                return 0 == t ? b: c * Math.pow(2, 10 * (t / d - 1)) + b
            },
            easeOutExpo: function(x, t, b, c, d) {
                return t == d ? b + c: c * ( - Math.pow(2, -10 * t / d) + 1) + b
            },
            easeInOutExpo: function(x, t, b, c, d) {
                return 0 == t ? b: t == d ? b + c: (t /= d / 2) < 1 ? c / 2 * Math.pow(2, 10 * (t - 1)) + b: c / 2 * ( - Math.pow(2, -10 * --t) + 2) + b
            },
            easeInCirc: function(x, t, b, c, d) {
                return - c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
            },
            easeOutCirc: function(x, t, b, c, d) {
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
            },
            easeInOutCirc: function(x, t, b, c, d) {
                return (t /= d / 2) < 1 ? -c / 2 * (Math.sqrt(1 - t * t) - 1) + b: c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
            },
            easeInElastic: function(x, t, b, c, d) {
                var s = 1.70158,
                p = 0,
                a = c;
                if (0 == t) return b;
                if (1 == (t /= d)) return b + c;
                if (p || (p = .3 * d), a < Math.abs(c)) {
                    a = c;
                    var s = p / 4
                } else var s = p / (2 * Math.PI) * Math.asin(c / a);
                return - (a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * d - s) * Math.PI / p)) + b
            },
            easeOutElastic: function(x, t, b, c, d) {
                var s = 1.70158,
                p = 0,
                a = c;
                if (0 == t) return b;
                if (1 == (t /= d)) return b + c;
                if (p || (p = .3 * d), a < Math.abs(c)) {
                    a = c;
                    var s = p / 4
                } else var s = p / (2 * Math.PI) * Math.asin(c / a);
                return a * Math.pow(2, -10 * t) * Math.sin(2 * (t * d - s) * Math.PI / p) + c + b
            },
            easeInOutElastic: function(x, t, b, c, d) {
                var s = 1.70158,
                p = 0,
                a = c;
                if (0 == t) return b;
                if (2 == (t /= d / 2)) return b + c;
                if (p || (p = .3 * d * 1.5), a < Math.abs(c)) {
                    a = c;
                    var s = p / 4
                } else var s = p / (2 * Math.PI) * Math.asin(c / a);
                return 1 > t ? -.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * d - s) * Math.PI / p) + b: a * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * d - s) * Math.PI / p) * .5 + c + b
            },
            easeInBack: function(x, t, b, c, d, s) {
                return void 0 == s && (s = 1.70158),
                c * (t /= d) * t * ((s + 1) * t - s) + b
            },
            easeOutBack: function(x, t, b, c, d, s) {
                return void 0 == s && (s = 1.70158),
                c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
            },
            easeInOutBack: function(x, t, b, c, d, s) {
                return void 0 == s && (s = 1.70158),
                (t /= d / 2) < 1 ? c / 2 * t * t * (((s *= 1.525) + 1) * t - s) + b: c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
            },
            easeInBounce: function(x, t, b, c, d) {
                return c - $.easing.easeOutBounce(x, d - t, 0, c, d) + b
            },
            easeOutBounce: function(x, t, b, c, d) {
                return (t /= d) < 1 / 2.75 ? 7.5625 * c * t * t + b: 2 / 2.75 > t ? c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b: 2.5 / 2.75 > t ? c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b: c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b
            },
            easeInOutBounce: function(x, t, b, c, d) {
                return d / 2 > t ? .5 * $.easing.easeInBounce(x, 2 * t, 0, c, d) + b: .5 * $.easing.easeOutBounce(x, 2 * t - d, 0, c, d) + .5 * c + b
            }
        }), "html,body" == opts.element) {
            var offset = this.offset().top;
            $(opts.element).stop().animate({
                scrollTop: offset - opts.padding
            },
            opts.scrollSpeed, opts.easing)
        } else $(opts.element).stop().animate({
            scrollTop: this.offset().top - this.parent().offset().top + this.parent().scrollTop() - opts.padding
        },
        opts.scrollSpeed, opts.easing)
    },
    $.fn.animatescroll.defaults = {
        easing: "swing",
        scrollSpeed: 800,
        padding: 0,
        element: "html,body"
    }
} (jQuery);
var Effect = {};
Effect.browser_test = function() {
    IE6 = -1 != window.navigator.userAgent.search(/MSIE 6/),
    IE7 = -1 != window.navigator.userAgent.search(/MSIE 7/),
    IE8 = -1 != window.navigator.userAgent.search(/MSIE 8/),
    IE9 = -1 != window.navigator.userAgent.search(/MSIE 9/),
    IE10 = -1 != window.navigator.userAgent.search(/MSIE 10/)
},
Effect.flex = function(obj, cur, target, fnDo, fnEnd, fs, ms) {
    function fnMove() {
        obj.__flex_v += (100 - x) / fs,
        obj.__flex_v *= ms,
        Math.abs(obj.__flex_v) > MAX_SPEED && (obj.__flex_v = obj.__flex_v > 0 ? MAX_SPEED: -MAX_SPEED),
        x += obj.__flex_v;
        for (var i in cur) now[i] = (target[i] - cur[i]) * x / 100 + cur[i];
        fnDo && fnDo.call(obj, now),
        Math.abs(obj.__flex_v) < 1 && Math.abs(100 - x) < 1 && (clearInterval(obj.timer), fnEnd && fnEnd.call(obj, target), obj.__flex_v = 0)
    }
    if (Effect.browser_test.IE6) return fnDo && fnDo.call(obj, target),
    void(fnEnd && fnEnd.call(obj, target));
    var MAX_SPEED = 16;
    fs || (fs = 6),
    ms || (ms = .75);
    var now = {},
    x = 0;
    obj.__flex_v || (obj.__flex_v = 0),
    obj.__last_timer || (obj.__last_timer = 0);
    var t = (new Date).getTime();
    t - obj.__last_timer > 20 && (fnMove(), obj.__last_timer = t),
    clearInterval(obj.timer),
    obj.timer = setInterval(fnMove, 20)
},
Effect.buffer = function(obj, cur, target, fnDo, fnEnd, fs) {
    function fnMove() {
        v = Math.ceil((100 - x) / fs),
        x += v;
        for (var i in cur) now[i] = (target[i] - cur[i]) * x / 100 + cur[i];
        fnDo && fnDo.call(obj, now),
        Math.abs(v) < 1 && Math.abs(100 - x) < 1 && (clearInterval(obj.timer), fnEnd && fnEnd.call(obj, target))
    }
    if (Effect.browser_test.IE6) return fnDo && fnDo.call(obj, target),
    void(fnEnd && fnEnd.call(obj, target));
    fs || (fs = 6);
    var now = {},
    x = 0,
    v = 0;
    obj.__last_timer || (obj.__last_timer = 0);
    var t = (new Date).getTime();
    t - obj.__last_timer > 20 && (fnMove(), obj.__last_timer = t),
    clearInterval(obj.timer),
    obj.timer = setInterval(fnMove, 20)
},
Effect.linear = function(obj, cur, target, fnDo, fnEnd, fs) {
    function fnMove() {
        x += v;
        for (var i in cur) now[i] = (target[i] - cur[i]) * x / 100 + cur[i];
        fnDo && fnDo.call(obj, now),
        Math.abs(100 - x) < 1 && (clearInterval(obj.timer), fnEnd && fnEnd.call(obj, target))
    }
    if (Effect.browser_test.IE6) return fnDo && fnDo.call(obj, target),
    void(fnEnd && fnEnd.call(obj, target));
    fs || (fs = 50);
    var now = {},
    x = 0,
    v = 0;
    obj.__last_timer || (obj.__last_timer = 0);
    var t = (new Date).getTime();
    t - obj.__last_timer > 20 && (fnMove(), obj.__last_timer = t),
    clearInterval(obj.timer),
    obj.timer = setInterval(fnMove, 20),
    v = 100 / fs
};
var buffer = Effect.buffer,
linear = Effect.linear,
flex = Effect.flex;
$(function() {
    function getNextIndex(flag) {
        return todo = flag ? now == bannerLen - 1 ? 0 : (now + 1) % bannerLen: 0 == now ? bannerLen - 1 : (now - 1) % bannerLen
    }
    function pageTurn() {
        var galleryHref = $bannerImg.data("href").split("|")[todo];
        $bannerCenterA.eq(todo).addClass("current").siblings("a").removeClass("current"),
        $bannerImg.attr("href", galleryHref)
    }
    function resetCanvas() {
        context.clearRect(0, 0, 12, 12),
        context.fillStyle = "#39c",
        context.beginPath(),
        context.arc(6, 6, 6, 0, 2 * Math.PI),
        context.lineTo(6, 6),
        context.closePath(),
        context.fill()
    }
    function drawCircle() {
        Math.abs(dps - 1.5 * Math.PI) < 1e-6 && (clearInterval(intervalId), resetCanvas(), spinCanvas()),
        context.fillStyle = "#FFF",
        context.beginPath(),
        context.arc(6, 6, 6, -.5 * Math.PI, dps, !1),
        context.lineTo(6, 6),
        context.closePath(),
        context.fill(),
        dps += Math.PI / 180 * 4
    }
    function spinCanvas() {
        dps = -.5 * Math.PI + Math.PI / 180 * 4,
        clearInterval(intervalId),
        context.fillStyle = "#39c",
        context.beginPath(),
        context.arc(6, 6, 6, 0, 2 * Math.PI),
        context.closePath(),
        context.fill(),
        intervalId = setInterval(function() {
            drawCircle()
        },
        100)
    }
    function getBannerUrl(index) {
        return "url(" + getBannerSrc(index) + ")"
    }
    function getBannerSrc(index) {
        return "http://www.xuanfengge.com/wp-content/themes/lee2.0/images/banner/banner_" + index + ".jpg"
    }
    var now = 0,
    oDiv = document.getElementById("banner_img"),
    ready = !0,
    W = 1080,
    H = 300,
    todo = (document.createElement("div"), 1),
    autoTime = 9e3,
    $bannerCenterA = $(".banner_center a"),
    $bannerImg = $("#banner_img"),
    $bannerPrev = $(".banner_prev"),
    $bannerNext = $(".banner_next"),
    bannerLen = $bannerCenterA.length;
    $bannerPrev.click(function() {
        ready && (turnEffect(getNextIndex(!1)), pageTurn())
    }),
    $bannerNext.click(function() {
        ready && (boomEffect(getNextIndex(!0)), pageTurn())
    }),
    $bannerCenterA.each(function(i) {
        $(this).click(function() {
            ready && (now = 0 == i ? bannerLen - 1 : i - 1, pageEffect(i), $(this).addClass("current").siblings("a").removeClass("current"), $bannerImg.attr("href", $bannerImg.data("href").split("|")[i]))
        })
    });
    var timer = setInterval(function() {
        $bannerNext.trigger("click")
    },
    autoTime);
    if ($("#banner").hover(function() {
        clearInterval(timer)
    },
    function() {
        timer = setInterval(function() {
            $bannerNext.trigger("click")
        },
        autoTime)
    }), $("#dotCanvas").length > 0) {
        var canvas = document.getElementById("dotCanvas"),
        context = canvas.getContext("2d");
        context.fillStyle = "#39c",
        context.beginPath(),
        context.arc(6, 6, 6, 0, 2 * Math.PI),
        context.closePath(),
        context.fill();
        var dps = -.5 * Math.PI + Math.PI / 180 * 4,
        intervalId = setInterval(function() {
            drawCircle()
        },
        100);
        $("#banner").hover(function() {
            resetCanvas(),
            clearInterval(intervalId)
        },
        function() {
            spinCanvas()
        })
    }
    var boomEffect = function(iNext) {
        if (ready) {
            ready = !1;
            var R = 4,
            C = 7,
            cw = W / 2,
            ch = H / 2;
            oDiv.innerHTML = "",
            oDiv.style.background = getBannerUrl(iNext) + " center no-repeat";
            for (var aData = [], wait = R * C, i = 0; R > i; i++) for (var j = 0,
            k = 0; C > j; j++, k++) {
                aData[i] = {
                    left: W * j / C,
                    top: H * i / R
                };
                var oNewDiv = document.createElement("div");
                setStyle(oNewDiv, {
                    position: "absolute",
                    background: getBannerUrl(now) + -aData[i].left + "px " + -aData[i].top + "px no-repeat",
                    width: Math.ceil(W / C) + "px",
                    height: Math.ceil(H / R) + "px",
                    left: aData[i].left + "px",
                    top: aData[i].top + "px"
                }),
                oDiv.appendChild(oNewDiv);
                var l = (aData[i].left + W / (2 * C) - cw) * rnd(2, 3) + cw - W / (2 * C),
                t = (aData[i].top + H / (2 * R) - ch) * rnd(2, 3) + ch - H / (2 * R);
                setTimeout(function(oNewDiv, l, t) {
                    return function() {
                        buffer(oNewDiv, {
                            left: oNewDiv.offsetLeft,
                            top: oNewDiv.offsetTop,
                            opacity: 100,
                            x: 0,
                            y: 0,
                            z: 0,
                            scale: 1,
                            a: 0
                        },
                        {
                            left: l,
                            top: t,
                            opacity: 0,
                            x: rnd( - 180, 180),
                            y: rnd( - 180, 180),
                            z: rnd( - 180, 180),
                            scale: rnd(1.5, 3),
                            a: 1
                        },
                        function(now) {
                            this.style.left = now.left + "px",
                            this.style.top = now.top + "px",
                            this.style.opacity = now.opacity / 100,
                            setStyle3(oNewDiv, "transform", "perspective(500px) rotateX(" + now.x + "deg) rotateY(" + now.y + "deg) rotateZ(" + now.z + "deg) scale(" + now.scale + ")")
                        },
                        function() {
                            setTimeout(function() {
                                $bannerImg.empty()
                            },
                            200),
                            0 == --wait && (ready = !0, now = iNext)
                        },
                        10)
                    }
                } (oNewDiv, l, t), rnd(0, 200))
            }
        }
    },
    turnEffect = function(iNext) {
        if (ready) {
            ready = !1;
            var R = 3,
            C = 6,
            wait = R * C,
            dw = Math.ceil(W / C),
            dh = Math.ceil(H / R);
            oDiv.style.background = "none",
            oDiv.innerHTML = "";
            for (var i = 0; C > i; i++) for (var j = 0; R > j; j++) {
                var oNewDiv = document.createElement("div"),
                t = Math.ceil(H * j / R),
                l = Math.ceil(W * i / C);
                setStyle(oNewDiv, {
                    position: "absolute",
                    background: getBannerUrl(now) + -l + "px " + -t + "px no-repeat",
                    left: l + "px",
                    top: t + "px",
                    width: dw + "px",
                    height: dh + "px"
                }),
                function(oNewDiv, l, t) {
                    oNewDiv.ch = !1,
                    setTimeout(function() {
                        linear(oNewDiv, {
                            y: 0
                        },
                        {
                            y: 180
                        },
                        function(now) {
                            now.y > 90 && !oNewDiv.ch && (oNewDiv.ch = !0, oNewDiv.style.background = getBannerUrl(iNext) + -l + "px " + -t + "px no-repeat"),
                            now.y > 90 ? setStyle3(oNewDiv, "transform", "perspective(500px) rotateY(" + now.y + "deg) scale(-1,1)") : setStyle3(oNewDiv, "transform", "perspective(500px) rotateY(" + now.y + "deg)")
                        },
                        function() {
                            0 == --wait && (ready = !0, now = iNext)
                        },
                        22)
                    },
                    200 * (i + j))
                } (oNewDiv, l, t),
                oDiv.appendChild(oNewDiv)
            }
        }
    },
    pageEffect = function(iNext) {
        if (ready) {
            ready = !1,
            oDiv.innerHTML = "",
            oDiv.style.background = getBannerUrl(iNext) + " center no-repeat";
            var oDivPage = document.createElement("div");
            setStyle(oDivPage, {
                position: "absolute",
                background: getBannerUrl(iNext) + " right no-repeat",
                zIndex: 3,
                left: "50%",
                top: 0,
                width: "50%",
                height: "100%",
                overflow: "hidden"
            }),
            setStyle3(oDivPage, "transform", "perspective(1000px) rotateY(0deg)"),
            setStyle3(oDivPage, "transformOrigin", "left"),
            oDiv.appendChild(oDivPage);
            var oDivOld = document.createElement("div");
            setStyle(oDivOld, {
                position: "absolute",
                left: 0,
                top: 0,
                width: "50%",
                height: "100%",
                zIndex: 2,
                background: getBannerUrl(now) + " left no-repeat"
            }),
            oDiv.appendChild(oDivOld);
            var oDivShadow = document.createElement("div");
            setStyle(oDivShadow, {
                position: "absolute",
                right: 0,
                top: 0,
                width: "50%",
                height: "100%",
                zIndex: 2,
                background: "rgba(0,0,0,1)"
            }),
            oDiv.appendChild(oDivShadow),
            oDivPage.ch = !1,
            buffer(oDivPage, {
                y: 0,
                opacity: 1
            },
            {
                y: -180,
                opacity: 0
            },
            function(now) {
                if (now.y < -90 && !oDivPage.ch) {
                    oDivPage.ch = !0,
                    oDivPage.innerHTML = "<img />";
                    var oImg = oDivPage.getElementsByTagName("img")[0];
                    oImg.src = getBannerSrc(iNext),
                    setStyle3(oImg, "transform", "scaleX(-1)"),
                    setStyle(oImg, {
                        position: "absolute",
                        right: 0,
                        top: 0,
                        width: "200%",
                        height: "100%"
                    }),
                    setStyle3(oDivPage, "transformOrigin", "left")
                }
                now.y < -90 ? setStyle3(oDivPage, "transform", "perspective(1000px) scale(-1,1) rotateY(" + (180 - now.y) + "deg)") : setStyle3(oDivPage, "transform", "perspective(1000px) rotateY(" + now.y + "deg)"),
                oDivShadow.style.background = "rgba(0,0,0," + now.opacity + ")"
            },
            function() {
                setTimeout(function() {
                    $bannerImg.empty()
                },
                200),
                now = iNext,
                ready = !0
            },
            14)
        }
    }
}),
function($) {
    "use strict";
    var escape = /["\\\x00-\x1f\x7f-\x9f]/g,
    meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    },
    hasOwn = Object.prototype.hasOwnProperty;
    $.toJSON = "object" == typeof JSON && JSON.stringify ? JSON.stringify: function(o) {
        if (null === o) return "null";
        var pairs, k, name, val, type = $.type(o);
        if ("undefined" === type) return void 0;
        if ("number" === type || "boolean" === type) return String(o);
        if ("string" === type) return $.quoteString(o);
        if ("function" == typeof o.toJSON) return $.toJSON(o.toJSON());
        if ("date" === type) {
            var month = o.getUTCMonth() + 1,
            day = o.getUTCDate(),
            year = o.getUTCFullYear(),
            hours = o.getUTCHours(),
            minutes = o.getUTCMinutes(),
            seconds = o.getUTCSeconds(),
            milli = o.getUTCMilliseconds();
            return 10 > month && (month = "0" + month),
            10 > day && (day = "0" + day),
            10 > hours && (hours = "0" + hours),
            10 > minutes && (minutes = "0" + minutes),
            10 > seconds && (seconds = "0" + seconds),
            100 > milli && (milli = "0" + milli),
            10 > milli && (milli = "0" + milli),
            '"' + year + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + "." + milli + 'Z"'
        }
        if (pairs = [], $.isArray(o)) {
            for (k = 0; k < o.length; k++) pairs.push($.toJSON(o[k]) || "null");
            return "[" + pairs.join(",") + "]"
        }
        if ("object" == typeof o) {
            for (k in o) if (hasOwn.call(o, k)) {
                if (type = typeof k, "number" === type) name = '"' + k + '"';
                else {
                    if ("string" !== type) continue;
                    name = $.quoteString(k)
                }
                type = typeof o[k],
                "function" !== type && "undefined" !== type && (val = $.toJSON(o[k]), pairs.push(name + ":" + val))
            }
            return "{" + pairs.join(",") + "}"
        }
    },
    $.evalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse: function(str) {
        return eval("(" + str + ")")
    },
    $.secureEvalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse: function(str) {
        var filtered = str.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
        if (/^[\],:{}\s]*$/.test(filtered)) return eval("(" + str + ")");
        throw new SyntaxError("Error parsing JSON, source is not valid.")
    },
    $.quoteString = function(str) {
        return str.match(escape) ? '"' + str.replace(escape,
        function(a) {
            var c = meta[a];
            return "string" == typeof c ? c: (c = a.charCodeAt(), "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16))
        }) + '"': '"' + str + '"'
    }
} (jQuery),
function($, window, document, undefined) {
    var $window = $(window);
    $.fn.lazyload = function(options) {
        function update() {
            var counter = 0;
            elements.each(function() {
                var $this = $(this);
                if (!settings.skip_invisible || $this.is(":visible")) if ($.abovethetop(this, settings) || $.leftofbegin(this, settings));
                else if ($.belowthefold(this, settings) || $.rightoffold(this, settings)) {
                    if (++counter > settings.failure_limit) return ! 1
                } else $this.trigger("appear"),
                counter = 0
            })
        }
        var $container, elements = this,
        settings = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: window,
            data_attribute: "original",
            skip_invisible: !1,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        return options && (undefined !== options.failurelimit && (options.failure_limit = options.failurelimit, delete options.failurelimit), undefined !== options.effectspeed && (options.effect_speed = options.effectspeed, delete options.effectspeed), $.extend(settings, options)),
        $container = settings.container === undefined || settings.container === window ? $window: $(settings.container),
        0 === settings.event.indexOf("scroll") && $container.bind(settings.event,
        function() {
            return update()
        }),
        this.each(function() {
            var self = this,
            $self = $(self);
            self.loaded = !1,
            ($self.attr("src") === undefined || $self.attr("src") === !1) && $self.is("img") && $self.attr("src", settings.placeholder),
            $self.one("appear",
            function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings)
                    }
                    $("<img />").bind("load",
                    function() {
                        var original = $self.attr("data-" + settings.data_attribute);
                        $self.hide(),
                        $self.is("img") ? $self.attr("src", original) : $self.css("background-image", "url('" + original + "')"),
                        $self[settings.effect](settings.effect_speed),
                        self.loaded = !0;
                        var temp = $.grep(elements,
                        function(element) {
                            return ! element.loaded
                        });
                        if (elements = $(temp), settings.load) {
                            var elements_left = elements.length;
                            settings.load.call(self, elements_left, settings)
                        }
                    }).attr("src", $self.attr("data-" + settings.data_attribute))
                }
            }),
            0 !== settings.event.indexOf("scroll") && $self.bind(settings.event,
            function() {
                self.loaded || $self.trigger("appear")
            })
        }),
        $window.bind("resize",
        function() {
            update()
        }),
        /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && $window.bind("pageshow",
        function(event) {
            event.originalEvent && event.originalEvent.persisted && elements.each(function() {
                $(this).trigger("appear")
            })
        }),
        $(document).ready(function() {
            update()
        }),
        this
    },
    $.belowthefold = function(element, settings) {
        var fold;
        return fold = settings.container === undefined || settings.container === window ? (window.innerHeight ? window.innerHeight: $window.height()) + $window.scrollTop() : $(settings.container).offset().top + $(settings.container).height(),
        fold <= $(element).offset().top - settings.threshold
    },
    $.rightoffold = function(element, settings) {
        var fold;
        return fold = settings.container === undefined || settings.container === window ? $window.width() + $window.scrollLeft() : $(settings.container).offset().left + $(settings.container).width(),
        fold <= $(element).offset().left - settings.threshold
    },
    $.abovethetop = function(element, settings) {
        var fold;
        return fold = settings.container === undefined || settings.container === window ? $window.scrollTop() : $(settings.container).offset().top,
        fold >= $(element).offset().top + settings.threshold + $(element).height()
    },
    $.leftofbegin = function(element, settings) {
        var fold;
        return fold = settings.container === undefined || settings.container === window ? $window.scrollLeft() : $(settings.container).offset().left,
        fold >= $(element).offset().left + settings.threshold + $(element).width()
    },
    $.inviewport = function(element, settings) {
        return ! ($.rightoffold(element, settings) || $.leftofbegin(element, settings) || $.belowthefold(element, settings) || $.abovethetop(element, settings))
    },
    $.extend($.expr[":"], {
        "below-the-fold": function(a) {
            return $.belowthefold(a, {
                threshold: 0
            })
        },
        "above-the-top": function(a) {
            return ! $.belowthefold(a, {
                threshold: 0
            })
        },
        "right-of-screen": function(a) {
            return $.rightoffold(a, {
                threshold: 0
            })
        },
        "left-of-screen": function(a) {
            return ! $.rightoffold(a, {
                threshold: 0
            })
        },
        "in-viewport": function(a) {
            return $.inviewport(a, {
                threshold: 0
            })
        },
        "above-the-fold": function(a) {
            return ! $.belowthefold(a, {
                threshold: 0
            })
        },
        "right-of-fold": function(a) {
            return $.rightoffold(a, {
                threshold: 0
            })
        },
        "left-of-fold": function(a) {
            return ! $.rightoffold(a, {
                threshold: 0
            })
        }
    })
} (jQuery, window, document),
function($, window, document, undefined) {
    var OnePageNav = function(elem, options) {
        this.elem = elem,
        this.$elem = $(elem),
        this.options = options,
        this.metadata = this.$elem.data("plugin-options"),
        this.$nav = this.$elem.find("a"),
        this.$win = $(window),
        this.sections = {},
        this.didScroll = !1,
        this.$doc = $(document),
        this.docHeight = this.$doc.height()
    };
    OnePageNav.prototype = {
        defaults: {
            currentClass: "current",
            changeHash: !1,
            easing: "swing",
            filter: "",
            scrollSpeed: 750,
            scrollOffset: 0,
            scrollThreshold: .5,
            begin: !1,
            end: !1,
            scrollChange: !1
        },
        init: function() {
            var self = this;
            return self.config = $.extend({},
            self.defaults, self.options, self.metadata),
            "" !== self.config.filter && (self.$nav = self.$nav.filter(self.config.filter)),
            self.$nav.on("click.onePageNav", $.proxy(self.handleClick, self)),
            self.getPositions(),
            self.bindInterval(),
            self.$win.on("resize.onePageNav", $.proxy(self.getPositions, self)),
            this
        },
        adjustNav: function(self, $parent) {
            self.$elem.find("." + self.config.currentClass).removeClass(self.config.currentClass),
            $parent.addClass(self.config.currentClass)
        },
        bindInterval: function() {
            var docHeight, self = this;
            self.$win.on("scroll.onePageNav",
            function() {
                self.didScroll = !0
            }),
            self.t = setInterval(function() {
                docHeight = self.$doc.height(),
                self.didScroll && (self.didScroll = !1, self.scrollChange()),
                docHeight !== self.docHeight && (self.docHeight = docHeight, self.getPositions())
            },
            250)
        },
        getHash: function($link) {
            return $link.attr("href").split("#")[1]
        },
        getPositions: function() {
            var linkHref, topPos, $target, self = this;
            self.$nav.each(function() {
                linkHref = self.getHash($(this)),
                $target = $("#" + linkHref),
                $target.length && (topPos = $target.offset().top, self.sections[linkHref] = Math.round(topPos) - self.config.scrollOffset)
            })
        },
        getSection: function(windowPos) {
            var returnValue = null,
            windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);
            for (var section in this.sections) this.sections[section] - windowHeight < windowPos && (returnValue = section);
            return returnValue
        },
        scrollChange: function() {
            var $parent, windowTop = this.$win.scrollTop(),
            position = this.getSection(windowTop);
            null !== position && ($parent = this.$elem.find('a[href$="#' + position + '"]').parent(), $parent.hasClass(this.config.currentClass) || (this.adjustNav(this, $parent), this.config.scrollChange && this.config.scrollChange($parent)))
        },
        unbindInterval: function() {
            clearInterval(this.t),
            this.$win.unbind("scroll.onePageNav")
        }
    },
    OnePageNav.defaults = OnePageNav.prototype.defaults,
    $.fn.onePageNav = function(options) {
        return this.each(function() {
            new OnePageNav(this, options).init()
        })
    }
} (jQuery, window, document),
window.Modernizr = function(a, b, c) {
    function z(a) {
        j.cssText = a
    }
    function B(a, b) {
        return typeof a === b
    }
    function C(a, b) {
        return !! ~ ("" + a).indexOf(b)
    }
    function D(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!C(e, "-") && j[e] !== c) return "pfx" == b ? e: !0
        }
        return ! 1
    }
    function E(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
        }
        return ! 1
    }
    function F(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + o.join(d + " ") + d).split(" ");
        return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
    }
    var k, v, y, d = "2.6.2",
    e = {},
    f = !0,
    g = b.documentElement,
    h = "modernizr",
    i = b.createElement(h),
    j = i.style,
    m = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
    n = "Webkit Moz O ms",
    o = n.split(" "),
    p = n.toLowerCase().split(" "),
    q = {},
    t = [],
    u = t.slice,
    w = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"),
        m = b.body,
        n = m || b.createElement("body");
        if (parseInt(d, 10)) for (; d--;) j = b.createElement("div"),
        j.id = e ? e[d] : h + (d + 1),
        l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""),
        l.id = h,
        (m ? l: n).innerHTML += f,
        n.appendChild(l),
        m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)),
        i = c(l, a),
        m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k),
        !!i
    },
    x = {}.hasOwnProperty;
    y = B(x, "undefined") || B(x.call, "undefined") ?
    function(a, b) {
        return b in a && B(a.constructor.prototype[b], "undefined")
    }: function(a, b) {
        return x.call(a, b)
    },
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if ("function" != typeof c) throw new TypeError;
        var d = u.call(arguments, 1),
        e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a,
                g = c.apply(f, d.concat(u.call(arguments)));
                return Object(g) === g ? g: f
            }
            return c.apply(b, d.concat(u.call(arguments)))
        };
        return e
    }),
    q.touch = function() {
        var c;
        return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""),
        function(a) {
            c = 9 === a.offsetTop
        }),
        c
    },
    q.csstransforms3d = function() {
        var a = !!F("perspective");
        return a && "webkitPerspective" in g.style && w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
        function(b, c) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight
        }),
        a
    },
    q.csstransitions = function() {
        return F("transition")
    };
    for (var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "": "no-") + v));
    return e.addTest = function(a, b) {
        if ("object" == typeof a) for (var d in a) y(a, d) && e.addTest(d, a[d]);
        else {
            if (a = a.toLowerCase(), e[a] !== c) return e;
            b = "function" == typeof b ? b() : b,
            "undefined" != typeof f && f && (g.className += " " + (b ? "": "no-") + a),
            e[a] = b
        }
        return e
    },
    z(""),
    i = k = null,
    function(a, b) {
        function k(a, b) {
            var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>",
            d.insertBefore(c.lastChild, d.firstChild)
        }
        function l() {
            var a = r.elements;
            return "string" == typeof a ? a.split(" ") : a
        }
        function m(a) {
            var b = i[a[g]];
            return b || (b = {},
            h++, a[g] = h, i[h] = b),
            b
        }
        function n(a, c, f) {
            if (c || (c = b), j) return c.createElement(a);
            f || (f = m(c));
            var g;
            return g = f.cache[a] ? f.cache[a].cloneNode() : e.test(a) ? (f.cache[a] = f.createElem(a)).cloneNode() : f.createElem(a),
            g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        }
        function o(a, c) {
            if (a || (a = b), j) return a.createDocumentFragment();
            c = c || m(a);
            for (var d = c.frag.cloneNode(), e = 0, f = l(), g = f.length; g > e; e++) d.createElement(f[e]);
            return d
        }
        function p(a, b) {
            b.cache || (b.cache = {},
            b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()),
            a.createElement = function(c) {
                return r.shivMethods ? n(c, a, b) : b.createElem(c)
            },
            a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g,
            function(a) {
                return b.createElem(a),
                b.frag.createElement(a),
                'c("' + a + '")'
            }) + ");return n}")(r, b.frag)
        }
        function q(a) {
            a || (a = b);
            var c = m(a);
            return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),
            j || p(a, c),
            a
        }
        var f, j, c = a.html5 || {},
        d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g = "_html5shiv",
        h = 0,
        i = {}; !
        function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>",
                f = "hidden" in a,
                j = 1 == a.childNodes.length ||
                function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
                } ()
            } catch(c) {
                f = !0,
                j = !0
            }
        } ();
        var r = {
            elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: c.shivCSS !== !1,
            supportsUnknownElements: j,
            shivMethods: c.shivMethods !== !1,
            type: "default",
            shivDocument: q,
            createElement: n,
            createDocumentFragment: o
        };
        a.html5 = r,
        q(b)
    } (this, b),
    e._version = d,
    e._prefixes = m,
    e._domPrefixes = p,
    e._cssomPrefixes = o,
    e.testProp = function(a) {
        return D([a])
    },
    e.testAllProps = F,
    e.testStyles = w,
    e.prefixed = function(a, b, c) {
        return b ? F(a, b, c) : F(a, "pfx")
    },
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""),
    e
} (this, this.document),
function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }
    function e(a) {
        return "string" == typeof a
    }
    function f() {}
    function g(a) {
        return ! a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
        var a = p.shift();
        q = 1,
        a ? a.t ? m(function() { ("c" == a.t ? B.injectCss: B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        },
        0) : (a(), h()) : q = 0
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                },
                50);
                for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === y[c] && (r = 1, y[c] = []),
        "object" == a ? l.data = c: (l.src = c, l.type = a),
        l.width = l.height = "0",
        l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        },
        p.splice(e, 0, u),
        "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null: n), m(k, j)) : y[c].push(l))
    }
    function j(a, b, c, d, f) {
        return q = 0,
        b = b || "j",
        e(a) ? i("c" == b ? v: u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()),
        this
    }
    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        },
        a
    }
    var A, B, l = b.documentElement,
    m = a.setTimeout,
    n = b.getElementsByTagName("script")[0],
    o = {}.toString,
    p = [],
    q = 0,
    r = "MozAppearance" in l.style,
    s = r && !!b.createRange().compareNode,
    t = s ? l: n.parentNode,
    l = a.opera && "[object Opera]" == o.call(a.opera),
    l = !!b.attachEvent && !l,
    u = r ? "object": l ? "script": "img",
    v = l ? "script": u,
    w = Array.isArray ||
    function(a) {
        return "[object Array]" == o.call(a)
    },
    x = [],
    y = {},
    z = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]),
            a
        }
    };
    B = function(a) {
        function b(a) {
            var e, f, g, a = a.split("!"),
            b = x.length,
            c = a.pop(),
            d = a.length,
            c = {
                url: c,
                origUrl: c,
                prefixes: a
            };
            for (f = 0; d > f; f++) g = a[f].split("="),
            (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; b > f; f++) c = x[f](c);
            return c
        }
        function g(a, e, f, g, h) {
            var i = b(a),
            j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(),
            i.bypass || (e && (e = d(e) ? e: e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c": c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                k(),
                e && e(i.origUrl, h, g),
                j && j(i.origUrl, h, g),
                y[i.url] = 2
            })))
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a)) c || (j = function() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a),
                        l()
                    }),
                    g(a, j, b, 0, h);
                    else if (Object(a) === a) for (n in m = function() {
                        var c, b = 0;
                        for (c in a) a.hasOwnProperty(c) && b++;
                        return b
                    } (), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                        var a = [].slice.call(arguments);
                        k.apply(this, a),
                        l()
                    }: j[n] = function(a) {
                        return function() {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b),
                            l()
                        }
                    } (k[n])), g(a[n], j, b, n, h))
                } else ! c && l()
            }
            var m, n, h = !!a.test,
            i = a.load || a.both,
            j = a.callback || f,
            k = j,
            l = a.complete || f;
            c(h ? a.yep: a.nope, !!i),
            i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0);
        else if (w(a)) for (i = 0; i < a.length; i++) j = a[i],
        e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else Object(a) === a && h(a, l)
    },
    B.addPrefix = function(a, b) {
        z[a] = b
    },
    B.addFilter = function(a) {
        x.push(a)
    },
    B.errorTimeout = 1e4,
    null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0),
        b.readyState = "complete"
    },
    0)),
    a.yepnope = k(),
    a.yepnope.executeStack = h,
    a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var l, o, k = b.createElement("script"),
        e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        c = j ? h: c || f,
        k.onreadystatechange = k.onload = function() { ! l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        },
        m(function() {
            l || (l = 1, c(1))
        },
        e),
        i ? k.onload() : n.parentNode.insertBefore(k, n)
    },
    a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var j, e = b.createElement("link"),
        c = i ? h: c || f;
        e.href = a,
        e.rel = "stylesheet",
        e.type = "text/css";
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
} (this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
},
function($, window, undefined) {
    "use strict";
    var $special, resizeTimeout, $event = $.event;
    $special = $event.special.debouncedresize = {
        setup: function() {
            $(this).on("resize", $special.handler)
        },
        teardown: function() {
            $(this).off("resize", $special.handler)
        },
        handler: function(event, execAsap) {
            var context = this,
            args = arguments,
            dispatch = function() {
                event.type = "debouncedresize",
                $event.dispatch.apply(context, args)
            };
            resizeTimeout && clearTimeout(resizeTimeout),
            execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold)
        },
        threshold: 50
    };
    var $window = $(window),
    Modernizr = window.Modernizr;
    $.PFold = function(options, element) {
        this.$el = $(element),
        this._init(options)
    },
    $.PFold.defaults = {
        perspective: 1200,
        speed: 450,
        easing: "linear",
        folddelay: 0,
        folds: 2,
        folddirection: ["right", "top"],
        overlays: !0,
        centered: !1,
        containerSpeedFactor: 1,
        containerEasing: "linear",
        onEndFolding: function() {
            return ! 1
        },
        onEndUnfolding: function() {
            return ! 1
        }
    },
    $.PFold.prototype = {
        _init: function(options) {
            this.options = $.extend(!0, {},
            $.PFold.defaults, options),
            this.transEndEventNames = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                msTransition: "MSTransitionEnd",
                transition: "transitionend"
            },
            this.transEndEventName = this.transEndEventNames[Modernizr.prefixed("transition")],
            this.support = Modernizr.csstransitions && Modernizr.csstransforms3d,
            this.support && (this.$el.css("perspective", this.options.perspective + "px"), this.$el.css("transition", "all " + this.options.speed * this.options.folds * this.options.containerSpeedFactor + "ms " + this.options.containerEasing)),
            this.initialDim = {
                width: this.$el.width(),
                height: this.$el.height(),
                left: 0,
                top: 0
            },
            this._layout(),
            this.$iContent = this.$el.find(".uc-initial"),
            this.iContent = this.$iContent.html(),
            this.$fContent = this.$el.find(".uc-final"),
            this.fContent = this.$fContent.html(),
            this.$finalEl = $('<div class="uc-final-wrapper"></div>').append(this.$iContent.clone().hide(), this.$fContent).hide(),
            this.$el.append(this.$finalEl),
            this._setDimOffset(),
            this.opened = !1,
            this.animating = !1,
            this._initEvents()
        },
        _layout: function() {
            var $initialContentEl = this.$el.children("div.uc-initial-content"),
            finalDim = this._getFinalDim(),
            $finalContentEl = this.$el.children("div.uc-final-content").css({
                width: finalDim.width,
                height: finalDim.height
            });
            $initialContentEl.wrap('<div class="uc-initial"></div>'),
            $finalContentEl.show().wrap($('<div class="uc-final"></div>'))
        },
        _initEvents: function() {
            var self = this;
            $window.on("debouncedresize.pfold",
            function(event) {
                self._setDimOffset()
            })
        },
        _setDimOffset: function() {
            this.initialDim.offsetL = this.$el.offset().left - $window.scrollLeft(),
            this.initialDim.offsetT = this.$el.offset().top - $window.scrollTop(),
            this.initialDim.offsetR = $window.width() - this.initialDim.offsetL - this.initialDim.width,
            this.initialDim.offsetB = $window.height() - this.initialDim.offsetT - this.initialDim.height
        },
        _getTranslationValue: function() {
            for (var x = 0,
            y = 0,
            horizTimes = 0,
            vertTimes = 0,
            i = 0; i < this.options.folds; ++i) {
                var dir = this.options.folddirection[i] || "bottom";
                switch (dir) {
                case "left":
                    x += this.initialDim.width * Math.pow(2, horizTimes) / 2,
                    horizTimes += 1;
                    break;
                case "right":
                    x -= this.initialDim.width * Math.pow(2, horizTimes) / 2,
                    horizTimes += 1;
                    break;
                case "top":
                    y += this.initialDim.height * Math.pow(2, vertTimes) / 2,
                    vertTimes += 1;
                    break;
                case "bottom":
                    y -= this.initialDim.height * Math.pow(2, vertTimes) / 2,
                    vertTimes += 1
                }
            }
            return {
                x: x,
                y: y
            }
        },
        _getAccumulatedValue: function() {
            for (var l = 0,
            r = 0,
            t = 0,
            b = 0,
            horizTimes = 0,
            vertTimes = 0,
            i = 0; i < this.options.folds; ++i) {
                var dir = this.options.folddirection[i] || "bottom";
                switch (dir) {
                case "left":
                    l += this.initialDim.width * Math.pow(2, horizTimes),
                    horizTimes += 1;
                    break;
                case "right":
                    r += this.initialDim.width * Math.pow(2, horizTimes),
                    horizTimes += 1;
                    break;
                case "top":
                    t += this.initialDim.height * Math.pow(2, vertTimes),
                    vertTimes += 1;
                    break;
                case "bottom":
                    b += this.initialDim.height * Math.pow(2, vertTimes),
                    vertTimes += 1
                }
            }
            return {
                l: l,
                r: r,
                t: t,
                b: b
            }
        },
        _getFinalDim: function() {
            for (var horizTimes = 0,
            vertTimes = 0,
            i = 0; i < this.options.folds; ++i) {
                var dir = this.options.folddirection[i] || "bottom";
                switch (dir) {
                case "left":
                case "right":
                    horizTimes += 1;
                    break;
                case "top":
                case "bottom":
                    vertTimes += 1
                }
            }
            return {
                width: this.initialDim.width * Math.pow(2, horizTimes),
                height: this.initialDim.height * Math.pow(2, vertTimes)
            }
        },
        _updateStepStyle: function(action) {
            var w, h, l, t;
            return "fold" === action ? (w = "left" === this.lastDirection || "right" === this.lastDirection ? this.lastStyle.width / 2 : this.lastStyle.width, h = "left" === this.lastDirection || "right" === this.lastDirection ? this.lastStyle.height: this.lastStyle.height / 2, l = "left" === this.lastDirection ? this.lastStyle.left + this.lastStyle.width / 2 : this.lastStyle.left, t = "top" === this.lastDirection ? this.lastStyle.top + this.lastStyle.height / 2 : this.lastStyle.top) : (w = "left" === this.lastDirection || "right" === this.lastDirection ? 2 * this.lastStyle.width: this.lastStyle.width, h = "left" === this.lastDirection || "right" === this.lastDirection ? this.lastStyle.height: 2 * this.lastStyle.height, l = "left" === this.lastDirection ? this.lastStyle.left - this.lastStyle.width: this.lastStyle.left, t = "top" === this.lastDirection ? this.lastStyle.top - this.lastStyle.height: this.lastStyle.top),
            {
                width: w,
                height: h,
                left: l,
                top: t
            }
        },
        _getOppositeDirection: function(realdirection) {
            var rvd;
            switch (realdirection) {
            case "left":
                rvd = "right";
                break;
            case "right":
                rvd = "left";
                break;
            case "top":
                rvd = "bottom";
                break;
            case "bottom":
                rvd = "top"
            }
            return rvd
        },
        _start: function(action, step) {
            step |= 0;
            var self = this,
            styleCSS = "fold" === action ? {
                width: this.lastStyle.width,
                height: this.lastStyle.height,
                left: this.lastStyle.left,
                top: this.lastStyle.top
            }: this.initialDim,
            contentTopFront = "",
            contentBottom = "",
            contentTopBack = "",
            direction = "fold" === action ? this.options.folddirection[this.options.folds - 1 - step] || "bottom": this.options.folddirection[step] || "bottom",
            nextdirection = "fold" === action ? this.options.folddirection[this.options.folds - 2 - step] || "bottom": "";
            switch (this.$el.find("div.uc-part").remove(), step) {
            case 0:
            case this.options.folds - 1 : if ("fold" === action) {
                    if (step === this.options.folds - 1 && (styleCSS = this.initialDim, contentTopFront = this.iContent), 0 === step) {
                        this._setDimOffset(),
                        this.$el.css({
                            left: 0,
                            top: 0
                        });
                        var content = this._setLastStep(direction, styleCSS),
                        contentBottom = content.bottom,
                        contentTopBack = content.top;
                        this.$finalEl.hide().children().hide()
                    }
                } else {
                    if (0 === step) {
                        this._setDimOffset();
                        var coords = this._getTranslationViewport();
                        this.$el.addClass("uc-current").css({
                            left: coords.ftx,
                            top: coords.fty
                        }),
                        contentTopFront = this.iContent,
                        this.$finalEl.hide().children().hide()
                    } else styleCSS = this._updateStepStyle(action);
                    if (step === this.options.folds - 1) var content = this._setLastStep(direction, styleCSS),
                    contentBottom = content.bottom,
                    contentTopBack = content.top
                }
                break;
            case this.options.folds:
                styleCSS = "fold" === action ? this.initialDim: this._updateStepStyle(action);
                var contentIdx = "fold" === action ? 0 : 1;
                return this.$el.find(".uc-part").remove(),
                this.$finalEl.css(styleCSS).show().children().eq(contentIdx).show(),
                this.opened = "fold" === action ? !1 : !0,
                this.animating = !1,
                "fold" === action ? (this.$el.removeClass("uc-current"), this.options.onEndFolding()) : this.options.onEndUnfolding(),
                !1;
            default:
                styleCSS = this._updateStepStyle(action)
            }
            this.support && (styleCSS.transition = "all " + this.options.speed + "ms " + this.options.easing);
            var unfoldClass = "uc-unfold-" + direction,
            topElClasses = "fold" === action ? "uc-unfold uc-part " + unfoldClass: "uc-part " + unfoldClass,
            $topEl = $('<div class="' + topElClasses + '"><div class="uc-front">' + contentTopFront + '</div><div class="uc-back">' + contentTopBack + "</div></div>").css(styleCSS),
            $bottomEl = $('<div class="uc-part uc-single">' + contentBottom + "</div>").css(styleCSS);
            this.lastDirection = "fold" === action ? nextdirection: direction,
            this.lastStyle = styleCSS,
            this.$el.append($bottomEl, $topEl),
            this.options.overlays && this.support && this._addOverlays(action, $bottomEl, $topEl),
            setTimeout(function() {
                if ("fold" === action ? $topEl.removeClass("uc-unfold") : $topEl.addClass("uc-unfold"), self.support ? $topEl.on(self.transEndEventName,
                function(event) {
                    "uc-flipoverlay" !== event.target.className && step < self.options.folds && setTimeout(function() {
                        self._start(action, step + 1)
                    },
                    self.options.folddelay)
                }) : self._start(action, step + 1), self.options.overlays && self.support) {
                    var bo = "fold" === action ? 1 : 0,
                    tbo = "fold" === action ? .5 : 0,
                    tfo = "fold" === action ? 0 : .5;
                    self.$bottomOverlay.css("opacity", bo),
                    self.$topBackOverlay.css("opacity", tbo),
                    self.$topFrontOverlay.css("opacity", tfo)
                }
            },
            30)
        },
        _getTranslationViewport: function() {
            var accumulatedValues = this._getAccumulatedValue(),
            tx = 0,
            ty = 0;
            this.fOffsetL = this.initialDim.offsetL - accumulatedValues.l,
            this.fOffsetT = this.initialDim.offsetT - accumulatedValues.t,
            this.fOffsetR = this.initialDim.offsetR - accumulatedValues.r,
            this.fOffsetB = this.initialDim.offsetB - accumulatedValues.b,
            this.fOffsetL < 0 && (tx = Math.abs(this.fOffsetL)),
            this.fOffsetT < 0 && (ty = Math.abs(this.fOffsetT)),
            this.fOffsetR < 0 && (tx -= Math.abs(this.fOffsetR)),
            this.fOffsetB < 0 && (ty -= Math.abs(this.fOffsetB));
            var ftx = tx,
            fty = ty;
            if (this.options.centered) {
                var translationValue = this._getTranslationValue();
                ftx = translationValue.x > 0 && this.fOffsetR + translationValue.x >= 0 ? this.fOffsetL >= 0 ? Math.min(translationValue.x, this.fOffsetR) : translationValue.x + (tx - translationValue.x) : translationValue.x < 0 && this.fOffsetL + translationValue.x >= 0 && this.fOffsetR >= 0 ? Math.min(translationValue.x, this.fOffsetL) : translationValue.x + (tx - translationValue.x),
                fty = translationValue.y > 0 && this.fOffsetB + translationValue.y >= 0 ? this.fOffsetT >= 0 ? Math.min(translationValue.y, this.fOffsetB) : translationValue.y + (ty - translationValue.y) : translationValue.y < 0 && this.fOffsetT + translationValue.y >= 0 && this.fOffsetB >= 0 ? Math.min(translationValue.y, this.fOffsetT) : translationValue.y + (ty - translationValue.y)
            }
            return {
                ftx: ftx,
                fty: fty
            }
        },
        _setLastStep: function(direction, styleCSS) {
            var contentBottom, contentTopBack, contentBottomStyle = "",
            contentTopBackStyle = "";
            switch (direction) {
            case "bottom":
                contentTopBackStyle = "margin-top: -" + styleCSS.height + "px";
                break;
            case "top":
                contentBottomStyle = "margin-top: -" + styleCSS.height + "px";
                break;
            case "left":
                contentTopBackStyle = "width:" + 2 * styleCSS.width + "px",
                contentBottomStyle = "width:" + 2 * styleCSS.width + "px;margin-left: -" + styleCSS.width + "px";
                break;
            case "right":
                contentTopBackStyle = "with:" + 2 * styleCSS.width + "px;margin-left: -" + styleCSS.width + "px",
                contentBottomStyle = "width:" + 2 * styleCSS.width + "px"
            }
            contentBottom = '<div class="uc-inner"><div class="uc-inner-content" style="' + contentBottomStyle + '">' + this.fContent + "</div></div>";
            var contentTopBackClasses = "top" === direction || "bottom" === direction ? "uc-inner uc-inner-rotate": "uc-inner";
            return contentTopBack = '<div class="' + contentTopBackClasses + '"><div class="uc-inner-content" style="' + contentTopBackStyle + '">' + this.fContent + "</div></div>",
            {
                bottom: contentBottom,
                top: contentTopBack
            }
        },
        _addOverlays: function(action, $bottomEl, $topEl) {
            var bottomOverlayStyle, topFrontOverlayStyle, topBackOverlayStyle;
            this.$bottomOverlay = $('<div class="uc-overlay"></div>'),
            this.$topFrontOverlay = $('<div class="uc-flipoverlay"></div>'),
            this.$topBackOverlay = $('<div class="uc-flipoverlay"></div>'),
            "fold" === action ? (bottomOverlayStyle = {
                transition: "opacity " + this.options.speed / 2 + "ms " + this.options.easing + " " + this.options.speed / 2 + "ms"
            },
            topFrontOverlayStyle = {
                opacity: .5,
                transition: "opacity " + this.options.speed / 2 + "ms " + this.options.easing
            },
            topBackOverlayStyle = {
                opacity: 0,
                transition: "opacity " + this.options.speed / 2 + "ms " + this.options.easing
            }) : (bottomOverlayStyle = {
                opacity: 1,
                transition: "opacity " + this.options.speed / 2 + "ms " + this.options.easing
            },
            topFrontOverlayStyle = {
                transition: "opacity " + this.options.speed / 2 + "ms " + this.options.easing
            },
            topBackOverlayStyle = {
                opacity: .5,
                transition: "opacity " + this.options.speed / 2 + "ms " + this.options.easing + " " + this.options.speed / 2 + "ms"
            }),
            $bottomEl.append(this.$bottomOverlay.css(bottomOverlayStyle)),
            $topEl.children("div.uc-front").append(this.$topFrontOverlay.css(topFrontOverlayStyle)).end().children("div.uc-back").append(this.$topBackOverlay.css(topBackOverlayStyle))
        },
        unfold: function() {
            return this.opened || this.animating ? !1 : (this.animating = !0, void this._start("unfold"))
        },
        fold: function() {
            return ! this.opened || this.animating ? !1 : (this.animating = !0, void this._start("fold"))
        },
        getStatus: function() {
            return this.opened ? "opened": "closed"
        }
    };
    var logError = function(message) {
        window.console && window.console.error(message)
    };
    $.fn.pfold = function(options) {
        var instance = $.data(this, "pfold");
        if ("string" == typeof options) {
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                return instance ? $.isFunction(instance[options]) && "_" !== options.charAt(0) ? void instance[options].apply(instance, args) : void logError("no such method '" + options + "' for pfold instance") : void logError("cannot call methods on pfold prior to initialization; attempted to call method '" + options + "'")
            })
        } else this.each(function() {
            instance ? instance._init() : instance = $.data(this, "pfold", new $.PFold(options, this))
        });
        return instance
    }
} (jQuery, window),
$(function() {
    function addPiano() {
        $(".menu li a").after('<div class="hover-bg"></div>'); {
            var audio_msg = checkAudioCompat();
            setTimeout(function() {
                for (var len = $(".menu li").length, audio_html = "", j = 0; len > j; j++) audio_html += '<audio class="my_audio" preload="auto"><source class="audio_source" src="http://www.xuanfengge.com/wp-content/themes/lee2.0/media/' + (j + 1) + "." + audio_msg + '" type=audio/' + audio_msg + "></audio>";
                $(".piano_audio").append(audio_html),
                piano.audioOn = 1
            },
            1e3)
        }
    }
    function initAutoMusic(initUrl) {
        var testTimer = setInterval(function() { (piano.audioOn = 1) && (clearInterval(testTimer), setTimeout(function() {
                var paramReg = /\/\#music=/,
                start = initUrl.search(paramReg) + 8,
                end = initUrl.length,
                params = initUrl.substring(start, end),
                dataArr = params.split("-"),
                music = parseData(dataArr);
                listen(music)
            },
            1500))
        },
        500)
    }
    function checkAudioCompat() {
        var myAudio = document.createElement("audio"),
        msg = "";
        if (myAudio.canPlayType) {
            var playMsg = myAudio.canPlayType("audio/mpeg");
            if (playMsg = myAudio.canPlayType('audio/ogg; codecs="vorbis"'), "" != playMsg) return msg = "ogg";
            if ("" != playMsg) return msg = "mp3"
        }
    }
    function playKey(i) {
        checkAudioCompat();
        if (1 == piano.audioOn) try {
            $("body").find(".my_audio").eq(i).get(0).currentTime = 0,
            $("body").find(".my_audio").eq(i).get(0).play()
        } catch(e) {
            console.log(e)
        }
    }
    function timeRun() {
        piano.step = 0,
        clearInterval(piano.timeRuner),
        piano.timeRuner = setInterval(function() {
            piano.step += 100,
            piano.timeCount = piano.step
        },
        100)
    }
    function startRecord(key) {
        if (status.play) if (status.end = !0, "" != piano.url) if (0 != key) {
            var urlTime = piano.timeCount / 100;
            piano.url += "-" + key + ":" + urlTime,
            timeRun()
        } else piano.url += "-" + key + ":0";
        else piano.url += key + ":0",
        timeRun()
    }
    function playPiano(i) {
        var key = i - 1;
        piano.keyDom.eq(key).children("div").stop(!0, !1).animate({
            top: "0px"
        },
        200),
        piano.keyDom.eq(key).children("div").animate({
            top: "66px"
        },
        200),
        playKey(key)
    }
    function share() {
        var shareCourseTitle = $(".share_title").data("title"),
        sinaTitle = "分享节奏 「" + shareCourseTitle + "」 -轩枫阁（分享自@轩枫Y_me）",
        renrenTitle = "分享节奏 「" + shareCourseTitle + "」-轩枫阁（分享自@农航亮(356948827)）",
        tqqTitle = "分享节奏 「" + shareCourseTitle + "」-轩枫阁（分享自@轩枫阁）";
        tqzoneTitle = "分享节奏 「" + shareCourseTitle + "」-轩枫阁（分享自@♪紫轩枫、）";
        var picShare = "http://www.xuanfengge.com/wp-content/themes/lee2.0/images/piano.jpg";
        shareUrl = encodeURIComponent($(".share_record").attr("href")),
        $("body").pianoSnsShare({
            tsina: {
                url: shareUrl,
                title: sinaTitle,
                pic: picShare
            },
            renren: {
                srcUrl: shareUrl,
                title: renrenTitle,
                pic: picShare
            },
            tqq: {
                url: shareUrl,
                title: tqqTitle,
                pic: picShare
            },
            tqzone: {
                url: shareUrl,
                title: tqzoneTitle,
                pic: picShare
            }
        })
    }
    function listen(playData) {
        for (var data = playData.data,
        len = data.length,
        startTime = 0,
        i = 0; len > i; i++) {
            var now = data[i],
            key = now.key,
            time = startTime + 100 * now.time;
            timeOut(key, time),
            startTime = time
        }
    }
    function timeOut(key, time) {
        var eachTimer = setTimeout(function() {
            playPiano(key)
        },
        time);
        piano.lazyTimer.push(eachTimer)
    }
    function analysis(list) {
        var testReg = /\/\#music=(\d:\d-?)*/,
        test = testReg.test(list);
        if (test) {
            var paramReg = /\/\#music=/,
            start = list.search(paramReg) + 8,
            end = list.length,
            params = list.substring(start, end),
            dataArr = params.split("-");
            return parseData(dataArr)
        }
        alert("钢琴链接格式出错，请粘贴完整！")
    }
    function parseData(arr) {
        var autoPlayData = {};
        autoPlayData.data = [];
        for (var jsonObj = autoPlayData.data,
        len = arr.length,
        i = 0; len > i; i++) {
            var newArr = arr[i].split(":"),
            key = newArr[0],
            time = newArr[1];
            if (0 != key) {
                var newObj = {};
                newObj.key = key,
                newObj.time = time,
                jsonObj.push(newObj)
            }
        }
        return autoPlayData
    }
    function renderList(list) {
        var tmp = "<ul>";
        list = list || [];
        for (var i in list) tmp += '<li class="song"><span class="split">•</span><a data-title="' + i + '">' + i + "</a></li>";
        tmp += '<li class="mysong"><span class="split">•</span><a href="http://www.xuanfengge.com/piano" data-title="' + i + '">我要提交曲谱>></a></li>',
        tmp += "</ul>",
        $("#list-info")[0].innerHTML = tmp
    }
    function renderSong(title) {
        var opern = $("#song-opern"),
        song = list[title];
        opern.find(".title").html(title);
        var arr = song.split("|"),
        keys = arr && arr[0],
        from = $("#song-opern").find(".opern-from");
        if (from.hide(), keys.length) {
            var COUNT = 35,
            len = Math.ceil(keys.length / COUNT);
            $("#opern-info")[0].innerHTML = "";
            for (var i = 0; len > i; i++) {
                var l = COUNT * (i + 1),
                tmp1 = tmp2 = "";
                i == len - 1 && (l = keys.length);
                for (var j = i * COUNT; l > j; j++) {
                    var num = keys[j];
                    "0" == num ? (tmp1 += '<dd class="empty-pat"></dd>', tmp2 += '<dd class="empty-pat"></dd>') : (tmp1 += "8" == num || "9" == num ? '<dd class="high-pat">' + (num - 7) + "</dd>": "<dd>" + num + "</dd>", tmp2 += "<dd>" + map[num] + "</dd>")
                }
                $("#opern-info")[0].innerHTML += '<dl class="number"><dt>乐谱</dt>' + tmp1 + "</dl>",
                $("#opern-info")[0].innerHTML += '<dl class="letter"><dt>键盘弹奏</dt>' + tmp2 + "</dl>"
            }
        }
        if (arr[1]) {
            var link = from.find("a");
            link.html(arr[1]),
            arr[2] && link.attr("href", arr[2]),
            from.show()
        }
    }
    function showSongList() {
        $("#song-opern").hide(),
        $("#song-list").show()
    }
    var piano = {
        keyDom: $("#nav #menu-nav li"),
        url: "",
        audioOn: 0,
        timeRuner: null,
        timeCount: 0,
        step: 0,
        lazyTimer: [],
        extraTimer: null
    };
    if ($(".music_trangle").hover(function() {
        clearTimeout(piano.extraTimer),
        $(".piano_extra").show(),
        $(this).addClass("trangle_hover")
    },
    function() {
        piano.extraTimer = setTimeout(function() {
            $(".piano_extra").hide(),
            $(".music_trangle").removeClass("trangle_hover")
        },
        800)
    }), $(".piano_extra").hover(function() {
        clearTimeout(piano.extraTimer),
        $(this).show(),
        $(".music_trangle").addClass("trangle_hover")
    },
    function() {
        $(this).hide(),
        $(".music_trangle").removeClass("trangle_hover")
    }), $(".book_play").click(function() {
        renderList(list),
        $(".piano_album").show(),
        $(".album_choose").show(),
        $(".piano_function").hide(),
        $(".song-list").show(),
        $(".song-opern").hide(),
        $(".save_extra").hide()
    }), $(".song_record").click(function() {
        $(".album_choose").hide(),
        $(".piano_function").show(),
        $(".piano_album").show(),
        $(".record-area").show(),
        $(".record-success").hide()
    }), $(".piano_extra").click(function() {
        $("#banner, .feature, #top, #logo").hide(),
        $("#nav").animate({
            width: "980px"
        }),
        $("#nav li").animate({
            width: "108.5px"
        })
    }), $(".piano_album").on("click", ".album_close",
    function() {
        $("#banner, .feature, #top, #logo").show(),
        $("#nav li").css({
            width: "90px"
        }),
        $("#nav").css({
            width: "810px"
        })
    }), $.browser.msie && $.browser.version < 9) {
        $(".menu li a").after('<div class="hover-bg"></div>'),
        $(".menu").addClass("menupiano"),
        $(".music_extra_nav").hide();
        var testReg = /\/\#music=(\d:\d-?)*/,
        test = testReg.test(location.href);
        if (test) {
            {
                $("#logo").offset()
            }
            alert("浏览器不支持音乐播放，请使用chrome谷歌内核浏览器")
        }
    } else {
        var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
        if (clientWidth > 980) {
            addPiano();
            var testReg = /\/\#music=(\d:\d-?)*/,
            test = testReg.test(location.href);
            test ? initAutoMusic(location.href) : 1 == parseInt(2 * Math.random()) && initAutoMusic("http://www.xuanfengge.com/#music=1:0-2:3-3:2-4:2-5:2-6:2-7:2-8:2-9:2")
        }
    }
    piano.keyDom.each(function(i) {
        $(this).hover(function() {
            $(this).children("div").stop(!0, !1).animate({
                top: "0px"
            },
            200),
            playKey(i),
            startRecord(i + 1)
        },
        function() {
            $(this).children("div").animate({
                top: "66px"
            },
            200)
        })
    }),
    $(document).keydown(function(event) {
        49 == event.keyCode || 97 == event.keyCode || 65 == event.keyCode ? (playPiano(1), startRecord(1)) : 50 == event.keyCode || 98 == event.keyCode || 83 == event.keyCode ? (playPiano(2), startRecord(2)) : 51 == event.keyCode || 99 == event.keyCode || 68 == event.keyCode ? (playPiano(3), startRecord(3)) : 52 == event.keyCode || 100 == event.keyCode || 70 == event.keyCode ? (playPiano(4), startRecord(4)) : 53 == event.keyCode || 101 == event.keyCode || 71 == event.keyCode ? (playPiano(5), startRecord(5)) : 54 == event.keyCode || 102 == event.keyCode || 72 == event.keyCode ? (playPiano(6), startRecord(6)) : 55 == event.keyCode || 103 == event.keyCode || 74 == event.keyCode ? (playPiano(7), startRecord(7)) : 56 == event.keyCode || 104 == event.keyCode || 75 == event.keyCode ? (playPiano(8), startRecord(8)) : 57 == event.keyCode || 105 == event.keyCode || 76 == event.keyCode ? (playPiano(9), startRecord(9)) : 32 == event.keyCode ? startRecord(0) : 13 == event.keyCode
    });
    var status = {
        play: !1,
        copy: !1,
        end: !1,
        reset: !1
    };
    $(".piano_function").on("click", ".start_record",
    function() {
        status.play = !0,
        $(".cancel_record").show(),
        $(".finish_record").show(),
        $(".record-state").text("正在录制，请使用鼠标或键盘弹奏"),
        $(this).hide()
    }),
    $(".piano_function").on("click", ".cancel_record",
    function() {
        status.play = !1,
        piano.url = "",
        status.end = !1,
        $(".finish_record").hide(),
        $(".start_record").show(),
        $(this).hide(),
        $(".record-state").text("点击开始录制，可以把你弹奏的曲子录制下来")
    }),
    $(".piano_function").on("click", ".finish_record",
    function() {
        if (status.end) {
            status.play = !1,
            status.end = !1;
            var allUrl = "http://www.xuanfengge.com/#music=" + piano.url;
            $(".share_record").attr("href", allUrl),
            piano.url = "";
            var copyCon = $(".share_record").attr("href"),
            flashvars = {
                content: encodeURIComponent(copyCon),
                uri: "http://www.xuanfengge.com/wp-content/themes/lee2.0/images/copy.png"
            },
            params = {
                wmode: "transparent",
                allowScriptAccess: "always"
            };
            swfobject.embedSWF("http://www.xuanfengge.com/wp-content/themes/lee2.0/js/clipboard.swf", "forLoadSwf", "120", "25", "9.0.0", null, flashvars, params),
            shareUrl = encodeURIComponent($(".share_record").attr("href")),
            share(),
            $(".record-success .record-info").hide(),
            $(".start_listen, .save_record").show(),
            $(".record-share").show(),
            $(".record-success .record-panel").show()
        } else $(".record-success .record-info").show(),
        $(".start_listen, .save_record").hide(),
        $(".upload_record").hide(),
        $(".record-share").hide();
        $(".record-success").show(),
        $(".record-state").text("点击开始录制，可以把你弹奏的曲子录制下来"),
        $(".start_record").show(),
        $(".finish_record, .cancel_record").hide(),
        $(".record-area").hide()
    }),
    $(".piano_function").on("click", ".start_listen",
    function() {
        var shareLink = $(".share_record").attr("href"),
        music = analysis(shareLink);
        listen(music)
    }),
    $(".piano_function").on("click", ".reset_record",
    function() {
        $(".record-area").show(),
        $(".record-success").hide()
    }),
    $(".piano_function").on("click", ".share_record",
    function() {}),
    $(".piano_function").on("click", ".upload_record",
    function() {
        var position = $(this).offset();
        return $(".share_record").data("copy") ? void savePopShow("已复制歌曲链接，正在跳转...", position) : (savePopShow("请先复制歌曲链接", position, "error"), !1)
    }),
    $(".album_choose").on("click", ".select-another",
    function() {
        status.play = !1,
        status.end = !1,
        $(".finish_record").hide(),
        $(".start_record").show(),
        $(".cancel_record").hide(),
        $(".record-state").text("点击开始录制，可以把你弹奏的曲子录制下来"),
        $(".piano_function").hide(),
        $(".record-success").hide()
    }),
    $(".album_choose").on("click", ".song a",
    function() {
        $(".piano_function").show()
    });
    var shareUrl = "";
    $(".piano_album").on("click", ".album_close",
    function() {
        status.play = !1,
        piano.url = "",
        status.end = !1,
        $(".finish_record").hide(),
        $(".start_record").show(),
        $(".record-state").text("点击开始录制，可以把你弹奏的曲子录制下来"),
        $(".piano_album").hide(),
        $(".song-list").show(),
        $(".song-opern").hide(),
        $(".record-success").hide(),
        $(".record-area").show()
    });
    var list = {
        "小星星": "11556650443322105544332055443320115566504433221",
        "茉莉花": "33568865056503356886505650555356066503235032101210321203568650523532121",
        "光阴的故事": "555653323138868650886865565135565320555653323138868650886865565358886789",
        "找朋友": "5656565058765530553355302432121",
        "上学歌": "12315066865066805630653531231",
        "一分钱": "5868503523503568565351032032123065356058865630523210",
        "征服": "58755650587563606665334044456322",
        "大约在冬季": "4440456880689665606542206542202455555658",
        "沧海一声笑": "998654065421012124456809986545",
        "童话": "543034303434321013560665224301356066765434321",
        "我爱北京天安门": "58543210112331345058543520432650231536876750999870675053687678905678905888",
        "同桌的你": "5555345706666465055557654044443210888856888809999876077777890507789878",
        "葫芦兄弟": "1130113066656513086656051207535",
        "祝你一路顺风": "3230321556503566666350366656685556312223212032303215565035666663503666566855531012223211018888986563012012320188898656805605689",
        "老男孩": "55550565403678750556112350545312055550565403678750556112350543211",
        "菊花台": "3323035323011235302212035365065535032353221",
        "回忆里的疯狂": "111543212330135666876545566687655321023434211023434311|羽毛公主|http://bbs.360safe.com/forum.php?mod=redirect&goto=findpost&ptid=1969236&pid=13529820",
        "小熊和洋娃娃": "1023455543444321351023455543444321316066545554344432135606654555434044321031|wangsongha1986lzq|http://bbs.360safe.com/forum.php?mod=redirect&goto=findpost&ptid=1969236&pid=13527397",
        "爱情转移": "187767605653235650565666656530123532101235321011108888686865",
        "红尘客栈": "1260126045065415012502405678097606676545067046756076536033677053567605350679765",
        "小红帽": "12345031806450301234532120302050123450318064503012345321203010108064501080645030123453212030101",
        "魔法城堡": "58856687650344345650568776598",
        "发如雪": "23302353023302365306122612061232023302353023305236530612261220123206161612206161613103336533052332356501236535",
        "爱情买卖": "36883680776530222623503775303688368000989000989987053566",
        "粉刷匠": "5353531024325053535310243210224432502432505353531024321",
        "小苹果": "66678998076767055567987065656",
        "小苹果[长版]": "60405020654502060405055086304043203450109860605405656580888880604050206545020604050550863040432034501098606054056501020242",
        "送别": "5358068505123021205358076850512301106880767806786065312053580768505123011",
        "Big big world": "123330342220231110123201233303422202310322",
        "命运交响曲": "334554321123322033455432112321102231234321210334554321123211",
        "爸爸去哪儿": "150150333253066678760533015015033337608645678"
    },
    map = {
        1 : "A",
        2 : "S",
        3 : "D",
        4 : "F",
        5 : "G",
        6 : "H",
        7 : "J",
        8 : "K",
        9 : "L"
    };
    $("#list-info").delegate(".song a", "click",
    function(e) {
        e.preventDefault(); {
            var title = $(this).attr("data-title");
            list[title]
        }
        renderSong(title),
        $("#song-list").hide(),
        $("#song-opern").show(),
        $(".record-area").show(),
        $(".record-success").hide()
    }),
    $("#song-opern").delegate(".select-another", "click",
    function(e) {
        e.preventDefault(),
        showSongList()
    }),
    $(".save_listen").click(function() {
        var shareLink = $(this).data("list"),
        music = analysis(shareLink);
        listen(music)
    }),
    $("#list-info").delegate(".save_song a", "click",
    function() {
        var copyCon = $(".share_record").attr("href"),
        flashvars = {
            content: encodeURIComponent(copyCon),
            uri: "http://www.xuanfengge.com/wp-content/themes/lee2.0/images/copy.png"
        },
        params = {
            wmode: "transparent",
            allowScriptAccess: "always"
        };
        swfobject.embedSWF("http://www.xuanfengge.com/wp-content/themes/lee2.0/js/clipboard.swf", "forLoadSwf", "120", "25", "9.0.0", null, flashvars, params)
    })
}),
function($) {
    $.fn.pianoSnsShare = function(options) {
        var defaults = ($(".share_record").attr("href"), {
            tsina: {
                url: encodeURIComponent(window.location.href),
                title: document.title,
                appkey: 3234732766,
                pic: "http://www.xuanfengge.com/wp-content/themes/lee2.0/images/piano.jpg"
            },
            renren: {
                resourceUrl: encodeURIComponent(window.location.href),
                srcUrl: window.location.href,
                title: document.title,
                appkey: 243319,
                pic: "http://www.xuanfengge.com/wp-content/themes/lee2.0/images/piano.jpg"
            },
            tqq: {
                url: encodeURIComponent(window.location.href),
                title: document.title,
                appkey: 801435972,
                pic: "http://www.xuanfengge.com/wp-content/themes/lee2.0/images/piano.jpg"
            },
            tqzone: {
                url: encodeURIComponent(window.location.href),
                title: document.title,
                appkey: 100566135,
                pic: "http://www.xuanfengge.com/wp-content/themes/lee2.0/images/piano.jpg"
            }
        }),
        settings = $.extend(!0, {},
        defaults, options),
        shareIconName = {
            tsina: "新浪微博",
            renren: "人人网",
            tqq: "腾讯微博",
            tqzone: "QQ空间"
        },
        shareUrl = {
            tsina: "http://service.weibo.com/share/share.php?url={url}&title={title}&appkey={appkey}&pic={pic}",
            renren: "http://widget.renren.com/dialog/share?resourceUrl={resourceUrl}&srcUrl={srcUrl}&title={title}&appkey={appkey}&pic={pic}",
            tqq: "http://share.v.t.qq.com/index.php?c=share&a=index&url={url}&title={title}&appkey={appkey}&pic={pic}",
            tqzone: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&pics={pic}&title={title}&summary=快带上你的浏览器来弹钢琴吧，欢乐体验"
        };
        return $(this).each(function() {
            function openWindow(str) {
                return function() {
                    window.open(formatmodel(shareUrl[str], settings[str]))
                }
            }
            function formatmodel(str, model) {
                for (var k in model) {
                    var re = new RegExp("{" + k + "}", "g");
                    str = str.replace(re, model[k])
                }
                return str
            }
            for (snsName in settings) {
                var text = encodeURIComponent(settings[snsName].title);
                settings[snsName].title = text
            }
            for (sns in shareUrl) $(".piano_share_" + sns).off().on("click", openWindow(sns)).attr("title", "分享到" + shareIconName[sns]).attr("href", "javascript:;")
        })
    }
} (jQuery);
var UserData = {
    userData: null,
    name: location.href,
    init: function() {
        if (!UserData.userData) try {
            UserData.userData = document.createElement("INPUT"),
            UserData.userData.type = "hidden",
            UserData.userData.style.display = "none",
            UserData.userData.addBehavior("#default#userData"),
            document.body.appendChild(UserData.userData);
            var expires = new Date;
            expires.setDate(expires.getDate() + 365),
            UserData.userData.expires = expires.toUTCString()
        } catch(e) {
            return ! 1
        }
        return ! 0
    },
    setItem: function(key, value) {
        UserData.init() && (UserData.userData.load(UserData.name), UserData.userData.setAttribute(key, value), UserData.userData.save(UserData.name))
    },
    getItem: function(key) {
        return UserData.init() ? (UserData.userData.load(UserData.name), UserData.userData.getAttribute(key)) : void 0
    },
    removeItem: function(key) {
        UserData.init() && (UserData.userData.load(UserData.name), UserData.userData.removeAttribute(key), UserData.userData.save(UserData.name))
    }
},
storage = getLocalStorage(),
LocalStorage = {
    setItem: function(key, value) {
        window.localStorage ? storage.setItem(key, value) : UserData.setItem(key, value)
    },
    getItem: function(key) {
        return window.localStorage ? storage.getItem(key) : UserData.getItem(key)
    },
    removeItem: function(key) {
        window.localStorage ? storage.removeItem(key) : UserData.removeItem(key)
    }
};
$(function() {
    function getDataText() {
        var key = getKey(),
        title = $(".save_info").val().trim(),
        link = $(".share_record").attr("href"),
        book = selectBook(link),
        data = {
            key: key,
            title: title,
            link: link,
            book: book
        },
        dataText = $.toJSON(data);
        return dataText
    }
    function insertData() {
        var indexKey = "music_" + getKey(),
        dataKey = LocalStorage.getItem(indexKey),
        musicData = getDataText(),
        position = $(".save_info").offset();
        null == dataKey || "" == dataKey ? (LocalStorage.setItem("musicKey", getKey() + 1), LocalStorage.setItem(indexKey, musicData), savePopShow("保存成功", position)) : savePopShow("ID重复，请联系博主", position, "error")
    }
    function selectBook(link) {
        var paramReg = /\/\?music=/,
        start = link.search(paramReg) + 8,
        end = link.length,
        params = link.substring(start, end),
        result = params.match(/\d{1}:/g).join("").replace(/:/g, "");
        return console.log(result),
        result
    }
    function getKey() {
        var musicKey = LocalStorage.getItem("musicKey");
        return musicKey ? parseInt(musicKey) : (LocalStorage.setItem("musicKey", "0"), musicKey = LocalStorage.getItem("musicKey"), parseInt(musicKey))
    }
    function dataRead() {
        for (var result = [], value = "", i = 0, len = storage.length; len > i; i++) {
            var key = storage.key(i),
            reg = /music_\d*/g;
            reg.test(key) && (value = LocalStorage.getItem(key), result.push(value))
        }
        return result
    }
    function isEmpty() {
        for (var i = 0,
        len = storage.length; len > i; i++) {
            var key = storage.key(i),
            reg = /music_\d*/g;
            if (reg.test(key)) return ! 1
        }
        return ! 0
    }
    function view(data) {
        for (var len = data.length,
        i = 0; len > i; i++) {
            var oData = $.parseJSON(data[i]),
            key = oData.key,
            title = oData.title,
            link = oData.link,
            book = oData.book;
            albumList[key] = {},
            albumList[key].title = title,
            albumList[key].link = link,
            albumList[key].book = book
        }
        return albumList
    }
    function renderList(list) {
        var tmp = "<ul>";
        list = list || [];
        for (var i in list) tmp += '<li class="save_song"><span class="split">•</span><a data-key="' + i + '">' + list[i].title + "</a></li>";
        tmp += '<li class="mysong"><span class="split">•</span><a href="http://www.xuanfengge.com/piano" target="_blank" data-title="' + i + '">我要提交曲谱>></a></li>',
        tmp += "</ul>",
        $("#list-info")[0].innerHTML = tmp
    }
    function renderSong(key) {
        var opern = $("#song-opern"),
        song = albumList[key],
        title = song.title,
        keys = song.book,
        from = $("#song-opern").find(".opern-from");
        if (from.hide(), opern.find(".title").html(title), keys.length) {
            var COUNT = 35,
            len = Math.ceil(keys.length / COUNT);

            $("#opern-info")[0].innerHTML = "";
            for (var i = 0; len > i; i++) {
                var l = COUNT * (i + 1),
                tmp1 = tmp2 = "";
                i == len - 1 && (l = keys.length);
                for (var j = i * COUNT; l > j; j++) {
                    var num = keys[j];
                    "0" == num ? (tmp1 += '<dd class="empty-pat"></dd>', tmp2 += '<dd class="empty-pat"></dd>') : (tmp1 += "8" == num || "9" == num ? '<dd class="high-pat">' + (num - 7) + "</dd>": "<dd>" + num + "</dd>", tmp2 += "<dd>" + map[num] + "</dd>")
                }
                $("#opern-info")[0].innerHTML += '<dl class="number"><dt>乐谱</dt>' + tmp1 + "</dl>",
                $("#opern-info")[0].innerHTML += '<dl class="letter"><dt>键盘弹奏</dt>' + tmp2 + "</dl>"
            }
        }
        $(".save_listen").data("list", song.link),
        $(".share_record").attr("href", song.link),
        $(".save_extra").show(),
        $("#opern-info").data("key", key)
    }
    function share() {
        var shareCourseTitle = $(".share_title").data("title"),
        sinaTitle = "分享节奏 「" + shareCourseTitle + "」 -轩枫阁（分享自@轩枫Y_me）",
        renrenTitle = "分享节奏 「" + shareCourseTitle + "」-轩枫阁（分享自@农航亮(356948827)）",
        tqqTitle = "分享节奏 「" + shareCourseTitle + "」-轩枫阁（分享自@轩枫阁）";
        tqzoneTitle = "分享节奏 「" + shareCourseTitle + "」-轩枫阁（分享自@♪紫轩枫、）";
        var picShare = "http://www.xuanfengge.com/wp-content/themes/lee2.0/images/piano.jpg";
        shareUrl = encodeURIComponent($(".share_record").attr("href")),
        $("body").pianoSnsShare({
            tsina: {
                url: shareUrl,
                title: sinaTitle,
                pic: picShare
            },
            renren: {
                srcUrl: shareUrl,
                title: renrenTitle,
                pic: picShare
            },
            tqq: {
                url: shareUrl,
                title: tqqTitle,
                pic: picShare
            },
            tqzone: {
                url: shareUrl,
                title: tqzoneTitle,
                pic: picShare
            }
        })
    }
    var albumList = {};
    $(".my_album").on("click",
    function() {
        saveList = view(dataRead());
        var empty = isEmpty();
        empty ? ($("#list-info").empty(), LocalStorage.setItem("musicKey", "0"), $(".song-list h3").text("还没有保存过任何曲子，请先去弹奏保存吧")) : (renderList(saveList), $(".song-list h3").text("请选择要弹奏的曲谱")),
        $(".piano_album").show(),
        $(".album_choose").show(),
        $(".piano_function").hide(),
        $(".song-list").show(),
        $(".song-opern").hide()
    }),
    $(".save_delete").click(function() {
        var key = "music_" + $("#opern-info").data("key"),
        dataKey = LocalStorage.getItem(key),
        position = $(".save_listen").offset();
        null == dataKey || "" == dataKey ? savePopShow("删除失败", position, "error") : (LocalStorage.removeItem(key), savePopShow("删除成功", position), albumList = {}),
        $(".my_album").click()
    }),
    $(".save_record").click(function() {
        var title_info = $(".album_choose:visible").find(".song-opern:visible").find(".title").text();
        "" != title_info && $(".save_info").val(title_info),
        $(".save_info, .save_record_btn").show()
    }),
    $(".save_record_btn").click(function() {
        var title = $(".save_info").val().trim();
        if ("" == title) {
            var position = $(".save_info").offset();
            savePopShow("内容为空！", position, "error")
        } else insertData(),
        $(".save_info, .save_record_btn").hide()
    }),
    $(".save_info").on("keydown",
    function(e) {
        e.stopPropagation()
    });
    var map = {
        1 : "A",
        2 : "S",
        3 : "D",
        4 : "F",
        5 : "G",
        6 : "H",
        7 : "J",
        8 : "K",
        9 : "L"
    },
    shareUrl = "";
    $("#list-info").delegate(".save_song a", "click",
    function(e) {
        e.preventDefault(); {
            var key = $(this).data("key");
            albumList[key]
        }
        renderSong(key),
        share(),
        $("#song-list").hide(),
        $("#song-opern").show(),
        $(".piano_function").show(),
        $(".record-area").show(),
        $(".record-success .record-panel").hide(),
        $(".record-share").show(),
        $(".record-success").show()
    })
});
var swfobject = function() {
    function f() {
        if (!J) {
            try {
                var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                Z.parentNode.removeChild(Z)
            } catch(aa) {
                return
            }
            J = !0;
            for (var X = U.length,
            Y = 0; X > Y; Y++) U[Y]()
        }
    }
    function K(X) {
        J ? X() : U[U.length] = X
    }
    function s(Y) {
        if (typeof O.addEventListener != D) O.addEventListener("load", Y, !1);
        else if (typeof j.addEventListener != D) j.addEventListener("load", Y, !1);
        else if (typeof O.attachEvent != D) i(O, "onload", Y);
        else if ("function" == typeof O.onload) {
            var X = O.onload;
            O.onload = function() {
                X(),
                Y()
            }
        } else O.onload = Y
    }
    function h() {
        T ? V() : H()
    }
    function V() {
        var X = j.getElementsByTagName("body")[0],
        aa = C(r);
        aa.setAttribute("type", q);
        var Z = X.appendChild(aa);
        if (Z) {
            var Y = 0; !
            function() {
                if (typeof Z.GetVariable != D) {
                    var ab = Z.GetVariable("$version");
                    ab && (ab = ab.split(" ")[1].split(","), M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)])
                } else if (10 > Y) return Y++,
                void setTimeout(arguments.callee, 10);
                X.removeChild(aa),
                Z = null,
                H()
            } ()
        } else H()
    }
    function H() {
        var ag = o.length;
        if (ag > 0) for (var af = 0; ag > af; af++) {
            var Y = o[af].id,
            ab = o[af].callbackFn,
            aa = {
                success: !1,
                id: Y
            };
            if (M.pv[0] > 0) {
                var ae = c(Y);
                if (ae) if (!F(o[af].swfVersion) || M.wk && M.wk < 312) if (o[af].expressInstall && A()) {
                    var ai = {};
                    ai.data = o[af].expressInstall,
                    ai.width = ae.getAttribute("width") || "0",
                    ai.height = ae.getAttribute("height") || "0",
                    ae.getAttribute("class") && (ai.styleclass = ae.getAttribute("class")),
                    ae.getAttribute("align") && (ai.align = ae.getAttribute("align"));
                    for (var ah = {},
                    X = ae.getElementsByTagName("param"), ac = X.length, ad = 0; ac > ad; ad++)"movie" != X[ad].getAttribute("name").toLowerCase() && (ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value"));
                    P(ai, ah, Y, ab)
                } else p(ae),
                ab && ab(aa);
                else w(Y, !0),
                ab && (aa.success = !0, aa.ref = z(Y), ab(aa))
            } else if (w(Y, !0), ab) {
                var Z = z(Y);
                Z && typeof Z.SetVariable != D && (aa.success = !0, aa.ref = Z),
                ab(aa)
            }
        }
    }
    function z(aa) {
        var X = null,
        Y = c(aa);
        if (Y && "OBJECT" == Y.nodeName) if (typeof Y.SetVariable != D) X = Y;
        else {
            var Z = Y.getElementsByTagName(r)[0];
            Z && (X = Z)
        }
        return X
    }
    function A() {
        return ! a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
    }
    function P(aa, ab, X, Z) {
        a = !0,
        E = Z || null,
        B = {
            success: !1,
            id: X
        };
        var ae = c(X);
        if (ae) {
            "OBJECT" == ae.nodeName ? (l = g(ae), Q = null) : (l = ae, Q = X),
            aa.id = R,
            (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) && (aa.width = "310"),
            (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) && (aa.height = "137"),
            j.title = j.title.slice(0, 47) + " - Flash Player Installation";
            var ad = M.ie && M.win ? "ActiveX": "PlugIn",
            ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
            if (typeof ab.flashvars != D ? ab.flashvars += "&" + ac: ab.flashvars = ac, M.ie && M.win && 4 != ae.readyState) {
                var Y = C("div");
                X += "SWFObjectNew",
                Y.setAttribute("id", X),
                ae.parentNode.insertBefore(Y, ae),
                ae.style.display = "none",
                function() {
                    4 == ae.readyState ? ae.parentNode.removeChild(ae) : setTimeout(arguments.callee, 10)
                } ()
            }
            u(aa, ab, X)
        }
    }
    function p(Y) {
        if (M.ie && M.win && 4 != Y.readyState) {
            var X = C("div");
            Y.parentNode.insertBefore(X, Y),
            X.parentNode.replaceChild(g(Y), X),
            Y.style.display = "none",
            function() {
                4 == Y.readyState ? Y.parentNode.removeChild(Y) : setTimeout(arguments.callee, 10)
            } ()
        } else Y.parentNode.replaceChild(g(Y), Y)
    }
    function g(ab) {
        var aa = C("div");
        if (M.win && M.ie) aa.innerHTML = ab.innerHTML;
        else {
            var Y = ab.getElementsByTagName(r)[0];
            if (Y) {
                var ad = Y.childNodes;
                if (ad) for (var X = ad.length,
                Z = 0; X > Z; Z++) 1 == ad[Z].nodeType && "PARAM" == ad[Z].nodeName || 8 == ad[Z].nodeType || aa.appendChild(ad[Z].cloneNode(!0))
            }
        }
        return aa
    }
    function u(ai, ag, Y) {
        var X, aa = c(Y);
        if (M.wk && M.wk < 312) return X;
        if (aa) if (typeof ai.id == D && (ai.id = Y), M.ie && M.win) {
            var ah = "";
            for (var ae in ai) ai[ae] != Object.prototype[ae] && ("data" == ae.toLowerCase() ? ag.movie = ai[ae] : "styleclass" == ae.toLowerCase() ? ah += ' class="' + ai[ae] + '"': "classid" != ae.toLowerCase() && (ah += " " + ae + '="' + ai[ae] + '"'));
            var af = "";
            for (var ad in ag) ag[ad] != Object.prototype[ad] && (af += '<param name="' + ad + '" value="' + ag[ad] + '" />');
            aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>",
            N[N.length] = ai.id,
            X = c(ai.id)
        } else {
            var Z = C(r);
            Z.setAttribute("type", q);
            for (var ac in ai) ai[ac] != Object.prototype[ac] && ("styleclass" == ac.toLowerCase() ? Z.setAttribute("class", ai[ac]) : "classid" != ac.toLowerCase() && Z.setAttribute(ac, ai[ac]));
            for (var ab in ag) ag[ab] != Object.prototype[ab] && "movie" != ab.toLowerCase() && e(Z, ab, ag[ab]);
            aa.parentNode.replaceChild(Z, aa),
            X = Z
        }
        return X
    }
    function e(Z, X, Y) {
        var aa = C("param");
        aa.setAttribute("name", X),
        aa.setAttribute("value", Y),
        Z.appendChild(aa)
    }
    function y(Y) {
        var X = c(Y);
        X && "OBJECT" == X.nodeName && (M.ie && M.win ? (X.style.display = "none",
        function() {
            4 == X.readyState ? b(Y) : setTimeout(arguments.callee, 10)
        } ()) : X.parentNode.removeChild(X))
    }
    function b(Z) {
        var Y = c(Z);
        if (Y) {
            for (var X in Y)"function" == typeof Y[X] && (Y[X] = null);
            Y.parentNode.removeChild(Y)
        }
    }
    function c(Z) {
        var X = null;
        try {
            X = j.getElementById(Z)
        } catch(Y) {}
        return X
    }
    function C(X) {
        return j.createElement(X)
    }
    function i(Z, X, Y) {
        Z.attachEvent(X, Y),
        I[I.length] = [Z, X, Y]
    }
    function F(Z) {
        var Y = M.pv,
        X = Z.split(".");
        return X[0] = parseInt(X[0], 10),
        X[1] = parseInt(X[1], 10) || 0,
        X[2] = parseInt(X[2], 10) || 0,
        Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? !0 : !1
    }
    function v(ac, Y, ad, ab) {
        if (!M.ie || !M.mac) {
            var aa = j.getElementsByTagName("head")[0];
            if (aa) {
                var X = ad && "string" == typeof ad ? ad: "screen";
                if (ab && (n = null, G = null), !n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css"),
                    Z.setAttribute("media", X),
                    n = aa.appendChild(Z),
                    M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0 && (n = j.styleSheets[j.styleSheets.length - 1]),
                    G = X
                }
                M.ie && M.win ? n && typeof n.addRule == r && n.addRule(ac, Y) : n && typeof j.createTextNode != D && n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
            }
        }
    }
    function w(Z, X) {
        if (m) {
            var Y = X ? "visible": "hidden";
            J && c(Z) ? c(Z).style.visibility = Y: v("#" + Z, "visibility:" + Y)
        }
    }
    function L(Y) {
        var Z = /[\\\"<>\.;]/,
        X = null != Z.exec(Y);
        return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
    } {
        var l, Q, E, B, n, G, D = "undefined",
        r = "object",
        S = "Shockwave Flash",
        W = "ShockwaveFlash.ShockwaveFlash",
        q = "application/x-shockwave-flash",
        R = "SWFObjectExprInst",
        x = "onreadystatechange",
        O = window,
        j = document,
        t = navigator,
        T = !1,
        U = [h],
        o = [],
        N = [],
        I = [],
        J = !1,
        a = !1,
        m = !0,
        M = function() {
            var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
            ah = t.userAgent.toLowerCase(),
            Y = t.platform.toLowerCase(),
            ae = /win/.test(Y ? Y: ah),
            ac = /mac/.test(Y ? Y: ah),
            af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
            X = !1,
            ag = [0, 0, 0],
            ab = null;
            if (typeof t.plugins != D && typeof t.plugins[S] == r) ab = t.plugins[S].description,
            !ab || typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin || (T = !0, X = !1, ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10), ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10), ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof O.ActiveXObject != D) try {
                var ad = new ActiveXObject(W);
                ad && (ab = ad.GetVariable("$version"), ab && (X = !0, ab = ab.split(" ")[1].split(","), ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]))
            } catch(Z) {}
            return {
                w3: aa,
                pv: ag,
                wk: af,
                ie: X,
                win: ae,
                mac: ac
            }
        } (); !
        function() {
            M.w3 && ((typeof j.readyState != D && "complete" == j.readyState || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) && f(), J || (typeof j.addEventListener != D && j.addEventListener("DOMContentLoaded", f, !1), M.ie && M.win && (j.attachEvent(x,
            function() {
                "complete" == j.readyState && (j.detachEvent(x, arguments.callee), f())
            }), O == top && !
            function() {
                if (!J) {
                    try {
                        j.documentElement.doScroll("left")
                    } catch(X) {
                        return void setTimeout(arguments.callee, 0)
                    }
                    f()
                }
            } ()), M.wk && !
            function() {
                return J ? void 0 : /loaded|complete/.test(j.readyState) ? void f() : void setTimeout(arguments.callee, 0)
            } (), s(f)))
        } (),
        function() {
            M.ie && M.win && window.attachEvent("onunload",
            function() {
                for (var ac = I.length,
                ab = 0; ac > ab; ab++) I[ab][0].detachEvent(I[ab][1], I[ab][2]);
                for (var Z = N.length,
                aa = 0; Z > aa; aa++) y(N[aa]);
                for (var Y in M) M[Y] = null;
                M = null;
                for (var X in swfobject) swfobject[X] = null;
                swfobject = null
            })
        } ()
    }
    return {
        registerObject: function(ab, X, aa, Z) {
            if (M.w3 && ab && X) {
                var Y = {};
                Y.id = ab,
                Y.swfVersion = X,
                Y.expressInstall = aa,
                Y.callbackFn = Z,
                o[o.length] = Y,
                w(ab, !1)
            } else Z && Z({
                success: !1,
                id: ab
            })
        },
        getObjectById: function(X) {
            return M.w3 ? z(X) : void 0
        },
        embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
            var X = {
                success: !1,
                id: ah
            };
            M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y ? (w(ah, !1), K(function() {
                ae += "",
                ag += "";
                var aj = {};
                if (af && typeof af === r) for (var al in af) aj[al] = af[al];
                aj.data = ab,
                aj.width = ae,
                aj.height = ag;
                var am = {};
                if (ad && typeof ad === r) for (var ak in ad) am[ak] = ad[ak];
                if (Z && typeof Z === r) for (var ai in Z) typeof am.flashvars != D ? am.flashvars += "&" + ai + "=" + Z[ai] : am.flashvars = ai + "=" + Z[ai];
                if (F(Y)) {
                    var an = u(aj, am, ah);
                    aj.id == ah && w(ah, !0),
                    X.success = !0,
                    X.ref = an
                } else {
                    if (aa && A()) return aj.data = aa,
                    void P(aj, am, ah, ac);
                    w(ah, !0)
                }
                ac && ac(X)
            })) : ac && ac(X)
        },
        switchOffAutoHideShow: function() {
            m = !1
        },
        ua: M,
        getFlashPlayerVersion: function() {
            return {
                major: M.pv[0],
                minor: M.pv[1],
                release: M.pv[2]
            }
        },
        hasFlashPlayerVersion: F,
        createSWF: function(Z, Y, X) {
            return M.w3 ? u(Z, Y, X) : void 0
        },
        showExpressInstall: function(Z, aa, X, Y) {
            M.w3 && A() && P(Z, aa, X, Y)
        },
        removeSWF: function(X) {
            M.w3 && y(X)
        },
        createCSS: function(aa, Z, Y, X) {
            M.w3 && v(aa, Z, Y, X)
        },
        addDomLoadEvent: K,
        addLoadEvent: s,
        getQueryParamValue: function(aa) {
            var Z = j.location.search || j.location.hash;
            if (Z) {
                if (/\?/.test(Z) && (Z = Z.split("?")[1]), null == aa) return L(Z);
                for (var Y = Z.split("&"), X = 0; X < Y.length; X++) if (Y[X].substring(0, Y[X].indexOf("=")) == aa) return L(Y[X].substring(Y[X].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function() {
            if (a) {
                var X = c(R);
                X && l && (X.parentNode.replaceChild(l, X), Q && (w(Q, !0), M.ie && M.win && (l.style.display = "block")), E && E(B)),
                a = !1
            }
        }
    }
} (),
UserData = {
    userData: null,
    name: location.href,
    init: function() {
        if (!UserData.userData) try {
            UserData.userData = document.createElement("INPUT"),
            UserData.userData.type = "hidden",
            UserData.userData.style.display = "none",
            UserData.userData.addBehavior("#default#userData"),
            document.body.appendChild(UserData.userData);
            var expires = new Date;
            expires.setDate(expires.getDate() + 365),
            UserData.userData.expires = expires.toUTCString()
        } catch(e) {
            return ! 1
        }
        return ! 0
    },
    setItem: function(key, value) {
        UserData.init() && (UserData.userData.load(UserData.name), UserData.userData.setAttribute(key, value), UserData.userData.save(UserData.name))
    },
    getItem: function(key) {
        return UserData.init() ? (UserData.userData.load(UserData.name), UserData.userData.getAttribute(key)) : void 0
    },
    removeItem: function(key) {
        UserData.init() && (UserData.userData.load(UserData.name), UserData.userData.removeAttribute(key), UserData.userData.save(UserData.name))
    }
},
storage = getLocalStorage(),
LocalStorage = {
    setItem: function(key, value) {
        window.localStorage ? storage.setItem(key, value) : UserData.setItem(key, value)
    },
    getItem: function(key) {
        return window.localStorage ? storage.getItem(key) : UserData.getItem(key)
    },
    removeItem: function(key) {
        window.localStorage ? storage.removeItem(key) : UserData.removeItem(key)
    }
};
$(function() {
    function getKey() {
        var xuanfengKey = LocalStorage.getItem("xuanfengKey");
        return xuanfengKey ? parseInt(xuanfengKey) : (LocalStorage.setItem("xuanfengKey", "0"), xuanfengKey = LocalStorage.getItem("xuanfengKey"), parseInt(xuanfengKey))
    }
    function dataRead() {
        for (var result = "",
        value = "",
        i = 0,
        len = storage.length; len > i; i++) {
            var key = storage.key(i),
            reg = /book_\d*/g;
            reg.test(key) && (value = LocalStorage.getItem(key), result += value)
        }
        return result
    }
    function view(data) {
        {
            var oData = $.parseJSON(data);
            oData.title,
            oData.url,
            oData.post_time,
            oData.save_time,
            oData.meta,
            oData.imgUrl,
            oData.comment,
            oData.view
        }
    }
    function clear() {
        for (var key, reg = /book_\d+/,
        i = 0,
        len = storage.length; len > i; i++) key = storage.key(i),
        reg.test(key) ? (console.log("succe: " + key), LocalStorage.removeItem(key), i -= 1, len -= 1) : console.log("error: " + key);
        LocalStorage.setItem("xuanfengKey", "0")
    }
    function errorHandle(tip) {
        alert(tip)
    } {
        var title = $(".title").html(),
        url = $(".url").html(),
        post_time = $(".post_time").html(),
        save_time = $(".save_time").html(),
        meta = $(".meta").html(),
        imgUrl = $(".imgUrl").html(),
        comment = $(".comment").html(),
        view = $(".view").html(),
        data = {
            title: title,
            url: url,
            post_time: post_time,
            save_time: save_time,
            meta: meta,
            imgUrl: imgUrl,
            comment: comment,
            view: view
        },
        dataText = $.toJSON(data);
        $.parseJSON(dataText)
    }
    $("#data").html(dataRead()),
    $("#safghve").click(function() {
        var indexKey = "book_" + getKey(),
        dataKey = LocalStorage.getItem(indexKey);
        null == dataKey || "" == dataKey ? (LocalStorage.setItem("xuanfengKey", getKey() + 1), LocalStorage.setItem(indexKey, dataText)) : errorHandle("ID重复")
    }),
    $("#clfgjhfgear").click(function() {
        clear()
    })
}),
function($) {
    $.fn.xuanfengSnsShare = function(options) {
        var defaults = {
            tsina: {
                url: encodeURIComponent(window.location.href),
                title: document.title,
                appkey: 3234732766,
                pic: "http://www.xuanfengge.com/wp-content/themes/lee/images/logo.png"
            },
            renren: {
                resourceUrl: encodeURIComponent(window.location.href),
                srcUrl: encodeURIComponent(window.location.href),
                title: document.title,
                appkey: 243319,
                pic: "http://www.xuanfengge.com/wp-content/themes/lee/images/logo.png"
            },
            tqq: {
                url: encodeURIComponent(window.location.href),
                title: document.title,
                appkey: 801435972,
                pic: "http://www.xuanfengge.com/wp-content/themes/lee/images/logo.png"
            },
            tqzone: {
                url: encodeURIComponent(window.location.href),
                title: document.title,
                appkey: 100566135,
                pic: "http://www.xuanfengge.com/wp-content/themes/lee/images/logo.png"
            }
        },
        settings = $.extend(!0, {},
        defaults, options),
        shareIconName = {
            tsina: "新浪微博",
            renren: "人人网",
            tqq: "腾讯微博",
            tqzone: "QQ空间"
        },
        shareUrl = {
            tsina: "http://service.weibo.com/share/share.php?url={url}&title={title}&appkey={appkey}&pic={pic}",
            renren: "http://widget.renren.com/dialog/share?resourceUrl={resourceUrl}&srcUrl={srcUrl}&title={title}&appkey={appkey}&pic={pic}",
            tqq: "http://share.v.t.qq.com/index.php?c=share&a=index&url={url}&title={title}&appkey={appkey}&pic={pic}",
            tqzone: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&pics={pic}&title={title}&summary=轩枫阁"
        };
        return $(this).each(function() {
            function openWindow(str) {
                return function() {
                    window.open(formatmodel(shareUrl[str], settings[str]))
                }
            }
            function formatmodel(str, model) {
                for (var k in model) {
                    var re = new RegExp("{" + k + "}", "g");
                    str = str.replace(re, model[k])
                }
                return str
            }
            for (snsName in settings) {
                var text = encodeURIComponent(settings[snsName].title);
                settings[snsName].title = text
            }
            for (sns in shareUrl) $(".share_" + sns).off().on("click", openWindow(sns)).attr("title", "分享到" + shareIconName[sns]).attr("href", "javascript:;")
        })
    }
} (jQuery);