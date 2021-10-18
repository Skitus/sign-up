import React from 'react';
import './FormErrorMessage.scss';

const FormErrorMessage = ({message}) => {
    return (
        <p>
            {
                message ?
                    <div className="error-message">{message}</div> :
                    ''
            }
        </p>
    );

};

export default FormErrorMessage;