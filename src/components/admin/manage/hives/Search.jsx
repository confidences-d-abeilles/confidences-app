import React, { useState } from 'react';
import { Button } from '@cda/button';


const Search = ({
  handler,
  className,
}) => {
  const [queryString, setQueryString] = useState('');
  const inputHandler = e => setQueryString(e.target.value);

  const submitHandler = e => {
    e.preventDefault();
    handler(queryString);
  };

  return (
    <form className={className} onSubmit={submitHandler}>
      <input type="text" value={queryString} placeholder="Nom de parrain..." onChange={inputHandler} />
      <Button type="submit">Rechercher</Button>
    </form>
  );
};

export default Search;
