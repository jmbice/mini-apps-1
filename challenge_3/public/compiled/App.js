"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormShell = function FormShell(props) {
  var currentView = props.fullState.currentView;
  var fullState = props.fullState;
  var onChange = props.handleChange;

  if (currentView === 1) {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "form",
        null,
        React.createElement(
          "h3",
          null,
          "Account Details"
        ),
        "Name: ",
        React.createElement("input", { onChange: props.handleChange, name: "user_name", type: "text" }),
        " ",
        React.createElement("br", null),
        fullState.user_name,
        " ",
        React.createElement("br", null),
        "Email: ",
        React.createElement("input", { onChange: props.handleChange, name: "email", type: "text" }),
        " ",
        React.createElement("br", null),
        fullState.email,
        " ",
        React.createElement("br", null),
        "Password: ",
        React.createElement("input", { type: "text" }),
        " ",
        React.createElement("br", null)
      ),
      React.createElement(
        "button",
        { onClick: props.passedHandleNextClick },
        "Next"
      )
    );
  } else if (currentView === 2) {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "Delivery Address:"
        ),
        "Address: ",
        React.createElement("input", { type: "text", name: "address1" }),
        " ",
        React.createElement("br", null),
        fullState.address1,
        " ",
        React.createElement("br", null),
        "Address (optional): ",
        React.createElement("input", { type: "text", name: "" }),
        " ",
        React.createElement("br", null),
        "City: ",
        React.createElement("input", { type: "text" }),
        " ",
        React.createElement("br", null),
        "State: ",
        React.createElement("input", { type: "text" }),
        " ",
        React.createElement("br", null),
        "Zip: ",
        React.createElement("input", { type: "text" }),
        " ",
        React.createElement("br", null),
        React.createElement(
          "h3",
          null,
          "Phone"
        ),
        "Your Phone Number: ",
        React.createElement("input", { type: "text" })
      ),
      React.createElement(
        "button",
        { onClick: props.passedHandlePreviousClick },
        "Previous"
      ),
      React.createElement(
        "button",
        { onClick: props.passedHandleNextClick },
        "Next"
      )
    );
    //
  } else if (currentView === 3) {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "Payment Information:"
        ),
        "Credit Card: ",
        React.createElement("input", { type: "text", name: "cc" }),
        " ",
        React.createElement("br", null),
        "CVV: ",
        React.createElement("input", { type: "text" }),
        " ",
        React.createElement("br", null),
        "Expiration Date: ",
        React.createElement("input", { type: "text" }),
        React.createElement(
          "h3",
          null,
          "Billing Address:"
        ),
        "Address: ",
        React.createElement("input", { type: "text" }),
        " ",
        React.createElement("br", null),
        "Address (optional): ",
        React.createElement("input", { type: "text" }),
        " ",
        React.createElement("br", null),
        "City: ",
        React.createElement("input", { type: "text" }),
        " ",
        React.createElement("br", null),
        "State: ",
        React.createElement("input", { type: "text" }),
        " ",
        React.createElement("br", null),
        "Zip: ",
        React.createElement("input", { type: "text" }),
        " ",
        React.createElement("br", null),
        "Your Phone Number: ",
        React.createElement("input", { type: "text" })
      ),
      React.createElement(
        "button",
        { onClick: props.passedHandlePreviousClick },
        "Previous"
      ),
      React.createElement(
        "button",
        { onClick: props.passedHandleNextClick },
        "Next"
      )
    );
    //
  } else if (currentView === 4) {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        "Account Details"
      ),
      "Name: ",
      fullState.user_name,
      " ",
      React.createElement("br", null),
      "Email: ",
      fullState.email,
      " ",
      React.createElement("br", null),
      "Password: ",
      fullState.password,
      " ",
      React.createElement("br", null),
      React.createElement(
        "h3",
        null,
        "Delivery Address:"
      ),
      "Address: ",
      fullState.address1,
      " ",
      React.createElement("br", null),
      "Address ",
      fullState.address2,
      " ",
      React.createElement("br", null),
      "City: ",
      fullState.city,
      " ",
      React.createElement("br", null),
      "State: ",
      fullState.state,
      " ",
      React.createElement("br", null),
      "Zip: ",
      fullState.zip,
      React.createElement(
        "h3",
        null,
        "Phone"
      ),
      "Phone: ",
      fullState.phone,
      React.createElement(
        "h3",
        null,
        "Payment Information:"
      ),
      "Credit Card: ",
      fullState.cc,
      " ",
      React.createElement("br", null),
      "CVV: ",
      fullState.cvv,
      " ",
      React.createElement("br", null),
      "Expiration Date:",
      fullState.exp,
      React.createElement(
        "h3",
        null,
        "Billing Address:"
      ),
      "Address: ",
      fullState.b_address1,
      " ",
      React.createElement("br", null),
      "Address ",
      fullState.b_address2,
      " ",
      React.createElement("br", null),
      "City: ",
      fullState.b_city,
      " ",
      React.createElement("br", null),
      "State: ",
      fullState.b_state,
      " ",
      React.createElement("br", null),
      "Zip: ",
      fullState.b_zip,
      " ",
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(
        "button",
        { onClick: props.passedHandlePreviousClick },
        "Previous"
      ),
      React.createElement(
        "button",
        null,
        " Submit "
      )
    );
    //
  }
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      currentView: 1,
      user_name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      cc: '',
      cvv: '',
      exp: '',
      b_address1: '',
      b_address2: '',
      b_city: '',
      b_state: '',
      b_zip: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: "passedHandleNextClick",
    value: function passedHandleNextClick(e) {
      var current = this.state.currentView;
      if (current <= 3) {
        this.setState({ currentView: current + 1 });
      }
    }
  }, {
    key: "passedHandlePreviousClick",
    value: function passedHandlePreviousClick(e) {
      var current = this.state.currentView;
      if (current >= 2) {
        this.setState({ currentView: current - 1 });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var field = e.target.name;
      var value = e.target.value;
      console.log(field, value);
      this.setState(_defineProperty({}, field, [value]));
    }
    //
    //  handleSubmit(e) {
    //   alert('A name was submitted: ' + this.state.value);
    //   e.preventDefault();
    // }


  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Welcome to Checkout"
        ),
        React.createElement(
          "div",
          null,
          React.createElement(FormShell, {
            fullState: this.state,
            handleChange: this.handleChange.bind(this),
            passedHandleNextClick: this.passedHandleNextClick.bind(this),
            passedHandlePreviousClick: this.passedHandlePreviousClick.bind(this)
          })
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));