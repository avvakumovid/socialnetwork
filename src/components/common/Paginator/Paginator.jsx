import style from './Paginator.module.css';
import React from "react";


const Paginator = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div>{pages.map(p => {
            return <span onClick={() => {
                props.setCurrentPage(p)
            }} className={p === props.currentPage && style.selectdePage}>{p}</span>
        })}
        </div>
    )

}

export default Paginator;