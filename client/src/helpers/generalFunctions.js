import _ from 'lodash';

export const formatDate = (date) => {
  if (_.isEmpty(date)) {
    return date;
  }

  const newDate = new Date(date);
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(newDate);
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(newDate);
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);

  return `${day}-${month}-${year}`;
};

export const applyFilter = (list, filter) => {
  const resultArray = _.map(list, (item) => {
    const { firstName, secondName, lastName, academicStatus, email, phoneNumber } = item;
    const fullName = lastName + firstName + secondName;

    if (filter.text && fullName.indexOf(filter.text) === -1) {
      return;
    }

    if (filter.academicStatus && academicStatus !== filter.academicStatus) {
      return;
    }

    if (filter.email && email.indexOf(filter.email) === -1) {
      return;
    }

    if (_.isEmpty(phoneNumber) || filter.phone && phoneNumber.indexOf(filter.phone) === -1) {
      return;
    }

    return item;
  });

  console.log(resultArray);
  _.remove(resultArray, (item) => item === undefined);
  return resultArray;
};
