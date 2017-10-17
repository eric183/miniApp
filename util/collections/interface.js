export default {
    navigateTo(object) {
        return new Promise((resolve) => {
            wx.navigateTo({
                url: object.url,
                complete: function(data) {
                    resolve(data);
                }
            })
        })
    },
    redirectTo(object) {
        return new Promise((resolve) => {
            wx.redirectTo({
                url: object.url,
                complete: function(data) {
                    resolve(data);
                }
            })
        })
    },
    reLaunch(object) {
        return new Promise((resolve) => {
            wx.reLaunch({
                url: object.url,
                complete: function(data) {
                    resolve(data);
                }
            })
        })
    },
    switchTab(object) {
        return new Promise((resolve) => {
            wx.switchTab({
                url: object.url,
                complete: function(data) {
                    resolve(data);
                }
            })
        })
    }
}