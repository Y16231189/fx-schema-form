/// <reference types="react" />
import React from "react";
import { SchemaFormItemProps } from "../components/formitem";
export interface AntdFormItemTempProps extends SchemaFormItemProps {
    tempKey: string;
}
export declare class AntdFormItemTemp extends React.PureComponent<AntdFormItemTempProps, any> {
    render(): JSX.Element;
}
