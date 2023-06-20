import style from './style.module.css'
import {FocusEventHandler} from "react";

type FormControlPropsType = {
    onBlur: FocusEventHandler<HTMLTextAreaElement> | FocusEventHandler<HTMLInputElement>
    item: string | undefined
    children: JSX.Element
}

const FormControl = (props: FormControlPropsType) => {
    const hasError = props.item && props.onBlur
    return (
        <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{props.item}</span>}
        </div>
    )
}

type TextAreaPropsType = {
    onBlur: FocusEventHandler<HTMLTextAreaElement>
    item: string | undefined
}
export const Textarea = (props: TextAreaPropsType) => {
    return <FormControl item={props.item} onBlur={props.onBlur}>
        <textarea {...props} onBlur={props.onBlur}/>
    </FormControl>
}

type InputPropsType = {
    onBlur: FocusEventHandler<HTMLInputElement>
    item: string | undefined
}
export const Input = (props: InputPropsType) => {
    return <FormControl item={props.item} onBlur={props.onBlur}>
        <input {...props} onBlur={props.onBlur}/>
    </FormControl>
}

