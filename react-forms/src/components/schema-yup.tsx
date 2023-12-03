import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Z]/, {
      message: 'The first letter must be uppercased ',
      excludeEmptyString: true,
    })
    .required('This field is a required'),
  age: yup.number().positive().integer().required('This field is a required'),
  email: yup.string().email().required('This field is a required'),
  password: yup
    .string()
    .matches(/[A-Z]/, {
      message: 'The password must contain an uppercased letter',
      excludeEmptyString: true,
    })
    .matches(/[a-z]/, {
      message: 'The password must contain a lowercased letter',
      excludeEmptyString: true,
    })
    .matches(/[0-9]/, {
      message: 'The password must contain a number',
      excludeEmptyString: true,
    })
    .matches(/[!@#$%^&*()_+=-]/, {
      message:
        'The password must contain at least 1 of theese symbols: "!@#$%^&*()_+=-"',
      excludeEmptyString: true,
    })
    .min(6, 'The password must contain at least 6 characters')
    .max(32, 'The password must contain no more than 32 characters')
    .required('This field is a required'),
  gender: yup.array().of(yup.string()).required('This field is a required'),
  acceptTC: yup.boolean(),
  country: yup.string().required('This field is a required'),
});
