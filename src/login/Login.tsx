import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../redux/store";
import {loginTC} from "../redux/app-reducer";
import {loginValidator} from '../utils/validators/validators';
import {Input} from "../components/common/FormsControls/FormControls";
import {Navigate} from "react-router-dom";


export type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

const Login = () => {

    const dispatch = useAppDispatch()

    const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            general: ''
        },
        validate: (values: FormikErrorType) => loginValidator(values),
        onSubmit: (values, {setFieldValue}) => {
            console.log(values)
            dispatch(loginTC(values, setFieldValue))
        },
    })

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

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
                <div>
                    {formik.values.general ? <span>{formik.values.general}</span> : null}
                </div>
            </FormGroup>
        </FormControl>
    </form>
}
export default Login;