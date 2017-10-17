export default {
    pullDown() {
        return new Pomise((resolve) => {
            wx.startPullDownRefresh({
                complete: function() {
                    resolve();
                }
            })
        })
    },
    closePull() {
        wx.startPullDownRefresh();
    }
}