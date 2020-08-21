import { createStore, combineReducers } from 'redux';

const FILTER_TYPE = {
    ALL: 0,
    COMPLETE: 1,
    UNCOMPLETE: 2
}
const ACTION_TYPE = {
    ADD: 0,
    REMOVE: 1,
    TOGGLE: 2,
    TOGGLE_FILTER_TYPE: 3
}
function add(text) {
    return {
        type: ACTION_TYPE.ADD,
        text
    }
}
function remove(index) {
    return {
        type: ACTION_TYPE.REMOVE,
    index
    }
}
function toggle(index) {
    return {
        type: ACTION_TYPE.TOGGLE,
        index
    }
}
function toggleFilterType(filterType) {
    return {
        type: ACTION_TYPE.TOGGLE_FILTER_TYPE,
        filterType
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ACTION_TYPE.ADD:
            return state.concat({
                text: action.text,
                complete: false
            });
        case ACTION_TYPE.REMOVE:
            return [...state.splice(action.index, 1)]
        case ACTION_TYPE.TOGGLE:
            return state.map((item, index) => {
                if(index === action.index) {
                    return {
                        ...item,
                        complete: !item.complete
                    }
                } else return item;
            });
        default: return state;
    }
}
function filterType(state = FILTER_TYPE.ALL, action) {
    switch (action.type) {
        case ACTION_TYPE.TOGGLE_FILTER_TYPE:
            return action.filterType;
        default: return state;
    }
}

const reducer = combineReducers({
    todos, filterType
});

export { FILTER_TYPE, ACTION_TYPE, add, remove, toggle, toggleFilterType };
export default createStore(reducer);