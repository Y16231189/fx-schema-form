var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from "react";
import { SchemaForm } from "../index";
var ArrayField = (function (_super) {
    __extends(ArrayField, _super);
    function ArrayField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayField.prototype.renderItem = function (idx, maxLen) {
        var _this = this;
        var _a = this.props, mergeSchema = _a.mergeSchema, schemaKey = _a.schemaKey, globalOptions = _a.globalOptions, schemaFormOptions = _a.schemaFormOptions, getCurrentState = _a.getCurrentState, ItemChildButtons = _a.ItemChildButtons, _b = _a.arrayLevel, arrayLevel = _b === void 0 ? [] : _b, getFieldOptions = _a.getFieldOptions;
        var uiSchema = mergeSchema.uiSchema, keys = mergeSchema.keys;
        return (<SchemaForm key={keys.join(".") + idx} schema={mergeSchema} getCurrentState={getCurrentState} arrayIndex={idx} arrayLevel={arrayLevel.concat([idx])} ItemButtons={function () { return <ItemChildButtons {..._this.props} index={idx}/>; }} parentKeys={mergeSchema.originKeys} RootComponent={getFieldOptions("array").root} schemaKey={schemaKey} uiSchema={uiSchema.items} schemaFormOptions={schemaFormOptions} globalOptions={globalOptions}>
            </SchemaForm>);
    };
    ArrayField.prototype.render = function () {
        var _this = this;
        var _a = this.props, mergeSchema = _a.mergeSchema, currentTheme = _a.currentTheme, WidgetComponent = _a.WidgetComponent, schemaKey = _a.schemaKey, globalOptions = _a.globalOptions, schemaFormOptions = _a.schemaFormOptions, formItemData = _a.formItemData, _b = _a.meta, meta = _b === void 0 ? { dirty: false, isValid: true, isShow: true } : _b;
        var uiSchema = mergeSchema.uiSchema, title = mergeSchema.title;
        var child;
        child = formItemData && formItemData.map(function (data, idx) {
            return _this.renderItem(idx, formItemData.length);
        });
        return <div style={{ width: "100%" }}>{child || null}</div>;
    };
    return ArrayField;
}(React.Component));
export { ArrayField };
//# sourceMappingURL=array.jsx.map