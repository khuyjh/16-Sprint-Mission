const formatDate = (dateString: string) => {
  const replacedDate = dateString.replace(/-/g, ". ");
  const targetIndex = replacedDate.indexOf("T");
  const slicedDate = replacedDate.slice(0, targetIndex);

  return slicedDate;
};

export default formatDate;
