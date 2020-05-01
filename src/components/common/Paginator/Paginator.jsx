import React from 'react';
import style from './Paginator.module.css';

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChaged }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={style.pagination}>
      {pages.map(p => {
        return <span className={currentPage === p && style.selectedPage}
          onClick={(e) => { onPageChaged(p) }}>{p}</span>
      })}
    </div>
  );
}

export default Paginator;