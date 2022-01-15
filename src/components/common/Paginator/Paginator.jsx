import style from './Paginator.module.css';
import React, {useState} from 'react';


const Paginator = (props) => {
    let [portionNumber, setPortionNumber] = useState(1)
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }


    let portionCount = Math.ceil(pageCount / props.portionSize)

    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber  * props.portionSize
    return (
        <div className={style.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</button>}
            {pages.filter(p =>  p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span
                        onClick={() => {
                            props.onPageChanged(p)
                        }} className={p === props.currentPage && style.selectdePage}>{p}</span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>}
        </div>
    )

}

export default Paginator;