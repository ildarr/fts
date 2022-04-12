import * as ReactDOM from 'react-dom';
import {App} from '@/components/App';
import React from "react";

const container = document.getElementById('app');

// @ts-ignore
const root = ReactDOM.createRoot(container);
root.render(<App />);
