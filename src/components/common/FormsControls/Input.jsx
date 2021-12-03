import React from "react";
import s from './Textarea.module.css'

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <span className={s.wrapper + ' ' + (hasError ? s.error: "")}>
            <input {...input} {...props}/>
            {hasError && <span> {meta.error}</span>}
        </span>
    )
}