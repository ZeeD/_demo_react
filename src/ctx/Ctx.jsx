import { createContext } from 'react';

const Ctx = createContext({
    value: undefined,
    setValue: () => undefined
});
Ctx.displayName = 'Ctx';

export default Ctx;