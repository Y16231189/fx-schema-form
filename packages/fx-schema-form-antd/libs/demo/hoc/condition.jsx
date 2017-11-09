import React from "react";
import jpp from "json-pointer";
export const ConditionHoc = (hocFactory, Component) => {
    class Hoc extends React.Component {
        constructor() {
            super(...arguments);
            this.fieldKey = "ui:condition";
        }
        render() {
            const { getHocOptions, formData, formDefaultData } = this.props;
            const hocOptions = getHocOptions();
            const { array: arrayHocOptions } = hocOptions;
            const { condition: conditionHocOptions } = hocOptions;
            const { fields } = conditionHocOptions;
            let isShow = true, jFormData = jpp(Object.assign({}, formDefaultData, formData));
            if (fields && fields.length) {
                isShow = fields.reduce((prev, field) => {
                    if (!jFormData.has(field.key)) {
                        return prev && false;
                    }
                    else {
                        let data = jFormData.get(field.key);
                        return prev && (data === field.val);
                    }
                }, isShow);
            }
            if (!isShow) {
                return null;
            }
            return <Component {...this.props}/>;
        }
    }
    return Hoc;
};
//# sourceMappingURL=condition.jsx.map