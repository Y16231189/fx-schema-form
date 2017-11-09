import React from "react";
import { Col } from "antd";
export class AntdColTemp extends React.Component {
    render() {
        const { children, globalOptions, mergeSchema, tempKey, uiSchemaOptions } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        return (<Col {...tempOptions}>
                {children}
            </Col>);
    }
}
//# sourceMappingURL=col.jsx.map