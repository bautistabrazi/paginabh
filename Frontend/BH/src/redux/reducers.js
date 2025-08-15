/** @format */

import { reducer as autorizacionReducer } from "./autorizacion/reducer";

export const rootReducer = (state = {}, action) => {
    return {
        autorizacion: autorizacionReducer(state.autorizacion, action)
    };
};
