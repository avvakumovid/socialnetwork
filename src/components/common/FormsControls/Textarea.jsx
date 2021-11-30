import React from 'react';
import s from './Textarea.module.css'
export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.wrapper + ' ' + (hasError ? s.error: "")}>
            {hasError && <span>{meta.error}</span>}
            <textarea {...input} {...props}/>

        </div>
    )
}

