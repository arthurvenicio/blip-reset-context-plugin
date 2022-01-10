/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import InputMask from 'react-input-mask';

export const Input = (props) => (
    <InputMask
        mask="(99) 99999-9999"
        value={props.value}
        onChange={props.onChange}
        name={props.name}
    />
);
