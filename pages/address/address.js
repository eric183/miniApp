// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      items: [{  checked: false }, { checked: true }, {  checked: false }]
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
    // console.log('dfasas');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      wx.setTopBarText({
          text: "收货地址",
          complete: function(data) {
            console.log(data);
          }
      })
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
    testClick(event) {
        if (!!event.currentTarget.dataset.item.checked) {
            return 
        }
        this.data.items.forEach((iter)=> {
            // console.log(iter);
            iter.checked = false;
        });
        this.data.items[event.currentTarget.dataset.index].checked = !this.data.items[event.currentTarget.dataset.index].checked;
        // console.log(this.data.items);

        // console.log(event.currentTarget.dataset.index);
        this.setData({
            items: this.data.items
        })
        console.log(this.data.items);
    },
    radioChange(e) {
        console.log(e);
        // this.data.items.map((data)=> {
        //     if(data.)
        // })
        // this.data.items
        // this.setData({
        //     items: this.items
        // })
    },
    goEdit(e) {
        // debugger;
        // getApp().Util().face.navigateTo({ 
        //     url: `/pages/address/address_editor?${getApp().Util().queryObj(e.currentTarget.dataset)}`
        // }).then((data) => {
        //     console.log(data);
        // });
        // debugger;
        try {
            wx.setStorageSync("item", e.currentTarget.dataset);
            getApp().Util().face.navigateTo({
                url: `/pages/address/address_editor`
            }).then((data) => {
                console.log(data);
            });
        } catch(e) {
            console.log(e);
        }
        // console.log(e.currentTarget.dataset);
    },
    deleteButton(e) {
        wx.showModal({
            content: '确认要删除选中地址吗？',
            cancelColor: '#5189d9',
            confirmColor: '#5189d9',
            success: function ({ confirm }) {
                if (confirm) {
                    var newItem = this.data.items.filter((data) => {
                        if (!data.checked) {
                            return data
                        }
                    });
                    this.setData({
                        items: newItem,
                        showString: "finish"
                    });
                } else {
                    return;
                }
            }.bind(this)
        })
        // console.log("delete")
    },
})