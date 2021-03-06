import React from "react";
import { nsFactory } from "../../index";
export default (hocFactory, settings = {}) => {
    return (Component) => {
        class ThemeComponentHoc extends React.PureComponent {
            render() {
                const { mergeSchema } = this.props;
                const { uiSchema = { theme: "", field: "" } } = mergeSchema;
                let theme;
                if (nsFactory.has(uiSchema.theme || "default")) {
                    theme = nsFactory.get(uiSchema.theme || "default");
                }
                else {
                    throw new Error(`没有找到${uiSchema.theme || "default"}的样式！`);
                }
                return React.createElement(Component, Object.assign({ currentTheme: theme }, this.props));
            }
        }
        return ThemeComponentHoc;
    };
};
//# sourceMappingURL=theme.js.map