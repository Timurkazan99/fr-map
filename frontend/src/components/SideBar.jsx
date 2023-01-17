import React from 'react';
import '../styles/css/Sidebar.css';

const SideBar = () => {
  const show = true;
  return (
    show && (
      <div className="sidebar">

      </div>
    )
  );
};

export default SideBar;