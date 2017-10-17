export default function(args) {
    var _string = "";

    for (var i in args) {
        _string += `${i}=${args[i]}&`; 
    }
    _string.slice(0, -1);
    return _string;
}