import collections from './config';

const utilInitor = function(object, options) {
    for (let iter in options) {
        object.prototype[iter] = options[iter];
    }
}

const Util = function() {};

utilInitor(Util, collections);

export default new Util();