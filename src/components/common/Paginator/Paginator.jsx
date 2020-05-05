import React from 'react';
import style from './Paginator.module.css';
import { useState } from 'react';

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChaged, portionSize = 10 }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;

  let pages = [];
  for (let i = leftPortionNumber; i <= rightPortionNumber; i++) {
    pages.push(i);
  }

  return (
    <div className={style.pagination}>
      {portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
      }
      {pages.map(p => {
        return <span className={style.paginatorItem + " " + (currentPage === p && style.selectedPage)}
          onClick={(e) => { onPageChaged(p) }}>{p}</span>
      })}
      {portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
      }
    </div>
  );
}

export default Paginator;