import React, { useEffect } from 'react'

const Alert = ({removeMessage, list, script}) => {
  useEffect(() => {
    var temp = setTimeout(() => {
      removeMessage();
    }, 3000);
    return () => clearTimeout(temp);
  }, [list]);

  const {msg, type} = script;

  return (
    <div className={`alert-${type} alert`}>
      {msg}
    </div>
  );
}

export default Alert
