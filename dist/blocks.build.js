!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var a=n.apply(null,r);a&&e.push(a)}else if("object"===o)for(var c in r)i.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}var i={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(n.default=n,e.exports=n):(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return 0===e||50===e?null:"has-background-dim-"+10*Math.round(e/10)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),l=n.n(c),s=n(2),u=n(3),p=n(4),m=(n.n(p),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=wp.i18n.__,f=wp.element.Component,b=wp.blocks.registerBlockType,h=wp.editor,w=(h.AlignmentToolbar,h.BlockControls),y=h.BlockAlignmentToolbar,v=(h.MediaUpload,h.RichText,h.InnerBlocks),P=wp.components,E=(P.Button,P.withFallbackStyles,P.IconButton,P.Dashicon,P.withState,P.Toolbar,{containerPaddingTop:{type:"number"},containerPaddingRight:{type:"number"},containerPaddingBottom:{type:"number"},containerPaddingLeft:{type:"number"},containerMarginTop:{type:"number"},containerMarginBottom:{type:"number"},containerWidth:{type:"string"},containerMaxWidth:{type:"number",default:1600},containerBackgroundColor:{type:"string"},containerImgURL:{type:"string",source:"attribute",attribute:"src",selector:"img"},containerImgID:{type:"number"},containerImgAlt:{type:"string",source:"attribute",attribute:"alt",selector:"img"},containerDimRatio:{type:"number",default:50}}),k=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=(t.containerPaddingTop,t.containerPaddingRight,t.containerPaddingBottom,t.containerPaddingLeft,t.containerMarginTop,t.containerMarginBottom,t.containerWidth),r=t.containerMaxWidth,o=(t.containerBackgroundColor,t.containerImgURL),i=(t.containerImgID,t.containerImgAlt),c=t.containerDimRatio,p=(e.attributes,e.isSelected,e.editable,e.className,e.setAttributes);return[wp.element.createElement(w,null,wp.element.createElement(y,{value:n,onChange:function(e){return p({containerWidth:e})},controls:["center","full"]})," "),wp.element.createElement(s.a,m({setAttributes:p},this.props)),wp.element.createElement(u.a,this.props,wp.element.createElement("div",{className:"ssws-container-inside"}," ",o&&!!o.length&&wp.element.createElement("div",{className:"ssws-container-image-wrap"},wp.element.createElement("img",{className:l()("ssws-container-image",a(c),{"has-background-dim":0!==c}),src:o,alt:i})," "),wp.element.createElement("div",{className:"ssws-container-content",style:{maxWidth:r+"px"}},wp.element.createElement(v,null))," ")," ")]}}]),t}(f);b("ssws-blocks/ssws-container",{title:g("SSWS Container","ssws-blocks-container"),description:g("Add a blocks container to wrap several blocks in a parent container.","ssws-blocks-container"),icon:"smiley",category:"common",keywords:[g("container","ssws-blocks-container"),g("section","ssws-blocks-container"),g("ssws","ssws-blocks-container")],attributes:E,getEditWrapperProps:function(e){var t=e.containerWidth;if("left"===t||"right"===t||"full"===t)return{"data-align":t}},edit:k,save:function(e){var t=e.attributes,n=(t.containerPaddingTop,t.containerPaddingRight,t.containerPaddingBottom,t.containerPaddingLeft,t.containerMarginTop,t.containerMarginBottom,t.containerWidth,t.containerMaxWidth),r=(t.containerBackgroundColor,t.containerImgURL),o=(t.containerImgID,t.containerImgAlt),i=t.containerDimRatio;return wp.element.createElement(u.a,e,wp.element.createElement("div",{className:"ssws-container-inside"}," ",r&&!!r.length&&wp.element.createElement("div",{className:"ssws-container-image-wrap"},wp.element.createElement("img",{className:l()("ssws-container-image",a(i),{"has-background-dim":0!==i}),src:r,alt:o})," "),wp.element.createElement("div",{className:"ssws-container-content",style:{maxWidth:n+"px"}},wp.element.createElement(v.Content,null))," ")," ")}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=wp.i18n.__,l=wp.element.Component,s=wp.editor,u=s.InspectorControls,p=(s.BlockDescription,s.ColorPalette,s.PanelColorSettings),m=s.MediaUpload,d=wp.components,g=(d.Toolbar,d.Button,d.PanelBody),f=(d.PanelRow,d.FormToggle,d.RangeControl),b=(d.SelectControl,d.ToggleControl,d.IconButton),h=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){var e=this,t=this.props.attributes,n=t.containerPaddingTop,r=t.containerPaddingRight,o=t.containerPaddingBottom,i=t.containerPaddingLeft,a=t.containerMarginTop,l=t.containerMarginBottom,s=t.containerMaxWidth,d=t.containerBackgroundColor,h=t.containerDimRatio,w=t.containerImgURL,y=t.containerImgID,v=(t.containerImgAlt,this.props.setAttributes),P=function(e){v({containerImgID:e.id,containerImgURL:e.url,containerImgAlt:e.alt})},E=function(){v({containerImgID:null,containerImgURL:null,containerImgAlt:null})},k=function(e){return v({containerBackgroundColor:e})};return wp.element.createElement(u,{key:"inspector"},wp.element.createElement(g,{title:c("Container Options"),initialOpen:!0},wp.element.createElement(f,{label:c("Padding Top (%)"),value:n,onChange:function(t){return e.props.setAttributes({containerPaddingTop:t})},min:0,max:30,step:.5}),wp.element.createElement(f,{label:c("Padding Bottom (%)"),value:o,onChange:function(t){return e.props.setAttributes({containerPaddingBottom:t})},min:0,max:30,step:.5}),wp.element.createElement(f,{label:c("Padding Left (%)"),value:i,onChange:function(t){return e.props.setAttributes({containerPaddingLeft:t})},min:0,max:30,step:.5}),wp.element.createElement(f,{label:c("Padding Right (%)"),value:r,onChange:function(t){return e.props.setAttributes({containerPaddingRight:t})},min:0,max:30,step:.5}),wp.element.createElement(f,{label:c("Margin Top (%)"),value:a,onChange:function(t){return e.props.setAttributes({containerMarginTop:t})},min:0,max:30,step:1}),wp.element.createElement(f,{label:c("Margin Bottom (%)"),value:l,onChange:function(t){return e.props.setAttributes({containerMarginBottom:t})},min:0,max:30,step:.5}),wp.element.createElement(f,{label:c("Inside Container Max Width (px)"),value:s,onChange:function(t){return e.props.setAttributes({containerMaxWidth:t})},min:500,max:1600,step:1})),wp.element.createElement(g,{title:c("Background Options"),initialOpen:!1},wp.element.createElement("p",null,c("Select a background image:")),wp.element.createElement(m,{onSelect:P,type:"image",value:y,render:function(e){var t=e.open;return wp.element.createElement("div",null,wp.element.createElement(b,{className:"ssws-container-inspector-media",label:c("Edit image"),icon:"format-image",onClick:t},c("Select Image")),w&&!!w.length&&wp.element.createElement(b,{className:"ssws-container-inspector-media",label:c("Remove Image"),icon:"dismiss",onClick:E},c("Remove")))}}),w&&!!w.length&&wp.element.createElement(f,{label:c("Image Opacity"),value:h,onChange:function(t){return e.props.setAttributes({containerDimRatio:t})},min:0,max:100,step:10}),wp.element.createElement(p,{title:c("Background Color"),initialOpen:!1,colorSettings:[{value:d,label:c("Background Color"),onChange:k}]})))}}]),t}(l);t.a=h},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),l=n.n(c),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=wp.element.Component,p=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.props.attributes,t=e.containerBackgroundColor,n=e.containerAlignment,o=e.containerPaddingTop,i=e.containerPaddingRight,a=e.containerPaddingBottom,c=e.containerPaddingLeft,s=e.containerMarginTop,u=e.containerMarginBottom,p=e.containerWidth,m=(e.containerMaxWidth,{backgroundColor:t||void 0,textAlign:n||void 0,paddingLeft:c?c+"%":void 0,paddingRight:i?i+"%":void 0,paddingBottom:a?a+"%":void 0,paddingTop:o?o+"%":void 0,marginTop:s?s+"%":void 0,marginBottom:u?u+"%":void 0}),d=l()([this.props.className,"ssws-blocks-container"],r({},"align"+p,p));return wp.element.createElement("div",{style:m,className:d||void 0},this.props.children)}}]),t}(u);t.a=p},function(e,t){}]);