const isEmpty = (value) => {
  if (
    value === undefined ||
    value === null ||
    value === "" ||
    value?.length === 0
  ) {
    return true;
  } else {
    return false;
  }
};

export default isEmpty;
