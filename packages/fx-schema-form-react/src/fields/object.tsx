import React from "react";

import { RC } from "../types";
import { SchemaForm } from "../index";
import { SchemaFormItemProps } from "../components/formitem";
import { shouldUpdate } from "recompose";

export interface ObjectFieldProps extends SchemaFormItemProps {

}

@(shouldUpdate(() => false) as any)
export class ObjectField extends React.PureComponent<ObjectFieldProps, any> {
    public render(): JSX.Element {
        const { mergeSchema, currentTheme, WidgetComponent, arrayIndex, ItemButtons, arrayLevel,
            getCurrentState, globalOptions, schemaFormOptions, schemaKey, getFieldOptions, reducerKeys } = this.props;
        const { uiSchema } = mergeSchema;

        return (
            <SchemaForm
                arrayIndex={arrayIndex}
                schemaFormOptions={schemaFormOptions}
                getCurrentState={getCurrentState}
                schemaKey={schemaKey}
                arrayLevel={arrayLevel}
                reducerKeys={reducerKeys}
                schema={mergeSchema}
                parentKeys={mergeSchema.originKeys}
                RootComponent={getFieldOptions(this.props, "object").root}
                uiSchema={uiSchema.items || ["*"]}
                globalOptions={globalOptions}>
            </SchemaForm>
        );
    }
}
