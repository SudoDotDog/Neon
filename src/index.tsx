/**
 * @author WMXPY
 * @namespace Neon
 * @description Index
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Entry from "./entry";

declare const module: any;
declare const require: any;

const render: (App: any) => void = (App: any): void => {

    ReactDOM.render((
        <AppContainer>
            <App />
        </AppContainer>
    ), document.getElementById("container"));
};

render(Entry);
if (module.hot) {

    module.hot.accept("./entry", () => {
        render(require("./entry").default);
    });
}
