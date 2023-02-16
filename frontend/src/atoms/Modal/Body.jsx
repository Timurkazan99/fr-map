import React from 'react';

const Body = React.forwardRef(({className, children}) => {
  return (
    <div className={`modal-body ${className}`}>
      {children}
    </div>
  );
});

Body.defaultProps = {
  className: ''
}

export default Body;