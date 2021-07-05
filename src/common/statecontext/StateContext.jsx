import { createContext } from 'react';

const StateContext = createContext({
    state: {},
    setState: _ => null
});
StateContext.displayName = 'StateContext';
StateContext.value = component => ({
    state: component.state || {},
    setState: component.setState.bind(component)
});
export default StateContext;
