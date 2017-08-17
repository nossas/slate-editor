import React from 'react'

const preventDefault = (callback) => (e) => {
  e.preventDefault();
  if(callback) {
    callback(e);
  }
};

export default ({ children, id, onClick, className, style, type }) => {
  const buttonType = type || 'button'; // Make button default so that when used in forms, "submit" does not become default
  return (
    <button
      id={id}
      style={style}
      onClick={preventDefault(onClick)}
      className={className}
      type={buttonType}
    >
      {children}
    </button>
  );
}
