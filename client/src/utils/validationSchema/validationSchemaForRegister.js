import * as yup from 'yup';

const validationSchemaForRegister = yup.object().shape({
  name: yup
    .string()
    .required('Имя обязательно')
    .max(20, 'Имя не может быть таким длинным'),
  surname: yup
    .string()
    .required('Фамилия обязательна')
    .min(3, 'Фамилия не может быть такой короткой')
    .max(30, 'Фамилия не может быть такой длинной'),
  fatherhood: yup
    .string()
    .min(5, 'Отчество не может быть такой короткой')
    .max(35, 'Отвечество должно быть короче'),
  login: yup
    .string()
    .required('Логин обязателен')
    .min(5, 'Логин не может быть таким коротким')
    .max(35, 'Логин не может быть таким длинным'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .min(7, 'Пароль не может быть таким коротки')
    .max(25, 'Пароль не может быть таким длинным'),
  passwordConfirm: yup
    .string()
    .required('Подтвердить пароль обязательно')
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
  roles: yup
    .string()
    .required('Укажите роль'),
});

export {
  validationSchemaForRegister,
};

