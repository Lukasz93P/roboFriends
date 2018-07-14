export const required=value=>(value ? undefined : 'This field is required');

const minLength = min => value =>
  value && value.length < min? `Must be ${min} characters or more` : undefined

export  const minLength6 = minLength(6)
export  const minLength2 = minLength(2)