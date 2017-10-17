// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        showString: 'edit',
        items: [{ count: 1, checked: true }, { count: 2, checked: false }, { count: 2 }, { count: 2 }, { count: 2 }, { count: 2 }, { count: 2 }, { count: 2 }, { count: 2 }, { count: 2 }, { count: 2 }, { count: 2 }, ],
        deleteIndex: '',
        selectAll: false
            //   hideFinish: true,
            //   hideEdit: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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

    toolBinder(e) {
        //   result = e.target.dataset.is == "finish" ? 
        //   console.log(e.target.dataset.is);
        this.setData({
            showString: e.target.dataset.show
        })
        console.log(this.data.showString);
    },
    inputHandler(e) {
        this.data.items[e.target.dataset.index].count = e.detail.value;
        this.setData({
            items: this.data.items
        })
    },
    minusHandler(e) {
        if (this.data.items[e.target.dataset.index].count == 1) return;
        this.data.items[e.target.dataset.index].count--;
        console.log(this.data.items[e.target.dataset.index].count);
        this.setData({
            items: this.data.items
        })
    },
    plusHandler(e) {
        this.data.items[e.target.dataset.index].count++;
        console.log(this.data.items[e.target.dataset.index].count);
        this.setData({
                items: this.data.items
            })
            //   console.log(e.target.dataset.index)
    },
    checkHandler(e) {
        this.data.items[e.currentTarget.dataset.index].checked = !this.data.items[e.currentTarget.dataset.index].checked;
        this.setData({
            items: this.data.items
        });
        console.log(this.data.items[e.currentTarget.dataset.index].checked);
    }, 
    dealButton(e) {
        
    },
    deleteButton(e) {
        wx.showModal({
            content: '确认要删除选中的商品吗？',
            cancelColor: '#5189d9',
            confirmColor: '#5189d9',
            success: function({ confirm }) {
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
    },
    activeAll(e) {
        this.data.selectAll = !this.data.selectAll;
        var newItem = this.data.items.map((data) => {
            data.checked = this.data.selectAll;
            return data;
        });
        this.setData({
            items: newItem,
            selectAll: this.data.selectAll
        });
    }
})