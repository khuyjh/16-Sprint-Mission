const calcTimeFromNow = (targetDate: string) => {
  const now = Date.now();
  const timestampTarget = new Date(targetDate).getTime();

  const passedSecond = Math.floor((now - timestampTarget) / 1000);
  console.log(passedSecond);
  const passedMinute = Math.floor(passedSecond / 60);
  console.log(passedMinute);
  const passedHour = Math.floor(passedMinute / 60);
  console.log(passedHour);
  const passedDay = Math.floor(passedHour / 24);
  console.log(passedDay);
  const passedMonth = Math.floor(passedDay / 30.4375);
  console.log(passedMonth);
  const passedYear = Math.floor(passedMonth / 12);
  console.log(passedYear);

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
