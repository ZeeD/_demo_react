import React from 'react';
import ReactDOM from 'react-dom';

import MyRouter from './MyRouter';

const dom = <React.StrictMode>
    <MyRouter />
</React.StrictMode>;

ReactDOM.render(dom, document.querySelector('#root'));
