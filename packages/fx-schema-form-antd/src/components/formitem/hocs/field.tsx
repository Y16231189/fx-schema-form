
import React from "react";
import { compose } from "recompose";

import { RC } from "../../../types";
import { nsFactory } from "../../../index";
import { ThemeHocOutProps } from "./theme";
import { SchemaFormItemBaseProps } from "../props";

export interface FieldHocOutProps {
    FieldComponent: RC<any, any>;
    WidgetComponent: RC<any, any>;
}

/**
 * 包装Field的组件HOC
 * @param Component 需要包装的组件
 * 加入属性FieldComponent   schema对应的fieldcomponent
 * 加入属性WidgetComponent  schema对应的widgetcomponent
 */
export const FieldHoc = (Component: any): RC<SchemaFormItemBaseProps & ThemeHocOutProps, any> => {
    class Hoc extends React.Component<SchemaFormItemBaseProps & ThemeHocOutProps, any> {
        public shouldComponentUpdate() {
            return false;
        }

        public render(): JSX.Element {
            const { mergeSchema, currentTheme } = this.props;
            const { uiSchema = { theme: "", field: "", widget: "" } } = mergeSchema;
            let FieldComponent, WidgetComponent;

            if (currentTheme.fieldFactory.has(uiSchema.field || mergeSchema.type)) {
                FieldComponent = currentTheme.fieldFactory.get(uiSchema.field || mergeSchema.type);
            }

            if (currentTheme.widgetFactory.has(uiSchema.widget || mergeSchema.type)) {
                WidgetComponent = currentTheme.widgetFactory.get(uiSchema.widget || mergeSchema.type);
            }

            return <Component {...this.props}
                FieldComponent={(FieldComponent)}
                WidgetComponent={WidgetComponent} />;
        }
    }

    return Hoc;
};
