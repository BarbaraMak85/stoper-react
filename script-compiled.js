"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Stopwatch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Stopwatch, _React$Component);

  function Stopwatch(props) {
    var _this;

    _classCallCheck(this, Stopwatch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Stopwatch).call(this, props));
    _this.state = {
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      },
      watch: null
    };
    return _this;
  }

  _createClass(Stopwatch, [{
    key: "reset",
    value: function reset() {
      this.setState({
        times: {
          minutes: 0,
          seconds: 0,
          miliseconds: 0
        }
      });
    }
  }, {
    key: "setZero",
    value: function setZero() {
      this.stop();
      this.reset();
      this.print();
    }
  }, {
    key: "format",
    value: function format() {
      return "".concat(pad0(this.state.times.minutes), ":").concat(pad0(this.state.times.seconds), ":").concat(pad0(Math.floor(this.state.times.miliseconds)));
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      if (!this.state.running) {
        this.setState({
          running: true
        });
        this.state.watch = setInterval(function () {
          return _this2.step();
        }, 10);
      }
    }
  }, {
    key: "step",
    value: function step() {
      if (!this.state.running) return;
      this.calculate();
    }
  }, {
    key: "calculate",
    value: function calculate() {
      var times = JSON.parse(JSON.stringify(this.state.times));
      times.miliseconds += 1;

      if (times.miliseconds >= 100) {
        times.seconds += 1;
        times.miliseconds = 0;
      }

      if (times.seconds >= 60) {
        times.minutes += 1;
        times.seconds = 0;
      }

      this.setState({
        times: times
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      this.setState({
        running: false
      });
      clearInterval(this.state.watch);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement("div", {
        className: "container"
      }, React.createElement("div", {
        className: "timer text-light"
      }, React.createElement("h1", null, "Stopwatch")), React.createElement("nav", {
        className: "controls"
      }, React.createElement("a", {
        href: "#",
        onClick: function onClick() {
          _this3.start();
        },
        className: "button btn btn-dark",
        id: "start"
      }, "Start"), React.createElement("a", {
        href: "#",
        onClick: function onClick() {
          _this3.stop();
        },
        className: "button btn btn-dark",
        id: "stop"
      }, "Stop"), React.createElement("a", {
        href: "#",
        onClick: function onClick() {
          _this3.reset();
        },
        className: "button btn btn-danger",
        id: "reset"
      }, "Reset")), React.createElement("div", {
        className: "stopwatch bg-light"
      }, this.format()), React.createElement("ul", {
        className: "results"
      }));
    }
  }]);

  return Stopwatch;
}(React.Component);

var pad0 = function pad0(value) {
  var result = value.toString();

  if (result.length < 2) {
    result = '0' + result;
  }

  return result;
};

ReactDOM.render(React.createElement(Stopwatch, null), document.getElementById('app'));
