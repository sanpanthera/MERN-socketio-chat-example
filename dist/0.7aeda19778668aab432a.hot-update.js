webpackHotUpdate(0,{

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Signup = function (_Component) {\n  _inherits(Signup, _Component);\n\n  function Signup(props) {\n    _classCallCheck(this, Signup);\n\n    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));\n\n    _this.state = {\n      firstName: '',\n      lastName: '',\n      email: '',\n      password: '',\n      loginError: '',\n      signupError: ''\n    };\n    _this.handleSignup = _this.handleSignup.bind(_this);\n\n    return _this;\n  }\n\n  _createClass(Signup, [{\n    key: 'handleSignup',\n    value: function handleSignup() {\n      this.callNewUserApi(this.state);\n    }\n  }, {\n    key: 'callNewUserApi',\n    value: function callNewUserApi(data) {\n      var _this2 = this;\n\n      fetch('/api/newuser', { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        _this2.serviceHandler(json);\n      });\n    }\n  }, {\n    key: 'serviceHandler',\n    value: function serviceHandler(data) {\n      if (data.status === 'success') {\n        alert('Thank you for Register with Us!!! ');\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'col-md-12' },\n        _react2.default.createElement(\n          'div',\n          { className: 'form-box' },\n          _react2.default.createElement(\n            'div',\n            { className: 'form-top-left' },\n            _react2.default.createElement(\n              'h3',\n              null,\n              'Sign up now'\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              'Fill in the form below to get instant access:'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'text', name: 'form-first-name', value: this.state.firstName, placeholder: 'First name...',\n              onChange: function onChange(event) {\n                _this3.setState({ firstName: event.target.value });\n              }, className: 'form-control' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'text', name: 'form-last-name', placeholder: 'Last name...', className: 'form-control',\n              value: this.state.lastName, onChange: function onChange(event) {\n                _this3.setState({ lastName: event.target.value });\n              }\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'text', name: 'form-email', value: this.state.email, onChange: function onChange(event) {\n                _this3.setState({ email: event.target.value });\n              },\n              placeholder: 'Email...', className: 'form-control' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'Password', name: 'form-password', value: this.state.password, placeholder: 'Password...',\n              onChange: function onChange(event) {\n                _this3.setState({ password: event.target.value });\n              },\n              className: 'form-control' })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement('input', { type: 'button', onClick: this.handleSignup, className: 'btn btn-transparent', value: 'Sign me up!' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'new-acount' },\n            _react2.default.createElement(\n              'p',\n              null,\n              'ALready have an account? \\xA0 \\xA0 ',\n              _react2.default.createElement(\n                'a',\n                { href: 'javascript:void(0)', onClick: function onClick() {\n                    return _this3.props.statechange(singup);\n                  } },\n                ' SIGN IN '\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Signup;\n}(_react.Component);\n\nexports.default = Signup;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbG9naW4vU2lnbnVwLmpzPzM4OTIiXSwibmFtZXMiOlsiU2lnbnVwIiwicHJvcHMiLCJzdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ2luRXJyb3IiLCJzaWdudXBFcnJvciIsImhhbmRsZVNpZ251cCIsImJpbmQiLCJjYWxsTmV3VXNlckFwaSIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwic2VydmljZUhhbmRsZXIiLCJzdGF0dXMiLCJhbGVydCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0YXRlY2hhbmdlIiwic2luZ3VwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFDTUEsTTs7O0FBRUosa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDVkEsS0FEVTs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFXLEVBREE7QUFFWEMsZ0JBQVUsRUFGQztBQUdYQyxhQUFPLEVBSEk7QUFJWEMsZ0JBQVUsRUFKQztBQUtYQyxrQkFBWSxFQUxEO0FBTVhDLG1CQUFhO0FBTkYsS0FBYjtBQVFBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7O0FBVmlCO0FBWWxCOzs7O21DQUVjO0FBQ2IsV0FBS0MsY0FBTCxDQUFxQixLQUFLVCxLQUExQjtBQUNEOzs7bUNBRWNVLEksRUFBTTtBQUFBOztBQUNuQkMsWUFBTyxjQUFQLEVBQXVCLEVBQUNDLFFBQVEsTUFBVCxFQUFpQkMsU0FBUyxFQUFDLGdCQUFnQixrQkFBakIsRUFBMUIsRUFBZ0VDLE1BQU1DLEtBQUtDLFNBQUwsQ0FBZ0JOLElBQWhCLENBQXRFLEVBQXZCLEVBQ0dPLElBREgsQ0FDUztBQUFBLGVBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLE9BRFQsRUFFR0YsSUFGSCxDQUVTLGdCQUFRO0FBQ2IsZUFBS0csY0FBTCxDQUFxQkQsSUFBckI7QUFDRCxPQUpIO0FBS0Q7OzttQ0FFZ0JULEksRUFBTTtBQUNyQixVQUFJQSxLQUFLVyxNQUFMLEtBQWdCLFNBQXBCLEVBQStCO0FBQzdCQyxjQUFPLG9DQUFQO0FBQ0Q7QUFFRjs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFFSTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRDtBQUFBO0FBQUEsY0FBSyxXQUFVLGVBQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQ7QUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQsV0FEQztBQU1BO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUNFLHFEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLGlCQUF4QixFQUEyQyxPQUFTLEtBQUt0QixLQUFMLENBQVdDLFNBQS9ELEVBQTJFLGFBQVksZUFBdkY7QUFDTyx3QkFBVSxrQkFBQ3NCLEtBQUQsRUFBVztBQUM5Qix1QkFBS0MsUUFBTCxDQUFlLEVBQUN2QixXQUFXc0IsTUFBTUUsTUFBTixDQUFhQyxLQUF6QixFQUFmO0FBQWdELGVBRjlDLEVBRWdELFdBQVUsY0FGMUQ7QUFERixXQU5BO0FBV0E7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0UscURBQU8sTUFBSyxNQUFaLEVBQW9CLE1BQUssZ0JBQXpCLEVBQTBDLGFBQVksY0FBdEQsRUFBcUUsV0FBVSxjQUEvRTtBQUNPLHFCQUNQLEtBQUsxQixLQUFMLENBQVdFLFFBRlgsRUFFcUIsVUFBVSxrQkFBQ3FCLEtBQUQsRUFBVztBQUN4Qyx1QkFBS0MsUUFBTCxDQUFlLEVBQUN0QixVQUFVcUIsTUFBTUUsTUFBTixDQUFhQyxLQUF4QixFQUFmO0FBQStDO0FBSGpEO0FBREYsV0FYQTtBQW9CQTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRSxxREFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxZQUF4QixFQUFzQyxPQUNsQyxLQUFLMUIsS0FBTCxDQUFXRyxLQURmLEVBQ3VCLFVBQVUsa0JBQUNvQixLQUFELEVBQVc7QUFDdEMsdUJBQUtDLFFBQUwsQ0FBZSxFQUFDckIsT0FBT29CLE1BQU1FLE1BQU4sQ0FBYUMsS0FBckIsRUFBZjtBQUE0QyxlQUZsRDtBQUdPLDJCQUFZLFVBSG5CLEVBRzhCLFdBQVUsY0FIeEM7QUFERixXQXBCQTtBQTBCQTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRSxxREFBTyxNQUFLLFVBQVosRUFBdUIsTUFBSyxlQUE1QixFQUE0QyxPQUNwQyxLQUFLMUIsS0FBTCxDQUFXSSxRQURuQixFQUM2QixhQUFZLGFBRHpDO0FBRU8sd0JBQVUsa0JBQUNtQixLQUFELEVBQVc7QUFDbEIsdUJBQUtDLFFBQUwsQ0FBZSxFQUFDcEIsVUFBVW1CLE1BQU1FLE1BQU4sQ0FBYUMsS0FBeEIsRUFBZjtBQUErQyxlQUh6RDtBQUlPLHlCQUFVLGNBSmpCO0FBREYsV0ExQkE7QUFpQ0E7QUFBQTtBQUFBO0FBQ0UscURBQU8sTUFBSyxRQUFaLEVBQXFCLFNBQ1QsS0FBS25CLFlBRGpCLEVBQytCLFdBQVUscUJBRHpDLEVBQytELE9BQU0sYUFEckU7QUFERixXQWpDQTtBQXVDQztBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUFBO0FBQUEsa0JBQUcsTUFBSyxvQkFBUixFQUE4QixTQUFTO0FBQUEsMkJBQUksT0FBS1IsS0FBTCxDQUFXNEIsV0FBWCxDQUF1QkMsTUFBdkIsQ0FBSjtBQUFBLG1CQUF2QztBQUFBO0FBQUE7QUFBMUM7QUFEQTtBQXZDRDtBQURGLE9BRko7QUFnRE87Ozs7OztrQkFJWTlCLE0iLCJmaWxlIjoiMjg4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuY2xhc3MgU2lnbnVwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICBsYXN0TmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBsb2dpbkVycm9yOiAnJyxcbiAgICAgIHNpZ251cEVycm9yOiAnJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVTaWdudXAgPSB0aGlzLmhhbmRsZVNpZ251cC5iaW5kICh0aGlzKTtcblxuICB9XG5cbiAgaGFuZGxlU2lnbnVwKCkge1xuICAgIHRoaXMuY2FsbE5ld1VzZXJBcGkgKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgY2FsbE5ld1VzZXJBcGkoZGF0YSkge1xuICAgIGZldGNoICgnL2FwaS9uZXd1c2VyJywge21ldGhvZDogJ3Bvc3QnLCBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sIGJvZHk6IEpTT04uc3RyaW5naWZ5IChkYXRhKX0pXG4gICAgICAudGhlbiAocmVzID0+IHJlcy5qc29uICgpKVxuICAgICAgLnRoZW4gKGpzb24gPT4ge1xuICAgICAgICB0aGlzLnNlcnZpY2VIYW5kbGVyIChqc29uKVxuICAgICAgfSk7XG4gIH1cbiAgO1xuICAgIHNlcnZpY2VIYW5kbGVyKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgYWxlcnQgKCdUaGFuayB5b3UgZm9yIFJlZ2lzdGVyIHdpdGggVXMhISEgJyk7XG4gICAgfVxuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ib3hcIj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10b3AtbGVmdFwiPlxuICAgICAgICAgIDxoMz5TaWduIHVwIG5vdzwvaDM+XG4gICAgICAgICAgPHA+RmlsbCBpbiB0aGUgZm9ybSBiZWxvdyB0byBnZXQgaW5zdGFudCBhY2Nlc3M6PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZm9ybS1maXJzdC1uYW1lXCIgIHZhbHVlID17IHRoaXMuc3RhdGUuZmlyc3ROYW1lfSAgcGxhY2Vob2xkZXI9XCJGaXJzdCBuYW1lLi4uXCIgXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtmaXJzdE5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pfX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIG5hbWU9XCJmb3JtLWxhc3QtbmFtZVwiIHBsYWNlaG9sZGVyPVwiTGFzdCBuYW1lLi4uXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICB2YWx1ZSA9e1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5sYXN0TmFtZX0gb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlICh7bGFzdE5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pfX0gXG4gICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZm9ybS1lbWFpbFwiICB2YWx1ZSA9e1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZW1haWx9ICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlICh7ZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZX0pfX0gXG4gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbC4uLlwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiUGFzc3dvcmRcIiBuYW1lPVwiZm9ybS1wYXNzd29yZFwiIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYXNzd29yZH0gcGxhY2Vob2xkZXI9XCJQYXNzd29yZC4uLlwiXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtwYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlfSl9fSBcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2lnbnVwfSBjbGFzc05hbWU9XCJidG4gYnRuLXRyYW5zcGFyZW50XCIgdmFsdWU9XCJTaWduIG1lIHVwIVwiIC8+XG4gICAgICAgICAgPC9kaXY+XHRcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctYWNvdW50XCI+XG4gICAgICAgICAgIDxwPkFMcmVhZHkgaGF2ZSBhbiBhY2NvdW50PyAmbmJzcDsgJm5ic3A7IDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiAgb25DbGljaz17KCk9PnRoaXMucHJvcHMuc3RhdGVjaGFuZ2Uoc2luZ3VwKX0+IFNJR04gSU4gPC9hPjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPC9kaXY+KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IFNpZ251cDtcblxuXG5cbiAgICAgICAgICAgICAgICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbG9naW4vU2lnbnVwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///288\n");

/***/ })

})