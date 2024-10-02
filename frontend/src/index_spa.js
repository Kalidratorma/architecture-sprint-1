import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";

function Index () {
    return (<React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>)
}

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Index,
    errorBoundary(err, info, props) {
        return <div>Error in UserProfile Microfrontend</div>;
    },
});

export const { bootstrap, mount, unmount } = reactLifecycles;
