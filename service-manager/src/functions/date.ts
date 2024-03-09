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
