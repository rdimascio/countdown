function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.CountDown = mod.exports;
  }
})((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object" ? globalThis : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : this, function () {
  'use strict';

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
    var timer;
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

    var start = function start() {
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

    var _render = function _render() {
      timer = setInterval(start, 1000);
    };

    return {
      render: _render
    };
  }

  module.exports = CountDown;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db3VudERvd24uanMiXSwibmFtZXMiOlsiQ291bnREb3duIiwicGFyYW1zIiwiZGVmYXVsdFBhcmFtcyIsImlkIiwiZW5kIiwic2VwYXJhdG9yIiwiZXhwaXJlZFRleHQiLCJ0aW1lciIsIkVORF9EQVRFIiwiRGF0ZSIsIlRJTUUiLCJzZWNvbmQiLCJtaW51dGUiLCJob3VyIiwiZGF5Iiwic3RhcnQiLCJUQVJHRVQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiTk9XIiwiVElNRV9MRUZUIiwiY2xlYXJJbnRlcnZhbCIsImlubmVySFRNTCIsIkRBWVNfTEVGVCIsIk1hdGgiLCJmbG9vciIsIkhPVVJTX0xFRlQiLCJNSU5VVEVTX0xFRlQiLCJTRUNPTkRTX0xFRlQiLCJfcmVuZGVyIiwic2V0SW50ZXJ2YWwiLCJyZW5kZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxXQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUMxQixRQUFNQyxhQUFhLEdBQUc7QUFDckJDLE1BQUFBLEVBQUUsRUFBRSxXQURpQjtBQUVyQkMsTUFBQUEsR0FBRyxFQUFFLFdBRmdCO0FBR3JCQyxNQUFBQSxTQUFTLEVBQUUsR0FIVTtBQUlyQkMsTUFBQUEsV0FBVyxFQUFFO0FBSlEsS0FBdEI7QUFPQUwsSUFBQUEsTUFBTSxxQkFBT0MsYUFBUCxNQUF5QkQsTUFBekIsQ0FBTjtBQUVBLFFBQUlNLEtBQUo7QUFFQSxRQUFNQyxRQUFRLEdBQUcsSUFBSUMsSUFBSixDQUFTUixNQUFNLENBQUNHLEdBQWhCLENBQWpCO0FBQ0EsUUFBTU0sSUFBSSxHQUFHO0FBQ1pDLE1BQUFBLE1BQU0sRUFBRSxJQURJOztBQUVaLFVBQUlDLE1BQUosR0FBYTtBQUNaLGVBQU8sS0FBS0QsTUFBTCxHQUFjLEVBQXJCO0FBQ0EsT0FKVzs7QUFLWixVQUFJRSxJQUFKLEdBQVc7QUFDVixlQUFPLEtBQUtELE1BQUwsR0FBYyxFQUFyQjtBQUNBLE9BUFc7O0FBUVosVUFBSUUsR0FBSixHQUFVO0FBQ1QsZUFBTyxLQUFLRCxJQUFMLEdBQVksRUFBbkI7QUFDQTs7QUFWVyxLQUFiOztBQWFBLFFBQU1FLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbkIsVUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JqQixNQUFNLENBQUNFLEVBQS9CLENBQWY7QUFDQSxVQUFNZ0IsR0FBRyxHQUFHLElBQUlWLElBQUosRUFBWjtBQUNBLFVBQU1XLFNBQVMsR0FBR1osUUFBUSxHQUFHVyxHQUE3Qjs7QUFFQSxVQUFJQyxTQUFTLEdBQUcsQ0FBaEIsRUFBbUI7QUFDbEJDLFFBQUFBLGFBQWEsQ0FBQ2QsS0FBRCxDQUFiO0FBQ0FTLFFBQUFBLE1BQU0sQ0FBQ00sU0FBUCxHQUFtQnJCLE1BQU0sQ0FBQ0ssV0FBMUI7QUFDQTtBQUNBOztBQUVELFVBQU1pQixTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxTQUFTLEdBQUdWLElBQUksQ0FBQ0ksR0FBNUIsQ0FBbEI7QUFDQSxVQUFNWSxVQUFVLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxTQUFTLEdBQUdWLElBQUksQ0FBQ0ksR0FBbEIsR0FBeUJKLElBQUksQ0FBQ0csSUFBekMsQ0FBbkI7QUFDQSxVQUFNYyxZQUFZLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxTQUFTLEdBQUdWLElBQUksQ0FBQ0csSUFBbEIsR0FBMEJILElBQUksQ0FBQ0UsTUFBMUMsQ0FBckI7QUFDQSxVQUFNZ0IsWUFBWSxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBWUwsU0FBUyxHQUFHVixJQUFJLENBQUNFLE1BQWxCLEdBQTRCRixJQUFJLENBQUNDLE1BQTVDLENBQXJCO0FBRUFLLE1BQUFBLE1BQU0sQ0FBQ00sU0FBUCxHQUFtQkMsU0FBUyxtQkFBWXRCLE1BQU0sQ0FBQ0ksU0FBbkIsTUFBNUI7QUFDQVcsTUFBQUEsTUFBTSxDQUFDTSxTQUFQLElBQW9CSSxVQUFVLGtCQUFXekIsTUFBTSxDQUFDSSxTQUFsQixNQUE5QjtBQUNBVyxNQUFBQSxNQUFNLENBQUNNLFNBQVAsSUFBb0JLLFlBQVksbUJBQVkxQixNQUFNLENBQUNJLFNBQW5CLE1BQWhDO0FBQ0FXLE1BQUFBLE1BQU0sQ0FBQ00sU0FBUCxJQUFvQk0sWUFBWSxHQUFHLE9BQW5DO0FBQ0EsS0FwQkQ7O0FBc0JBLFFBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDckJ0QixNQUFBQSxLQUFLLEdBQUd1QixXQUFXLENBQUNmLEtBQUQsRUFBUSxJQUFSLENBQW5CO0FBQ0EsS0FGRDs7QUFJQSxXQUFPO0FBQ05nQixNQUFBQSxNQUFNLEVBQUVGO0FBREYsS0FBUDtBQUdBOztBQUVERyxFQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUJqQyxTQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gQ291bnREb3duKHBhcmFtcykge1xuXHRjb25zdCBkZWZhdWx0UGFyYW1zID0ge1xuXHRcdGlkOiAnY291bnREb3duJyxcblx0XHRlbmQ6ICcyLzI4LzIwNDAnLFxuXHRcdHNlcGFyYXRvcjogJzonLFxuXHRcdGV4cGlyZWRUZXh0OiAnRVhQSVJFRCEnXG5cdH1cblxuXHRwYXJhbXMgPSB7Li4uZGVmYXVsdFBhcmFtcywgLi4ucGFyYW1zfTtcblxuXHRsZXQgdGltZXI7XG5cblx0Y29uc3QgRU5EX0RBVEUgPSBuZXcgRGF0ZShwYXJhbXMuZW5kKTtcblx0Y29uc3QgVElNRSA9IHtcblx0XHRzZWNvbmQ6IDEwMDAsXG5cdFx0Z2V0IG1pbnV0ZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnNlY29uZCAqIDYwXG5cdFx0fSxcblx0XHRnZXQgaG91cigpIHtcblx0XHRcdHJldHVybiB0aGlzLm1pbnV0ZSAqIDYwXG5cdFx0fSxcblx0XHRnZXQgZGF5KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaG91ciAqIDI0XG5cdFx0fVxuXHR9XG5cblx0Y29uc3Qgc3RhcnQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgVEFSR0VUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyYW1zLmlkKTtcblx0XHRjb25zdCBOT1cgPSBuZXcgRGF0ZSgpO1xuXHRcdGNvbnN0IFRJTUVfTEVGVCA9IEVORF9EQVRFIC0gTk9XO1xuXG5cdFx0aWYgKFRJTUVfTEVGVCA8IDApIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwodGltZXIpO1xuXHRcdFx0VEFSR0VULmlubmVySFRNTCA9IHBhcmFtcy5leHBpcmVkVGV4dDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBEQVlTX0xFRlQgPSBNYXRoLmZsb29yKFRJTUVfTEVGVCAvIFRJTUUuZGF5KTtcblx0XHRjb25zdCBIT1VSU19MRUZUID0gTWF0aC5mbG9vcigoVElNRV9MRUZUICUgVElNRS5kYXkpIC8gVElNRS5ob3VyKTtcblx0XHRjb25zdCBNSU5VVEVTX0xFRlQgPSBNYXRoLmZsb29yKChUSU1FX0xFRlQgJSBUSU1FLmhvdXIpIC8gVElNRS5taW51dGUpO1xuXHRcdGNvbnN0IFNFQ09ORFNfTEVGVCA9IE1hdGguZmxvb3IoKFRJTUVfTEVGVCAlIFRJTUUubWludXRlKSAvIFRJTUUuc2Vjb25kKTtcblxuXHRcdFRBUkdFVC5pbm5lckhUTUwgPSBEQVlTX0xFRlQgKyBgIGRheXMgJHtwYXJhbXMuc2VwYXJhdG9yfSBgO1xuXHRcdFRBUkdFVC5pbm5lckhUTUwgKz0gSE9VUlNfTEVGVCArIGAgaHJzICR7cGFyYW1zLnNlcGFyYXRvcn0gYDtcblx0XHRUQVJHRVQuaW5uZXJIVE1MICs9IE1JTlVURVNfTEVGVCArIGAgbWlucyAke3BhcmFtcy5zZXBhcmF0b3J9IGA7XG5cdFx0VEFSR0VULmlubmVySFRNTCArPSBTRUNPTkRTX0xFRlQgKyAnIHNlY3MnO1xuXHR9XG5cblx0Y29uc3QgX3JlbmRlciA9ICgpID0+IHtcblx0XHR0aW1lciA9IHNldEludGVydmFsKHN0YXJ0LCAxMDAwKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0cmVuZGVyOiBfcmVuZGVyXG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb3VudERvd247XG4iXX0=
