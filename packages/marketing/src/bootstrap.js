import ReactDOM from "react-dom";
import React from 'react'
import App from './App'
// Mount function to start up the app
const mount = el => {
    ReactDOM.render(
        <App/>, el
    );
}

// If we are in development and in isolation call mount immediately
if (process.env.NODE_ENV !== "production") {
    const devRoot = document.getElementById("_marketing-dev-root");

    if (devRoot) {
        mount(devRoot);
    }
}

// We are running through container and we should export the mount function
export {mount}