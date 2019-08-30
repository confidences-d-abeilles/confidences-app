import React, { useState } from 'react';
import { Button } from '@cda/button';
import Input from '@cda/input';

const Search = ({
  handler,
  value,
}) => {
  const [queryString, setQueryString] = useState(value);
  const inputHandler = e => setQueryString(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    handler(queryString);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input type="text" value={queryString} placeholder="Nom de parrain..." onChange={inputHandler} />
      <Button type="submit">Rechercher</Button>
    </form>
  );
};

export default Search;
