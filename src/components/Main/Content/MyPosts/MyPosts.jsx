import s from './MyPosts.module.css'



const MyPosts = (props) => {
    return (
        <section>
            <h2 className={s.title}>New Posts</h2>
            <div className={s.newPost}>
                <textarea name="" id="" rows="5"/>
                <button type="submit">Отправить</button>
            </div>
            {props.posts}
        </section>
    );
}

export default MyPosts;