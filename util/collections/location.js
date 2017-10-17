export default {

    getMap(mapId) {
        return wx.createMapContext(mapId);
    },
    openLocation(object) {
        /**
         * 
         * openLocation 用于打开地图并获取数据
         * @param {latitude} Float
         * @param {longitude} Float
         * @param {scale} Int
         * @param {address} String 
         * @param {complete} Function
         * @returns 
         */

        return new Promise((resolve, reject) => {
            wx.openLocation({
                latitude: object.latitude,
                longitude: object.longitude,
                scale: "" || object.scale,
                address: "" || object.address,
                complete: function(data) {
                    resolve(data);
                }
            });
        })
    },
    getLocation(object) {
        return new Promise((resolve, reject) => {
            wx.getLocation({
                type: object.type,
                complete: function(data) {
                    resolve(data);
                }
            })
        })
    },
    choseLocation(object) {
        return new Promise((resolve, reject) => {
            wx.choseLocation({
                complete: function(data) {
                    resolve(data);
                },
                cancel: function() {
                    resolve();
                }
            })

        })
    }
}