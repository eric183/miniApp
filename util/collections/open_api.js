export default {
    login() {
        return new Promise((resolve) => {
            wx.login({
                complete: function(data) {
                    resolve(data);
                }
            })
        })
    }
}