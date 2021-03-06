/// <reference types="react" />
import React from "react";
import { SchemaFormItemProps } from "../components/formitem";
export interface AntdRowTempProps extends SchemaFormItemProps {
    tempKey: string;
}
export declare class AntdRowTemp extends React.PureComponent<AntdRowTempProps, any> {
    render(): JSX.Element;
}
