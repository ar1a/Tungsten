import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required('required'),
  Yield: yup
    .number('not a number')
    .required('required')
    .positive('must be positive')
    .integer('must be integer'),
  ingredients: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required('required'),
        quantity: yup
          .number('not a number')
          .typeError('quantity must be a number')
          .required('required')
          .positive('must be positive')
      })
    )
    .required('Must have ingredients'),
  equipment: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required('required'),
        washable: yup.bool().required('required')
      })
    )
    .required('Must have equipment')
});
