define(["exports"], function(exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    // inlined here manually
    var _ponyfill = function symbolObservablePonyfill(root) {
        var result;
        var _Symbol = root.Symbol;

        if (typeof _Symbol === 'function') {
            if (_Symbol.observable) {
                result = _Symbol.observable;
            } else {
                result = _Symbol('observable');
                _Symbol.observable = result;
            }
        } else {
            result = '@@observable';
        }

        return result;
    };


    var _ponyfill2 = _interopRequireDefault(_ponyfill);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    var root = undefined; /* global window */

    if (typeof global !== 'undefined') {
        root = global;
    } else if (typeof window !== 'undefined') {
        root = window;
    }

    var result = (0, _ponyfill2.default)(root);
    exports.default = result;
});