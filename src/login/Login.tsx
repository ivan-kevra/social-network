import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../redux/redux-store";
import {loginTC} from "../redux/auth-reducer";
import {loginValidator} from '../utils/validators/validators';
import {Input, Textarea} from "../components/common/FormsControls/FormControls";


export type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    const dispatch = useAppDispatch()

    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values: FormikErrorType) => loginValidator(values),
        onSubmit: values => {
            console.log(values)
            dispatch(loginTC(values))
        },
    })

    return <form onSubmit={formik.handleSubmit}>
        <FormControl>
            <FormGroup>
                <Input {...formik.getFieldProps('email')}
                       onBlur={formik.handleBlur} item={formik.errors.email}/>
                <Input {...formik.getFieldProps('password')}
                       onBlur={formik.handleBlur} item={formik.errors.password}/>
                <FormControlLabel label={'Remember me'}
                                  control={<Checkbox
                                      {...formik.getFieldProps('rememberMe')}
                                      onChange={formik.handleChange}
                                      checked={formik.values.rememberMe}
                                  />}/>
                <Button type={'submit'} variant={'contained'} color={'primary'}>
                    Login
                </Button>
            </FormGroup>
        </FormControl>
    </form>
}
