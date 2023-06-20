import {FormikErrorType} from "../../login/Login"


export const loginValidator = (values: FormikErrorType) => {
    const errors: FormikErrorType = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 3) {
        errors.password = 'Password too short'
    }
    return errors
}

export const maxLengthPostValidator = (maxLength: number, values: PostErrorType) => {
    const errors: PostErrorType = {}
    if (!values.post) errors.post = 'Required'
    else if (values.post.length > maxLength) errors.post = `Max length is ${maxLength} symbols`
    return errors
}

export type PostErrorType = {
    post?: string | undefined
}


export const maxLengthMessageValidator = (maxLength: number, values: MessageErrorType) => {
    const errors: MessageErrorType = {}
    if (!values.message) errors.message = 'Required'
    else if (values.message.length > maxLength) errors.message = `Max length is ${maxLength} symbols`
    return errors
}
export type MessageErrorType = {
    message?: string | undefined
}
