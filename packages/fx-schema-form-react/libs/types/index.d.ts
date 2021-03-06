/// <reference types="recompose" />
/// <reference types="react" />
import { BaseFactory } from "fx-schema-form-core";
import { ComponentEnhancer } from "recompose";
import ajv from "ajv";
export interface SchemaFormNs<F, T, W> {
    fieldFactory: BaseFactory<F>;
    tempFactory: BaseFactory<T>;
    widgetFactory: BaseFactory<W>;
    hocFactory?: BaseFactory<ComponentEnhancer<any, any>>;
}
export interface SchemaFormMeta {
    isShow?: boolean;
    dirty?: boolean;
    isValid?: boolean;
    errors?: ajv.ErrorObject[];
    errorText?: string;
}
export declare type RC<P, T> = new () => React.Component<P, T>;
export declare type NsFactory = SchemaFormNs<RC<any, any>, RC<any, any>, RC<any, any>>;
