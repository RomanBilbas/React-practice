import * as yup from "yup";

const USER_SCHEMA = yup.object({
  // login: yup.string().email("It is a not valid email").required(),
  login: yup
    .mixed()
    .oneOf([
      yup.string().email("It is a not valid email"),
      yup.string().matches(/^\+380\d$/),
    ])
    .string()
    .trim()
    .min(8)
    .max(64)
    .matches(/(?=.*[A-Z].*).*/, "Passw must contain at least 1 A-Z")
    .matches(/(?=.*[a-z].*).*/, "Passw must contain at least 1 a-z")
    .required(),
});

const loginData = {
  login: "qqqq@qqq.com",
  password: "qq!1qqqq",
};

USER_SCHEMA.validate(loginData)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const autoData = {
  model: "Audi",
  productionYear: 2015,
  km: 126000,
  number: "AX1232KM",
};

const AUTO_SCHEMA = yup.object({
  model: yup.string().matches(/(?=.*[A-Z].*),*/),
  productionYear: yup.number().min(1900).max(new Date().getFullYear()),
  km: yup.number().min(1).max(999999),
  number: yup.string().matches(/^[A-Z]{2}\d{4}[A-Z]{2}$/),
});

AUTO_SCHEMA.validate(autoData)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
