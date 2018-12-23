var s = require("./utils/global");

App({
    onLaunch: function() {
        wx.getSystemInfo({
            success: function(e) {
                s._debug && console.log("systemInfo:", e), s.systemInfo = e, s.scale = s.systemInfo.windowWidth / 750;
            }
        });
    }
});