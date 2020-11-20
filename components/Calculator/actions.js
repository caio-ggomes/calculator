import { PLUS, MINUS, TIMES, DIVIDE, COMPUTE, MOVE, MODIFY1, MODIFY2 } from './types';

function plus() {
    return {
        type: PLUS,
    };
}

function minus() {
    return {
        type: MINUS,
    };
}

function times() {
    return {
        type: TIMES,
    };
}

function divide() {
    return {
        type: DIVIDE,
    };
}

function compute() {
    return {
        type: COMPUTE,
    };
}

function move() {
    return {
        type: MOVE,
    };
}

function modify1(value) {
    return {
        type: MODIFY1,
        number: value,
    }
}

function modify2(value) {
    return {
        type: MODIFY2,
        number: value,
    }
}

const actionCreators = {
    plus,
    minus,
    times,
    divide,
    compute,
    move,
    modify1,
    modify2,
};

export { actionCreators };