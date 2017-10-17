// pages/address/address_editor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: wx.getStorageSync("item"),
    doms: {},
    resetCode: false,
    hideCodeHolder: false,
    region: ["西藏自治区", "拉萨市", "城关区"],
    customItem: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // debugger;
    //   var doms = {};
    //   doms.code = wx.createSelectorQuery().select("#code");
    //   this.setData({
    //       doms: Object.assign(this.data.doms, doms)
    //   })
    //   console.log(this.data.doms.code);
    //   debugger;
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
     
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  changeCodeHandler(e) {
      this.setData({
          hideCodeHolder: true
      })
  },
  blurCodeHandler(e) {
      if(!!e.detail.value.length) return;
      this.setData({
          hideCodeHolder: false
      });
    //   console.log(e.detail);

  },
  bindRegionChange(e) {
      console.log(e.detail);
      this.setData({
          region: e.detail.value
      })
      console.log(this.data.region);
  },
  phoneTabHandler(e) {
      console.log(e);
  }
})