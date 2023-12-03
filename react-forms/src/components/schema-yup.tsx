import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Z]/, {
      message: 'The first letter in name must be uppercased',
      excludeEmptyString: true,
    })
    .required('Name is a required'),
  age: yup.number().positive().integer().required('Age is a required'),
  email: yup.string().email().required('E-mail is a required'),
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
    .min(8, 'The password must contain at least 8 characters')
    .max(32, 'The password must contain no more than 32 characters')
    .required('The password is a required'),
  gender: yup.array().of(yup.string()).required('The gender is a required'),
  acceptTC: yup.boolean(),
  country: yup.string().required('Country is a required'),
});
