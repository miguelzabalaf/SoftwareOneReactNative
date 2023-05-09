// Handler
import { handler } from './handler';

// Initial State
import { initialState } from './initialState';

// Helpers
import { createReducer } from '../../helpers/createReducer';

export const tokenReducer = createReducer(initialState, handler);
