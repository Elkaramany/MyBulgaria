import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState, initialState } from './types';

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onChangeAuthState(state: any, action: PayloadAction<{ prop: keyof AuthState; value: string | boolean }>) {
            const { prop, value } = action.payload;
            state[prop] = value;
        },
        resetAuthState() {
            return initialState; // Reset to initial state
        },
    },
});

export const { onChangeAuthState, resetAuthState } = authSlice.actions;
export * from './types'
export * from './useAuthReducer'
export default authSlice.reducer;
