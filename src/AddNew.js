
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {input} from './login/form/input';
import Errors from './login/form/errors'
import {required,minLength2} from './login/form/validators'


const AddNew = props => {
  
    const {adding, valid,handleSubmit, pristine,errors, submitting} = props
  return (
    
    <form onSubmit={handleSubmit(adding)}>

          <Field
            name="name"
            component="input"
            type="name"
            placeholder="name"
            className="form-control"
            component={input}
            label="Name"
            validate={[required,minLength2]}          />

          <Field
            name="number"
            component="input"
            type="text"
            placeholder="number"
            className="form-control"
            component={input}
            label="Number"
            validate={[required]}
          />

        <button type="submit" className="bg-light-purple dim grow br3" disabled={!valid || pristine || submitting}>
          Add Contact
        </button>
        <div>
          <Errors errors={errors}/>
        </div>
    </form>
  )
}



export default reduxForm({
    form: 'AddNew' // a unique identifier for this form
  })(AddNew)
