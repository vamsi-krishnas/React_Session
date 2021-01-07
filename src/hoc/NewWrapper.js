import React from 'react';
const newWrapper = (NewWrapperComponent, className) => {
    return props => (
        <div className={className}>
            <NewWrapperComponent {...props} />
        </div>
    )
}
export default newWrapper;