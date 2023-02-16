import React, {useContext} from 'react';
import Context from "./Context.jsx";

const Header = ({children}) => {
  const {onHide} = useContext(Context);

  return (
    <div className="modal-header">
      {children}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onHide}
      />
    </div>
  );
};

export default Header;