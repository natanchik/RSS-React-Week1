import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch } from '../redux/hooks';
import { addUser } from '../redux/usersSlice';
import { useNavigate } from 'react-router-dom';
import './forms.scss';

const schema = yup.object().shape({
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

export default function Form1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmitHandler = async (data: object) => {
    dispatch(addUser(data));
    navigate('/');
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
      <h2 className="form__header">The form with React Hook Form</h2>
      <input
        {...register('name')}
        placeholder="Your name"
        type="text"
        required
      />
      <p className="form__errors">{errors.name?.message}</p>
      <input {...register('age')} placeholder="Your age" type="text" required />
      <p className="form__errors">{errors.age?.message}</p>
      <input
        {...register('email')}
        placeholder="E-mail"
        type="email"
        autoComplete="username"
        required
      />
      <p className="form__errors">{errors.email?.message}</p>
      <input
        {...register('password')}
        placeholder="Password"
        type="password"
        autoComplete="new-password"
        required
      />
      <p className="form__errors">{errors.password?.message}</p>
      <input
        {...register('password')}
        placeholder="Password"
        type="password"
        autoComplete="new-password"
        required
      />
      <p className="form__errors">{errors.password?.message}</p>
      <div className="form__gender">
        <p>Choose your gender</p>
        <label>
          <input
            {...register('gender')}
            type="radio"
            name="gender"
            value="Male"
          />
          Male
        </label>
        <label>
          <input
            {...register('gender')}
            type="radio"
            name="gender"
            value="Female"
          />
          Female
        </label>
        <p className="form__errors">{errors.gender?.message}</p>
      </div>
      <label className="form__country">
        Choose country
        <select {...register('country')}>
          <option value="">Select...</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="France">France</option>
        </select>
      </label>
      <p className="form__errors">{errors.country?.message}</p>
      <label className="form__accept">
        <input {...register('gender')} type="checkbox" name="acceptTC" />
        Accept T&C
      </label>
      <p className="form__errors">{errors.acceptTC?.message}</p>
      <button className="button" type="submit">
        Input info
      </button>
    </form>
  );
}
