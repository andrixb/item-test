export const combineReducers = (slices: any) => (state: any, action: any) =>
    Object.keys(slices).reduce(
        (acc, prop) => ({
            ...acc,
            [prop]: slices[prop](acc[prop], action),
        }),
        state
    );
