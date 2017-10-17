// pages/item/item.js
import util from '../../util/util';

// var sliceMoney = function (str, word) {
//     if (word == 'l') {
//         return /(.+)\./.exec("70.23")[1]
//     } else {
//         return /.+\.(.+)/.exec("70.23")[1];
//     }
// }
// debugger;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        activeNumber: 1,
        item: {
            count: 1
        },
        isAction: false,
        toView: '',
        scrollTop: 0,
        isFaved: false
        // obj: {

        // }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // util.sliceMoney("27.00");
        // debugger;
        // debugger;
        // console.log(options);
        this.setData({
            sliceMoney: this.sliceMoney,
            isFaved: options.isFavTemplate
        })
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
    actionBind() {
        this.setData({
            isAction: !this.data.isAction
        })
    },
    activeBinder(e) {
        // if()
        this.setData({
            activeNumber: e.target.dataset.activeNumber
        })
    },
    minusHandler(e) {
        if (this.data.item.count == 1) return;
        this.data.item.count--;
        console.log(this.data.item.count);
        this.setData({
            item: this.data.item
        })
    },
    plusHandler(e) {
        if (this.data.item.count >= 50) return;
        this.data.item.count++;
        console.log(this.data.item.count);
        this.setData({
                item: this.data.item
            })
            //   console.log(e.target.dataset.index)
    },
    inputHandler(e) {
        // if (this.data.item.count >= 50) return;

        this.data.item.count = e.detail.value >= 50 ? 50 : e.detail.value;
        this.setData({
            item: this.data.item
        });
        // debugger;
    },
    goHash(e) {
        if (e.target.dataset.hash == 'hashImage') return;
        this.setData({
                toView: e.target.dataset.hash,
                // scrollTop: 2000,
            })
            // debugger;
            // debugger;
    },
    favBinder() {
        // 收藏成功回调;
        
        this.setData({
            isFaved: !this.data.isFaved
        })
        console.log(this.data.isFaved);
    }
    // if(word == 'l') {
    //     return /(.+)\./.exec("70.23")[1]
    // } else {
    //     return /.+\.(.+)/.exec("70.23")[1];
    // }

    //   cancalActionBind() {

    //   }
})