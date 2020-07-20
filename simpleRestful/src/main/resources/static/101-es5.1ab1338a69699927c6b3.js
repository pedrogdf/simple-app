function asyncGeneratorStep(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(h){return void n(h)}c.done?t(s):Promise.resolve(s).then(r,o)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){asyncGeneratorStep(i,r,o,a,c,"next",e)}function c(e){asyncGeneratorStep(i,r,o,a,c,"throw",e)}a(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{"37vE":function(e,t,n){"use strict";n.r(t),n.d(t,"pwa_camera_modal_instance",(function(){return o}));var r=n("JHRn"),o=function(){function e(t){var n=this;_classCallCheck(this,e),Object(r.h)(this,t),this.noDevicesText="No camera found",this.noDevicesButtonText="Choose file",this.handlePhoto=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.onPhoto.emit(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.handleNoDeviceError=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.noDeviceError.emit(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.onPhoto=Object(r.d)(this,"onPhoto",7),this.noDeviceError=Object(r.d)(this,"noDeviceError",7)}return _createClass(e,[{key:"handleBackdropClick",value:function(e){e.target!==this.el&&this.onPhoto.emit(null)}},{key:"handleComponentClick",value:function(e){e.stopPropagation()}},{key:"handleBackdropKeyUp",value:function(e){"Escape"===e.key&&this.onPhoto.emit(null)}},{key:"render",value:function(){var e=this;return Object(r.g)("div",{class:"wrapper",onClick:function(t){return e.handleBackdropClick(t)}},Object(r.g)("div",{class:"content"},Object(r.g)("pwa-camera",{onClick:function(t){return e.handleComponentClick(t)},handlePhoto:this.handlePhoto,handleNoDeviceError:this.handleNoDeviceError,noDevicesButtonText:this.noDevicesButtonText,noDevicesText:this.noDevicesText})))}},{key:"el",get:function(){return Object(r.f)(this)}}],[{key:"style",get:function(){return":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:var(--inset-width);height:var(--inset-height)}@media only screen and (max-width:600px){.content{width:100%;height:100%}}"}}]),e}()}}]);