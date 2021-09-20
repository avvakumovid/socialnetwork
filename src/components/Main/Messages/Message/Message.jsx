import s from './Message.module.css'

const Message = (props) => {

    if(props.senderId === 1){
        return (<div className={`${s.myMessage} `}><img className={s.avatarImage} src="https://image.flaticon.com/icons/png/512/2077/2077402.png" alt=""/><span className={s.name}>NameNameNameNameName</span> <div className={s.text}> {props.message}</div></div>);

    }
    return (<div className={`${s.message}`}><img  className={s.avatarImage} src="https://image.flaticon.com/icons/png/512/2077/2077407.png" alt=""/><span className={s.name}>Name</span><div className={s.text}> {props.message}</div></div>);

}

export default Message;