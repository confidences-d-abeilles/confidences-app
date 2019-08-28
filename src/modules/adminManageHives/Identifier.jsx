import React, { useState } from 'react';
import Input from '@cda/input';

const Identifier = ({ handler, initialValue }) => {
  const [identifier, setIdentifier] = useState(initialValue);

  const localHandler = e => setIdentifier(e.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    handler(identifier);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Identifiant</h2>
      <Input type="text" name="identifier" onChange={localHandler} value={identifier} />
    </form>
  );
};

export default Identifier;
