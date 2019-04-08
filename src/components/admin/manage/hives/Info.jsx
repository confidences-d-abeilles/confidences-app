import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../utils/Button';

const Info = ({ name, handler, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <form onSubmit={handler(name, value)}>
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
