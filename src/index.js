import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import Router from './common/Router';

render(<StrictMode><Router /></StrictMode>, document.querySelector('#root'));
