// import Util from '../../util/util';

Page({
    data: {
        content: "我是label呀",
        items: [1,2,3,4,5,6,7,8]
    },
    //只调一次;
    onLoad(options) {

        console.log();
        this.setData({
            items: getApp().arraySlice(this.data.items)
        })
        // this.setData({
        //     content: 'helloworld'
        // })
    },
    //每次打开都会调
    onShow() {
        // Util.fetch({
        //     url: "http://www.wow-trend.cc/answer/index"
        // }).then((data)=> {
        //     console.log(data);
        // })
    },
    goDetail() {
        getApp().data.util.face.navigateTo({ url: "/pages/address/address" }).then((data) => {
            console.log(data);
        });
        // wx.navigateBack({
        //     delta: 1
        // });
    },
    itemBinder() {
        wx.navigateTo({
            url: '/pages/item/item',
        })
    }
})