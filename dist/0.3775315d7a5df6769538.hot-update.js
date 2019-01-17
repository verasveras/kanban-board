webpackHotUpdate(0,{42:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(43),i=n(44),u=n(13),c=n(45);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,p(t).apply(this,arguments))}var n,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(a.default,{name:"Backlog",handleCreateTask:this.props.showModal,showCreateButton:!0}),r.a.createElement(a.default,{name:"In Progress",handleCreateTask:this.props.showModal,showCreateButton:!0}),r.a.createElement(a.default,{name:"Completed",handleCreateTask:this.props.showModal}),this.props.modalVisibile&&r.a.createElement(i.ModalContainer,null,r.a.createElement(i.Modal,null)))}}])&&f(n.prototype,o),u&&f(n,u),t}();t.default=Object(u.connect)(function(e){return{modalVisibile:e.showModal}},function(e){return{showModal:function(){e(Object(c.showModal)())}}})(h)},44:function(e,t,n){"use strict";n.r(t),n.d(t,"ModalContainer",function(){return b}),n.d(t,"ModalComponent",function(){return v}),n.d(t,"Modal",function(){return C});var o=n(1),r=n.n(o),a=n(6),i=n.n(a),u=n(13),c=n(45);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return f(this,t),d(this,h(t).apply(this,arguments))}return y(t,r.a.Component),p(t,[{key:"render",value:function(){var e=document.getElementById("root");return i.a.createPortal(this.props.children,e)}}]),t}(),v=function(e){function t(e){var n;return f(this,t),(n=d(this,h(t).call(this,e))).state={title:"",description:"",dueDate:""},n}return y(t,r.a.Component),p(t,[{key:"handleInputChange",value:function(e){var t,n,o,r=target.id.split("-").pop();this.setState((t={},n=r,o=e.currentTarget.value,n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t))}},{key:"handleCreateCard",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal__title"},"Create New Task"),r.a.createElement("form",null,r.a.createElement("input",{className:"input",type:"text",placeholder:"Title",id:"title-input",onChange:this.handleInputChange}),r.a.createElement("textarea",{className:"input",placeholder:"Description (optional)",id:"description-input",onChange:this.handleInputChange}),r.a.createElement("input",{className:"input",type:"text",placeholder:"Date",id:"dueDate-input",onChange:this.handleInputChange})),r.a.createElement("div",{className:"modal__footer"},r.a.createElement("div",{className:"button button__cancel",onClick:this.props.hideModal}," ","Cancel"," "),r.a.createElement("div",{className:"button button__confirm",onClick:function(){alert("create!")}},"Create")))}}]),t}(),C=Object(u.connect)(function(){return{}},function(e){return{hideModal:function(){e(Object(c.hideModal)())}}})(v)}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21vZGFsL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0IiwiYSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJfY29tcG9uZW50c19jb2x1bW5fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyIsIm5hbWUiLCJoYW5kbGVDcmVhdGVUYXNrIiwidGhpcyIsInByb3BzIiwic2hvd01vZGFsIiwic2hvd0NyZWF0ZUJ1dHRvbiIsIm1vZGFsVmlzaWJpbGUiLCJfY29tcG9uZW50c19tb2RhbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fIiwiY29ubmVjdCIsInN0YXRlIiwiZGlzcGF0Y2giLCJNb2RhbENvbnRhaW5lciIsIl9SZWFjdCRDb21wb25lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9nZXRQcm90b3R5cGVPZiIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiY2hpbGRyZW4iLCJNb2RhbENvbXBvbmVudCIsIl9SZWFjdCRDb21wb25lbnQyIiwiX3RoaXMiLCJjYWxsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJldmVudCIsImlucHV0TmFtZSIsInRhcmdldCIsImlkIiwic3BsaXQiLCJwb3AiLCJzZXRTdGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwib25DbGljayIsImhpZGVNb2Rh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dENzQyxVQURzQyxXQUVwQ3RDLEVBQVNzQywwQkFJUXhDLENBR25Cb0IiLCJmaWxlIjoiMC4zNzc1MzE1ZDdhNWRmNjc2OTUzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb21wb25lbnRzL2NvbHVtbic7XG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lciwgTW9kYWwgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWwnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNob3dNb2RhbCB9IGZyb20gJy4vcmVkdWNlcnMvYWN0aW9ucyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY29udGFpbmVyXCI+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICBuYW1lPVwiQmFja2xvZ1wiXG4gICAgICAgICAgaGFuZGxlQ3JlYXRlVGFzaz17dGhpcy5wcm9wcy5zaG93TW9kYWx9XG4gICAgICAgICAgc2hvd0NyZWF0ZUJ1dHRvblxuICAgICAgICAvPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgbmFtZT1cIkluIFByb2dyZXNzXCJcbiAgICAgICAgICBoYW5kbGVDcmVhdGVUYXNrPXt0aGlzLnByb3BzLnNob3dNb2RhbH1cbiAgICAgICAgICBzaG93Q3JlYXRlQnV0dG9uXG4gICAgICAgIC8+XG4gICAgICAgIDxDb2x1bW4gbmFtZT1cIkNvbXBsZXRlZFwiIGhhbmRsZUNyZWF0ZVRhc2s9e3RoaXMucHJvcHMuc2hvd01vZGFsfSAvPlxuICAgICAgICB7dGhpcy5wcm9wcy5tb2RhbFZpc2liaWxlICYmIChcbiAgICAgICAgICA8TW9kYWxDb250YWluZXI+XG4gICAgICAgICAgICA8TW9kYWwgLz5cbiAgICAgICAgICA8L01vZGFsQ29udGFpbmVyPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBtb2RhbFZpc2liaWxlOiBzdGF0ZS5zaG93TW9kYWwsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgc2hvd01vZGFsKCkge1xuICAgIGRpc3BhdGNoKHNob3dNb2RhbCgpKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoQXBwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBoaWRlTW9kYWwgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9hY3Rpb25zJztcblxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwodGhpcy5wcm9wcy5jaGlsZHJlbiwgZG9tRWxlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIGR1ZURhdGU6ICcnLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xuICAgIGNvbnN0IGlucHV0TmFtZSA9IHRhcmdldC5pZC5zcGxpdCgnLScpLnBvcCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2lucHV0TmFtZV06IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDcmVhdGVDYXJkKCkge31cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fdGl0bGVcIj5DcmVhdGUgTmV3IFRhc2s8L2Rpdj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICAgIGlkPVwidGl0bGUtaW5wdXRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24gKG9wdGlvbmFsKVwiXG4gICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uLWlucHV0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJkdWVEYXRlLWlucHV0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fZm9vdGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uX19jYW5jZWxcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVNb2RhbH0+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgQ2FuY2VseycgJ31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uX19jb25maXJtXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYWxlcnQoJ2NyZWF0ZSEnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoKSA9PiAoe30pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBoaWRlTW9kYWwoKSB7XG4gICAgZGlzcGF0Y2goaGlkZU1vZGFsKCkpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBNb2RhbCA9IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShNb2RhbENvbXBvbmVudCk7XG4iXSwic291cmNlUm9vdCI6IiJ9