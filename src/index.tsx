import React from "react";
import * as ReactDOM from "react-dom";
import { App } from "@/components/App";

const container = document.getElementById("app");

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const root = ReactDOM.createRoot(container);
root.render(<App title={'Hello'} />);
