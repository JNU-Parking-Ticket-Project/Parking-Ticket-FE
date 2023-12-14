/** 한 글자인 Date 요소에(월, 일) 0을 붙여주는 함수 */
const parseDateFormat = (dateAmount: number) => {
  const dateString = dateAmount.toString();
  return dateString.length === 1 ? '0' + dateString : dateString;
};

/** ISO 8601 표준 Date를 알맞는 포맷으로 변환하는 함수 */
export const parseISO8601ToFormatString = (isoDate: string) => {
  const date = new Date(isoDate);

  // Format : YYYY.MM.DD HH:MM:SS
  return `${date.getFullYear()}.${parseDateFormat(
    date.getMonth() + 1,
  )}.${parseDateFormat(date.getDate())} ${parseDateFormat(
    date.getHours(),
  )}:${parseDateFormat(date.getMinutes())}:${parseDateFormat(
    date.getSeconds(),
  )}`;
};
