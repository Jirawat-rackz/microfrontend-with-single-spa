import React from "react";
import ReactDOM from "react-dom";
import ReactDOMClient from "react-dom/client";
import rootComponent from "./root.component";
// SingleSpaContext is a react@16.3 (if available) context that provides singleSpa props
import singleSpaReact from "single-spa-react";

export const { bootstrap, mount, unmount } = singleSpaReact({
  renderType: "createRoot",
  React,
  ReactDOM,
  ReactDOMClient,
  rootComponent,
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return <div>This renders when a catastrophic error occurs</div>;
  },
});
