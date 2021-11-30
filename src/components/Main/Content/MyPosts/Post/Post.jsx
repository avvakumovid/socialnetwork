import s from './Post.module.css'
import React from 'react';
const Post = (props) => {
    return (<div className={s.post}>
        <div className={s.image}><img src={props.src}  alt=""/></div>
        <div className={s.userName}>Name Name</div>
        <div className={s.text}>{props.text}</div>
        <div className={s.likes}><img src="https://cdn-icons-png.flaticon.com/512/2516/2516978.png" alt="like"/>{props.likeCount}</div>
    </div>);
}

export default Post;