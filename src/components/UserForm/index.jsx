import { Formik } from "formik";
import * as yup from "yup";

const USER_VALIDATION_SCHEMA = yup.object({
  userName: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z][a-z]*$/)
    .required(),
});

function UserForm() {
  const initialValues = { userName: "" };
  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      {(formikProps) => {
        return (
          <form
            onSubmit={formikProps.handleSubmit}
            onReset={formikProps.handleReset}
          >
            <input
              type="text"
              name="userName"
              value={formikProps.values.userName}
              onChange={formikProps.handleChange}
            />
            <span>{formikProps.errors.userName}</span>
            <button type="submit">Send</button>
            <button type="Reset" disabled={!formikProps.dirty}>
              Reser
            </button>
          </form>
        );
      }}
    </Formik>
  );
}

export default UserForm;
