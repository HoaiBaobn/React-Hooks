import React, { useState } from "react";
import PropTypes from "prop-types";

TodoFrom.propTypes = {
    onSubmit: PropTypes.func,
};
TodoFrom.defaultProps = {
    onSubmit: null,
};

function TodoFrom(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState(" ");

    function handleValuehange(e) {
        setValue(e.target.value);
    }
    //prevent reloading browser
    function handleSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return;
        const formValues = {
            title: value,
        };
        onSubmit(formValues);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={handleValuehange}
            ></input>
        </form>
    );
}

export default TodoFrom;
