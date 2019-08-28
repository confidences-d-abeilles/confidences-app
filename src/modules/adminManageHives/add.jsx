import React, { useState } from 'react';
import { Button } from '@cda/button';
import Input from '@cda/input';

const Add = ({
  handler,
}) => {
  const [queryString, setQueryString] = useState('');
  const inputHandler = e => setQueryString(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    handler(queryString);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input type="text" value={queryString} placeholder="Nom de la ruche..." onChange={inputHandler} />
      <Button type="submit">Ajouter</Button>
    </form>
  );
};

export default Add;
