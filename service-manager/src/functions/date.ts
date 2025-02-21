export const getFormalDateBy = (time: Date) => {
  const currentHour = time.getHours();
  const currentMin = time.getMinutes();
  const returnDate = new Date(time);
  returnDate.setMilliseconds(0);
  returnDate.setSeconds(0);

  if (currentMin >= 0 && currentMin <= 30) {
    const gap = 30 - currentMin;
    return new Date(returnDate.getTime() + 60000 * gap);
  }

  if (currentMin >= 30 && currentMin < 60) {
    const gap = 60 - currentMin;
    return new Date(returnDate.getTime() + 60000 * gap);
  }

  return returnDate;
};

export const isPastTime = (date: Date) => {
  return Date.now() > date.getTime();
};

export const isValidateTime = (openDate: Date, endDate: Date) => {
  if (isPastTime(openDate)) {
    alert('OPEN 시간을 현재 시간보다 이후로 설정해야 합니다.');
    return false;
  }

  if (isPastTime(endDate)) {
    alert('CLOSE 시간을 현재 시간보다 이후로 설정해야 합니다.');
    return false;
  }

  if (openDate >= endDate) {
    alert('CLOSE 시간을 OPEN 시간보다 이후로 설정해야 합니다.');
    return false;
  }

  return true;
};

export const isValidTime = (time: string) => {
  return !isNaN(Number(time));
};
