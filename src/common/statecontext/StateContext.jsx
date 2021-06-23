import { createContext } from 'react';

const StateContext = createContext({});

StateContext.displayName = 'StateContext';

const cap = ([head, ...tail]) => head.toLocaleUpperCase() + tail.join('');


// custom function that builds a value object bound to a component state
StateContext.value = (component, key, fallback) => ({
    [key]: component.state ? component.state[key] : fallback,
    [`set${cap(key)}`]: value => component.setState({ [key]: value })
});



export default StateContext;