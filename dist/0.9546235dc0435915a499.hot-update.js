webpackHotUpdate(0,{

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(8);\n\n__webpack_require__(4);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Signin = function (_Component) {\n  _inherits(Signin, _Component);\n\n  function Signin(props) {\n    _classCallCheck(this, Signin);\n\n    var _this = _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).call(this, props));\n\n    _this.state = {\n      firstName: '',\n      lastName: '',\n      email: '',\n      password: '',\n      username: 'anurag@gmail.com',\n      loginpass: '11111111',\n      /*   username: '',\n         loginpass: '', */\n      loginError: '',\n      signupError: ''\n    };\n\n    _this.handleSignIn = _this.handleSignIn.bind(_this);\n    return _this;\n  }\n\n  _createClass(Signin, [{\n    key: \"handleSignIn\",\n    value: function handleSignIn() {\n\n      if (this.state.username !== '' && this.state.loginpass !== '') {\n        this.callSignInApi(this.state);\n      } else {\n        alert(\"Please Enter Login Information \");\n      }\n    }\n  }, {\n    key: \"callSignInApi\",\n    value: function callSignInApi(data) {\n      var _this2 = this;\n\n      fetch('/api/singin', {\n        method: 'post',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(data)\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        _this2.serviceSignInHandler(json);\n      });\n    }\n  }, {\n    key: \"serviceSignInHandler\",\n    value: function serviceSignInHandler(data) {\n\n      if (data.status === 'success') {\n        PubSub.publish('IS_LOGIN', { status: true, token: data.accesstoken, userid: data.userid });\n      } else {\n        alert(data.message);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"col-md-12\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"form-top-left\" },\n          _react2.default.createElement(\n            \"h3\",\n            null,\n            \"Login \"\n          ),\n          _react2.default.createElement(\n            \"p\",\n            null,\n            \"Enter username and password to log on:\"\n          )\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: \"form-group\" },\n          _react2.default.createElement(\"input\", { type: \"text\", name: \"form-username\", value: this.state.username, placeholder: \"Email...\",\n            className: \"form-control\", onChange: function onChange(event) {\n              _this3.setState({ username: event.target.value });\n            } })\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: \"form-group\" },\n          _react2.default.createElement(\"input\", { type: \"password\", name: \"form-password\",\n            value: this.state.loginpass,\n            onChange: function onChange(event) {\n              _this3.setState({ loginpass: event.target.value });\n            },\n            placeholder: \"Password...\", className: \"form-control\", id: \"form-password\" })\n        ),\n        _react2.default.createElement(\n          \"div\",\n          null,\n          _react2.default.createElement(\"input\", { onClick: this.handleSignIn, className: \"btn  btn-transparent\", value: \"Sign in!\", type: \"button\" })\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: \"new-acount\" },\n          _react2.default.createElement(\n            \"p\",\n            null,\n            \"Don't Have an account? \\xA0 \\xA0 \",\n            _react2.default.createElement(\n              \"a\",\n              { href: \"jascsript:void(0)\", onClick: function onClick() {\n                  return _this3.props.statechange('signin');\n                } },\n              \" SIGN UP\"\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Signin;\n}(_react.Component);\n\nexports.default = Signin;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbG9naW4vU2lnbmluLmpzPzc5ZTEiXSwibmFtZXMiOlsiU2lnbmluIiwicHJvcHMiLCJzdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJuYW1lIiwibG9naW5wYXNzIiwibG9naW5FcnJvciIsInNpZ251cEVycm9yIiwiaGFuZGxlU2lnbkluIiwiYmluZCIsImNhbGxTaWduSW5BcGkiLCJhbGVydCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwic2VydmljZVNpZ25JbkhhbmRsZXIiLCJzdGF0dXMiLCJQdWJTdWIiLCJwdWJsaXNoIiwidG9rZW4iLCJhY2Nlc3N0b2tlbiIsInVzZXJpZCIsIm1lc3NhZ2UiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzdGF0ZWNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLE07OztBQUVKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1ZBLEtBRFU7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVyxFQURBO0FBRVhDLGdCQUFVLEVBRkM7QUFHWEMsYUFBTyxFQUhJO0FBSVhDLGdCQUFVLEVBSkM7QUFLVkMsZ0JBQVUsa0JBTEE7QUFNWEMsaUJBQVcsVUFOQTtBQU9kOztBQUVHQyxrQkFBWSxFQVREO0FBVVhDLG1CQUFhO0FBVkYsS0FBYjs7QUFhQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBZmlCO0FBZ0JsQjs7OzttQ0FFYzs7QUFFYixVQUFJLEtBQUtWLEtBQUwsQ0FBV0ssUUFBWCxLQUF3QixFQUF4QixJQUE4QixLQUFLTCxLQUFMLENBQVdNLFNBQVgsS0FBeUIsRUFBM0QsRUFBK0Q7QUFDN0QsYUFBS0ssYUFBTCxDQUFvQixLQUFLWCxLQUF6QjtBQUNELE9BRkQsTUFFTztBQUNMWSxjQUFPLGlDQUFQO0FBRUQ7QUFDRjs7O2tDQUVhQyxJLEVBQU07QUFBQTs7QUFFbEJDLFlBQU8sYUFBUCxFQUFzQjtBQUNwQkMsZ0JBQVEsTUFEWTtBQUVwQkMsaUJBQVMsRUFBQyxnQkFBZ0Isa0JBQWpCLEVBRlc7QUFHcEJDLGNBQU1DLEtBQUtDLFNBQUwsQ0FBZ0JOLElBQWhCO0FBSGMsT0FBdEIsRUFLRU8sSUFMRixDQUtRO0FBQUEsZUFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsT0FMUixFQUs0QkYsSUFMNUIsQ0FLa0MsZ0JBQVE7QUFDeEMsZUFBS0csb0JBQUwsQ0FBMkJELElBQTNCO0FBQ0QsT0FQRDtBQVVEOzs7eUNBRW9CVCxJLEVBQU07O0FBRXpCLFVBQUlBLEtBQUtXLE1BQUwsS0FBZ0IsU0FBcEIsRUFBK0I7QUFDN0JDLGVBQU9DLE9BQVAsQ0FBZ0IsVUFBaEIsRUFBNEIsRUFBQ0YsUUFBUSxJQUFULEVBQWVHLE9BQU9kLEtBQUtlLFdBQTNCLEVBQXdDQyxRQUFRaEIsS0FBS2dCLE1BQXJELEVBQTVCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xqQixjQUFPQyxLQUFLaUIsT0FBWjtBQUNEO0FBRUY7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBRUk7QUFBQTtBQUFBLFlBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLFNBRko7QUFPSTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRSxtREFBUSxNQUFLLE1BQWIsRUFBb0IsTUFBSyxlQUF6QixFQUF5QyxPQUFRLEtBQUs5QixLQUFMLENBQVdLLFFBQTVELEVBQXNFLGFBQVksVUFBbEY7QUFDUSx1QkFBVSxjQURsQixFQUNpQyxVQUFVLGtCQUFDMEIsS0FBRCxFQUFXO0FBQ3hELHFCQUFLQyxRQUFMLENBQWUsRUFBQzNCLFVBQVUwQixNQUFNRSxNQUFOLENBQWFDLEtBQXhCLEVBQWY7QUFBK0MsYUFGN0M7QUFERixTQVBKO0FBWUk7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0UsbURBQU8sTUFBSyxVQUFaLEVBQXVCLE1BQUssZUFBNUI7QUFDTyxtQkFDUCxLQUFLbEMsS0FBTCxDQUFXTSxTQUZYO0FBR08sc0JBQVUsa0JBQUN5QixLQUFELEVBQVc7QUFDMUIscUJBQUtDLFFBQUwsQ0FBZSxFQUFDMUIsV0FBV3lCLE1BQU1FLE1BQU4sQ0FBYUMsS0FBekIsRUFBZjtBQUFnRCxhQUpsRDtBQUtPLHlCQUFZLGFBTG5CLEVBS2lDLFdBQVUsY0FMM0MsRUFLMEQsSUFBRyxlQUw3RDtBQURGLFNBWko7QUFvQkk7QUFBQTtBQUFBO0FBQ0UsbURBQU8sU0FDSCxLQUFLekIsWUFEVCxFQUN1QixXQUFVLHNCQURqQyxFQUN3RCxPQUFNLFVBRDlELEVBQ3lFLE1BQUssUUFEOUU7QUFERixTQXBCSjtBQXdCSTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUFBO0FBQUEsZ0JBQUcsTUFBSyxtQkFBUixFQUE0QixTQUFTO0FBQUEseUJBQUksT0FBS1YsS0FBTCxDQUFXb0MsV0FBWCxDQUF1QixRQUF2QixDQUFKO0FBQUEsaUJBQXJDO0FBQUE7QUFBQTtBQUF4QztBQURGO0FBeEJKLE9BREY7QUFnQ0c7Ozs7OztrQkFJYXJDLE0iLCJmaWxlIjoiOTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCAnd2hhdHdnLWZldGNoJztcblxuY2xhc3MgU2lnbmluIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICBsYXN0TmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICAgdXNlcm5hbWU6ICdhbnVyYWdAZ21haWwuY29tJyxcbiAgICAgIGxvZ2lucGFzczogJzExMTExMTExJyxcbiAgIC8qICAgdXNlcm5hbWU6ICcnLFxuICAgICAgbG9naW5wYXNzOiAnJywgKi9cbiAgICAgIGxvZ2luRXJyb3I6ICcnLFxuICAgICAgc2lnbnVwRXJyb3I6ICcnXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlU2lnbkluID0gdGhpcy5oYW5kbGVTaWduSW4uYmluZCAodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTaWduSW4oKSB7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS51c2VybmFtZSAhPT0gJycgJiYgdGhpcy5zdGF0ZS5sb2dpbnBhc3MgIT09ICcnKSB7XG4gICAgICB0aGlzLmNhbGxTaWduSW5BcGkgKHRoaXMuc3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCAoXCJQbGVhc2UgRW50ZXIgTG9naW4gSW5mb3JtYXRpb24gXCIpO1xuXG4gICAgfVxuICB9XG5cbiAgY2FsbFNpZ25JbkFwaShkYXRhKSB7XG5cbiAgICBmZXRjaCAoJy9hcGkvc2luZ2luJywge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSAoZGF0YSlcbiAgICB9XG4gICAgKS50aGVuIChyZXMgPT4gcmVzLmpzb24gKCkpLnRoZW4gKGpzb24gPT4ge1xuICAgICAgdGhpcy5zZXJ2aWNlU2lnbkluSGFuZGxlciAoanNvbilcbiAgICB9KTtcblxuXG4gIH1cblxuICBzZXJ2aWNlU2lnbkluSGFuZGxlcihkYXRhKSB7XG5cbiAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgUHViU3ViLnB1Ymxpc2ggKCdJU19MT0dJTicsIHtzdGF0dXM6IHRydWUsIHRva2VuOiBkYXRhLmFjY2Vzc3Rva2VuLCB1c2VyaWQ6IGRhdGEudXNlcmlkfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0IChkYXRhLm1lc3NhZ2UpO1xuICAgIH1cblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdG9wLWxlZnRcIj5cbiAgICAgICAgICAgIDxoMz5Mb2dpbiA8L2gzPlxuICAgICAgICAgICAgPHA+RW50ZXIgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIHRvIGxvZyBvbjo8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCAgdHlwZT1cInRleHRcIiBuYW1lPVwiZm9ybS11c2VybmFtZVwiIHZhbHVlID17dGhpcy5zdGF0ZS51c2VybmFtZX0gcGxhY2Vob2xkZXI9XCJFbWFpbC4uLlwiICBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHt1c2VybmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJmb3JtLXBhc3N3b3JkXCIgICBcbiAgICAgICAgICAgICAgICAgICB2YWx1ZSA9e1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5sb2dpbnBhc3N9ICAgXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlICh7bG9naW5wYXNzOiBldmVudC50YXJnZXQudmFsdWV9KX19XG4gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZC4uLlwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZm9ybS1wYXNzd29yZFwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0IG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2lnbklufSBjbGFzc05hbWU9XCJidG4gIGJ0bi10cmFuc3BhcmVudFwiIHZhbHVlPVwiU2lnbiBpbiFcIiB0eXBlPVwiYnV0dG9uXCIvPlxuICAgICAgICAgIDwvZGl2Plx0XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctYWNvdW50XCI+XG4gICAgICAgICAgICA8cD5Eb24ndCBIYXZlIGFuIGFjY291bnQ/ICZuYnNwOyAmbmJzcDsgPGEgaHJlZj1cImphc2NzcmlwdDp2b2lkKDApXCIgb25DbGljaz17KCk9PnRoaXMucHJvcHMuc3RhdGVjaGFuZ2UoJ3NpZ25pbicpfT4gU0lHTiBVUDwvYT48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICApO1xuICAgICAgfVxuICAgICAgO1xuICAgIH1cblxuICAgIGV4cG9ydCBkZWZhdWx0ICBTaWduaW47XG5cblxuXG4gICAgICAgICAgICAgICAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL2xvZ2luL1NpZ25pbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///91\n");

/***/ })

})