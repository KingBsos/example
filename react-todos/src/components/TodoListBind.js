import { connect } from 'react-redux';
import TodoList from './TodoList';
import { FILTER_TYPE, toggle } from '../store/index.js';

function mapState(state) {
    switch (state.filterType) {
        case FILTER_TYPE.ALL:
            return { todos: state.todos };
        case FILTER_TYPE.COMPLETE:
            return {
                todos: state.todos.filter(item => {
                    return item.complete === true;
                })
            };
        case FILTER_TYPE.UNCOMPLETE:
            return {
                todos: state.todos.filter(item => {
                    return item.complete === false;
                })
            };
        default: throw new Error('TodoListBind');
    }
}

function mapDispatch(dispatch) {
    return {
        onClick(index) {
            dispatch(toggle(index));
        }
    }
}

const TodoListBind = connect(mapState, mapDispatch)(TodoList);

export default TodoListBind;