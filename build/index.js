"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by zhouli on 18/9/15
 */

var Car = function () {
    function Car(maker, price) {
        _classCallCheck(this, Car);

        this.maker = maker;
        this.price = price;
    }

    _createClass(Car, [{
        key: "getInfo",
        value: function getInfo() {
            console.log(this.maker + " costs " + this.price);
        }
    }]);

    return Car;
}();

var car1 = new Car("BMW", 100);
car1.getInfo();

var car2 = new Car("XOX", 100000);
