import React from 'react'

export const input = ({
    input,
    label,
    type,
    meta: { touched, error}
  }) => (
    <div className='form-group'>
      <label>{label}</label>
      <div className='input-group'>
        <input {...input} className="bg-light-blue dib br3 pa3 ma2 grow dim bw2 shadow-3" type={type} />
        </div>
        {touched &&
          ((error && <div className='alert alert-danger'>{error}</div>))}
    </div>
  )