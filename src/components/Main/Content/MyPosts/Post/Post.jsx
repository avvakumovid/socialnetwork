import s from './Post.module.css'

const Post = (props) => {
    return (<div className={s.post}>
        <div><img src={props.src} alt=""/></div>
        <div>{props.text}</div>
    </div>);
}

export default Post;