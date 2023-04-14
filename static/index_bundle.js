/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App/Components/BarComponent/BarComponent.hbs":
/*!**********************************************************!*\
  !*** ./src/App/Components/BarComponent/BarComponent.hbs ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"barClass") || (depth0 != null ? lookupProperty(depth0,"barClass") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"barClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":12},"end":{"line":1,"column":26}}}) : helper)))
    + " js-bar\">\r\n    <div class=\"bar w-100\">\r\n        <div class=\"bar__full\"></div>\r\n        <div class=\"bar__load\">\r\n            <div class=\"bar-load__progress\"></div>\r\n        </div>\r\n        <div class=\"bar__current\"></div>\r\n<!--        <div class=\"bar__helper\">1.35</div>-->\r\n<!--        <div class=\"bar__current-circle\"></div>-->\r\n        <div id=\"bar__helper\"></div>\r\n        <div id=\"bar__current-circle\"></div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/BaseComponent/BaseComponent.hbs":
/*!************************************************************!*\
  !*** ./src/App/Components/BaseComponent/BaseComponent.hbs ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"root js-root\">\r\n    <div class=\"header js-header\"></div>\r\n    <div class=\"content js-content\"></div>\r\n    <div class=\"footer js-footer\"></div>\r\n    <div class=\"right-modal js-right-modal\"></div>\r\n    <div class=\"modal modal--right js-modal--right\"></div>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/ButtonComponent/ButtonComponent.hbs":
/*!****************************************************************!*\
  !*** ./src/App/Components/ButtonComponent/ButtonComponent.hbs ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " id=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":27},"end":{"line":2,"column":35}}}) : helper)))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " data-action=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"dataAction") || (depth0 != null ? lookupProperty(depth0,"dataAction") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dataAction","hash":{},"data":data,"loc":{"start":{"line":2,"column":237},"end":{"line":2,"column":252}}}) : helper)))
    + "\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"js-button "
    + alias4(((helper = (helper = lookupProperty(helpers,"upperClass") || (depth0 != null ? lookupProperty(depth0,"upperClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upperClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":22},"end":{"line":1,"column":38}}}) : helper)))
    + "\">\r\n    <button "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"id") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":12},"end":{"line":2,"column":44}}})) != null ? stack1 : "")
    + " class=\"gradient-button gradient-button--blue "
    + alias4(((helper = (helper = lookupProperty(helpers,"className") || (depth0 != null ? lookupProperty(depth0,"className") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data,"loc":{"start":{"line":2,"column":90},"end":{"line":2,"column":105}}}) : helper)))
    + " normal-text p-10\" style=\"--coord-y: 42.8px; --diameter-highlight: 264.308px;--coord-x: 70.3375px;\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"dataAction") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":205},"end":{"line":2,"column":261}}})) != null ? stack1 : "")
    + ">\r\n        <div class=\"gradient-button__border js-gradient-button__border\"></div>\r\n        <span class=\"gradient-button__text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":4,"column":44},"end":{"line":4,"column":54}}}) : helper)))
    + "</span>\r\n    </button>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/DivComponent/DivComponent.hbs":
/*!**********************************************************!*\
  !*** ./src/App/Components/DivComponent/DivComponent.hbs ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":12},"end":{"line":1,"column":23}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":35}}}) : helper)))
    + "</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.hbs":
/*!********************************************************************************!*\
  !*** ./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.hbs ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " data-action=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"dataAction") || (depth0 != null ? lookupProperty(depth0,"dataAction") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dataAction","hash":{},"data":data,"loc":{"start":{"line":1,"column":66},"end":{"line":1,"column":82}}}) : helper)))
    + "\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"dropdown js-dropdown\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"dataAction") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":91}}})) != null ? stack1 : "")
    + ">\r\n    <a class=\"dropdown__button\">\r\n        <img class=\"dropdown-button__image\" src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"avatar") || (depth0 != null ? lookupProperty(depth0,"avatar") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"avatar","hash":{},"data":data,"loc":{"start":{"line":3,"column":49},"end":{"line":3,"column":61}}}) : helper)))
    + "\">\r\n    </a>\r\n\r\n    <div class=\"dropdown__content js-dropdown__content\">\r\n        <div class=\"dropdown-content__container\">\r\n            <div class=\"dropdown-content-container__items js-dropdown-content-container__items\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/FormComponent/FormComponent.hbs":
/*!************************************************************!*\
  !*** ./src/App/Components/FormComponent/FormComponent.hbs ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return " enctype=\"multipart/form-data\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<form id=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"formId") || (depth0 != null ? lookupProperty(depth0,"formId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"formId","hash":{},"data":data,"loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":22}}}) : helper)))
    + "\" class=\"form js-form\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"enctype") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":45},"end":{"line":1,"column":99}}})) != null ? stack1 : "")
    + ">\r\n    <div class=\"form__content js-form__content\"></div>\r\n\r\n    <div class=\"form__footer\"></div>\r\n</form>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/InputComponent/InputComponent.hbs":
/*!**************************************************************!*\
  !*** ./src/App/Components/InputComponent/InputComponent.hbs ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " accept=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"accept") || (depth0 != null ? lookupProperty(depth0,"accept") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"accept","hash":{},"data":data,"loc":{"start":{"line":2,"column":142},"end":{"line":2,"column":152}}}) : helper)))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"checkboxText") || (depth0 != null ? lookupProperty(depth0,"checkboxText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"checkboxText","hash":{},"data":data,"loc":{"start":{"line":3,"column":26},"end":{"line":3,"column":44}}}) : helper)))
    + " ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"input-field js-input-field "
    + alias4(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <input type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":2,"column":17},"end":{"line":2,"column":27}}}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":33},"end":{"line":2,"column":41}}}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"placeholder") || (depth0 != null ? lookupProperty(depth0,"placeholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":2,"column":56},"end":{"line":2,"column":73}}}) : helper)))
    + "\" class=\"input-field__input "
    + alias4(((helper = (helper = lookupProperty(helpers,"inputClass") || (depth0 != null ? lookupProperty(depth0,"inputClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputClass","hash":{},"data":data,"loc":{"start":{"line":2,"column":101},"end":{"line":2,"column":117}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"accept") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":119},"end":{"line":2,"column":161}}})) != null ? stack1 : "")
    + " />\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"checkboxText") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":52}}})) != null ? stack1 : "")
    + "\r\n    <div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":13},"end":{"line":4,"column":21}}}) : helper)))
    + "-msg\" class=\"input-field__error-msg\"></div>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/LinkComponent/LinkComponent.hbs":
/*!************************************************************!*\
  !*** ./src/App/Components/LinkComponent/LinkComponent.hbs ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " id=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":18},"end":{"line":1,"column":26}}}) : helper)))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " data-action=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"dataAction") || (depth0 != null ? lookupProperty(depth0,"dataAction") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dataAction","hash":{},"data":data,"loc":{"start":{"line":1,"column":126},"end":{"line":1,"column":142}}}) : helper)))
    + "\" ";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span class=\"link__image "
    + alias4(((helper = (helper = lookupProperty(helpers,"linkImageClass") || (depth0 != null ? lookupProperty(depth0,"linkImageClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkImageClass","hash":{},"data":data,"loc":{"start":{"line":3,"column":29},"end":{"line":3,"column":49}}}) : helper)))
    + "\">\r\n        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"linkImageSrc") || (depth0 != null ? lookupProperty(depth0,"linkImageSrc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkImageSrc","hash":{},"data":data,"loc":{"start":{"line":4,"column":18},"end":{"line":4,"column":36}}}) : helper)))
    + "\" width=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"linkImageWidth") || (depth0 != null ? lookupProperty(depth0,"linkImageWidth") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkImageWidth","hash":{},"data":data,"loc":{"start":{"line":4,"column":45},"end":{"line":4,"column":65}}}) : helper)))
    + "\">\r\n    </span>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <span class=\"link__text "
    + alias4(((helper = (helper = lookupProperty(helpers,"linkTextClass") || (depth0 != null ? lookupProperty(depth0,"linkTextClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkTextClass","hash":{},"data":data,"loc":{"start":{"line":9,"column":32},"end":{"line":9,"column":51}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"linkText") || (depth0 != null ? lookupProperty(depth0,"linkText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":9,"column":53},"end":{"line":9,"column":67}}}) : helper)))
    + "</span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"id") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":35}}})) != null ? stack1 : "")
    + "href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"linkHref") || (depth0 != null ? lookupProperty(depth0,"linkHref") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkHref","hash":{},"data":data,"loc":{"start":{"line":1,"column":41},"end":{"line":1,"column":55}}}) : helper)))
    + "\" class=\"link js-link "
    + alias4(((helper = (helper = lookupProperty(helpers,"linkClass") || (depth0 != null ? lookupProperty(depth0,"linkClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":77},"end":{"line":1,"column":92}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"dataAction") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":94},"end":{"line":1,"column":151}}})) != null ? stack1 : "")
    + ">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"linkImageSrc") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":6,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"linkText") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":10,"column":11}}})) != null ? stack1 : "")
    + "</a>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/ListComponent/ListComponent.hbs":
/*!************************************************************!*\
  !*** ./src/App/Components/ListComponent/ListComponent.hbs ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"list js-list "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\"></ul>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.hbs":
/*!********************************************************************************!*\
  !*** ./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.hbs ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"vertical-spacer js-vertical-spacer vertical-spacer-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"size") || (depth0 != null ? lookupProperty(depth0,"size") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"size","hash":{},"data":data,"loc":{"start":{"line":1,"column":63},"end":{"line":1,"column":73}}}) : helper)))
    + "\"></div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/FilmView/FilmView.hbs":
/*!*********************************************!*\
  !*** ./src/App/Views/FilmView/FilmView.hbs ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"film__background\">\r\n        <img class=\"film-background__image\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"previewURL") || (depth0 != null ? lookupProperty(depth0,"previewURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"previewURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":49},"end":{"line":4,"column":65}}}) : helper)))
    + "\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"film__content\">\r\n        <div class=\"film__content-container\">\r\n            <div class=\"film-content__title\">\r\n                <h1 class=\"film-content-title__text\">\r\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":11,"column":20},"end":{"line":11,"column":31}}}) : helper)))
    + "\r\n                </h1>\r\n            </div>\r\n\r\n            <div class=\"film-content__info-container\">\r\n                <div class=\"film-content__info\">\r\n                    <div class=\"film-content__rating\">\r\n                        <span class=\"film-content-rating__text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"rating") || (depth0 != null ? lookupProperty(depth0,"rating") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data,"loc":{"start":{"line":18,"column":64},"end":{"line":18,"column":76}}}) : helper)))
    + "</span>\r\n                    </div>\r\n                    <span class=\"film-content__year\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":20,"column":53},"end":{"line":20,"column":63}}}) : helper)))
    + "</span>\r\n                    <span class=\"film-content__type\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":21,"column":53},"end":{"line":21,"column":63}}}) : helper)))
    + "</span>\r\n                    <span class=\"film-content__country\"></span>\r\n                    <span class=\"film-content__age-limit\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"ageLimit") || (depth0 != null ? lookupProperty(depth0,"ageLimit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ageLimit","hash":{},"data":data,"loc":{"start":{"line":23,"column":58},"end":{"line":23,"column":72}}}) : helper)))
    + "+</span>\r\n                </div>\r\n                <p class=\"film-content__description\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":25,"column":53},"end":{"line":25,"column":70}}}) : helper)))
    + "</p>\r\n            </div>\r\n\r\n            <div class=\"film-content__authors\">\r\n                <div class=\"film-content-authors__director\">\r\n                    <div class=\"film-content-authors-director__text\">Режиссёры:</div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"directors") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":20},"end":{"line":33,"column":29}}})) != null ? stack1 : "")
    + "                </div>\r\n                <div class=\"film-content-authors__actors\">\r\n                    <div class=\"film-content-authors-actors__text\">Актёры:</div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"actors") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":20},"end":{"line":39,"column":29}}})) != null ? stack1 : "")
    + "                </div>\r\n            </div>\r\n\r\n            <div class=\"film-content__buttons\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <a href=\"/persons/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":32,"column":38},"end":{"line":32,"column":46}}}) : helper)))
    + "\" class=\"film-content-authors-director__name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":32,"column":92},"end":{"line":32,"column":102}}}) : helper)))
    + "</a>"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"last")),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":106},"end":{"line":32,"column":136}}})) != null ? stack1 : "")
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return ", ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a href=\"/persons/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":38,"column":42},"end":{"line":38,"column":50}}}) : helper)))
    + "\" class=\"film-content-authors-actors__name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":38,"column":94},"end":{"line":38,"column":104}}}) : helper)))
    + "</a>"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"last")),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":108},"end":{"line":38,"column":138}}})) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"film\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":48,"column":13}}})) != null ? stack1 : "")
    + "</article>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/HeaderView/HeaderView.hbs":
/*!*************************************************!*\
  !*** ./src/App/Views/HeaderView/HeaderView.hbs ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"header-container js-header-container\">\r\n    <div class=\"header-container__left js-header-container__left\"></div>\r\n\r\n    <div class=\"header-container__right js-header-container__right\">\r\n        <div class=\"user-profile js-user-profile\"></div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/MainView/MainView.hbs":
/*!*********************************************!*\
  !*** ./src/App/Views/MainView/MainView.hbs ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <article class=\"category\">\r\n\r\n            <a class=\"category__link\">\r\n                <div class=\"category__block\">\r\n                    <h2 class=\"category__name\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":47},"end":{"line":7,"column":58}}}) : helper)))
    + "</h2>\r\n                    <img src=\"/img/icons/chevron-right.svg\" alt=\"\" class=\"icon-right\">\r\n                </div>\r\n            </a>\r\n\r\n            <div class=\"category__container\">\r\n                <div class=\"category__container__list\">\r\n                    <ul class=\"category__container__items\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":24},"end":{"line":22,"column":33}}})) != null ? stack1 : "")
    + "\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class=\"category__container__buttons\">\r\n                    <button class=\"category__container__button-left\">\r\n                        <img src=\"/img/icons/chevron-left.svg\" alt=\"\" class=\"icon-left\">\r\n                    </button>\r\n                    <button class=\"category__container__button-right\">\r\n                        <img src=\"/img/icons/chevron-right.svg\" alt=\"\" class=\"icon-right\">\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <li class=\"category__container__item\">\r\n                                <a href=\"/films/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":48},"end":{"line":18,"column":56}}}) : helper)))
    + "\" class=\"category__container__item-link\">\r\n                                    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"previewURL") || (depth0 != null ? lookupProperty(depth0,"previewURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"previewURL","hash":{},"data":data,"loc":{"start":{"line":19,"column":46},"end":{"line":19,"column":62}}}) : helper)))
    + "\" alt=\"\" class=\"category__container__item-image\">\r\n                                </a>\r\n                            </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<main class=\"categories\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"selections") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "</main>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/ModalRightView/ModalRightView.hbs":
/*!*********************************************************!*\
  !*** ./src/App/Views/ModalRightView/ModalRightView.hbs ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"modal__area js-modal__area\">\r\n    <div class=\"modal__close-btn-container\">\r\n        <div class=\"modal__close-btn\" aria-label=\"Close Modal\">\r\n            <img class=\"modal__close-btn-image\" src=\"/img/icons/close.svg\" alt=\"Close image\">\r\n        </div>\r\n    </div>\r\n    <div class=\"modal__content\">\r\n        <div class=\"modal__header-container\">\r\n            <div class=\"modal__header\">\r\n                <h2 class=\"modal__title\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":10,"column":41},"end":{"line":10,"column":52}}}) : helper)))
    + "</h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal__body-container\">\r\n            <div class=\"modal__body js-modal__body\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/PersonView/PersonView.hbs":
/*!*************************************************!*\
  !*** ./src/App/Views/PersonView/PersonView.hbs ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <div class=\"person-table__row person-table__row--medium\">\r\n                                    <div class=\"person-table-row__title\">Возраст</div>\r\n                                    <div class=\"person-table-row__info\">\r\n                                        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"age") || (depth0 != null ? lookupProperty(depth0,"age") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"age","hash":{},"data":data,"loc":{"start":{"line":33,"column":40},"end":{"line":33,"column":49}}}) : helper)))
    + "\r\n                                    </div>\r\n                                </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"person-table__row person-table__row--medium\">\r\n                                <div class=\"person-table-row__title\">Рост</div>\r\n                                <div class=\"person-table-row__info\">\r\n                                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"growth") || (depth0 != null ? lookupProperty(depth0,"growth") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"growth","hash":{},"data":data,"loc":{"start":{"line":42,"column":36},"end":{"line":42,"column":48}}}) : helper)))
    + "\r\n                                </div>\r\n                            </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"person-table__row person-table__row--medium\">\r\n                                <div class=\"person-table-row__title\">Пол</div>\r\n                                <div class=\"person-table-row__info\">\r\n                                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"gender") || (depth0 != null ? lookupProperty(depth0,"gender") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"gender","hash":{},"data":data,"loc":{"start":{"line":51,"column":36},"end":{"line":51,"column":48}}}) : helper)))
    + "\r\n                                </div>\r\n                            </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"person-table__row person-table__row--medium\">\r\n                                <div class=\"person-table-row__title\">Место рождения</div>\r\n                                <div class=\"person-table-row__info\">\r\n                                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"birthPlace") || (depth0 != null ? lookupProperty(depth0,"birthPlace") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"birthPlace","hash":{},"data":data,"loc":{"start":{"line":60,"column":36},"end":{"line":60,"column":52}}}) : helper)))
    + "\r\n                                </div>\r\n                            </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + ((stack1 = (lookupProperty(helpers,"stringItems")||(depth0 && lookupProperty(depth0,"stringItems"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"genres") : depth0),"name",{"name":"stringItems","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":49},"end":{"line":69,"column":95}}})) != null ? stack1 : "")
    + " ";
},"10":function(container,depth0,helpers,partials,data) {
    return "";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":71,"column":40},"end":{"line":71,"column":50}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"last")),{"name":"unless","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":50},"end":{"line":71,"column":80}}})) != null ? stack1 : "")
    + "\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return ", ";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":80,"column":40},"end":{"line":80,"column":51}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"last")),{"name":"unless","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":80,"column":51},"end":{"line":80,"column":81}}})) != null ? stack1 : "")
    + "\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <li class=\"person-panel-films-item\">\r\n                                        <a href=\"/films/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":93,"column":56},"end":{"line":93,"column":64}}}) : helper)))
    + "\" class=\"person-panel-films-item__link\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":93,"column":104},"end":{"line":93,"column":115}}}) : helper)))
    + "</a>\r\n                                    </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "<article class=\"person\">\r\n    <div class=\"person-container\">\r\n        <div class=\"person__column person__column--left\">\r\n            <div class=\"person-column-left__container\">\r\n                <div class=\"person-column-left-container__items\">\r\n                    <div class=\"person__photo\">\r\n                        <a class=\"person-photo__link\">\r\n                            <img class=\"person-photo__image\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"avatarURL") || (depth0 != null ? lookupProperty(depth0,"avatarURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatarURL","hash":{},"data":data,"loc":{"start":{"line":8,"column":66},"end":{"line":8,"column":81}}}) : helper)))
    + "\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"person__delimiter\"></div>\r\n\r\n        <div class=\"person__column person__column--right\">\r\n            <div class=\"person-column-right__container\">\r\n                <div class=\"person-column-right-container__items\">\r\n                    <div class=\"person__header\">\r\n                        <div class=\"person-header-container\">\r\n                            <h1 class=\"person-header__ru-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":22,"column":63},"end":{"line":22,"column":73}}}) : helper)))
    + "</h1>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"person__table\">\r\n                        <h3 class=\"person-table__title\">О персоне</h3>\r\n                        <div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"age") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":28},"end":{"line":36,"column":35}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"growth") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":28},"end":{"line":45,"column":35}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"gender") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":28},"end":{"line":54,"column":35}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"birthPlace") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":28},"end":{"line":63,"column":35}}})) != null ? stack1 : "")
    + "\r\n\r\n                            <div class=\"person-table__row person-table__row--medium\">\r\n                                <div class=\"person-table-row__title\">Жанры</div>\r\n                                <div class=\"person-table-row__info\">\r\n                                    ";
  stack1 = ((helper = (helper = lookupProperty(helpers,"comment") || (depth0 != null ? lookupProperty(depth0,"comment") : depth0)) != null ? helper : alias2),(options={"name":"comment","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":36},"end":{"line":69,"column":108}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"comment")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"genres") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":36},"end":{"line":72,"column":45}}})) != null ? stack1 : "")
    + "                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"person-table__row person-table__row--medium\">\r\n                                <div class=\"person-table-row__title\">Роли</div>\r\n                                <div class=\"person-table-row__info\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"roles") : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":79,"column":36},"end":{"line":81,"column":45}}})) != null ? stack1 : "")
    + "                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"person__panel\">\r\n                        <div class=\"person-panel__films\">\r\n                            <h3 class=\"person-panel-films__title\">Лучшие фильмы</h3>\r\n                            <ul class=\"person-panel-films__items\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"participatedIn") : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":91,"column":32},"end":{"line":95,"column":41}}})) != null ? stack1 : "")
    + "                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</article>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/PlayerView/PlayerView.hbs":
/*!*************************************************!*\
  !*** ./src/App/Views/PlayerView/PlayerView.hbs ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!--<div class=\"wrapper\">-->\r\n<!--    <div class=\"player\">-->\r\n<!--        <video class=\"video\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"videoURL") || (depth0 != null ? lookupProperty(depth0,"videoURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"videoURL","hash":{},"data":data,"loc":{"start":{"line":3,"column":38},"end":{"line":3,"column":52}}}) : helper)))
    + "\"></video>-->\r\n<!--        <div class=\"controls\">-->\r\n<!--            <div class=\"controls__play\" data-action=\"play\">-->\r\n<!--                <img src=\"/img/icons/play.svg\" class=\"play__btn\">-->\r\n<!--            </div>-->\r\n<!--            <div class=\"controls__stop\" data-action=\"stop\">-->\r\n<!--                <img src=\"/img/icons/stop.svg\" class=\"stop__btn\">-->\r\n<!--            </div>-->\r\n<!--            <div class=\"controls__progress\" data-action=\"videoScroll\">-->\r\n<!--                <input type=\"range\" class=\"progress\">-->\r\n<!--            </div>-->\r\n<!--            <div class=\"controls__volume\">-->\r\n<!--                <img src=\"/img/icons/volume.svg\" class=\"volume__btn\" data-action=\"volumeScroll\">-->\r\n<!--                <input type=\"range\" class=\"volume__progress\">-->\r\n<!--            </div>-->\r\n<!--            <div class=\"controls__time\">00:00/00:00</div>-->\r\n<!--        </div>-->\r\n<!--    </div>-->\r\n<!--</div>-->\r\n\r\n<div id=\"fullscreen-modal\">\r\n    <div class=\"fullscreen-modal\">\r\n        <div class=\"relative-overflow\">\r\n            <div class=\"relative\">\r\n                <div class=\"relative current-background\">\r\n                    <div id=\"video-controls\" class=\"video relative\">\r\n                        <div class=\"video__storage\">\r\n                            <div class=\"video__background\"></div>\r\n                            <video id=\"video-player\" autoplay playsinline src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"src") || (depth0 != null ? lookupProperty(depth0,"src") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data,"loc":{"start":{"line":31,"column":79},"end":{"line":31,"column":88}}}) : helper)))
    + "\"></video>\r\n                        </div>\r\n\r\n                        <div class=\"video__title-container\">\r\n                            <div class=\"video__title-align\">\r\n                                <div class=\"video__title\">\r\n                                    <div class=\"video-title__text\">Петровы в гриппе</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div>\r\n                            <div class=\"video__close-button\">\r\n                                <!-- Gradient button (upper to) -->\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div>\r\n                            <div class=\"video__bottom-filter\"></div>\r\n                        </div>\r\n\r\n                        <div>\r\n                            <div class=\"video__panel\">\r\n                                <div>\r\n<!--                                    <div class=\"video__bar\">-->\r\n<!--                                        <div class=\"video__bar-padding w-100\">-->\r\n<!--                                            <div class=\"full-bar\"></div>-->\r\n<!--                                            <div class=\"load-bar\">-->\r\n<!--                                                <div class=\"load-bar__progress\"></div>-->\r\n<!--                                            </div>-->\r\n<!--                                            <div class=\"current-bar\"></div>-->\r\n<!--                                            <div>-->\r\n<!--                                                <div class=\"bar-helper\">1.35</div>-->\r\n<!--                                            </div>-->\r\n<!--                                            <div>-->\r\n<!--                                                <button class=\"current-bar-circle\"></button>-->\r\n<!--                                            </div>-->\r\n<!--                                        </div>-->\r\n<!--                                    </div>-->\r\n                                </div>\r\n                                <div class=\"video__bottom-container\">\r\n                                    <div class=\"flex-center\">\r\n                                        <div>\r\n                                            <div class=\"video__play-button\">\r\n                                                <!-- Gradient button (upper to) -->\r\n                                            </div>\r\n                                        </div>\r\n                                        <div>\r\n                                            <div class=\"video__duration-time\">00:06 / 02:37</div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"flex-center\">\r\n                                        <div class=\"ml-5 mr-24\"> <!-- TODO div with title in -->\r\n                                            <div title=\"Воспроизводится в HD качестве\" class=\"video__quality\">\r\n                                                <img src=\"/img/icons/player/hd.svg\" alt=\"Воспроизводится в HD качестве\">\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"mr-24\">\r\n                                            <div class=\"flex-center\">\r\n                                                <div class=\"video__icon\"> <!-- TODO div with title in -->\r\n                                                    <div title=\"Выключить / Включить звук\" class=\"video__icon-fill\">\r\n                                                        <img src=\"/img/icons/player/volume-up.svg\" alt=\"Выключить / Включить звук\">\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <div class=\"video__bar-padding video__volume-bar\">\r\n                                                    <div class=\"full-bar\"></div>\r\n                                                    <div class=\"load-bar\"></div>\r\n                                                    <div class=\"current-bar\"></div>\r\n                                                    <div>\r\n                                                        <div class=\"bar-helper\">46%</div>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <button class=\"current-bar-circle\"></button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div>\r\n                                            <div class=\"video__icon\">\r\n                                                <div title=\"Во весь экран\" class=\"video__icon-fill\">\r\n                                                    <img src=\"/img/icons/player/fullscreen.svg\" alt=\"Во весь экран\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/SettingsView/SettingsView.hbs":
/*!*****************************************************!*\
  !*** ./src/App/Views/SettingsView/SettingsView.hbs ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<main class=\"settings-container\">\r\n    <div class=\"settings\">\r\n        <h1 class=\"settings__title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":36},"end":{"line":3,"column":47}}}) : helper)))
    + "</h1>\r\n        <div class=\"settings__content\">\r\n            <div class=\"settings__left-menu-container js-settings__left-menu-container\">\r\n\r\n            </div>\r\n\r\n            <div class=\"settings__right\">\r\n                <div class=\"settings__form js-settings__form\">\r\n                    <!-- This is the same as in signIn and SignUp -->\r\n                    <!-- TODO: move two field in form and add classes for it -->\r\n\r\n                    <h2 class=\"settings-form__title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"formTitle") || (depth0 != null ? lookupProperty(depth0,"formTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"formTitle","hash":{},"data":data,"loc":{"start":{"line":14,"column":53},"end":{"line":14,"column":68}}}) : helper)))
    + "</h2>\r\n                    <p class=\"settings-form__description\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":15,"column":59},"end":{"line":15,"column":76}}}) : helper)))
    + "</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</main>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/SignInView/SignInView.hbs":
/*!*************************************************!*\
  !*** ./src/App/Views/SignInView/SignInView.hbs ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " <h3 class=\"signIn__title\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":2,"column":44},"end":{"line":2,"column":55}}}) : helper)))
    + "</h3> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " <p class=\"signIn__description\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":3,"column":55},"end":{"line":3,"column":72}}}) : helper)))
    + "</p> ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"signIn js-signIn\">\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":68}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":84}}})) != null ? stack1 : "")
    + "\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/SignUpView/SignUpView.hbs":
/*!*************************************************!*\
  !*** ./src/App/Views/SignUpView/SignUpView.hbs ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " <h3 class=\"signUp__title\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":2,"column":44},"end":{"line":2,"column":55}}}) : helper)))
    + "</h3> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " <p class=\"signUp__description\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":3,"column":55},"end":{"line":3,"column":72}}}) : helper)))
    + "</p> ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"signUp js-signUp\">\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":68}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":84}}})) != null ? stack1 : "")
    + "\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars.runtime.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars.runtime.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = __webpack_require__(/*! ./handlebars/base */ "./node_modules/handlebars/dist/cjs/handlebars/base.js");

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = __webpack_require__(/*! ./handlebars/safe-string */ "./node_modules/handlebars/dist/cjs/handlebars/safe-string.js");

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = __webpack_require__(/*! ./handlebars/exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = __webpack_require__(/*! ./handlebars/utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = __webpack_require__(/*! ./handlebars/runtime */ "./node_modules/handlebars/dist/cjs/handlebars/runtime.js");

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = __webpack_require__(/*! ./handlebars/no-conflict */ "./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js");

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports["default"] = inst;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLnJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OEJBQXNCLG1CQUFtQjs7SUFBN0IsSUFBSTs7Ozs7b0NBSU8sMEJBQTBCOzs7O21DQUMzQix3QkFBd0I7Ozs7K0JBQ3ZCLG9CQUFvQjs7SUFBL0IsS0FBSzs7aUNBQ1Esc0JBQXNCOztJQUFuQyxPQUFPOztvQ0FFSSwwQkFBMEI7Ozs7O0FBR2pELFNBQVMsTUFBTSxHQUFHO0FBQ2hCLE1BQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0FBRTFDLE9BQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxVQUFVLG9DQUFhLENBQUM7QUFDM0IsSUFBRSxDQUFDLFNBQVMsbUNBQVksQ0FBQztBQUN6QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxJQUFFLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNoQixJQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNCLFdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDbkMsQ0FBQzs7QUFFRixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixrQ0FBVyxJQUFJLENBQUMsQ0FBQzs7QUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7cUJBRVIsSUFBSSIsImZpbGUiOiJoYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vaGFuZGxlYmFycy9iYXNlJztcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbmltcG9ydCBTYWZlU3RyaW5nIGZyb20gJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vaGFuZGxlYmFycy9leGNlcHRpb24nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9oYW5kbGViYXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi9oYW5kbGViYXJzL3J1bnRpbWUnO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG5sZXQgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbm5vQ29uZmxpY3QoaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3Q7XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/base.js":
/*!*************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/base.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var _exception = __webpack_require__(/*! ./exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/handlebars/dist/cjs/handlebars/helpers.js");

var _decorators = __webpack_require__(/*! ./decorators */ "./node_modules/handlebars/dist/cjs/handlebars/decorators.js");

var _logger = __webpack_require__(/*! ./logger */ "./node_modules/handlebars/dist/cjs/handlebars/logger.js");

var _logger2 = _interopRequireDefault(_logger);

var _internalProtoAccess = __webpack_require__(/*! ./internal/proto-access */ "./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js");

var VERSION = '4.7.7';
exports.VERSION = VERSION;
var COMPILER_REVISION = 8;
exports.COMPILER_REVISION = COMPILER_REVISION;
var LAST_COMPATIBLE_COMPILER_REVISION = 7;

exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0 <4.3.0',
  8: '>= 4.3.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  },
  /**
   * Reset the memory of illegal property accesses that have already been logged.
   * @deprecated should only be used in handlebars test-cases
   */
  resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
    _internalProtoAccess.resetLoggedProperties();
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBQThDLFNBQVM7O3lCQUNqQyxhQUFhOzs7O3VCQUNJLFdBQVc7OzBCQUNSLGNBQWM7O3NCQUNyQyxVQUFVOzs7O21DQUNTLHlCQUF5Qjs7QUFFeEQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDOztBQUN4QixJQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQzs7QUFDNUIsSUFBTSxpQ0FBaUMsR0FBRyxDQUFDLENBQUM7OztBQUU1QyxJQUFNLGdCQUFnQixHQUFHO0FBQzlCLEdBQUMsRUFBRSxhQUFhO0FBQ2hCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxVQUFVO0FBQ2IsR0FBQyxFQUFFLGtCQUFrQjtBQUNyQixHQUFDLEVBQUUsaUJBQWlCO0FBQ3BCLEdBQUMsRUFBRSxpQkFBaUI7QUFDcEIsR0FBQyxFQUFFLFVBQVU7Q0FDZCxDQUFDOzs7QUFFRixJQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQzs7QUFFOUIsU0FBUyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTtBQUNuRSxNQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDN0IsTUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksRUFBRSxDQUFDO0FBQy9CLE1BQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxJQUFJLEVBQUUsQ0FBQzs7QUFFbkMsa0NBQXVCLElBQUksQ0FBQyxDQUFDO0FBQzdCLHdDQUEwQixJQUFJLENBQUMsQ0FBQztDQUNqQzs7QUFFRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUc7QUFDaEMsYUFBVyxFQUFFLHFCQUFxQjs7QUFFbEMsUUFBTSxxQkFBUTtBQUNkLEtBQUcsRUFBRSxvQkFBTyxHQUFHOztBQUVmLGdCQUFjLEVBQUUsd0JBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNqQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFDTixjQUFNLDJCQUFjLHlDQUF5QyxDQUFDLENBQUM7T0FDaEU7QUFDRCxvQkFBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzVCLE1BQU07QUFDTCxVQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUN6QjtHQUNGO0FBQ0Qsa0JBQWdCLEVBQUUsMEJBQVMsSUFBSSxFQUFFO0FBQy9CLFdBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUMzQjs7QUFFRCxpQkFBZSxFQUFFLHlCQUFTLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDdkMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLG9CQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDN0IsTUFBTTtBQUNMLFVBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFO0FBQ2xDLGNBQU0seUVBQ3dDLElBQUksb0JBQ2pELENBQUM7T0FDSDtBQUNELFVBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQy9CO0dBQ0Y7QUFDRCxtQkFBaUIsRUFBRSwyQkFBUyxJQUFJLEVBQUU7QUFDaEMsV0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQzVCOztBQUVELG1CQUFpQixFQUFFLDJCQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDcEMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxFQUFFO0FBQ04sY0FBTSwyQkFBYyw0Q0FBNEMsQ0FBQyxDQUFDO09BQ25FO0FBQ0Qsb0JBQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUMvQixNQUFNO0FBQ0wsVUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDNUI7R0FDRjtBQUNELHFCQUFtQixFQUFFLDZCQUFTLElBQUksRUFBRTtBQUNsQyxXQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDOUI7Ozs7O0FBS0QsNkJBQTJCLEVBQUEsdUNBQUc7QUFDNUIsZ0RBQXVCLENBQUM7R0FDekI7Q0FDRixDQUFDOztBQUVLLElBQUksR0FBRyxHQUFHLG9CQUFPLEdBQUcsQ0FBQzs7O1FBRW5CLFdBQVc7UUFBRSxNQUFNIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVGcmFtZSwgZXh0ZW5kLCB0b1N0cmluZyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQgeyByZWdpc3RlckRlZmF1bHRIZWxwZXJzIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMgfSBmcm9tICcuL2RlY29yYXRvcnMnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyByZXNldExvZ2dlZFByb3BlcnRpZXMgfSBmcm9tICcuL2ludGVybmFsL3Byb3RvLWFjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gJzQuNy43JztcbmV4cG9ydCBjb25zdCBDT01QSUxFUl9SRVZJU0lPTiA9IDg7XG5leHBvcnQgY29uc3QgTEFTVF9DT01QQVRJQkxFX0NPTVBJTEVSX1JFVklTSU9OID0gNztcblxuZXhwb3J0IGNvbnN0IFJFVklTSU9OX0NIQU5HRVMgPSB7XG4gIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG4gIDI6ICc9PSAxLjAuMC1yYy4zJyxcbiAgMzogJz09IDEuMC4wLXJjLjQnLFxuICA0OiAnPT0gMS54LngnLFxuICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG4gIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuICA3OiAnPj0gNC4wLjAgPDQuMy4wJyxcbiAgODogJz49IDQuMy4wJ1xufTtcblxuY29uc3Qgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5leHBvcnQgZnVuY3Rpb24gSGFuZGxlYmFyc0Vudmlyb25tZW50KGhlbHBlcnMsIHBhcnRpYWxzLCBkZWNvcmF0b3JzKSB7XG4gIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG4gIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcbiAgdGhpcy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycyB8fCB7fTtcblxuICByZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuICByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xufVxuXG5IYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG4gIGxvZ2dlcjogbG9nZ2VyLFxuICBsb2c6IGxvZ2dlci5sb2csXG5cbiAgcmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTtcbiAgICAgIH1cbiAgICAgIGV4dGVuZCh0aGlzLmhlbHBlcnMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlbHBlcnNbbmFtZV0gPSBmbjtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5oZWxwZXJzW25hbWVdO1xuICB9LFxuXG4gIHJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24obmFtZSwgcGFydGlhbCkge1xuICAgIGlmICh0b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBleHRlbmQodGhpcy5wYXJ0aWFscywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgcGFydGlhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcbiAgICAgICAgICBgQXR0ZW1wdGluZyB0byByZWdpc3RlciBhIHBhcnRpYWwgY2FsbGVkIFwiJHtuYW1lfVwiIGFzIHVuZGVmaW5lZGBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpO1xuICAgICAgfVxuICAgICAgZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XG4gIH0sXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgbWVtb3J5IG9mIGlsbGVnYWwgcHJvcGVydHkgYWNjZXNzZXMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBsb2dnZWQuXG4gICAqIEBkZXByZWNhdGVkIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gaGFuZGxlYmFycyB0ZXN0LWNhc2VzXG4gICAqL1xuICByZXNldExvZ2dlZFByb3BlcnR5QWNjZXNzZXMoKSB7XG4gICAgcmVzZXRMb2dnZWRQcm9wZXJ0aWVzKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBsZXQgbG9nID0gbG9nZ2VyLmxvZztcblxuZXhwb3J0IHsgY3JlYXRlRnJhbWUsIGxvZ2dlciB9O1xuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/decorators.js":
/*!*******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/decorators.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = __webpack_require__(/*! ./decorators/inline */ "./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js");

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Z0NBQTJCLHFCQUFxQjs7OztBQUV6QyxTQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUNsRCxnQ0FBZSxRQUFRLENBQUMsQ0FBQztDQUMxQiIsImZpbGUiOiJkZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js":
/*!**************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js ***!
  \**************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

exports["default"] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQXVCLFVBQVU7O3FCQUVsQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLFFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25CLFdBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFNBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRS9CLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlCQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM5QixlQUFPLEdBQUcsQ0FBQztPQUNaLENBQUM7S0FDSDs7QUFFRCxTQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUU3QyxXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJEZWNvcmF0b3IoJ2lubGluZScsIGZ1bmN0aW9uKGZuLCBwcm9wcywgY29udGFpbmVyLCBvcHRpb25zKSB7XG4gICAgbGV0IHJldCA9IGZuO1xuICAgIGlmICghcHJvcHMucGFydGlhbHMpIHtcbiAgICAgIHByb3BzLnBhcnRpYWxzID0ge307XG4gICAgICByZXQgPSBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwYXJ0aWFscyBzdGFjayBmcmFtZSBwcmlvciB0byBleGVjLlxuICAgICAgICBsZXQgb3JpZ2luYWwgPSBjb250YWluZXIucGFydGlhbHM7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGV4dGVuZCh7fSwgb3JpZ2luYWwsIHByb3BzLnBhcnRpYWxzKTtcbiAgICAgICAgbGV0IHJldCA9IGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcmlnaW5hbDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvcHMucGFydGlhbHNbb3B0aW9ucy5hcmdzWzBdXSA9IG9wdGlvbnMuZm47XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/exception.js":
/*!******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/exception.js ***!
  \******************************************************************/
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
var errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      endLineNumber = undefined,
      column = undefined,
      endColumn = undefined;

  if (loc) {
    line = loc.start.line;
    endLineNumber = loc.end.line;
    column = loc.start.column;
    endColumn = loc.end.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  try {
    if (loc) {
      this.lineNumber = line;
      this.endLineNumber = endLineNumber;

      // Work around issue under safari where we can't directly set the column value
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(this, 'column', {
          value: column,
          enumerable: true
        });
        Object.defineProperty(this, 'endColumn', {
          value: endColumn,
          enumerable: true
        });
      } else {
        this.column = column;
        this.endColumn = endColumn;
      }
    }
  } catch (nop) {
    /* Ignore if the browser is very particular */
  }
}

Exception.prototype = new Error();

exports["default"] = Exception;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNLFVBQVUsR0FBRyxDQUNqQixhQUFhLEVBQ2IsVUFBVSxFQUNWLFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsT0FBTyxDQUNSLENBQUM7O0FBRUYsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxNQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7TUFDeEIsSUFBSSxZQUFBO01BQ0osYUFBYSxZQUFBO01BQ2IsTUFBTSxZQUFBO01BQ04sU0FBUyxZQUFBLENBQUM7O0FBRVosTUFBSSxHQUFHLEVBQUU7QUFDUCxRQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDdEIsaUJBQWEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztBQUM3QixVQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDMUIsYUFBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDOztBQUUzQixXQUFPLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO0dBQ3hDOztBQUVELE1BQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7OztBQUcxRCxPQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUNoRCxRQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0dBQzlDOzs7QUFHRCxNQUFJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtBQUMzQixTQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0dBQzFDOztBQUVELE1BQUk7QUFDRixRQUFJLEdBQUcsRUFBRTtBQUNQLFVBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDOzs7O0FBSW5DLFVBQUksTUFBTSxDQUFDLGNBQWMsRUFBRTtBQUN6QixjQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDcEMsZUFBSyxFQUFFLE1BQU07QUFDYixvQkFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0FBQ0gsY0FBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3ZDLGVBQUssRUFBRSxTQUFTO0FBQ2hCLG9CQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7T0FDSixNQUFNO0FBQ0wsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7T0FDNUI7S0FDRjtHQUNGLENBQUMsT0FBTyxHQUFHLEVBQUU7O0dBRWI7Q0FDRjs7QUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7O3FCQUVuQixTQUFTIiwiZmlsZSI6ImV4Y2VwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVycm9yUHJvcHMgPSBbXG4gICdkZXNjcmlwdGlvbicsXG4gICdmaWxlTmFtZScsXG4gICdsaW5lTnVtYmVyJyxcbiAgJ2VuZExpbmVOdW1iZXInLFxuICAnbWVzc2FnZScsXG4gICduYW1lJyxcbiAgJ251bWJlcicsXG4gICdzdGFjaydcbl07XG5cbmZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlLCBub2RlKSB7XG4gIGxldCBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuICAgIGxpbmUsXG4gICAgZW5kTGluZU51bWJlcixcbiAgICBjb2x1bW4sXG4gICAgZW5kQ29sdW1uO1xuXG4gIGlmIChsb2MpIHtcbiAgICBsaW5lID0gbG9jLnN0YXJ0LmxpbmU7XG4gICAgZW5kTGluZU51bWJlciA9IGxvYy5lbmQubGluZTtcbiAgICBjb2x1bW4gPSBsb2Muc3RhcnQuY29sdW1uO1xuICAgIGVuZENvbHVtbiA9IGxvYy5lbmQuY29sdW1uO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBjb2x1bW47XG4gIH1cblxuICBsZXQgdG1wID0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgLy8gVW5mb3J0dW5hdGVseSBlcnJvcnMgYXJlIG5vdCBlbnVtZXJhYmxlIGluIENocm9tZSAoYXQgbGVhc3QpLCBzbyBgZm9yIHByb3AgaW4gdG1wYCBkb2Vzbid0IHdvcmsuXG4gIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuICAgIHRoaXNbZXJyb3JQcm9wc1tpZHhdXSA9IHRtcFtlcnJvclByb3BzW2lkeF1dO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXhjZXB0aW9uKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGxvYykge1xuICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcbiAgICAgIHRoaXMuZW5kTGluZU51bWJlciA9IGVuZExpbmVOdW1iZXI7XG5cbiAgICAgIC8vIFdvcmsgYXJvdW5kIGlzc3VlIHVuZGVyIHNhZmFyaSB3aGVyZSB3ZSBjYW4ndCBkaXJlY3RseSBzZXQgdGhlIGNvbHVtbiB2YWx1ZVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjb2x1bW4nLCB7XG4gICAgICAgICAgdmFsdWU6IGNvbHVtbixcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2VuZENvbHVtbicsIHtcbiAgICAgICAgICB2YWx1ZTogZW5kQ29sdW1uLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgICAgdGhpcy5lbmRDb2x1bW4gPSBlbmRDb2x1bW47XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChub3ApIHtcbiAgICAvKiBJZ25vcmUgaWYgdGhlIGJyb3dzZXIgaXMgdmVyeSBwYXJ0aWN1bGFyICovXG4gIH1cbn1cblxuRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5leHBvcnQgZGVmYXVsdCBFeGNlcHRpb247XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
exports.moveHelperToHooks = moveHelperToHooks;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = __webpack_require__(/*! ./helpers/block-helper-missing */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js");

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = __webpack_require__(/*! ./helpers/each */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js");

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = __webpack_require__(/*! ./helpers/helper-missing */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js");

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = __webpack_require__(/*! ./helpers/if */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js");

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = __webpack_require__(/*! ./helpers/log */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js");

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = __webpack_require__(/*! ./helpers/lookup */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js");

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = __webpack_require__(/*! ./helpers/with */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js");

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}

function moveHelperToHooks(instance, helperName, keepHelper) {
  if (instance.helpers[helperName]) {
    instance.hooks[helperName] = instance.helpers[helperName];
    if (!keepHelper) {
      delete instance.helpers[helperName];
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3lDQUF1QyxnQ0FBZ0M7Ozs7MkJBQzlDLGdCQUFnQjs7OztvQ0FDUCwwQkFBMEI7Ozs7eUJBQ3JDLGNBQWM7Ozs7MEJBQ2IsZUFBZTs7Ozs2QkFDWixrQkFBa0I7Ozs7MkJBQ3BCLGdCQUFnQjs7OztBQUVsQyxTQUFTLHNCQUFzQixDQUFDLFFBQVEsRUFBRTtBQUMvQyx5Q0FBMkIsUUFBUSxDQUFDLENBQUM7QUFDckMsMkJBQWEsUUFBUSxDQUFDLENBQUM7QUFDdkIsb0NBQXNCLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLHlCQUFXLFFBQVEsQ0FBQyxDQUFDO0FBQ3JCLDBCQUFZLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLDZCQUFlLFFBQVEsQ0FBQyxDQUFDO0FBQ3pCLDJCQUFhLFFBQVEsQ0FBQyxDQUFDO0NBQ3hCOztBQUVNLFNBQVMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUU7QUFDbEUsTUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ2hDLFlBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMxRCxRQUFJLENBQUMsVUFBVSxFQUFFO0FBQ2YsYUFBTyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3JDO0dBQ0Y7Q0FDRiIsImZpbGUiOiJoZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9ibG9jay1oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJFYWNoIGZyb20gJy4vaGVscGVycy9lYWNoJztcbmltcG9ydCByZWdpc3RlckhlbHBlck1pc3NpbmcgZnJvbSAnLi9oZWxwZXJzL2hlbHBlci1taXNzaW5nJztcbmltcG9ydCByZWdpc3RlcklmIGZyb20gJy4vaGVscGVycy9pZic7XG5pbXBvcnQgcmVnaXN0ZXJMb2cgZnJvbSAnLi9oZWxwZXJzL2xvZyc7XG5pbXBvcnQgcmVnaXN0ZXJMb29rdXAgZnJvbSAnLi9oZWxwZXJzL2xvb2t1cCc7XG5pbXBvcnQgcmVnaXN0ZXJXaXRoIGZyb20gJy4vaGVscGVycy93aXRoJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMoaW5zdGFuY2UpIHtcbiAgcmVnaXN0ZXJCbG9ja0hlbHBlck1pc3NpbmcoaW5zdGFuY2UpO1xuICByZWdpc3RlckVhY2goaW5zdGFuY2UpO1xuICByZWdpc3RlckhlbHBlck1pc3NpbmcoaW5zdGFuY2UpO1xuICByZWdpc3RlcklmKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb2coaW5zdGFuY2UpO1xuICByZWdpc3Rlckxvb2t1cChpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyV2l0aChpbnN0YW5jZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlSGVscGVyVG9Ib29rcyhpbnN0YW5jZSwgaGVscGVyTmFtZSwga2VlcEhlbHBlcikge1xuICBpZiAoaW5zdGFuY2UuaGVscGVyc1toZWxwZXJOYW1lXSkge1xuICAgIGluc3RhbmNlLmhvb2tzW2hlbHBlck5hbWVdID0gaW5zdGFuY2UuaGVscGVyc1toZWxwZXJOYW1lXTtcbiAgICBpZiAoIWtlZXBIZWxwZXIpIHtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5oZWxwZXJzW2hlbHBlck5hbWVdO1xuICAgIH1cbiAgfVxufVxuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

exports["default"] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBd0QsVUFBVTs7cUJBRW5ELFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQzNCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVsQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLFlBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGlCQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOztBQUVELGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLElBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQ2IsQ0FBQztBQUNGLGVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztPQUMxQjs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJibG9jay1oZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcGVuZENvbnRleHRQYXRoLCBjcmVhdGVGcmFtZSwgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2Jsb2NrSGVscGVyTWlzc2luZycsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBsZXQgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGxldCBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCxcbiAgICAgICAgICBvcHRpb25zLm5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgb3B0aW9ucyA9IHsgZGF0YTogZGF0YSB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js":
/*!*********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var _exception = __webpack_require__(/*! ../exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

exports["default"] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else if (__webpack_require__.g.Symbol && context[__webpack_require__.g.Symbol.iterator]) {
        var newContext = [];
        var iterator = context[__webpack_require__.g.Symbol.iterator]();
        for (var it = iterator.next(); !it.done; it = iterator.next()) {
          newContext.push(it.value);
        }
        context = newContext;
        for (var j = context.length; i < j; i++) {
          execIteration(i, i, i === context.length - 1);
        }
      } else {
        (function () {
          var priorKey = undefined;

          Object.keys(context).forEach(function (key) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          });
          if (priorKey !== undefined) {
            execIteration(priorKey, i - 1, true);
          }
        })();
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQU1PLFVBQVU7O3lCQUNLLGNBQWM7Ozs7cUJBRXJCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVMsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN6RCxRQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1osWUFBTSwyQkFBYyw2QkFBNkIsQ0FBQyxDQUFDO0tBQ3BEOztBQUVELFFBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTztRQUN6QixDQUFDLEdBQUcsQ0FBQztRQUNMLEdBQUcsR0FBRyxFQUFFO1FBQ1IsSUFBSSxZQUFBO1FBQ0osV0FBVyxZQUFBLENBQUM7O0FBRWQsUUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFDL0IsaUJBQVcsR0FDVCx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUNyRTs7QUFFRCxRQUFJLGtCQUFXLE9BQU8sQ0FBQyxFQUFFO0FBQ3ZCLGFBQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCOztBQUVELFFBQUksT0FBTyxDQUFDLElBQUksRUFBRTtBQUNoQixVQUFJLEdBQUcsbUJBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDOztBQUVELGFBQVMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0FBQ3pDLFVBQUksSUFBSSxFQUFFO0FBQ1IsWUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDakIsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLFlBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzs7QUFFbkIsWUFBSSxXQUFXLEVBQUU7QUFDZixjQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDeEM7T0FDRjs7QUFFRCxTQUFHLEdBQ0QsR0FBRyxHQUNILEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDakIsWUFBSSxFQUFFLElBQUk7QUFDVixtQkFBVyxFQUFFLG1CQUNYLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUN2QixDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQzVCO09BQ0YsQ0FBQyxDQUFDO0tBQ047O0FBRUQsUUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQzFDLFVBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxjQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDaEIseUJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1NBQ0Y7T0FDRixNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUMzRCxZQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDdEIsWUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUNuRCxhQUFLLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRTtBQUM3RCxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7QUFDRCxlQUFPLEdBQUcsVUFBVSxDQUFDO0FBQ3JCLGFBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZDLHVCQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMvQztPQUNGLE1BQU07O0FBQ0wsY0FBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixnQkFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLEVBQUk7Ozs7QUFJbEMsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQiwyQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxvQkFBUSxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUMsRUFBRSxDQUFDO1dBQ0wsQ0FBQyxDQUFDO0FBQ0gsY0FBSSxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQzFCLHlCQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7V0FDdEM7O09BQ0Y7S0FDRjs7QUFFRCxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxTQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFwcGVuZENvbnRleHRQYXRoLFxuICBibG9ja1BhcmFtcyxcbiAgY3JlYXRlRnJhbWUsXG4gIGlzQXJyYXksXG4gIGlzRnVuY3Rpb25cbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm4sXG4gICAgICBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgaSA9IDAsXG4gICAgICByZXQgPSAnJyxcbiAgICAgIGRhdGEsXG4gICAgICBjb250ZXh0UGF0aDtcblxuICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgIGNvbnRleHRQYXRoID1cbiAgICAgICAgYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSkgKyAnLic7XG4gICAgfVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZGF0YSkge1xuICAgICAgZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhlY0l0ZXJhdGlvbihmaWVsZCwgaW5kZXgsIGxhc3QpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRhdGEua2V5ID0gZmllbGQ7XG4gICAgICAgIGRhdGEuaW5kZXggPSBpbmRleDtcbiAgICAgICAgZGF0YS5maXJzdCA9IGluZGV4ID09PSAwO1xuICAgICAgICBkYXRhLmxhc3QgPSAhIWxhc3Q7XG5cbiAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG4gICAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoICsgZmllbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0ID1cbiAgICAgICAgcmV0ICtcbiAgICAgICAgZm4oY29udGV4dFtmaWVsZF0sIHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhcbiAgICAgICAgICAgIFtjb250ZXh0W2ZpZWxkXSwgZmllbGRdLFxuICAgICAgICAgICAgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdXG4gICAgICAgICAgKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dCAmJiB0eXBlb2YgY29udGV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChpc0FycmF5KGNvbnRleHQpKSB7XG4gICAgICAgIGZvciAobGV0IGogPSBjb250ZXh0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgIGlmIChpIGluIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24oaSwgaSwgaSA9PT0gY29udGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ2xvYmFsLlN5bWJvbCAmJiBjb250ZXh0W2dsb2JhbC5TeW1ib2wuaXRlcmF0b3JdKSB7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRleHQgPSBbXTtcbiAgICAgICAgY29uc3QgaXRlcmF0b3IgPSBjb250ZXh0W2dsb2JhbC5TeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIGZvciAobGV0IGl0ID0gaXRlcmF0b3IubmV4dCgpOyAhaXQuZG9uZTsgaXQgPSBpdGVyYXRvci5uZXh0KCkpIHtcbiAgICAgICAgICBuZXdDb250ZXh0LnB1c2goaXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQgPSBuZXdDb250ZXh0O1xuICAgICAgICBmb3IgKGxldCBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcmlvcktleTtcblxuICAgICAgICBPYmplY3Qua2V5cyhjb250ZXh0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgLy8gV2UncmUgcnVubmluZyB0aGUgaXRlcmF0aW9ucyBvbmUgc3RlcCBvdXQgb2Ygc3luYyBzbyB3ZSBjYW4gZGV0ZWN0XG4gICAgICAgICAgLy8gdGhlIGxhc3QgaXRlcmF0aW9uIHdpdGhvdXQgaGF2ZSB0byBzY2FuIHRoZSBvYmplY3QgdHdpY2UgYW5kIGNyZWF0ZVxuICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJpb3JLZXkgPSBrZXk7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js ***!
  \*******************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = __webpack_require__(/*! ../exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

exports["default"] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsaUNBQWdDO0FBQ3ZFLFFBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTFCLGFBQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07O0FBRUwsWUFBTSwyQkFDSixtQkFBbUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUNqRSxDQUFDO0tBQ0g7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJoZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXG4gICAgICAgICdNaXNzaW5nIGhlbHBlcjogXCInICsgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXS5uYW1lICsgJ1wiJ1xuICAgICAgKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js":
/*!*******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js ***!
  \*******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var _exception = __webpack_require__(/*! ../exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

exports["default"] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#if requires exactly one argument');
    }
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#unless requires exactly one argument');
    }
    return instance.helpers['if'].call(this, conditional, {
      fn: options.inverse,
      inverse: options.fn,
      hash: options.hash
    });
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztxQkFBb0MsVUFBVTs7eUJBQ3hCLGNBQWM7Ozs7cUJBRXJCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxRQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ3pCLFlBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztLQUMxRDtBQUNELFFBQUksa0JBQVcsV0FBVyxDQUFDLEVBQUU7QUFDM0IsaUJBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RDOzs7OztBQUtELFFBQUksQUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxJQUFLLGVBQVEsV0FBVyxDQUFDLEVBQUU7QUFDdkUsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQy9ELFFBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7QUFDekIsWUFBTSwyQkFBYyx1Q0FBdUMsQ0FBQyxDQUFDO0tBQzlEO0FBQ0QsV0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3BELFFBQUUsRUFBRSxPQUFPLENBQUMsT0FBTztBQUNuQixhQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUU7QUFDbkIsVUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO0tBQ25CLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNFbXB0eSwgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2lmJywgZnVuY3Rpb24oY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCcjaWYgcmVxdWlyZXMgZXhhY3RseSBvbmUgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKGlzRnVuY3Rpb24oY29uZGl0aW9uYWwpKSB7XG4gICAgICBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBiZWhhdmlvciBpcyB0byByZW5kZXIgdGhlIHBvc2l0aXZlIHBhdGggaWYgdGhlIHZhbHVlIGlzIHRydXRoeSBhbmQgbm90IGVtcHR5LlxuICAgIC8vIFRoZSBgaW5jbHVkZVplcm9gIG9wdGlvbiBtYXkgYmUgc2V0IHRvIHRyZWF0IHRoZSBjb25kdGlvbmFsIGFzIHB1cmVseSBub3QgZW1wdHkgYmFzZWQgb24gdGhlXG4gICAgLy8gYmVoYXZpb3Igb2YgaXNFbXB0eS4gRWZmZWN0aXZlbHkgdGhpcyBkZXRlcm1pbmVzIGlmIDAgaXMgaGFuZGxlZCBieSB0aGUgcG9zaXRpdmUgcGF0aCBvciBuZWdhdGl2ZS5cbiAgICBpZiAoKCFvcHRpb25zLmhhc2guaW5jbHVkZVplcm8gJiYgIWNvbmRpdGlvbmFsKSB8fCBpc0VtcHR5KGNvbmRpdGlvbmFsKSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XG4gICAgfVxuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcigndW5sZXNzJywgZnVuY3Rpb24oY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCcjdW5sZXNzIHJlcXVpcmVzIGV4YWN0bHkgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzWydpZiddLmNhbGwodGhpcywgY29uZGl0aW9uYWwsIHtcbiAgICAgIGZuOiBvcHRpb25zLmludmVyc2UsXG4gICAgICBpbnZlcnNlOiBvcHRpb25zLmZuLFxuICAgICAgaGFzaDogb3B0aW9ucy5oYXNoXG4gICAgfSk7XG4gIH0pO1xufVxuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js ***!
  \********************************************************************/
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;

exports["default"] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0NBQWlDO0FBQzlELFFBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ3BCLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUM5QixXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO0FBQ3JELFdBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1QjtBQUNELFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFlBQVEsQ0FBQyxHQUFHLE1BQUEsQ0FBWixRQUFRLEVBQVEsSUFBSSxDQUFDLENBQUM7R0FDdkIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi8pIHtcbiAgICBsZXQgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICBsZXQgbGV2ZWwgPSAxO1xuICAgIGlmIChvcHRpb25zLmhhc2gubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmhhc2gubGV2ZWw7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhLmxldmVsICE9IG51bGwpIHtcbiAgICAgIGxldmVsID0gb3B0aW9ucy5kYXRhLmxldmVsO1xuICAgIH1cbiAgICBhcmdzWzBdID0gbGV2ZWw7XG5cbiAgICBpbnN0YW5jZS5sb2coLi4uYXJncyk7XG4gIH0pO1xufVxuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js":
/*!***********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js ***!
  \***********************************************************************/
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;

exports["default"] = function (instance) {
  instance.registerHelper('lookup', function (obj, field, options) {
    if (!obj) {
      // Note for 5.0: Change to "obj == null" in 5.0
      return obj;
    }
    return options.lookupProperty(obj, field);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtBQUM5RCxRQUFJLENBQUMsR0FBRyxFQUFFOztBQUVSLGFBQU8sR0FBRyxDQUFDO0tBQ1o7QUFDRCxXQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQzNDLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6Imxvb2t1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb29rdXAnLCBmdW5jdGlvbihvYmosIGZpZWxkLCBvcHRpb25zKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgIC8vIE5vdGUgZm9yIDUuMDogQ2hhbmdlIHRvIFwib2JqID09IG51bGxcIiBpbiA1LjBcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zLmxvb2t1cFByb3BlcnR5KG9iaiwgZmllbGQpO1xuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js":
/*!*********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var _exception = __webpack_require__(/*! ../exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

exports["default"] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#with requires exactly one argument');
    }
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQU1PLFVBQVU7O3lCQUNLLGNBQWM7Ozs7cUJBRXJCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVMsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN6RCxRQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ3pCLFlBQU0sMkJBQWMscUNBQXFDLENBQUMsQ0FBQztLQUM1RDtBQUNELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFDdkIsYUFBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7O0FBRUQsUUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQzs7QUFFcEIsUUFBSSxDQUFDLGVBQVEsT0FBTyxDQUFDLEVBQUU7QUFDckIsVUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztBQUN4QixVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLEdBQUcsbUJBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLFlBQUksQ0FBQyxXQUFXLEdBQUcseUJBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUNmLENBQUM7T0FDSDs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUU7QUFDakIsWUFBSSxFQUFFLElBQUk7QUFDVixtQkFBVyxFQUFFLG1CQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO09BQ2hFLENBQUMsQ0FBQztLQUNKLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJ3aXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYXBwZW5kQ29udGV4dFBhdGgsXG4gIGJsb2NrUGFyYW1zLFxuICBjcmVhdGVGcmFtZSxcbiAgaXNFbXB0eSxcbiAgaXNGdW5jdGlvblxufSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4uL2V4Y2VwdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd3aXRoJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9IDIpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJyN3aXRoIHJlcXVpcmVzIGV4YWN0bHkgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7XG4gICAgICBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAoIWlzRW1wdHkoY29udGV4dCkpIHtcbiAgICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgICBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCxcbiAgICAgICAgICBvcHRpb25zLmlkc1swXVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm4oY29udGV4dCwge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtczogYmxvY2tQYXJhbXMoW2NvbnRleHRdLCBbZGF0YSAmJiBkYXRhLmNvbnRleHRQYXRoXSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.createNewLookupObject = createNewLookupObject;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

/**
 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
 * The resulting object can be used with "object[property]" to check if a property exists
 * @param {...object} sources a varargs parameter of source objects that will be merged
 * @returns {object}
 */

function createNewLookupObject() {
  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  return _utils.extend.apply(undefined, [Object.create(null)].concat(sources));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2ludGVybmFsL2NyZWF0ZS1uZXctbG9va3VwLW9iamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztxQkFBdUIsVUFBVTs7Ozs7Ozs7O0FBUTFCLFNBQVMscUJBQXFCLEdBQWE7b0NBQVQsT0FBTztBQUFQLFdBQU87OztBQUM5QyxTQUFPLGdDQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQUssT0FBTyxFQUFDLENBQUM7Q0FDaEQiLCJmaWxlIjoiY3JlYXRlLW5ldy1sb29rdXAtb2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCBcIm51bGxcIi1wcm90b3R5cGUgdG8gYXZvaWQgdHJ1dGh5IHJlc3VsdHMgb24gcHJvdG90eXBlIHByb3BlcnRpZXMuXG4gKiBUaGUgcmVzdWx0aW5nIG9iamVjdCBjYW4gYmUgdXNlZCB3aXRoIFwib2JqZWN0W3Byb3BlcnR5XVwiIHRvIGNoZWNrIGlmIGEgcHJvcGVydHkgZXhpc3RzXG4gKiBAcGFyYW0gey4uLm9iamVjdH0gc291cmNlcyBhIHZhcmFyZ3MgcGFyYW1ldGVyIG9mIHNvdXJjZSBvYmplY3RzIHRoYXQgd2lsbCBiZSBtZXJnZWRcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdMb29rdXBPYmplY3QoLi4uc291cmNlcykge1xuICByZXR1cm4gZXh0ZW5kKE9iamVjdC5jcmVhdGUobnVsbCksIC4uLnNvdXJjZXMpO1xufVxuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js":
/*!******************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.createProtoAccessControl = createProtoAccessControl;
exports.resultIsAllowed = resultIsAllowed;
exports.resetLoggedProperties = resetLoggedProperties;
// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _createNewLookupObject = __webpack_require__(/*! ./create-new-lookup-object */ "./node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js");

var _logger = __webpack_require__(/*! ../logger */ "./node_modules/handlebars/dist/cjs/handlebars/logger.js");

var logger = _interopRequireWildcard(_logger);

var loggedProperties = Object.create(null);

function createProtoAccessControl(runtimeOptions) {
  var defaultMethodWhiteList = Object.create(null);
  defaultMethodWhiteList['constructor'] = false;
  defaultMethodWhiteList['__defineGetter__'] = false;
  defaultMethodWhiteList['__defineSetter__'] = false;
  defaultMethodWhiteList['__lookupGetter__'] = false;

  var defaultPropertyWhiteList = Object.create(null);
  // eslint-disable-next-line no-proto
  defaultPropertyWhiteList['__proto__'] = false;

  return {
    properties: {
      whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
      defaultValue: runtimeOptions.allowProtoPropertiesByDefault
    },
    methods: {
      whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
      defaultValue: runtimeOptions.allowProtoMethodsByDefault
    }
  };
}

function resultIsAllowed(result, protoAccessControl, propertyName) {
  if (typeof result === 'function') {
    return checkWhiteList(protoAccessControl.methods, propertyName);
  } else {
    return checkWhiteList(protoAccessControl.properties, propertyName);
  }
}

function checkWhiteList(protoAccessControlForType, propertyName) {
  if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
    return protoAccessControlForType.whitelist[propertyName] === true;
  }
  if (protoAccessControlForType.defaultValue !== undefined) {
    return protoAccessControlForType.defaultValue;
  }
  logUnexpecedPropertyAccessOnce(propertyName);
  return false;
}

function logUnexpecedPropertyAccessOnce(propertyName) {
  if (loggedProperties[propertyName] !== true) {
    loggedProperties[propertyName] = true;
    logger.log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
  }
}

function resetLoggedProperties() {
  Object.keys(loggedProperties).forEach(function (propertyName) {
    delete loggedProperties[propertyName];
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2ludGVybmFsL3Byb3RvLWFjY2Vzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3FDQUFzQyw0QkFBNEI7O3NCQUMxQyxXQUFXOztJQUF2QixNQUFNOztBQUVsQixJQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXRDLFNBQVMsd0JBQXdCLENBQUMsY0FBYyxFQUFFO0FBQ3ZELE1BQUksc0JBQXNCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqRCx3QkFBc0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDOUMsd0JBQXNCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDbkQsd0JBQXNCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDbkQsd0JBQXNCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRW5ELE1BQUksd0JBQXdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFbkQsMEJBQXdCLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDOztBQUU5QyxTQUFPO0FBQ0wsY0FBVSxFQUFFO0FBQ1YsZUFBUyxFQUFFLDZDQUNULHdCQUF3QixFQUN4QixjQUFjLENBQUMsc0JBQXNCLENBQ3RDO0FBQ0Qsa0JBQVksRUFBRSxjQUFjLENBQUMsNkJBQTZCO0tBQzNEO0FBQ0QsV0FBTyxFQUFFO0FBQ1AsZUFBUyxFQUFFLDZDQUNULHNCQUFzQixFQUN0QixjQUFjLENBQUMsbUJBQW1CLENBQ25DO0FBQ0Qsa0JBQVksRUFBRSxjQUFjLENBQUMsMEJBQTBCO0tBQ3hEO0dBQ0YsQ0FBQztDQUNIOztBQUVNLFNBQVMsZUFBZSxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUU7QUFDeEUsTUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUU7QUFDaEMsV0FBTyxjQUFjLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0dBQ2pFLE1BQU07QUFDTCxXQUFPLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7R0FDcEU7Q0FDRjs7QUFFRCxTQUFTLGNBQWMsQ0FBQyx5QkFBeUIsRUFBRSxZQUFZLEVBQUU7QUFDL0QsTUFBSSx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUyxFQUFFO0FBQ25FLFdBQU8seUJBQXlCLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksQ0FBQztHQUNuRTtBQUNELE1BQUkseUJBQXlCLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtBQUN4RCxXQUFPLHlCQUF5QixDQUFDLFlBQVksQ0FBQztHQUMvQztBQUNELGdDQUE4QixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdDLFNBQU8sS0FBSyxDQUFDO0NBQ2Q7O0FBRUQsU0FBUyw4QkFBOEIsQ0FBQyxZQUFZLEVBQUU7QUFDcEQsTUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDM0Msb0JBQWdCLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3RDLFVBQU0sQ0FBQyxHQUFHLENBQ1IsT0FBTyxFQUNQLGlFQUErRCxZQUFZLG9JQUNILG9IQUMyQyxDQUNwSCxDQUFDO0dBQ0g7Q0FDRjs7QUFFTSxTQUFTLHFCQUFxQixHQUFHO0FBQ3RDLFFBQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxZQUFZLEVBQUk7QUFDcEQsV0FBTyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztHQUN2QyxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJwcm90by1hY2Nlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOZXdMb29rdXBPYmplY3QgfSBmcm9tICcuL2NyZWF0ZS1uZXctbG9va3VwLW9iamVjdCc7XG5pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnLi4vbG9nZ2VyJztcblxuY29uc3QgbG9nZ2VkUHJvcGVydGllcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm90b0FjY2Vzc0NvbnRyb2wocnVudGltZU9wdGlvbnMpIHtcbiAgbGV0IGRlZmF1bHRNZXRob2RXaGl0ZUxpc3QgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0Wydjb25zdHJ1Y3RvciddID0gZmFsc2U7XG4gIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3RbJ19fZGVmaW5lR2V0dGVyX18nXSA9IGZhbHNlO1xuICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0WydfX2RlZmluZVNldHRlcl9fJ10gPSBmYWxzZTtcbiAgZGVmYXVsdE1ldGhvZFdoaXRlTGlzdFsnX19sb29rdXBHZXR0ZXJfXyddID0gZmFsc2U7XG5cbiAgbGV0IGRlZmF1bHRQcm9wZXJ0eVdoaXRlTGlzdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b1xuICBkZWZhdWx0UHJvcGVydHlXaGl0ZUxpc3RbJ19fcHJvdG9fXyddID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICB3aGl0ZWxpc3Q6IGNyZWF0ZU5ld0xvb2t1cE9iamVjdChcbiAgICAgICAgZGVmYXVsdFByb3BlcnR5V2hpdGVMaXN0LFxuICAgICAgICBydW50aW1lT3B0aW9ucy5hbGxvd2VkUHJvdG9Qcm9wZXJ0aWVzXG4gICAgICApLFxuICAgICAgZGVmYXVsdFZhbHVlOiBydW50aW1lT3B0aW9ucy5hbGxvd1Byb3RvUHJvcGVydGllc0J5RGVmYXVsdFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgd2hpdGVsaXN0OiBjcmVhdGVOZXdMb29rdXBPYmplY3QoXG4gICAgICAgIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3QsXG4gICAgICAgIHJ1bnRpbWVPcHRpb25zLmFsbG93ZWRQcm90b01ldGhvZHNcbiAgICAgICksXG4gICAgICBkZWZhdWx0VmFsdWU6IHJ1bnRpbWVPcHRpb25zLmFsbG93UHJvdG9NZXRob2RzQnlEZWZhdWx0XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzdWx0SXNBbGxvd2VkKHJlc3VsdCwgcHJvdG9BY2Nlc3NDb250cm9sLCBwcm9wZXJ0eU5hbWUpIHtcbiAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY2hlY2tXaGl0ZUxpc3QocHJvdG9BY2Nlc3NDb250cm9sLm1ldGhvZHMsIHByb3BlcnR5TmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbC5wcm9wZXJ0aWVzLCBwcm9wZXJ0eU5hbWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUsIHByb3BlcnR5TmFtZSkge1xuICBpZiAocHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZS53aGl0ZWxpc3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUud2hpdGVsaXN0W3Byb3BlcnR5TmFtZV0gPT09IHRydWU7XG4gIH1cbiAgaWYgKHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZS5kZWZhdWx0VmFsdWU7XG4gIH1cbiAgbG9nVW5leHBlY2VkUHJvcGVydHlBY2Nlc3NPbmNlKHByb3BlcnR5TmFtZSk7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbG9nVW5leHBlY2VkUHJvcGVydHlBY2Nlc3NPbmNlKHByb3BlcnR5TmFtZSkge1xuICBpZiAobG9nZ2VkUHJvcGVydGllc1twcm9wZXJ0eU5hbWVdICE9PSB0cnVlKSB7XG4gICAgbG9nZ2VkUHJvcGVydGllc1twcm9wZXJ0eU5hbWVdID0gdHJ1ZTtcbiAgICBsb2dnZXIubG9nKFxuICAgICAgJ2Vycm9yJyxcbiAgICAgIGBIYW5kbGViYXJzOiBBY2Nlc3MgaGFzIGJlZW4gZGVuaWVkIHRvIHJlc29sdmUgdGhlIHByb3BlcnR5IFwiJHtwcm9wZXJ0eU5hbWV9XCIgYmVjYXVzZSBpdCBpcyBub3QgYW4gXCJvd24gcHJvcGVydHlcIiBvZiBpdHMgcGFyZW50LlxcbmAgK1xuICAgICAgICBgWW91IGNhbiBhZGQgYSBydW50aW1lIG9wdGlvbiB0byBkaXNhYmxlIHRoZSBjaGVjayBvciB0aGlzIHdhcm5pbmc6XFxuYCArXG4gICAgICAgIGBTZWUgaHR0cHM6Ly9oYW5kbGViYXJzanMuY29tL2FwaS1yZWZlcmVuY2UvcnVudGltZS1vcHRpb25zLmh0bWwjb3B0aW9ucy10by1jb250cm9sLXByb3RvdHlwZS1hY2Nlc3MgZm9yIGRldGFpbHNgXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRMb2dnZWRQcm9wZXJ0aWVzKCkge1xuICBPYmplY3Qua2V5cyhsb2dnZWRQcm9wZXJ0aWVzKS5mb3JFYWNoKHByb3BlcnR5TmFtZSA9PiB7XG4gICAgZGVsZXRlIGxvZ2dlZFByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgfSk7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js":
/*!****************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.wrapHelper = wrapHelper;

function wrapHelper(helper, transformOptionsFn) {
  if (typeof helper !== 'function') {
    // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
    // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
    return helper;
  }
  var wrapper = function wrapper() /* dynamic arguments */{
    var options = arguments[arguments.length - 1];
    arguments[arguments.length - 1] = transformOptionsFn(options);
    return helper.apply(this, arguments);
  };
  return wrapper;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2ludGVybmFsL3dyYXBIZWxwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUU7QUFDckQsTUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUU7OztBQUdoQyxXQUFPLE1BQU0sQ0FBQztHQUNmO0FBQ0QsTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFPLDBCQUFxQztBQUM5QyxRQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoRCxhQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5RCxXQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0dBQ3RDLENBQUM7QUFDRixTQUFPLE9BQU8sQ0FBQztDQUNoQiIsImZpbGUiOiJ3cmFwSGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHdyYXBIZWxwZXIoaGVscGVyLCB0cmFuc2Zvcm1PcHRpb25zRm4pIHtcbiAgaWYgKHR5cGVvZiBoZWxwZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuLCBidXQgYXBwYXJlbnRseSBpdCBkb2VzIGluIGh0dHBzOi8vZ2l0aHViLmNvbS93eWNhdHMvaGFuZGxlYmFycy5qcy9pc3N1ZXMvMTYzOVxuICAgIC8vIFdlIHRyeSB0byBtYWtlIHRoZSB3cmFwcGVyIGxlYXN0LWludmFzaXZlIGJ5IG5vdCB3cmFwcGluZyBpdCwgaWYgdGhlIGhlbHBlciBpcyBub3QgYSBmdW5jdGlvbi5cbiAgICByZXR1cm4gaGVscGVyO1xuICB9XG4gIGxldCB3cmFwcGVyID0gZnVuY3Rpb24oLyogZHluYW1pYyBhcmd1bWVudHMgKi8pIHtcbiAgICBjb25zdCBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID0gdHJhbnNmb3JtT3B0aW9uc0ZuKG9wdGlvbnMpO1xuICAgIHJldHVybiBoZWxwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/logger.js":
/*!***************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/logger.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      // eslint-disable-next-line no-console
      if (!console[method]) {
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports["default"] = logger;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUF3QixTQUFTOztBQUVqQyxJQUFJLE1BQU0sR0FBRztBQUNYLFdBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM3QyxPQUFLLEVBQUUsTUFBTTs7O0FBR2IsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFJLFFBQVEsR0FBRyxlQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsVUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2pCLGFBQUssR0FBRyxRQUFRLENBQUM7T0FDbEIsTUFBTTtBQUNMLGFBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUM7R0FDZDs7O0FBR0QsS0FBRyxFQUFFLGFBQVMsS0FBSyxFQUFjO0FBQy9CLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxRQUNFLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFDOUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxFQUN6QztBQUNBLFVBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRXJDLFVBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDcEIsY0FBTSxHQUFHLEtBQUssQ0FBQztPQUNoQjs7d0NBWG1CLE9BQU87QUFBUCxlQUFPOzs7QUFZM0IsYUFBTyxDQUFDLE1BQU0sT0FBQyxDQUFmLE9BQU8sRUFBWSxPQUFPLENBQUMsQ0FBQztLQUM3QjtHQUNGO0NBQ0YsQ0FBQzs7cUJBRWEsTUFBTSIsImZpbGUiOiJsb2dnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmRleE9mIH0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWxcbiAgICApIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xuICAgICAgICBtZXRob2QgPSAnbG9nJztcbiAgICAgIH1cbiAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5tZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

exports["default"] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxVQUFVLEVBQUU7O0FBRWxDLE1BQUksSUFBSSxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxNQUFNLEdBQUcsTUFBTTtNQUN4RCxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7QUFFaEMsWUFBVSxDQUFDLFVBQVUsR0FBRyxZQUFXO0FBQ2pDLFFBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7QUFDbEMsVUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7S0FDL0I7QUFDRCxXQUFPLFVBQVUsQ0FBQztHQUNuQixDQUFDO0NBQ0giLCJmaWxlIjoibm8tY29uZmxpY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihIYW5kbGViYXJzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGxldCByb290ID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3csXG4gICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/runtime.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/runtime.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var Utils = _interopRequireWildcard(_utils);

var _exception = __webpack_require__(/*! ./exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

var _base = __webpack_require__(/*! ./base */ "./node_modules/handlebars/dist/cjs/handlebars/base.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/handlebars/dist/cjs/handlebars/helpers.js");

var _internalWrapHelper = __webpack_require__(/*! ./internal/wrapHelper */ "./node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js");

var _internalProtoAccess = __webpack_require__(/*! ./internal/proto-access */ "./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js");

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
    return;
  }

  if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
    var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
        compilerVersions = _base.REVISION_CHANGES[compilerRevision];
    throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
  } else {
    // Use the embedded version info since the runtime doesn't know about this revision yet
    throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as pseudo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
  var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }
    partial = env.VM.resolvePartial.call(this, partial, context, options);

    var extendedOptions = Utils.extend({}, options, {
      hooks: this.hooks,
      protoAccessControl: this.protoAccessControl
    });

    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, extendedOptions);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name, loc) {
      if (!obj || !(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
          loc: loc
        });
      }
      return container.lookupProperty(obj, name);
    },
    lookupProperty: function lookupProperty(parent, propertyName) {
      var result = parent[propertyName];
      if (result == null) {
        return result;
      }
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return result;
      }

      if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
        return result;
      }
      return undefined;
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        var result = depths[i] && container.lookupProperty(depths[i], name);
        if (result != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    mergeIfNeeded: function mergeIfNeeded(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },
    // An empty object to use as replacement for null-contexts
    nullContext: Object.seal({}),

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }

    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }

  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
      wrapHelpersToPassLookupProperty(mergedHelpers, container);
      container.helpers = mergedHelpers;

      if (templateSpec.usePartial) {
        // Use mergeIfNeeded here to prevent compiling global partials multiple times
        container.partials = container.mergeIfNeeded(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = Utils.extend({}, env.decorators, options.decorators);
      }

      container.hooks = {};
      container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);

      var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
      _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
      _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
    } else {
      container.protoAccessControl = options.protoAccessControl; // internal option
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
      container.hooks = options.hooks;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

/**
 * This is currently part of the official API, therefore implementation details should not be changed.
 */

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  // Use the current closure context to save the partial-block if this partial
  var currentPartialBlock = options.data && options.data['partial-block'];
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    (function () {
      options.data = _base.createFrame(options.data);
      // Wrapper function to get access to currentPartialBlock from the closure
      var fn = options.fn;
      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        // Restore the partial-block from the closure for the execution of the block
        // i.e. the part inside the block of the partial call.
        options.data = _base.createFrame(options.data);
        options.data['partial-block'] = currentPartialBlock;
        return fn(context, options);
      };
      if (fn.partials) {
        options.partials = Utils.extend({}, options.partials, fn.partials);
      }
    })();
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}

function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
  Object.keys(mergedHelpers).forEach(function (helperName) {
    var helper = mergedHelpers[helperName];
    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
  });
}

function passLookupPropertyOption(helper, container) {
  var lookupProperty = container.lookupProperty;
  return _internalWrapHelper.wrapHelper(helper, function (options) {
    return Utils.extend({ lookupProperty: lookupProperty }, options);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQXVCLFNBQVM7O0lBQXBCLEtBQUs7O3lCQUNLLGFBQWE7Ozs7b0JBTTVCLFFBQVE7O3VCQUNtQixXQUFXOztrQ0FDbEIsdUJBQXVCOzttQ0FJM0MseUJBQXlCOztBQUV6QixTQUFTLGFBQWEsQ0FBQyxZQUFZLEVBQUU7QUFDMUMsTUFBTSxnQkFBZ0IsR0FBRyxBQUFDLFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUssQ0FBQztNQUM3RCxlQUFlLDBCQUFvQixDQUFDOztBQUV0QyxNQUNFLGdCQUFnQiwyQ0FBcUMsSUFDckQsZ0JBQWdCLDJCQUFxQixFQUNyQztBQUNBLFdBQU87R0FDUjs7QUFFRCxNQUFJLGdCQUFnQiwwQ0FBb0MsRUFBRTtBQUN4RCxRQUFNLGVBQWUsR0FBRyx1QkFBaUIsZUFBZSxDQUFDO1FBQ3ZELGdCQUFnQixHQUFHLHVCQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3hELFVBQU0sMkJBQ0oseUZBQXlGLEdBQ3ZGLHFEQUFxRCxHQUNyRCxlQUFlLEdBQ2YsbURBQW1ELEdBQ25ELGdCQUFnQixHQUNoQixJQUFJLENBQ1AsQ0FBQztHQUNILE1BQU07O0FBRUwsVUFBTSwyQkFDSix3RkFBd0YsR0FDdEYsaURBQWlELEdBQ2pELFlBQVksQ0FBQyxDQUFDLENBQUMsR0FDZixJQUFJLENBQ1AsQ0FBQztHQUNIO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLFVBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztHQUMxRDtBQUNELE1BQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3ZDLFVBQU0sMkJBQWMsMkJBQTJCLEdBQUcsT0FBTyxZQUFZLENBQUMsQ0FBQztH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QUFDbkMsV0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsY0FBYyxFQUFkLGNBQWMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQ2xELENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6InJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb24nO1xuaW1wb3J0IHtcbiAgQ09NUElMRVJfUkVWSVNJT04sXG4gIGNyZWF0ZUZyYW1lLFxuICBMQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04sXG4gIFJFVklTSU9OX0NIQU5HRVNcbn0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IG1vdmVIZWxwZXJUb0hvb2tzIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHdyYXBIZWxwZXIgfSBmcm9tICcuL2ludGVybmFsL3dyYXBIZWxwZXInO1xuaW1wb3J0IHtcbiAgY3JlYXRlUHJvdG9BY2Nlc3NDb250cm9sLFxuICByZXN1bHRJc0FsbG93ZWRcbn0gZnJvbSAnLi9pbnRlcm5hbC9wcm90by1hY2Nlc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZXZpc2lvbihjb21waWxlckluZm8pIHtcbiAgY29uc3QgY29tcGlsZXJSZXZpc2lvbiA9IChjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdKSB8fCAxLFxuICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChcbiAgICBjb21waWxlclJldmlzaW9uID49IExBU1RfQ09NUEFUSUJMRV9DT01QSUxFUl9SRVZJU0lPTiAmJlxuICAgIGNvbXBpbGVyUmV2aXNpb24gPD0gQ09NUElMRVJfUkVWSVNJT05cbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNvbXBpbGVyUmV2aXNpb24gPCBMQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04pIHtcbiAgICBjb25zdCBydW50aW1lVmVyc2lvbnMgPSBSRVZJU0lPTl9DSEFOR0VTW2N1cnJlbnRSZXZpc2lvbl0sXG4gICAgICBjb21waWxlclZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjb21waWxlclJldmlzaW9uXTtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFxuICAgICAgJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGFuIG9sZGVyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgK1xuICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArXG4gICAgICAgIHJ1bnRpbWVWZXJzaW9ucyArXG4gICAgICAgICcpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoJyArXG4gICAgICAgIGNvbXBpbGVyVmVyc2lvbnMgK1xuICAgICAgICAnKS4nXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFxuICAgICAgJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICdQbGVhc2UgdXBkYXRlIHlvdXIgcnVudGltZSB0byBhIG5ld2VyIHZlcnNpb24gKCcgK1xuICAgICAgICBjb21waWxlckluZm9bMV0gK1xuICAgICAgICAnKS4nXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGUodGVtcGxhdGVTcGVjLCBlbnYpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKCFlbnYpIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGUnKTtcbiAgfVxuICBpZiAoIXRlbXBsYXRlU3BlYyB8fCAhdGVtcGxhdGVTcGVjLm1haW4pIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdVbmtub3duIHRlbXBsYXRlIG9iamVjdDogJyArIHR5cGVvZiB0ZW1wbGF0ZVNwZWMpO1xuICB9XG5cbiAgdGVtcGxhdGVTcGVjLm1haW4uZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjLm1haW5fZDtcblxuICAvLyBOb3RlOiBVc2luZyBlbnYuVk0gcmVmZXJlbmNlcyByYXRoZXIgdGhhbiBsb2NhbCB2YXIgcmVmZXJlbmNlcyB0aHJvdWdob3V0IHRoaXMgc2VjdGlvbiB0byBhbGxvd1xuICAvLyBmb3IgZXh0ZXJuYWwgdXNlcnMgdG8gb3ZlcnJpZGUgdGhlc2UgYXMgcHNldWRvLXN1cHBvcnRlZCBBUElzLlxuICBlbnYuVk0uY2hlY2tSZXZpc2lvbih0ZW1wbGF0ZVNwZWMuY29tcGlsZXIpO1xuXG4gIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGZvciBwcmVjb21waWxlZCB0ZW1wbGF0ZXMgd2l0aCBjb21waWxlci12ZXJzaW9uIDcgKDw0LjMuMClcbiAgY29uc3QgdGVtcGxhdGVXYXNQcmVjb21waWxlZFdpdGhDb21waWxlclY3ID1cbiAgICB0ZW1wbGF0ZVNwZWMuY29tcGlsZXIgJiYgdGVtcGxhdGVTcGVjLmNvbXBpbGVyWzBdID09PSA3O1xuXG4gIGZ1bmN0aW9uIGludm9rZVBhcnRpYWxXcmFwcGVyKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgICBjb250ZXh0ID0gVXRpbHMuZXh0ZW5kKHt9LCBjb250ZXh0LCBvcHRpb25zLmhhc2gpO1xuICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIG9wdGlvbnMuaWRzWzBdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGFydGlhbCA9IGVudi5WTS5yZXNvbHZlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuXG4gICAgbGV0IGV4dGVuZGVkT3B0aW9ucyA9IFV0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucywge1xuICAgICAgaG9va3M6IHRoaXMuaG9va3MsXG4gICAgICBwcm90b0FjY2Vzc0NvbnRyb2w6IHRoaXMucHJvdG9BY2Nlc3NDb250cm9sXG4gICAgfSk7XG5cbiAgICBsZXQgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbChcbiAgICAgIHRoaXMsXG4gICAgICBwYXJ0aWFsLFxuICAgICAgY29udGV4dCxcbiAgICAgIGV4dGVuZGVkT3B0aW9uc1xuICAgICk7XG5cbiAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgZW52LmNvbXBpbGUpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXSA9IGVudi5jb21waWxlKFxuICAgICAgICBwYXJ0aWFsLFxuICAgICAgICB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJPcHRpb25zLFxuICAgICAgICBlbnZcbiAgICAgICk7XG4gICAgICByZXN1bHQgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0oY29udGV4dCwgZXh0ZW5kZWRPcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcbiAgICAgICAgbGV0IGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFxuICAgICAgICAnVGhlIHBhcnRpYWwgJyArXG4gICAgICAgICAgb3B0aW9ucy5uYW1lICtcbiAgICAgICAgICAnIGNvdWxkIG5vdCBiZSBjb21waWxlZCB3aGVuIHJ1bm5pbmcgaW4gcnVudGltZS1vbmx5IG1vZGUnXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIEp1c3QgYWRkIHdhdGVyXG4gIGxldCBjb250YWluZXIgPSB7XG4gICAgc3RyaWN0OiBmdW5jdGlvbihvYmosIG5hbWUsIGxvYykge1xuICAgICAgaWYgKCFvYmogfHwgIShuYW1lIGluIG9iaikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignXCInICsgbmFtZSArICdcIiBub3QgZGVmaW5lZCBpbiAnICsgb2JqLCB7XG4gICAgICAgICAgbG9jOiBsb2NcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5KG9iaiwgbmFtZSk7XG4gICAgfSxcbiAgICBsb29rdXBQcm9wZXJ0eTogZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgIGxldCByZXN1bHQgPSBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdElzQWxsb3dlZChyZXN1bHQsIGNvbnRhaW5lci5wcm90b0FjY2Vzc0NvbnRyb2wsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBsb29rdXA6IGZ1bmN0aW9uKGRlcHRocywgbmFtZSkge1xuICAgICAgY29uc3QgbGVuID0gZGVwdGhzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGRlcHRoc1tpXSAmJiBjb250YWluZXIubG9va3VwUHJvcGVydHkoZGVwdGhzW2ldLCBuYW1lKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGRlcHRoc1tpXVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFtYmRhOiBmdW5jdGlvbihjdXJyZW50LCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGN1cnJlbnQgPT09ICdmdW5jdGlvbicgPyBjdXJyZW50LmNhbGwoY29udGV4dCkgOiBjdXJyZW50O1xuICAgIH0sXG5cbiAgICBlc2NhcGVFeHByZXNzaW9uOiBVdGlscy5lc2NhcGVFeHByZXNzaW9uLFxuICAgIGludm9rZVBhcnRpYWw6IGludm9rZVBhcnRpYWxXcmFwcGVyLFxuXG4gICAgZm46IGZ1bmN0aW9uKGkpIHtcbiAgICAgIGxldCByZXQgPSB0ZW1wbGF0ZVNwZWNbaV07XG4gICAgICByZXQuZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjW2kgKyAnX2QnXTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIHByb2dyYW1zOiBbXSxcbiAgICBwcm9ncmFtOiBmdW5jdGlvbihpLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgICBsZXQgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuICAgICAgICBmbiA9IHRoaXMuZm4oaSk7XG4gICAgICBpZiAoZGF0YSB8fCBkZXB0aHMgfHwgYmxvY2tQYXJhbXMgfHwgZGVjbGFyZWRCbG9ja1BhcmFtcykge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHdyYXBQcm9ncmFtKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgaSxcbiAgICAgICAgICBmbixcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGRlY2xhcmVkQmxvY2tQYXJhbXMsXG4gICAgICAgICAgYmxvY2tQYXJhbXMsXG4gICAgICAgICAgZGVwdGhzXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvZ3JhbVdyYXBwZXI7XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uKHZhbHVlLCBkZXB0aCkge1xuICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgbWVyZ2VJZk5lZWRlZDogZnVuY3Rpb24ocGFyYW0sIGNvbW1vbikge1xuICAgICAgbGV0IG9iaiA9IHBhcmFtIHx8IGNvbW1vbjtcblxuICAgICAgaWYgKHBhcmFtICYmIGNvbW1vbiAmJiBwYXJhbSAhPT0gY29tbW9uKSB7XG4gICAgICAgIG9iaiA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICAvLyBBbiBlbXB0eSBvYmplY3QgdG8gdXNlIGFzIHJlcGxhY2VtZW50IGZvciBudWxsLWNvbnRleHRzXG4gICAgbnVsbENvbnRleHQ6IE9iamVjdC5zZWFsKHt9KSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgZnVuY3Rpb24gcmV0KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgcmV0Ll9zZXR1cChvcHRpb25zKTtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xuICAgICAgZGF0YSA9IGluaXREYXRhKGNvbnRleHQsIGRhdGEpO1xuICAgIH1cbiAgICBsZXQgZGVwdGhzLFxuICAgICAgYmxvY2tQYXJhbXMgPSB0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgPyBbXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgaWYgKG9wdGlvbnMuZGVwdGhzKSB7XG4gICAgICAgIGRlcHRocyA9XG4gICAgICAgICAgY29udGV4dCAhPSBvcHRpb25zLmRlcHRoc1swXVxuICAgICAgICAgICAgPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKVxuICAgICAgICAgICAgOiBvcHRpb25zLmRlcHRocztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlcHRocyA9IFtjb250ZXh0XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWluKGNvbnRleHQgLyosIG9wdGlvbnMqLykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgJycgK1xuICAgICAgICB0ZW1wbGF0ZVNwZWMubWFpbihcbiAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBjb250YWluZXIuaGVscGVycyxcbiAgICAgICAgICBjb250YWluZXIucGFydGlhbHMsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBibG9ja1BhcmFtcyxcbiAgICAgICAgICBkZXB0aHNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBtYWluID0gZXhlY3V0ZURlY29yYXRvcnMoXG4gICAgICB0ZW1wbGF0ZVNwZWMubWFpbixcbiAgICAgIG1haW4sXG4gICAgICBjb250YWluZXIsXG4gICAgICBvcHRpb25zLmRlcHRocyB8fCBbXSxcbiAgICAgIGRhdGEsXG4gICAgICBibG9ja1BhcmFtc1xuICAgICk7XG4gICAgcmV0dXJuIG1haW4oY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cblxuICByZXQuaXNUb3AgPSB0cnVlO1xuXG4gIHJldC5fc2V0dXAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwpIHtcbiAgICAgIGxldCBtZXJnZWRIZWxwZXJzID0gVXRpbHMuZXh0ZW5kKHt9LCBlbnYuaGVscGVycywgb3B0aW9ucy5oZWxwZXJzKTtcbiAgICAgIHdyYXBIZWxwZXJzVG9QYXNzTG9va3VwUHJvcGVydHkobWVyZ2VkSGVscGVycywgY29udGFpbmVyKTtcbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gbWVyZ2VkSGVscGVycztcblxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG4gICAgICAgIC8vIFVzZSBtZXJnZUlmTmVlZGVkIGhlcmUgdG8gcHJldmVudCBjb21waWxpbmcgZ2xvYmFsIHBhcnRpYWxzIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZUlmTmVlZGVkKFxuICAgICAgICAgIG9wdGlvbnMucGFydGlhbHMsXG4gICAgICAgICAgZW52LnBhcnRpYWxzXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwgfHwgdGVtcGxhdGVTcGVjLnVzZURlY29yYXRvcnMpIHtcbiAgICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBVdGlscy5leHRlbmQoXG4gICAgICAgICAge30sXG4gICAgICAgICAgZW52LmRlY29yYXRvcnMsXG4gICAgICAgICAgb3B0aW9ucy5kZWNvcmF0b3JzXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lci5ob29rcyA9IHt9O1xuICAgICAgY29udGFpbmVyLnByb3RvQWNjZXNzQ29udHJvbCA9IGNyZWF0ZVByb3RvQWNjZXNzQ29udHJvbChvcHRpb25zKTtcblxuICAgICAgbGV0IGtlZXBIZWxwZXJJbkhlbHBlcnMgPVxuICAgICAgICBvcHRpb25zLmFsbG93Q2FsbHNUb0hlbHBlck1pc3NpbmcgfHxcbiAgICAgICAgdGVtcGxhdGVXYXNQcmVjb21waWxlZFdpdGhDb21waWxlclY3O1xuICAgICAgbW92ZUhlbHBlclRvSG9va3MoY29udGFpbmVyLCAnaGVscGVyTWlzc2luZycsIGtlZXBIZWxwZXJJbkhlbHBlcnMpO1xuICAgICAgbW92ZUhlbHBlclRvSG9va3MoY29udGFpbmVyLCAnYmxvY2tIZWxwZXJNaXNzaW5nJywga2VlcEhlbHBlckluSGVscGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5wcm90b0FjY2Vzc0NvbnRyb2wgPSBvcHRpb25zLnByb3RvQWNjZXNzQ29udHJvbDsgLy8gaW50ZXJuYWwgb3B0aW9uXG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcbiAgICAgIGNvbnRhaW5lci5ob29rcyA9IG9wdGlvbnMuaG9va3M7XG4gICAgfVxuICB9O1xuXG4gIHJldC5fY2hpbGQgPSBmdW5jdGlvbihpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyAmJiAhYmxvY2tQYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ211c3QgcGFzcyBibG9jayBwYXJhbXMnKTtcbiAgICB9XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMgJiYgIWRlcHRocykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIHBhcmVudCBkZXB0aHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcFByb2dyYW0oXG4gICAgICBjb250YWluZXIsXG4gICAgICBpLFxuICAgICAgdGVtcGxhdGVTcGVjW2ldLFxuICAgICAgZGF0YSxcbiAgICAgIDAsXG4gICAgICBibG9ja1BhcmFtcyxcbiAgICAgIGRlcHRoc1xuICAgICk7XG4gIH07XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwUHJvZ3JhbShcbiAgY29udGFpbmVyLFxuICBpLFxuICBmbixcbiAgZGF0YSxcbiAgZGVjbGFyZWRCbG9ja1BhcmFtcyxcbiAgYmxvY2tQYXJhbXMsXG4gIGRlcHRoc1xuKSB7XG4gIGZ1bmN0aW9uIHByb2coY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG4gICAgaWYgKFxuICAgICAgZGVwdGhzICYmXG4gICAgICBjb250ZXh0ICE9IGRlcHRoc1swXSAmJlxuICAgICAgIShjb250ZXh0ID09PSBjb250YWluZXIubnVsbENvbnRleHQgJiYgZGVwdGhzWzBdID09PSBudWxsKVxuICAgICkge1xuICAgICAgY3VycmVudERlcHRocyA9IFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm4oXG4gICAgICBjb250YWluZXIsXG4gICAgICBjb250ZXh0LFxuICAgICAgY29udGFpbmVyLmhlbHBlcnMsXG4gICAgICBjb250YWluZXIucGFydGlhbHMsXG4gICAgICBvcHRpb25zLmRhdGEgfHwgZGF0YSxcbiAgICAgIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLFxuICAgICAgY3VycmVudERlcHRoc1xuICAgICk7XG4gIH1cblxuICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cbiAgcHJvZy5wcm9ncmFtID0gaTtcbiAgcHJvZy5kZXB0aCA9IGRlcHRocyA/IGRlcHRocy5sZW5ndGggOiAwO1xuICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuICByZXR1cm4gcHJvZztcbn1cblxuLyoqXG4gKiBUaGlzIGlzIGN1cnJlbnRseSBwYXJ0IG9mIHRoZSBvZmZpY2lhbCBBUEksIHRoZXJlZm9yZSBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIHNob3VsZCBub3QgYmUgY2hhbmdlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIC8vIFVzZSB0aGUgY3VycmVudCBjbG9zdXJlIGNvbnRleHQgdG8gc2F2ZSB0aGUgcGFydGlhbC1ibG9jayBpZiB0aGlzIHBhcnRpYWxcbiAgY29uc3QgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuICB9XG5cbiAgbGV0IHBhcnRpYWxCbG9jaztcbiAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG4gICAgcGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBmdW5jdGlvbiBwYXJ0aWFsQmxvY2tXcmFwcGVyKFxuICAgICAgY29udGV4dCxcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgICkge1xuICAgICAgLy8gUmVzdG9yZSB0aGUgcGFydGlhbC1ibG9jayBmcm9tIHRoZSBjbG9zdXJlIGZvciB0aGUgZXhlY3V0aW9uIG9mIHRoZSBibG9ja1xuICAgICAgLy8gaS5lLiB0aGUgcGFydCBpbnNpZGUgdGhlIGJsb2NrIG9mIHRoZSBwYXJ0aWFsIGNhbGwuXG4gICAgICBvcHRpb25zLmRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBjdXJyZW50UGFydGlhbEJsb2NrO1xuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgaWYgKGZuLnBhcnRpYWxzKSB7XG4gICAgICBvcHRpb25zLnBhcnRpYWxzID0gVXRpbHMuZXh0ZW5kKHt9LCBvcHRpb25zLnBhcnRpYWxzLCBmbi5wYXJ0aWFscyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCAmJiBwYXJ0aWFsQmxvY2spIHtcbiAgICBwYXJ0aWFsID0gcGFydGlhbEJsb2NrO1xuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBmb3VuZCcpO1xuICB9IGVsc2UgaWYgKHBhcnRpYWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiBwYXJ0aWFsKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge1xuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcbiAgaWYgKCFkYXRhIHx8ICEoJ3Jvb3QnIGluIGRhdGEpKSB7XG4gICAgZGF0YSA9IGRhdGEgPyBjcmVhdGVGcmFtZShkYXRhKSA6IHt9O1xuICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpIHtcbiAgaWYgKGZuLmRlY29yYXRvcikge1xuICAgIGxldCBwcm9wcyA9IHt9O1xuICAgIHByb2cgPSBmbi5kZWNvcmF0b3IoXG4gICAgICBwcm9nLFxuICAgICAgcHJvcHMsXG4gICAgICBjb250YWluZXIsXG4gICAgICBkZXB0aHMgJiYgZGVwdGhzWzBdLFxuICAgICAgZGF0YSxcbiAgICAgIGJsb2NrUGFyYW1zLFxuICAgICAgZGVwdGhzXG4gICAgKTtcbiAgICBVdGlscy5leHRlbmQocHJvZywgcHJvcHMpO1xuICB9XG4gIHJldHVybiBwcm9nO1xufVxuXG5mdW5jdGlvbiB3cmFwSGVscGVyc1RvUGFzc0xvb2t1cFByb3BlcnR5KG1lcmdlZEhlbHBlcnMsIGNvbnRhaW5lcikge1xuICBPYmplY3Qua2V5cyhtZXJnZWRIZWxwZXJzKS5mb3JFYWNoKGhlbHBlck5hbWUgPT4ge1xuICAgIGxldCBoZWxwZXIgPSBtZXJnZWRIZWxwZXJzW2hlbHBlck5hbWVdO1xuICAgIG1lcmdlZEhlbHBlcnNbaGVscGVyTmFtZV0gPSBwYXNzTG9va3VwUHJvcGVydHlPcHRpb24oaGVscGVyLCBjb250YWluZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcGFzc0xvb2t1cFByb3BlcnR5T3B0aW9uKGhlbHBlciwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5O1xuICByZXR1cm4gd3JhcEhlbHBlcihoZWxwZXIsIG9wdGlvbnMgPT4ge1xuICAgIHJldHVybiBVdGlscy5leHRlbmQoeyBsb29rdXBQcm9wZXJ0eSB9LCBvcHRpb25zKTtcbiAgfSk7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/safe-string.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/safe-string.js ***!
  \********************************************************************/
/***/ ((module, exports) => {

"use strict";
// Build out our basic SafeString type


exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports["default"] = SafeString;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0FBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN2RSxTQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0NBQ3pCLENBQUM7O3FCQUVhLFVBQVUiLCJmaWxlIjoic2FmZS1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/utils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBRztBQUNiLEtBQUcsRUFBRSxPQUFPO0FBQ1osS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsTUFBTTtBQUNYLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0NBQ2QsQ0FBQzs7QUFFRixJQUFNLFFBQVEsR0FBRyxZQUFZO0lBQzNCLFFBQVEsR0FBRyxXQUFXLENBQUM7O0FBRXpCLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN2QixTQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQjs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLG9CQUFvQjtBQUM1QyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxTQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM1QixVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDM0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM5QjtLQUNGO0dBQ0Y7O0FBRUQsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBS2hELElBQUksVUFBVSxHQUFHLG9CQUFTLEtBQUssRUFBRTtBQUMvQixTQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztDQUNwQyxDQUFDOzs7QUFHRixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNuQixVQU9PLFVBQVUsR0FQakIsVUFBVSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzNCLFdBQ0UsT0FBTyxLQUFLLEtBQUssVUFBVSxJQUMzQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLG1CQUFtQixDQUM1QztHQUNILENBQUM7Q0FDSDtRQUNRLFVBQVUsR0FBVixVQUFVOzs7OztBQUlaLElBQU0sT0FBTyxHQUNsQixLQUFLLENBQUMsT0FBTyxJQUNiLFVBQVMsS0FBSyxFQUFFO0FBQ2QsU0FBTyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxHQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixHQUN6QyxLQUFLLENBQUM7Q0FDWCxDQUFDOzs7OztBQUdHLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEMsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxRQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEIsYUFBTyxDQUFDLENBQUM7S0FDVjtHQUNGO0FBQ0QsU0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQUVNLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0FBQ3ZDLE1BQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFOztBQUU5QixRQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQzNCLGFBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3pCLGFBQU8sRUFBRSxDQUFDO0tBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGFBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7QUFLRCxVQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztHQUN0Qjs7QUFFRCxNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUMxQixXQUFPLE1BQU0sQ0FBQztHQUNmO0FBQ0QsU0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3Qzs7QUFFTSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDN0IsTUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3pCLFdBQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvQyxXQUFPLElBQUksQ0FBQztHQUNiLE1BQU07QUFDTCxXQUFPLEtBQUssQ0FBQztHQUNkO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ2xDLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsU0FBTyxLQUFLLENBQUM7Q0FDZDs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFO0FBQ2pELFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUEsR0FBSSxFQUFFLENBQUM7Q0FDcEQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5jb25zdCBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gIHBvc3NpYmxlID0gL1smPD5cIidgPV0vO1xuXG5mdW5jdGlvbiBlc2NhcGVDaGFyKGNocikge1xuICByZXR1cm4gZXNjYXBlW2Nocl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQob2JqIC8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgbGV0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xubGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgICApO1xuICB9O1xufVxuZXhwb3J0IHsgaXNGdW5jdGlvbiB9O1xuLyogZXNsaW50LWVuYWJsZSBmdW5jLXN0eWxlICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgY29uc3QgaXNBcnJheSA9XG4gIEFycmF5LmlzQXJyYXkgfHxcbiAgZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuICAgICAgPyB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuLy8gT2xkZXIgSUUgdmVyc2lvbnMgZG8gbm90IGRpcmVjdGx5IHN1cHBvcnQgaW5kZXhPZiBzbyB3ZSBtdXN0IGltcGxlbWVudCBvdXIgb3duLCBzYWRseS5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mKGFycmF5LCB2YWx1ZSkge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGJhZENoYXJzLCBlc2NhcGVDaGFyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnJhbWUob2JqZWN0KSB7XG4gIGxldCBmcmFtZSA9IGV4dGVuZCh7fSwgb2JqZWN0KTtcbiAgZnJhbWUuX3BhcmVudCA9IG9iamVjdDtcbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmxvY2tQYXJhbXMocGFyYW1zLCBpZHMpIHtcbiAgcGFyYW1zLnBhdGggPSBpZHM7XG4gIHJldHVybiBwYXJhbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDb250ZXh0UGF0aChjb250ZXh0UGF0aCwgaWQpIHtcbiAgcmV0dXJuIChjb250ZXh0UGF0aCA/IGNvbnRleHRQYXRoICsgJy4nIDogJycpICsgaWQ7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/runtime.js":
/*!********************************************!*\
  !*** ./node_modules/handlebars/runtime.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = __webpack_require__(/*! ./dist/cjs/handlebars.runtime */ "./node_modules/handlebars/dist/cjs/handlebars.runtime.js")["default"];


/***/ }),

/***/ "./src/App/App.css":
/*!*************************!*\
  !*** ./src/App/App.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/BarComponent/BarComponent.css":
/*!**********************************************************!*\
  !*** ./src/App/Components/BarComponent/BarComponent.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/BaseComponent/BaseComponent.css":
/*!************************************************************!*\
  !*** ./src/App/Components/BaseComponent/BaseComponent.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/ButtonComponent/ButtonComponent.css":
/*!****************************************************************!*\
  !*** ./src/App/Components/ButtonComponent/ButtonComponent.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/Css/HeaderActionList/HeaderActionList.css":
/*!**********************************************************************!*\
  !*** ./src/App/Components/Css/HeaderActionList/HeaderActionList.css ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/Css/HeaderProfileDropdown/HeaderProfileDropdown.css":
/*!********************************************************************************!*\
  !*** ./src/App/Components/Css/HeaderProfileDropdown/HeaderProfileDropdown.css ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/Css/HeaderSignIn/HeaderSignIn.css":
/*!**************************************************************!*\
  !*** ./src/App/Components/Css/HeaderSignIn/HeaderSignIn.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.css":
/*!********************************************************************************!*\
  !*** ./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.css ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/FormComponent/FormComponent.css":
/*!************************************************************!*\
  !*** ./src/App/Components/FormComponent/FormComponent.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/InputComponent/InputComponent.css":
/*!**************************************************************!*\
  !*** ./src/App/Components/InputComponent/InputComponent.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/LinkComponent/LinkComponent.css":
/*!************************************************************!*\
  !*** ./src/App/Components/LinkComponent/LinkComponent.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/ListComponent/ListComponent.css":
/*!************************************************************!*\
  !*** ./src/App/Components/ListComponent/ListComponent.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.css":
/*!********************************************************************************!*\
  !*** ./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.css ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/FilmView/FilmView.css":
/*!*********************************************!*\
  !*** ./src/App/Views/FilmView/FilmView.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/HeaderView/HeaderView.css":
/*!*************************************************!*\
  !*** ./src/App/Views/HeaderView/HeaderView.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/MainView/MainView.css":
/*!*********************************************!*\
  !*** ./src/App/Views/MainView/MainView.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/ModalRightView/ModalRightView.css":
/*!*********************************************************!*\
  !*** ./src/App/Views/ModalRightView/ModalRightView.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/PersonView/PersonView.css":
/*!*************************************************!*\
  !*** ./src/App/Views/PersonView/PersonView.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/PlayerView/PlayerView.css":
/*!*************************************************!*\
  !*** ./src/App/Views/PlayerView/PlayerView.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/SettingsView/SettingsView.css":
/*!*****************************************************!*\
  !*** ./src/App/Views/SettingsView/SettingsView.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/SignInView/SignInView.css":
/*!*************************************************!*\
  !*** ./src/App/Views/SignInView/SignInView.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/SignUpView/SignUpView.css":
/*!*************************************************!*\
  !*** ./src/App/Views/SignUpView/SignUpView.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Ajax/Ajax.ts":
/*!******************************!*\
  !*** ./src/App/Ajax/Ajax.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config/Config */ "./src/App/Config/Config.ts");

class Ajax {
    csrfToken;
    async ajax(params, body) {
        const headers = new Headers(params.headers);
        if (params.url === _Config_Config__WEBPACK_IMPORTED_MODULE_0__.config.api.signIn.url || params.url === _Config_Config__WEBPACK_IMPORTED_MODULE_0__.config.api.signUp.url) {
        }
        else {
            if (params.method !== _Config_Config__WEBPACK_IMPORTED_MODULE_0__.REQUEST_METHODS.GET) {
                if (!this.csrfToken) {
                    await this.getCsrfTokenFromServer();
                }
                headers.append('CSRF-Token', this.csrfToken);
            }
        }
        const response = await fetch(`${_Config_Config__WEBPACK_IMPORTED_MODULE_0__.config.host}${params.url}`, {
            method: params.method,
            headers,
            body,
            credentials: 'include',
        });
        let responseBody;
        try {
            responseBody = await response.json();
            if (response.status === 400) {
                const customStatus = responseBody.status.toString();
                responseBody.message = _Config_Config__WEBPACK_IMPORTED_MODULE_0__.customFailures[customStatus];
            }
        }
        catch (error) {
            responseBody = {};
        }
        return {
            status: response.status,
            responseBody
        };
    }
    ;
    setCsrfToken(csrfToken) {
        this.csrfToken = csrfToken;
    }
    ;
    async getCsrfTokenFromServer() {
        const csrfResponse = await fetch(`${_Config_Config__WEBPACK_IMPORTED_MODULE_0__.config.host}${_Config_Config__WEBPACK_IMPORTED_MODULE_0__.config.api.csrf.url}`, {
            method: _Config_Config__WEBPACK_IMPORTED_MODULE_0__.config.api.csrf.method,
            headers: new Headers(_Config_Config__WEBPACK_IMPORTED_MODULE_0__.config.api.csrf.headers),
            credentials: 'include',
        });
        const csrfToken = await csrfResponse.json();
        this.setCsrfToken(csrfToken.body['csrf-token']);
        return csrfToken;
    }
    async checkResponseStatus(response, conf) {
        if (response.status.toString() in conf.statuses.success) {
            return Promise.resolve();
        }
        if (response.status.toString() in conf.statuses.failure) {
            const keyStatus = response.status.toString();
            if (keyStatus === '400') {
                const customStatus = response.responseBody.status.toString();
                return Promise.reject({
                    msg: _Config_Config__WEBPACK_IMPORTED_MODULE_0__.customFailures[customStatus],
                });
            }
            return Promise.reject({
                msg: _Config_Config__WEBPACK_IMPORTED_MODULE_0__.config.api.signin.statuses.failure[keyStatus],
            });
        }
        return Promise.reject({
            msg: 'Неожиданная ошибка',
        });
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Ajax());


/***/ }),

/***/ "./src/App/App.ts":
/*!************************!*\
  !*** ./src/App/App.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "./src/App/App.css");
/* harmony import */ var _Components_BaseComponent_BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/BaseComponent/BaseComponent */ "./src/App/Components/BaseComponent/BaseComponent.ts");
/* harmony import */ var _Views_HeaderView_HeaderView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Views/HeaderView/HeaderView */ "./src/App/Views/HeaderView/HeaderView.ts");
/* harmony import */ var _Controllers_HeaderController_HeaderController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controllers/HeaderController/HeaderController */ "./src/App/Controllers/HeaderController/HeaderController.ts");
/* harmony import */ var _Views_ModalRightView_ModalRightView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Views/ModalRightView/ModalRightView */ "./src/App/Views/ModalRightView/ModalRightView.ts");
/* harmony import */ var _Controllers_ModalRightController_ModalRightController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Controllers/ModalRightController/ModalRightController */ "./src/App/Controllers/ModalRightController/ModalRightController.ts");
/* harmony import */ var _Views_FilmView_FilmView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Views/FilmView/FilmView */ "./src/App/Views/FilmView/FilmView.ts");
/* harmony import */ var _Controllers_FilmController_FilmController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Controllers/FilmController/FilmController */ "./src/App/Controllers/FilmController/FilmController.ts");
/* harmony import */ var _Views_SettingsView_SettingsView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Views/SettingsView/SettingsView */ "./src/App/Views/SettingsView/SettingsView.ts");
/* harmony import */ var _Controllers_SettingsController_SettingsController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Controllers/SettingsController/SettingsController */ "./src/App/Controllers/SettingsController/SettingsController.ts");
/* harmony import */ var _Views_PersonView_PersonView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Views/PersonView/PersonView */ "./src/App/Views/PersonView/PersonView.ts");
/* harmony import */ var _Controllers_PersonController_PersonController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Controllers/PersonController/PersonController */ "./src/App/Controllers/PersonController/PersonController.ts");
/* harmony import */ var _Views_MainView_MainView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Views/MainView/MainView */ "./src/App/Views/MainView/MainView.ts");
/* harmony import */ var _Controllers_MainController_MainController__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Controllers/MainController/MainController */ "./src/App/Controllers/MainController/MainController.ts");
/* harmony import */ var _Models_UserModel_UserModel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Models/UserModel/UserModel */ "./src/App/Models/UserModel/UserModel.ts");
/* harmony import */ var _Models_FilmModel_FilmModel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Models/FilmModel/FilmModel */ "./src/App/Models/FilmModel/FilmModel.ts");
/* harmony import */ var _Models_PersonModel_PersonModel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Models/PersonModel/PersonModel */ "./src/App/Models/PersonModel/PersonModel.ts");
/* harmony import */ var _Models_SelectionModel_SelectionModel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Models/SelectionModel/SelectionModel */ "./src/App/Models/SelectionModel/SelectionModel.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Router/Router */ "./src/App/Router/Router.ts");
/* harmony import */ var _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Router/RouterPaths */ "./src/App/Router/RouterPaths.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");





















class App {
    // Views
    headerView;
    modalRightView;
    filmView;
    settingsView;
    personView;
    mainView;
    // Controllers
    headerController;
    modalRightController;
    filmController;
    settingsController;
    personController;
    mainController;
    // Models
    userModel;
    filmModel;
    personModel;
    selectionModel;
    // Elements
    root;
    header;
    footer;
    content;
    modalRight;
    constructor() {
        this.initPage();
        this.initViews();
        this.initModels();
        this.initControllers();
        this.initRoutes();
    }
    run(url) {
        _Router_Router__WEBPACK_IMPORTED_MODULE_18__["default"].start(url);
    }
    /**
     * Функция инициализирует базовую вёрстку страницы
     * (приватное поле класса)
     * @return {void}
     */
    initPage() {
        const baseComponent = new _Components_BaseComponent_BaseComponent__WEBPACK_IMPORTED_MODULE_1__["default"](document.body);
        baseComponent.show();
        this.root = baseComponent.querySelector('.js-root');
        this.header = baseComponent.querySelector('.js-header');
        this.footer = baseComponent.querySelector('.js-footer');
        this.content = baseComponent.querySelector('.js-content');
        this.modalRight = baseComponent.querySelector('.js-modal--right');
    }
    ;
    /**
     * Функция инициализирует все отображения (views)
     * (приватное поле класса)
     * @return {void}
     */
    initViews() {
        this.headerView = new _Views_HeaderView_HeaderView__WEBPACK_IMPORTED_MODULE_2__["default"](this.header);
        this.modalRightView = new _Views_ModalRightView_ModalRightView__WEBPACK_IMPORTED_MODULE_4__["default"](this.modalRight);
        this.filmView = new _Views_FilmView_FilmView__WEBPACK_IMPORTED_MODULE_6__["default"](this.content);
        this.settingsView = new _Views_SettingsView_SettingsView__WEBPACK_IMPORTED_MODULE_8__["default"](this.content);
        this.personView = new _Views_PersonView_PersonView__WEBPACK_IMPORTED_MODULE_10__["default"](this.content);
        this.mainView = new _Views_MainView_MainView__WEBPACK_IMPORTED_MODULE_12__["default"](this.content);
    }
    ;
    /**
     * Функция инициализирует все моедели (models)
     * (приватное поле класса)
     * @return {void}
     */
    initModels() {
        this.userModel = new _Models_UserModel_UserModel__WEBPACK_IMPORTED_MODULE_14__["default"]();
        this.filmModel = new _Models_FilmModel_FilmModel__WEBPACK_IMPORTED_MODULE_15__["default"]();
        this.personModel = new _Models_PersonModel_PersonModel__WEBPACK_IMPORTED_MODULE_16__["default"]();
        this.selectionModel = new _Models_SelectionModel_SelectionModel__WEBPACK_IMPORTED_MODULE_17__["default"]();
    }
    ;
    /**
     * Функция инициализирует все отображения (views)
     * (приватное поле класса)
     * @return {void}
     */
    initControllers() {
        this.headerController = new _Controllers_HeaderController_HeaderController__WEBPACK_IMPORTED_MODULE_3__["default"](this.headerView);
        this.modalRightController = new _Controllers_ModalRightController_ModalRightController__WEBPACK_IMPORTED_MODULE_5__["default"](this.modalRightView, this.userModel);
        this.filmController = new _Controllers_FilmController_FilmController__WEBPACK_IMPORTED_MODULE_7__["default"](this.filmView, this.filmModel);
        this.settingsController = new _Controllers_SettingsController_SettingsController__WEBPACK_IMPORTED_MODULE_9__["default"](this.settingsView, this.userModel);
        this.personController = new _Controllers_PersonController_PersonController__WEBPACK_IMPORTED_MODULE_11__["default"](this.personView, this.personModel);
        this.mainController = new _Controllers_MainController_MainController__WEBPACK_IMPORTED_MODULE_13__["default"](this.mainView, { selections: this.selectionModel });
    }
    ;
    /**
     * Функция задаёт связи между страницами (URL -> обработчик)
     * (приватное поле класса)
     * @return {void}
     */
    initRoutes() {
        const routes = [
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_19__["default"].main, handler: this.handleRedirectToMain },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_19__["default"].catalog, handler: this.handleRedirectToCatalog },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_19__["default"].store, handler: this.handleRedirectToStore },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_19__["default"].myMovie, handler: this.handleRedirectToMyMovie },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_19__["default"].signIn, handler: this.handleRedirectToSignIn },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_19__["default"].signUp, handler: this.handleRedirectToSignUp },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_19__["default"].logout, handler: this.handleRedirectToLogout },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_19__["default"].settings, handler: this.handleRedirectToSettings },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_19__["default"].films, handler: this.handleRedirectToFilm },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_19__["default"].persons, handler: this.handleRedirectToPerson },
        ];
        routes.forEach(({ path, handler }) => {
            _Router_Router__WEBPACK_IMPORTED_MODULE_18__["default"].addRule(path, handler.bind(this));
        });
    }
    ;
    handleRedirectToMain() {
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('unmount-all');
        this.userModel.authUserByCookie()
            .then(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('render-profileButton');
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('render-signInButton');
        });
        // mount
        this.headerController.mountComponent();
        this.mainController.mountComponent();
        // states
        this.headerView.changeActiveHeaderListItem('/');
    }
    ;
    handleRedirectToSignIn() {
        this.userModel.authUserByCookie()
            .then(() => {
            _Router_Router__WEBPACK_IMPORTED_MODULE_18__["default"].goToPath(_Router_Router__WEBPACK_IMPORTED_MODULE_18__["default"].getNearestNotAuthUrl());
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('modalRight-setSignIn', this.userModel);
            this.modalRightController.mountComponent();
        });
    }
    ;
    handleRedirectToSignUp() {
        this.userModel.authUserByCookie()
            .then(() => {
            _Router_Router__WEBPACK_IMPORTED_MODULE_18__["default"].goToPath(_Router_Router__WEBPACK_IMPORTED_MODULE_18__["default"].getNearestNotAuthUrl());
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('modalRight-setSignUp', this.userModel);
            this.modalRightController.mountComponent();
        });
    }
    ;
    handleRedirectToCatalog() {
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('unmount-all');
        this.userModel.authUserByCookie()
            .then(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('render-profileButton');
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('render-signInButton');
        });
        // mount
        this.headerController.mountComponent();
        // states
        this.headerView.changeActiveHeaderListItem('/catalog');
    }
    ;
    handleRedirectToStore() {
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('unmount-all');
        this.userModel.authUserByCookie()
            .then(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('render-profileButton');
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('render-signInButton');
        });
        // mount
        this.headerController.mountComponent();
        // states
        this.headerView.changeActiveHeaderListItem('/store');
    }
    ;
    handleRedirectToMyMovie() {
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('unmount-all');
        this.userModel.authUserByCookie()
            .then(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('render-profileButton');
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('render-signInButton');
        });
        // mount
        this.headerController.mountComponent();
        // states
        this.headerView.changeActiveHeaderListItem('/my-movie');
    }
    ;
    handleRedirectToSettings() {
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('unmount-all');
        this.userModel.authUserByCookie()
            .then(() => {
            // mount
            this.headerController.mountComponent();
            this.settingsController.mountComponent();
            // states
            this.headerView.changeActiveHeaderListItem('#');
            this.settingsView.changeActiveLeftMenuItem('/settings');
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('user-changed', this.userModel.getCurrentUser());
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('render-signInButton');
            _Router_Router__WEBPACK_IMPORTED_MODULE_18__["default"].goToPath(_Router_Router__WEBPACK_IMPORTED_MODULE_18__["default"].getNearestNotAuthUrl());
        });
    }
    ;
    handleRedirectToFilm(data) {
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('unmount-all');
        this.userModel.authUserByCookie()
            .then(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('render-profileButton');
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('render-signInButton');
        });
        if (!data || !data[0]) {
            _Router_Router__WEBPACK_IMPORTED_MODULE_18__["default"].showUnknownPage();
            return;
        }
        const filmId = data[0];
        // mount
        this.headerController.mountComponent();
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('new-player');
        this.filmController.mountComponent({ id: filmId.toString() });
        // states
        this.headerView.changeActiveHeaderListItem('#');
    }
    ;
    handleRedirectToPerson(data) {
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('unmount-all');
        this.userModel.authUserByCookie()
            .then(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('render-profileButton');
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('render-signInButton');
        });
        if (!data || !data[0]) {
            _Router_Router__WEBPACK_IMPORTED_MODULE_18__["default"].showUnknownPage();
            return;
        }
        const personId = data[0];
        // mount
        this.headerController.mountComponent();
        this.personController.mountComponent({ id: personId.toString() });
        // states
        this.headerView.changeActiveHeaderListItem('#');
    }
    ;
    handleRedirectToLogout() {
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_20__["default"].emit('redirect', _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_19__["default"].logout);
        this.userModel.logoutUser();
        _Router_Router__WEBPACK_IMPORTED_MODULE_18__["default"].goToPath(_Router_RouterPaths__WEBPACK_IMPORTED_MODULE_19__["default"].main);
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/App/Components/BarComponent/BarComponent.ts":
/*!*********************************************************!*\
  !*** ./src/App/Components/BarComponent/BarComponent.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _BarComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarComponent.hbs */ "./src/App/Components/BarComponent/BarComponent.hbs");
/* harmony import */ var _BarComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BarComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BarComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarComponent.css */ "./src/App/Components/BarComponent/BarComponent.css");
/* harmony import */ var _DivComponent_DivComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DivComponent/DivComponent */ "./src/App/Components/DivComponent/DivComponent.ts");




// TODO
// type EventTuple = [string, (e: TouchEvent | MouseEvent) => void];
class BarComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    isDragging;
    fullBar;
    loadBar;
    loadProgressBar;
    currentBar;
    barHelper;
    currentBarCircle;
    maxValue;
    postscript;
    // TODO
    // private eventTuples: EventTuple[] = [
    //     ["mousedown", (e: MouseEvent) => { this.onMouseDown(e); }],
    //     // ["mousemove", this.onMouseMove.bind(this)],
    //     // ["mouseup", this.onMouseUp.bind(this)],
    //     // ["touchstart", this.onTouchStart.bind(this)],
    //     // ["touchmove", this.onTouchMove.bind(this)],
    //     // ["touchend", this.onTouchEnd.bind(this)],
    // ];
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _BarComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()({ barClass: data.barClass }), '.js-bar');
        this.isDragging = false;
        this.maxValue = 2.37;
        this.postscript = '';
        this.fullBar = this.element.querySelector('.bar__full');
        this.loadBar = this.element.querySelector('.bar__load');
        this.loadProgressBar = this.element.querySelector('.bar-load__progress');
        this.currentBar = this.element.querySelector('.bar__current');
        this.initHiddenElements();
        this.addEventListeners();
    }
    ;
    initHiddenElements() {
        const barHelperDiv = this.element.querySelector('#bar__helper');
        this.barHelper = new _DivComponent_DivComponent__WEBPACK_IMPORTED_MODULE_3__["default"](barHelperDiv, '', '', { class: 'bar__helper' });
        const currentBarCircleDiv = this.element.querySelector('#bar__current-circle');
        this.currentBarCircle = new _DivComponent_DivComponent__WEBPACK_IMPORTED_MODULE_3__["default"](currentBarCircleDiv, '', '', { class: 'bar__current-circle' });
    }
    ;
    updateProgressBar(e) {
        let percentage = 0;
        if (e instanceof MouseEvent) {
            percentage = this.calculatePercentage(e.clientX);
        }
        else {
            percentage = this.calculatePercentage(e.touches[0].clientX);
        }
        this.currentBar.style.width = `${percentage}%`;
        this.currentBarCircle.div.style.left = `${percentage}%`;
    }
    ;
    calculatePercentage(cursorX) {
        const barWidth = this.fullBar.offsetWidth;
        const clickOffset = cursorX - this.fullBar.getBoundingClientRect().left;
        return (clickOffset / barWidth) * 100;
    }
    onMouseDown(e) {
        // this.isDragging = true;
        // const percentage = this.calculatePercentage(e.clientX);
        //
        // this.currentBarCircle.div.style.left = `${percentage}%`;
        // this.currentBar.style.width = `${percentage}%`;
        // console.log('onMouseDown')
        this.isDragging = true;
        this.updateProgressBar(e);
    }
    ;
    onMouseMove(e) {
        console.log('onMouseMove');
        const cursorX = e.clientX;
        const percentage = this.calculatePercentage(cursorX);
        this.barHelper.div.style.left = `${percentage}%`;
        this.barHelper.div.innerText = (percentage / 100 * this.maxValue).toFixed(2); // TODO change trailer time
        this.barHelper.show();
        this.currentBarCircle.show();
        if (this.isDragging) {
            this.updateProgressBar(e);
        }
    }
    ;
    onMouseUp(e) {
        // console.log('onMouseUp')
        this.isDragging = false;
    }
    ;
    onMouseOut(e) {
        this.barHelper.hide(); // TODO check before hide?
        this.currentBarCircle.hide();
    }
    onTouchStart(e) {
        // console.log('onTouchStart')
        this.isDragging = true;
        const touchEventWithTarget = e;
        this.updateProgressBar(touchEventWithTarget);
    }
    ;
    onTouchMove(e) {
        // console.log('onTouchMove')
        if (this.isDragging) {
            const touchEventWithTarget = e;
            this.updateProgressBar(touchEventWithTarget);
        }
    }
    ;
    onTouchEnd(e) {
        // console.log('onTouchEnd')
        this.isDragging = false;
    }
    ;
    addEventListeners() {
        this.element.addEventListener("mousedown", (e) => this.onMouseDown(e));
        this.element.addEventListener("mousemove", (e) => this.onMouseMove(e));
        this.element.addEventListener("mouseup", (e) => this.onMouseUp(e));
        this.element.addEventListener("mouseout", (e) => this.onMouseOut(e));
        this.element.addEventListener("touchstart", (e) => this.onTouchStart(e));
        this.element.addEventListener("touchmove", (e) => this.onTouchMove(e));
        this.element.addEventListener("touchend", (e) => this.onTouchEnd(e));
    }
    ;
    removeEventListeners() {
        this.element.removeEventListener("mousedown", (e) => this.onMouseDown(e));
        this.element.removeEventListener("mousemove", (e) => this.onMouseMove(e));
        this.element.removeEventListener("mouseup", (e) => this.onMouseUp(e));
        this.element.removeEventListener("mouseout", (e) => this.onMouseOut(e));
        this.element.removeEventListener("touchstart", (e) => this.onTouchStart(e));
        this.element.removeEventListener("touchmove", (e) => this.onTouchMove(e));
        this.element.removeEventListener("touchend", (e) => this.onTouchEnd(e));
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarComponent);


/***/ }),

/***/ "./src/App/Components/BaseComponent/BaseComponent.ts":
/*!***********************************************************!*\
  !*** ./src/App/Components/BaseComponent/BaseComponent.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _BaseComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseComponent.hbs */ "./src/App/Components/BaseComponent/BaseComponent.hbs");
/* harmony import */ var _BaseComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BaseComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseComponent.css */ "./src/App/Components/BaseComponent/BaseComponent.css");



class BaseComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _BaseComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data), '.js-root');
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseComponent);


/***/ }),

/***/ "./src/App/Components/ButtonComponent/ButtonComponent.ts":
/*!***************************************************************!*\
  !*** ./src/App/Components/ButtonComponent/ButtonComponent.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _ButtonComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonComponent.hbs */ "./src/App/Components/ButtonComponent/ButtonComponent.hbs");
/* harmony import */ var _ButtonComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ButtonComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ButtonComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonComponent.css */ "./src/App/Components/ButtonComponent/ButtonComponent.css");



class ButtonComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    buttonProps = {
        coordinateX: { name: '--coord-x', value: 0 },
        coordinateY: { name: '--coord-y', value: 0 },
        sizeSquare: { name: '--size-square', value: 0 },
        diameterHighlight: { name: '--diameter-highlight', value: 0 },
    };
    button;
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _ButtonComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data), '.js-button');
        this.button = this.element.querySelector('button') || this.element;
        this.setSizeSquare();
        this.setDiameterHighlight();
        this.bindMouseMoveEvent(this.onMouseMoveEvent);
    }
    ;
    setSizeSquare() {
        setTimeout(() => {
            const buttonWidth = this.button.offsetWidth;
            const buttonHeight = this.button.offsetHeight;
            this.buttonProps['sizeSquare'].value = Math.sqrt(buttonWidth * buttonWidth + buttonHeight * buttonHeight);
            this.button.style.setProperty(this.buttonProps['sizeSquare'].name, `${this.buttonProps['sizeSquare'].value}px`);
        }, 0);
    }
    ;
    setDiameterHighlight() {
        setTimeout(() => {
            const buttonWidth = this.button.offsetWidth;
            const buttonHeight = this.button.offsetHeight;
            const diameter = Math.sqrt(buttonWidth * buttonWidth + buttonHeight * buttonHeight);
            const multiplySqrt = Math.sqrt(buttonWidth * buttonHeight);
            this.buttonProps['diameterHighlight'].value = diameter + multiplySqrt;
            this.button.style.setProperty(this.buttonProps['diameterHighlight'].name, `${this.buttonProps['diameterHighlight'].value}px`);
        }, 0);
    }
    block() {
        this.button.disabled = true;
    }
    ;
    unblock() {
        this.button.disabled = false;
    }
    ;
    bindClickEvent(listener) {
        this.button.addEventListener('click', listener.bind(this));
    }
    ;
    unbindClickEvent(listener) {
        this.button.removeEventListener('click', listener.bind(this));
    }
    ;
    bindMouseMoveEvent(listener) {
        this.button.addEventListener('mousemove', listener.bind(this));
    }
    ;
    unbindMouseMoveEvent(listener) {
        this.button.removeEventListener('mousemove', listener.bind(this));
    }
    ;
    onMouseMoveEvent(e) {
        const mouseEvent = e;
        this.buttonProps['coordinateX'].value = mouseEvent.offsetX;
        this.buttonProps['coordinateY'].value = mouseEvent.offsetY;
        this.button.style.setProperty(this.buttonProps['coordinateX'].name, `${this.buttonProps['coordinateX'].value}px`);
        this.button.style.setProperty(this.buttonProps['coordinateY'].name, `${this.buttonProps['coordinateY'].value}px`);
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonComponent);


/***/ }),

/***/ "./src/App/Components/DivComponent/DivComponent.ts":
/*!*********************************************************!*\
  !*** ./src/App/Components/DivComponent/DivComponent.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _DivComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DivComponent.hbs */ "./src/App/Components/DivComponent/DivComponent.hbs");
/* harmony import */ var _DivComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DivComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);


class DivComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    div;
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _DivComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data), 'div');
        this.div = this.element.querySelector('div') || this.element;
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DivComponent);


/***/ }),

/***/ "./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.ts":
/*!*******************************************************************************!*\
  !*** ./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _DropdownButtonComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownButtonComponent.hbs */ "./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.hbs");
/* harmony import */ var _DropdownButtonComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DropdownButtonComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DropdownButtonComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownButtonComponent.css */ "./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.css");
/* harmony import */ var _LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LinkComponent/LinkComponent */ "./src/App/Components/LinkComponent/LinkComponent.ts");




class DropdownButtonComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    dropdownContentItems;
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _DropdownButtonComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()({ dataAction: data.dataAction, avatar: data.avatar }), '.js-dropdown');
        this.dropdownContentItems = this.element.querySelector('.js-dropdown-content-container__items');
        data.items?.forEach(item => {
            const link = new _LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_3__["default"](this.dropdownContentItems, '', '', item);
            link.show();
        });
        // this.bindClickEvent(this.handleClick.bind(this));
    }
    ;
    // /**
    //  * Функция добавления обработчика события нажатия на компонент
    //  * @param  {any} listener - Callback функция для события
    //  * @returns {void}
    //  */
    // public bindClickEvent(listener: any): void {
    //     this.element.addEventListener('click', listener.bind(this));
    // };
    handleClick(e) {
        // this.querySelector('.dropdown__content')?.classList.toggle('dropdown__content__show');
        // e.preventDefault();
        // e.stopPropagation();
        // TODO: How to check it I clicked somewhere not to this. Add transparent div and handleClick on it?
        // if (!(<HTMLElement>e.target).matches('.dropdown__button')) {
        //     const dropdownItems = document.getElementsByClassName('dropdown__content');
        //     console.log(dropdownItems);
        //
        //     for (let item of dropdownItems) {
        //         if (item.classList.contains('dropdown__content__show')) {
        //             item.classList.remove('dropdown__content__show');
        //         }
        //     }
        // }
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownButtonComponent);


/***/ }),

/***/ "./src/App/Components/FormComponent/FormComponent.ts":
/*!***********************************************************!*\
  !*** ./src/App/Components/FormComponent/FormComponent.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _FormComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormComponent.hbs */ "./src/App/Components/FormComponent/FormComponent.hbs");
/* harmony import */ var _FormComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FormComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormComponent.css */ "./src/App/Components/FormComponent/FormComponent.css");
/* harmony import */ var _InputComponent_InputComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InputComponent/InputComponent */ "./src/App/Components/InputComponent/InputComponent.ts");
/* harmony import */ var _ButtonComponent_ButtonComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ButtonComponent/ButtonComponent */ "./src/App/Components/ButtonComponent/ButtonComponent.ts");
/* harmony import */ var _LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LinkComponent/LinkComponent */ "./src/App/Components/LinkComponent/LinkComponent.ts");
/* harmony import */ var _Utils_Validators_Validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Utils/Validators/Validator */ "./src/App/Utils/Validators/Validator.ts");







class FormComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    inputs;
    submitButton;
    links;
    constructor(parent, template = '', topElem = '', data) {
        super(parent, _FormComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()({ formId: data?.formId, enctype: data?.enctype }), '.js-form');
        const formContent = this.element.querySelector('.form__content');
        const formFooter = this.element.querySelector('.form__footer');
        this.inputs = [];
        this.links = [];
        data?.inputs.forEach(input => {
            const inputComponent = new _InputComponent_InputComponent__WEBPACK_IMPORTED_MODULE_3__["default"](formContent, '', '', input);
            inputComponent.show();
            this.inputs.push(inputComponent);
        });
        this.submitButton = new _ButtonComponent_ButtonComponent__WEBPACK_IMPORTED_MODULE_4__["default"](formContent, '', '', data?.button);
        this.submitButton.show();
        data?.links?.forEach(link => {
            const linkElement = new _LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_5__["default"](formFooter, '', '', link);
            linkElement.show();
            this.links.push(linkElement);
        });
    }
    ;
    // public getData(): { id: string, value: string }[] {
    //     return this.inputs.map((inputComponent) => {
    //         return inputComponent.getData();
    //     });
    // };
    validateEmptyFields(fields) {
        return fields.map(field => {
            if (field.isEmptyData()) {
                field.showErrorMsg('Пустое поле');
                return false;
            }
            field.hideErrorMsg();
            return true;
        }).every(isValid => isValid);
    }
    ;
    validatePasswordFields() {
        let isValid = true;
        const passwordField = this.findInputComponent('password');
        const repeatPasswordField = this.findInputComponent('repeat-password');
        if (passwordField) { // If exists password field
            const validatedPassword = (0,_Utils_Validators_Validator__WEBPACK_IMPORTED_MODULE_6__.validateInput)(passwordField.getData());
            if (!validatedPassword.isValid) { // If data in password field is incorrect
                passwordField.showErrorMsg(validatedPassword.errorMsg);
                isValid = false;
            }
            else {
                passwordField.hideErrorMsg();
                isValid = true;
            }
            if (repeatPasswordField) { // If exists repeat password field
                const validatedPasswords = (0,_Utils_Validators_Validator__WEBPACK_IMPORTED_MODULE_6__.validatePasswords)(passwordField.input.value, repeatPasswordField.input.value);
                if (!validatedPasswords.isValid) { // If passwords not match
                    repeatPasswordField.showErrorMsg(validatedPasswords.passwordErrorMsg);
                    isValid = false;
                }
                else {
                    repeatPasswordField.hideErrorMsg();
                    isValid = true;
                }
            }
        }
        return isValid;
    }
    ;
    validateInputFields() {
        let isValid = true;
        const inputFields = this.inputs.filter(inputComponent => inputComponent.input.id.toLowerCase().indexOf('password') === -1);
        if (inputFields) {
            inputFields.forEach(inputField => {
                const validatedInput = (0,_Utils_Validators_Validator__WEBPACK_IMPORTED_MODULE_6__.validateInput)(inputField.getData());
                if (!validatedInput.isValid) {
                    inputField.showErrorMsg(validatedInput.errorMsg);
                    // this.submitButton.block(); // TODO: block here or in controller?
                    isValid = false;
                    return;
                }
                inputField.hideErrorMsg();
                // this.submitButton.unblock(); // TODO: unblock here or in controller? Also this block needs in validatePasswordFields
            });
        }
        return isValid;
    }
    ;
    validateWithEmpty() {
        return this.validateInputFields() && this.validatePasswordFields();
    }
    ;
    validateWithoutEmpty() {
        return this.validatePasswordFields();
    }
    ;
    setDataToFields(fieldsWithValue) {
        fieldsWithValue.forEach(({ id, value }) => {
            this.findInputComponent(id).input.value = value;
        });
    }
    findInputComponent(id) {
        return this.inputs.find(inputComponent => inputComponent.input.id === id);
    }
    ;
    bindInputsEvent(listener) {
        this.inputs.forEach((inputComponent) => {
            inputComponent.bindInputEvent(listener);
        });
    }
    ;
    bindSubmitEvent(listener) {
        this.submitButton.bindClickEvent(listener);
    }
    ;
    bindLinksEvent(listener) {
        this.links.forEach((linkComponent) => {
            linkComponent.bindClickEvent(listener);
        });
    }
    ;
    bindFileClickEvent(listener) {
        this.findInputComponent('avatar').bindClickEvent(listener);
    }
    ;
    bindCheckboxClickEvent(listener) {
        this.findInputComponent('avatar-checkbox').bindClickEvent(listener);
    }
    ;
    saveDataToStorage(key) {
        const data = {};
        this.inputs.forEach((inputComponent) => {
            data[inputComponent.input.id] = inputComponent.input.value;
        });
        localStorage.setItem(key, JSON.stringify(data));
    }
    ;
    getDataFromStorage(key) {
        const savedData = localStorage.getItem(key);
        if (savedData) {
            const data = JSON.parse(savedData);
            Object.entries(data).forEach(([id, value]) => {
                this.findInputComponent(id).input.value = value;
            });
        }
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormComponent);


/***/ }),

/***/ "./src/App/Components/IComponent/IComponent.ts":
/*!*****************************************************!*\
  !*** ./src/App/Components/IComponent/IComponent.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class IComponent {
    /**
     * Родительский элемент для данного вида
     * @member
     * @protected
     * @type {HTMLElement}
     */
    parent;
    /**
     * Корневой элемент для данного вида
     * @member
     * @protected
     * @type {HTMLElement}
     */
    element;
    constructor(parent, template, topElement, data) {
        this.parent = parent;
        const parser = new DOMParser();
        const element = parser.parseFromString(template, 'text/html').querySelector(topElement);
        if (!element) {
            throw Error('Невозможно найти элемент в шаблоне!');
        }
        this.element = element;
    }
    ;
    toHTMLElement() {
        return this.element;
    }
    ;
    querySelector(element) {
        return this.parent.querySelector(element);
    }
    ;
    show() {
        this.parent.appendChild(this.element);
    }
    ;
    hide() {
        this.parent.removeChild(this.element);
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IComponent);


/***/ }),

/***/ "./src/App/Components/InputComponent/InputComponent.ts":
/*!*************************************************************!*\
  !*** ./src/App/Components/InputComponent/InputComponent.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _InputComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputComponent.hbs */ "./src/App/Components/InputComponent/InputComponent.hbs");
/* harmony import */ var _InputComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_InputComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InputComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputComponent.css */ "./src/App/Components/InputComponent/InputComponent.css");



class InputComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    input;
    inputError;
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _InputComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data), '.js-input-field');
        this.input = this.element.querySelector('input') || this.element;
        this.inputError = this.element.querySelector('[class*=error-msg]');
    }
    ;
    getData() {
        return { id: this.input.id, value: this.input.value };
    }
    ;
    isEmptyData() {
        return this.input.value === '';
    }
    ;
    showErrorMsg(errorMsg) {
        this.input.classList.add('input-field__input--error');
        this.inputError.innerHTML = errorMsg;
        this.inputError.classList.add('input-field__error-msg--error');
    }
    ;
    hideErrorMsg() {
        this.input.classList.remove('input-field__input--error');
        this.inputError.innerHTML = '';
        this.inputError.classList.remove('input-field__error-msg--error');
    }
    bindInputEvent(listener) {
        const input = this.toHTMLElement();
        if (input !== null) {
            input.addEventListener('input', listener.bind(this));
        }
    }
    ;
    bindClickEvent(listener) {
        this.input.addEventListener('click', listener.bind(this));
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputComponent);


/***/ }),

/***/ "./src/App/Components/LinkComponent/LinkComponent.ts":
/*!***********************************************************!*\
  !*** ./src/App/Components/LinkComponent/LinkComponent.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _LinkComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkComponent.hbs */ "./src/App/Components/LinkComponent/LinkComponent.hbs");
/* harmony import */ var _LinkComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LinkComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LinkComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkComponent.css */ "./src/App/Components/LinkComponent/LinkComponent.css");



class LinkComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    link;
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _LinkComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data), '.js-link');
        this.link = this.element.querySelector('a') || this.element;
    }
    ;
    bindClickEvent(listener) {
        this.link.addEventListener('click', listener.bind(this));
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkComponent);


/***/ }),

/***/ "./src/App/Components/ListComponent/ListComponent.ts":
/*!***********************************************************!*\
  !*** ./src/App/Components/ListComponent/ListComponent.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _ListComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListComponent.hbs */ "./src/App/Components/ListComponent/ListComponent.hbs");
/* harmony import */ var _ListComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ListComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListComponent.css */ "./src/App/Components/ListComponent/ListComponent.css");



class ListComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    items;
    get getElement() {
        return this.element;
    }
    ;
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _ListComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data.listClass), '.js-list');
        this.items = Object.assign([], data.items);
        this.renderItems(data.itemClass);
    }
    ;
    renderItems(itemClass) {
        this.items.forEach(({ componentType, componentData }) => {
            const li = document.createElement('li');
            li.classList.add(itemClass || '');
            const l = new componentType(li, '', '', componentData);
            l.show();
            this.element.appendChild(li);
        });
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListComponent);


/***/ }),

/***/ "./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.ts":
/*!*******************************************************************************!*\
  !*** ./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _VerticalSpacerComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalSpacerComponent.hbs */ "./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.hbs");
/* harmony import */ var _VerticalSpacerComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_VerticalSpacerComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VerticalSpacerComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalSpacerComponent.css */ "./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.css");



class VerticalSpacerComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _VerticalSpacerComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data), '.js-vertical-spacer');
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerticalSpacerComponent);


/***/ }),

/***/ "./src/App/Config/Config.ts":
/*!**********************************!*\
  !*** ./src/App/Config/Config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsrfTokenName": () => (/* binding */ CsrfTokenName),
/* harmony export */   "REQUEST_METHODS": () => (/* binding */ REQUEST_METHODS),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "customFailures": () => (/* binding */ customFailures)
/* harmony export */ });
const REQUEST_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};
const CsrfTokenName = 'csrf_token';
const headersWithUnicode = {
    'Content-Type': 'application/json;charset=utf-8',
};
const headersWithEmpty = {
    'Content-Type': '',
};
const failureDefaultStatuses = {
    '400': 'Неверный запрос',
    // '401': 'No Cookie',
    // '405': 'Неверный HTTP метод',
    '500': 'Ошибка сервера',
};
const customFailures = {
    '1': 'Пользователь уже существует',
    '2': 'Неверный формат почты',
    '3': 'Пароль должен быть...',
    '4': 'Неверная почта или пароль',
    '5': 'Размер файла выше максимально допустимого',
    '6': 'Файл не является картинкой формата jpg',
    '7': 'Пользователь с этой почтой уже существует',
};
const config = {
    // host: 'http://89.208.199.170/',
    host: 'http://filmium.ru/api',
    // host: 'http://89.208.199.170:8100/api',
    api: {
        csrf: {
            url: '/user/csrf',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': '',
                },
                failure: failureDefaultStatuses,
            },
        },
        signIn: {
            url: '/user/signin',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Авторизация успешна',
                },
                failure: failureDefaultStatuses,
            },
        },
        signUp: {
            url: '/user/signup',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Регистрация успешна',
                },
                failure: failureDefaultStatuses,
            },
        },
        logout: {
            url: '/user/logout',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Пользователь вышел',
                },
                failure: failureDefaultStatuses,
            },
        },
        profile: {
            url: '/user/profile',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Данные о пользователе успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        film: {
            url: '/films/{:id}',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Данные о фильме успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        selections: {
            url: '/selections',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Подборки успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        person: {
            url: '/persons/{:id}',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Данные о персоне успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        update: {
            url: '/user/update',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Данные успешно обновлены',
                },
                failure: failureDefaultStatuses,
            },
        },
        avatarUpdate: {
            url: '/user/avatar/update',
            method: REQUEST_METHODS.POST,
            headers: headersWithEmpty,
            statuses: {
                success: {
                    '200': 'Аватарка успешно обновлена',
                },
                failure: {
                    ...failureDefaultStatuses,
                    '413': 'Слишком большой размер файла',
                },
            },
        },
        avatarDelete: {
            url: '/user/avatar/delete',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Аватарка успешно удалена',
                },
                failure: failureDefaultStatuses,
            },
        }
    }
};



/***/ }),

/***/ "./src/App/Controllers/FilmController/FilmController.ts":
/*!**************************************************************!*\
  !*** ./src/App/Controllers/FilmController/FilmController.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _Controllers_PlayerController_PlayerController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Controllers/PlayerController/PlayerController */ "./src/App/Controllers/PlayerController/PlayerController.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");




class FilmController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    filmId;
    trailerSrc;
    playerController;
    constructor(view, model) {
        super(view, model);
        this.filmId = null;
        this.trailerSrc = null;
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('new-player', () => {
            this.view.playerView?.hide();
            this.view.newPlayerView();
            this.playerController = new _Controllers_PlayerController_PlayerController__WEBPACK_IMPORTED_MODULE_1__["default"](this.view.playerView);
        });
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('unmount-all', this.unmountComponent.bind(this));
        this.view.bindClickEvent(this.handleClick.bind(this));
    }
    ;
    async mountComponent(opts) {
        if (!opts) {
            _Router_Router__WEBPACK_IMPORTED_MODULE_3__["default"].showUnknownPage();
        }
        if (!this.isMounted) {
            if (opts?.id) {
                this.filmId = opts.id;
                this.model.getFilm(this.filmId)
                    .then((data) => {
                    this.trailerSrc = data.content?.trailerURL || null;
                    this.view.fillFilm(data);
                    // this.view.show();
                    // this.isMounted = true;
                    super.mountComponent();
                })
                    .catch((error) => {
                    _Router_Router__WEBPACK_IMPORTED_MODULE_3__["default"].showUnknownPage();
                    return;
                });
            }
        }
    }
    ;
    unmountComponent() {
        if (this.isMounted) {
            this.playerController.unmountComponent();
            super.unmountComponent();
            this.filmId = null;
            this.trailerSrc = null;
        }
    }
    ;
    handleClick(e) {
        e.preventDefault();
        if (this.isMounted) {
            const href = e.target.closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                _Router_Router__WEBPACK_IMPORTED_MODULE_3__["default"].goToPath(href);
            }
            const target = e.target;
            const action = target.closest('[data-action]')?.dataset['action'];
            switch (action) {
                case 'subscribe': {
                    break;
                }
                case 'trailer': {
                    console.log('Clicked!');
                    console.log(this.trailerSrc);
                    if (this.trailerSrc) {
                        // this.playerController.setSrc(this.trailerSrc);
                    }
                    this.playerController.mountComponent();
                    break;
                }
                default:
                    break;
            }
            return;
        }
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilmController);


/***/ }),

/***/ "./src/App/Controllers/HeaderController/HeaderController.ts":
/*!******************************************************************!*\
  !*** ./src/App/Controllers/HeaderController/HeaderController.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _Models_IModel_IModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Models/IModel/IModel */ "./src/App/Models/IModel/IModel.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");




/**
 * Котроллер для хэдера
 * @category Header
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента хэдер
 */
class HeaderController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(view) {
        super(view, _Models_IModel_IModel__WEBPACK_IMPORTED_MODULE_1__["default"]);
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('unmount-all', this.unmountComponent.bind(this));
        this.view.bindClickEvent(this.handleClick.bind(this));
        // TODO
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('user-changed', (user) => {
            console.log('user-changed', user);
            if (user) {
                this.view.changeHeaderProfile('profile', user);
            }
            else {
                this.view.changeHeaderProfile('signIn');
            }
        });
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('render-signInButton', () => {
            this.view.changeHeaderProfile('signIn');
        });
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('render-profileButton', () => {
            this.view.changeHeaderProfile('profile');
        });
    }
    ;
    /**
     * Функция обработки нажатия на хедер
     * (приватное поле класса)
     * @param  {Event} e
     * @returns {void}
     */
    handleClick(e) {
        e.preventDefault();
        if (this.isMounted) {
            this.view.hideProfile();
            const href = e.target.closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                _Router_Router__WEBPACK_IMPORTED_MODULE_3__["default"].goToPath(href);
            }
            const target = e.target;
            const action = target.closest('[data-action]')?.dataset['action'];
            switch (action) {
                case 'profile': {
                    this.view.toggleProfile();
                    break;
                }
                case 'signIn': {
                    // EventDispatcher.emit('signIn');
                    break;
                }
                default:
                    break;
            }
            return;
        }
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderController);


/***/ }),

/***/ "./src/App/Controllers/IController/IController.ts":
/*!********************************************************!*\
  !*** ./src/App/Controllers/IController/IController.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Базовый класс для контроллера компонента приложения.
 * Связывает вид с моделью
 * @class
 * @virtual
 * @param  {tView<IView>} view Вид, которым управляет контроллер
 * @param  {tModel<IModel>} model Модель, которой пользуется контроллер
 */
class IController {
    /**
     * Вид, которым управляет контроллер
     * @protected
     */
    view;
    /**
     * Модель, которой пользуется контроллер
     * @protected
     */
    model;
    /**
     * Флаг. Отображается ли данный компонент на странице
     * @protected
     */
    isMounted;
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.isMounted = false;
    }
    /**
     * Функция устрановки компонента.
     * Отрисовывает элемент и управляет им.
     * @return {void}
     */
    mountComponent() {
        if (!this.isMounted) {
            this.view.show();
            this.isMounted = true;
        }
    }
    /**
     * Функция убирания компонента.
     * Отрисовывает элемент и управляет им.
     * @return {void}
     */
    unmountComponent() {
        if (this.isMounted) {
            this.view.hide();
            this.isMounted = false;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IController);


/***/ }),

/***/ "./src/App/Controllers/MainController/MainController.ts":
/*!**************************************************************!*\
  !*** ./src/App/Controllers/MainController/MainController.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");



class MainController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(view, model) {
        super(view, model);
        // this.view.bindClickEvent(this.handleClick.bind(this));
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('unmount-all', this.unmountComponent.bind(this));
    }
    ;
    async mountComponent() {
        if (!this.isMounted) {
            super.mountComponent();
            this.model.selections.getSelections()
                .then((data) => {
                this.view.fillSelections(data);
                this.view.bindClickEvent(this.handleClick.bind(this));
            })
                .catch((error) => {
                _Router_Router__WEBPACK_IMPORTED_MODULE_2__["default"].showUnknownPage();
                return;
            });
        }
    }
    ;
    handleClick(e) {
        e.preventDefault();
        if (this.isMounted) {
            const href = e.target.closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                _Router_Router__WEBPACK_IMPORTED_MODULE_2__["default"].goToPath(href);
            }
            return;
        }
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainController);


/***/ }),

/***/ "./src/App/Controllers/ModalRightController/ModalRightController.ts":
/*!**************************************************************************!*\
  !*** ./src/App/Controllers/ModalRightController/ModalRightController.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _Controllers_SignInController_SignInController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Controllers/SignInController/SignInController */ "./src/App/Controllers/SignInController/SignInController.ts");
/* harmony import */ var _Controllers_SignUpController_SignUpController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Controllers/SignUpController/SignUpController */ "./src/App/Controllers/SignUpController/SignUpController.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");





/**
 * Котроллер для правого модального окна
 * @category ModalRight
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента правого модального окна
 * @param  {UserModel} model Объект модели пользователя
 */
class ModalRightController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    currentController;
    constructor(view, model) {
        super(view, model);
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe('unmount-all', this.unmountComponent.bind(this));
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe('modalRight-setSignIn', (userModel) => {
            this.view.currentView?.hide();
            this.view.setSignInView();
            this.currentController = new _Controllers_SignInController_SignInController__WEBPACK_IMPORTED_MODULE_1__["default"](this.view.currentView, userModel);
        });
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe('modalRight-setSignUp', (userModel) => {
            this.view.currentView?.hide();
            this.view.setSignUpView();
            this.currentController = new _Controllers_SignUpController_SignUpController__WEBPACK_IMPORTED_MODULE_2__["default"](this.view.currentView, userModel);
        });
        this.view.bindClickEvent(this.handleClick.bind(this));
    }
    ;
    mountComponent() {
        this.currentController.getFormDataFromStorage();
        this.currentController?.mountComponent();
        super.mountComponent();
    }
    ;
    unmountComponent() {
        this.currentController?.unmountComponent();
        super.unmountComponent();
    }
    ;
    handleClick(e) {
        e.preventDefault();
        if (this.isMounted) {
            // TODO: check only if click not on modal right, it also click on close btn (not necessary check it?)
            const modalContent = e.target.closest('.modal__content');
            if (!modalContent) {
                this.currentController.saveFormDataToStorage();
                this.unmountComponent();
                _Router_Router__WEBPACK_IMPORTED_MODULE_4__["default"].goToPath(_Router_Router__WEBPACK_IMPORTED_MODULE_4__["default"].getNearestNotAuthUrl());
            }
        }
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalRightController);


/***/ }),

/***/ "./src/App/Controllers/PersonController/PersonController.ts":
/*!******************************************************************!*\
  !*** ./src/App/Controllers/PersonController/PersonController.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");



class PersonController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    personId;
    constructor(view, model) {
        super(view, model);
        this.personId = null;
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('unmount-all', this.unmountComponent.bind(this));
        this.view.bindClickEvent(this.handleClick.bind(this));
    }
    ;
    async mountComponent(opts) {
        if (!opts) {
            _Router_Router__WEBPACK_IMPORTED_MODULE_2__["default"].showUnknownPage();
        }
        if (!this.isMounted) {
            if (opts?.id) {
                this.personId = opts.id;
                this.model.getPerson(this.personId)
                    .then((data) => {
                    this.view.fillPerson(data);
                    super.mountComponent();
                })
                    .catch((error) => {
                    _Router_Router__WEBPACK_IMPORTED_MODULE_2__["default"].showUnknownPage();
                    return;
                });
            }
        }
    }
    ;
    unmountComponent() {
        if (this.isMounted) {
            super.unmountComponent();
            this.personId = null;
        }
    }
    ;
    handleClick(e) {
        console.log('Person handleClick');
        e.preventDefault();
        if (this.isMounted) {
            const href = e.target.closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                _Router_Router__WEBPACK_IMPORTED_MODULE_2__["default"].goToPath(href);
            }
            return;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonController);


/***/ }),

/***/ "./src/App/Controllers/PlayerController/PlayerController.ts":
/*!******************************************************************!*\
  !*** ./src/App/Controllers/PlayerController/PlayerController.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _Models_IModel_IModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Models/IModel/IModel */ "./src/App/Models/IModel/IModel.ts");


class PlayerController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    videoTime;
    videoTimeMinutes;
    videoTimeSeconds;
    previousVolume;
    constructor(view) {
        super(view, _Models_IModel_IModel__WEBPACK_IMPORTED_MODULE_1__["default"]);
        // this.videoTime = 0;
        // this.videoTimeMinutes = 0;
        // this.videoTimeSeconds = 0;
        // this.previousVolume = 0;
        //
        // this.initialVideo = this.initialVideo.bind(this);
        // this.toggleVideoStatus = this.toggleVideoStatus.bind(this);
        // this.stopVideo = this.stopVideo.bind(this);
        // this.mute = this.mute.bind(this);
        // this.setVideoVolume = this.setVideoVolume.bind(this);
        // this.updateTime = this.updateTime.bind(this);
        // this.setProgress = this.setProgress.bind(this);
        //
        // this.initialVideo();
        // this.addEventListeners();
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerController);


/***/ }),

/***/ "./src/App/Controllers/SettingsController/SettingsController.ts":
/*!**********************************************************************!*\
  !*** ./src/App/Controllers/SettingsController/SettingsController.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");
/* harmony import */ var _Utils_Validators_Validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/Validators/Validator */ "./src/App/Utils/Validators/Validator.ts");




/**
 * Котроллер для
 * @category Header
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента
 */
class SettingsController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(view, model) {
        super(view, model);
        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.form.bindFileClickEvent(this.onFileClick.bind(this));
        this.view.form.bindCheckboxClickEvent(this.onCheckboxClick.bind(this));
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('unmount-all', this.unmountComponent.bind(this));
    }
    ;
    mountComponent() {
        if (!this.isMounted) {
            const user = this.model.getCurrentUser();
            console.log('Settings controller', user);
            if (!user) {
                return;
            }
            this.view.show({ user: user });
            this.isMounted = true;
        }
    }
    ;
    onFileClick(e) {
        e.stopPropagation();
    }
    ;
    onCheckboxClick(e) {
        e.stopPropagation();
        console.log('Click checkbox');
    }
    ;
    validate() {
        const emailComponent = this.view.form.findInputComponent('email');
        const passwordComponent = this.view.form.findInputComponent('password');
        const repeatPasswordComponent = this.view.form.findInputComponent('repeat-password');
        // const email = emailComponent.input.value;
        const password = passwordComponent.input.value;
        const repeatPassword = repeatPasswordComponent.input.value;
        const validateEmail = (0,_Utils_Validators_Validator__WEBPACK_IMPORTED_MODULE_3__.validateInput)(emailComponent.getData());
        if (!validateEmail.isValid) {
            emailComponent.showErrorMsg(validateEmail.errorMsg);
            return false;
        }
        if (password !== '') {
            if (password !== repeatPassword) {
                passwordComponent.showErrorMsg('');
                repeatPasswordComponent.showErrorMsg('Пароли не совпадают');
                return false;
            }
            const validatedPassword = (0,_Utils_Validators_Validator__WEBPACK_IMPORTED_MODULE_3__.validateInput)(passwordComponent.getData());
            if (!validatedPassword.isValid) {
                passwordComponent.showErrorMsg('');
                repeatPasswordComponent.showErrorMsg(validatedPassword.errorMsg);
                return false;
            }
            passwordComponent.hideErrorMsg();
            repeatPasswordComponent.hideErrorMsg();
        }
        return true;
    }
    handleClick(e) {
        e.preventDefault();
        if (this.isMounted) {
            const target = e.target;
            const href = target.closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                _Router_Router__WEBPACK_IMPORTED_MODULE_2__["default"].goToPath(href);
            }
            const button = target.closest('#save-submit-btn');
            if (button !== undefined && button !== null) {
                console.log(this.view.form.inputs);
                console.log('validate');
                if (!this.validate()) {
                    console.log('return');
                    return;
                }
                const userData = {
                    email: this.view.form.findInputComponent('email').input.value,
                    date_birth: '2000-Jan-01',
                    password: this.view.form.findInputComponent('password').input.value,
                };
                const fileInput = this.view.form.findInputComponent('avatar').input;
                const formData = new FormData();
                const file = fileInput.files && fileInput.files[0];
                if (file) {
                    console.log('If file');
                    if (this.view.form.findInputComponent('avatar-checkbox').input.checked) {
                        console.log('If checked 1');
                        this.view.form.findInputComponent('repeat-password').showErrorMsg('Нельзя удалить и поставить аватарку!');
                        return;
                    }
                    else {
                        console.log('Not checked 1');
                        formData.append('avatar', file);
                        this.model.avatarUpdate(formData)
                            .then(() => {
                            this.view.form.inputs.forEach((inputComponent) => {
                                inputComponent.hideErrorMsg();
                            });
                        })
                            .catch(({ msg }) => {
                            console.log(msg);
                            this.view.form.findInputComponent('avatar').showErrorMsg(msg);
                        });
                        return;
                    }
                }
                else {
                    console.log('Not file');
                    console.log(this.view.form.findInputComponent('avatar-checkbox').input.checked);
                    if (this.view.form.findInputComponent('avatar-checkbox').input.checked) {
                        console.log('If checked 2');
                        this.model.avatarDelete()
                            .then(() => {
                        })
                            .catch((errorMsg) => {
                        });
                        return;
                    }
                }
                console.log('userData', userData);
                console.log({ body: formData });
                this.model.updateUser(userData)
                    .then(() => {
                    this.view.form.inputs.forEach((inputComponent) => {
                        inputComponent.hideErrorMsg();
                    });
                })
                    .catch(({ msg }) => {
                    console.log('errorMsg', msg);
                    this.view.form.findInputComponent('email').showErrorMsg(msg);
                });
                // this.model.avatarUpdate(formData);
            }
            return;
        }
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsController);


/***/ }),

/***/ "./src/App/Controllers/SignInController/SignInController.ts":
/*!******************************************************************!*\
  !*** ./src/App/Controllers/SignInController/SignInController.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");
/* harmony import */ var _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Router/RouterPaths */ "./src/App/Router/RouterPaths.ts");



/**
 * Котроллер для
 * @category SignIn
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента
 * @param  {UserModel} model Объект модели пользователя
 */
class SignInController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(view, model) {
        super(view, model);
        this.view.form.bindSubmitEvent(this.onSubmit.bind(this));
        this.view.form.bindLinksEvent(this.onRedirect.bind(this));
    }
    ;
    validateFormFields() {
        const emailField = this.view.form.findInputComponent('email');
        const passwordField = this.view.form.findInputComponent('password');
        if (!emailField || !passwordField) {
            throw Error('Fields dont exists');
        }
        return this.view.form.validateEmptyFields([emailField, passwordField]);
    }
    ;
    onInput(e) {
        e.preventDefault();
        if (this.isMounted) {
        }
    }
    ;
    onSubmit(e) {
        e.preventDefault();
        if (this.isMounted) {
            this.view.form.bindInputsEvent(this.onInput.bind(this));
            const button = e.target.closest('.signIn-button');
            if (button.classList.contains('button--disabled')) { // TODO: check if disabled
                return;
            }
            if (!this.validateFormFields()) {
                return;
            }
            const userSignIn = {
                email: this.view.form.findInputComponent('email').input.value,
                password: this.view.form.findInputComponent('password').input.value,
            };
            this.model.signInUser(userSignIn).then(() => {
                _Router_Router__WEBPACK_IMPORTED_MODULE_1__["default"].goToPath(_Router_RouterPaths__WEBPACK_IMPORTED_MODULE_2__["default"].main);
            }).catch((errorMsg) => {
                this.view.form.findInputComponent('email').showErrorMsg('');
                this.view.form.findInputComponent('password').showErrorMsg(errorMsg);
            });
        }
    }
    ;
    onRedirect(e) {
        e.stopPropagation();
        e.preventDefault();
        if (this.isMounted) {
            const target = e.target;
            const href = target.closest('[href]').getAttribute('href') || '';
            this.saveFormDataToStorage();
            _Router_Router__WEBPACK_IMPORTED_MODULE_1__["default"].goToPath(href);
        }
    }
    ;
    saveFormDataToStorage() {
        this.view.form.saveDataToStorage('SignInData');
    }
    ;
    getFormDataFromStorage() {
        this.view.form.getDataFromStorage('SignInData');
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInController);


/***/ }),

/***/ "./src/App/Controllers/SignUpController/SignUpController.ts":
/*!******************************************************************!*\
  !*** ./src/App/Controllers/SignUpController/SignUpController.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");
/* harmony import */ var _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Router/RouterPaths */ "./src/App/Router/RouterPaths.ts");



/**
 * Котроллер для
 * @category SignUp
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента
 * @param  {UserModel} model Объект модели пользователя
 */
class SignUpController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(view, model) {
        super(view, model);
        this.view.form.bindSubmitEvent(this.onSubmit.bind(this));
        this.view.form.bindLinksEvent(this.onRedirect.bind(this));
    }
    ;
    onInput(e) {
        e.preventDefault();
        if (this.isMounted) {
            const isValid = this.view.form.validateWithEmpty();
            if (!isValid) {
                this.view.form.submitButton.block();
            }
            else {
                this.view.form.submitButton.unblock();
            }
        }
    }
    ;
    onSubmit(e) {
        e.preventDefault();
        if (this.isMounted) {
            this.view.form.bindInputsEvent(this.onInput.bind(this));
            const button = e.target.closest('.signUp-button');
            if (button.classList.contains('button--disabled')) { // TODO: check if disabled
                return;
            }
            if (!this.view.form.validateWithEmpty()) { // TODO: check if valid, but if valid always disabled. Useless check?
                return;
            }
            const userSignUp = {
                email: this.view.form.findInputComponent('email').input.value,
                password: this.view.form.findInputComponent('password').input.value,
                date_birth: '2000-Jan-01',
            };
            this.model.signUpUser(userSignUp).then(() => {
                _Router_Router__WEBPACK_IMPORTED_MODULE_1__["default"].goToPath(_Router_RouterPaths__WEBPACK_IMPORTED_MODULE_2__["default"].main);
            }).catch((errorMsg) => {
                this.view.form.findInputComponent('repeat-password').showErrorMsg(errorMsg);
            });
        }
    }
    ;
    onRedirect(e) {
        e.stopPropagation();
        e.preventDefault();
        if (this.isMounted) {
            const target = e.target;
            const href = target.closest('[href]').getAttribute('href') || '';
            this.saveFormDataToStorage();
            _Router_Router__WEBPACK_IMPORTED_MODULE_1__["default"].goToPath(href);
        }
    }
    ;
    saveFormDataToStorage() {
        this.view.form.saveDataToStorage('SignUpData');
    }
    ;
    getFormDataFromStorage() {
        this.view.form.getDataFromStorage('SignUpData');
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpController);


/***/ }),

/***/ "./src/App/EventDispatcher/EventDispatcher.ts":
/*!****************************************************!*\
  !*** ./src/App/EventDispatcher/EventDispatcher.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Класс работы с событиями приложения (cинглтон)
 * @class
 * @category EventDispatcher
 */
class EventDispatcher {
    /**
     * Хранилище эвентов
     * (Приватное поле класса)
     * @type {Map<string, Array<Function>>}
     */
    events;
    constructor() {
        this.events = new Map;
    }
    ;
    /**
     * Функция подписки на событие
     * @param  {string} eventName - Имя события
     * @param  {Function} callback - Действие, которое нужно выполнить при срабатывании события
     * @return {void}
     */
    subscribe(eventName, callback) {
        const callbackList = this.events.get(eventName);
        if (!callbackList) {
            this.events.set(eventName, [callback]);
            return;
        }
        callbackList.push(callback);
    }
    ;
    /**
     * Функция отписки от события
     * @param  {string} eventName - Имя события
     * @param  {Function} callback - Действие, которое нужно было выполнить при срабатывании события
     * @return {void}
     */
    unsubscribe(eventName, callback) {
        const callbackList = this.events.get(eventName);
        if (!callbackList) {
            return;
        }
        this.events.set(eventName, callbackList
            .filter((func) => {
            return func !== callback;
        }));
    }
    ;
    /**
     * Функция вызова события
     * @param  {string} eventName - Имя события
     * @param  {?any} data - Данные, которые нужно передать в функцию-обработчик
     * @return {void}
     */
    emit(eventName, data) {
        this.events.get(eventName)?.forEach(callback => {
            callback(data);
        });
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EventDispatcher());


/***/ }),

/***/ "./src/App/Models/FilmModel/FilmModel.ts":
/*!***********************************************!*\
  !*** ./src/App/Models/FilmModel/FilmModel.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IModel_IModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IModel/IModel */ "./src/App/Models/IModel/IModel.ts");
/* harmony import */ var _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Ajax/Ajax */ "./src/App/Ajax/Ajax.ts");
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Config/Config */ "./src/App/Config/Config.ts");



class FilmModel extends _IModel_IModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
    }
    ;
    parseFilm(json) {
        return {
            id: json.id,
            contentURL: json.content_url,
            content: this.parseContentForFilm(json.content),
        };
    }
    ;
    parseContentForFilm(content) {
        return {
            id: content.id,
            title: content.title,
            description: content.description,
            rating: content.rating,
            year: content.year,
            persons: this.parsePersonsForFilm(content.persons_roles),
            isFree: content.is_free,
            ageLimit: content.age_limit,
            trailerURL: content.trailer_url,
            previewURL: content.preview_url,
            type: content.type,
        };
    }
    ;
    parsePersonsForFilm(personsWithRoles) {
        return personsWithRoles.map((personWithRole) => {
            return this.parsePersonForFilm(personWithRole);
        });
    }
    ;
    parsePersonForFilm(personWithRole) {
        return {
            id: personWithRole.person.id,
            name: personWithRole.person.name,
            role: personWithRole.role.title,
        };
    }
    ;
    getFilmActors(persons) {
        const actorRole = { id: 0, title: 'ACTOR' };
        return persons.filter(person => person.role === actorRole.title);
    }
    getFilmDirectors(persons) {
        const directorRole = { id: 0, title: 'DIRECTOR' };
        return persons.filter(person => person.role === directorRole.title);
    }
    async getFilm(id) {
        let conf = Object.assign({}, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.film);
        conf.url = conf.url.replace('{:id}', id.toString());
        const response = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(conf);
        await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(response, conf);
        const filmData = this.parseFilm(response.responseBody.body.film);
        if (filmData.content) {
            filmData.content.actors = this.getFilmActors(filmData.content.persons || []);
            filmData.content.directors = this.getFilmDirectors(filmData.content.persons || []);
        }
        return Promise.resolve(filmData);
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilmModel);


/***/ }),

/***/ "./src/App/Models/IModel/IModel.ts":
/*!*****************************************!*\
  !*** ./src/App/Models/IModel/IModel.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Базовый класс для модели.
 * Выполняет бизнес логику и работает с данными и сетью.
 * @class
 * @virtual
 */
class IModel {
    constructor() { }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IModel);


/***/ }),

/***/ "./src/App/Models/PersonModel/PersonModel.ts":
/*!***************************************************!*\
  !*** ./src/App/Models/PersonModel/PersonModel.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IModel_IModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IModel/IModel */ "./src/App/Models/IModel/IModel.ts");
/* harmony import */ var _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Ajax/Ajax */ "./src/App/Ajax/Ajax.ts");
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Config/Config */ "./src/App/Config/Config.ts");



class PersonModel extends _IModel_IModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    genderMap = {
        F: 'Женский',
        M: 'Мужской',
    };
    roleMap = {
        DIRECTOR: 'Режиссёр',
        COMPOSER: 'Композитор',
        DESIGN: 'Дизайнер',
        EDITOR: 'Редактор',
        ACTOR: 'Актёр',
        OPERATOR: 'Оператор',
        PRODUCER: 'Продюссер',
        WRITER: 'Сценарист',
    };
    constructor() {
        super();
    }
    ;
    parsePerson(json) {
        return {
            id: json.id,
            name: json.name,
            gender: this.transformGender(json.gender),
            genres: this.parseGenres(json.genres),
            growth: json.growth,
            birthPlace: json.birthplace,
            avatarURL: json.avatar_url,
            age: json.age,
            roles: this.parsePersonRoles(json.roles),
            participatedIn: this.parseParticipatedContents(json.participated_in),
        };
    }
    ;
    parseGenres(genres) {
        return genres.map((genre) => {
            return this.parseGenre(genre);
        });
    }
    ;
    parseGenre(genre) {
        return {
            id: genre.id,
            name: genre.name,
        };
    }
    ;
    parsePersonRoles(roles) {
        return roles.map((role) => {
            return this.parsePersonRole(role);
        });
    }
    ;
    parsePersonRole(role) {
        return {
            id: role.id,
            title: this.transformRole(role.title),
        };
    }
    ;
    parseParticipatedContents(contents) {
        return contents.map((content) => {
            return this.parseParticipatedContent(content);
        });
    }
    ;
    parseParticipatedContent(content) {
        return {
            id: content.id,
            title: content.title,
        };
    }
    ;
    transformGender(gender) {
        return this.genderMap[gender];
    }
    ;
    transformRole(role) {
        return this.roleMap[role];
    }
    ;
    async getPerson(id) {
        let conf = Object.assign({}, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.person);
        conf.url = conf.url.replace('{:id}', id.toString());
        const response = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(conf);
        await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(response, conf);
        const personData = await this.parsePerson(response.responseBody.body.person);
        return Promise.resolve(personData);
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonModel);


/***/ }),

/***/ "./src/App/Models/SelectionModel/SelectionModel.ts":
/*!*********************************************************!*\
  !*** ./src/App/Models/SelectionModel/SelectionModel.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IModel_IModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IModel/IModel */ "./src/App/Models/IModel/IModel.ts");
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Config/Config */ "./src/App/Config/Config.ts");
/* harmony import */ var _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Ajax/Ajax */ "./src/App/Ajax/Ajax.ts");



class SelectionModel extends _IModel_IModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
    }
    ;
    parseSelections(json) {
        return json.map((selection) => {
            return this.parseSelection(selection);
        });
    }
    parseSelection(selection) {
        return {
            id: selection.id,
            title: selection.title,
            content: this.parseSelectionContents(selection.content),
        };
    }
    ;
    parseSelectionContents(selectionContents) {
        return selectionContents.map((selectionContent) => {
            return this.parseSelectionContent(selectionContent);
        });
    }
    ;
    parseSelectionContent(selectionContent) {
        return {
            id: selectionContent.id,
            title: selectionContent.title,
            description: selectionContent.description,
            rating: selectionContent.rating,
            year: selectionContent.year,
            isFree: selectionContent.is_free,
            ageLimit: selectionContent.age_limit,
            trailerURL: selectionContent.trailer_url,
            previewURL: selectionContent.preview_url,
            type: selectionContent.type,
        };
    }
    ;
    async getSelections() {
        const response = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_2__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_1__.config.api.selections);
        await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_2__["default"].checkResponseStatus(response, _Config_Config__WEBPACK_IMPORTED_MODULE_1__.config.api.selections);
        const selectionData = this.parseSelections(response.responseBody.body.selections);
        return Promise.resolve(selectionData);
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectionModel);


/***/ }),

/***/ "./src/App/Models/UserModel/UserModel.ts":
/*!***********************************************!*\
  !*** ./src/App/Models/UserModel/UserModel.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IModel_IModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IModel/IModel */ "./src/App/Models/IModel/IModel.ts");
/* harmony import */ var _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Ajax/Ajax */ "./src/App/Ajax/Ajax.ts");
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Config/Config */ "./src/App/Config/Config.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");




class UserModel extends _IModel_IModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    currentUser;
    constructor() {
        super();
        this.currentUser = null;
    }
    ;
    parseUser(json) {
        return {
            email: json.email,
            birthDate: json.date_birth,
            avatar: json.avatar_url,
        };
    }
    ;
    getCurrentUser() {
        return this.currentUser;
    }
    ;
    async signInUser(signData) {
        const signInResponse = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.signIn, JSON.stringify(signData));
        try {
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(signInResponse, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.signIn);
            const profileResponse = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(profileResponse, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        }
        catch {
            this.currentUser = null;
        }
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].emit('user-changed', this.currentUser);
        if (this.currentUser === null)
            return Promise.reject(signInResponse.responseBody.message);
    }
    ;
    async signUpUser(signData) {
        const signUpResponse = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.signUp, JSON.stringify(signData));
        try {
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(signUpResponse, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.signUp);
            console.log(signUpResponse);
            const signInResponse = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.signIn, JSON.stringify(signData));
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(signInResponse, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.signIn);
            const profileResponse = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(profileResponse, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        }
        catch {
            this.currentUser = null;
        }
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].emit('user-changed', this.currentUser);
        if (this.currentUser === null) {
            return Promise.reject(signUpResponse.responseBody.message);
        }
    }
    ;
    async logoutUser() {
        const response = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.logout);
        await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(response, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.logout);
        this.currentUser = null;
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].emit('user-changed', this.currentUser);
    }
    ;
    async updateUser(user) {
        console.log('updateUser');
        const response = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.update, JSON.stringify(user));
        try {
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(response, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.update);
            const profileResponse = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(profileResponse, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        }
        catch {
            if (response.status === 400) {
                const customStatus = response.responseBody.status.toString();
                return Promise.reject({
                    msg: _Config_Config__WEBPACK_IMPORTED_MODULE_2__.customFailures[customStatus],
                });
            }
            return Promise.reject();
        }
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].emit('user-changed', this.currentUser);
    }
    ;
    async avatarUpdate(formData) {
        console.log('avatarUpdate');
        // const response = await Ajax.ajax(config.api.avatarUpdate, JSON.stringify(formData));
        // console.log(response)
        //
        // try {
        //     await Ajax.checkResponseStatus(response, config.api.avatarUpdate);
        //     console.log('response', response)
        //
        //     const profileResponse = await Ajax.ajax(config.api.profile);
        //     console.log('profileResponse', profileResponse);
        //     await Ajax.checkResponseStatus(profileResponse, config.api.profile);
        //
        //     this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        //     console.log('currentUser', this.currentUser);
        // }
        // catch {
        //     return Promise.reject();
        // }
        const request = new XMLHttpRequest();
        request.open("POST", _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.host + _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.avatarUpdate.url, false);
        request.withCredentials = true;
        const response = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].getCsrfTokenFromServer();
        request.setRequestHeader('csrf-token', response.body['csrf-token']);
        request.send(formData);
        if (request.status === 200) {
            const profileResponse = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(profileResponse, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            console.log('profileResponse.responseBody.body.user', profileResponse.responseBody.body.user);
            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
            console.log('this.currentUser', this.currentUser);
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].emit('user-changed', this.currentUser);
        }
        else {
            if (request.status === 413) {
                return Promise.reject({
                    msg: 'Слишком большой размер файла',
                });
            }
            if (request.status === 400) {
                const customStatus = response.responseBody.status.toString();
                return Promise.reject({
                    msg: _Config_Config__WEBPACK_IMPORTED_MODULE_2__.customFailures[customStatus],
                });
            }
            return Promise.reject();
        }
    }
    ;
    async avatarDelete() {
        const response = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.avatarDelete);
        try {
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(response, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.avatarDelete);
            const profileResponse = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(profileResponse, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].emit('user-changed', this.currentUser);
        }
        catch {
            return Promise.reject();
        }
    }
    ;
    async authUserByCookie() {
        const response = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
        try {
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(response, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            this.currentUser = this.parseUser(response.responseBody.body.user);
        }
        catch {
            this.currentUser = null;
            return Promise.reject();
        }
        // EventDispatcher.emit('user-changed', this.currentUser); TODO: need?
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);


/***/ }),

/***/ "./src/App/Router/Router.ts":
/*!**********************************!*\
  !*** ./src/App/Router/Router.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RouterPaths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouterPaths */ "./src/App/Router/RouterPaths.ts");

class Router {
    routes;
    unknownPageHandler;
    nearestNotAuthUrl;
    constructor() {
        this.routes = [];
        this.unknownPageHandler = () => { };
        this.nearestNotAuthUrl = _RouterPaths__WEBPACK_IMPORTED_MODULE_0__["default"].main;
    }
    ;
    start(entryPath) {
        history.replaceState({ path: entryPath }, '', entryPath);
        window.addEventListener('popstate', (e) => {
            e.preventDefault();
            this.route();
        });
        this.route();
    }
    ;
    goToPath(path) {
        history.pushState({ path: path }, '', path);
        this.route();
    }
    ;
    route() {
        const rawPath = history.state?.path;
        if (!rawPath) {
            return;
        }
        const path = this.sanitizeUrl(rawPath);
        const tmpPath = '/' + path;
        if (tmpPath !== _RouterPaths__WEBPACK_IMPORTED_MODULE_0__["default"].signIn && tmpPath !== _RouterPaths__WEBPACK_IMPORTED_MODULE_0__["default"].signUp) {
            this.nearestNotAuthUrl = path;
        }
        const foundedPath = this.routes.find(({ rule, handler }) => {
            const match = path.match(rule);
            if (match) {
                handler(match.slice(1));
            }
            return match;
        });
        if (!foundedPath) {
            this.unknownPageHandler();
            return;
        }
    }
    ;
    showUnknownPage() {
        this.unknownPageHandler();
    }
    ;
    setUnknownPageHandler(handler) {
        this.unknownPageHandler = handler;
    }
    ;
    addRule(rule, handler) {
        const newRoute = {
            rule: this.parseRule(rule),
            handler: handler,
        };
        this.routes.push(newRoute);
        return newRoute;
    }
    removeRule(rule) {
        const index = this.routes.findIndex((route) => route.rule.source === this.parseRule(rule).source);
        if (index > -1) {
            this.routes.splice(index, 1);
        }
    }
    ;
    getNearestNotAuthUrl() {
        return this.nearestNotAuthUrl;
    }
    ;
    parseRule(rule) {
        let uri = this.sanitizeUrl(rule)
            .replace(/{\:number}/g, '(\\d+)')
            .replace(/{\:word}/g, '(\\w+)')
            .replace(/{\:\w+}/g, '(\\w+)');
        return new RegExp(`^${uri}$`, 'i');
    }
    sanitizeUrl(rule) {
        return rule.replace(/\/$/, '').replace(/^\//, '');
    }
    ;
}
const router = new Router();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);


/***/ }),

/***/ "./src/App/Router/RouterPaths.ts":
/*!***************************************!*\
  !*** ./src/App/Router/RouterPaths.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Конфигурация URL адресов приложения
 * @category Router
 * @constant {Object}
 * @param {{name: string, URL: string}} Структура конфигурации
 */
const paths = {
    main: '/',
    catalog: '/catalog',
    store: '/store',
    myMovie: '/my-movie',
    settings: '/settings',
    signIn: '/signIn',
    signUp: '/signUp',
    logout: '/logout',
    films: '/films/{:id}',
    persons: '/persons/{:id}',
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paths);


/***/ }),

/***/ "./src/App/Utils/Validators/Validator.ts":
/*!***********************************************!*\
  !*** ./src/App/Utils/Validators/Validator.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateInput": () => (/* binding */ validateInput),
/* harmony export */   "validatePasswords": () => (/* binding */ validatePasswords)
/* harmony export */ });
/* harmony import */ var _ValidatorConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValidatorConfig */ "./src/App/Utils/Validators/ValidatorConfig.ts");

const unknownValidator = {
    isValid: false,
    errorMsg: 'Неизвестный тип поля',
};
const validValidator = {
    isValid: true,
    errorMsg: '',
};
// const emptyValidator: ValidatorResult = {
//     isValid:      false,
//     errorMsg:     'Пустое поле',
// }
function validateInput(input) {
    if (input.id === 'avatar') {
        return validValidator;
    }
    const validator = _ValidatorConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(input.id);
    if (!validator) {
        return unknownValidator;
    }
    const isValid = validator.regExp.test(input.value);
    if (!isValid) {
        return { isValid: false, errorMsg: validator.errorMsg };
    }
    return validValidator;
}
function validatePasswords(password, repeatPassword) {
    const validatedPassword = validateInput({ id: 'password', value: password });
    if (!validatedPassword.isValid) {
        return { isValid: false, errorMsg: validatedPassword.errorMsg, passwordErrorMsg: _ValidatorConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get('repeat-password')?.errorMsg };
    }
    if (password !== repeatPassword) {
        return { isValid: false, errorMsg: validatedPassword.errorMsg, passwordErrorMsg: _ValidatorConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get('repeat-password')?.errorMsg };
    }
    return { isValid: true, errorMsg: '' };
}



/***/ }),

/***/ "./src/App/Utils/Validators/ValidatorConfig.ts":
/*!*****************************************************!*\
  !*** ./src/App/Utils/Validators/ValidatorConfig.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const validators = new Map([
    [
        'email',
        {
            regExp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            errorMsg: 'Введённый email имеет некорректный вид'
        },
    ],
    [
        'password',
        {
            regExp: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/,
            errorMsg: 'Пароль должен содержать минимум 8 символов, включая одну цифру'
        },
    ],
    [
        'repeat-password',
        {
            regExp: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/,
            errorMsg: 'Пароли должны совпадать',
        },
    ],
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validators);


/***/ }),

/***/ "./src/App/Views/FilmView/FilmView.ts":
/*!********************************************!*\
  !*** ./src/App/Views/FilmView/FilmView.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _FilmView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilmView.hbs */ "./src/App/Views/FilmView/FilmView.hbs");
/* harmony import */ var _FilmView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FilmView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FilmView_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilmView.css */ "./src/App/Views/FilmView/FilmView.css");
/* harmony import */ var _PlayerView_PlayerView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PlayerView/PlayerView */ "./src/App/Views/PlayerView/PlayerView.ts");
/* harmony import */ var _FilmViewConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilmViewConfig */ "./src/App/Views/FilmView/FilmViewConfig.ts");





/**
 * Отображение фильма приложения
 * @category Film
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для хедера
 */
class FilmView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    playerView;
    trailerButton;
    subscribeButton;
    constructor(parent) {
        super(parent, _FilmView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({}), '.film');
    }
    ;
    newPlayerView() {
        this.playerView = new _PlayerView_PlayerView__WEBPACK_IMPORTED_MODULE_3__["default"](this.parent.parentElement);
    }
    ;
    hide() {
        this.playerView = null;
        super.hide();
    }
    fillFilm(data) {
        this.element.innerHTML = _FilmView_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data);
        this.renderButtons();
    }
    ;
    renderButtons() {
        const buttonsContainer = this.element.querySelector('.film-content__buttons');
        this.trailerButton = (new _FilmViewConfig__WEBPACK_IMPORTED_MODULE_4__["default"].trailerButton.componentType(buttonsContainer, '', '', _FilmViewConfig__WEBPACK_IMPORTED_MODULE_4__["default"].trailerButton.componentData));
        this.trailerButton.show();
        this.subscribeButton = (new _FilmViewConfig__WEBPACK_IMPORTED_MODULE_4__["default"].subscribeButton.componentType(buttonsContainer, '', '', _FilmViewConfig__WEBPACK_IMPORTED_MODULE_4__["default"].subscribeButton.componentData));
        this.subscribeButton.show();
    }
    ;
    bindClickEvent(listener) {
        this.element.addEventListener('click', listener.bind(this));
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilmView);


/***/ }),

/***/ "./src/App/Views/FilmView/FilmViewConfig.ts":
/*!**************************************************!*\
  !*** ./src/App/Views/FilmView/FilmViewConfig.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_ButtonComponent_ButtonComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/ButtonComponent/ButtonComponent */ "./src/App/Components/ButtonComponent/ButtonComponent.ts");

const FilmData = {
    trailerButton: {
        componentData: {
            text: 'Оформить подписку',
            className: 'subscribe-button',
            dataAction: 'subscribe',
        },
        componentType: _Components_ButtonComponent_ButtonComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    },
    subscribeButton: {
        componentData: {
            text: 'Трейлер',
            className: 'subscribe-button',
            dataAction: 'trailer',
        },
        componentType: _Components_ButtonComponent_ButtonComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilmData);


/***/ }),

/***/ "./src/App/Views/HeaderView/HeaderView.ts":
/*!************************************************!*\
  !*** ./src/App/Views/HeaderView/HeaderView.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _HeaderView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderView.hbs */ "./src/App/Views/HeaderView/HeaderView.hbs");
/* harmony import */ var _HeaderView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HeaderView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeaderView_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderView.css */ "./src/App/Views/HeaderView/HeaderView.css");
/* harmony import */ var _HeaderViewConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderViewConfig */ "./src/App/Views/HeaderView/HeaderViewConfig.ts");




/**
 * Отображение хедера приложения
 * @category Header
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для хедера
 */
class HeaderView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    leftSide;
    rightSide;
    profile;
    actionsList;
    currentActiveItem;
    constructor(parent) {
        super(parent, _HeaderView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({}), '.js-header-container');
        // Initialize fields
        this.leftSide = this.element.querySelector('.js-header-container__left');
        this.rightSide = this.element.querySelector('.js-header-container__right');
        this.profile = this.element.querySelector('.js-user-profile');
        // Render components
        _HeaderViewConfig__WEBPACK_IMPORTED_MODULE_3__["default"].leftItems.forEach(({ componentType, componentData }) => {
            const component = new componentType(this.leftSide, '', '', componentData);
            component.show();
        });
        this.actionsList = (new _HeaderViewConfig__WEBPACK_IMPORTED_MODULE_3__["default"].actionsList.componentType(this.leftSide, '', '', _HeaderViewConfig__WEBPACK_IMPORTED_MODULE_3__["default"].actionsList.componentData));
        this.actionsList.show();
        this.currentActiveItem = null;
        _HeaderViewConfig__WEBPACK_IMPORTED_MODULE_3__["default"].rightItems.forEach(({ componentType, componentData }) => {
            const component = new componentType(this.rightSide, '', '', componentData);
            component.show();
        });
        this.rightSide.removeChild(this.profile);
        this.rightSide.appendChild(this.profile);
    }
    ;
    changeActiveHeaderListItem(href) {
        const listElement = this.actionsList.getElement;
        listElement.querySelector(`[href="${this.currentActiveItem}"]`)?.parentElement?.classList.remove('active');
        this.currentActiveItem = href;
        listElement.querySelector(`[href="${href}"]`)?.parentElement?.classList.add('active');
    }
    ;
    /**
     * Функция изменения элемента в хэдере
     * @param  {string} profileItemName - название элемента
     * @param  {any} data - Данные, необходимые для отрисовки элемента
     * @returns {void}
     */
    changeHeaderProfile(profileItemName, data) {
        if (!(profileItemName in _HeaderViewConfig__WEBPACK_IMPORTED_MODULE_3__["default"])) {
            return;
        }
        const component = _HeaderViewConfig__WEBPACK_IMPORTED_MODULE_3__["default"][profileItemName];
        this.profile.innerHTML = '';
        if (data?.avatar) {
            component.componentData.avatar = data.avatar;
        }
        const profileItem = new component.componentType(this.profile, '', '', component.componentData);
        profileItem.show();
    }
    ;
    toggleProfile() {
        this.profile.querySelector('.js-dropdown__content')?.classList.toggle('dropdown__content__show');
    }
    ;
    hideProfile() {
        this.profile.querySelector('.js-dropdown__content')?.classList.remove('dropdown__content__show');
    }
    ;
    /**
     * Функция добавления обработчика события нажатия на хедер
     * @param  {any} listener - Callback функция для события
     * @returns {void}
     */
    bindClickEvent(listener) {
        this.element.addEventListener('click', listener.bind(this));
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderView);


/***/ }),

/***/ "./src/App/Views/HeaderView/HeaderViewConfig.ts":
/*!******************************************************!*\
  !*** ./src/App/Views/HeaderView/HeaderViewConfig.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/LinkComponent/LinkComponent */ "./src/App/Components/LinkComponent/LinkComponent.ts");
/* harmony import */ var _Components_VerticalSpacerComponent_VerticalSpacerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/VerticalSpacerComponent/VerticalSpacerComponent */ "./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.ts");
/* harmony import */ var _Components_ButtonComponent_ButtonComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/ButtonComponent/ButtonComponent */ "./src/App/Components/ButtonComponent/ButtonComponent.ts");
/* harmony import */ var _Components_ListComponent_ListComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/ListComponent/ListComponent */ "./src/App/Components/ListComponent/ListComponent.ts");
/* harmony import */ var _Components_DropdownButtonComponent_DropdownButtonComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/DropdownButtonComponent/DropdownButtonComponent */ "./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.ts");
/* harmony import */ var _Components_Css_HeaderActionList_HeaderActionList_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/Css/HeaderActionList/HeaderActionList.css */ "./src/App/Components/Css/HeaderActionList/HeaderActionList.css");
/* harmony import */ var _Components_Css_HeaderProfileDropdown_HeaderProfileDropdown_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/Css/HeaderProfileDropdown/HeaderProfileDropdown.css */ "./src/App/Components/Css/HeaderProfileDropdown/HeaderProfileDropdown.css");
/* harmony import */ var _Components_Css_HeaderSignIn_HeaderSignIn_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/Css/HeaderSignIn/HeaderSignIn.css */ "./src/App/Components/Css/HeaderSignIn/HeaderSignIn.css");








;
const HeaderData = {
    leftItems: [
        {
            componentData: {
                linkHref: '/',
                linkClass: 'logo',
                linkImageSrc: '/img/logo/logo.svg',
                linkImageWidth: '40px',
            },
            componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
        },
    ],
    actionsList: {
        componentData: {
            listClass: 'header-container__action-list',
            itemClass: 'header-container-action',
            items: [
                {
                    componentData: {
                        linkHref: '/',
                        linkClass: 'header-container-action__link',
                        linkText: 'Главная',
                        linkTextClass: 'header-container-action-link__text',
                    },
                    componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
                },
                {
                    componentData: {
                        linkHref: '/catalog',
                        linkClass: 'header-container-action__link',
                        linkText: 'Каталог',
                        linkTextClass: 'header-container-action-link__text',
                    },
                    componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
                },
                {
                    componentData: {
                        linkHref: '/store',
                        linkClass: 'header-container-action__link',
                        linkText: 'Магазин',
                        linkTextClass: 'header-container-action-link__text',
                    },
                    componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
                },
                {
                    componentData: {
                        linkHref: '/my-movie',
                        linkClass: 'header-container-action__link',
                        linkText: 'Моё',
                        linkTextClass: 'header-container-action-link__text',
                    },
                    componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
                },
            ],
        },
        componentType: _Components_ListComponent_ListComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    },
    rightItems: [
        {
            componentData: {
                linkHref: '#',
                linkClass: 'search',
                linkImageSrc: '/img/icons/search.svg',
                linkImageWidth: '24px',
            },
            componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
        },
        {
            componentData: {
                size: '24',
            },
            componentType: _Components_VerticalSpacerComponent_VerticalSpacerComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
        },
        {
            componentData: {
                text: 'Купить подписку',
                className: 'subscribe-button',
            },
            componentType: _Components_ButtonComponent_ButtonComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
        },
        {
            componentData: {
                size: '24',
            },
            componentType: _Components_VerticalSpacerComponent_VerticalSpacerComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
        },
    ],
    profile: {
        componentData: {
            dataAction: 'profile',
            avatar: '/img/profile/profile.jpg',
            items: [
                {
                    linkHref: '/settings',
                    linkClass: 'profile-link',
                    linkImageSrc: '/img/icons/settings.svg',
                    linkImageClass: 'profile-link__image',
                    linkImageWidth: '24px',
                    linkText: 'Настройки',
                    linkTextClass: 'profile-link__text',
                },
            ],
        },
        componentType: _Components_DropdownButtonComponent_DropdownButtonComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    },
    signIn: {
        componentData: {
            dataAction: 'signIn',
            linkHref: '/signIn',
            linkClass: 'header__signIn-link',
            linkImageSrc: '/img/icons/circle-user.svg',
            linkImageWidth: '30px',
            linkText: 'Войти',
        },
        componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderData);


/***/ }),

/***/ "./src/App/Views/IView/IView.ts":
/*!**************************************!*\
  !*** ./src/App/Views/IView/IView.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Базовый класс для отображения компонента приложения
 * @class
 * @param {HTMLElement} parent - родительский элемент для отображения
 */
class IView {
    /**
     * Родительский элемент для данного вида
     * @member
     * @protected
     * @type {HTMLElement}
     */
    parent;
    /**
     * Корневой элемент для данного вида
     * @member
     * @protected
     * @type {HTMLElement}
     */
    element;
    constructor(parent, template, topElement) {
        this.parent = parent;
        const parser = new DOMParser();
        const element = parser.parseFromString(template, 'text/html').querySelector(topElement);
        if (!element) {
            throw Error('Can not find element from template!');
        }
        this.element = element;
    }
    ;
    /**
     * Функция для отрисовки вида
     * @method
     * @returns {void}
     */
    show() {
        this.parent.appendChild(this.element);
    }
    ;
    /**
     * Функция для скрытия вида
     * @method
     * @returns {void}
     */
    hide() {
        this.parent.removeChild(this.element);
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IView);


/***/ }),

/***/ "./src/App/Views/MainView/MainView.ts":
/*!********************************************!*\
  !*** ./src/App/Views/MainView/MainView.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _MainView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainView.hbs */ "./src/App/Views/MainView/MainView.hbs");
/* harmony import */ var _MainView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MainView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainView_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainView.css */ "./src/App/Views/MainView/MainView.css");



class MainView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parent) {
        super(parent, _MainView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({}), '.categories');
    }
    ;
    fillSelections(selections) {
        this.element.innerHTML = _MainView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({ selections: selections });
    }
    ;
    bindClickEvent(listener) {
        this.element.querySelectorAll('img.category__container__item-image').forEach((element) => {
            element.addEventListener('click', listener.bind(this));
        });
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainView);


/***/ }),

/***/ "./src/App/Views/ModalRightView/ModalRightView.ts":
/*!********************************************************!*\
  !*** ./src/App/Views/ModalRightView/ModalRightView.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _ModalRightView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalRightView.hbs */ "./src/App/Views/ModalRightView/ModalRightView.hbs");
/* harmony import */ var _ModalRightView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ModalRightView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModalRightViewConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalRightViewConfig */ "./src/App/Views/ModalRightView/ModalRightViewConfig.ts");
/* harmony import */ var _ModalRightView_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalRightView.css */ "./src/App/Views/ModalRightView/ModalRightView.css");
/* harmony import */ var _SignInView_SignInView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SignInView/SignInView */ "./src/App/Views/SignInView/SignInView.ts");
/* harmony import */ var _SignUpView_SignUpView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SignUpView/SignUpView */ "./src/App/Views/SignUpView/SignUpView.ts");






/**
 * Отображение правого модального окна
 * @category ModalRight
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для правого модального окна
 */
class ModalRightView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    modalBody;
    currentView;
    constructor(parent) {
        super(parent, _ModalRightView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({ title: _ModalRightViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].title }), '.js-modal__area');
        this.modalBody = this.element.querySelector('.js-modal__body');
        this.currentView = null;
    }
    ;
    setSignInView() {
        this.currentView = new _SignInView_SignInView__WEBPACK_IMPORTED_MODULE_4__["default"](this.modalBody);
    }
    ;
    setSignUpView() {
        this.currentView = new _SignUpView_SignUpView__WEBPACK_IMPORTED_MODULE_5__["default"](this.modalBody);
    }
    ;
    show() {
        this.parent.classList.add('modal--right--open');
        super.show();
    }
    ;
    hide() {
        this.parent.classList.remove('modal--right--open');
        setTimeout(() => {
            this.currentView = null;
            super.hide();
        }, 200);
    }
    ;
    /**
     * Функция добавления обработчика события нажатия на
     * @param  {any} listener - Callback функция для события
     * @returns {void}
     */
    bindClickEvent(listener) {
        this.element.addEventListener('click', listener.bind(this));
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalRightView);


/***/ }),

/***/ "./src/App/Views/ModalRightView/ModalRightViewConfig.ts":
/*!**************************************************************!*\
  !*** ./src/App/Views/ModalRightView/ModalRightViewConfig.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
;
const ModalRightData = {
    title: 'Вход или регистрация',
    // signInView: SignInView,
    // signUpView: SignUpView,
    // signInData: SignInData,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalRightData);


/***/ }),

/***/ "./src/App/Views/PersonView/PersonView.ts":
/*!************************************************!*\
  !*** ./src/App/Views/PersonView/PersonView.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _PersonView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonView.hbs */ "./src/App/Views/PersonView/PersonView.hbs");
/* harmony import */ var _PersonView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PersonView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PersonView_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PersonView.css */ "./src/App/Views/PersonView/PersonView.css");



class PersonView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parent) {
        super(parent, _PersonView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({}), '.person');
    }
    ;
    fillPerson(data) {
        this.element.innerHTML = _PersonView_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data);
    }
    ;
    bindClickEvent(listener) {
        this.element.addEventListener('click', listener.bind(this));
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonView);


/***/ }),

/***/ "./src/App/Views/PlayerView/PlayerView.ts":
/*!************************************************!*\
  !*** ./src/App/Views/PlayerView/PlayerView.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _PlayerView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerView.hbs */ "./src/App/Views/PlayerView/PlayerView.hbs");
/* harmony import */ var _PlayerView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PlayerView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlayerView_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerView.css */ "./src/App/Views/PlayerView/PlayerView.css");
/* harmony import */ var _Components_BarComponent_BarComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/BarComponent/BarComponent */ "./src/App/Components/BarComponent/BarComponent.ts");




class PlayerView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    videoPanel;
    videoBar;
    // public readonly video: HTMLVideoElement;
    // public readonly playBtn: HTMLButtonElement;
    // public readonly playBtnImg: HTMLImageElement;
    // public readonly stopBtn: HTMLButtonElement;
    // public readonly progress: HTMLProgressElement;
    // public readonly volumeBtnImg: HTMLImageElement;
    // public readonly progressVolume: HTMLInputElement;
    // public readonly time: HTMLDivElement;
    constructor(parent) {
        super(parent, _PlayerView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({}), '#fullscreen-modal');
        this.videoPanel = this.element.querySelector('.video__panel');
        this.videoPanel.prepend(this.renderVideoBar());
        // super(parent, PlayerTemplate({}), '.wrapper');
        // this.video = <HTMLVideoElement>this.element.querySelector('.video');
        //
        // this.playBtn = <HTMLButtonElement>this.element.querySelector('.controls__play');
        // this.playBtnImg = <HTMLImageElement>this.element.querySelector('.play__btn');
        // this.stopBtn = <HTMLButtonElement>this.element.querySelector('.controls__stop');
        //
        // this.progress = <HTMLProgressElement>this.element.querySelector('.progress');
        //
        // this.volumeBtnImg = <HTMLImageElement>this.element.querySelector('.volume__btn');
        // this.progressVolume = <HTMLInputElement>this.element.querySelector('.volume__progress');
        //
        // this.time = <HTMLDivElement>this.element.querySelector('.controls__time');
    }
    ;
    renderVideoBar() {
        const div = document.createElement('div');
        this.videoBar = new _Components_BarComponent_BarComponent__WEBPACK_IMPORTED_MODULE_3__["default"](div, '', '', { barClass: 'video__bar' });
        this.videoBar.show();
        return div;
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerView);


/***/ }),

/***/ "./src/App/Views/SettingsView/SettingsView.ts":
/*!****************************************************!*\
  !*** ./src/App/Views/SettingsView/SettingsView.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _SettingsView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsView.hbs */ "./src/App/Views/SettingsView/SettingsView.hbs");
/* harmony import */ var _SettingsView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SettingsView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SettingsViewConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SettingsViewConfig */ "./src/App/Views/SettingsView/SettingsViewConfig.ts");
/* harmony import */ var _SettingsView_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SettingsView.css */ "./src/App/Views/SettingsView/SettingsView.css");
/* harmony import */ var _Components_FormComponent_FormComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/FormComponent/FormComponent */ "./src/App/Components/FormComponent/FormComponent.ts");





class SettingsView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    leftMenuContainer;
    settingsFormContainer;
    leftMenu;
    currentActiveItem;
    form;
    constructor(parent) {
        super(parent, _SettingsView_hbs__WEBPACK_IMPORTED_MODULE_1___default()(_SettingsViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"]), 'main');
        this.leftMenuContainer = this.element.querySelector('.js-settings__left-menu-container');
        this.settingsFormContainer = this.element.querySelector('.js-settings__form');
        this.leftMenu = (new _SettingsViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].leftMenu.componentType(this.leftMenuContainer, '', '', _SettingsViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].leftMenu.componentData));
        this.leftMenu.show();
        this.currentActiveItem = null;
        this.form = new _Components_FormComponent_FormComponent__WEBPACK_IMPORTED_MODULE_4__["default"](this.settingsFormContainer, '', '', _SettingsViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].formData);
        this.form.show();
    }
    ;
    changeActiveLeftMenuItem(href) {
        const listElement = this.leftMenu.getElement;
        listElement.querySelector(`[href="${this.currentActiveItem}"]`)?.parentElement?.classList.remove('settings-left-menu__item--active');
        this.currentActiveItem = href;
        listElement.querySelector(`[href="${href}"]`)?.parentElement?.classList.add('settings-left-menu__item--active');
    }
    ;
    show(opts) {
        if (!opts)
            return;
        this.form.setDataToFields([{ id: 'email', value: opts.user.email }]);
        super.show();
    }
    ;
    bindClickEvent(listener) {
        this.element.addEventListener('click', listener.bind(this));
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsView);


/***/ }),

/***/ "./src/App/Views/SettingsView/SettingsViewConfig.ts":
/*!**********************************************************!*\
  !*** ./src/App/Views/SettingsView/SettingsViewConfig.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_ListComponent_ListComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/ListComponent/ListComponent */ "./src/App/Components/ListComponent/ListComponent.ts");
/* harmony import */ var _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/LinkComponent/LinkComponent */ "./src/App/Components/LinkComponent/LinkComponent.ts");


const SettingsData = {
    title: 'Настройки',
    description: 'Оставьте контактные данные для получения уведомлений от сервиса и взаимодействия со службой поддержки.',
    formTitle: 'Контакты',
    leftMenu: {
        componentData: {
            listClass: 'settings__left-menu',
            itemClass: 'settings-left-menu__item',
            items: [
                {
                    componentData: {
                        linkHref: '/settings',
                        linkClass: 'settings-left-menu-item__link',
                        linkText: 'Основные',
                    },
                    componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
                },
                {
                    componentData: {
                        linkHref: '/settings/payments',
                        linkClass: 'settings-left-menu-item__link',
                        linkText: 'Оплата услуг',
                    },
                    componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
                },
                {
                    componentData: {
                        linkHref: '/settings/subscriptions',
                        linkClass: 'settings-left-menu-item__link',
                        linkText: 'Подписки',
                    },
                    componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
                },
                {
                    componentData: {
                        linkHref: '/logout',
                        linkClass: 'settings-left-menu-item__link',
                        linkImageSrc: '/img/icons/logout.svg',
                        linkImageClass: '',
                        linkImageWidth: 24,
                        linkText: 'Выйти',
                    },
                    componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
                }
            ]
        },
        componentType: _Components_ListComponent_ListComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    },
    formData: {
        formId: 'settings__form',
        enctype: true,
        inputs: [
            {
                inputClass: 'input-field__input--dark',
                type: 'email',
                id: 'email',
                placeholder: 'vasiliy.pupkin@mail.ru',
            },
            {
                type: 'file',
                id: 'avatar',
                accept: 'image/jpeg',
            },
            {
                type: 'checkbox',
                id: 'avatar-checkbox',
                checkboxText: 'Удалить аватарку?',
                class: 'input-checkbox'
            },
            {
                inputClass: 'input-field__input--dark',
                type: 'password',
                id: 'password',
                placeholder: '********',
            },
            {
                inputClass: 'input-field__input--dark',
                type: 'password',
                id: 'repeat-password',
                placeholder: '********',
            }
        ],
        button: {
            id: 'save-submit-btn',
            text: 'Сохранить',
            className: 'save-button'
        },
        links: [],
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsData);


/***/ }),

/***/ "./src/App/Views/SignInView/SignInView.ts":
/*!************************************************!*\
  !*** ./src/App/Views/SignInView/SignInView.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _SignInView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignInView.hbs */ "./src/App/Views/SignInView/SignInView.hbs");
/* harmony import */ var _SignInView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SignInView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignInViewConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignInViewConfig */ "./src/App/Views/SignInView/SignInViewConfig.ts");
/* harmony import */ var _SignInView_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignInView.css */ "./src/App/Views/SignInView/SignInView.css");
/* harmony import */ var _Components_FormComponent_FormComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/FormComponent/FormComponent */ "./src/App/Components/FormComponent/FormComponent.ts");





class SignInView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    form;
    constructor(parent) {
        super(parent, _SignInView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({ title: _SignInViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].title, description: _SignInViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].description }), '.js-signIn');
        this.form = new _Components_FormComponent_FormComponent__WEBPACK_IMPORTED_MODULE_4__["default"](this.element, '', '', _SignInViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].formData);
        this.form.show();
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInView);


/***/ }),

/***/ "./src/App/Views/SignInView/SignInViewConfig.ts":
/*!******************************************************!*\
  !*** ./src/App/Views/SignInView/SignInViewConfig.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
;
const SignInData = {
    title: 'Войдите или зарегистрируйтесь',
    description: 'Чтобы начать пользоваться серависом Filmium',
    formData: {
        formId: 'signIn__form',
        inputs: [
            {
                inputClass: 'input-field__input--dark',
                type: 'email',
                id: 'email',
                placeholder: 'vasiliy.pupkin@mail.ru',
            },
            {
                inputClass: 'input-field__input--dark',
                type: 'password',
                id: 'password',
                placeholder: '********',
            },
        ],
        button: {
            id: 'signIn-submit-btn',
            text: 'Войти',
            className: 'signIn-button'
        },
        links: [
            {
                id: 'link-signUp',
                linkHref: '/signUp',
                linkText: 'Нет аккаунта? Зарегистрироваться',
                linkTextClass: 'signUp-link'
            },
        ],
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInData);


/***/ }),

/***/ "./src/App/Views/SignUpView/SignUpView.ts":
/*!************************************************!*\
  !*** ./src/App/Views/SignUpView/SignUpView.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _SignUpView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUpView.hbs */ "./src/App/Views/SignUpView/SignUpView.hbs");
/* harmony import */ var _SignUpView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SignUpView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignUpViewConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUpViewConfig */ "./src/App/Views/SignUpView/SignUpViewConfig.ts");
/* harmony import */ var _SignUpView_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignUpView.css */ "./src/App/Views/SignUpView/SignUpView.css");
/* harmony import */ var _Components_FormComponent_FormComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/FormComponent/FormComponent */ "./src/App/Components/FormComponent/FormComponent.ts");





class SignUpView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    form;
    constructor(parent) {
        super(parent, _SignUpView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({ title: _SignUpViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].title, description: _SignUpViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].description }), '.js-signUp');
        this.form = new _Components_FormComponent_FormComponent__WEBPACK_IMPORTED_MODULE_4__["default"](this.element, '', '', _SignUpViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].formData);
        this.form.show();
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpView);


/***/ }),

/***/ "./src/App/Views/SignUpView/SignUpViewConfig.ts":
/*!******************************************************!*\
  !*** ./src/App/Views/SignUpView/SignUpViewConfig.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
;
const SignUpData = {
    title: 'Войдите или зарегистрируйтесь',
    description: 'Чтобы начать пользоваться серависом Filmium',
    formData: {
        formId: 'signUp__form',
        inputs: [
            {
                inputClass: 'input-field__input--dark',
                type: 'email',
                id: 'email',
                placeholder: 'vasiliy.pupkin@mail.ru',
            },
            {
                inputClass: 'input-field__input--dark',
                type: 'password',
                id: 'password',
                placeholder: '********',
            },
            {
                inputClass: 'input-field__input--dark',
                type: 'password',
                id: 'repeat-password',
                placeholder: '********',
            },
        ],
        button: {
            id: 'signUp-submit-btn',
            text: 'Войти',
            className: 'signUp-button'
        },
        links: [
            {
                id: 'link-signIn',
                linkHref: '/signIn',
                linkText: 'Есть аккаунт? Войти',
                linkTextClass: 'signIn-link'
            },
        ],
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpData);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/App */ "./src/App/App.ts");

const app = new _App_App__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.run(location.pathname);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDekMxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QjtBQUM1QixnQkFBZ0IsZ0RBQUc7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0JhckNvbXBvbmVudC9CYXJDb21wb25lbnQuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC9CYXNlQ29tcG9uZW50LmhicyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0J1dHRvbkNvbXBvbmVudC9CdXR0b25Db21wb25lbnQuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvRGl2Q29tcG9uZW50L0RpdkNvbXBvbmVudC5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9Gb3JtQ29tcG9uZW50L0Zvcm1Db21wb25lbnQuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvSW5wdXRDb21wb25lbnQvSW5wdXRDb21wb25lbnQuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvTGlua0NvbXBvbmVudC9MaW5rQ29tcG9uZW50LmhicyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0xpc3RDb21wb25lbnQvTGlzdENvbXBvbmVudC5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9WZXJ0aWNhbFNwYWNlckNvbXBvbmVudC9WZXJ0aWNhbFNwYWNlckNvbXBvbmVudC5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvRmlsbVZpZXcvRmlsbVZpZXcuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL0hlYWRlclZpZXcvSGVhZGVyVmlldy5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvTWFpblZpZXcvTWFpblZpZXcuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL01vZGFsUmlnaHRWaWV3L01vZGFsUmlnaHRWaWV3LmhicyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9QZXJzb25WaWV3L1BlcnNvblZpZXcuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL1BsYXllclZpZXcvUGxheWVyVmlldy5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvU2V0dGluZ3NWaWV3L1NldHRpbmdzVmlldy5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvU2lnbkluVmlldy9TaWduSW5WaWV3LmhicyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9TaWduVXBWaWV3L1NpZ25VcFZpZXcuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvYmFzZS5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9kZWNvcmF0b3JzLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9lYWNoLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9pZi5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2xvZy5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2xvb2t1cC5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL3dpdGguanMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaW50ZXJuYWwvY3JlYXRlLW5ldy1sb29rdXAtb2JqZWN0LmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2ludGVybmFsL3Byb3RvLWFjY2Vzcy5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9pbnRlcm5hbC93cmFwSGVscGVyLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9uby1jb25mbGljdC5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9ydW50aW1lLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3V0aWxzLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0FwcC5jc3M/MDZlYSIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0JhckNvbXBvbmVudC9CYXJDb21wb25lbnQuY3NzPzQ3NWEiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9CYXNlQ29tcG9uZW50L0Jhc2VDb21wb25lbnQuY3NzP2YxMDkiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9CdXR0b25Db21wb25lbnQvQnV0dG9uQ29tcG9uZW50LmNzcz82MTk4Iiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvQ3NzL0hlYWRlckFjdGlvbkxpc3QvSGVhZGVyQWN0aW9uTGlzdC5jc3M/ODM1NyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0Nzcy9IZWFkZXJQcm9maWxlRHJvcGRvd24vSGVhZGVyUHJvZmlsZURyb3Bkb3duLmNzcz9mMmEyIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvQ3NzL0hlYWRlclNpZ25Jbi9IZWFkZXJTaWduSW4uY3NzPzViYWEiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC5jc3M/OGY2ZiIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0Zvcm1Db21wb25lbnQvRm9ybUNvbXBvbmVudC5jc3M/N2Y1ZCIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0lucHV0Q29tcG9uZW50L0lucHV0Q29tcG9uZW50LmNzcz83NTA3Iiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvTGlua0NvbXBvbmVudC9MaW5rQ29tcG9uZW50LmNzcz81OWE2Iiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvTGlzdENvbXBvbmVudC9MaXN0Q29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL1ZlcnRpY2FsU3BhY2VyQ29tcG9uZW50L1ZlcnRpY2FsU3BhY2VyQ29tcG9uZW50LmNzcz80NGU4Iiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL0ZpbG1WaWV3L0ZpbG1WaWV3LmNzcz80ZmQ4Iiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL0hlYWRlclZpZXcvSGVhZGVyVmlldy5jc3M/MTc0OSIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9NYWluVmlldy9NYWluVmlldy5jc3M/ZmQ1MiIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9Nb2RhbFJpZ2h0Vmlldy9Nb2RhbFJpZ2h0Vmlldy5jc3M/NTZiMiIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9QZXJzb25WaWV3L1BlcnNvblZpZXcuY3NzP2M2MWQiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvUGxheWVyVmlldy9QbGF5ZXJWaWV3LmNzcz8zZTc1Iiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL1NldHRpbmdzVmlldy9TZXR0aW5nc1ZpZXcuY3NzPzU1OGMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvU2lnbkluVmlldy9TaWduSW5WaWV3LmNzcz9mZDRkIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL1NpZ25VcFZpZXcvU2lnblVwVmlldy5jc3M/OGM2OSIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9BamF4L0FqYXgudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQXBwLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvQmFyQ29tcG9uZW50L0JhckNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0Jhc2VDb21wb25lbnQvQmFzZUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0J1dHRvbkNvbXBvbmVudC9CdXR0b25Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9EaXZDb21wb25lbnQvRGl2Q29tcG9uZW50LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvRHJvcGRvd25CdXR0b25Db21wb25lbnQvRHJvcGRvd25CdXR0b25Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9Gb3JtQ29tcG9uZW50L0Zvcm1Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9JQ29tcG9uZW50L0lDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9JbnB1dENvbXBvbmVudC9JbnB1dENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0xpbmtDb21wb25lbnQvTGlua0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0xpc3RDb21wb25lbnQvTGlzdENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL1ZlcnRpY2FsU3BhY2VyQ29tcG9uZW50L1ZlcnRpY2FsU3BhY2VyQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbmZpZy9Db25maWcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29udHJvbGxlcnMvRmlsbUNvbnRyb2xsZXIvRmlsbUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29udHJvbGxlcnMvSGVhZGVyQ29udHJvbGxlci9IZWFkZXJDb250cm9sbGVyLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbnRyb2xsZXJzL0lDb250cm9sbGVyL0lDb250cm9sbGVyLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbnRyb2xsZXJzL01haW5Db250cm9sbGVyL01haW5Db250cm9sbGVyLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbnRyb2xsZXJzL01vZGFsUmlnaHRDb250cm9sbGVyL01vZGFsUmlnaHRDb250cm9sbGVyLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbnRyb2xsZXJzL1BlcnNvbkNvbnRyb2xsZXIvUGVyc29uQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db250cm9sbGVycy9QbGF5ZXJDb250cm9sbGVyL1BsYXllckNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29udHJvbGxlcnMvU2V0dGluZ3NDb250cm9sbGVyL1NldHRpbmdzQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db250cm9sbGVycy9TaWduSW5Db250cm9sbGVyL1NpZ25JbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29udHJvbGxlcnMvU2lnblVwQ29udHJvbGxlci9TaWduVXBDb250cm9sbGVyLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0V2ZW50RGlzcGF0Y2hlci9FdmVudERpc3BhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvTW9kZWxzL0ZpbG1Nb2RlbC9GaWxtTW9kZWwudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvTW9kZWxzL0lNb2RlbC9JTW9kZWwudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvTW9kZWxzL1BlcnNvbk1vZGVsL1BlcnNvbk1vZGVsLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL01vZGVscy9TZWxlY3Rpb25Nb2RlbC9TZWxlY3Rpb25Nb2RlbC50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Nb2RlbHMvVXNlck1vZGVsL1VzZXJNb2RlbC50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Sb3V0ZXIvUm91dGVyLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1JvdXRlci9Sb3V0ZXJQYXRocy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9VdGlscy9WYWxpZGF0b3JzL1ZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9VdGlscy9WYWxpZGF0b3JzL1ZhbGlkYXRvckNvbmZpZy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9GaWxtVmlldy9GaWxtVmlldy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9GaWxtVmlldy9GaWxtVmlld0NvbmZpZy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9IZWFkZXJWaWV3L0hlYWRlclZpZXcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvSGVhZGVyVmlldy9IZWFkZXJWaWV3Q29uZmlnLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL0lWaWV3L0lWaWV3LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL01haW5WaWV3L01haW5WaWV3LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL01vZGFsUmlnaHRWaWV3L01vZGFsUmlnaHRWaWV3LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL01vZGFsUmlnaHRWaWV3L01vZGFsUmlnaHRWaWV3Q29uZmlnLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL1BlcnNvblZpZXcvUGVyc29uVmlldy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9QbGF5ZXJWaWV3L1BsYXllclZpZXcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvU2V0dGluZ3NWaWV3L1NldHRpbmdzVmlldy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9TZXR0aW5nc1ZpZXcvU2V0dGluZ3NWaWV3Q29uZmlnLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL1NpZ25JblZpZXcvU2lnbkluVmlldy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9TaWduSW5WaWV3L1NpZ25JblZpZXdDb25maWcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvU2lnblVwVmlldy9TaWduVXBWaWV3LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL1NpZ25VcFZpZXcvU2lnblVwVmlld0NvbmZpZy50cyIsIndlYnBhY2s6Ly9maWxtaXVtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpbG1pdW0vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmlsbWl1bS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2ZpbG1pdW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maWxtaXVtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImJhckNsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImJhckNsYXNzXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJiYXJDbGFzc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoyNn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiIGpzLWJhclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJhciB3LTEwMFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYXJfX2Z1bGxcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFyX19sb2FkXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYXItbG9hZF9fcHJvZ3Jlc3NcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYXJfX2N1cnJlbnRcXFwiPjwvZGl2PlxcclxcbjwhLS0gICAgICAgIDxkaXYgY2xhc3M9XFxcImJhcl9faGVscGVyXFxcIj4xLjM1PC9kaXY+LS0+XFxyXFxuPCEtLSAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFyX19jdXJyZW50LWNpcmNsZVxcXCI+PC9kaXY+LS0+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJiYXJfX2hlbHBlclxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJiYXJfX2N1cnJlbnQtY2lyY2xlXFxcIj48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJyb290IGpzLXJvb3RcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXIganMtaGVhZGVyXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGVudCBqcy1jb250ZW50XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyIGpzLWZvb3RlclxcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJpZ2h0LW1vZGFsIGpzLXJpZ2h0LW1vZGFsXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwgbW9kYWwtLXJpZ2h0IGpzLW1vZGFsLS1yaWdodFxcXCI+PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgaWQ9XFxcIlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWRcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaWRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjoyN30sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjM1fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIFwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiBkYXRhLWFjdGlvbj1cXFwiXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJkYXRhQWN0aW9uXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImRhdGFBY3Rpb25cIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcImRhdGFBY3Rpb25cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjIzN30sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjI1Mn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBcIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwianMtYnV0dG9uIFwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInVwcGVyQ2xhc3NcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidXBwZXJDbGFzc1wiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidXBwZXJDbGFzc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MjJ9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjozOH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiBcIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaWRcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo0NH19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgY2xhc3M9XFxcImdyYWRpZW50LWJ1dHRvbiBncmFkaWVudC1idXR0b24tLWJsdWUgXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiY2xhc3NOYW1lXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzTmFtZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiY2xhc3NOYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo5MH0sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjEwNX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiIG5vcm1hbC10ZXh0IHAtMTBcXFwiIHN0eWxlPVxcXCItLWNvb3JkLXk6IDQyLjhweDsgLS1kaWFtZXRlci1oaWdobGlnaHQ6IDI2NC4zMDhweDstLWNvb3JkLXg6IDcwLjMzNzVweDtcXFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJkYXRhQWN0aW9uXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjIwNX0sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjI2MX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJncmFkaWVudC1idXR0b25fX2JvcmRlciBqcy1ncmFkaWVudC1idXR0b25fX2JvcmRlclxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3JhZGllbnQtYnV0dG9uX190ZXh0XFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0ZXh0XCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRleHRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInRleHRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NCxcImNvbHVtblwiOjQ0fSxcImVuZFwiOntcImxpbmVcIjo0LFwiY29sdW1uXCI6NTR9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvc3Bhbj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImNsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjbGFzc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoyM319fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0ZXh0XCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRleHRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInRleHRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjI1fSxcImVuZFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MzV9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvZGl2PlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiIGRhdGEtYWN0aW9uPVxcXCJcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImRhdGFBY3Rpb25cIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZGF0YUFjdGlvblwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwiZGF0YUFjdGlvblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6NjZ9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjo4Mn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBcIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBqcy1kcm9wZG93blxcXCIgXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImRhdGFBY3Rpb25cIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MzR9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjo5MX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI+XFxyXFxuICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bl9fYnV0dG9uXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcImRyb3Bkb3duLWJ1dHRvbl9faW1hZ2VcXFwiIHNyYz1cXFwiXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJhdmF0YXJcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYXZhdGFyXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImF2YXRhclwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6NDl9LFwiZW5kXCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo2MX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgPC9hPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bl9fY29udGVudCBqcy1kcm9wZG93bl9fY29udGVudFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250ZW50X19jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnQtY29udGFpbmVyX19pdGVtcyBqcy1kcm9wZG93bi1jb250ZW50LWNvbnRhaW5lcl9faXRlbXNcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiIGVuY3R5cGU9XFxcIm11bHRpcGFydC9mb3JtLWRhdGFcXFwiIFwiO1xufSxcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxmb3JtIGlkPVxcXCJcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImZvcm1JZFwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJmb3JtSWRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiZm9ybUlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxMH0sXCJlbmRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjIyfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJmb3JtIGpzLWZvcm1cXFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJlbmN0eXBlXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjQ1fSxcImVuZFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6OTl9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtX19jb250ZW50IGpzLWZvcm1fX2NvbnRlbnRcXFwiPjwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtX19mb290ZXJcXFwiPjwvZGl2PlxcclxcbjwvZm9ybT5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiBhY2NlcHQ9XFxcIlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiYWNjZXB0XCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImFjY2VwdFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwiYWNjZXB0XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjoxNDJ9LFwiZW5kXCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjoxNTJ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiIFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiY2hlY2tib3hUZXh0XCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNoZWNrYm94VGV4dFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwiY2hlY2tib3hUZXh0XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjoyNn0sXCJlbmRcIjp7XCJsaW5lXCI6MyxcImNvbHVtblwiOjQ0fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCIgXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImlucHV0LWZpZWxkIGpzLWlucHV0LWZpZWxkIFwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImNsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjbGFzc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6Mzl9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjo1MH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInR5cGVcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidHlwZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidHlwZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6MTd9LFwiZW5kXCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjoyN319fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBpZD1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWRcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaWRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjozM30sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjQxfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIHBsYWNlaG9sZGVyPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJwbGFjZWhvbGRlclwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJwbGFjZWhvbGRlclwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwicGxhY2Vob2xkZXJcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjU2fSxcImVuZFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6NzN9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkX19pbnB1dCBcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpbnB1dENsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImlucHV0Q2xhc3NcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImlucHV0Q2xhc3NcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjEwMX0sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjExN319fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBcIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYWNjZXB0XCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjExOX0sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjE2MX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgLz5cXHJcXG4gICAgXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNoZWNrYm94VGV4dFwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6NTJ9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuICAgIDxkaXYgaWQ9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlkXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImlkXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0LFwiY29sdW1uXCI6MTN9LFwiZW5kXCI6e1wibGluZVwiOjQsXCJjb2x1bW5cIjoyMX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiLW1zZ1xcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkX19lcnJvci1tc2dcXFwiPjwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiIGlkPVxcXCJcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlkXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImlkXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MTh9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoyNn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBcIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgZGF0YS1hY3Rpb249XFxcIlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiZGF0YUFjdGlvblwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJkYXRhQWN0aW9uXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJkYXRhQWN0aW9uXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxMjZ9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxNDJ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgXCI7XG59LFwiNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgPHNwYW4gY2xhc3M9XFxcImxpbmtfX2ltYWdlIFwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImxpbmtJbWFnZUNsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImxpbmtJbWFnZUNsYXNzXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJsaW5rSW1hZ2VDbGFzc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6Mjl9LFwiZW5kXCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo0OX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgc3JjPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJsaW5rSW1hZ2VTcmNcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibGlua0ltYWdlU3JjXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJsaW5rSW1hZ2VTcmNcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NCxcImNvbHVtblwiOjE4fSxcImVuZFwiOntcImxpbmVcIjo0LFwiY29sdW1uXCI6MzZ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgd2lkdGg9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImxpbmtJbWFnZVdpZHRoXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImxpbmtJbWFnZVdpZHRoXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJsaW5rSW1hZ2VXaWR0aFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0LFwiY29sdW1uXCI6NDV9LFwiZW5kXCI6e1wibGluZVwiOjQsXCJjb2x1bW5cIjo2NX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgPC9zcGFuPlxcclxcblwiO1xufSxcIjdcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwibGlua19fdGV4dCBcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJsaW5rVGV4dENsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImxpbmtUZXh0Q2xhc3NcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImxpbmtUZXh0Q2xhc3NcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6OSxcImNvbHVtblwiOjMyfSxcImVuZFwiOntcImxpbmVcIjo5LFwiY29sdW1uXCI6NTF9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwibGlua1RleHRcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibGlua1RleHRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImxpbmtUZXh0XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjksXCJjb2x1bW5cIjo1M30sXCJlbmRcIjp7XCJsaW5lXCI6OSxcImNvbHVtblwiOjY3fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxhIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJpZFwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjozfSxcImVuZFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MzV9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiaHJlZj1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwibGlua0hyZWZcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibGlua0hyZWZcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImxpbmtIcmVmXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjo0MX0sXCJlbmRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjU1fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJsaW5rIGpzLWxpbmsgXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwibGlua0NsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImxpbmtDbGFzc1wiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwibGlua0NsYXNzXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjo3N30sXCJlbmRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjkyfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJkYXRhQWN0aW9uXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjk0fSxcImVuZFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MTUxfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibGlua0ltYWdlU3JjXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjYsXCJjb2x1bW5cIjoxMX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibGlua1RleHRcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDcsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo4LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTAsXCJjb2x1bW5cIjoxMX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2E+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8dWwgY2xhc3M9XFxcImxpc3QganMtbGlzdCBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYShkZXB0aDAsIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+PC91bD5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcInZlcnRpY2FsLXNwYWNlciBqcy12ZXJ0aWNhbC1zcGFjZXIgdmVydGljYWwtc3BhY2VyLVwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwic2l6ZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJzaXplXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJzaXplXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjo2M30sXCJlbmRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjczfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPjwvZGl2PlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmaWxtX19iYWNrZ3JvdW5kXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcImZpbG0tYmFja2dyb3VuZF9faW1hZ2VcXFwiIHNyYz1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwicHJldmlld1VSTFwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJwcmV2aWV3VVJMXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJwcmV2aWV3VVJMXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjQsXCJjb2x1bW5cIjo0OX0sXCJlbmRcIjp7XCJsaW5lXCI6NCxcImNvbHVtblwiOjY1fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZpbG1fX2NvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsbV9fY29udGVudC1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbG0tY29udGVudF9fdGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XFxcImZpbG0tY29udGVudC10aXRsZV9fdGV4dFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0aXRsZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ0aXRsZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTEsXCJjb2x1bW5cIjoyMH0sXCJlbmRcIjp7XCJsaW5lXCI6MTEsXCJjb2x1bW5cIjozMX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgIDwvaDE+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsbS1jb250ZW50X19pbmZvLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbG0tY29udGVudF9faW5mb1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWxtLWNvbnRlbnRfX3JhdGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZpbG0tY29udGVudC1yYXRpbmdfX3RleHRcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInJhdGluZ1wiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJyYXRpbmdcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInJhdGluZ1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxOCxcImNvbHVtblwiOjY0fSxcImVuZFwiOntcImxpbmVcIjoxOCxcImNvbHVtblwiOjc2fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmaWxtLWNvbnRlbnRfX3llYXJcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInllYXJcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwieWVhclwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwieWVhclwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyMCxcImNvbHVtblwiOjUzfSxcImVuZFwiOntcImxpbmVcIjoyMCxcImNvbHVtblwiOjYzfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmlsbS1jb250ZW50X190eXBlXFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0eXBlXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInR5cGVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInR5cGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjEsXCJjb2x1bW5cIjo1M30sXCJlbmRcIjp7XCJsaW5lXCI6MjEsXCJjb2x1bW5cIjo2M319fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZpbG0tY29udGVudF9fY291bnRyeVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZpbG0tY29udGVudF9fYWdlLWxpbWl0XFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJhZ2VMaW1pdFwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJhZ2VMaW1pdFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiYWdlTGltaXRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjMsXCJjb2x1bW5cIjo1OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjMsXCJjb2x1bW5cIjo3Mn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiKzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJmaWxtLWNvbnRlbnRfX2Rlc2NyaXB0aW9uXFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJkZXNjcmlwdGlvblwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJkZXNjcmlwdGlvblwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiZGVzY3JpcHRpb25cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjUsXCJjb2x1bW5cIjo1M30sXCJlbmRcIjp7XCJsaW5lXCI6MjUsXCJjb2x1bW5cIjo3MH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9wPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbG0tY29udGVudF9fYXV0aG9yc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbG0tY29udGVudC1hdXRob3JzX19kaXJlY3RvclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWxtLWNvbnRlbnQtYXV0aG9ycy1kaXJlY3Rvcl9fdGV4dFxcXCI+0KDQtdC20LjRgdGB0ZHRgNGLOjwvZGl2PlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImRpcmVjdG9yc1wiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzEsXCJjb2x1bW5cIjoyMH0sXCJlbmRcIjp7XCJsaW5lXCI6MzMsXCJjb2x1bW5cIjoyOX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbG0tY29udGVudC1hdXRob3JzX19hY3RvcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsbS1jb250ZW50LWF1dGhvcnMtYWN0b3JzX190ZXh0XFxcIj7QkNC60YLRkdGA0Ys6PC9kaXY+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImVhY2hcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYWN0b3JzXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDUsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozNyxcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjozOSxcImNvbHVtblwiOjI5fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWxtLWNvbnRlbnRfX2J1dHRvbnNcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIi9wZXJzb25zL1wiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlkXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImlkXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMixcImNvbHVtblwiOjM4fSxcImVuZFwiOntcImxpbmVcIjozMixcImNvbHVtblwiOjQ2fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJmaWxtLWNvbnRlbnQtYXV0aG9ycy1kaXJlY3Rvcl9fbmFtZVxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwibmFtZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJuYW1lXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJuYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMyLFwiY29sdW1uXCI6OTJ9LFwiZW5kXCI6e1wibGluZVwiOjMyLFwiY29sdW1uXCI6MTAyfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2E+XCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInVubGVzc1wiKS5jYWxsKGFsaWFzMSwoZGF0YSAmJiBsb29rdXBQcm9wZXJ0eShkYXRhLFwibGFzdFwiKSkse1wibmFtZVwiOlwidW5sZXNzXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMixcImNvbHVtblwiOjEwNn0sXCJlbmRcIjp7XCJsaW5lXCI6MzIsXCJjb2x1bW5cIjoxMzZ9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiLCBcIjtcbn0sXCI1XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiL3BlcnNvbnMvXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWRcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaWRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjM4LFwiY29sdW1uXCI6NDJ9LFwiZW5kXCI6e1wibGluZVwiOjM4LFwiY29sdW1uXCI6NTB9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImZpbG0tY29udGVudC1hdXRob3JzLWFjdG9yc19fbmFtZVxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwibmFtZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJuYW1lXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJuYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjM4LFwiY29sdW1uXCI6OTR9LFwiZW5kXCI6e1wibGluZVwiOjM4LFwiY29sdW1uXCI6MTA0fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2E+XCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInVubGVzc1wiKS5jYWxsKGFsaWFzMSwoZGF0YSAmJiBsb29rdXBQcm9wZXJ0eShkYXRhLFwibGFzdFwiKSkse1wibmFtZVwiOlwidW5sZXNzXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozOCxcImNvbHVtblwiOjEwOH0sXCJlbmRcIjp7XCJsaW5lXCI6MzgsXCJjb2x1bW5cIjoxMzh9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiPGFydGljbGUgY2xhc3M9XFxcImZpbG1cXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ3aXRoXCIpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJjb250ZW50XCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJ3aXRoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6NDgsXCJjb2x1bW5cIjoxM319fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2FydGljbGU+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJoZWFkZXItY29udGFpbmVyIGpzLWhlYWRlci1jb250YWluZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItY29udGFpbmVyX19sZWZ0IGpzLWhlYWRlci1jb250YWluZXJfX2xlZnRcXFwiPjwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItY29udGFpbmVyX19yaWdodCBqcy1oZWFkZXItY29udGFpbmVyX19yaWdodFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1c2VyLXByb2ZpbGUganMtdXNlci1wcm9maWxlXFxcIj48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgIDxhcnRpY2xlIGNsYXNzPVxcXCJjYXRlZ29yeVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImNhdGVnb3J5X19saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnlfX2Jsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwiY2F0ZWdvcnlfX25hbWVcXFwiPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwidGl0bGVcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidGl0bGVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NyxcImNvbHVtblwiOjQ3fSxcImVuZFwiOntcImxpbmVcIjo3LFwiY29sdW1uXCI6NTh9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvaDI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiL2ltZy9pY29ucy9jaGV2cm9uLXJpZ2h0LnN2Z1xcXCIgYWx0PVxcXCJcXFwiIGNsYXNzPVxcXCJpY29uLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9hPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5X19jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeV9fY29udGFpbmVyX19saXN0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiY2F0ZWdvcnlfX2NvbnRhaW5lcl9faXRlbXNcXFwiPlxcclxcblxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNvbnRlbnRcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE2LFwiY29sdW1uXCI6MjR9LFwiZW5kXCI6e1wibGluZVwiOjIyLFwiY29sdW1uXCI6MzN9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnlfX2NvbnRhaW5lcl9fYnV0dG9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXRlZ29yeV9fY29udGFpbmVyX19idXR0b24tbGVmdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi9pbWcvaWNvbnMvY2hldnJvbi1sZWZ0LnN2Z1xcXCIgYWx0PVxcXCJcXFwiIGNsYXNzPVxcXCJpY29uLWxlZnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXRlZ29yeV9fY29udGFpbmVyX19idXR0b24tcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIvaW1nL2ljb25zL2NoZXZyb24tcmlnaHQuc3ZnXFxcIiBhbHQ9XFxcIlxcXCIgY2xhc3M9XFxcImljb24tcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPC9hcnRpY2xlPlxcclxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiY2F0ZWdvcnlfX2NvbnRhaW5lcl9faXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIvZmlsbXMvXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWRcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaWRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE4LFwiY29sdW1uXCI6NDh9LFwiZW5kXCI6e1wibGluZVwiOjE4LFwiY29sdW1uXCI6NTZ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImNhdGVnb3J5X19jb250YWluZXJfX2l0ZW0tbGlua1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInByZXZpZXdVUkxcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwicHJldmlld1VSTFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwicHJldmlld1VSTFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxOSxcImNvbHVtblwiOjQ2fSxcImVuZFwiOntcImxpbmVcIjoxOSxcImNvbHVtblwiOjYyfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGFsdD1cXFwiXFxcIiBjbGFzcz1cXFwiY2F0ZWdvcnlfX2NvbnRhaW5lcl9faXRlbS1pbWFnZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiPG1haW4gY2xhc3M9XFxcImNhdGVnb3JpZXNcXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJzZWxlY3Rpb25zXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MzgsXCJjb2x1bW5cIjoxM319fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L21haW4+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbF9fYXJlYSBqcy1tb2RhbF9fYXJlYVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsX19jbG9zZS1idG4tY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsX19jbG9zZS1idG5cXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlIE1vZGFsXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJtb2RhbF9fY2xvc2UtYnRuLWltYWdlXFxcIiBzcmM9XFxcIi9pbWcvaWNvbnMvY2xvc2Uuc3ZnXFxcIiBhbHQ9XFxcIkNsb3NlIGltYWdlXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWxfX2NvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWxfX2hlYWRlci1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsX19oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcIm1vZGFsX190aXRsZVxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0aXRsZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ0aXRsZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTAsXCJjb2x1bW5cIjo0MX0sXCJlbmRcIjp7XCJsaW5lXCI6MTAsXCJjb2x1bW5cIjo1Mn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oMj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWxfX2JvZHktY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbF9fYm9keSBqcy1tb2RhbF9fYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZV9fcm93IHBlcnNvbi10YWJsZV9fcm93LS1tZWRpdW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZS1yb3dfX3RpdGxlXFxcIj7QktC+0LfRgNCw0YHRgjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZS1yb3dfX2luZm9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImFnZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJhZ2VcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcImFnZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMyxcImNvbHVtblwiOjQwfSxcImVuZFwiOntcImxpbmVcIjozMyxcImNvbHVtblwiOjQ5fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGVfX3JvdyBwZXJzb24tdGFibGVfX3Jvdy0tbWVkaXVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZS1yb3dfX3RpdGxlXFxcIj7QoNC+0YHRgjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlLXJvd19faW5mb1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJncm93dGhcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZ3Jvd3RoXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJncm93dGhcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NDIsXCJjb2x1bW5cIjozNn0sXCJlbmRcIjp7XCJsaW5lXCI6NDIsXCJjb2x1bW5cIjo0OH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXCI7XG59LFwiNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZV9fcm93IHBlcnNvbi10YWJsZV9fcm93LS1tZWRpdW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlLXJvd19fdGl0bGVcXFwiPtCf0L7QuzwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlLXJvd19faW5mb1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJnZW5kZXJcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZ2VuZGVyXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJnZW5kZXJcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NTEsXCJjb2x1bW5cIjozNn0sXCJlbmRcIjp7XCJsaW5lXCI6NTEsXCJjb2x1bW5cIjo0OH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXCI7XG59LFwiN1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZV9fcm93IHBlcnNvbi10YWJsZV9fcm93LS1tZWRpdW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlLXJvd19fdGl0bGVcXFwiPtCc0LXRgdGC0L4g0YDQvtC20LTQtdC90LjRjzwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlLXJvd19faW5mb1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJiaXJ0aFBsYWNlXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImJpcnRoUGxhY2VcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcImJpcnRoUGxhY2VcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NjAsXCJjb2x1bW5cIjozNn0sXCJlbmRcIjp7XCJsaW5lXCI6NjAsXCJjb2x1bW5cIjo1Mn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXCI7XG59LFwiOVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IChsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwic3RyaW5nSXRlbXNcIil8fChkZXB0aDAgJiYgbG9va3VwUHJvcGVydHkoZGVwdGgwLFwic3RyaW5nSXRlbXNcIikpfHxjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZykuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImdlbnJlc1wiKSA6IGRlcHRoMCksXCJuYW1lXCIse1wibmFtZVwiOlwic3RyaW5nSXRlbXNcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTAsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo2OSxcImNvbHVtblwiOjQ5fSxcImVuZFwiOntcImxpbmVcIjo2OSxcImNvbHVtblwiOjk1fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiBcIjtcbn0sXCIxMFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiXCI7XG59LFwiMTJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcIm5hbWVcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibmFtZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJuYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjcxLFwiY29sdW1uXCI6NDB9LFwiZW5kXCI6e1wibGluZVwiOjcxLFwiY29sdW1uXCI6NTB9fX0pIDogaGVscGVyKSkpXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ1bmxlc3NcIikuY2FsbChhbGlhczEsKGRhdGEgJiYgbG9va3VwUHJvcGVydHkoZGF0YSxcImxhc3RcIikpLHtcIm5hbWVcIjpcInVubGVzc1wiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxMywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjcxLFwiY29sdW1uXCI6NTB9LFwiZW5kXCI6e1wibGluZVwiOjcxLFwiY29sdW1uXCI6ODB9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuXCI7XG59LFwiMTNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiwgXCI7XG59LFwiMTVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInRpdGxlXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRpdGxlXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInRpdGxlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjgwLFwiY29sdW1uXCI6NDB9LFwiZW5kXCI6e1wibGluZVwiOjgwLFwiY29sdW1uXCI6NTF9fX0pIDogaGVscGVyKSkpXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ1bmxlc3NcIikuY2FsbChhbGlhczEsKGRhdGEgJiYgbG9va3VwUHJvcGVydHkoZGF0YSxcImxhc3RcIikpLHtcIm5hbWVcIjpcInVubGVzc1wiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxMywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjgwLFwiY29sdW1uXCI6NTF9LFwiZW5kXCI6e1wibGluZVwiOjgwLFwiY29sdW1uXCI6ODF9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuXCI7XG59LFwiMTdcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJwZXJzb24tcGFuZWwtZmlsbXMtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIi9maWxtcy9cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZFwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJpZFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiaWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6OTMsXCJjb2x1bW5cIjo1Nn0sXCJlbmRcIjp7XCJsaW5lXCI6OTMsXCJjb2x1bW5cIjo2NH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBjbGFzcz1cXFwicGVyc29uLXBhbmVsLWZpbG1zLWl0ZW1fX2xpbmtcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInRpdGxlXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRpdGxlXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo5MyxcImNvbHVtblwiOjEwNH0sXCJlbmRcIjp7XCJsaW5lXCI6OTMsXCJjb2x1bW5cIjoxMTV9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgb3B0aW9ucywgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfSwgYnVmZmVyID0gXG4gIFwiPGFydGljbGUgY2xhc3M9XFxcInBlcnNvblxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uX19jb2x1bW4gcGVyc29uX19jb2x1bW4tLWxlZnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi1jb2x1bW4tbGVmdF9fY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLWNvbHVtbi1sZWZ0LWNvbnRhaW5lcl9faXRlbXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uX19waG90b1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBlcnNvbi1waG90b19fbGlua1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcInBlcnNvbi1waG90b19faW1hZ2VcXFwiIHNyYz1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiYXZhdGFyVVJMXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImF2YXRhclVSTFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiYXZhdGFyVVJMXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjgsXCJjb2x1bW5cIjo2Nn0sXCJlbmRcIjp7XCJsaW5lXCI6OCxcImNvbHVtblwiOjgxfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbl9fZGVsaW1pdGVyXFxcIj48L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbl9fY29sdW1uIHBlcnNvbl9fY29sdW1uLS1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLWNvbHVtbi1yaWdodF9fY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLWNvbHVtbi1yaWdodC1jb250YWluZXJfX2l0ZW1zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbl9faGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24taGVhZGVyLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwicGVyc29uLWhlYWRlcl9fcnUtbmFtZVxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwibmFtZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJuYW1lXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJuYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIyLFwiY29sdW1uXCI6NjN9LFwiZW5kXCI6e1wibGluZVwiOjIyLFwiY29sdW1uXCI6NzN9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvaDE+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbl9fdGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwicGVyc29uLXRhYmxlX190aXRsZVxcXCI+0J4g0L/QtdGA0YHQvtC90LU8L2gzPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImFnZVwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjI5LFwiY29sdW1uXCI6Mjh9LFwiZW5kXCI6e1wibGluZVwiOjM2LFwiY29sdW1uXCI6MzV9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImdyb3d0aFwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjM4LFwiY29sdW1uXCI6Mjh9LFwiZW5kXCI6e1wibGluZVwiOjQ1LFwiY29sdW1uXCI6MzV9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImdlbmRlclwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjQ3LFwiY29sdW1uXCI6Mjh9LFwiZW5kXCI6e1wibGluZVwiOjU0LFwiY29sdW1uXCI6MzV9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImJpcnRoUGxhY2VcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDcsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo1NixcImNvbHVtblwiOjI4fSxcImVuZFwiOntcImxpbmVcIjo2MyxcImNvbHVtblwiOjM1fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGVfX3JvdyBwZXJzb24tdGFibGVfX3Jvdy0tbWVkaXVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZS1yb3dfX3RpdGxlXFxcIj7QltCw0L3RgNGLPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGUtcm93X19pbmZvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImNvbW1lbnRcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiY29tbWVudFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLChvcHRpb25zPXtcIm5hbWVcIjpcImNvbW1lbnRcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oOSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjY5LFwiY29sdW1uXCI6MzZ9LFwiZW5kXCI6e1wibGluZVwiOjY5LFwiY29sdW1uXCI6MTA4fX19KSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLG9wdGlvbnMpIDogaGVscGVyKSk7XG4gIGlmICghbG9va3VwUHJvcGVydHkoaGVscGVycyxcImNvbW1lbnRcIikpIHsgc3RhY2sxID0gY29udGFpbmVyLmhvb2tzLmJsb2NrSGVscGVyTWlzc2luZy5jYWxsKGRlcHRoMCxzdGFjazEsb3B0aW9ucyl9XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImdlbnJlc1wiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxMiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjcwLFwiY29sdW1uXCI6MzZ9LFwiZW5kXCI6e1wibGluZVwiOjcyLFwiY29sdW1uXCI6NDV9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZV9fcm93IHBlcnNvbi10YWJsZV9fcm93LS1tZWRpdW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlLXJvd19fdGl0bGVcXFwiPtCg0L7Qu9C4PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGUtcm93X19pbmZvXFxcIj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiZWFjaFwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJyb2xlc1wiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxNSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjc5LFwiY29sdW1uXCI6MzZ9LFwiZW5kXCI6e1wibGluZVwiOjgxLFwiY29sdW1uXCI6NDV9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbl9fcGFuZWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi1wYW5lbF9fZmlsbXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInBlcnNvbi1wYW5lbC1maWxtc19fdGl0bGVcXFwiPtCb0YPRh9GI0LjQtSDRhNC40LvRjNC80Ys8L2gzPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInBlcnNvbi1wYW5lbC1maWxtc19faXRlbXNcXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInBhcnRpY2lwYXRlZEluXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDE3LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6OTEsXCJjb2x1bW5cIjozMn0sXCJlbmRcIjp7XCJsaW5lXCI6OTUsXCJjb2x1bW5cIjo0MX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2FydGljbGU+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjwhLS08ZGl2IGNsYXNzPVxcXCJ3cmFwcGVyXFxcIj4tLT5cXHJcXG48IS0tICAgIDxkaXYgY2xhc3M9XFxcInBsYXllclxcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgPHZpZGVvIGNsYXNzPVxcXCJ2aWRlb1xcXCIgc3JjPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ2aWRlb1VSTFwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ2aWRlb1VSTFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidmlkZW9VUkxcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MyxcImNvbHVtblwiOjM4fSxcImVuZFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6NTJ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+PC92aWRlbz4tLT5cXHJcXG48IS0tICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250cm9sc1xcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xzX19wbGF5XFxcIiBkYXRhLWFjdGlvbj1cXFwicGxheVxcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiL2ltZy9pY29ucy9wbGF5LnN2Z1xcXCIgY2xhc3M9XFxcInBsYXlfX2J0blxcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcbjwhLS0gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250cm9sc19fc3RvcFxcXCIgZGF0YS1hY3Rpb249XFxcInN0b3BcXFwiPi0tPlxcclxcbjwhLS0gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi9pbWcvaWNvbnMvc3RvcC5zdmdcXFwiIGNsYXNzPVxcXCJzdG9wX19idG5cXFwiPi0tPlxcclxcbjwhLS0gICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbHNfX3Byb2dyZXNzXFxcIiBkYXRhLWFjdGlvbj1cXFwidmlkZW9TY3JvbGxcXFwiPi0tPlxcclxcbjwhLS0gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhbmdlXFxcIiBjbGFzcz1cXFwicHJvZ3Jlc3NcXFwiPi0tPlxcclxcbjwhLS0gICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbHNfX3ZvbHVtZVxcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiL2ltZy9pY29ucy92b2x1bWUuc3ZnXFxcIiBjbGFzcz1cXFwidm9sdW1lX19idG5cXFwiIGRhdGEtYWN0aW9uPVxcXCJ2b2x1bWVTY3JvbGxcXFwiPi0tPlxcclxcbjwhLS0gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhbmdlXFxcIiBjbGFzcz1cXFwidm9sdW1lX19wcm9ncmVzc1xcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcbjwhLS0gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250cm9sc19fdGltZVxcXCI+MDA6MDAvMDA6MDA8L2Rpdj4tLT5cXHJcXG48IS0tICAgICAgICA8L2Rpdj4tLT5cXHJcXG48IS0tICAgIDwvZGl2Pi0tPlxcclxcbjwhLS08L2Rpdj4tLT5cXHJcXG5cXHJcXG48ZGl2IGlkPVxcXCJmdWxsc2NyZWVuLW1vZGFsXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZnVsbHNjcmVlbi1tb2RhbFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyZWxhdGl2ZS1vdmVyZmxvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmVsYXRpdmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyZWxhdGl2ZSBjdXJyZW50LWJhY2tncm91bmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwidmlkZW8tY29udHJvbHNcXFwiIGNsYXNzPVxcXCJ2aWRlbyByZWxhdGl2ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmlkZW9fX3N0b3JhZ2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWRlb19fYmFja2dyb3VuZFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2aWRlbyBpZD1cXFwidmlkZW8tcGxheWVyXFxcIiBhdXRvcGxheSBwbGF5c2lubGluZSBzcmM9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInNyY1wiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJzcmNcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInNyY1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMSxcImNvbHVtblwiOjc5fSxcImVuZFwiOntcImxpbmVcIjozMSxcImNvbHVtblwiOjg4fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPjwvdmlkZW8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmlkZW9fX3RpdGxlLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZGVvX190aXRsZS1hbGlnblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWRlb19fdGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZGVvLXRpdGxlX190ZXh0XFxcIj7Qn9C10YLRgNC+0LLRiyDQsiDQs9GA0LjQv9C/0LU8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWRlb19fY2xvc2UtYnV0dG9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gR3JhZGllbnQgYnV0dG9uICh1cHBlciB0bykgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZGVvX19ib3R0b20tZmlsdGVyXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWRlb19fcGFuZWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXHJcXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmlkZW9fX2JhclxcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWRlb19fYmFyLXBhZGRpbmcgdy0xMDBcXFwiPi0tPlxcclxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZ1bGwtYmFyXFxcIj48L2Rpdj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb2FkLWJhclxcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvYWQtYmFyX19wcm9ncmVzc1xcXCI+PC9kaXY+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY3VycmVudC1iYXJcXFwiPjwvZGl2Pi0tPlxcclxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhci1oZWxwZXJcXFwiPjEuMzU8L2Rpdj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pi0tPlxcclxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjdXJyZW50LWJhci1jaXJjbGVcXFwiPjwvYnV0dG9uPi0tPlxcclxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWRlb19fYm90dG9tLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmxleC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmlkZW9fX3BsYXktYnV0dG9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEdyYWRpZW50IGJ1dHRvbiAodXBwZXIgdG8pIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmlkZW9fX2R1cmF0aW9uLXRpbWVcXFwiPjAwOjA2IC8gMDI6Mzc8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmxleC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtbC01IG1yLTI0XFxcIj4gPCEtLSBUT0RPIGRpdiB3aXRoIHRpdGxlIGluIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0aXRsZT1cXFwi0JLQvtGB0L/RgNC+0LjQt9Cy0L7QtNC40YLRgdGPINCyIEhEINC60LDRh9C10YHRgtCy0LVcXFwiIGNsYXNzPVxcXCJ2aWRlb19fcXVhbGl0eVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi9pbWcvaWNvbnMvcGxheWVyL2hkLnN2Z1xcXCIgYWx0PVxcXCLQktC+0YHQv9GA0L7QuNC30LLQvtC00LjRgtGB0Y8g0LIgSEQg0LrQsNGH0LXRgdGC0LLQtVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1yLTI0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXgtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWRlb19faWNvblxcXCI+IDwhLS0gVE9ETyBkaXYgd2l0aCB0aXRsZSBpbiAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0aXRsZT1cXFwi0JLRi9C60LvRjtGH0LjRgtGMIC8g0JLQutC70Y7Rh9C40YLRjCDQt9Cy0YPQulxcXCIgY2xhc3M9XFxcInZpZGVvX19pY29uLWZpbGxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi9pbWcvaWNvbnMvcGxheWVyL3ZvbHVtZS11cC5zdmdcXFwiIGFsdD1cXFwi0JLRi9C60LvRjtGH0LjRgtGMIC8g0JLQutC70Y7Rh9C40YLRjCDQt9Cy0YPQulxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZGVvX19iYXItcGFkZGluZyB2aWRlb19fdm9sdW1lLWJhclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZ1bGwtYmFyXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9hZC1iYXJcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjdXJyZW50LWJhclxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYXItaGVscGVyXFxcIj40NiU8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjdXJyZW50LWJhci1jaXJjbGVcXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZGVvX19pY29uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRpdGxlPVxcXCLQktC+INCy0LXRgdGMINGN0LrRgNCw0L1cXFwiIGNsYXNzPVxcXCJ2aWRlb19faWNvbi1maWxsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi9pbWcvaWNvbnMvcGxheWVyL2Z1bGxzY3JlZW4uc3ZnXFxcIiBhbHQ9XFxcItCS0L4g0LLQtdGB0Ywg0Y3QutGA0LDQvVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxtYWluIGNsYXNzPVxcXCJzZXR0aW5ncy1jb250YWluZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc1xcXCI+XFxyXFxuICAgICAgICA8aDEgY2xhc3M9XFxcInNldHRpbmdzX190aXRsZVxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwidGl0bGVcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidGl0bGVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInRpdGxlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjozNn0sXCJlbmRcIjp7XCJsaW5lXCI6MyxcImNvbHVtblwiOjQ3fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2gxPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX2NvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19sZWZ0LW1lbnUtY29udGFpbmVyIGpzLXNldHRpbmdzX19sZWZ0LW1lbnUtY29udGFpbmVyXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fZm9ybSBqcy1zZXR0aW5nc19fZm9ybVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIFRoaXMgaXMgdGhlIHNhbWUgYXMgaW4gc2lnbkluIGFuZCBTaWduVXAgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIFRPRE86IG1vdmUgdHdvIGZpZWxkIGluIGZvcm0gYW5kIGFkZCBjbGFzc2VzIGZvciBpdCAtLT5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwic2V0dGluZ3MtZm9ybV9fdGl0bGVcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImZvcm1UaXRsZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJmb3JtVGl0bGVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImZvcm1UaXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNCxcImNvbHVtblwiOjUzfSxcImVuZFwiOntcImxpbmVcIjoxNCxcImNvbHVtblwiOjY4fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2gyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInNldHRpbmdzLWZvcm1fX2Rlc2NyaXB0aW9uXFxcIj4gXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiZGVzY3JpcHRpb25cIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZGVzY3JpcHRpb25cIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImRlc2NyaXB0aW9uXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE1LFwiY29sdW1uXCI6NTl9LFwiZW5kXCI6e1wibGluZVwiOjE1LFwiY29sdW1uXCI6NzZ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9tYWluPlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiIDxoMyBjbGFzcz1cXFwic2lnbkluX190aXRsZVxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0aXRsZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ0aXRsZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjQ0fSxcImVuZFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6NTV9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvaDM+IFwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiA8cCBjbGFzcz1cXFwic2lnbkluX19kZXNjcmlwdGlvblxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJkZXNjcmlwdGlvblwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJkZXNjcmlwdGlvblwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwiZGVzY3JpcHRpb25cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MyxcImNvbHVtblwiOjU1fSxcImVuZFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6NzJ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvcD4gXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcInNpZ25JbiBqcy1zaWduSW5cXFwiPlxcclxcbiAgICBcIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidGl0bGVcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjY4fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcbiAgICBcIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZGVzY3JpcHRpb25cIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MyxcImNvbHVtblwiOjg0fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcbjwvZGl2PlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiIDxoMyBjbGFzcz1cXFwic2lnblVwX190aXRsZVxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0aXRsZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ0aXRsZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjQ0fSxcImVuZFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6NTV9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvaDM+IFwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiA8cCBjbGFzcz1cXFwic2lnblVwX19kZXNjcmlwdGlvblxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJkZXNjcmlwdGlvblwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJkZXNjcmlwdGlvblwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwiZGVzY3JpcHRpb25cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MyxcImNvbHVtblwiOjU1fSxcImVuZFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6NzJ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvcD4gXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcInNpZ25VcCBqcy1zaWduVXBcXFwiPlxcclxcbiAgICBcIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidGl0bGVcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjY4fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcbiAgICBcIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZGVzY3JpcHRpb25cIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MyxcImNvbHVtblwiOjg0fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcbjwvZGl2PlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX2hhbmRsZWJhcnNCYXNlID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL2Jhc2UnKTtcblxudmFyIGJhc2UgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaGFuZGxlYmFyc0Jhc2UpO1xuXG4vLyBFYWNoIG9mIHRoZXNlIGF1Z21lbnQgdGhlIEhhbmRsZWJhcnMgb2JqZWN0LiBObyBuZWVkIHRvIHNldHVwIGhlcmUuXG4vLyAoVGhpcyBpcyBkb25lIHRvIGVhc2lseSBzaGFyZSBjb2RlIGJldHdlZW4gY29tbW9uanMgYW5kIGJyb3dzZSBlbnZzKVxuXG52YXIgX2hhbmRsZWJhcnNTYWZlU3RyaW5nID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nJyk7XG5cbnZhciBfaGFuZGxlYmFyc1NhZmVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc1NhZmVTdHJpbmcpO1xuXG52YXIgX2hhbmRsZWJhcnNFeGNlcHRpb24gPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvZXhjZXB0aW9uJyk7XG5cbnZhciBfaGFuZGxlYmFyc0V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzRXhjZXB0aW9uKTtcblxudmFyIF9oYW5kbGViYXJzVXRpbHMgPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvdXRpbHMnKTtcblxudmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNVdGlscyk7XG5cbnZhciBfaGFuZGxlYmFyc1J1bnRpbWUgPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvcnVudGltZScpO1xuXG52YXIgcnVudGltZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oYW5kbGViYXJzUnVudGltZSk7XG5cbnZhciBfaGFuZGxlYmFyc05vQ29uZmxpY3QgPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnKTtcblxudmFyIF9oYW5kbGViYXJzTm9Db25mbGljdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzTm9Db25mbGljdCk7XG5cbi8vIEZvciBjb21wYXRpYmlsaXR5IGFuZCB1c2FnZSBvdXRzaWRlIG9mIG1vZHVsZSBzeXN0ZW1zLCBtYWtlIHRoZSBIYW5kbGViYXJzIG9iamVjdCBhIG5hbWVzcGFjZVxuZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgaGIgPSBuZXcgYmFzZS5IYW5kbGViYXJzRW52aXJvbm1lbnQoKTtcblxuICBVdGlscy5leHRlbmQoaGIsIGJhc2UpO1xuICBoYi5TYWZlU3RyaW5nID0gX2hhbmRsZWJhcnNTYWZlU3RyaW5nMlsnZGVmYXVsdCddO1xuICBoYi5FeGNlcHRpb24gPSBfaGFuZGxlYmFyc0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXTtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uIChzcGVjKSB7XG4gICAgcmV0dXJuIHJ1bnRpbWUudGVtcGxhdGUoc3BlYywgaGIpO1xuICB9O1xuXG4gIHJldHVybiBoYjtcbn1cblxudmFyIGluc3QgPSBjcmVhdGUoKTtcbmluc3QuY3JlYXRlID0gY3JlYXRlO1xuXG5faGFuZGxlYmFyc05vQ29uZmxpY3QyWydkZWZhdWx0J10oaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGluc3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMbkoxYm5ScGJXVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T0VKQlFYTkNMRzFDUVVGdFFqczdTVUZCTjBJc1NVRkJTVHM3T3pzN2IwTkJTVThzTUVKQlFUQkNPenM3TzIxRFFVTXpRaXgzUWtGQmQwSTdPenM3SzBKQlEzWkNMRzlDUVVGdlFqczdTVUZCTDBJc1MwRkJTenM3YVVOQlExRXNjMEpCUVhOQ096dEpRVUZ1UXl4UFFVRlBPenR2UTBGRlNTd3dRa0ZCTUVJN096czdPMEZCUjJwRUxGTkJRVk1zVFVGQlRTeEhRVUZITzBGQlEyaENMRTFCUVVrc1JVRkJSU3hIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhGUVVGRkxFTkJRVU03TzBGQlJURkRMRTlCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTNaQ0xFbEJRVVVzUTBGQlF5eFZRVUZWTEc5RFFVRmhMRU5CUVVNN1FVRkRNMElzU1VGQlJTeERRVUZETEZOQlFWTXNiVU5CUVZrc1EwRkJRenRCUVVONlFpeEpRVUZGTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRCUVVOcVFpeEpRVUZGTEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzUzBGQlN5eERRVUZETEdkQ1FVRm5RaXhEUVVGRE96dEJRVVUzUXl4SlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFOUJRVThzUTBGQlF6dEJRVU5vUWl4SlFVRkZMRU5CUVVNc1VVRkJVU3hIUVVGSExGVkJRVk1zU1VGQlNTeEZRVUZGTzBGQlF6TkNMRmRCUVU4c1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1IwRkRia01zUTBGQlF6czdRVUZGUml4VFFVRlBMRVZCUVVVc1EwRkJRenREUVVOWU96dEJRVVZFTEVsQlFVa3NTVUZCU1N4SFFVRkhMRTFCUVUwc1JVRkJSU3hEUVVGRE8wRkJRM0JDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE96dEJRVVZ5UWl4clEwRkJWeXhKUVVGSkxFTkJRVU1zUTBGQlF6czdRVUZGYWtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXpzN2NVSkJSVklzU1VGQlNTSXNJbVpwYkdVaU9pSm9ZVzVrYkdWaVlYSnpMbkoxYm5ScGJXVXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnS2lCaGN5QmlZWE5sSUdaeWIyMGdKeTR2YUdGdVpHeGxZbUZ5Y3k5aVlYTmxKenRjYmx4dUx5OGdSV0ZqYUNCdlppQjBhR1Z6WlNCaGRXZHRaVzUwSUhSb1pTQklZVzVrYkdWaVlYSnpJRzlpYW1WamRDNGdUbThnYm1WbFpDQjBieUJ6WlhSMWNDQm9aWEpsTGx4dUx5OGdLRlJvYVhNZ2FYTWdaRzl1WlNCMGJ5QmxZWE5wYkhrZ2MyaGhjbVVnWTI5a1pTQmlaWFIzWldWdUlHTnZiVzF2Ym1weklHRnVaQ0JpY205M2MyVWdaVzUyY3lsY2JtbHRjRzl5ZENCVFlXWmxVM1J5YVc1bklHWnliMjBnSnk0dmFHRnVaR3hsWW1GeWN5OXpZV1psTFhOMGNtbHVaeWM3WEc1cGJYQnZjblFnUlhoalpYQjBhVzl1SUdaeWIyMGdKeTR2YUdGdVpHeGxZbUZ5Y3k5bGVHTmxjSFJwYjI0bk8xeHVhVzF3YjNKMElDb2dZWE1nVlhScGJITWdabkp2YlNBbkxpOW9ZVzVrYkdWaVlYSnpMM1YwYVd4ekp6dGNibWx0Y0c5eWRDQXFJR0Z6SUhKMWJuUnBiV1VnWm5KdmJTQW5MaTlvWVc1a2JHVmlZWEp6TDNKMWJuUnBiV1VuTzF4dVhHNXBiWEJ2Y25RZ2JtOURiMjVtYkdsamRDQm1jbTl0SUNjdUwyaGhibVJzWldKaGNuTXZibTh0WTI5dVpteHBZM1FuTzF4dVhHNHZMeUJHYjNJZ1kyOXRjR0YwYVdKcGJHbDBlU0JoYm1RZ2RYTmhaMlVnYjNWMGMybGtaU0J2WmlCdGIyUjFiR1VnYzNsemRHVnRjeXdnYldGclpTQjBhR1VnU0dGdVpHeGxZbUZ5Y3lCdlltcGxZM1FnWVNCdVlXMWxjM0JoWTJWY2JtWjFibU4wYVc5dUlHTnlaV0YwWlNncElIdGNiaUFnYkdWMElHaGlJRDBnYm1WM0lHSmhjMlV1U0dGdVpHeGxZbUZ5YzBWdWRtbHliMjV0Wlc1MEtDazdYRzVjYmlBZ1ZYUnBiSE11WlhoMFpXNWtLR2hpTENCaVlYTmxLVHRjYmlBZ2FHSXVVMkZtWlZOMGNtbHVaeUE5SUZOaFptVlRkSEpwYm1jN1hHNGdJR2hpTGtWNFkyVndkR2x2YmlBOUlFVjRZMlZ3ZEdsdmJqdGNiaUFnYUdJdVZYUnBiSE1nUFNCVmRHbHNjenRjYmlBZ2FHSXVaWE5qWVhCbFJYaHdjbVZ6YzJsdmJpQTlJRlYwYVd4ekxtVnpZMkZ3WlVWNGNISmxjM05wYjI0N1hHNWNiaUFnYUdJdVZrMGdQU0J5ZFc1MGFXMWxPMXh1SUNCb1lpNTBaVzF3YkdGMFpTQTlJR1oxYm1OMGFXOXVLSE53WldNcElIdGNiaUFnSUNCeVpYUjFjbTRnY25WdWRHbHRaUzUwWlcxd2JHRjBaU2h6Y0dWakxDQm9ZaWs3WEc0Z0lIMDdYRzVjYmlBZ2NtVjBkWEp1SUdoaU8xeHVmVnh1WEc1c1pYUWdhVzV6ZENBOUlHTnlaV0YwWlNncE8xeHVhVzV6ZEM1amNtVmhkR1VnUFNCamNtVmhkR1U3WEc1Y2JtNXZRMjl1Wm14cFkzUW9hVzV6ZENrN1hHNWNibWx1YzNSYkoyUmxabUYxYkhRblhTQTlJR2x1YzNRN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHbHVjM1E3WEc0aVhYMD1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuSGFuZGxlYmFyc0Vudmlyb25tZW50ID0gSGFuZGxlYmFyc0Vudmlyb25tZW50O1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX2V4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vZXhjZXB0aW9uJyk7XG5cbnZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cbnZhciBfaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xuXG52YXIgX2RlY29yYXRvcnMgPSByZXF1aXJlKCcuL2RlY29yYXRvcnMnKTtcblxudmFyIF9sb2dnZXIgPSByZXF1aXJlKCcuL2xvZ2dlcicpO1xuXG52YXIgX2xvZ2dlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2dnZXIpO1xuXG52YXIgX2ludGVybmFsUHJvdG9BY2Nlc3MgPSByZXF1aXJlKCcuL2ludGVybmFsL3Byb3RvLWFjY2VzcycpO1xuXG52YXIgVkVSU0lPTiA9ICc0LjcuNyc7XG5leHBvcnRzLlZFUlNJT04gPSBWRVJTSU9OO1xudmFyIENPTVBJTEVSX1JFVklTSU9OID0gODtcbmV4cG9ydHMuQ09NUElMRVJfUkVWSVNJT04gPSBDT01QSUxFUl9SRVZJU0lPTjtcbnZhciBMQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04gPSA3O1xuXG5leHBvcnRzLkxBU1RfQ09NUEFUSUJMRV9DT01QSUxFUl9SRVZJU0lPTiA9IExBU1RfQ09NUEFUSUJMRV9DT01QSUxFUl9SRVZJU0lPTjtcbnZhciBSRVZJU0lPTl9DSEFOR0VTID0ge1xuICAxOiAnPD0gMS4wLnJjLjInLCAvLyAxLjAucmMuMiBpcyBhY3R1YWxseSByZXYyIGJ1dCBkb2Vzbid0IHJlcG9ydCBpdFxuICAyOiAnPT0gMS4wLjAtcmMuMycsXG4gIDM6ICc9PSAxLjAuMC1yYy40JyxcbiAgNDogJz09IDEueC54JyxcbiAgNTogJz09IDIuMC4wLWFscGhhLngnLFxuICA2OiAnPj0gMi4wLjAtYmV0YS4xJyxcbiAgNzogJz49IDQuMC4wIDw0LjMuMCcsXG4gIDg6ICc+PSA0LjMuMCdcbn07XG5cbmV4cG9ydHMuUkVWSVNJT05fQ0hBTkdFUyA9IFJFVklTSU9OX0NIQU5HRVM7XG52YXIgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5mdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMsIGRlY29yYXRvcnMpIHtcbiAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcbiAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuICB0aGlzLmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzIHx8IHt9O1xuXG4gIF9oZWxwZXJzLnJlZ2lzdGVyRGVmYXVsdEhlbHBlcnModGhpcyk7XG4gIF9kZWNvcmF0b3JzLnJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnModGhpcyk7XG59XG5cbkhhbmRsZWJhcnNFbnZpcm9ubWVudC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cbiAgbG9nZ2VyOiBfbG9nZ2VyMlsnZGVmYXVsdCddLFxuICBsb2c6IF9sb2dnZXIyWydkZWZhdWx0J10ubG9nLFxuXG4gIHJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbiByZWdpc3RlckhlbHBlcihuYW1lLCBmbikge1xuICAgIGlmIChfdXRpbHMudG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTtcbiAgICAgIH1cbiAgICAgIF91dGlscy5leHRlbmQodGhpcy5oZWxwZXJzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oZWxwZXJzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbiB1bnJlZ2lzdGVySGVscGVyKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5oZWxwZXJzW25hbWVdO1xuICB9LFxuXG4gIHJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24gcmVnaXN0ZXJQYXJ0aWFsKG5hbWUsIHBhcnRpYWwpIHtcbiAgICBpZiAoX3V0aWxzLnRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIF91dGlscy5leHRlbmQodGhpcy5wYXJ0aWFscywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgcGFydGlhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0F0dGVtcHRpbmcgdG8gcmVnaXN0ZXIgYSBwYXJ0aWFsIGNhbGxlZCBcIicgKyBuYW1lICsgJ1wiIGFzIHVuZGVmaW5lZCcpO1xuICAgICAgfVxuICAgICAgdGhpcy5wYXJ0aWFsc1tuYW1lXSA9IHBhcnRpYWw7XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24gdW5yZWdpc3RlclBhcnRpYWwobmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLnBhcnRpYWxzW25hbWVdO1xuICB9LFxuXG4gIHJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbiByZWdpc3RlckRlY29yYXRvcihuYW1lLCBmbikge1xuICAgIGlmIChfdXRpbHMudG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGRlY29yYXRvcnMnKTtcbiAgICAgIH1cbiAgICAgIF91dGlscy5leHRlbmQodGhpcy5kZWNvcmF0b3JzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWNvcmF0b3JzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbiB1bnJlZ2lzdGVyRGVjb3JhdG9yKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5kZWNvcmF0b3JzW25hbWVdO1xuICB9LFxuICAvKipcbiAgICogUmVzZXQgdGhlIG1lbW9yeSBvZiBpbGxlZ2FsIHByb3BlcnR5IGFjY2Vzc2VzIHRoYXQgaGF2ZSBhbHJlYWR5IGJlZW4gbG9nZ2VkLlxuICAgKiBAZGVwcmVjYXRlZCBzaG91bGQgb25seSBiZSB1c2VkIGluIGhhbmRsZWJhcnMgdGVzdC1jYXNlc1xuICAgKi9cbiAgcmVzZXRMb2dnZWRQcm9wZXJ0eUFjY2Vzc2VzOiBmdW5jdGlvbiByZXNldExvZ2dlZFByb3BlcnR5QWNjZXNzZXMoKSB7XG4gICAgX2ludGVybmFsUHJvdG9BY2Nlc3MucmVzZXRMb2dnZWRQcm9wZXJ0aWVzKCk7XG4gIH1cbn07XG5cbnZhciBsb2cgPSBfbG9nZ2VyMlsnZGVmYXVsdCddLmxvZztcblxuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmNyZWF0ZUZyYW1lID0gX3V0aWxzLmNyZWF0ZUZyYW1lO1xuZXhwb3J0cy5sb2dnZXIgPSBfbG9nZ2VyMlsnZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMkpoYzJVdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN2NVSkJRVGhETEZOQlFWTTdPM2xDUVVOcVF5eGhRVUZoT3pzN08zVkNRVU5KTEZkQlFWYzdPekJDUVVOU0xHTkJRV003TzNOQ1FVTnlReXhWUVVGVk96czdPMjFEUVVOVExIbENRVUY1UWpzN1FVRkZlRVFzU1VGQlRTeFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRPenRCUVVONFFpeEpRVUZOTEdsQ1FVRnBRaXhIUVVGSExFTkJRVU1zUTBGQlF6czdRVUZETlVJc1NVRkJUU3hwUTBGQmFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN096dEJRVVUxUXl4SlFVRk5MR2RDUVVGblFpeEhRVUZITzBGQlF6bENMRWRCUVVNc1JVRkJSU3hoUVVGaE8wRkJRMmhDTEVkQlFVTXNSVUZCUlN4bFFVRmxPMEZCUTJ4Q0xFZEJRVU1zUlVGQlJTeGxRVUZsTzBGQlEyeENMRWRCUVVNc1JVRkJSU3hWUVVGVk8wRkJRMklzUjBGQlF5eEZRVUZGTEd0Q1FVRnJRanRCUVVOeVFpeEhRVUZETEVWQlFVVXNhVUpCUVdsQ08wRkJRM0JDTEVkQlFVTXNSVUZCUlN4cFFrRkJhVUk3UVVGRGNFSXNSMEZCUXl4RlFVRkZMRlZCUVZVN1EwRkRaQ3hEUVVGRE96czdRVUZGUml4SlFVRk5MRlZCUVZVc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXpzN1FVRkZPVUlzVTBGQlV5eHhRa0ZCY1VJc1EwRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeEZRVUZGTEZWQlFWVXNSVUZCUlR0QlFVTnVSU3hOUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNTVUZCU1N4RlFVRkZMRU5CUVVNN1FVRkROMElzVFVGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4UlFVRlJMRWxCUVVrc1JVRkJSU3hEUVVGRE8wRkJReTlDTEUxQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hKUVVGSkxFVkJRVVVzUTBGQlF6czdRVUZGYmtNc2EwTkJRWFZDTEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUXpkQ0xIZERRVUV3UWl4SlFVRkpMRU5CUVVNc1EwRkJRenREUVVOcVF6czdRVUZGUkN4eFFrRkJjVUlzUTBGQlF5eFRRVUZUTEVkQlFVYzdRVUZEYUVNc1lVRkJWeXhGUVVGRkxIRkNRVUZ4UWpzN1FVRkZiRU1zVVVGQlRTeHhRa0ZCVVR0QlFVTmtMRXRCUVVjc1JVRkJSU3h2UWtGQlR5eEhRVUZIT3p0QlFVVm1MR2RDUVVGakxFVkJRVVVzZDBKQlFWTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1JVRkJSVHRCUVVOcVF5eFJRVUZKTEdkQ1FVRlRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eFZRVUZWTEVWQlFVVTdRVUZEZEVNc1ZVRkJTU3hGUVVGRkxFVkJRVVU3UVVGRFRpeGpRVUZOTERKQ1FVRmpMSGxEUVVGNVF5eERRVUZETEVOQlFVTTdUMEZEYUVVN1FVRkRSQ3h2UWtGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRelZDTEUxQlFVMDdRVUZEVEN4VlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0TFFVTjZRanRIUVVOR08wRkJRMFFzYTBKQlFXZENMRVZCUVVVc01FSkJRVk1zU1VGQlNTeEZRVUZGTzBGQlF5OUNMRmRCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SFFVTXpRanM3UVVGRlJDeHBRa0ZCWlN4RlFVRkZMSGxDUVVGVExFbEJRVWtzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEZGtNc1VVRkJTU3huUWtGQlV5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1ZVRkJWU3hGUVVGRk8wRkJRM1JETEc5Q1FVRlBMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTMEZETjBJc1RVRkJUVHRCUVVOTUxGVkJRVWtzVDBGQlR5eFBRVUZQTEV0QlFVc3NWMEZCVnl4RlFVRkZPMEZCUTJ4RExHTkJRVTBzZVVWQlEzZERMRWxCUVVrc2IwSkJRMnBFTEVOQlFVTTdUMEZEU0R0QlFVTkVMRlZCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NUMEZCVHl4RFFVRkRPMHRCUXk5Q08wZEJRMFk3UVVGRFJDeHRRa0ZCYVVJc1JVRkJSU3d5UWtGQlV5eEpRVUZKTEVWQlFVVTdRVUZEYUVNc1YwRkJUeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGRCUXpWQ096dEJRVVZFTEcxQ1FVRnBRaXhGUVVGRkxESkNRVUZUTEVsQlFVa3NSVUZCUlN4RlFVRkZMRVZCUVVVN1FVRkRjRU1zVVVGQlNTeG5Ra0ZCVXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzVlVGQlZTeEZRVUZGTzBGQlEzUkRMRlZCUVVrc1JVRkJSU3hGUVVGRk8wRkJRMDRzWTBGQlRTd3lRa0ZCWXl3MFEwRkJORU1zUTBGQlF5eERRVUZETzA5QlEyNUZPMEZCUTBRc2IwSkJRVThzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRMUVVNdlFpeE5RVUZOTzBGQlEwd3NWVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdTMEZETlVJN1IwRkRSanRCUVVORUxIRkNRVUZ0UWl4RlFVRkZMRFpDUVVGVExFbEJRVWtzUlVGQlJUdEJRVU5zUXl4WFFVRlBMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdSMEZET1VJN096czdPMEZCUzBRc05rSkJRVEpDTEVWQlFVRXNkVU5CUVVjN1FVRkROVUlzWjBSQlFYVkNMRU5CUVVNN1IwRkRla0k3UTBGRFJpeERRVUZET3p0QlFVVkxMRWxCUVVrc1IwRkJSeXhIUVVGSExHOUNRVUZQTEVkQlFVY3NRMEZCUXpzN08xRkJSVzVDTEZkQlFWYzdVVUZCUlN4TlFVRk5JaXdpWm1sc1pTSTZJbUpoYzJVdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJqY21WaGRHVkdjbUZ0WlN3Z1pYaDBaVzVrTENCMGIxTjBjbWx1WnlCOUlHWnliMjBnSnk0dmRYUnBiSE1uTzF4dWFXMXdiM0owSUVWNFkyVndkR2x2YmlCbWNtOXRJQ2N1TDJWNFkyVndkR2x2YmljN1hHNXBiWEJ2Y25RZ2V5QnlaV2RwYzNSbGNrUmxabUYxYkhSSVpXeHdaWEp6SUgwZ1puSnZiU0FuTGk5b1pXeHdaWEp6Snp0Y2JtbHRjRzl5ZENCN0lISmxaMmx6ZEdWeVJHVm1ZWFZzZEVSbFkyOXlZWFJ2Y25NZ2ZTQm1jbTl0SUNjdUwyUmxZMjl5WVhSdmNuTW5PMXh1YVcxd2IzSjBJR3h2WjJkbGNpQm1jbTl0SUNjdUwyeHZaMmRsY2ljN1hHNXBiWEJ2Y25RZ2V5QnlaWE5sZEV4dloyZGxaRkJ5YjNCbGNuUnBaWE1nZlNCbWNtOXRJQ2N1TDJsdWRHVnlibUZzTDNCeWIzUnZMV0ZqWTJWemN5YzdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQldSVkpUU1U5T0lEMGdKelF1Tnk0M0p6dGNibVY0Y0c5eWRDQmpiMjV6ZENCRFQwMVFTVXhGVWw5U1JWWkpVMGxQVGlBOUlEZzdYRzVsZUhCdmNuUWdZMjl1YzNRZ1RFRlRWRjlEVDAxUVFWUkpRa3hGWDBOUFRWQkpURVZTWDFKRlZrbFRTVTlPSUQwZ056dGNibHh1Wlhod2IzSjBJR052Ym5OMElGSkZWa2xUU1U5T1gwTklRVTVIUlZNZ1BTQjdYRzRnSURFNklDYzhQU0F4TGpBdWNtTXVNaWNzSUM4dklERXVNQzV5WXk0eUlHbHpJR0ZqZEhWaGJHeDVJSEpsZGpJZ1luVjBJR1J2WlhOdUozUWdjbVZ3YjNKMElHbDBYRzRnSURJNklDYzlQU0F4TGpBdU1DMXlZeTR6Snl4Y2JpQWdNem9nSnowOUlERXVNQzR3TFhKakxqUW5MRnh1SUNBME9pQW5QVDBnTVM1NExuZ25MRnh1SUNBMU9pQW5QVDBnTWk0d0xqQXRZV3h3YUdFdWVDY3NYRzRnSURZNklDYytQU0F5TGpBdU1DMWlaWFJoTGpFbkxGeHVJQ0EzT2lBblBqMGdOQzR3TGpBZ1BEUXVNeTR3Snl4Y2JpQWdPRG9nSno0OUlEUXVNeTR3SjF4dWZUdGNibHh1WTI5dWMzUWdiMkpxWldOMFZIbHdaU0E5SUNkYmIySnFaV04wSUU5aWFtVmpkRjBuTzF4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1NHRnVaR3hsWW1GeWMwVnVkbWx5YjI1dFpXNTBLR2hsYkhCbGNuTXNJSEJoY25ScFlXeHpMQ0JrWldOdmNtRjBiM0p6S1NCN1hHNGdJSFJvYVhNdWFHVnNjR1Z5Y3lBOUlHaGxiSEJsY25NZ2ZId2dlMzA3WEc0Z0lIUm9hWE11Y0dGeWRHbGhiSE1nUFNCd1lYSjBhV0ZzY3lCOGZDQjdmVHRjYmlBZ2RHaHBjeTVrWldOdmNtRjBiM0p6SUQwZ1pHVmpiM0poZEc5eWN5QjhmQ0I3ZlR0Y2JseHVJQ0J5WldkcGMzUmxja1JsWm1GMWJIUklaV3h3WlhKektIUm9hWE1wTzF4dUlDQnlaV2RwYzNSbGNrUmxabUYxYkhSRVpXTnZjbUYwYjNKektIUm9hWE1wTzF4dWZWeHVYRzVJWVc1a2JHVmlZWEp6Ulc1MmFYSnZibTFsYm5RdWNISnZkRzkwZVhCbElEMGdlMXh1SUNCamIyNXpkSEoxWTNSdmNqb2dTR0Z1Wkd4bFltRnljMFZ1ZG1seWIyNXRaVzUwTEZ4dVhHNGdJR3h2WjJkbGNqb2diRzluWjJWeUxGeHVJQ0JzYjJjNklHeHZaMmRsY2k1c2IyY3NYRzVjYmlBZ2NtVm5hWE4wWlhKSVpXeHdaWEk2SUdaMWJtTjBhVzl1S0c1aGJXVXNJR1p1S1NCN1hHNGdJQ0FnYVdZZ0tIUnZVM1J5YVc1bkxtTmhiR3dvYm1GdFpTa2dQVDA5SUc5aWFtVmpkRlI1Y0dVcElIdGNiaUFnSUNBZ0lHbG1JQ2htYmlrZ2UxeHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWGhqWlhCMGFXOXVLQ2RCY21jZ2JtOTBJSE4xY0hCdmNuUmxaQ0IzYVhSb0lHMTFiSFJwY0d4bElHaGxiSEJsY25NbktUdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lHVjRkR1Z1WkNoMGFHbHpMbWhsYkhCbGNuTXNJRzVoYldVcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0IwYUdsekxtaGxiSEJsY25OYmJtRnRaVjBnUFNCbWJqdGNiaUFnSUNCOVhHNGdJSDBzWEc0Z0lIVnVjbVZuYVhOMFpYSklaV3h3WlhJNklHWjFibU4wYVc5dUtHNWhiV1VwSUh0Y2JpQWdJQ0JrWld4bGRHVWdkR2hwY3k1b1pXeHdaWEp6VzI1aGJXVmRPMXh1SUNCOUxGeHVYRzRnSUhKbFoybHpkR1Z5VUdGeWRHbGhiRG9nWm5WdVkzUnBiMjRvYm1GdFpTd2djR0Z5ZEdsaGJDa2dlMXh1SUNBZ0lHbG1JQ2gwYjFOMGNtbHVaeTVqWVd4c0tHNWhiV1VwSUQwOVBTQnZZbXBsWTNSVWVYQmxLU0I3WEc0Z0lDQWdJQ0JsZUhSbGJtUW9kR2hwY3k1d1lYSjBhV0ZzY3l3Z2JtRnRaU2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdjR0Z5ZEdsaGJDQTlQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVY0WTJWd2RHbHZiaWhjYmlBZ0lDQWdJQ0FnSUNCZ1FYUjBaVzF3ZEdsdVp5QjBieUJ5WldkcGMzUmxjaUJoSUhCaGNuUnBZV3dnWTJGc2JHVmtJRndpSkh0dVlXMWxmVndpSUdGeklIVnVaR1ZtYVc1bFpHQmNiaUFnSUNBZ0lDQWdLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJSFJvYVhNdWNHRnlkR2xoYkhOYmJtRnRaVjBnUFNCd1lYSjBhV0ZzTzF4dUlDQWdJSDFjYmlBZ2ZTeGNiaUFnZFc1eVpXZHBjM1JsY2xCaGNuUnBZV3c2SUdaMWJtTjBhVzl1S0c1aGJXVXBJSHRjYmlBZ0lDQmtaV3hsZEdVZ2RHaHBjeTV3WVhKMGFXRnNjMXR1WVcxbFhUdGNiaUFnZlN4Y2JseHVJQ0J5WldkcGMzUmxja1JsWTI5eVlYUnZjam9nWm5WdVkzUnBiMjRvYm1GdFpTd2dabTRwSUh0Y2JpQWdJQ0JwWmlBb2RHOVRkSEpwYm1jdVkyRnNiQ2h1WVcxbEtTQTlQVDBnYjJKcVpXTjBWSGx3WlNrZ2UxeHVJQ0FnSUNBZ2FXWWdLR1p1S1NCN1hHNGdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QkZlR05sY0hScGIyNG9KMEZ5WnlCdWIzUWdjM1Z3Y0c5eWRHVmtJSGRwZEdnZ2JYVnNkR2x3YkdVZ1pHVmpiM0poZEc5eWN5Y3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdaWGgwWlc1a0tIUm9hWE11WkdWamIzSmhkRzl5Y3l3Z2JtRnRaU2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIUm9hWE11WkdWamIzSmhkRzl5YzF0dVlXMWxYU0E5SUdadU8xeHVJQ0FnSUgxY2JpQWdmU3hjYmlBZ2RXNXlaV2RwYzNSbGNrUmxZMjl5WVhSdmNqb2dablZ1WTNScGIyNG9ibUZ0WlNrZ2UxeHVJQ0FnSUdSbGJHVjBaU0IwYUdsekxtUmxZMjl5WVhSdmNuTmJibUZ0WlYwN1hHNGdJSDBzWEc0Z0lDOHFLbHh1SUNBZ0tpQlNaWE5sZENCMGFHVWdiV1Z0YjNKNUlHOW1JR2xzYkdWbllXd2djSEp2Y0dWeWRIa2dZV05qWlhOelpYTWdkR2hoZENCb1lYWmxJR0ZzY21WaFpIa2dZbVZsYmlCc2IyZG5aV1F1WEc0Z0lDQXFJRUJrWlhCeVpXTmhkR1ZrSUhOb2IzVnNaQ0J2Ym14NUlHSmxJSFZ6WldRZ2FXNGdhR0Z1Wkd4bFltRnljeUIwWlhOMExXTmhjMlZ6WEc0Z0lDQXFMMXh1SUNCeVpYTmxkRXh2WjJkbFpGQnliM0JsY25SNVFXTmpaWE56WlhNb0tTQjdYRzRnSUNBZ2NtVnpaWFJNYjJkblpXUlFjbTl3WlhKMGFXVnpLQ2s3WEc0Z0lIMWNibjA3WEc1Y2JtVjRjRzl5ZENCc1pYUWdiRzluSUQwZ2JHOW5aMlZ5TG14dlp6dGNibHh1Wlhod2IzSjBJSHNnWTNKbFlYUmxSbkpoYldVc0lHeHZaMmRsY2lCOU8xeHVJbDE5XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMgPSByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2RlY29yYXRvcnNJbmxpbmUgPSByZXF1aXJlKCcuL2RlY29yYXRvcnMvaW5saW5lJyk7XG5cbnZhciBfZGVjb3JhdG9yc0lubGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWNvcmF0b3JzSW5saW5lKTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICBfZGVjb3JhdG9yc0lubGluZTJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyUmxZMjl5WVhSdmNuTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdaME5CUVRKQ0xIRkNRVUZ4UWpzN096dEJRVVY2UXl4VFFVRlRMSGxDUVVGNVFpeERRVUZETEZGQlFWRXNSVUZCUlR0QlFVTnNSQ3huUTBGQlpTeFJRVUZSTEVOQlFVTXNRMEZCUXp0RFFVTXhRaUlzSW1acGJHVWlPaUprWldOdmNtRjBiM0p6TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElISmxaMmx6ZEdWeVNXNXNhVzVsSUdaeWIyMGdKeTR2WkdWamIzSmhkRzl5Y3k5cGJteHBibVVuTzF4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2NtVm5hWE4wWlhKRVpXWmhkV3gwUkdWamIzSmhkRzl5Y3locGJuTjBZVzVqWlNrZ2UxeHVJQ0J5WldkcGMzUmxja2x1YkdsdVpTaHBibk4wWVc1alpTazdYRzU5WEc0aVhYMD1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckRlY29yYXRvcignaW5saW5lJywgZnVuY3Rpb24gKGZuLCBwcm9wcywgY29udGFpbmVyLCBvcHRpb25zKSB7XG4gICAgdmFyIHJldCA9IGZuO1xuICAgIGlmICghcHJvcHMucGFydGlhbHMpIHtcbiAgICAgIHByb3BzLnBhcnRpYWxzID0ge307XG4gICAgICByZXQgPSBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cbiAgICAgICAgdmFyIG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBfdXRpbHMuZXh0ZW5kKHt9LCBvcmlnaW5hbCwgcHJvcHMucGFydGlhbHMpO1xuICAgICAgICB2YXIgcmV0ID0gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9yaWdpbmFsO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm9wcy5wYXJ0aWFsc1tvcHRpb25zLmFyZ3NbMF1dID0gb3B0aW9ucy5mbjtcblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMlJsWTI5eVlYUnZjbk12YVc1c2FXNWxMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN2NVSkJRWFZDTEZWQlFWVTdPM0ZDUVVWc1FpeFZRVUZUTEZGQlFWRXNSVUZCUlR0QlFVTm9ReXhWUVVGUkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1VVRkJVU3hGUVVGRkxGVkJRVk1zUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4VFFVRlRMRVZCUVVVc1QwRkJUeXhGUVVGRk8wRkJRek5GTEZGQlFVa3NSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOaUxGRkJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZPMEZCUTI1Q0xGZEJRVXNzUTBGQlF5eFJRVUZSTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTNCQ0xGTkJRVWNzUjBGQlJ5eFZRVUZUTEU5QlFVOHNSVUZCUlN4UFFVRlBMRVZCUVVVN08wRkJSUzlDTEZsQlFVa3NVVUZCVVN4SFFVRkhMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU03UVVGRGJFTXNhVUpCUVZNc1EwRkJReXhSUVVGUkxFZEJRVWNzWTBGQlR5eEZRVUZGTEVWQlFVVXNVVUZCVVN4RlFVRkZMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEJRVU14UkN4WlFVRkpMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMEZCUXk5Q0xHbENRVUZUTEVOQlFVTXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJRenRCUVVNNVFpeGxRVUZQTEVkQlFVY3NRMEZCUXp0UFFVTmFMRU5CUVVNN1MwRkRTRHM3UVVGRlJDeFRRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRE96dEJRVVUzUXl4WFFVRlBMRWRCUVVjc1EwRkJRenRIUVVOYUxFTkJRVU1zUTBGQlF6dERRVU5LSWl3aVptbHNaU0k2SW1sdWJHbHVaUzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHVjRkR1Z1WkNCOUlHWnliMjBnSnk0dUwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0b2FXNXpkR0Z1WTJVcElIdGNiaUFnYVc1emRHRnVZMlV1Y21WbmFYTjBaWEpFWldOdmNtRjBiM0lvSjJsdWJHbHVaU2NzSUdaMWJtTjBhVzl1S0dadUxDQndjbTl3Y3l3Z1kyOXVkR0ZwYm1WeUxDQnZjSFJwYjI1ektTQjdYRzRnSUNBZ2JHVjBJSEpsZENBOUlHWnVPMXh1SUNBZ0lHbG1JQ2doY0hKdmNITXVjR0Z5ZEdsaGJITXBJSHRjYmlBZ0lDQWdJSEJ5YjNCekxuQmhjblJwWVd4eklEMGdlMzA3WEc0Z0lDQWdJQ0J5WlhRZ1BTQm1kVzVqZEdsdmJpaGpiMjUwWlhoMExDQnZjSFJwYjI1ektTQjdYRzRnSUNBZ0lDQWdJQzh2SUVOeVpXRjBaU0JoSUc1bGR5QndZWEowYVdGc2N5QnpkR0ZqYXlCbWNtRnRaU0J3Y21sdmNpQjBieUJsZUdWakxseHVJQ0FnSUNBZ0lDQnNaWFFnYjNKcFoybHVZV3dnUFNCamIyNTBZV2x1WlhJdWNHRnlkR2xoYkhNN1hHNGdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNpNXdZWEowYVdGc2N5QTlJR1Y0ZEdWdVpDaDdmU3dnYjNKcFoybHVZV3dzSUhCeWIzQnpMbkJoY25ScFlXeHpLVHRjYmlBZ0lDQWdJQ0FnYkdWMElISmxkQ0E5SUdadUtHTnZiblJsZUhRc0lHOXdkR2x2Ym5NcE8xeHVJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVjR0Z5ZEdsaGJITWdQU0J2Y21sbmFXNWhiRHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsZER0Y2JpQWdJQ0FnSUgwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY0hKdmNITXVjR0Z5ZEdsaGJITmJiM0IwYVc5dWN5NWhjbWR6V3pCZFhTQTlJRzl3ZEdsdmJuTXVabTQ3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdjbVYwTzF4dUlDQjlLVHRjYm4xY2JpSmRmUT09XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgZXJyb3JQcm9wcyA9IFsnZGVzY3JpcHRpb24nLCAnZmlsZU5hbWUnLCAnbGluZU51bWJlcicsICdlbmRMaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcbiAgdmFyIGxvYyA9IG5vZGUgJiYgbm9kZS5sb2MsXG4gICAgICBsaW5lID0gdW5kZWZpbmVkLFxuICAgICAgZW5kTGluZU51bWJlciA9IHVuZGVmaW5lZCxcbiAgICAgIGNvbHVtbiA9IHVuZGVmaW5lZCxcbiAgICAgIGVuZENvbHVtbiA9IHVuZGVmaW5lZDtcblxuICBpZiAobG9jKSB7XG4gICAgbGluZSA9IGxvYy5zdGFydC5saW5lO1xuICAgIGVuZExpbmVOdW1iZXIgPSBsb2MuZW5kLmxpbmU7XG4gICAgY29sdW1uID0gbG9jLnN0YXJ0LmNvbHVtbjtcbiAgICBlbmRDb2x1bW4gPSBsb2MuZW5kLmNvbHVtbjtcblxuICAgIG1lc3NhZ2UgKz0gJyAtICcgKyBsaW5lICsgJzonICsgY29sdW1uO1xuICB9XG5cbiAgdmFyIHRtcCA9IEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuXG4gIC8vIFVuZm9ydHVuYXRlbHkgZXJyb3JzIGFyZSBub3QgZW51bWVyYWJsZSBpbiBDaHJvbWUgKGF0IGxlYXN0KSwgc28gYGZvciBwcm9wIGluIHRtcGAgZG9lc24ndCB3b3JrLlxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBlcnJvclByb3BzLmxlbmd0aDsgaWR4KyspIHtcbiAgICB0aGlzW2Vycm9yUHJvcHNbaWR4XV0gPSB0bXBbZXJyb3JQcm9wc1tpZHhdXTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEV4Y2VwdGlvbik7XG4gIH1cblxuICB0cnkge1xuICAgIGlmIChsb2MpIHtcbiAgICAgIHRoaXMubGluZU51bWJlciA9IGxpbmU7XG4gICAgICB0aGlzLmVuZExpbmVOdW1iZXIgPSBlbmRMaW5lTnVtYmVyO1xuXG4gICAgICAvLyBXb3JrIGFyb3VuZCBpc3N1ZSB1bmRlciBzYWZhcmkgd2hlcmUgd2UgY2FuJ3QgZGlyZWN0bHkgc2V0IHRoZSBjb2x1bW4gdmFsdWVcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnY29sdW1uJywge1xuICAgICAgICAgIHZhbHVlOiBjb2x1bW4sXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdlbmRDb2x1bW4nLCB7XG4gICAgICAgICAgdmFsdWU6IGVuZENvbHVtbixcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gICAgICAgIHRoaXMuZW5kQ29sdW1uID0gZW5kQ29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAobm9wKSB7XG4gICAgLyogSWdub3JlIGlmIHRoZSBicm93c2VyIGlzIHZlcnkgcGFydGljdWxhciAqL1xuICB9XG59XG5cbkV4Y2VwdGlvbi5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRXhjZXB0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyVjRZMlZ3ZEdsdmJpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeEpRVUZOTEZWQlFWVXNSMEZCUnl4RFFVTnFRaXhoUVVGaExFVkJRMklzVlVGQlZTeEZRVU5XTEZsQlFWa3NSVUZEV2l4bFFVRmxMRVZCUTJZc1UwRkJVeXhGUVVOVUxFMUJRVTBzUlVGRFRpeFJRVUZSTEVWQlExSXNUMEZCVHl4RFFVTlNMRU5CUVVNN08wRkJSVVlzVTBGQlV5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSVHRCUVVOb1F5eE5RVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWM3VFVGRGVFSXNTVUZCU1N4WlFVRkJPMDFCUTBvc1lVRkJZU3haUVVGQk8wMUJRMklzVFVGQlRTeFpRVUZCTzAxQlEwNHNVMEZCVXl4WlFVRkJMRU5CUVVNN08wRkJSVm9zVFVGQlNTeEhRVUZITEVWQlFVVTdRVUZEVUN4UlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTTdRVUZEZEVJc2FVSkJRV0VzUjBGQlJ5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJRenRCUVVNM1FpeFZRVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU03UVVGRE1VSXNZVUZCVXl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZET3p0QlFVVXpRaXhYUVVGUExFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NSMEZCUnl4SFFVRkhMRWRCUVVjc1RVRkJUU3hEUVVGRE8wZEJRM2hET3p0QlFVVkVMRTFCUVVrc1IwRkJSeXhIUVVGSExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdPenRCUVVjeFJDeFBRVUZMTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzVlVGQlZTeERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRCUVVOb1JDeFJRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8wZEJRemxET3pzN1FVRkhSQ3hOUVVGSkxFdEJRVXNzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSVHRCUVVNelFpeFRRVUZMTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRPMGRCUXpGRE96dEJRVVZFTEUxQlFVazdRVUZEUml4UlFVRkpMRWRCUVVjc1JVRkJSVHRCUVVOUUxGVkJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRPMEZCUTNaQ0xGVkJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NZVUZCWVN4RFFVRkRPenM3TzBGQlNXNURMRlZCUVVrc1RVRkJUU3hEUVVGRExHTkJRV01zUlVGQlJUdEJRVU42UWl4alFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVWQlFVVTdRVUZEY0VNc1pVRkJTeXhGUVVGRkxFMUJRVTA3UVVGRFlpeHZRa0ZCVlN4RlFVRkZMRWxCUVVrN1UwRkRha0lzUTBGQlF5eERRVUZETzBGQlEwZ3NZMEZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFVkJRVVVzVjBGQlZ5eEZRVUZGTzBGQlEzWkRMR1ZCUVVzc1JVRkJSU3hUUVVGVE8wRkJRMmhDTEc5Q1FVRlZMRVZCUVVVc1NVRkJTVHRUUVVOcVFpeERRVUZETEVOQlFVTTdUMEZEU2l4TlFVRk5PMEZCUTB3c1dVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTTdRVUZEY2tJc1dVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTTdUMEZETlVJN1MwRkRSanRIUVVOR0xFTkJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVTdPMGRCUldJN1EwRkRSanM3UVVGRlJDeFRRVUZUTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1MwRkJTeXhGUVVGRkxFTkJRVU03TzNGQ1FVVnVRaXhUUVVGVElpd2labWxzWlNJNkltVjRZMlZ3ZEdsdmJpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1OdmJuTjBJR1Z5Y205eVVISnZjSE1nUFNCYlhHNGdJQ2RrWlhOamNtbHdkR2x2Ymljc1hHNGdJQ2RtYVd4bFRtRnRaU2NzWEc0Z0lDZHNhVzVsVG5WdFltVnlKeXhjYmlBZ0oyVnVaRXhwYm1WT2RXMWlaWEluTEZ4dUlDQW5iV1Z6YzJGblpTY3NYRzRnSUNkdVlXMWxKeXhjYmlBZ0oyNTFiV0psY2ljc1hHNGdJQ2R6ZEdGamF5ZGNibDA3WEc1Y2JtWjFibU4wYVc5dUlFVjRZMlZ3ZEdsdmJpaHRaWE56WVdkbExDQnViMlJsS1NCN1hHNGdJR3hsZENCc2IyTWdQU0J1YjJSbElDWW1JRzV2WkdVdWJHOWpMRnh1SUNBZ0lHeHBibVVzWEc0Z0lDQWdaVzVrVEdsdVpVNTFiV0psY2l4Y2JpQWdJQ0JqYjJ4MWJXNHNYRzRnSUNBZ1pXNWtRMjlzZFcxdU8xeHVYRzRnSUdsbUlDaHNiMk1wSUh0Y2JpQWdJQ0JzYVc1bElEMGdiRzlqTG5OMFlYSjBMbXhwYm1VN1hHNGdJQ0FnWlc1a1RHbHVaVTUxYldKbGNpQTlJR3h2WXk1bGJtUXViR2x1WlR0Y2JpQWdJQ0JqYjJ4MWJXNGdQU0JzYjJNdWMzUmhjblF1WTI5c2RXMXVPMXh1SUNBZ0lHVnVaRU52YkhWdGJpQTlJR3h2WXk1bGJtUXVZMjlzZFcxdU8xeHVYRzRnSUNBZ2JXVnpjMkZuWlNBclBTQW5JQzBnSnlBcklHeHBibVVnS3lBbk9pY2dLeUJqYjJ4MWJXNDdYRzRnSUgxY2JseHVJQ0JzWlhRZ2RHMXdJRDBnUlhKeWIzSXVjSEp2ZEc5MGVYQmxMbU52Ym5OMGNuVmpkRzl5TG1OaGJHd29kR2hwY3l3Z2JXVnpjMkZuWlNrN1hHNWNiaUFnTHk4Z1ZXNW1iM0owZFc1aGRHVnNlU0JsY25KdmNuTWdZWEpsSUc1dmRDQmxiblZ0WlhKaFlteGxJR2x1SUVOb2NtOXRaU0FvWVhRZ2JHVmhjM1FwTENCemJ5QmdabTl5SUhCeWIzQWdhVzRnZEcxd1lDQmtiMlZ6YmlkMElIZHZjbXN1WEc0Z0lHWnZjaUFvYkdWMElHbGtlQ0E5SURBN0lHbGtlQ0E4SUdWeWNtOXlVSEp2Y0hNdWJHVnVaM1JvT3lCcFpIZ3JLeWtnZTF4dUlDQWdJSFJvYVhOYlpYSnliM0pRY205d2MxdHBaSGhkWFNBOUlIUnRjRnRsY25KdmNsQnliM0J6VzJsa2VGMWRPMXh1SUNCOVhHNWNiaUFnTHlvZ2FYTjBZVzVpZFd3Z2FXZHViM0psSUdWc2MyVWdLaTljYmlBZ2FXWWdLRVZ5Y205eUxtTmhjSFIxY21WVGRHRmphMVJ5WVdObEtTQjdYRzRnSUNBZ1JYSnliM0l1WTJGd2RIVnlaVk4wWVdOclZISmhZMlVvZEdocGN5d2dSWGhqWlhCMGFXOXVLVHRjYmlBZ2ZWeHVYRzRnSUhSeWVTQjdYRzRnSUNBZ2FXWWdLR3h2WXlrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVzYVc1bFRuVnRZbVZ5SUQwZ2JHbHVaVHRjYmlBZ0lDQWdJSFJvYVhNdVpXNWtUR2x1WlU1MWJXSmxjaUE5SUdWdVpFeHBibVZPZFcxaVpYSTdYRzVjYmlBZ0lDQWdJQzh2SUZkdmNtc2dZWEp2ZFc1a0lHbHpjM1ZsSUhWdVpHVnlJSE5oWm1GeWFTQjNhR1Z5WlNCM1pTQmpZVzRuZENCa2FYSmxZM1JzZVNCelpYUWdkR2hsSUdOdmJIVnRiaUIyWVd4MVpWeHVJQ0FnSUNBZ0x5b2dhWE4wWVc1aWRXd2dhV2R1YjNKbElHNWxlSFFnS2k5Y2JpQWdJQ0FnSUdsbUlDaFBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtwSUh0Y2JpQWdJQ0FnSUNBZ1QySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLSFJvYVhNc0lDZGpiMngxYlc0bkxDQjdYRzRnSUNBZ0lDQWdJQ0FnZG1Gc2RXVTZJR052YkhWdGJpeGNiaUFnSUNBZ0lDQWdJQ0JsYm5WdFpYSmhZbXhsT2lCMGNuVmxYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNCUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29kR2hwY3l3Z0oyVnVaRU52YkhWdGJpY3NJSHRjYmlBZ0lDQWdJQ0FnSUNCMllXeDFaVG9nWlc1a1EyOXNkVzF1TEZ4dUlDQWdJQ0FnSUNBZ0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdWY2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1OdmJIVnRiaUE5SUdOdmJIVnRianRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxibVJEYjJ4MWJXNGdQU0JsYm1SRGIyeDFiVzQ3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOUlHTmhkR05vSUNodWIzQXBJSHRjYmlBZ0lDQXZLaUJKWjI1dmNtVWdhV1lnZEdobElHSnliM2R6WlhJZ2FYTWdkbVZ5ZVNCd1lYSjBhV04xYkdGeUlDb3ZYRzRnSUgxY2JuMWNibHh1UlhoalpYQjBhVzl1TG5CeWIzUnZkSGx3WlNBOUlHNWxkeUJGY25KdmNpZ3BPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JGZUdObGNIUnBiMjQ3WEc0aVhYMD1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucmVnaXN0ZXJEZWZhdWx0SGVscGVycyA9IHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnM7XG5leHBvcnRzLm1vdmVIZWxwZXJUb0hvb2tzID0gbW92ZUhlbHBlclRvSG9va3M7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZyA9IHJlcXVpcmUoJy4vaGVscGVycy9ibG9jay1oZWxwZXItbWlzc2luZycpO1xuXG52YXIgX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZyk7XG5cbnZhciBfaGVscGVyc0VhY2ggPSByZXF1aXJlKCcuL2hlbHBlcnMvZWFjaCcpO1xuXG52YXIgX2hlbHBlcnNFYWNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNFYWNoKTtcblxudmFyIF9oZWxwZXJzSGVscGVyTWlzc2luZyA9IHJlcXVpcmUoJy4vaGVscGVycy9oZWxwZXItbWlzc2luZycpO1xuXG52YXIgX2hlbHBlcnNIZWxwZXJNaXNzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNIZWxwZXJNaXNzaW5nKTtcblxudmFyIF9oZWxwZXJzSWYgPSByZXF1aXJlKCcuL2hlbHBlcnMvaWYnKTtcblxudmFyIF9oZWxwZXJzSWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0lmKTtcblxudmFyIF9oZWxwZXJzTG9nID0gcmVxdWlyZSgnLi9oZWxwZXJzL2xvZycpO1xuXG52YXIgX2hlbHBlcnNMb2cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0xvZyk7XG5cbnZhciBfaGVscGVyc0xvb2t1cCA9IHJlcXVpcmUoJy4vaGVscGVycy9sb29rdXAnKTtcblxudmFyIF9oZWxwZXJzTG9va3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNMb29rdXApO1xuXG52YXIgX2hlbHBlcnNXaXRoID0gcmVxdWlyZSgnLi9oZWxwZXJzL3dpdGgnKTtcblxudmFyIF9oZWxwZXJzV2l0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzV2l0aCk7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMoaW5zdGFuY2UpIHtcbiAgX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuICBfaGVscGVyc0VhY2gyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuICBfaGVscGVyc0hlbHBlck1pc3NpbmcyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuICBfaGVscGVyc0lmMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbiAgX2hlbHBlcnNMb2cyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuICBfaGVscGVyc0xvb2t1cDJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG4gIF9oZWxwZXJzV2l0aDJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG59XG5cbmZ1bmN0aW9uIG1vdmVIZWxwZXJUb0hvb2tzKGluc3RhbmNlLCBoZWxwZXJOYW1lLCBrZWVwSGVscGVyKSB7XG4gIGlmIChpbnN0YW5jZS5oZWxwZXJzW2hlbHBlck5hbWVdKSB7XG4gICAgaW5zdGFuY2UuaG9va3NbaGVscGVyTmFtZV0gPSBpbnN0YW5jZS5oZWxwZXJzW2hlbHBlck5hbWVdO1xuICAgIGlmICgha2VlcEhlbHBlcikge1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmhlbHBlcnNbaGVscGVyTmFtZV07XG4gICAgfVxuICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN08zbERRVUYxUXl4blEwRkJaME03T3pzN01rSkJRemxETEdkQ1FVRm5RanM3T3p0dlEwRkRVQ3d3UWtGQk1FSTdPenM3ZVVKQlEzSkRMR05CUVdNN096czdNRUpCUTJJc1pVRkJaVHM3T3pzMlFrRkRXaXhyUWtGQmEwSTdPenM3TWtKQlEzQkNMR2RDUVVGblFqczdPenRCUVVWc1F5eFRRVUZUTEhOQ1FVRnpRaXhEUVVGRExGRkJRVkVzUlVGQlJUdEJRVU12UXl4NVEwRkJNa0lzVVVGQlVTeERRVUZETEVOQlFVTTdRVUZEY2tNc01rSkJRV0VzVVVGQlVTeERRVUZETEVOQlFVTTdRVUZEZGtJc2IwTkJRWE5DTEZGQlFWRXNRMEZCUXl4RFFVRkRPMEZCUTJoRExIbENRVUZYTEZGQlFWRXNRMEZCUXl4RFFVRkRPMEZCUTNKQ0xEQkNRVUZaTEZGQlFWRXNRMEZCUXl4RFFVRkRPMEZCUTNSQ0xEWkNRVUZsTEZGQlFWRXNRMEZCUXl4RFFVRkRPMEZCUTNwQ0xESkNRVUZoTEZGQlFWRXNRMEZCUXl4RFFVRkRPME5CUTNoQ096dEJRVVZOTEZOQlFWTXNhVUpCUVdsQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVN1FVRkRiRVVzVFVGQlNTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8wRkJRMmhETEZsQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRCUVVNeFJDeFJRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZPMEZCUTJZc1lVRkJUeXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMHRCUTNKRE8wZEJRMFk3UTBGRFJpSXNJbVpwYkdVaU9pSm9aV3h3WlhKekxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSEpsWjJsemRHVnlRbXh2WTJ0SVpXeHdaWEpOYVhOemFXNW5JR1p5YjIwZ0p5NHZhR1ZzY0dWeWN5OWliRzlqYXkxb1pXeHdaWEl0YldsemMybHVaeWM3WEc1cGJYQnZjblFnY21WbmFYTjBaWEpGWVdOb0lHWnliMjBnSnk0dmFHVnNjR1Z5Y3k5bFlXTm9KenRjYm1sdGNHOXlkQ0J5WldkcGMzUmxja2hsYkhCbGNrMXBjM05wYm1jZ1puSnZiU0FuTGk5b1pXeHdaWEp6TDJobGJIQmxjaTF0YVhOemFXNW5KenRjYm1sdGNHOXlkQ0J5WldkcGMzUmxja2xtSUdaeWIyMGdKeTR2YUdWc2NHVnljeTlwWmljN1hHNXBiWEJ2Y25RZ2NtVm5hWE4wWlhKTWIyY2dabkp2YlNBbkxpOW9aV3h3WlhKekwyeHZaeWM3WEc1cGJYQnZjblFnY21WbmFYTjBaWEpNYjI5cmRYQWdabkp2YlNBbkxpOW9aV3h3WlhKekwyeHZiMnQxY0NjN1hHNXBiWEJ2Y25RZ2NtVm5hWE4wWlhKWGFYUm9JR1p5YjIwZ0p5NHZhR1ZzY0dWeWN5OTNhWFJvSnp0Y2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlISmxaMmx6ZEdWeVJHVm1ZWFZzZEVobGJIQmxjbk1vYVc1emRHRnVZMlVwSUh0Y2JpQWdjbVZuYVhOMFpYSkNiRzlqYTBobGJIQmxjazFwYzNOcGJtY29hVzV6ZEdGdVkyVXBPMXh1SUNCeVpXZHBjM1JsY2tWaFkyZ29hVzV6ZEdGdVkyVXBPMXh1SUNCeVpXZHBjM1JsY2tobGJIQmxjazFwYzNOcGJtY29hVzV6ZEdGdVkyVXBPMXh1SUNCeVpXZHBjM1JsY2tsbUtHbHVjM1JoYm1ObEtUdGNiaUFnY21WbmFYTjBaWEpNYjJjb2FXNXpkR0Z1WTJVcE8xeHVJQ0J5WldkcGMzUmxja3h2YjJ0MWNDaHBibk4wWVc1alpTazdYRzRnSUhKbFoybHpkR1Z5VjJsMGFDaHBibk4wWVc1alpTazdYRzU5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCdGIzWmxTR1ZzY0dWeVZHOUliMjlyY3locGJuTjBZVzVqWlN3Z2FHVnNjR1Z5VG1GdFpTd2dhMlZsY0VobGJIQmxjaWtnZTF4dUlDQnBaaUFvYVc1emRHRnVZMlV1YUdWc2NHVnljMXRvWld4d1pYSk9ZVzFsWFNrZ2UxeHVJQ0FnSUdsdWMzUmhibU5sTG1odmIydHpXMmhsYkhCbGNrNWhiV1ZkSUQwZ2FXNXpkR0Z1WTJVdWFHVnNjR1Z5YzF0b1pXeHdaWEpPWVcxbFhUdGNiaUFnSUNCcFppQW9JV3RsWlhCSVpXeHdaWElwSUh0Y2JpQWdJQ0FnSUdSbGJHVjBaU0JwYm5OMFlXNWpaUzVvWld4d1pYSnpXMmhsYkhCbGNrNWhiV1ZkTzF4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1SWwxOVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgICBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAoY29udGV4dCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZuKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoY29udGV4dCA9PT0gZmFsc2UgfHwgY29udGV4dCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gaW52ZXJzZSh0aGlzKTtcbiAgICB9IGVsc2UgaWYgKF91dGlscy5pc0FycmF5KGNvbnRleHQpKSB7XG4gICAgICBpZiAoY29udGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmlkcykge1xuICAgICAgICAgIG9wdGlvbnMuaWRzID0gW29wdGlvbnMubmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2UuaGVscGVycy5lYWNoKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBfdXRpbHMuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IF91dGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMubmFtZSk7XG4gICAgICAgIG9wdGlvbnMgPSB7IGRhdGE6IGRhdGEgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdllteHZZMnN0YUdWc2NHVnlMVzFwYzNOcGJtY3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0eFFrRkJkMFFzVlVGQlZUczdjVUpCUlc1RUxGVkJRVk1zVVVGQlVTeEZRVUZGTzBGQlEyaERMRlZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zYjBKQlFXOUNMRVZCUVVVc1ZVRkJVeXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlEzWkZMRkZCUVVrc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eFBRVUZQTzFGQlF6TkNMRVZCUVVVc1IwRkJSeXhQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZET3p0QlFVVnNRaXhSUVVGSkxFOUJRVThzUzBGQlN5eEpRVUZKTEVWQlFVVTdRVUZEY0VJc1lVRkJUeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTMEZEYWtJc1RVRkJUU3hKUVVGSkxFOUJRVThzUzBGQlN5eExRVUZMTEVsQlFVa3NUMEZCVHl4SlFVRkpMRWxCUVVrc1JVRkJSVHRCUVVNdlF5eGhRVUZQTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRMUVVOMFFpeE5RVUZOTEVsQlFVa3NaVUZCVVN4UFFVRlBMRU5CUVVNc1JVRkJSVHRCUVVNelFpeFZRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRM1JDTEZsQlFVa3NUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSVHRCUVVObUxHbENRVUZQTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFOQlF6bENPenRCUVVWRUxHVkJRVThzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzA5QlEyaEVMRTFCUVUwN1FVRkRUQ3hsUVVGUExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UFFVTjBRanRMUVVOR0xFMUJRVTA3UVVGRFRDeFZRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRWxCUVVrc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU12UWl4WlFVRkpMRWxCUVVrc1IwRkJSeXh0UWtGQldTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRja01zV1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4NVFrRkRha0lzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUTNoQ0xFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlEySXNRMEZCUXp0QlFVTkdMR1ZCUVU4c1IwRkJSeXhGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXp0UFFVTXhRanM3UVVGRlJDeGhRVUZQTEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03UzBGRE4wSTdSMEZEUml4RFFVRkRMRU5CUVVNN1EwRkRTaUlzSW1acGJHVWlPaUppYkc5amF5MW9aV3h3WlhJdGJXbHpjMmx1Wnk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR0Z3Y0dWdVpFTnZiblJsZUhSUVlYUm9MQ0JqY21WaGRHVkdjbUZ0WlN3Z2FYTkJjbkpoZVNCOUlHWnliMjBnSnk0dUwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0b2FXNXpkR0Z1WTJVcElIdGNiaUFnYVc1emRHRnVZMlV1Y21WbmFYTjBaWEpJWld4d1pYSW9KMkpzYjJOclNHVnNjR1Z5VFdsemMybHVaeWNzSUdaMWJtTjBhVzl1S0dOdmJuUmxlSFFzSUc5d2RHbHZibk1wSUh0Y2JpQWdJQ0JzWlhRZ2FXNTJaWEp6WlNBOUlHOXdkR2x2Ym5NdWFXNTJaWEp6WlN4Y2JpQWdJQ0FnSUdadUlEMGdiM0IwYVc5dWN5NW1ianRjYmx4dUlDQWdJR2xtSUNoamIyNTBaWGgwSUQwOVBTQjBjblZsS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWm00b2RHaHBjeWs3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2hqYjI1MFpYaDBJRDA5UFNCbVlXeHpaU0I4ZkNCamIyNTBaWGgwSUQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJwYm5abGNuTmxLSFJvYVhNcE8xeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb2FYTkJjbkpoZVNoamIyNTBaWGgwS1NrZ2UxeHVJQ0FnSUNBZ2FXWWdLR052Ym5SbGVIUXViR1Z1WjNSb0lENGdNQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9iM0IwYVc5dWN5NXBaSE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQnZjSFJwYjI1ekxtbGtjeUE5SUZ0dmNIUnBiMjV6TG01aGJXVmRPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdsdWMzUmhibU5sTG1obGJIQmxjbk11WldGamFDaGpiMjUwWlhoMExDQnZjSFJwYjI1ektUdGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCcGJuWmxjbk5sS0hSb2FYTXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCcFppQW9iM0IwYVc5dWN5NWtZWFJoSUNZbUlHOXdkR2x2Ym5NdWFXUnpLU0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQmtZWFJoSUQwZ1kzSmxZWFJsUm5KaGJXVW9iM0IwYVc5dWN5NWtZWFJoS1R0Y2JpQWdJQ0FnSUNBZ1pHRjBZUzVqYjI1MFpYaDBVR0YwYUNBOUlHRndjR1Z1WkVOdmJuUmxlSFJRWVhSb0tGeHVJQ0FnSUNBZ0lDQWdJRzl3ZEdsdmJuTXVaR0YwWVM1amIyNTBaWGgwVUdGMGFDeGNiaUFnSUNBZ0lDQWdJQ0J2Y0hScGIyNXpMbTVoYldWY2JpQWdJQ0FnSUNBZ0tUdGNiaUFnSUNBZ0lDQWdiM0IwYVc5dWN5QTlJSHNnWkdGMFlUb2daR0YwWVNCOU8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnlaWFIxY200Z1ptNG9ZMjl1ZEdWNGRDd2diM0IwYVc5dWN5azdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIF9leGNlcHRpb24gPSByZXF1aXJlKCcuLi9leGNlcHRpb24nKTtcblxudmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdlYWNoJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdNdXN0IHBhc3MgaXRlcmF0b3IgdG8gI2VhY2gnKTtcbiAgICB9XG5cbiAgICB2YXIgZm4gPSBvcHRpb25zLmZuLFxuICAgICAgICBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcmV0ID0gJycsXG4gICAgICAgIGRhdGEgPSB1bmRlZmluZWQsXG4gICAgICAgIGNvbnRleHRQYXRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSkgKyAnLic7XG4gICAgfVxuXG4gICAgaWYgKF91dGlscy5pc0Z1bmN0aW9uKGNvbnRleHQpKSB7XG4gICAgICBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBfdXRpbHMuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleGVjSXRlcmF0aW9uKGZpZWxkLCBpbmRleCwgbGFzdCkge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZGF0YS5rZXkgPSBmaWVsZDtcbiAgICAgICAgZGF0YS5pbmRleCA9IGluZGV4O1xuICAgICAgICBkYXRhLmZpcnN0ID0gaW5kZXggPT09IDA7XG4gICAgICAgIGRhdGEubGFzdCA9ICEhbGFzdDtcblxuICAgICAgICBpZiAoY29udGV4dFBhdGgpIHtcbiAgICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gY29udGV4dFBhdGggKyBmaWVsZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXQgPSByZXQgKyBmbihjb250ZXh0W2ZpZWxkXSwge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtczogX3V0aWxzLmJsb2NrUGFyYW1zKFtjb250ZXh0W2ZpZWxkXSwgZmllbGRdLCBbY29udGV4dFBhdGggKyBmaWVsZCwgbnVsbF0pXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dCAmJiB0eXBlb2YgY29udGV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChfdXRpbHMuaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgICBmb3IgKHZhciBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGdsb2JhbC5TeW1ib2wgJiYgY29udGV4dFtnbG9iYWwuU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgICB2YXIgbmV3Q29udGV4dCA9IFtdO1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBjb250ZXh0W2dsb2JhbC5TeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIGZvciAodmFyIGl0ID0gaXRlcmF0b3IubmV4dCgpOyAhaXQuZG9uZTsgaXQgPSBpdGVyYXRvci5uZXh0KCkpIHtcbiAgICAgICAgICBuZXdDb250ZXh0LnB1c2goaXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQgPSBuZXdDb250ZXh0O1xuICAgICAgICBmb3IgKHZhciBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHByaW9yS2V5ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgT2JqZWN0LmtleXMoY29udGV4dCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3RcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcbiAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmlvcktleSA9IGtleTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZXhlY0l0ZXJhdGlvbihwcmlvcktleSwgaSAtIDEsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk12WldGamFDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08zRkNRVTFQTEZWQlFWVTdPM2xDUVVOTExHTkJRV003T3pzN2NVSkJSWEpDTEZWQlFWTXNVVUZCVVN4RlFVRkZPMEZCUTJoRExGVkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RlFVRkZMRlZCUVZNc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJUdEJRVU42UkN4UlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8wRkJRMW9zV1VGQlRTd3lRa0ZCWXl3MlFrRkJOa0lzUTBGQlF5eERRVUZETzB0QlEzQkVPenRCUVVWRUxGRkJRVWtzUlVGQlJTeEhRVUZITEU5QlFVOHNRMEZCUXl4RlFVRkZPMUZCUTJwQ0xFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUMEZCVHp0UlFVTjZRaXhEUVVGRExFZEJRVWNzUTBGQlF6dFJRVU5NTEVkQlFVY3NSMEZCUnl4RlFVRkZPMUZCUTFJc1NVRkJTU3haUVVGQk8xRkJRMG9zVjBGQlZ5eFpRVUZCTEVOQlFVTTdPMEZCUldRc1VVRkJTU3hQUVVGUExFTkJRVU1zU1VGQlNTeEpRVUZKTEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVN1FVRkRMMElzYVVKQlFWY3NSMEZEVkN4NVFrRkJhMElzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRMUVVOeVJUczdRVUZGUkN4UlFVRkpMR3RDUVVGWExFOUJRVThzUTBGQlF5eEZRVUZGTzBGQlEzWkNMR0ZCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUXpsQ096dEJRVVZFTEZGQlFVa3NUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSVHRCUVVOb1FpeFZRVUZKTEVkQlFVY3NiVUpCUVZrc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzB0QlEyeERPenRCUVVWRUxHRkJRVk1zWVVGQllTeERRVUZETEV0QlFVc3NSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hGUVVGRk8wRkJRM3BETEZWQlFVa3NTVUZCU1N4RlFVRkZPMEZCUTFJc1dVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTTdRVUZEYWtJc1dVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTTdRVUZEYmtJc1dVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEV0QlFVc3NRMEZCUXl4RFFVRkRPMEZCUTNwQ0xGbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenM3UVVGRmJrSXNXVUZCU1N4WFFVRlhMRVZCUVVVN1FVRkRaaXhqUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNN1UwRkRlRU03VDBGRFJqczdRVUZGUkN4VFFVRkhMRWRCUTBRc1IwRkJSeXhIUVVOSUxFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1FVRkRha0lzV1VGQlNTeEZRVUZGTEVsQlFVazdRVUZEVml4dFFrRkJWeXhGUVVGRkxHMUNRVU5ZTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eEZRVU4yUWl4RFFVRkRMRmRCUVZjc1IwRkJSeXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlF6VkNPMDlCUTBZc1EwRkJReXhEUVVGRE8wdEJRMDQ3TzBGQlJVUXNVVUZCU1N4UFFVRlBMRWxCUVVrc1QwRkJUeXhQUVVGUExFdEJRVXNzVVVGQlVTeEZRVUZGTzBGQlF6RkRMRlZCUVVrc1pVRkJVU3hQUVVGUExFTkJRVU1zUlVGQlJUdEJRVU53UWl4aFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU4yUXl4alFVRkpMRU5CUVVNc1NVRkJTU3hQUVVGUExFVkJRVVU3UVVGRGFFSXNlVUpCUVdFc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFkQlF5OURPMU5CUTBZN1QwRkRSaXhOUVVGTkxFbEJRVWtzVFVGQlRTeERRVUZETEUxQlFVMHNTVUZCU1N4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0QlFVTXpSQ3haUVVGTkxGVkJRVlVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEZEVJc1dVRkJUU3hSUVVGUkxFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF6dEJRVU51UkN4aFFVRkxMRWxCUVVrc1JVRkJSU3hIUVVGSExGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeEhRVUZITEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSVHRCUVVNM1JDeHZRa0ZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZETTBJN1FVRkRSQ3hsUVVGUExFZEJRVWNzVlVGQlZTeERRVUZETzBGQlEzSkNMR0ZCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEzWkRMSFZDUVVGaExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1QwRkJUeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTXZRenRQUVVOR0xFMUJRVTA3TzBGQlEwd3NZMEZCU1N4UlFVRlJMRmxCUVVFc1EwRkJRenM3UVVGRllpeG5Ra0ZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCUVN4SFFVRkhMRVZCUVVrN096czdRVUZKYkVNc1owSkJRVWtzVVVGQlVTeExRVUZMTEZOQlFWTXNSVUZCUlR0QlFVTXhRaXd5UWtGQllTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGFFTTdRVUZEUkN4dlFrRkJVU3hIUVVGSExFZEJRVWNzUTBGQlF6dEJRVU5tTEdGQlFVTXNSVUZCUlN4RFFVRkRPMWRCUTB3c1EwRkJReXhEUVVGRE8wRkJRMGdzWTBGQlNTeFJRVUZSTEV0QlFVc3NVMEZCVXl4RlFVRkZPMEZCUXpGQ0xIbENRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdWMEZEZEVNN08wOUJRMFk3UzBGRFJqczdRVUZGUkN4UlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3UVVGRFdDeFRRVUZITEVkQlFVY3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRM0pDT3p0QlFVVkVMRmRCUVU4c1IwRkJSeXhEUVVGRE8wZEJRMW9zUTBGQlF5eERRVUZETzBOQlEwb2lMQ0ptYVd4bElqb2laV0ZqYUM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdYRzRnSUdGd2NHVnVaRU52Ym5SbGVIUlFZWFJvTEZ4dUlDQmliRzlqYTFCaGNtRnRjeXhjYmlBZ1kzSmxZWFJsUm5KaGJXVXNYRzRnSUdselFYSnlZWGtzWEc0Z0lHbHpSblZ1WTNScGIyNWNibjBnWm5KdmJTQW5MaTR2ZFhScGJITW5PMXh1YVcxd2IzSjBJRVY0WTJWd2RHbHZiaUJtY205dElDY3VMaTlsZUdObGNIUnBiMjRuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlocGJuTjBZVzVqWlNrZ2UxeHVJQ0JwYm5OMFlXNWpaUzV5WldkcGMzUmxja2hsYkhCbGNpZ25aV0ZqYUNjc0lHWjFibU4wYVc5dUtHTnZiblJsZUhRc0lHOXdkR2x2Ym5NcElIdGNiaUFnSUNCcFppQW9JVzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJGZUdObGNIUnBiMjRvSjAxMWMzUWdjR0Z6Y3lCcGRHVnlZWFJ2Y2lCMGJ5QWpaV0ZqYUNjcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUd4bGRDQm1iaUE5SUc5d2RHbHZibk11Wm00c1hHNGdJQ0FnSUNCcGJuWmxjbk5sSUQwZ2IzQjBhVzl1Y3k1cGJuWmxjbk5sTEZ4dUlDQWdJQ0FnYVNBOUlEQXNYRzRnSUNBZ0lDQnlaWFFnUFNBbkp5eGNiaUFnSUNBZ0lHUmhkR0VzWEc0Z0lDQWdJQ0JqYjI1MFpYaDBVR0YwYUR0Y2JseHVJQ0FnSUdsbUlDaHZjSFJwYjI1ekxtUmhkR0VnSmlZZ2IzQjBhVzl1Y3k1cFpITXBJSHRjYmlBZ0lDQWdJR052Ym5SbGVIUlFZWFJvSUQxY2JpQWdJQ0FnSUNBZ1lYQndaVzVrUTI5dWRHVjRkRkJoZEdnb2IzQjBhVzl1Y3k1a1lYUmhMbU52Ym5SbGVIUlFZWFJvTENCdmNIUnBiMjV6TG1sa2Mxc3dYU2tnS3lBbkxpYzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLR2x6Um5WdVkzUnBiMjRvWTI5dWRHVjRkQ2twSUh0Y2JpQWdJQ0FnSUdOdmJuUmxlSFFnUFNCamIyNTBaWGgwTG1OaGJHd29kR2hwY3lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tHOXdkR2x2Ym5NdVpHRjBZU2tnZTF4dUlDQWdJQ0FnWkdGMFlTQTlJR055WldGMFpVWnlZVzFsS0c5d2RHbHZibk11WkdGMFlTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1puVnVZM1JwYjI0Z1pYaGxZMGwwWlhKaGRHbHZiaWhtYVdWc1pDd2dhVzVrWlhnc0lHeGhjM1FwSUh0Y2JpQWdJQ0FnSUdsbUlDaGtZWFJoS1NCN1hHNGdJQ0FnSUNBZ0lHUmhkR0V1YTJWNUlEMGdabWxsYkdRN1hHNGdJQ0FnSUNBZ0lHUmhkR0V1YVc1a1pYZ2dQU0JwYm1SbGVEdGNiaUFnSUNBZ0lDQWdaR0YwWVM1bWFYSnpkQ0E5SUdsdVpHVjRJRDA5UFNBd08xeHVJQ0FnSUNBZ0lDQmtZWFJoTG14aGMzUWdQU0FoSVd4aGMzUTdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHTnZiblJsZUhSUVlYUm9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ1pHRjBZUzVqYjI1MFpYaDBVR0YwYUNBOUlHTnZiblJsZUhSUVlYUm9JQ3NnWm1sbGJHUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnY21WMElEMWNiaUFnSUNBZ0lDQWdjbVYwSUN0Y2JpQWdJQ0FnSUNBZ1ptNG9ZMjl1ZEdWNGRGdG1hV1ZzWkYwc0lIdGNiaUFnSUNBZ0lDQWdJQ0JrWVhSaE9pQmtZWFJoTEZ4dUlDQWdJQ0FnSUNBZ0lHSnNiMk5yVUdGeVlXMXpPaUJpYkc5amExQmhjbUZ0Y3loY2JpQWdJQ0FnSUNBZ0lDQWdJRnRqYjI1MFpYaDBXMlpwWld4a1hTd2dabWxsYkdSZExGeHVJQ0FnSUNBZ0lDQWdJQ0FnVzJOdmJuUmxlSFJRWVhSb0lDc2dabWxsYkdRc0lHNTFiR3hkWEc0Z0lDQWdJQ0FnSUNBZ0tWeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvWTI5dWRHVjRkQ0FtSmlCMGVYQmxiMllnWTI5dWRHVjRkQ0E5UFQwZ0oyOWlhbVZqZENjcElIdGNiaUFnSUNBZ0lHbG1JQ2hwYzBGeWNtRjVLR052Ym5SbGVIUXBLU0I3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdvZ1BTQmpiMjUwWlhoMExteGxibWQwYURzZ2FTQThJR283SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUdsbUlDaHBJR2x1SUdOdmJuUmxlSFFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1Y0WldOSmRHVnlZWFJwYjI0b2FTd2dhU3dnYVNBOVBUMGdZMjl1ZEdWNGRDNXNaVzVuZEdnZ0xTQXhLVHRjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMGdaV3h6WlNCcFppQW9aMnh2WW1Gc0xsTjViV0p2YkNBbUppQmpiMjUwWlhoMFcyZHNiMkpoYkM1VGVXMWliMnd1YVhSbGNtRjBiM0pkS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUc1bGQwTnZiblJsZUhRZ1BTQmJYVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdhWFJsY21GMGIzSWdQU0JqYjI1MFpYaDBXMmRzYjJKaGJDNVRlVzFpYjJ3dWFYUmxjbUYwYjNKZEtDazdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2wwSUQwZ2FYUmxjbUYwYjNJdWJtVjRkQ2dwT3lBaGFYUXVaRzl1WlRzZ2FYUWdQU0JwZEdWeVlYUnZjaTV1WlhoMEtDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNCdVpYZERiMjUwWlhoMExuQjFjMmdvYVhRdWRtRnNkV1VwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHTnZiblJsZUhRZ1BTQnVaWGREYjI1MFpYaDBPMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JxSUQwZ1kyOXVkR1Y0ZEM1c1pXNW5kR2c3SUdrZ1BDQnFPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0JsZUdWalNYUmxjbUYwYVc5dUtHa3NJR2tzSUdrZ1BUMDlJR052Ym5SbGVIUXViR1Z1WjNSb0lDMGdNU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQndjbWx2Y2t0bGVUdGNibHh1SUNBZ0lDQWdJQ0JQWW1wbFkzUXVhMlY1Y3loamIyNTBaWGgwS1M1bWIzSkZZV05vS0d0bGVTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0x5OGdWMlVuY21VZ2NuVnVibWx1WnlCMGFHVWdhWFJsY21GMGFXOXVjeUJ2Ym1VZ2MzUmxjQ0J2ZFhRZ2IyWWdjM2x1WXlCemJ5QjNaU0JqWVc0Z1pHVjBaV04wWEc0Z0lDQWdJQ0FnSUNBZ0x5OGdkR2hsSUd4aGMzUWdhWFJsY21GMGFXOXVJSGRwZEdodmRYUWdhR0YyWlNCMGJ5QnpZMkZ1SUhSb1pTQnZZbXBsWTNRZ2RIZHBZMlVnWVc1a0lHTnlaV0YwWlZ4dUlDQWdJQ0FnSUNBZ0lDOHZJR0Z1SUdsMFpYSnRaV1JwWVhSbElHdGxlWE1nWVhKeVlYa3VYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnlhVzl5UzJWNUlDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1Y0WldOSmRHVnlZWFJwYjI0b2NISnBiM0pMWlhrc0lHa2dMU0F4S1R0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnY0hKcGIzSkxaWGtnUFNCclpYazdYRzRnSUNBZ0lDQWdJQ0FnYVNzck8xeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIQnlhVzl5UzJWNUlDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmxlR1ZqU1hSbGNtRjBhVzl1S0hCeWFXOXlTMlY1TENCcElDMGdNU3dnZEhKMVpTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYVNBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnY21WMElEMGdhVzUyWlhKelpTaDBhR2x6S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdjbVYwTzF4dUlDQjlLVHRjYm4xY2JpSmRmUT09XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfZXhjZXB0aW9uID0gcmVxdWlyZSgnLi4vZXhjZXB0aW9uJyk7XG5cbnZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaGVscGVyTWlzc2luZycsIGZ1bmN0aW9uICgpIC8qIFthcmdzLCBdb3B0aW9ucyAqL3tcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdNaXNzaW5nIGhlbHBlcjogXCInICsgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXS5uYW1lICsgJ1wiJyk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk12YUdWc2NHVnlMVzFwYzNOcGJtY3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096dDVRa0ZCYzBJc1kwRkJZenM3T3p0eFFrRkZja0lzVlVGQlV5eFJRVUZSTEVWQlFVVTdRVUZEYUVNc1ZVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eGxRVUZsTEVWQlFVVXNhVU5CUVdkRE8wRkJRM1pGTEZGQlFVa3NVMEZCVXl4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVU3TzBGQlJURkNMR0ZCUVU4c1UwRkJVeXhEUVVGRE8wdEJRMnhDTEUxQlFVMDdPMEZCUlV3c1dVRkJUU3d5UWtGRFNpeHRRa0ZCYlVJc1IwRkJSeXhUUVVGVExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVU5xUlN4RFFVRkRPMHRCUTBnN1IwRkRSaXhEUVVGRExFTkJRVU03UTBGRFNpSXNJbVpwYkdVaU9pSm9aV3h3WlhJdGJXbHpjMmx1Wnk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkZlR05sY0hScGIyNGdabkp2YlNBbkxpNHZaWGhqWlhCMGFXOXVKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRvYVc1emRHRnVZMlVwSUh0Y2JpQWdhVzV6ZEdGdVkyVXVjbVZuYVhOMFpYSklaV3h3WlhJb0oyaGxiSEJsY2sxcGMzTnBibWNuTENCbWRXNWpkR2x2YmlndktpQmJZWEpuY3l3Z1hXOXdkR2x2Ym5NZ0tpOHBJSHRjYmlBZ0lDQnBaaUFvWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0E5UFQwZ01Ta2dlMXh1SUNBZ0lDQWdMeThnUVNCdGFYTnphVzVuSUdacFpXeGtJR2x1SUdFZ2UzdG1iMjk5ZlNCamIyNXpkSEoxWTNRdVhHNGdJQ0FnSUNCeVpYUjFjbTRnZFc1a1pXWnBibVZrTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQXZMeUJUYjIxbGIyNWxJR2x6SUdGamRIVmhiR3g1SUhSeWVXbHVaeUIwYnlCallXeHNJSE52YldWMGFHbHVaeXdnWW14dmR5QjFjQzVjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJGZUdObGNIUnBiMjRvWEc0Z0lDQWdJQ0FnSUNkTmFYTnphVzVuSUdobGJIQmxjam9nWENJbklDc2dZWEpuZFcxbGJuUnpXMkZ5WjNWdFpXNTBjeTVzWlc1bmRHZ2dMU0F4WFM1dVlXMWxJQ3NnSjF3aUoxeHVJQ0FnSUNBZ0tUdGNiaUFnSUNCOVhHNGdJSDBwTzF4dWZWeHVJbDE5XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG52YXIgX2V4Y2VwdGlvbiA9IHJlcXVpcmUoJy4uL2V4Y2VwdGlvbicpO1xuXG52YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2lmJywgZnVuY3Rpb24gKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT0gMikge1xuICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJyNpZiByZXF1aXJlcyBleGFjdGx5IG9uZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoX3V0aWxzLmlzRnVuY3Rpb24oY29uZGl0aW9uYWwpKSB7XG4gICAgICBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBiZWhhdmlvciBpcyB0byByZW5kZXIgdGhlIHBvc2l0aXZlIHBhdGggaWYgdGhlIHZhbHVlIGlzIHRydXRoeSBhbmQgbm90IGVtcHR5LlxuICAgIC8vIFRoZSBgaW5jbHVkZVplcm9gIG9wdGlvbiBtYXkgYmUgc2V0IHRvIHRyZWF0IHRoZSBjb25kdGlvbmFsIGFzIHB1cmVseSBub3QgZW1wdHkgYmFzZWQgb24gdGhlXG4gICAgLy8gYmVoYXZpb3Igb2YgaXNFbXB0eS4gRWZmZWN0aXZlbHkgdGhpcyBkZXRlcm1pbmVzIGlmIDAgaXMgaGFuZGxlZCBieSB0aGUgcG9zaXRpdmUgcGF0aCBvciBuZWdhdGl2ZS5cbiAgICBpZiAoIW9wdGlvbnMuaGFzaC5pbmNsdWRlWmVybyAmJiAhY29uZGl0aW9uYWwgfHwgX3V0aWxzLmlzRW1wdHkoY29uZGl0aW9uYWwpKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5mbih0aGlzKTtcbiAgICB9XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd1bmxlc3MnLCBmdW5jdGlvbiAoY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAyKSB7XG4gICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnI3VubGVzcyByZXF1aXJlcyBleGFjdGx5IG9uZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICByZXR1cm4gaW5zdGFuY2UuaGVscGVyc1snaWYnXS5jYWxsKHRoaXMsIGNvbmRpdGlvbmFsLCB7XG4gICAgICBmbjogb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgaW52ZXJzZTogb3B0aW9ucy5mbixcbiAgICAgIGhhc2g6IG9wdGlvbnMuaGFzaFxuICAgIH0pO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk12YVdZdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0eFFrRkJiME1zVlVGQlZUczdlVUpCUTNoQ0xHTkJRV003T3pzN2NVSkJSWEpDTEZWQlFWTXNVVUZCVVN4RlFVRkZPMEZCUTJoRExGVkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RlFVRkZMRlZCUVZNc1YwRkJWeXhGUVVGRkxFOUJRVThzUlVGQlJUdEJRVU16UkN4UlFVRkpMRk5CUVZNc1EwRkJReXhOUVVGTkxFbEJRVWtzUTBGQlF5eEZRVUZGTzBGQlEzcENMRmxCUVUwc01rSkJRV01zYlVOQlFXMURMRU5CUVVNc1EwRkJRenRMUVVNeFJEdEJRVU5FTEZGQlFVa3NhMEpCUVZjc1YwRkJWeXhEUVVGRExFVkJRVVU3UVVGRE0wSXNhVUpCUVZjc1IwRkJSeXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUTNSRE96czdPenRCUVV0RUxGRkJRVWtzUVVGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEpRVUZMTEdWQlFWRXNWMEZCVnl4RFFVRkRMRVZCUVVVN1FVRkRka1VzWVVGQlR5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRemxDTEUxQlFVMDdRVUZEVEN4aFFVRlBMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTMEZEZWtJN1IwRkRSaXhEUVVGRExFTkJRVU03TzBGQlJVZ3NWVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhSUVVGUkxFVkJRVVVzVlVGQlV5eFhRVUZYTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUXk5RUxGRkJRVWtzVTBGQlV5eERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRMRVZCUVVVN1FVRkRla0lzV1VGQlRTd3lRa0ZCWXl4MVEwRkJkVU1zUTBGQlF5eERRVUZETzB0QlF6bEVPMEZCUTBRc1YwRkJUeXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzVjBGQlZ5eEZRVUZGTzBGQlEzQkVMRkZCUVVVc1JVRkJSU3hQUVVGUExFTkJRVU1zVDBGQlR6dEJRVU51UWl4aFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRExFVkJRVVU3UVVGRGJrSXNWVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJReXhKUVVGSk8wdEJRMjVDTEVOQlFVTXNRMEZCUXp0SFFVTktMRU5CUVVNc1EwRkJRenREUVVOS0lpd2labWxzWlNJNkltbG1MbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2FYTkZiWEIwZVN3Z2FYTkdkVzVqZEdsdmJpQjlJR1p5YjIwZ0p5NHVMM1YwYVd4ekp6dGNibWx0Y0c5eWRDQkZlR05sY0hScGIyNGdabkp2YlNBbkxpNHZaWGhqWlhCMGFXOXVKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRvYVc1emRHRnVZMlVwSUh0Y2JpQWdhVzV6ZEdGdVkyVXVjbVZuYVhOMFpYSklaV3h3WlhJb0oybG1KeXdnWm5WdVkzUnBiMjRvWTI5dVpHbDBhVzl1WVd3c0lHOXdkR2x2Ym5NcElIdGNiaUFnSUNCcFppQW9ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQWhQU0F5S1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYaGpaWEIwYVc5dUtDY2phV1lnY21WeGRXbHlaWE1nWlhoaFkzUnNlU0J2Ym1VZ1lYSm5kVzFsYm5RbktUdGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tHbHpSblZ1WTNScGIyNG9ZMjl1WkdsMGFXOXVZV3dwS1NCN1hHNGdJQ0FnSUNCamIyNWthWFJwYjI1aGJDQTlJR052Ym1ScGRHbHZibUZzTG1OaGJHd29kR2hwY3lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1JHVm1ZWFZzZENCaVpXaGhkbWx2Y2lCcGN5QjBieUJ5Wlc1a1pYSWdkR2hsSUhCdmMybDBhWFpsSUhCaGRHZ2dhV1lnZEdobElIWmhiSFZsSUdseklIUnlkWFJvZVNCaGJtUWdibTkwSUdWdGNIUjVMbHh1SUNBZ0lDOHZJRlJvWlNCZ2FXNWpiSFZrWlZwbGNtOWdJRzl3ZEdsdmJpQnRZWGtnWW1VZ2MyVjBJSFJ2SUhSeVpXRjBJSFJvWlNCamIyNWtkR2x2Ym1Gc0lHRnpJSEIxY21Wc2VTQnViM1FnWlcxd2RIa2dZbUZ6WldRZ2IyNGdkR2hsWEc0Z0lDQWdMeThnWW1Wb1lYWnBiM0lnYjJZZ2FYTkZiWEIwZVM0Z1JXWm1aV04wYVhabGJIa2dkR2hwY3lCa1pYUmxjbTFwYm1WeklHbG1JREFnYVhNZ2FHRnVaR3hsWkNCaWVTQjBhR1VnY0c5emFYUnBkbVVnY0dGMGFDQnZjaUJ1WldkaGRHbDJaUzVjYmlBZ0lDQnBaaUFvS0NGdmNIUnBiMjV6TG1oaGMyZ3VhVzVqYkhWa1pWcGxjbThnSmlZZ0lXTnZibVJwZEdsdmJtRnNLU0I4ZkNCcGMwVnRjSFI1S0dOdmJtUnBkR2x2Ym1Gc0tTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHOXdkR2x2Ym5NdWFXNTJaWEp6WlNoMGFHbHpLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUc5d2RHbHZibk11Wm00b2RHaHBjeWs3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibHh1SUNCcGJuTjBZVzVqWlM1eVpXZHBjM1JsY2tobGJIQmxjaWduZFc1c1pYTnpKeXdnWm5WdVkzUnBiMjRvWTI5dVpHbDBhVzl1WVd3c0lHOXdkR2x2Ym5NcElIdGNiaUFnSUNCcFppQW9ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQWhQU0F5S1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYaGpaWEIwYVc5dUtDY2pkVzVzWlhOeklISmxjWFZwY21WeklHVjRZV04wYkhrZ2IyNWxJR0Z5WjNWdFpXNTBKeWs3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCcGJuTjBZVzVqWlM1b1pXeHdaWEp6V3lkcFppZGRMbU5oYkd3b2RHaHBjeXdnWTI5dVpHbDBhVzl1WVd3c0lIdGNiaUFnSUNBZ0lHWnVPaUJ2Y0hScGIyNXpMbWx1ZG1WeWMyVXNYRzRnSUNBZ0lDQnBiblpsY25ObE9pQnZjSFJwYjI1ekxtWnVMRnh1SUNBZ0lDQWdhR0Z6YURvZ2IzQjBhVzl1Y3k1b1lYTm9YRzRnSUNBZ2ZTazdYRzRnSUgwcE8xeHVmVnh1SWwxOVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uICgpIC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi97XG4gICAgdmFyIGFyZ3MgPSBbdW5kZWZpbmVkXSxcbiAgICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICB2YXIgbGV2ZWwgPSAxO1xuICAgIGlmIChvcHRpb25zLmhhc2gubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmhhc2gubGV2ZWw7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhLmxldmVsICE9IG51bGwpIHtcbiAgICAgIGxldmVsID0gb3B0aW9ucy5kYXRhLmxldmVsO1xuICAgIH1cbiAgICBhcmdzWzBdID0gbGV2ZWw7XG5cbiAgICBpbnN0YW5jZS5sb2cuYXBwbHkoaW5zdGFuY2UsIGFyZ3MpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk12Ykc5bkxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3Y1VKQlFXVXNWVUZCVXl4UlFVRlJMRVZCUVVVN1FVRkRhRU1zVlVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4TFFVRkxMRVZCUVVVc2EwTkJRV2xETzBGQlF6bEVMRkZCUVVrc1NVRkJTU3hIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETzFGQlEzQkNMRTlCUVU4c1IwRkJSeXhUUVVGVExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVNMVF5eFRRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3UVVGRE4wTXNWVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTjZRanM3UVVGRlJDeFJRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRaQ3hSUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRWxCUVVrc1JVRkJSVHRCUVVNNVFpeFhRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03UzBGRE5VSXNUVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFbEJRVWtzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVrc1NVRkJTU3hGUVVGRk8wRkJRM0pFTEZkQlFVc3NSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dExRVU0xUWp0QlFVTkVMRkZCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdPMEZCUldoQ0xGbEJRVkVzUTBGQlF5eEhRVUZITEUxQlFVRXNRMEZCV2l4UlFVRlJMRVZCUVZFc1NVRkJTU3hEUVVGRExFTkJRVU03UjBGRGRrSXNRMEZCUXl4RFFVRkRPME5CUTBvaUxDSm1hV3hsSWpvaWJHOW5MbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRvYVc1emRHRnVZMlVwSUh0Y2JpQWdhVzV6ZEdGdVkyVXVjbVZuYVhOMFpYSklaV3h3WlhJb0oyeHZaeWNzSUdaMWJtTjBhVzl1S0M4cUlHMWxjM05oWjJVc0lHOXdkR2x2Ym5NZ0tpOHBJSHRjYmlBZ0lDQnNaWFFnWVhKbmN5QTlJRnQxYm1SbFptbHVaV1JkTEZ4dUlDQWdJQ0FnYjNCMGFXOXVjeUE5SUdGeVozVnRaVzUwYzF0aGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUMwZ01WMDdYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQmhjbWQxYldWdWRITXViR1Z1WjNSb0lDMGdNVHNnYVNzcktTQjdYRzRnSUNBZ0lDQmhjbWR6TG5CMWMyZ29ZWEpuZFcxbGJuUnpXMmxkS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JzWlhRZ2JHVjJaV3dnUFNBeE8xeHVJQ0FnSUdsbUlDaHZjSFJwYjI1ekxtaGhjMmd1YkdWMlpXd2dJVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdiR1YyWld3Z1BTQnZjSFJwYjI1ekxtaGhjMmd1YkdWMlpXdzdYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaHZjSFJwYjI1ekxtUmhkR0VnSmlZZ2IzQjBhVzl1Y3k1a1lYUmhMbXhsZG1Wc0lDRTlJRzUxYkd3cElIdGNiaUFnSUNBZ0lHeGxkbVZzSUQwZ2IzQjBhVzl1Y3k1a1lYUmhMbXhsZG1Wc08xeHVJQ0FnSUgxY2JpQWdJQ0JoY21keld6QmRJRDBnYkdWMlpXdzdYRzVjYmlBZ0lDQnBibk4wWVc1alpTNXNiMmNvTGk0dVlYSm5jeWs3WEc0Z0lIMHBPMXh1ZlZ4dUlsMTlcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb29rdXAnLCBmdW5jdGlvbiAob2JqLCBmaWVsZCwgb3B0aW9ucykge1xuICAgIGlmICghb2JqKSB7XG4gICAgICAvLyBOb3RlIGZvciA1LjA6IENoYW5nZSB0byBcIm9iaiA9PSBudWxsXCIgaW4gNS4wXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucy5sb29rdXBQcm9wZXJ0eShvYmosIGZpZWxkKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdmJHOXZhM1Z3TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdjVUpCUVdVc1ZVRkJVeXhSUVVGUkxFVkJRVVU3UVVGRGFFTXNWVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhSUVVGUkxFVkJRVVVzVlVGQlV5eEhRVUZITEVWQlFVVXNTMEZCU3l4RlFVRkZMRTlCUVU4c1JVRkJSVHRCUVVNNVJDeFJRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZPenRCUVVWU0xHRkJRVThzUjBGQlJ5eERRVUZETzB0QlExbzdRVUZEUkN4WFFVRlBMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGRCUXpORExFTkJRVU1zUTBGQlF6dERRVU5LSWl3aVptbHNaU0k2SW14dmIydDFjQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1S0dsdWMzUmhibU5sS1NCN1hHNGdJR2x1YzNSaGJtTmxMbkpsWjJsemRHVnlTR1ZzY0dWeUtDZHNiMjlyZFhBbkxDQm1kVzVqZEdsdmJpaHZZbW9zSUdacFpXeGtMQ0J2Y0hScGIyNXpLU0I3WEc0Z0lDQWdhV1lnS0NGdlltb3BJSHRjYmlBZ0lDQWdJQzh2SUU1dmRHVWdabTl5SURVdU1Eb2dRMmhoYm1kbElIUnZJRndpYjJKcUlEMDlJRzUxYkd4Y0lpQnBiaUExTGpCY2JpQWdJQ0FnSUhKbGRIVnliaUJ2WW1vN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQnZjSFJwYjI1ekxteHZiMnQxY0ZCeWIzQmxjblI1S0c5aWFpd2dabWxsYkdRcE8xeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIF9leGNlcHRpb24gPSByZXF1aXJlKCcuLi9leGNlcHRpb24nKTtcblxudmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd3aXRoJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAyKSB7XG4gICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnI3dpdGggcmVxdWlyZXMgZXhhY3RseSBvbmUgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKF91dGlscy5pc0Z1bmN0aW9uKGNvbnRleHQpKSB7XG4gICAgICBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIHZhciBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAoIV91dGlscy5pc0VtcHR5KGNvbnRleHQpKSB7XG4gICAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgICAgZGF0YSA9IF91dGlscy5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gX3V0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm4oY29udGV4dCwge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtczogX3V0aWxzLmJsb2NrUGFyYW1zKFtjb250ZXh0XSwgW2RhdGEgJiYgZGF0YS5jb250ZXh0UGF0aF0pXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmhsYkhCbGNuTXZkMmwwYUM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3TzNGQ1FVMVBMRlZCUVZVN08zbENRVU5MTEdOQlFXTTdPenM3Y1VKQlJYSkNMRlZCUVZNc1VVRkJVU3hGUVVGRk8wRkJRMmhETEZWQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hGUVVGRkxGVkJRVk1zVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlR0QlFVTjZSQ3hSUVVGSkxGTkJRVk1zUTBGQlF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RlFVRkZPMEZCUTNwQ0xGbEJRVTBzTWtKQlFXTXNjVU5CUVhGRExFTkJRVU1zUTBGQlF6dExRVU0xUkR0QlFVTkVMRkZCUVVrc2EwSkJRVmNzVDBGQlR5eERRVUZETEVWQlFVVTdRVUZEZGtJc1lVRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkRPVUk3TzBGQlJVUXNVVUZCU1N4RlFVRkZMRWRCUVVjc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF6czdRVUZGY0VJc1VVRkJTU3hEUVVGRExHVkJRVkVzVDBGQlR5eERRVUZETEVWQlFVVTdRVUZEY2tJc1ZVRkJTU3hKUVVGSkxFZEJRVWNzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXp0QlFVTjRRaXhWUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVsQlFVa3NUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSVHRCUVVNdlFpeFpRVUZKTEVkQlFVY3NiVUpCUVZrc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBGQlEycERMRmxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzZVVKQlEycENMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVU40UWl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVU5tTEVOQlFVTTdUMEZEU0RzN1FVRkZSQ3hoUVVGUExFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVTdRVUZEYWtJc1dVRkJTU3hGUVVGRkxFbEJRVWs3UVVGRFZpeHRRa0ZCVnl4RlFVRkZMRzFDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzA5QlEyaEZMRU5CUVVNc1EwRkJRenRMUVVOS0xFMUJRVTA3UVVGRFRDeGhRVUZQTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRE9VSTdSMEZEUml4RFFVRkRMRU5CUVVNN1EwRkRTaUlzSW1acGJHVWlPaUozYVhSb0xtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHRjYmlBZ1lYQndaVzVrUTI5dWRHVjRkRkJoZEdnc1hHNGdJR0pzYjJOclVHRnlZVzF6TEZ4dUlDQmpjbVZoZEdWR2NtRnRaU3hjYmlBZ2FYTkZiWEIwZVN4Y2JpQWdhWE5HZFc1amRHbHZibHh1ZlNCbWNtOXRJQ2N1TGk5MWRHbHNjeWM3WEc1cGJYQnZjblFnUlhoalpYQjBhVzl1SUdaeWIyMGdKeTR1TDJWNFkyVndkR2x2YmljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUtHbHVjM1JoYm1ObEtTQjdYRzRnSUdsdWMzUmhibU5sTG5KbFoybHpkR1Z5U0dWc2NHVnlLQ2QzYVhSb0p5d2dablZ1WTNScGIyNG9ZMjl1ZEdWNGRDd2diM0IwYVc5dWN5a2dlMXh1SUNBZ0lHbG1JQ2hoY21kMWJXVnVkSE11YkdWdVozUm9JQ0U5SURJcElIdGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZlR05sY0hScGIyNG9KeU4zYVhSb0lISmxjWFZwY21WeklHVjRZV04wYkhrZ2IyNWxJR0Z5WjNWdFpXNTBKeWs3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2hwYzBaMWJtTjBhVzl1S0dOdmJuUmxlSFFwS1NCN1hHNGdJQ0FnSUNCamIyNTBaWGgwSUQwZ1kyOXVkR1Y0ZEM1allXeHNLSFJvYVhNcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUd4bGRDQm1iaUE5SUc5d2RHbHZibk11Wm00N1hHNWNiaUFnSUNCcFppQW9JV2x6Ulcxd2RIa29ZMjl1ZEdWNGRDa3BJSHRjYmlBZ0lDQWdJR3hsZENCa1lYUmhJRDBnYjNCMGFXOXVjeTVrWVhSaE8xeHVJQ0FnSUNBZ2FXWWdLRzl3ZEdsdmJuTXVaR0YwWVNBbUppQnZjSFJwYjI1ekxtbGtjeWtnZTF4dUlDQWdJQ0FnSUNCa1lYUmhJRDBnWTNKbFlYUmxSbkpoYldVb2IzQjBhVzl1Y3k1a1lYUmhLVHRjYmlBZ0lDQWdJQ0FnWkdGMFlTNWpiMjUwWlhoMFVHRjBhQ0E5SUdGd2NHVnVaRU52Ym5SbGVIUlFZWFJvS0Z4dUlDQWdJQ0FnSUNBZ0lHOXdkR2x2Ym5NdVpHRjBZUzVqYjI1MFpYaDBVR0YwYUN4Y2JpQWdJQ0FnSUNBZ0lDQnZjSFJwYjI1ekxtbGtjMXN3WFZ4dUlDQWdJQ0FnSUNBcE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnlaWFIxY200Z1ptNG9ZMjl1ZEdWNGRDd2dlMXh1SUNBZ0lDQWdJQ0JrWVhSaE9pQmtZWFJoTEZ4dUlDQWdJQ0FnSUNCaWJHOWphMUJoY21GdGN6b2dZbXh2WTJ0UVlYSmhiWE1vVzJOdmJuUmxlSFJkTENCYlpHRjBZU0FtSmlCa1lYUmhMbU52Ym5SbGVIUlFZWFJvWFNsY2JpQWdJQ0FnSUgwcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdiM0IwYVc5dWN5NXBiblpsY25ObEtIUm9hWE1wTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzU5WEc0aVhYMD1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3JlYXRlTmV3TG9va3VwT2JqZWN0ID0gY3JlYXRlTmV3TG9va3VwT2JqZWN0O1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgb2JqZWN0IHdpdGggXCJudWxsXCItcHJvdG90eXBlIHRvIGF2b2lkIHRydXRoeSByZXN1bHRzIG9uIHByb3RvdHlwZSBwcm9wZXJ0aWVzLlxuICogVGhlIHJlc3VsdGluZyBvYmplY3QgY2FuIGJlIHVzZWQgd2l0aCBcIm9iamVjdFtwcm9wZXJ0eV1cIiB0byBjaGVjayBpZiBhIHByb3BlcnR5IGV4aXN0c1xuICogQHBhcmFtIHsuLi5vYmplY3R9IHNvdXJjZXMgYSB2YXJhcmdzIHBhcmFtZXRlciBvZiBzb3VyY2Ugb2JqZWN0cyB0aGF0IHdpbGwgYmUgbWVyZ2VkXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0xvb2t1cE9iamVjdCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHNvdXJjZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzb3VyY2VzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIF91dGlscy5leHRlbmQuYXBwbHkodW5kZWZpbmVkLCBbT2JqZWN0LmNyZWF0ZShudWxsKV0uY29uY2F0KHNvdXJjZXMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwybHVkR1Z5Ym1Gc0wyTnlaV0YwWlMxdVpYY3RiRzl2YTNWd0xXOWlhbVZqZEM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenR4UWtGQmRVSXNWVUZCVlRzN096czdPenM3TzBGQlVURkNMRk5CUVZNc2NVSkJRWEZDTEVkQlFXRTdiME5CUVZRc1QwRkJUenRCUVVGUUxGZEJRVTg3T3p0QlFVTTVReXhUUVVGUExHZERRVUZQTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVXNzVDBGQlR5eEZRVUZETEVOQlFVTTdRMEZEYUVRaUxDSm1hV3hsSWpvaVkzSmxZWFJsTFc1bGR5MXNiMjlyZFhBdGIySnFaV04wTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2daWGgwWlc1a0lIMGdabkp2YlNBbkxpNHZkWFJwYkhNbk8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpTQmhJRzVsZHlCdlltcGxZM1FnZDJsMGFDQmNJbTUxYkd4Y0lpMXdjbTkwYjNSNWNHVWdkRzhnWVhadmFXUWdkSEoxZEdoNUlISmxjM1ZzZEhNZ2IyNGdjSEp2ZEc5MGVYQmxJSEJ5YjNCbGNuUnBaWE11WEc0Z0tpQlVhR1VnY21WemRXeDBhVzVuSUc5aWFtVmpkQ0JqWVc0Z1ltVWdkWE5sWkNCM2FYUm9JRndpYjJKcVpXTjBXM0J5YjNCbGNuUjVYVndpSUhSdklHTm9aV05ySUdsbUlHRWdjSEp2Y0dWeWRIa2daWGhwYzNSelhHNGdLaUJBY0dGeVlXMGdleTR1TG05aWFtVmpkSDBnYzI5MWNtTmxjeUJoSUhaaGNtRnlaM01nY0dGeVlXMWxkR1Z5SUc5bUlITnZkWEpqWlNCdlltcGxZM1J6SUhSb1lYUWdkMmxzYkNCaVpTQnRaWEpuWldSY2JpQXFJRUJ5WlhSMWNtNXpJSHR2WW1wbFkzUjlYRzRnS2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCamNtVmhkR1ZPWlhkTWIyOXJkWEJQWW1wbFkzUW9MaTR1YzI5MWNtTmxjeWtnZTF4dUlDQnlaWFIxY200Z1pYaDBaVzVrS0U5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrc0lDNHVMbk52ZFhKalpYTXBPMXh1ZlZ4dUlsMTlcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3JlYXRlUHJvdG9BY2Nlc3NDb250cm9sID0gY3JlYXRlUHJvdG9BY2Nlc3NDb250cm9sO1xuZXhwb3J0cy5yZXN1bHRJc0FsbG93ZWQgPSByZXN1bHRJc0FsbG93ZWQ7XG5leHBvcnRzLnJlc2V0TG9nZ2VkUHJvcGVydGllcyA9IHJlc2V0TG9nZ2VkUHJvcGVydGllcztcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbJ2RlZmF1bHQnXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfY3JlYXRlTmV3TG9va3VwT2JqZWN0ID0gcmVxdWlyZSgnLi9jcmVhdGUtbmV3LWxvb2t1cC1vYmplY3QnKTtcblxudmFyIF9sb2dnZXIgPSByZXF1aXJlKCcuLi9sb2dnZXInKTtcblxudmFyIGxvZ2dlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9sb2dnZXIpO1xuXG52YXIgbG9nZ2VkUHJvcGVydGllcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb3RvQWNjZXNzQ29udHJvbChydW50aW1lT3B0aW9ucykge1xuICB2YXIgZGVmYXVsdE1ldGhvZFdoaXRlTGlzdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3RbJ2NvbnN0cnVjdG9yJ10gPSBmYWxzZTtcbiAgZGVmYXVsdE1ldGhvZFdoaXRlTGlzdFsnX19kZWZpbmVHZXR0ZXJfXyddID0gZmFsc2U7XG4gIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3RbJ19fZGVmaW5lU2V0dGVyX18nXSA9IGZhbHNlO1xuICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0WydfX2xvb2t1cEdldHRlcl9fJ10gPSBmYWxzZTtcblxuICB2YXIgZGVmYXVsdFByb3BlcnR5V2hpdGVMaXN0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvXG4gIGRlZmF1bHRQcm9wZXJ0eVdoaXRlTGlzdFsnX19wcm90b19fJ10gPSBmYWxzZTtcblxuICByZXR1cm4ge1xuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIHdoaXRlbGlzdDogX2NyZWF0ZU5ld0xvb2t1cE9iamVjdC5jcmVhdGVOZXdMb29rdXBPYmplY3QoZGVmYXVsdFByb3BlcnR5V2hpdGVMaXN0LCBydW50aW1lT3B0aW9ucy5hbGxvd2VkUHJvdG9Qcm9wZXJ0aWVzKSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogcnVudGltZU9wdGlvbnMuYWxsb3dQcm90b1Byb3BlcnRpZXNCeURlZmF1bHRcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHdoaXRlbGlzdDogX2NyZWF0ZU5ld0xvb2t1cE9iamVjdC5jcmVhdGVOZXdMb29rdXBPYmplY3QoZGVmYXVsdE1ldGhvZFdoaXRlTGlzdCwgcnVudGltZU9wdGlvbnMuYWxsb3dlZFByb3RvTWV0aG9kcyksXG4gICAgICBkZWZhdWx0VmFsdWU6IHJ1bnRpbWVPcHRpb25zLmFsbG93UHJvdG9NZXRob2RzQnlEZWZhdWx0XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiByZXN1bHRJc0FsbG93ZWQocmVzdWx0LCBwcm90b0FjY2Vzc0NvbnRyb2wsIHByb3BlcnR5TmFtZSkge1xuICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBjaGVja1doaXRlTGlzdChwcm90b0FjY2Vzc0NvbnRyb2wubWV0aG9kcywgcHJvcGVydHlOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY2hlY2tXaGl0ZUxpc3QocHJvdG9BY2Nlc3NDb250cm9sLnByb3BlcnRpZXMsIHByb3BlcnR5TmFtZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tXaGl0ZUxpc3QocHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZSwgcHJvcGVydHlOYW1lKSB7XG4gIGlmIChwcm90b0FjY2Vzc0NvbnRyb2xGb3JUeXBlLndoaXRlbGlzdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZS53aGl0ZWxpc3RbcHJvcGVydHlOYW1lXSA9PT0gdHJ1ZTtcbiAgfVxuICBpZiAocHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZS5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBwcm90b0FjY2Vzc0NvbnRyb2xGb3JUeXBlLmRlZmF1bHRWYWx1ZTtcbiAgfVxuICBsb2dVbmV4cGVjZWRQcm9wZXJ0eUFjY2Vzc09uY2UocHJvcGVydHlOYW1lKTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBsb2dVbmV4cGVjZWRQcm9wZXJ0eUFjY2Vzc09uY2UocHJvcGVydHlOYW1lKSB7XG4gIGlmIChsb2dnZWRQcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0gIT09IHRydWUpIHtcbiAgICBsb2dnZWRQcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0gPSB0cnVlO1xuICAgIGxvZ2dlci5sb2coJ2Vycm9yJywgJ0hhbmRsZWJhcnM6IEFjY2VzcyBoYXMgYmVlbiBkZW5pZWQgdG8gcmVzb2x2ZSB0aGUgcHJvcGVydHkgXCInICsgcHJvcGVydHlOYW1lICsgJ1wiIGJlY2F1c2UgaXQgaXMgbm90IGFuIFwib3duIHByb3BlcnR5XCIgb2YgaXRzIHBhcmVudC5cXG4nICsgJ1lvdSBjYW4gYWRkIGEgcnVudGltZSBvcHRpb24gdG8gZGlzYWJsZSB0aGUgY2hlY2sgb3IgdGhpcyB3YXJuaW5nOlxcbicgKyAnU2VlIGh0dHBzOi8vaGFuZGxlYmFyc2pzLmNvbS9hcGktcmVmZXJlbmNlL3J1bnRpbWUtb3B0aW9ucy5odG1sI29wdGlvbnMtdG8tY29udHJvbC1wcm90b3R5cGUtYWNjZXNzIGZvciBkZXRhaWxzJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRMb2dnZWRQcm9wZXJ0aWVzKCkge1xuICBPYmplY3Qua2V5cyhsb2dnZWRQcm9wZXJ0aWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUpIHtcbiAgICBkZWxldGUgbG9nZ2VkUHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwybHVkR1Z5Ym1Gc0wzQnliM1J2TFdGalkyVnpjeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzNGRFFVRnpReXcwUWtGQk5FSTdPM05DUVVNeFF5eFhRVUZYT3p0SlFVRjJRaXhOUVVGTk96dEJRVVZzUWl4SlFVRk5MR2RDUVVGblFpeEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03TzBGQlJYUkRMRk5CUVZNc2QwSkJRWGRDTEVOQlFVTXNZMEZCWXl4RlFVRkZPMEZCUTNaRUxFMUJRVWtzYzBKQlFYTkNMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVTnFSQ3gzUWtGQmMwSXNRMEZCUXl4aFFVRmhMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03UVVGRE9VTXNkMEpCUVhOQ0xFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03UVVGRGJrUXNkMEpCUVhOQ0xFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03UVVGRGJrUXNkMEpCUVhOQ0xFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03TzBGQlJXNUVMRTFCUVVrc2QwSkJRWGRDTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6czdRVUZGYmtRc01FSkJRWGRDTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRE96dEJRVVU1UXl4VFFVRlBPMEZCUTB3c1kwRkJWU3hGUVVGRk8wRkJRMVlzWlVGQlV5eEZRVUZGTERaRFFVTlVMSGRDUVVGM1FpeEZRVU40UWl4alFVRmpMRU5CUVVNc2MwSkJRWE5DTEVOQlEzUkRPMEZCUTBRc2EwSkJRVmtzUlVGQlJTeGpRVUZqTEVOQlFVTXNOa0pCUVRaQ08wdEJRek5FTzBGQlEwUXNWMEZCVHl4RlFVRkZPMEZCUTFBc1pVRkJVeXhGUVVGRkxEWkRRVU5VTEhOQ1FVRnpRaXhGUVVOMFFpeGpRVUZqTEVOQlFVTXNiVUpCUVcxQ0xFTkJRMjVETzBGQlEwUXNhMEpCUVZrc1JVRkJSU3hqUVVGakxFTkJRVU1zTUVKQlFUQkNPMHRCUTNoRU8wZEJRMFlzUTBGQlF6dERRVU5JT3p0QlFVVk5MRk5CUVZNc1pVRkJaU3hEUVVGRExFMUJRVTBzUlVGQlJTeHJRa0ZCYTBJc1JVRkJSU3haUVVGWkxFVkJRVVU3UVVGRGVFVXNUVUZCU1N4UFFVRlBMRTFCUVUwc1MwRkJTeXhWUVVGVkxFVkJRVVU3UVVGRGFFTXNWMEZCVHl4alFVRmpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNUMEZCVHl4RlFVRkZMRmxCUVZrc1EwRkJReXhEUVVGRE8wZEJRMnBGTEUxQlFVMDdRVUZEVEN4WFFVRlBMR05CUVdNc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4VlFVRlZMRVZCUVVVc1dVRkJXU3hEUVVGRExFTkJRVU03UjBGRGNFVTdRMEZEUmpzN1FVRkZSQ3hUUVVGVExHTkJRV01zUTBGQlF5eDVRa0ZCZVVJc1JVRkJSU3haUVVGWkxFVkJRVVU3UVVGREwwUXNUVUZCU1N4NVFrRkJlVUlzUTBGQlF5eFRRVUZUTEVOQlFVTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1UwRkJVeXhGUVVGRk8wRkJRMjVGTEZkQlFVOHNlVUpCUVhsQ0xFTkJRVU1zVTBGQlV5eERRVUZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJRenRIUVVOdVJUdEJRVU5FTEUxQlFVa3NlVUpCUVhsQ0xFTkJRVU1zV1VGQldTeExRVUZMTEZOQlFWTXNSVUZCUlR0QlFVTjRSQ3hYUVVGUExIbENRVUY1UWl4RFFVRkRMRmxCUVZrc1EwRkJRenRIUVVNdlF6dEJRVU5FTEdkRFFVRTRRaXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzBGQlF6ZERMRk5CUVU4c1MwRkJTeXhEUVVGRE8wTkJRMlE3TzBGQlJVUXNVMEZCVXl3NFFrRkJPRUlzUTBGQlF5eFpRVUZaTEVWQlFVVTdRVUZEY0VRc1RVRkJTU3huUWtGQlowSXNRMEZCUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhKUVVGSkxFVkJRVVU3UVVGRE0wTXNiMEpCUVdkQ0xFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRPMEZCUTNSRExGVkJRVTBzUTBGQlF5eEhRVUZITEVOQlExSXNUMEZCVHl4RlFVTlFMR2xGUVVFclJDeFpRVUZaTEc5SlFVTklMRzlJUVVNeVF5eERRVU53U0N4RFFVRkRPMGRCUTBnN1EwRkRSanM3UVVGRlRTeFRRVUZUTEhGQ1FVRnhRaXhIUVVGSE8wRkJRM1JETEZGQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJRU3haUVVGWkxFVkJRVWs3UVVGRGNFUXNWMEZCVHl4blFrRkJaMElzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0SFFVTjJReXhEUVVGRExFTkJRVU03UTBGRFNpSXNJbVpwYkdVaU9pSndjbTkwYnkxaFkyTmxjM011YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmpjbVZoZEdWT1pYZE1iMjlyZFhCUFltcGxZM1FnZlNCbWNtOXRJQ2N1TDJOeVpXRjBaUzF1WlhjdGJHOXZhM1Z3TFc5aWFtVmpkQ2M3WEc1cGJYQnZjblFnS2lCaGN5QnNiMmRuWlhJZ1puSnZiU0FuTGk0dmJHOW5aMlZ5Snp0Y2JseHVZMjl1YzNRZ2JHOW5aMlZrVUhKdmNHVnlkR2xsY3lBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJqY21WaGRHVlFjbTkwYjBGalkyVnpjME52Ym5SeWIyd29jblZ1ZEdsdFpVOXdkR2x2Ym5NcElIdGNiaUFnYkdWMElHUmxabUYxYkhSTlpYUm9iMlJYYUdsMFpVeHBjM1FnUFNCUFltcGxZM1F1WTNKbFlYUmxLRzUxYkd3cE8xeHVJQ0JrWldaaGRXeDBUV1YwYUc5a1YyaHBkR1ZNYVhOMFd5ZGpiMjV6ZEhKMVkzUnZjaWRkSUQwZ1ptRnNjMlU3WEc0Z0lHUmxabUYxYkhSTlpYUm9iMlJYYUdsMFpVeHBjM1JiSjE5ZlpHVm1hVzVsUjJWMGRHVnlYMThuWFNBOUlHWmhiSE5sTzF4dUlDQmtaV1poZFd4MFRXVjBhRzlrVjJocGRHVk1hWE4wV3lkZlgyUmxabWx1WlZObGRIUmxjbDlmSjEwZ1BTQm1ZV3h6WlR0Y2JpQWdaR1ZtWVhWc2RFMWxkR2h2WkZkb2FYUmxUR2x6ZEZzblgxOXNiMjlyZFhCSFpYUjBaWEpmWHlkZElEMGdabUZzYzJVN1hHNWNiaUFnYkdWMElHUmxabUYxYkhSUWNtOXdaWEowZVZkb2FYUmxUR2x6ZENBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYRzRnSUM4dklHVnpiR2x1ZEMxa2FYTmhZbXhsTFc1bGVIUXRiR2x1WlNCdWJ5MXdjbTkwYjF4dUlDQmtaV1poZFd4MFVISnZjR1Z5ZEhsWGFHbDBaVXhwYzNSYkoxOWZjSEp2ZEc5Zlh5ZGRJRDBnWm1Gc2MyVTdYRzVjYmlBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0J3Y205d1pYSjBhV1Z6T2lCN1hHNGdJQ0FnSUNCM2FHbDBaV3hwYzNRNklHTnlaV0YwWlU1bGQweHZiMnQxY0U5aWFtVmpkQ2hjYmlBZ0lDQWdJQ0FnWkdWbVlYVnNkRkJ5YjNCbGNuUjVWMmhwZEdWTWFYTjBMRnh1SUNBZ0lDQWdJQ0J5ZFc1MGFXMWxUM0IwYVc5dWN5NWhiR3h2ZDJWa1VISnZkRzlRY205d1pYSjBhV1Z6WEc0Z0lDQWdJQ0FwTEZ4dUlDQWdJQ0FnWkdWbVlYVnNkRlpoYkhWbE9pQnlkVzUwYVcxbFQzQjBhVzl1Y3k1aGJHeHZkMUJ5YjNSdlVISnZjR1Z5ZEdsbGMwSjVSR1ZtWVhWc2RGeHVJQ0FnSUgwc1hHNGdJQ0FnYldWMGFHOWtjem9nZTF4dUlDQWdJQ0FnZDJocGRHVnNhWE4wT2lCamNtVmhkR1ZPWlhkTWIyOXJkWEJQWW1wbFkzUW9YRzRnSUNBZ0lDQWdJR1JsWm1GMWJIUk5aWFJvYjJSWGFHbDBaVXhwYzNRc1hHNGdJQ0FnSUNBZ0lISjFiblJwYldWUGNIUnBiMjV6TG1Gc2JHOTNaV1JRY205MGIwMWxkR2h2WkhOY2JpQWdJQ0FnSUNrc1hHNGdJQ0FnSUNCa1pXWmhkV3gwVm1Gc2RXVTZJSEoxYm5ScGJXVlBjSFJwYjI1ekxtRnNiRzkzVUhKdmRHOU5aWFJvYjJSelFubEVaV1poZFd4MFhHNGdJQ0FnZlZ4dUlDQjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2NtVnpkV3gwU1hOQmJHeHZkMlZrS0hKbGMzVnNkQ3dnY0hKdmRHOUJZMk5sYzNORGIyNTBjbTlzTENCd2NtOXdaWEowZVU1aGJXVXBJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQnlaWE4xYkhRZ1BUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdZMmhsWTJ0WGFHbDBaVXhwYzNRb2NISnZkRzlCWTJObGMzTkRiMjUwY205c0xtMWxkR2h2WkhNc0lIQnliM0JsY25SNVRtRnRaU2s3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnY21WMGRYSnVJR05vWldOclYyaHBkR1ZNYVhOMEtIQnliM1J2UVdOalpYTnpRMjl1ZEhKdmJDNXdjbTl3WlhKMGFXVnpMQ0J3Y205d1pYSjBlVTVoYldVcE8xeHVJQ0I5WEc1OVhHNWNibVoxYm1OMGFXOXVJR05vWldOclYyaHBkR1ZNYVhOMEtIQnliM1J2UVdOalpYTnpRMjl1ZEhKdmJFWnZjbFI1Y0dVc0lIQnliM0JsY25SNVRtRnRaU2tnZTF4dUlDQnBaaUFvY0hKdmRHOUJZMk5sYzNORGIyNTBjbTlzUm05eVZIbHdaUzUzYUdsMFpXeHBjM1JiY0hKdmNHVnlkSGxPWVcxbFhTQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnY21WMGRYSnVJSEJ5YjNSdlFXTmpaWE56UTI5dWRISnZiRVp2Y2xSNWNHVXVkMmhwZEdWc2FYTjBXM0J5YjNCbGNuUjVUbUZ0WlYwZ1BUMDlJSFJ5ZFdVN1hHNGdJSDFjYmlBZ2FXWWdLSEJ5YjNSdlFXTmpaWE56UTI5dWRISnZiRVp2Y2xSNWNHVXVaR1ZtWVhWc2RGWmhiSFZsSUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQnlaWFIxY200Z2NISnZkRzlCWTJObGMzTkRiMjUwY205c1JtOXlWSGx3WlM1a1pXWmhkV3gwVm1Gc2RXVTdYRzRnSUgxY2JpQWdiRzluVlc1bGVIQmxZMlZrVUhKdmNHVnlkSGxCWTJObGMzTlBibU5sS0hCeWIzQmxjblI1VG1GdFpTazdYRzRnSUhKbGRIVnliaUJtWVd4elpUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2JHOW5WVzVsZUhCbFkyVmtVSEp2Y0dWeWRIbEJZMk5sYzNOUGJtTmxLSEJ5YjNCbGNuUjVUbUZ0WlNrZ2UxeHVJQ0JwWmlBb2JHOW5aMlZrVUhKdmNHVnlkR2xsYzF0d2NtOXdaWEowZVU1aGJXVmRJQ0U5UFNCMGNuVmxLU0I3WEc0Z0lDQWdiRzluWjJWa1VISnZjR1Z5ZEdsbGMxdHdjbTl3WlhKMGVVNWhiV1ZkSUQwZ2RISjFaVHRjYmlBZ0lDQnNiMmRuWlhJdWJHOW5LRnh1SUNBZ0lDQWdKMlZ5Y205eUp5eGNiaUFnSUNBZ0lHQklZVzVrYkdWaVlYSnpPaUJCWTJObGMzTWdhR0Z6SUdKbFpXNGdaR1Z1YVdWa0lIUnZJSEpsYzI5c2RtVWdkR2hsSUhCeWIzQmxjblI1SUZ3aUpIdHdjbTl3WlhKMGVVNWhiV1Y5WENJZ1ltVmpZWFZ6WlNCcGRDQnBjeUJ1YjNRZ1lXNGdYQ0p2ZDI0Z2NISnZjR1Z5ZEhsY0lpQnZaaUJwZEhNZ2NHRnlaVzUwTGx4Y2JtQWdLMXh1SUNBZ0lDQWdJQ0JnV1c5MUlHTmhiaUJoWkdRZ1lTQnlkVzUwYVcxbElHOXdkR2x2YmlCMGJ5QmthWE5oWW14bElIUm9aU0JqYUdWamF5QnZjaUIwYUdseklIZGhjbTVwYm1jNlhGeHVZQ0FyWEc0Z0lDQWdJQ0FnSUdCVFpXVWdhSFIwY0hNNkx5OW9ZVzVrYkdWaVlYSnphbk11WTI5dEwyRndhUzF5WldabGNtVnVZMlV2Y25WdWRHbHRaUzF2Y0hScGIyNXpMbWgwYld3amIzQjBhVzl1Y3kxMGJ5MWpiMjUwY205c0xYQnliM1J2ZEhsd1pTMWhZMk5sYzNNZ1ptOXlJR1JsZEdGcGJITmdYRzRnSUNBZ0tUdGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdjbVZ6WlhSTWIyZG5aV1JRY205d1pYSjBhV1Z6S0NrZ2UxeHVJQ0JQWW1wbFkzUXVhMlY1Y3loc2IyZG5aV1JRY205d1pYSjBhV1Z6S1M1bWIzSkZZV05vS0hCeWIzQmxjblI1VG1GdFpTQTlQaUI3WEc0Z0lDQWdaR1ZzWlhSbElHeHZaMmRsWkZCeWIzQmxjblJwWlhOYmNISnZjR1Z5ZEhsT1lXMWxYVHRjYmlBZ2ZTazdYRzU5WEc0aVhYMD1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMud3JhcEhlbHBlciA9IHdyYXBIZWxwZXI7XG5cbmZ1bmN0aW9uIHdyYXBIZWxwZXIoaGVscGVyLCB0cmFuc2Zvcm1PcHRpb25zRm4pIHtcbiAgaWYgKHR5cGVvZiBoZWxwZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuLCBidXQgYXBwYXJlbnRseSBpdCBkb2VzIGluIGh0dHBzOi8vZ2l0aHViLmNvbS93eWNhdHMvaGFuZGxlYmFycy5qcy9pc3N1ZXMvMTYzOVxuICAgIC8vIFdlIHRyeSB0byBtYWtlIHRoZSB3cmFwcGVyIGxlYXN0LWludmFzaXZlIGJ5IG5vdCB3cmFwcGluZyBpdCwgaWYgdGhlIGhlbHBlciBpcyBub3QgYSBmdW5jdGlvbi5cbiAgICByZXR1cm4gaGVscGVyO1xuICB9XG4gIHZhciB3cmFwcGVyID0gZnVuY3Rpb24gd3JhcHBlcigpIC8qIGR5bmFtaWMgYXJndW1lbnRzICove1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID0gdHJhbnNmb3JtT3B0aW9uc0ZuKG9wdGlvbnMpO1xuICAgIHJldHVybiBoZWxwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmx1ZEdWeWJtRnNMM2R5WVhCSVpXeHdaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdRVUZCVHl4VFFVRlRMRlZCUVZVc1EwRkJReXhOUVVGTkxFVkJRVVVzYTBKQlFXdENMRVZCUVVVN1FVRkRja1FzVFVGQlNTeFBRVUZQTEUxQlFVMHNTMEZCU3l4VlFVRlZMRVZCUVVVN096dEJRVWRvUXl4WFFVRlBMRTFCUVUwc1EwRkJRenRIUVVObU8wRkJRMFFzVFVGQlNTeFBRVUZQTEVkQlFVY3NVMEZCVml4UFFVRlBMREJDUVVGeFF6dEJRVU01UXl4UlFVRk5MRTlCUVU4c1IwRkJSeXhUUVVGVExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOb1JDeGhRVUZUTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eHJRa0ZCYTBJc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dEJRVU01UkN4WFFVRlBMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRPMGRCUTNSRExFTkJRVU03UVVGRFJpeFRRVUZQTEU5QlFVOHNRMEZCUXp0RFFVTm9RaUlzSW1acGJHVWlPaUozY21Gd1NHVnNjR1Z5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHWjFibU4wYVc5dUlIZHlZWEJJWld4d1pYSW9hR1ZzY0dWeUxDQjBjbUZ1YzJadmNtMVBjSFJwYjI1elJtNHBJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQm9aV3h3WlhJZ0lUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0F2THlCVWFHbHpJSE5vYjNWc1pDQnViM1FnYUdGd2NHVnVMQ0JpZFhRZ1lYQndZWEpsYm5Sc2VTQnBkQ0JrYjJWeklHbHVJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzkzZVdOaGRITXZhR0Z1Wkd4bFltRnljeTVxY3k5cGMzTjFaWE12TVRZek9WeHVJQ0FnSUM4dklGZGxJSFJ5ZVNCMGJ5QnRZV3RsSUhSb1pTQjNjbUZ3Y0dWeUlHeGxZWE4wTFdsdWRtRnphWFpsSUdKNUlHNXZkQ0IzY21Gd2NHbHVaeUJwZEN3Z2FXWWdkR2hsSUdobGJIQmxjaUJwY3lCdWIzUWdZU0JtZFc1amRHbHZiaTVjYmlBZ0lDQnlaWFIxY200Z2FHVnNjR1Z5TzF4dUlDQjlYRzRnSUd4bGRDQjNjbUZ3Y0dWeUlEMGdablZ1WTNScGIyNG9MeW9nWkhsdVlXMXBZeUJoY21kMWJXVnVkSE1nS2k4cElIdGNiaUFnSUNCamIyNXpkQ0J2Y0hScGIyNXpJRDBnWVhKbmRXMWxiblJ6VzJGeVozVnRaVzUwY3k1c1pXNW5kR2dnTFNBeFhUdGNiaUFnSUNCaGNtZDFiV1Z1ZEhOYllYSm5kVzFsYm5SekxteGxibWQwYUNBdElERmRJRDBnZEhKaGJuTm1iM0p0VDNCMGFXOXVjMFp1S0c5d2RHbHZibk1wTzF4dUlDQWdJSEpsZEhWeWJpQm9aV3h3WlhJdVlYQndiSGtvZEdocGN5d2dZWEpuZFcxbGJuUnpLVHRjYmlBZ2ZUdGNiaUFnY21WMGRYSnVJSGR5WVhCd1pYSTdYRzU5WEc0aVhYMD1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIGxvZ2dlciA9IHtcbiAgbWV0aG9kTWFwOiBbJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvciddLFxuICBsZXZlbDogJ2luZm8nLFxuXG4gIC8vIE1hcHMgYSBnaXZlbiBsZXZlbCB2YWx1ZSB0byB0aGUgYG1ldGhvZE1hcGAgaW5kZXhlcyBhYm92ZS5cbiAgbG9va3VwTGV2ZWw6IGZ1bmN0aW9uIGxvb2t1cExldmVsKGxldmVsKSB7XG4gICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBsZXZlbE1hcCA9IF91dGlscy5pbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbiBsb2cobGV2ZWwpIHtcbiAgICBsZXZlbCA9IGxvZ2dlci5sb29rdXBMZXZlbChsZXZlbCk7XG5cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGxvZ2dlci5sb29rdXBMZXZlbChsb2dnZXIubGV2ZWwpIDw9IGxldmVsKSB7XG4gICAgICB2YXIgbWV0aG9kID0gbG9nZ2VyLm1ldGhvZE1hcFtsZXZlbF07XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgaWYgKCFjb25zb2xlW21ldGhvZF0pIHtcbiAgICAgICAgbWV0aG9kID0gJ2xvZyc7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtZXNzYWdlID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBtZXNzYWdlW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZVttZXRob2RdLmFwcGx5KGNvbnNvbGUsIG1lc3NhZ2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGxvZ2dlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMnh2WjJkbGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzNGQ1FVRjNRaXhUUVVGVE96dEJRVVZxUXl4SlFVRkpMRTFCUVUwc1IwRkJSenRCUVVOWUxGZEJRVk1zUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1RVRkJUU3hGUVVGRkxFOUJRVThzUTBGQlF6dEJRVU0zUXl4UFFVRkxMRVZCUVVVc1RVRkJUVHM3TzBGQlIySXNZVUZCVnl4RlFVRkZMSEZDUVVGVExFdEJRVXNzUlVGQlJUdEJRVU16UWl4UlFVRkpMRTlCUVU4c1MwRkJTeXhMUVVGTExGRkJRVkVzUlVGQlJUdEJRVU0zUWl4VlFVRkpMRkZCUVZFc1IwRkJSeXhsUVVGUkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRE9VUXNWVUZCU1N4UlFVRlJMRWxCUVVrc1EwRkJReXhGUVVGRk8wRkJRMnBDTEdGQlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNN1QwRkRiRUlzVFVGQlRUdEJRVU5NTEdGQlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzA5QlF6ZENPMHRCUTBZN08wRkJSVVFzVjBGQlR5eExRVUZMTEVOQlFVTTdSMEZEWkRzN08wRkJSMFFzUzBGQlJ5eEZRVUZGTEdGQlFWTXNTMEZCU3l4RlFVRmpPMEZCUXk5Q0xGTkJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE96dEJRVVZzUXl4UlFVTkZMRTlCUVU4c1QwRkJUeXhMUVVGTExGZEJRVmNzU1VGRE9VSXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NTMEZCU3l4RlFVTjZRenRCUVVOQkxGVkJRVWtzVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03TzBGQlJYSkRMRlZCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVTdRVUZEY0VJc1kwRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF6dFBRVU5vUWpzN2QwTkJXRzFDTEU5QlFVODdRVUZCVUN4bFFVRlBPenM3UVVGWk0wSXNZVUZCVHl4RFFVRkRMRTFCUVUwc1QwRkJReXhEUVVGbUxFOUJRVThzUlVGQldTeFBRVUZQTEVOQlFVTXNRMEZCUXp0TFFVTTNRanRIUVVOR08wTkJRMFlzUTBGQlF6czdjVUpCUldFc1RVRkJUU0lzSW1acGJHVWlPaUpzYjJkblpYSXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCcGJtUmxlRTltSUgwZ1puSnZiU0FuTGk5MWRHbHNjeWM3WEc1Y2JteGxkQ0JzYjJkblpYSWdQU0I3WEc0Z0lHMWxkR2h2WkUxaGNEb2dXeWRrWldKMVp5Y3NJQ2RwYm1adkp5d2dKM2RoY200bkxDQW5aWEp5YjNJblhTeGNiaUFnYkdWMlpXdzZJQ2RwYm1adkp5eGNibHh1SUNBdkx5Qk5ZWEJ6SUdFZ1oybDJaVzRnYkdWMlpXd2dkbUZzZFdVZ2RHOGdkR2hsSUdCdFpYUm9iMlJOWVhCZ0lHbHVaR1Y0WlhNZ1lXSnZkbVV1WEc0Z0lHeHZiMnQxY0V4bGRtVnNPaUJtZFc1amRHbHZiaWhzWlhabGJDa2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdiR1YyWld3Z1BUMDlJQ2R6ZEhKcGJtY25LU0I3WEc0Z0lDQWdJQ0JzWlhRZ2JHVjJaV3hOWVhBZ1BTQnBibVJsZUU5bUtHeHZaMmRsY2k1dFpYUm9iMlJOWVhBc0lHeGxkbVZzTG5SdlRHOTNaWEpEWVhObEtDa3BPMXh1SUNBZ0lDQWdhV1lnS0d4bGRtVnNUV0Z3SUQ0OUlEQXBJSHRjYmlBZ0lDQWdJQ0FnYkdWMlpXd2dQU0JzWlhabGJFMWhjRHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJR3hsZG1Wc0lEMGdjR0Z5YzJWSmJuUW9iR1YyWld3c0lERXdLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2JHVjJaV3c3WEc0Z0lIMHNYRzVjYmlBZ0x5OGdRMkZ1SUdKbElHOTJaWEp5YVdSa1pXNGdhVzRnZEdobElHaHZjM1FnWlc1MmFYSnZibTFsYm5SY2JpQWdiRzluT2lCbWRXNWpkR2x2Ymloc1pYWmxiQ3dnTGk0dWJXVnpjMkZuWlNrZ2UxeHVJQ0FnSUd4bGRtVnNJRDBnYkc5bloyVnlMbXh2YjJ0MWNFeGxkbVZzS0d4bGRtVnNLVHRjYmx4dUlDQWdJR2xtSUNoY2JpQWdJQ0FnSUhSNWNHVnZaaUJqYjI1emIyeGxJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KbHh1SUNBZ0lDQWdiRzluWjJWeUxteHZiMnQxY0V4bGRtVnNLR3h2WjJkbGNpNXNaWFpsYkNrZ1BEMGdiR1YyWld4Y2JpQWdJQ0FwSUh0Y2JpQWdJQ0FnSUd4bGRDQnRaWFJvYjJRZ1BTQnNiMmRuWlhJdWJXVjBhRzlrVFdGd1cyeGxkbVZzWFR0Y2JpQWdJQ0FnSUM4dklHVnpiR2x1ZEMxa2FYTmhZbXhsTFc1bGVIUXRiR2x1WlNCdWJ5MWpiMjV6YjJ4bFhHNGdJQ0FnSUNCcFppQW9JV052Ym5OdmJHVmJiV1YwYUc5a1hTa2dlMXh1SUNBZ0lDQWdJQ0J0WlhSb2IyUWdQU0FuYkc5bkp6dGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lHTnZibk52YkdWYmJXVjBhRzlrWFNndUxpNXRaWE56WVdkbEtUc2dMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRiR2x1WlNCdWJ5MWpiMjV6YjJ4bFhHNGdJQ0FnZlZ4dUlDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCc2IyZG5aWEk3WEc0aVhYMD1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKEhhbmRsZWJhcnMpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgdmFyIHJvb3QgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvdyxcbiAgICAgICRIYW5kbGViYXJzID0gcm9vdC5IYW5kbGViYXJzO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBIYW5kbGViYXJzLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJvb3QuSGFuZGxlYmFycyA9PT0gSGFuZGxlYmFycykge1xuICAgICAgcm9vdC5IYW5kbGViYXJzID0gJEhhbmRsZWJhcnM7XG4gICAgfVxuICAgIHJldHVybiBIYW5kbGViYXJzO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyNXZMV052Ym1ac2FXTjBMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN2NVSkJRV1VzVlVGQlV5eFZRVUZWTEVWQlFVVTdPMEZCUld4RExFMUJRVWtzU1VGQlNTeEhRVUZITEU5QlFVOHNUVUZCVFN4TFFVRkxMRmRCUVZjc1IwRkJSeXhOUVVGTkxFZEJRVWNzVFVGQlRUdE5RVU40UkN4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF6czdRVUZGYUVNc1dVRkJWU3hEUVVGRExGVkJRVlVzUjBGQlJ5eFpRVUZYTzBGQlEycERMRkZCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzUzBGQlN5eFZRVUZWTEVWQlFVVTdRVUZEYkVNc1ZVRkJTU3hEUVVGRExGVkJRVlVzUjBGQlJ5eFhRVUZYTEVOQlFVTTdTMEZETDBJN1FVRkRSQ3hYUVVGUExGVkJRVlVzUTBGQlF6dEhRVU51UWl4RFFVRkRPME5CUTBnaUxDSm1hV3hsSWpvaWJtOHRZMjl1Wm14cFkzUXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaWhJWVc1a2JHVmlZWEp6S1NCN1hHNGdJQzhxSUdsemRHRnVZblZzSUdsbmJtOXlaU0J1WlhoMElDb3ZYRzRnSUd4bGRDQnliMjkwSUQwZ2RIbHdaVzltSUdkc2IySmhiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dQeUJuYkc5aVlXd2dPaUIzYVc1a2IzY3NYRzRnSUNBZ0pFaGhibVJzWldKaGNuTWdQU0J5YjI5MExraGhibVJzWldKaGNuTTdYRzRnSUM4cUlHbHpkR0Z1WW5Wc0lHbG5ibTl5WlNCdVpYaDBJQ292WEc0Z0lFaGhibVJzWldKaGNuTXVibTlEYjI1bWJHbGpkQ0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUdsbUlDaHliMjkwTGtoaGJtUnNaV0poY25NZ1BUMDlJRWhoYm1Sc1pXSmhjbk1wSUh0Y2JpQWdJQ0FnSUhKdmIzUXVTR0Z1Wkd4bFltRnljeUE5SUNSSVlXNWtiR1ZpWVhKek8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdTR0Z1Wkd4bFltRnljenRjYmlBZ2ZUdGNibjFjYmlKZGZRPT1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY2hlY2tSZXZpc2lvbiA9IGNoZWNrUmV2aXNpb247XG5leHBvcnRzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5leHBvcnRzLndyYXBQcm9ncmFtID0gd3JhcFByb2dyYW07XG5leHBvcnRzLnJlc29sdmVQYXJ0aWFsID0gcmVzb2x2ZVBhcnRpYWw7XG5leHBvcnRzLmludm9rZVBhcnRpYWwgPSBpbnZva2VQYXJ0aWFsO1xuZXhwb3J0cy5ub29wID0gbm9vcDtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialsnZGVmYXVsdCddID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzKTtcblxudmFyIF9leGNlcHRpb24gPSByZXF1aXJlKCcuL2V4Y2VwdGlvbicpO1xuXG52YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG52YXIgX2Jhc2UgPSByZXF1aXJlKCcuL2Jhc2UnKTtcblxudmFyIF9oZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5cbnZhciBfaW50ZXJuYWxXcmFwSGVscGVyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC93cmFwSGVscGVyJyk7XG5cbnZhciBfaW50ZXJuYWxQcm90b0FjY2VzcyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvcHJvdG8tYWNjZXNzJyk7XG5cbmZ1bmN0aW9uIGNoZWNrUmV2aXNpb24oY29tcGlsZXJJbmZvKSB7XG4gIHZhciBjb21waWxlclJldmlzaW9uID0gY29tcGlsZXJJbmZvICYmIGNvbXBpbGVySW5mb1swXSB8fCAxLFxuICAgICAgY3VycmVudFJldmlzaW9uID0gX2Jhc2UuQ09NUElMRVJfUkVWSVNJT047XG5cbiAgaWYgKGNvbXBpbGVyUmV2aXNpb24gPj0gX2Jhc2UuTEFTVF9DT01QQVRJQkxFX0NPTVBJTEVSX1JFVklTSU9OICYmIGNvbXBpbGVyUmV2aXNpb24gPD0gX2Jhc2UuQ09NUElMRVJfUkVWSVNJT04pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IF9iYXNlLkxBU1RfQ09NUEFUSUJMRV9DT01QSUxFUl9SRVZJU0lPTikge1xuICAgIHZhciBydW50aW1lVmVyc2lvbnMgPSBfYmFzZS5SRVZJU0lPTl9DSEFOR0VTW2N1cnJlbnRSZXZpc2lvbl0sXG4gICAgICAgIGNvbXBpbGVyVmVyc2lvbnMgPSBfYmFzZS5SRVZJU0lPTl9DSEFOR0VTW2NvbXBpbGVyUmV2aXNpb25dO1xuICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICsgJ1BsZWFzZSB1cGRhdGUgeW91ciBwcmVjb21waWxlciB0byBhIG5ld2VyIHZlcnNpb24gKCcgKyBydW50aW1lVmVyc2lvbnMgKyAnKSBvciBkb3duZ3JhZGUgeW91ciBydW50aW1lIHRvIGFuIG9sZGVyIHZlcnNpb24gKCcgKyBjb21waWxlclZlcnNpb25zICsgJykuJyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVXNlIHRoZSBlbWJlZGRlZCB2ZXJzaW9uIGluZm8gc2luY2UgdGhlIHJ1bnRpbWUgZG9lc24ndCBrbm93IGFib3V0IHRoaXMgcmV2aXNpb24geWV0XG4gICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArICdQbGVhc2UgdXBkYXRlIHlvdXIgcnVudGltZSB0byBhIG5ld2VyIHZlcnNpb24gKCcgKyBjb21waWxlckluZm9bMV0gKyAnKS4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIWVudikge1xuICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGUnKTtcbiAgfVxuICBpZiAoIXRlbXBsYXRlU3BlYyB8fCAhdGVtcGxhdGVTcGVjLm1haW4pIHtcbiAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5rbm93biB0ZW1wbGF0ZSBvYmplY3Q6ICcgKyB0eXBlb2YgdGVtcGxhdGVTcGVjKTtcbiAgfVxuXG4gIHRlbXBsYXRlU3BlYy5tYWluLmRlY29yYXRvciA9IHRlbXBsYXRlU3BlYy5tYWluX2Q7XG5cbiAgLy8gTm90ZTogVXNpbmcgZW52LlZNIHJlZmVyZW5jZXMgcmF0aGVyIHRoYW4gbG9jYWwgdmFyIHJlZmVyZW5jZXMgdGhyb3VnaG91dCB0aGlzIHNlY3Rpb24gdG8gYWxsb3dcbiAgLy8gZm9yIGV4dGVybmFsIHVzZXJzIHRvIG92ZXJyaWRlIHRoZXNlIGFzIHBzZXVkby1zdXBwb3J0ZWQgQVBJcy5cbiAgZW52LlZNLmNoZWNrUmV2aXNpb24odGVtcGxhdGVTcGVjLmNvbXBpbGVyKTtcblxuICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBmb3IgcHJlY29tcGlsZWQgdGVtcGxhdGVzIHdpdGggY29tcGlsZXItdmVyc2lvbiA3ICg8NC4zLjApXG4gIHZhciB0ZW1wbGF0ZVdhc1ByZWNvbXBpbGVkV2l0aENvbXBpbGVyVjcgPSB0ZW1wbGF0ZVNwZWMuY29tcGlsZXIgJiYgdGVtcGxhdGVTcGVjLmNvbXBpbGVyWzBdID09PSA3O1xuXG4gIGZ1bmN0aW9uIGludm9rZVBhcnRpYWxXcmFwcGVyKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgICBjb250ZXh0ID0gVXRpbHMuZXh0ZW5kKHt9LCBjb250ZXh0LCBvcHRpb25zLmhhc2gpO1xuICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIG9wdGlvbnMuaWRzWzBdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGFydGlhbCA9IGVudi5WTS5yZXNvbHZlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuXG4gICAgdmFyIGV4dGVuZGVkT3B0aW9ucyA9IFV0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucywge1xuICAgICAgaG9va3M6IHRoaXMuaG9va3MsXG4gICAgICBwcm90b0FjY2Vzc0NvbnRyb2w6IHRoaXMucHJvdG9BY2Nlc3NDb250cm9sXG4gICAgfSk7XG5cbiAgICB2YXIgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBleHRlbmRlZE9wdGlvbnMpO1xuXG4gICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIGVudi5jb21waWxlKSB7XG4gICAgICBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0gPSBlbnYuY29tcGlsZShwYXJ0aWFsLCB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJPcHRpb25zLCBlbnYpO1xuICAgICAgcmVzdWx0ID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdKGNvbnRleHQsIGV4dGVuZGVkT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMuaW5kZW50KSB7XG4gICAgICAgIHZhciBsaW5lcyA9IHJlc3VsdC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFsaW5lc1tpXSAmJiBpICsgMSA9PT0gbCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGluZXNbaV0gPSBvcHRpb25zLmluZGVudCArIGxpbmVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IGxpbmVzLmpvaW4oJ1xcbicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBjb21waWxlZCB3aGVuIHJ1bm5pbmcgaW4gcnVudGltZS1vbmx5IG1vZGUnKTtcbiAgICB9XG4gIH1cblxuICAvLyBKdXN0IGFkZCB3YXRlclxuICB2YXIgY29udGFpbmVyID0ge1xuICAgIHN0cmljdDogZnVuY3Rpb24gc3RyaWN0KG9iaiwgbmFtZSwgbG9jKSB7XG4gICAgICBpZiAoIW9iaiB8fCAhKG5hbWUgaW4gb2JqKSkge1xuICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnXCInICsgbmFtZSArICdcIiBub3QgZGVmaW5lZCBpbiAnICsgb2JqLCB7XG4gICAgICAgICAgbG9jOiBsb2NcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5KG9iaiwgbmFtZSk7XG4gICAgfSxcbiAgICBsb29rdXBQcm9wZXJ0eTogZnVuY3Rpb24gbG9va3VwUHJvcGVydHkocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgIHZhciByZXN1bHQgPSBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgaWYgKF9pbnRlcm5hbFByb3RvQWNjZXNzLnJlc3VsdElzQWxsb3dlZChyZXN1bHQsIGNvbnRhaW5lci5wcm90b0FjY2Vzc0NvbnRyb2wsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBsb29rdXA6IGZ1bmN0aW9uIGxvb2t1cChkZXB0aHMsIG5hbWUpIHtcbiAgICAgIHZhciBsZW4gPSBkZXB0aHMubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZGVwdGhzW2ldICYmIGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eShkZXB0aHNbaV0sIG5hbWUpO1xuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZGVwdGhzW2ldW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsYW1iZGE6IGZ1bmN0aW9uIGxhbWJkYShjdXJyZW50LCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGN1cnJlbnQgPT09ICdmdW5jdGlvbicgPyBjdXJyZW50LmNhbGwoY29udGV4dCkgOiBjdXJyZW50O1xuICAgIH0sXG5cbiAgICBlc2NhcGVFeHByZXNzaW9uOiBVdGlscy5lc2NhcGVFeHByZXNzaW9uLFxuICAgIGludm9rZVBhcnRpYWw6IGludm9rZVBhcnRpYWxXcmFwcGVyLFxuXG4gICAgZm46IGZ1bmN0aW9uIGZuKGkpIHtcbiAgICAgIHZhciByZXQgPSB0ZW1wbGF0ZVNwZWNbaV07XG4gICAgICByZXQuZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjW2kgKyAnX2QnXTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIHByb2dyYW1zOiBbXSxcbiAgICBwcm9ncmFtOiBmdW5jdGlvbiBwcm9ncmFtKGksIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICAgIHZhciBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0sXG4gICAgICAgICAgZm4gPSB0aGlzLmZuKGkpO1xuICAgICAgaWYgKGRhdGEgfHwgZGVwdGhzIHx8IGJsb2NrUGFyYW1zIHx8IGRlY2xhcmVkQmxvY2tQYXJhbXMpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvZ3JhbVdyYXBwZXI7XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEodmFsdWUsIGRlcHRoKSB7XG4gICAgICB3aGlsZSAodmFsdWUgJiYgZGVwdGgtLSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLl9wYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBtZXJnZUlmTmVlZGVkOiBmdW5jdGlvbiBtZXJnZUlmTmVlZGVkKHBhcmFtLCBjb21tb24pIHtcbiAgICAgIHZhciBvYmogPSBwYXJhbSB8fCBjb21tb247XG5cbiAgICAgIGlmIChwYXJhbSAmJiBjb21tb24gJiYgcGFyYW0gIT09IGNvbW1vbikge1xuICAgICAgICBvYmogPSBVdGlscy5leHRlbmQoe30sIGNvbW1vbiwgcGFyYW0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG4gICAgLy8gQW4gZW1wdHkgb2JqZWN0IHRvIHVzZSBhcyByZXBsYWNlbWVudCBmb3IgbnVsbC1jb250ZXh0c1xuICAgIG51bGxDb250ZXh0OiBPYmplY3Quc2VhbCh7fSksXG5cbiAgICBub29wOiBlbnYuVk0ubm9vcCxcbiAgICBjb21waWxlckluZm86IHRlbXBsYXRlU3BlYy5jb21waWxlclxuICB9O1xuXG4gIGZ1bmN0aW9uIHJldChjb250ZXh0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgcmV0Ll9zZXR1cChvcHRpb25zKTtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xuICAgICAgZGF0YSA9IGluaXREYXRhKGNvbnRleHQsIGRhdGEpO1xuICAgIH1cbiAgICB2YXIgZGVwdGhzID0gdW5kZWZpbmVkLFxuICAgICAgICBibG9ja1BhcmFtcyA9IHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyA/IFtdIDogdW5kZWZpbmVkO1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzKSB7XG4gICAgICBpZiAob3B0aW9ucy5kZXB0aHMpIHtcbiAgICAgICAgZGVwdGhzID0gY29udGV4dCAhPSBvcHRpb25zLmRlcHRoc1swXSA/IFtjb250ZXh0XS5jb25jYXQob3B0aW9ucy5kZXB0aHMpIDogb3B0aW9ucy5kZXB0aHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXB0aHMgPSBbY29udGV4dF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFpbihjb250ZXh0IC8qLCBvcHRpb25zKi8pIHtcbiAgICAgIHJldHVybiAnJyArIHRlbXBsYXRlU3BlYy5tYWluKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgfVxuXG4gICAgbWFpbiA9IGV4ZWN1dGVEZWNvcmF0b3JzKHRlbXBsYXRlU3BlYy5tYWluLCBtYWluLCBjb250YWluZXIsIG9wdGlvbnMuZGVwdGhzIHx8IFtdLCBkYXRhLCBibG9ja1BhcmFtcyk7XG4gICAgcmV0dXJuIG1haW4oY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cblxuICByZXQuaXNUb3AgPSB0cnVlO1xuXG4gIHJldC5fc2V0dXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsKSB7XG4gICAgICB2YXIgbWVyZ2VkSGVscGVycyA9IFV0aWxzLmV4dGVuZCh7fSwgZW52LmhlbHBlcnMsIG9wdGlvbnMuaGVscGVycyk7XG4gICAgICB3cmFwSGVscGVyc1RvUGFzc0xvb2t1cFByb3BlcnR5KG1lcmdlZEhlbHBlcnMsIGNvbnRhaW5lcik7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG1lcmdlZEhlbHBlcnM7XG5cbiAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCkge1xuICAgICAgICAvLyBVc2UgbWVyZ2VJZk5lZWRlZCBoZXJlIHRvIHByZXZlbnQgY29tcGlsaW5nIGdsb2JhbCBwYXJ0aWFscyBtdWx0aXBsZSB0aW1lc1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBjb250YWluZXIubWVyZ2VJZk5lZWRlZChvcHRpb25zLnBhcnRpYWxzLCBlbnYucGFydGlhbHMpO1xuICAgICAgfVxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsIHx8IHRlbXBsYXRlU3BlYy51c2VEZWNvcmF0b3JzKSB7XG4gICAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gVXRpbHMuZXh0ZW5kKHt9LCBlbnYuZGVjb3JhdG9ycywgb3B0aW9ucy5kZWNvcmF0b3JzKTtcbiAgICAgIH1cblxuICAgICAgY29udGFpbmVyLmhvb2tzID0ge307XG4gICAgICBjb250YWluZXIucHJvdG9BY2Nlc3NDb250cm9sID0gX2ludGVybmFsUHJvdG9BY2Nlc3MuY3JlYXRlUHJvdG9BY2Nlc3NDb250cm9sKG9wdGlvbnMpO1xuXG4gICAgICB2YXIga2VlcEhlbHBlckluSGVscGVycyA9IG9wdGlvbnMuYWxsb3dDYWxsc1RvSGVscGVyTWlzc2luZyB8fCB0ZW1wbGF0ZVdhc1ByZWNvbXBpbGVkV2l0aENvbXBpbGVyVjc7XG4gICAgICBfaGVscGVycy5tb3ZlSGVscGVyVG9Ib29rcyhjb250YWluZXIsICdoZWxwZXJNaXNzaW5nJywga2VlcEhlbHBlckluSGVscGVycyk7XG4gICAgICBfaGVscGVycy5tb3ZlSGVscGVyVG9Ib29rcyhjb250YWluZXIsICdibG9ja0hlbHBlck1pc3NpbmcnLCBrZWVwSGVscGVySW5IZWxwZXJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLnByb3RvQWNjZXNzQ29udHJvbCA9IG9wdGlvbnMucHJvdG9BY2Nlc3NDb250cm9sOyAvLyBpbnRlcm5hbCBvcHRpb25cbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gb3B0aW9ucy5oZWxwZXJzO1xuICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3B0aW9ucy5wYXJ0aWFscztcbiAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gb3B0aW9ucy5kZWNvcmF0b3JzO1xuICAgICAgY29udGFpbmVyLmhvb2tzID0gb3B0aW9ucy5ob29rcztcbiAgICB9XG4gIH07XG5cbiAgcmV0Ll9jaGlsZCA9IGZ1bmN0aW9uIChpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyAmJiAhYmxvY2tQYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdtdXN0IHBhc3MgYmxvY2sgcGFyYW1zJyk7XG4gICAgfVxuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzICYmICFkZXB0aHMpIHtcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdtdXN0IHBhc3MgcGFyZW50IGRlcHRocycpO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gIH07XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgZnVuY3Rpb24gcHJvZyhjb250ZXh0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBjdXJyZW50RGVwdGhzID0gZGVwdGhzO1xuICAgIGlmIChkZXB0aHMgJiYgY29udGV4dCAhPSBkZXB0aHNbMF0gJiYgIShjb250ZXh0ID09PSBjb250YWluZXIubnVsbENvbnRleHQgJiYgZGVwdGhzWzBdID09PSBudWxsKSkge1xuICAgICAgY3VycmVudERlcHRocyA9IFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm4oY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBvcHRpb25zLmRhdGEgfHwgZGF0YSwgYmxvY2tQYXJhbXMgJiYgW29wdGlvbnMuYmxvY2tQYXJhbXNdLmNvbmNhdChibG9ja1BhcmFtcyksIGN1cnJlbnREZXB0aHMpO1xuICB9XG5cbiAgcHJvZyA9IGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpO1xuXG4gIHByb2cucHJvZ3JhbSA9IGk7XG4gIHByb2cuZGVwdGggPSBkZXB0aHMgPyBkZXB0aHMubGVuZ3RoIDogMDtcbiAgcHJvZy5ibG9ja1BhcmFtcyA9IGRlY2xhcmVkQmxvY2tQYXJhbXMgfHwgMDtcbiAgcmV0dXJuIHByb2c7XG59XG5cbi8qKlxuICogVGhpcyBpcyBjdXJyZW50bHkgcGFydCBvZiB0aGUgb2ZmaWNpYWwgQVBJLCB0aGVyZWZvcmUgaW1wbGVtZW50YXRpb24gZGV0YWlscyBzaG91bGQgbm90IGJlIGNoYW5nZWQuXG4gKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVBhcnRpYWwocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICBpZiAoIXBhcnRpYWwpIHtcbiAgICBpZiAob3B0aW9ucy5uYW1lID09PSAnQHBhcnRpYWwtYmxvY2snKSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ107XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV07XG4gICAgfVxuICB9IGVsc2UgaWYgKCFwYXJ0aWFsLmNhbGwgJiYgIW9wdGlvbnMubmFtZSkge1xuICAgIC8vIFRoaXMgaXMgYSBkeW5hbWljIHBhcnRpYWwgdGhhdCByZXR1cm5lZCBhIHN0cmluZ1xuICAgIG9wdGlvbnMubmFtZSA9IHBhcnRpYWw7XG4gICAgcGFydGlhbCA9IG9wdGlvbnMucGFydGlhbHNbcGFydGlhbF07XG4gIH1cbiAgcmV0dXJuIHBhcnRpYWw7XG59XG5cbmZ1bmN0aW9uIGludm9rZVBhcnRpYWwocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICAvLyBVc2UgdGhlIGN1cnJlbnQgY2xvc3VyZSBjb250ZXh0IHRvIHNhdmUgdGhlIHBhcnRpYWwtYmxvY2sgaWYgdGhpcyBwYXJ0aWFsXG4gIHZhciBjdXJyZW50UGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICBvcHRpb25zLnBhcnRpYWwgPSB0cnVlO1xuICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICBvcHRpb25zLmRhdGEuY29udGV4dFBhdGggPSBvcHRpb25zLmlkc1swXSB8fCBvcHRpb25zLmRhdGEuY29udGV4dFBhdGg7XG4gIH1cblxuICB2YXIgcGFydGlhbEJsb2NrID0gdW5kZWZpbmVkO1xuICBpZiAob3B0aW9ucy5mbiAmJiBvcHRpb25zLmZuICE9PSBub29wKSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIG9wdGlvbnMuZGF0YSA9IF9iYXNlLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICAvLyBXcmFwcGVyIGZ1bmN0aW9uIHRvIGdldCBhY2Nlc3MgdG8gY3VycmVudFBhcnRpYWxCbG9jayBmcm9tIHRoZSBjbG9zdXJlXG4gICAgICB2YXIgZm4gPSBvcHRpb25zLmZuO1xuICAgICAgcGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBmdW5jdGlvbiBwYXJ0aWFsQmxvY2tXcmFwcGVyKGNvbnRleHQpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgICAvLyBSZXN0b3JlIHRoZSBwYXJ0aWFsLWJsb2NrIGZyb20gdGhlIGNsb3N1cmUgZm9yIHRoZSBleGVjdXRpb24gb2YgdGhlIGJsb2NrXG4gICAgICAgIC8vIGkuZS4gdGhlIHBhcnQgaW5zaWRlIHRoZSBibG9jayBvZiB0aGUgcGFydGlhbCBjYWxsLlxuICAgICAgICBvcHRpb25zLmRhdGEgPSBfYmFzZS5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGN1cnJlbnRQYXJ0aWFsQmxvY2s7XG4gICAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH07XG4gICAgICBpZiAoZm4ucGFydGlhbHMpIHtcbiAgICAgICAgb3B0aW9ucy5wYXJ0aWFscyA9IFV0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucy5wYXJ0aWFscywgZm4ucGFydGlhbHMpO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkICYmIHBhcnRpYWxCbG9jaykge1xuICAgIHBhcnRpYWwgPSBwYXJ0aWFsQmxvY2s7XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBmb3VuZCcpO1xuICB9IGVsc2UgaWYgKHBhcnRpYWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiBwYXJ0aWFsKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gaW5pdERhdGEoY29udGV4dCwgZGF0YSkge1xuICBpZiAoIWRhdGEgfHwgISgncm9vdCcgaW4gZGF0YSkpIHtcbiAgICBkYXRhID0gZGF0YSA/IF9iYXNlLmNyZWF0ZUZyYW1lKGRhdGEpIDoge307XG4gICAgZGF0YS5yb290ID0gY29udGV4dDtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcykge1xuICBpZiAoZm4uZGVjb3JhdG9yKSB7XG4gICAgdmFyIHByb3BzID0ge307XG4gICAgcHJvZyA9IGZuLmRlY29yYXRvcihwcm9nLCBwcm9wcywgY29udGFpbmVyLCBkZXB0aHMgJiYgZGVwdGhzWzBdLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICBVdGlscy5leHRlbmQocHJvZywgcHJvcHMpO1xuICB9XG4gIHJldHVybiBwcm9nO1xufVxuXG5mdW5jdGlvbiB3cmFwSGVscGVyc1RvUGFzc0xvb2t1cFByb3BlcnR5KG1lcmdlZEhlbHBlcnMsIGNvbnRhaW5lcikge1xuICBPYmplY3Qua2V5cyhtZXJnZWRIZWxwZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChoZWxwZXJOYW1lKSB7XG4gICAgdmFyIGhlbHBlciA9IG1lcmdlZEhlbHBlcnNbaGVscGVyTmFtZV07XG4gICAgbWVyZ2VkSGVscGVyc1toZWxwZXJOYW1lXSA9IHBhc3NMb29rdXBQcm9wZXJ0eU9wdGlvbihoZWxwZXIsIGNvbnRhaW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwYXNzTG9va3VwUHJvcGVydHlPcHRpb24oaGVscGVyLCBjb250YWluZXIpIHtcbiAgdmFyIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5O1xuICByZXR1cm4gX2ludGVybmFsV3JhcEhlbHBlci53cmFwSGVscGVyKGhlbHBlciwgZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gVXRpbHMuZXh0ZW5kKHsgbG9va3VwUHJvcGVydHk6IGxvb2t1cFByb3BlcnR5IH0sIG9wdGlvbnMpO1xuICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDNKMWJuUnBiV1V1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3Y1VKQlFYVkNMRk5CUVZNN08wbEJRWEJDTEV0QlFVczdPM2xDUVVOTExHRkJRV0U3T3pzN2IwSkJUVFZDTEZGQlFWRTdPM1ZDUVVOdFFpeFhRVUZYT3p0clEwRkRiRUlzZFVKQlFYVkNPenR0UTBGSk0wTXNlVUpCUVhsQ096dEJRVVY2UWl4VFFVRlRMR0ZCUVdFc1EwRkJReXhaUVVGWkxFVkJRVVU3UVVGRE1VTXNUVUZCVFN4blFrRkJaMElzUjBGQlJ5eEJRVUZETEZsQlFWa3NTVUZCU1N4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVXNzUTBGQlF6dE5RVU0zUkN4bFFVRmxMREJDUVVGdlFpeERRVUZET3p0QlFVVjBReXhOUVVORkxHZENRVUZuUWl3eVEwRkJjVU1zU1VGRGNrUXNaMEpCUVdkQ0xESkNRVUZ4UWl4RlFVTnlRenRCUVVOQkxGZEJRVTg3UjBGRFVqczdRVUZGUkN4TlFVRkpMR2RDUVVGblFpd3dRMEZCYjBNc1JVRkJSVHRCUVVONFJDeFJRVUZOTEdWQlFXVXNSMEZCUnl4MVFrRkJhVUlzWlVGQlpTeERRVUZETzFGQlEzWkVMR2RDUVVGblFpeEhRVUZITEhWQ1FVRnBRaXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPMEZCUTNoRUxGVkJRVTBzTWtKQlEwb3NlVVpCUVhsR0xFZEJRM1pHTEhGRVFVRnhSQ3hIUVVOeVJDeGxRVUZsTEVkQlEyWXNiVVJCUVcxRUxFZEJRMjVFTEdkQ1FVRm5RaXhIUVVOb1FpeEpRVUZKTEVOQlExQXNRMEZCUXp0SFFVTklMRTFCUVUwN08wRkJSVXdzVlVGQlRTd3lRa0ZEU2l4M1JrRkJkMFlzUjBGRGRFWXNhVVJCUVdsRUxFZEJRMnBFTEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkRaaXhKUVVGSkxFTkJRMUFzUTBGQlF6dEhRVU5JTzBOQlEwWTdPMEZCUlUwc1UwRkJVeXhSUVVGUkxFTkJRVU1zV1VGQldTeEZRVUZGTEVkQlFVY3NSVUZCUlRzN1FVRkZNVU1zVFVGQlNTeERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTlNMRlZCUVUwc01rSkJRV01zYlVOQlFXMURMRU5CUVVNc1EwRkJRenRIUVVNeFJEdEJRVU5FTEUxQlFVa3NRMEZCUXl4WlFVRlpMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTzBGQlEzWkRMRlZCUVUwc01rSkJRV01zTWtKQlFUSkNMRWRCUVVjc1QwRkJUeXhaUVVGWkxFTkJRVU1zUTBGQlF6dEhRVU40UlRzN1FVRkZSQ3hqUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4WlFVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRE96czdPMEZCU1d4RUxFdEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNZVUZCWVN4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6czdPMEZCUnpWRExFMUJRVTBzYjBOQlFXOURMRWRCUTNoRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVsQlFVa3NXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdPMEZCUlRGRUxGZEJRVk1zYjBKQlFXOUNMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEZGtRc1VVRkJTU3hQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTzBGQlEyaENMR0ZCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBGQlEyeEVMRlZCUVVrc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU5tTEdWQlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETzA5QlEzWkNPMHRCUTBZN1FVRkRSQ3hYUVVGUExFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE96dEJRVVYwUlN4UlFVRkpMR1ZCUVdVc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVN1FVRkRPVU1zVjBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxPMEZCUTJwQ0xIZENRVUZyUWl4RlFVRkZMRWxCUVVrc1EwRkJReXhyUWtGQmEwSTdTMEZETlVNc1EwRkJReXhEUVVGRE96dEJRVVZJTEZGQlFVa3NUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NRMEZEY0VNc1NVRkJTU3hGUVVOS0xFOUJRVThzUlVGRFVDeFBRVUZQTEVWQlExQXNaVUZCWlN4RFFVTm9RaXhEUVVGRE96dEJRVVZHTEZGQlFVa3NUVUZCVFN4SlFVRkpMRWxCUVVrc1NVRkJTU3hIUVVGSExFTkJRVU1zVDBGQlR5eEZRVUZGTzBGQlEycERMR0ZCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRekZETEU5QlFVOHNSVUZEVUN4WlFVRlpMRU5CUVVNc1pVRkJaU3hGUVVNMVFpeEhRVUZITEVOQlEwb3NRMEZCUXp0QlFVTkdMRmxCUVUwc1IwRkJSeXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzWlVGQlpTeERRVUZETEVOQlFVTTdTMEZEYmtVN1FVRkRSQ3hSUVVGSkxFMUJRVTBzU1VGQlNTeEpRVUZKTEVWQlFVVTdRVUZEYkVJc1ZVRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTzBGQlEyeENMRmxCUVVrc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRMMElzWVVGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU0xUXl4alFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8wRkJRelZDTEd0Q1FVRk5PMWRCUTFBN08wRkJSVVFzWlVGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNSRE8wRkJRMFFzWTBGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VDBGRE0wSTdRVUZEUkN4aFFVRlBMRTFCUVUwc1EwRkJRenRMUVVObUxFMUJRVTA3UVVGRFRDeFpRVUZOTERKQ1FVTktMR05CUVdNc1IwRkRXaXhQUVVGUExFTkJRVU1zU1VGQlNTeEhRVU5hTERCRVFVRXdSQ3hEUVVNM1JDeERRVUZETzB0QlEwZzdSMEZEUmpzN08wRkJSMFFzVFVGQlNTeFRRVUZUTEVkQlFVYzdRVUZEWkN4VlFVRk5MRVZCUVVVc1owSkJRVk1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVN1FVRkRMMElzVlVGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RlFVRkZMRWxCUVVrc1NVRkJTU3hIUVVGSExFTkJRVUVzUVVGQlF5eEZRVUZGTzBGQlF6RkNMR05CUVUwc01rSkJRV01zUjBGQlJ5eEhRVUZITEVsQlFVa3NSMEZCUnl4dFFrRkJiVUlzUjBGQlJ5eEhRVUZITEVWQlFVVTdRVUZETVVRc1lVRkJSeXhGUVVGRkxFZEJRVWM3VTBGRFZDeERRVUZETEVOQlFVTTdUMEZEU2p0QlFVTkVMR0ZCUVU4c1UwRkJVeXhEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkROVU03UVVGRFJDeHJRa0ZCWXl4RlFVRkZMSGRDUVVGVExFMUJRVTBzUlVGQlJTeFpRVUZaTEVWQlFVVTdRVUZETjBNc1ZVRkJTU3hOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMEZCUTJ4RExGVkJRVWtzVFVGQlRTeEpRVUZKTEVsQlFVa3NSVUZCUlR0QlFVTnNRaXhsUVVGUExFMUJRVTBzUTBGQlF6dFBRVU5tTzBGQlEwUXNWVUZCU1N4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRmxCUVZrc1EwRkJReXhGUVVGRk8wRkJRemxFTEdWQlFVOHNUVUZCVFN4RFFVRkRPMDlCUTJZN08wRkJSVVFzVlVGQlNTeHhRMEZCWjBJc1RVRkJUU3hGUVVGRkxGTkJRVk1zUTBGQlF5eHJRa0ZCYTBJc1JVRkJSU3haUVVGWkxFTkJRVU1zUlVGQlJUdEJRVU4yUlN4bFFVRlBMRTFCUVUwc1EwRkJRenRQUVVObU8wRkJRMFFzWVVGQlR5eFRRVUZUTEVOQlFVTTdTMEZEYkVJN1FVRkRSQ3hWUVVGTkxFVkJRVVVzWjBKQlFWTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1JVRkJSVHRCUVVNM1FpeFZRVUZOTEVkQlFVY3NSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRE8wRkJRekZDTEZkQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1FVRkROVUlzV1VGQlNTeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBGQlEzQkZMRmxCUVVrc1RVRkJUU3hKUVVGSkxFbEJRVWtzUlVGQlJUdEJRVU5zUWl4cFFrRkJUeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkRlRUk3VDBGRFJqdExRVU5HTzBGQlEwUXNWVUZCVFN4RlFVRkZMR2RDUVVGVExFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEYWtNc1lVRkJUeXhQUVVGUExFOUJRVThzUzBGQlN5eFZRVUZWTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdTMEZEZUVVN08wRkJSVVFzYjBKQlFXZENMRVZCUVVVc1MwRkJTeXhEUVVGRExHZENRVUZuUWp0QlFVTjRReXhwUWtGQllTeEZRVUZGTEc5Q1FVRnZRanM3UVVGRmJrTXNUVUZCUlN4RlFVRkZMRmxCUVZNc1EwRkJReXhGUVVGRk8wRkJRMlFzVlVGQlNTeEhRVUZITEVkQlFVY3NXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRekZDTEZOQlFVY3NRMEZCUXl4VFFVRlRMRWRCUVVjc1dVRkJXU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVTjJReXhoUVVGUExFZEJRVWNzUTBGQlF6dExRVU5hT3p0QlFVVkVMRmxCUVZFc1JVRkJSU3hGUVVGRk8wRkJRMW9zVjBGQlR5eEZRVUZGTEdsQ1FVRlRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzYlVKQlFXMUNMRVZCUVVVc1YwRkJWeXhGUVVGRkxFMUJRVTBzUlVGQlJUdEJRVU51UlN4VlFVRkpMR05CUVdNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0VlFVTnVReXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOc1FpeFZRVUZKTEVsQlFVa3NTVUZCU1N4TlFVRk5MRWxCUVVrc1YwRkJWeXhKUVVGSkxHMUNRVUZ0UWl4RlFVRkZPMEZCUTNoRUxITkNRVUZqTEVkQlFVY3NWMEZCVnl4RFFVTXhRaXhKUVVGSkxFVkJRMG9zUTBGQlF5eEZRVU5FTEVWQlFVVXNSVUZEUml4SlFVRkpMRVZCUTBvc2JVSkJRVzFDTEVWQlEyNUNMRmRCUVZjc1JVRkRXQ3hOUVVGTkxFTkJRMUFzUTBGQlF6dFBRVU5JTEUxQlFVMHNTVUZCU1N4RFFVRkRMR05CUVdNc1JVRkJSVHRCUVVNeFFpeHpRa0ZCWXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdUMEZET1VRN1FVRkRSQ3hoUVVGUExHTkJRV01zUTBGQlF6dExRVU4yUWpzN1FVRkZSQ3hSUVVGSkxFVkJRVVVzWTBGQlV5eExRVUZMTEVWQlFVVXNTMEZCU3l4RlFVRkZPMEZCUXpOQ0xHRkJRVThzUzBGQlN5eEpRVUZKTEV0QlFVc3NSVUZCUlN4RlFVRkZPMEZCUTNaQ0xHRkJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRPMDlCUTNaQ08wRkJRMFFzWVVGQlR5eExRVUZMTEVOQlFVTTdTMEZEWkR0QlFVTkVMR2xDUVVGaExFVkJRVVVzZFVKQlFWTXNTMEZCU3l4RlFVRkZMRTFCUVUwc1JVRkJSVHRCUVVOeVF5eFZRVUZKTEVkQlFVY3NSMEZCUnl4TFFVRkxMRWxCUVVrc1RVRkJUU3hEUVVGRE96dEJRVVV4UWl4VlFVRkpMRXRCUVVzc1NVRkJTU3hOUVVGTkxFbEJRVWtzUzBGQlN5eExRVUZMTEUxQlFVMHNSVUZCUlR0QlFVTjJReXhYUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRVZCUVVVc1RVRkJUU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzA5QlEzWkRPenRCUVVWRUxHRkJRVThzUjBGQlJ5eERRVUZETzB0QlExbzdPMEZCUlVRc1pVRkJWeXhGUVVGRkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRPenRCUVVVMVFpeFJRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSk8wRkJRMnBDTEdkQ1FVRlpMRVZCUVVVc1dVRkJXU3hEUVVGRExGRkJRVkU3UjBGRGNFTXNRMEZCUXpzN1FVRkZSaXhYUVVGVExFZEJRVWNzUTBGQlF5eFBRVUZQTEVWQlFXZENPMUZCUVdRc1QwRkJUeXg1UkVGQlJ5eEZRVUZGT3p0QlFVTm9ReXhSUVVGSkxFbEJRVWtzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRPenRCUVVWNFFpeFBRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8wRkJRM0JDTEZGQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhKUVVGSkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVTdRVUZETlVNc1ZVRkJTU3hIUVVGSExGRkJRVkVzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkRhRU03UVVGRFJDeFJRVUZKTEUxQlFVMHNXVUZCUVR0UlFVTlNMRmRCUVZjc1IwRkJSeXhaUVVGWkxFTkJRVU1zWTBGQll5eEhRVUZITEVWQlFVVXNSMEZCUnl4VFFVRlRMRU5CUVVNN1FVRkROMFFzVVVGQlNTeFpRVUZaTEVOQlFVTXNVMEZCVXl4RlFVRkZPMEZCUXpGQ0xGVkJRVWtzVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlR0QlFVTnNRaXhqUVVGTkxFZEJRMG9zVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRM2hDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZEYUVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF6dFBRVU4wUWl4TlFVRk5PMEZCUTB3c1kwRkJUU3hIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdUMEZEY0VJN1MwRkRSanM3UVVGRlJDeGhRVUZUTEVsQlFVa3NRMEZCUXl4UFFVRlBMR2RDUVVGblFqdEJRVU51UXl4aFFVTkZMRVZCUVVVc1IwRkRSaXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVU5tTEZOQlFWTXNSVUZEVkN4UFFVRlBMRVZCUTFBc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGRGFrSXNVMEZCVXl4RFFVRkRMRkZCUVZFc1JVRkRiRUlzU1VGQlNTeEZRVU5LTEZkQlFWY3NSVUZEV0N4TlFVRk5MRU5CUTFBc1EwRkRSRHRMUVVOSU96dEJRVVZFTEZGQlFVa3NSMEZCUnl4cFFrRkJhVUlzUTBGRGRFSXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkRha0lzU1VGQlNTeEZRVU5LTEZOQlFWTXNSVUZEVkN4UFFVRlBMRU5CUVVNc1RVRkJUU3hKUVVGSkxFVkJRVVVzUlVGRGNFSXNTVUZCU1N4RlFVTktMRmRCUVZjc1EwRkRXaXhEUVVGRE8wRkJRMFlzVjBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wZEJReTlDT3p0QlFVVkVMRXRCUVVjc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZET3p0QlFVVnFRaXhMUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEZWQlFWTXNUMEZCVHl4RlFVRkZPMEZCUXpkQ0xGRkJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZPMEZCUTNCQ0xGVkJRVWtzWVVGQllTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8wRkJRMjVGTEhGRFFVRXJRaXhEUVVGRExHRkJRV0VzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXp0QlFVTXhSQ3hsUVVGVExFTkJRVU1zVDBGQlR5eEhRVUZITEdGQlFXRXNRMEZCUXpzN1FVRkZiRU1zVlVGQlNTeFpRVUZaTEVOQlFVTXNWVUZCVlN4RlFVRkZPenRCUVVVelFpeHBRa0ZCVXl4RFFVRkRMRkZCUVZFc1IwRkJSeXhUUVVGVExFTkJRVU1zWVVGQllTeERRVU14UXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVOb1FpeEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVTmlMRU5CUVVNN1QwRkRTRHRCUVVORUxGVkJRVWtzV1VGQldTeERRVUZETEZWQlFWVXNTVUZCU1N4WlFVRlpMRU5CUVVNc1lVRkJZU3hGUVVGRk8wRkJRM3BFTEdsQ1FVRlRMRU5CUVVNc1ZVRkJWU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlEycERMRVZCUVVVc1JVRkRSaXhIUVVGSExFTkJRVU1zVlVGQlZTeEZRVU5rTEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUTI1Q0xFTkJRVU03VDBGRFNEczdRVUZGUkN4bFFVRlRMRU5CUVVNc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU55UWl4bFFVRlRMRU5CUVVNc2EwSkJRV3RDTEVkQlFVY3NPRU5CUVhsQ0xFOUJRVThzUTBGQlF5eERRVUZET3p0QlFVVnFSU3hWUVVGSkxHMUNRVUZ0UWl4SFFVTnlRaXhQUVVGUExFTkJRVU1zZVVKQlFYbENMRWxCUTJwRExHOURRVUZ2UXl4RFFVRkRPMEZCUTNaRExHbERRVUZyUWl4VFFVRlRMRVZCUVVVc1pVRkJaU3hGUVVGRkxHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNN1FVRkRia1VzYVVOQlFXdENMRk5CUVZNc1JVRkJSU3h2UWtGQmIwSXNSVUZCUlN4dFFrRkJiVUlzUTBGQlF5eERRVUZETzB0QlEzcEZMRTFCUVUwN1FVRkRUQ3hsUVVGVExFTkJRVU1zYTBKQlFXdENMRWRCUVVjc1QwRkJUeXhEUVVGRExHdENRVUZyUWl4RFFVRkRPMEZCUXpGRUxHVkJRVk1zUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJRenRCUVVOd1F5eGxRVUZUTEVOQlFVTXNVVUZCVVN4SFFVRkhMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU03UVVGRGRFTXNaVUZCVXl4RFFVRkRMRlZCUVZVc1IwRkJSeXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETzBGQlF6RkRMR1ZCUVZNc1EwRkJReXhMUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXp0TFFVTnFRenRIUVVOR0xFTkJRVU03TzBGQlJVWXNTMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhWUVVGVExFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNWMEZCVnl4RlFVRkZMRTFCUVUwc1JVRkJSVHRCUVVOc1JDeFJRVUZKTEZsQlFWa3NRMEZCUXl4alFVRmpMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVU3UVVGREwwTXNXVUZCVFN3eVFrRkJZeXgzUWtGQmQwSXNRMEZCUXl4RFFVRkRPMHRCUXk5RE8wRkJRMFFzVVVGQlNTeFpRVUZaTEVOQlFVTXNVMEZCVXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8wRkJRM0pETEZsQlFVMHNNa0pCUVdNc2VVSkJRWGxDTEVOQlFVTXNRMEZCUXp0TFFVTm9SRHM3UVVGRlJDeFhRVUZQTEZkQlFWY3NRMEZEYUVJc1UwRkJVeXhGUVVOVUxFTkJRVU1zUlVGRFJDeFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUTJZc1NVRkJTU3hGUVVOS0xFTkJRVU1zUlVGRFJDeFhRVUZYTEVWQlExZ3NUVUZCVFN4RFFVTlFMRU5CUVVNN1IwRkRTQ3hEUVVGRE8wRkJRMFlzVTBGQlR5eEhRVUZITEVOQlFVTTdRMEZEV2pzN1FVRkZUU3hUUVVGVExGZEJRVmNzUTBGRGVrSXNVMEZCVXl4RlFVTlVMRU5CUVVNc1JVRkRSQ3hGUVVGRkxFVkJRMFlzU1VGQlNTeEZRVU5LTEcxQ1FVRnRRaXhGUVVOdVFpeFhRVUZYTEVWQlExZ3NUVUZCVFN4RlFVTk9PMEZCUTBFc1YwRkJVeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZuUWp0UlFVRmtMRTlCUVU4c2VVUkJRVWNzUlVGQlJUczdRVUZEYWtNc1VVRkJTU3hoUVVGaExFZEJRVWNzVFVGQlRTeERRVUZETzBGQlF6TkNMRkZCUTBVc1RVRkJUU3hKUVVOT0xFOUJRVThzU1VGQlNTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUTNCQ0xFVkJRVVVzVDBGQlR5eExRVUZMTEZOQlFWTXNRMEZCUXl4WFFVRlhMRWxCUVVrc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NRMEZCUVN4QlFVRkRMRVZCUXpGRU8wRkJRMEVzYlVKQlFXRXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0TFFVTXhRenM3UVVGRlJDeFhRVUZQTEVWQlFVVXNRMEZEVUN4VFFVRlRMRVZCUTFRc1QwRkJUeXhGUVVOUUxGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlEycENMRk5CUVZNc1EwRkJReXhSUVVGUkxFVkJRMnhDTEU5QlFVOHNRMEZCUXl4SlFVRkpMRWxCUVVrc1NVRkJTU3hGUVVOd1FpeFhRVUZYTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVTjRSQ3hoUVVGaExFTkJRMlFzUTBGQlF6dEhRVU5JT3p0QlFVVkVMRTFCUVVrc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1NVRkJTU3hGUVVGRkxGTkJRVk1zUlVGQlJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RlFVRkZMRmRCUVZjc1EwRkJReXhEUVVGRE96dEJRVVY2UlN4TlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU5xUWl4TlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVONFF5eE5RVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRzFDUVVGdFFpeEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVTTFReXhUUVVGUExFbEJRVWtzUTBGQlF6dERRVU5pT3pzN096czdRVUZMVFN4VFFVRlRMR05CUVdNc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlR0QlFVTjRSQ3hOUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzBGQlExb3NVVUZCU1N4UFFVRlBMRU5CUVVNc1NVRkJTU3hMUVVGTExHZENRVUZuUWl4RlFVRkZPMEZCUTNKRExHRkJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRE8wdEJRM3BETEUxQlFVMDdRVUZEVEN4aFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkRNVU03UjBGRFJpeE5RVUZOTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlRzN1FVRkZla01zVjBGQlR5eERRVUZETEVsQlFVa3NSMEZCUnl4UFFVRlBMRU5CUVVNN1FVRkRka0lzVjBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03UjBGRGNrTTdRVUZEUkN4VFFVRlBMRTlCUVU4c1EwRkJRenREUVVOb1FqczdRVUZGVFN4VFFVRlRMR0ZCUVdFc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlRzN1FVRkZka1FzVFVGQlRTeHRRa0ZCYlVJc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeEpRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03UVVGRE1VVXNVMEZCVHl4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRGRrSXNUVUZCU1N4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRk8wRkJRMllzVjBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dEhRVU4yUlRzN1FVRkZSQ3hOUVVGSkxGbEJRVmtzV1VGQlFTeERRVUZETzBGQlEycENMRTFCUVVrc1QwRkJUeXhEUVVGRExFVkJRVVVzU1VGQlNTeFBRVUZQTEVOQlFVTXNSVUZCUlN4TFFVRkxMRWxCUVVrc1JVRkJSVHM3UVVGRGNrTXNZVUZCVHl4RFFVRkRMRWxCUVVrc1IwRkJSeXhyUWtGQldTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN08wRkJSWHBETEZWQlFVa3NSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU03UVVGRGNFSXNhMEpCUVZrc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4SFFVRkhMRk5CUVZNc2JVSkJRVzFDTEVOQlEzcEZMRTlCUVU4c1JVRkZVRHRaUVVSQkxFOUJRVThzZVVSQlFVY3NSVUZCUlRzN096dEJRVWxhTEdWQlFVOHNRMEZCUXl4SlFVRkpMRWRCUVVjc2EwSkJRVmtzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTNwRExHVkJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRWRCUVVjc2JVSkJRVzFDTEVOQlFVTTdRVUZEY0VRc1pVRkJUeXhGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMDlCUXpkQ0xFTkJRVU03UVVGRFJpeFZRVUZKTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1FVRkRaaXhsUVVGUExFTkJRVU1zVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wOUJRM0JGT3p0SFFVTkdPenRCUVVWRUxFMUJRVWtzVDBGQlR5eExRVUZMTEZOQlFWTXNTVUZCU1N4WlFVRlpMRVZCUVVVN1FVRkRla01zVjBGQlR5eEhRVUZITEZsQlFWa3NRMEZCUXp0SFFVTjRRanM3UVVGRlJDeE5RVUZKTEU5QlFVOHNTMEZCU3l4VFFVRlRMRVZCUVVVN1FVRkRla0lzVlVGQlRTd3lRa0ZCWXl4alFVRmpMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUjBGQlJ5eHhRa0ZCY1VJc1EwRkJReXhEUVVGRE8wZEJRelZGTEUxQlFVMHNTVUZCU1N4UFFVRlBMRmxCUVZrc1VVRkJVU3hGUVVGRk8wRkJRM1JETEZkQlFVOHNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dEhRVU5zUXp0RFFVTkdPenRCUVVWTkxGTkJRVk1zU1VGQlNTeEhRVUZITzBGQlEzSkNMRk5CUVU4c1JVRkJSU3hEUVVGRE8wTkJRMWc3TzBGQlJVUXNVMEZCVXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUlVGQlJUdEJRVU12UWl4TlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVVzVFVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUVN4QlFVRkRMRVZCUVVVN1FVRkRPVUlzVVVGQlNTeEhRVUZITEVsQlFVa3NSMEZCUnl4clFrRkJXU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEY2tNc1VVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eFBRVUZQTEVOQlFVTTdSMEZEY2tJN1FVRkRSQ3hUUVVGUExFbEJRVWtzUTBGQlF6dERRVU5pT3p0QlFVVkVMRk5CUVZNc2FVSkJRV2xDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeEZRVUZGTEVsQlFVa3NSVUZCUlN4WFFVRlhMRVZCUVVVN1FVRkRla1VzVFVGQlNTeEZRVUZGTEVOQlFVTXNVMEZCVXl4RlFVRkZPMEZCUTJoQ0xGRkJRVWtzUzBGQlN5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTm1MRkZCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVU1zVTBGQlV5eERRVU5xUWl4SlFVRkpMRVZCUTBvc1MwRkJTeXhGUVVOTUxGTkJRVk1zUlVGRFZDeE5RVUZOTEVsQlFVa3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVOdVFpeEpRVUZKTEVWQlEwb3NWMEZCVnl4RlFVTllMRTFCUVUwc1EwRkRVQ3hEUVVGRE8wRkJRMFlzVTBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03UjBGRE0wSTdRVUZEUkN4VFFVRlBMRWxCUVVrc1EwRkJRenREUVVOaU96dEJRVVZFTEZOQlFWTXNLMEpCUVN0Q0xFTkJRVU1zWVVGQllTeEZRVUZGTEZOQlFWTXNSVUZCUlR0QlFVTnFSU3hSUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGQkxGVkJRVlVzUlVGQlNUdEJRVU12UXl4UlFVRkpMRTFCUVUwc1IwRkJSeXhoUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdRVUZEZGtNc2FVSkJRV0VzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4M1FrRkJkMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1IwRkRla1VzUTBGQlF5eERRVUZETzBOQlEwbzdPMEZCUlVRc1UwRkJVeXgzUWtGQmQwSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJVeXhGUVVGRk8wRkJRMjVFTEUxQlFVMHNZMEZCWXl4SFFVRkhMRk5CUVZNc1EwRkJReXhqUVVGakxFTkJRVU03UVVGRGFFUXNVMEZCVHl3clFrRkJWeXhOUVVGTkxFVkJRVVVzVlVGQlFTeFBRVUZQTEVWQlFVazdRVUZEYmtNc1YwRkJUeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNZMEZCWXl4RlFVRmtMR05CUVdNc1JVRkJSU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBkQlEyeEVMRU5CUVVNc1EwRkJRenREUVVOS0lpd2labWxzWlNJNkluSjFiblJwYldVdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdLaUJoY3lCVmRHbHNjeUJtY205dElDY3VMM1YwYVd4ekp6dGNibWx0Y0c5eWRDQkZlR05sY0hScGIyNGdabkp2YlNBbkxpOWxlR05sY0hScGIyNG5PMXh1YVcxd2IzSjBJSHRjYmlBZ1EwOU5VRWxNUlZKZlVrVldTVk5KVDA0c1hHNGdJR055WldGMFpVWnlZVzFsTEZ4dUlDQk1RVk5VWDBOUFRWQkJWRWxDVEVWZlEwOU5VRWxNUlZKZlVrVldTVk5KVDA0c1hHNGdJRkpGVmtsVFNVOU9YME5JUVU1SFJWTmNibjBnWm5KdmJTQW5MaTlpWVhObEp6dGNibWx0Y0c5eWRDQjdJRzF2ZG1WSVpXeHdaWEpVYjBodmIydHpJSDBnWm5KdmJTQW5MaTlvWld4d1pYSnpKenRjYm1sdGNHOXlkQ0I3SUhkeVlYQklaV3h3WlhJZ2ZTQm1jbTl0SUNjdUwybHVkR1Z5Ym1Gc0wzZHlZWEJJWld4d1pYSW5PMXh1YVcxd2IzSjBJSHRjYmlBZ1kzSmxZWFJsVUhKdmRHOUJZMk5sYzNORGIyNTBjbTlzTEZ4dUlDQnlaWE4xYkhSSmMwRnNiRzkzWldSY2JuMGdabkp2YlNBbkxpOXBiblJsY201aGJDOXdjbTkwYnkxaFkyTmxjM01uTzF4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1kyaGxZMnRTWlhacGMybHZiaWhqYjIxd2FXeGxja2x1Wm04cElIdGNiaUFnWTI5dWMzUWdZMjl0Y0dsc1pYSlNaWFpwYzJsdmJpQTlJQ2hqYjIxd2FXeGxja2x1Wm04Z0ppWWdZMjl0Y0dsc1pYSkpibVp2V3pCZEtTQjhmQ0F4TEZ4dUlDQWdJR04xY25KbGJuUlNaWFpwYzJsdmJpQTlJRU5QVFZCSlRFVlNYMUpGVmtsVFNVOU9PMXh1WEc0Z0lHbG1JQ2hjYmlBZ0lDQmpiMjF3YVd4bGNsSmxkbWx6YVc5dUlENDlJRXhCVTFSZlEwOU5VRUZVU1VKTVJWOURUMDFRU1V4RlVsOVNSVlpKVTBsUFRpQW1KbHh1SUNBZ0lHTnZiWEJwYkdWeVVtVjJhWE5wYjI0Z1BEMGdRMDlOVUVsTVJWSmZVa1ZXU1ZOSlQwNWNiaUFnS1NCN1hHNGdJQ0FnY21WMGRYSnVPMXh1SUNCOVhHNWNiaUFnYVdZZ0tHTnZiWEJwYkdWeVVtVjJhWE5wYjI0Z1BDQk1RVk5VWDBOUFRWQkJWRWxDVEVWZlEwOU5VRWxNUlZKZlVrVldTVk5KVDA0cElIdGNiaUFnSUNCamIyNXpkQ0J5ZFc1MGFXMWxWbVZ5YzJsdmJuTWdQU0JTUlZaSlUwbFBUbDlEU0VGT1IwVlRXMk4xY25KbGJuUlNaWFpwYzJsdmJsMHNYRzRnSUNBZ0lDQmpiMjF3YVd4bGNsWmxjbk5wYjI1eklEMGdVa1ZXU1ZOSlQwNWZRMGhCVGtkRlUxdGpiMjF3YVd4bGNsSmxkbWx6YVc5dVhUdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYaGpaWEIwYVc5dUtGeHVJQ0FnSUNBZ0oxUmxiWEJzWVhSbElIZGhjeUJ3Y21WamIyMXdhV3hsWkNCM2FYUm9JR0Z1SUc5c1pHVnlJSFpsY25OcGIyNGdiMllnU0dGdVpHeGxZbUZ5Y3lCMGFHRnVJSFJvWlNCamRYSnlaVzUwSUhKMWJuUnBiV1V1SUNjZ0sxeHVJQ0FnSUNBZ0lDQW5VR3hsWVhObElIVndaR0YwWlNCNWIzVnlJSEJ5WldOdmJYQnBiR1Z5SUhSdklHRWdibVYzWlhJZ2RtVnljMmx2YmlBb0p5QXJYRzRnSUNBZ0lDQWdJSEoxYm5ScGJXVldaWEp6YVc5dWN5QXJYRzRnSUNBZ0lDQWdJQ2NwSUc5eUlHUnZkMjVuY21Ga1pTQjViM1Z5SUhKMWJuUnBiV1VnZEc4Z1lXNGdiMnhrWlhJZ2RtVnljMmx2YmlBb0p5QXJYRzRnSUNBZ0lDQWdJR052YlhCcGJHVnlWbVZ5YzJsdmJuTWdLMXh1SUNBZ0lDQWdJQ0FuS1M0blhHNGdJQ0FnS1R0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNBdkx5QlZjMlVnZEdobElHVnRZbVZrWkdWa0lIWmxjbk5wYjI0Z2FXNW1ieUJ6YVc1alpTQjBhR1VnY25WdWRHbHRaU0JrYjJWemJpZDBJR3R1YjNjZ1lXSnZkWFFnZEdocGN5QnlaWFpwYzJsdmJpQjVaWFJjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWGhqWlhCMGFXOXVLRnh1SUNBZ0lDQWdKMVJsYlhCc1lYUmxJSGRoY3lCd2NtVmpiMjF3YVd4bFpDQjNhWFJvSUdFZ2JtVjNaWElnZG1WeWMybHZiaUJ2WmlCSVlXNWtiR1ZpWVhKeklIUm9ZVzRnZEdobElHTjFjbkpsYm5RZ2NuVnVkR2x0WlM0Z0p5QXJYRzRnSUNBZ0lDQWdJQ2RRYkdWaGMyVWdkWEJrWVhSbElIbHZkWElnY25WdWRHbHRaU0IwYnlCaElHNWxkMlZ5SUhabGNuTnBiMjRnS0NjZ0sxeHVJQ0FnSUNBZ0lDQmpiMjF3YVd4bGNrbHVabTliTVYwZ0sxeHVJQ0FnSUNBZ0lDQW5LUzRuWEc0Z0lDQWdLVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnZEdWdGNHeGhkR1VvZEdWdGNHeGhkR1ZUY0dWakxDQmxibllwSUh0Y2JpQWdMeW9nYVhOMFlXNWlkV3dnYVdkdWIzSmxJRzVsZUhRZ0tpOWNiaUFnYVdZZ0tDRmxibllwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0NkT2J5QmxiblpwY205dWJXVnVkQ0J3WVhOelpXUWdkRzhnZEdWdGNHeGhkR1VuS1R0Y2JpQWdmVnh1SUNCcFppQW9JWFJsYlhCc1lYUmxVM0JsWXlCOGZDQWhkR1Z0Y0d4aGRHVlRjR1ZqTG0xaGFXNHBJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWGhqWlhCMGFXOXVLQ2RWYm10dWIzZHVJSFJsYlhCc1lYUmxJRzlpYW1WamREb2dKeUFySUhSNWNHVnZaaUIwWlcxd2JHRjBaVk53WldNcE8xeHVJQ0I5WEc1Y2JpQWdkR1Z0Y0d4aGRHVlRjR1ZqTG0xaGFXNHVaR1ZqYjNKaGRHOXlJRDBnZEdWdGNHeGhkR1ZUY0dWakxtMWhhVzVmWkR0Y2JseHVJQ0F2THlCT2IzUmxPaUJWYzJsdVp5Qmxibll1VmswZ2NtVm1aWEpsYm1ObGN5QnlZWFJvWlhJZ2RHaGhiaUJzYjJOaGJDQjJZWElnY21WbVpYSmxibU5sY3lCMGFISnZkV2RvYjNWMElIUm9hWE1nYzJWamRHbHZiaUIwYnlCaGJHeHZkMXh1SUNBdkx5Qm1iM0lnWlhoMFpYSnVZV3dnZFhObGNuTWdkRzhnYjNabGNuSnBaR1VnZEdobGMyVWdZWE1nY0hObGRXUnZMWE4xY0hCdmNuUmxaQ0JCVUVsekxseHVJQ0JsYm5ZdVZrMHVZMmhsWTJ0U1pYWnBjMmx2YmloMFpXMXdiR0YwWlZOd1pXTXVZMjl0Y0dsc1pYSXBPMXh1WEc0Z0lDOHZJR0poWTJ0M1lYSmtjeUJqYjIxd1lYUnBZbWxzYVhSNUlHWnZjaUJ3Y21WamIyMXdhV3hsWkNCMFpXMXdiR0YwWlhNZ2QybDBhQ0JqYjIxd2FXeGxjaTEyWlhKemFXOXVJRGNnS0R3MExqTXVNQ2xjYmlBZ1kyOXVjM1FnZEdWdGNHeGhkR1ZYWVhOUWNtVmpiMjF3YVd4bFpGZHBkR2hEYjIxd2FXeGxjbFkzSUQxY2JpQWdJQ0IwWlcxd2JHRjBaVk53WldNdVkyOXRjR2xzWlhJZ0ppWWdkR1Z0Y0d4aGRHVlRjR1ZqTG1OdmJYQnBiR1Z5V3pCZElEMDlQU0EzTzF4dVhHNGdJR1oxYm1OMGFXOXVJR2x1ZG05clpWQmhjblJwWVd4WGNtRndjR1Z5S0hCaGNuUnBZV3dzSUdOdmJuUmxlSFFzSUc5d2RHbHZibk1wSUh0Y2JpQWdJQ0JwWmlBb2IzQjBhVzl1Y3k1b1lYTm9LU0I3WEc0Z0lDQWdJQ0JqYjI1MFpYaDBJRDBnVlhScGJITXVaWGgwWlc1a0tIdDlMQ0JqYjI1MFpYaDBMQ0J2Y0hScGIyNXpMbWhoYzJncE8xeHVJQ0FnSUNBZ2FXWWdLRzl3ZEdsdmJuTXVhV1J6S1NCN1hHNGdJQ0FnSUNBZ0lHOXdkR2x2Ym5NdWFXUnpXekJkSUQwZ2RISjFaVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2NHRnlkR2xoYkNBOUlHVnVkaTVXVFM1eVpYTnZiSFpsVUdGeWRHbGhiQzVqWVd4c0tIUm9hWE1zSUhCaGNuUnBZV3dzSUdOdmJuUmxlSFFzSUc5d2RHbHZibk1wTzF4dVhHNGdJQ0FnYkdWMElHVjRkR1Z1WkdWa1QzQjBhVzl1Y3lBOUlGVjBhV3h6TG1WNGRHVnVaQ2g3ZlN3Z2IzQjBhVzl1Y3l3Z2UxeHVJQ0FnSUNBZ2FHOXZhM002SUhSb2FYTXVhRzl2YTNNc1hHNGdJQ0FnSUNCd2NtOTBiMEZqWTJWemMwTnZiblJ5YjJ3NklIUm9hWE11Y0hKdmRHOUJZMk5sYzNORGIyNTBjbTlzWEc0Z0lDQWdmU2s3WEc1Y2JpQWdJQ0JzWlhRZ2NtVnpkV3gwSUQwZ1pXNTJMbFpOTG1sdWRtOXJaVkJoY25ScFlXd3VZMkZzYkNoY2JpQWdJQ0FnSUhSb2FYTXNYRzRnSUNBZ0lDQndZWEowYVdGc0xGeHVJQ0FnSUNBZ1kyOXVkR1Y0ZEN4Y2JpQWdJQ0FnSUdWNGRHVnVaR1ZrVDNCMGFXOXVjMXh1SUNBZ0lDazdYRzVjYmlBZ0lDQnBaaUFvY21WemRXeDBJRDA5SUc1MWJHd2dKaVlnWlc1MkxtTnZiWEJwYkdVcElIdGNiaUFnSUNBZ0lHOXdkR2x2Ym5NdWNHRnlkR2xoYkhOYmIzQjBhVzl1Y3k1dVlXMWxYU0E5SUdWdWRpNWpiMjF3YVd4bEtGeHVJQ0FnSUNBZ0lDQndZWEowYVdGc0xGeHVJQ0FnSUNBZ0lDQjBaVzF3YkdGMFpWTndaV011WTI5dGNHbHNaWEpQY0hScGIyNXpMRnh1SUNBZ0lDQWdJQ0JsYm5aY2JpQWdJQ0FnSUNrN1hHNGdJQ0FnSUNCeVpYTjFiSFFnUFNCdmNIUnBiMjV6TG5CaGNuUnBZV3h6VzI5d2RHbHZibk11Ym1GdFpWMG9ZMjl1ZEdWNGRDd2daWGgwWlc1a1pXUlBjSFJwYjI1ektUdGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tISmxjM1ZzZENBaFBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNCcFppQW9iM0IwYVc5dWN5NXBibVJsYm5RcElIdGNiaUFnSUNBZ0lDQWdiR1YwSUd4cGJtVnpJRDBnY21WemRXeDBMbk53YkdsMEtDZGNYRzRuS1R0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREFzSUd3Z1BTQnNhVzVsY3k1c1pXNW5kR2c3SUdrZ1BDQnNPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb0lXeHBibVZ6VzJsZElDWW1JR2tnS3lBeElEMDlQU0JzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQnNhVzVsYzF0cFhTQTlJRzl3ZEdsdmJuTXVhVzVrWlc1MElDc2diR2x1WlhOYmFWMDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WemRXeDBJRDBnYkdsdVpYTXVhbTlwYmlnblhGeHVKeWs3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdjbVZ6ZFd4ME8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0Z4dUlDQWdJQ0FnSUNBblZHaGxJSEJoY25ScFlXd2dKeUFyWEc0Z0lDQWdJQ0FnSUNBZ2IzQjBhVzl1Y3k1dVlXMWxJQ3RjYmlBZ0lDQWdJQ0FnSUNBbklHTnZkV3hrSUc1dmRDQmlaU0JqYjIxd2FXeGxaQ0IzYUdWdUlISjFibTVwYm1jZ2FXNGdjblZ1ZEdsdFpTMXZibXg1SUcxdlpHVW5YRzRnSUNBZ0lDQXBPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzh2SUVwMWMzUWdZV1JrSUhkaGRHVnlYRzRnSUd4bGRDQmpiMjUwWVdsdVpYSWdQU0I3WEc0Z0lDQWdjM1J5YVdOME9pQm1kVzVqZEdsdmJpaHZZbW9zSUc1aGJXVXNJR3h2WXlrZ2UxeHVJQ0FnSUNBZ2FXWWdLQ0Z2WW1vZ2ZId2dJU2h1WVcxbElHbHVJRzlpYWlrcElIdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVY0WTJWd2RHbHZiaWduWENJbklDc2dibUZ0WlNBcklDZGNJaUJ1YjNRZ1pHVm1hVzVsWkNCcGJpQW5JQ3NnYjJKcUxDQjdYRzRnSUNBZ0lDQWdJQ0FnYkc5ak9pQnNiMk5jYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCeVpYUjFjbTRnWTI5dWRHRnBibVZ5TG14dmIydDFjRkJ5YjNCbGNuUjVLRzlpYWl3Z2JtRnRaU2s3WEc0Z0lDQWdmU3hjYmlBZ0lDQnNiMjlyZFhCUWNtOXdaWEowZVRvZ1puVnVZM1JwYjI0b2NHRnlaVzUwTENCd2NtOXdaWEowZVU1aGJXVXBJSHRjYmlBZ0lDQWdJR3hsZENCeVpYTjFiSFFnUFNCd1lYSmxiblJiY0hKdmNHVnlkSGxPWVcxbFhUdGNiaUFnSUNBZ0lHbG1JQ2h5WlhOMWJIUWdQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjbVZ6ZFd4ME8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2FXWWdLRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h3WVhKbGJuUXNJSEJ5YjNCbGNuUjVUbUZ0WlNrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISmxjM1ZzZER0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2FXWWdLSEpsYzNWc2RFbHpRV3hzYjNkbFpDaHlaWE4xYkhRc0lHTnZiblJoYVc1bGNpNXdjbTkwYjBGalkyVnpjME52Ym5SeWIyd3NJSEJ5YjNCbGNuUjVUbUZ0WlNrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISmxjM1ZzZER0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhKbGRIVnliaUIxYm1SbFptbHVaV1E3WEc0Z0lDQWdmU3hjYmlBZ0lDQnNiMjlyZFhBNklHWjFibU4wYVc5dUtHUmxjSFJvY3l3Z2JtRnRaU2tnZTF4dUlDQWdJQ0FnWTI5dWMzUWdiR1Z1SUQwZ1pHVndkR2h6TG14bGJtZDBhRHRjYmlBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYkdWdU95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJSEpsYzNWc2RDQTlJR1JsY0hSb2MxdHBYU0FtSmlCamIyNTBZV2x1WlhJdWJHOXZhM1Z3VUhKdmNHVnlkSGtvWkdWd2RHaHpXMmxkTENCdVlXMWxLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tISmxjM1ZzZENBaFBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHUmxjSFJvYzF0cFhWdHVZVzFsWFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNGdJQ0FnYkdGdFltUmhPaUJtZFc1amRHbHZiaWhqZFhKeVpXNTBMQ0JqYjI1MFpYaDBLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlHTjFjbkpsYm5RZ1BUMDlJQ2RtZFc1amRHbHZiaWNnUHlCamRYSnlaVzUwTG1OaGJHd29ZMjl1ZEdWNGRDa2dPaUJqZFhKeVpXNTBPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmxjMk5oY0dWRmVIQnlaWE56YVc5dU9pQlZkR2xzY3k1bGMyTmhjR1ZGZUhCeVpYTnphVzl1TEZ4dUlDQWdJR2x1ZG05clpWQmhjblJwWVd3NklHbHVkbTlyWlZCaGNuUnBZV3hYY21Gd2NHVnlMRnh1WEc0Z0lDQWdabTQ2SUdaMWJtTjBhVzl1S0drcElIdGNiaUFnSUNBZ0lHeGxkQ0J5WlhRZ1BTQjBaVzF3YkdGMFpWTndaV05iYVYwN1hHNGdJQ0FnSUNCeVpYUXVaR1ZqYjNKaGRHOXlJRDBnZEdWdGNHeGhkR1ZUY0dWalcya2dLeUFuWDJRblhUdGNiaUFnSUNBZ0lISmxkSFZ5YmlCeVpYUTdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lIQnliMmR5WVcxek9pQmJYU3hjYmlBZ0lDQndjbTluY21GdE9pQm1kVzVqZEdsdmJpaHBMQ0JrWVhSaExDQmtaV05zWVhKbFpFSnNiMk5yVUdGeVlXMXpMQ0JpYkc5amExQmhjbUZ0Y3l3Z1pHVndkR2h6S1NCN1hHNGdJQ0FnSUNCc1pYUWdjSEp2WjNKaGJWZHlZWEJ3WlhJZ1BTQjBhR2x6TG5CeWIyZHlZVzF6VzJsZExGeHVJQ0FnSUNBZ0lDQm1iaUE5SUhSb2FYTXVabTRvYVNrN1hHNGdJQ0FnSUNCcFppQW9aR0YwWVNCOGZDQmtaWEIwYUhNZ2ZId2dZbXh2WTJ0UVlYSmhiWE1nZkh3Z1pHVmpiR0Z5WldSQ2JHOWphMUJoY21GdGN5a2dlMXh1SUNBZ0lDQWdJQ0J3Y205bmNtRnRWM0poY0hCbGNpQTlJSGR5WVhCUWNtOW5jbUZ0S0Z4dUlDQWdJQ0FnSUNBZ0lIUm9hWE1zWEc0Z0lDQWdJQ0FnSUNBZ2FTeGNiaUFnSUNBZ0lDQWdJQ0JtYml4Y2JpQWdJQ0FnSUNBZ0lDQmtZWFJoTEZ4dUlDQWdJQ0FnSUNBZ0lHUmxZMnhoY21Wa1FteHZZMnRRWVhKaGJYTXNYRzRnSUNBZ0lDQWdJQ0FnWW14dlkydFFZWEpoYlhNc1hHNGdJQ0FnSUNBZ0lDQWdaR1Z3ZEdoelhHNGdJQ0FnSUNBZ0lDazdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0Z3Y205bmNtRnRWM0poY0hCbGNpa2dlMXh1SUNBZ0lDQWdJQ0J3Y205bmNtRnRWM0poY0hCbGNpQTlJSFJvYVhNdWNISnZaM0poYlhOYmFWMGdQU0IzY21Gd1VISnZaM0poYlNoMGFHbHpMQ0JwTENCbWJpazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnlaWFIxY200Z2NISnZaM0poYlZkeVlYQndaWEk3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJR1JoZEdFNklHWjFibU4wYVc5dUtIWmhiSFZsTENCa1pYQjBhQ2tnZTF4dUlDQWdJQ0FnZDJocGJHVWdLSFpoYkhWbElDWW1JR1JsY0hSb0xTMHBJSHRjYmlBZ0lDQWdJQ0FnZG1Gc2RXVWdQU0IyWVd4MVpTNWZjR0Z5Wlc1ME8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUNBZ0lIMHNYRzRnSUNBZ2JXVnlaMlZKWms1bFpXUmxaRG9nWm5WdVkzUnBiMjRvY0dGeVlXMHNJR052YlcxdmJpa2dlMXh1SUNBZ0lDQWdiR1YwSUc5aWFpQTlJSEJoY21GdElIeDhJR052YlcxdmJqdGNibHh1SUNBZ0lDQWdhV1lnS0hCaGNtRnRJQ1ltSUdOdmJXMXZiaUFtSmlCd1lYSmhiU0FoUFQwZ1kyOXRiVzl1S1NCN1hHNGdJQ0FnSUNBZ0lHOWlhaUE5SUZWMGFXeHpMbVY0ZEdWdVpDaDdmU3dnWTI5dGJXOXVMQ0J3WVhKaGJTazdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQnZZbW83WEc0Z0lDQWdmU3hjYmlBZ0lDQXZMeUJCYmlCbGJYQjBlU0J2WW1wbFkzUWdkRzhnZFhObElHRnpJSEpsY0d4aFkyVnRaVzUwSUdadmNpQnVkV3hzTFdOdmJuUmxlSFJ6WEc0Z0lDQWdiblZzYkVOdmJuUmxlSFE2SUU5aWFtVmpkQzV6WldGc0tIdDlLU3hjYmx4dUlDQWdJRzV2YjNBNklHVnVkaTVXVFM1dWIyOXdMRnh1SUNBZ0lHTnZiWEJwYkdWeVNXNW1iem9nZEdWdGNHeGhkR1ZUY0dWakxtTnZiWEJwYkdWeVhHNGdJSDA3WEc1Y2JpQWdablZ1WTNScGIyNGdjbVYwS0dOdmJuUmxlSFFzSUc5d2RHbHZibk1nUFNCN2ZTa2dlMXh1SUNBZ0lHeGxkQ0JrWVhSaElEMGdiM0IwYVc5dWN5NWtZWFJoTzF4dVhHNGdJQ0FnY21WMExsOXpaWFIxY0NodmNIUnBiMjV6S1R0Y2JpQWdJQ0JwWmlBb0lXOXdkR2x2Ym5NdWNHRnlkR2xoYkNBbUppQjBaVzF3YkdGMFpWTndaV011ZFhObFJHRjBZU2tnZTF4dUlDQWdJQ0FnWkdGMFlTQTlJR2x1YVhSRVlYUmhLR052Ym5SbGVIUXNJR1JoZEdFcE8xeHVJQ0FnSUgxY2JpQWdJQ0JzWlhRZ1pHVndkR2h6TEZ4dUlDQWdJQ0FnWW14dlkydFFZWEpoYlhNZ1BTQjBaVzF3YkdGMFpWTndaV011ZFhObFFteHZZMnRRWVhKaGJYTWdQeUJiWFNBNklIVnVaR1ZtYVc1bFpEdGNiaUFnSUNCcFppQW9kR1Z0Y0d4aGRHVlRjR1ZqTG5WelpVUmxjSFJvY3lrZ2UxeHVJQ0FnSUNBZ2FXWWdLRzl3ZEdsdmJuTXVaR1Z3ZEdoektTQjdYRzRnSUNBZ0lDQWdJR1JsY0hSb2N5QTlYRzRnSUNBZ0lDQWdJQ0FnWTI5dWRHVjRkQ0FoUFNCdmNIUnBiMjV6TG1SbGNIUm9jMXN3WFZ4dUlDQWdJQ0FnSUNBZ0lDQWdQeUJiWTI5dWRHVjRkRjB1WTI5dVkyRjBLRzl3ZEdsdmJuTXVaR1Z3ZEdoektWeHVJQ0FnSUNBZ0lDQWdJQ0FnT2lCdmNIUnBiMjV6TG1SbGNIUm9jenRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJR1JsY0hSb2N5QTlJRnRqYjI1MFpYaDBYVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQm1kVzVqZEdsdmJpQnRZV2x1S0dOdmJuUmxlSFFnTHlvc0lHOXdkR2x2Ym5NcUx5a2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlDaGNiaUFnSUNBZ0lDQWdKeWNnSzF4dUlDQWdJQ0FnSUNCMFpXMXdiR0YwWlZOd1pXTXViV0ZwYmloY2JpQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXNYRzRnSUNBZ0lDQWdJQ0FnWTI5dWRHVjRkQ3hjYmlBZ0lDQWdJQ0FnSUNCamIyNTBZV2x1WlhJdWFHVnNjR1Z5Y3l4Y2JpQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVjR0Z5ZEdsaGJITXNYRzRnSUNBZ0lDQWdJQ0FnWkdGMFlTeGNiaUFnSUNBZ0lDQWdJQ0JpYkc5amExQmhjbUZ0Y3l4Y2JpQWdJQ0FnSUNBZ0lDQmtaWEIwYUhOY2JpQWdJQ0FnSUNBZ0tWeHVJQ0FnSUNBZ0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCdFlXbHVJRDBnWlhobFkzVjBaVVJsWTI5eVlYUnZjbk1vWEc0Z0lDQWdJQ0IwWlcxd2JHRjBaVk53WldNdWJXRnBiaXhjYmlBZ0lDQWdJRzFoYVc0c1hHNGdJQ0FnSUNCamIyNTBZV2x1WlhJc1hHNGdJQ0FnSUNCdmNIUnBiMjV6TG1SbGNIUm9jeUI4ZkNCYlhTeGNiaUFnSUNBZ0lHUmhkR0VzWEc0Z0lDQWdJQ0JpYkc5amExQmhjbUZ0YzF4dUlDQWdJQ2s3WEc0Z0lDQWdjbVYwZFhKdUlHMWhhVzRvWTI5dWRHVjRkQ3dnYjNCMGFXOXVjeWs3WEc0Z0lIMWNibHh1SUNCeVpYUXVhWE5VYjNBZ1BTQjBjblZsTzF4dVhHNGdJSEpsZEM1ZmMyVjBkWEFnUFNCbWRXNWpkR2x2YmlodmNIUnBiMjV6S1NCN1hHNGdJQ0FnYVdZZ0tDRnZjSFJwYjI1ekxuQmhjblJwWVd3cElIdGNiaUFnSUNBZ0lHeGxkQ0J0WlhKblpXUklaV3h3WlhKeklEMGdWWFJwYkhNdVpYaDBaVzVrS0h0OUxDQmxibll1YUdWc2NHVnljeXdnYjNCMGFXOXVjeTVvWld4d1pYSnpLVHRjYmlBZ0lDQWdJSGR5WVhCSVpXeHdaWEp6Vkc5UVlYTnpURzl2YTNWd1VISnZjR1Z5ZEhrb2JXVnlaMlZrU0dWc2NHVnljeXdnWTI5dWRHRnBibVZ5S1R0Y2JpQWdJQ0FnSUdOdmJuUmhhVzVsY2k1b1pXeHdaWEp6SUQwZ2JXVnlaMlZrU0dWc2NHVnljenRjYmx4dUlDQWdJQ0FnYVdZZ0tIUmxiWEJzWVhSbFUzQmxZeTUxYzJWUVlYSjBhV0ZzS1NCN1hHNGdJQ0FnSUNBZ0lDOHZJRlZ6WlNCdFpYSm5aVWxtVG1WbFpHVmtJR2hsY21VZ2RHOGdjSEpsZG1WdWRDQmpiMjF3YVd4cGJtY2daMnh2WW1Gc0lIQmhjblJwWVd4eklHMTFiSFJwY0d4bElIUnBiV1Z6WEc0Z0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2k1d1lYSjBhV0ZzY3lBOUlHTnZiblJoYVc1bGNpNXRaWEpuWlVsbVRtVmxaR1ZrS0Z4dUlDQWdJQ0FnSUNBZ0lHOXdkR2x2Ym5NdWNHRnlkR2xoYkhNc1hHNGdJQ0FnSUNBZ0lDQWdaVzUyTG5CaGNuUnBZV3h6WEc0Z0lDQWdJQ0FnSUNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCcFppQW9kR1Z0Y0d4aGRHVlRjR1ZqTG5WelpWQmhjblJwWVd3Z2ZId2dkR1Z0Y0d4aGRHVlRjR1ZqTG5WelpVUmxZMjl5WVhSdmNuTXBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWRHRnBibVZ5TG1SbFkyOXlZWFJ2Y25NZ1BTQlZkR2xzY3k1bGVIUmxibVFvWEc0Z0lDQWdJQ0FnSUNBZ2UzMHNYRzRnSUNBZ0lDQWdJQ0FnWlc1MkxtUmxZMjl5WVhSdmNuTXNYRzRnSUNBZ0lDQWdJQ0FnYjNCMGFXOXVjeTVrWldOdmNtRjBiM0p6WEc0Z0lDQWdJQ0FnSUNrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHTnZiblJoYVc1bGNpNW9iMjlyY3lBOUlIdDlPMXh1SUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbkJ5YjNSdlFXTmpaWE56UTI5dWRISnZiQ0E5SUdOeVpXRjBaVkJ5YjNSdlFXTmpaWE56UTI5dWRISnZiQ2h2Y0hScGIyNXpLVHRjYmx4dUlDQWdJQ0FnYkdWMElHdGxaWEJJWld4d1pYSkpia2hsYkhCbGNuTWdQVnh1SUNBZ0lDQWdJQ0J2Y0hScGIyNXpMbUZzYkc5M1EyRnNiSE5VYjBobGJIQmxjazFwYzNOcGJtY2dmSHhjYmlBZ0lDQWdJQ0FnZEdWdGNHeGhkR1ZYWVhOUWNtVmpiMjF3YVd4bFpGZHBkR2hEYjIxd2FXeGxjbFkzTzF4dUlDQWdJQ0FnYlc5MlpVaGxiSEJsY2xSdlNHOXZhM01vWTI5dWRHRnBibVZ5TENBbmFHVnNjR1Z5VFdsemMybHVaeWNzSUd0bFpYQklaV3h3WlhKSmJraGxiSEJsY25NcE8xeHVJQ0FnSUNBZ2JXOTJaVWhsYkhCbGNsUnZTRzl2YTNNb1kyOXVkR0ZwYm1WeUxDQW5ZbXh2WTJ0SVpXeHdaWEpOYVhOemFXNW5KeXdnYTJWbGNFaGxiSEJsY2tsdVNHVnNjR1Z5Y3lrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR052Ym5SaGFXNWxjaTV3Y205MGIwRmpZMlZ6YzBOdmJuUnliMndnUFNCdmNIUnBiMjV6TG5CeWIzUnZRV05qWlhOelEyOXVkSEp2YkRzZ0x5OGdhVzUwWlhKdVlXd2diM0IwYVc5dVhHNGdJQ0FnSUNCamIyNTBZV2x1WlhJdWFHVnNjR1Z5Y3lBOUlHOXdkR2x2Ym5NdWFHVnNjR1Z5Y3p0Y2JpQWdJQ0FnSUdOdmJuUmhhVzVsY2k1d1lYSjBhV0ZzY3lBOUlHOXdkR2x2Ym5NdWNHRnlkR2xoYkhNN1hHNGdJQ0FnSUNCamIyNTBZV2x1WlhJdVpHVmpiM0poZEc5eWN5QTlJRzl3ZEdsdmJuTXVaR1ZqYjNKaGRHOXljenRjYmlBZ0lDQWdJR052Ym5SaGFXNWxjaTVvYjI5cmN5QTlJRzl3ZEdsdmJuTXVhRzl2YTNNN1hHNGdJQ0FnZlZ4dUlDQjlPMXh1WEc0Z0lISmxkQzVmWTJocGJHUWdQU0JtZFc1amRHbHZiaWhwTENCa1lYUmhMQ0JpYkc5amExQmhjbUZ0Y3l3Z1pHVndkR2h6S1NCN1hHNGdJQ0FnYVdZZ0tIUmxiWEJzWVhSbFUzQmxZeTUxYzJWQ2JHOWphMUJoY21GdGN5QW1KaUFoWW14dlkydFFZWEpoYlhNcElIdGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZlR05sY0hScGIyNG9KMjExYzNRZ2NHRnpjeUJpYkc5amF5QndZWEpoYlhNbktUdGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIUmxiWEJzWVhSbFUzQmxZeTUxYzJWRVpYQjBhSE1nSmlZZ0lXUmxjSFJvY3lrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVjRZMlZ3ZEdsdmJpZ25iWFZ6ZENCd1lYTnpJSEJoY21WdWRDQmtaWEIwYUhNbktUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZDNKaGNGQnliMmR5WVcwb1hHNGdJQ0FnSUNCamIyNTBZV2x1WlhJc1hHNGdJQ0FnSUNCcExGeHVJQ0FnSUNBZ2RHVnRjR3hoZEdWVGNHVmpXMmxkTEZ4dUlDQWdJQ0FnWkdGMFlTeGNiaUFnSUNBZ0lEQXNYRzRnSUNBZ0lDQmliRzlqYTFCaGNtRnRjeXhjYmlBZ0lDQWdJR1JsY0hSb2MxeHVJQ0FnSUNrN1hHNGdJSDA3WEc0Z0lISmxkSFZ5YmlCeVpYUTdYRzU5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCM2NtRndVSEp2WjNKaGJTaGNiaUFnWTI5dWRHRnBibVZ5TEZ4dUlDQnBMRnh1SUNCbWJpeGNiaUFnWkdGMFlTeGNiaUFnWkdWamJHRnlaV1JDYkc5amExQmhjbUZ0Y3l4Y2JpQWdZbXh2WTJ0UVlYSmhiWE1zWEc0Z0lHUmxjSFJvYzF4dUtTQjdYRzRnSUdaMWJtTjBhVzl1SUhCeWIyY29ZMjl1ZEdWNGRDd2diM0IwYVc5dWN5QTlJSHQ5S1NCN1hHNGdJQ0FnYkdWMElHTjFjbkpsYm5SRVpYQjBhSE1nUFNCa1pYQjBhSE03WEc0Z0lDQWdhV1lnS0Z4dUlDQWdJQ0FnWkdWd2RHaHpJQ1ltWEc0Z0lDQWdJQ0JqYjI1MFpYaDBJQ0U5SUdSbGNIUm9jMXN3WFNBbUpseHVJQ0FnSUNBZ0lTaGpiMjUwWlhoMElEMDlQU0JqYjI1MFlXbHVaWEl1Ym5Wc2JFTnZiblJsZUhRZ0ppWWdaR1Z3ZEdoeld6QmRJRDA5UFNCdWRXeHNLVnh1SUNBZ0lDa2dlMXh1SUNBZ0lDQWdZM1Z5Y21WdWRFUmxjSFJvY3lBOUlGdGpiMjUwWlhoMFhTNWpiMjVqWVhRb1pHVndkR2h6S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdabTRvWEc0Z0lDQWdJQ0JqYjI1MFlXbHVaWElzWEc0Z0lDQWdJQ0JqYjI1MFpYaDBMRnh1SUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbWhsYkhCbGNuTXNYRzRnSUNBZ0lDQmpiMjUwWVdsdVpYSXVjR0Z5ZEdsaGJITXNYRzRnSUNBZ0lDQnZjSFJwYjI1ekxtUmhkR0VnZkh3Z1pHRjBZU3hjYmlBZ0lDQWdJR0pzYjJOclVHRnlZVzF6SUNZbUlGdHZjSFJwYjI1ekxtSnNiMk5yVUdGeVlXMXpYUzVqYjI1allYUW9ZbXh2WTJ0UVlYSmhiWE1wTEZ4dUlDQWdJQ0FnWTNWeWNtVnVkRVJsY0hSb2MxeHVJQ0FnSUNrN1hHNGdJSDFjYmx4dUlDQndjbTluSUQwZ1pYaGxZM1YwWlVSbFkyOXlZWFJ2Y25Nb1ptNHNJSEJ5YjJjc0lHTnZiblJoYVc1bGNpd2daR1Z3ZEdoekxDQmtZWFJoTENCaWJHOWphMUJoY21GdGN5azdYRzVjYmlBZ2NISnZaeTV3Y205bmNtRnRJRDBnYVR0Y2JpQWdjSEp2Wnk1a1pYQjBhQ0E5SUdSbGNIUm9jeUEvSUdSbGNIUm9jeTVzWlc1bmRHZ2dPaUF3TzF4dUlDQndjbTluTG1Kc2IyTnJVR0Z5WVcxeklEMGdaR1ZqYkdGeVpXUkNiRzlqYTFCaGNtRnRjeUI4ZkNBd08xeHVJQ0J5WlhSMWNtNGdjSEp2Wnp0Y2JuMWNibHh1THlvcVhHNGdLaUJVYUdseklHbHpJR04xY25KbGJuUnNlU0J3WVhKMElHOW1JSFJvWlNCdlptWnBZMmxoYkNCQlVFa3NJSFJvWlhKbFptOXlaU0JwYlhCc1pXMWxiblJoZEdsdmJpQmtaWFJoYVd4eklITm9iM1ZzWkNCdWIzUWdZbVVnWTJoaGJtZGxaQzVjYmlBcUwxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlISmxjMjlzZG1WUVlYSjBhV0ZzS0hCaGNuUnBZV3dzSUdOdmJuUmxlSFFzSUc5d2RHbHZibk1wSUh0Y2JpQWdhV1lnS0NGd1lYSjBhV0ZzS1NCN1hHNGdJQ0FnYVdZZ0tHOXdkR2x2Ym5NdWJtRnRaU0E5UFQwZ0owQndZWEowYVdGc0xXSnNiMk5ySnlrZ2UxeHVJQ0FnSUNBZ2NHRnlkR2xoYkNBOUlHOXdkR2x2Ym5NdVpHRjBZVnNuY0dGeWRHbGhiQzFpYkc5amF5ZGRPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCd1lYSjBhV0ZzSUQwZ2IzQjBhVzl1Y3k1d1lYSjBhV0ZzYzF0dmNIUnBiMjV6TG01aGJXVmRPMXh1SUNBZ0lIMWNiaUFnZlNCbGJITmxJR2xtSUNnaGNHRnlkR2xoYkM1allXeHNJQ1ltSUNGdmNIUnBiMjV6TG01aGJXVXBJSHRjYmlBZ0lDQXZMeUJVYUdseklHbHpJR0VnWkhsdVlXMXBZeUJ3WVhKMGFXRnNJSFJvWVhRZ2NtVjBkWEp1WldRZ1lTQnpkSEpwYm1kY2JpQWdJQ0J2Y0hScGIyNXpMbTVoYldVZ1BTQndZWEowYVdGc08xeHVJQ0FnSUhCaGNuUnBZV3dnUFNCdmNIUnBiMjV6TG5CaGNuUnBZV3h6VzNCaGNuUnBZV3hkTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJ3WVhKMGFXRnNPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2FXNTJiMnRsVUdGeWRHbGhiQ2h3WVhKMGFXRnNMQ0JqYjI1MFpYaDBMQ0J2Y0hScGIyNXpLU0I3WEc0Z0lDOHZJRlZ6WlNCMGFHVWdZM1Z5Y21WdWRDQmpiRzl6ZFhKbElHTnZiblJsZUhRZ2RHOGdjMkYyWlNCMGFHVWdjR0Z5ZEdsaGJDMWliRzlqYXlCcFppQjBhR2x6SUhCaGNuUnBZV3hjYmlBZ1kyOXVjM1FnWTNWeWNtVnVkRkJoY25ScFlXeENiRzlqYXlBOUlHOXdkR2x2Ym5NdVpHRjBZU0FtSmlCdmNIUnBiMjV6TG1SaGRHRmJKM0JoY25ScFlXd3RZbXh2WTJzblhUdGNiaUFnYjNCMGFXOXVjeTV3WVhKMGFXRnNJRDBnZEhKMVpUdGNiaUFnYVdZZ0tHOXdkR2x2Ym5NdWFXUnpLU0I3WEc0Z0lDQWdiM0IwYVc5dWN5NWtZWFJoTG1OdmJuUmxlSFJRWVhSb0lEMGdiM0IwYVc5dWN5NXBaSE5iTUYwZ2ZId2diM0IwYVc5dWN5NWtZWFJoTG1OdmJuUmxlSFJRWVhSb08xeHVJQ0I5WEc1Y2JpQWdiR1YwSUhCaGNuUnBZV3hDYkc5amF6dGNiaUFnYVdZZ0tHOXdkR2x2Ym5NdVptNGdKaVlnYjNCMGFXOXVjeTVtYmlBaFBUMGdibTl2Y0NrZ2UxeHVJQ0FnSUc5d2RHbHZibk11WkdGMFlTQTlJR055WldGMFpVWnlZVzFsS0c5d2RHbHZibk11WkdGMFlTazdYRzRnSUNBZ0x5OGdWM0poY0hCbGNpQm1kVzVqZEdsdmJpQjBieUJuWlhRZ1lXTmpaWE56SUhSdklHTjFjbkpsYm5SUVlYSjBhV0ZzUW14dlkyc2dabkp2YlNCMGFHVWdZMnh2YzNWeVpWeHVJQ0FnSUd4bGRDQm1iaUE5SUc5d2RHbHZibk11Wm00N1hHNGdJQ0FnY0dGeWRHbGhiRUpzYjJOcklEMGdiM0IwYVc5dWN5NWtZWFJoV3lkd1lYSjBhV0ZzTFdKc2IyTnJKMTBnUFNCbWRXNWpkR2x2YmlCd1lYSjBhV0ZzUW14dlkydFhjbUZ3Y0dWeUtGeHVJQ0FnSUNBZ1kyOXVkR1Y0ZEN4Y2JpQWdJQ0FnSUc5d2RHbHZibk1nUFNCN2ZWeHVJQ0FnSUNrZ2UxeHVJQ0FnSUNBZ0x5OGdVbVZ6ZEc5eVpTQjBhR1VnY0dGeWRHbGhiQzFpYkc5amF5Qm1jbTl0SUhSb1pTQmpiRzl6ZFhKbElHWnZjaUIwYUdVZ1pYaGxZM1YwYVc5dUlHOW1JSFJvWlNCaWJHOWphMXh1SUNBZ0lDQWdMeThnYVM1bExpQjBhR1VnY0dGeWRDQnBibk5wWkdVZ2RHaGxJR0pzYjJOcklHOW1JSFJvWlNCd1lYSjBhV0ZzSUdOaGJHd3VYRzRnSUNBZ0lDQnZjSFJwYjI1ekxtUmhkR0VnUFNCamNtVmhkR1ZHY21GdFpTaHZjSFJwYjI1ekxtUmhkR0VwTzF4dUlDQWdJQ0FnYjNCMGFXOXVjeTVrWVhSaFd5ZHdZWEowYVdGc0xXSnNiMk5ySjEwZ1BTQmpkWEp5Wlc1MFVHRnlkR2xoYkVKc2IyTnJPMXh1SUNBZ0lDQWdjbVYwZFhKdUlHWnVLR052Ym5SbGVIUXNJRzl3ZEdsdmJuTXBPMXh1SUNBZ0lIMDdYRzRnSUNBZ2FXWWdLR1p1TG5CaGNuUnBZV3h6S1NCN1hHNGdJQ0FnSUNCdmNIUnBiMjV6TG5CaGNuUnBZV3h6SUQwZ1ZYUnBiSE11WlhoMFpXNWtLSHQ5TENCdmNIUnBiMjV6TG5CaGNuUnBZV3h6TENCbWJpNXdZWEowYVdGc2N5azdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdhV1lnS0hCaGNuUnBZV3dnUFQwOUlIVnVaR1ZtYVc1bFpDQW1KaUJ3WVhKMGFXRnNRbXh2WTJzcElIdGNiaUFnSUNCd1lYSjBhV0ZzSUQwZ2NHRnlkR2xoYkVKc2IyTnJPMXh1SUNCOVhHNWNiaUFnYVdZZ0tIQmhjblJwWVd3Z1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGZUdObGNIUnBiMjRvSjFSb1pTQndZWEowYVdGc0lDY2dLeUJ2Y0hScGIyNXpMbTVoYldVZ0t5QW5JR052ZFd4a0lHNXZkQ0JpWlNCbWIzVnVaQ2NwTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLSEJoY25ScFlXd2dhVzV6ZEdGdVkyVnZaaUJHZFc1amRHbHZiaWtnZTF4dUlDQWdJSEpsZEhWeWJpQndZWEowYVdGc0tHTnZiblJsZUhRc0lHOXdkR2x2Ym5NcE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnViMjl3S0NrZ2UxeHVJQ0J5WlhSMWNtNGdKeWM3WEc1OVhHNWNibVoxYm1OMGFXOXVJR2x1YVhSRVlYUmhLR052Ym5SbGVIUXNJR1JoZEdFcElIdGNiaUFnYVdZZ0tDRmtZWFJoSUh4OElDRW9KM0p2YjNRbklHbHVJR1JoZEdFcEtTQjdYRzRnSUNBZ1pHRjBZU0E5SUdSaGRHRWdQeUJqY21WaGRHVkdjbUZ0WlNoa1lYUmhLU0E2SUh0OU8xeHVJQ0FnSUdSaGRHRXVjbTl2ZENBOUlHTnZiblJsZUhRN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUdSaGRHRTdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHVjRaV04xZEdWRVpXTnZjbUYwYjNKektHWnVMQ0J3Y205bkxDQmpiMjUwWVdsdVpYSXNJR1JsY0hSb2N5d2daR0YwWVN3Z1lteHZZMnRRWVhKaGJYTXBJSHRjYmlBZ2FXWWdLR1p1TG1SbFkyOXlZWFJ2Y2lrZ2UxeHVJQ0FnSUd4bGRDQndjbTl3Y3lBOUlIdDlPMXh1SUNBZ0lIQnliMmNnUFNCbWJpNWtaV052Y21GMGIzSW9YRzRnSUNBZ0lDQndjbTluTEZ4dUlDQWdJQ0FnY0hKdmNITXNYRzRnSUNBZ0lDQmpiMjUwWVdsdVpYSXNYRzRnSUNBZ0lDQmtaWEIwYUhNZ0ppWWdaR1Z3ZEdoeld6QmRMRnh1SUNBZ0lDQWdaR0YwWVN4Y2JpQWdJQ0FnSUdKc2IyTnJVR0Z5WVcxekxGeHVJQ0FnSUNBZ1pHVndkR2h6WEc0Z0lDQWdLVHRjYmlBZ0lDQlZkR2xzY3k1bGVIUmxibVFvY0hKdlp5d2djSEp2Y0hNcE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCd2NtOW5PMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQjNjbUZ3U0dWc2NHVnljMVJ2VUdGemMweHZiMnQxY0ZCeWIzQmxjblI1S0cxbGNtZGxaRWhsYkhCbGNuTXNJR052Ym5SaGFXNWxjaWtnZTF4dUlDQlBZbXBsWTNRdWEyVjVjeWh0WlhKblpXUklaV3h3WlhKektTNW1iM0pGWVdOb0tHaGxiSEJsY2s1aGJXVWdQVDRnZTF4dUlDQWdJR3hsZENCb1pXeHdaWElnUFNCdFpYSm5aV1JJWld4d1pYSnpXMmhsYkhCbGNrNWhiV1ZkTzF4dUlDQWdJRzFsY21kbFpFaGxiSEJsY25OYmFHVnNjR1Z5VG1GdFpWMGdQU0J3WVhOelRHOXZhM1Z3VUhKdmNHVnlkSGxQY0hScGIyNG9hR1ZzY0dWeUxDQmpiMjUwWVdsdVpYSXBPMXh1SUNCOUtUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2NHRnpjMHh2YjJ0MWNGQnliM0JsY25SNVQzQjBhVzl1S0dobGJIQmxjaXdnWTI5dWRHRnBibVZ5S1NCN1hHNGdJR052Ym5OMElHeHZiMnQxY0ZCeWIzQmxjblI1SUQwZ1kyOXVkR0ZwYm1WeUxteHZiMnQxY0ZCeWIzQmxjblI1TzF4dUlDQnlaWFIxY200Z2QzSmhjRWhsYkhCbGNpaG9aV3h3WlhJc0lHOXdkR2x2Ym5NZ1BUNGdlMXh1SUNBZ0lISmxkSFZ5YmlCVmRHbHNjeTVsZUhSbGJtUW9leUJzYjI5cmRYQlFjbTl3WlhKMGVTQjlMQ0J2Y0hScGIyNXpLVHRjYmlBZ2ZTazdYRzU5WEc0aVhYMD1cbiIsIi8vIEJ1aWxkIG91dCBvdXIgYmFzaWMgU2FmZVN0cmluZyB0eXBlXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBTYWZlU3RyaW5nKHN0cmluZykge1xuICB0aGlzLnN0cmluZyA9IHN0cmluZztcbn1cblxuU2FmZVN0cmluZy5wcm90b3R5cGUudG9TdHJpbmcgPSBTYWZlU3RyaW5nLnByb3RvdHlwZS50b0hUTUwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU2FmZVN0cmluZztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMM05oWm1VdGMzUnlhVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZEUVN4VFFVRlRMRlZCUVZVc1EwRkJReXhOUVVGTkxFVkJRVVU3UVVGRE1VSXNUVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03UTBGRGRFSTdPMEZCUlVRc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVkQlFVY3NWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFZEJRVWNzV1VGQlZ6dEJRVU4yUlN4VFFVRlBMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzBOQlEzcENMRU5CUVVNN08zRkNRVVZoTEZWQlFWVWlMQ0ptYVd4bElqb2ljMkZtWlMxemRISnBibWN1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeUJDZFdsc1pDQnZkWFFnYjNWeUlHSmhjMmxqSUZOaFptVlRkSEpwYm1jZ2RIbHdaVnh1Wm5WdVkzUnBiMjRnVTJGbVpWTjBjbWx1WnloemRISnBibWNwSUh0Y2JpQWdkR2hwY3k1emRISnBibWNnUFNCemRISnBibWM3WEc1OVhHNWNibE5oWm1WVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuSUQwZ1UyRm1aVk4wY21sdVp5NXdjbTkwYjNSNWNHVXVkRzlJVkUxTUlEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lISmxkSFZ5YmlBbkp5QXJJSFJvYVhNdWMzUnlhVzVuTzF4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVMkZtWlZOMGNtbHVaenRjYmlKZGZRPT1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZXh0ZW5kID0gZXh0ZW5kO1xuZXhwb3J0cy5pbmRleE9mID0gaW5kZXhPZjtcbmV4cG9ydHMuZXNjYXBlRXhwcmVzc2lvbiA9IGVzY2FwZUV4cHJlc3Npb247XG5leHBvcnRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuZXhwb3J0cy5jcmVhdGVGcmFtZSA9IGNyZWF0ZUZyYW1lO1xuZXhwb3J0cy5ibG9ja1BhcmFtcyA9IGJsb2NrUGFyYW1zO1xuZXhwb3J0cy5hcHBlbmRDb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoO1xudmFyIGVzY2FwZSA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnLFxuICBcIidcIjogJyYjeDI3OycsXG4gICdgJzogJyYjeDYwOycsXG4gICc9JzogJyYjeDNEOydcbn07XG5cbnZhciBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gICAgcG9zc2libGUgPSAvWyY8PlwiJ2A9XS87XG5cbmZ1bmN0aW9uIGVzY2FwZUNoYXIoY2hyKSB7XG4gIHJldHVybiBlc2NhcGVbY2hyXTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKG9iaiAvKiAsIC4uLnNvdXJjZSAqLykge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJndW1lbnRzW2ldLCBrZXkpKSB7XG4gICAgICAgIG9ialtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZXhwb3J0cy50b1N0cmluZyA9IHRvU3RyaW5nO1xuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59O1xuLy8gZmFsbGJhY2sgZm9yIG9sZGVyIHZlcnNpb25zIG9mIENocm9tZSBhbmQgU2FmYXJpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuaWYgKGlzRnVuY3Rpb24oL3gvKSkge1xuICBleHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbi8qIGVzbGludC1lbmFibGUgZnVuYy1zdHlsZSAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nIDogZmFsc2U7XG59O1xuXG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuLy8gT2xkZXIgSUUgdmVyc2lvbnMgZG8gbm90IGRpcmVjdGx5IHN1cHBvcnQgaW5kZXhPZiBzbyB3ZSBtdXN0IGltcGxlbWVudCBvdXIgb3duLCBzYWRseS5cblxuZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGJhZENoYXJzLCBlc2NhcGVDaGFyKTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG9iamVjdCkge1xuICB2YXIgZnJhbWUgPSBleHRlbmQoe30sIG9iamVjdCk7XG4gIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gYmxvY2tQYXJhbXMocGFyYW1zLCBpZHMpIHtcbiAgcGFyYW1zLnBhdGggPSBpZHM7XG4gIHJldHVybiBwYXJhbXM7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZENvbnRleHRQYXRoKGNvbnRleHRQYXRoLCBpZCkge1xuICByZXR1cm4gKGNvbnRleHRQYXRoID8gY29udGV4dFBhdGggKyAnLicgOiAnJykgKyBpZDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDNWMGFXeHpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3UVVGQlFTeEpRVUZOTEUxQlFVMHNSMEZCUnp0QlFVTmlMRXRCUVVjc1JVRkJSU3hQUVVGUE8wRkJRMW9zUzBGQlJ5eEZRVUZGTEUxQlFVMDdRVUZEV0N4TFFVRkhMRVZCUVVVc1RVRkJUVHRCUVVOWUxFdEJRVWNzUlVGQlJTeFJRVUZSTzBGQlEySXNTMEZCUnl4RlFVRkZMRkZCUVZFN1FVRkRZaXhMUVVGSExFVkJRVVVzVVVGQlVUdEJRVU5pTEV0QlFVY3NSVUZCUlN4UlFVRlJPME5CUTJRc1EwRkJRenM3UVVGRlJpeEpRVUZOTEZGQlFWRXNSMEZCUnl4WlFVRlpPMGxCUXpOQ0xGRkJRVkVzUjBGQlJ5eFhRVUZYTEVOQlFVTTdPMEZCUlhwQ0xGTkJRVk1zVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTjJRaXhUUVVGUExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0RFFVTndRanM3UVVGRlRTeFRRVUZUTEUxQlFVMHNRMEZCUXl4SFFVRkhMRzlDUVVGdlFqdEJRVU0xUXl4UFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU42UXl4VFFVRkxMRWxCUVVrc1IwRkJSeXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0QlFVTTFRaXhWUVVGSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1FVRkRNMFFzVjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UFFVTTVRanRMUVVOR08wZEJRMFk3TzBGQlJVUXNVMEZCVHl4SFFVRkhMRU5CUVVNN1EwRkRXanM3UVVGRlRTeEpRVUZKTEZGQlFWRXNSMEZCUnl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF6czdPenM3TzBGQlMyaEVMRWxCUVVrc1ZVRkJWU3hIUVVGSExHOUNRVUZUTEV0QlFVc3NSVUZCUlR0QlFVTXZRaXhUUVVGUExFOUJRVThzUzBGQlN5eExRVUZMTEZWQlFWVXNRMEZCUXp0RFFVTndReXhEUVVGRE96czdRVUZIUml4SlFVRkpMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU51UWl4VlFVOVBMRlZCUVZVc1IwRlFha0lzVlVGQlZTeEhRVUZITEZWQlFWTXNTMEZCU3l4RlFVRkZPMEZCUXpOQ0xGZEJRMFVzVDBGQlR5eExRVUZMTEV0QlFVc3NWVUZCVlN4SlFVTXpRaXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRzFDUVVGdFFpeERRVU0xUXp0SFFVTklMRU5CUVVNN1EwRkRTRHRSUVVOUkxGVkJRVlVzUjBGQlZpeFZRVUZWT3pzN096dEJRVWxhTEVsQlFVMHNUMEZCVHl4SFFVTnNRaXhMUVVGTExFTkJRVU1zVDBGQlR5eEpRVU5pTEZWQlFWTXNTMEZCU3l4RlFVRkZPMEZCUTJRc1UwRkJUeXhMUVVGTExFbEJRVWtzVDBGQlR5eExRVUZMTEV0QlFVc3NVVUZCVVN4SFFVTnlReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMR2RDUVVGblFpeEhRVU42UXl4TFFVRkxMRU5CUVVNN1EwRkRXQ3hEUVVGRE96czdPenRCUVVkSExGTkJRVk1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4TFFVRkxMRVZCUVVVN1FVRkRjRU1zVDBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU5vUkN4UlFVRkpMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eExRVUZMTEVWQlFVVTdRVUZEZEVJc1lVRkJUeXhEUVVGRExFTkJRVU03UzBGRFZqdEhRVU5HTzBGQlEwUXNVMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenREUVVOWU96dEJRVVZOTEZOQlFWTXNaMEpCUVdkQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTzBGQlEzWkRMRTFCUVVrc1QwRkJUeXhOUVVGTkxFdEJRVXNzVVVGQlVTeEZRVUZGT3p0QlFVVTVRaXhSUVVGSkxFMUJRVTBzU1VGQlNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZPMEZCUXpOQ0xHRkJRVThzVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMHRCUTNoQ0xFMUJRVTBzU1VGQlNTeE5RVUZOTEVsQlFVa3NTVUZCU1N4RlFVRkZPMEZCUTNwQ0xHRkJRVThzUlVGQlJTeERRVUZETzB0QlExZ3NUVUZCVFN4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8wRkJRMnhDTEdGQlFVOHNUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRMUVVOd1FqczdPenM3UVVGTFJDeFZRVUZOTEVkQlFVY3NSVUZCUlN4SFFVRkhMRTFCUVUwc1EwRkJRenRIUVVOMFFqczdRVUZGUkN4TlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0QlFVTXhRaXhYUVVGUExFMUJRVTBzUTBGQlF6dEhRVU5tTzBGQlEwUXNVMEZCVHl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0RFFVTTNRenM3UVVGRlRTeFRRVUZUTEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVVN1FVRkROMElzVFVGQlNTeERRVUZETEV0QlFVc3NTVUZCU1N4TFFVRkxMRXRCUVVzc1EwRkJReXhGUVVGRk8wRkJRM3BDTEZkQlFVOHNTVUZCU1N4RFFVRkRPMGRCUTJJc1RVRkJUU3hKUVVGSkxFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUlVGQlJUdEJRVU12UXl4WFFVRlBMRWxCUVVrc1EwRkJRenRIUVVOaUxFMUJRVTA3UVVGRFRDeFhRVUZQTEV0QlFVc3NRMEZCUXp0SFFVTmtPME5CUTBZN08wRkJSVTBzVTBGQlV5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RlFVRkZPMEZCUTJ4RExFMUJRVWtzUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4RlFVRkZMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGREwwSXNUMEZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03UVVGRGRrSXNVMEZCVHl4TFFVRkxMRU5CUVVNN1EwRkRaRHM3UVVGRlRTeFRRVUZUTEZkQlFWY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRk8wRkJRM1pETEZGQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRE8wRkJRMnhDTEZOQlFVOHNUVUZCVFN4RFFVRkRPME5CUTJZN08wRkJSVTBzVTBGQlV5eHBRa0ZCYVVJc1EwRkJReXhYUVVGWExFVkJRVVVzUlVGQlJTeEZRVUZGTzBGQlEycEVMRk5CUVU4c1EwRkJReXhYUVVGWExFZEJRVWNzVjBGQlZ5eEhRVUZITEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVFc1IwRkJTU3hGUVVGRkxFTkJRVU03UTBGRGNFUWlMQ0ptYVd4bElqb2lkWFJwYkhNdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQmxjMk5oY0dVZ1BTQjdYRzRnSUNjbUp6b2dKeVpoYlhBN0p5eGNiaUFnSnp3bk9pQW5KbXgwT3ljc1hHNGdJQ2MrSnpvZ0p5Wm5kRHNuTEZ4dUlDQW5YQ0luT2lBbkpuRjFiM1E3Snl4Y2JpQWdYQ0luWENJNklDY21JM2d5TnpzbkxGeHVJQ0FuWUNjNklDY21JM2cyTURzbkxGeHVJQ0FuUFNjNklDY21JM2d6UkRzblhHNTlPMXh1WEc1amIyNXpkQ0JpWVdSRGFHRnljeUE5SUM5YkpqdytYQ0luWUQxZEwyY3NYRzRnSUhCdmMzTnBZbXhsSUQwZ0wxc21QRDVjSWlkZ1BWMHZPMXh1WEc1bWRXNWpkR2x2YmlCbGMyTmhjR1ZEYUdGeUtHTm9jaWtnZTF4dUlDQnlaWFIxY200Z1pYTmpZWEJsVzJOb2NsMDdYRzU5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCbGVIUmxibVFvYjJKcUlDOHFJQ3dnTGk0dWMyOTFjbU5sSUNvdktTQjdYRzRnSUdadmNpQW9iR1YwSUdrZ1BTQXhPeUJwSUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlHRnlaM1Z0Wlc1MGMxdHBYU2tnZTF4dUlDQWdJQ0FnYVdZZ0tFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaGhjbWQxYldWdWRITmJhVjBzSUd0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnYjJKcVcydGxlVjBnUFNCaGNtZDFiV1Z1ZEhOYmFWMWJhMlY1WFR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnYjJKcU8xeHVmVnh1WEc1bGVIQnZjblFnYkdWMElIUnZVM1J5YVc1bklEMGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp6dGNibHh1THk4Z1UyOTFjbU5sWkNCbWNtOXRJR3h2WkdGemFGeHVMeThnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJKbGMzUnBaV3B6TDJ4dlpHRnphQzlpYkc5aUwyMWhjM1JsY2k5TVNVTkZUbE5GTG5SNGRGeHVMeW9nWlhOc2FXNTBMV1JwYzJGaWJHVWdablZ1WXkxemRIbHNaU0FxTDF4dWJHVjBJR2x6Um5WdVkzUnBiMjRnUFNCbWRXNWpkR2x2YmloMllXeDFaU2tnZTF4dUlDQnlaWFIxY200Z2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBblpuVnVZM1JwYjI0bk8xeHVmVHRjYmk4dklHWmhiR3hpWVdOcklHWnZjaUJ2YkdSbGNpQjJaWEp6YVc5dWN5QnZaaUJEYUhKdmJXVWdZVzVrSUZOaFptRnlhVnh1THlvZ2FYTjBZVzVpZFd3Z2FXZHViM0psSUc1bGVIUWdLaTljYm1sbUlDaHBjMFoxYm1OMGFXOXVLQzk0THlrcElIdGNiaUFnYVhOR2RXNWpkR2x2YmlBOUlHWjFibU4wYVc5dUtIWmhiSFZsS1NCN1hHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJSFI1Y0dWdlppQjJZV3gxWlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmx4dUlDQWdJQ0FnZEc5VGRISnBibWN1WTJGc2JDaDJZV3gxWlNrZ1BUMDlJQ2RiYjJKcVpXTjBJRVoxYm1OMGFXOXVYU2RjYmlBZ0lDQXBPMXh1SUNCOU8xeHVmVnh1Wlhod2IzSjBJSHNnYVhOR2RXNWpkR2x2YmlCOU8xeHVMeW9nWlhOc2FXNTBMV1Z1WVdKc1pTQm1kVzVqTFhOMGVXeGxJQ292WEc1Y2JpOHFJR2x6ZEdGdVluVnNJR2xuYm05eVpTQnVaWGgwSUNvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOQmNuSmhlU0E5WEc0Z0lFRnljbUY1TG1selFYSnlZWGtnZkh4Y2JpQWdablZ1WTNScGIyNG9kbUZzZFdVcElIdGNiaUFnSUNCeVpYUjFjbTRnZG1Gc2RXVWdKaVlnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuYjJKcVpXTjBKMXh1SUNBZ0lDQWdQeUIwYjFOMGNtbHVaeTVqWVd4c0tIWmhiSFZsS1NBOVBUMGdKMXR2WW1wbFkzUWdRWEp5WVhsZEoxeHVJQ0FnSUNBZ09pQm1ZV3h6WlR0Y2JpQWdmVHRjYmx4dUx5OGdUMnhrWlhJZ1NVVWdkbVZ5YzJsdmJuTWdaRzhnYm05MElHUnBjbVZqZEd4NUlITjFjSEJ2Y25RZ2FXNWtaWGhQWmlCemJ5QjNaU0J0ZFhOMElHbHRjR3hsYldWdWRDQnZkWElnYjNkdUxDQnpZV1JzZVM1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCcGJtUmxlRTltS0dGeWNtRjVMQ0IyWVd4MVpTa2dlMXh1SUNCbWIzSWdLR3hsZENCcElEMGdNQ3dnYkdWdUlEMGdZWEp5WVhrdWJHVnVaM1JvT3lCcElEd2diR1Z1T3lCcEt5c3BJSHRjYmlBZ0lDQnBaaUFvWVhKeVlYbGJhVjBnUFQwOUlIWmhiSFZsS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYVR0Y2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY21WMGRYSnVJQzB4TzF4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdaWE5qWVhCbFJYaHdjbVZ6YzJsdmJpaHpkSEpwYm1jcElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCemRISnBibWNnSVQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0x5OGdaRzl1SjNRZ1pYTmpZWEJsSUZOaFptVlRkSEpwYm1kekxDQnphVzVqWlNCMGFHVjVKM0psSUdGc2NtVmhaSGtnYzJGbVpWeHVJQ0FnSUdsbUlDaHpkSEpwYm1jZ0ppWWdjM1J5YVc1bkxuUnZTRlJOVENrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhOMGNtbHVaeTUwYjBoVVRVd29LVHRjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLSE4wY21sdVp5QTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z0p5YzdYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2hjM1J5YVc1bktTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2MzUnlhVzVuSUNzZ0p5YzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdSbTl5WTJVZ1lTQnpkSEpwYm1jZ1kyOXVkbVZ5YzJsdmJpQmhjeUIwYUdseklIZHBiR3dnWW1VZ1pHOXVaU0JpZVNCMGFHVWdZWEJ3Wlc1a0lISmxaMkZ5Wkd4bGMzTWdZVzVrWEc0Z0lDQWdMeThnZEdobElISmxaMlY0SUhSbGMzUWdkMmxzYkNCa2J5QjBhR2x6SUhSeVlXNXpjR0Z5Wlc1MGJIa2dZbVZvYVc1a0lIUm9aU0J6WTJWdVpYTXNJR05oZFhOcGJtY2dhWE56ZFdWeklHbG1YRzRnSUNBZ0x5OGdZVzRnYjJKcVpXTjBKM01nZEc4Z2MzUnlhVzVuSUdoaGN5QmxjMk5oY0dWa0lHTm9ZWEpoWTNSbGNuTWdhVzRnYVhRdVhHNGdJQ0FnYzNSeWFXNW5JRDBnSnljZ0t5QnpkSEpwYm1jN1hHNGdJSDFjYmx4dUlDQnBaaUFvSVhCdmMzTnBZbXhsTG5SbGMzUW9jM1J5YVc1bktTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCemRISnBibWM3WEc0Z0lIMWNiaUFnY21WMGRYSnVJSE4wY21sdVp5NXlaWEJzWVdObEtHSmhaRU5vWVhKekxDQmxjMk5oY0dWRGFHRnlLVHRjYm4xY2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlHbHpSVzF3ZEhrb2RtRnNkV1VwSUh0Y2JpQWdhV1lnS0NGMllXeDFaU0FtSmlCMllXeDFaU0FoUFQwZ01Da2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNCOUlHVnNjMlVnYVdZZ0tHbHpRWEp5WVhrb2RtRnNkV1VwSUNZbUlIWmhiSFZsTG14bGJtZDBhQ0E5UFQwZ01Da2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1kzSmxZWFJsUm5KaGJXVW9iMkpxWldOMEtTQjdYRzRnSUd4bGRDQm1jbUZ0WlNBOUlHVjRkR1Z1WkNoN2ZTd2diMkpxWldOMEtUdGNiaUFnWm5KaGJXVXVYM0JoY21WdWRDQTlJRzlpYW1WamREdGNiaUFnY21WMGRYSnVJR1p5WVcxbE8xeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWW14dlkydFFZWEpoYlhNb2NHRnlZVzF6TENCcFpITXBJSHRjYmlBZ2NHRnlZVzF6TG5CaGRHZ2dQU0JwWkhNN1hHNGdJSEpsZEhWeWJpQndZWEpoYlhNN1hHNTlYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJoY0hCbGJtUkRiMjUwWlhoMFVHRjBhQ2hqYjI1MFpYaDBVR0YwYUN3Z2FXUXBJSHRjYmlBZ2NtVjBkWEp1SUNoamIyNTBaWGgwVUdGMGFDQS9JR052Ym5SbGVIUlFZWFJvSUNzZ0p5NG5JRG9nSnljcElDc2dhV1E3WEc1OVhHNGlYWDA9XG4iLCIvLyBDcmVhdGUgYSBzaW1wbGUgcGF0aCBhbGlhcyB0byBhbGxvdyBicm93c2VyaWZ5IHRvIHJlc29sdmVcbi8vIHRoZSBydW50aW1lIG9uIGEgc3VwcG9ydGVkIHBhdGguXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9janMvaGFuZGxlYmFycy5ydW50aW1lJylbJ2RlZmF1bHQnXTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IFJFUVVFU1RfTUVUSE9EUywgY29uZmlnLCBjdXN0b21GYWlsdXJlcyB9IGZyb20gJy4uL0NvbmZpZy9Db25maWcnO1xuY2xhc3MgQWpheCB7XG4gICAgY3NyZlRva2VuO1xuICAgIGFzeW5jIGFqYXgocGFyYW1zLCBib2R5KSB7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhwYXJhbXMuaGVhZGVycyk7XG4gICAgICAgIGlmIChwYXJhbXMudXJsID09PSBjb25maWcuYXBpLnNpZ25Jbi51cmwgfHwgcGFyYW1zLnVybCA9PT0gY29uZmlnLmFwaS5zaWduVXAudXJsKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLm1ldGhvZCAhPT0gUkVRVUVTVF9NRVRIT0RTLkdFVCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jc3JmVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDc3JmVG9rZW5Gcm9tU2VydmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDU1JGLVRva2VuJywgdGhpcy5jc3JmVG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29uZmlnLmhvc3R9JHtwYXJhbXMudXJsfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogcGFyYW1zLm1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCByZXNwb25zZUJvZHk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZUJvZHkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21TdGF0dXMgPSByZXNwb25zZUJvZHkuc3RhdHVzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VCb2R5Lm1lc3NhZ2UgPSBjdXN0b21GYWlsdXJlc1tjdXN0b21TdGF0dXNdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzcG9uc2VCb2R5ID0ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgcmVzcG9uc2VCb2R5XG4gICAgICAgIH07XG4gICAgfVxuICAgIDtcbiAgICBzZXRDc3JmVG9rZW4oY3NyZlRva2VuKSB7XG4gICAgICAgIHRoaXMuY3NyZlRva2VuID0gY3NyZlRva2VuO1xuICAgIH1cbiAgICA7XG4gICAgYXN5bmMgZ2V0Q3NyZlRva2VuRnJvbVNlcnZlcigpIHtcbiAgICAgICAgY29uc3QgY3NyZlJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29uZmlnLmhvc3R9JHtjb25maWcuYXBpLmNzcmYudXJsfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogY29uZmlnLmFwaS5jc3JmLm1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKGNvbmZpZy5hcGkuY3NyZi5oZWFkZXJzKSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjc3JmVG9rZW4gPSBhd2FpdCBjc3JmUmVzcG9uc2UuanNvbigpO1xuICAgICAgICB0aGlzLnNldENzcmZUb2tlbihjc3JmVG9rZW4uYm9keVsnY3NyZi10b2tlbiddKTtcbiAgICAgICAgcmV0dXJuIGNzcmZUb2tlbjtcbiAgICB9XG4gICAgYXN5bmMgY2hlY2tSZXNwb25zZVN0YXR1cyhyZXNwb25zZSwgY29uZikge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzLnRvU3RyaW5nKCkgaW4gY29uZi5zdGF0dXNlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cy50b1N0cmluZygpIGluIGNvbmYuc3RhdHVzZXMuZmFpbHVyZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5U3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAoa2V5U3RhdHVzID09PSAnNDAwJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbVN0YXR1cyA9IHJlc3BvbnNlLnJlc3BvbnNlQm9keS5zdGF0dXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICBtc2c6IGN1c3RvbUZhaWx1cmVzW2N1c3RvbVN0YXR1c10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgICAgICAgIG1zZzogY29uZmlnLmFwaS5zaWduaW4uc3RhdHVzZXMuZmFpbHVyZVtrZXlTdGF0dXNdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgICAgIG1zZzogJ9Cd0LXQvtC20LjQtNCw0L3QvdCw0Y8g0L7RiNC40LHQutCwJyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBBamF4KCk7XG4iLCJpbXBvcnQgJy4vQXBwLmNzcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBIZWFkZXJWaWV3IGZyb20gJy4vVmlld3MvSGVhZGVyVmlldy9IZWFkZXJWaWV3JztcbmltcG9ydCBIZWFkZXJDb250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlcnMvSGVhZGVyQ29udHJvbGxlci9IZWFkZXJDb250cm9sbGVyJztcbmltcG9ydCBNb2RhbFJpZ2h0VmlldyBmcm9tICcuL1ZpZXdzL01vZGFsUmlnaHRWaWV3L01vZGFsUmlnaHRWaWV3JztcbmltcG9ydCBNb2RhbFJpZ2h0Q29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXJzL01vZGFsUmlnaHRDb250cm9sbGVyL01vZGFsUmlnaHRDb250cm9sbGVyJztcbmltcG9ydCBGaWxtVmlldyBmcm9tICcuL1ZpZXdzL0ZpbG1WaWV3L0ZpbG1WaWV3JztcbmltcG9ydCBGaWxtQ29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXJzL0ZpbG1Db250cm9sbGVyL0ZpbG1Db250cm9sbGVyJztcbmltcG9ydCBTZXR0aW5nc1ZpZXcgZnJvbSAnLi9WaWV3cy9TZXR0aW5nc1ZpZXcvU2V0dGluZ3NWaWV3JztcbmltcG9ydCBTZXR0aW5nc0NvbnRyb2xsZXIgZnJvbSAnLi9Db250cm9sbGVycy9TZXR0aW5nc0NvbnRyb2xsZXIvU2V0dGluZ3NDb250cm9sbGVyJztcbmltcG9ydCBQZXJzb25WaWV3IGZyb20gJy4vVmlld3MvUGVyc29uVmlldy9QZXJzb25WaWV3JztcbmltcG9ydCBQZXJzb25Db250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlcnMvUGVyc29uQ29udHJvbGxlci9QZXJzb25Db250cm9sbGVyJztcbmltcG9ydCBNYWluVmlldyBmcm9tIFwiLi9WaWV3cy9NYWluVmlldy9NYWluVmlld1wiO1xuaW1wb3J0IE1haW5Db250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJzL01haW5Db250cm9sbGVyL01haW5Db250cm9sbGVyXCI7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4vTW9kZWxzL1VzZXJNb2RlbC9Vc2VyTW9kZWwnO1xuaW1wb3J0IEZpbG1Nb2RlbCBmcm9tICcuL01vZGVscy9GaWxtTW9kZWwvRmlsbU1vZGVsJztcbmltcG9ydCBQZXJzb25Nb2RlbCBmcm9tICcuL01vZGVscy9QZXJzb25Nb2RlbC9QZXJzb25Nb2RlbCc7XG5pbXBvcnQgU2VsZWN0aW9uTW9kZWwgZnJvbSBcIi4vTW9kZWxzL1NlbGVjdGlvbk1vZGVsL1NlbGVjdGlvbk1vZGVsXCI7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vUm91dGVyL1JvdXRlcic7XG5pbXBvcnQgcGF0aHMgZnJvbSAnLi9Sb3V0ZXIvUm91dGVyUGF0aHMnO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tICcuL0V2ZW50RGlzcGF0Y2hlci9FdmVudERpc3BhdGNoZXInO1xuY2xhc3MgQXBwIHtcbiAgICAvLyBWaWV3c1xuICAgIGhlYWRlclZpZXc7XG4gICAgbW9kYWxSaWdodFZpZXc7XG4gICAgZmlsbVZpZXc7XG4gICAgc2V0dGluZ3NWaWV3O1xuICAgIHBlcnNvblZpZXc7XG4gICAgbWFpblZpZXc7XG4gICAgLy8gQ29udHJvbGxlcnNcbiAgICBoZWFkZXJDb250cm9sbGVyO1xuICAgIG1vZGFsUmlnaHRDb250cm9sbGVyO1xuICAgIGZpbG1Db250cm9sbGVyO1xuICAgIHNldHRpbmdzQ29udHJvbGxlcjtcbiAgICBwZXJzb25Db250cm9sbGVyO1xuICAgIG1haW5Db250cm9sbGVyO1xuICAgIC8vIE1vZGVsc1xuICAgIHVzZXJNb2RlbDtcbiAgICBmaWxtTW9kZWw7XG4gICAgcGVyc29uTW9kZWw7XG4gICAgc2VsZWN0aW9uTW9kZWw7XG4gICAgLy8gRWxlbWVudHNcbiAgICByb290O1xuICAgIGhlYWRlcjtcbiAgICBmb290ZXI7XG4gICAgY29udGVudDtcbiAgICBtb2RhbFJpZ2h0O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRQYWdlKCk7XG4gICAgICAgIHRoaXMuaW5pdFZpZXdzKCk7XG4gICAgICAgIHRoaXMuaW5pdE1vZGVscygpO1xuICAgICAgICB0aGlzLmluaXRDb250cm9sbGVycygpO1xuICAgICAgICB0aGlzLmluaXRSb3V0ZXMoKTtcbiAgICB9XG4gICAgcnVuKHVybCkge1xuICAgICAgICByb3V0ZXIuc3RhcnQodXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog0KTRg9C90LrRhtC40Y8g0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXRgiDQsdCw0LfQvtCy0YPRjiDQstGR0YDRgdGC0LrRgyDRgdGC0YDQsNC90LjRhtGLXG4gICAgICogKNC/0YDQuNCy0LDRgtC90L7QtSDQv9C+0LvQtSDQutC70LDRgdGB0LApXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBpbml0UGFnZSgpIHtcbiAgICAgICAgY29uc3QgYmFzZUNvbXBvbmVudCA9IG5ldyBCYXNlQ29tcG9uZW50KGRvY3VtZW50LmJvZHkpO1xuICAgICAgICBiYXNlQ29tcG9uZW50LnNob3coKTtcbiAgICAgICAgdGhpcy5yb290ID0gYmFzZUNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCcuanMtcm9vdCcpO1xuICAgICAgICB0aGlzLmhlYWRlciA9IGJhc2VDb21wb25lbnQucXVlcnlTZWxlY3RvcignLmpzLWhlYWRlcicpO1xuICAgICAgICB0aGlzLmZvb3RlciA9IGJhc2VDb21wb25lbnQucXVlcnlTZWxlY3RvcignLmpzLWZvb3RlcicpO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBiYXNlQ29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jb250ZW50Jyk7XG4gICAgICAgIHRoaXMubW9kYWxSaWdodCA9IGJhc2VDb21wb25lbnQucXVlcnlTZWxlY3RvcignLmpzLW1vZGFsLS1yaWdodCcpO1xuICAgIH1cbiAgICA7XG4gICAgLyoqXG4gICAgICog0KTRg9C90LrRhtC40Y8g0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXRgiDQstGB0LUg0L7RgtC+0LHRgNCw0LbQtdC90LjRjyAodmlld3MpXG4gICAgICogKNC/0YDQuNCy0LDRgtC90L7QtSDQv9C+0LvQtSDQutC70LDRgdGB0LApXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBpbml0Vmlld3MoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyVmlldyA9IG5ldyBIZWFkZXJWaWV3KHRoaXMuaGVhZGVyKTtcbiAgICAgICAgdGhpcy5tb2RhbFJpZ2h0VmlldyA9IG5ldyBNb2RhbFJpZ2h0Vmlldyh0aGlzLm1vZGFsUmlnaHQpO1xuICAgICAgICB0aGlzLmZpbG1WaWV3ID0gbmV3IEZpbG1WaWV3KHRoaXMuY29udGVudCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NWaWV3ID0gbmV3IFNldHRpbmdzVmlldyh0aGlzLmNvbnRlbnQpO1xuICAgICAgICB0aGlzLnBlcnNvblZpZXcgPSBuZXcgUGVyc29uVmlldyh0aGlzLmNvbnRlbnQpO1xuICAgICAgICB0aGlzLm1haW5WaWV3ID0gbmV3IE1haW5WaWV3KHRoaXMuY29udGVudCk7XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQuNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdGCINCy0YHQtSDQvNC+0LXQtNC10LvQuCAobW9kZWxzKVxuICAgICAqICjQv9GA0LjQstCw0YLQvdC+0LUg0L/QvtC70LUg0LrQu9Cw0YHRgdCwKVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgaW5pdE1vZGVscygpIHtcbiAgICAgICAgdGhpcy51c2VyTW9kZWwgPSBuZXcgVXNlck1vZGVsKCk7XG4gICAgICAgIHRoaXMuZmlsbU1vZGVsID0gbmV3IEZpbG1Nb2RlbCgpO1xuICAgICAgICB0aGlzLnBlcnNvbk1vZGVsID0gbmV3IFBlcnNvbk1vZGVsKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uTW9kZWwgPSBuZXcgU2VsZWN0aW9uTW9kZWwoKTtcbiAgICB9XG4gICAgO1xuICAgIC8qKlxuICAgICAqINCk0YPQvdC60YbQuNGPINC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10YIg0LLRgdC1INC+0YLQvtCx0YDQsNC20LXQvdC40Y8gKHZpZXdzKVxuICAgICAqICjQv9GA0LjQstCw0YLQvdC+0LUg0L/QvtC70LUg0LrQu9Cw0YHRgdCwKVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgaW5pdENvbnRyb2xsZXJzKCkge1xuICAgICAgICB0aGlzLmhlYWRlckNvbnRyb2xsZXIgPSBuZXcgSGVhZGVyQ29udHJvbGxlcih0aGlzLmhlYWRlclZpZXcpO1xuICAgICAgICB0aGlzLm1vZGFsUmlnaHRDb250cm9sbGVyID0gbmV3IE1vZGFsUmlnaHRDb250cm9sbGVyKHRoaXMubW9kYWxSaWdodFZpZXcsIHRoaXMudXNlck1vZGVsKTtcbiAgICAgICAgdGhpcy5maWxtQ29udHJvbGxlciA9IG5ldyBGaWxtQ29udHJvbGxlcih0aGlzLmZpbG1WaWV3LCB0aGlzLmZpbG1Nb2RlbCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NDb250cm9sbGVyID0gbmV3IFNldHRpbmdzQ29udHJvbGxlcih0aGlzLnNldHRpbmdzVmlldywgdGhpcy51c2VyTW9kZWwpO1xuICAgICAgICB0aGlzLnBlcnNvbkNvbnRyb2xsZXIgPSBuZXcgUGVyc29uQ29udHJvbGxlcih0aGlzLnBlcnNvblZpZXcsIHRoaXMucGVyc29uTW9kZWwpO1xuICAgICAgICB0aGlzLm1haW5Db250cm9sbGVyID0gbmV3IE1haW5Db250cm9sbGVyKHRoaXMubWFpblZpZXcsIHsgc2VsZWN0aW9uczogdGhpcy5zZWxlY3Rpb25Nb2RlbCB9KTtcbiAgICB9XG4gICAgO1xuICAgIC8qKlxuICAgICAqINCk0YPQvdC60YbQuNGPINC30LDQtNCw0ZHRgiDRgdCy0Y/Qt9C4INC80LXQttC00YMg0YHRgtGA0LDQvdC40YbQsNC80LggKFVSTCAtPiDQvtCx0YDQsNCx0L7RgtGH0LjQuilcbiAgICAgKiAo0L/RgNC40LLQsNGC0L3QvtC1INC/0L7Qu9C1INC60LvQsNGB0YHQsClcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGluaXRSb3V0ZXMoKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlcyA9IFtcbiAgICAgICAgICAgIHsgcGF0aDogcGF0aHMubWFpbiwgaGFuZGxlcjogdGhpcy5oYW5kbGVSZWRpcmVjdFRvTWFpbiB9LFxuICAgICAgICAgICAgeyBwYXRoOiBwYXRocy5jYXRhbG9nLCBoYW5kbGVyOiB0aGlzLmhhbmRsZVJlZGlyZWN0VG9DYXRhbG9nIH0sXG4gICAgICAgICAgICB7IHBhdGg6IHBhdGhzLnN0b3JlLCBoYW5kbGVyOiB0aGlzLmhhbmRsZVJlZGlyZWN0VG9TdG9yZSB9LFxuICAgICAgICAgICAgeyBwYXRoOiBwYXRocy5teU1vdmllLCBoYW5kbGVyOiB0aGlzLmhhbmRsZVJlZGlyZWN0VG9NeU1vdmllIH0sXG4gICAgICAgICAgICB7IHBhdGg6IHBhdGhzLnNpZ25JbiwgaGFuZGxlcjogdGhpcy5oYW5kbGVSZWRpcmVjdFRvU2lnbkluIH0sXG4gICAgICAgICAgICB7IHBhdGg6IHBhdGhzLnNpZ25VcCwgaGFuZGxlcjogdGhpcy5oYW5kbGVSZWRpcmVjdFRvU2lnblVwIH0sXG4gICAgICAgICAgICB7IHBhdGg6IHBhdGhzLmxvZ291dCwgaGFuZGxlcjogdGhpcy5oYW5kbGVSZWRpcmVjdFRvTG9nb3V0IH0sXG4gICAgICAgICAgICB7IHBhdGg6IHBhdGhzLnNldHRpbmdzLCBoYW5kbGVyOiB0aGlzLmhhbmRsZVJlZGlyZWN0VG9TZXR0aW5ncyB9LFxuICAgICAgICAgICAgeyBwYXRoOiBwYXRocy5maWxtcywgaGFuZGxlcjogdGhpcy5oYW5kbGVSZWRpcmVjdFRvRmlsbSB9LFxuICAgICAgICAgICAgeyBwYXRoOiBwYXRocy5wZXJzb25zLCBoYW5kbGVyOiB0aGlzLmhhbmRsZVJlZGlyZWN0VG9QZXJzb24gfSxcbiAgICAgICAgXTtcbiAgICAgICAgcm91dGVzLmZvckVhY2goKHsgcGF0aCwgaGFuZGxlciB9KSA9PiB7XG4gICAgICAgICAgICByb3V0ZXIuYWRkUnVsZShwYXRoLCBoYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xuICAgIGhhbmRsZVJlZGlyZWN0VG9NYWluKCkge1xuICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgndW5tb3VudC1hbGwnKTtcbiAgICAgICAgdGhpcy51c2VyTW9kZWwuYXV0aFVzZXJCeUNvb2tpZSgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgncmVuZGVyLXByb2ZpbGVCdXR0b24nKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgncmVuZGVyLXNpZ25JbkJ1dHRvbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gbW91bnRcbiAgICAgICAgdGhpcy5oZWFkZXJDb250cm9sbGVyLm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgIHRoaXMubWFpbkNvbnRyb2xsZXIubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgLy8gc3RhdGVzXG4gICAgICAgIHRoaXMuaGVhZGVyVmlldy5jaGFuZ2VBY3RpdmVIZWFkZXJMaXN0SXRlbSgnLycpO1xuICAgIH1cbiAgICA7XG4gICAgaGFuZGxlUmVkaXJlY3RUb1NpZ25JbigpIHtcbiAgICAgICAgdGhpcy51c2VyTW9kZWwuYXV0aFVzZXJCeUNvb2tpZSgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgocm91dGVyLmdldE5lYXJlc3ROb3RBdXRoVXJsKCkpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdtb2RhbFJpZ2h0LXNldFNpZ25JbicsIHRoaXMudXNlck1vZGVsKTtcbiAgICAgICAgICAgIHRoaXMubW9kYWxSaWdodENvbnRyb2xsZXIubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVSZWRpcmVjdFRvU2lnblVwKCkge1xuICAgICAgICB0aGlzLnVzZXJNb2RlbC5hdXRoVXNlckJ5Q29va2llKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJvdXRlci5nb1RvUGF0aChyb3V0ZXIuZ2V0TmVhcmVzdE5vdEF1dGhVcmwoKSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ21vZGFsUmlnaHQtc2V0U2lnblVwJywgdGhpcy51c2VyTW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5tb2RhbFJpZ2h0Q29udHJvbGxlci5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xuICAgIGhhbmRsZVJlZGlyZWN0VG9DYXRhbG9nKCkge1xuICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgndW5tb3VudC1hbGwnKTtcbiAgICAgICAgdGhpcy51c2VyTW9kZWwuYXV0aFVzZXJCeUNvb2tpZSgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgncmVuZGVyLXByb2ZpbGVCdXR0b24nKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgncmVuZGVyLXNpZ25JbkJ1dHRvbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gbW91bnRcbiAgICAgICAgdGhpcy5oZWFkZXJDb250cm9sbGVyLm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgIC8vIHN0YXRlc1xuICAgICAgICB0aGlzLmhlYWRlclZpZXcuY2hhbmdlQWN0aXZlSGVhZGVyTGlzdEl0ZW0oJy9jYXRhbG9nJyk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVSZWRpcmVjdFRvU3RvcmUoKSB7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCd1bm1vdW50LWFsbCcpO1xuICAgICAgICB0aGlzLnVzZXJNb2RlbC5hdXRoVXNlckJ5Q29va2llKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdyZW5kZXItcHJvZmlsZUJ1dHRvbicpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdyZW5kZXItc2lnbkluQnV0dG9uJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBtb3VudFxuICAgICAgICB0aGlzLmhlYWRlckNvbnRyb2xsZXIubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgLy8gc3RhdGVzXG4gICAgICAgIHRoaXMuaGVhZGVyVmlldy5jaGFuZ2VBY3RpdmVIZWFkZXJMaXN0SXRlbSgnL3N0b3JlJyk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVSZWRpcmVjdFRvTXlNb3ZpZSgpIHtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VubW91bnQtYWxsJyk7XG4gICAgICAgIHRoaXMudXNlck1vZGVsLmF1dGhVc2VyQnlDb29raWUoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1wcm9maWxlQnV0dG9uJyk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1zaWduSW5CdXR0b24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIG1vdW50XG4gICAgICAgIHRoaXMuaGVhZGVyQ29udHJvbGxlci5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICAvLyBzdGF0ZXNcbiAgICAgICAgdGhpcy5oZWFkZXJWaWV3LmNoYW5nZUFjdGl2ZUhlYWRlckxpc3RJdGVtKCcvbXktbW92aWUnKTtcbiAgICB9XG4gICAgO1xuICAgIGhhbmRsZVJlZGlyZWN0VG9TZXR0aW5ncygpIHtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VubW91bnQtYWxsJyk7XG4gICAgICAgIHRoaXMudXNlck1vZGVsLmF1dGhVc2VyQnlDb29raWUoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gbW91bnRcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyQ29udHJvbGxlci5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc0NvbnRyb2xsZXIubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgICAgIC8vIHN0YXRlc1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJWaWV3LmNoYW5nZUFjdGl2ZUhlYWRlckxpc3RJdGVtKCcjJyk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzVmlldy5jaGFuZ2VBY3RpdmVMZWZ0TWVudUl0ZW0oJy9zZXR0aW5ncycpO1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VzZXItY2hhbmdlZCcsIHRoaXMudXNlck1vZGVsLmdldEN1cnJlbnRVc2VyKCkpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdyZW5kZXItc2lnbkluQnV0dG9uJyk7XG4gICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgocm91dGVyLmdldE5lYXJlc3ROb3RBdXRoVXJsKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xuICAgIGhhbmRsZVJlZGlyZWN0VG9GaWxtKGRhdGEpIHtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VubW91bnQtYWxsJyk7XG4gICAgICAgIHRoaXMudXNlck1vZGVsLmF1dGhVc2VyQnlDb29raWUoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1wcm9maWxlQnV0dG9uJyk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1zaWduSW5CdXR0b24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YVswXSkge1xuICAgICAgICAgICAgcm91dGVyLnNob3dVbmtub3duUGFnZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbG1JZCA9IGRhdGFbMF07XG4gICAgICAgIC8vIG1vdW50XG4gICAgICAgIHRoaXMuaGVhZGVyQ29udHJvbGxlci5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgnbmV3LXBsYXllcicpO1xuICAgICAgICB0aGlzLmZpbG1Db250cm9sbGVyLm1vdW50Q29tcG9uZW50KHsgaWQ6IGZpbG1JZC50b1N0cmluZygpIH0pO1xuICAgICAgICAvLyBzdGF0ZXNcbiAgICAgICAgdGhpcy5oZWFkZXJWaWV3LmNoYW5nZUFjdGl2ZUhlYWRlckxpc3RJdGVtKCcjJyk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVSZWRpcmVjdFRvUGVyc29uKGRhdGEpIHtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VubW91bnQtYWxsJyk7XG4gICAgICAgIHRoaXMudXNlck1vZGVsLmF1dGhVc2VyQnlDb29raWUoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1wcm9maWxlQnV0dG9uJyk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1zaWduSW5CdXR0b24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YVswXSkge1xuICAgICAgICAgICAgcm91dGVyLnNob3dVbmtub3duUGFnZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBlcnNvbklkID0gZGF0YVswXTtcbiAgICAgICAgLy8gbW91bnRcbiAgICAgICAgdGhpcy5oZWFkZXJDb250cm9sbGVyLm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgIHRoaXMucGVyc29uQ29udHJvbGxlci5tb3VudENvbXBvbmVudCh7IGlkOiBwZXJzb25JZC50b1N0cmluZygpIH0pO1xuICAgICAgICAvLyBzdGF0ZXNcbiAgICAgICAgdGhpcy5oZWFkZXJWaWV3LmNoYW5nZUFjdGl2ZUhlYWRlckxpc3RJdGVtKCcjJyk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVSZWRpcmVjdFRvTG9nb3V0KCkge1xuICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgncmVkaXJlY3QnLCBwYXRocy5sb2dvdXQpO1xuICAgICAgICB0aGlzLnVzZXJNb2RlbC5sb2dvdXRVc2VyKCk7XG4gICAgICAgIHJvdXRlci5nb1RvUGF0aChwYXRocy5tYWluKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IElDb21wb25lbnQgZnJvbSAnLi4vSUNvbXBvbmVudC9JQ29tcG9uZW50JztcbmltcG9ydCBCYXJDb21wb25lbnRUZW1wbGF0ZSBmcm9tICcuL0JhckNvbXBvbmVudC5oYnMnO1xuaW1wb3J0ICcuL0JhckNvbXBvbmVudC5jc3MnO1xuaW1wb3J0IERpdkNvbXBvbmVudCBmcm9tICcuLi9EaXZDb21wb25lbnQvRGl2Q29tcG9uZW50Jztcbi8vIFRPRE9cbi8vIHR5cGUgRXZlbnRUdXBsZSA9IFtzdHJpbmcsIChlOiBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCkgPT4gdm9pZF07XG5jbGFzcyBCYXJDb21wb25lbnQgZXh0ZW5kcyBJQ29tcG9uZW50IHtcbiAgICBpc0RyYWdnaW5nO1xuICAgIGZ1bGxCYXI7XG4gICAgbG9hZEJhcjtcbiAgICBsb2FkUHJvZ3Jlc3NCYXI7XG4gICAgY3VycmVudEJhcjtcbiAgICBiYXJIZWxwZXI7XG4gICAgY3VycmVudEJhckNpcmNsZTtcbiAgICBtYXhWYWx1ZTtcbiAgICBwb3N0c2NyaXB0O1xuICAgIC8vIFRPRE9cbiAgICAvLyBwcml2YXRlIGV2ZW50VHVwbGVzOiBFdmVudFR1cGxlW10gPSBbXG4gICAgLy8gICAgIFtcIm1vdXNlZG93blwiLCAoZTogTW91c2VFdmVudCkgPT4geyB0aGlzLm9uTW91c2VEb3duKGUpOyB9XSxcbiAgICAvLyAgICAgLy8gW1wibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKV0sXG4gICAgLy8gICAgIC8vIFtcIm1vdXNldXBcIiwgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKV0sXG4gICAgLy8gICAgIC8vIFtcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoU3RhcnQuYmluZCh0aGlzKV0sXG4gICAgLy8gICAgIC8vIFtcInRvdWNobW92ZVwiLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcyldLFxuICAgIC8vICAgICAvLyBbXCJ0b3VjaGVuZFwiLCB0aGlzLm9uVG91Y2hFbmQuYmluZCh0aGlzKV0sXG4gICAgLy8gXTtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHRlbXBsYXRlID0gJycsIHRvcEVsZW1lbnQgPSAnJywgZGF0YSkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIEJhckNvbXBvbmVudFRlbXBsYXRlKHsgYmFyQ2xhc3M6IGRhdGEuYmFyQ2xhc3MgfSksICcuanMtYmFyJyk7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1heFZhbHVlID0gMi4zNztcbiAgICAgICAgdGhpcy5wb3N0c2NyaXB0ID0gJyc7XG4gICAgICAgIHRoaXMuZnVsbEJhciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYmFyX19mdWxsJyk7XG4gICAgICAgIHRoaXMubG9hZEJhciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYmFyX19sb2FkJyk7XG4gICAgICAgIHRoaXMubG9hZFByb2dyZXNzQmFyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXItbG9hZF9fcHJvZ3Jlc3MnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXJfX2N1cnJlbnQnKTtcbiAgICAgICAgdGhpcy5pbml0SGlkZGVuRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICA7XG4gICAgaW5pdEhpZGRlbkVsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCBiYXJIZWxwZXJEaXYgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Jhcl9faGVscGVyJyk7XG4gICAgICAgIHRoaXMuYmFySGVscGVyID0gbmV3IERpdkNvbXBvbmVudChiYXJIZWxwZXJEaXYsICcnLCAnJywgeyBjbGFzczogJ2Jhcl9faGVscGVyJyB9KTtcbiAgICAgICAgY29uc3QgY3VycmVudEJhckNpcmNsZURpdiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjYmFyX19jdXJyZW50LWNpcmNsZScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXJDaXJjbGUgPSBuZXcgRGl2Q29tcG9uZW50KGN1cnJlbnRCYXJDaXJjbGVEaXYsICcnLCAnJywgeyBjbGFzczogJ2Jhcl9fY3VycmVudC1jaXJjbGUnIH0pO1xuICAgIH1cbiAgICA7XG4gICAgdXBkYXRlUHJvZ3Jlc3NCYXIoZSkge1xuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IDA7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xuICAgICAgICAgICAgcGVyY2VudGFnZSA9IHRoaXMuY2FsY3VsYXRlUGVyY2VudGFnZShlLmNsaWVudFgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGVyY2VudGFnZSA9IHRoaXMuY2FsY3VsYXRlUGVyY2VudGFnZShlLnRvdWNoZXNbMF0uY2xpZW50WCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50QmFyLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudGFnZX0lYDtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFyQ2lyY2xlLmRpdi5zdHlsZS5sZWZ0ID0gYCR7cGVyY2VudGFnZX0lYDtcbiAgICB9XG4gICAgO1xuICAgIGNhbGN1bGF0ZVBlcmNlbnRhZ2UoY3Vyc29yWCkge1xuICAgICAgICBjb25zdCBiYXJXaWR0aCA9IHRoaXMuZnVsbEJhci5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3QgY2xpY2tPZmZzZXQgPSBjdXJzb3JYIC0gdGhpcy5mdWxsQmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgIHJldHVybiAoY2xpY2tPZmZzZXQgLyBiYXJXaWR0aCkgKiAxMDA7XG4gICAgfVxuICAgIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgLy8gdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgLy8gY29uc3QgcGVyY2VudGFnZSA9IHRoaXMuY2FsY3VsYXRlUGVyY2VudGFnZShlLmNsaWVudFgpO1xuICAgICAgICAvL1xuICAgICAgICAvLyB0aGlzLmN1cnJlbnRCYXJDaXJjbGUuZGl2LnN0eWxlLmxlZnQgPSBgJHtwZXJjZW50YWdlfSVgO1xuICAgICAgICAvLyB0aGlzLmN1cnJlbnRCYXIuc3R5bGUud2lkdGggPSBgJHtwZXJjZW50YWdlfSVgO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25Nb3VzZURvd24nKVxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKGUpO1xuICAgIH1cbiAgICA7XG4gICAgb25Nb3VzZU1vdmUoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25Nb3VzZU1vdmUnKTtcbiAgICAgICAgY29uc3QgY3Vyc29yWCA9IGUuY2xpZW50WDtcbiAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IHRoaXMuY2FsY3VsYXRlUGVyY2VudGFnZShjdXJzb3JYKTtcbiAgICAgICAgdGhpcy5iYXJIZWxwZXIuZGl2LnN0eWxlLmxlZnQgPSBgJHtwZXJjZW50YWdlfSVgO1xuICAgICAgICB0aGlzLmJhckhlbHBlci5kaXYuaW5uZXJUZXh0ID0gKHBlcmNlbnRhZ2UgLyAxMDAgKiB0aGlzLm1heFZhbHVlKS50b0ZpeGVkKDIpOyAvLyBUT0RPIGNoYW5nZSB0cmFpbGVyIHRpbWVcbiAgICAgICAgdGhpcy5iYXJIZWxwZXIuc2hvdygpO1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXJDaXJjbGUuc2hvdygpO1xuICAgICAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBvbk1vdXNlVXAoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25Nb3VzZVVwJylcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIDtcbiAgICBvbk1vdXNlT3V0KGUpIHtcbiAgICAgICAgdGhpcy5iYXJIZWxwZXIuaGlkZSgpOyAvLyBUT0RPIGNoZWNrIGJlZm9yZSBoaWRlP1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXJDaXJjbGUuaGlkZSgpO1xuICAgIH1cbiAgICBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25Ub3VjaFN0YXJ0JylcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgdG91Y2hFdmVudFdpdGhUYXJnZXQgPSBlO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKHRvdWNoRXZlbnRXaXRoVGFyZ2V0KTtcbiAgICB9XG4gICAgO1xuICAgIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uVG91Y2hNb3ZlJylcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgICAgICAgICAgY29uc3QgdG91Y2hFdmVudFdpdGhUYXJnZXQgPSBlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0Jhcih0b3VjaEV2ZW50V2l0aFRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIG9uVG91Y2hFbmQoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25Ub3VjaEVuZCcpXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH1cbiAgICA7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB0aGlzLm9uTW91c2VEb3duKGUpKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHRoaXMub25Nb3VzZU1vdmUoZSkpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHRoaXMub25Nb3VzZVVwKGUpKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZSkgPT4gdGhpcy5vbk1vdXNlT3V0KGUpKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChlKSA9PiB0aGlzLm9uVG91Y2hTdGFydChlKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIChlKSA9PiB0aGlzLm9uVG91Y2hNb3ZlKGUpKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoZSkgPT4gdGhpcy5vblRvdWNoRW5kKGUpKTtcbiAgICB9XG4gICAgO1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4gdGhpcy5vbk1vdXNlRG93bihlKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB0aGlzLm9uTW91c2VNb3ZlKGUpKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlKSA9PiB0aGlzLm9uTW91c2VVcChlKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGUpID0+IHRoaXMub25Nb3VzZU91dChlKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZSkgPT4gdGhpcy5vblRvdWNoU3RhcnQoZSkpO1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCAoZSkgPT4gdGhpcy5vblRvdWNoTW92ZShlKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgKGUpID0+IHRoaXMub25Ub3VjaEVuZChlKSk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IEJhckNvbXBvbmVudDtcbiIsImltcG9ydCBJQ29tcG9uZW50IGZyb20gJy4uL0lDb21wb25lbnQvSUNvbXBvbmVudCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudFRlbXBsYXRlIGZyb20gJy4vQmFzZUNvbXBvbmVudC5oYnMnO1xuaW1wb3J0ICcuL0Jhc2VDb21wb25lbnQuY3NzJztcbmNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBJQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHRlbXBsYXRlID0gJycsIHRvcEVsZW1lbnQgPSAnJywgZGF0YSkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIEJhc2VDb21wb25lbnRUZW1wbGF0ZShkYXRhKSwgJy5qcy1yb290Jyk7XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IEJhc2VDb21wb25lbnQ7XG4iLCJpbXBvcnQgSUNvbXBvbmVudCBmcm9tICcuLi9JQ29tcG9uZW50L0lDb21wb25lbnQnO1xuaW1wb3J0IEJ1dHRvbkNvbXBvbmVudFRlbXBsYXRlIGZyb20gJy4vQnV0dG9uQ29tcG9uZW50Lmhicyc7XG5pbXBvcnQgJy4vQnV0dG9uQ29tcG9uZW50LmNzcyc7XG5jbGFzcyBCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBJQ29tcG9uZW50IHtcbiAgICBidXR0b25Qcm9wcyA9IHtcbiAgICAgICAgY29vcmRpbmF0ZVg6IHsgbmFtZTogJy0tY29vcmQteCcsIHZhbHVlOiAwIH0sXG4gICAgICAgIGNvb3JkaW5hdGVZOiB7IG5hbWU6ICctLWNvb3JkLXknLCB2YWx1ZTogMCB9LFxuICAgICAgICBzaXplU3F1YXJlOiB7IG5hbWU6ICctLXNpemUtc3F1YXJlJywgdmFsdWU6IDAgfSxcbiAgICAgICAgZGlhbWV0ZXJIaWdobGlnaHQ6IHsgbmFtZTogJy0tZGlhbWV0ZXItaGlnaGxpZ2h0JywgdmFsdWU6IDAgfSxcbiAgICB9O1xuICAgIGJ1dHRvbjtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHRlbXBsYXRlID0gJycsIHRvcEVsZW1lbnQgPSAnJywgZGF0YSkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIEJ1dHRvbkNvbXBvbmVudFRlbXBsYXRlKGRhdGEpLCAnLmpzLWJ1dHRvbicpO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKSB8fCB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2V0U2l6ZVNxdWFyZSgpO1xuICAgICAgICB0aGlzLnNldERpYW1ldGVySGlnaGxpZ2h0KCk7XG4gICAgICAgIHRoaXMuYmluZE1vdXNlTW92ZUV2ZW50KHRoaXMub25Nb3VzZU1vdmVFdmVudCk7XG4gICAgfVxuICAgIDtcbiAgICBzZXRTaXplU3F1YXJlKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbldpZHRoID0gdGhpcy5idXR0b24ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBjb25zdCBidXR0b25IZWlnaHQgPSB0aGlzLmJ1dHRvbi5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblByb3BzWydzaXplU3F1YXJlJ10udmFsdWUgPSBNYXRoLnNxcnQoYnV0dG9uV2lkdGggKiBidXR0b25XaWR0aCArIGJ1dHRvbkhlaWdodCAqIGJ1dHRvbkhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLmJ1dHRvblByb3BzWydzaXplU3F1YXJlJ10ubmFtZSwgYCR7dGhpcy5idXR0b25Qcm9wc1snc2l6ZVNxdWFyZSddLnZhbHVlfXB4YCk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cbiAgICA7XG4gICAgc2V0RGlhbWV0ZXJIaWdobGlnaHQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uV2lkdGggPSB0aGlzLmJ1dHRvbi5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkhlaWdodCA9IHRoaXMuYnV0dG9uLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGRpYW1ldGVyID0gTWF0aC5zcXJ0KGJ1dHRvbldpZHRoICogYnV0dG9uV2lkdGggKyBidXR0b25IZWlnaHQgKiBidXR0b25IZWlnaHQpO1xuICAgICAgICAgICAgY29uc3QgbXVsdGlwbHlTcXJ0ID0gTWF0aC5zcXJ0KGJ1dHRvbldpZHRoICogYnV0dG9uSGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uUHJvcHNbJ2RpYW1ldGVySGlnaGxpZ2h0J10udmFsdWUgPSBkaWFtZXRlciArIG11bHRpcGx5U3FydDtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuYnV0dG9uUHJvcHNbJ2RpYW1ldGVySGlnaGxpZ2h0J10ubmFtZSwgYCR7dGhpcy5idXR0b25Qcm9wc1snZGlhbWV0ZXJIaWdobGlnaHQnXS52YWx1ZX1weGApO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG4gICAgYmxvY2soKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgO1xuICAgIHVuYmxvY2soKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIDtcbiAgICBiaW5kQ2xpY2tFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgdW5iaW5kQ2xpY2tFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgYmluZE1vdXNlTW92ZUV2ZW50KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGxpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgdW5iaW5kTW91c2VNb3ZlRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5idXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbiAgICBvbk1vdXNlTW92ZUV2ZW50KGUpIHtcbiAgICAgICAgY29uc3QgbW91c2VFdmVudCA9IGU7XG4gICAgICAgIHRoaXMuYnV0dG9uUHJvcHNbJ2Nvb3JkaW5hdGVYJ10udmFsdWUgPSBtb3VzZUV2ZW50Lm9mZnNldFg7XG4gICAgICAgIHRoaXMuYnV0dG9uUHJvcHNbJ2Nvb3JkaW5hdGVZJ10udmFsdWUgPSBtb3VzZUV2ZW50Lm9mZnNldFk7XG4gICAgICAgIHRoaXMuYnV0dG9uLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuYnV0dG9uUHJvcHNbJ2Nvb3JkaW5hdGVYJ10ubmFtZSwgYCR7dGhpcy5idXR0b25Qcm9wc1snY29vcmRpbmF0ZVgnXS52YWx1ZX1weGApO1xuICAgICAgICB0aGlzLmJ1dHRvbi5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLmJ1dHRvblByb3BzWydjb29yZGluYXRlWSddLm5hbWUsIGAke3RoaXMuYnV0dG9uUHJvcHNbJ2Nvb3JkaW5hdGVZJ10udmFsdWV9cHhgKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQ29tcG9uZW50O1xuIiwiaW1wb3J0IElDb21wb25lbnQgZnJvbSAnLi4vSUNvbXBvbmVudC9JQ29tcG9uZW50JztcbmltcG9ydCBEaXZDb21wb25lbnRUZW1wbGF0ZSBmcm9tICcuL0RpdkNvbXBvbmVudC5oYnMnO1xuY2xhc3MgRGl2Q29tcG9uZW50IGV4dGVuZHMgSUNvbXBvbmVudCB7XG4gICAgZGl2O1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGVtcGxhdGUgPSAnJywgdG9wRWxlbWVudCA9ICcnLCBkYXRhKSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgRGl2Q29tcG9uZW50VGVtcGxhdGUoZGF0YSksICdkaXYnKTtcbiAgICAgICAgdGhpcy5kaXYgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2JykgfHwgdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBEaXZDb21wb25lbnQ7XG4iLCJpbXBvcnQgSUNvbXBvbmVudCBmcm9tICcuLi9JQ29tcG9uZW50L0lDb21wb25lbnQnO1xuaW1wb3J0IERyb3Bkb3duQnV0dG9uQ29tcG9uZW50VGVtcGxhdGUgZnJvbSAnLi9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC5oYnMnO1xuaW1wb3J0ICcuL0Ryb3Bkb3duQnV0dG9uQ29tcG9uZW50LmNzcyc7XG5pbXBvcnQgTGlua0NvbXBvbmVudCBmcm9tICcuLi9MaW5rQ29tcG9uZW50L0xpbmtDb21wb25lbnQnO1xuY2xhc3MgRHJvcGRvd25CdXR0b25Db21wb25lbnQgZXh0ZW5kcyBJQ29tcG9uZW50IHtcbiAgICBkcm9wZG93bkNvbnRlbnRJdGVtcztcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHRlbXBsYXRlID0gJycsIHRvcEVsZW1lbnQgPSAnJywgZGF0YSkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIERyb3Bkb3duQnV0dG9uQ29tcG9uZW50VGVtcGxhdGUoeyBkYXRhQWN0aW9uOiBkYXRhLmRhdGFBY3Rpb24sIGF2YXRhcjogZGF0YS5hdmF0YXIgfSksICcuanMtZHJvcGRvd24nKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bkNvbnRlbnRJdGVtcyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZHJvcGRvd24tY29udGVudC1jb250YWluZXJfX2l0ZW1zJyk7XG4gICAgICAgIGRhdGEuaXRlbXM/LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gbmV3IExpbmtDb21wb25lbnQodGhpcy5kcm9wZG93bkNvbnRlbnRJdGVtcywgJycsICcnLCBpdGVtKTtcbiAgICAgICAgICAgIGxpbmsuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcy5iaW5kQ2xpY2tFdmVudCh0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgLy8gLyoqXG4gICAgLy8gICog0KTRg9C90LrRhtC40Y8g0LTQvtCx0LDQstC70LXQvdC40Y8g0L7QsdGA0LDQsdC+0YLRh9C40LrQsCDRgdC+0LHRi9GC0LjRjyDQvdCw0LbQsNGC0LjRjyDQvdCwINC60L7QvNC/0L7QvdC10L3RglxuICAgIC8vICAqIEBwYXJhbSAge2FueX0gbGlzdGVuZXIgLSBDYWxsYmFjayDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0YHQvtCx0YvRgtC40Y9cbiAgICAvLyAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAvLyAgKi9cbiAgICAvLyBwdWJsaWMgYmluZENsaWNrRXZlbnQobGlzdGVuZXI6IGFueSk6IHZvaWQge1xuICAgIC8vICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICAvLyB9O1xuICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgLy8gdGhpcy5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25fX2NvbnRlbnQnKT8uY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd25fX2NvbnRlbnRfX3Nob3cnKTtcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBUT0RPOiBIb3cgdG8gY2hlY2sgaXQgSSBjbGlja2VkIHNvbWV3aGVyZSBub3QgdG8gdGhpcy4gQWRkIHRyYW5zcGFyZW50IGRpdiBhbmQgaGFuZGxlQ2xpY2sgb24gaXQ/XG4gICAgICAgIC8vIGlmICghKDxIVE1MRWxlbWVudD5lLnRhcmdldCkubWF0Y2hlcygnLmRyb3Bkb3duX19idXR0b24nKSkge1xuICAgICAgICAvLyAgICAgY29uc3QgZHJvcGRvd25JdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duX19jb250ZW50Jyk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhkcm9wZG93bkl0ZW1zKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGZvciAobGV0IGl0ZW0gb2YgZHJvcGRvd25JdGVtcykge1xuICAgICAgICAvLyAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd25fX2NvbnRlbnRfX3Nob3cnKSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duX19jb250ZW50X19zaG93Jyk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duQnV0dG9uQ29tcG9uZW50O1xuIiwiaW1wb3J0IElDb21wb25lbnQgZnJvbSAnLi4vSUNvbXBvbmVudC9JQ29tcG9uZW50JztcbmltcG9ydCBGb3JtQ29tcG9uZW50VGVtcGxhdGUgZnJvbSAnLi9Gb3JtQ29tcG9uZW50Lmhicyc7XG5pbXBvcnQgJy4vRm9ybUNvbXBvbmVudC5jc3MnO1xuaW1wb3J0IElucHV0Q29tcG9uZW50IGZyb20gJy4uL0lucHV0Q29tcG9uZW50L0lucHV0Q29tcG9uZW50JztcbmltcG9ydCBCdXR0b25Db21wb25lbnQgZnJvbSAnLi4vQnV0dG9uQ29tcG9uZW50L0J1dHRvbkNvbXBvbmVudCc7XG5pbXBvcnQgTGlua0NvbXBvbmVudCBmcm9tIFwiLi4vTGlua0NvbXBvbmVudC9MaW5rQ29tcG9uZW50XCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUlucHV0LCB2YWxpZGF0ZVBhc3N3b3JkcyB9IGZyb20gJy4uLy4uL1V0aWxzL1ZhbGlkYXRvcnMvVmFsaWRhdG9yJztcbmNsYXNzIEZvcm1Db21wb25lbnQgZXh0ZW5kcyBJQ29tcG9uZW50IHtcbiAgICBpbnB1dHM7XG4gICAgc3VibWl0QnV0dG9uO1xuICAgIGxpbmtzO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGVtcGxhdGUgPSAnJywgdG9wRWxlbSA9ICcnLCBkYXRhKSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgRm9ybUNvbXBvbmVudFRlbXBsYXRlKHsgZm9ybUlkOiBkYXRhPy5mb3JtSWQsIGVuY3R5cGU6IGRhdGE/LmVuY3R5cGUgfSksICcuanMtZm9ybScpO1xuICAgICAgICBjb25zdCBmb3JtQ29udGVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fY29udGVudCcpO1xuICAgICAgICBjb25zdCBmb3JtRm9vdGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19mb290ZXInKTtcbiAgICAgICAgdGhpcy5pbnB1dHMgPSBbXTtcbiAgICAgICAgdGhpcy5saW5rcyA9IFtdO1xuICAgICAgICBkYXRhPy5pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dENvbXBvbmVudCA9IG5ldyBJbnB1dENvbXBvbmVudChmb3JtQ29udGVudCwgJycsICcnLCBpbnB1dCk7XG4gICAgICAgICAgICBpbnB1dENvbXBvbmVudC5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLmlucHV0cy5wdXNoKGlucHV0Q29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uID0gbmV3IEJ1dHRvbkNvbXBvbmVudChmb3JtQ29udGVudCwgJycsICcnLCBkYXRhPy5idXR0b24pO1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5zaG93KCk7XG4gICAgICAgIGRhdGE/LmxpbmtzPy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlua0VsZW1lbnQgPSBuZXcgTGlua0NvbXBvbmVudChmb3JtRm9vdGVyLCAnJywgJycsIGxpbmspO1xuICAgICAgICAgICAgbGlua0VsZW1lbnQuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5saW5rcy5wdXNoKGxpbmtFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICAvLyBwdWJsaWMgZ2V0RGF0YSgpOiB7IGlkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaW5wdXRzLm1hcCgoaW5wdXRDb21wb25lbnQpID0+IHtcbiAgICAvLyAgICAgICAgIHJldHVybiBpbnB1dENvbXBvbmVudC5nZXREYXRhKCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH07XG4gICAgdmFsaWRhdGVFbXB0eUZpZWxkcyhmaWVsZHMpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkcy5tYXAoZmllbGQgPT4ge1xuICAgICAgICAgICAgaWYgKGZpZWxkLmlzRW1wdHlEYXRhKCkpIHtcbiAgICAgICAgICAgICAgICBmaWVsZC5zaG93RXJyb3JNc2coJ9Cf0YPRgdGC0L7QtSDQv9C+0LvQtScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZWxkLmhpZGVFcnJvck1zZygpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pLmV2ZXJ5KGlzVmFsaWQgPT4gaXNWYWxpZCk7XG4gICAgfVxuICAgIDtcbiAgICB2YWxpZGF0ZVBhc3N3b3JkRmllbGRzKCkge1xuICAgICAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRmllbGQgPSB0aGlzLmZpbmRJbnB1dENvbXBvbmVudCgncGFzc3dvcmQnKTtcbiAgICAgICAgY29uc3QgcmVwZWF0UGFzc3dvcmRGaWVsZCA9IHRoaXMuZmluZElucHV0Q29tcG9uZW50KCdyZXBlYXQtcGFzc3dvcmQnKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkRmllbGQpIHsgLy8gSWYgZXhpc3RzIHBhc3N3b3JkIGZpZWxkXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZWRQYXNzd29yZCA9IHZhbGlkYXRlSW5wdXQocGFzc3dvcmRGaWVsZC5nZXREYXRhKCkpO1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZWRQYXNzd29yZC5pc1ZhbGlkKSB7IC8vIElmIGRhdGEgaW4gcGFzc3dvcmQgZmllbGQgaXMgaW5jb3JyZWN0XG4gICAgICAgICAgICAgICAgcGFzc3dvcmRGaWVsZC5zaG93RXJyb3JNc2codmFsaWRhdGVkUGFzc3dvcmQuZXJyb3JNc2cpO1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkRmllbGQuaGlkZUVycm9yTXNnKCk7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVwZWF0UGFzc3dvcmRGaWVsZCkgeyAvLyBJZiBleGlzdHMgcmVwZWF0IHBhc3N3b3JkIGZpZWxkXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVkUGFzc3dvcmRzID0gdmFsaWRhdGVQYXNzd29yZHMocGFzc3dvcmRGaWVsZC5pbnB1dC52YWx1ZSwgcmVwZWF0UGFzc3dvcmRGaWVsZC5pbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZWRQYXNzd29yZHMuaXNWYWxpZCkgeyAvLyBJZiBwYXNzd29yZHMgbm90IG1hdGNoXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdFBhc3N3b3JkRmllbGQuc2hvd0Vycm9yTXNnKHZhbGlkYXRlZFBhc3N3b3Jkcy5wYXNzd29yZEVycm9yTXNnKTtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0UGFzc3dvcmRGaWVsZC5oaWRlRXJyb3JNc2coKTtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cbiAgICA7XG4gICAgdmFsaWRhdGVJbnB1dEZpZWxkcygpIHtcbiAgICAgICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBpbnB1dEZpZWxkcyA9IHRoaXMuaW5wdXRzLmZpbHRlcihpbnB1dENvbXBvbmVudCA9PiBpbnB1dENvbXBvbmVudC5pbnB1dC5pZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3Bhc3N3b3JkJykgPT09IC0xKTtcbiAgICAgICAgaWYgKGlucHV0RmllbGRzKSB7XG4gICAgICAgICAgICBpbnB1dEZpZWxkcy5mb3JFYWNoKGlucHV0RmllbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlZElucHV0ID0gdmFsaWRhdGVJbnB1dChpbnB1dEZpZWxkLmdldERhdGEoKSk7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZWRJbnB1dC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RmllbGQuc2hvd0Vycm9yTXNnKHZhbGlkYXRlZElucHV0LmVycm9yTXNnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zdWJtaXRCdXR0b24uYmxvY2soKTsgLy8gVE9ETzogYmxvY2sgaGVyZSBvciBpbiBjb250cm9sbGVyP1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5wdXRGaWVsZC5oaWRlRXJyb3JNc2coKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN1Ym1pdEJ1dHRvbi51bmJsb2NrKCk7IC8vIFRPRE86IHVuYmxvY2sgaGVyZSBvciBpbiBjb250cm9sbGVyPyBBbHNvIHRoaXMgYmxvY2sgbmVlZHMgaW4gdmFsaWRhdGVQYXNzd29yZEZpZWxkc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuICAgIDtcbiAgICB2YWxpZGF0ZVdpdGhFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVJbnB1dEZpZWxkcygpICYmIHRoaXMudmFsaWRhdGVQYXNzd29yZEZpZWxkcygpO1xuICAgIH1cbiAgICA7XG4gICAgdmFsaWRhdGVXaXRob3V0RW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUGFzc3dvcmRGaWVsZHMoKTtcbiAgICB9XG4gICAgO1xuICAgIHNldERhdGFUb0ZpZWxkcyhmaWVsZHNXaXRoVmFsdWUpIHtcbiAgICAgICAgZmllbGRzV2l0aFZhbHVlLmZvckVhY2goKHsgaWQsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmluZElucHV0Q29tcG9uZW50KGlkKS5pbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmluZElucHV0Q29tcG9uZW50KGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0cy5maW5kKGlucHV0Q29tcG9uZW50ID0+IGlucHV0Q29tcG9uZW50LmlucHV0LmlkID09PSBpZCk7XG4gICAgfVxuICAgIDtcbiAgICBiaW5kSW5wdXRzRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5pbnB1dHMuZm9yRWFjaCgoaW5wdXRDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGlucHV0Q29tcG9uZW50LmJpbmRJbnB1dEV2ZW50KGxpc3RlbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBiaW5kU3VibWl0RXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24uYmluZENsaWNrRXZlbnQobGlzdGVuZXIpO1xuICAgIH1cbiAgICA7XG4gICAgYmluZExpbmtzRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5saW5rcy5mb3JFYWNoKChsaW5rQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBsaW5rQ29tcG9uZW50LmJpbmRDbGlja0V2ZW50KGxpc3RlbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBiaW5kRmlsZUNsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5maW5kSW5wdXRDb21wb25lbnQoJ2F2YXRhcicpLmJpbmRDbGlja0V2ZW50KGxpc3RlbmVyKTtcbiAgICB9XG4gICAgO1xuICAgIGJpbmRDaGVja2JveENsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5maW5kSW5wdXRDb21wb25lbnQoJ2F2YXRhci1jaGVja2JveCcpLmJpbmRDbGlja0V2ZW50KGxpc3RlbmVyKTtcbiAgICB9XG4gICAgO1xuICAgIHNhdmVEYXRhVG9TdG9yYWdlKGtleSkge1xuICAgICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICAgIHRoaXMuaW5wdXRzLmZvckVhY2goKGlucHV0Q29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBkYXRhW2lucHV0Q29tcG9uZW50LmlucHV0LmlkXSA9IGlucHV0Q29tcG9uZW50LmlucHV0LnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuICAgIDtcbiAgICBnZXREYXRhRnJvbVN0b3JhZ2Uoa2V5KSB7XG4gICAgICAgIGNvbnN0IHNhdmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIGlmIChzYXZlZERhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHNhdmVkRGF0YSk7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChbaWQsIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmluZElucHV0Q29tcG9uZW50KGlkKS5pbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbXBvbmVudDtcbiIsImNsYXNzIElDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqINCg0L7QtNC40YLQtdC70YzRgdC60LjQuSDRjdC70LXQvNC10L3RgiDQtNC70Y8g0LTQsNC90L3QvtCz0L4g0LLQuNC00LBcbiAgICAgKiBAbWVtYmVyXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBwYXJlbnQ7XG4gICAgLyoqXG4gICAgICog0JrQvtGA0L3QtdCy0L7QuSDRjdC70LXQvNC10L3RgiDQtNC70Y8g0LTQsNC90L3QvtCz0L4g0LLQuNC00LBcbiAgICAgKiBAbWVtYmVyXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBlbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGVtcGxhdGUsIHRvcEVsZW1lbnQsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodGVtcGxhdGUsICd0ZXh0L2h0bWwnKS5xdWVyeVNlbGVjdG9yKHRvcEVsZW1lbnQpO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCfQndC10LLQvtC30LzQvtC20L3QviDQvdCw0LnRgtC4INGN0LvQtdC80LXQvdGCINCyINGI0LDQsdC70L7QvdC1IScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIDtcbiAgICB0b0hUTUxFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICA7XG4gICAgcXVlcnlTZWxlY3RvcihlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICAgIH1cbiAgICA7XG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG4gICAgO1xuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IElDb21wb25lbnQ7XG4iLCJpbXBvcnQgSUNvbXBvbmVudCBmcm9tICcuLi9JQ29tcG9uZW50L0lDb21wb25lbnQnO1xuaW1wb3J0IElucHV0Q29tcG9uZW50VGVtcGxhdGUgZnJvbSAnLi9JbnB1dENvbXBvbmVudC5oYnMnO1xuaW1wb3J0ICcuL0lucHV0Q29tcG9uZW50LmNzcyc7XG5jbGFzcyBJbnB1dENvbXBvbmVudCBleHRlbmRzIElDb21wb25lbnQge1xuICAgIGlucHV0O1xuICAgIGlucHV0RXJyb3I7XG4gICAgY29uc3RydWN0b3IocGFyZW50LCB0ZW1wbGF0ZSA9ICcnLCB0b3BFbGVtZW50ID0gJycsIGRhdGEpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBJbnB1dENvbXBvbmVudFRlbXBsYXRlKGRhdGEpLCAnLmpzLWlucHV0LWZpZWxkJyk7XG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKSB8fCB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5wdXRFcnJvciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbY2xhc3MqPWVycm9yLW1zZ10nKTtcbiAgICB9XG4gICAgO1xuICAgIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB7IGlkOiB0aGlzLmlucHV0LmlkLCB2YWx1ZTogdGhpcy5pbnB1dC52YWx1ZSB9O1xuICAgIH1cbiAgICA7XG4gICAgaXNFbXB0eURhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlID09PSAnJztcbiAgICB9XG4gICAgO1xuICAgIHNob3dFcnJvck1zZyhlcnJvck1zZykge1xuICAgICAgICB0aGlzLmlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZpZWxkX19pbnB1dC0tZXJyb3InKTtcbiAgICAgICAgdGhpcy5pbnB1dEVycm9yLmlubmVySFRNTCA9IGVycm9yTXNnO1xuICAgICAgICB0aGlzLmlucHV0RXJyb3IuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZmllbGRfX2Vycm9yLW1zZy0tZXJyb3InKTtcbiAgICB9XG4gICAgO1xuICAgIGhpZGVFcnJvck1zZygpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1maWVsZF9faW5wdXQtLWVycm9yJyk7XG4gICAgICAgIHRoaXMuaW5wdXRFcnJvci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5pbnB1dEVycm9yLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWZpZWxkX19lcnJvci1tc2ctLWVycm9yJyk7XG4gICAgfVxuICAgIGJpbmRJbnB1dEV2ZW50KGxpc3RlbmVyKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy50b0hUTUxFbGVtZW50KCk7XG4gICAgICAgIGlmIChpbnB1dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBsaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgYmluZENsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBJbnB1dENvbXBvbmVudDtcbiIsImltcG9ydCBJQ29tcG9uZW50IGZyb20gJy4uL0lDb21wb25lbnQvSUNvbXBvbmVudCc7XG5pbXBvcnQgTGlua0NvbXBvbmVudFRlbXBsYXRlIGZyb20gJy4vTGlua0NvbXBvbmVudC5oYnMnO1xuaW1wb3J0ICcuL0xpbmtDb21wb25lbnQuY3NzJztcbmNsYXNzIExpbmtDb21wb25lbnQgZXh0ZW5kcyBJQ29tcG9uZW50IHtcbiAgICBsaW5rO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGVtcGxhdGUgPSAnJywgdG9wRWxlbWVudCA9ICcnLCBkYXRhKSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgTGlua0NvbXBvbmVudFRlbXBsYXRlKGRhdGEpLCAnLmpzLWxpbmsnKTtcbiAgICAgICAgdGhpcy5saW5rID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKSB8fCB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuICAgIDtcbiAgICBiaW5kQ2xpY2tFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgTGlua0NvbXBvbmVudDtcbiIsImltcG9ydCBJQ29tcG9uZW50IGZyb20gJy4uL0lDb21wb25lbnQvSUNvbXBvbmVudCc7XG5pbXBvcnQgTGlzdENvbXBvbmVudFRlbXBsYXRlIGZyb20gJy4vTGlzdENvbXBvbmVudC5oYnMnO1xuaW1wb3J0ICcuL0xpc3RDb21wb25lbnQuY3NzJztcbmNsYXNzIExpc3RDb21wb25lbnQgZXh0ZW5kcyBJQ29tcG9uZW50IHtcbiAgICBpdGVtcztcbiAgICBnZXQgZ2V0RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG4gICAgO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGVtcGxhdGUgPSAnJywgdG9wRWxlbWVudCA9ICcnLCBkYXRhKSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgTGlzdENvbXBvbmVudFRlbXBsYXRlKGRhdGEubGlzdENsYXNzKSwgJy5qcy1saXN0Jyk7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBPYmplY3QuYXNzaWduKFtdLCBkYXRhLml0ZW1zKTtcbiAgICAgICAgdGhpcy5yZW5kZXJJdGVtcyhkYXRhLml0ZW1DbGFzcyk7XG4gICAgfVxuICAgIDtcbiAgICByZW5kZXJJdGVtcyhpdGVtQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IGNvbXBvbmVudFR5cGUsIGNvbXBvbmVudERhdGEgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChpdGVtQ2xhc3MgfHwgJycpO1xuICAgICAgICAgICAgY29uc3QgbCA9IG5ldyBjb21wb25lbnRUeXBlKGxpLCAnJywgJycsIGNvbXBvbmVudERhdGEpO1xuICAgICAgICAgICAgbC5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgTGlzdENvbXBvbmVudDtcbiIsImltcG9ydCBJQ29tcG9uZW50IGZyb20gJy4uL0lDb21wb25lbnQvSUNvbXBvbmVudCc7XG5pbXBvcnQgVmVydGljYWxDb21wb25lbnRUZW1wbGF0ZSBmcm9tICcuL1ZlcnRpY2FsU3BhY2VyQ29tcG9uZW50Lmhicyc7XG5pbXBvcnQgJy4vVmVydGljYWxTcGFjZXJDb21wb25lbnQuY3NzJztcbmNsYXNzIFZlcnRpY2FsU3BhY2VyQ29tcG9uZW50IGV4dGVuZHMgSUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocGFyZW50LCB0ZW1wbGF0ZSA9ICcnLCB0b3BFbGVtZW50ID0gJycsIGRhdGEpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBWZXJ0aWNhbENvbXBvbmVudFRlbXBsYXRlKGRhdGEpLCAnLmpzLXZlcnRpY2FsLXNwYWNlcicpO1xuICAgIH1cbiAgICA7XG59XG47XG5leHBvcnQgZGVmYXVsdCBWZXJ0aWNhbFNwYWNlckNvbXBvbmVudDtcbiIsImNvbnN0IFJFUVVFU1RfTUVUSE9EUyA9IHtcbiAgICBHRVQ6ICdHRVQnLFxuICAgIFBPU1Q6ICdQT1NUJyxcbiAgICBQVVQ6ICdQVVQnLFxuICAgIERFTEVURTogJ0RFTEVURScsXG59O1xuY29uc3QgQ3NyZlRva2VuTmFtZSA9ICdjc3JmX3Rva2VuJztcbmNvbnN0IGhlYWRlcnNXaXRoVW5pY29kZSA9IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcsXG59O1xuY29uc3QgaGVhZGVyc1dpdGhFbXB0eSA9IHtcbiAgICAnQ29udGVudC1UeXBlJzogJycsXG59O1xuY29uc3QgZmFpbHVyZURlZmF1bHRTdGF0dXNlcyA9IHtcbiAgICAnNDAwJzogJ9Cd0LXQstC10YDQvdGL0Lkg0LfQsNC/0YDQvtGBJyxcbiAgICAvLyAnNDAxJzogJ05vIENvb2tpZScsXG4gICAgLy8gJzQwNSc6ICfQndC10LLQtdGA0L3Ri9C5IEhUVFAg0LzQtdGC0L7QtCcsXG4gICAgJzUwMCc6ICfQntGI0LjQsdC60LAg0YHQtdGA0LLQtdGA0LAnLFxufTtcbmNvbnN0IGN1c3RvbUZhaWx1cmVzID0ge1xuICAgICcxJzogJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRg9C20LUg0YHRg9GJ0LXRgdGC0LLRg9C10YInLFxuICAgICcyJzogJ9Cd0LXQstC10YDQvdGL0Lkg0YTQvtGA0LzQsNGCINC/0L7Rh9GC0YsnLFxuICAgICczJzogJ9Cf0LDRgNC+0LvRjCDQtNC+0LvQttC10L0g0LHRi9GC0YwuLi4nLFxuICAgICc0JzogJ9Cd0LXQstC10YDQvdCw0Y8g0L/QvtGH0YLQsCDQuNC70Lgg0L/QsNGA0L7Qu9GMJyxcbiAgICAnNSc6ICfQoNCw0LfQvNC10YAg0YTQsNC50LvQsCDQstGL0YjQtSDQvNCw0LrRgdC40LzQsNC70YzQvdC+INC00L7Qv9GD0YHRgtC40LzQvtCz0L4nLFxuICAgICc2JzogJ9Ck0LDQudC7INC90LUg0Y/QstC70Y/QtdGC0YHRjyDQutCw0YDRgtC40L3QutC+0Lkg0YTQvtGA0LzQsNGC0LAganBnJyxcbiAgICAnNyc6ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YEg0Y3RgtC+0Lkg0L/QvtGH0YLQvtC5INGD0LbQtSDRgdGD0YnQtdGB0YLQstGD0LXRgicsXG59O1xuY29uc3QgY29uZmlnID0ge1xuICAgIC8vIGhvc3Q6ICdodHRwOi8vODkuMjA4LjE5OS4xNzAvJyxcbiAgICBob3N0OiAnaHR0cDovL2ZpbG1pdW0ucnUvYXBpJyxcbiAgICAvLyBob3N0OiAnaHR0cDovLzg5LjIwOC4xOTkuMTcwOjgxMDAvYXBpJyxcbiAgICBhcGk6IHtcbiAgICAgICAgY3NyZjoge1xuICAgICAgICAgICAgdXJsOiAnL3VzZXIvY3NyZicsXG4gICAgICAgICAgICBtZXRob2Q6IFJFUVVFU1RfTUVUSE9EUy5HRVQsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzV2l0aFVuaWNvZGUsXG4gICAgICAgICAgICBzdGF0dXNlczoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgJzIwMCc6ICcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbHVyZTogZmFpbHVyZURlZmF1bHRTdGF0dXNlcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNpZ25Jbjoge1xuICAgICAgICAgICAgdXJsOiAnL3VzZXIvc2lnbmluJyxcbiAgICAgICAgICAgIG1ldGhvZDogUkVRVUVTVF9NRVRIT0RTLlBPU1QsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzV2l0aFVuaWNvZGUsXG4gICAgICAgICAgICBzdGF0dXNlczoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgJzIwMCc6ICfQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPINGD0YHQv9C10YjQvdCwJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWx1cmU6IGZhaWx1cmVEZWZhdWx0U3RhdHVzZXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzaWduVXA6IHtcbiAgICAgICAgICAgIHVybDogJy91c2VyL3NpZ251cCcsXG4gICAgICAgICAgICBtZXRob2Q6IFJFUVVFU1RfTUVUSE9EUy5QT1NULFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1dpdGhVbmljb2RlLFxuICAgICAgICAgICAgc3RhdHVzZXM6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICcyMDAnOiAn0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDRg9GB0L/QtdGI0L3QsCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsdXJlOiBmYWlsdXJlRGVmYXVsdFN0YXR1c2VzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9nb3V0OiB7XG4gICAgICAgICAgICB1cmw6ICcvdXNlci9sb2dvdXQnLFxuICAgICAgICAgICAgbWV0aG9kOiBSRVFVRVNUX01FVEhPRFMuUE9TVCxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNXaXRoVW5pY29kZSxcbiAgICAgICAgICAgIHN0YXR1c2VzOiB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgICAgICAnMjAwJzogJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQstGL0YjQtdC7JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWx1cmU6IGZhaWx1cmVEZWZhdWx0U3RhdHVzZXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwcm9maWxlOiB7XG4gICAgICAgICAgICB1cmw6ICcvdXNlci9wcm9maWxlJyxcbiAgICAgICAgICAgIG1ldGhvZDogUkVRVUVTVF9NRVRIT0RTLkdFVCxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNXaXRoVW5pY29kZSxcbiAgICAgICAgICAgIHN0YXR1c2VzOiB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgICAgICAnMjAwJzogJ9CU0LDQvdC90YvQtSDQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70LUg0YPRgdC/0LXRiNC90L4g0L/QvtC70YPRh9C10L3RiycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsdXJlOiBmYWlsdXJlRGVmYXVsdFN0YXR1c2VzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZmlsbToge1xuICAgICAgICAgICAgdXJsOiAnL2ZpbG1zL3s6aWR9JyxcbiAgICAgICAgICAgIG1ldGhvZDogUkVRVUVTVF9NRVRIT0RTLkdFVCxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNXaXRoVW5pY29kZSxcbiAgICAgICAgICAgIHN0YXR1c2VzOiB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgICAgICAnMjAwJzogJ9CU0LDQvdC90YvQtSDQviDRhNC40LvRjNC80LUg0YPRgdC/0LXRiNC90L4g0L/QvtC70YPRh9C10L3RiycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsdXJlOiBmYWlsdXJlRGVmYXVsdFN0YXR1c2VzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0aW9uczoge1xuICAgICAgICAgICAgdXJsOiAnL3NlbGVjdGlvbnMnLFxuICAgICAgICAgICAgbWV0aG9kOiBSRVFVRVNUX01FVEhPRFMuR0VULFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1dpdGhVbmljb2RlLFxuICAgICAgICAgICAgc3RhdHVzZXM6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICcyMDAnOiAn0J/QvtC00LHQvtGA0LrQuCDRg9GB0L/QtdGI0L3QviDQv9C+0LvRg9GH0LXQvdGLJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWx1cmU6IGZhaWx1cmVEZWZhdWx0U3RhdHVzZXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwZXJzb246IHtcbiAgICAgICAgICAgIHVybDogJy9wZXJzb25zL3s6aWR9JyxcbiAgICAgICAgICAgIG1ldGhvZDogUkVRVUVTVF9NRVRIT0RTLkdFVCxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNXaXRoVW5pY29kZSxcbiAgICAgICAgICAgIHN0YXR1c2VzOiB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgICAgICAnMjAwJzogJ9CU0LDQvdC90YvQtSDQviDQv9C10YDRgdC+0L3QtSDRg9GB0L/QtdGI0L3QviDQv9C+0LvRg9GH0LXQvdGLJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWx1cmU6IGZhaWx1cmVEZWZhdWx0U3RhdHVzZXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgIHVybDogJy91c2VyL3VwZGF0ZScsXG4gICAgICAgICAgICBtZXRob2Q6IFJFUVVFU1RfTUVUSE9EUy5QT1NULFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1dpdGhVbmljb2RlLFxuICAgICAgICAgICAgc3RhdHVzZXM6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICcyMDAnOiAn0JTQsNC90L3Ri9C1INGD0YHQv9C10YjQvdC+INC+0LHQvdC+0LLQu9C10L3RiycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsdXJlOiBmYWlsdXJlRGVmYXVsdFN0YXR1c2VzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYXZhdGFyVXBkYXRlOiB7XG4gICAgICAgICAgICB1cmw6ICcvdXNlci9hdmF0YXIvdXBkYXRlJyxcbiAgICAgICAgICAgIG1ldGhvZDogUkVRVUVTVF9NRVRIT0RTLlBPU1QsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzV2l0aEVtcHR5LFxuICAgICAgICAgICAgc3RhdHVzZXM6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICcyMDAnOiAn0JDQstCw0YLQsNGA0LrQsCDRg9GB0L/QtdGI0L3QviDQvtCx0L3QvtCy0LvQtdC90LAnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbHVyZToge1xuICAgICAgICAgICAgICAgICAgICAuLi5mYWlsdXJlRGVmYXVsdFN0YXR1c2VzLFxuICAgICAgICAgICAgICAgICAgICAnNDEzJzogJ9Ch0LvQuNGI0LrQvtC8INCx0L7Qu9GM0YjQvtC5INGA0LDQt9C80LXRgCDRhNCw0LnQu9CwJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYXZhdGFyRGVsZXRlOiB7XG4gICAgICAgICAgICB1cmw6ICcvdXNlci9hdmF0YXIvZGVsZXRlJyxcbiAgICAgICAgICAgIG1ldGhvZDogUkVRVUVTVF9NRVRIT0RTLlBPU1QsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzV2l0aFVuaWNvZGUsXG4gICAgICAgICAgICBzdGF0dXNlczoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgJzIwMCc6ICfQkNCy0LDRgtCw0YDQutCwINGD0YHQv9C10YjQvdC+INGD0LTQsNC70LXQvdCwJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWx1cmU6IGZhaWx1cmVEZWZhdWx0U3RhdHVzZXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB7IFJFUVVFU1RfTUVUSE9EUywgQ3NyZlRva2VuTmFtZSwgY29uZmlnLCBjdXN0b21GYWlsdXJlcyB9O1xuIiwiaW1wb3J0IElDb250cm9sbGVyIGZyb20gJy4uL0lDb250cm9sbGVyL0lDb250cm9sbGVyJztcbmltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gJy4uLy4uL0NvbnRyb2xsZXJzL1BsYXllckNvbnRyb2xsZXIvUGxheWVyQ29udHJvbGxlcic7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJy4uLy4uL0V2ZW50RGlzcGF0Y2hlci9FdmVudERpc3BhdGNoZXInO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwiLi4vLi4vUm91dGVyL1JvdXRlclwiO1xuY2xhc3MgRmlsbUNvbnRyb2xsZXIgZXh0ZW5kcyBJQ29udHJvbGxlciB7XG4gICAgZmlsbUlkO1xuICAgIHRyYWlsZXJTcmM7XG4gICAgcGxheWVyQ29udHJvbGxlcjtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LCBtb2RlbCkge1xuICAgICAgICBzdXBlcih2aWV3LCBtb2RlbCk7XG4gICAgICAgIHRoaXMuZmlsbUlkID0gbnVsbDtcbiAgICAgICAgdGhpcy50cmFpbGVyU3JjID0gbnVsbDtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnN1YnNjcmliZSgnbmV3LXBsYXllcicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlldy5wbGF5ZXJWaWV3Py5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcubmV3UGxheWVyVmlldygpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb250cm9sbGVyID0gbmV3IFBsYXllckNvbnRyb2xsZXIodGhpcy52aWV3LnBsYXllclZpZXcpO1xuICAgICAgICB9KTtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnN1YnNjcmliZSgndW5tb3VudC1hbGwnLCB0aGlzLnVubW91bnRDb21wb25lbnQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudmlldy5iaW5kQ2xpY2tFdmVudCh0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgYXN5bmMgbW91bnRDb21wb25lbnQob3B0cykge1xuICAgICAgICBpZiAoIW9wdHMpIHtcbiAgICAgICAgICAgIHJvdXRlci5zaG93VW5rbm93blBhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICBpZiAob3B0cz8uaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbG1JZCA9IG9wdHMuaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5nZXRGaWxtKHRoaXMuZmlsbUlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYWlsZXJTcmMgPSBkYXRhLmNvbnRlbnQ/LnRyYWlsZXJVUkwgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LmZpbGxGaWxtKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnZpZXcuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmlzTW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZXIuc2hvd1Vua25vd25QYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgdW5tb3VudENvbXBvbmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckNvbnRyb2xsZXIudW5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICAgICAgc3VwZXIudW5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICAgICAgdGhpcy5maWxtSWQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy50cmFpbGVyU3JjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgaGFuZGxlQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tocmVmXScpPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgIGlmIChocmVmICE9PSB1bmRlZmluZWQgJiYgaHJlZiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJvdXRlci5nb1RvUGF0aChocmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWFjdGlvbl0nKT8uZGF0YXNldFsnYWN0aW9uJ107XG4gICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N1YnNjcmliZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3RyYWlsZXInOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDbGlja2VkIScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRyYWlsZXJTcmMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50cmFpbGVyU3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXllckNvbnRyb2xsZXIuc2V0U3JjKHRoaXMudHJhaWxlclNyYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb250cm9sbGVyLm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBGaWxtQ29udHJvbGxlcjtcbiIsImltcG9ydCBJQ29udHJvbGxlciBmcm9tICcuLi9JQ29udHJvbGxlci9JQ29udHJvbGxlcic7XG5pbXBvcnQgSU1vZGVsIGZyb20gJy4uLy4uL01vZGVscy9JTW9kZWwvSU1vZGVsJztcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSAnLi4vLi4vRXZlbnREaXNwYXRjaGVyL0V2ZW50RGlzcGF0Y2hlcic7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uLy4uL1JvdXRlci9Sb3V0ZXInO1xuLyoqXG4gKiDQmtC+0YLRgNC+0LvQu9C10YAg0LTQu9GPINGF0Y3QtNC10YDQsFxuICogQGNhdGVnb3J5IEhlYWRlclxuICogQGV4dGVuZHMge0lDb250cm9sbGVyfVxuICogQHBhcmFtICB7SGVhZGVyVmlld30gdmlldyDQntCx0YrQtdC60YIg0LLQuNC00LAg0LrQvtC80L/QvtC90LXQvdGC0LAg0YXRjdC00LXRgFxuICovXG5jbGFzcyBIZWFkZXJDb250cm9sbGVyIGV4dGVuZHMgSUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHZpZXcpIHtcbiAgICAgICAgc3VwZXIodmlldywgSU1vZGVsKTtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnN1YnNjcmliZSgndW5tb3VudC1hbGwnLCB0aGlzLnVubW91bnRDb21wb25lbnQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudmlldy5iaW5kQ2xpY2tFdmVudCh0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICAvLyBUT0RPXG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ3VzZXItY2hhbmdlZCcsICh1c2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlci1jaGFuZ2VkJywgdXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5jaGFuZ2VIZWFkZXJQcm9maWxlKCdwcm9maWxlJywgdXNlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuY2hhbmdlSGVhZGVyUHJvZmlsZSgnc2lnbkluJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBFdmVudERpc3BhdGNoZXIuc3Vic2NyaWJlKCdyZW5kZXItc2lnbkluQnV0dG9uJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LmNoYW5nZUhlYWRlclByb2ZpbGUoJ3NpZ25JbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnN1YnNjcmliZSgncmVuZGVyLXByb2ZpbGVCdXR0b24nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuY2hhbmdlSGVhZGVyUHJvZmlsZSgncHJvZmlsZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xuICAgIC8qKlxuICAgICAqINCk0YPQvdC60YbQuNGPINC+0LHRgNCw0LHQvtGC0LrQuCDQvdCw0LbQsNGC0LjRjyDQvdCwINGF0LXQtNC10YBcbiAgICAgKiAo0L/RgNC40LLQsNGC0L3QvtC1INC/0L7Qu9C1INC60LvQsNGB0YHQsClcbiAgICAgKiBAcGFyYW0gIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5oaWRlUHJvZmlsZSgpO1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tocmVmXScpPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgIGlmIChocmVmICE9PSB1bmRlZmluZWQgJiYgaHJlZiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJvdXRlci5nb1RvUGF0aChocmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWFjdGlvbl0nKT8uZGF0YXNldFsnYWN0aW9uJ107XG4gICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Byb2ZpbGUnOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy50b2dnbGVQcm9maWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdzaWduSW4nOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdzaWduSW4nKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckNvbnRyb2xsZXI7XG4iLCIvKipcbiAqINCR0LDQt9C+0LLRi9C5INC60LvQsNGB0YEg0LTQu9GPINC60L7QvdGC0YDQvtC70LvQtdGA0LAg0LrQvtC80L/QvtC90LXQvdGC0LAg0L/RgNC40LvQvtC20LXQvdC40Y8uXG4gKiDQodCy0Y/Qt9GL0LLQsNC10YIg0LLQuNC0INGBINC80L7QtNC10LvRjNGOXG4gKiBAY2xhc3NcbiAqIEB2aXJ0dWFsXG4gKiBAcGFyYW0gIHt0VmlldzxJVmlldz59IHZpZXcg0JLQuNC0LCDQutC+0YLQvtGA0YvQvCDRg9C/0YDQsNCy0LvRj9C10YIg0LrQvtC90YLRgNC+0LvQu9C10YBcbiAqIEBwYXJhbSAge3RNb2RlbDxJTW9kZWw+fSBtb2RlbCDQnNC+0LTQtdC70YwsINC60L7RgtC+0YDQvtC5INC/0L7Qu9GM0LfRg9C10YLRgdGPINC60L7QvdGC0YDQvtC70LvQtdGAXG4gKi9cbmNsYXNzIElDb250cm9sbGVyIHtcbiAgICAvKipcbiAgICAgKiDQktC40LQsINC60L7RgtC+0YDRi9C8INGD0L/RgNCw0LLQu9GP0LXRgiDQutC+0L3RgtGA0L7Qu9C70LXRgFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB2aWV3O1xuICAgIC8qKlxuICAgICAqINCc0L7QtNC10LvRjCwg0LrQvtGC0L7RgNC+0Lkg0L/QvtC70YzQt9GD0LXRgtGB0Y8g0LrQvtC90YLRgNC+0LvQu9C10YBcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgbW9kZWw7XG4gICAgLyoqXG4gICAgICog0KTQu9Cw0LMuINCe0YLQvtCx0YDQsNC20LDQtdGC0YHRjyDQu9C4INC00LDQvdC90YvQuSDQutC+0LzQv9C+0L3QtdC90YIg0L3QsCDRgdGC0YDQsNC90LjRhtC1XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGlzTW91bnRlZDtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LCBtb2RlbCkge1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgICAgIHRoaXMuaXNNb3VudGVkID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqINCk0YPQvdC60YbQuNGPINGD0YHRgtGA0LDQvdC+0LLQutC4INC60L7QvNC/0L7QvdC10L3RgtCwLlxuICAgICAqINCe0YLRgNC40YHQvtCy0YvQstCw0LXRgiDRjdC70LXQvNC10L3RgiDQuCDRg9C/0YDQsNCy0LvRj9C10YIg0LjQvC5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIG1vdW50Q29tcG9uZW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqINCk0YPQvdC60YbQuNGPINGD0LHQuNGA0LDQvdC40Y8g0LrQvtC80L/QvtC90LXQvdGC0LAuXG4gICAgICog0J7RgtGA0LjRgdC+0LLRi9Cy0LDQtdGCINGN0LvQtdC80LXQvdGCINC4INGD0L/RgNCw0LLQu9GP0LXRgiDQuNC8LlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdW5tb3VudENvbXBvbmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5pc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IElDb250cm9sbGVyO1xuIiwiaW1wb3J0IElDb250cm9sbGVyIGZyb20gJy4uL0lDb250cm9sbGVyL0lDb250cm9sbGVyJztcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4uLy4uL0V2ZW50RGlzcGF0Y2hlci9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIi4uLy4uL1JvdXRlci9Sb3V0ZXJcIjtcbmNsYXNzIE1haW5Db250cm9sbGVyIGV4dGVuZHMgSUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHZpZXcsIG1vZGVsKSB7XG4gICAgICAgIHN1cGVyKHZpZXcsIG1vZGVsKTtcbiAgICAgICAgLy8gdGhpcy52aWV3LmJpbmRDbGlja0V2ZW50KHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ3VubW91bnQtYWxsJywgdGhpcy51bm1vdW50Q29tcG9uZW50LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgYXN5bmMgbW91bnRDb21wb25lbnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHN1cGVyLm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNlbGVjdGlvbnMuZ2V0U2VsZWN0aW9ucygpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZmlsbFNlbGVjdGlvbnMoZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmJpbmRDbGlja0V2ZW50KHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZXIuc2hvd1Vua25vd25QYWdlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBlLnRhcmdldC5jbG9zZXN0KCdbaHJlZl0nKT8uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICBpZiAoaHJlZiAhPT0gdW5kZWZpbmVkICYmIGhyZWYgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgoaHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgSUNvbnRyb2xsZXIgZnJvbSAnLi4vSUNvbnRyb2xsZXIvSUNvbnRyb2xsZXInO1xuaW1wb3J0IFNpZ25JbkNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vQ29udHJvbGxlcnMvU2lnbkluQ29udHJvbGxlci9TaWduSW5Db250cm9sbGVyJztcbmltcG9ydCBTaWduVXBDb250cm9sbGVyIGZyb20gJy4uLy4uL0NvbnRyb2xsZXJzL1NpZ25VcENvbnRyb2xsZXIvU2lnblVwQ29udHJvbGxlcic7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJy4uLy4uL0V2ZW50RGlzcGF0Y2hlci9FdmVudERpc3BhdGNoZXInO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi8uLi9Sb3V0ZXIvUm91dGVyJztcbi8qKlxuICog0JrQvtGC0YDQvtC70LvQtdGAINC00LvRjyDQv9GA0LDQstC+0LPQviDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsFxuICogQGNhdGVnb3J5IE1vZGFsUmlnaHRcbiAqIEBleHRlbmRzIHtJQ29udHJvbGxlcn1cbiAqIEBwYXJhbSAge0hlYWRlclZpZXd9IHZpZXcg0J7QsdGK0LXQutGCINCy0LjQtNCwINC60L7QvNC/0L7QvdC10L3RgtCwINC/0YDQsNCy0L7Qs9C+INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwXG4gKiBAcGFyYW0gIHtVc2VyTW9kZWx9IG1vZGVsINCe0LHRitC10LrRgiDQvNC+0LTQtdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXG4gKi9cbmNsYXNzIE1vZGFsUmlnaHRDb250cm9sbGVyIGV4dGVuZHMgSUNvbnRyb2xsZXIge1xuICAgIGN1cnJlbnRDb250cm9sbGVyO1xuICAgIGNvbnN0cnVjdG9yKHZpZXcsIG1vZGVsKSB7XG4gICAgICAgIHN1cGVyKHZpZXcsIG1vZGVsKTtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnN1YnNjcmliZSgndW5tb3VudC1hbGwnLCB0aGlzLnVubW91bnRDb21wb25lbnQuYmluZCh0aGlzKSk7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ21vZGFsUmlnaHQtc2V0U2lnbkluJywgKHVzZXJNb2RlbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LmN1cnJlbnRWaWV3Py5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0U2lnbkluVmlldygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29udHJvbGxlciA9IG5ldyBTaWduSW5Db250cm9sbGVyKHRoaXMudmlldy5jdXJyZW50VmlldywgdXNlck1vZGVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ21vZGFsUmlnaHQtc2V0U2lnblVwJywgKHVzZXJNb2RlbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LmN1cnJlbnRWaWV3Py5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0U2lnblVwVmlldygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29udHJvbGxlciA9IG5ldyBTaWduVXBDb250cm9sbGVyKHRoaXMudmlldy5jdXJyZW50VmlldywgdXNlck1vZGVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmlldy5iaW5kQ2xpY2tFdmVudCh0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgbW91bnRDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENvbnRyb2xsZXIuZ2V0Rm9ybURhdGFGcm9tU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRDb250cm9sbGVyPy5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICBzdXBlci5tb3VudENvbXBvbmVudCgpO1xuICAgIH1cbiAgICA7XG4gICAgdW5tb3VudENvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29udHJvbGxlcj8udW5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICBzdXBlci51bm1vdW50Q29tcG9uZW50KCk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBjaGVjayBvbmx5IGlmIGNsaWNrIG5vdCBvbiBtb2RhbCByaWdodCwgaXQgYWxzbyBjbGljayBvbiBjbG9zZSBidG4gKG5vdCBuZWNlc3NhcnkgY2hlY2sgaXQ/KVxuICAgICAgICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jb250ZW50Jyk7XG4gICAgICAgICAgICBpZiAoIW1vZGFsQ29udGVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENvbnRyb2xsZXIuc2F2ZUZvcm1EYXRhVG9TdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51bm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgICAgICAgICAgcm91dGVyLmdvVG9QYXRoKHJvdXRlci5nZXROZWFyZXN0Tm90QXV0aFVybCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG59XG47XG5leHBvcnQgZGVmYXVsdCBNb2RhbFJpZ2h0Q29udHJvbGxlcjtcbiIsImltcG9ydCBJQ29udHJvbGxlciBmcm9tICcuLi9JQ29udHJvbGxlci9JQ29udHJvbGxlcic7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJy4uLy4uL0V2ZW50RGlzcGF0Y2hlci9FdmVudERpc3BhdGNoZXInO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwiLi4vLi4vUm91dGVyL1JvdXRlclwiO1xuY2xhc3MgUGVyc29uQ29udHJvbGxlciBleHRlbmRzIElDb250cm9sbGVyIHtcbiAgICBwZXJzb25JZDtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LCBtb2RlbCkge1xuICAgICAgICBzdXBlcih2aWV3LCBtb2RlbCk7XG4gICAgICAgIHRoaXMucGVyc29uSWQgPSBudWxsO1xuICAgICAgICBFdmVudERpc3BhdGNoZXIuc3Vic2NyaWJlKCd1bm1vdW50LWFsbCcsIHRoaXMudW5tb3VudENvbXBvbmVudC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy52aWV3LmJpbmRDbGlja0V2ZW50KHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbiAgICBhc3luYyBtb3VudENvbXBvbmVudChvcHRzKSB7XG4gICAgICAgIGlmICghb3B0cykge1xuICAgICAgICAgICAgcm91dGVyLnNob3dVbmtub3duUGFnZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGlmIChvcHRzPy5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVyc29uSWQgPSBvcHRzLmlkO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuZ2V0UGVyc29uKHRoaXMucGVyc29uSWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5maWxsUGVyc29uKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBzdXBlci5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnNob3dVbmtub3duUGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHVubW91bnRDb21wb25lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgc3VwZXIudW5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICAgICAgdGhpcy5wZXJzb25JZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1BlcnNvbiBoYW5kbGVDbGljaycpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tocmVmXScpPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgIGlmIChocmVmICE9PSB1bmRlZmluZWQgJiYgaHJlZiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJvdXRlci5nb1RvUGF0aChocmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBlcnNvbkNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgSUNvbnRyb2xsZXIgZnJvbSAnLi4vSUNvbnRyb2xsZXIvSUNvbnRyb2xsZXInO1xuaW1wb3J0IElNb2RlbCBmcm9tIFwiLi4vLi4vTW9kZWxzL0lNb2RlbC9JTW9kZWxcIjtcbmNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBJQ29udHJvbGxlciB7XG4gICAgdmlkZW9UaW1lO1xuICAgIHZpZGVvVGltZU1pbnV0ZXM7XG4gICAgdmlkZW9UaW1lU2Vjb25kcztcbiAgICBwcmV2aW91c1ZvbHVtZTtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3KSB7XG4gICAgICAgIHN1cGVyKHZpZXcsIElNb2RlbCk7XG4gICAgICAgIC8vIHRoaXMudmlkZW9UaW1lID0gMDtcbiAgICAgICAgLy8gdGhpcy52aWRlb1RpbWVNaW51dGVzID0gMDtcbiAgICAgICAgLy8gdGhpcy52aWRlb1RpbWVTZWNvbmRzID0gMDtcbiAgICAgICAgLy8gdGhpcy5wcmV2aW91c1ZvbHVtZSA9IDA7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRoaXMuaW5pdGlhbFZpZGVvID0gdGhpcy5pbml0aWFsVmlkZW8uYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy50b2dnbGVWaWRlb1N0YXR1cyA9IHRoaXMudG9nZ2xlVmlkZW9TdGF0dXMuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5zdG9wVmlkZW8gPSB0aGlzLnN0b3BWaWRlby5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLm11dGUgPSB0aGlzLm11dGUuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5zZXRWaWRlb1ZvbHVtZSA9IHRoaXMuc2V0VmlkZW9Wb2x1bWUuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy51cGRhdGVUaW1lID0gdGhpcy51cGRhdGVUaW1lLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuc2V0UHJvZ3Jlc3MgPSB0aGlzLnNldFByb2dyZXNzLmJpbmQodGhpcyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRoaXMuaW5pdGlhbFZpZGVvKCk7XG4gICAgICAgIC8vIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgUGxheWVyQ29udHJvbGxlcjtcbiIsImltcG9ydCBJQ29udHJvbGxlciBmcm9tICcuLi9JQ29udHJvbGxlci9JQ29udHJvbGxlcic7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJy4uLy4uL0V2ZW50RGlzcGF0Y2hlci9FdmVudERpc3BhdGNoZXInO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwiLi4vLi4vUm91dGVyL1JvdXRlclwiO1xuaW1wb3J0IHsgdmFsaWRhdGVJbnB1dCB9IGZyb20gXCIuLi8uLi9VdGlscy9WYWxpZGF0b3JzL1ZhbGlkYXRvclwiO1xuLyoqXG4gKiDQmtC+0YLRgNC+0LvQu9C10YAg0LTQu9GPXG4gKiBAY2F0ZWdvcnkgSGVhZGVyXG4gKiBAZXh0ZW5kcyB7SUNvbnRyb2xsZXJ9XG4gKiBAcGFyYW0gIHtIZWFkZXJWaWV3fSB2aWV3INCe0LHRitC10LrRgiDQstC40LTQsCDQutC+0LzQv9C+0L3QtdC90YLQsFxuICovXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIgZXh0ZW5kcyBJQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IodmlldywgbW9kZWwpIHtcbiAgICAgICAgc3VwZXIodmlldywgbW9kZWwpO1xuICAgICAgICB0aGlzLnZpZXcuYmluZENsaWNrRXZlbnQodGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy52aWV3LmZvcm0uYmluZEZpbGVDbGlja0V2ZW50KHRoaXMub25GaWxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudmlldy5mb3JtLmJpbmRDaGVja2JveENsaWNrRXZlbnQodGhpcy5vbkNoZWNrYm94Q2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ3VubW91bnQtYWxsJywgdGhpcy51bm1vdW50Q29tcG9uZW50LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgbW91bnRDb21wb25lbnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLm1vZGVsLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2V0dGluZ3MgY29udHJvbGxlcicsIHVzZXIpO1xuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52aWV3LnNob3coeyB1c2VyOiB1c2VyIH0pO1xuICAgICAgICAgICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBvbkZpbGVDbGljayhlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIDtcbiAgICBvbkNoZWNrYm94Q2xpY2soZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zb2xlLmxvZygnQ2xpY2sgY2hlY2tib3gnKTtcbiAgICB9XG4gICAgO1xuICAgIHZhbGlkYXRlKCkge1xuICAgICAgICBjb25zdCBlbWFpbENvbXBvbmVudCA9IHRoaXMudmlldy5mb3JtLmZpbmRJbnB1dENvbXBvbmVudCgnZW1haWwnKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRDb21wb25lbnQgPSB0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ3Bhc3N3b3JkJyk7XG4gICAgICAgIGNvbnN0IHJlcGVhdFBhc3N3b3JkQ29tcG9uZW50ID0gdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdyZXBlYXQtcGFzc3dvcmQnKTtcbiAgICAgICAgLy8gY29uc3QgZW1haWwgPSBlbWFpbENvbXBvbmVudC5pbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBwYXNzd29yZENvbXBvbmVudC5pbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgcmVwZWF0UGFzc3dvcmQgPSByZXBlYXRQYXNzd29yZENvbXBvbmVudC5pbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVFbWFpbCA9IHZhbGlkYXRlSW5wdXQoZW1haWxDb21wb25lbnQuZ2V0RGF0YSgpKTtcbiAgICAgICAgaWYgKCF2YWxpZGF0ZUVtYWlsLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIGVtYWlsQ29tcG9uZW50LnNob3dFcnJvck1zZyh2YWxpZGF0ZUVtYWlsLmVycm9yTXNnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFzc3dvcmQgIT09ICcnKSB7XG4gICAgICAgICAgICBpZiAocGFzc3dvcmQgIT09IHJlcGVhdFBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmRDb21wb25lbnQuc2hvd0Vycm9yTXNnKCcnKTtcbiAgICAgICAgICAgICAgICByZXBlYXRQYXNzd29yZENvbXBvbmVudC5zaG93RXJyb3JNc2coJ9Cf0LDRgNC+0LvQuCDQvdC1INGB0L7QstC/0LDQtNCw0Y7RgicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlZFBhc3N3b3JkID0gdmFsaWRhdGVJbnB1dChwYXNzd29yZENvbXBvbmVudC5nZXREYXRhKCkpO1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZWRQYXNzd29yZC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmRDb21wb25lbnQuc2hvd0Vycm9yTXNnKCcnKTtcbiAgICAgICAgICAgICAgICByZXBlYXRQYXNzd29yZENvbXBvbmVudC5zaG93RXJyb3JNc2codmFsaWRhdGVkUGFzc3dvcmQuZXJyb3JNc2cpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhc3N3b3JkQ29tcG9uZW50LmhpZGVFcnJvck1zZygpO1xuICAgICAgICAgICAgcmVwZWF0UGFzc3dvcmRDb21wb25lbnQuaGlkZUVycm9yTXNnKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IHRhcmdldC5jbG9zZXN0KCdbaHJlZl0nKT8uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICBpZiAoaHJlZiAhPT0gdW5kZWZpbmVkICYmIGhyZWYgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgoaHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSB0YXJnZXQuY2xvc2VzdCgnI3NhdmUtc3VibWl0LWJ0bicpO1xuICAgICAgICAgICAgaWYgKGJ1dHRvbiAhPT0gdW5kZWZpbmVkICYmIGJ1dHRvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmlldy5mb3JtLmlucHV0cyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRlJyk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JldHVybicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdlbWFpbCcpLmlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkYXRlX2JpcnRoOiAnMjAwMC1KYW4tMDEnLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdwYXNzd29yZCcpLmlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZUlucHV0ID0gdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdhdmF0YXInKS5pbnB1dDtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlSW5wdXQuZmlsZXMgJiYgZmlsZUlucHV0LmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJZiBmaWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ2F2YXRhci1jaGVja2JveCcpLmlucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJZiBjaGVja2VkIDEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5mb3JtLmZpbmRJbnB1dENvbXBvbmVudCgncmVwZWF0LXBhc3N3b3JkJykuc2hvd0Vycm9yTXNnKCfQndC10LvRjNC30Y8g0YPQtNCw0LvQuNGC0Ywg0Lgg0L/QvtGB0YLQsNCy0LjRgtGMINCw0LLQsNGC0LDRgNC60YMhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IGNoZWNrZWQgMScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhdmF0YXInLCBmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuYXZhdGFyVXBkYXRlKGZvcm1EYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZm9ybS5pbnB1dHMuZm9yRWFjaCgoaW5wdXRDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQuaGlkZUVycm9yTXNnKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoeyBtc2cgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdhdmF0YXInKS5zaG93RXJyb3JNc2cobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IGZpbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdhdmF0YXItY2hlY2tib3gnKS5pbnB1dC5jaGVja2VkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmlldy5mb3JtLmZpbmRJbnB1dENvbXBvbmVudCgnYXZhdGFyLWNoZWNrYm94JykuaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0lmIGNoZWNrZWQgMicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5hdmF0YXJEZWxldGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvck1zZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXJEYXRhJywgdXNlckRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgYm9keTogZm9ybURhdGEgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC51cGRhdGVVc2VyKHVzZXJEYXRhKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5mb3JtLmlucHV0cy5mb3JFYWNoKChpbnB1dENvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQuaGlkZUVycm9yTXNnKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoeyBtc2cgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3JNc2cnLCBtc2cpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ2VtYWlsJykuc2hvd0Vycm9yTXNnKG1zZyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb2RlbC5hdmF0YXJVcGRhdGUoZm9ybURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzQ29udHJvbGxlcjtcbiIsImltcG9ydCBJQ29udHJvbGxlciBmcm9tICcuLi9JQ29udHJvbGxlci9JQ29udHJvbGxlcic7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uLy4uL1JvdXRlci9Sb3V0ZXInO1xuaW1wb3J0IHBhdGhzIGZyb20gJy4uLy4uL1JvdXRlci9Sb3V0ZXJQYXRocyc7XG4vKipcbiAqINCa0L7RgtGA0L7Qu9C70LXRgCDQtNC70Y9cbiAqIEBjYXRlZ29yeSBTaWduSW5cbiAqIEBleHRlbmRzIHtJQ29udHJvbGxlcn1cbiAqIEBwYXJhbSAge0hlYWRlclZpZXd9IHZpZXcg0J7QsdGK0LXQutGCINCy0LjQtNCwINC60L7QvNC/0L7QvdC10L3RgtCwXG4gKiBAcGFyYW0gIHtVc2VyTW9kZWx9IG1vZGVsINCe0LHRitC10LrRgiDQvNC+0LTQtdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXG4gKi9cbmNsYXNzIFNpZ25JbkNvbnRyb2xsZXIgZXh0ZW5kcyBJQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IodmlldywgbW9kZWwpIHtcbiAgICAgICAgc3VwZXIodmlldywgbW9kZWwpO1xuICAgICAgICB0aGlzLnZpZXcuZm9ybS5iaW5kU3VibWl0RXZlbnQodGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy52aWV3LmZvcm0uYmluZExpbmtzRXZlbnQodGhpcy5vblJlZGlyZWN0LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgdmFsaWRhdGVGb3JtRmllbGRzKCkge1xuICAgICAgICBjb25zdCBlbWFpbEZpZWxkID0gdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdlbWFpbCcpO1xuICAgICAgICBjb25zdCBwYXNzd29yZEZpZWxkID0gdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdwYXNzd29yZCcpO1xuICAgICAgICBpZiAoIWVtYWlsRmllbGQgfHwgIXBhc3N3b3JkRmllbGQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdGaWVsZHMgZG9udCBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52aWV3LmZvcm0udmFsaWRhdGVFbXB0eUZpZWxkcyhbZW1haWxGaWVsZCwgcGFzc3dvcmRGaWVsZF0pO1xuICAgIH1cbiAgICA7XG4gICAgb25JbnB1dChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIG9uU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5mb3JtLmJpbmRJbnB1dHNFdmVudCh0aGlzLm9uSW5wdXQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCcuc2lnbkluLWJ1dHRvbicpO1xuICAgICAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbi0tZGlzYWJsZWQnKSkgeyAvLyBUT0RPOiBjaGVjayBpZiBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm1GaWVsZHMoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVzZXJTaWduSW4gPSB7XG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMudmlldy5mb3JtLmZpbmRJbnB1dENvbXBvbmVudCgnZW1haWwnKS5pbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdwYXNzd29yZCcpLmlucHV0LnZhbHVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2lnbkluVXNlcih1c2VyU2lnbkluKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgocGF0aHMubWFpbik7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3JNc2cpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ2VtYWlsJykuc2hvd0Vycm9yTXNnKCcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ3Bhc3N3b3JkJykuc2hvd0Vycm9yTXNnKGVycm9yTXNnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBvblJlZGlyZWN0KGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IHRhcmdldC5jbG9zZXN0KCdbaHJlZl0nKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnJztcbiAgICAgICAgICAgIHRoaXMuc2F2ZUZvcm1EYXRhVG9TdG9yYWdlKCk7XG4gICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgoaHJlZik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHNhdmVGb3JtRGF0YVRvU3RvcmFnZSgpIHtcbiAgICAgICAgdGhpcy52aWV3LmZvcm0uc2F2ZURhdGFUb1N0b3JhZ2UoJ1NpZ25JbkRhdGEnKTtcbiAgICB9XG4gICAgO1xuICAgIGdldEZvcm1EYXRhRnJvbVN0b3JhZ2UoKSB7XG4gICAgICAgIHRoaXMudmlldy5mb3JtLmdldERhdGFGcm9tU3RvcmFnZSgnU2lnbkluRGF0YScpO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBTaWduSW5Db250cm9sbGVyO1xuIiwiaW1wb3J0IElDb250cm9sbGVyIGZyb20gJy4uL0lDb250cm9sbGVyL0lDb250cm9sbGVyJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vLi4vUm91dGVyL1JvdXRlcic7XG5pbXBvcnQgcGF0aHMgZnJvbSAnLi4vLi4vUm91dGVyL1JvdXRlclBhdGhzJztcbi8qKlxuICog0JrQvtGC0YDQvtC70LvQtdGAINC00LvRj1xuICogQGNhdGVnb3J5IFNpZ25VcFxuICogQGV4dGVuZHMge0lDb250cm9sbGVyfVxuICogQHBhcmFtICB7SGVhZGVyVmlld30gdmlldyDQntCx0YrQtdC60YIg0LLQuNC00LAg0LrQvtC80L/QvtC90LXQvdGC0LBcbiAqIEBwYXJhbSAge1VzZXJNb2RlbH0gbW9kZWwg0J7QsdGK0LXQutGCINC80L7QtNC10LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cbiAqL1xuY2xhc3MgU2lnblVwQ29udHJvbGxlciBleHRlbmRzIElDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LCBtb2RlbCkge1xuICAgICAgICBzdXBlcih2aWV3LCBtb2RlbCk7XG4gICAgICAgIHRoaXMudmlldy5mb3JtLmJpbmRTdWJtaXRFdmVudCh0aGlzLm9uU3VibWl0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnZpZXcuZm9ybS5iaW5kTGlua3NFdmVudCh0aGlzLm9uUmVkaXJlY3QuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbiAgICBvbklucHV0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnZpZXcuZm9ybS52YWxpZGF0ZVdpdGhFbXB0eSgpO1xuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmZvcm0uc3VibWl0QnV0dG9uLmJsb2NrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZm9ybS5zdWJtaXRCdXR0b24udW5ibG9jaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBvblN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZm9ybS5iaW5kSW5wdXRzRXZlbnQodGhpcy5vbklucHV0LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdCgnLnNpZ25VcC1idXR0b24nKTtcbiAgICAgICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b24tLWRpc2FibGVkJykpIHsgLy8gVE9ETzogY2hlY2sgaWYgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMudmlldy5mb3JtLnZhbGlkYXRlV2l0aEVtcHR5KCkpIHsgLy8gVE9ETzogY2hlY2sgaWYgdmFsaWQsIGJ1dCBpZiB2YWxpZCBhbHdheXMgZGlzYWJsZWQuIFVzZWxlc3MgY2hlY2s/XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdXNlclNpZ25VcCA9IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdlbWFpbCcpLmlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ3Bhc3N3b3JkJykuaW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgZGF0ZV9iaXJ0aDogJzIwMDAtSmFuLTAxJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNpZ25VcFVzZXIodXNlclNpZ25VcCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVyLmdvVG9QYXRoKHBhdGhzLm1haW4pO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yTXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdyZXBlYXQtcGFzc3dvcmQnKS5zaG93RXJyb3JNc2coZXJyb3JNc2cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIG9uUmVkaXJlY3QoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBocmVmID0gdGFyZ2V0LmNsb3Nlc3QoJ1tocmVmXScpLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8ICcnO1xuICAgICAgICAgICAgdGhpcy5zYXZlRm9ybURhdGFUb1N0b3JhZ2UoKTtcbiAgICAgICAgICAgIHJvdXRlci5nb1RvUGF0aChocmVmKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgc2F2ZUZvcm1EYXRhVG9TdG9yYWdlKCkge1xuICAgICAgICB0aGlzLnZpZXcuZm9ybS5zYXZlRGF0YVRvU3RvcmFnZSgnU2lnblVwRGF0YScpO1xuICAgIH1cbiAgICA7XG4gICAgZ2V0Rm9ybURhdGFGcm9tU3RvcmFnZSgpIHtcbiAgICAgICAgdGhpcy52aWV3LmZvcm0uZ2V0RGF0YUZyb21TdG9yYWdlKCdTaWduVXBEYXRhJyk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcENvbnRyb2xsZXI7XG4iLCIvKipcbiAqINCa0LvQsNGB0YEg0YDQsNCx0L7RgtGLINGBINGB0L7QsdGL0YLQuNGP0LzQuCDQv9GA0LjQu9C+0LbQtdC90LjRjyAoY9C40L3Qs9C70YLQvtC9KVxuICogQGNsYXNzXG4gKiBAY2F0ZWdvcnkgRXZlbnREaXNwYXRjaGVyXG4gKi9cbmNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG4gICAgLyoqXG4gICAgICog0KXRgNCw0L3QuNC70LjRidC1INGN0LLQtdC90YLQvtCyXG4gICAgICogKNCf0YDQuNCy0LDRgtC90L7QtSDQv9C+0LvQtSDQutC70LDRgdGB0LApXG4gICAgICogQHR5cGUge01hcDxzdHJpbmcsIEFycmF5PEZ1bmN0aW9uPj59XG4gICAgICovXG4gICAgZXZlbnRzO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IG5ldyBNYXA7XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQv9C+0LTQv9C40YHQutC4INC90LAg0YHQvtCx0YvRgtC40LVcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGV2ZW50TmFtZSAtINCY0LzRjyDRgdC+0LHRi9GC0LjRj1xuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAtINCU0LXQudGB0YLQstC40LUsINC60L7RgtC+0YDQvtC1INC90YPQttC90L4g0LLRi9C/0L7Qu9C90LjRgtGMINC/0YDQuCDRgdGA0LDQsdCw0YLRi9Cy0LDQvdC40Lgg0YHQvtCx0YvRgtC40Y9cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrTGlzdCA9IHRoaXMuZXZlbnRzLmdldChldmVudE5hbWUpO1xuICAgICAgICBpZiAoIWNhbGxiYWNrTGlzdCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHMuc2V0KGV2ZW50TmFtZSwgW2NhbGxiYWNrXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2tMaXN0LnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICA7XG4gICAgLyoqXG4gICAgICog0KTRg9C90LrRhtC40Y8g0L7RgtC/0LjRgdC60Lgg0L7RgiDRgdC+0LHRi9GC0LjRj1xuICAgICAqIEBwYXJhbSAge3N0cmluZ30gZXZlbnROYW1lIC0g0JjQvNGPINGB0L7QsdGL0YLQuNGPXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIC0g0JTQtdC50YHRgtCy0LjQtSwg0LrQvtGC0L7RgNC+0LUg0L3Rg9C20L3QviDQsdGL0LvQviDQstGL0L/QvtC70L3QuNGC0Ywg0L/RgNC4INGB0YDQsNCx0LDRgtGL0LLQsNC90LjQuCDRgdC+0LHRi9GC0LjRj1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdW5zdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBjYWxsYmFja0xpc3QgPSB0aGlzLmV2ZW50cy5nZXQoZXZlbnROYW1lKTtcbiAgICAgICAgaWYgKCFjYWxsYmFja0xpc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2ZW50cy5zZXQoZXZlbnROYW1lLCBjYWxsYmFja0xpc3RcbiAgICAgICAgICAgIC5maWx0ZXIoKGZ1bmMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jICE9PSBjYWxsYmFjaztcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICA7XG4gICAgLyoqXG4gICAgICog0KTRg9C90LrRhtC40Y8g0LLRi9C30L7QstCwINGB0L7QsdGL0YLQuNGPXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBldmVudE5hbWUgLSDQmNC80Y8g0YHQvtCx0YvRgtC40Y9cbiAgICAgKiBAcGFyYW0gIHs/YW55fSBkYXRhIC0g0JTQsNC90L3Ri9C1LCDQutC+0YLQvtGA0YvQtSDQvdGD0LbQvdC+INC/0LXRgNC10LTQsNGC0Ywg0LIg0YTRg9C90LrRhtC40Y4t0L7QsdGA0LDQsdC+0YLRh9C40LpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzLmdldChldmVudE5hbWUpPy5mb3JFYWNoKGNhbGxiYWNrID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgbmV3IEV2ZW50RGlzcGF0Y2hlcigpO1xuIiwiaW1wb3J0IElNb2RlbCBmcm9tICcuLi9JTW9kZWwvSU1vZGVsJztcbmltcG9ydCBBamF4IGZyb20gJy4uLy4uL0FqYXgvQWpheCc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi8uLi9Db25maWcvQ29uZmlnJztcbmNsYXNzIEZpbG1Nb2RlbCBleHRlbmRzIElNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZUZpbG0oanNvbikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGpzb24uaWQsXG4gICAgICAgICAgICBjb250ZW50VVJMOiBqc29uLmNvbnRlbnRfdXJsLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5wYXJzZUNvbnRlbnRGb3JGaWxtKGpzb24uY29udGVudCksXG4gICAgICAgIH07XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZUNvbnRlbnRGb3JGaWxtKGNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBjb250ZW50LmlkLFxuICAgICAgICAgICAgdGl0bGU6IGNvbnRlbnQudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogY29udGVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHJhdGluZzogY29udGVudC5yYXRpbmcsXG4gICAgICAgICAgICB5ZWFyOiBjb250ZW50LnllYXIsXG4gICAgICAgICAgICBwZXJzb25zOiB0aGlzLnBhcnNlUGVyc29uc0ZvckZpbG0oY29udGVudC5wZXJzb25zX3JvbGVzKSxcbiAgICAgICAgICAgIGlzRnJlZTogY29udGVudC5pc19mcmVlLFxuICAgICAgICAgICAgYWdlTGltaXQ6IGNvbnRlbnQuYWdlX2xpbWl0LFxuICAgICAgICAgICAgdHJhaWxlclVSTDogY29udGVudC50cmFpbGVyX3VybCxcbiAgICAgICAgICAgIHByZXZpZXdVUkw6IGNvbnRlbnQucHJldmlld191cmwsXG4gICAgICAgICAgICB0eXBlOiBjb250ZW50LnR5cGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZVBlcnNvbnNGb3JGaWxtKHBlcnNvbnNXaXRoUm9sZXMpIHtcbiAgICAgICAgcmV0dXJuIHBlcnNvbnNXaXRoUm9sZXMubWFwKChwZXJzb25XaXRoUm9sZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VQZXJzb25Gb3JGaWxtKHBlcnNvbldpdGhSb2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZVBlcnNvbkZvckZpbG0ocGVyc29uV2l0aFJvbGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBwZXJzb25XaXRoUm9sZS5wZXJzb24uaWQsXG4gICAgICAgICAgICBuYW1lOiBwZXJzb25XaXRoUm9sZS5wZXJzb24ubmFtZSxcbiAgICAgICAgICAgIHJvbGU6IHBlcnNvbldpdGhSb2xlLnJvbGUudGl0bGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIDtcbiAgICBnZXRGaWxtQWN0b3JzKHBlcnNvbnMpIHtcbiAgICAgICAgY29uc3QgYWN0b3JSb2xlID0geyBpZDogMCwgdGl0bGU6ICdBQ1RPUicgfTtcbiAgICAgICAgcmV0dXJuIHBlcnNvbnMuZmlsdGVyKHBlcnNvbiA9PiBwZXJzb24ucm9sZSA9PT0gYWN0b3JSb2xlLnRpdGxlKTtcbiAgICB9XG4gICAgZ2V0RmlsbURpcmVjdG9ycyhwZXJzb25zKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yUm9sZSA9IHsgaWQ6IDAsIHRpdGxlOiAnRElSRUNUT1InIH07XG4gICAgICAgIHJldHVybiBwZXJzb25zLmZpbHRlcihwZXJzb24gPT4gcGVyc29uLnJvbGUgPT09IGRpcmVjdG9yUm9sZS50aXRsZSk7XG4gICAgfVxuICAgIGFzeW5jIGdldEZpbG0oaWQpIHtcbiAgICAgICAgbGV0IGNvbmYgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcuYXBpLmZpbG0pO1xuICAgICAgICBjb25mLnVybCA9IGNvbmYudXJsLnJlcGxhY2UoJ3s6aWR9JywgaWQudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQWpheC5hamF4KGNvbmYpO1xuICAgICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMocmVzcG9uc2UsIGNvbmYpO1xuICAgICAgICBjb25zdCBmaWxtRGF0YSA9IHRoaXMucGFyc2VGaWxtKHJlc3BvbnNlLnJlc3BvbnNlQm9keS5ib2R5LmZpbG0pO1xuICAgICAgICBpZiAoZmlsbURhdGEuY29udGVudCkge1xuICAgICAgICAgICAgZmlsbURhdGEuY29udGVudC5hY3RvcnMgPSB0aGlzLmdldEZpbG1BY3RvcnMoZmlsbURhdGEuY29udGVudC5wZXJzb25zIHx8IFtdKTtcbiAgICAgICAgICAgIGZpbG1EYXRhLmNvbnRlbnQuZGlyZWN0b3JzID0gdGhpcy5nZXRGaWxtRGlyZWN0b3JzKGZpbG1EYXRhLmNvbnRlbnQucGVyc29ucyB8fCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmaWxtRGF0YSk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IEZpbG1Nb2RlbDtcbiIsIi8qKlxuICog0JHQsNC30L7QstGL0Lkg0LrQu9Cw0YHRgSDQtNC70Y8g0LzQvtC00LXQu9C4LlxuICog0JLRi9C/0L7Qu9C90Y/QtdGCINCx0LjQt9C90LXRgSDQu9C+0LPQuNC60YMg0Lgg0YDQsNCx0L7RgtCw0LXRgiDRgSDQtNCw0L3QvdGL0LzQuCDQuCDRgdC10YLRjNGOLlxuICogQGNsYXNzXG4gKiBAdmlydHVhbFxuICovXG5jbGFzcyBJTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5leHBvcnQgZGVmYXVsdCBJTW9kZWw7XG4iLCJpbXBvcnQgSU1vZGVsIGZyb20gJy4uL0lNb2RlbC9JTW9kZWwnO1xuaW1wb3J0IEFqYXggZnJvbSAnLi4vLi4vQWpheC9BamF4JztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uL0NvbmZpZy9Db25maWcnO1xuY2xhc3MgUGVyc29uTW9kZWwgZXh0ZW5kcyBJTW9kZWwge1xuICAgIGdlbmRlck1hcCA9IHtcbiAgICAgICAgRjogJ9CW0LXQvdGB0LrQuNC5JyxcbiAgICAgICAgTTogJ9Cc0YPQttGB0LrQvtC5JyxcbiAgICB9O1xuICAgIHJvbGVNYXAgPSB7XG4gICAgICAgIERJUkVDVE9SOiAn0KDQtdC20LjRgdGB0ZHRgCcsXG4gICAgICAgIENPTVBPU0VSOiAn0JrQvtC80L/QvtC30LjRgtC+0YAnLFxuICAgICAgICBERVNJR046ICfQlNC40LfQsNC50L3QtdGAJyxcbiAgICAgICAgRURJVE9SOiAn0KDQtdC00LDQutGC0L7RgCcsXG4gICAgICAgIEFDVE9SOiAn0JDQutGC0ZHRgCcsXG4gICAgICAgIE9QRVJBVE9SOiAn0J7Qv9C10YDQsNGC0L7RgCcsXG4gICAgICAgIFBST0RVQ0VSOiAn0J/RgNC+0LTRjtGB0YHQtdGAJyxcbiAgICAgICAgV1JJVEVSOiAn0KHRhtC10L3QsNGA0LjRgdGCJyxcbiAgICB9O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICA7XG4gICAgcGFyc2VQZXJzb24oanNvbikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGpzb24uaWQsXG4gICAgICAgICAgICBuYW1lOiBqc29uLm5hbWUsXG4gICAgICAgICAgICBnZW5kZXI6IHRoaXMudHJhbnNmb3JtR2VuZGVyKGpzb24uZ2VuZGVyKSxcbiAgICAgICAgICAgIGdlbnJlczogdGhpcy5wYXJzZUdlbnJlcyhqc29uLmdlbnJlcyksXG4gICAgICAgICAgICBncm93dGg6IGpzb24uZ3Jvd3RoLFxuICAgICAgICAgICAgYmlydGhQbGFjZToganNvbi5iaXJ0aHBsYWNlLFxuICAgICAgICAgICAgYXZhdGFyVVJMOiBqc29uLmF2YXRhcl91cmwsXG4gICAgICAgICAgICBhZ2U6IGpzb24uYWdlLFxuICAgICAgICAgICAgcm9sZXM6IHRoaXMucGFyc2VQZXJzb25Sb2xlcyhqc29uLnJvbGVzKSxcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlZEluOiB0aGlzLnBhcnNlUGFydGljaXBhdGVkQ29udGVudHMoanNvbi5wYXJ0aWNpcGF0ZWRfaW4pLFxuICAgICAgICB9O1xuICAgIH1cbiAgICA7XG4gICAgcGFyc2VHZW5yZXMoZ2VucmVzKSB7XG4gICAgICAgIHJldHVybiBnZW5yZXMubWFwKChnZW5yZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VHZW5yZShnZW5yZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICA7XG4gICAgcGFyc2VHZW5yZShnZW5yZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGdlbnJlLmlkLFxuICAgICAgICAgICAgbmFtZTogZ2VucmUubmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgO1xuICAgIHBhcnNlUGVyc29uUm9sZXMocm9sZXMpIHtcbiAgICAgICAgcmV0dXJuIHJvbGVzLm1hcCgocm9sZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VQZXJzb25Sb2xlKHJvbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xuICAgIHBhcnNlUGVyc29uUm9sZShyb2xlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogcm9sZS5pZCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRyYW5zZm9ybVJvbGUocm9sZS50aXRsZSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZVBhcnRpY2lwYXRlZENvbnRlbnRzKGNvbnRlbnRzKSB7XG4gICAgICAgIHJldHVybiBjb250ZW50cy5tYXAoKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlUGFydGljaXBhdGVkQ29udGVudChjb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZVBhcnRpY2lwYXRlZENvbnRlbnQoY29udGVudCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGNvbnRlbnQuaWQsXG4gICAgICAgICAgICB0aXRsZTogY29udGVudC50aXRsZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgO1xuICAgIHRyYW5zZm9ybUdlbmRlcihnZW5kZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZGVyTWFwW2dlbmRlcl07XG4gICAgfVxuICAgIDtcbiAgICB0cmFuc2Zvcm1Sb2xlKHJvbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9sZU1hcFtyb2xlXTtcbiAgICB9XG4gICAgO1xuICAgIGFzeW5jIGdldFBlcnNvbihpZCkge1xuICAgICAgICBsZXQgY29uZiA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZy5hcGkucGVyc29uKTtcbiAgICAgICAgY29uZi51cmwgPSBjb25mLnVybC5yZXBsYWNlKCd7OmlkfScsIGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25mKTtcbiAgICAgICAgYXdhaXQgQWpheC5jaGVja1Jlc3BvbnNlU3RhdHVzKHJlc3BvbnNlLCBjb25mKTtcbiAgICAgICAgY29uc3QgcGVyc29uRGF0YSA9IGF3YWl0IHRoaXMucGFyc2VQZXJzb24ocmVzcG9uc2UucmVzcG9uc2VCb2R5LmJvZHkucGVyc29uKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwZXJzb25EYXRhKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgUGVyc29uTW9kZWw7XG4iLCJpbXBvcnQgSU1vZGVsIGZyb20gJy4uL0lNb2RlbC9JTW9kZWwnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uLy4uL0NvbmZpZy9Db25maWdcIjtcbmltcG9ydCBBamF4IGZyb20gXCIuLi8uLi9BamF4L0FqYXhcIjtcbmNsYXNzIFNlbGVjdGlvbk1vZGVsIGV4dGVuZHMgSU1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgO1xuICAgIHBhcnNlU2VsZWN0aW9ucyhqc29uKSB7XG4gICAgICAgIHJldHVybiBqc29uLm1hcCgoc2VsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVNlbGVjdGlvbihzZWxlY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGFyc2VTZWxlY3Rpb24oc2VsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogc2VsZWN0aW9uLmlkLFxuICAgICAgICAgICAgdGl0bGU6IHNlbGVjdGlvbi50aXRsZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMucGFyc2VTZWxlY3Rpb25Db250ZW50cyhzZWxlY3Rpb24uY29udGVudCksXG4gICAgICAgIH07XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZVNlbGVjdGlvbkNvbnRlbnRzKHNlbGVjdGlvbkNvbnRlbnRzKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3Rpb25Db250ZW50cy5tYXAoKHNlbGVjdGlvbkNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU2VsZWN0aW9uQ29udGVudChzZWxlY3Rpb25Db250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZVNlbGVjdGlvbkNvbnRlbnQoc2VsZWN0aW9uQ29udGVudCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHNlbGVjdGlvbkNvbnRlbnQuaWQsXG4gICAgICAgICAgICB0aXRsZTogc2VsZWN0aW9uQ29udGVudC50aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3Rpb25Db250ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmF0aW5nOiBzZWxlY3Rpb25Db250ZW50LnJhdGluZyxcbiAgICAgICAgICAgIHllYXI6IHNlbGVjdGlvbkNvbnRlbnQueWVhcixcbiAgICAgICAgICAgIGlzRnJlZTogc2VsZWN0aW9uQ29udGVudC5pc19mcmVlLFxuICAgICAgICAgICAgYWdlTGltaXQ6IHNlbGVjdGlvbkNvbnRlbnQuYWdlX2xpbWl0LFxuICAgICAgICAgICAgdHJhaWxlclVSTDogc2VsZWN0aW9uQ29udGVudC50cmFpbGVyX3VybCxcbiAgICAgICAgICAgIHByZXZpZXdVUkw6IHNlbGVjdGlvbkNvbnRlbnQucHJldmlld191cmwsXG4gICAgICAgICAgICB0eXBlOiBzZWxlY3Rpb25Db250ZW50LnR5cGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIDtcbiAgICBhc3luYyBnZXRTZWxlY3Rpb25zKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLnNlbGVjdGlvbnMpO1xuICAgICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMocmVzcG9uc2UsIGNvbmZpZy5hcGkuc2VsZWN0aW9ucyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkRhdGEgPSB0aGlzLnBhcnNlU2VsZWN0aW9ucyhyZXNwb25zZS5yZXNwb25zZUJvZHkuYm9keS5zZWxlY3Rpb25zKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxlY3Rpb25EYXRhKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aW9uTW9kZWw7XG4iLCJpbXBvcnQgSU1vZGVsIGZyb20gJy4uL0lNb2RlbC9JTW9kZWwnO1xuaW1wb3J0IEFqYXggZnJvbSAnLi4vLi4vQWpheC9BamF4JztcbmltcG9ydCB7IGNvbmZpZywgY3VzdG9tRmFpbHVyZXMgfSBmcm9tICcuLi8uLi9Db25maWcvQ29uZmlnJztcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSAnLi4vLi4vRXZlbnREaXNwYXRjaGVyL0V2ZW50RGlzcGF0Y2hlcic7XG5jbGFzcyBVc2VyTW9kZWwgZXh0ZW5kcyBJTW9kZWwge1xuICAgIGN1cnJlbnRVc2VyO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gbnVsbDtcbiAgICB9XG4gICAgO1xuICAgIHBhcnNlVXNlcihqc29uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbWFpbDoganNvbi5lbWFpbCxcbiAgICAgICAgICAgIGJpcnRoRGF0ZToganNvbi5kYXRlX2JpcnRoLFxuICAgICAgICAgICAgYXZhdGFyOiBqc29uLmF2YXRhcl91cmwsXG4gICAgICAgIH07XG4gICAgfVxuICAgIDtcbiAgICBnZXRDdXJyZW50VXNlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFVzZXI7XG4gICAgfVxuICAgIDtcbiAgICBhc3luYyBzaWduSW5Vc2VyKHNpZ25EYXRhKSB7XG4gICAgICAgIGNvbnN0IHNpZ25JblJlc3BvbnNlID0gYXdhaXQgQWpheC5hamF4KGNvbmZpZy5hcGkuc2lnbkluLCBKU09OLnN0cmluZ2lmeShzaWduRGF0YSkpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgQWpheC5jaGVja1Jlc3BvbnNlU3RhdHVzKHNpZ25JblJlc3BvbnNlLCBjb25maWcuYXBpLnNpZ25Jbik7XG4gICAgICAgICAgICBjb25zdCBwcm9maWxlUmVzcG9uc2UgPSBhd2FpdCBBamF4LmFqYXgoY29uZmlnLmFwaS5wcm9maWxlKTtcbiAgICAgICAgICAgIGF3YWl0IEFqYXguY2hlY2tSZXNwb25zZVN0YXR1cyhwcm9maWxlUmVzcG9uc2UsIGNvbmZpZy5hcGkucHJvZmlsZSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5wYXJzZVVzZXIocHJvZmlsZVJlc3BvbnNlLnJlc3BvbnNlQm9keS5ib2R5LnVzZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCd1c2VyLWNoYW5nZWQnLCB0aGlzLmN1cnJlbnRVc2VyKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFVzZXIgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoc2lnbkluUmVzcG9uc2UucmVzcG9uc2VCb2R5Lm1lc3NhZ2UpO1xuICAgIH1cbiAgICA7XG4gICAgYXN5bmMgc2lnblVwVXNlcihzaWduRGF0YSkge1xuICAgICAgICBjb25zdCBzaWduVXBSZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLnNpZ25VcCwgSlNPTi5zdHJpbmdpZnkoc2lnbkRhdGEpKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IEFqYXguY2hlY2tSZXNwb25zZVN0YXR1cyhzaWduVXBSZXNwb25zZSwgY29uZmlnLmFwaS5zaWduVXApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2lnblVwUmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3Qgc2lnbkluUmVzcG9uc2UgPSBhd2FpdCBBamF4LmFqYXgoY29uZmlnLmFwaS5zaWduSW4sIEpTT04uc3RyaW5naWZ5KHNpZ25EYXRhKSk7XG4gICAgICAgICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMoc2lnbkluUmVzcG9uc2UsIGNvbmZpZy5hcGkuc2lnbkluKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVSZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLnByb2ZpbGUpO1xuICAgICAgICAgICAgYXdhaXQgQWpheC5jaGVja1Jlc3BvbnNlU3RhdHVzKHByb2ZpbGVSZXNwb25zZSwgY29uZmlnLmFwaS5wcm9maWxlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLnBhcnNlVXNlcihwcm9maWxlUmVzcG9uc2UucmVzcG9uc2VCb2R5LmJvZHkudXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VzZXItY2hhbmdlZCcsIHRoaXMuY3VycmVudFVzZXIpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VXNlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHNpZ25VcFJlc3BvbnNlLnJlc3BvbnNlQm9keS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgYXN5bmMgbG9nb3V0VXNlcigpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBamF4LmFqYXgoY29uZmlnLmFwaS5sb2dvdXQpO1xuICAgICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMocmVzcG9uc2UsIGNvbmZpZy5hcGkubG9nb3V0KTtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IG51bGw7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCd1c2VyLWNoYW5nZWQnLCB0aGlzLmN1cnJlbnRVc2VyKTtcbiAgICB9XG4gICAgO1xuICAgIGFzeW5jIHVwZGF0ZVVzZXIodXNlcikge1xuICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlVXNlcicpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLnVwZGF0ZSwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgQWpheC5jaGVja1Jlc3BvbnNlU3RhdHVzKHJlc3BvbnNlLCBjb25maWcuYXBpLnVwZGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBwcm9maWxlUmVzcG9uc2UgPSBhd2FpdCBBamF4LmFqYXgoY29uZmlnLmFwaS5wcm9maWxlKTtcbiAgICAgICAgICAgIGF3YWl0IEFqYXguY2hlY2tSZXNwb25zZVN0YXR1cyhwcm9maWxlUmVzcG9uc2UsIGNvbmZpZy5hcGkucHJvZmlsZSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5wYXJzZVVzZXIocHJvZmlsZVJlc3BvbnNlLnJlc3BvbnNlQm9keS5ib2R5LnVzZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbVN0YXR1cyA9IHJlc3BvbnNlLnJlc3BvbnNlQm9keS5zdGF0dXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICBtc2c6IGN1c3RvbUZhaWx1cmVzW2N1c3RvbVN0YXR1c10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgndXNlci1jaGFuZ2VkJywgdGhpcy5jdXJyZW50VXNlcik7XG4gICAgfVxuICAgIDtcbiAgICBhc3luYyBhdmF0YXJVcGRhdGUoZm9ybURhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2F2YXRhclVwZGF0ZScpO1xuICAgICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLmF2YXRhclVwZGF0ZSwgSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRyeSB7XG4gICAgICAgIC8vICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMocmVzcG9uc2UsIGNvbmZpZy5hcGkuYXZhdGFyVXBkYXRlKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKVxuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgY29uc3QgcHJvZmlsZVJlc3BvbnNlID0gYXdhaXQgQWpheC5hamF4KGNvbmZpZy5hcGkucHJvZmlsZSk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygncHJvZmlsZVJlc3BvbnNlJywgcHJvZmlsZVJlc3BvbnNlKTtcbiAgICAgICAgLy8gICAgIGF3YWl0IEFqYXguY2hlY2tSZXNwb25zZVN0YXR1cyhwcm9maWxlUmVzcG9uc2UsIGNvbmZpZy5hcGkucHJvZmlsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5wYXJzZVVzZXIocHJvZmlsZVJlc3BvbnNlLnJlc3BvbnNlQm9keS5ib2R5LnVzZXIpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2N1cnJlbnRVc2VyJywgdGhpcy5jdXJyZW50VXNlcik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY2F0Y2gge1xuICAgICAgICAvLyAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsIGNvbmZpZy5ob3N0ICsgY29uZmlnLmFwaS5hdmF0YXJVcGRhdGUudXJsLCBmYWxzZSk7XG4gICAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBamF4LmdldENzcmZUb2tlbkZyb21TZXJ2ZXIoKTtcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdjc3JmLXRva2VuJywgcmVzcG9uc2UuYm9keVsnY3NyZi10b2tlbiddKTtcbiAgICAgICAgcmVxdWVzdC5zZW5kKGZvcm1EYXRhKTtcbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVSZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLnByb2ZpbGUpO1xuICAgICAgICAgICAgYXdhaXQgQWpheC5jaGVja1Jlc3BvbnNlU3RhdHVzKHByb2ZpbGVSZXNwb25zZSwgY29uZmlnLmFwaS5wcm9maWxlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9maWxlUmVzcG9uc2UucmVzcG9uc2VCb2R5LmJvZHkudXNlcicsIHByb2ZpbGVSZXNwb25zZS5yZXNwb25zZUJvZHkuYm9keS51c2VyKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLnBhcnNlVXNlcihwcm9maWxlUmVzcG9uc2UucmVzcG9uc2VCb2R5LmJvZHkudXNlcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy5jdXJyZW50VXNlcicsIHRoaXMuY3VycmVudFVzZXIpO1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VzZXItY2hhbmdlZCcsIHRoaXMuY3VycmVudFVzZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MTMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICBtc2c6ICfQodC70LjRiNC60L7QvCDQsdC+0LvRjNGI0L7QuSDRgNCw0LfQvNC10YAg0YTQsNC50LvQsCcsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbVN0YXR1cyA9IHJlc3BvbnNlLnJlc3BvbnNlQm9keS5zdGF0dXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICBtc2c6IGN1c3RvbUZhaWx1cmVzW2N1c3RvbVN0YXR1c10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgYXN5bmMgYXZhdGFyRGVsZXRlKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLmF2YXRhckRlbGV0ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMocmVzcG9uc2UsIGNvbmZpZy5hcGkuYXZhdGFyRGVsZXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVSZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLnByb2ZpbGUpO1xuICAgICAgICAgICAgYXdhaXQgQWpheC5jaGVja1Jlc3BvbnNlU3RhdHVzKHByb2ZpbGVSZXNwb25zZSwgY29uZmlnLmFwaS5wcm9maWxlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLnBhcnNlVXNlcihwcm9maWxlUmVzcG9uc2UucmVzcG9uc2VCb2R5LmJvZHkudXNlcik7XG4gICAgICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgndXNlci1jaGFuZ2VkJywgdGhpcy5jdXJyZW50VXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIGFzeW5jIGF1dGhVc2VyQnlDb29raWUoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQWpheC5hamF4KGNvbmZpZy5hcGkucHJvZmlsZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMocmVzcG9uc2UsIGNvbmZpZy5hcGkucHJvZmlsZSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5wYXJzZVVzZXIocmVzcG9uc2UucmVzcG9uc2VCb2R5LmJvZHkudXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFdmVudERpc3BhdGNoZXIuZW1pdCgndXNlci1jaGFuZ2VkJywgdGhpcy5jdXJyZW50VXNlcik7IFRPRE86IG5lZWQ/XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IFVzZXJNb2RlbDtcbiIsImltcG9ydCBwYXRocyBmcm9tIFwiLi9Sb3V0ZXJQYXRoc1wiO1xuY2xhc3MgUm91dGVyIHtcbiAgICByb3V0ZXM7XG4gICAgdW5rbm93blBhZ2VIYW5kbGVyO1xuICAgIG5lYXJlc3ROb3RBdXRoVXJsO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgICAgICB0aGlzLnVua25vd25QYWdlSGFuZGxlciA9ICgpID0+IHsgfTtcbiAgICAgICAgdGhpcy5uZWFyZXN0Tm90QXV0aFVybCA9IHBhdGhzLm1haW47XG4gICAgfVxuICAgIDtcbiAgICBzdGFydChlbnRyeVBhdGgpIHtcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBwYXRoOiBlbnRyeVBhdGggfSwgJycsIGVudHJ5UGF0aCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJvdXRlKCk7XG4gICAgfVxuICAgIDtcbiAgICBnb1RvUGF0aChwYXRoKSB7XG4gICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHsgcGF0aDogcGF0aCB9LCAnJywgcGF0aCk7XG4gICAgICAgIHRoaXMucm91dGUoKTtcbiAgICB9XG4gICAgO1xuICAgIHJvdXRlKCkge1xuICAgICAgICBjb25zdCByYXdQYXRoID0gaGlzdG9yeS5zdGF0ZT8ucGF0aDtcbiAgICAgICAgaWYgKCFyYXdQYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuc2FuaXRpemVVcmwocmF3UGF0aCk7XG4gICAgICAgIGNvbnN0IHRtcFBhdGggPSAnLycgKyBwYXRoO1xuICAgICAgICBpZiAodG1wUGF0aCAhPT0gcGF0aHMuc2lnbkluICYmIHRtcFBhdGggIT09IHBhdGhzLnNpZ25VcCkge1xuICAgICAgICAgICAgdGhpcy5uZWFyZXN0Tm90QXV0aFVybCA9IHBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm91bmRlZFBhdGggPSB0aGlzLnJvdXRlcy5maW5kKCh7IHJ1bGUsIGhhbmRsZXIgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBwYXRoLm1hdGNoKHJ1bGUpO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWZvdW5kZWRQYXRoKSB7XG4gICAgICAgICAgICB0aGlzLnVua25vd25QYWdlSGFuZGxlcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBzaG93VW5rbm93blBhZ2UoKSB7XG4gICAgICAgIHRoaXMudW5rbm93blBhZ2VIYW5kbGVyKCk7XG4gICAgfVxuICAgIDtcbiAgICBzZXRVbmtub3duUGFnZUhhbmRsZXIoaGFuZGxlcikge1xuICAgICAgICB0aGlzLnVua25vd25QYWdlSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfVxuICAgIDtcbiAgICBhZGRSdWxlKHJ1bGUsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgbmV3Um91dGUgPSB7XG4gICAgICAgICAgICBydWxlOiB0aGlzLnBhcnNlUnVsZShydWxlKSxcbiAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucm91dGVzLnB1c2gobmV3Um91dGUpO1xuICAgICAgICByZXR1cm4gbmV3Um91dGU7XG4gICAgfVxuICAgIHJlbW92ZVJ1bGUocnVsZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucm91dGVzLmZpbmRJbmRleCgocm91dGUpID0+IHJvdXRlLnJ1bGUuc291cmNlID09PSB0aGlzLnBhcnNlUnVsZShydWxlKS5zb3VyY2UpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgZ2V0TmVhcmVzdE5vdEF1dGhVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5lYXJlc3ROb3RBdXRoVXJsO1xuICAgIH1cbiAgICA7XG4gICAgcGFyc2VSdWxlKHJ1bGUpIHtcbiAgICAgICAgbGV0IHVyaSA9IHRoaXMuc2FuaXRpemVVcmwocnVsZSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC97XFw6bnVtYmVyfS9nLCAnKFxcXFxkKyknKVxuICAgICAgICAgICAgLnJlcGxhY2UoL3tcXDp3b3JkfS9nLCAnKFxcXFx3KyknKVxuICAgICAgICAgICAgLnJlcGxhY2UoL3tcXDpcXHcrfS9nLCAnKFxcXFx3KyknKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke3VyaX0kYCwgJ2knKTtcbiAgICB9XG4gICAgc2FuaXRpemVVcmwocnVsZSkge1xuICAgICAgICByZXR1cm4gcnVsZS5yZXBsYWNlKC9cXC8kLywgJycpLnJlcGxhY2UoL15cXC8vLCAnJyk7XG4gICAgfVxuICAgIDtcbn1cbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiIsIi8qKlxuICog0JrQvtC90YTQuNCz0YPRgNCw0YbQuNGPIFVSTCDQsNC00YDQtdGB0L7QsiDQv9GA0LjQu9C+0LbQtdC90LjRj1xuICogQGNhdGVnb3J5IFJvdXRlclxuICogQGNvbnN0YW50IHtPYmplY3R9XG4gKiBAcGFyYW0ge3tuYW1lOiBzdHJpbmcsIFVSTDogc3RyaW5nfX0g0KHRgtGA0YPQutGC0YPRgNCwINC60L7QvdGE0LjQs9GD0YDQsNGG0LjQuFxuICovXG5jb25zdCBwYXRocyA9IHtcbiAgICBtYWluOiAnLycsXG4gICAgY2F0YWxvZzogJy9jYXRhbG9nJyxcbiAgICBzdG9yZTogJy9zdG9yZScsXG4gICAgbXlNb3ZpZTogJy9teS1tb3ZpZScsXG4gICAgc2V0dGluZ3M6ICcvc2V0dGluZ3MnLFxuICAgIHNpZ25JbjogJy9zaWduSW4nLFxuICAgIHNpZ25VcDogJy9zaWduVXAnLFxuICAgIGxvZ291dDogJy9sb2dvdXQnLFxuICAgIGZpbG1zOiAnL2ZpbG1zL3s6aWR9JyxcbiAgICBwZXJzb25zOiAnL3BlcnNvbnMvezppZH0nLFxufTtcbmV4cG9ydCBkZWZhdWx0IHBhdGhzO1xuIiwiaW1wb3J0IHZhbGlkYXRvcnMgZnJvbSAnLi9WYWxpZGF0b3JDb25maWcnO1xuY29uc3QgdW5rbm93blZhbGlkYXRvciA9IHtcbiAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICBlcnJvck1zZzogJ9Cd0LXQuNC30LLQtdGB0YLQvdGL0Lkg0YLQuNC/INC/0L7Qu9GPJyxcbn07XG5jb25zdCB2YWxpZFZhbGlkYXRvciA9IHtcbiAgICBpc1ZhbGlkOiB0cnVlLFxuICAgIGVycm9yTXNnOiAnJyxcbn07XG4vLyBjb25zdCBlbXB0eVZhbGlkYXRvcjogVmFsaWRhdG9yUmVzdWx0ID0ge1xuLy8gICAgIGlzVmFsaWQ6ICAgICAgZmFsc2UsXG4vLyAgICAgZXJyb3JNc2c6ICAgICAn0J/Rg9GB0YLQvtC1INC/0L7Qu9C1Jyxcbi8vIH1cbmZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQuaWQgPT09ICdhdmF0YXInKSB7XG4gICAgICAgIHJldHVybiB2YWxpZFZhbGlkYXRvcjtcbiAgICB9XG4gICAgY29uc3QgdmFsaWRhdG9yID0gdmFsaWRhdG9ycy5nZXQoaW5wdXQuaWQpO1xuICAgIGlmICghdmFsaWRhdG9yKSB7XG4gICAgICAgIHJldHVybiB1bmtub3duVmFsaWRhdG9yO1xuICAgIH1cbiAgICBjb25zdCBpc1ZhbGlkID0gdmFsaWRhdG9yLnJlZ0V4cC50ZXN0KGlucHV0LnZhbHVlKTtcbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIHsgaXNWYWxpZDogZmFsc2UsIGVycm9yTXNnOiB2YWxpZGF0b3IuZXJyb3JNc2cgfTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkVmFsaWRhdG9yO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZHMocGFzc3dvcmQsIHJlcGVhdFBhc3N3b3JkKSB7XG4gICAgY29uc3QgdmFsaWRhdGVkUGFzc3dvcmQgPSB2YWxpZGF0ZUlucHV0KHsgaWQ6ICdwYXNzd29yZCcsIHZhbHVlOiBwYXNzd29yZCB9KTtcbiAgICBpZiAoIXZhbGlkYXRlZFBhc3N3b3JkLmlzVmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIHsgaXNWYWxpZDogZmFsc2UsIGVycm9yTXNnOiB2YWxpZGF0ZWRQYXNzd29yZC5lcnJvck1zZywgcGFzc3dvcmRFcnJvck1zZzogdmFsaWRhdG9ycy5nZXQoJ3JlcGVhdC1wYXNzd29yZCcpPy5lcnJvck1zZyB9O1xuICAgIH1cbiAgICBpZiAocGFzc3dvcmQgIT09IHJlcGVhdFBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiB7IGlzVmFsaWQ6IGZhbHNlLCBlcnJvck1zZzogdmFsaWRhdGVkUGFzc3dvcmQuZXJyb3JNc2csIHBhc3N3b3JkRXJyb3JNc2c6IHZhbGlkYXRvcnMuZ2V0KCdyZXBlYXQtcGFzc3dvcmQnKT8uZXJyb3JNc2cgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgaXNWYWxpZDogdHJ1ZSwgZXJyb3JNc2c6ICcnIH07XG59XG5leHBvcnQgeyB2YWxpZGF0ZUlucHV0LCB2YWxpZGF0ZVBhc3N3b3JkcyB9O1xuIiwiY29uc3QgdmFsaWRhdG9ycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2VtYWlsJyxcbiAgICAgICAge1xuICAgICAgICAgICAgcmVnRXhwOiAvXlthLXpBLVowLTkuXyUrLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Mix9JC8sXG4gICAgICAgICAgICBlcnJvck1zZzogJ9CS0LLQtdC00ZHQvdC90YvQuSBlbWFpbCDQuNC80LXQtdGCINC90LXQutC+0YDRgNC10LrRgtC90YvQuSDQstC40LQnXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdwYXNzd29yZCcsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlZ0V4cDogL14oPz0uKlthLXpBLVpdKSg/PS4qWzAtOV0pW2EtekEtWjAtOV17OCx9JC8sXG4gICAgICAgICAgICBlcnJvck1zZzogJ9Cf0LDRgNC+0LvRjCDQtNC+0LvQttC10L0g0YHQvtC00LXRgNC20LDRgtGMINC80LjQvdC40LzRg9C8IDgg0YHQuNC80LLQvtC70L7Qsiwg0LLQutC70Y7Rh9Cw0Y8g0L7QtNC90YMg0YbQuNGE0YDRgydcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ3JlcGVhdC1wYXNzd29yZCcsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlZ0V4cDogL14oPz0uKlthLXpBLVpdKSg/PS4qWzAtOV0pW2EtekEtWjAtOV17OCx9JC8sXG4gICAgICAgICAgICBlcnJvck1zZzogJ9Cf0LDRgNC+0LvQuCDQtNC+0LvQttC90Ysg0YHQvtCy0L/QsNC00LDRgtGMJyxcbiAgICAgICAgfSxcbiAgICBdLFxuXSk7XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0b3JzO1xuIiwiaW1wb3J0IElWaWV3IGZyb20gJy4uL0lWaWV3L0lWaWV3JztcbmltcG9ydCBGaWxtVGVtcGxhdGUgZnJvbSAnLi9GaWxtVmlldy5oYnMnO1xuaW1wb3J0ICcuL0ZpbG1WaWV3LmNzcyc7XG5pbXBvcnQgUGxheWVyVmlldyBmcm9tIFwiLi4vUGxheWVyVmlldy9QbGF5ZXJWaWV3XCI7XG5pbXBvcnQgRmlsbURhdGEgZnJvbSBcIi4vRmlsbVZpZXdDb25maWdcIjtcbi8qKlxuICog0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDRhNC40LvRjNC80LAg0L/RgNC40LvQvtC20LXQvdC40Y9cbiAqIEBjYXRlZ29yeSBGaWxtXG4gKiBAZXh0ZW5kcyB7SVZpZXd9XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgLSDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YIg0LTQu9GPINGF0LXQtNC10YDQsFxuICovXG5jbGFzcyBGaWxtVmlldyBleHRlbmRzIElWaWV3IHtcbiAgICBwbGF5ZXJWaWV3O1xuICAgIHRyYWlsZXJCdXR0b247XG4gICAgc3Vic2NyaWJlQnV0dG9uO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIEZpbG1UZW1wbGF0ZSh7fSksICcuZmlsbScpO1xuICAgIH1cbiAgICA7XG4gICAgbmV3UGxheWVyVmlldygpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJWaWV3ID0gbmV3IFBsYXllclZpZXcodGhpcy5wYXJlbnQucGFyZW50RWxlbWVudCk7XG4gICAgfVxuICAgIDtcbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLnBsYXllclZpZXcgPSBudWxsO1xuICAgICAgICBzdXBlci5oaWRlKCk7XG4gICAgfVxuICAgIGZpbGxGaWxtKGRhdGEpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IEZpbG1UZW1wbGF0ZShkYXRhKTtcbiAgICAgICAgdGhpcy5yZW5kZXJCdXR0b25zKCk7XG4gICAgfVxuICAgIDtcbiAgICByZW5kZXJCdXR0b25zKCkge1xuICAgICAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxtLWNvbnRlbnRfX2J1dHRvbnMnKTtcbiAgICAgICAgdGhpcy50cmFpbGVyQnV0dG9uID0gKG5ldyBGaWxtRGF0YS50cmFpbGVyQnV0dG9uLmNvbXBvbmVudFR5cGUoYnV0dG9uc0NvbnRhaW5lciwgJycsICcnLCBGaWxtRGF0YS50cmFpbGVyQnV0dG9uLmNvbXBvbmVudERhdGEpKTtcbiAgICAgICAgdGhpcy50cmFpbGVyQnV0dG9uLnNob3coKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVCdXR0b24gPSAobmV3IEZpbG1EYXRhLnN1YnNjcmliZUJ1dHRvbi5jb21wb25lbnRUeXBlKGJ1dHRvbnNDb250YWluZXIsICcnLCAnJywgRmlsbURhdGEuc3Vic2NyaWJlQnV0dG9uLmNvbXBvbmVudERhdGEpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVCdXR0b24uc2hvdygpO1xuICAgIH1cbiAgICA7XG4gICAgYmluZENsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IEZpbG1WaWV3O1xuIiwiaW1wb3J0IEJ1dHRvbkNvbXBvbmVudCBmcm9tICcuLi8uLi9Db21wb25lbnRzL0J1dHRvbkNvbXBvbmVudC9CdXR0b25Db21wb25lbnQnO1xuY29uc3QgRmlsbURhdGEgPSB7XG4gICAgdHJhaWxlckJ1dHRvbjoge1xuICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICB0ZXh0OiAn0J7RhNC+0YDQvNC40YLRjCDQv9C+0LTQv9C40YHQutGDJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N1YnNjcmliZS1idXR0b24nLFxuICAgICAgICAgICAgZGF0YUFjdGlvbjogJ3N1YnNjcmliZScsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudFR5cGU6IEJ1dHRvbkNvbXBvbmVudCxcbiAgICB9LFxuICAgIHN1YnNjcmliZUJ1dHRvbjoge1xuICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICB0ZXh0OiAn0KLRgNC10LnQu9C10YAnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3Vic2NyaWJlLWJ1dHRvbicsXG4gICAgICAgICAgICBkYXRhQWN0aW9uOiAndHJhaWxlcicsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudFR5cGU6IEJ1dHRvbkNvbXBvbmVudCxcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IEZpbG1EYXRhO1xuIiwiaW1wb3J0IElWaWV3IGZyb20gXCIuLi9JVmlldy9JVmlld1wiO1xuaW1wb3J0IEhlYWRlclRlbXBsYXRlIGZyb20gJy4vSGVhZGVyVmlldy5oYnMnO1xuaW1wb3J0ICcuL0hlYWRlclZpZXcuY3NzJztcbmltcG9ydCBIZWFkZXJEYXRhIGZyb20gJy4vSGVhZGVyVmlld0NvbmZpZyc7XG4vKipcbiAqINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0YXQtdC00LXRgNCwINC/0YDQuNC70L7QttC10L3QuNGPXG4gKiBAY2F0ZWdvcnkgSGVhZGVyXG4gKiBAZXh0ZW5kcyB7SVZpZXd9XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgLSDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YIg0LTQu9GPINGF0LXQtNC10YDQsFxuICovXG5jbGFzcyBIZWFkZXJWaWV3IGV4dGVuZHMgSVZpZXcge1xuICAgIGxlZnRTaWRlO1xuICAgIHJpZ2h0U2lkZTtcbiAgICBwcm9maWxlO1xuICAgIGFjdGlvbnNMaXN0O1xuICAgIGN1cnJlbnRBY3RpdmVJdGVtO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIEhlYWRlclRlbXBsYXRlKHt9KSwgJy5qcy1oZWFkZXItY29udGFpbmVyJyk7XG4gICAgICAgIC8vIEluaXRpYWxpemUgZmllbGRzXG4gICAgICAgIHRoaXMubGVmdFNpZGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhlYWRlci1jb250YWluZXJfX2xlZnQnKTtcbiAgICAgICAgdGhpcy5yaWdodFNpZGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhlYWRlci1jb250YWluZXJfX3JpZ2h0Jyk7XG4gICAgICAgIHRoaXMucHJvZmlsZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdXNlci1wcm9maWxlJyk7XG4gICAgICAgIC8vIFJlbmRlciBjb21wb25lbnRzXG4gICAgICAgIEhlYWRlckRhdGEubGVmdEl0ZW1zLmZvckVhY2goKHsgY29tcG9uZW50VHlwZSwgY29tcG9uZW50RGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgY29tcG9uZW50VHlwZSh0aGlzLmxlZnRTaWRlLCAnJywgJycsIGNvbXBvbmVudERhdGEpO1xuICAgICAgICAgICAgY29tcG9uZW50LnNob3coKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0aW9uc0xpc3QgPSAobmV3IEhlYWRlckRhdGEuYWN0aW9uc0xpc3QuY29tcG9uZW50VHlwZSh0aGlzLmxlZnRTaWRlLCAnJywgJycsIEhlYWRlckRhdGEuYWN0aW9uc0xpc3QuY29tcG9uZW50RGF0YSkpO1xuICAgICAgICB0aGlzLmFjdGlvbnNMaXN0LnNob3coKTtcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlSXRlbSA9IG51bGw7XG4gICAgICAgIEhlYWRlckRhdGEucmlnaHRJdGVtcy5mb3JFYWNoKCh7IGNvbXBvbmVudFR5cGUsIGNvbXBvbmVudERhdGEgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IGNvbXBvbmVudFR5cGUodGhpcy5yaWdodFNpZGUsICcnLCAnJywgY29tcG9uZW50RGF0YSk7XG4gICAgICAgICAgICBjb21wb25lbnQuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yaWdodFNpZGUucmVtb3ZlQ2hpbGQodGhpcy5wcm9maWxlKTtcbiAgICAgICAgdGhpcy5yaWdodFNpZGUuYXBwZW5kQ2hpbGQodGhpcy5wcm9maWxlKTtcbiAgICB9XG4gICAgO1xuICAgIGNoYW5nZUFjdGl2ZUhlYWRlckxpc3RJdGVtKGhyZWYpIHtcbiAgICAgICAgY29uc3QgbGlzdEVsZW1lbnQgPSB0aGlzLmFjdGlvbnNMaXN0LmdldEVsZW1lbnQ7XG4gICAgICAgIGxpc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtocmVmPVwiJHt0aGlzLmN1cnJlbnRBY3RpdmVJdGVtfVwiXWApPy5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlSXRlbSA9IGhyZWY7XG4gICAgICAgIGxpc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtocmVmPVwiJHtocmVmfVwiXWApPy5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgO1xuICAgIC8qKlxuICAgICAqINCk0YPQvdC60YbQuNGPINC40LfQvNC10L3QtdC90LjRjyDRjdC70LXQvNC10L3RgtCwINCyINGF0Y3QtNC10YDQtVxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gcHJvZmlsZUl0ZW1OYW1lIC0g0L3QsNC30LLQsNC90LjQtSDRjdC70LXQvNC10L3RgtCwXG4gICAgICogQHBhcmFtICB7YW55fSBkYXRhIC0g0JTQsNC90L3Ri9C1LCDQvdC10L7QsdGF0L7QtNC40LzRi9C1INC00LvRjyDQvtGC0YDQuNGB0L7QstC60Lgg0Y3Qu9C10LzQtdC90YLQsFxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGNoYW5nZUhlYWRlclByb2ZpbGUocHJvZmlsZUl0ZW1OYW1lLCBkYXRhKSB7XG4gICAgICAgIGlmICghKHByb2ZpbGVJdGVtTmFtZSBpbiBIZWFkZXJEYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IEhlYWRlckRhdGFbcHJvZmlsZUl0ZW1OYW1lXTtcbiAgICAgICAgdGhpcy5wcm9maWxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoZGF0YT8uYXZhdGFyKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGF0YS5hdmF0YXIgPSBkYXRhLmF2YXRhcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9maWxlSXRlbSA9IG5ldyBjb21wb25lbnQuY29tcG9uZW50VHlwZSh0aGlzLnByb2ZpbGUsICcnLCAnJywgY29tcG9uZW50LmNvbXBvbmVudERhdGEpO1xuICAgICAgICBwcm9maWxlSXRlbS5zaG93KCk7XG4gICAgfVxuICAgIDtcbiAgICB0b2dnbGVQcm9maWxlKCkge1xuICAgICAgICB0aGlzLnByb2ZpbGUucXVlcnlTZWxlY3RvcignLmpzLWRyb3Bkb3duX19jb250ZW50Jyk/LmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duX19jb250ZW50X19zaG93Jyk7XG4gICAgfVxuICAgIDtcbiAgICBoaWRlUHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy5wcm9maWxlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1kcm9wZG93bl9fY29udGVudCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bl9fY29udGVudF9fc2hvdycpO1xuICAgIH1cbiAgICA7XG4gICAgLyoqXG4gICAgICog0KTRg9C90LrRhtC40Y8g0LTQvtCx0LDQstC70LXQvdC40Y8g0L7QsdGA0LDQsdC+0YLRh9C40LrQsCDRgdC+0LHRi9GC0LjRjyDQvdCw0LbQsNGC0LjRjyDQvdCwINGF0LXQtNC10YBcbiAgICAgKiBAcGFyYW0gIHthbnl9IGxpc3RlbmVyIC0gQ2FsbGJhY2sg0YTRg9C90LrRhtC40Y8g0LTQu9GPINGB0L7QsdGL0YLQuNGPXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgYmluZENsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclZpZXc7XG4iLCJpbXBvcnQgTGlua0NvbXBvbmVudCBmcm9tICcuLi8uLi9Db21wb25lbnRzL0xpbmtDb21wb25lbnQvTGlua0NvbXBvbmVudCc7XG5pbXBvcnQgVmVydGljYWxTcGFjZXJDb21wb25lbnQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9WZXJ0aWNhbFNwYWNlckNvbXBvbmVudC9WZXJ0aWNhbFNwYWNlckNvbXBvbmVudCc7XG5pbXBvcnQgQnV0dG9uQ29tcG9uZW50IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvQnV0dG9uQ29tcG9uZW50L0J1dHRvbkNvbXBvbmVudCc7XG5pbXBvcnQgTGlzdENvbXBvbmVudCBmcm9tICcuLi8uLi9Db21wb25lbnRzL0xpc3RDb21wb25lbnQvTGlzdENvbXBvbmVudCc7XG5pbXBvcnQgRHJvcGRvd25CdXR0b25Db21wb25lbnQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudCc7XG5pbXBvcnQgJy4uLy4uL0NvbXBvbmVudHMvQ3NzL0hlYWRlckFjdGlvbkxpc3QvSGVhZGVyQWN0aW9uTGlzdC5jc3MnO1xuaW1wb3J0ICcuLi8uLi9Db21wb25lbnRzL0Nzcy9IZWFkZXJQcm9maWxlRHJvcGRvd24vSGVhZGVyUHJvZmlsZURyb3Bkb3duLmNzcyc7XG5pbXBvcnQgJy4uLy4uL0NvbXBvbmVudHMvQ3NzL0hlYWRlclNpZ25Jbi9IZWFkZXJTaWduSW4uY3NzJztcbjtcbmNvbnN0IEhlYWRlckRhdGEgPSB7XG4gICAgbGVmdEl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICBsaW5rSHJlZjogJy8nLFxuICAgICAgICAgICAgICAgIGxpbmtDbGFzczogJ2xvZ28nLFxuICAgICAgICAgICAgICAgIGxpbmtJbWFnZVNyYzogJy9pbWcvbG9nby9sb2dvLnN2ZycsXG4gICAgICAgICAgICAgICAgbGlua0ltYWdlV2lkdGg6ICc0MHB4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlOiBMaW5rQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgYWN0aW9uc0xpc3Q6IHtcbiAgICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICAgICAgbGlzdENsYXNzOiAnaGVhZGVyLWNvbnRhaW5lcl9fYWN0aW9uLWxpc3QnLFxuICAgICAgICAgICAgaXRlbUNsYXNzOiAnaGVhZGVyLWNvbnRhaW5lci1hY3Rpb24nLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtIcmVmOiAnLycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rQ2xhc3M6ICdoZWFkZXItY29udGFpbmVyLWFjdGlvbl9fbGluaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rVGV4dDogJ9CT0LvQsNCy0L3QsNGPJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtUZXh0Q2xhc3M6ICdoZWFkZXItY29udGFpbmVyLWFjdGlvbi1saW5rX190ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50VHlwZTogTGlua0NvbXBvbmVudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rSHJlZjogJy9jYXRhbG9nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtDbGFzczogJ2hlYWRlci1jb250YWluZXItYWN0aW9uX19saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtUZXh0OiAn0JrQsNGC0LDQu9C+0LMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RleHRDbGFzczogJ2hlYWRlci1jb250YWluZXItYWN0aW9uLWxpbmtfX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlOiBMaW5rQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtIcmVmOiAnL3N0b3JlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtDbGFzczogJ2hlYWRlci1jb250YWluZXItYWN0aW9uX19saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtUZXh0OiAn0JzQsNCz0LDQt9C40L0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RleHRDbGFzczogJ2hlYWRlci1jb250YWluZXItYWN0aW9uLWxpbmtfX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlOiBMaW5rQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtIcmVmOiAnL215LW1vdmllJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtDbGFzczogJ2hlYWRlci1jb250YWluZXItYWN0aW9uX19saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtUZXh0OiAn0JzQvtGRJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtUZXh0Q2xhc3M6ICdoZWFkZXItY29udGFpbmVyLWFjdGlvbi1saW5rX190ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50VHlwZTogTGlua0NvbXBvbmVudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRUeXBlOiBMaXN0Q29tcG9uZW50LFxuICAgIH0sXG4gICAgcmlnaHRJdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICAgICAgbGlua0hyZWY6ICcjJyxcbiAgICAgICAgICAgICAgICBsaW5rQ2xhc3M6ICdzZWFyY2gnLFxuICAgICAgICAgICAgICAgIGxpbmtJbWFnZVNyYzogJy9pbWcvaWNvbnMvc2VhcmNoLnN2ZycsXG4gICAgICAgICAgICAgICAgbGlua0ltYWdlV2lkdGg6ICcyNHB4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlOiBMaW5rQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICAgICAgc2l6ZTogJzI0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlOiBWZXJ0aWNhbFNwYWNlckNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICAgICAgICAgIHRleHQ6ICfQmtGD0L/QuNGC0Ywg0L/QvtC00L/QuNGB0LrRgycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3Vic2NyaWJlLWJ1dHRvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcG9uZW50VHlwZTogQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICAgICAgc2l6ZTogJzI0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlOiBWZXJ0aWNhbFNwYWNlckNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIHByb2ZpbGU6IHtcbiAgICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICAgICAgZGF0YUFjdGlvbjogJ3Byb2ZpbGUnLFxuICAgICAgICAgICAgYXZhdGFyOiAnL2ltZy9wcm9maWxlL3Byb2ZpbGUuanBnJyxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsaW5rSHJlZjogJy9zZXR0aW5ncycsXG4gICAgICAgICAgICAgICAgICAgIGxpbmtDbGFzczogJ3Byb2ZpbGUtbGluaycsXG4gICAgICAgICAgICAgICAgICAgIGxpbmtJbWFnZVNyYzogJy9pbWcvaWNvbnMvc2V0dGluZ3Muc3ZnJyxcbiAgICAgICAgICAgICAgICAgICAgbGlua0ltYWdlQ2xhc3M6ICdwcm9maWxlLWxpbmtfX2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgbGlua0ltYWdlV2lkdGg6ICcyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgbGlua1RleHQ6ICfQndCw0YHRgtGA0L7QudC60LgnLFxuICAgICAgICAgICAgICAgICAgICBsaW5rVGV4dENsYXNzOiAncHJvZmlsZS1saW5rX190ZXh0JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50VHlwZTogRHJvcGRvd25CdXR0b25Db21wb25lbnQsXG4gICAgfSxcbiAgICBzaWduSW46IHtcbiAgICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICAgICAgZGF0YUFjdGlvbjogJ3NpZ25JbicsXG4gICAgICAgICAgICBsaW5rSHJlZjogJy9zaWduSW4nLFxuICAgICAgICAgICAgbGlua0NsYXNzOiAnaGVhZGVyX19zaWduSW4tbGluaycsXG4gICAgICAgICAgICBsaW5rSW1hZ2VTcmM6ICcvaW1nL2ljb25zL2NpcmNsZS11c2VyLnN2ZycsXG4gICAgICAgICAgICBsaW5rSW1hZ2VXaWR0aDogJzMwcHgnLFxuICAgICAgICAgICAgbGlua1RleHQ6ICfQktC+0LnRgtC4JyxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50VHlwZTogTGlua0NvbXBvbmVudCxcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlckRhdGE7XG4iLCIvKipcbiAqINCR0LDQt9C+0LLRi9C5INC60LvQsNGB0YEg0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0LrQvtC80L/QvtC90LXQvdGC0LAg0L/RgNC40LvQvtC20LXQvdC40Y9cbiAqIEBjbGFzc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IC0g0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INGN0LvQtdC80LXQvdGCINC00LvRjyDQvtGC0L7QsdGA0LDQttC10L3QuNGPXG4gKi9cbmNsYXNzIElWaWV3IHtcbiAgICAvKipcbiAgICAgKiDQoNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YIg0LTQu9GPINC00LDQvdC90L7Qs9C+INCy0LjQtNCwXG4gICAgICogQG1lbWJlclxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcGFyZW50O1xuICAgIC8qKlxuICAgICAqINCa0L7RgNC90LXQstC+0Lkg0Y3Qu9C10LzQtdC90YIg0LTQu9GPINC00LDQvdC90L7Qs9C+INCy0LjQtNCwXG4gICAgICogQG1lbWJlclxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHRlbXBsYXRlLCB0b3BFbGVtZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHRlbXBsYXRlLCAndGV4dC9odG1sJykucXVlcnlTZWxlY3Rvcih0b3BFbGVtZW50KTtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignQ2FuIG5vdCBmaW5kIGVsZW1lbnQgZnJvbSB0ZW1wbGF0ZSEnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICA7XG4gICAgLyoqXG4gICAgICog0KTRg9C90LrRhtC40Y8g0LTQu9GPINC+0YLRgNC40YHQvtCy0LrQuCDQstC40LTQsFxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgICA7XG4gICAgLyoqXG4gICAgICog0KTRg9C90LrRhtC40Y8g0LTQu9GPINGB0LrRgNGL0YLQuNGPINCy0LjQtNCwXG4gICAgICogQG1ldGhvZFxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IElWaWV3O1xuIiwiaW1wb3J0IElWaWV3IGZyb20gJy4uL0lWaWV3L0lWaWV3JztcbmltcG9ydCBNYWluVGVtcGxhdGUgZnJvbSAnLi9NYWluVmlldy5oYnMnO1xuaW1wb3J0ICcuL01haW5WaWV3LmNzcyc7XG5jbGFzcyBNYWluVmlldyBleHRlbmRzIElWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBNYWluVGVtcGxhdGUoe30pLCAnLmNhdGVnb3JpZXMnKTtcbiAgICB9XG4gICAgO1xuICAgIGZpbGxTZWxlY3Rpb25zKHNlbGVjdGlvbnMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IE1haW5UZW1wbGF0ZSh7IHNlbGVjdGlvbnM6IHNlbGVjdGlvbnMgfSk7XG4gICAgfVxuICAgIDtcbiAgICBiaW5kQ2xpY2tFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNhdGVnb3J5X19jb250YWluZXJfX2l0ZW0taW1hZ2UnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBNYWluVmlldztcbiIsImltcG9ydCBJVmlldyBmcm9tICcuLi9JVmlldy9JVmlldyc7XG5pbXBvcnQgTW9kYWxSaWdodFRlbXBsYXRlIGZyb20gJy4vTW9kYWxSaWdodFZpZXcuaGJzJztcbmltcG9ydCBNb2RhbFJpZ2h0RGF0YSBmcm9tICcuL01vZGFsUmlnaHRWaWV3Q29uZmlnJztcbmltcG9ydCAnLi9Nb2RhbFJpZ2h0Vmlldy5jc3MnO1xuaW1wb3J0IFNpZ25JblZpZXcgZnJvbSAnLi4vU2lnbkluVmlldy9TaWduSW5WaWV3JztcbmltcG9ydCBTaWduVXBWaWV3IGZyb20gJy4uL1NpZ25VcFZpZXcvU2lnblVwVmlldyc7XG4vKipcbiAqINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0L/RgNCw0LLQvtCz0L4g0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LBcbiAqIEBjYXRlZ29yeSBNb2RhbFJpZ2h0XG4gKiBAZXh0ZW5kcyB7SVZpZXd9XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgLSDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YIg0LTQu9GPINC/0YDQsNCy0L7Qs9C+INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwXG4gKi9cbmNsYXNzIE1vZGFsUmlnaHRWaWV3IGV4dGVuZHMgSVZpZXcge1xuICAgIG1vZGFsQm9keTtcbiAgICBjdXJyZW50VmlldztcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBNb2RhbFJpZ2h0VGVtcGxhdGUoeyB0aXRsZTogTW9kYWxSaWdodERhdGEudGl0bGUgfSksICcuanMtbW9kYWxfX2FyZWEnKTtcbiAgICAgICAgdGhpcy5tb2RhbEJvZHkgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW1vZGFsX19ib2R5Jyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSBudWxsO1xuICAgIH1cbiAgICA7XG4gICAgc2V0U2lnbkluVmlldygpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IG5ldyBTaWduSW5WaWV3KHRoaXMubW9kYWxCb2R5KTtcbiAgICB9XG4gICAgO1xuICAgIHNldFNpZ25VcFZpZXcoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSBuZXcgU2lnblVwVmlldyh0aGlzLm1vZGFsQm9keSk7XG4gICAgfVxuICAgIDtcbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLnBhcmVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC0tcmlnaHQtLW9wZW4nKTtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgIH1cbiAgICA7XG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLXJpZ2h0LS1vcGVuJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IG51bGw7XG4gICAgICAgICAgICBzdXBlci5oaWRlKCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQvtCx0YDQsNCx0L7RgtGH0LjQutCwINGB0L7QsdGL0YLQuNGPINC90LDQttCw0YLQuNGPINC90LBcbiAgICAgKiBAcGFyYW0gIHthbnl9IGxpc3RlbmVyIC0gQ2FsbGJhY2sg0YTRg9C90LrRhtC40Y8g0LTQu9GPINGB0L7QsdGL0YLQuNGPXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgYmluZENsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IE1vZGFsUmlnaHRWaWV3O1xuIiwiO1xuY29uc3QgTW9kYWxSaWdodERhdGEgPSB7XG4gICAgdGl0bGU6ICfQktGF0L7QtCDQuNC70Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjRjycsXG4gICAgLy8gc2lnbkluVmlldzogU2lnbkluVmlldyxcbiAgICAvLyBzaWduVXBWaWV3OiBTaWduVXBWaWV3LFxuICAgIC8vIHNpZ25JbkRhdGE6IFNpZ25JbkRhdGEsXG59O1xuZXhwb3J0IGRlZmF1bHQgTW9kYWxSaWdodERhdGE7XG4iLCJpbXBvcnQgSVZpZXcgZnJvbSAnLi4vSVZpZXcvSVZpZXcnO1xuaW1wb3J0IFBlcnNvblRlbXBsYXRlIGZyb20gJy4vUGVyc29uVmlldy5oYnMnO1xuaW1wb3J0ICcuL1BlcnNvblZpZXcuY3NzJztcbmNsYXNzIFBlcnNvblZpZXcgZXh0ZW5kcyBJVmlldyB7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgUGVyc29uVGVtcGxhdGUoe30pLCAnLnBlcnNvbicpO1xuICAgIH1cbiAgICA7XG4gICAgZmlsbFBlcnNvbihkYXRhKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBQZXJzb25UZW1wbGF0ZShkYXRhKTtcbiAgICB9XG4gICAgO1xuICAgIGJpbmRDbGlja0V2ZW50KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBQZXJzb25WaWV3O1xuIiwiaW1wb3J0IElWaWV3IGZyb20gJy4uL0lWaWV3L0lWaWV3JztcbmltcG9ydCBQbGF5ZXJUZW1wbGF0ZSBmcm9tICcuL1BsYXllclZpZXcuaGJzJztcbmltcG9ydCAnLi9QbGF5ZXJWaWV3LmNzcyc7XG5pbXBvcnQgQmFyQ29tcG9uZW50IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0JhckNvbXBvbmVudC9CYXJDb21wb25lbnRcIjtcbmNsYXNzIFBsYXllclZpZXcgZXh0ZW5kcyBJVmlldyB7XG4gICAgdmlkZW9QYW5lbDtcbiAgICB2aWRlb0JhcjtcbiAgICAvLyBwdWJsaWMgcmVhZG9ubHkgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQ7XG4gICAgLy8gcHVibGljIHJlYWRvbmx5IHBsYXlCdG46IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIC8vIHB1YmxpYyByZWFkb25seSBwbGF5QnRuSW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIC8vIHB1YmxpYyByZWFkb25seSBzdG9wQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAvLyBwdWJsaWMgcmVhZG9ubHkgcHJvZ3Jlc3M6IEhUTUxQcm9ncmVzc0VsZW1lbnQ7XG4gICAgLy8gcHVibGljIHJlYWRvbmx5IHZvbHVtZUJ0bkltZzogSFRNTEltYWdlRWxlbWVudDtcbiAgICAvLyBwdWJsaWMgcmVhZG9ubHkgcHJvZ3Jlc3NWb2x1bWU6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgLy8gcHVibGljIHJlYWRvbmx5IHRpbWU6IEhUTUxEaXZFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIFBsYXllclRlbXBsYXRlKHt9KSwgJyNmdWxsc2NyZWVuLW1vZGFsJyk7XG4gICAgICAgIHRoaXMudmlkZW9QYW5lbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudmlkZW9fX3BhbmVsJyk7XG4gICAgICAgIHRoaXMudmlkZW9QYW5lbC5wcmVwZW5kKHRoaXMucmVuZGVyVmlkZW9CYXIoKSk7XG4gICAgICAgIC8vIHN1cGVyKHBhcmVudCwgUGxheWVyVGVtcGxhdGUoe30pLCAnLndyYXBwZXInKTtcbiAgICAgICAgLy8gdGhpcy52aWRlbyA9IDxIVE1MVmlkZW9FbGVtZW50PnRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudmlkZW8nKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gdGhpcy5wbGF5QnRuID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHNfX3BsYXknKTtcbiAgICAgICAgLy8gdGhpcy5wbGF5QnRuSW1nID0gPEhUTUxJbWFnZUVsZW1lbnQ+dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5X19idG4nKTtcbiAgICAgICAgLy8gdGhpcy5zdG9wQnRuID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHNfX3N0b3AnKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gdGhpcy5wcm9ncmVzcyA9IDxIVE1MUHJvZ3Jlc3NFbGVtZW50PnRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MnKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gdGhpcy52b2x1bWVCdG5JbWcgPSA8SFRNTEltYWdlRWxlbWVudD50aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnZvbHVtZV9fYnRuJyk7XG4gICAgICAgIC8vIHRoaXMucHJvZ3Jlc3NWb2x1bWUgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnZvbHVtZV9fcHJvZ3Jlc3MnKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gdGhpcy50aW1lID0gPEhUTUxEaXZFbGVtZW50PnRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHNfX3RpbWUnKTtcbiAgICB9XG4gICAgO1xuICAgIHJlbmRlclZpZGVvQmFyKCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy52aWRlb0JhciA9IG5ldyBCYXJDb21wb25lbnQoZGl2LCAnJywgJycsIHsgYmFyQ2xhc3M6ICd2aWRlb19fYmFyJyB9KTtcbiAgICAgICAgdGhpcy52aWRlb0Jhci5zaG93KCk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IFBsYXllclZpZXc7XG4iLCJpbXBvcnQgSVZpZXcgZnJvbSAnLi4vSVZpZXcvSVZpZXcnO1xuaW1wb3J0IFNldHRpbmdzVGVtcGxhdGUgZnJvbSAnLi9TZXR0aW5nc1ZpZXcuaGJzJztcbmltcG9ydCBTZXR0aW5nc0RhdGEgZnJvbSAnLi9TZXR0aW5nc1ZpZXdDb25maWcnO1xuaW1wb3J0ICcuL1NldHRpbmdzVmlldy5jc3MnO1xuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Gb3JtQ29tcG9uZW50L0Zvcm1Db21wb25lbnQnO1xuY2xhc3MgU2V0dGluZ3NWaWV3IGV4dGVuZHMgSVZpZXcge1xuICAgIGxlZnRNZW51Q29udGFpbmVyO1xuICAgIHNldHRpbmdzRm9ybUNvbnRhaW5lcjtcbiAgICBsZWZ0TWVudTtcbiAgICBjdXJyZW50QWN0aXZlSXRlbTtcbiAgICBmb3JtO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIFNldHRpbmdzVGVtcGxhdGUoU2V0dGluZ3NEYXRhKSwgJ21haW4nKTtcbiAgICAgICAgdGhpcy5sZWZ0TWVudUNvbnRhaW5lciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2V0dGluZ3NfX2xlZnQtbWVudS1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy5zZXR0aW5nc0Zvcm1Db250YWluZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNldHRpbmdzX19mb3JtJyk7XG4gICAgICAgIHRoaXMubGVmdE1lbnUgPSAobmV3IFNldHRpbmdzRGF0YS5sZWZ0TWVudS5jb21wb25lbnRUeXBlKHRoaXMubGVmdE1lbnVDb250YWluZXIsICcnLCAnJywgU2V0dGluZ3NEYXRhLmxlZnRNZW51LmNvbXBvbmVudERhdGEpKTtcbiAgICAgICAgdGhpcy5sZWZ0TWVudS5zaG93KCk7XG4gICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZUl0ZW0gPSBudWxsO1xuICAgICAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUNvbXBvbmVudCh0aGlzLnNldHRpbmdzRm9ybUNvbnRhaW5lciwgJycsICcnLCBTZXR0aW5nc0RhdGEuZm9ybURhdGEpO1xuICAgICAgICB0aGlzLmZvcm0uc2hvdygpO1xuICAgIH1cbiAgICA7XG4gICAgY2hhbmdlQWN0aXZlTGVmdE1lbnVJdGVtKGhyZWYpIHtcbiAgICAgICAgY29uc3QgbGlzdEVsZW1lbnQgPSB0aGlzLmxlZnRNZW51LmdldEVsZW1lbnQ7XG4gICAgICAgIGxpc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtocmVmPVwiJHt0aGlzLmN1cnJlbnRBY3RpdmVJdGVtfVwiXWApPy5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdzZXR0aW5ncy1sZWZ0LW1lbnVfX2l0ZW0tLWFjdGl2ZScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRBY3RpdmVJdGVtID0gaHJlZjtcbiAgICAgICAgbGlzdEVsZW1lbnQucXVlcnlTZWxlY3RvcihgW2hyZWY9XCIke2hyZWZ9XCJdYCk/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzLWxlZnQtbWVudV9faXRlbS0tYWN0aXZlJyk7XG4gICAgfVxuICAgIDtcbiAgICBzaG93KG9wdHMpIHtcbiAgICAgICAgaWYgKCFvcHRzKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmZvcm0uc2V0RGF0YVRvRmllbGRzKFt7IGlkOiAnZW1haWwnLCB2YWx1ZTogb3B0cy51c2VyLmVtYWlsIH1dKTtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgIH1cbiAgICA7XG4gICAgYmluZENsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzVmlldztcbiIsImltcG9ydCBMaXN0Q29tcG9uZW50IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvTGlzdENvbXBvbmVudC9MaXN0Q29tcG9uZW50JztcbmltcG9ydCBMaW5rQ29tcG9uZW50IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvTGlua0NvbXBvbmVudC9MaW5rQ29tcG9uZW50JztcbmNvbnN0IFNldHRpbmdzRGF0YSA9IHtcbiAgICB0aXRsZTogJ9Cd0LDRgdGC0YDQvtC50LrQuCcsXG4gICAgZGVzY3JpcHRpb246ICfQntGB0YLQsNCy0YzRgtC1INC60L7QvdGC0LDQutGC0L3Ri9C1INC00LDQvdC90YvQtSDQtNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINGD0LLQtdC00L7QvNC70LXQvdC40Lkg0L7RgiDRgdC10YDQstC40YHQsCDQuCDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQuNGPINGB0L4g0YHQu9GD0LbQsdC+0Lkg0L/QvtC00LTQtdGA0LbQutC4LicsXG4gICAgZm9ybVRpdGxlOiAn0JrQvtC90YLQsNC60YLRiycsXG4gICAgbGVmdE1lbnU6IHtcbiAgICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICAgICAgbGlzdENsYXNzOiAnc2V0dGluZ3NfX2xlZnQtbWVudScsXG4gICAgICAgICAgICBpdGVtQ2xhc3M6ICdzZXR0aW5ncy1sZWZ0LW1lbnVfX2l0ZW0nLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtIcmVmOiAnL3NldHRpbmdzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtDbGFzczogJ3NldHRpbmdzLWxlZnQtbWVudS1pdGVtX19saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtUZXh0OiAn0J7RgdC90L7QstC90YvQtScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFR5cGU6IExpbmtDb21wb25lbnRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0hyZWY6ICcvc2V0dGluZ3MvcGF5bWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0NsYXNzOiAnc2V0dGluZ3MtbGVmdC1tZW51LWl0ZW1fX2xpbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RleHQ6ICfQntC/0LvQsNGC0LAg0YPRgdC70YPQsycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFR5cGU6IExpbmtDb21wb25lbnRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0hyZWY6ICcvc2V0dGluZ3Mvc3Vic2NyaXB0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rQ2xhc3M6ICdzZXR0aW5ncy1sZWZ0LW1lbnUtaXRlbV9fbGluaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rVGV4dDogJ9Cf0L7QtNC/0LjRgdC60LgnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlOiBMaW5rQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtIcmVmOiAnL2xvZ291dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rQ2xhc3M6ICdzZXR0aW5ncy1sZWZ0LW1lbnUtaXRlbV9fbGluaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rSW1hZ2VTcmM6ICcvaW1nL2ljb25zL2xvZ291dC5zdmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0ltYWdlQ2xhc3M6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0ltYWdlV2lkdGg6IDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RleHQ6ICfQktGL0LnRgtC4JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50VHlwZTogTGlua0NvbXBvbmVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50VHlwZTogTGlzdENvbXBvbmVudCxcbiAgICB9LFxuICAgIGZvcm1EYXRhOiB7XG4gICAgICAgIGZvcm1JZDogJ3NldHRpbmdzX19mb3JtJyxcbiAgICAgICAgZW5jdHlwZTogdHJ1ZSxcbiAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5wdXRDbGFzczogJ2lucHV0LWZpZWxkX19pbnB1dC0tZGFyaycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgICBpZDogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ3Zhc2lsaXkucHVwa2luQG1haWwucnUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZmlsZScsXG4gICAgICAgICAgICAgICAgaWQ6ICdhdmF0YXInLFxuICAgICAgICAgICAgICAgIGFjY2VwdDogJ2ltYWdlL2pwZWcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgIGlkOiAnYXZhdGFyLWNoZWNrYm94JyxcbiAgICAgICAgICAgICAgICBjaGVja2JveFRleHQ6ICfQo9C00LDQu9C40YLRjCDQsNCy0LDRgtCw0YDQutGDPycsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdpbnB1dC1jaGVja2JveCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5wdXRDbGFzczogJ2lucHV0LWZpZWxkX19pbnB1dC0tZGFyaycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBpZDogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJyoqKioqKioqJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5wdXRDbGFzczogJ2lucHV0LWZpZWxkX19pbnB1dC0tZGFyaycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBpZDogJ3JlcGVhdC1wYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcqKioqKioqKicsXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgaWQ6ICdzYXZlLXN1Ym1pdC1idG4nLFxuICAgICAgICAgICAgdGV4dDogJ9Ch0L7RhdGA0LDQvdC40YLRjCcsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzYXZlLWJ1dHRvbidcbiAgICAgICAgfSxcbiAgICAgICAgbGlua3M6IFtdLFxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc0RhdGE7XG4iLCJpbXBvcnQgSVZpZXcgZnJvbSAnLi4vSVZpZXcvSVZpZXcnO1xuaW1wb3J0IFNpZ25JblRlbXBsYXRlIGZyb20gJy4vU2lnbkluVmlldy5oYnMnO1xuaW1wb3J0IFNpZ25JbkRhdGEgZnJvbSAnLi9TaWduSW5WaWV3Q29uZmlnJztcbmltcG9ydCAnLi9TaWduSW5WaWV3LmNzcyc7XG5pbXBvcnQgRm9ybUNvbXBvbmVudCBmcm9tICcuLi8uLi9Db21wb25lbnRzL0Zvcm1Db21wb25lbnQvRm9ybUNvbXBvbmVudCc7XG5jbGFzcyBTaWduSW5WaWV3IGV4dGVuZHMgSVZpZXcge1xuICAgIGZvcm07XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgU2lnbkluVGVtcGxhdGUoeyB0aXRsZTogU2lnbkluRGF0YS50aXRsZSwgZGVzY3JpcHRpb246IFNpZ25JbkRhdGEuZGVzY3JpcHRpb24gfSksICcuanMtc2lnbkluJyk7XG4gICAgICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtQ29tcG9uZW50KHRoaXMuZWxlbWVudCwgJycsICcnLCBTaWduSW5EYXRhLmZvcm1EYXRhKTtcbiAgICAgICAgdGhpcy5mb3JtLnNob3coKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgU2lnbkluVmlldztcbiIsIjtcbmNvbnN0IFNpZ25JbkRhdGEgPSB7XG4gICAgdGl0bGU6ICfQktC+0LnQtNC40YLQtSDQuNC70Lgg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNGD0LnRgtC10YHRjCcsXG4gICAgZGVzY3JpcHRpb246ICfQp9GC0L7QsdGLINC90LDRh9Cw0YLRjCDQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y8g0YHQtdGA0LDQstC40YHQvtC8IEZpbG1pdW0nLFxuICAgIGZvcm1EYXRhOiB7XG4gICAgICAgIGZvcm1JZDogJ3NpZ25Jbl9fZm9ybScsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3M6ICdpbnB1dC1maWVsZF9faW5wdXQtLWRhcmsnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgaWQ6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICd2YXNpbGl5LnB1cGtpbkBtYWlsLnJ1JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5wdXRDbGFzczogJ2lucHV0LWZpZWxkX19pbnB1dC0tZGFyaycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBpZDogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJyoqKioqKioqJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgaWQ6ICdzaWduSW4tc3VibWl0LWJ0bicsXG4gICAgICAgICAgICB0ZXh0OiAn0JLQvtC50YLQuCcsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzaWduSW4tYnV0dG9uJ1xuICAgICAgICB9LFxuICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAnbGluay1zaWduVXAnLFxuICAgICAgICAgICAgICAgIGxpbmtIcmVmOiAnL3NpZ25VcCcsXG4gICAgICAgICAgICAgICAgbGlua1RleHQ6ICfQndC10YIg0LDQutC60LDRg9C90YLQsD8g0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPJyxcbiAgICAgICAgICAgICAgICBsaW5rVGV4dENsYXNzOiAnc2lnblVwLWxpbmsnXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgU2lnbkluRGF0YTtcbiIsImltcG9ydCBJVmlldyBmcm9tICcuLi9JVmlldy9JVmlldyc7XG5pbXBvcnQgU2lnblVwVGVtcGxhdGUgZnJvbSAnLi9TaWduVXBWaWV3Lmhicyc7XG5pbXBvcnQgU2lnblVwRGF0YSBmcm9tICcuL1NpZ25VcFZpZXdDb25maWcnO1xuaW1wb3J0ICcuL1NpZ25VcFZpZXcuY3NzJztcbmltcG9ydCBGb3JtQ29tcG9uZW50IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvRm9ybUNvbXBvbmVudC9Gb3JtQ29tcG9uZW50JztcbmNsYXNzIFNpZ25VcFZpZXcgZXh0ZW5kcyBJVmlldyB7XG4gICAgZm9ybTtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBTaWduVXBUZW1wbGF0ZSh7IHRpdGxlOiBTaWduVXBEYXRhLnRpdGxlLCBkZXNjcmlwdGlvbjogU2lnblVwRGF0YS5kZXNjcmlwdGlvbiB9KSwgJy5qcy1zaWduVXAnKTtcbiAgICAgICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Db21wb25lbnQodGhpcy5lbGVtZW50LCAnJywgJycsIFNpZ25VcERhdGEuZm9ybURhdGEpO1xuICAgICAgICB0aGlzLmZvcm0uc2hvdygpO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBTaWduVXBWaWV3O1xuIiwiO1xuY29uc3QgU2lnblVwRGF0YSA9IHtcbiAgICB0aXRsZTogJ9CS0L7QudC00LjRgtC1INC40LvQuCDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXRgdGMJyxcbiAgICBkZXNjcmlwdGlvbjogJ9Cn0YLQvtCx0Ysg0L3QsNGH0LDRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtGM0YHRjyDRgdC10YDQsNCy0LjRgdC+0LwgRmlsbWl1bScsXG4gICAgZm9ybURhdGE6IHtcbiAgICAgICAgZm9ybUlkOiAnc2lnblVwX19mb3JtJyxcbiAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5wdXRDbGFzczogJ2lucHV0LWZpZWxkX19pbnB1dC0tZGFyaycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgICBpZDogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ3Zhc2lsaXkucHVwa2luQG1haWwucnUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnB1dENsYXNzOiAnaW5wdXQtZmllbGRfX2lucHV0LS1kYXJrJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIGlkOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnKioqKioqKionLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnB1dENsYXNzOiAnaW5wdXQtZmllbGRfX2lucHV0LS1kYXJrJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIGlkOiAncmVwZWF0LXBhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJyoqKioqKioqJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgaWQ6ICdzaWduVXAtc3VibWl0LWJ0bicsXG4gICAgICAgICAgICB0ZXh0OiAn0JLQvtC50YLQuCcsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzaWduVXAtYnV0dG9uJ1xuICAgICAgICB9LFxuICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAnbGluay1zaWduSW4nLFxuICAgICAgICAgICAgICAgIGxpbmtIcmVmOiAnL3NpZ25JbicsXG4gICAgICAgICAgICAgICAgbGlua1RleHQ6ICfQldGB0YLRjCDQsNC60LrQsNGD0L3Rgj8g0JLQvtC50YLQuCcsXG4gICAgICAgICAgICAgICAgbGlua1RleHRDbGFzczogJ3NpZ25Jbi1saW5rJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcERhdGE7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQXBwIGZyb20gJy4vQXBwL0FwcCc7XG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAucnVuKGxvY2F0aW9uLnBhdGhuYW1lKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==