import s from './Messages.module.css'

const Messages = (props) => {
    return (
        <div>
            <h1>Messages</h1>
            <div className={s.dialogs} >
                <div className={s.dialogsItem}>
                    <div className={`${s.dialog} ${s.active}`}>Elena</div>
                    <div className={s.dialog}>Ivan</div>
                    <div className={s.dialog}>Alex</div>
                    <div className={s.dialog}>Mark</div>
                    <div className={s.dialog}>Steve</div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>How are you?</div>
                    <div className={s.message}>What are you doing?</div>
                </div>
            </div>
        </div>
    );
}
export default Messages;