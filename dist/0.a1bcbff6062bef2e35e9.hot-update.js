webpackHotUpdate(0,{288:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Signup = function (_Component) {\n  _inherits(Signup, _Component);\n\n  function Signup(props) {\n    _classCallCheck(this, Signup);\n\n    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));\n\n    _this.state = {\n      firstName: '',\n      lastName: '',\n      email: '',\n      password: '',\n      loginError: '',\n      signupError: ''\n    };\n    _this.handleSignup = _this.handleSignup.bind(_this);\n\n    return _this;\n  }\n\n  _createClass(Signup, [{\n    key: 'handleSignup',\n    value: function handleSignup() {\n      this.callNewUserApi(this.state);\n    }\n  }, {\n    key: 'callNewUserApi',\n    value: function callNewUserApi(data) {\n      var _this2 = this;\n\n      fetch('/api/newuser', { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        _this2.serviceHandler(json);\n      });\n    }\n  }, {\n    key: 'serviceHandler',\n    value: function serviceHandler(data) {\n      if (data.status === 'success') {\n        alert('Thank you for Register with Us!!! ');\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'col-md-12' },\n        _react2.default.createElement(\n          'div',\n          { className: 'form-box' },\n          _react2.default.createElement(\n            'div',\n            { className: 'form-top-left' },\n            _react2.default.createElement(\n              'h3',\n              null,\n              'Sign up now'\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              'Fill in the form below to get instant access:'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'text', name: 'form-first-name', value: this.state.firstName, placeholder: 'First name...',\n              onChange: function onChange(event) {\n                _this3.setState({ firstName: event.target.value });\n              }, className: 'form-control' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'text', name: 'form-last-name', placeholder: 'Last name...', className: 'form-control',\n              value: this.state.lastName, onChange: function onChange(event) {\n                _this3.setState({ lastName: event.target.value });\n              }\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'text', name: 'form-email', value: this.state.email, onChange: function onChange(event) {\n                _this3.setState({ email: event.target.value });\n              },\n              placeholder: 'Email...', className: 'form-control' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'Password', name: 'form-password', value: this.state.password, placeholder: 'Password...',\n              onChange: function onChange(event) {\n                _this3.setState({ password: event.target.value });\n              },\n              className: 'form-control' })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement('input', { type: 'button', onClick: this.handleSignup, className: 'btn btn-transparent', value: 'Sign me up!' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'new-acount' },\n            _react2.default.createElement(\n              'p',\n              null,\n              'ALready have an account? \\xA0 \\xA0 ',\n              _react2.default.createElement(\n                'a',\n                { href: 'javascript:void(0)', ref: 'singin', onClick: this.props.statechange },\n                ' SIGN IN '\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Signup;\n}(_react.Component);\n\nexports.default = Signup;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbG9naW4vU2lnbnVwLmpzPzM4OTIiXSwibmFtZXMiOlsiU2lnbnVwIiwicHJvcHMiLCJzdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ2luRXJyb3IiLCJzaWdudXBFcnJvciIsImhhbmRsZVNpZ251cCIsImJpbmQiLCJjYWxsTmV3VXNlckFwaSIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwic2VydmljZUhhbmRsZXIiLCJzdGF0dXMiLCJhbGVydCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0YXRlY2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFDTUEsTTs7O0FBRUosa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDVkEsS0FEVTs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFXLEVBREE7QUFFWEMsZ0JBQVUsRUFGQztBQUdYQyxhQUFPLEVBSEk7QUFJWEMsZ0JBQVUsRUFKQztBQUtYQyxrQkFBWSxFQUxEO0FBTVhDLG1CQUFhO0FBTkYsS0FBYjtBQVFBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7O0FBVmlCO0FBWWxCOzs7O21DQUVjO0FBQ2IsV0FBS0MsY0FBTCxDQUFxQixLQUFLVCxLQUExQjtBQUNEOzs7bUNBRWNVLEksRUFBTTtBQUFBOztBQUNuQkMsWUFBTyxjQUFQLEVBQXVCLEVBQUNDLFFBQVEsTUFBVCxFQUFpQkMsU0FBUyxFQUFDLGdCQUFnQixrQkFBakIsRUFBMUIsRUFBZ0VDLE1BQU1DLEtBQUtDLFNBQUwsQ0FBZ0JOLElBQWhCLENBQXRFLEVBQXZCLEVBQ0dPLElBREgsQ0FDUztBQUFBLGVBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLE9BRFQsRUFFR0YsSUFGSCxDQUVTLGdCQUFRO0FBQ2IsZUFBS0csY0FBTCxDQUFxQkQsSUFBckI7QUFDRCxPQUpIO0FBS0Q7OzttQ0FFZ0JULEksRUFBTTtBQUNyQixVQUFJQSxLQUFLVyxNQUFMLEtBQWdCLFNBQXBCLEVBQStCO0FBQzdCQyxjQUFPLG9DQUFQO0FBQ0Q7QUFFRjs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFFSTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRDtBQUFBO0FBQUEsY0FBSyxXQUFVLGVBQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQ7QUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQsV0FEQztBQU1BO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUNFLHFEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLGlCQUF4QixFQUEyQyxPQUFTLEtBQUt0QixLQUFMLENBQVdDLFNBQS9ELEVBQTJFLGFBQVksZUFBdkY7QUFDTyx3QkFBVSxrQkFBQ3NCLEtBQUQsRUFBVztBQUM5Qix1QkFBS0MsUUFBTCxDQUFlLEVBQUN2QixXQUFXc0IsTUFBTUUsTUFBTixDQUFhQyxLQUF6QixFQUFmO0FBQWdELGVBRjlDLEVBRWdELFdBQVUsY0FGMUQ7QUFERixXQU5BO0FBV0E7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0UscURBQU8sTUFBSyxNQUFaLEVBQW9CLE1BQUssZ0JBQXpCLEVBQTBDLGFBQVksY0FBdEQsRUFBcUUsV0FBVSxjQUEvRTtBQUNPLHFCQUNQLEtBQUsxQixLQUFMLENBQVdFLFFBRlgsRUFFcUIsVUFBVSxrQkFBQ3FCLEtBQUQsRUFBVztBQUN4Qyx1QkFBS0MsUUFBTCxDQUFlLEVBQUN0QixVQUFVcUIsTUFBTUUsTUFBTixDQUFhQyxLQUF4QixFQUFmO0FBQStDO0FBSGpEO0FBREYsV0FYQTtBQW9CQTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRSxxREFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxZQUF4QixFQUFzQyxPQUNsQyxLQUFLMUIsS0FBTCxDQUFXRyxLQURmLEVBQ3VCLFVBQVUsa0JBQUNvQixLQUFELEVBQVc7QUFDdEMsdUJBQUtDLFFBQUwsQ0FBZSxFQUFDckIsT0FBT29CLE1BQU1FLE1BQU4sQ0FBYUMsS0FBckIsRUFBZjtBQUE0QyxlQUZsRDtBQUdPLDJCQUFZLFVBSG5CLEVBRzhCLFdBQVUsY0FIeEM7QUFERixXQXBCQTtBQTBCQTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRSxxREFBTyxNQUFLLFVBQVosRUFBdUIsTUFBSyxlQUE1QixFQUE0QyxPQUNwQyxLQUFLMUIsS0FBTCxDQUFXSSxRQURuQixFQUM2QixhQUFZLGFBRHpDO0FBRU8sd0JBQVUsa0JBQUNtQixLQUFELEVBQVc7QUFDbEIsdUJBQUtDLFFBQUwsQ0FBZSxFQUFDcEIsVUFBVW1CLE1BQU1FLE1BQU4sQ0FBYUMsS0FBeEIsRUFBZjtBQUErQyxlQUh6RDtBQUlPLHlCQUFVLGNBSmpCO0FBREYsV0ExQkE7QUFpQ0E7QUFBQTtBQUFBO0FBQ0UscURBQU8sTUFBSyxRQUFaLEVBQXFCLFNBQ1QsS0FBS25CLFlBRGpCLEVBQytCLFdBQVUscUJBRHpDLEVBQytELE9BQU0sYUFEckU7QUFERixXQWpDQTtBQXVDQztBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUFBO0FBQUEsa0JBQUcsTUFBSyxvQkFBUixFQUE2QixLQUFJLFFBQWpDLEVBQTBDLFNBQVMsS0FBS1IsS0FBTCxDQUFXNEIsV0FBOUQ7QUFBQTtBQUFBO0FBQTFDO0FBREE7QUF2Q0Q7QUFERixPQUZKO0FBZ0RPOzs7Ozs7a0JBSVk3QixNIiwiZmlsZSI6IjI4OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmNsYXNzIFNpZ251cCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgbG9naW5FcnJvcjogJycsXG4gICAgICBzaWdudXBFcnJvcjogJydcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU2lnbnVwID0gdGhpcy5oYW5kbGVTaWdudXAuYmluZCAodGhpcyk7XG5cbiAgfVxuXG4gIGhhbmRsZVNpZ251cCgpIHtcbiAgICB0aGlzLmNhbGxOZXdVc2VyQXBpICh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIGNhbGxOZXdVc2VyQXBpKGRhdGEpIHtcbiAgICBmZXRjaCAoJy9hcGkvbmV3dXNlcicsIHttZXRob2Q6ICdwb3N0JywgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeSAoZGF0YSl9KVxuICAgICAgLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKSlcbiAgICAgIC50aGVuIChqc29uID0+IHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlSGFuZGxlciAoanNvbilcbiAgICAgIH0pO1xuICB9XG4gIDtcbiAgICBzZXJ2aWNlSGFuZGxlcihkYXRhKSB7XG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgIGFsZXJ0ICgnVGhhbmsgeW91IGZvciBSZWdpc3RlciB3aXRoIFVzISEhICcpO1xuICAgIH1cblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYm94XCI+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdG9wLWxlZnRcIj5cbiAgICAgICAgICA8aDM+U2lnbiB1cCBub3c8L2gzPlxuICAgICAgICAgIDxwPkZpbGwgaW4gdGhlIGZvcm0gYmVsb3cgdG8gZ2V0IGluc3RhbnQgYWNjZXNzOjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZvcm0tZmlyc3QtbmFtZVwiICB2YWx1ZSA9eyB0aGlzLnN0YXRlLmZpcnN0TmFtZX0gIHBsYWNlaG9sZGVyPVwiRmlyc3QgbmFtZS4uLlwiIFxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlICh7Zmlyc3ROYW1lOiBldmVudC50YXJnZXQudmFsdWV9KX19IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICBuYW1lPVwiZm9ybS1sYXN0LW5hbWVcIiBwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZS4uLlwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgdmFsdWUgPXtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubGFzdE5hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe2xhc3ROYW1lOiBldmVudC50YXJnZXQudmFsdWV9KX19IFxuICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZvcm0tZW1haWxcIiAgdmFsdWUgPXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVtYWlsfSAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe2VtYWlsOiBldmVudC50YXJnZXQudmFsdWV9KX19IFxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwuLi5cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIlBhc3N3b3JkXCIgbmFtZT1cImZvcm0tcGFzc3dvcmRcIiB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQuLi5cIlxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlICh7cGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pfX0gXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVNpZ251cH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi10cmFuc3BhcmVudFwiIHZhbHVlPVwiU2lnbiBtZSB1cCFcIiAvPlxuICAgICAgICAgIDwvZGl2Plx0XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LWFjb3VudFwiPlxuICAgICAgICAgICA8cD5BTHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gJm5ic3A7ICZuYnNwOyA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgcmVmPVwic2luZ2luXCIgb25DbGljaz17dGhpcy5wcm9wcy5zdGF0ZWNoYW5nZX0+IFNJR04gSU4gPC9hPjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPC9kaXY+KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IFNpZ251cDtcblxuXG5cbiAgICAgICAgICAgICAgICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbG9naW4vU2lnbnVwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///288\n")}});