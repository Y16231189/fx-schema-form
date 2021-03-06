export { SchemaForm } from "./components/form";
export { SchemaFormItem } from "./components/formitem";
export { FormReducer } from "./reducer/form";
export { defaultTheme, nsFactory } from "./factory";
export { conFactory } from "./container";
export { default as createForms, SchemaFormCreate } from "./libs/create";
export { hocFactory } from "./hocs";
export { SchemaFormReducer } from "./reducer/schema.form";
import jpp from "json-pointer";
jpp.set = function set(obj, pointer, value) {
    let refTokens = Array.isArray(pointer) ? pointer : jpp.parse(pointer), nextTok = refTokens[0];
    for (let i = 0, n = refTokens.length; i < n - 1; ++i) {
        let tok = refTokens[i];
        if (tok === "-" && Array.isArray(obj)) {
            tok = obj.length;
        }
        nextTok = refTokens[i + 1];
        if (!(tok in obj)) {
            if (nextTok.match(/^(\d+|-)$/)) {
                obj[tok] = [];
            }
            else {
                obj[tok] = {};
            }
        }
        if (!obj[tok] && nextTok) {
            obj[tok] = !Number.isNaN(nextTok * 1) ? [] : {};
        }
        obj = obj[tok];
    }
    if (nextTok === "-" && Array.isArray(obj)) {
        nextTok = obj.length;
    }
    obj[nextTok] = value;
    return this;
};
//# sourceMappingURL=index.js.map