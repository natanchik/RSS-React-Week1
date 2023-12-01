import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^A-Z/, {
      message: 'The first letter must be uppercased ',
      excludeEmptyString: true,
    })
    .required('This field is a required'),
  age: yup.number().positive().integer().required('This field is a required'),
  email: yup.string().email().required('This field is a required'),
  password: yup
    .string()
    .matches(/A-Z/, {
      message: 'The password must contain an uppercased letter',
      excludeEmptyString: true,
    })
    .matches(/a-z/, {
      message: 'The password must contain a lowercased letter',
      excludeEmptyString: true,
    })
    .matches(/0-9/, {
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
  gender: yup.string().required('This field is a required'),
  acceptTC: yup.string().required('This field is a required'),
});

export default function Form1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data: object) => {
    console.log({ data });
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>The form with React Hook Form</h2>
      <br />

      <input {...register('email')} placeholder="email" type="email" required />
      <p>{errors.email?.message}</p>
      <br />

      <input
        {...register('password')}
        placeholder="password"
        type="password"
        required
      />
      <p>{errors.password?.message}</p>
      <br />

      <button type="submit">Sign in</button>
    </form>
  );
}
