webpackHotUpdate(0,{287:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Signin = function (_Component) {\n  _inherits(Signin, _Component);\n\n  function Signin(props) {\n    _classCallCheck(this, Signin);\n\n    var _this = _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).call(this, props));\n\n    _this.state = {\n      firstName: '',\n      lastName: '',\n      email: '',\n      password: '',\n      //  username: 'anurag@gmail.com',\n      // loginpass: '1234567890',\n      username: '',\n      loginpass: '',\n      loginError: '',\n      signupError: ''\n    };\n\n    _this.handleSignIn = _this.handleSignIn.bind(_this);\n    return _this;\n  }\n\n  _createClass(Signin, [{\n    key: 'handleSignIn',\n    value: function handleSignIn() {\n\n      if (this.state.username !== '' && this.state.loginpass !== '') {\n        this.callSignInApi(this.state);\n      } else {\n        alert(\"Please Enter Login Information \");\n      }\n    }\n  }, {\n    key: 'callSignInApi',\n    value: function callSignInApi(data) {\n      var _this2 = this;\n\n      fetch('/api/singin', {\n        method: 'post',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(data)\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        _this2.serviceSignInHandler(json);\n      });\n    }\n  }, {\n    key: 'serviceSignInHandler',\n    value: function serviceSignInHandler(data) {\n\n      if (data.status === 'success') {\n        PubSub.publish('IS_LOGIN', { status: true, token: data.accesstoken, userid: data.userid });\n      } else {\n        alert(data.message);\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'col-md-12' },\n        _react2.default.createElement(\n          'div',\n          { className: 'form-box' },\n          _react2.default.createElement(\n            'div',\n            { className: 'form-top-left' },\n            _react2.default.createElement(\n              'h3',\n              null,\n              'Login '\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              'Enter username and password to log on:'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'text', name: 'form-username', value: this.state.username, placeholder: 'Username...',\n              className: 'form-control', onChange: function onChange(event) {\n                _this3.setState({ username: event.target.value });\n              } })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'password', name: 'form-password',\n              value: this.state.loginpass,\n              onChange: function onChange(event) {\n                _this3.setState({ loginpass: event.target.value });\n              },\n              placeholder: 'Password...', className: 'form-control', id: 'form-password' })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement('input', { onClick: this.handleSignIn, className: 'btn  btn-transparent', value: 'Sign in!', type: 'button' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'new-acount' },\n            _react2.default.createElement(\n              'p',\n              null,\n              'Don\\'t Have an account? \\xA0 \\xA0 ',\n              _react2.default.createElement(\n                'a',\n                { href: 'jascsript:void(0)', onClick: this.props.statechange('') },\n                ' SIGN UP'\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Signin;\n}(_react.Component);\n\nexports.default = Signin;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbG9naW4vU2lnbmluLmpzPzc5ZTEiXSwibmFtZXMiOlsiU2lnbmluIiwicHJvcHMiLCJzdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJuYW1lIiwibG9naW5wYXNzIiwibG9naW5FcnJvciIsInNpZ251cEVycm9yIiwiaGFuZGxlU2lnbkluIiwiYmluZCIsImNhbGxTaWduSW5BcGkiLCJhbGVydCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwic2VydmljZVNpZ25JbkhhbmRsZXIiLCJzdGF0dXMiLCJQdWJTdWIiLCJwdWJsaXNoIiwidG9rZW4iLCJhY2Nlc3N0b2tlbiIsInVzZXJpZCIsIm1lc3NhZ2UiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzdGF0ZWNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBQ01BLE07OztBQUVKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1ZBLEtBRFU7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVyxFQURBO0FBRVhDLGdCQUFVLEVBRkM7QUFHWEMsYUFBTyxFQUhJO0FBSVhDLGdCQUFVLEVBSkM7QUFLWDtBQUNBO0FBQ0FDLGdCQUFVLEVBUEM7QUFRWEMsaUJBQVcsRUFSQTtBQVNYQyxrQkFBWSxFQVREO0FBVVhDLG1CQUFhO0FBVkYsS0FBYjs7QUFhQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBZmlCO0FBZ0JsQjs7OzttQ0FFYzs7QUFFYixVQUFJLEtBQUtWLEtBQUwsQ0FBV0ssUUFBWCxLQUF3QixFQUF4QixJQUE4QixLQUFLTCxLQUFMLENBQVdNLFNBQVgsS0FBeUIsRUFBM0QsRUFBK0Q7QUFDN0QsYUFBS0ssYUFBTCxDQUFvQixLQUFLWCxLQUF6QjtBQUNELE9BRkQsTUFFTztBQUNMWSxjQUFPLGlDQUFQO0FBRUQ7QUFDRjs7O2tDQUVhQyxJLEVBQU07QUFBQTs7QUFFbEJDLFlBQU8sYUFBUCxFQUFzQjtBQUNwQkMsZ0JBQVEsTUFEWTtBQUVwQkMsaUJBQVMsRUFBQyxnQkFBZ0Isa0JBQWpCLEVBRlc7QUFHcEJDLGNBQU1DLEtBQUtDLFNBQUwsQ0FBZ0JOLElBQWhCO0FBSGMsT0FBdEIsRUFLRU8sSUFMRixDQUtRO0FBQUEsZUFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsT0FMUixFQUs0QkYsSUFMNUIsQ0FLa0MsZ0JBQVE7QUFDeEMsZUFBS0csb0JBQUwsQ0FBMkJELElBQTNCO0FBQ0QsT0FQRDtBQVVEOzs7eUNBRW9CVCxJLEVBQU07O0FBRXpCLFVBQUlBLEtBQUtXLE1BQUwsS0FBZ0IsU0FBcEIsRUFBK0I7QUFDN0JDLGVBQU9DLE9BQVAsQ0FBZ0IsVUFBaEIsRUFBNEIsRUFBQ0YsUUFBUSxJQUFULEVBQWVHLE9BQU9kLEtBQUtlLFdBQTNCLEVBQXdDQyxRQUFRaEIsS0FBS2dCLE1BQXJELEVBQTVCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xqQixjQUFPQyxLQUFLaUIsT0FBWjtBQUNEO0FBRUY7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLFdBREY7QUFNRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRSxxREFBUSxNQUFLLE1BQWIsRUFBb0IsTUFBSyxlQUF6QixFQUF5QyxPQUFRLEtBQUs5QixLQUFMLENBQVdLLFFBQTVELEVBQXNFLGFBQVksYUFBbEY7QUFDUSx5QkFBVSxjQURsQixFQUNpQyxVQUFVLGtCQUFDMEIsS0FBRCxFQUFXO0FBQ3hELHVCQUFLQyxRQUFMLENBQWUsRUFBQzNCLFVBQVUwQixNQUFNRSxNQUFOLENBQWFDLEtBQXhCLEVBQWY7QUFBK0MsZUFGN0M7QUFERixXQU5GO0FBV0U7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0UscURBQU8sTUFBSyxVQUFaLEVBQXVCLE1BQUssZUFBNUI7QUFDTyxxQkFDUCxLQUFLbEMsS0FBTCxDQUFXTSxTQUZYO0FBR08sd0JBQVUsa0JBQUN5QixLQUFELEVBQVc7QUFDMUIsdUJBQUtDLFFBQUwsQ0FBZSxFQUFDMUIsV0FBV3lCLE1BQU1FLE1BQU4sQ0FBYUMsS0FBekIsRUFBZjtBQUFnRCxlQUpsRDtBQUtPLDJCQUFZLGFBTG5CLEVBS2lDLFdBQVUsY0FMM0MsRUFLMEQsSUFBRyxlQUw3RDtBQURGLFdBWEY7QUFtQkU7QUFBQTtBQUFBO0FBQ0UscURBQU8sU0FDSCxLQUFLekIsWUFEVCxFQUN1QixXQUFVLHNCQURqQyxFQUN3RCxPQUFNLFVBRDlELEVBQ3lFLE1BQUssUUFEOUU7QUFERixXQW5CRjtBQXVCRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUFBO0FBQUEsa0JBQUcsTUFBSyxtQkFBUixFQUE0QixTQUFTLEtBQUtWLEtBQUwsQ0FBV29DLFdBQVgsQ0FBdUIsRUFBdkIsQ0FBckM7QUFBQTtBQUFBO0FBQXhDO0FBREY7QUF2QkY7QUFERixPQURGO0FBZ0NHOzs7Ozs7a0JBSVlyQyxNIiwiZmlsZSI6IjI4Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmNsYXNzIFNpZ25pbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgLy8gIHVzZXJuYW1lOiAnYW51cmFnQGdtYWlsLmNvbScsXG4gICAgICAvLyBsb2dpbnBhc3M6ICcxMjM0NTY3ODkwJyxcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIGxvZ2lucGFzczogJycsXG4gICAgICBsb2dpbkVycm9yOiAnJyxcbiAgICAgIHNpZ251cEVycm9yOiAnJ1xuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZVNpZ25JbiA9IHRoaXMuaGFuZGxlU2lnbkluLmJpbmQgKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU2lnbkluKCkge1xuXG4gICAgaWYgKHRoaXMuc3RhdGUudXNlcm5hbWUgIT09ICcnICYmIHRoaXMuc3RhdGUubG9naW5wYXNzICE9PSAnJykge1xuICAgICAgdGhpcy5jYWxsU2lnbkluQXBpICh0aGlzLnN0YXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQgKFwiUGxlYXNlIEVudGVyIExvZ2luIEluZm9ybWF0aW9uIFwiKTtcblxuICAgIH1cbiAgfVxuXG4gIGNhbGxTaWduSW5BcGkoZGF0YSkge1xuXG4gICAgZmV0Y2ggKCcvYXBpL3NpbmdpbicsIHtcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkgKGRhdGEpXG4gICAgfVxuICAgICkudGhlbiAocmVzID0+IHJlcy5qc29uICgpKS50aGVuIChqc29uID0+IHtcbiAgICAgIHRoaXMuc2VydmljZVNpZ25JbkhhbmRsZXIgKGpzb24pXG4gICAgfSk7XG5cblxuICB9XG5cbiAgc2VydmljZVNpZ25JbkhhbmRsZXIoZGF0YSkge1xuXG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoICgnSVNfTE9HSU4nLCB7c3RhdHVzOiB0cnVlLCB0b2tlbjogZGF0YS5hY2Nlc3N0b2tlbiwgdXNlcmlkOiBkYXRhLnVzZXJpZH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCAoZGF0YS5tZXNzYWdlKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWJveFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10b3AtbGVmdFwiPlxuICAgICAgICAgICAgPGgzPkxvZ2luIDwvaDM+XG4gICAgICAgICAgICA8cD5FbnRlciB1c2VybmFtZSBhbmQgcGFzc3dvcmQgdG8gbG9nIG9uOjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0ICB0eXBlPVwidGV4dFwiIG5hbWU9XCJmb3JtLXVzZXJuYW1lXCIgdmFsdWUgPXt0aGlzLnN0YXRlLnVzZXJuYW1lfSBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lLi4uXCIgIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe3VzZXJuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KX19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cImZvcm0tcGFzc3dvcmRcIiAgIFxuICAgICAgICAgICAgICAgICAgIHZhbHVlID17XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxvZ2lucGFzc30gICBcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtsb2dpbnBhc3M6IGV2ZW50LnRhcmdldC52YWx1ZX0pfX1cbiAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkLi4uXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJmb3JtLXBhc3N3b3JkXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgb25DbGljaz17XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTaWduSW59IGNsYXNzTmFtZT1cImJ0biAgYnRuLXRyYW5zcGFyZW50XCIgdmFsdWU9XCJTaWduIGluIVwiIHR5cGU9XCJidXR0b25cIi8+XG4gICAgICAgICAgPC9kaXY+XHRcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1hY291bnRcIj5cbiAgICAgICAgICAgIDxwPkRvbid0IEhhdmUgYW4gYWNjb3VudD8gJm5ic3A7ICZuYnNwOyA8YSBocmVmPVwiamFzY3NyaXB0OnZvaWQoMClcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnN0YXRlY2hhbmdlKCcnKX0+IFNJR04gVVA8L2E+PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICk7XG4gICAgICB9XG4gICAgICA7XG4gICAgfVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgU2lnbmluO1xuXG5cblxuICAgICAgICAgICAgICAgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9sb2dpbi9TaWduaW4uanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///287\n")}});