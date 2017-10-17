Page({
    data: {
        winHeight: 0
    },
    onShow() {
        var _this = this;
        // wx.getSystemInfo({
        //     success: function ({ windowHeight }) {
        //         _this.setData({
        //             winHeight: windowHeight - 200
        //         })
        //         debugger;
        //     }
        // })
        // this.setData({
        //     showTab: "label"
        // });
        // console.log(getApp().data.util.set);
        // var m = getApp();
        // m.setTab("find");
        // debugger;
        // this.showTab = "find";

    },
    consoleTap() {
        getApp().data.util.face.navigateTo({ url: "/pages/address/address" }).then((data) => {
            console.log(data);
        });
        // debugger;
    }
})