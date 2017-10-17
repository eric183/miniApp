import util from './util/util';

App({
    data: {
        util: util,
        showTab: "label"
    },
    //初始调用一次
    alertConsole() {
        return "helloworld"
    },
    onLaunch(options) {
        // this.handlerThing();
        console.log(options);
    },
    onShow() {
        console.log("调用")
        // debugger;
    },
    setTab(arg) {
        this.setData({
            showTab: arg
        })
    },
    Util() {
        // debugger;
        return util;
    },
    arraySlice(arrObj) { 
        var _arr = [];
        while (arrObj.length >= 1) {
            _arr.push(arrObj.splice(0, 2))
        }
        return _arr
    },
    arrayBack(_arr) {
        var objj = [];

        for (var m = 0; m < _arr.length; m++) {
            for (var j = 0; j < _arr[m].length; j++) {
                objj.push(_arr[m][j])
            }
        }
        return objj;
    },
    sliceString(str) {
        var slices;
        var m = str.split("&");
        var _arr = [];
        while (m.length > 0) {
            var obj = {};
            var shifts = m.shift();
            slices = /(.+)\=(.+)/gmi.exec(shifts);
            obj[slices[1]] = slices[2];
            _arr.push(obj);
        }
        return _arr;
    }
})