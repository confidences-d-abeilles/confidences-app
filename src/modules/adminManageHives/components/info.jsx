import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@cda/button';

const Info = ({ name, handler, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const submitHandler = (e) => {
    e.preventDefault();
    handler(name, value);
  };

  return (
    <form onSubmit={submitHandler}>
      <textarea rows="5" className="form-control" name="info" onChange={({ target: { value: fieldValue } }) => setValue(fieldValue)} value={value} />
      <Button type="submit" className="my-2" primary>Sauvegarder</Button>
    </form>
  );
};

Info.propTypes = {
  name: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};

Info.defaultProps = {
  defaultValue: '',
};

export default Info;
