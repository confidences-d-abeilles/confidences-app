import { useState } from 'react';


const usePages = () => {
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);

  return {
    page,
    pages,
    setPage,
    setPages,
  };
};

export default usePages;
