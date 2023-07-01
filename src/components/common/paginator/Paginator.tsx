import React from 'react';
import style from "./Paginator.module.css"

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (page: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = ({totalUsersCount, setCurrentPage, pageSize, currentPage}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map((page) => {
            return <button key={page}
                           className={currentPage === page ? style.selectedPage : ''}
                           onClick={(event) => {
                               setCurrentPage(page)
                           }}>
                {page}
            </button>
        })}
    </div>
}

