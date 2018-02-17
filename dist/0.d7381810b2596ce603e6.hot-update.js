webpackHotUpdate(0,{

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Signup = function (_Component) {\n  _inherits(Signup, _Component);\n\n  function Signup(props) {\n    _classCallCheck(this, Signup);\n\n    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));\n\n    _this.state = {\n      firstName: '',\n      lastName: '',\n      email: '',\n      password: '',\n      loginError: '',\n      signupError: ''\n    };\n    _this.handleSignup = _this.handleSignup.bind(_this);\n\n    return _this;\n  }\n\n  _createClass(Signup, [{\n    key: 'handleSignup',\n    value: function handleSignup() {\n      this.callNewUserApi(this.state);\n    }\n  }, {\n    key: 'callNewUserApi',\n    value: function callNewUserApi(data) {\n      var _this2 = this;\n\n      fetch('/api/newuser', { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        _this2.serviceHandler(json);\n      });\n    }\n  }, {\n    key: 'serviceHandler',\n    value: function serviceHandler(data) {\n      if (data.status === 'success') {\n        alert('Thank you for Register with Us!!! ');\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'form-box' },\n        _react2.default.createElement(\n          'div',\n          { className: '  col-md-12' },\n          _react2.default.createElement(\n            'div',\n            { className: 'form-top-left' },\n            _react2.default.createElement(\n              'h3',\n              null,\n              'Sign up now'\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              'Fill in the form below to get instant access:'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'text', name: 'form-first-name', value: this.state.firstName, placeholder: 'First name...',\n              onChange: function onChange(event) {\n                _this3.setState({ firstName: event.target.value });\n              }, className: 'form-control' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'text', name: 'form-last-name', placeholder: 'Last name...', className: 'form-control',\n              value: this.state.lastName, onChange: function onChange(event) {\n                _this3.setState({ lastName: event.target.value });\n              }\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'text', name: 'form-email', value: this.state.email, onChange: function onChange(event) {\n                _this3.setState({ email: event.target.value });\n              },\n              placeholder: 'Email...', className: 'form-control' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'Password', name: 'form-password', value: this.state.password, placeholder: 'Password...',\n              onChange: function onChange(event) {\n                _this3.setState({ password: event.target.value });\n              },\n              className: 'form-control' })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement('input', { type: 'button', onClick: this.handleSignup, className: 'btn btn-transparent', value: 'Sign me up!' })\n          )\n        )\n      );\n    }\n  }]);\n\n  return Signup;\n}(_react.Component);\n\nexports.default = Signup;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbG9naW4vU2lnbnVwLmpzPzM4OTIiXSwibmFtZXMiOlsiU2lnbnVwIiwicHJvcHMiLCJzdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ2luRXJyb3IiLCJzaWdudXBFcnJvciIsImhhbmRsZVNpZ251cCIsImJpbmQiLCJjYWxsTmV3VXNlckFwaSIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwic2VydmljZUhhbmRsZXIiLCJzdGF0dXMiLCJhbGVydCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBQ01BLE07OztBQUVKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1ZBLEtBRFU7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVyxFQURBO0FBRVhDLGdCQUFVLEVBRkM7QUFHWEMsYUFBTyxFQUhJO0FBSVhDLGdCQUFVLEVBSkM7QUFLWEMsa0JBQVksRUFMRDtBQU1YQyxtQkFBYTtBQU5GLEtBQWI7QUFRQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCOztBQVZpQjtBQVlsQjs7OzttQ0FFYztBQUNiLFdBQUtDLGNBQUwsQ0FBcUIsS0FBS1QsS0FBMUI7QUFDRDs7O21DQUVjVSxJLEVBQU07QUFBQTs7QUFDbkJDLFlBQU8sY0FBUCxFQUF1QixFQUFDQyxRQUFRLE1BQVQsRUFBaUJDLFNBQVMsRUFBQyxnQkFBZ0Isa0JBQWpCLEVBQTFCLEVBQWdFQyxNQUFNQyxLQUFLQyxTQUFMLENBQWdCTixJQUFoQixDQUF0RSxFQUF2QixFQUNHTyxJQURILENBQ1M7QUFBQSxlQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxPQURULEVBRUdGLElBRkgsQ0FFUyxnQkFBUTtBQUNiLGVBQUtHLGNBQUwsQ0FBcUJELElBQXJCO0FBQ0QsT0FKSDtBQUtEOzs7bUNBRWdCVCxJLEVBQU07QUFDckIsVUFBSUEsS0FBS1csTUFBTCxLQUFnQixTQUFwQixFQUErQjtBQUM3QkMsY0FBTyxvQ0FBUDtBQUNEO0FBRUY7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0M7QUFBQTtBQUFBLGNBQUssV0FBVSxlQUFmO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUREO0FBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZELFdBREQ7QUFNRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRSxxREFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxpQkFBeEIsRUFBMkMsT0FBUyxLQUFLdEIsS0FBTCxDQUFXQyxTQUEvRCxFQUEyRSxhQUFZLGVBQXZGO0FBQ08sd0JBQVUsa0JBQUNzQixLQUFELEVBQVc7QUFDOUIsdUJBQUtDLFFBQUwsQ0FBZSxFQUFDdkIsV0FBV3NCLE1BQU1FLE1BQU4sQ0FBYUMsS0FBekIsRUFBZjtBQUFnRCxlQUY5QyxFQUVnRCxXQUFVLGNBRjFEO0FBREYsV0FORjtBQVdFO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUNFLHFEQUFPLE1BQUssTUFBWixFQUFvQixNQUFLLGdCQUF6QixFQUEwQyxhQUFZLGNBQXRELEVBQXFFLFdBQVUsY0FBL0U7QUFDTyxxQkFDUCxLQUFLMUIsS0FBTCxDQUFXRSxRQUZYLEVBRXFCLFVBQVUsa0JBQUNxQixLQUFELEVBQVc7QUFDeEMsdUJBQUtDLFFBQUwsQ0FBZSxFQUFDdEIsVUFBVXFCLE1BQU1FLE1BQU4sQ0FBYUMsS0FBeEIsRUFBZjtBQUErQztBQUhqRDtBQURGLFdBWEY7QUFvQkU7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0UscURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssWUFBeEIsRUFBc0MsT0FDbEMsS0FBSzFCLEtBQUwsQ0FBV0csS0FEZixFQUN1QixVQUFVLGtCQUFDb0IsS0FBRCxFQUFXO0FBQ3RDLHVCQUFLQyxRQUFMLENBQWUsRUFBQ3JCLE9BQU9vQixNQUFNRSxNQUFOLENBQWFDLEtBQXJCLEVBQWY7QUFBNEMsZUFGbEQ7QUFHTywyQkFBWSxVQUhuQixFQUc4QixXQUFVLGNBSHhDO0FBREYsV0FwQkY7QUEwQkU7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0UscURBQU8sTUFBSyxVQUFaLEVBQXVCLE1BQUssZUFBNUIsRUFBNEMsT0FDcEMsS0FBSzFCLEtBQUwsQ0FBV0ksUUFEbkIsRUFDNkIsYUFBWSxhQUR6QztBQUVPLHdCQUFVLGtCQUFDbUIsS0FBRCxFQUFXO0FBQ2xCLHVCQUFLQyxRQUFMLENBQWUsRUFBQ3BCLFVBQVVtQixNQUFNRSxNQUFOLENBQWFDLEtBQXhCLEVBQWY7QUFBK0MsZUFIekQ7QUFJTyx5QkFBVSxjQUpqQjtBQURGLFdBMUJGO0FBaUNFO0FBQUE7QUFBQTtBQUNFLHFEQUFPLE1BQUssUUFBWixFQUFxQixTQUNULEtBQUtuQixZQURqQixFQUMrQixXQUFVLHFCQUR6QyxFQUMrRCxPQUFNLGFBRHJFO0FBREY7QUFqQ0Y7QUFERixPQURGO0FBd0RPOzs7Ozs7a0JBSVlULE0iLCJmaWxlIjoiMjg4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuY2xhc3MgU2lnbnVwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICBsYXN0TmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBsb2dpbkVycm9yOiAnJyxcbiAgICAgIHNpZ251cEVycm9yOiAnJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVTaWdudXAgPSB0aGlzLmhhbmRsZVNpZ251cC5iaW5kICh0aGlzKTtcblxuICB9XG5cbiAgaGFuZGxlU2lnbnVwKCkge1xuICAgIHRoaXMuY2FsbE5ld1VzZXJBcGkgKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgY2FsbE5ld1VzZXJBcGkoZGF0YSkge1xuICAgIGZldGNoICgnL2FwaS9uZXd1c2VyJywge21ldGhvZDogJ3Bvc3QnLCBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sIGJvZHk6IEpTT04uc3RyaW5naWZ5IChkYXRhKX0pXG4gICAgICAudGhlbiAocmVzID0+IHJlcy5qc29uICgpKVxuICAgICAgLnRoZW4gKGpzb24gPT4ge1xuICAgICAgICB0aGlzLnNlcnZpY2VIYW5kbGVyIChqc29uKVxuICAgICAgfSk7XG4gIH1cbiAgO1xuICAgIHNlcnZpY2VIYW5kbGVyKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgYWxlcnQgKCdUaGFuayB5b3UgZm9yIFJlZ2lzdGVyIHdpdGggVXMhISEgJyk7XG4gICAgfVxuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib3hcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIGNvbC1tZC0xMlwiPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXRvcC1sZWZ0XCI+XG4gICAgICAgICAgPGgzPlNpZ24gdXAgbm93PC9oMz5cbiAgICAgICAgICA8cD5GaWxsIGluIHRoZSBmb3JtIGJlbG93IHRvIGdldCBpbnN0YW50IGFjY2Vzczo8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmb3JtLWZpcnN0LW5hbWVcIiAgdmFsdWUgPXsgdGhpcy5zdGF0ZS5maXJzdE5hbWV9ICBwbGFjZWhvbGRlcj1cIkZpcnN0IG5hbWUuLi5cIiBcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe2ZpcnN0TmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgbmFtZT1cImZvcm0tbGFzdC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJMYXN0IG5hbWUuLi5cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgIHZhbHVlID17XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxhc3ROYW1lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtsYXN0TmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9fSBcbiAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmb3JtLWVtYWlsXCIgIHZhbHVlID17XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lbWFpbH0gIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlfSl9fSBcbiAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsLi4uXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJQYXNzd29yZFwiIG5hbWU9XCJmb3JtLXBhc3N3b3JkXCIgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhc3N3b3JkfSBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkLi4uXCJcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe3Bhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWV9KX19IFxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTaWdudXB9IGNsYXNzTmFtZT1cImJ0biBidG4tdHJhbnNwYXJlbnRcIiB2YWx1ZT1cIlNpZ24gbWUgdXAhXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cdFx0XHRcdFx0XHRcbiAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICA8L2Rpdj4pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xuXG5cblxuICAgICAgICAgICAgICAgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9sb2dpbi9TaWdudXAuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///288\n");

/***/ })

})