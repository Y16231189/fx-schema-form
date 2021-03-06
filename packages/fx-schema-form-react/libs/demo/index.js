import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { combineReducers } from "redux-immutable";
import Immutable from "immutable";
import ReactPerfTool from "react-perf-tool";
import Perf from "react-addons-perf";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./index.less";
import "react-perf-tool/lib/styles.css";
import { reducer as normalReducer, NormalSchemaFormComponent } from "./normal";
import { Menu, Icon } from "antd";
let store = createStore(combineReducers({
    "normal": normalReducer.reducer,
}), Immutable.fromJS({}));
store.subscribe(() => {
    console.log(store.getState().toJS());
});
ReactDom.render(React.createElement(Provider, { store: store },
    React.createElement(Router, null,
        React.createElement("div", null,
            React.createElement("div", { style: { display: "none" } },
                React.createElement(ReactPerfTool, { perf: Perf })),
            React.createElement(Menu, { mode: "horizontal", theme: "dark" },
                React.createElement(Menu.Item, { key: "home" },
                    React.createElement(Link, { to: "/" },
                        React.createElement(Icon, { type: "mail" }),
                        "\u4E3B\u9875")),
                React.createElement(Menu.Item, { key: "array" },
                    React.createElement(Link, { to: "/array" },
                        React.createElement(Icon, { type: "mail" }),
                        "\u65E0\u9650\u6781\u6570\u7EC4")),
                React.createElement(Menu.Item, { key: "object" },
                    React.createElement(Link, { to: "/object" },
                        React.createElement(Icon, { type: "mail" }),
                        "\u5BF9\u8C61\u7C7B\u578B")),
                React.createElement(Menu.Item, { key: "custom.hoc" },
                    React.createElement(Link, { to: "/custom.hoc" },
                        React.createElement(Icon, { type: "mail" }),
                        "\u81EA\u5B9A\u4E49HOC"))),
            React.createElement(Route, { exact: true, path: "/", component: NormalSchemaFormComponent })))), document.getElementById("root"), console.log);
//# sourceMappingURL=index.js.map