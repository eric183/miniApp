export default {
    scan(object) {
        wx.scanCode({
            onlyFromCamera: false || object.onlyFromCamera,
            complete: function(data) {
                resolve(data)
            }
        })
    }
}