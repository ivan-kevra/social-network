import React, {useState} from 'react';
import style from "./Paginator.module.css"

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (page: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = ({
                                                            totalItemsCount, setCurrentPage, pageSize, currentPage,
                                                        }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionSize = 10

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div>
        {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
        {pages.filter((page: number) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map((page) => {
                return <button key={page}
                               className={currentPage === page ? style.selectedPage : ''}
                               onClick={(event) => {
                                   setCurrentPage(page)
                               }}>
                    {page}
                </button>
            })}
        {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
    </div>
}

