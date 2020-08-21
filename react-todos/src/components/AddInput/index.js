import React from 'react';
import { add } from '../../store/index.js';
import { connect } from 'react-redux';
import { useState } from 'react';

function AddInput({ dispatch }) {
    let [value, setValue] = useState('');
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(value !== '') {
                dispatch(add(value));
                setValue('');
            }
        }}>
            <input value={ value } onChange={ event => setValue(event.target.value) }/>
            <button>ADD</button>
        </form>
    );
}

const AddInputBind = connect()(AddInput);

export default AddInputBind;