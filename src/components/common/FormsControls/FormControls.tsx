import style from './style.module.css'
import {FocusEventHandler} from "react";

type FormControlPropsType = {
    onBlur: FocusEventHandler<HTMLTextAreaElement> | FocusEventHandler<HTMLInputElement>
    item: string | undefined
    children: JSX.Element
}

const FormControl = ({item, onBlur, children}: FormControlPropsType) => {
    const hasError = item && onBlur
    return (
        <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{item}</span>}
        </div>
    )
}

type TextAreaPropsType = {
    onBlur: FocusEventHandler<HTMLTextAreaElement>
    item: string | undefined
}
export const Textarea = ({item, onBlur, ...props}: TextAreaPropsType) => {
    return <FormControl item={item} onBlur={onBlur}>
        <textarea {...props} onBlur={onBlur}/>
    </FormControl>
}

type InputPropsType = {
    onBlur: FocusEventHandler<HTMLInputElement>
    item: string | undefined
    type?: any
}
export const Input = (props: InputPropsType) => {
    return <FormControl item={props.item} onBlur={props.onBlur}>
        <input {...props} onBlur={props.onBlur}/>
    </FormControl>
}

