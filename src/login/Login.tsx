import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../redux/redux-store";
import {loginTC} from "../redux/auth-reducer";
// import {loginTC} from "./auth-reducer";
// import {AppRootStateType, useAppDispatch} from "../../app/store";
// import {useSelector} from "react-redux";
// import {Navigate} from "react-router-dom";

type FormikErrorType = {
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
        validate: (values) => {
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

        },
        onSubmit: values => {
            console.log(values)
            dispatch(loginTC(values))
        },
    })

    return <form onSubmit={formik.handleSubmit}>
        <FormControl>
            <FormGroup>
                <TextField label="Email"
                           margin="normal"
                           {...formik.getFieldProps('email')}
                           onBlur={formik.handleBlur}/>
                {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                <TextField type="password" label="Password"
                           margin="normal"
                           {...formik.getFieldProps('password')}
                           onBlur={formik.handleBlur}
                />
                {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
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