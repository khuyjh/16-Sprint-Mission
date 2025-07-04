const calcTimeFromNow = (targetDate: string) => {
  const now = new Date().toISOString();
  const timestampTarget = new Date(targetDate).toISOString();

  const passedYear =
    Number(now.slice(0, 4)) - Number(timestampTarget.slice(0, 4));
  const passedMonth =
    Number(now.slice(5, 7)) - Number(timestampTarget.slice(5, 7));
  const passedDay =
    Number(now.slice(8, 10)) - Number(timestampTarget.slice(8, 10));
  const passedHour =
    Number(now.slice(11, 13)) - Number(timestampTarget.slice(11, 13));
  const passedMinute =
    Number(now.slice(14, 16)) - Number(timestampTarget.slice(14, 16));
  const passedSecond =
    Number(now.slice(17, 19)) - Number(timestampTarget.slice(17, 19));

  if (passedYear > 0) {
    return `${passedYear}년 전`;
  } else if (passedMonth > 0) {
    return `${passedMonth}달 전`;
  } else if (passedDay > 0) {
    return `${passedDay}일 전`;
  } else if (passedHour > 0) {
    return `${passedHour}시간 전`;
  } else if (passedMinute > 0) {
    return `${passedMinute}분 전`;
  } else {
    return `${passedSecond}초 전`;
  }
};

export default calcTimeFromNow;
