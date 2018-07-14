import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {input} from './form/input';
import Errors from './form/errors'
import {required,minLength6} from './form/validators'
import { Link } from 'react-router-dom'

const LoginForm = props => {
  const {login, valid,handleSubmit, pristine,errors, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit(login)}>

          <Field
            name="email"
            component="input"
            type="email"
            placeholder="email"
            className="form-control"
            component={input}
            label="Email"
            validate={[required,minLength6]}          />

          <Field
            name="password"
            component="input"
            type="password"
            placeholder="password"
            className="form-control"
            component={input}
            label="Password"
            validate={[required]}
          />

        <button type="submit" className="bg-light-purple dim grow br3" disabled={!valid || pristine || submitting}>
          Login
        </button>
        <div>
          <Link to='/register'>
            <button className="bg-light-purple dim grow br3">Or create account</button>
          </Link>
        </div>
        <div>
          <Errors errors={errors}/>
        </div>
    </form>
  )
}



export default reduxForm({
    form: 'LoginForm' // a unique identifier for this form
  })(LoginForm)
