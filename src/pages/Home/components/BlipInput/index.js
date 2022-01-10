/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';

export const InputNumber = ({
    onInput,
    value,
    label,
    name,
    onCountryChange
}) => {
    const elementRf = useRef(null);

    useEffect(() => {
        elementRf.current.value = value;
        elementRf.current.addEventListener('bdsPhoneNumberChange', (event) => {
            onCountryChange(event);
        });
    }, [onInput]);

    return (
        <bds-input-phone-number
            name={name}
            label={label}
            ref={elementRf}
            value={value}
        />
    );
};
