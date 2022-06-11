import React from 'react'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import styled from 'styled-components'
import {Button} from '../../styles/components'
import {colors} from '../../styles/global'

const LoginForm: React.FC<{ login: () => void }> = (props) => {
    return <Formik
        initialValues={{login: '', password: ''}}
        validate={values => {
            const errors = {} as {login?:string, password?:string}
            if (!values.login || !values.password) {
                errors.login = 'Проверьте, что оба поля заполнены'
                errors.password = 'Проверьте, что оба поля заполнены'
            } else if (values.login !== 'Admin' || values.password !== '12345') {
                errors.login = 'Имя пользователя или пароль введены не верно'
                errors.password = 'Имя пользователя или пароль введены не верно'
            }
            return errors
        }}
        onSubmit={(values, {setSubmitting}) => {
            if (values.login === 'Admin' && values.password === '12345') {
                props.login()
                setSubmitting(false)
            }
        }}
    >
        {({isSubmitting}) => (
            <SForm>
                <SField type='text' placeholder='логин' name='login'/>
                <SField type='password' placeholder='пароль' name='password'/>
                <SError name='login' component='div'/>
                <Button type='submit' disabled={isSubmitting}>
                    Войти
                </Button>
            </SForm>
        )}
    </Formik>
}

export default LoginForm

const SForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 200px;
  text-align: center;
`
const SField = styled(Field)`
  margin-bottom: 5px;
  padding: 7px 5px;
  border: none;
  border-radius: 5px;  
  &:focus {
    outline: ${colors.success} solid 3px;
  }
`
const SError = styled(ErrorMessage)`
  margin: 10px 0;
  font-size: 0.8em;
  color: ${colors.danger};
`