
export const validate = values => {
  const errors = {}

  if (!values.firstName ) {
    errors.firstName = 'Обов\'язкове поле'
  } else if (values.firstName.length < 2) {
    errors.firstName = 'Повинен складатись як мінімум з двох символів'
  }
  if (!values.secondName ) {
    errors.secondName = 'Обов\'язкове поле'
  } else if (values.secondName.length < 2) {
    errors.secondName = 'Повинен складатись як мінімум з двох символів'
  }
  if (!values.lastName ) {
    errors.lastName = 'Обов\'язкове поле'
  } else if (values.lastName.length < 2) {
    errors.lastName = 'Повинен складатись як мінімум з двох символів'
  }
  if (!values.email) {
    errors.email = 'Обов\'язкове поле'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неправильна електронна адреса'
  }
  if (!values.dateBirth) {
    errors.dateBirth = 'Обов\'язкове поле'
  }
  if (!values.dateWork) {
    errors.dateWork = 'Обов\'язкове поле'
  }
  if (!values.academicStatus) {
    errors.academicStatus = 'Обов\'язкове поле'
  }
  if (!values.password) {
    errors.password = 'Обов\'язкове поле'
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(values.password)) {
    errors.password = 'Як мінімум 8 символів, одна велика літера, одне число і один спеціальний символ'
  }
  return errors
}
