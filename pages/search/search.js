var t = require("../../utils/global");

Page({
    data: {
        isGetLocation: !1,
        scrollHeight: 0,
        location: {},
        hotCity: t.hotCity,
        hotScenic: t.hotScenic,
        searchKey: "",
        searchResults: [],
        searchHistory: [],
        isShowResults: !1
    },
    onShow: function() {
        this.setData({
            isGetLocation: t.isGetLocation
        });
        var e = {};
        try {
            (s = wx.getStorageSync("province")) && (e.province = s);
        } catch (t) {}
        try {
            (s = wx.getStorageSync("city")) && (e.city = s);
        } catch (t) {}
        try {
            var s = wx.getStorageSync("district");
            s && (e.district = s);
        } catch (t) {}
        this.setData({
            location: e
        }), t.searchLocation = e, this.setData({
            searchHistory: wx.getStorageSync("searchHistory")
        });
    },
    search: function(e) {
        var s = this;
        wx.request({
            url: t.BaseAPI + "/city/matching",
            data: {
                city: e,
                source: "wxa"
            },
            success: function(e) {
                var r = e.data.data, i = [], a = void 0;
                for (a in r.internal) {
                    var c = {}, n = [], o = r.internal[a].split(","), h = r.internal[a].split("");
                    c.type = "internal", c.location = r.internal[a];
                    for (var l = 0, u = o.length; l < u; l++) o[0] && (c.province = o[0].replace(/ /g, "")), 
                    o[1] && (c.city = o[1].replace(/ /g, "")), o[2] && (c.district = o[2].replace(/ /g, ""));
                    for (var y = 0, g = h.length; y < g; y++) n.push(h[y]);
                    c.text = n, c.district ? c.district.length > 4 ? c.shortname = c.district.slice(0, 4) + "..." : c.shortname = c.district : c.city ? c.city.length > 4 ? c.shortname = c.city.slice(0, 4) + "..." : c.shortname = c.city : c.province.length > 4 ? c.shortname = c.province.slice(0, 4) + "..." : c.shortname = c.province, 
                    i.push(c);
                }
                for (a in r.tourist) {
                    var p = {}, d = [], x = r.tourist[a], S = r.tourist[a].split("");
                    p.type = "tourist", p.location = x, p.tourist = x.replace(/ /g, ""), p.tourist.length > 4 ? p.shortname = p.tourist.slice(0, 4) + "..." : p.shortname = p.tourist;
                    for (var v = 0, f = S.length; v < f; v++) d.push(S[v]);
                    p.text = d, i.push(p);
                }
                for (a in r.external) {
                    var H = {}, w = [], m = r.external[a].split(","), D = r.external[a].split("");
                    H.type = "external", H.location = r.external[a];
                    for (var R = 0, I = m.length; R < I; R++) m[0] && (H.country = m[0].replace(/ /g, "")), 
                    m[1] && (H.city = m[1].replace(/ /g, ""));
                    for (var b = 0, T = D.length; b < T; b++) w.push(D[b]);
                    H.text = w, H.city ? H.city.length > 4 ? H.shortname = H.city.slice(0, 4) + "..." : H.shortname = H.city : H.country.length > 4 ? H.shortname = H.country.slice(0, 4) + "..." : H.shortname = H.country, 
                    i.push(H);
                }
                t.searchResults = i, s.setData({
                    searchResults: i
                });
            }
        });
    },
    clearSearchText: function() {
        this.setData({
            searchKey: "",
            searchResults: [],
            isShowResults: !1
        });
    },
    keyInputHandle: function(t) {
        t && t.detail && (0 !== t.detail.cursor ? (this.setData({
            searchKey: t.detail.value
        }), this.search(t.detail.value)) : (this.setData({
            searchResults: []
        }), this.setData({
            searchKey: ""
        })));
    },
    focusHandle: function(t) {
        this.setData({
            isShowResults: !0
        });
    },
    blurHandle: function(t) {
        this.setData({
            isShowResults: !1
        });
    },
    saveSearchHistory: function(e) {
        var s = this, r = e.currentTarget.dataset || {}, i = wx.getStorageSync("searchHistory") || [];
        if (r && i.length > 0 && i.forEach(function(e, s) {
            t.isObjectValueEqual(e, r) && i.splice(s, 1);
        }), i.splice(0, 0, r), i.length > 3 && (i = i.slice(0, 3)), r) switch (r.type) {
          case "internal":
            wx.redirectTo({
                url: "/pages/index/index?type=internal&province=" + r.province + "&city=" + r.city + (r.district ? "&district=" + r.district : ""),
                success: function() {
                    s.setSearchHIstory(i);
                }
            });
            break;

          case "tourist":
            wx.redirectTo({
                url: "/pages/index/index?type=tourist&tourist=" + r.tourist + "&shortname=" + r.shortname,
                success: function() {
                    s.setSearchHIstory(i);
                }
            });
            break;

          case "external":
            wx.redirectTo({
                url: "/pages/index/index?type=external&country=" + r.country + "&city=" + r.city,
                success: function() {
                    s.setSearchHIstory(i);
                }
            });
        }
    },
    setSearchHIstory: function(t) {
        wx.setStorageSync("searchHistory", t), this.setData({
            searchHistory: t
        }), this.setData({
            searchHistory: t
        });
    },
    clearSearchHistory: function() {
        this.setData({
            searchHistory: []
        }), wx.setStorageSync("searchHistory", []);
    }
});