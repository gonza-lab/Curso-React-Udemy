import React, { useEffect } from 'react';

export const InputForm = (props) => {
  useEffect(() => {
    return () => {
      console.log('desmontado.');
    };
  }, []);

  return (
    <div className="form-group">
      <input
        {...props}
        className="form-control"
        placeholder={'Tu ' + props.name}
        autoComplete="off"
      />
    </div>
  );
};

InputForm.defaultProps = {
  type: 'text',
};
