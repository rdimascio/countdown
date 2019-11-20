function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.CountDown = mod.exports;
  }
})((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object" ? globalThis : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = CountDown;

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function CountDown(params) {
    var defaultParams = {
      id: 'countDown',
      end: '2/28/2040',
      separator: ':',
      expiredText: 'EXPIRED!'
    };
    params = _objectSpread({}, defaultParams, {}, params);
    var END_DATE = new Date(params.end);
    var TIME = {
      second: 1000,

      get minute() {
        return this.second * 60;
      },

      get hour() {
        return this.minute * 60;
      },

      get day() {
        return this.hour * 24;
      }

    };
    var timer;

    var showRemaining = function showRemaining() {
      var TARGET = document.getElementById(params.id);
      var NOW = new Date();
      var TIME_LEFT = END_DATE - NOW;

      if (TIME_LEFT < 0) {
        clearInterval(timer);
        TARGET.innerHTML = params.expiredText;
        return;
      }

      var DAYS_LEFT = Math.floor(TIME_LEFT / TIME.day);
      var HOURS_LEFT = Math.floor(TIME_LEFT % TIME.day / TIME.hour);
      var MINUTES_LEFT = Math.floor(TIME_LEFT % TIME.hour / TIME.minute);
      var SECONDS_LEFT = Math.floor(TIME_LEFT % TIME.minute / TIME.second);
      TARGET.innerHTML = DAYS_LEFT + " days ".concat(params.separator, " ");
      TARGET.innerHTML += HOURS_LEFT + " hrs ".concat(params.separator, " ");
      TARGET.innerHTML += MINUTES_LEFT + " mins ".concat(params.separator, " ");
      TARGET.innerHTML += SECONDS_LEFT + ' secs';
    };

    timer = setInterval(showRemaining, 1000);
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db3VudERvd24uanMiXSwibmFtZXMiOlsiQ291bnREb3duIiwicGFyYW1zIiwiZGVmYXVsdFBhcmFtcyIsImlkIiwiZW5kIiwic2VwYXJhdG9yIiwiZXhwaXJlZFRleHQiLCJFTkRfREFURSIsIkRhdGUiLCJUSU1FIiwic2Vjb25kIiwibWludXRlIiwiaG91ciIsImRheSIsInRpbWVyIiwic2hvd1JlbWFpbmluZyIsIlRBUkdFVCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJOT1ciLCJUSU1FX0xFRlQiLCJjbGVhckludGVydmFsIiwiaW5uZXJIVE1MIiwiREFZU19MRUZUIiwiTWF0aCIsImZsb29yIiwiSE9VUlNfTEVGVCIsIk1JTlVURVNfTEVGVCIsIlNFQ09ORFNfTEVGVCIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsV0FBU0EsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7QUFDekMsUUFBTUMsYUFBYSxHQUFHO0FBQ3JCQyxNQUFBQSxFQUFFLEVBQUUsV0FEaUI7QUFFckJDLE1BQUFBLEdBQUcsRUFBRSxXQUZnQjtBQUdyQkMsTUFBQUEsU0FBUyxFQUFFLEdBSFU7QUFJckJDLE1BQUFBLFdBQVcsRUFBRTtBQUpRLEtBQXRCO0FBT0FMLElBQUFBLE1BQU0scUJBQU9DLGFBQVAsTUFBeUJELE1BQXpCLENBQU47QUFFQSxRQUFNTSxRQUFRLEdBQUcsSUFBSUMsSUFBSixDQUFTUCxNQUFNLENBQUNHLEdBQWhCLENBQWpCO0FBQ0EsUUFBTUssSUFBSSxHQUFHO0FBQ1pDLE1BQUFBLE1BQU0sRUFBRSxJQURJOztBQUVaLFVBQUlDLE1BQUosR0FBYTtBQUNaLGVBQU8sS0FBS0QsTUFBTCxHQUFjLEVBQXJCO0FBQ0EsT0FKVzs7QUFLWixVQUFJRSxJQUFKLEdBQVc7QUFDVixlQUFPLEtBQUtELE1BQUwsR0FBYyxFQUFyQjtBQUNBLE9BUFc7O0FBUVosVUFBSUUsR0FBSixHQUFVO0FBQ1QsZUFBTyxLQUFLRCxJQUFMLEdBQVksRUFBbkI7QUFDQTs7QUFWVyxLQUFiO0FBYUEsUUFBSUUsS0FBSjs7QUFFQSxRQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDM0IsVUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JqQixNQUFNLENBQUNFLEVBQS9CLENBQWY7QUFDQSxVQUFNZ0IsR0FBRyxHQUFHLElBQUlYLElBQUosRUFBWjtBQUNBLFVBQU1ZLFNBQVMsR0FBR2IsUUFBUSxHQUFHWSxHQUE3Qjs7QUFFQSxVQUFJQyxTQUFTLEdBQUcsQ0FBaEIsRUFBbUI7QUFDbEJDLFFBQUFBLGFBQWEsQ0FBQ1AsS0FBRCxDQUFiO0FBQ0FFLFFBQUFBLE1BQU0sQ0FBQ00sU0FBUCxHQUFtQnJCLE1BQU0sQ0FBQ0ssV0FBMUI7QUFDQTtBQUNBOztBQUVELFVBQU1pQixTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxTQUFTLEdBQUdYLElBQUksQ0FBQ0ksR0FBNUIsQ0FBbEI7QUFDQSxVQUFNYSxVQUFVLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxTQUFTLEdBQUdYLElBQUksQ0FBQ0ksR0FBbEIsR0FBeUJKLElBQUksQ0FBQ0csSUFBekMsQ0FBbkI7QUFDQSxVQUFNZSxZQUFZLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxTQUFTLEdBQUdYLElBQUksQ0FBQ0csSUFBbEIsR0FBMEJILElBQUksQ0FBQ0UsTUFBMUMsQ0FBckI7QUFDQSxVQUFNaUIsWUFBWSxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBWUwsU0FBUyxHQUFHWCxJQUFJLENBQUNFLE1BQWxCLEdBQTRCRixJQUFJLENBQUNDLE1BQTVDLENBQXJCO0FBRUFNLE1BQUFBLE1BQU0sQ0FBQ00sU0FBUCxHQUFtQkMsU0FBUyxtQkFBWXRCLE1BQU0sQ0FBQ0ksU0FBbkIsTUFBNUI7QUFDQVcsTUFBQUEsTUFBTSxDQUFDTSxTQUFQLElBQW9CSSxVQUFVLGtCQUFXekIsTUFBTSxDQUFDSSxTQUFsQixNQUE5QjtBQUNBVyxNQUFBQSxNQUFNLENBQUNNLFNBQVAsSUFBb0JLLFlBQVksbUJBQVkxQixNQUFNLENBQUNJLFNBQW5CLE1BQWhDO0FBQ0FXLE1BQUFBLE1BQU0sQ0FBQ00sU0FBUCxJQUFvQk0sWUFBWSxHQUFHLE9BQW5DO0FBQ0EsS0FwQkQ7O0FBc0JBZCxJQUFBQSxLQUFLLEdBQUdlLFdBQVcsQ0FBQ2QsYUFBRCxFQUFnQixJQUFoQixDQUFuQjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291bnREb3duKHBhcmFtcykge1xuXHRjb25zdCBkZWZhdWx0UGFyYW1zID0ge1xuXHRcdGlkOiAnY291bnREb3duJyxcblx0XHRlbmQ6ICcyLzI4LzIwNDAnLFxuXHRcdHNlcGFyYXRvcjogJzonLFxuXHRcdGV4cGlyZWRUZXh0OiAnRVhQSVJFRCEnXG5cdH1cblxuXHRwYXJhbXMgPSB7Li4uZGVmYXVsdFBhcmFtcywgLi4ucGFyYW1zfTtcblxuXHRjb25zdCBFTkRfREFURSA9IG5ldyBEYXRlKHBhcmFtcy5lbmQpO1xuXHRjb25zdCBUSU1FID0ge1xuXHRcdHNlY29uZDogMTAwMCxcblx0XHRnZXQgbWludXRlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2Vjb25kICogNjBcblx0XHR9LFxuXHRcdGdldCBob3VyKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMubWludXRlICogNjBcblx0XHR9LFxuXHRcdGdldCBkYXkoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5ob3VyICogMjRcblx0XHR9XG5cdH1cblxuXHRsZXQgdGltZXI7XG5cblx0Y29uc3Qgc2hvd1JlbWFpbmluZyA9ICgpID0+IHtcblx0XHRjb25zdCBUQVJHRVQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJhbXMuaWQpO1xuXHRcdGNvbnN0IE5PVyA9IG5ldyBEYXRlKCk7XG5cdFx0Y29uc3QgVElNRV9MRUZUID0gRU5EX0RBVEUgLSBOT1c7XG5cblx0XHRpZiAoVElNRV9MRUZUIDwgMCkge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XG5cdFx0XHRUQVJHRVQuaW5uZXJIVE1MID0gcGFyYW1zLmV4cGlyZWRUZXh0O1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IERBWVNfTEVGVCA9IE1hdGguZmxvb3IoVElNRV9MRUZUIC8gVElNRS5kYXkpO1xuXHRcdGNvbnN0IEhPVVJTX0xFRlQgPSBNYXRoLmZsb29yKChUSU1FX0xFRlQgJSBUSU1FLmRheSkgLyBUSU1FLmhvdXIpO1xuXHRcdGNvbnN0IE1JTlVURVNfTEVGVCA9IE1hdGguZmxvb3IoKFRJTUVfTEVGVCAlIFRJTUUuaG91cikgLyBUSU1FLm1pbnV0ZSk7XG5cdFx0Y29uc3QgU0VDT05EU19MRUZUID0gTWF0aC5mbG9vcigoVElNRV9MRUZUICUgVElNRS5taW51dGUpIC8gVElNRS5zZWNvbmQpO1xuXG5cdFx0VEFSR0VULmlubmVySFRNTCA9IERBWVNfTEVGVCArIGAgZGF5cyAke3BhcmFtcy5zZXBhcmF0b3J9IGA7XG5cdFx0VEFSR0VULmlubmVySFRNTCArPSBIT1VSU19MRUZUICsgYCBocnMgJHtwYXJhbXMuc2VwYXJhdG9yfSBgO1xuXHRcdFRBUkdFVC5pbm5lckhUTUwgKz0gTUlOVVRFU19MRUZUICsgYCBtaW5zICR7cGFyYW1zLnNlcGFyYXRvcn0gYDtcblx0XHRUQVJHRVQuaW5uZXJIVE1MICs9IFNFQ09ORFNfTEVGVCArICcgc2Vjcyc7XG5cdH1cblxuXHR0aW1lciA9IHNldEludGVydmFsKHNob3dSZW1haW5pbmcsIDEwMDApO1xufVxuIl19
