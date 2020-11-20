import { PLUS, MINUS, TIMES, DIVIDE, COMPUTE, MOVE, MODIFY1, MODIFY2 } from './types';

// initial state
const initialState = {
    number1: 0.0,
    number2: 0.0,
    result: 0.0,
    operation: 'plus',
};

// Helper Functions

function applyPlus(state){
    return{
        ...state,
        operation: 'plus',
    };
}

function applyMinus(state){
    return{
        ...state,
        operation: 'minus',
    };
}

function applyTimes(state){
    return{
        ...state,
        operation: 'times',
    };
}

function applyDivide(state){
    return{
        ...state,
        operation: 'divide',
    };
}

function applyCompute(state){
    switch(state.operation){
        case 'plus':
            if(typeof state.number1 == 'number' && typeof state.number2 == 'number'){
                return{
                    ...state,
                    result: state.number1 + state.number2,
                };
            }
            else{
                return{
                    ...state,
                };
            }
        case 'minus':
            if(typeof state.number1 == 'number' && typeof state.number2 == 'number'){
                return{
                    ...state,
                    result: state.number1 - state.number2,
                };
            }
            else{
                return{
                    ...state,
                };
            }
        case 'times':
            if(typeof state.number1 == 'number' && typeof state.number2 == 'number'){
                return{
                    ...state,
                    result: state.number1 * state.number2,
                };
            }
            else{
                return{
                    ...state,
                };
            }
        case 'divide':
            if(typeof state.number1 == 'number' && typeof state.number2 == 'number' && state.number2 != 0){
                return{
                    ...state,
                    result: state.number1 / state.number2,
                };
            }
            else{
                return{
                    ...state,
                };
            }
        default:
            return{
                ...state,
            };
    }
}

function applyMove(state){
    return{
        ...state,
        number1: state.result,
        number2: 0.0,
        result: 0.0,
        operation: 'plus',
    };
}

function applyModify1(state, number){
    return{
        ...state,
        number1: Number(number),
    };
}

function applyModify2(state, number){
    return{
        ...state,
        number2: Number(number),
    };
}
// Reducer Function

function reducer(state = initialState, action){
    switch (action.type){
        case PLUS:
            return applyPlus(state);
        case MINUS:
            return applyMinus(state);
        case TIMES:
            return applyTimes(state);
        case DIVIDE:
            return applyDivide(state);
        case COMPUTE:
            return applyCompute(state);
        case MOVE:
            return applyMove(state);
        case MODIFY1:
            return applyModify1(state, action.number);
        case MODIFY2:
            return applyModify2(state, action.number);
        default:
            return state;
    }
}

export default reducer;
