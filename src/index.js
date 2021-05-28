import React from 'react';
import ReactDOM from 'react-dom';

const dom = <React.StrictMode>
    <p>Hello react</p>
</React.StrictMode>;

ReactDOM.render(dom, document.querySelector('body'));
