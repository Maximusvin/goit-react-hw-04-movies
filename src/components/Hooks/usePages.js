import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function usePages() {
  const [totalPage, setTotalPage] = useState(1);
  const history = useHistory();
  const location = useLocation();

  const page = Number(new URLSearchParams(location.search).get('page') ?? 1);

  function handleChangePage(pageNumber) {
    history.push({ ...location, search: `page=${pageNumber}` });
  }

  return { page, totalPage, setTotalPage, handleChangePage };
}
