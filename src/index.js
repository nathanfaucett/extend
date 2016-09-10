var keys = require("@nathanfaucett/keys"),
    isNative = require("@nathanfaucett/is_native");


var nativeAssign = Object.assign,
    extend, baseExtend;


if (isNative(nativeAssign)) {
    extend = nativeAssign;
} else {
    extend = function extend(out) {
        var i = 0,
            il = arguments.length - 1;

        while (i++ < il) {
            baseExtend(out, arguments[i]);
        }

        return out;
    };
    baseExtend = function baseExtend(a, b) {
        var objectKeys = keys(b),
            i = -1,
            il = objectKeys.length - 1,
            key;

        while (i++ < il) {
            key = objectKeys[i];
            a[key] = b[key];
        }
    };
}


module.exports = extend;
