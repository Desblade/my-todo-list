import * as yup from 'yup';

const validationSchemaForLogin = yup.object().shape({
  login: yup
    .string()
    .required('Заполните логин'),
  password: yup
    .string()
    .required('Заполните пароль'),
});

export {
  validationSchemaForLogin,
};
