import s from './Messages.module.css'


const Messages = (props) => {


    return (
        <div>
            <h1>Messages</h1>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {props.dialogs}
                </div>
                <div className={s.messages}>
                    {props.messages}

                </div>
            </div>
        </div>
    );
}
export default Messages;