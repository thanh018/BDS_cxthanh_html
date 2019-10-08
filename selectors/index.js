export default (selectors) => {
    if (typeof selectors === 'object') {
        return state => {
            const sels = {};
            Object.keys(selectors).forEach(k => {
                const func = selectors[k];
                if (typeof func === 'function')
                    sels[k] = func(state);
            });
            return sels;
        };
    } else {
        throw 'Selectors is invalid';
    }
};