import classes from "./MySelect.module.css"
import React from 'react';

const MySelect = ({sortOptions, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={classes.mySelect}
        >
            <option disabled={true} value="">{defaultValue}</option>
            {sortOptions.map(option => (
                <option key={option.value} value={option.value}>{option.name}</option>
            ))}
        </select>
    );
};

export default MySelect;