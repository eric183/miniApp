// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isSent: false,
        second: 60,
        phoneNumber: '',
        checkNumber: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        //   isSent ? "35S后重发" : "免费获取"
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    phoneBinder(e) {
        this.setData({
                phoneNumber: e.detail.value
            })
            // console.log();
            // console.log(this.data.phoneNumber);
            // debugger;
    },
    buttonBinder() {
        if (!this.data.isSent) return;
        setTimeout(function() {
            //验证通过
            wx.switchTab({
                url: '/pages/find/find',
            })
        }, 1000)
    },
    identifyingBind() {
        //   debugger;
        //   console.log('sda');
        var _value = '';
        if (this.data.phoneNumber.length < 11) {
            wx.showModal({
                content: this.data.phoneNumber.trim().length == 0 ? '手机号不能为空' : '请输入正确的手机号',
                cancelColor: '#5189d9',
                confirmColor: '#5189d9',
                showCancel: false
            })
            return;
        }
        if (!this.data.isSent) {
            this.setData({
                isSent: true,
            });
            var timer = setInterval(() => {
                if (this.data.second == 0) {
                    clearInterval(timer);
                    this.setData({
                        isSent: false,
                        second: 60
                    });
                } else {
                    this.data.second--;
                    this.setData({
                        second: this.data.second
                    });
                }


            }, 1000)
        }
    },
    checkBinder(e) {
        this.setData({
            checkNumber: e.detail.value
        })
    }


})