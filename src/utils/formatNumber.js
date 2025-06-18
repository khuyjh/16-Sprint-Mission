const formatNumber = (value) => {
  const num = Number(value);
  if (isNaN(num)) {
    return "";
  }
  return num.toLocaleString("ko-kr");
};

export default formatNumber;
