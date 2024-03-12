import React from 'react';

const ErrorComponent = ({ errorMessage }) => {
    return (
        <div className="bg-red-200 text-red-700 p-2 rounded">
            {errorMessage}
        </div>
    );
};

export default ErrorComponent;
