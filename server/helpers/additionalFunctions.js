export const checkRequiredFields = (arrayOfFields) => {
  return arrayOfFields.every((item) => !(item === undefined));
};
