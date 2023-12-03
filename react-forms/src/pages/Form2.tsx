// import * as yup from 'yup';
import { schema } from '../components/schema-yup';
import { useAppDispatch } from '../redux/hooks';
import { addUser } from '../redux/usersSlice';
import { useNavigate } from 'react-router-dom';
import './forms.scss';
import { FormEvent } from 'react';

export default function Form2() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const entries = [];
    const inputs = document.querySelectorAll('input');
    for (const input of inputs) {
      if (input instanceof HTMLInputElement) {
        if (input.name !== 'acceptTC') {
          input.name !== 'gender'
            ? entries.push([input.name, input.value])
            : entries.push([input.name, [input.value]]);
        }
      }
    }
    const select = document.querySelector('select');
    if (select instanceof HTMLSelectElement) {
      entries.push([select.name, select.value]);
    }
    const data = Object.fromEntries(entries);

    schema
      .validate(data)
      .then(() => {
        console.log('then');
        dispatch(addUser(data));
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = document.querySelector('.form__errors');
        if (errorMessage) errorMessage.textContent = error.message;
        console.log('catch', error);
      });
  };

  return (
    <form className="form" onSubmit={(event) => onSubmitHandler(event)}>
      <h2 className="form__header">The form with uncontrolled components</h2>
      <input placeholder="Your name" type="text" required name="name" />

      <input placeholder="Your age" type="text" required name="age" />

      <input
        placeholder="E-mail"
        type="email"
        autoComplete="username"
        name="email"
        required
      />

      <input
        placeholder="Password"
        type="password"
        autoComplete="new-password"
        name="password"
        required
      />

      <input
        placeholder="Password"
        type="password"
        autoComplete="new-password"
        name="password"
        required
      />

      <div className="form__gender">
        <p>Choose your gender</p>
        <label>
          <input type="radio" name="gender" value="Male" />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="Female" />
          Female
        </label>
        <p></p>
      </div>

      <label className="form__country">
        Choose country
        <select name="country">
          <option value="">Select...</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="France">France</option>
        </select>
      </label>

      <label className="form__accept">
        <input type="checkbox" name="acceptTC" />
        Accept T&C
      </label>

      <p className="form__errors"></p>

      <button className="button" type="submit">
        Input info
      </button>
    </form>
  );
}
