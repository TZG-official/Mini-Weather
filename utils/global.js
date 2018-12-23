function t(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}

var e, r = {
    province: "北京",
    city: "北京",
    district: "海淀"
}, s = {
    0: "微风",
    1: "东北风",
    2: "东风",
    3: "东南风",
    4: "南风",
    5: "西南风",
    6: "西风",
    7: "西北风",
    8: "北风",
    9: "旋转风"
}, o = [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ], a = [ "昨天", "今天", "明天", "后天" ], c = [ "carlimit", "clothes", "umbrella", "cold", "carwash", "sports", "sunscreen", "fish", "tourism", "traffic", "diffusion", "comfort", "drying", "makeup", "morning", "allergy", "heatstroke" ], i = {
    "00": "C2",
    "01": "C9",
    "02": "C1",
    "03": "C3",
    "04": "C3",
    "05": "C3",
    "06": "C3",
    "07": "C3",
    "08": "C3",
    "09": "C3",
    10: "C3",
    11: "C3",
    12: "C3",
    13: "C4",
    14: "C4",
    15: "C4",
    16: "C4",
    17: "C4",
    18: "C5",
    19: "C3",
    20: "C7",
    21: "C3",
    22: "C3",
    23: "C3",
    24: "C3",
    25: "C3",
    26: "C4",
    27: "C4",
    28: "C4",
    29: "C7",
    30: "C7",
    31: "C7",
    53: "C6",
    99: "C8",
    32: "C5",
    49: "C5",
    54: "C6",
    55: "C6",
    56: "C6",
    57: "C5",
    58: "C5",
    301: "C3",
    302: "C4"
}, C = [ {
    province: "北京",
    city: "北京"
}, {
    province: "上海",
    city: "上海"
}, {
    province: "广东",
    city: "广州"
}, {
    province: "广东",
    city: "深圳"
}, {
    province: "河南",
    city: "郑州"
}, {
    province: "陕西",
    city: "西安"
}, {
    province: "江苏",
    city: "南京"
}, {
    province: "浙江",
    city: "杭州"
}, {
    province: "湖北",
    city: "武汉"
}, {
    province: "四川",
    city: "成都"
}, {
    province: "辽宁",
    city: "沈阳"
}, {
    province: "天津",
    city: "天津"
} ], n = [ {
    tourist: "故宫博物院",
    shortname: "故宫"
}, {
    tourist: "颐和园",
    shortname: "颐和园"
}, {
    tourist: "九寨沟风景区",
    shortname: "九寨沟"
}, {
    tourist: "凤凰古城景区",
    shortname: "凤凰古城"
}, {
    tourist: "秦始皇陵",
    shortname: "秦始皇陵"
}, {
    tourist: "龙门石窟景区",
    shortname: "龙门石窟"
}, {
    tourist: "武陵源风景名胜区",
    shortname: "武陵源"
}, {
    tourist: "华山风景名胜区",
    shortname: "华山"
}, {
    tourist: "黄山风景区(山麓)",
    shortname: "黄山"
} ], p = {}, f = [], u = {}, h = {}, l = {
    chunjie: {
        start: "#fc6f6d",
        stop: "#ffccb6"
    },
    C1: {
        start: "#86c3ca",
        stop: "#b5e9e8"
    },
    C2: {
        start: "#3bbcff",
        stop: "#4af4ff"
    },
    C2N: {
        start: "#313877",
        stop: "#44abec"
    },
    C3: {
        start: "#43697f",
        stop: "#abd2d7"
    },
    C4: {
        start: "#67a1dc",
        stop: "#a8e0f7"
    },
    C5: {
        start: "#81aedc",
        stop: "#a9def1"
    },
    C6: {
        start: "#9b9b96",
        stop: "#c1c1bc"
    },
    C7: {
        start: "#c09461",
        stop: "#eedfa1"
    },
    C8: {
        start: "#3bbcff",
        stop: "#4af4ff"
    },
    C9: {
        start: "#50ade8",
        stop: "#7ae0fa"
    },
    C9N: {
        start: "#313877",
        stop: "#44abec"
    }
}, m = {
    a1: "#A3D765",
    a2: "#F0CC35",
    a3: "#F1AB62",
    a4: "#EF7F77",
    a5: "#B28CCB",
    a6: "#AD788A"
};

module.exports = (e = {
    scale: .5
}, t(e, "scale", .5), t(e, "bgCss", l), t(e, "apiBgCss", m), t(e, "MapAPI", "https://apis.map.qq.com/ws/geocoder/v1/?key=3BFBZ-ZKD3X-LW54A-ZT76D-E7AHO-4RBD5&location="), 
t(e, "BaseAPI", "https://wis.qq.com"), t(e, "VoiceAPI", "https://wx.cpcwe.com/index/voice"), 
t(e, "weekDay", o), t(e, "service", c), t(e, "hotCity", C), t(e, "hotScenic", n), 
t(e, "classKeys", i), t(e, "weekDayCn", a), t(e, "systemInfo", p), t(e, "windDirection", s), 
t(e, "searchResults", f), t(e, "searchLocation", u), t(e, "allWeatherInfo", h), 
t(e, "defaultLocation", r), t(e, "showUpdateTime", 5e3), t(e, "isGetLocation", !1), 
t(e, "isObjectValueEqual", function(t, e) {
    var r = Object.getOwnPropertyNames(t), s = Object.getOwnPropertyNames(e);
    if (r.length != s.length) return !1;
    for (var o = 0; o < r.length; o++) {
        var a = r[o];
        if (t[a] !== e[a]) return !1;
    }
    return !0;
}), t(e, "_debug", !1), e);