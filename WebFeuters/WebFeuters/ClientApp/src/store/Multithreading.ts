import { Action, Reducer } from 'redux';

export interface MultithreadingState {
    isOpened: boolean;
}

export interface OpenAction { type: 'OPEN' }
export interface CloseAction { type: 'CLOSE' }

export type KnownAction = OpenAction | CloseAction;

export const actionCreators = {
    open: () => ({ type: 'OPEN' } as OpenAction),
    close: () => ({ type: 'CLOSE' } as CloseAction)
};

var text = ""

const emptyState: MultithreadingState = { isOpened: false };

export const reducer: Reducer<MultithreadingState> = (state: MultithreadingState | undefined, incomingAction: Action): MultithreadingState => {
    if (state === undefined) {
        return emptyState;
    }

    const action = incomingAction as KnownAction;

    switch (action.type) {
        case 'OPEN':
            return {
                isOpened: true
            };
        case 'CLOSE':
            return {
                isOpened: false
            };
        default:
            return state;
    }
};
