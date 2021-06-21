const equals = (obj1, obj2) => {
    if (Object.is(obj1, obj2))
        return true;

    if (obj1 === null || obj1 === undefined)
        return false;

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length)
        return false;

    for (const key of keys1)
        if (obj1[key] !== obj2[key])
            return false;

    return true;
};

export { equals };
