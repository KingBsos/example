import { connect } from 'react-redux';
import FilterPanel from './FilterPanel';
import { toggleFilterType } from '../store/index.js';

function mapState(state, props) {
    return {
        active: state.filterType === props.filterType
    }
}
function mapDispatch(dispatch, props) {
    return {
        onClick(event) {
            event.preventDefault();
            dispatch(toggleFilterType(props.filterType));
        }
    }
}

const FilterPanelBind = connect(mapState, mapDispatch)(FilterPanel);

export default FilterPanelBind;