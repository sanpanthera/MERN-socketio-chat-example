webpackHotUpdate(0,{65:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=n(0),s=i(c),u=n(11),f=i(u),d=n(4);n(137),n(8);var p=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={userList:[],notification:[]},n.onchatnowClick=n.onchatnowClick.bind(n),n.updateNoification=n.updateNoification.bind(n),f.default.subscribe("NOTIFICATION_TO_USERLIST",n.updateNoification),n}return r(t,e),l(t,[{key:"updateNoification",value:function(e,t){this.updateuserList(t.userId)}},{key:"updateuserList",value:function(e){this.state.userList.map(function(t){e.includes(t._id)?t.notification="true":t.notification="false"}),this.setState({notification:e,userList:this.state.userList})}},{key:"componentDidMount",value:function(){var e=this,t=window.localStorage.getItem("userid");fetch("/api/acceptfriendlist/"+t,{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){t.hasOwnProperty("list")&&(console.log(t.list),e.setState({userList:t.list},function(){}))})}},{key:"onchatnowClick",value:function(e){f.default.publish("TRIGGER_CHAT_ENABLE",{status:!0,towhome:e})}},{key:"onViewProfileClick",value:function(e){this.props.history.push("/profile/"+e)}},{key:"render",value:function(){var e=this,t=this.state.userList;t.length;var n=t.map(function(t){return s.default.createElement("div",{className:"well-sm",key:t._id},s.default.createElement("div",{className:"media"},s.default.createElement("div",{className:"media-left align-self-center"}),s.default.createElement("div",{className:"media-body"},s.default.createElement("h4",{className:"media-heading"}," ",t.firstName," ",t.lastName," "),s.default.createElement("p",null,function(){if(t.hasOwnProperty("notification")&&"true"==t.notification)return s.default.createElement("span",{className:"label label-info"},"new messgae ....")}()),s.default.createElement("p",null,s.default.createElement("a",{href:"javascript:void(0)",onClick:function(n){return e.onchatnowClick(t._id)},className:"btn btn-xs btn-default"},s.default.createElement("span",{className:"glyphicon glyphicon-comment"})," Chat"),s.default.createElement("a",{href:"#profile",onClick:function(n){return e.onViewProfileClick(t._id)},className:"btn btn-xs btn-default"},s.default.createElement("span",{className:"glyphicon glyphicon-heart"})," View Profile")))))});return s.default.createElement("div",{className:"userlist-container"},n)}}]),t}(c.Component);t.default=(0,d.withRouter)(p)}});