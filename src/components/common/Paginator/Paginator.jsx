import style from './Paginator.module.css';
import React, {useState} from 'react';


const Paginator = ({totalUserCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let [portionNumber, setPortionNumber] = useState(1)
    let pageCount = Math.ceil(totalUserCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }


    let portionCount = Math.ceil(pageCount / portionSize)

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber  * portionSize
    return <div>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</button>}
            {pages
                .filter(p =>  p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span
                        onClick={() => {
                            onPageChanged(p)
                        }} className={p === currentPage && style.selectdePage}>{p}</span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>}
        </div>


}

export default Paginator;