function hostReachable() {
    var n = new (window.ActiveXObject || XMLHttpRequest)("Microsoft.XMLHTTP");
    n.open("HEAD", "//" + window.location.hostname + "/?rand=" + Math.floor((1 + Math.random()) * 65536), !1);
    try {
        return n.send(),
        n.status >= 200 && (n.status < 300 || n.status === 304)
    } catch (t) {
        return !1
    }
}
(function() {
    function v(n, t) {
        n.prototype = ei(t.prototype);
        n.prototype.constructor = n;
        n.parent = t.prototype
    }
    function ei(n) {
        function t() {}
        return t.prototype = n,
        new t
    }
    function kt(n, t, i) {
        return "millisecond" === i ? n.setMilliseconds(n.getMilliseconds() + 1 * t) : "second" === i ? n.setSeconds(n.getSeconds() + 1 * t) : "minute" === i ? n.setMinutes(n.getMinutes() + 1 * t) : "hour" === i ? n.setHours(n.getHours() + 1 * t) : "day" === i ? n.setDate(n.getDate() + 1 * t) : "week" === i ? n.setDate(n.getDate() + 7 * t) : "month" === i ? n.setMonth(n.getMonth() + 1 * t) : "year" === i && n.setFullYear(n.getFullYear() + 1 * t),
        n
    }
    function g(n, t) {
        return r[t + "Duration"] * n
    }
    function s(n, t) {
        var i = !1;
        for (0 > n && (i = !0,
        n *= -1),
        n = "" + n,
        t = t ? t : 1; n.length < t; )
            n = "0" + n;
        return i ? "-" + n : n
    }
    function ct(n) {
        if (!n)
            return n;
        n = n.replace(/^\s\s*/, "");
        for (var t = n.length; /\s/.test(n.charAt(--t)); )
            ;
        return n.slice(0, t + 1)
    }
    function oi(n) {
        n.roundRect = function(n, t, i, r, u, f, e, o) {
            e && (this.fillStyle = e);
            o && (this.strokeStyle = o);
            "undefined" == typeof u && (u = 5);
            this.lineWidth = f;
            this.beginPath();
            this.moveTo(n + u, t);
            this.lineTo(n + i - u, t);
            this.quadraticCurveTo(n + i, t, n + i, t + u);
            this.lineTo(n + i, t + r - u);
            this.quadraticCurveTo(n + i, t + r, n + i - u, t + r);
            this.lineTo(n + u, t + r);
            this.quadraticCurveTo(n, t + r, n, t + r - u);
            this.lineTo(n, t + u);
            this.quadraticCurveTo(n, t, n + u, t);
            this.closePath();
            e && this.fill();
            o && 0 < f && this.stroke()
        }
    }
    function dt(n, t) {
        return n - t
    }
    function si(n, t) {
        return n.x - t.x
    }
    function f(n) {
        var t = ((n & 16711680) >> 16).toString(16)
          , i = ((n & 65280) >> 8).toString(16);
        return n = ((n & 255) >> 0).toString(16),
        t = 2 > t.length ? "0" + t : t,
        i = 2 > i.length ? "0" + i : i,
        n = 2 > n.length ? "0" + n : n,
        "#" + t + i + n
    }
    function rt(n, t, i) {
        var u, r, f, e;
        if (i = i || "normal",
        u = n + "_" + t + "_" + i,
        r = ri[u],
        isNaN(r)) {
            try {
                n = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" + n + "; font-size:" + t + "px; font-weight:" + i + ";";
                p || (f = document.body,
                p = document.createElement("span"),
                p.innerHTML = "",
                e = document.createTextNode("Mpgyi"),
                p.appendChild(e),
                f.appendChild(p));
                p.style.display = "";
                p.setAttribute("style", n);
                r = Math.round(p.offsetHeight);
                p.style.display = "none"
            } catch (o) {
                r = Math.ceil(1.1 * t)
            }
            r = Math.max(r, t);
            ri[u] = r
        }
        return r
    }
    function l(n, t, i, r) {
        if (n.addEventListener)
            n.addEventListener(t, i, r || !1);
        else if (n.attachEvent)
            n.attachEvent("on" + t, function(t) {
                t = t || window.event;
                t.preventDefault = t.preventDefault || function() {
                    t.returnValue = !1
                }
                ;
                t.stopPropagation = t.stopPropagation || function() {
                    t.cancelBubble = !0
                }
                ;
                i.call(n, t)
            });
        else
            return !1
    }
    function gt(n, t, i) {
        for (n *= w,
        t *= w,
        n = i.getImageData(n, t, 2, 2).data,
        t = !0,
        i = 0; 4 > i; i++)
            if (n[i] !== n[i + 4] | n[i] !== n[i + 8] | n[i] !== n[i + 12]) {
                t = !1;
                break
            }
        return t ? n[0] << 16 | n[1] << 8 | n[2] : 0
    }
    function ni(t, i, r) {
        var u, f, e;
        return u = t ? t + "FontStyle" : "fontStyle",
        f = t ? t + "FontWeight" : "fontWeight",
        e = t ? t + "FontSize" : "fontSize",
        t = t ? t + "FontFamily" : "fontFamily",
        u = "" + (i[u] ? i[u] + " " : r && r[u] ? r[u] + " " : ""),
        u += i[f] ? i[f] + " " : r && r[f] ? r[f] + " " : "",
        u += i[e] ? i[e] + "px " : r && r[e] ? r[e] + "px " : "",
        i = i[t] ? i[t] + "" : r && r[t] ? r[t] + "" : "",
        !n && i && (i = i.split(",")[0],
        "'" !== i[0] && '"' !== i[0] && (i = "'" + i + "'")),
        u + i
    }
    function b(n, t, i) {
        return n in t ? t[n] : i[n]
    }
    function ut(t, i, r) {
        if (n && fi) {
            var u = t.getContext("2d");
            st = u.webkitBackingStorePixelRatio || u.mozBackingStorePixelRatio || u.msBackingStorePixelRatio || u.oBackingStorePixelRatio || u.backingStorePixelRatio || 1;
            w = wt / st;
            t.width = i * w;
            t.height = r * w;
            wt !== st && (t.style.width = i + "px",
            t.style.height = r + "px",
            u.scale(w, w))
        } else
            t.width = i,
            t.height = r
    }
    function ft(t, i) {
        var r = document.createElement("canvas");
        return r.setAttribute("class", "canvasjs-chart-canvas"),
        ut(r, t, i),
        n || "undefined" == typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(r),
        r
    }
    function h(n, t, i) {
        this._defaultsKey = n;
        var r = {};
        i && d[i] && d[i][n] && (r = d[i][n]);
        this._options = t ? t : {};
        this.setOptions(this._options, r)
    }
    function t(i, r) {
        var u;
        if (r = r || {},
        t.parent.constructor.call(this, "Chart", r, r.theme ? r.theme : "theme1"),
        u = this,
        this._containerId = i,
        this._objectsInitialized = !1,
        this.overlaidCanvasCtx = this.ctx = null,
        this._indexLabels = [],
        this._panTimerId = 0,
        this._lastTouchEventType = "",
        this._lastTouchData = null,
        this.panEnabled = !1,
        this._defaultCursor = "default",
        this.plotArea = {
            canvas: null,
            ctx: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            width: 0,
            height: 0
        },
        this._dataInRenderedOrder = [],
        this._container = document.getElementById(this._containerId)) {
            this._container.innerHTML = "";
            var f = 0
              , e = 0
              , f = this._options.width ? this.width : 0 < this._container.clientWidth ? this._container.clientWidth : this.width
              , e = this._options.height ? this.height : 0 < this._container.clientHeight ? this._container.clientHeight : this.height;
            if (this.width = f,
            this.height = e,
            this._selectedColorSet = "undefined" != typeof k[this.colorSet] ? k[this.colorSet] : k.colorSet1,
            this._canvasJSContainer = document.createElement("div"),
            this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"),
            this._canvasJSContainer.style.position = "relative",
            this._canvasJSContainer.style.textAlign = "left",
            this._canvasJSContainer.style.cursor = "auto",
            n || (this._canvasJSContainer.style.height = "0px"),
            this._container.appendChild(this._canvasJSContainer),
            this.canvas = ft(f, e),
            this.canvas.style.position = "absolute",
            this.canvas.getContext) {
                try {
                    this.canvas.style.background = this.backgroundColor
                } catch (o) {}
                this._canvasJSContainer.appendChild(this.canvas);
                this.ctx = this.canvas.getContext("2d");
                this.ctx.textBaseline = "top";
                oi(this.ctx);
                n ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ft(f, e),
                this.plotArea.canvas.style.position = "absolute",
                this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"),
                this._canvasJSContainer.appendChild(this.plotArea.canvas),
                this.plotArea.ctx = this.plotArea.canvas.getContext("2d"));
                this.overlaidCanvas = ft(f, e);
                this.overlaidCanvas.style.position = "absolute";
                this._canvasJSContainer.appendChild(this.overlaidCanvas);
                this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d");
                this.overlaidCanvasCtx.textBaseline = "top";
                this._eventManager = new it(this);
                l(window, "resize", function() {
                    u._updateSize() && u.render()
                });
                this._toolBar = document.createElement("div");
                this._toolBar.setAttribute("class", "canvasjs-chart-toolbar");
                this._toolBar.style.position = "absolute";
                this._toolBar.style.top = "0px";
                this._toolBar.style.right = "0px";
                this._canvasJSContainer.appendChild(this._toolBar);
                this._toolBar.style.display = "none";
                this.bounds = {
                    x1: 0,
                    y1: 0,
                    x2: this.width,
                    y2: this.height
                };
                l(this.overlaidCanvas, "click", function(n) {
                    u._mouseEventHandler(n)
                });
                l(this.overlaidCanvas, "mousemove", function(n) {
                    u._mouseEventHandler(n)
                });
                l(this.overlaidCanvas, "mouseup", function(n) {
                    u._mouseEventHandler(n)
                });
                l(this.overlaidCanvas, "mousedown", function(n) {
                    u._mouseEventHandler(n)
                });
                l(this.overlaidCanvas, "mouseout", function(n) {
                    u._mouseEventHandler(n)
                });
                l(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(n) {
                    u._touchEventHandler(n)
                });
                l(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(n) {
                    u._touchEventHandler(n)
                });
                l(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(n) {
                    u._touchEventHandler(n)
                });
                l(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(n) {
                    u._touchEventHandler(n)
                });
                this._creditLink || (this._creditLink = document.createElement("a"),
                this._creditLink.setAttribute("class", "canvasjs-chart-credit"),
                this._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:3px;top:" + (this.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),
                this._creditLink.setAttribute("tabIndex", -1),
                this._creditLink.setAttribute("target", "_blank"));
                this._toolTip = new a(this,this._options.toolTip,this.theme);
                this.layoutManager = new nt(this);
                this.axisY2 = this.axisY = this.axisX = this.data = null;
                this.renderCount = 0;
                this.sessionVariables = {
                    axisX: {
                        internalMinimum: null,
                        internalMaximum: null
                    },
                    axisY: {
                        internalMinimum: null,
                        internalMaximum: null
                    },
                    axisY2: {
                        internalMinimum: null,
                        internalMaximum: null
                    }
                }
            }
        } else
            window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found')
    }
    function ti(n, t) {
        for (var f, e, i, r = [], u = 0; u < n.length; u++)
            0 == u ? r.push(n[0]) : (i = u - 1,
            f = 0 === i ? 0 : i - 1,
            e = i === n.length - 1 ? i : i + 1,
            r[r.length] = {
                x: n[i].x + (n[e].x - n[f].x) / t / 3,
                y: n[i].y + (n[e].y - n[f].y) / t / 3
            },
            i = u,
            f = 0 === i ? 0 : i - 1,
            e = i === n.length - 1 ? i : i + 1,
            r[r.length] = {
                x: n[i].x - (n[e].x - n[f].x) / t / 3,
                y: n[i].y - (n[e].y - n[f].y) / t / 3
            },
            r[r.length] = n[u]);
        return r
    }
    function nt(n) {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = 0;
        this.chart = n
    }
    function e(n, t) {
        e.parent.constructor.call(this, "TextBlock", t);
        this.ctx = n;
        this._isDirty = !0;
        this._wrappedText = null;
        this._lineHeight = rt(this.fontFamily, this.fontSize, this.fontWeight)
    }
    function tt(n, t) {
        tt.parent.constructor.call(this, "Title", t, n.theme);
        this.chart = n;
        this.canvas = n.canvas;
        this.ctx = this.chart.ctx;
        "undefined" == typeof this._options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }
    function et(n, t, i) {
        et.parent.constructor.call(this, "Legend", t, i);
        this.chart = n;
        this.canvas = n.canvas;
        this.ctx = this.chart.ctx;
        this.ghostCtx = this.chart._eventManager.ghostCtx;
        this.items = [];
        this.height = this.width = 0;
        this.orientation = null;
        this.horizontalSpacing = 10;
        this.dataSeries = [];
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        };
        "undefined" == typeof this._options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.lineHeight = rt(this.fontFamily, this.fontSize, this.fontWeight)
    }
    function lt(n, t) {
        lt.parent.constructor.call(this, t);
        this.chart = n;
        this.canvas = n.canvas;
        this.ctx = this.chart.ctx
    }
    function y(n, t, i, r, u) {
        y.parent.constructor.call(this, "DataSeries", t, i);
        this.chart = n;
        this.canvas = n.canvas;
        this._ctx = n.canvas.ctx;
        this.index = r;
        this.maxWidthInX = this.noDataPointsInPlotArea = 0;
        this.id = u;
        this.chart._eventManager.objectMap[u] = {
            id: u,
            objectType: "dataSeries",
            dataSeriesIndex: r
        };
        this.dataPointIds = [];
        this.axisY = this.axisX = null;
        this.axisPlacement = this.getDefaultAxisPlacement();
        "undefined" == typeof this._options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
    }
    function u(n, t, i, r) {
        if (u.parent.constructor.call(this, "Axis", t, n.theme),
        this.chart = n,
        this.canvas = n.canvas,
        this.ctx = n.ctx,
        this.intervalStartPosition = this.maxHeight = this.maxWidth = 0,
        this.labels = [],
        this._labels = null,
        this.dataInfo = {
            min: Infinity,
            max: -Infinity,
            viewPortMin: Infinity,
            viewPortMax: -Infinity,
            minDiff: Infinity
        },
        "axisX" === i ? (this.sessionVariables = this.chart.sessionVariables[i],
        this._options.interval || (this.intervalType = null)) : this.sessionVariables = "left" === r || "top" === r ? this.chart.sessionVariables.axisY : this.chart.sessionVariables.axisY2,
        "undefined" == typeof this._options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize)),
        "undefined" == typeof this._options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize)),
        this.type = i,
        "axisX" !== i || t && "undefined" != typeof t.gridThickness || (this.gridThickness = 0),
        this._position = r,
        this.lineCoordinates = {
            x1: null,
            y1: null,
            x2: null,
            y2: null,
            width: null
        },
        this.labelAngle = (this.labelAngle % 360 + 360) % 360,
        90 < this.labelAngle && 270 >= this.labelAngle ? this.labelAngle -= 180 : 180 < this.labelAngle && 270 >= this.labelAngle ? this.labelAngle -= 180 : 270 < this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360),
        this._options.stripLines && 0 < this._options.stripLines.length)
            for (this.stripLines = [],
            t = 0; t < this._options.stripLines.length; t++)
                this.stripLines.push(new at(this.chart,this._options.stripLines[t],n.theme,++this.chart._eventManager.lastObjectId));
        this._absoluteMaximum = this._absoluteMinimum = this._titleTextBlock = null;
        this.hasOptionChanged("minimum") && (this.sessionVariables.internalMinimum = this.minimum);
        this.hasOptionChanged("maximum") && (this.sessionVariables.internalMaximum = this.maximum);
        this.trackChanges("minimum");
        this.trackChanges("maximum")
    }
    function at(n, t, i, r) {
        at.parent.constructor.call(this, "StripLine", t, i);
        this._thicknessType = "pixel";
        this.id = r;
        null !== this.startValue && null !== this.endValue && (this.value = ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2,
        this.thickness = Math.max(this.endValue - this.startValue),
        this._thicknessType = "value")
    }
    function a(n, t, i) {
        a.parent.constructor.call(this, "ToolTip", t, i);
        this.chart = n;
        this.canvas = n.canvas;
        this.ctx = this.chart.ctx;
        this.currentDataPointIndex = this.currentSeriesIndex = -1;
        this._timerId = 0;
        this._prevY = this._prevX = NaN;
        this._initialize()
    }
    function it(n) {
        this.chart = n;
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.ghostCanvas = ft(this.chart.width, this.chart.height);
        this.ghostCtx = this.ghostCanvas.getContext("2d");
        this.mouseoveredObjectMaps = []
    }
    function ii(n, t) {
        var i;
        t && yt[t] && (i = yt[t]);
        tt.parent.constructor.call(this, "CultureInfo", i, n.theme);
        this.chart = n;
        this.canvas = n.canvas;
        this.ctx = this.chart.ctx
    }
    var n = !!document.createElement("canvas").getContext, vt = {
        Chart: {
            width: 500,
            height: 400,
            zoomEnabled: !1,
            backgroundColor: "white",
            theme: "theme1",
            animationEnabled: n ? !0 : !1,
            colorSet: "colorSet1",
            culture: "en",
            creditHref: "http://canvasjs.com/",
            creditText: "CanvasJS.com",
            interactivityEnabled: !0
        },
        Title: {
            padding: 0,
            text: null,
            verticalAlign: "top",
            horizontalAlign: "center",
            fontSize: 20,
            fontFamily: "Calibri",
            fontWeight: "normal",
            fontColor: "black",
            fontStyle: "normal",
            borderThickness: 0,
            borderColor: "black",
            cornerRadius: 0,
            backgroundColor: null,
            margin: 5
        },
        Legend: {
            name: null,
            verticalAlign: "center",
            horizontalAlign: "right",
            fontSize: 14,
            fontFamily: "calibri",
            fontWeight: "normal",
            fontColor: "black",
            fontStyle: "normal",
            cursor: null,
            itemmouseover: null,
            itemmouseout: null,
            itemmousemove: null,
            itemclick: null
        },
        ToolTip: {
            enabled: !0,
            borderColor: null,
            shared: !1,
            animationEnabled: !0,
            content: null
        },
        Axis: {
            minimum: null,
            maximum: null,
            interval: null,
            intervalType: null,
            title: null,
            titleFontColor: "black",
            titleFontSize: 20,
            titleFontFamily: "arial",
            titleFontWeight: "normal",
            titleFontStyle: "normal",
            labelAngle: 0,
            labelFontFamily: "arial",
            labelFontColor: "black",
            labelFontSize: 12,
            labelFontWeight: "normal",
            labelFontStyle: "normal",
            labelAutoFit: !1,
            labelWrap: !0,
            labelMaxWidth: null,
            prefix: "",
            suffix: "",
            includeZero: !0,
            tickLength: 5,
            tickColor: "black",
            tickThickness: 1,
            lineColor: "black",
            lineThickness: 1,
            gridColor: "A0A0A0",
            gridThickness: 0,
            interlacedColor: null,
            valueFormatString: null,
            margin: 2,
            stripLines: []
        },
        StripLine: {
            value: null,
            startValue: null,
            endValue: null,
            color: "orange",
            thickness: 2,
            label: "",
            labelBackgroundColor: "#EEEEEE",
            labelFontFamily: "arial",
            labelFontColor: "orange",
            labelFontSize: 12,
            labelFontWeight: "normal",
            labelFontStyle: "normal"
        },
        DataSeries: {
            name: null,
            dataPoints: null,
            label: "",
            bevelEnabled: !1,
            cursor: null,
            indexLabel: "",
            indexLabelPlacement: "outside",
            indexLabelOrientation: "horizontal",
            indexLabelFontColor: "black",
            indexLabelFontSize: 12,
            indexLabelFontStyle: "normal",
            indexLabelFontFamily: "Arial",
            indexLabelFontWeight: "normal",
            indexLabelBackgroundColor: null,
            indexLabelLineColor: null,
            indexLabelLineThickness: 1,
            indexLabelMaxWidth: null,
            indexLabelWrap: !0,
            lineThickness: 2,
            color: null,
            startAngle: 0,
            type: "column",
            xValueType: "number",
            axisYType: "primary",
            xValueFormatString: null,
            yValueFormatString: null,
            showInLegend: null,
            legendMarkerType: null,
            legendMarkerColor: null,
            legendText: null,
            markerType: "circle",
            markerColor: null,
            markerSize: null,
            markerBorderColor: null,
            markerBorderThickness: null,
            mouseover: null,
            mouseout: null,
            mousemove: null,
            click: null,
            toolTipContent: null,
            visible: !0
        },
        CultureInfo: {
            decimalSeparator: ".",
            digitGroupSeparator: ",",
            zoomText: "Zoom",
            panText: "Pan",
            resetText: "Reset",
            days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            months: "January February March April May June July August September October November December".split(" "),
            shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
        },
        TextBlock: {
            x: 0,
            y: 0,
            width: null,
            height: null,
            maxWidth: null,
            maxHeight: null,
            padding: 0,
            angle: 0,
            text: "",
            horizontalAlign: "center",
            fontSize: 12,
            fontFamily: "calibri",
            fontWeight: "normal",
            fontColor: "black",
            fontStyle: "normal",
            borderThickness: 0,
            borderColor: "black",
            cornerRadius: 0,
            backgroundColor: null,
            textBaseline: "top"
        }
    }, yt = {
        en: {}
    }, k = {
        colorSet1: "#369EAD #C24642 #7F6084 #86B402 #A2D1CF #C8B631 #6DBCEB #52514E #4F81BC #A064A1 #F79647".split(" "),
        colorSet2: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #33558B".split(" "),
        colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
    }, d = {
        theme1: {
            Chart: {
                colorSet: "colorSet1"
            },
            Title: {
                fontFamily: n ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                fontSize: 33,
                fontColor: "#3A3A3A",
                fontWeight: "bold",
                verticalAlign: "top",
                margin: 10
            },
            Axis: {
                titleFontSize: 26,
                titleFontColor: "#666666",
                titleFontFamily: n ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                labelFontFamily: n ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                labelFontSize: 18,
                labelFontColor: "grey",
                tickColor: "#BBBBBB",
                tickThickness: 2,
                gridThickness: 2,
                gridColor: "#BBBBBB",
                lineThickness: 2,
                lineColor: "#BBBBBB"
            },
            Legend: {
                verticalAlign: "bottom",
                horizontalAlign: "center",
                fontFamily: n ? "monospace, sans-serif,arial black" : "calibri"
            },
            DataSeries: {
                indexLabelFontColor: "grey",
                indexLabelFontFamily: n ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                indexLabelFontSize: 18,
                indexLabelLineThickness: 1
            }
        },
        theme2: {
            Chart: {
                colorSet: "colorSet2"
            },
            Title: {
                fontFamily: "impact, charcoal, arial black, sans-serif",
                fontSize: 32,
                fontColor: "#333333",
                verticalAlign: "top",
                margin: 10
            },
            Axis: {
                titleFontSize: 22,
                titleFontColor: "rgb(98,98,98)",
                titleFontFamily: n ? "monospace, sans-serif,arial black" : "arial",
                titleFontWeight: "bold",
                labelFontFamily: n ? "monospace, Courier New, Courier" : "arial",
                labelFontSize: 16,
                labelFontColor: "grey",
                labelFontWeight: "bold",
                tickColor: "grey",
                tickThickness: 2,
                gridThickness: 2,
                gridColor: "grey",
                lineThickness: 0
            },
            Legend: {
                verticalAlign: "bottom",
                horizontalAlign: "center",
                fontFamily: n ? "monospace, sans-serif,arial black" : "arial"
            },
            DataSeries: {
                indexLabelFontColor: "grey",
                indexLabelFontFamily: n ? "Courier New, Courier, monospace" : "arial",
                indexLabelFontWeight: "bold",
                indexLabelFontSize: 18,
                indexLabelLineThickness: 1
            }
        },
        theme3: {
            Chart: {
                colorSet: "colorSet1"
            },
            Title: {
                fontFamily: n ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri",
                fontSize: 32,
                fontColor: "#3A3A3A",
                fontWeight: "bold",
                verticalAlign: "top",
                margin: 10
            },
            Axis: {
                titleFontSize: 22,
                titleFontColor: "rgb(98,98,98)",
                titleFontFamily: n ? "Verdana, Geneva, Calibri, sans-serif" : "calibri",
                labelFontFamily: n ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                labelFontSize: 18,
                labelFontColor: "grey",
                tickColor: "grey",
                tickThickness: 2,
                gridThickness: 2,
                gridColor: "grey",
                lineThickness: 2,
                lineColor: "grey"
            },
            Legend: {
                verticalAlign: "bottom",
                horizontalAlign: "center",
                fontFamily: n ? "monospace, sans-serif,arial black" : "calibri"
            },
            DataSeries: {
                bevelEnabled: !0,
                indexLabelFontColor: "grey",
                indexLabelFontFamily: n ? "Candara, Optima, Calibri, Verdana, Geneva, sans-serif" : "calibri",
                indexLabelFontSize: 18,
                indexLabelLineColor: "lightgrey",
                indexLabelLineThickness: 2
            }
        }
    }, r = {
        numberDuration: 1,
        yearDuration: 314496e5,
        monthDuration: 2592e6,
        weekDuration: 6048e5,
        dayDuration: 864e5,
        hourDuration: 36e5,
        minuteDuration: 6e4,
        secondDuration: 1e3,
        millisecondDuration: 1,
        dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
    }, ri = {}, p = null, ui = function() {
        var n = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g
          , t = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
          , i = "Sun Mon Tue Wed Thu Fri Sat".split(" ")
          , r = "January February March April May June July August September October November December".split(" ")
          , u = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
          , f = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g
          , e = /[^-+\dA-Z]/g;
        return function(o, h, c) {
            var nt = c ? c.days : t, tt = c ? c.months : r, it = c ? c.shortDays : i, rt = c ? c.shortMonths : u, v;
            if (c = "",
            v = !1,
            o = o && o.getTime ? o : o ? new Date(o) : new Date,
            isNaN(o))
                throw SyntaxError("invalid date");
            "UTC:" === h.slice(0, 4) && (h = h.slice(4),
            v = !0);
            c = v ? "getUTC" : "get";
            var b = o[c + "Date"]()
              , k = o[c + "Day"]()
              , y = o[c + "Month"]()
              , p = o[c + "FullYear"]()
              , l = o[c + "Hours"]()
              , d = o[c + "Minutes"]()
              , g = o[c + "Seconds"]()
              , w = o[c + "Milliseconds"]()
              , a = v ? 0 : o.getTimezoneOffset();
            return h.replace(n, function(n) {
                switch (n) {
                case "D":
                    return b;
                case "DD":
                    return s(b, 2);
                case "DDD":
                    return it[k];
                case "DDDD":
                    return nt[k];
                case "M":
                    return y + 1;
                case "MM":
                    return s(y + 1, 2);
                case "MMM":
                    return rt[y];
                case "MMMM":
                    return tt[y];
                case "Y":
                    return parseInt(String(p).slice(-2));
                case "YY":
                    return s(String(p).slice(-2), 2);
                case "YYY":
                    return s(String(p).slice(-3), 3);
                case "YYYY":
                    return s(p, 4);
                case "h":
                    return l % 12 || 12;
                case "hh":
                    return s(l % 12 || 12, 2);
                case "H":
                    return l;
                case "HH":
                    return s(l, 2);
                case "m":
                    return d;
                case "mm":
                    return s(d, 2);
                case "s":
                    return g;
                case "ss":
                    return s(g, 2);
                case "f":
                    return String(w).slice(0, 1);
                case "ff":
                    return s(String(w).slice(0, 2), 2);
                case "fff":
                    return s(String(w).slice(0, 3), 3);
                case "t":
                    return 12 > l ? "a" : "p";
                case "tt":
                    return 12 > l ? "am" : "pm";
                case "T":
                    return 12 > l ? "A" : "P";
                case "TT":
                    return 12 > l ? "AM" : "PM";
                case "K":
                    return v ? "UTC" : (String(o).match(f) || [""]).pop().replace(e, "");
                case "z":
                    return (0 < a ? "-" : "+") + Math.floor(Math.abs(a) / 60);
                case "zz":
                    return (0 < a ? "-" : "+") + s(Math.floor(Math.abs(a) / 60), 2);
                case "zzz":
                    return (0 < a ? "-" : "+") + s(Math.floor(Math.abs(a) / 60), 2) + s(Math.abs(a) % 60, 2);
                default:
                    return n.slice(1, n.length - 1)
                }
            })
        }
    }(), pt = function(n, t, i) {
        var f, u, c, r;
        if (null === n)
            return "";
        n = Number(n);
        f = 0 > n ? !0 : !1;
        f && (n *= -1);
        var k = i ? i.decimalSeparator : "."
          , h = i ? i.digitGroupSeparator : ","
          , r = "";
        t = String(t);
        var r = 1
          , o = i = ""
          , e = -1
          , p = []
          , w = []
          , y = 0
          , l = 0
          , b = 0
          , a = !1
          , v = 0
          , o = t.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
        for (t = null,
        u = 0; o && u < o.length; u++)
            if (t = o[u],
            "." === t && 0 > e)
                e = u;
            else {
                if ("%" === t)
                    r *= 100;
                else if ("‰" === t) {
                    r *= 1e3;
                    continue
                } else if ("," === t[0] && "." === t[t.length - 1]) {
                    r /= Math.pow(1e3, t.length - 1);
                    e = u + t.length - 1;
                    continue
                } else
                    "E" !== t[0] && "e" !== t[0] || "0" !== t[t.length - 1] || (a = !0);
                0 > e ? (p.push(t),
                "#" === t || "0" === t ? y++ : "," === t && b++) : (w.push(t),
                "#" !== t && "0" !== t || l++)
            }
        for (a && (t = Math.floor(n),
        v = (0 === t ? "" : String(t)).length - y,
        r /= Math.pow(10, v)),
        0 > e && (e = u),
        r = (n * r).toFixed(l),
        t = r.split("."),
        r = (t[0] + "").split(""),
        n = (t[1] + "").split(""),
        r && "0" === r[0] && r.shift(),
        u = a = o = l = e = 0; 0 < p.length; )
            if (t = p.pop(),
            "#" === t || "0" === t)
                if (e++,
                e === y) {
                    if (c = r,
                    r = [],
                    "0" === t)
                        for (t = y - l - (c ? c.length : 0); 0 < t; )
                            c.unshift("0"),
                            t--;
                    for (; 0 < c.length; )
                        i = c.pop() + i,
                        u++,
                        0 == u % a && o === b && 0 < c.length && (i = h + i);
                    f && (i = "-" + i)
                } else
                    0 < r.length ? (i = r.pop() + i,
                    l++,
                    u++) : "0" === t && (i = "0" + i,
                    l++,
                    u++),
                    0 == u % a && o === b && 0 < r.length && (i = h + i);
            else
                "E" !== t[0] && "e" !== t[0] || "0" !== t[t.length - 1] || !/[eE][+-]*[0]+/.test(t) ? "," === t ? (o++,
                a = u,
                u = 0,
                0 < r.length && (i = h + i)) : i = 1 < t.length && ('"' === t[0] && '"' === t[t.length - 1] || "'" === t[0] && "'" === t[t.length - 1]) ? t.slice(1, t.length - 1) + i : t + i : (t = 0 > v ? t.replace("+", "").replace("-", "") : t.replace("-", ""),
                i += t.replace(/[0]+/, function(n) {
                    return s(v, n.length)
                }));
        for (f = "",
        h = !1; 0 < w.length; )
            t = w.shift(),
            "#" === t || "0" === t ? 0 < n.length && 0 !== Number(n.join("")) ? (f += n.shift(),
            h = !0) : "0" === t && (f += "0",
            h = !0) : 1 < t.length && ('"' === t[0] && '"' === t[t.length - 1] || "'" === t[0] && "'" === t[t.length - 1]) ? f += t.slice(1, t.length - 1) : "E" !== t[0] && "e" !== t[0] || "0" !== t[t.length - 1] || !/[eE][+-]*[0]+/.test(t) ? f += t : (t = 0 > v ? t.replace("+", "").replace("-", "") : t.replace("-", ""),
            f += t.replace(/[0]+/, function(n) {
                return s(v, n.length)
            }));
        return i + ((h ? k : "") + f)
    }, ot = function(n) {
        var t = 0
          , i = 0;
        return n = n || window.event,
        n.offsetX || 0 === n.offsetX ? (t = n.offsetX,
        i = n.offsetY) : n.layerX || 0 == n.layerX ? (t = n.layerX,
        i = n.layerY) : (t = n.pageX - n.target.offsetLeft,
        i = n.pageY - n.target.offsetTop),
        {
            x: t,
            y: i
        }
    }, fi = !0, wt = window.devicePixelRatio || 1, st = 1, w = fi ? wt / st : 1, c, ht, o, bt;
    h.prototype.setOptions = function(n, t) {
        if (vt[this._defaultsKey]) {
            var r = vt[this._defaultsKey], i;
            for (i in r)
                this[i] = n && i in n ? n[i] : t && i in t ? t[i] : r[i]
        }
    }
    ;
    h.prototype.updateOption = function(n) {
        var u = vt[this._defaultsKey]
          , t = this._options.theme ? this._options.theme : this.chart && this.chart._options.theme ? this.chart._options.theme : "theme1"
          , i = {}
          , r = this[n];
        return (t && d[t] && d[t][this._defaultsKey] && (i = d[t][this._defaultsKey]),
        n in u && (r = n in this._options ? this._options[n] : i && n in i ? i[n] : u[n]),
        r === this[n]) ? !1 : (this[n] = r,
        !0)
    }
    ;
    h.prototype.trackChanges = function(n) {
        this._options._oldOptions || (this._options._oldOptions = {});
        this._options._oldOptions[n] = this._options[n]
    }
    ;
    h.prototype.isBeingTracked = function(n) {
        return this._options._oldOptions || (this._options._oldOptions = {}),
        this._options._oldOptions[n] ? !0 : !1
    }
    ;
    h.prototype.hasOptionChanged = function(n) {
        return this._options._oldOptions || (this._options._oldOptions = {}),
        this._options._oldOptions[n] !== this._options[n]
    }
    ;
    v(t, h);
    t.prototype._updateOptions = function() {
        var n = this, t, i;
        if (this.updateOption("width"),
        this.updateOption("height"),
        this.updateOption("theme"),
        this.updateOption("colorSet") && (this._selectedColorSet = "undefined" != typeof k[this.colorSet] ? k[this.colorSet] : k.colorSet1),
        this.updateOption("backgroundColor"))
            try {
                this.canvas.style.background !== this.backgroundColor && (this.canvas.style.background = this.backgroundColor)
            } catch (r) {}
        this.updateOption("animationEnabled");
        this._options.zoomEnabled ? (this._zoomButton || (this._zoomButton = document.createElement("button"),
        this._zoomButton.appendChild(document.createTextNode("Pan")),
        this._toolBar.appendChild(this._zoomButton),
        l(this._zoomButton, "click", function() {
            n.zoomEnabled ? (n.zoomEnabled = !1,
            n.panEnabled = !0,
            n._zoomButton.innerHTML = n._cultureInfo.zoomText) : (n.zoomEnabled = !0,
            n.panEnabled = !1,
            n._zoomButton.innerHTML = n._cultureInfo.panText);
            n.render()
        })),
        this._resetButton || (this._resetButton = document.createElement("button"),
        this._resetButton.appendChild(document.createTextNode("Reset")),
        this._toolBar.appendChild(this._resetButton),
        l(this._resetButton, "click", function() {
            n._toolTip.hide();
            n.zoomEnabled || n.panEnabled ? (n.zoomEnabled = !0,
            n.panEnabled = !1,
            n._zoomButton.innerHTML = n._cultureInfo.panText,
            n._defaultCursor = "default",
            n.overlaidCanvas.style.cursor = n._defaultCursor) : (n.zoomEnabled = !1,
            n.panEnabled = !1);
            n.sessionVariables.axisX.internalMinimum = n._options.axisX && n._options.axisX.minimum ? n._options.axisX.minimum : null;
            n.sessionVariables.axisX.internalMaximum = n._options.axisX && n._options.axisX.maximum ? n._options.axisX.maximum : null;
            n.resetOverlayedCanvas();
            n._toolBar.style.display = "none";
            n.render()
        }),
        this.overlaidCanvas.style.cursor = n._defaultCursor),
        this.zoomEnabled || this.panEnabled || (this._zoomButton ? (n._zoomButton.innerHTML === n._cultureInfo.zoomText ? (this.panEnabled = !0,
        this.zoomEnabled = !1) : (this.zoomEnabled = !0,
        this.panEnabled = !1),
        n._toolBar.style.display = "inline") : (this.zoomEnabled = !0,
        this.panEnabled = !1))) : this.panEnabled = this.zoomEnabled = !1;
        this.updateOption("culture");
        this._cultureInfo = new ii(this,this._options.culture);
        "none" !== this._toolBar.style.display && (t = this.panEnabled ? n._cultureInfo.zoomText : n._cultureInfo.panText,
        n._zoomButton.innerHTML !== t && (n._zoomButton.innerHTML = t),
        n._resetButton.innerHTML !== n._cultureInfo.resetText && (n._resetButton.innerHTML = n._cultureInfo.resetText));
        t = this.updateOption("creditText");
        i = this.updateOption("creditHref");
        (0 === this.renderCount || t || i) && (this._creditLink.setAttribute("href", this.creditHref),
        this._creditLink.innerHTML = this.creditText);
        this.creditHref && this.creditText ? this._creditLink.parentElement || this._canvasJSContainer.appendChild(this._creditLink) : this._creditLink.parentElement && this._canvasJSContainer.removeChild(this._creditLink);
        this._options.toolTip && this._toolTip._options !== this._options.toolTip && (this._toolTip._options = this._options.toolTip);
        this._toolTip.updateOption("enabled");
        this._toolTip.updateOption("shared");
        this._toolTip.updateOption("animationEnabled");
        this._toolTip.updateOption("borderColor");
        this._toolTip.updateOption("content")
    }
    ;
    t.prototype._updateSize = function() {
        var n = 0
          , t = 0;
        return this._options.width ? n = this.width : this.width = n = 0 < this._container.clientWidth ? this._container.clientWidth : this.width,
        this._options.height ? t = this.height : this.height = t = 0 < this._container.clientHeight ? this._container.clientHeight : this.height,
        this.canvas.width !== n * w || this.canvas.height !== t * w ? (ut(this.canvas, n, t),
        ut(this.overlaidCanvas, n, t),
        ut(this._eventManager.ghostCanvas, n, t),
        !0) : !1
    }
    ;
    t.prototype._initialize = function() {
        var u, r, n, f, i;
        for (this.pieDoughnutClickHandler = null,
        this.animationRequestId && this.cancelRequestAnimFrame.call(window, this.animationRequestId),
        this._updateOptions(),
        this._updateSize(),
        this.ctx.clearRect(0, 0, this.width, this.height),
        this.ctx.beginPath(),
        this.axisY2 = this.axisY = this.axisX = null,
        this._indexLabels = [],
        this._dataInRenderedOrder = [],
        this._events = [],
        this._eventManager && this._eventManager.reset(),
        this.plotInfo = {
            axisPlacement: null,
            axisXValueType: null,
            plotTypes: []
        },
        this.layoutManager.reset(),
        this.data = [],
        u = 0,
        r = 0; r < this._options.data.length; r++)
            if ((u++,
            !this._options.data[r].type || 0 <= t._supportedChartTypes.indexOf(this._options.data[r].type)) && (n = new y(this,this._options.data[r],this.theme,u - 1,++this._eventManager.lastObjectId),
            null === n.name && (n.name = "DataSeries " + u),
            null === n.color ? 1 < this._options.data.length ? (n._colorSet = [this._selectedColorSet[n.index % this._selectedColorSet.length]],
            n.color = this._selectedColorSet[n.index % this._selectedColorSet.length]) : n._colorSet = "line" === n.type || "stepLine" === n.type || "spline" === n.type || "area" === n.type || "stepArea" === n.type || "splineArea" === n.type || "stackedArea" === n.type || "stackedArea100" === n.type ? [this._selectedColorSet[0]] : this._selectedColorSet : n._colorSet = [n.color],
            null === n.markerSize && (("line" === n.type || "stepLine" === n.type || "spline" === n.type) && n.dataPoints && n.dataPoints.length < this.width / 16 || "scatter" === n.type) && (n.markerSize = 8),
            ("bubble" === n.type || "scatter" === n.type) && n.dataPoints && n.dataPoints.sort(si),
            this.data.push(n),
            f = n.axisPlacement,
            "normal" === f ? "xySwapped" === this.plotInfo.axisPlacement ? i = 'You cannot combine "' + n.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? i = 'You cannot combine "' + n.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === f ? "normal" === this.plotInfo.axisPlacement ? i = 'You cannot combine "' + n.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? i = 'You cannot combine "' + n.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" == f && ("normal" === this.plotInfo.axisPlacement ? i = 'You cannot combine "' + n.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? i = 'You cannot combine "' + n.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none")),
            i && window.console)) {
                window.console.log(i);
                return
            }
        this._objectsInitialized = !0
    }
    ;
    t._supportedChartTypes = "line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 pie doughnut".split(" ");
    t._supportedChartTypes.indexOf || (t._supportedChartTypes.indexOf = function(n, t) {
        var r = this.length >>> 0
          , i = Number(t) || 0
          , i = 0 > i ? Math.ceil(i) : Math.floor(i);
        for (0 > i && (i += r); i < r; i++)
            if (i in this && this[i] === n)
                return i;
        return -1
    }
    );
    t.prototype.render = function(n) {
        var f, i, t, r;
        for (n && (this._options = n),
        this._initialize(),
        n = 0; n < this.data.length; n++)
            ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && (this.data[n].axisYType && "primary" !== this.data[n].axisYType ? "secondary" === this.data[n].axisYType && (this.axisY2 || ("normal" === this.plotInfo.axisPlacement ? this.axisY2 = new u(this,this._options.axisY2,"axisY","right") : "xySwapped" === this.plotInfo.axisPlacement && (this.axisY2 = new u(this,this._options.axisY2,"axisY","top"))),
            this.data[n].axisY = this.axisY2) : (this.axisY || ("normal" === this.plotInfo.axisPlacement ? this.axisY = new u(this,this._options.axisY,"axisY","left") : "xySwapped" === this.plotInfo.axisPlacement && (this.axisY = new u(this,this._options.axisY,"axisY","bottom"))),
            this.data[n].axisY = this.axisY),
            this.axisX || ("normal" === this.plotInfo.axisPlacement ? this.axisX = new u(this,this._options.axisX,"axisX","bottom") : "xySwapped" === this.plotInfo.axisPlacement && (this.axisX = new u(this,this._options.axisX,"axisX","left"))),
            this.data[n].axisX = this.axisX);
        for (this._processData(),
        this._options.title && (this._title = new tt(this,this._options.title),
        this._title.render()),
        this.legend = new et(this,this._options.legend,this.theme),
        n = 0; n < this.data.length; n++)
            this.data[n].showInLegend && this.legend.dataSeries.push(this.data[n]);
        if (this.legend.render(),
        "normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement)
            this.layoutManager.getFreeSpace(),
            u.setLayoutAndRender(this.axisX, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        else if ("none" === this.plotInfo.axisPlacement)
            this.preparePlotArea();
        else
            return;
        for (n = 0; n < this.plotInfo.plotTypes.length; n++)
            for (f = this.plotInfo.plotTypes[n],
            i = 0; i < f.plotUnits.length; i++)
                for (t = f.plotUnits[i],
                "line" === t.type ? this.renderLine(t) : "stepLine" === t.type ? this.renderStepLine(t) : "spline" === t.type ? this.renderSpline(t) : "column" === t.type ? this.renderColumn(t) : "bar" === t.type ? this.renderBar(t) : "area" === t.type ? this.renderArea(t) : "stepArea" === t.type ? this.renderStepArea(t) : "splineArea" === t.type ? this.renderSplineArea(t) : "stackedColumn" === t.type ? this.renderStackedColumn(t) : "stackedColumn100" === t.type ? this.renderStackedColumn100(t) : "stackedBar" === t.type ? this.renderStackedBar(t) : "stackedBar100" === t.type ? this.renderStackedBar100(t) : "stackedArea" === t.type ? this.renderStackedArea(t) : "stackedArea100" === t.type ? this.renderStackedArea100(t) : "bubble" === t.type ? this.renderBubble(t) : "scatter" === t.type ? this.renderScatter(t) : "pie" === t.type ? this.renderPie(t) : "doughnut" === t.type && this.renderPie(t),
                r = 0; r < t.dataSeriesIndexes.length; r++)
                    this._dataInRenderedOrder.push(this.data[t.dataSeriesIndexes[r]]);
        0 < this._indexLabels.length && this.renderIndexLabels();
        this.attachPlotAreaEventHandlers();
        this.zoomEnabled || this.panEnabled || "none" === this._toolBar.style.display || (this._toolBar.style.display = "none");
        this._toolTip._updateToolTip();
        this.renderCount++
    }
    ;
    t.prototype.attachPlotAreaEventHandlers = function() {
        this.attachEvent({
            context: this,
            chart: this,
            mousedown: this._plotAreaMouseDown,
            mouseup: this._plotAreaMouseUp,
            mousemove: this._plotAreaMouseMove,
            cursor: this.zoomEnabled ? "col-resize" : "move",
            cursor: this.panEnabled ? "move" : "default",
            capture: !0,
            bounds: this.plotArea
        })
    }
    ;
    t.prototype.categoriseDataSeries = function() {
        for (var n = "", u = 0; u < this.data.length; u++)
            if (n = this.data[u],
            n.dataPoints && 0 !== n.dataPoints.length && n.visible && 0 <= t._supportedChartTypes.indexOf(n.type)) {
                for (var i = null, e = !1, f = null, o = !1, r = 0; r < this.plotInfo.plotTypes.length; r++)
                    if (this.plotInfo.plotTypes[r].type === n.type) {
                        e = !0;
                        i = this.plotInfo.plotTypes[r];
                        break
                    }
                for (e || (i = {
                    type: n.type,
                    totalDataSeries: 0,
                    plotUnits: []
                },
                this.plotInfo.plotTypes.push(i)),
                r = 0; r < i.plotUnits.length; r++)
                    if (i.plotUnits[r].axisYType === n.axisYType) {
                        o = !0;
                        f = i.plotUnits[r];
                        break
                    }
                o || (f = {
                    type: n.type,
                    previousDataSeriesCount: 0,
                    index: i.plotUnits.length,
                    plotType: i,
                    axisYType: n.axisYType,
                    axisY: "primary" === n.axisYType ? this.axisY : this.axisY2,
                    axisX: this.axisX,
                    dataSeriesIndexes: []
                },
                i.plotUnits.push(f));
                i.totalDataSeries++;
                f.dataSeriesIndexes.push(u)
            }
        for (u = 0; u < this.plotInfo.plotTypes.length; u++)
            for (i = this.plotInfo.plotTypes[u],
            r = n = 0; r < i.plotUnits.length; r++)
                i.plotUnits[r].previousDataSeriesCount = n,
                n += i.plotUnits[r].dataSeriesIndexes.length
    }
    ;
    t.prototype.assignIdToDataPoints = function() {
        for (var t, r, i, n = 0; n < this.data.length; n++)
            if (t = this.data[n],
            t.dataPoints)
                for (r = t.dataPoints.length,
                i = 0; i < r; i++)
                    t.dataPointIds[i] = ++this._eventManager.lastObjectId
    }
    ;
    t.prototype._processData = function() {
        var t, r, i, n;
        for (this.assignIdToDataPoints(),
        this.categoriseDataSeries(),
        t = 0; t < this.plotInfo.plotTypes.length; t++)
            for (r = this.plotInfo.plotTypes[t],
            i = 0; i < r.plotUnits.length; i++)
                n = r.plotUnits[i],
                "line" === n.type || "stepLine" === n.type || "spline" === n.type || "column" === n.type || "area" === n.type || "stepArea" === n.type || "splineArea" === n.type || "bar" === n.type || "bubble" === n.type || "scatter" === n.type ? this._processMultiseriesPlotUnit(n) : "stackedColumn" === n.type || "stackedBar" === n.type || "stackedArea" === n.type ? this._processStackedPlotUnit(n) : "stackedColumn100" !== n.type && "stackedBar100" !== n.type && "stackedArea100" !== n.type || this._processStacked100PlotUnit(n)
    }
    ;
    t.prototype._processMultiseriesPlotUnit = function(n) {
        var v, a, o;
        if (n.dataSeriesIndexes && !(1 > n.dataSeriesIndexes.length))
            for (var e = n.axisY.dataInfo, u = n.axisX.dataInfo, r, f, s = !1, h = 0; h < n.dataSeriesIndexes.length; h++) {
                var i = this.data[n.dataSeriesIndexes[h]]
                  , t = 0
                  , c = !1
                  , l = !1;
                for (("normal" === i.axisPlacement || "xySwapped" === i.axisPlacement) && (v = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                a = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity),
                (i.dataPoints[t].x && i.dataPoints[t].x.getTime || "dateTime" === i.xValueType) && (s = !0),
                t = 0; t < i.dataPoints.length; t++)
                    if ("undefined" == typeof i.dataPoints[t].x && (i.dataPoints[t].x = t),
                    i.dataPoints[t].x.getTime ? (s = !0,
                    r = i.dataPoints[t].x.getTime()) : r = i.dataPoints[t].x,
                    f = i.dataPoints[t].y,
                    r < u.min && (u.min = r),
                    r > u.max && (u.max = r),
                    f < e.min && (e.min = f),
                    f > e.max && (e.max = f),
                    0 < t && (o = r - i.dataPoints[t - 1].x,
                    0 > o && (o *= -1),
                    u.minDiff > o && 0 !== o && (u.minDiff = o)),
                    !(r < v) || c) {
                        if (!c && (c = !0,
                        0 < t)) {
                            t -= 2;
                            continue
                        }
                        if (r > a && !l)
                            l = !0;
                        else if (r > a && l)
                            continue;
                        i.dataPoints[t].label && (n.axisX.labels[r] = i.dataPoints[t].label);
                        r < u.viewPortMin && (u.viewPortMin = r);
                        r > u.viewPortMax && (u.viewPortMax = r);
                        null !== f && (f < e.viewPortMin && (e.viewPortMin = f),
                        f > e.viewPortMax && (e.viewPortMax = f))
                    }
                this.plotInfo.axisXValueType = i.xValueType = s ? "dateTime" : "number"
            }
    }
    ;
    t.prototype._processStackedPlotUnit = function(n) {
        var p, y, o;
        if (n.dataSeriesIndexes && !(1 > n.dataSeriesIndexes.length)) {
            for (var r = n.axisY.dataInfo, f = n.axisX.dataInfo, i, e, c = !1, s = [], h = [], l = 0; l < n.dataSeriesIndexes.length; l++) {
                var u = this.data[n.dataSeriesIndexes[l]]
                  , t = 0
                  , a = !1
                  , v = !1;
                for (("normal" === u.axisPlacement || "xySwapped" === u.axisPlacement) && (p = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                y = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity),
                (u.dataPoints[t].x && u.dataPoints[t].x.getTime || "dateTime" === u.xValueType) && (c = !0),
                t = 0; t < u.dataPoints.length; t++)
                    if ("undefined" == typeof u.dataPoints[t].x && (u.dataPoints[t].x = t),
                    u.dataPoints[t].x.getTime ? (c = !0,
                    i = u.dataPoints[t].x.getTime()) : i = u.dataPoints[t].x,
                    e = u.dataPoints[t].y,
                    i < f.min && (f.min = i),
                    i > f.max && (f.max = i),
                    0 < t && (o = i - u.dataPoints[t - 1].x,
                    0 > o && (o *= -1),
                    f.minDiff > o && 0 !== o && (f.minDiff = o)),
                    !(i < p) || a) {
                        if (!a && (a = !0,
                        0 < t)) {
                            t -= 2;
                            continue
                        }
                        if (i > y && !v)
                            v = !0;
                        else if (i > y && v)
                            continue;
                        u.dataPoints[t].label && (n.axisX.labels[i] = u.dataPoints[t].label);
                        i < f.viewPortMin && (f.viewPortMin = i);
                        i > f.viewPortMax && (f.viewPortMax = i);
                        null !== e && (0 <= e ? s[i] = s[i] ? s[i] + e : e : h[i] = h[i] ? h[i] + e : e)
                    }
                this.plotInfo.axisXValueType = u.xValueType = c ? "dateTime" : "number"
            }
            for (t in s)
                isNaN(t) || (n = s[t],
                n < r.min && (r.min = n),
                n > r.max && (r.max = n),
                t < f.viewPortMin || t > f.viewPortMax || (n < r.viewPortMin && (r.viewPortMin = n),
                n > r.viewPortMax && (r.viewPortMax = n)));
            for (t in h)
                isNaN(t) || (n = h[t],
                n < r.min && (r.min = n),
                n > r.max && (r.max = n),
                t < f.viewPortMin || t > f.viewPortMax || (n < r.viewPortMin && (r.viewPortMin = n),
                n > r.viewPortMax && (r.viewPortMax = n)))
        }
    }
    ;
    t.prototype._processStacked100PlotUnit = function(n) {
        var w, p, e;
        if (n.dataSeriesIndexes && !(1 > n.dataSeriesIndexes.length)) {
            for (var u = n.axisY.dataInfo, f = n.axisX.dataInfo, t, o, l = !1, s = !1, h = !1, c = [], a = 0; a < n.dataSeriesIndexes.length; a++) {
                var r = this.data[n.dataSeriesIndexes[a]]
                  , i = 0
                  , v = !1
                  , y = !1;
                for (("normal" === r.axisPlacement || "xySwapped" === r.axisPlacement) && (w = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : this._options.axisX && this._options.axisX.minimum ? this._options.axisX.minimum : -Infinity,
                p = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : this._options.axisX && this._options.axisX.maximum ? this._options.axisX.maximum : Infinity),
                (r.dataPoints[i].x && r.dataPoints[i].x.getTime || "dateTime" === r.xValueType) && (l = !0),
                i = 0; i < r.dataPoints.length; i++)
                    if ("undefined" == typeof r.dataPoints[i].x && (r.dataPoints[i].x = i),
                    r.dataPoints[i].x.getTime ? (l = !0,
                    t = r.dataPoints[i].x.getTime()) : t = r.dataPoints[i].x,
                    o = r.dataPoints[i].y,
                    t < f.min && (f.min = t),
                    t > f.max && (f.max = t),
                    0 < i && (e = t - r.dataPoints[i - 1].x,
                    0 > e && (e *= -1),
                    f.minDiff > e && 0 !== e && (f.minDiff = e)),
                    !(t < w) || v) {
                        if (!v && (v = !0,
                        0 < i)) {
                            i -= 2;
                            continue
                        }
                        if (t > p && !y)
                            y = !0;
                        else if (t > p && y)
                            continue;
                        r.dataPoints[i].label && (n.axisX.labels[t] = r.dataPoints[i].label);
                        t < f.viewPortMin && (f.viewPortMin = t);
                        t > f.viewPortMax && (f.viewPortMax = t);
                        null !== o && (0 <= o ? s = !0 : h = !0,
                        c[t] = c[t] ? c[t] + Math.abs(o) : Math.abs(o))
                    }
                this.plotInfo.axisXValueType = r.xValueType = l ? "dateTime" : "number"
            }
            s && !h ? (u.max = 99,
            u.min = 1) : s && h ? (u.max = 99,
            u.min = -99) : !s && h && (u.max = -1,
            u.min = -99);
            u.viewPortMin = u.min;
            u.viewPortMax = u.max;
            n.dataPointYSums = c
        }
    }
    ;
    t.prototype.getDataPointAtXY = function(n, t, i) {
        var r, u, f;
        for (i = i || !1,
        r = [],
        u = this._dataInRenderedOrder.length - 1; 0 <= u; u--)
            f = null,
            (f = this._dataInRenderedOrder[u].getDataPointAtXY(n, t, i)) && r.push(f);
        for (n = null,
        t = !1,
        i = 0; i < r.length; i++)
            if (("line" === r[i].dataSeries.type || "stepLine" === r[i].dataSeries.type || "area" === r[i].dataSeries.type || "stepArea" === r[i].dataSeries.type) && (u = b("markerSize", r[i].dataPoint, r[i].dataSeries) || 8,
            r[i].distance <= u / 2)) {
                t = !0;
                break
            }
        for (i = 0; i < r.length; i++)
            t && "line" !== r[i].dataSeries.type && "stepLine" !== r[i].dataSeries.type && "area" !== r[i].dataSeries.type && "stepArea" !== r[i].dataSeries.type || (n ? r[i].distance <= n.distance && (n = r[i]) : n = r[i]);
        return n
    }
    ;
    t.prototype.getObjectAtXY = function(t, i, r) {
        var f = null, u;
        if (r = this.getDataPointAtXY(t, i, r || !1))
            f = r.dataSeries.dataPointIds[r.dataPointIndex];
        else if (n)
            f = gt(t, i, this._eventManager.ghostCtx);
        else
            for (r = 0; r < this.legend.items.length; r++)
                u = this.legend.items[r],
                t >= u.x1 && t <= u.x2 && i >= u.y1 && i <= u.y2 && (f = u.id);
        return f
    }
    ;
    t.prototype.getAutoFontSize = function(n) {
        return n /= 400,
        Math.round(Math.min(this.width, this.height) * n)
    }
    ;
    t.prototype.resetOverlayedCanvas = function() {
        this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
    }
    ;
    t.prototype.attachEvent = function(n) {
        this._events.push(n)
    }
    ;
    t.prototype._touchEventHandler = function(n) {
        var u, o, e;
        if (n.changedTouches && this.interactivityEnabled) {
            var f = []
              , t = n.changedTouches
              , i = t ? t[0] : n
              , r = null;
            switch (n.type) {
            case "touchstart":
            case "MSPointerDown":
                f = ["mousemove", "mousedown"];
                this._lastTouchData = ot(i);
                this._lastTouchData.time = new Date;
                break;
            case "touchmove":
            case "MSPointerMove":
                f = ["mousemove"];
                break;
            case "touchend":
            case "MSPointerUp":
                f = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType ? ["mouseup", "click"] : ["mouseup"];
                break;
            default:
                return
            }
            if (!(t && 1 < t.length)) {
                r = ot(i);
                r.time = new Date;
                try {
                    u = r.y - this._lastTouchData.y;
                    o = r.time - this._lastTouchData.time;
                    15 < Math.abs(u) && (this._lastTouchData.scroll || 200 > o) && (this._lastTouchData.scroll = !0,
                    e = window.parent || window,
                    e && e.scrollBy && e.scrollBy(0, -u))
                } catch (s) {}
                if (this._lastTouchEventType = n.type,
                this._lastTouchData.scroll && this.zoomEnabled)
                    this.isDrag && this.resetOverlayedCanvas(),
                    this.isDrag = !1;
                else
                    for (t = 0; t < f.length; t++)
                        r = f[t],
                        u = document.createEvent("MouseEvent"),
                        u.initMouseEvent(r, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null),
                        i.target.dispatchEvent(u),
                        n.preventManipulation && n.preventManipulation(),
                        n.preventDefault && n.preventDefault()
            }
        }
    }
    ;
    t.prototype._mouseEventHandler = function(n) {
        var r, u, i, f, e;
        if (this.interactivityEnabled && (n.preventManipulation && n.preventManipulation(),
        n.preventDefault && n.preventDefault(),
        "undefined" == typeof n.target && n.srcElement && (n.target = n.srcElement),
        r = ot(n),
        u = n.type,
        n.which ? f = 3 == n.which : n.button && (f = 2 == n.button),
        !f)) {
            if (t.capturedEventParam)
                i = t.capturedEventParam,
                "mouseup" === u && (t.capturedEventParam = null,
                i.chart.overlaidCanvas.releaseCapture ? i.chart.overlaidCanvas.releaseCapture() : document.body.removeEventListener("mouseup", i.chart._mouseEventHandler, !1)),
                i.hasOwnProperty(u) && i[u].call(i.context, r.x, r.y);
            else if (this._events) {
                for (f = 0; f < this._events.length; f++)
                    if (this._events[f].hasOwnProperty(u))
                        if (i = this._events[f],
                        e = i.bounds,
                        r.x >= e.x1 && r.x <= e.x2 && r.y >= e.y1 && r.y <= e.y2) {
                            i[u].call(i.context, r.x, r.y);
                            "mousedown" === u && !0 === i.capture ? (t.capturedEventParam = i,
                            this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.body.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === u && (i.chart.overlaidCanvas.releaseCapture ? i.chart.overlaidCanvas.releaseCapture() : document.body.removeEventListener("mouseup", this._mouseEventHandler, !1));
                            break
                        } else
                            i = null;
                n.target.style.cursor = i && i.cursor ? i.cursor : this._defaultCursor
            }
            this._toolTip && this._toolTip.enabled && (u = this.plotArea,
            (r.x < u.x1 || r.x > u.x2 || r.y < u.y1 || r.y > u.y2) && this._toolTip.hide());
            this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(n)
        }
    }
    ;
    t.prototype._plotAreaMouseDown = function(n, t) {
        this.isDrag = !0;
        this.dragStartPoint = "none" !== this.plotInfo.axisPlacement ? {
            x: n,
            y: t,
            xMinimum: this.axisX.minimum,
            xMaximum: this.axisX.maximum
        } : {
            x: n,
            y: t
        }
    }
    ;
    t.prototype._plotAreaMouseUp = function(n, t) {
        var u, r;
        if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
            var i = 0
              , i = this.axisX.lineCoordinates
              , i = "xySwapped" === this.plotInfo.axisPlacement ? t - this.dragStartPoint.y : this.dragStartPoint.x - n;
            if (Math.abs(this.axisX.maximum - this.axisX.minimum),
            2 < Math.abs(i)) {
                if (this.panEnabled)
                    i = !1,
                    r = 0,
                    this.axisX.sessionVariables.internalMinimum < this.axisX._absoluteMinimum ? (r = this.axisX._absoluteMinimum - this.axisX.sessionVariables.internalMinimum,
                    this.axisX.sessionVariables.internalMinimum += r,
                    this.axisX.sessionVariables.internalMaximum += r,
                    i = !0) : this.axisX.sessionVariables.internalMaximum > this.axisX._absoluteMaximum && (r = this.axisX.sessionVariables.internalMaximum - this.axisX._absoluteMaximum,
                    this.axisX.sessionVariables.internalMaximum -= r,
                    this.axisX.sessionVariables.internalMinimum -= r,
                    i = !0),
                    i && this.render();
                else if (this.zoomEnabled) {
                    if (this.resetOverlayedCanvas(),
                    !this.dragStartPoint)
                        return;
                    "xySwapped" === this.plotInfo.axisPlacement ? (u = Math.min(this.dragStartPoint.y, t),
                    r = Math.max(this.dragStartPoint.y, t),
                    1 < Math.abs(u - r) && (i = this.axisX.lineCoordinates,
                    r = this.axisX.maximum - (this.axisX.maximum - this.axisX.minimum) / i.height * (r - i.y1),
                    i = this.axisX.maximum - (this.axisX.maximum - this.axisX.minimum) / i.height * (u - i.y1),
                    r = Math.max(r, this.axisX.dataInfo.min),
                    i = Math.min(i, this.axisX.dataInfo.max),
                    Math.abs((i - r) / this.axisX.dataInfo.minDiff) >= .008 * this.height && (this.axisX.sessionVariables.internalMinimum = r,
                    this.axisX.sessionVariables.internalMaximum = i,
                    this.render()))) : "normal" === this.plotInfo.axisPlacement && (r = Math.min(this.dragStartPoint.x, n),
                    u = Math.max(this.dragStartPoint.x, n),
                    1 < Math.abs(r - u) && (i = this.axisX.lineCoordinates,
                    r = (this.axisX.maximum - this.axisX.minimum) / i.width * (r - i.x1) + this.axisX.minimum,
                    i = (this.axisX.maximum - this.axisX.minimum) / i.width * (u - i.x1) + this.axisX.minimum,
                    r = Math.max(r, this.axisX.dataInfo.min),
                    i = Math.min(i, this.axisX.dataInfo.max),
                    Math.abs((i - r) / this.axisX.dataInfo.minDiff) >= .01 * this.width && (this.axisX.sessionVariables.internalMinimum = r,
                    this.axisX.sessionVariables.internalMaximum = i,
                    this.render())))
                }
                this.zoomEnabled && "none" === this._toolBar.style.display && (this._toolBar.style.display = "inline",
                this._zoomButton.innerHTML = this._cultureInfo.panText,
                this._resetButton.innerHTML = this._cultureInfo.resetText)
            }
        }
        this.isDrag = !1
    }
    ;
    t.prototype._plotAreaMouseMove = function(n, t) {
        var u;
        if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
            var i = 0
              , r = 0
              , r = this.axisX.lineCoordinates;
            "xySwapped" === this.plotInfo.axisPlacement ? (i = t - this.dragStartPoint.y,
            r = Math.abs(this.axisX.maximum - this.axisX.minimum) / r.height * i) : (i = this.dragStartPoint.x - n,
            r = Math.abs(this.axisX.maximum - this.axisX.minimum) / r.width * i);
            2 < Math.abs(i) && 8 > Math.abs(i) && (this.panEnabled || this.zoomEnabled) ? this._toolTip.hide() : !this._toolTip.enabled || this.panEnabled || this.zoomEnabled || this._toolTip.mouseMoveHandler(n, t);
            2 < Math.abs(i) && (this.panEnabled || this.zoomEnabled) && (this.panEnabled ? (this.axisX.sessionVariables.internalMinimum = this.dragStartPoint.xMinimum + r,
            this.axisX.sessionVariables.internalMaximum = this.dragStartPoint.xMaximum + r,
            i = 0,
            this.axisX.sessionVariables.internalMinimum < this.axisX._absoluteMinimum - g(this.axisX.interval, this.axisX.intervalType) ? (i = this.axisX._absoluteMinimum - g(this.axisX.interval, this.axisX.intervalType) - this.axisX.sessionVariables.internalMinimum,
            this.axisX.sessionVariables.internalMinimum += i,
            this.axisX.sessionVariables.internalMaximum += i) : this.axisX.sessionVariables.internalMaximum > this.axisX._absoluteMaximum + g(this.axisX.interval, this.axisX.intervalType) && (i = this.axisX.sessionVariables.internalMaximum - (this.axisX._absoluteMaximum + g(this.axisX.interval, this.axisX.intervalType)),
            this.axisX.sessionVariables.internalMaximum -= i,
            this.axisX.sessionVariables.internalMinimum -= i),
            u = this,
            clearTimeout(this._panTimerId),
            this._panTimerId = setTimeout(function() {
                u.render()
            }, 0)) : this.zoomEnabled && (i = this.plotArea,
            this.resetOverlayedCanvas(),
            r = this.overlaidCanvasCtx.globalAlpha,
            this.overlaidCanvasCtx.globalAlpha = .7,
            this.overlaidCanvasCtx.fillStyle = "#A0ABB8",
            "xySwapped" === this.plotInfo.axisPlacement ? this.overlaidCanvasCtx.fillRect(i.x1, this.dragStartPoint.y, i.x2 - i.x1, t - this.dragStartPoint.y) : "normal" === this.plotInfo.axisPlacement && this.overlaidCanvasCtx.fillRect(this.dragStartPoint.x, i.y1, n - this.dragStartPoint.x, i.y2 - i.y1),
            this.overlaidCanvasCtx.globalAlpha = r))
        } else
            this._toolTip.enabled && this._toolTip.mouseMoveHandler(n, t)
    }
    ;
    t.prototype.preparePlotArea = function() {
        var t = this.plotArea
          , i = this.axisY ? this.axisY : this.axisY2;
        !n && (0 < t.x1 || 0 < t.y1) && t.ctx.translate(t.x1, t.y1);
        this.axisX && i ? (t.x1 = this.axisX.lineCoordinates.x1 < this.axisX.lineCoordinates.x2 ? this.axisX.lineCoordinates.x1 : i.lineCoordinates.x1,
        t.y1 = this.axisX.lineCoordinates.y1 < i.lineCoordinates.y1 ? this.axisX.lineCoordinates.y1 : i.lineCoordinates.y1,
        t.x2 = this.axisX.lineCoordinates.x2 > i.lineCoordinates.x2 ? this.axisX.lineCoordinates.x2 : i.lineCoordinates.x2,
        t.y2 = this.axisX.lineCoordinates.y2 > this.axisX.lineCoordinates.y1 ? this.axisX.lineCoordinates.y2 : i.lineCoordinates.y2,
        t.width = t.x2 - t.x1,
        t.height = t.y2 - t.y1) : (i = this.layoutManager.getFreeSpace(),
        t.x1 = i.x1,
        t.x2 = i.x2,
        t.y1 = i.y1,
        t.y2 = i.y2,
        t.width = i.width,
        t.height = i.height);
        n || (t.canvas.width = t.width,
        t.canvas.height = t.height,
        t.canvas.style.left = t.x1 + "px",
        t.canvas.style.top = t.y1 + "px",
        (0 < t.x1 || 0 < t.y1) && t.ctx.translate(-t.x1, -t.y1))
    }
    ;
    t.prototype.getPixelCoordinatesOnPlotArea = function(n, t) {
        return {
            x: this.axisX.getPixelCoordinatesOnAxis(n).x,
            y: this.axisY.getPixelCoordinatesOnAxis(t).y
        }
    }
    ;
    t.prototype.renderIndexLabels = function() {
        var r = this.plotArea.ctx, i, v, n, f, e, a;
        for (r.textBaseline = "middle",
        i = this.plotArea,
        v = 0; v < this._indexLabels.length; v++) {
            n = this._indexLabels[v];
            r.fillStyle = b("indexLabelFontColor", n.dataPoint, n.dataSeries);
            r.font = ni("indexLabel", n.dataPoint, n.dataSeries);
            var p = this.replaceKeywordsWithValue(b("indexLabel", n.dataPoint, n.dataSeries), n.dataPoint, n.dataSeries)
              , u = r.measureText(p).width
              , t = b("indexLabelFontSize", n.dataPoint, n.dataSeries)
              , y = b("indexLabelPlacement", n.dataPoint, n.dataSeries)
              , o = b("indexLabelOrientation", n.dataPoint, n.dataSeries)
              , s = a = 0
              , h = 0
              , c = 0
              , l = 0;
            n.point.x < i.x1 || n.point.x > i.x2 || n.point.y < i.y1 || n.point.y > i.y2 || ("column" === n.chartType || "stackedColumn" === n.chartType || "stackedColumn100" === n.chartType || "bar" === n.chartType || "stackedBar" === n.chartType || "stackedBar100" === n.chartType ? (Math.abs(n.bounds.x1, n.bounds.x2),
            Math.abs(n.bounds.y1, n.bounds.y2),
            "normal" === this.plotInfo.axisPlacement ? ("outside" === y ? (s = i.y1,
            h = i.y2) : "inside" === y && (s = n.bounds.y1,
            h = n.bounds.y2),
            "horizontal" === o ? (f = n.point.x - u / 2,
            e = 0 <= n.dataPoint.y ? Math.min(Math.max(n.point.y - t / 2 - 5, s + t / 2 + 5), h - t / 2 - 5) : Math.max(Math.min(n.point.y + t / 2 + 5, h - t / 2), s + t / 2 + 5)) : "vertical" === o && (f = n.point.x,
            e = 0 <= n.dataPoint.y ? Math.min(Math.max(n.point.y - 5, s + u + 5), h) : Math.max(Math.min(n.point.y + u + 5, h - 5), s),
            a = -90)) : "xySwapped" === this.plotInfo.axisPlacement && ("outside" === y ? (c = i.x1,
            l = i.x2) : "inside" === y && (c = n.bounds.x1,
            l = n.bounds.x2),
            "horizontal" === o ? (e = n.point.y,
            f = 0 <= n.dataPoint.y ? Math.max(Math.min(n.point.x + 5, l - u), c) : Math.min(Math.max(n.point.x - u - 5, c), l)) : "vertical" === o && (e = n.point.y + u / 2,
            f = 0 <= n.dataPoint.y ? Math.max(Math.min(n.point.x + t / 2 + 5, l - t / 2), c) : Math.min(Math.max(n.point.x - t / 2 - 5, c + t / 2), l + t / 2),
            a = -90))) : "horizontal" === o ? (f = n.point.x - u / 2,
            e = 0 <= n.dataPoint.y ? Math.max(n.point.y - t / 2 - 5, i.y1 + t / 2) : Math.min(n.point.y + t / 2 + 5, i.y2 - t / 2)) : "vertical" === o && (f = n.point.x,
            e = 0 <= n.dataPoint.y ? Math.max(n.point.y - 5, i.y1 + u) : Math.min(n.point.y + u + 5, i.y2),
            a = -90),
            r.save(),
            r.translate(f, e),
            r.rotate(Math.PI / 180 * a),
            r.fillText(p, 0, 0),
            r.restore())
        }
    }
    ;
    t.prototype.renderLine = function(t) {
        var i = this.plotArea.ctx, s, l, p, w, u, h, a, k, e, c, b, r, v, y;
        if (!(0 >= t.dataSeriesIndexes.length)) {
            for (s = this._eventManager.ghostCtx,
            i.save(),
            l = this.plotArea,
            i.beginPath(),
            i.rect(l.x1, l.y1, l.width, l.height),
            i.clip(),
            l = [],
            p = 0; p < t.dataSeriesIndexes.length; p++)
                if (w = t.dataSeriesIndexes[p],
                u = this.data[w],
                i.lineWidth = u.lineThickness,
                h = u.dataPoints,
                a = u.id,
                this._eventManager.objectMap[a] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: w
                },
                a = f(a),
                s.strokeStyle = a,
                s.lineWidth = 0 < u.lineThickness ? Math.max(u.lineThickness, 4) : 0,
                a = u._colorSet[0],
                i.strokeStyle = a,
                k = !0,
                r = 0,
                i.beginPath(),
                0 < h.length) {
                    for (b = !1,
                    r = 0; r < h.length; r++)
                        (e = h[r].x.getTime ? h[r].x.getTime() : h[r].x,
                        e < t.axisX.dataInfo.viewPortMin || e > t.axisX.dataInfo.viewPortMax) || ("number" != typeof h[r].y ? (0 < r && (i.stroke(),
                        n && s.stroke()),
                        b = !0) : (e = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (e - t.axisX.conversionParameters.minimum) + .5 << 0,
                        c = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (h[r].y - t.axisY.conversionParameters.minimum) + .5 << 0,
                        v = u.dataPointIds[r],
                        this._eventManager.objectMap[v] = {
                            id: v,
                            objectType: "dataPoint",
                            dataSeriesIndex: w,
                            dataPointIndex: r,
                            x1: e,
                            y1: c
                        },
                        k || b ? (i.beginPath(),
                        i.moveTo(e, c),
                        n && (s.beginPath(),
                        s.moveTo(e, c)),
                        b = k = !1) : (i.lineTo(e, c),
                        n && s.lineTo(e, c),
                        0 == r % 500 && (i.stroke(),
                        i.beginPath(),
                        i.moveTo(e, c),
                        n && (s.stroke(),
                        s.beginPath(),
                        s.moveTo(e, c)))),
                        (0 < h[r].markerSize || 0 < u.markerSize) && (y = u.getMarkerProperties(r, e, c, i),
                        l.push(y),
                        (!u.maxWidthInX || y.size > u.maxWidthInX) && (u.maxWidthInX = y.size / (1 < t.axisX.conversionParameters.pixelPerUnit ? t.axisX.conversionParameters.pixelPerUnit - 1 : t.axisX.conversionParameters.pixelPerUnit)),
                        v = f(v),
                        n && l.push({
                            x: e,
                            y: c,
                            ctx: s,
                            type: y.type,
                            size: y.size,
                            color: v,
                            borderColor: v,
                            borderThickness: y.borderThickness
                        })),
                        (h[r].indexLabel || u.indexLabel) && this._indexLabels.push({
                            chartType: "line",
                            dataPoint: h[r],
                            dataSeries: u,
                            point: {
                                x: e,
                                y: c
                            },
                            color: a
                        })));
                    i.stroke();
                    n && s.stroke()
                }
            o.drawMarkers(l);
            i.restore();
            i.beginPath();
            n && s.beginPath()
        }
    }
    ;
    t.prototype.renderStepLine = function(t) {
        var i = this.plotArea.ctx, s, l, p, w, e, c, v, k, u, h, b, r, a, y;
        if (!(0 >= t.dataSeriesIndexes.length)) {
            for (s = this._eventManager.ghostCtx,
            i.save(),
            l = this.plotArea,
            i.beginPath(),
            i.rect(l.x1, l.y1, l.width, l.height),
            i.clip(),
            l = [],
            p = 0; p < t.dataSeriesIndexes.length; p++)
                if (w = t.dataSeriesIndexes[p],
                e = this.data[w],
                i.lineWidth = e.lineThickness,
                c = e.dataPoints,
                v = e.id,
                this._eventManager.objectMap[v] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: w
                },
                v = f(v),
                s.strokeStyle = v,
                s.lineWidth = 0 < e.lineThickness ? Math.max(e.lineThickness, 4) : 0,
                v = e._colorSet[0],
                i.strokeStyle = v,
                k = !0,
                r = 0,
                i.beginPath(),
                0 < c.length) {
                    for (b = !1,
                    r = 0; r < c.length; r++)
                        (u = c[r].getTime ? c[r].x.getTime() : c[r].x,
                        u < t.axisX.dataInfo.viewPortMin || u > t.axisX.dataInfo.viewPortMax) || ("number" != typeof c[r].y ? (0 < r && (i.stroke(),
                        n && s.stroke()),
                        b = !0) : (a = h,
                        u = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (u - t.axisX.conversionParameters.minimum) + .5 << 0,
                        h = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (c[r].y - t.axisY.conversionParameters.minimum) + .5 << 0,
                        y = e.dataPointIds[r],
                        this._eventManager.objectMap[y] = {
                            id: y,
                            objectType: "dataPoint",
                            dataSeriesIndex: w,
                            dataPointIndex: r,
                            x1: u,
                            y1: h
                        },
                        k || b ? (i.beginPath(),
                        i.moveTo(u, h),
                        n && (s.beginPath(),
                        s.moveTo(u, h)),
                        b = k = !1) : (i.lineTo(u, a),
                        n && s.lineTo(u, a),
                        i.lineTo(u, h),
                        n && s.lineTo(u, h),
                        0 == r % 500 && (i.stroke(),
                        i.beginPath(),
                        i.moveTo(u, h),
                        n && (s.stroke(),
                        s.beginPath(),
                        s.moveTo(u, h)))),
                        (0 < c[r].markerSize || 0 < e.markerSize) && (a = e.getMarkerProperties(r, u, h, i),
                        l.push(a),
                        (!e.maxWidthInX || a.size > e.maxWidthInX) && (e.maxWidthInX = a.size / (1 < t.axisX.conversionParameters.pixelPerUnit ? t.axisX.conversionParameters.pixelPerUnit - 1 : t.axisX.conversionParameters.pixelPerUnit)),
                        y = f(y),
                        n && l.push({
                            x: u,
                            y: h,
                            ctx: s,
                            type: a.type,
                            size: a.size,
                            color: y,
                            borderColor: y,
                            borderThickness: a.borderThickness
                        })),
                        (c[r].indexLabel || e.indexLabel) && this._indexLabels.push({
                            chartType: "stepLine",
                            dataPoint: c[r],
                            dataSeries: e,
                            point: {
                                x: u,
                                y: h
                            },
                            color: v
                        })));
                    i.stroke();
                    n && s.stroke()
                }
            o.drawMarkers(l);
            i.restore();
            i.beginPath();
            n && s.beginPath()
        }
    }
    ;
    t.prototype.renderSpline = function(t) {
        function k(t) {
            if (t = ti(t, 2),
            0 < t.length) {
                i.beginPath();
                n && e.beginPath();
                i.moveTo(t[0].x, t[0].y);
                n && e.moveTo(t[0].x, t[0].y);
                for (var r = 0; r < t.length - 3; r += 3)
                    i.bezierCurveTo(t[r + 1].x, t[r + 1].y, t[r + 2].x, t[r + 2].y, t[r + 3].x, t[r + 3].y),
                    n && e.bezierCurveTo(t[r + 1].x, t[r + 1].y, t[r + 2].x, t[r + 2].y, t[r + 3].x, t[r + 3].y),
                    0 < r && 0 == r % 3e3 && (i.stroke(),
                    i.beginPath(),
                    i.moveTo(t[r + 3].x, t[r + 3].y),
                    n && (e.stroke(),
                    e.beginPath(),
                    e.moveTo(t[r + 3].x, t[r + 3].y)));
                i.stroke();
                n && e.stroke()
            }
        }
        var i = this.plotArea.ctx, e, h, w, b, u, s, l, r, c, y, p, a, v;
        if (!(0 >= t.dataSeriesIndexes.length)) {
            for (e = this._eventManager.ghostCtx,
            i.save(),
            h = this.plotArea,
            i.beginPath(),
            i.rect(h.x1, h.y1, h.width, h.height),
            i.clip(),
            h = [],
            w = 0; w < t.dataSeriesIndexes.length; w++) {
                if (b = t.dataSeriesIndexes[w],
                u = this.data[b],
                i.lineWidth = u.lineThickness,
                s = u.dataPoints,
                l = u.id,
                this._eventManager.objectMap[l] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: b
                },
                l = f(l),
                e.strokeStyle = l,
                e.lineWidth = 0 < u.lineThickness ? Math.max(u.lineThickness, 4) : 0,
                l = u._colorSet[0],
                i.strokeStyle = l,
                r = 0,
                p = [],
                i.beginPath(),
                0 < s.length)
                    for (r = 0; r < s.length; r++)
                        (c = s[r].getTime ? s[r].x.getTime() : s[r].x,
                        c < t.axisX.dataInfo.viewPortMin || c > t.axisX.dataInfo.viewPortMax) || ("number" != typeof s[r].y ? 0 < r && (k(p),
                        p = []) : (c = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (c - t.axisX.conversionParameters.minimum) + .5 << 0,
                        y = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (s[r].y - t.axisY.conversionParameters.minimum) + .5 << 0,
                        a = u.dataPointIds[r],
                        this._eventManager.objectMap[a] = {
                            id: a,
                            objectType: "dataPoint",
                            dataSeriesIndex: b,
                            dataPointIndex: r,
                            x1: c,
                            y1: y
                        },
                        p[p.length] = {
                            x: c,
                            y: y
                        },
                        (0 < s[r].markerSize || 0 < u.markerSize) && (v = u.getMarkerProperties(r, c, y, i),
                        h.push(v),
                        (!u.maxWidthInX || v.size > u.maxWidthInX) && (u.maxWidthInX = v.size / (1 < t.axisX.conversionParameters.pixelPerUnit ? t.axisX.conversionParameters.pixelPerUnit - 1 : t.axisX.conversionParameters.pixelPerUnit)),
                        a = f(a),
                        n && h.push({
                            x: c,
                            y: y,
                            ctx: e,
                            type: v.type,
                            size: v.size,
                            color: a,
                            borderColor: a,
                            borderThickness: v.borderThickness
                        })),
                        (s[r].indexLabel || u.indexLabel) && this._indexLabels.push({
                            chartType: "spline",
                            dataPoint: s[r],
                            dataSeries: u,
                            point: {
                                x: c,
                                y: y
                            },
                            color: l
                        })));
                k(p)
            }
            o.drawMarkers(h);
            i.restore();
            i.beginPath();
            n && e.beginPath()
        }
    }
    ;
    c = function(n, t, i, r, u, f, e, o, s, h) {
        var c = 15 < r - t && 15 < u - i ? 8 : .35 * Math.min(r - t, u - i);
        n.beginPath();
        n.moveTo(t, i);
        n.save();
        n.fillStyle = f;
        n.fillRect(t, i, r - t, u - i);
        n.restore();
        !0 === e && (n.save(),
        n.beginPath(),
        n.moveTo(t, i),
        n.lineTo(t + c, i + c),
        n.lineTo(r - c, i + c),
        n.lineTo(r, i),
        n.closePath(),
        e = n.createLinearGradient((r + t) / 2, i + c, (r + t) / 2, i),
        e.addColorStop(0, f),
        e.addColorStop(1, "rgba(255, 255, 255, .4)"),
        n.fillStyle = e,
        n.fill(),
        n.restore());
        !0 === o && (n.save(),
        n.beginPath(),
        n.moveTo(t, u),
        n.lineTo(t + c, u - c),
        n.lineTo(r - c, u - c),
        n.lineTo(r, u),
        n.closePath(),
        e = n.createLinearGradient((r + t) / 2, u - c, (r + t) / 2, u),
        e.addColorStop(0, f),
        e.addColorStop(1, "rgba(255, 255, 255, .4)"),
        n.fillStyle = e,
        n.fill(),
        n.restore());
        !0 === s && (n.save(),
        n.beginPath(),
        n.moveTo(t, i),
        n.lineTo(t + c, i + c),
        n.lineTo(t + c, u - c),
        n.lineTo(t, u),
        n.closePath(),
        e = n.createLinearGradient(t + c, (u + i) / 2, t, (u + i) / 2),
        e.addColorStop(0, f),
        e.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
        n.fillStyle = e,
        n.fill(),
        n.restore());
        !0 === h && (n.save(),
        n.beginPath(),
        n.moveTo(r, i),
        n.lineTo(r - c, i + c),
        n.lineTo(r - c, u - c),
        n.lineTo(r, u),
        e = n.createLinearGradient(r - c, (u + i) / 2, r, (u + i) / 2),
        e.addColorStop(0, f),
        e.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
        n.fillStyle = e,
        e.addColorStop(0, f),
        e.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
        n.fillStyle = e,
        n.fill(),
        n.closePath(),
        n.restore())
    }
    ;
    t.prototype.renderColumn = function(t) {
        var v = this.plotArea.ctx, b, i, y, o;
        if (!(0 >= t.dataSeriesIndexes.length)) {
            var l = null, u = this.plotArea, i = 0, s, e, w, k = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0, i = Math.min(.15 * this.width, .9 * (this.plotArea.width / t.plotType.totalDataSeries)) << 0, p = t.axisX.dataInfo.minDiff, h = .9 * (u.width / Math.abs(t.axisX.maximum - t.axisX.minimum) * Math.abs(p) / t.plotType.totalDataSeries) << 0;
            for (h > i ? h = i : Infinity === p ? h = i : 1 > h && (h = 1),
            v.save(),
            n && this._eventManager.ghostCtx.save(),
            v.beginPath(),
            v.rect(u.x1, u.y1, u.width, u.height),
            v.clip(),
            n && (this._eventManager.ghostCtx.rect(u.x1, u.y1, u.width, u.height),
            this._eventManager.ghostCtx.clip()),
            u = 0; u < t.dataSeriesIndexes.length; u++) {
                var p = t.dataSeriesIndexes[u]
                  , a = this.data[p]
                  , r = a.dataPoints;
                if (a.maxWidthInX = h / (1 < t.axisX.conversionParameters.pixelPerUnit ? t.axisX.conversionParameters.pixelPerUnit - 1 : t.axisX.conversionParameters.pixelPerUnit),
                0 < r.length)
                    for (b = 5 < h && a.bevelEnabled ? !0 : !1,
                    i = 0; i < r.length; i++)
                        (w = r[i].getTime ? r[i].x.getTime() : r[i].x,
                        w < t.axisX.dataInfo.viewPortMin || w > t.axisX.dataInfo.viewPortMax || "number" != typeof r[i].y) || (s = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (w - t.axisX.conversionParameters.minimum) + .5 << 0,
                        e = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (r[i].y - t.axisY.conversionParameters.minimum) + .5 << 0,
                        s = s - t.plotType.totalDataSeries * h / 2 + (t.previousDataSeriesCount + u) * h << 0,
                        y = s + h << 0,
                        0 <= r[i].y ? o = k : (o = e,
                        e = k),
                        e > o && (o = e = o),
                        l = r[i].color ? r[i].color : a._colorSet[i % a._colorSet.length],
                        c(v, s, e, y, o, l, b && 0 <= r[i].y, 0 > r[i].y && b, !1, !1),
                        l = a.dataPointIds[i],
                        this._eventManager.objectMap[l] = {
                            id: l,
                            objectType: "dataPoint",
                            dataSeriesIndex: p,
                            dataPointIndex: i,
                            x1: s,
                            y1: e,
                            x2: y,
                            y2: o
                        },
                        l = f(l),
                        n && c(this._eventManager.ghostCtx, s, e, y, o, l, !1, !1, !1, !1),
                        (r[i].indexLabel || a.indexLabel) && this._indexLabels.push({
                            chartType: "column",
                            dataPoint: r[i],
                            dataSeries: a,
                            point: {
                                x: s + (y - s) / 2,
                                y: 0 <= r[i].y ? e : o
                            },
                            bounds: {
                                x1: s,
                                y1: Math.min(e, o),
                                x2: y,
                                y2: Math.max(e, o)
                            },
                            color: l
                        }))
            }
            v.restore();
            n && this._eventManager.ghostCtx.restore()
        }
    }
    ;
    t.prototype.renderStackedColumn = function(t) {
        var v = this.plotArea.ctx, d, p, w, h, a;
        if (!(0 >= t.dataSeriesIndexes.length)) {
            var r = null, e = this.plotArea, b = [], k = [], i = 0, o, g = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0, i = .15 * this.width << 0, y = t.axisX.dataInfo.minDiff, s = .9 * (e.width / Math.abs(t.axisX.maximum - t.axisX.minimum) * Math.abs(y) / t.plotType.plotUnits.length) << 0;
            for (s > i ? s = i : Infinity === y ? s = i : 1 > s && (s = 1),
            v.save(),
            n && this._eventManager.ghostCtx.save(),
            v.beginPath(),
            v.rect(e.x1, e.y1, e.width, e.height),
            v.clip(),
            n && (this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height),
            this._eventManager.ghostCtx.clip()),
            y = 0; y < t.dataSeriesIndexes.length; y++) {
                var nt = t.dataSeriesIndexes[y]
                  , l = this.data[nt]
                  , u = l.dataPoints;
                if (l.maxWidthInX = s / (1 < t.axisX.conversionParameters.pixelPerUnit ? t.axisX.conversionParameters.pixelPerUnit - 1 : t.axisX.conversionParameters.pixelPerUnit),
                0 < u.length)
                    for (d = 5 < s && l.bevelEnabled ? !0 : !1,
                    v.strokeStyle = "#4572A7 ",
                    i = 0; i < u.length; i++)
                        (r = u[i].x.getTime ? u[i].x.getTime() : u[i].x,
                        r < t.axisX.dataInfo.viewPortMin || r > t.axisX.dataInfo.viewPortMax || "number" != typeof u[i].y) || (e = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (r - t.axisX.conversionParameters.minimum) + .5 << 0,
                        o = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (u[i].y - t.axisY.conversionParameters.minimum) + .5 << 0,
                        p = e - t.plotType.plotUnits.length * s / 2 + t.index * s << 0,
                        w = p + s << 0,
                        0 <= u[i].y ? (a = b[r] ? b[r] : 0,
                        o -= a,
                        h = g - a,
                        b[r] = a + (h - o)) : (a = k[r] ? k[r] : 0,
                        h = o + a,
                        o = g + a,
                        k[r] = a + (h - o)),
                        r = u[i].color ? u[i].color : l._colorSet[i % l._colorSet.length],
                        c(v, p, o, w, h, r, d && 0 <= u[i].y, 0 > u[i].y && d, !1, !1),
                        r = l.dataPointIds[i],
                        this._eventManager.objectMap[r] = {
                            id: r,
                            objectType: "dataPoint",
                            dataSeriesIndex: nt,
                            dataPointIndex: i,
                            x1: p,
                            y1: o,
                            x2: w,
                            y2: h
                        },
                        r = f(r),
                        n && c(this._eventManager.ghostCtx, p, o, w, h, r, !1, !1, !1, !1),
                        (u[i].indexLabel || l.indexLabel) && this._indexLabels.push({
                            chartType: "stackedColumn",
                            dataPoint: u[i],
                            dataSeries: l,
                            point: {
                                x: e,
                                y: 0 <= u[i].y ? o : h
                            },
                            bounds: {
                                x1: p,
                                y1: Math.min(o, h),
                                x2: w,
                                y2: Math.max(o, h)
                            },
                            color: r
                        }))
            }
            v.restore();
            n && this._eventManager.ghostCtx.restore()
        }
    }
    ;
    t.prototype.renderStackedColumn100 = function(t) {
        var v = this.plotArea.ctx, d, i, p, w, h, a;
        if (!(0 >= t.dataSeriesIndexes.length)) {
            var r = null, e = this.plotArea, b = [], k = [], i = 0, o, g = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0, i = .15 * this.width << 0, y = t.axisX.dataInfo.minDiff, s = .9 * (e.width / Math.abs(t.axisX.maximum - t.axisX.minimum) * Math.abs(y) / t.plotType.plotUnits.length) << 0;
            for (s > i ? s = i : Infinity === y ? s = i : 1 > s && (s = 1),
            v.save(),
            n && this._eventManager.ghostCtx.save(),
            v.beginPath(),
            v.rect(e.x1, e.y1, e.width, e.height),
            v.clip(),
            n && (this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height),
            this._eventManager.ghostCtx.clip()),
            y = 0; y < t.dataSeriesIndexes.length; y++) {
                var nt = t.dataSeriesIndexes[y]
                  , l = this.data[nt]
                  , u = l.dataPoints;
                if (l.maxWidthInX = s / (1 < t.axisX.conversionParameters.pixelPerUnit ? t.axisX.conversionParameters.pixelPerUnit - 1 : t.axisX.conversionParameters.pixelPerUnit),
                0 < u.length)
                    for (d = 5 < s && l.bevelEnabled ? !0 : !1,
                    i = 0; i < u.length; i++)
                        (r = u[i].x.getTime ? u[i].x.getTime() : u[i].x,
                        r < t.axisX.dataInfo.viewPortMin || r > t.axisX.dataInfo.viewPortMax || "number" != typeof u[i].y) || (e = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (r - t.axisX.conversionParameters.minimum) + .5 << 0,
                        o = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * ((0 !== t.dataPointYSums[r] ? 100 * (u[i].y / t.dataPointYSums[r]) : 0) - t.axisY.conversionParameters.minimum) + .5 << 0,
                        p = e - t.plotType.plotUnits.length * s / 2 + t.index * s << 0,
                        w = p + s << 0,
                        0 <= u[i].y ? (a = b[r] ? b[r] : 0,
                        o -= a,
                        h = g - a,
                        b[r] = a + (h - o)) : (a = k[r] ? k[r] : 0,
                        h = o + a,
                        o = g + a,
                        k[r] = a + (h - o)),
                        r = u[i].color ? u[i].color : l._colorSet[i % l._colorSet.length],
                        c(v, p, o, w, h, r, d && 0 <= u[i].y, 0 > u[i].y && d, !1, !1),
                        r = l.dataPointIds[i],
                        this._eventManager.objectMap[r] = {
                            id: r,
                            objectType: "dataPoint",
                            dataSeriesIndex: nt,
                            dataPointIndex: i,
                            x1: p,
                            y1: o,
                            x2: w,
                            y2: h
                        },
                        r = f(r),
                        n && c(this._eventManager.ghostCtx, p, o, w, h, r, !1, !1, !1, !1),
                        (u[i].indexLabel || l.indexLabel) && this._indexLabels.push({
                            chartType: "stackedColumn100",
                            dataPoint: u[i],
                            dataSeries: l,
                            point: {
                                x: e,
                                y: 0 <= u[i].y ? o : h
                            },
                            bounds: {
                                x1: p,
                                y1: Math.min(o, h),
                                x2: w,
                                y2: Math.max(o, h)
                            },
                            color: r
                        }))
            }
            v.restore();
            n && this._eventManager.ghostCtx.restore()
        }
    }
    ;
    t.prototype.renderBar = function(t) {
        var a = this.plotArea.ctx, k, y, l;
        if (!(0 >= t.dataSeriesIndexes.length)) {
            var s = null, r = this.plotArea, i = 0, h, e, w, b = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0, i = Math.min(.15 * this.height, .9 * (this.plotArea.height / t.plotType.totalDataSeries)) << 0, p = t.axisX.dataInfo.minDiff, o = .9 * (r.height / Math.abs(t.axisX.maximum - t.axisX.minimum) * Math.abs(p) / t.plotType.totalDataSeries) << 0;
            for (o > i ? o = i : Infinity === p ? o = i : 1 > o && (o = 1),
            a.save(),
            n && this._eventManager.ghostCtx.save(),
            a.beginPath(),
            a.rect(r.x1, r.y1, r.width, r.height),
            a.clip(),
            n && (this._eventManager.ghostCtx.rect(r.x1, r.y1, r.width, r.height),
            this._eventManager.ghostCtx.clip()),
            r = 0; r < t.dataSeriesIndexes.length; r++) {
                var p = t.dataSeriesIndexes[r]
                  , v = this.data[p]
                  , u = v.dataPoints;
                if (v.maxWidthInX = o / (1 < t.axisX.conversionParameters.pixelPerUnit ? t.axisX.conversionParameters.pixelPerUnit - 1 : t.axisX.conversionParameters.pixelPerUnit),
                0 < u.length)
                    for (k = 5 < o && v.bevelEnabled ? !0 : !1,
                    a.strokeStyle = "#4572A7 ",
                    i = 0; i < u.length; i++)
                        (w = u[i].getTime ? u[i].x.getTime() : u[i].x,
                        w < t.axisX.dataInfo.viewPortMin || w > t.axisX.dataInfo.viewPortMax || "number" != typeof u[i].y) || (e = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (w - t.axisX.conversionParameters.minimum) + .5 << 0,
                        h = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (u[i].y - t.axisY.conversionParameters.minimum) + .5 << 0,
                        e = e - t.plotType.totalDataSeries * o / 2 + (t.previousDataSeriesCount + r) * o << 0,
                        y = e + o << 0,
                        0 <= u[i].y ? l = b : (l = h,
                        h = b),
                        s = u[i].color ? u[i].color : v._colorSet[i % v._colorSet.length],
                        c(a, l, e, h, y, s, k, !1, !1, !1),
                        s = v.dataPointIds[i],
                        this._eventManager.objectMap[s] = {
                            id: s,
                            objectType: "dataPoint",
                            dataSeriesIndex: p,
                            dataPointIndex: i,
                            x1: l,
                            y1: e,
                            x2: h,
                            y2: y
                        },
                        s = f(s),
                        n && c(this._eventManager.ghostCtx, l, e, h, y, s, !1, !1, !1, !1),
                        this._indexLabels.push({
                            chartType: "bar",
                            dataPoint: u[i],
                            dataSeries: v,
                            point: {
                                x: 0 <= u[i].y ? h : l,
                                y: e + (y - e) / 2
                            },
                            bounds: {
                                x1: Math.min(l, h),
                                y1: e,
                                x2: Math.max(l, h),
                                y2: y
                            },
                            color: s
                        }))
            }
            a.restore();
            n && this._eventManager.ghostCtx.restore()
        }
    }
    ;
    t.prototype.renderStackedBar = function(t) {
        var a = this.plotArea.ctx, nt, p, w, h, l;
        if (!(0 >= t.dataSeriesIndexes.length)) {
            var r = null, u = this.plotArea, b = [], k = [], i = 0, e, d = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0, i = .15 * this.width << 0, y = t.axisX.dataInfo.minDiff, s = .9 * (u.height / Math.abs(t.axisX.maximum - t.axisX.minimum) * Math.abs(y) / t.plotType.plotUnits.length) << 0;
            for (s > i ? s = i : Infinity === y ? s = i : 1 > s && (s = 1),
            a.save(),
            n && this._eventManager.ghostCtx.save(),
            a.beginPath(),
            a.rect(u.x1, u.y1, u.width, u.height),
            a.clip(),
            n && (this._eventManager.ghostCtx.rect(u.x1, u.y1, u.width, u.height),
            this._eventManager.ghostCtx.clip()),
            y = 0; y < t.dataSeriesIndexes.length; y++) {
                var g = t.dataSeriesIndexes[y]
                  , v = this.data[g]
                  , o = v.dataPoints;
                if (v.maxWidthInX = s / (1 < t.axisX.conversionParameters.pixelPerUnit ? t.axisX.conversionParameters.pixelPerUnit - 1 : t.axisX.conversionParameters.pixelPerUnit),
                0 < o.length)
                    for (nt = 5 < s && v.bevelEnabled ? !0 : !1,
                    a.strokeStyle = "#4572A7 ",
                    i = 0; i < o.length; i++)
                        (r = o[i].x.getTime ? o[i].x.getTime() : o[i].x,
                        r < t.axisX.dataInfo.viewPortMin || r > t.axisX.dataInfo.viewPortMax || "number" != typeof o[i].y) || (u = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (r - t.axisX.conversionParameters.minimum) + .5 << 0,
                        e = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (o[i].y - t.axisY.conversionParameters.minimum) + .5 << 0,
                        p = u - t.plotType.plotUnits.length * s / 2 + t.index * s << 0,
                        w = p + s << 0,
                        0 <= o[i].y ? (l = b[r] ? b[r] : 0,
                        h = d + l,
                        e += l,
                        b[r] = l + (e - h)) : (l = k[r] ? k[r] : 0,
                        h = e - l,
                        e = d - l,
                        k[r] = l + (e - h)),
                        r = o[i].color ? o[i].color : v._colorSet[i % v._colorSet.length],
                        c(a, h, p, e, w, r, nt, !1, !1, !1),
                        r = v.dataPointIds[i],
                        this._eventManager.objectMap[r] = {
                            id: r,
                            objectType: "dataPoint",
                            dataSeriesIndex: g,
                            dataPointIndex: i,
                            x1: h,
                            y1: p,
                            x2: e,
                            y2: w
                        },
                        r = f(r),
                        n && c(this._eventManager.ghostCtx, h, p, e, w, r, !1, !1, !1, !1),
                        this._indexLabels.push({
                            chartType: "stackedBar",
                            dataPoint: o[i],
                            dataSeries: v,
                            point: {
                                x: 0 <= o[i].y ? e : h,
                                y: u
                            },
                            bounds: {
                                x1: Math.min(h, e),
                                y1: p,
                                x2: Math.max(h, e),
                                y2: w
                            },
                            color: r
                        }))
            }
            a.restore();
            n && this._eventManager.ghostCtx.restore()
        }
    }
    ;
    t.prototype.renderStackedBar100 = function(t) {
        var a = this.plotArea.ctx, nt, p, w, h, l;
        if (!(0 >= t.dataSeriesIndexes.length)) {
            var i = null, u = this.plotArea, b = [], k = [], r = 0, e, d = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0, r = .15 * this.width << 0, y = t.axisX.dataInfo.minDiff, s = .9 * (u.height / Math.abs(t.axisX.maximum - t.axisX.minimum) * Math.abs(y) / t.plotType.plotUnits.length) << 0;
            for (s > r ? s = r : Infinity === y ? s = r : 1 > s && (s = 1),
            a.save(),
            n && this._eventManager.ghostCtx.save(),
            a.beginPath(),
            a.rect(u.x1, u.y1, u.width, u.height),
            a.clip(),
            n && (this._eventManager.ghostCtx.rect(u.x1, u.y1, u.width, u.height),
            this._eventManager.ghostCtx.clip()),
            y = 0; y < t.dataSeriesIndexes.length; y++) {
                var g = t.dataSeriesIndexes[y]
                  , v = this.data[g]
                  , o = v.dataPoints;
                if (v.maxWidthInX = s / (1 < t.axisX.conversionParameters.pixelPerUnit ? t.axisX.conversionParameters.pixelPerUnit - 1 : t.axisX.conversionParameters.pixelPerUnit),
                0 < o.length)
                    for (nt = 5 < s && v.bevelEnabled ? !0 : !1,
                    a.strokeStyle = "#4572A7 ",
                    r = 0; r < o.length; r++)
                        (i = o[r].x.getTime ? o[r].x.getTime() : o[r].x,
                        i < t.axisX.dataInfo.viewPortMin || i > t.axisX.dataInfo.viewPortMax || "number" != typeof o[r].y) || (u = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (i - t.axisX.conversionParameters.minimum) + .5 << 0,
                        e = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * ((0 !== t.dataPointYSums[i] ? 100 * (o[r].y / t.dataPointYSums[i]) : 0) - t.axisY.conversionParameters.minimum) + .5 << 0,
                        p = u - t.plotType.plotUnits.length * s / 2 + t.index * s << 0,
                        w = p + s << 0,
                        0 <= o[r].y ? (l = b[i] ? b[i] : 0,
                        h = d + l,
                        e += l,
                        b[i] = l + (e - h)) : (l = k[i] ? k[i] : 0,
                        h = e - l,
                        e = d - l,
                        k[i] = l + (e - h)),
                        i = o[r].color ? o[r].color : v._colorSet[r % v._colorSet.length],
                        c(a, h, p, e, w, i, nt, !1, !1, !1),
                        i = v.dataPointIds[r],
                        this._eventManager.objectMap[i] = {
                            id: i,
                            objectType: "dataPoint",
                            dataSeriesIndex: g,
                            dataPointIndex: r,
                            x1: h,
                            y1: p,
                            x2: e,
                            y2: w
                        },
                        i = f(i),
                        n && c(this._eventManager.ghostCtx, h, p, e, w, i, !1, !1, !1, !1),
                        this._indexLabels.push({
                            chartType: "stackedBar100",
                            dataPoint: o[r],
                            dataSeries: v,
                            point: {
                                x: 0 <= o[r].y ? e : h,
                                y: u
                            },
                            bounds: {
                                x1: Math.min(h, e),
                                y1: p,
                                x2: Math.max(h, e),
                                y2: w
                            },
                            color: i
                        }))
            }
            a.restore();
            n && this._eventManager.ghostCtx.restore()
        }
    }
    ;
    t.prototype.renderArea = function(t) {
        function k() {
            w && (0 >= t.axisY.minimum && 0 <= t.axisY.maximum ? y = rt : 0 > t.axisY.maximum ? y = it.y1 : 0 < t.axisY.minimum && (y = tt.y2),
            i.lineTo(e, y),
            i.lineTo(w.x, y),
            i.closePath(),
            i.fill(),
            n && (u.lineTo(e, y),
            u.lineTo(w.x, y),
            u.closePath(),
            u.fill()),
            i.beginPath(),
            i.moveTo(e, s),
            u.beginPath(),
            u.moveTo(e, s),
            w = {
                x: e,
                y: s
            })
        }
        var i = this.plotArea.ctx, g, b, p;
        if (!(0 >= t.dataSeriesIndexes.length)) {
            var u = this._eventManager.ghostCtx
              , tt = t.axisX.lineCoordinates
              , it = t.axisY.lineCoordinates
              , v = []
              , h = this.plotArea;
            for (i.save(),
            n && u.save(),
            i.beginPath(),
            i.rect(h.x1, h.y1, h.width, h.height),
            i.clip(),
            n && (u.beginPath(),
            u.rect(h.x1, h.y1, h.width, h.height),
            u.clip()),
            h = 0; h < t.dataSeriesIndexes.length; h++) {
                var d = t.dataSeriesIndexes[h]
                  , c = this.data[d]
                  , l = c.dataPoints
                  , v = c.id;
                this._eventManager.objectMap[v] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: d
                };
                v = f(v);
                u.fillStyle = v;
                var v = [], nt = !0, r = 0, e, s, a, rt = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) + .5 << 0, y, w = null;
                if (0 < l.length) {
                    for (g = c._colorSet[r % c._colorSet.length],
                    i.fillStyle = g,
                    b = !0; r < l.length; r++)
                        (a = l[r].x.getTime ? l[r].x.getTime() : l[r].x,
                        a < t.axisX.dataInfo.viewPortMin || a > t.axisX.dataInfo.viewPortMax) || ("number" != typeof l[r].y ? (k(),
                        b = !0) : (e = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (a - t.axisX.conversionParameters.minimum) + .5 << 0,
                        s = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (l[r].y - t.axisY.conversionParameters.minimum) + .5 << 0,
                        nt || b ? (i.beginPath(),
                        i.moveTo(e, s),
                        w = {
                            x: e,
                            y: s
                        },
                        n && (u.beginPath(),
                        u.moveTo(e, s)),
                        b = nt = !1) : (i.lineTo(e, s),
                        n && u.lineTo(e, s),
                        0 == r % 250 && k()),
                        p = c.dataPointIds[r],
                        this._eventManager.objectMap[p] = {
                            id: p,
                            objectType: "dataPoint",
                            dataSeriesIndex: d,
                            dataPointIndex: r,
                            x1: e,
                            y1: s
                        },
                        0 !== l[r].markerSize && (0 < l[r].markerSize || 0 < c.markerSize) && (a = c.getMarkerProperties(r, e, s, i),
                        v.push(a),
                        (!c.maxWidthInX || a.size > c.maxWidthInX) && (c.maxWidthInX = a.size / (1 < t.axisX.conversionParameters.pixelPerUnit ? t.axisX.conversionParameters.pixelPerUnit - 1 : t.axisX.conversionParameters.pixelPerUnit)),
                        p = f(p),
                        n && v.push({
                            x: e,
                            y: s,
                            ctx: u,
                            type: a.type,
                            size: a.size,
                            color: p,
                            borderColor: p,
                            borderThickness: a.borderThickness
                        })),
                        (l[r].indexLabel || c.indexLabel) && this._indexLabels.push({
                            chartType: "area",
                            dataPoint: l[r],
                            dataSeries: c,
                            point: {
                                x: e,
                                y: s
                            },
                            color: g
                        })));
                    k();
                    o.drawMarkers(v)
                }
            }
            i.restore();
            n && this._eventManager.ghostCtx.restore()
        }
    }
    ;
    t.prototype.renderSplineArea = function(t) {
        function d() {
            var i = ti(w, 2), f;
            if (0 < i.length) {
                for (r.beginPath(),
                r.moveTo(i[0].x, i[0].y),
                n && (u.beginPath(),
                u.moveTo(i[0].x, i[0].y)),
                f = 0; f < i.length - 3; f += 3)
                    r.bezierCurveTo(i[f + 1].x, i[f + 1].y, i[f + 2].x, i[f + 2].y, i[f + 3].x, i[f + 3].y),
                    n && u.bezierCurveTo(i[f + 1].x, i[f + 1].y, i[f + 2].x, i[f + 2].y, i[f + 3].x, i[f + 3].y);
                0 >= t.axisY.minimum && 0 <= t.axisY.maximum ? a = tt : 0 > t.axisY.maximum ? a = nt.y1 : 0 < t.axisY.minimum && (a = g.y2);
                k = {
                    x: i[0].x,
                    y: i[0].y
                };
                r.lineTo(i[i.length - 1].x, a);
                r.lineTo(k.x, a);
                r.closePath();
                r.fill();
                n && (u.lineTo(i[i.length - 1].x, a),
                u.lineTo(k.x, a),
                u.closePath(),
                u.fill())
            }
        }
        var r = this.plotArea.ctx, v, y;
        if (!(0 >= t.dataSeriesIndexes.length)) {
            var u = this._eventManager.ghostCtx
              , g = t.axisX.lineCoordinates
              , nt = t.axisY.lineCoordinates
              , l = []
              , e = this.plotArea;
            for (r.save(),
            n && u.save(),
            r.beginPath(),
            r.rect(e.x1, e.y1, e.width, e.height),
            r.clip(),
            n && (u.beginPath(),
            u.rect(e.x1, e.y1, e.width, e.height),
            u.clip()),
            e = 0; e < t.dataSeriesIndexes.length; e++) {
                var b = t.dataSeriesIndexes[e]
                  , s = this.data[b]
                  , h = s.dataPoints
                  , l = s.id;
                this._eventManager.objectMap[l] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: b
                };
                l = f(l);
                u.fillStyle = l;
                var l = [], i = 0, c, p, tt = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) + .5 << 0, a, k = null, w = [];
                if (0 < h.length) {
                    for (color = s._colorSet[i % s._colorSet.length],
                    r.fillStyle = color; i < h.length; i++)
                        (c = h[i].x.getTime ? h[i].x.getTime() : h[i].x,
                        c < t.axisX.dataInfo.viewPortMin || c > t.axisX.dataInfo.viewPortMax) || ("number" != typeof h[i].y ? 0 < i && (d(),
                        w = []) : (c = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (c - t.axisX.conversionParameters.minimum) + .5 << 0,
                        p = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (h[i].y - t.axisY.conversionParameters.minimum) + .5 << 0,
                        v = s.dataPointIds[i],
                        this._eventManager.objectMap[v] = {
                            id: v,
                            objectType: "dataPoint",
                            dataSeriesIndex: b,
                            dataPointIndex: i,
                            x1: c,
                            y1: p
                        },
                        w[w.length] = {
                            x: c,
                            y: p
                        },
                        0 !== h[i].markerSize && (0 < h[i].markerSize || 0 < s.markerSize) && (y = s.getMarkerProperties(i, c, p, r),
                        l.push(y),
                        (!s.maxWidthInX || y.size > s.maxWidthInX) && (s.maxWidthInX = y.size / (1 < t.axisX.conversionParameters.pixelPerUnit ? t.axisX.conversionParameters.pixelPerUnit - 1 : t.axisX.conversionParameters.pixelPerUnit)),
                        v = f(v),
                        n && l.push({
                            x: c,
                            y: p,
                            ctx: u,
                            type: y.type,
                            size: y.size,
                            color: v,
                            borderColor: v,
                            borderThickness: y.borderThickness
                        })),
                        (h[i].indexLabel || s.indexLabel) && this._indexLabels.push({
                            chartType: "splineArea",
                            dataPoint: h[i],
                            dataSeries: s,
                            point: {
                                x: c,
                                y: p
                            },
                            color: color
                        })));
                    d();
                    o.drawMarkers(l)
                }
            }
            r.restore();
            n && this._eventManager.ghostCtx.restore()
        }
    }
    ;
    t.prototype.renderStepArea = function(t) {
        function g() {
            w && (0 >= t.axisY.minimum && 0 <= t.axisY.maximum ? h = rt : 0 > t.axisY.maximum ? h = tt.y1 : 0 < t.axisY.minimum && (h = nt.y2),
            i.lineTo(u, h),
            i.lineTo(w.x, h),
            i.closePath(),
            i.fill(),
            n && (r.lineTo(u, h),
            r.lineTo(w.x, h),
            r.closePath(),
            r.fill()),
            i.beginPath(),
            i.moveTo(u, e),
            r.beginPath(),
            r.moveTo(u, e),
            w = {
                x: u,
                y: e
            })
        }
        var i = this.plotArea.ctx, d, y;
        if (!(0 >= t.dataSeriesIndexes.length)) {
            var r = this._eventManager.ghostCtx
              , nt = t.axisX.lineCoordinates
              , tt = t.axisY.lineCoordinates
              , p = []
              , c = this.plotArea;
            for (i.save(),
            n && r.save(),
            i.beginPath(),
            i.rect(c.x1, c.y1, c.width, c.height),
            i.clip(),
            n && (r.beginPath(),
            r.rect(c.x1, c.y1, c.width, c.height),
            r.clip()),
            c = 0; c < t.dataSeriesIndexes.length; c++) {
                var b = t.dataSeriesIndexes[c]
                  , l = this.data[b]
                  , a = l.dataPoints
                  , p = l.id;
                this._eventManager.objectMap[p] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: b
                };
                p = f(p);
                r.fillStyle = p;
                var p = [], it = !0, s = 0, u, e, v, rt = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) + .5 << 0, h, w = null, k = !1;
                if (0 < a.length) {
                    for (d = l._colorSet[s % l._colorSet.length],
                    i.fillStyle = d; s < a.length; s++)
                        (v = a[s].x.getTime ? a[s].x.getTime() : a[s].x,
                        v < t.axisX.dataInfo.viewPortMin || v > t.axisX.dataInfo.viewPortMax) || (y = e,
                        "number" != typeof a[s].y ? (g(),
                        k = !0) : (u = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (v - t.axisX.conversionParameters.minimum) + .5 << 0,
                        e = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (a[s].y - t.axisY.conversionParameters.minimum) + .5 << 0,
                        it || k ? (i.beginPath(),
                        i.moveTo(u, e),
                        w = {
                            x: u,
                            y: e
                        },
                        n && (r.beginPath(),
                        r.moveTo(u, e)),
                        k = it = !1) : (i.lineTo(u, y),
                        n && r.lineTo(u, y),
                        i.lineTo(u, e),
                        n && r.lineTo(u, e),
                        0 == s % 250 && (0 >= t.axisY.minimum && 0 <= t.axisY.maximum ? h = rt : 0 > t.axisY.maximum ? h = tt.y1 : 0 < t.axisY.minimum && (h = nt.y2),
                        i.lineTo(u, h),
                        i.lineTo(w.x, h),
                        i.closePath(),
                        i.fill(),
                        i.beginPath(),
                        i.moveTo(u, e),
                        n && (r.lineTo(u, h),
                        r.lineTo(w.x, h),
                        r.closePath(),
                        r.fill(),
                        r.beginPath(),
                        r.moveTo(u, e)),
                        w = {
                            x: u,
                            y: e
                        })),
                        y = l.dataPointIds[s],
                        this._eventManager.objectMap[y] = {
                            id: y,
                            objectType: "dataPoint",
                            dataSeriesIndex: b,
                            dataPointIndex: s,
                            x1: u,
                            y1: e
                        },
                        0 !== a[s].markerSize && (0 < a[s].markerSize || 0 < l.markerSize) && (v = l.getMarkerProperties(s, u, e, i),
                        p.push(v),
                        (!l.maxWidthInX || v.size > l.maxWidthInX) && (l.maxWidthInX = v.size / (1 < t.axisX.conversionParameters.pixelPerUnit ? t.axisX.conversionParameters.pixelPerUnit - 1 : t.axisX.conversionParameters.pixelPerUnit)),
                        y = f(y),
                        n && p.push({
                            x: u,
                            y: e,
                            ctx: r,
                            type: v.type,
                            size: v.size,
                            color: y,
                            borderColor: y,
                            borderThickness: v.borderThickness
                        })),
                        (a[s].indexLabel || l.indexLabel) && this._indexLabels.push({
                            chartType: "stepArea",
                            dataPoint: a[s],
                            dataSeries: l,
                            point: {
                                x: u,
                                y: e
                            },
                            color: d
                        })));
                    g();
                    o.drawMarkers(p)
                }
            }
            i.restore();
            n && this._eventManager.ghostCtx.restore()
        }
    }
    ;
    t.prototype.renderStackedArea = function(t) {
        var e = this.plotArea.ctx, y, k, v, d;
        if (!(0 >= t.dataSeriesIndexes.length)) {
            var g = null, nt = [], h = this.plotArea, tt = [], b = [], s = 0, c, l, r, it = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0, u = this._eventManager.ghostCtx;
            for (n && u.beginPath(),
            e.save(),
            n && u.save(),
            e.beginPath(),
            e.rect(h.x1, h.y1, h.width, h.height),
            e.clip(),
            n && (u.beginPath(),
            u.rect(h.x1, h.y1, h.width, h.height),
            u.clip()),
            xValuePresent = [],
            h = 0; h < t.dataSeriesIndexes.length; h++) {
                var a = t.dataSeriesIndexes[h]
                  , i = this.data[a]
                  , p = i.dataPoints;
                for (i.dataPointIndexes = [],
                s = 0; s < p.length; s++)
                    a = p[s].x.getTime ? p[s].x.getTime() : p[s].x,
                    i.dataPointIndexes[a] = s,
                    xValuePresent[a] || (b.push(a),
                    xValuePresent[a] = !0);
                b.sort(dt)
            }
            for (h = 0; h < t.dataSeriesIndexes.length; h++) {
                var a = t.dataSeriesIndexes[h]
                  , i = this.data[a]
                  , p = i.dataPoints
                  , rt = !0
                  , w = []
                  , s = i.id;
                if (this._eventManager.objectMap[s] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: a
                },
                s = f(s),
                u.fillStyle = s,
                0 < b.length) {
                    for (g = i._colorSet[0],
                    e.fillStyle = g,
                    s = 0; s < b.length; s++)
                        if (r = b[s],
                        y = null,
                        y = 0 <= i.dataPointIndexes[r] ? p[i.dataPointIndexes[r]] : {
                            x: r,
                            y: 0
                        },
                        !(r < t.axisX.dataInfo.viewPortMin || r > t.axisX.dataInfo.viewPortMax) && "number" == typeof y.y) {
                            if (c = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (r - t.axisX.conversionParameters.minimum) + .5 << 0,
                            l = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (y.y - t.axisY.conversionParameters.minimum) + .5 << 0,
                            k = tt[r] ? tt[r] : 0,
                            l -= k,
                            w.push({
                                x: c,
                                y: it - k
                            }),
                            tt[r] = it - l,
                            rt)
                                e.beginPath(),
                                e.moveTo(c, l),
                                n && (u.beginPath(),
                                u.moveTo(c, l)),
                                rt = !1;
                            else if (e.lineTo(c, l),
                            n && u.lineTo(c, l),
                            0 == s % 250) {
                                for (; 0 < w.length; )
                                    v = w.pop(),
                                    e.lineTo(v.x, v.y),
                                    n && u.lineTo(v.x, v.y);
                                e.closePath();
                                e.fill();
                                e.beginPath();
                                e.moveTo(c, l);
                                n && (u.closePath(),
                                u.fill(),
                                u.beginPath(),
                                u.moveTo(c, l));
                                w.push({
                                    x: c,
                                    y: it - k
                                })
                            }
                            0 <= i.dataPointIndexes[r] && (d = i.dataPointIds[i.dataPointIndexes[r]],
                            this._eventManager.objectMap[d] = {
                                id: d,
                                objectType: "dataPoint",
                                dataSeriesIndex: a,
                                dataPointIndex: i.dataPointIndexes[r],
                                x1: c,
                                y1: l
                            });
                            0 <= i.dataPointIndexes[r] && 0 !== y.markerSize && (0 < y.markerSize || 0 < i.markerSize) && (r = i.getMarkerProperties(s, c, l, e),
                            nt.push(r),
                            (!i.maxWidthInX || r.size > i.maxWidthInX) && (i.maxWidthInX = r.size / (1 < t.axisX.conversionParameters.pixelPerUnit ? t.axisX.conversionParameters.pixelPerUnit - 1 : t.axisX.conversionParameters.pixelPerUnit)),
                            markerColor = f(d),
                            n && nt.push({
                                x: c,
                                y: l,
                                ctx: u,
                                type: r.type,
                                size: r.size,
                                color: markerColor,
                                borderColor: markerColor,
                                borderThickness: r.borderThickness
                            }));
                            (y.indexLabel || i.indexLabel) && this._indexLabels.push({
                                chartType: "stackedArea",
                                dataPoint: y,
                                dataSeries: i,
                                point: {
                                    x: c,
                                    y: l
                                },
                                color: g
                            })
                        }
                    for (; 0 < w.length; )
                        v = w.pop(),
                        e.lineTo(v.x, v.y),
                        n && u.lineTo(v.x, v.y);
                    e.closePath();
                    e.fill();
                    e.beginPath();
                    e.moveTo(c, l);
                    n && (u.closePath(),
                    u.fill(),
                    u.beginPath(),
                    u.moveTo(c, l))
                }
                delete i.dataPointIndexes
            }
            o.drawMarkers(nt);
            e.restore();
            n && u.restore()
        }
    }
    ;
    t.prototype.renderStackedArea100 = function(t) {
        var u = this.plotArea.ctx, k, y, g, v, nt;
        if (!(0 >= t.dataSeriesIndexes.length)) {
            var p = null, s = this.plotArea, tt = [], it = [], d = [], l = 0, c, h, i, rt = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (0 - t.axisY.conversionParameters.minimum) << 0, ut = .15 * this.width << 0, w = t.axisX.dataInfo.minDiff, w = .9 * s.width / Math.abs(t.axisX.maximum - t.axisX.minimum) * Math.abs(w) << 0, e = this._eventManager.ghostCtx;
            for (u.save(),
            n && e.save(),
            u.beginPath(),
            u.rect(s.x1, s.y1, s.width, s.height),
            u.clip(),
            n && (e.beginPath(),
            e.rect(s.x1, s.y1, s.width, s.height),
            e.clip()),
            xValuePresent = [],
            s = 0; s < t.dataSeriesIndexes.length; s++) {
                var a = t.dataSeriesIndexes[s]
                  , r = this.data[a]
                  , b = r.dataPoints;
                for (r.dataPointIndexes = [],
                l = 0; l < b.length; l++)
                    a = b[l].x.getTime ? b[l].x.getTime() : b[l].x,
                    r.dataPointIndexes[a] = l,
                    xValuePresent[a] || (d.push(a),
                    xValuePresent[a] = !0);
                d.sort(dt)
            }
            for (s = 0; s < t.dataSeriesIndexes.length; s++) {
                var a = t.dataSeriesIndexes[s]
                  , r = this.data[a]
                  , b = r.dataPoints
                  , ft = !0
                  , p = r.id;
                if (this._eventManager.objectMap[p] = {
                    objectType: "dataSeries",
                    dataSeriesIndex: a
                },
                p = f(p),
                e.fillStyle = p,
                1 == b.length && (w = ut),
                1 > w ? w = 1 : w > ut && (w = ut),
                k = [],
                0 < d.length) {
                    for (p = r._colorSet[l % r._colorSet.length],
                    u.fillStyle = p,
                    l = 0; l < d.length; l++)
                        if (i = d[l],
                        y = null,
                        y = 0 <= r.dataPointIndexes[i] ? b[r.dataPointIndexes[i]] : {
                            x: i,
                            y: 0
                        },
                        !(i < t.axisX.dataInfo.viewPortMin || i > t.axisX.dataInfo.viewPortMax) && "number" == typeof y.y) {
                            if (h = 0 !== t.dataPointYSums[i] ? 100 * (y.y / t.dataPointYSums[i]) : 0,
                            c = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (i - t.axisX.conversionParameters.minimum) + .5 << 0,
                            h = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (h - t.axisY.conversionParameters.minimum) + .5 << 0,
                            g = it[i] ? it[i] : 0,
                            h -= g,
                            k.push({
                                x: c,
                                y: rt - g
                            }),
                            it[i] = rt - h,
                            ft)
                                u.beginPath(),
                                u.moveTo(c, h),
                                n && (e.beginPath(),
                                e.moveTo(c, h)),
                                ft = !1;
                            else if (u.lineTo(c, h),
                            n && e.lineTo(c, h),
                            0 == l % 250) {
                                for (; 0 < k.length; )
                                    v = k.pop(),
                                    u.lineTo(v.x, v.y),
                                    n && e.lineTo(v.x, v.y);
                                u.closePath();
                                u.fill();
                                u.beginPath();
                                u.moveTo(c, h);
                                n && (e.closePath(),
                                e.fill(),
                                e.beginPath(),
                                e.moveTo(c, h));
                                k.push({
                                    x: c,
                                    y: rt - g
                                })
                            }
                            0 <= r.dataPointIndexes[i] && (nt = r.dataPointIds[r.dataPointIndexes[i]],
                            this._eventManager.objectMap[nt] = {
                                id: nt,
                                objectType: "dataPoint",
                                dataSeriesIndex: a,
                                dataPointIndex: r.dataPointIndexes[i],
                                x1: c,
                                y1: h
                            });
                            0 <= r.dataPointIndexes[i] && 0 !== y.markerSize && (0 < y.markerSize || 0 < r.markerSize) && (i = r.getMarkerProperties(l, c, h, u),
                            tt.push(i),
                            (!r.maxWidthInX || i.size > r.maxWidthInX) && (r.maxWidthInX = i.size / (1 < t.axisX.conversionParameters.pixelPerUnit ? t.axisX.conversionParameters.pixelPerUnit - 1 : t.axisX.conversionParameters.pixelPerUnit)),
                            markerColor = f(nt),
                            n && tt.push({
                                x: c,
                                y: h,
                                ctx: e,
                                type: i.type,
                                size: i.size,
                                color: markerColor,
                                borderColor: markerColor,
                                borderThickness: i.borderThickness
                            }));
                            (y.indexLabel || r.indexLabel) && this._indexLabels.push({
                                chartType: "stackedArea100",
                                dataPoint: y,
                                dataSeries: r,
                                point: {
                                    x: c,
                                    y: h
                                },
                                color: p
                            })
                        }
                    for (; 0 < k.length; )
                        v = k.pop(),
                        u.lineTo(v.x, v.y),
                        n && e.lineTo(v.x, v.y);
                    u.closePath();
                    u.fill();
                    u.beginPath();
                    u.moveTo(c, h);
                    n && (e.closePath(),
                    e.fill(),
                    e.beginPath(),
                    e.moveTo(c, h))
                }
                delete r.dataPointIndexes
            }
            o.drawMarkers(tt);
            u.restore();
            n && e.restore()
        }
    }
    ;
    t.prototype.renderBubble = function(t) {
        var h = this.plotArea.ctx, c = t.dataSeriesIndexes.length, k;
        if (!(0 >= c)) {
            var e = this.plotArea, i = 0, s, p, d = .15 * this.width << 0, i = t.axisX.dataInfo.minDiff, c = .9 * (e.width / Math.abs(t.axisX.maximum - t.axisX.minimum) * Math.abs(i) / c) << 0;
            h.save();
            n && this._eventManager.ghostCtx.save();
            h.beginPath();
            h.rect(e.x1, e.y1, e.width, e.height);
            h.clip();
            n && (this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height),
            this._eventManager.ghostCtx.clip());
            for (var w = -Infinity, v = Infinity, a = 0; a < t.dataSeriesIndexes.length; a++)
                for (var b = t.dataSeriesIndexes[a], l = this.data[b], u = l.dataPoints, r = 0, i = 0; i < u.length; i++)
                    s = s = u[i].getTime ? u[i].x.getTime() : u[i].x,
                    s < t.axisX.dataInfo.viewPortMin || s > t.axisX.dataInfo.viewPortMax || "undefined" == typeof u[i].z || (r = u[i].z,
                    r > w && (w = r),
                    r < v && (v = r));
            for (var g = 25 * Math.PI, e = Math.max(Math.pow(.25 * Math.min(e.height, e.width) / 2, 2) * Math.PI, g), a = 0; a < t.dataSeriesIndexes.length; a++)
                if (b = t.dataSeriesIndexes[a],
                l = this.data[b],
                u = l.dataPoints,
                1 == u.length && (c = d),
                1 > c ? c = 1 : c > d && (c = d),
                0 < u.length)
                    for (h.strokeStyle = "#4572A7 ",
                    i = 0; i < u.length; i++)
                        if (s = s = u[i].getTime ? u[i].x.getTime() : u[i].x,
                        !(s < t.axisX.dataInfo.viewPortMin || s > t.axisX.dataInfo.viewPortMax) && "number" == typeof u[i].y) {
                            s = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (s - t.axisX.conversionParameters.minimum) + .5 << 0;
                            p = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (u[i].y - t.axisY.conversionParameters.minimum) + .5 << 0;
                            var r = u[i].z
                              , y = 2 * Math.max(Math.sqrt((w === v ? e / 2 : g + (e - g) / (w - v) * (r - v)) / Math.PI) << 0, 1)
                              , r = l.getMarkerProperties(i, h);
                            r.size = y;
                            o.drawMarker(s, p, h, r.type, r.size, r.color, r.borderColor, r.borderThickness);
                            (!l.maxWidthInX || r.size > l.maxWidthInX) && (l.maxWidthInX = r.size / (1 < t.axisX.conversionParameters.pixelPerUnit ? t.axisX.conversionParameters.pixelPerUnit - 1 : t.axisX.conversionParameters.pixelPerUnit));
                            k = l.dataPointIds[i];
                            this._eventManager.objectMap[k] = {
                                id: k,
                                objectType: "dataPoint",
                                dataSeriesIndex: b,
                                dataPointIndex: i,
                                x1: s,
                                y1: p,
                                size: y
                            };
                            y = f(k);
                            n && o.drawMarker(s, p, this._eventManager.ghostCtx, r.type, r.size, y, y, r.borderThickness)
                        }
            h.restore();
            n && this._eventManager.ghostCtx.restore()
        }
    }
    ;
    t.prototype.renderScatter = function(t) {
        var l = this.plotArea.ctx, h = t.dataSeriesIndexes.length, y, i;
        if (!(0 >= h)) {
            var u = this.plotArea, r = 0, e, a, p = .15 * this.width << 0, r = t.axisX.dataInfo.minDiff, h = .9 * (u.width / Math.abs(t.axisX.maximum - t.axisX.minimum) * Math.abs(r) / h) << 0;
            for (l.save(),
            n && this._eventManager.ghostCtx.save(),
            l.beginPath(),
            l.rect(u.x1, u.y1, u.width, u.height),
            l.clip(),
            n && (this._eventManager.ghostCtx.rect(u.x1, u.y1, u.width, u.height),
            this._eventManager.ghostCtx.clip()),
            y = 0; y < t.dataSeriesIndexes.length; y++) {
                var b = t.dataSeriesIndexes[y]
                  , v = this.data[b]
                  , c = v.dataPoints;
                if (1 == c.length && (h = p),
                1 > h ? h = 1 : h > p && (h = p),
                0 < c.length) {
                    l.strokeStyle = "#4572A7 ";
                    Math.pow(.3 * Math.min(u.height, u.width) / 2, 2);
                    for (var s = 0, w = 0, r = 0; r < c.length; r++)
                        (e = e = c[r].getTime ? c[r].x.getTime() : c[r].x,
                        e < t.axisX.dataInfo.viewPortMin || e > t.axisX.dataInfo.viewPortMax || "number" != typeof c[r].y) || (e = t.axisX.conversionParameters.reference + t.axisX.conversionParameters.pixelPerUnit * (e - t.axisX.conversionParameters.minimum) + .5 << 0,
                        a = t.axisY.conversionParameters.reference + t.axisY.conversionParameters.pixelPerUnit * (c[r].y - t.axisY.conversionParameters.minimum) + .5 << 0,
                        i = v.getMarkerProperties(r, e, a, l),
                        o.drawMarker(i.x, i.y, i.ctx, i.type, i.size, i.color, i.color, i.thickness),
                        (!v.maxWidthInX || i.size > v.maxWidthInX) && (v.maxWidthInX = i.size / (1 < t.axisX.conversionParameters.pixelPerUnit ? t.axisX.conversionParameters.pixelPerUnit - 1 : t.axisX.conversionParameters.pixelPerUnit)),
                        Math.sqrt((s - e) * (s - e) + (w - a) * (w - a)) < Math.min(i.size, 5) || (s = v.dataPointIds[r],
                        this._eventManager.objectMap[s] = {
                            id: s,
                            objectType: "dataPoint",
                            dataSeriesIndex: b,
                            dataPointIndex: r,
                            x1: e,
                            y1: a
                        },
                        s = f(s),
                        n && o.drawMarker(i.x, i.y, this._eventManager.ghostCtx, i.type, i.size, s, s, i.borderThickness),
                        s = e,
                        w = a))
                }
            }
            l.restore();
            n && this._eventManager.ghostCtx.restore()
        }
    }
    ;
    ht = function(n, t, i, r, u, f, e) {
        n.save();
        "pie" === u ? (n.beginPath(),
        n.moveTo(t.x, t.y),
        n.arc(t.x, t.y, i, f, e, !1),
        n.fillStyle = r,
        n.strokeStyle = "white",
        n.lineWidth = 2,
        n.closePath(),
        n.fill()) : "doughnut" === u && (n.beginPath(),
        n.arc(t.x, t.y, i, f, e, !1),
        n.arc(t.x, t.y, .6 * i, e, f, !0),
        n.closePath(),
        n.fillStyle = r,
        n.strokeStyle = "white",
        n.lineWidth = 2,
        n.fill());
        n.restore()
    }
    ;
    t.prototype.renderPie = function(t) {
        function k(n) {
            u.frame = 0;
            u.maxFrames = n || 1
        }
        function rt() {
            var v, u, k;
            if (r && f) {
                for (v = 0,
                u = 0; u < f.length; u++)
                    v += Math.abs(f[u].y);
                for (var y = 0, p = 0, w = 0, b = 0, u = 0; u < f.length; u++) {
                    var t = f[u]
                      , l = r.dataPointIds[u]
                      , n = {
                        id: l,
                        objectType: "dataPoint",
                        dataPointIndex: u,
                        dataSeriesIndex: 0
                    };
                    i.push(n);
                    k = t.indexLabel ? t.indexLabel : r.indexLabel ? r.indexLabel : t.label ? t.label : r.label ? r.label : "";
                    c._eventManager.objectMap[l] = n;
                    n.center = {
                        x: o.x,
                        y: o.y
                    };
                    n.y = t.y;
                    n.radius = h;
                    n.indexLabelText = c.replaceKeywordsWithValue(k, t, r, u);
                    n.indexLabelPlacement = r.indexLabelPlacement;
                    n.indexLabelLineColor = t.indexLabelLineColor ? t.indexLabelLineColor : r.indexLabelLineColor ? r.indexLabelLineColor : t.color ? t.color : r._colorSet[u % r._colorSet.length];
                    n.indexLabelLineThickness = t.indexLabelLineThickness ? t.indexLabelLineThickness : r.indexLabelLineThickness;
                    n.indexLabelFontColor = t.indexLabelFontColor ? t.indexLabelFontColor : r.indexLabelFontColor;
                    n.indexLabelFontStyle = t.indexLabelFontStyle ? t.indexLabelFontStyle : r.indexLabelFontStyle;
                    n.indexLabelFontWeight = t.indexLabelFontWeight ? t.indexLabelFontWeight : r.indexLabelFontWeight;
                    n.indexLabelFontSize = t.indexLabelFontSize ? t.indexLabelFontSize : r.indexLabelFontSize;
                    n.indexLabelFontFamily = t.indexLabelFontFamily ? t.indexLabelFontFamily : r.indexLabelFontFamily;
                    n.indexLabelBackgroundColor = t.indexLabelBackgroundColor ? t.indexLabelBackgroundColor : r.indexLabelBackgroundColor ? r.indexLabelBackgroundColor : null;
                    n.indexLabelMaxWidth = t.indexLabelMaxWidth ? t.indexLabelMaxWidth : r.indexLabelMaxWidth ? r.indexLabelMaxWidth : .33 * s.width;
                    n.indexLabelWrap = t.indexLabelWrap ? t.indexLabelWrap : r.indexLabelWrap;
                    n.startAngle = 0 === u ? r.startAngle ? r.startAngle / 180 * Math.PI : 0 : i[u - 1].endAngle;
                    n.startAngle = (n.startAngle + 2 * Math.PI) % (2 * Math.PI);
                    n.endAngle = n.startAngle + 2 * Math.PI / v * Math.abs(t.y);
                    t = (n.endAngle + n.startAngle) / 2;
                    t = (t + 2 * Math.PI) % (2 * Math.PI);
                    n.midAngle = t;
                    n.midAngle > Math.PI / 2 - a && n.midAngle < Math.PI / 2 + a ? ((0 === y || i[w].midAngle > n.midAngle) && (w = u),
                    y++) : n.midAngle > 3 * Math.PI / 2 - a && n.midAngle < 3 * Math.PI / 2 + a && ((0 === p || i[b].midAngle > n.midAngle) && (b = u),
                    p++);
                    n.hemisphere = t > Math.PI / 2 && t <= 3 * Math.PI / 2 ? "left" : "right";
                    n.indexLabelTextBlock = new e(c.plotArea.ctx,{
                        fontSize: n.indexLabelFontSize,
                        fontFamily: n.indexLabelFontFamily,
                        fontColor: n.indexLabelFontColor,
                        fontStyle: n.indexLabelFontStyle,
                        fontWeight: n.indexLabelFontWeight,
                        horizontalAlign: "left",
                        backgroundColor: n.indexLabelBackgroundColor,
                        maxWidth: n.indexLabelMaxWidth,
                        maxHeight: n.indexLabelWrap ? 5 * n.indexLabelFontSize : 1.5 * n.indexLabelFontSize,
                        text: n.indexLabelText,
                        padding: 0,
                        textBaseline: "top"
                    });
                    n.indexLabelTextBlock.measureText()
                }
                for (t = v = 0,
                l = !1,
                u = 0; u < f.length; u++)
                    n = i[(w + u) % f.length],
                    1 < y && n.midAngle > Math.PI / 2 - a && n.midAngle < Math.PI / 2 + a && (v <= y / 2 && !l ? (n.hemisphere = "right",
                    v++) : (n.hemisphere = "left",
                    l = !0));
                for (l = !1,
                u = 0; u < f.length; u++)
                    n = i[(b + u) % f.length],
                    1 < p && n.midAngle > 3 * Math.PI / 2 - a && n.midAngle < 3 * Math.PI / 2 + a && (t <= p / 2 && !l ? (n.hemisphere = "left",
                    t++) : (n.hemisphere = "right",
                    l = !0))
            }
        }
        function nt() {
            var e = c.plotArea.ctx, t, a;
            if (null !== u && u.frame < u.maxFrames) {
                for (0 === u.frame && (u.prevMaxAngle = i[0].startAngle),
                e.clearRect(s.x1, s.y1, s.width, s.height),
                e = u.prevMaxAngle + 2 * Math.PI / u.maxFrames,
                t = 0; t < f.length; t++) {
                    var h = 0 === t ? i[t].startAngle : o
                      , o = h + (i[t].endAngle - i[t].startAngle)
                      , l = !1;
                    if (o > e && (o = e,
                    l = !0),
                    a = f[t].color ? f[t].color : r._colorSet[t % r._colorSet.length],
                    o > h && ht(c.plotArea.ctx, i[t].center, i[t].radius, a, r.type, h, o),
                    l)
                        break
                }
                u.frame++;
                u.prevMaxAngle = e;
                u.frame < u.maxFrames ? c.animationRequestId = c.requestAnimFrame.call(window, nt) : (k(n ? 15 : 4),
                d())
            }
        }
        function d() {
            var n = c.plotArea.ctx, l, t;
            if (null !== u && u.frame < u.maxFrames) {
                for (n.clearRect(s.x1, s.y1, s.width, s.height),
                n = 0; n < f.length; n++)
                    if (l = i[n].startAngle,
                    t = i[n].endAngle,
                    t > l) {
                        var e = .07 * h * Math.cos(i[n].midAngle)
                          , a = .07 * h * Math.sin(i[n].midAngle)
                          , v = !1;
                        f[n].exploded ? (Math.abs(i[n].center.x - (o.x + e)) > Math.abs(.5 * e / u.maxFrames) || Math.abs(i[n].center.y - (o.y + a)) > Math.abs(.5 * a / u.maxFrames)) && (i[n].center.x += e / u.maxFrames,
                        i[n].center.y += a / u.maxFrames,
                        v = !0) : (Math.abs(i[n].center.x - o.x) > Math.abs(.5 * e / u.maxFrames) || Math.abs(i[n].center.y - o.y) > Math.abs(.5 * a / u.maxFrames)) && (i[n].center.x -= e / u.maxFrames,
                        i[n].center.y -= a / u.maxFrames,
                        v = !0);
                        v && (e = {},
                        e.dataSeries = r,
                        e.dataPoint = r.dataPoints[n],
                        e.index = n,
                        c._toolTip.highlightObjects([e]));
                        ht(c.plotArea.ctx, i[n].center, i[n].radius, f[n].color ? f[n].color : r._colorSet[n % r._colorSet.length], r.type, l, t)
                    }
                for (u.frame++,
                n = c.plotArea.ctx,
                n.fillStyle = "black",
                n.strokeStyle = "grey",
                n.textBaseline = "middle",
                n.lineJoin = "round",
                l = l = 0; l < f.length; l++)
                    t = i[l],
                    t.indexLabelText && (t.indexLabelTextBlock.y -= t.indexLabelTextBlock.height / 2,
                    e = 0,
                    e = "left" === t.hemisphere ? "outside" === r.indexLabelPlacement ? -(t.indexLabelTextBlock.width + y) : -t.indexLabelTextBlock.width / 2 : "outside" === r.indexLabelPlacement ? y : -t.indexLabelTextBlock.width / 2,
                    t.indexLabelTextBlock.x += e,
                    t.indexLabelTextBlock.render(!0),
                    t.indexLabelTextBlock.x -= e,
                    t.indexLabelTextBlock.y += t.indexLabelTextBlock.height / 2,
                    "outside" === t.indexLabelPlacement && (e = t.center.x + h * Math.cos(t.midAngle),
                    a = t.center.y + h * Math.sin(t.midAngle),
                    n.strokeStyle = t.indexLabelLineColor,
                    n.lineWidth = t.indexLabelLineThickness,
                    n.beginPath(),
                    n.moveTo(e, a),
                    n.lineTo(t.indexLabelTextBlock.x, t.indexLabelTextBlock.y),
                    n.lineTo(t.indexLabelTextBlock.x + ("left" === t.hemisphere ? -y : y), t.indexLabelTextBlock.y),
                    n.stroke()),
                    n.lineJoin = "miter");
                u.frame < u.maxFrames && (c.animationRequestId = c.requestAnimFrame.call(window, d))
            }
        }
        function ut(n, t) {
            var i = n.indexLabelTextBlock.x
              , r = n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2
              , u = n.indexLabelTextBlock.y + n.indexLabelTextBlock.height / 2
              , f = t.indexLabelTextBlock.y - t.indexLabelTextBlock.height / 2
              , e = t.indexLabelTextBlock.x + t.indexLabelTextBlock.width
              , o = t.indexLabelTextBlock.y + t.indexLabelTextBlock.height / 2;
            return n.indexLabelTextBlock.x + n.indexLabelTextBlock.width < t.indexLabelTextBlock.x - y || i > e + y || r > o + y || u < f - y ? !1 : !0
        }
        function b(n, t) {
            var i = 0
              , i = n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2
              , r = n.indexLabelTextBlock.y + n.indexLabelTextBlock.height / 2
              , u = t.indexLabelTextBlock.y - t.indexLabelTextBlock.height / 2
              , f = t.indexLabelTextBlock.y + t.indexLabelTextBlock.height / 2;
            return t.indexLabelTextBlock.y > n.indexLabelTextBlock.y ? u - r : i - f
        }
        function g(n) {
            for (var t = null, r = 1; r < f.length; r++)
                if (t = (n + r + i.length) % i.length,
                i[t].hemisphere !== i[n].hemisphere) {
                    t = null;
                    break
                } else if (i[t].indexLabelText && t !== n && (0 > b(i[t], i[n]) || ("right" === i[n].hemisphere ? i[t].indexLabelTextBlock.y >= i[n].indexLabelTextBlock.y : i[t].indexLabelTextBlock.y <= i[n].indexLabelTextBlock.y)))
                    break;
                else
                    t = null;
            return t
        }
        function p(n, t) {
            var r;
            t = t || 0;
            var k = 0
              , u = o.y - 1 * l
              , e = o.y + 1 * l;
            if (0 <= n && n < f.length) {
                if (r = i[n],
                0 > t && r.indexLabelTextBlock.y < u || 0 < t && r.indexLabelTextBlock.y > e)
                    return 0;
                var s = t
                  , y = 0
                  , c = 0
                  , c = y = y = 0;
                for (0 > s ? r.indexLabelTextBlock.y - r.indexLabelTextBlock.height / 2 > u && r.indexLabelTextBlock.y - r.indexLabelTextBlock.height / 2 + s < u && (s = -(u - (r.indexLabelTextBlock.y - r.indexLabelTextBlock.height / 2 + s))) : r.indexLabelTextBlock.y + r.indexLabelTextBlock.height / 2 < u && r.indexLabelTextBlock.y + r.indexLabelTextBlock.height / 2 + s > e && (s = r.indexLabelTextBlock.y + r.indexLabelTextBlock.height / 2 + s - e),
                s = r.indexLabelTextBlock.y + s,
                u = 0,
                u = "right" === r.hemisphere ? o.x + Math.sqrt(Math.pow(l, 2) - Math.pow(s - o.y, 2)) : o.x - Math.sqrt(Math.pow(l, 2) - Math.pow(s - o.y, 2)),
                c = o.x + h * Math.cos(r.midAngle),
                y = o.y + h * Math.sin(r.midAngle),
                y = Math.sqrt(Math.pow(u - c, 2) + Math.pow(s - y, 2)),
                c = Math.acos(h / l),
                y = Math.acos((l * l + h * h - y * y) / (2 * h * l)),
                s = y < c ? s - r.indexLabelTextBlock.y : 0,
                u = null,
                e = 1; e < f.length; e++)
                    if (u = (n - e + i.length) % i.length,
                    i[u].hemisphere !== i[n].hemisphere) {
                        u = null;
                        break
                    } else if (i[u].indexLabelText && i[u].hemisphere === i[n].hemisphere && u !== n && (0 > b(i[u], i[n]) || ("right" === i[n].hemisphere ? i[u].indexLabelTextBlock.y <= i[n].indexLabelTextBlock.y : i[u].indexLabelTextBlock.y >= i[n].indexLabelTextBlock.y)))
                        break;
                    else
                        u = null;
                c = u;
                y = g(n);
                e = u = 0;
                0 > s ? (e = "right" === r.hemisphere ? c : y,
                k = s,
                null !== e && (c = -s,
                s = r.indexLabelTextBlock.y - r.indexLabelTextBlock.height / 2 - (i[e].indexLabelTextBlock.y + i[e].indexLabelTextBlock.height / 2),
                s - c < w && (u = -c,
                tt++,
                e = p(e, u),
                +e.toFixed(v) > +u.toFixed(v) && (k = s > w ? -(s - w) : -(c - (e - u)))))) : 0 < s && (e = "right" === r.hemisphere ? y : c,
                k = s,
                null !== e && (c = s,
                s = i[e].indexLabelTextBlock.y - i[e].indexLabelTextBlock.height / 2 - (r.indexLabelTextBlock.y + r.indexLabelTextBlock.height / 2),
                s - c < w && (u = c,
                tt++,
                e = p(e, u),
                +e.toFixed(v) < +u.toFixed(v) && (k = s > w ? s - w : c - (u - e)))));
                k && (s = r.indexLabelTextBlock.y + k,
                u = 0,
                u = "right" === r.hemisphere ? o.x + Math.sqrt(Math.pow(l, 2) - Math.pow(s - o.y, 2)) : o.x - Math.sqrt(Math.pow(l, 2) - Math.pow(s - o.y, 2)),
                r.midAngle > Math.PI / 2 - a && r.midAngle < Math.PI / 2 + a ? (e = (n - 1 + i.length) % i.length,
                e = i[e],
                c = i[(n + 1 + i.length) % i.length],
                "left" === r.hemisphere && "right" === e.hemisphere && u > e.indexLabelTextBlock.x ? u = e.indexLabelTextBlock.x - 15 : "right" === r.hemisphere && "left" === c.hemisphere && u < c.indexLabelTextBlock.x && (u = c.indexLabelTextBlock.x + 15)) : r.midAngle > 3 * Math.PI / 2 - a && r.midAngle < 3 * Math.PI / 2 + a && (e = (n - 1 + i.length) % i.length,
                e = i[e],
                c = i[(n + 1 + i.length) % i.length],
                "right" === r.hemisphere && "left" === e.hemisphere && u < e.indexLabelTextBlock.x ? u = e.indexLabelTextBlock.x + 15 : "left" === r.hemisphere && "right" === c.hemisphere && u > c.indexLabelTextBlock.x && (u = c.indexLabelTextBlock.x - 15)),
                r.indexLabelTextBlock.y = s,
                r.indexLabelTextBlock.x = u,
                r.indexLabelAngle = Math.atan2(r.indexLabelTextBlock.y - o.y, r.indexLabelTextBlock.x - o.x))
            }
            return k
        }
        function ft() {
            var et = c.plotArea.ctx, d, tt, e, t, ft, u, a, rt, st;
            et.fillStyle = "grey";
            et.strokeStyle = "grey";
            et.font = "16px Arial";
            et.textBaseline = "middle";
            for (var e = 0, ot = et = 0, et = 0; 10 > et && (1 > et || 0 < ot); et++) {
                if (h -= ot,
                ot = 0,
                "outside" === r.indexLabelPlacement) {
                    for (l = h * it,
                    e = 0; e < f.length; e++)
                        t = i[e],
                        t.indexLabelTextBlock.x = o.x + l * Math.cos(t.midAngle),
                        t.indexLabelTextBlock.y = o.y + l * Math.sin(t.midAngle),
                        t.indexLabelAngle = t.midAngle,
                        t.radius = h;
                    for (e = 0; e < f.length; e++)
                        if (t = i[e],
                        ft = g(e),
                        null !== ft && (d = i[e],
                        tt = i[ft],
                        u = 0,
                        u = b(d, tt) - w,
                        0 > u)) {
                            for (a = tt = d = 0; a < f.length; a++)
                                a !== e && i[a].hemisphere === t.hemisphere && (i[a].indexLabelTextBlock.y < t.indexLabelTextBlock.y ? d++ : tt++);
                            a = u / (d + tt || 1) * tt;
                            d = -1 * (u - a);
                            rt = tt = 0;
                            "right" === t.hemisphere ? (tt = p(e, a),
                            d = -1 * (u - tt),
                            rt = p(ft, d),
                            +rt.toFixed(v) < +d.toFixed(v) && +tt.toFixed(v) <= +a.toFixed(v) && p(e, -(d - rt))) : (tt = p(ft, a),
                            d = -1 * (u - tt),
                            rt = p(e, d),
                            +rt.toFixed(v) < +d.toFixed(v) && +tt.toFixed(v) <= +a.toFixed(v) && p(ft, -(d - rt)))
                        }
                } else
                    for (e = 0; e < f.length; e++)
                        t = i[e],
                        l = "pie" === r.type ? .7 * h : .8 * h,
                        u = o.x + l * Math.cos(t.midAngle),
                        a = o.y + l * Math.sin(t.midAngle),
                        t.indexLabelTextBlock.x = u,
                        t.indexLabelTextBlock.y = a;
                for (e = 0; e < f.length; e++)
                    t = i[e],
                    u = t.indexLabelTextBlock.measureText(),
                    0 !== u.height && 0 !== u.width && (u = u = 0,
                    "right" === t.hemisphere ? (u = s.x2 - (t.indexLabelTextBlock.x + t.indexLabelTextBlock.width + y),
                    u *= -1) : u = s.x1 - (t.indexLabelTextBlock.x - t.indexLabelTextBlock.width - y),
                    0 < u && (Math.abs(t.indexLabelTextBlock.y - t.indexLabelTextBlock.height / 2 - o.y) < h || Math.abs(t.indexLabelTextBlock.y + t.indexLabelTextBlock.height / 2 - o.y) < h) && (u /= Math.abs(Math.cos(t.indexLabelAngle)),
                    9 < u && (u *= .3),
                    u > ot && (ot = u)),
                    u = u = 0,
                    0 < t.indexLabelAngle && t.indexLabelAngle < Math.PI ? (u = s.y2 - (t.indexLabelTextBlock.y + t.indexLabelTextBlock.height / 2 + 5),
                    u *= -1) : u = s.y1 - (t.indexLabelTextBlock.y - t.indexLabelTextBlock.height / 2 - 5),
                    0 < u && Math.abs(t.indexLabelTextBlock.x - o.x) < h && (u /= Math.abs(Math.sin(t.indexLabelAngle)),
                    9 < u && (u *= .3),
                    u > ot && (ot = u)));
                for (e = function(n, t, r) {
                    for (var u = [], e = 0; u.push(i[t]),
                    t !== r; t = (t + 1 + f.length) % f.length)
                        ;
                    for (u.sort(function(n, t) {
                        return n.y - t.y
                    }),
                    t = 0; t < u.length; t++)
                        if (r = u[t],
                        e < n)
                            e += r.indexLabelTextBlock.height,
                            r.indexLabelTextBlock.text = "",
                            r.indexLabelText = "",
                            r.indexLabelTextBlock.measureText();
                        else
                            break
                }
                ,
                ft = t = -1,
                a = rt = 0; a < f.length; a++)
                    (d = i[a],
                    d.indexLabelText) && (st = g(a),
                    null !== st && (tt = i[st],
                    u = 0,
                    u = b(d, tt),
                    0 > u && ut(d, tt) ? (0 > t && (t = a),
                    st !== t && (ft = st),
                    rt += -u) : 0 < rt && (e(rt, t, ft),
                    ft = t = -1,
                    rt = 0)));
                0 < rt && e(rt, t, ft)
            }
            k(c.animationEnabled && 0 === c.renderCount ? n ? 60 : 30 : 1);
            nt()
        }
        var c = this;
        if (!(0 >= t.dataSeriesIndexes.length)) {
            var r = this.data[t.dataSeriesIndexes[0]]
              , f = r.dataPoints
              , y = 10
              , s = this.plotArea
              , tt = 0
              , u = {
                frame: 0,
                maxFrames: 1
            }
              , i = []
              , w = 2
              , it = 1.3
              , a = 20 / 180 * Math.PI
              , v = 6
              , o = {
                x: (s.x2 + s.x1) / 2,
                y: (s.y2 + s.y1) / 2
            }
              , h = "inside" === r.indexLabelPlacement ? .95 * Math.min(s.width, s.height) / 2 : .8 * Math.min(s.width, s.height) / 2
              , l = h * it;
            this.pieDoughnutClickHandler = function(t) {
                u.frame === u.maxFrames && (t = t.dataPoint,
                t.exploded = t.exploded ? !1 : !0,
                k(n ? 15 : 4),
                1 < this.dataPoints.length && d())
            }
            ;
            rt();
            ft()
        }
    }
    ;
    t.prototype.animationRequestId = null;
    t.prototype.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(n) {
            window.setTimeout(n, 1e3 / 60)
        }
    }();
    t.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
    nt.prototype.registerSpace = function(n, t) {
        "top" === n ? this._topOccupied += t.height : "bottom" === n ? this._bottomOccupied += t.height : "left" === n ? this._leftOccupied += t.width : "right" === n && (this._rightOccupied += t.width)
    }
    ;
    nt.prototype.unRegisterSpace = function(n, t) {
        "top" === n ? this._topOccupied -= t.height : "bottom" === n ? this._bottomOccupied -= t.height : "left" === n ? this._leftOccupied -= t.width : "right" === n && (this._rightOccupied -= t.width)
    }
    ;
    nt.prototype.getFreeSpace = function() {
        return {
            x1: this._leftOccupied,
            y1: this._topOccupied,
            x2: this.chart.width - this._rightOccupied,
            y2: this.chart.height - this._bottomOccupied,
            width: this.chart.width - this._rightOccupied - this._leftOccupied,
            height: this.chart.height - this._bottomOccupied - this._topOccupied
        }
    }
    ;
    nt.prototype.reset = function() {
        this._topOccupied = 0;
        this._bottomOccupied = 3;
        this._rightOccupied = this._leftOccupied = 0
    }
    ;
    v(e, h);
    e.prototype.render = function(n) {
        var u, t;
        n && this.ctx.save();
        u = this.ctx.font;
        this.ctx.textBaseline = this.textBaseline;
        t = 0;
        this._isDirty && this.measureText(this.ctx);
        this.ctx.translate(this.x, this.y + t);
        "middle" === this.textBaseline && (t = -this._lineHeight / 2);
        this.ctx.font = this._getFontString();
        this.ctx.rotate(Math.PI / 180 * this.angle);
        var r = 0
          , f = this.padding
          , i = null;
        for ((0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, t, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor),
        this.ctx.fillStyle = this.fontColor,
        t = 0; t < this._wrappedText.lines.length; t++)
            i = this._wrappedText.lines[t],
            "right" === this.horizontalAlign ? r = this.width - i.width - this.padding : "left" === this.horizontalAlign ? r = this.padding : "center" === this.horizontalAlign && (r = (this.width - 2 * this.padding) / 2 - i.width / 2 + this.padding),
            this.ctx.fillText(i.text, r, f),
            f += i.height;
        this.ctx.font = u;
        n && this.ctx.restore()
    }
    ;
    e.prototype.setText = function(n) {
        this.text = n;
        this._isDirty = !0;
        this._wrappedText = null
    }
    ;
    e.prototype.measureText = function() {
        if (null === this.maxWidth)
            throw "Please set maxWidth and height for TextBlock";
        return this._wrapText(this.ctx),
        this._isDirty = !1,
        {
            width: this.width,
            height: this.height
        }
    }
    ;
    e.prototype._getLineWithWidth = function(n, t, i) {
        var u, r;
        if (n = String(n),
        !n)
            return {
                text: "",
                width: 0
            };
        var f = i = 0
          , e = n.length - 1
          , u = Infinity;
        for (this.ctx.font = this._getFontString(); f <= e; )
            if (u = Math.floor((f + e) / 2),
            r = n.substr(0, u + 1),
            i = this.ctx.measureText(r).width,
            i < t)
                f = u + 1;
            else if (i > t)
                e = u - 1;
            else
                break;
        return i > t && 1 < r.length && (r = r.substr(0, r.length - 1),
        i = this.ctx.measureText(r).width),
        t = !0,
        (r.length === n.length || " " === n[r.length]) && (t = !1),
        t && (n = r.split(" "),
        1 < n.length && n.pop(),
        r = n.join(" "),
        i = this.ctx.measureText(r).width),
        {
            text: r,
            width: i
        }
    }
    ;
    e.prototype._wrapText = function() {
        var t = new String(ct(this.text)), u = [], e = this.ctx.font, i = 0, r = 0, f, n;
        for (this.ctx.font = this._getFontString(); 0 < t.length; )
            f = this.maxHeight - 2 * this.padding,
            n = this._getLineWithWidth(t, this.maxWidth - 2 * this.padding, !1),
            n.height = this._lineHeight,
            u.push(n),
            r = Math.max(r, n.width),
            i += n.height,
            t = ct(t.slice(n.text.length, t.length)),
            f && i > f && (n = u.pop(),
            i -= n.height);
        this._wrappedText = {
            lines: u,
            width: r,
            height: i
        };
        this.width = r + 2 * this.padding;
        this.height = i + 2 * this.padding;
        this.ctx.font = e
    }
    ;
    e.prototype._getFontString = function() {
        return ni("", this, null)
    }
    ;
    v(tt, h);
    tt.prototype.render = function() {
        var i, t;
        if (this.text) {
            var n = this.chart.layoutManager.getFreeSpace(), r = 0, u = 0, s = 0, f = 0, i = 0, h, o;
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (f = n.width - 2 * this.margin,
            i = .5 * n.height - 2 * this.margin,
            s = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (f = n.height - 2 * this.margin,
            i = .5 * n.width - 2 * this.margin) : "center" === this.horizontalAlign && (f = n.width - 2 * this.margin,
            i = .5 * n.height - 2 * this.margin));
            i = new e(this.ctx,{
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontColor: this.fontColor,
                fontStyle: this.fontStyle,
                fontWeight: this.fontWeight,
                horizontalAlign: this.horizontalAlign,
                verticalAlign: this.verticalAlign,
                borderColor: this.borderColor,
                borderThickness: this.borderThickness,
                backgroundColor: this.backgroundColor,
                maxWidth: f,
                maxHeight: i,
                cornerRadius: this.cornerRadius,
                text: this.text,
                padding: this.padding,
                textBaseline: "top"
            });
            t = i.measureText();
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (u = this.margin,
            o = "top") : "bottom" === this.verticalAlign && (u = n.y2 - this.margin - t.height,
            o = "bottom"),
            "left" === this.horizontalAlign ? r = n.x1 + this.margin : "center" === this.horizontalAlign ? r = n.x1 + (f / 2 - t.width / 2) + this.margin : "right" === this.horizontalAlign && (r = n.x2 - this.margin - t.width),
            h = this.horizontalAlign,
            this.width = t.width,
            this.height = t.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (r = n.x1 + this.margin,
            u = n.y2 - this.margin - (f / 2 - t.width / 2),
            s = -90,
            o = "left",
            this.width = t.height,
            this.height = t.width) : "right" === this.horizontalAlign ? (r = n.x2 - this.margin,
            u = n.y1 + this.margin + (f / 2 - t.width / 2),
            s = 90,
            o = "right",
            this.width = t.height,
            this.height = t.width) : "center" === this.horizontalAlign && (u = n.y1 + (n.height / 2 - t.height / 2),
            r = n.x1 + (n.width / 2 - t.width / 2),
            o = "center",
            this.width = t.width,
            this.height = t.height),
            h = "center");
            i.x = r;
            i.y = u;
            i.angle = s;
            i.horizontalAlign = h;
            i.render(!0);
            this.chart.layoutManager.registerSpace(o, {
                width: this.width + 2 * this.margin,
                height: this.height + 2 * this.margin
            });
            this.bounds = {
                x1: r,
                y1: u,
                x2: r + this.width,
                y2: u + this.height
            };
            this.ctx.textBaseline = "top"
        }
    }
    ;
    v(et, h);
    et.prototype.render = function() {
        var i = this.chart.layoutManager.getFreeSpace(), w = null, v = 0, p = 0, l = 0, h = 0, s = [], a = [], r, c;
        for ("top" === this.verticalAlign || "bottom" === this.verticalAlign ? (this.orientation = "horizontal",
        w = this.verticalAlign,
        l = .9 * i.width,
        h = .5 * i.height) : "center" === this.verticalAlign && (this.orientation = "vertical",
        w = this.horizontalAlign,
        l = .5 * i.width,
        h = .9 * i.height),
        r = 0; r < this.dataSeries.length; r++) {
            var n = this.dataSeries[r]
              , t = n.legendMarkerType ? n.legendMarkerType : "line" !== n.type && "stepLine" !== n.type && "spline" !== n.type && "scatter" !== n.type && "bubble" !== n.type || !n.markerType ? y.getDefaultLegendMarker(n.type) : n.markerType
              , b = n.legendText ? n.legendText : n.name
              , k = n.legendMarkerColor ? n.legendMarkerColor : n.markerColor ? n.markerColor : n._colorSet[0]
              , u = n.markerSize || "line" !== n.type && "stepLine" !== n.type && "spline" !== n.type ? .6 * this.lineHeight : 0;
            if ("pie" !== n.type && "doughnut" !== n.type)
                t = {
                    markerType: t,
                    markerColor: k,
                    text: b,
                    textBlock: null,
                    chartType: n.type,
                    markerSize: u,
                    lineColor: n._colorSet[0],
                    dataSeriesIndex: r,
                    dataPointIndex: null
                },
                s.push(t);
            else
                for (c = 0; c < n.dataPoints.length; c++)
                    u = n.dataPoints[c],
                    t = u.legendMarkerType ? u.legendMarkerType : n.legendMarkerType ? n.legendMarkerType : y.getDefaultLegendMarker(n.type),
                    b = u.legendText ? u.legendText : n.legendText ? n.legendText : u.name ? u.name : "DataPoint: " + (c + 1),
                    k = u.markerColor ? u.markerColor : n.markerColor ? n.markerColor : u.color ? u.color : n.color ? n.color : n._colorSet[c % n._colorSet.length],
                    u = 0 !== u.markerSize && (0 !== n.markerSize || u.markerSize) || "line" !== n.type && "stepLine" !== n.type && "spline" !== n.type ? .6 * this.lineHeight : 0,
                    t = {
                        markerType: t,
                        markerColor: k,
                        text: b,
                        textBlock: null,
                        chartType: n.type,
                        markerSize: u,
                        dataSeriesIndex: r,
                        dataPointIndex: c
                    },
                    s.push(t)
        }
        if (0 < s.length) {
            for (n = null,
            r = c = 0; r < s.length; r++)
                t = s[r],
                "horizontal" === this.orientation ? (t.textBlock = new e(this.ctx,{
                    x: 0,
                    y: 0,
                    maxWidth: l,
                    maxHeight: this.lineHeight,
                    angle: 0,
                    text: t.text,
                    horizontalAlign: "left",
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontWeight: this.fontWeight,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    textBaseline: "top"
                }),
                t.textBlock.measureText(),
                (!n || n.width + t.textBlock.width + (0 === n.width ? 0 : this.horizontalSpacing) > l) && (n = {
                    items: [],
                    width: 0
                },
                a.push(n),
                this.height = a.length * (t.textBlock.height + 5)),
                t.textBlock.x = n.width,
                t.textBlock.y = 0,
                n.width += Math.round(t.textBlock.width + t.textBlock._lineHeight + (0 === n.width ? 0 : .5 * t.textBlock._lineHeight))) : (this.height + this.lineHeight < h ? (n = {
                    items: [],
                    width: 0
                },
                a.push(n),
                this.height = a.length * this.lineHeight) : (n = a[c],
                c = (c + 1) % a.length),
                t.textBlock = new e(this.ctx,{
                    x: 0,
                    y: 0,
                    maxWidth: l,
                    maxHeight: 1.5 * this.fontSize,
                    angle: 0,
                    text: t.text,
                    horizontalAlign: "left",
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontWeight: this.fontWeight,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    textBaseline: "top"
                }),
                t.textBlock.measureText(),
                t.textBlock.x = n.width,
                t.textBlock.y = 0,
                n.width += t.textBlock.width + t.textBlock._lineHeight + (0 === n.width ? 0 : .5 * t.textBlock._lineHeight)),
                n.items.push(t),
                this.width = Math.max(n.width, this.width);
            this.height = a.length * this.lineHeight
        }
        for ("top" === this.verticalAlign ? (p = "left" === this.horizontalAlign ? i.x1 + 2 : "right" === this.horizontalAlign ? i.x2 - this.width - 2 : i.x1 + i.width / 2 - this.width / 2,
        v = i.y1) : "center" === this.verticalAlign ? (p = "left" === this.horizontalAlign ? i.x1 + 2 : "right" === this.horizontalAlign ? i.x2 - this.width - 2 : i.x1 + i.width / 2 - this.width / 2,
        v = i.y1 + i.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (p = "left" === this.horizontalAlign ? i.x1 + 2 : "right" === this.horizontalAlign ? i.x2 - this.width - 2 : i.x1 + i.width / 2 - this.width / 2,
        v = i.y2 - this.height - 5),
        this.items = s,
        r = 0; r < this.items.length; r++)
            t = s[r],
            t.id = ++this.chart._eventManager.lastObjectId,
            this.chart._eventManager.objectMap[t.id] = {
                id: t.id,
                objectType: "legendItem",
                legendItemIndex: r,
                dataSeriesIndex: t.dataSeriesIndex,
                dataPointIndex: t.dataPointIndex
            };
        for (r = 0; r < a.length; r++)
            for (n = a[r],
            i = 0; i < n.items.length; i++)
                t = n.items[i],
                h = t.textBlock.x + p + (0 === i ? .2 * u : .4 * this.lineHeight + .2 * u),
                s = v + r * this.lineHeight,
                l = h,
                this.chart.data[t.dataSeriesIndex].visible || (this.ctx.globalAlpha = .5),
                ("line" === t.chartType || "stepLine" === t.chartType || "spline" === t.chartType) && (this.ctx.strokeStyle = t.lineColor,
                this.ctx.lineWidth = Math.ceil(this.lineHeight / 8),
                this.ctx.beginPath(),
                this.ctx.moveTo(h - .1 * this.lineHeight, s + this.lineHeight / 2),
                this.ctx.lineTo(h + .7 * this.lineHeight, s + this.lineHeight / 2),
                this.ctx.stroke(),
                l -= .1 * this.lineHeight),
                o.drawMarker(h + u / 2, s + this.lineHeight / 2, this.ctx, t.markerType, u, t.markerColor, null, 0),
                t.textBlock.x = h + Math.round(.9 * this.lineHeight),
                t.textBlock.y = s,
                t.textBlock.render(!0),
                this.chart.data[t.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1),
                h = f(t.id),
                this.ghostCtx.fillStyle = h,
                this.ghostCtx.beginPath(),
                this.ghostCtx.fillRect(l, t.textBlock.y, t.textBlock.x + t.textBlock.width - l, t.textBlock.height),
                t.x1 = this.chart._eventManager.objectMap[t.id].x1 = l,
                t.y1 = this.chart._eventManager.objectMap[t.id].y1 = t.textBlock.y,
                t.x2 = this.chart._eventManager.objectMap[t.id].x2 = t.textBlock.x + t.textBlock.width,
                t.y2 = this.chart._eventManager.objectMap[t.id].y2 = t.textBlock.y + t.textBlock.height;
        this.chart.layoutManager.registerSpace(w, {
            width: this.width + 2 + 2,
            height: this.height + 5 + 5
        });
        this.bounds = {
            x1: p,
            y1: v,
            x2: p + this.width,
            y2: v + this.height
        }
    }
    ;
    v(lt, h);
    lt.prototype.render = function() {
        var n = this.chart.layoutManager.getFreeSpace();
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(n.x1, n.y1, n.x2, n.y2)
    }
    ;
    v(y, h);
    y.prototype.getDefaultAxisPlacement = function() {
        var n = this.type;
        return "column" === n || "line" === n || "stepLine" === n || "spline" === n || "area" === n || "stepArea" === n || "splineArea" === n || "stackedColumn" === n || "stackedLine" === n || "bubble" === n || "scatter" === n || "stackedArea" === n || "stackedColumn100" === n || "stackedLine100" === n || "stackedArea100" === n ? "normal" : "bar" === n || "stackedBar" === n || "stackedBar100" === n ? "xySwapped" : "pie" === n || "doughnut" === n ? "none" : (window.console.log("Unknown Chart Type: " + n),
        null)
    }
    ;
    y.getDefaultLegendMarker = function(n) {
        return "column" === n || "stackedColumn" === n || "stackedLine" === n || "bar" === n || "stackedBar" === n || "stackedBar100" === n || "bubble" === n || "scatter" === n || "stackedColumn100" === n || "stackedLine100" === n || "stepArea" === n ? "square" : "line" === n || "stepLine" === n || "spline" === n || "pie" === n || "doughnut" === n ? "circle" : "area" === n || "splineArea" === n || "stackedArea" === n || "stackedArea100" === n ? "triangle" : (window.console.log("Unknown Chart Type: " + n),
        null)
    }
    ;
    y.prototype.getDataPointAtX = function(n, t) {
        var r, s;
        if (!this.dataPoints || 0 === this.dataPoints.length)
            return null;
        var i = {
            dataPoint: null,
            distance: Infinity,
            index: NaN
        }
          , r = null
          , f = 0
          , e = 0
          , o = 1
          , h = Infinity
          , c = 0
          , l = 0
          , u = 0;
        for ("none" !== this.chart.plotInfo.axisPlacement && (u = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x,
        u = 0 < u ? (this.dataPoints.length - 1) / u * (n - this.dataPoints[0].x) >> 0 : 0); ; ) {
            if (e = 0 < o ? u + f : u - f,
            0 <= e && e < this.dataPoints.length) {
                if (r = this.dataPoints[e],
                s = Math.abs(r.x - n),
                s < i.distance && (i.dataPoint = r,
                i.distance = s,
                i.index = e),
                r = Math.abs(r.x - n),
                r <= h ? h = r : 0 < o ? c++ : l++,
                1e3 < c && 1e3 < l)
                    break
            } else if (0 > u - f && u + f >= this.dataPoints.length)
                break;
            -1 === o ? (f++,
            o = 1) : o = -1
        }
        return t || i.dataPoint.x !== n ? t && null !== i.dataPoint ? i : null : i
    }
    ;
    y.prototype.getDataPointAtXY = function(n, t, i) {
        var r, c;
        if (!this.dataPoints || 0 === this.dataPoints.length)
            return null;
        i = i || !1;
        var s = []
          , l = 0
          , f = 0
          , a = 1
          , v = !1
          , y = Infinity
          , p = 0
          , w = 0
          , h = 0;
        for ("none" !== this.chart.plotInfo.axisPlacement && (h = this.chart.axisX.getXValueAt({
            x: n,
            y: t
        }),
        f = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x,
        h = 0 < f ? (this.dataPoints.length - 1) / f * (h - this.dataPoints[0].x) >> 0 : 0); ; ) {
            if (f = 0 < a ? h + l : h - l,
            0 <= f && f < this.dataPoints.length) {
                if (r = this.chart._eventManager.objectMap[this.dataPointIds[f]],
                c = this.dataPoints[f],
                r) {
                    switch (this.type) {
                    case "column":
                    case "stackedColumn":
                    case "stackedColumn100":
                    case "bar":
                    case "stackedBar":
                    case "stackedBar100":
                        n >= r.x1 && n <= r.x2 && t >= r.y1 && t <= r.y2 && (s.push({
                            dataPoint: c,
                            dataPointIndex: f,
                            dataSeries: this,
                            distance: Math.min(Math.abs(r.x1 - n), Math.abs(r.x2 - n), Math.abs(r.y1 - t), Math.abs(r.y2 - t))
                        }),
                        v = !0);
                        break;
                    case "line":
                    case "stepLine":
                    case "spline":
                    case "area":
                    case "stepArea":
                    case "stackedArea":
                    case "stackedArea100":
                    case "splineArea":
                    case "scatter":
                        var e = b("markerSize", c, this) || 4
                          , o = i ? 20 : e
                          , u = Math.sqrt(Math.pow(r.x1 - n, 2) + Math.pow(r.y1 - t, 2));
                        u <= o && s.push({
                            dataPoint: c,
                            dataPointIndex: f,
                            dataSeries: this,
                            distance: u
                        });
                        f = Math.abs(r.x1 - n);
                        f <= y ? y = f : 0 < a ? p++ : w++;
                        u <= e / 2 && (v = !0);
                        break;
                    case "bubble":
                        e = r.size;
                        u = Math.sqrt(Math.pow(r.x1 - n, 2) + Math.pow(r.y1 - t, 2));
                        u <= e / 2 && (s.push({
                            dataPoint: c,
                            dataPointIndex: f,
                            dataSeries: this,
                            distance: u
                        }),
                        v = !0);
                        break;
                    case "pie":
                    case "doughnut":
                        e = r.center;
                        o = "doughnut" === this.type ? .6 * r.radius : 0;
                        u = Math.sqrt(Math.pow(e.x - n, 2) + Math.pow(e.y - t, 2));
                        u < r.radius && u > o && (u = Math.atan2(t - e.y, n - e.x),
                        0 > u && (u += 2 * Math.PI),
                        u = (180 * (u / Math.PI) % 360 + 360) % 360,
                        e = (180 * (r.startAngle / Math.PI) % 360 + 360) % 360,
                        o = (180 * (r.endAngle / Math.PI) % 360 + 360) % 360,
                        0 === o && 1 < r.endAngle && (o = 360),
                        e > o && (o += 360,
                        u < e && (u += 360)),
                        u > e && u < o && (s.push({
                            dataPoint: c,
                            dataPointIndex: f,
                            dataSeries: this,
                            distance: 0
                        }),
                        v = !0))
                    }
                    if (v || 1e3 < p && 1e3 < w)
                        break
                }
            } else if (0 > h - l && h + l >= this.dataPoints.length)
                break;
            -1 === a ? (l++,
            a = 1) : a = -1
        }
        for (n = null,
        t = 0; t < s.length; t++)
            n ? s[t].distance <= n.distance && (n = s[t]) : n = s[t];
        return n
    }
    ;
    y.prototype.getMarkerProperties = function(n, t, i, r) {
        var u = this.dataPoints;
        return {
            x: t,
            y: i,
            ctx: r,
            type: u[n].markerType ? u[n].markerType : this.markerType,
            size: u[n].markerSize ? u[n].markerSize : this.markerSize,
            color: u[n].markerColor ? u[n].markerColor : this.markerColor ? this.markerColor : u[n].color ? u[n].color : this.color ? this.color : this._colorSet[n % this._colorSet.length],
            borderColor: u[n].markerBorderColor ? u[n].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
            borderThickness: u[n].markerBorderThickness ? u[n].markerBorderThickness : this.markerBorderThickness ? this.markerBorderThickness : null
        }
    }
    ;
    v(u, h);
    u.prototype.createLabels = function() {
        var i, n = 0, t, r = 0, u = 0, n = 0;
        if ("bottom" === this._position || "top" === this._position ? (n = this.lineCoordinates.width / Math.abs(this.maximum - this.minimum) * this.interval,
        r = this.labelAutoFit ? "undefined" == typeof this._options.labelMaxWidth ? .9 * n >> 0 : this.labelMaxWidth : "undefined" == typeof this._options.labelMaxWidth ? .7 * this.chart.width >> 0 : this.labelMaxWidth,
        u = "undefined" == typeof this._options.labelWrap || this.labelWrap ? .5 * this.chart.height >> 0 : 1.5 * this.labelFontSize) : ("left" === this._position || "right" === this._position) && (n = this.lineCoordinates.height / Math.abs(this.maximum - this.minimum) * this.interval,
        r = this.labelAutoFit ? "undefined" == typeof this._options.labelMaxWidth ? .3 * this.chart.width >> 0 : this.labelMaxWidth : "undefined" == typeof this._options.labelMaxWidth ? .5 * this.chart.width >> 0 : this.labelMaxWidth,
        u = "undefined" == typeof this._options.labelWrap || this.labelWrap ? 2 * n >> 0 : 1.5 * this.labelFontSize),
        "axisX" === this.type && "dateTime" === this.chart.plotInfo.axisXValueType)
            for (t = kt(new Date(this.maximum), this.interval, this.intervalType),
            n = this.intervalStartPosition; n < t; kt(n, this.interval, this.intervalType))
                i = "axisX" === this.type && this.labels[n] ? this.labels[n] : ui(n, this.valueFormatString, this.chart._cultureInfo),
                i = new e(this.ctx,{
                    x: 0,
                    y: 0,
                    maxWidth: r,
                    maxHeight: u,
                    angle: this.labelAngle,
                    text: this.prefix + i + this.suffix,
                    horizontalAlign: "left",
                    fontSize: this.labelFontSize,
                    fontFamily: this.labelFontFamily,
                    fontWeight: this.labelFontWeight,
                    fontColor: this.labelFontColor,
                    fontStyle: this.labelFontStyle,
                    textBaseline: "middle"
                }),
                this._labels.push({
                    position: n.getTime(),
                    textBlock: i,
                    effectiveHeight: null
                });
        else {
            if (t = this.maximum,
            this.labels && this.labels.length) {
                i = Math.ceil(this.interval);
                for (var o = Math.ceil(this.intervalStartPosition), f = !1, n = o; n < this.maximum; n += i)
                    if (this.labels[n])
                        f = !0;
                    else {
                        f = !1;
                        break
                    }
                f && (this.interval = i,
                this.intervalStartPosition = o)
            }
            for (n = this.intervalStartPosition; n <= t; n += this.interval)
                i = "axisX" === this.type && this.labels[n] ? this.labels[n] : pt(n, this.valueFormatString, this.chart._cultureInfo),
                i = new e(this.ctx,{
                    x: 0,
                    y: 0,
                    maxWidth: r,
                    maxHeight: u,
                    angle: this.labelAngle,
                    text: this.prefix + i + this.suffix,
                    horizontalAlign: "left",
                    fontSize: this.labelFontSize,
                    fontFamily: this.labelFontFamily,
                    fontWeight: this.labelFontWeight,
                    fontColor: this.labelFontColor,
                    fontStyle: this.labelFontStyle,
                    textBaseline: "middle",
                    borderThickness: 0
                }),
                this._labels.push({
                    position: n,
                    textBlock: i,
                    effectiveHeight: null
                })
        }
        for (n = 0; n < this.stripLines.length; n++)
            t = this.stripLines[n],
            i = new e(this.ctx,{
                x: 0,
                y: 0,
                backgroundColor: t.labelBackgroundColor,
                maxWidth: r,
                maxHeight: u,
                angle: this.labelAngle,
                text: t.label,
                horizontalAlign: "left",
                fontSize: t.labelFontSize,
                fontFamily: t.labelFontFamily,
                fontWeight: t.labelFontWeight,
                fontColor: t.labelFontColor,
                fontStyle: t.labelFontStyle,
                textBaseline: "middle",
                borderThickness: 0
            }),
            this._labels.push({
                position: t.value,
                textBlock: i,
                effectiveHeight: null,
                stripLine: t
            })
    }
    ;
    u.prototype.createLabelsAndCalculateWidth = function() {
        var t = 0;
        if (this._labels = [],
        "left" === this._position || "right" === this._position)
            for (this.createLabels(),
            i = 0; i < this._labels.length; i++) {
                var r = this._labels[i].textBlock.measureText()
                  , n = 0
                  , n = 0 === this.labelAngle ? r.width : r.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + r.height / 2 * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                t < n && (t = n);
                this._labels[i].effectiveWidth = n
            }
        return (this.title ? rt(this.titleFontFamily, this.titleFontSize, this.titleFontWeight) + 2 : 0) + t + this.tickLength + 5
    }
    ;
    u.prototype.createLabelsAndCalculateHeight = function() {
        var r = 0, n, t, i;
        if (this._labels = [],
        t = 0,
        this.createLabels(),
        "bottom" === this._position || "top" === this._position)
            for (t = 0; t < this._labels.length; t++)
                n = this._labels[t].textBlock,
                n = n.measureText(),
                i = 0,
                i = 0 === this.labelAngle ? n.height : n.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + n.height / 2 * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)),
                r < i && (r = i),
                this._labels[t].effectiveHeight = i;
        return (this.title ? rt(this.titleFontFamily, this.titleFontSize, this.titleFontWeight) + 2 : 0) + r + this.tickLength + 5
    }
    ;
    u.setLayoutAndRender = function(n, t, i, r, u) {
        var o, f, e, v = n.chart, h = v.ctx, s, l, c, a;
        n.calculateAxisParameters();
        t && t.calculateAxisParameters();
        i && i.calculateAxisParameters();
        t && i && "undefined" == typeof t._options.maximum && "undefined" == typeof t._options.minimum && "undefined" == typeof t._options.interval && "undefined" == typeof i._options.maximum && "undefined" == typeof i._options.minimum && "undefined" == typeof i._options.interval && (e = (t.maximum - t.minimum) / t.interval,
        s = (i.maximum - i.minimum) / i.interval,
        e > s ? i.maximum = i.interval * e + i.minimum : s > e && (t.maximum = t.interval * s + t.minimum));
        s = t ? t.margin : 0;
        "normal" === r ? (n.lineCoordinates = {},
        l = Math.ceil(t ? t.createLabelsAndCalculateWidth() : 0),
        o = Math.round(u.x1 + l + s),
        n.lineCoordinates.x1 = o,
        s = Math.ceil(i ? i.createLabelsAndCalculateWidth() : 0),
        f = Math.round(u.x2 - s > n.chart.width - 10 ? n.chart.width - 10 : u.x2 - s),
        n.lineCoordinates.x2 = f,
        n.lineCoordinates.width = Math.abs(f - o),
        c = Math.ceil(n.createLabelsAndCalculateHeight()),
        r = Math.round(u.y2 - c - n.margin),
        e = Math.round(u.y2 - n.margin),
        n.lineCoordinates.y1 = r,
        n.lineCoordinates.y2 = r,
        n.boundingRect = {
            x1: o,
            y1: r,
            x2: f,
            y2: e,
            width: f - o,
            height: e - r
        },
        t && (o = Math.round(u.x1 + t.margin),
        r = Math.round(10 > u.y1 ? 10 : u.y1),
        f = Math.round(u.x1 + l + t.margin),
        e = Math.round(u.y2 - c - n.margin),
        t.lineCoordinates = {
            x1: f,
            y1: r,
            x2: f,
            y2: e,
            height: Math.abs(e - r)
        },
        t.boundingRect = {
            x1: o,
            y1: r,
            x2: f,
            y2: e,
            width: f - o,
            height: e - r
        }),
        i && (o = Math.round(n.lineCoordinates.x2),
        r = Math.round(10 > u.y1 ? 10 : u.y1),
        f = Math.round(o + s + i.margin),
        e = Math.round(u.y2 - c - n.margin),
        i.lineCoordinates = {
            x1: o,
            y1: r,
            x2: o,
            y2: e,
            height: Math.abs(e - r)
        },
        i.boundingRect = {
            x1: o,
            y1: r,
            x2: f,
            y2: e,
            width: f - o,
            height: e - r
        }),
        n.calculateValueToPixelconversionParameters(),
        t && t.calculateValueToPixelconversionParameters(),
        i && i.calculateValueToPixelconversionParameters(),
        h.save(),
        h.rect(n.boundingRect.x1 - 40, n.boundingRect.y1, n.boundingRect.width + 80, n.boundingRect.height),
        h.clip(),
        n.renderLabelsTicksAndTitle(),
        h.restore(),
        t && t.renderLabelsTicksAndTitle(),
        i && i.renderLabelsTicksAndTitle()) : (l = Math.ceil(n.createLabelsAndCalculateWidth()),
        t && (t.lineCoordinates = {},
        o = Math.round(u.x1 + l + n.margin),
        f = Math.round(u.x2 > t.chart.width - 10 ? t.chart.width - 10 : u.x2),
        t.lineCoordinates.x1 = o,
        t.lineCoordinates.x2 = f,
        t.lineCoordinates.width = Math.abs(f - o)),
        i && (i.lineCoordinates = {},
        o = Math.round(u.x1 + l + n.margin),
        f = Math.round(u.x2 > i.chart.width - 10 ? i.chart.width - 10 : u.x2),
        i.lineCoordinates.x1 = o,
        i.lineCoordinates.x2 = f,
        i.lineCoordinates.width = Math.abs(f - o)),
        c = Math.ceil(t ? t.createLabelsAndCalculateHeight() : 0),
        a = Math.ceil(i ? i.createLabelsAndCalculateHeight() : 0),
        t && (r = Math.round(u.y2 - c - t.margin),
        e = Math.round(u.y2 - s > t.chart.height - 10 ? t.chart.height - 10 : u.y2 - s),
        t.lineCoordinates.y1 = r,
        t.lineCoordinates.y2 = r,
        t.boundingRect = {
            x1: o,
            y1: r,
            x2: f,
            y2: e,
            width: f - o,
            height: c
        }),
        i && (r = Math.round(u.y1 + i.margin),
        e = u.y1 + i.margin + a,
        i.lineCoordinates.y1 = e,
        i.lineCoordinates.y2 = e,
        i.boundingRect = {
            x1: o,
            y1: r,
            x2: f,
            y2: e,
            width: f - o,
            height: a
        }),
        o = Math.round(u.x1 + n.margin),
        r = Math.round(i ? i.lineCoordinates.y2 : 10 > u.y1 ? 10 : u.y1),
        f = Math.round(u.x1 + l + n.margin),
        e = Math.round(t ? t.lineCoordinates.y1 : u.y2 - s > n.chart.height - 10 ? n.chart.height - 10 : u.y2 - s),
        n.lineCoordinates = {
            x1: f,
            y1: r,
            x2: f,
            y2: e,
            height: Math.abs(e - r)
        },
        n.boundingRect = {
            x1: o,
            y1: r,
            x2: f,
            y2: e,
            width: f - o,
            height: e - r
        },
        n.calculateValueToPixelconversionParameters(),
        t && t.calculateValueToPixelconversionParameters(),
        i && i.calculateValueToPixelconversionParameters(),
        t && t.renderLabelsTicksAndTitle(),
        i && i.renderLabelsTicksAndTitle(),
        n.renderLabelsTicksAndTitle());
        v.preparePlotArea();
        u = n.chart.plotArea;
        h.save();
        h.rect(u.x1, u.y1, Math.abs(u.x2 - u.x1), Math.abs(u.y2 - u.y1));
        h.clip();
        n.renderStripLinesOfThicknessType("value");
        t && t.renderStripLinesOfThicknessType("value");
        i && i.renderStripLinesOfThicknessType("value");
        n.renderInterlacedColors();
        t && t.renderInterlacedColors();
        i && i.renderInterlacedColors();
        h.restore();
        n.renderGrid();
        t && t.renderGrid();
        i && i.renderGrid();
        n.renderAxisLine();
        t && t.renderAxisLine();
        i && i.renderAxisLine();
        n.renderStripLinesOfThicknessType("pixel");
        t && t.renderStripLinesOfThicknessType("pixel");
        i && i.renderStripLinesOfThicknessType("pixel")
    }
    ;
    u.prototype.renderLabelsTicksAndTitle = function() {
        var u = !1, i = 0, r = 1, f = 0, n, t;
        if (0 !== this.labelAngle && 360 !== this.labelAngle && (r = 1.2),
        "undefined" == typeof this._options.interval) {
            if ("bottom" === this._position || "top" === this._position) {
                for (t = 0; t < this._labels.length; t++)
                    n = this._labels[t],
                    n.position < this.minimum || n.stripLine || (n = n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + n.textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle),
                    i += n);
                i > this.lineCoordinates.width * r && (u = !0)
            }
            if ("left" === this._position || "right" === this._position) {
                for (t = 0; t < this._labels.length; t++)
                    n = this._labels[t],
                    n.position < this.minimum || n.stripLine || (n = n.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle),
                    i += n);
                i > this.lineCoordinates.height * r && (u = !0)
            }
        }
        if ("bottom" === this._position) {
            for (t = 0,
            t = 0; t < this._labels.length; t++)
                (n = this._labels[t],
                n.position < this.minimum || n.position > this.maximum) || (i = this.getPixelCoordinatesOnAxis(n.position),
                (this.tickThickness && !this._labels[t].stripLine || this._labels[t].stripLine && "pixel" === this._labels[t].stripLine._thicknessType) && (this._labels[t].stripLine ? (r = this._labels[t].stripLine,
                this.ctx.lineWidth = r.thickness,
                this.ctx.strokeStyle = r.color) : (this.ctx.lineWidth = this.tickThickness,
                this.ctx.strokeStyle = this.tickColor),
                r = 1 == this.ctx.lineWidth % 2 ? (i.x << 0) + .5 : i.x << 0,
                this.ctx.beginPath(),
                this.ctx.moveTo(r, i.y << 0),
                this.ctx.lineTo(r, i.y + this.tickLength << 0),
                this.ctx.stroke()),
                (!u || 0 == f++ % 2 || this._labels[t].stripLine) && (0 === n.textBlock.angle ? (i.x -= n.textBlock.width / 2,
                i.y += this.tickLength + n.textBlock.fontSize / 2) : (i.x -= 0 > this.labelAngle ? n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0,
                i.y += this.tickLength + Math.abs(0 > this.labelAngle ? n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)),
                n.textBlock.x = i.x,
                n.textBlock.y = i.y,
                n.textBlock.render(!0)));
            this.title && (this._titleTextBlock = new e(this.ctx,{
                x: this.lineCoordinates.x1,
                y: this.boundingRect.y2 - this.titleFontSize - 5,
                maxWidth: this.lineCoordinates.width,
                maxHeight: 1.5 * this.titleFontSize,
                angle: 0,
                text: this.title,
                horizontalAlign: "center",
                fontSize: this.titleFontSize,
                fontFamily: this.titleFontFamily,
                fontWeight: this.titleFontWeight,
                fontColor: this.titleFontColor,
                fontStyle: this.titleFontStyle,
                textBaseline: "top"
            }),
            this._titleTextBlock.measureText(),
            this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2,
            this._titleTextBlock.y = this.boundingRect.y2 - this._titleTextBlock.height - 2,
            this._titleTextBlock.render(!0))
        } else if ("top" === this._position) {
            for (t = 0; t < this._labels.length; t++)
                (n = this._labels[t],
                n.position < this.minimum || n.position > this.maximum) || (i = this.getPixelCoordinatesOnAxis(n.position),
                (this.tickThickness && !this._labels[t].stripLine || this._labels[t].stripLine && "pixel" === this._labels[t].stripLine._thicknessType) && (this._labels[t].stripLine ? (r = this._labels[t].stripLine,
                this.ctx.lineWidth = r.thickness,
                this.ctx.strokeStyle = r.color) : (this.ctx.lineWidth = this.tickThickness,
                this.ctx.strokeStyle = this.tickColor),
                r = 1 == this.ctx.lineWidth % 2 ? (i.x << 0) + .5 : i.x << 0,
                this.ctx.beginPath(),
                this.ctx.moveTo(r, i.y << 0),
                this.ctx.lineTo(r, i.y - this.tickLength << 0),
                this.ctx.stroke()),
                (!u || 0 == f++ % 2 || this._labels[t].stripLine) && (0 === n.textBlock.angle ? (i.x -= n.textBlock.width / 2,
                i.y -= this.tickLength + n.textBlock.height / 2) : (i.x -= 0 < this.labelAngle ? n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0,
                i.y -= this.tickLength + Math.abs(0 < this.labelAngle ? n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5 : 5)),
                n.textBlock.x = i.x,
                n.textBlock.y = i.y,
                n.textBlock.render(!0)));
            this.title && (this._titleTextBlock = new e(this.ctx,{
                x: this.lineCoordinates.x1,
                y: this.boundingRect.y1,
                maxWidth: this.lineCoordinates.width,
                maxHeight: 1.5 * this.titleFontSize,
                angle: 0,
                text: this.title,
                horizontalAlign: "center",
                fontSize: this.titleFontSize,
                fontFamily: this.titleFontFamily,
                fontWeight: this.titleFontWeight,
                fontColor: this.titleFontColor,
                fontStyle: this.titleFontStyle,
                textBaseline: "top"
            }),
            this._titleTextBlock.measureText(),
            this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2,
            this._titleTextBlock.render(!0))
        } else if ("left" === this._position) {
            for (t = 0; t < this._labels.length; t++)
                (n = this._labels[t],
                n.position < this.minimum || n.position > this.maximum) || (i = this.getPixelCoordinatesOnAxis(n.position),
                (this.tickThickness && !this._labels[t].stripLine || this._labels[t].stripLine && "pixel" === this._labels[t].stripLine._thicknessType) && (this._labels[t].stripLine ? (r = this._labels[t].stripLine,
                this.ctx.lineWidth = r.thickness,
                this.ctx.strokeStyle = r.color) : (this.ctx.lineWidth = this.tickThickness,
                this.ctx.strokeStyle = this.tickColor),
                r = 1 == this.ctx.lineWidth % 2 ? (i.y << 0) + .5 : i.y << 0,
                this.ctx.beginPath(),
                this.ctx.moveTo(i.x << 0, r),
                this.ctx.lineTo(i.x - this.tickLength << 0, r),
                this.ctx.stroke()),
                (!u || 0 == f++ % 2 || this._labels[t].stripLine) && (n.textBlock.x = i.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5,
                n.textBlock.y = 0 === this.labelAngle ? i.y - n.textBlock.height / 2 + this.labelFontSize / 2 : i.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle),
                n.textBlock.render(!0)));
            this.title && (this._titleTextBlock = new e(this.ctx,{
                x: this.boundingRect.x1 + 5,
                y: this.lineCoordinates.y2,
                maxWidth: this.lineCoordinates.height,
                maxHeight: 1.5 * this.titleFontSize,
                angle: -90,
                text: this.title,
                horizontalAlign: "center",
                fontSize: this.titleFontSize,
                fontFamily: this.titleFontFamily,
                fontWeight: this.titleFontWeight,
                fontColor: this.titleFontColor,
                fontStyle: this.titleFontStyle,
                textBaseline: "top"
            }),
            this._titleTextBlock.measureText(),
            this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1,
            this._titleTextBlock.render(!0))
        } else if ("right" === this._position) {
            for (t = 0; t < this._labels.length; t++)
                (n = this._labels[t],
                n.position < this.minimum || n.position > this.maximum) || (i = this.getPixelCoordinatesOnAxis(n.position),
                (this.tickThickness && !this._labels[t].stripLine || this._labels[t].stripLine && "pixel" === this._labels[t].stripLine._thicknessType) && (this._labels[t].stripLine ? (r = this._labels[t].stripLine,
                this.ctx.lineWidth = r.thickness,
                this.ctx.strokeStyle = r.color) : (this.ctx.lineWidth = this.tickThickness,
                this.ctx.strokeStyle = this.tickColor),
                r = 1 == this.ctx.lineWidth % 2 ? (i.y << 0) + .5 : i.y << 0,
                this.ctx.beginPath(),
                this.ctx.moveTo(i.x << 0, r),
                this.ctx.lineTo(i.x + this.tickLength << 0, r),
                this.ctx.stroke()),
                (!u || 0 == f++ % 2 || this._labels[t].stripLine) && (n.textBlock.x = i.x + this.tickLength + 5,
                n.textBlock.y = 0 === this.labelAngle ? i.y - n.textBlock.height / 2 + this.labelFontSize / 2 : i.y,
                n.textBlock.render(!0)));
            this.title && (this._titleTextBlock = new e(this.ctx,{
                x: this.boundingRect.x2 - 5,
                y: this.lineCoordinates.y2,
                maxWidth: this.lineCoordinates.height,
                maxHeight: 1.5 * this.titleFontSize,
                angle: 90,
                text: this.title,
                horizontalAlign: "center",
                fontSize: this.titleFontSize,
                fontFamily: this.titleFontFamily,
                fontWeight: this.titleFontWeight,
                fontColor: this.titleFontColor,
                fontStyle: this.titleFontStyle,
                textBaseline: "top"
            }),
            this._titleTextBlock.measureText(),
            this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1,
            this._titleTextBlock.render(!0))
        }
    }
    ;
    u.prototype.renderInterlacedColors = function() {
        var r = this.chart.plotArea.ctx, t, u, i = this.chart.plotArea, n = 0;
        if (t = !0,
        ("bottom" === this._position || "top" === this._position) && this.interlacedColor)
            for (r.fillStyle = this.interlacedColor,
            n = 0; n < this._labels.length; n++)
                this._labels[n].stripLine || (t ? (t = this.getPixelCoordinatesOnAxis(this._labels[n].position),
                u = n + 1 >= this._labels.length ? this.getPixelCoordinatesOnAxis(this.maximum) : this.getPixelCoordinatesOnAxis(this._labels[n + 1].position),
                r.fillRect(t.x, i.y1, Math.abs(u.x - t.x), Math.abs(i.y1 - i.y2)),
                t = !1) : t = !0);
        else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
            for (r.fillStyle = this.interlacedColor,
            n = 0; n < this._labels.length; n++)
                this._labels[n].stripLine || (t ? (u = this.getPixelCoordinatesOnAxis(this._labels[n].position),
                t = n + 1 >= this._labels.length ? this.getPixelCoordinatesOnAxis(this.maximum) : this.getPixelCoordinatesOnAxis(this._labels[n + 1].position),
                r.fillRect(i.x1, t.y, Math.abs(i.x1 - i.x2), Math.abs(t.y - u.y)),
                t = !1) : t = !0);
        r.beginPath()
    }
    ;
    u.prototype.renderStripLinesOfThicknessType = function(n) {
        var t, r, e, o, s, h, c;
        if (this.stripLines && 0 < this.stripLines.length && n)
            for (var i = this.chart.plotArea.ctx, u = 0, u = 0; u < this.stripLines.length; u++)
                t = this.stripLines[u],
                t._thicknessType !== n || "pixel" === n && (t.value < this.minimum || t.value > this.maximum) || (r = this.getPixelCoordinatesOnAxis(t.value),
                e = Math.abs("pixel" === n ? t.thickness : this.conversionParameters.pixelPerUnit * t.thickness),
                0 >= e || (i.strokeStyle = t.color,
                i.beginPath(),
                f(t.id),
                i.lineWidth = e,
                "bottom" === this._position || "top" === this._position ? (o = s = 1 == i.lineWidth % 2 ? (r.x << 0) + .5 : r.x << 0,
                h = this.chart.plotArea.y1,
                c = this.chart.plotArea.y2) : ("left" === this._position || "right" === this._position) && (h = c = 1 == i.lineWidth % 2 ? (r.y << 0) + .5 : r.y << 0,
                o = this.chart.plotArea.x1,
                s = this.chart.plotArea.x2),
                i.moveTo(o, h),
                i.lineTo(s, c),
                i.stroke()))
    }
    ;
    u.prototype.renderGrid = function() {
        var t, i, r, n;
        if (this.gridThickness && 0 < this.gridThickness)
            if (t = this.chart.ctx,
            r = this.chart.plotArea,
            t.lineWidth = this.gridThickness,
            t.strokeStyle = this.gridColor,
            "bottom" === this._position || "top" === this._position)
                for (n = 0; n < this._labels.length && !this._labels[n].stripLine; n++)
                    this._labels[n].position < this.minimum || this._labels[n].position > this.maximum || (t.beginPath(),
                    i = this.getPixelCoordinatesOnAxis(this._labels[n].position),
                    i = 1 == t.lineWidth % 2 ? (i.x << 0) + .5 : i.x << 0,
                    t.moveTo(i, r.y1 << 0),
                    t.lineTo(i, r.y2 << 0),
                    t.stroke());
            else if ("left" === this._position || "right" === this._position)
                for (n = 0; n < this._labels.length && !this._labels[n].stripLine; n++)
                    this._labels[n].position < this.minimum || this._labels[n].position > this.maximum || (t.beginPath(),
                    i = this.getPixelCoordinatesOnAxis(this._labels[n].position),
                    i = 1 == t.lineWidth % 2 ? (i.y << 0) + .5 : i.y << 0,
                    t.moveTo(r.x1 << 0, i),
                    t.lineTo(r.x2 << 0, i),
                    t.stroke())
    }
    ;
    u.prototype.renderAxisLine = function() {
        var n = this.chart.ctx, t;
        "bottom" === this._position || "top" === this._position ? this.lineThickness && (n.lineWidth = this.lineThickness,
        n.strokeStyle = this.lineColor ? this.lineColor : "black",
        t = 1 == this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + .5 : this.lineCoordinates.y1 << 0,
        n.beginPath(),
        n.moveTo(this.lineCoordinates.x1, t),
        n.lineTo(this.lineCoordinates.x2, t),
        n.stroke()) : ("left" === this._position || "right" === this._position) && this.lineThickness && (n.lineWidth = this.lineThickness,
        n.strokeStyle = this.lineColor,
        t = 1 == this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + .5 : this.lineCoordinates.x1 << 0,
        n.beginPath(),
        n.moveTo(t, this.lineCoordinates.y1),
        n.lineTo(t, this.lineCoordinates.y2),
        n.stroke())
    }
    ;
    u.prototype.getPixelCoordinatesOnAxis = function(n) {
        var t = {}
          , i = this.lineCoordinates.width
          , r = this.lineCoordinates.height;
        return ("bottom" === this._position || "top" === this._position) && (i /= Math.abs(this.maximum - this.minimum),
        t.x = this.lineCoordinates.x1 + i * (n - this.minimum),
        t.y = this.lineCoordinates.y1),
        ("left" === this._position || "right" === this._position) && (i = r / Math.abs(this.maximum - this.minimum),
        t.y = this.lineCoordinates.y2 - i * (n - this.minimum),
        t.x = this.lineCoordinates.x2),
        t
    }
    ;
    u.prototype.getXValueAt = function(n) {
        if (!n)
            return null;
        var t = null;
        return "left" === this._position ? t = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.height * (this.chart.axisX.lineCoordinates.y2 - n.y) + this.chart.axisX.minimum : "bottom" === this._position && (t = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.width * (n.x - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.minimum),
        t
    }
    ;
    u.prototype.calculateValueToPixelconversionParameters = function(n) {
        n = {
            pixelPerUnit: null,
            minimum: null,
            reference: null
        };
        var t = this.lineCoordinates.width
          , i = this.lineCoordinates.height;
        n.minimum = this.minimum;
        ("bottom" === this._position || "top" === this._position) && (n.pixelPerUnit = t / Math.abs(this.maximum - this.minimum),
        n.reference = this.lineCoordinates.x1);
        ("left" === this._position || "right" === this._position) && (n.pixelPerUnit = -1 * i / Math.abs(this.maximum - this.minimum),
        n.reference = this.lineCoordinates.y2);
        this.conversionParameters = n
    }
    ;
    u.prototype.calculateAxisParameters = function() {
        var n = this.chart.layoutManager.getFreeSpace(), i, f, e, t;
        if ("bottom" === this._position || "top" === this._position ? (this.maxWidth = n.width,
        this.maxHeight = n.height) : (this.maxWidth = n.height,
        this.maxHeight = n.width),
        n = "axisX" === this.type ? 500 > this.maxWidth ? 8 : Math.max(6, Math.floor(this.maxWidth / 62)) : Math.floor(this.maxWidth / 40),
        "axisX" === this.type ? (i = null !== this.sessionVariables.internalMinimum ? this.sessionVariables.internalMinimum : this.dataInfo.viewPortMin,
        f = null !== this.sessionVariables.internalMaximum ? this.sessionVariables.internalMaximum : this.dataInfo.viewPortMax,
        0 == f - i && (f += .4,
        i -= .4),
        e = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1) : "axisY" === this.type && (i = "undefined" == typeof this._options.minimum ? this.dataInfo.viewPortMin : this._options.minimum,
        f = "undefined" == typeof this._options.maximum ? this.dataInfo.viewPortMax : this._options.maximum,
        0 == f - i ? (f += 5,
        i -= 5) : (0 !== f && (f += Math.abs(.05)),
        0 !== i && (i -= Math.abs(.05))),
        this.includeZero && "undefined" == typeof this._options.minimum && 0 < i && (i = 0),
        this.includeZero && "undefined" == typeof this._options.maximum && 0 > f && (f = 0)),
        "axisX" === this.type && "dateTime" === this.chart.plotInfo.axisXValueType ? (t = f - i,
        this.intervalType || (t / 1 <= n ? (this.interval = 1,
        this.intervalType = "millisecond") : t / 2 <= n ? (this.interval = 2,
        this.intervalType = "millisecond") : t / 5 <= n ? (this.interval = 5,
        this.intervalType = "millisecond") : t / 10 <= n ? (this.interval = 10,
        this.intervalType = "millisecond") : t / 20 <= n ? (this.interval = 20,
        this.intervalType = "millisecond") : t / 50 <= n ? (this.interval = 50,
        this.intervalType = "millisecond") : t / 100 <= n ? (this.interval = 100,
        this.intervalType = "millisecond") : t / 200 <= n ? (this.interval = 200,
        this.intervalType = "millisecond") : t / 250 <= n ? (this.interval = 250,
        this.intervalType = "millisecond") : t / 300 <= n ? (this.interval = 300,
        this.intervalType = "millisecond") : t / 400 <= n ? (this.interval = 400,
        this.intervalType = "millisecond") : t / 500 <= n ? (this.interval = 500,
        this.intervalType = "millisecond") : t / (1 * r.secondDuration) <= n ? (this.interval = 1,
        this.intervalType = "second") : t / (2 * r.secondDuration) <= n ? (this.interval = 2,
        this.intervalType = "second") : t / (5 * r.secondDuration) <= n ? (this.interval = 5,
        this.intervalType = "second") : t / (10 * r.secondDuration) <= n ? (this.interval = 10,
        this.intervalType = "second") : t / (15 * r.secondDuration) <= n ? (this.interval = 15,
        this.intervalType = "second") : t / (20 * r.secondDuration) <= n ? (this.interval = 20,
        this.intervalType = "second") : t / (30 * r.secondDuration) <= n ? (this.interval = 30,
        this.intervalType = "second") : t / (1 * r.minuteDuration) <= n ? (this.interval = 1,
        this.intervalType = "minute") : t / (2 * r.minuteDuration) <= n ? (this.interval = 2,
        this.intervalType = "minute") : t / (5 * r.minuteDuration) <= n ? (this.interval = 5,
        this.intervalType = "minute") : t / (10 * r.minuteDuration) <= n ? (this.interval = 10,
        this.intervalType = "minute") : t / (15 * r.minuteDuration) <= n ? (this.interval = 15,
        this.intervalType = "minute") : t / (20 * r.minuteDuration) <= n ? (this.interval = 20,
        this.intervalType = "minute") : t / (30 * r.minuteDuration) <= n ? (this.interval = 30,
        this.intervalType = "minute") : t / (1 * r.hourDuration) <= n ? (this.interval = 1,
        this.intervalType = "hour") : t / (2 * r.hourDuration) <= n ? (this.interval = 2,
        this.intervalType = "hour") : t / (3 * r.hourDuration) <= n ? (this.interval = 3,
        this.intervalType = "hour") : t / (6 * r.hourDuration) <= n ? (this.interval = 6,
        this.intervalType = "hour") : t / (1 * r.dayDuration) <= n ? (this.interval = 1,
        this.intervalType = "day") : t / (2 * r.dayDuration) <= n ? (this.interval = 2,
        this.intervalType = "day") : t / (4 * r.dayDuration) <= n ? (this.interval = 4,
        this.intervalType = "day") : t / (1 * r.weekDuration) <= n ? (this.interval = 1,
        this.intervalType = "week") : t / (2 * r.weekDuration) <= n ? (this.interval = 2,
        this.intervalType = "week") : t / (3 * r.weekDuration) <= n ? (this.interval = 3,
        this.intervalType = "week") : t / (1 * r.monthDuration) <= n ? (this.interval = 1,
        this.intervalType = "month") : t / (2 * r.monthDuration) <= n ? (this.interval = 2,
        this.intervalType = "month") : t / (3 * r.monthDuration) <= n ? (this.interval = 3,
        this.intervalType = "month") : t / (6 * r.monthDuration) <= n ? (this.interval = 6,
        this.intervalType = "month") : (this.interval = t / (1 * r.yearDuration) <= n ? 1 : t / (2 * r.yearDuration) <= n ? 2 : t / (4 * r.yearDuration) <= n ? 4 : Math.floor(u.getNiceNumber(t / (n - 1), !0) / r.yearDuration),
        this.intervalType = "year")),
        this.minimum = null !== this.sessionVariables.internalMinimum ? this.sessionVariables.internalMinimum : i - e / 2,
        this.maximum = this.sessionVariables.internalMaximum ? this.sessionVariables.internalMaximum : f + e / 2,
        this.valueFormatString || ("year" === this.intervalType ? this.valueFormatString = "YYYY" : "month" === this.intervalType ? this.valueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.valueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.valueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.valueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.valueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.valueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.valueFormatString = "fff'ms'")),
        this.intervalStartPosition = this.getLabelStartPoint(new Date(this.minimum), this.intervalType, this.interval)) : (this.intervalType = "number",
        t = u.getNiceNumber(f - i, !1),
        this.interval = this._options && this._options.interval ? this._options.interval : u.getNiceNumber(t / (n - 1), !0),
        this.minimum = null !== this.sessionVariables.internalMinimum ? this.sessionVariables.internalMinimum : Math.floor(i / this.interval) * this.interval,
        this.maximum = null !== this.sessionVariables.internalMaximum ? this.sessionVariables.internalMaximum : Math.ceil(f / this.interval) * this.interval,
        "axisX" === this.type ? (null === this.sessionVariables.internalMinimum && (this.minimum = i - e / 2),
        this.sessionVariables.internalMaximum || (this.maximum = f + e / 2),
        this.intervalStartPosition = Math.floor((this.minimum + .2 * this.interval) / this.interval) * this.interval) : "axisY" === this.type && (this.intervalStartPosition = this.minimum)),
        "axisX" === this.type && (this._absoluteMinimum = this._options && "undefined" != typeof this._options.minimum ? this._options.minimum : this.dataInfo.min - e / 2,
        this._absoluteMaximum = this._options && "undefined" != typeof this._options.maximum ? this._options.maximum : this.dataInfo.max + e / 2),
        !this.valueFormatString && (this.valueFormatString = "#,##0.##",
        t = Math.abs(this.maximum - this.minimum),
        1 > t && (i = Math.floor(Math.abs(Math.log(t) / Math.LN10)) + 2,
        2 < i)))
            for (f = 0; f < i - 2; f++)
                this.valueFormatString += "#"
    }
    ;
    u.getNiceNumber = function(n, t) {
        var r = Math.floor(Math.log(n) / Math.LN10)
          , i = n / Math.pow(10, r);
        return (t ? 1.5 > i ? 1 : 3 > i ? 2 : 7 > i ? 5 : 10 : 1 >= i ? 1 : 2 >= i ? 2 : 5 >= i ? 5 : 10) * Math.pow(10, r)
    }
    ;
    u.prototype.getLabelStartPoint = function() {
        var n = g(this.interval, this.intervalType)
          , n = new Date(Math.floor(this.minimum / n) * n);
        return "millisecond" !== this.intervalType && ("second" === this.intervalType ? 0 < n.getMilliseconds() && (n.setSeconds(n.getSeconds() + 1),
        n.setMilliseconds(0)) : "minute" === this.intervalType ? (0 < n.getSeconds() || 0 < n.getMilliseconds()) && (n.setMinutes(n.getMinutes() + 1),
        n.setSeconds(0),
        n.setMilliseconds(0)) : "hour" === this.intervalType ? (0 < n.getMinutes() || 0 < n.getSeconds() || 0 < n.getMilliseconds()) && (n.setHours(n.getHours() + 1),
        n.setMinutes(0),
        n.setSeconds(0),
        n.setMilliseconds(0)) : "day" === this.intervalType ? (0 < n.getHours() || 0 < n.getMinutes() || 0 < n.getSeconds() || 0 < n.getMilliseconds()) && (n.setDate(n.getDate() + 1),
        n.setHours(0),
        n.setMinutes(0),
        n.setSeconds(0),
        n.setMilliseconds(0)) : "week" === this.intervalType ? (0 < n.getDay() || 0 < n.getHours() || 0 < n.getMinutes() || 0 < n.getSeconds() || 0 < n.getMilliseconds()) && (n.setDate(n.getDate() + (7 - n.getDay())),
        n.setHours(0),
        n.setMinutes(0),
        n.setSeconds(0),
        n.setMilliseconds(0)) : "month" === this.intervalType ? (1 < n.getDate() || 0 < n.getHours() || 0 < n.getMinutes() || 0 < n.getSeconds() || 0 < n.getMilliseconds()) && (n.setMonth(n.getMonth() + 1),
        n.setDate(1),
        n.setHours(0),
        n.setMinutes(0),
        n.setSeconds(0),
        n.setMilliseconds(0)) : "year" === this.intervalType && (0 < n.getMonth() || 1 < n.getDate() || 0 < n.getHours() || 0 < n.getMinutes() || 0 < n.getSeconds() || 0 < n.getMilliseconds()) && (n.setFullYear(n.getFullYear() + 1),
        n.setMonth(0),
        n.setDate(1),
        n.setHours(0),
        n.setMinutes(0),
        n.setSeconds(0),
        n.setMilliseconds(0))),
        n
    }
    ;
    v(at, h);
    v(a, h);
    a.prototype._initialize = function() {
        if (this.enabled) {
            this.container = document.createElement("div");
            this.container.setAttribute("class", "canvasjs-chart-tooltip");
            this.container.style.position = "absolute";
            this.container.style.height = "auto";
            this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
            this.container.style.zIndex = "1000";
            this.container.style.display = "none";
            var t;
            t = '<div style=" width: auto;height: auto;min-width: 50px;';
            t += "line-height: 20px;";
            t += "padding: 5px;";
            t += "font-family: Calibri, Arial, Georgia, serif;";
            t += "font-weight: 400;";
            t += "font-style: " + (n ? "italic;" : "normal;");
            t += "font-size: 14px;";
            t += "color: #000000;";
            t += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
            t += "text-align: left;";
            t += "border: 2px solid gray;";
            t += n ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";
            t += "text-indent: 0px;";
            t += "white-space: nowrap;";
            t += "border-radius: 10px;";
            n || (t += "filter: alpha(opacity = 90);",
            t += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
            t += '} "> Sample Tooltip<\/div>';
            this.container.innerHTML = t;
            this.contentDiv = this.container.firstChild;
            this.container.style.borderRadius = this.contentDiv.style.borderRadius;
            this.chart._canvasJSContainer.appendChild(this.container)
        }
    }
    ;
    a.prototype.mouseMoveHandler = function(n, t) {
        this._lastUpdated && 40 > (new Date).getTime() - this._lastUpdated || (this._lastUpdated = (new Date).getTime(),
        this._updateToolTip(n, t))
    }
    ;
    a.prototype._updateToolTip = function(t, i) {
        var u;
        if (this.enabled) {
            if ("undefined" == typeof t || "undefined" == typeof i) {
                if (isNaN(this._prevX) || isNaN(this._prevY))
                    return;
                t = this._prevX;
                i = this._prevY
            } else
                this._prevX = t,
                this._prevY = i;
            var o = null
              , f = null
              , r = []
              , e = 0;
            if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
                for (e = "xySwapped" === this.chart.plotInfo.axisPlacement ? (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.height * (this.chart.axisX.lineCoordinates.y2 - i) + this.chart.axisX.minimum : (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.width * (t - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.minimum,
                o = [],
                f = 0; f < this.chart.data.length; f++)
                    u = this.chart.data[f].getDataPointAtX(e, !0),
                    u && 0 <= u.index && (u.dataSeries = this.chart.data[f],
                    null !== u.dataPoint.y && o.push(u));
                if (0 === o.length)
                    return;
                for (o.sort(function(n, t) {
                    return n.distance - t.distance
                }),
                e = o[0],
                f = 0; f < o.length; f++)
                    o[f].dataPoint.x.valueOf() === e.dataPoint.x.valueOf() && r.push(o[f]);
                o = null
            } else if ((u = this.chart.getDataPointAtXY(t, i, !0)) ? (this.currentDataPointIndex = u.dataPointIndex,
            this.currentSeriesIndex = u.dataSeries.index) : n ? (u = gt(t, i, this.chart._eventManager.ghostCtx),
            0 < u && "undefined" != typeof this.chart._eventManager.objectMap[u] ? (eventObject = this.chart._eventManager.objectMap[u],
            this.currentSeriesIndex = eventObject.dataSeriesIndex,
            this.currentDataPointIndex = 0 <= eventObject.dataPointIndex ? eventObject.dataPointIndex : -1) : this.currentDataPointIndex = -1) : this.currentDataPointIndex = -1,
            0 <= this.currentSeriesIndex) {
                if (f = this.chart.data[this.currentSeriesIndex],
                u = {},
                0 <= this.currentDataPointIndex)
                    o = f.dataPoints[this.currentDataPointIndex],
                    u.dataSeries = f,
                    u.dataPoint = o,
                    u.index = this.currentDataPointIndex,
                    u.distance = Math.abs(o.x - e);
                else if ("line" === f.type || "stepLine" === f.type || "spline" === f.type || "area" === f.type || "stepArea" === f.type || "splineArea" === f.type || "stackedArea" === f.type || "stackedArea100" === f.type)
                    e = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.width * (t - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.minimum.valueOf(),
                    u = f.getDataPointAtX(e, !0),
                    u.dataSeries = f,
                    this.currentDataPointIndex = u.index,
                    o = u.dataPoint;
                else
                    return;
                null !== u.dataPoint.y && r.push(u)
            }
            if (0 < r.length) {
                this.highlightObjects(r);
                e = "";
                e = this.getToolTipInnerHTML({
                    entries: r
                });
                this.contentDiv.innerHTML = e;
                this.contentDiv.innerHTML = e;
                e = !1;
                "none" === this.container.style.display && (e = !0,
                this.container.style.display = "block");
                try {
                    this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.borderColor ? this.borderColor : r[0].dataPoint.color ? r[0].dataPoint.color : r[0].dataSeries.color ? r[0].dataSeries.color : r[0].dataSeries._colorSet[r[0].index % r[0].dataSeries._colorSet.length]
                } catch (s) {}
                "pie" === r[0].dataSeries.type || "doughnut" === r[0].dataSeries.type || "bar" === r[0].dataSeries.type || "stackedBar" === r[0].dataSeries.type || "stackedBar100" === r[0].dataSeries.type ? toolTipLeft = t - 10 - this.container.clientWidth : (toolTipLeft = this.chart.axisX.lineCoordinates.width / Math.abs(this.chart.axisX.maximum - this.chart.axisX.minimum) * Math.abs(r[0].dataPoint.x - this.chart.axisX.minimum) + this.chart.axisX.lineCoordinates.x1 + .5 - this.container.clientWidth << 0,
                toolTipLeft -= 10);
                toolTipLeft = 0 < toolTipLeft ? toolTipLeft + "px" : toolTipLeft + this.container.clientWidth + 20 + "px";
                r = 1 !== r.length || this.shared || "line" !== r[0].dataSeries.type && "stepLine" !== r[0].dataSeries.type && "spline" !== r[0].dataSeries.type && "area" !== r[0].dataSeries.type && "stepArea" !== r[0].dataSeries.type && "splineArea" !== r[0].dataSeries.type && "stackedArea" !== r[0].dataSeries.type && "stackedArea100" !== r[0].dataSeries.type ? "bar" === r[0].dataSeries.type || "stackedBar" === r[0].dataSeries.type || "stackedBar100" === r[0].dataSeries.type ? r[0].dataSeries.axisX.lineCoordinates.y2 - r[0].dataSeries.axisX.lineCoordinates.height / Math.abs(r[0].dataSeries.axisX.maximum - r[0].dataSeries.axisX.minimum) * Math.abs(r[0].dataPoint.x - r[0].dataSeries.axisX.minimum) + .5 << 0 : i : r[0].dataSeries.axisY.lineCoordinates.y2 - r[0].dataSeries.axisY.lineCoordinates.height / Math.abs(r[0].dataSeries.axisY.maximum - r[0].dataSeries.axisY.minimum) * Math.abs(r[0].dataPoint.y - r[0].dataSeries.axisY.minimum) + .5 << 0;
                r = -r + 10;
                0 < r + this.container.clientHeight + 5 && (r -= r + this.container.clientHeight + 5 - 0);
                this.container.style.left = toolTipLeft;
                this.container.style.bottom = r + "px";
                !this.animationEnabled || e ? this.disableAnimation() : this.enableAnimation()
            }
        }
    }
    ;
    a.prototype.highlightObjects = function(n) {
        var r, u, i, t, f;
        if (this.enabled) {
            for (r = this.chart.overlaidCanvasCtx,
            this.chart.resetOverlayedCanvas(),
            r.save(),
            u = this.chart.plotArea,
            r.rect(u.x1, u.y1, u.width, u.height),
            r.clip(),
            r.beginPath(),
            u = 0; u < n.length; u++)
                i = n[u],
                (i = this.chart._eventManager.objectMap[i.dataSeries.dataPointIds[i.index]]) && i.objectType && "dataPoint" === i.objectType && (t = this.chart.data[i.dataSeriesIndex],
                f = i.dataPointIndex,
                "line" === t.type || "stepLine" === t.type || "spline" === t.type || "scatter" === t.type || "area" === t.type || "stepArea" === t.type || "splineArea" === t.type || "stackedArea" === t.type || "stackedArea100" === t.type ? (t = t.getMarkerProperties(f, i.x1, i.y1, this.chart.overlaidCanvasCtx),
                t.size = Math.max(1.5 * t.size << 0, 10),
                t.borderColor = t.borderColor || "#FFFFFF",
                t.borderThickness = t.borderThickness || Math.ceil(.1 * t.size),
                o.drawMarkers([t])) : "bubble" === t.type ? (t = t.getMarkerProperties(f, i.x1, i.y1, this.chart.overlaidCanvasCtx),
                t.size = i.size,
                t.color = "white",
                t.borderColor = "white",
                r.globalAlpha = .3,
                o.drawMarkers([t]),
                r.globalAlpha = 1) : "column" === t.type || "stackedColumn" === t.type || "stackedColumn100" === t.type || "bar" === t.type || "stackedBar" === t.type || "stackedBar100" === t.type ? (r.globalAlpha = .3,
                c(r, i.x1, i.y1, i.x2, i.y2, "white", !1, !1, !1, !1),
                r.globalAlpha = 1) : ("pie" === t.type || "doughnut" === t.type) && (r.globalAlpha = .3,
                ht(r, i.center, i.radius, "white", t.type, i.startAngle, i.endAngle),
                r.globalAlpha = 1));
            r.globalAlpha = 1;
            r.restore()
        }
    }
    ;
    a.prototype.getToolTipInnerHTML = function(n) {
        n = n.entries;
        for (var f = "", t = null, i = null, e = 0, u = "", o = !0, r = 0; r < n.length; r++)
            if (n[r].dataSeries.toolTipContent || n[r].dataPoint.toolTipContent) {
                o = !1;
                break
            }
        if (o && this.content && "function" == typeof this.content)
            f = this.content({
                entries: n
            });
        else if (1 < n.length)
            for (r = 0; r < n.length; r++)
                t = n[r].dataSeries,
                i = n[r].dataPoint,
                e = n[r].index,
                u = "",
                0 === r && o && !this.content && (u += "undefined" != typeof this.chart.axisX.labels[i.x] ? this.chart.axisX.labels[i.x] : "{x}",
                u += "<\/br>"),
                "line" === t.type || "stepLine" === t.type || "spline" === t.type || "area" === t.type || "stepArea" === t.type || "splineArea" === t.type || "column" === t.type || "bar" === t.type || "scatter" === t.type || "stackedColumn" === t.type || "stackedColumn100" === t.type || "stackedBar" === t.type || "stackedBar100" === t.type || "stackedArea" === t.type || "stackedArea100" === t.type ? u += i.toolTipContent ? i.toolTipContent : t.toolTipContent ? t.toolTipContent : this.content && "function" != typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>{name}:<\/span>&nbsp;&nbsp;{y}" : "bubble" === t.type ? u += i.toolTipContent ? i.toolTipContent : t.toolTipContent ? t.toolTipContent : this.content && "function" != typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>{name}:<\/span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : ("pie" === t.type || "doughnut" === t.type) && (u += i.toolTipContent ? i.toolTipContent : t.toolTipContent ? t.toolTipContent : this.content && "function" != typeof this.content ? this.content : "&nbsp;&nbsp;{y}"),
                f += this.chart.replaceKeywordsWithValue(u, i, t, e),
                r < n.length - 1 && (f += "<\/br>");
        else
            t = n[0].dataSeries,
            i = n[0].dataPoint,
            e = n[0].index,
            "line" === t.type || "stepLine" === t.type || "spline" === t.type || "area" === t.type || "stepArea" === t.type || "splineArea" === t.type || "column" === t.type || "bar" === t.type || "scatter" === t.type || "stackedColumn" === t.type || "stackedColumn100" === t.type || "stackedBar" === t.type || "stackedBar100" === t.type || "stackedArea" === t.type || "stackedArea100" === t.type ? u = i.toolTipContent ? i.toolTipContent : t.toolTipContent ? t.toolTipContent : this.content && "function" != typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>" + (i.label ? "{label}" : "{x}") + " :<\/span>&nbsp;&nbsp;{y}" : "bubble" === t.type ? u = i.toolTipContent ? i.toolTipContent : t.toolTipContent ? t.toolTipContent : this.content && "function" != typeof this.content ? this.content : "<span style='\"'color:{color};'\"'>" + (i.label ? "{label}" : "{x}") + ":<\/span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : ("pie" === t.type || "doughnut" === t.type) && (u = i.toolTipContent ? i.toolTipContent : t.toolTipContent ? t.toolTipContent : this.content && "function" != typeof this.content ? this.content : (i.name ? "{name}:&nbsp;&nbsp;" : i.label ? "{label}:&nbsp;&nbsp;" : "") + "{y}"),
            f += this.chart.replaceKeywordsWithValue(u, i, t, e);
        return f
    }
    ;
    a.prototype.enableAnimation = function() {
        this.container.style.WebkitTransition || (this.container.style.WebkitTransition = "left .2s ease-out, bottom .2s ease-out",
        this.container.style.MozTransition = "left .2s ease-out, bottom .2s ease-out",
        this.container.style.MsTransition = "left .2s ease-out, bottom .2s ease-out",
        this.container.style.transition = "left .2s ease-out, bottom .2s ease-out")
    }
    ;
    a.prototype.disableAnimation = function() {
        this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "",
        this.container.style.MozTransition = "",
        this.container.style.MsTransition = "",
        this.container.style.transition = "")
    }
    ;
    a.prototype.hide = function() {
        this.enabled && (this.container.style.display = "none",
        this.currentSeriesIndex = -1,
        this._prevY = this._prevX = NaN,
        this.chart.resetOverlayedCanvas())
    }
    ;
    t.prototype.replaceKeywordsWithValue = function(n, t, i, r) {
        var u = this;
        return n.replace(/\{\s*[a-zA-Z]+\s*\}|"[^"]*"|'[^']*'/g, function(n) {
            if ('"' === n[0] && '"' === n[n.length - 1] || "'" === n[0] && "'" === n[n.length - 1])
                return n.slice(1, n.length - 1);
            n = ct(n.slice(1, n.length - 1));
            var f = null;
            if ("color" === n)
                return t.color ? t.color : i.color ? i.color : i._colorSet[r % i._colorSet.length];
            if (t.hasOwnProperty(n))
                f = t;
            else if (i.hasOwnProperty(n))
                f = i;
            else
                return "";
            return "x" === n ? u.axisX && "dateTime" === u.plotInfo.axisXValueType ? ui(f[n], t.xValueFormatString ? t.xValueFormatString : i.xValueFormatString ? i.xValueFormatString : u.axisX && u.axisX.valueFormatString ? u.axisX.valueFormatString : "DD MMM YY", u._cultureInfo) : pt(f[n], t.xValueFormatString ? t.xValueFormatString : i.xValueFormatString ? i.xValueFormatString : "#,##0.########", u._cultureInfo) : "y" === n ? pt(f[n], t.yValueFormatString ? t.yValueFormatString : i.yValueFormatString ? i.yValueFormatString : "#,##0.########", u._cultureInfo) : f[n]
        })
    }
    ;
    it.prototype.reset = function() {
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.eventObjects = [];
        n && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height),
        this.ghostCtx.beginPath())
    }
    ;
    it.prototype.getNewObjectTrackingId = function() {
        return ++this.lastObjectId
    }
    ;
    it.prototype.mouseEventHandler = function(n) {
        if ("mousemove" === n.type || "click" === n.type) {
            var u = []
              , i = ot(n)
              , t = null;
            if ((t = this.chart.getObjectAtXY(i.x, i.y, !1)) && "undefined" != typeof this.objectMap[t])
                if (t = this.objectMap[t],
                "dataPoint" === t.objectType) {
                    var r = this.chart.data[t.dataSeriesIndex]
                      , f = r.dataPoints[t.dataPointIndex]
                      , e = t.dataPointIndex;
                    t.eventParameter = {
                        x: i.x,
                        y: i.y,
                        dataPoint: f,
                        dataSeries: r._options,
                        dataPointIndex: e,
                        dataSeriesIndex: r.index
                    };
                    t.eventContext = {
                        context: f,
                        userContext: f,
                        mouseover: "mouseover",
                        mousemove: "mousemove",
                        mouseout: "mouseout",
                        click: "click"
                    };
                    u.push(t);
                    t = this.objectMap[r.id];
                    t.eventParameter = {
                        x: i.x,
                        y: i.y,
                        dataPoint: f,
                        dataSeries: r._options,
                        dataPointIndex: e,
                        dataSeriesIndex: r.index
                    };
                    t.eventContext = {
                        context: r,
                        userContext: r._options,
                        mouseover: "mouseover",
                        mousemove: "mousemove",
                        mouseout: "mouseout",
                        click: "click"
                    };
                    u.push(this.objectMap[r.id])
                } else
                    "legendItem" === t.objectType && (r = this.chart.data[t.dataSeriesIndex],
                    f = r.dataPoints[t.dataPointIndex],
                    t.eventParameter = {
                        x: i.x,
                        y: i.y,
                        dataSeries: r._options,
                        dataPoint: f,
                        dataPointIndex: t.dataPointIndex,
                        dataSeriesIndex: t.dataSeriesIndex
                    },
                    t.eventContext = {
                        context: this.chart.legend,
                        userContext: this.chart.legend._options,
                        mouseover: "itemmouseover",
                        mousemove: "itemmousemove",
                        mouseout: "itemmouseout",
                        click: "itemclick"
                    },
                    u.push(t));
            for (r = [],
            i = 0; i < this.mouseoveredObjectMaps.length; i++) {
                for (f = !0,
                t = 0; t < u.length; t++)
                    if (u[t].id === this.mouseoveredObjectMaps[i].id) {
                        f = !1;
                        break
                    }
                f ? this.fireEvent(this.mouseoveredObjectMaps[i], "mouseout", n) : r.push(this.mouseoveredObjectMaps[i])
            }
            for (this.mouseoveredObjectMaps = r,
            i = 0; i < u.length; i++) {
                for (r = !1,
                t = 0; t < this.mouseoveredObjectMaps.length; t++)
                    if (u[i].id === this.mouseoveredObjectMaps[t].id) {
                        r = !0;
                        break
                    }
                r || (this.fireEvent(u[i], "mouseover", n),
                this.mouseoveredObjectMaps.push(u[i]));
                "click" === n.type ? this.fireEvent(u[i], "click", n) : "mousemove" === n.type && this.fireEvent(u[i], "mousemove", n)
            }
        }
    }
    ;
    it.prototype.fireEvent = function(n, t, i) {
        if (n && t) {
            var f = n.eventParameter
              , u = n.eventContext
              , r = n.eventContext.userContext;
            r && u && r[u[t]] && r[u[t]].call(r, f);
            "mouseout" !== t ? r.cursor && r.cursor !== i.target.style.cursor && (i.target.style.cursor = r.cursor) : (i.target.style.cursor = this.chart._defaultCursor,
            delete n.eventParameter,
            delete n.eventContext);
            "click" === t && "dataPoint" === n.objectType && this.chart.pieDoughnutClickHandler && this.chart.pieDoughnutClickHandler.call(this.chart.data[n.dataSeriesIndex], f)
        }
    }
    ;
    v(ii, h);
    o = {
        drawMarker: function(n, t, i, r, u, f, e, o) {
            if (i) {
                var s = 1;
                i.fillStyle = f ? f : "#000000";
                i.strokeStyle = e ? e : "#000000";
                i.lineWidth = o ? o : 0;
                "circle" === r ? (i.moveTo(n, t),
                i.beginPath(),
                i.arc(n, t, u / 2, 0, 2 * Math.PI, !1),
                f && i.fill(),
                o && (e ? i.stroke() : (s = i.globalAlpha,
                i.globalAlpha = .15,
                i.strokeStyle = "black",
                i.stroke(),
                i.globalAlpha = s))) : "square" === r ? (i.beginPath(),
                i.rect(n - u / 2, t - u / 2, u, u),
                f && i.fill(),
                o && (e ? i.stroke() : (s = i.globalAlpha,
                i.globalAlpha = .15,
                i.strokeStyle = "black",
                i.stroke(),
                i.globalAlpha = s))) : "triangle" === r ? (i.beginPath(),
                i.moveTo(n - u / 2, t + u / 2),
                i.lineTo(n + u / 2, t + u / 2),
                i.lineTo(n, t - u / 2),
                i.closePath(),
                f && i.fill(),
                o && (e ? i.stroke() : (s = i.globalAlpha,
                i.globalAlpha = .15,
                i.strokeStyle = "black",
                i.stroke(),
                i.globalAlpha = s)),
                i.beginPath()) : "cross" === r && (i.strokeStyle = f,
                i.lineWidth = u / 4,
                i.beginPath(),
                i.moveTo(n - u / 2, t - u / 2),
                i.lineTo(n + u / 2, t + u / 2),
                i.stroke(),
                i.moveTo(n + u / 2, t - u / 2),
                i.lineTo(n - u / 2, t + u / 2),
                i.stroke())
            }
        },
        drawMarkers: function(n) {
            for (var t, i = 0; i < n.length; i++)
                t = n[i],
                o.drawMarker(t.x, t.y, t.ctx, t.type, t.size, t.color, t.borderColor, t.borderThickness)
        }
    };
    bt = {
        Chart: function(n, i) {
            var r = new t(n,i,this);
            this.render = function() {
                r.render(this.options)
            }
            ;
            this.options = r._options
        },
        addColorSet: function(n, t) {
            k[n] = t
        },
        addCultureInfo: function(n, t) {
            yt[n] = t
        }
    };
    bt.Chart.version = "v1.4.1 GA";
    window.CanvasJS = bt
}
)();
document.createElement("canvas").getContext || function() {
    function ct() {
        return this.context_ || (this.context_ = new w(this))
    }
    function lt(n, t) {
        var i = g.call(arguments, 2);
        return function() {
            return n.apply(t, i.concat(g.call(arguments)))
        }
    }
    function rt(n) {
        return String(n).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    }
    function ut(n) {
        n.namespaces.g_vml_ || n.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        n.namespaces.g_o_ || n.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        n.styleSheets.ex_canvas_ || (n = n.createStyleSheet(),
        n.owningElement.id = "ex_canvas_",
        n.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")
    }
    function at(n) {
        var t = n.srcElement;
        switch (n.propertyName) {
        case "width":
            t.getContext().clearRect();
            t.style.width = t.attributes.width.nodeValue + "px";
            t.firstChild.style.width = t.clientWidth + "px";
            break;
        case "height":
            t.getContext().clearRect();
            t.style.height = t.attributes.height.nodeValue + "px";
            t.firstChild.style.height = t.clientHeight + "px"
        }
    }
    function vt(n) {
        n = n.srcElement;
        n.firstChild && (n.firstChild.style.width = n.clientWidth + "px",
        n.firstChild.style.height = n.clientHeight + "px")
    }
    function a() {
        return [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
    }
    function o(n, t) {
        for (var r, e, u, f = a(), i = 0; 3 > i; i++)
            for (r = 0; 3 > r; r++) {
                for (e = 0,
                u = 0; 3 > u; u++)
                    e += n[i][u] * t[u][r];
                f[i][r] = e
            }
        return f
    }
    function ft(n, t) {
        t.fillStyle = n.fillStyle;
        t.lineCap = n.lineCap;
        t.lineJoin = n.lineJoin;
        t.lineWidth = n.lineWidth;
        t.miterLimit = n.miterLimit;
        t.shadowBlur = n.shadowBlur;
        t.shadowColor = n.shadowColor;
        t.shadowOffsetX = n.shadowOffsetX;
        t.shadowOffsetY = n.shadowOffsetY;
        t.strokeStyle = n.strokeStyle;
        t.globalAlpha = n.globalAlpha;
        t.font = n.font;
        t.textAlign = n.textAlign;
        t.textBaseline = n.textBaseline;
        t.arcScaleX_ = n.arcScaleX_;
        t.arcScaleY_ = n.arcScaleY_;
        t.lineScale_ = n.lineScale_
    }
    function et(n) {
        var t = n.indexOf("(", 3)
          , i = n.indexOf(")", t + 1)
          , t = n.substring(t + 1, i).split(",");
        return (4 != t.length || "a" != n.charAt(3)) && (t[3] = 1),
        t
    }
    function v(n, t, i) {
        return Math.min(i, Math.max(t, n))
    }
    function y(n, t, i) {
        return 0 > i && i++,
        1 < i && i--,
        1 > 6 * i ? n + 6 * (t - n) * i : 1 > 2 * i ? t : 2 > 3 * i ? n + 6 * (t - n) * (2 / 3 - i) : n
    }
    function p(n) {
        var i, r, u, t, f, o;
        if (n in tt)
            return tt[n];
        if (r = 1,
        n = String(n),
        "#" == n.charAt(0))
            i = n;
        else if (/^rgb/.test(n)) {
            for (r = et(n),
            i = "#",
            t = 0; 3 > t; t++)
                u = -1 != r[t].indexOf("%") ? Math.floor(255 * (parseFloat(r[t]) / 100)) : +r[t],
                i += e[v(u, 0, 255)];
            r = +r[3]
        } else
            /^hsl/.test(n) ? (t = r = et(n),
            i = parseFloat(t[0]) / 360 % 360,
            0 > i && i++,
            u = v(parseFloat(t[1]) / 100, 0, 1),
            t = v(parseFloat(t[2]) / 100, 0, 1),
            0 == u ? u = t = i = t : (f = .5 > t ? t * (1 + u) : t + u - t * u,
            o = 2 * t - f,
            u = y(o, f, i + 1 / 3),
            t = y(o, f, i),
            i = y(o, f, i - 1 / 3)),
            i = "#" + e[Math.floor(255 * u)] + e[Math.floor(255 * t)] + e[Math.floor(255 * i)],
            r = r[3]) : i = wt[n] || n;
        return tt[n] = {
            color: i,
            alpha: r
        }
    }
    function w(n) {
        this.m_ = a();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * i;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = n;
        var t = "width:" + n.clientWidth + "px;height:" + n.clientHeight + "px;overflow:hidden;position:absolute"
          , r = n.ownerDocument.createElement("div");
        r.style.cssText = t;
        n.appendChild(r);
        t = r.cloneNode(!1);
        t.style.backgroundColor = "red";
        t.style.filter = "alpha(opacity=0)";
        n.appendChild(t);
        this.element_ = r;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    }
    function ot(n, t, i, r) {
        n.currentPath_.push({
            type: "bezierCurveTo",
            cp1x: t.x,
            cp1y: t.y,
            cp2x: i.x,
            cp2y: i.y,
            x: r.x,
            y: r.y
        });
        n.currentX_ = r.x;
        n.currentY_ = r.y
    }
    function st(n, t) {
        var i = p(n.strokeStyle)
          , u = i.color
          , i = i.alpha * n.globalAlpha
          , r = n.lineScale_ * n.lineWidth;
        1 > r && (i *= r);
        t.push("<g_vml_:stroke", ' opacity="', i, '"', ' joinstyle="', n.lineJoin, '"', ' miterlimit="', n.miterLimit, '"', ' endcap="', bt[n.lineCap] || "square", '"', ' weight="', r, 'px"', ' color="', u, '" />')
    }
    function ht(n, t, f, e) {
        var o = n.fillStyle, s = n.arcScaleX_, l = n.arcScaleY_, v = e.x - f.x, a = e.y - f.y, k, g;
        if (o instanceof h) {
            var c = 0
              , nt = e = 0
              , d = 0
              , w = 1;
            if ("gradient" == o.type_) {
                c = o.x1_ / s;
                f = o.y1_ / l;
                var y = r(n, o.x0_ / s, o.y0_ / l)
                  , c = r(n, c, f)
                  , c = 180 * Math.atan2(c.x - y.x, c.y - y.y) / Math.PI;
                0 > c && (c += 360);
                1e-6 > c && (c = 0)
            } else
                y = r(n, o.x0_, o.y0_),
                e = (y.x - f.x) / v,
                nt = (y.y - f.y) / a,
                v /= s * i,
                a /= l * i,
                w = u.max(v, a),
                d = 2 * o.r0_ / w,
                w = 2 * o.r1_ / w - d;
            for (s = o.colors_,
            s.sort(function(n, t) {
                return n.offset - t.offset
            }),
            l = s.length,
            y = s[0].color,
            f = s[l - 1].color,
            v = s[0].alpha * n.globalAlpha,
            n = s[l - 1].alpha * n.globalAlpha,
            a = [],
            k = 0; k < l; k++)
                g = s[k],
                a.push(g.offset * w + d + " " + g.color);
            t.push('<g_vml_:fill type="', o.type_, '"', ' method="none" focus="100%"', ' color="', y, '"', ' color2="', f, '"', ' colors="', a.join(","), '"', ' opacity="', n, '"', ' g_o_:opacity2="', v, '"', ' angle="', c, '"', ' focusposition="', e, ",", nt, '" />')
        } else
            o instanceof b ? v && a && t.push("<g_vml_:fill", ' position="', -f.x / v * s * s, ",", -f.y / a * l * l, '"', ' type="tile"', ' src="', o.src_, '" />') : (o = p(n.fillStyle),
            t.push('<g_vml_:fill color="', o.color, '" opacity="', o.alpha * n.globalAlpha, '" />'))
    }
    function r(n, t, r) {
        return n = n.m_,
        {
            x: i * (t * n[0][0] + r * n[1][0] + n[2][0]) - f,
            y: i * (t * n[0][1] + r * n[1][1] + n[2][1]) - f
        }
    }
    function s(n, t, i) {
        isFinite(t[0][0]) && isFinite(t[0][1]) && isFinite(t[1][0]) && isFinite(t[1][1]) && isFinite(t[2][0]) && isFinite(t[2][1]) && (n.m_ = t,
        i && (n.lineScale_ = pt(yt(t[0][0] * t[1][1] - t[0][1] * t[1][0]))))
    }
    function h(n) {
        this.type_ = n;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = []
    }
    function b(n, t) {
        if (!n || 1 != n.nodeType || "IMG" != n.tagName)
            throw new c("TYPE_MISMATCH_ERR");
        if ("complete" != n.readyState)
            throw new c("INVALID_STATE_ERR");
        switch (t) {
        case "repeat":
        case null:
        case "":
            this.repetition_ = "repeat";
            break;
        case "repeat-x":
        case "repeat-y":
        case "no-repeat":
            this.repetition_ = t;
            break;
        default:
            throw new c("SYNTAX_ERR");
        }
        this.src_ = n.src;
        this.width_ = n.width;
        this.height_ = n.height
    }
    function c(n) {
        this.code = this[n];
        this.message = n + ": DOM Exception " + this.code
    }
    var u = Math, t = u.round, k = u.sin, d = u.cos, yt = u.abs, pt = u.sqrt, i = 10, f = i / 2, g, nt, e, n, l;
    for (navigator.userAgent.match(/MSIE ([\d.]+)?/),
    g = Array.prototype.slice,
    ut(document),
    nt = {
        init: function(n) {
            n = n || document;
            n.createElement("canvas");
            n.attachEvent("onreadystatechange", lt(this.init_, this, n))
        },
        init_: function(n) {
            n = n.getElementsByTagName("canvas");
            for (var t = 0; t < n.length; t++)
                this.initElement(n[t])
        },
        initElement: function(n) {
            if (!n.getContext) {
                n.getContext = ct;
                ut(n.ownerDocument);
                n.innerHTML = "";
                n.attachEvent("onpropertychange", at);
                n.attachEvent("onresize", vt);
                var t = n.attributes;
                t.width && t.width.specified ? n.style.width = t.width.nodeValue + "px" : n.width = n.clientWidth;
                t.height && t.height.specified ? n.style.height = t.height.nodeValue + "px" : n.height = n.clientHeight
            }
            return n
        }
    },
    nt.init(),
    e = [],
    n = 0; 16 > n; n++)
        for (l = 0; 16 > l; l++)
            e[16 * n + l] = n.toString(16) + l.toString(16);
    var wt = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        grey: "#808080",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        oldlace: "#FDF5E6",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        whitesmoke: "#F5F5F5",
        yellowgreen: "#9ACD32"
    }
      , tt = {}
      , it = {}
      , bt = {
        butt: "flat",
        round: "round"
    }
      , n = w.prototype;
    n.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0),
        this.textMeasureEl_ = null);
        this.element_.innerHTML = ""
    }
    ;
    n.beginPath = function() {
        this.currentPath_ = []
    }
    ;
    n.moveTo = function(n, t) {
        var i = r(this, n, t);
        this.currentPath_.push({
            type: "moveTo",
            x: i.x,
            y: i.y
        });
        this.currentX_ = i.x;
        this.currentY_ = i.y
    }
    ;
    n.lineTo = function(n, t) {
        var i = r(this, n, t);
        this.currentPath_.push({
            type: "lineTo",
            x: i.x,
            y: i.y
        });
        this.currentX_ = i.x;
        this.currentY_ = i.y
    }
    ;
    n.bezierCurveTo = function(n, t, i, u, f, e) {
        f = r(this, f, e);
        n = r(this, n, t);
        i = r(this, i, u);
        ot(this, n, i, f)
    }
    ;
    n.quadraticCurveTo = function(n, t, i, u) {
        n = r(this, n, t);
        i = r(this, i, u);
        u = {
            x: this.currentX_ + 2 / 3 * (n.x - this.currentX_),
            y: this.currentY_ + 2 / 3 * (n.y - this.currentY_)
        };
        ot(this, u, {
            x: u.x + (i.x - this.currentX_) / 3,
            y: u.y + (i.y - this.currentY_) / 3
        }, i)
    }
    ;
    n.arc = function(n, t, u, e, o, s) {
        u *= i;
        var c = s ? "at" : "wa"
          , h = n + d(e) * u - f
          , l = t + k(e) * u - f;
        e = n + d(o) * u - f;
        o = t + k(o) * u - f;
        h != e || s || (h += .125);
        n = r(this, n, t);
        h = r(this, h, l);
        e = r(this, e, o);
        this.currentPath_.push({
            type: c,
            x: n.x,
            y: n.y,
            radius: u,
            xStart: h.x,
            yStart: h.y,
            xEnd: e.x,
            yEnd: e.y
        })
    }
    ;
    n.rect = function(n, t, i, r) {
        this.moveTo(n, t);
        this.lineTo(n + i, t);
        this.lineTo(n + i, t + r);
        this.lineTo(n, t + r);
        this.closePath()
    }
    ;
    n.strokeRect = function(n, t, i, r) {
        var u = this.currentPath_;
        this.beginPath();
        this.moveTo(n, t);
        this.lineTo(n + i, t);
        this.lineTo(n + i, t + r);
        this.lineTo(n, t + r);
        this.closePath();
        this.stroke();
        this.currentPath_ = u
    }
    ;
    n.fillRect = function(n, t, i, r) {
        var u = this.currentPath_;
        this.beginPath();
        this.moveTo(n, t);
        this.lineTo(n + i, t);
        this.lineTo(n + i, t + r);
        this.lineTo(n, t + r);
        this.closePath();
        this.fill();
        this.currentPath_ = u
    }
    ;
    n.createLinearGradient = function(n, t, i, r) {
        var u = new h("gradient");
        return u.x0_ = n,
        u.y0_ = t,
        u.x1_ = i,
        u.y1_ = r,
        u
    }
    ;
    n.createRadialGradient = function(n, t, i, r, u, f) {
        var e = new h("gradientradial");
        return e.x0_ = n,
        e.y0_ = t,
        e.r0_ = i,
        e.x1_ = r,
        e.y1_ = u,
        e.r1_ = f,
        e
    }
    ;
    n.drawImage = function(n) {
        var e, h, o, s, v, y, p, w, c, l, f, a, b, k, d;
        if (o = n.runtimeStyle.width,
        s = n.runtimeStyle.height,
        n.runtimeStyle.width = "auto",
        n.runtimeStyle.height = "auto",
        c = n.width,
        l = n.height,
        n.runtimeStyle.width = o,
        n.runtimeStyle.height = s,
        3 == arguments.length)
            e = arguments[1],
            h = arguments[2],
            v = y = 0,
            p = o = c,
            w = s = l;
        else if (5 == arguments.length)
            e = arguments[1],
            h = arguments[2],
            o = arguments[3],
            s = arguments[4],
            v = y = 0,
            p = c,
            w = l;
        else if (9 == arguments.length)
            v = arguments[1],
            y = arguments[2],
            p = arguments[3],
            w = arguments[4],
            e = arguments[5],
            h = arguments[6],
            o = arguments[7],
            s = arguments[8];
        else
            throw Error("Invalid number of arguments");
        f = r(this, e, h);
        a = [];
        a.push(" <g_vml_:group", ' coordsize="', 10 * i, ",", 10 * i, '"', ' coordorigin="0,0"', ' style="width:', 10, "px;height:", 10, "px;position:absolute;");
        1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0] ? (b = [],
        b.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", t(f.x / i), ",", "Dy=", t(f.y / i), ""),
        k = r(this, e + o, h),
        d = r(this, e, h + s),
        e = r(this, e + o, h + s),
        f.x = u.max(f.x, k.x, d.x, e.x),
        f.y = u.max(f.y, k.y, d.y, e.y),
        a.push("padding:0 ", t(f.x / i), "px ", t(f.y / i), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", b.join(""), ", sizingmethod='clip');")) : a.push("top:", t(f.y / i), "px;left:", t(f.x / i), "px;");
        a.push(' ">', '<g_vml_:image src="', n.src, '"', ' style="width:', i * o, "px;", " height:", i * s, 'px"', ' cropleft="', v / c, '"', ' croptop="', y / l, '"', ' cropright="', (c - v - p) / c, '"', ' cropbottom="', (l - y - w) / l, '"', " />", "<\/g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", a.join(""))
    }
    ;
    n.stroke = function(n) {
        var u = [], r;
        u.push("<g_vml_:shape", ' filled="', !!n, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * i, ",", 10 * i, '"', ' stroked="', !n, '"', ' path="');
        for (var f = {
            x: null,
            y: null
        }, e = {
            x: null,
            y: null
        }, o = 0; o < this.currentPath_.length; o++) {
            r = this.currentPath_[o];
            switch (r.type) {
            case "moveTo":
                u.push(" m ", t(r.x), ",", t(r.y));
                break;
            case "lineTo":
                u.push(" l ", t(r.x), ",", t(r.y));
                break;
            case "close":
                u.push(" x ");
                r = null;
                break;
            case "bezierCurveTo":
                u.push(" c ", t(r.cp1x), ",", t(r.cp1y), ",", t(r.cp2x), ",", t(r.cp2y), ",", t(r.x), ",", t(r.y));
                break;
            case "at":
            case "wa":
                u.push(" ", r.type, " ", t(r.x - this.arcScaleX_ * r.radius), ",", t(r.y - this.arcScaleY_ * r.radius), " ", t(r.x + this.arcScaleX_ * r.radius), ",", t(r.y + this.arcScaleY_ * r.radius), " ", t(r.xStart), ",", t(r.yStart), " ", t(r.xEnd), ",", t(r.yEnd))
            }
            r && ((null == f.x || r.x < f.x) && (f.x = r.x),
            (null == e.x || r.x > e.x) && (e.x = r.x),
            (null == f.y || r.y < f.y) && (f.y = r.y),
            (null == e.y || r.y > e.y) && (e.y = r.y))
        }
        u.push(' ">');
        n ? ht(this, u, f, e) : st(this, u);
        u.push("<\/g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", u.join(""))
    }
    ;
    n.fill = function() {
        this.stroke(!0)
    }
    ;
    n.closePath = function() {
        this.currentPath_.push({
            type: "close"
        })
    }
    ;
    n.save = function() {
        var n = {};
        ft(this, n);
        this.aStack_.push(n);
        this.mStack_.push(this.m_);
        this.m_ = o(a(), this.m_)
    }
    ;
    n.restore = function() {
        this.aStack_.length && (ft(this.aStack_.pop(), this),
        this.m_ = this.mStack_.pop())
    }
    ;
    n.translate = function(n, t) {
        s(this, o([[1, 0, 0], [0, 1, 0], [n, t, 1]], this.m_), !1)
    }
    ;
    n.rotate = function(n) {
        var t = d(n);
        n = k(n);
        s(this, o([[t, n, 0], [-n, t, 0], [0, 0, 1]], this.m_), !1)
    }
    ;
    n.scale = function(n, t) {
        this.arcScaleX_ *= n;
        this.arcScaleY_ *= t;
        s(this, o([[n, 0, 0], [0, t, 0], [0, 0, 1]], this.m_), !0)
    }
    ;
    n.transform = function(n, t, i, r, u, f) {
        s(this, o([[n, t, 0], [i, r, 0], [u, f, 1]], this.m_), !0)
    }
    ;
    n.setTransform = function(n, t, i, r, u, f) {
        s(this, [[n, t, 0], [i, r, 0], [u, f, 1]], !0)
    }
    ;
    n.drawText_ = function(n, u, f, e, o) {
        var v = this.m_, s, c, l;
        e = 0;
        var y = 1e3, p = 0, a = [], h;
        if (h = this.font,
        it[h])
            h = it[h];
        else {
            s = document.createElement("div").style;
            try {
                s.font = h
            } catch (w) {}
            h = it[h] = {
                style: s.fontStyle || "normal",
                variant: s.fontVariant || "normal",
                weight: s.fontWeight || "normal",
                size: s.fontSize || 10,
                family: s.fontFamily || "sans-serif"
            }
        }
        s = h;
        c = this.element_;
        h = {};
        for (l in s)
            h[l] = s[l];
        l = parseFloat(c.currentStyle.fontSize);
        c = parseFloat(s.size);
        h.size = "number" == typeof s.size ? s.size : -1 != s.size.indexOf("px") ? c : -1 != s.size.indexOf("em") ? l * c : -1 != s.size.indexOf("%") ? l / 100 * c : -1 != s.size.indexOf("pt") ? c / .75 : l;
        h.size *= .981;
        l = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        c = this.element_.currentStyle;
        s = this.textAlign.toLowerCase();
        switch (s) {
        case "left":
        case "center":
        case "right":
            break;
        case "end":
            s = "ltr" == c.direction ? "right" : "left";
            break;
        case "start":
            s = "rtl" == c.direction ? "right" : "left";
            break;
        default:
            s = "left"
        }
        switch (this.textBaseline) {
        case "hanging":
        case "top":
            p = h.size / 1.75;
            break;
        case "middle":
            break;
        default:
        case null:
        case "alphabetic":
        case "ideographic":
        case "bottom":
            p = -h.size / 2.25
        }
        switch (s) {
        case "right":
            e = 1e3;
            y = .05;
            break;
        case "center":
            e = y = 500
        }
        u = r(this, u + 0, f + p);
        a.push('<g_vml_:line from="', -e, ' 0" to="', y, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !o, '" stroked="', !!o, '" style="position:absolute;width:1px;height:1px;">');
        o ? st(this, a) : ht(this, a, {
            x: -e,
            y: 0
        }, {
            x: y,
            y: h.size
        });
        o = v[0][0].toFixed(3) + "," + v[1][0].toFixed(3) + "," + v[0][1].toFixed(3) + "," + v[1][1].toFixed(3) + ",0,0";
        u = t(u.x / i) + "," + t(u.y / i);
        a.push('<g_vml_:skew on="t" matrix="', o, '" ', ' offset="', u, '" origin="', e, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', rt(n), '" style="v-text-align:', s, ";font:", rt(l), '" /><\/g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", a.join(""))
    }
    ;
    n.fillText = function(n, t, i, r) {
        this.drawText_(n, t, i, r, !1)
    }
    ;
    n.strokeText = function(n, t, i, r) {
        this.drawText_(n, t, i, r, !0)
    }
    ;
    n.measureText = function(n) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"><\/span>'),
        this.textMeasureEl_ = this.element_.lastChild);
        var t = this.element_.ownerDocument;
        return this.textMeasureEl_.innerHTML = "",
        this.textMeasureEl_.style.font = this.font,
        this.textMeasureEl_.appendChild(t.createTextNode(n)),
        {
            width: this.textMeasureEl_.offsetWidth
        }
    }
    ;
    n.clip = function() {}
    ;
    n.arcTo = function() {}
    ;
    n.createPattern = function(n, t) {
        return new b(n,t)
    }
    ;
    h.prototype.addColorStop = function(n, t) {
        t = p(t);
        this.colors_.push({
            offset: n,
            color: t.color,
            alpha: t.alpha
        })
    }
    ;
    n = c.prototype = Error();
    n.INDEX_SIZE_ERR = 1;
    n.DOMSTRING_SIZE_ERR = 2;
    n.HIERARCHY_REQUEST_ERR = 3;
    n.WRONG_DOCUMENT_ERR = 4;
    n.INVALID_CHARACTER_ERR = 5;
    n.NO_DATA_ALLOWED_ERR = 6;
    n.NO_MODIFICATION_ALLOWED_ERR = 7;
    n.NOT_FOUND_ERR = 8;
    n.NOT_SUPPORTED_ERR = 9;
    n.INUSE_ATTRIBUTE_ERR = 10;
    n.INVALID_STATE_ERR = 11;
    n.SYNTAX_ERR = 12;
    n.INVALID_MODIFICATION_ERR = 13;
    n.NAMESPACE_ERR = 14;
    n.INVALID_ACCESS_ERR = 15;
    n.VALIDATION_ERR = 16;
    n.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = nt;
    CanvasRenderingContext2D = w;
    CanvasGradient = h;
    CanvasPattern = b;
    DOMException = c
}(),
function() {
    "use strict";
    var n, t;
    n = jQuery;
    t = function(t, i) {
        var e, u, f, r = this;
        return this.options = n.extend({
            title: null,
            footer: null,
            remote: null
        }, n.fn.ekkoLightbox.defaults, i || {}),
        this.$element = n(t),
        e = "",
        this.modal_id = this.options.modal_id ? this.options.modal_id : "ekkoLightbox-" + Math.floor(1e3 * Math.random() + 1),
        f = '<div class="modal-header"' + (this.options.title || this.options.always_show_close ? "" : ' style="display:none"') + '><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;<\/button><h4 class="modal-title">' + (this.options.title || "&nbsp;") + "<\/h4><\/div>",
        u = '<div class="modal-footer"' + (this.options.footer ? "" : ' style="display:none"') + ">" + this.options.footer + "<\/div>",
        n(document.body).append('<div id="' + this.modal_id + '" class="ekko-lightbox modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">' + f + '<div class="modal-body"><div class="ekko-lightbox-container"><div><\/div><\/div><\/div>' + u + "<\/div><\/div><\/div>"),
        this.modal = n("#" + this.modal_id),
        this.modal_dialog = this.modal.find(".modal-dialog").first(),
        this.modal_content = this.modal.find(".modal-content").first(),
        this.modal_body = this.modal.find(".modal-body").first(),
        this.lightbox_container = this.modal_body.find(".ekko-lightbox-container").first(),
        this.lightbox_body = this.lightbox_container.find("> div:first-child").first(),
        this.showLoading(),
        this.modal_arrows = null,
        this.border = {
            top: parseFloat(this.modal_dialog.css("border-top-width")) + parseFloat(this.modal_content.css("border-top-width")) + parseFloat(this.modal_body.css("border-top-width")),
            right: parseFloat(this.modal_dialog.css("border-right-width")) + parseFloat(this.modal_content.css("border-right-width")) + parseFloat(this.modal_body.css("border-right-width")),
            bottom: parseFloat(this.modal_dialog.css("border-bottom-width")) + parseFloat(this.modal_content.css("border-bottom-width")) + parseFloat(this.modal_body.css("border-bottom-width")),
            left: parseFloat(this.modal_dialog.css("border-left-width")) + parseFloat(this.modal_content.css("border-left-width")) + parseFloat(this.modal_body.css("border-left-width"))
        },
        this.padding = {
            top: parseFloat(this.modal_dialog.css("padding-top")) + parseFloat(this.modal_content.css("padding-top")) + parseFloat(this.modal_body.css("padding-top")),
            right: parseFloat(this.modal_dialog.css("padding-right")) + parseFloat(this.modal_content.css("padding-right")) + parseFloat(this.modal_body.css("padding-right")),
            bottom: parseFloat(this.modal_dialog.css("padding-bottom")) + parseFloat(this.modal_content.css("padding-bottom")) + parseFloat(this.modal_body.css("padding-bottom")),
            left: parseFloat(this.modal_dialog.css("padding-left")) + parseFloat(this.modal_content.css("padding-left")) + parseFloat(this.modal_body.css("padding-left"))
        },
        this.modal.on("show.bs.modal", this.options.onShow.bind(this)).on("shown.bs.modal", function() {
            return r.modal_shown(),
            r.options.onShown.call(r)
        }).on("hide.bs.modal", this.options.onHide.bind(this)).on("hidden.bs.modal", function() {
            return r.gallery && n(document).off("keydown.ekkoLightbox"),
            r.modal.remove(),
            r.options.onHidden.call(r)
        }).modal("show", i),
        this.modal
    }
    ;
    t.prototype = {
        modal_shown: function() {
            var t, i = this;
            return this.options.remote ? (this.gallery = this.$element.data("gallery"),
            this.gallery && (this.gallery_items = "document.body" === this.options.gallery_parent_selector || "" === this.options.gallery_parent_selector ? n(document.body).find('*[data-toggle="lightbox"][data-gallery="' + this.gallery + '"]') : this.$element.parents(this.options.gallery_parent_selector).first().find('*[data-toggle="lightbox"][data-gallery="' + this.gallery + '"]'),
            this.gallery_index = this.gallery_items.index(this.$element),
            n(document).on("keydown.ekkoLightbox", this.navigate.bind(this)),
            this.options.directional_arrows && this.gallery_items.length > 1 && (this.lightbox_container.prepend('<div class="ekko-lightbox-nav-overlay"><a href="#" class="' + this.strip_stops(this.options.left_arrow_class) + '"><\/a><a href="#" class="' + this.strip_stops(this.options.right_arrow_class) + '"><\/a><\/div>'),
            this.modal_arrows = this.lightbox_container.find("div.ekko-lightbox-nav-overlay").first(),
            this.lightbox_container.find("a" + this.strip_spaces(this.options.left_arrow_class)).on("click", function(n) {
                return n.preventDefault(),
                i.navigate_left()
            }),
            this.lightbox_container.find("a" + this.strip_spaces(this.options.right_arrow_class)).on("click", function(n) {
                return n.preventDefault(),
                i.navigate_right()
            }))),
            this.options.type ? "image" === this.options.type ? this.preloadImage(this.options.remote, !0) : "youtube" === this.options.type && (t = this.getYoutubeId(this.options.remote)) ? this.showYoutubeVideo(t) : "vimeo" === this.options.type ? this.showVimeoVideo(this.options.remote) : "instagram" === this.options.type ? this.showInstagramVideo(this.options.remote) : "url" === this.options.type ? this.showInstagramVideo(this.options.remote) : this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo|url"') : this.detectRemoteType(this.options.remote)) : this.error("No remote target given")
        },
        strip_stops: function(n) {
            return n.replace(/\./g, "")
        },
        strip_spaces: function(n) {
            return n.replace(/\s/g, "")
        },
        isImage: function(n) {
            return n.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSwf: function(n) {
            return n.match(/\.(swf)((\?|#).*)?$/i)
        },
        getYoutubeId: function(n) {
            var t;
            return t = n.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/),
            t && 11 === t[2].length ? t[2] : !1
        },
        getVimeoId: function(n) {
            return n.indexOf("vimeo") > 0 ? n : !1
        },
        getInstagramId: function(n) {
            return n.indexOf("instagram") > 0 ? n : !1
        },
        navigate: function(n) {
            if (n = n || window.event,
            39 === n.keyCode || 37 === n.keyCode) {
                if (39 === n.keyCode)
                    return this.navigate_right();
                if (37 === n.keyCode)
                    return this.navigate_left()
            }
        },
        navigate_left: function() {
            var t;
            if (1 !== this.gallery_items.length)
                return this.showLoading(),
                0 === this.gallery_index ? this.gallery_index = this.gallery_items.length - 1 : this.gallery_index--,
                this.options.onNavigate("left", this.gallery_index),
                this.$element = n(this.gallery_items.get(this.gallery_index)),
                this.updateTitleAndFooter(),
                t = this.$element.attr("data-remote") || this.$element.attr("href"),
                this.detectRemoteType(t, this.$element.attr("data-type"))
        },
        navigate_right: function() {
            var i, t;
            if (1 !== this.gallery_items.length)
                return this.showLoading(),
                this.gallery_index === this.gallery_items.length - 1 ? this.gallery_index = 0 : this.gallery_index++,
                this.options.onNavigate("right", this.gallery_index),
                this.$element = n(this.gallery_items.get(this.gallery_index)),
                t = this.$element.attr("data-remote") || this.$element.attr("href"),
                this.updateTitleAndFooter(),
                this.detectRemoteType(t, this.$element.attr("data-type")),
                this.gallery_index + 1 < this.gallery_items.length && (i = n(this.gallery_items.get(this.gallery_index + 1), !1),
                t = i.attr("data-remote") || i.attr("href"),
                "image" === i.attr("data-type") || this.isImage(t)) ? this.preloadImage(t, !1) : void 0
        },
        detectRemoteType: function(n, t) {
            var i;
            return "image" === t || this.isImage(n) ? (this.options.type = "image",
            this.preloadImage(n, !0)) : "youtube" === t || (i = this.getYoutubeId(n)) ? (this.options.type = "youtube",
            this.showYoutubeVideo(i)) : "vimeo" === t || (i = this.getVimeoId(n)) ? (this.options.type = "vimeo",
            this.showVimeoVideo(i)) : "instagram" === t || (i = this.getInstagramId(n)) ? (this.options.type = "instagram",
            this.showInstagramVideo(i)) : "url" === t || (i = this.getInstagramId(n)) ? (this.options.type = "instagram",
            this.showInstagramVideo(i)) : (this.options.type = "url",
            this.loadRemoteContent(n))
        },
        updateTitleAndFooter: function() {
            var n, t, i, r;
            return i = this.modal_content.find(".modal-header"),
            t = this.modal_content.find(".modal-footer"),
            r = this.$element.data("title") || "",
            n = this.$element.data("footer") || "",
            r || this.options.always_show_close ? i.css("display", "").find(".modal-title").html(r || "&nbsp;") : i.css("display", "none"),
            n ? t.css("display", "").html(n) : t.css("display", "none"),
            this
        },
        showLoading: function() {
            return this.lightbox_body.html('<div class="modal-loading">Loading..<\/div>'),
            this
        },
        showYoutubeVideo: function(n) {
            var i, r, t;
            return i = 560 / 315,
            t = this.$element.data("width") || 560,
            t = this.checkDimensions(t),
            r = t / i,
            this.resize(t),
            this.lightbox_body.html('<iframe width="' + t + '" height="' + r + '" src="//www.youtube.com/embed/' + n + '?badge=0&autoplay=1&html5=1" frameborder="0" allowfullscreen><\/iframe>'),
            this.modal_arrows ? this.modal_arrows.css("display", "none") : void 0
        },
        showVimeoVideo: function(n) {
            var i, r, t;
            return i = 500 / 281,
            t = this.$element.data("width") || 560,
            t = this.checkDimensions(t),
            r = t / i,
            this.resize(t),
            this.lightbox_body.html('<iframe width="' + t + '" height="' + r + '" src="' + n + '?autoplay=1" frameborder="0" allowfullscreen><\/iframe>'),
            this.modal_arrows ? this.modal_arrows.css("display", "none") : void 0
        },
        showInstagramVideo: function(n) {
            var t;
            return t = this.$element.data("width") || 612,
            t = this.checkDimensions(t),
            this.resize(t),
            this.lightbox_body.html('<iframe width="' + t + '" height="' + t + '" src="' + this.addTrailingSlash(n) + 'embed/" frameborder="0" allowfullscreen><\/iframe>'),
            this.modal_arrows ? this.modal_arrows.css("display", "none") : void 0
        },
        loadRemoteContent: function(t) {
            var r, i, u = this;
            return i = this.$element.data("width") || 560,
            this.resize(i),
            r = this.$element.data("disableExternalCheck") || !1,
            console.log(r, this.isExternal(t)),
            r || this.isExternal(t) ? this.lightbox_body.html('<iframe width="' + i + '" height="' + i + '" src="' + t + '" frameborder="0" allowfullscreen><\/iframe>') : this.lightbox_body.load(t, n.proxy(function() {
                return u.$element.trigger("loaded.bs.modal")
            })),
            this.modal_arrows ? this.modal_arrows.css("display", "block") : void 0
        },
        isExternal: function(n) {
            var t;
            return t = n.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/),
            "string" == typeof t[1] && t[1].length > 0 && t[1].toLowerCase() !== location.protocol ? !0 : "string" == typeof t[2] && t[2].length > 0 && t[2].replace(new RegExp(":(" + {
                "http:": 80,
                "https:": 443
            }[location.protocol] + ")?$"), "") !== location.host ? !0 : !1
        },
        error: function(n) {
            return this.lightbox_body.html(n),
            this
        },
        preloadImage: function(t, i) {
            var r, u = this;
            return r = new Image,
            (null == i || i === !0) && (r.onload = function() {
                var t;
                return t = n("<img />"),
                t.attr("src", r.src),
                t.addClass("img-responsive"),
                u.lightbox_body.html(t),
                u.modal_arrows && u.modal_arrows.css("display", "block"),
                u.resize(r.width)
            }
            ,
            r.onerror = function() {
                return u.error("Failed to load image: " + t)
            }
            ),
            r.src = t,
            r
        },
        resize: function(t) {
            var i;
            return i = t + this.border.left + this.padding.left + this.padding.right + this.border.right,
            this.modal_dialog.css("width", "auto").css("max-width", i),
            this.lightbox_container.find("a").css("padding-top", function() {
                return n(this).parent().height() / 2
            }),
            this
        },
        checkDimensions: function(n) {
            var t, i;
            return i = n + this.border.left + this.padding.left + this.padding.right + this.border.right,
            t = document.body.clientWidth,
            i > t && (n = this.modal_body.width()),
            n
        },
        close: function() {
            return this.modal.modal("hide")
        },
        addTrailingSlash: function(n) {
            return "/" !== n.substr(-1) && (n += "/"),
            n
        }
    };
    n.fn.ekkoLightbox = function(i) {
        return this.each(function() {
            var r;
            return r = n(this),
            i = n.extend({
                remote: r.attr("data-remote") || r.attr("href"),
                gallery_parent_selector: r.attr("data-parent"),
                type: r.attr("data-type")
            }, i, r.data()),
            new t(this,i),
            this
        })
    }
    ;
    n.fn.ekkoLightbox.defaults = {
        gallery_parent_selector: "*:not(.row)",
        left_arrow_class: ".glyphicon .glyphicon-chevron-left",
        right_arrow_class: ".glyphicon .glyphicon-chevron-right",
        directional_arrows: !0,
        type: null,
        always_show_close: !0,
        onShow: function() {},
        onShown: function() {},
        onHide: function() {},
        onHidden: function() {},
        onNavigate: function() {}
    }
}
.call(this),
function() {
    var n, i, f, r, u, t, e;
    r = function(n, t) {
        var f, i, r, u = [];
        for (i in t.prototype)
            try {
                r = t.prototype[i];
                u.push(null == n[i] && "function" != typeof r ? n[i] = r : void 0)
            } catch (e) {
                f = e
            }
        return u
    }
    ;
    n = {};
    null == n.options && (n.options = {});
    f = {
        checks: {
            xhr: {
                url: function() {
                    return "/favicon.ico?_=" + Math.floor(1e9 * Math.random())
                },
                timeout: 5e3
            },
            image: {
                url: function() {
                    return "/favicon.ico?_=" + Math.floor(1e9 * Math.random())
                }
            },
            active: "xhr"
        },
        checkOnLoad: !1,
        interceptRequests: !0,
        reconnect: !0
    };
    u = function(n, t) {
        var i, r, e, u, f, o;
        for (i = n,
        u = t.split("."),
        r = f = 0,
        o = u.length; o > f && (e = u[r],
        i = i[e],
        "object" == typeof i); r = ++f)
            ;
        if (r === u.length - 1)
            return i
    }
    ;
    n.getOption = function(t) {
        var i, r;
        return i = null != (r = u(n.options, t)) ? r : u(f, t),
        "function" == typeof i ? i() : i
    }
    ;
    "function" == typeof window.addEventListener && window.addEventListener("online", function() {
        return setTimeout(n.confirmUp, 100)
    }, !1);
    "function" == typeof window.addEventListener && window.addEventListener("offline", function() {
        return n.confirmDown()
    }, !1);
    n.state = "up";
    n.markUp = function() {
        return n.trigger("confirmed-up"),
        "up" !== n.state ? (n.state = "up",
        n.trigger("up")) : void 0
    }
    ;
    n.markDown = function() {
        return n.trigger("confirmed-down"),
        "down" !== n.state ? (n.state = "down",
        n.trigger("down")) : void 0
    }
    ;
    t = {};
    n.on = function(i, r, u) {
        var s, f, e, h, o;
        if (f = i.split(" "),
        f.length > 1) {
            for (o = [],
            e = 0,
            h = f.length; h > e; e++)
                s = f[e],
                o.push(n.on(s, r, u));
            return o
        }
        return null == t[i] && (t[i] = []),
        t[i].push([u, r])
    }
    ;
    n.off = function(n, i) {
        var o, r, e, u, f;
        if (null != t[n]) {
            if (i) {
                for (r = 0,
                f = []; r < t[n].length; )
                    u = t[n][r],
                    o = u[0],
                    e = u[1],
                    f.push(e === i ? t[n].splice(r, 1) : r++);
                return f
            }
            return t[n] = []
        }
    }
    ;
    n.trigger = function(n) {
        var e, o, i, s, r, u, f;
        if (null != t[n]) {
            for (r = t[n],
            f = [],
            i = 0,
            s = r.length; s > i; i++)
                u = r[i],
                e = u[0],
                o = u[1],
                f.push(o.call(e));
            return f
        }
    }
    ;
    i = function(n, t, i) {
        var r, u, f, e, o;
        return r = function() {
            return n.status && n.status < 12e3 ? t() : i()
        }
        ,
        null === n.onprogress ? (u = n.onerror,
        n.onerror = function() {
            return i(),
            "function" == typeof u ? u.apply(null, arguments) : void 0
        }
        ,
        o = n.ontimeout,
        n.ontimeout = function() {
            return i(),
            "function" == typeof o ? o.apply(null, arguments) : void 0
        }
        ,
        f = n.onload,
        n.onload = function() {
            return r(),
            "function" == typeof f ? f.apply(null, arguments) : void 0
        }
        ) : (e = n.onreadystatechange,
        n.onreadystatechange = function() {
            return 4 === n.readyState ? r() : 0 === n.readyState && i(),
            "function" == typeof e ? e.apply(null, arguments) : void 0
        }
        )
    }
    ;
    n.checks = {};
    n.checks.xhr = function() {
        var r, t;
        t = new XMLHttpRequest;
        t.offline = !1;
        t.open("HEAD", n.getOption("checks.xhr.url"), !0);
        null != t.timeout && (t.timeout = n.getOption("checks.xhr.timeout"));
        i(t, n.markUp, n.markDown);
        try {
            t.send()
        } catch (u) {
            r = u;
            n.markDown()
        }
        return t
    }
    ;
    n.checks.image = function() {
        var t;
        return t = document.createElement("img"),
        t.onerror = n.markDown,
        t.onload = n.markUp,
        void (t.src = n.getOption("checks.image.url"))
    }
    ;
    n.checks.down = n.markDown;
    n.checks.up = n.markUp;
    n.check = function() {
        return n.trigger("checking"),
        n.checks[n.getOption("checks.active")]()
    }
    ;
    n.confirmUp = n.confirmDown = n.check;
    n.onXHR = function(n) {
        var t, i, u;
        return t = function(t, i) {
            var r;
            return r = t.open,
            t.open = function(u, f, e, o, s) {
                return n({
                    type: u,
                    url: f,
                    async: e,
                    flags: i,
                    user: o,
                    password: s,
                    xhr: t
                }),
                r.apply(t, arguments)
            }
        }
        ,
        u = window.XMLHttpRequest,
        window.XMLHttpRequest = function(n) {
            var i, r, f;
            return i = new u(n),
            t(i, n),
            f = i.setRequestHeader,
            i.headers = {},
            i.setRequestHeader = function(n, t) {
                return i.headers[n] = t,
                f.call(i, n, t)
            }
            ,
            r = i.overrideMimeType,
            i.overrideMimeType = function(n) {
                return i.mimeType = n,
                r.call(i, n)
            }
            ,
            i
        }
        ,
        r(window.XMLHttpRequest, u),
        null != window.XDomainRequest ? (i = window.XDomainRequest,
        window.XDomainRequest = function() {
            var n;
            return n = new i,
            t(n),
            n
        }
        ,
        r(window.XDomainRequest, i)) : void 0
    }
    ;
    e = function() {
        return n.getOption("interceptRequests") && n.onXHR(function(t) {
            var r;
            return r = t.xhr,
            r.offline !== !1 ? i(r, n.confirmUp, n.confirmDown) : void 0
        }),
        n.getOption("checkOnLoad") ? n.check() : void 0
    }
    ;
    setTimeout(e, 0);
    window.Offline = n
}
.call(this),
function() {
    var u, f, e, n, t, i, o, r, s;
    if (!window.Offline)
        throw new Error("Offline Reconnect brought in without offline.js");
    n = Offline.reconnect = {};
    i = null;
    t = function() {
        var t;
        return null != n.state && "inactive" !== n.state && Offline.trigger("reconnect:stopped"),
        n.state = "inactive",
        n.remaining = n.delay = null != (t = Offline.getOption("reconnect.initialDelay")) ? t : 3
    }
    ;
    f = function() {
        var t, i;
        return t = null != (i = Offline.getOption("reconnect.delay")) ? i : Math.min(Math.ceil(1.5 * n.delay), 3600),
        n.remaining = n.delay = t
    }
    ;
    o = function() {
        if ("connecting" !== n.state)
            return (n.remaining -= 1,
            Offline.trigger("reconnect:tick"),
            0 === n.remaining ? r() : void 0)
    }
    ;
    r = function() {
        if ("waiting" === n.state)
            return (Offline.trigger("reconnect:connecting"),
            n.state = "connecting",
            Offline.check())
    }
    ;
    u = function() {
        if (Offline.getOption("reconnect"))
            return (t(),
            n.state = "waiting",
            Offline.trigger("reconnect:started"),
            i = setInterval(o, 1e3))
    }
    ;
    s = function() {
        return null != i && clearInterval(i),
        t()
    }
    ;
    e = function() {
        if (Offline.getOption("reconnect") && "connecting" === n.state)
            return (Offline.trigger("reconnect:failure"),
            n.state = "waiting",
            f())
    }
    ;
    n.tryNow = r;
    t();
    Offline.on("down", u);
    Offline.on("confirmed-down", e);
    Offline.on("up", s)
}
.call(this),
function() {
    var i, r, n, u, f, t;
    if (!window.Offline)
        throw new Error("Requests module brought in without offline.js");
    n = [];
    t = !1;
    u = function(i) {
        return Offline.trigger("requests:capture"),
        "down" !== Offline.state && (t = !0),
        n.push(i)
    }
    ;
    f = function(n) {
        var u, i, f, e, o, s, h, t, r;
        t = n.xhr;
        o = n.url;
        e = n.type;
        s = n.user;
        f = n.password;
        u = n.body;
        t.abort();
        t.open(e, o, !0, s, f);
        r = t.headers;
        for (i in r)
            h = r[i],
            t.setRequestHeader(i, h);
        return t.mimeType && t.overrideMimeType(t.mimeType),
        t.send(u)
    }
    ;
    i = function() {
        return n = []
    }
    ;
    r = function() {
        var e, t, r, o, u, s;
        for (Offline.trigger("requests:flush"),
        r = {},
        u = 0,
        s = n.length; s > u; u++)
            t = n[u],
            o = t.url.replace(/(\?|&)_=[0-9]+/, function(n, t) {
                return "?" === t ? t : ""
            }),
            r["" + t.type.toUpperCase() + " - " + o] = t;
        for (e in r)
            t = r[e],
            f(t);
        return i()
    }
    ;
    setTimeout(function() {
        if (Offline.getOption("requests") !== !1)
            return (Offline.on("confirmed-up", function() {
                if (t)
                    return (t = !1,
                    i())
            }),
            Offline.on("up", r),
            Offline.on("down", function() {
                return t = !1
            }),
            Offline.onXHR(function(n) {
                var f, i, t, r, e;
                return t = n.xhr,
                f = n.async,
                t.offline !== !1 && (i = function() {
                    return u(n)
                }
                ,
                e = t.send,
                t.send = function(i) {
                    return n.body = i,
                    e.apply(t, arguments)
                }
                ,
                f) ? null === t.onprogress ? (t.addEventListener("error", i, !1),
                t.addEventListener("timeout", i, !1)) : (r = t.onreadystatechange,
                t.onreadystatechange = function() {
                    return 0 === t.readyState ? i() : 4 === t.readyState && (0 === t.status || t.status >= 12e3) && i(),
                    "function" == typeof r ? r.apply(null, arguments) : void 0
                }
                ) : void 0
            }),
            Offline.requests = {
                flush: r,
                clear: i
            })
    }, 0)
}
.call(this),
function() {
    var n, r, t, u, i;
    if (!Offline)
        throw new Error("Offline simulate brought in without offline.js");
    for (i = ["up", "down"],
    t = 0,
    u = i.length; u > t; t++)
        n = i[t],
        (document.querySelector("script[data-simulate='" + n + "']") || localStorage.OFFLINE_SIMULATE === n) && (null == Offline.options && (Offline.options = {}),
        null == (r = Offline.options).checks && (r.checks = {}),
        Offline.options.checks.active = n)
}
.call(this),
function() {
    var h, c, r, u, o, n, t, f, e, i, l, a, s;
    if (!window.Offline)
        throw new Error("Offline UI brought in without offline.js");
    c = '<div class="offline-ui"><div class="offline-ui-content"><\/div><\/div>';
    h = '<a href class="offline-ui-retry"><\/a>';
    o = function(n) {
        var t;
        return t = document.createElement("div"),
        t.innerHTML = n,
        t.children[0]
    }
    ;
    n = u = null;
    r = function(t) {
        return i(t),
        n.className += " " + t
    }
    ;
    i = function(t) {
        return n.className = n.className.replace(new RegExp("(^| )" + t.split(" ").join("|") + "( |$)","gi"), " ")
    }
    ;
    f = {};
    t = function(n, t) {
        return r(n),
        null != f[n] && clearTimeout(f[n]),
        f[n] = setTimeout(function() {
            return i(n),
            delete f[n]
        }, 1e3 * t)
    }
    ;
    a = function(n) {
        var t, i, r, u;
        r = {
            day: 86400,
            hour: 3600,
            minute: 60,
            second: 1
        };
        for (i in r)
            if (t = r[i],
            n >= t)
                return u = Math.floor(n / t),
                [u, i];
        return ["now", ""]
    }
    ;
    l = function() {
        var t, i;
        return n = o(c),
        document.body.appendChild(n),
        null != Offline.reconnect && Offline.getOption("reconnect") && (n.appendChild(o(h)),
        t = n.querySelector(".offline-ui-retry"),
        i = function(n) {
            return n.preventDefault(),
            Offline.reconnect.tryNow()
        }
        ,
        null != t.addEventListener ? t.addEventListener("click", i, !1) : t.attachEvent("click", i)),
        r("offline-ui-" + Offline.state),
        u = n.querySelector(".offline-ui-content")
    }
    ;
    e = function() {
        return l(),
        Offline.on("up", function() {
            return i("offline-ui-down"),
            r("offline-ui-up"),
            t("offline-ui-up-2s", 2),
            t("offline-ui-up-5s", 5)
        }),
        Offline.on("down", function() {
            return i("offline-ui-up"),
            r("offline-ui-down"),
            t("offline-ui-down-2s", 2),
            t("offline-ui-down-5s", 5)
        }),
        Offline.on("reconnect:connecting", function() {
            return r("offline-ui-connecting"),
            i("offline-ui-waiting")
        }),
        Offline.on("reconnect:tick", function() {
            var t, f, n;
            return r("offline-ui-waiting"),
            i("offline-ui-connecting"),
            n = a(Offline.reconnect.remaining),
            t = n[0],
            f = n[1],
            u.setAttribute("data-retry-in-value", t),
            u.setAttribute("data-retry-in-unit", f)
        }),
        Offline.on("reconnect:stopped", function() {
            return i("offline-ui-connecting offline-ui-waiting"),
            u.setAttribute("data-retry-in-value", null),
            u.setAttribute("data-retry-in-unit", null)
        }),
        Offline.on("reconnect:failure", function() {
            return t("offline-ui-reconnect-failed-2s", 2),
            t("offline-ui-reconnect-failed-5s", 5)
        }),
        Offline.on("reconnect:success", function() {
            return t("offline-ui-reconnect-succeeded-2s", 2),
            t("offline-ui-reconnect-succeeded-5s", 5)
        })
    }
    ;
    "complete" === document.readyState ? e() : null != document.addEventListener ? document.addEventListener("DOMContentLoaded", e, !1) : (s = document.onreadystatechange,
    document.onreadystatechange = function() {
        return "complete" === document.readyState && e(),
        "function" == typeof s ? s.apply(null, arguments) : void 0
    }
    )
}
.call(this);
!function(n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof exports ? module.exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    "use strict";
    var i = "unveil"
      , t = "." + i
      , r = "src"
      , u = "placeholder";
    n.fn.unveil = function(f) {
        function l(n) {
            n.removeClass(i + "-" + u + " " + i + "-loading");
            n.addClass(i + "-loaded")
        }
        function y() {
            var o = n(this), i;
            if (!o.is(":hidden")) {
                var t = {
                    top: 0 - e.offset,
                    bottom: h.height() + e.offset
                }
                  , s = e.container[0] !== h[0]
                  , r = this.getBoundingClientRect();
                if (s) {
                    if (i = e.container[0].getBoundingClientRect(),
                    c(t, i)) {
                        var u = i.top - e.offset
                          , f = i.bottom + e.offset
                          , l = {
                            top: u > t.top ? u : t.top,
                            bottom: f < t.bottom ? f : t.bottom
                        };
                        return c(l, r)
                    }
                    return !1
                }
                return c(t, r)
            }
        }
        function c(n, t) {
            return t.bottom >= n.top && t.top <= n.bottom
        }
        function p() {
            w = h.height();
            s()
        }
        function a(n) {
            var t = !1;
            return function() {
                t || (t = !0,
                setTimeout(function() {
                    n();
                    t = !1
                }, e.throttle))
            }
        }
        function s() {
            if (e.debug,
            o.images) {
                var n = o.images.filter(y);
                n.trigger(i + t);
                o.images = o.images.not(n);
                n.length && e.debug
            }
        }
        function v() {
            e.container.off(t);
            o.images.off(t);
            e.container.data(i, null);
            o.initialized = !1;
            o.images = null
        }
        var o;
        f = f || {};
        var h = n(window)
          , w = h.height()
          , b = {
            placeholder: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            offset: 0,
            breakpoints: [],
            throttle: 250,
            debug: !1,
            attribute: r,
            container: h,
            retina: window.devicePixelRatio > 1,
            loading: null,
            loaded: null
        }
          , e = n.extend(!0, {}, b, f);
        return e.debug,
        e.breakpoints.sort(function(n, t) {
            return t.minWidth - n.minWidth
        }),
        o = e.container.data(i),
        o || (o = {
            images: n(),
            initialized: !1
        },
        e.container.data(i, o)),
        this.one(i + t, function() {
            for (var c, f, a, u = n(this), p = h.width(), y = e.attribute, v, o = 0; o < e.breakpoints.length; o++)
                if (v = e.breakpoints[o].attribute.replace(/^data-/, ""),
                p >= e.breakpoints[o].minWidth && u.data(v)) {
                    y = v;
                    break
                }
            f = a = u.data(y);
            f && -1 !== f.indexOf("|") && (a = f.split("|")[1],
            f = f.split("|")[0]);
            f && (c = e.retina && a ? a : f,
            e.debug,
            u.addClass(i + "-loading"),
            "function" == typeof e.loading && e.loading.call(this),
            u.trigger("loading" + t),
            u.one("load" + t, function() {
                l(u);
                "function" == typeof e.loaded && e.loaded.call(this);
                u.trigger("loaded" + t);
                s()
            }),
            "IMG" === this.nodeName ? u.prop(r, c) : n("<img/>").attr(r, c).one("load" + t, function() {
                n(this).remove();
                u.css("backgroundImage", "url(" + c + ")").trigger("load" + t)
            }),
            this.complete && l(u))
        }),
        this.one("destroy" + t, function() {
            n(this).off(t);
            o.images && (o.images = o.images.not(this),
            o.images.length || v())
        }),
        this.each(function() {
            var f = n(this)
              , h = f.data(r + "-" + u) || e.placeholder;
            o.images = n(o.images).add(this);
            f.data(i) || (f.data(i, !0),
            f.data(e.attribute) || f.data(e.attribute, f.prop(e.attribute)),
            f.one("load" + t, function() {
                var t = n(this);
                t.hasClass(i + "-loaded") || (t.addClass(i + "-" + u),
                s())
            }).prop(r, "").prop(r, h))
        }),
        e.debug,
        o.initialized || (e.container.on("resize" + t, a(p)).on("scroll" + t, a(s)).on("lookup" + t, s).on("destroy" + t, v),
        o.initialized = !0),
        setTimeout(s, 0),
        this
    }
});
$(document).ready(function() {
    $(".img,.media-object").unveil();
    $("#single").addClass("row lightbox-parent");
    $("#single img").addClass("img-thumbnail img-responsive");
    $("#single img").wrap("<a href='#lightbox' class='lightbox text-center' data-toggle='lightbox' data-gallery='multiimages' data-parent='.lightbox-parent'/>");
    $("#single").find("a.lightbox").each(function() {
        $(this).attr("href", $(this).children("img").attr("src"))
    });
    $("#single").find("a.lightbox").parent().css("text-align", "center");
    $(document).delegate('*[data-toggle="lightbox"]', "click", function(n) {
        n.preventDefault();
        $(this).ekkoLightbox()
    });
    $(".img-zoom").hover(function() {
        $(this).addClass("transition")
    }, function() {
        $(this).removeClass("transition")
    });
    $(window).scroll(function() {
        $(this).scrollTop() > 50 ? $("#back-to-top").fadeIn() : $("#back-to-top").fadeOut()
    });
    $("#back-to-top").click(function() {
        return $("#back-to-top").tooltip("hide"),
        $("body,html").animate({
            scrollTop: 0
        }, 800),
        !1
    });
    $("#back-to-top").tooltip("show");
    $("#slider .carousel").carousel({
        interval: 3e3
    });
    $(".dynamicTile .tile").height($("#tile1").width());
    $(".dynamicTile .carousel").height($("#tile1").width());
    $(".dynamicTile .item").height($("#tile1").width());
    $(window).resize(function() {
        this.resizeTO && clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            $(this).trigger("resizeEnd")
        }, 10)
    });
    $(window).bind("resizeEnd", function() {
        $(".dynamicTile .tile").height($("#tile1").width());
        $(".dynamicTile .carousel").height($("#tile1").width());
        $(".dynamicTile .item").height($("#tile1").width())
    });
    $("#live .carousel").carousel({
        interval: 5e3
    });
    $("table").addClass("table table-bordered");
    $(".doc-viewer a[href*='.pdf'], .doc-viewer a[href*='.doc'], .doc-viewer a[href*='.docx'], .doc-viewer a[href*='.ppt'], .doc-viewer a[href*='.pptx'], .doc-viewer a[href*='.xls'], .doc-viewer a[href*='.xlsx']").each(function(n, t) {
        var r = document.createElement("p")
          , i = document.createElement("iframe");
        $(i).attr("src", "https://docs.google.com/gview?url=" + t.href + "&embedded=true");
        $(i).attr("style", "width:100%; height:700px;");
        $(i).attr("frameborder", "0");
        r.appendChild(i);
        $(r).insertAfter(t)
    })
});
!function(n, t) {
    var i = n();
    n.fn.dropdownHover = function(r) {
        return "ontouchstart"in document ? this : (i = i.add(this.parent()),
        this.each(function() {
            function o() {
                i.find(":focus").blur();
                e.instantlyCloseOthers === !0 && i.removeClass("open");
                t.clearTimeout(s);
                u.addClass("open");
                f.trigger(c)
            }
            var f = n(this), u = f.parent(), h = {
                delay: n(this).data("delay"),
                instantlyCloseOthers: n(this).data("close-others")
            }, c = "show.bs.dropdown", l = "hide.bs.dropdown", e = n.extend(!0, {}, {
                delay: 500,
                instantlyCloseOthers: !0
            }, r, h), s;
            u.hover(function(n) {
                return u.hasClass("open") || f.is(n.target) ? void o(n) : !0
            }, function() {
                s = t.setTimeout(function() {
                    u.removeClass("open");
                    f.trigger(l)
                }, e.delay)
            });
            f.hover(function(n) {
                return u.hasClass("open") || u.is(n.target) ? void o(n) : !0
            });
            u.find(".dropdown-submenu").each(function() {
                var i = n(this), r;
                i.hover(function() {
                    t.clearTimeout(r);
                    i.children(".dropdown-menu").show();
                    i.siblings().children(".dropdown-menu").hide()
                }, function() {
                    var n = i.children(".dropdown-menu");
                    r = t.setTimeout(function() {
                        n.hide()
                    }, e.delay)
                })
            })
        }))
    }
    ;
    n(document).ready(function() {
        n('[data-hover="dropdown"]').dropdownHover()
    })
}(jQuery, this)
