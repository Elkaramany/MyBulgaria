import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PropertiesState, initialState } from './types';

const propertiesSlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
        onChangePropertiesState(state: any, action: PayloadAction<{ prop: keyof PropertiesState; value: string | boolean | number }>) {
            const { prop, value } = action.payload;
            state[prop] = value;
        },
        resetPropertiesState() {
            return initialState; // Reset to initial state
        },
    },
});

export const { onChangePropertiesState, resetPropertiesState } = propertiesSlice.actions;
export * from './types'
export * from './usePropertiesReducer'
export default propertiesSlice.reducer;