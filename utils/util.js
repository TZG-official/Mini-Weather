var t = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};

module.exports = {
    formatTime: function(e) {
        var r = e.getFullYear(), n = e.getMonth() + 1, o = e.getDate(), u = e.getHours(), a = e.getMinutes(), g = e.getSeconds();
        return [ r, n, o ].map(t).join("/") + " " + [ u, a, g ].map(t).join(":");
    },
    isObjectValueEqual: function(t, e) {
        var r = Object.getOwnPropertyNames(t), n = Object.getOwnPropertyNames(e);
        if (r.length != n.length) return !1;
        for (var o = 0; o < r.length; o++) {
            var u = r[o];
            if (t[u] !== e[u]) return !1;
        }
        return !0;
    }
};