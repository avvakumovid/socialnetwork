import s from './Message.module.css'

const Message = (props) => {

    if(props.senderId === 1){
        return (<div className={`${s.myMessage} `}>{props.message}<img className={s.avatarImage} src="https://image.flaticon.com/icons/png/512/2077/2077402.png" alt=""/></div>);
    }
    return (<div className={`${s.message}`}><img  className={s.avatarImage} src="https://image.flaticon.com/icons/png/512/2077/2077407.png" alt=""/>{props.message}</div>);

}

export default Message;